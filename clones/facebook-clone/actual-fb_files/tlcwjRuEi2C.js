if (self.CavalryLogger) {
  CavalryLogger.start_js(["5Bx0Fle"]);
}

__d(
  "CometFeedFavoritesEndOfFeedMessageQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "hasNoStories" },
        ],
        b = [
          {
            alias: null,
            args: [{ kind: "Literal", name: "is_end_of_feed", value: !0 }],
            concreteType: "SeeFirstMigrationContent",
            kind: "LinkedField",
            name: "see_first_migration_content",
            plural: !1,
            selections: [
              {
                args: null,
                documentName: "CometFeedFavoritesEndOfFeedMessageQuery_eof",
                fragmentName: "CometFeedSeeFirstMigrationCard_content",
                fragmentPropName: "content",
                kind: "ModuleImport",
              },
            ],
            storageKey: "see_first_migration_content(is_end_of_feed:true)",
          },
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "is_empty_feed",
                variableName: "hasNoStories",
              },
            ],
            concreteType: "ValueProposition",
            kind: "LinkedField",
            name: "favorites_caught_up_content",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "CometFeedFavoritesEndOfFeedMessageQuery_caughtup",
                fragmentName: "CometFeedFavoritesCaughtUp_content",
                fragmentPropName: "content",
                kind: "ModuleImport",
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
          name: "CometFeedFavoritesEndOfFeedMessageQuery",
          selections: b,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometFeedFavoritesEndOfFeedMessageQuery",
          selections: b,
        },
        params: {
          id: "5242490975822935",
          metadata: {},
          name: "CometFeedFavoritesEndOfFeedMessageQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometModernHomeFeedQuery.graphql",
  ["CometFeedUnit_feedUnit$normalization.graphql", "relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "RELAY_INCREMENTAL_DELIVERY",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "connectionClass",
        },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        h = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        j = { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        k = { defaultValue: null, kind: "LocalArgument", name: "feedStyle" },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        m = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        n = {
          defaultValue: ["TOP_STORIES"],
          kind: "LocalArgument",
          name: "orderby",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "privacySelectorRenderLocation",
        },
        p = { defaultValue: null, kind: "LocalArgument", name: "recentVPVs" },
        q = { defaultValue: null, kind: "LocalArgument", name: "refreshMode" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        s = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        t = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        u = [
          {
            kind: "Variable",
            name: "connection_class",
            variableName: "connectionClass",
          },
          { kind: "Literal", name: "environment", value: "DESKTOP" },
          { kind: "Variable", name: "feed_style", variableName: "feedStyle" },
          { kind: "Literal", name: "first", value: 2 },
          { kind: "Variable", name: "orderby", variableName: "orderby" },
          {
            kind: "Variable",
            name: "recent_vpvs_v2",
            variableName: "recentVPVs",
          },
          {
            kind: "Variable",
            name: "refresh_mode",
            variableName: "refreshMode",
          },
          { kind: "Literal", name: "site", value: "comet" },
        ],
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        x = [w],
        y = [
          {
            alias: null,
            args: null,
            concreteType: "QuickPromotionFeedUnitItem",
            kind: "LinkedField",
            name: "quick_promotion_items",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "QuickPromotion",
                kind: "LinkedField",
                name: "quick_promotion",
                plural: !1,
                selections: x,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [
            a,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
          ],
          kind: "Fragment",
          metadata: null,
          name: "CometModernHomeFeedQuery",
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
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometNewsFeed_viewer",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [
            d,
            i,
            e,
            f,
            g,
            h,
            j,
            k,
            l,
            m,
            o,
            s,
            t,
            q,
            r,
            a,
            n,
            c,
            p,
          ],
          kind: "Operation",
          name: "CometModernHomeFeedQuery",
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
                  args: u,
                  concreteType: "NewsFeedConnection",
                  kind: "LinkedField",
                  name: "news_feed",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "NewsFeedInject",
                      kind: "LinkedField",
                      name: "injected_stories",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName: "CometNewsFeed_viewer",
                          fragmentName: "CometInjectedStoriesNotice_edge",
                          fragmentPropName: "edge",
                          kind: "ModuleImport",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      if: "RELAY_INCREMENTAL_DELIVERY",
                      kind: "Stream",
                      label:
                        "CometNewsFeed_viewer$stream$CometNewsFeed_viewer_news_feed",
                      metadata: null,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "NewsFeedEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "category",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "deduplication_key",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "sponsored_auction_distance",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                v,
                                {
                                  kind: "TypeDiscriminator",
                                  abstractKey: "__isFeedUnit",
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "SponsoredData",
                                      kind: "LinkedField",
                                      name: "sponsored_data",
                                      plural: !1,
                                      selections: [v],
                                      storageKey: null,
                                    },
                                  ],
                                  type: "Story",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: y,
                                  type: "QuickPromotionFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: y,
                                  type: "QuickPromotionNativeTemplateFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: x,
                                  type: "Node",
                                  abstractKey: "__isNode",
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: x,
                                  type: "CommunityChatFeedObject",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: x,
                                  type: "CommunityTabNewJoinFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: x,
                                  type: "CommunityTabTrendingPOGFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: x,
                                  type: "XFBGroupsTabSuggestedGroupSetFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: x,
                                  type: "XFBGroupsTabSuggestedGroupSetsFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  args: null,
                                  fragment: b(
                                    "CometFeedUnit_feedUnit$normalization.graphql"
                                  ),
                                  kind: "FragmentSpread",
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "FeedBackendData",
                              kind: "LinkedField",
                              name: "feed_backend_data",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "qid",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "original_qid",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "vsid",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "vspos",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "should_recent_vpv_fetch_tracking_data",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "cursor",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      useCustomizedBatch: null,
                    },
                    {
                      if: "RELAY_INCREMENTAL_DELIVERY",
                      kind: "Defer",
                      label:
                        "CometNewsFeed_viewer$defer$CometNewsFeed_viewer_news_feed$page_info",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "PageInfo",
                          kind: "LinkedField",
                          name: "page_info",
                          plural: !1,
                          selections: [
                            v,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "end_cursor",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "has_next_page",
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
                {
                  alias: null,
                  args: u,
                  filters: ["orderby"],
                  handle: "comet_news_feed",
                  key: "CometNewsFeed_viewer_news_feed",
                  kind: "LinkedHandle",
                  name: "news_feed",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [
                    v,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    w,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_have_friends",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "AllFriendsConnection",
                  kind: "LinkedField",
                  name: "all_friends",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "friend_count",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_fb_employee",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4922609094421619",
          metadata: {},
          name: "CometModernHomeFeedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "CometNewsFeedPaginationQuery.graphql",
  ["CometFeedUnit_feedUnit$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "RELAY_INCREMENTAL_DELIVERY",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "UFI2CommentsProvider_commentsKey",
          },
          { defaultValue: null, kind: "LocalArgument", name: "clientQueryId" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "connectionClass",
          },
          { defaultValue: 2, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "displayCommentsContextEnableComment",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "displayCommentsContextIsAdPreview",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "displayCommentsContextIsAggregatedShare",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "displayCommentsContextIsStorySet",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "displayCommentsFeedbackContext",
          },
          { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
          { defaultValue: null, kind: "LocalArgument", name: "feedStyle" },
          { defaultValue: null, kind: "LocalArgument", name: "feedbackSource" },
          { defaultValue: null, kind: "LocalArgument", name: "focusCommentID" },
          { defaultValue: null, kind: "LocalArgument", name: "orderby" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "privacySelectorRenderLocation",
          },
          { defaultValue: null, kind: "LocalArgument", name: "recentVPVs" },
          { defaultValue: null, kind: "LocalArgument", name: "refreshMode" },
          { defaultValue: null, kind: "LocalArgument", name: "renderLocation" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "useDefaultActor",
          },
        ],
        c = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          {
            kind: "Variable",
            name: "client_query_id",
            variableName: "clientQueryId",
          },
          {
            kind: "Variable",
            name: "connection_class",
            variableName: "connectionClass",
          },
          { kind: "Literal", name: "environment", value: "DESKTOP" },
          { kind: "Variable", name: "feed_style", variableName: "feedStyle" },
          { kind: "Variable", name: "first", variableName: "count" },
          { kind: "Variable", name: "orderby", variableName: "orderby" },
          {
            kind: "Variable",
            name: "recent_vpvs_v2",
            variableName: "recentVPVs",
          },
          {
            kind: "Variable",
            name: "refresh_mode",
            variableName: "refreshMode",
          },
          { kind: "Literal", name: "site", value: "comet" },
        ],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        f = [e],
        g = [
          {
            alias: null,
            args: null,
            concreteType: "QuickPromotionFeedUnitItem",
            kind: "LinkedField",
            name: "quick_promotion_items",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "QuickPromotion",
                kind: "LinkedField",
                name: "quick_promotion",
                plural: !1,
                selections: f,
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
          name: "CometNewsFeedPaginationQuery",
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
                  args: [
                    {
                      kind: "Variable",
                      name: "clientQueryId",
                      variableName: "clientQueryId",
                    },
                    { kind: "Variable", name: "count", variableName: "count" },
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "CometNewsFeed_viewer",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometNewsFeedPaginationQuery",
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
                  args: c,
                  concreteType: "NewsFeedConnection",
                  kind: "LinkedField",
                  name: "news_feed",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "NewsFeedInject",
                      kind: "LinkedField",
                      name: "injected_stories",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName: "CometNewsFeed_viewer",
                          fragmentName: "CometInjectedStoriesNotice_edge",
                          fragmentPropName: "edge",
                          kind: "ModuleImport",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      if: "RELAY_INCREMENTAL_DELIVERY",
                      kind: "Stream",
                      label:
                        "CometNewsFeed_viewer$stream$CometNewsFeed_viewer_news_feed",
                      metadata: null,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "NewsFeedEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "category",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "deduplication_key",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "sponsored_auction_distance",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                d,
                                {
                                  kind: "TypeDiscriminator",
                                  abstractKey: "__isFeedUnit",
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "SponsoredData",
                                      kind: "LinkedField",
                                      name: "sponsored_data",
                                      plural: !1,
                                      selections: [d],
                                      storageKey: null,
                                    },
                                  ],
                                  type: "Story",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: g,
                                  type: "QuickPromotionFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: g,
                                  type: "QuickPromotionNativeTemplateFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: f,
                                  type: "Node",
                                  abstractKey: "__isNode",
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: f,
                                  type: "CommunityChatFeedObject",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: f,
                                  type: "CommunityTabNewJoinFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: f,
                                  type: "CommunityTabTrendingPOGFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: f,
                                  type: "XFBGroupsTabSuggestedGroupSetFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: f,
                                  type: "XFBGroupsTabSuggestedGroupSetsFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  args: null,
                                  fragment: b(
                                    "CometFeedUnit_feedUnit$normalization.graphql"
                                  ),
                                  kind: "FragmentSpread",
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "FeedBackendData",
                              kind: "LinkedField",
                              name: "feed_backend_data",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "qid",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "original_qid",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "vsid",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "vspos",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "should_recent_vpv_fetch_tracking_data",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "cursor",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      useCustomizedBatch: null,
                    },
                    {
                      if: "RELAY_INCREMENTAL_DELIVERY",
                      kind: "Defer",
                      label:
                        "CometNewsFeed_viewer$defer$CometNewsFeed_viewer_news_feed$page_info",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "PageInfo",
                          kind: "LinkedField",
                          name: "page_info",
                          plural: !1,
                          selections: [
                            d,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "end_cursor",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "has_next_page",
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
                {
                  alias: null,
                  args: c,
                  filters: ["orderby"],
                  handle: "comet_news_feed",
                  key: "CometNewsFeed_viewer_news_feed",
                  kind: "LinkedHandle",
                  name: "news_feed",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [
                    d,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    e,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_have_friends",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "AllFriendsConnection",
                  kind: "LinkedField",
                  name: "all_friends",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "friend_count",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_fb_employee",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4422056264525185",
          metadata: {},
          name: "CometNewsFeedPaginationQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNewsFeedUnit_edge.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometNewsFeedUnit_edge",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "category",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedUnit_feedUnit",
            },
          ],
          storageKey: null,
        },
        {
          kind: "InlineDataFragmentSpread",
          name: "CometNewsFeedVPVDStore_newsFeedEdge",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "FeedBackendData",
              kind: "LinkedField",
              name: "feed_backend_data",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "qid",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "original_qid",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "vsid",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "vspos",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_recent_vpv_fetch_tracking_data",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useLogCometFeedUnitRenderAttemptEvent_newsFeedEdge",
        },
      ],
      type: "NewsFeedEdge",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometNewsFeed_viewer.graphql",
  ["CometNewsFeedPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["news_feed"],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "RELAY_INCREMENTAL_DELIVERY" },
          { kind: "RootArgument", name: "UFI2CommentsProvider_commentsKey" },
          { defaultValue: null, kind: "LocalArgument", name: "clientQueryId" },
          { kind: "RootArgument", name: "connectionClass" },
          { defaultValue: 2, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { kind: "RootArgument", name: "displayCommentsContextEnableComment" },
          { kind: "RootArgument", name: "displayCommentsContextIsAdPreview" },
          {
            kind: "RootArgument",
            name: "displayCommentsContextIsAggregatedShare",
          },
          { kind: "RootArgument", name: "displayCommentsContextIsStorySet" },
          { kind: "RootArgument", name: "displayCommentsFeedbackContext" },
          { kind: "RootArgument", name: "feedLocation" },
          { kind: "RootArgument", name: "feedStyle" },
          { kind: "RootArgument", name: "feedbackSource" },
          { kind: "RootArgument", name: "focusCommentID" },
          { kind: "RootArgument", name: "orderby" },
          { kind: "RootArgument", name: "privacySelectorRenderLocation" },
          { kind: "RootArgument", name: "recentVPVs" },
          { kind: "RootArgument", name: "refreshMode" },
          { kind: "RootArgument", name: "renderLocation" },
          { kind: "RootArgument", name: "scale" },
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            {
              count: "count",
              cursor: "cursor",
              direction: "forward",
              path: a,
              stream: !0,
            },
          ],
          refetch: {
            connection: {
              forward: { count: "count", cursor: "cursor" },
              backward: null,
              path: a,
            },
            fragmentPathInResult: ["viewer"],
            operation: b("CometNewsFeedPaginationQuery.graphql"),
          },
        },
        name: "CometNewsFeed_viewer",
        selections: [
          {
            alias: "news_feed",
            args: [
              { kind: "Variable", name: "orderby", variableName: "orderby" },
            ],
            concreteType: "NewsFeedConnection",
            kind: "LinkedField",
            name: "__CometNewsFeed_viewer_news_feed_comet_news_feed",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "NewsFeedInject",
                kind: "LinkedField",
                name: "injected_stories",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName: "CometNewsFeed_viewer",
                    fragmentName: "CometInjectedStoriesNotice_edge",
                    fragmentPropName: "edge",
                    kind: "ModuleImport",
                  },
                ],
                storageKey: null,
              },
              {
                kind: "Stream",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "NewsFeedEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "category",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "deduplication_key",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "sponsored_auction_distance",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          c,
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometFeedUnitErrorBoundary_feedUnit",
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "FeedBackendData",
                        kind: "LinkedField",
                        name: "feed_backend_data",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "qid",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometNewsFeedUnit_edge",
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cursor",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
              },
              {
                kind: "Defer",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "PageInfo",
                    kind: "LinkedField",
                    name: "page_info",
                    plural: !1,
                    selections: [
                      c,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "end_cursor",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "has_next_page",
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
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "actor",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_have_friends",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "AllFriendsConnection",
            kind: "LinkedField",
            name: "all_friends",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "friend_count",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_fb_employee",
            storageKey: null,
          },
        ],
        type: "Viewer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useLogCometFeedUnitRenderAttemptEvent_newsFeedEdge.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useLogCometFeedUnitRenderAttemptEvent_newsFeedEdge",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "deduplication_key",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "category",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useCometFeedUnitEventLogger_feedUnit",
            },
          ],
          storageKey: null,
        },
      ],
      type: "NewsFeedEdge",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometHomeContactGroupsContainerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "scale" }],
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
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
          name: "name",
          storageKey: null,
        },
        e = { kind: "Literal", name: "height", value: 36 },
        f = { kind: "Literal", name: "width", value: 36 },
        g = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometHomeContactGroupsContainerQuery",
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
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometHomeContactGroups_viewer",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometHomeContactGroupsContainerQuery",
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [
                    b,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "should_hide_group_conversations_list",
                          storageKey: null,
                        },
                      ],
                      type: "User",
                      abstractKey: null,
                    },
                    c,
                  ],
                  storageKey: null,
                },
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
                    c,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "chat_sidebar_is_collapsed",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [{ kind: "Literal", name: "last", value: 10 }],
                  concreteType: "ViewerMessageThreadsConnection",
                  kind: "LinkedField",
                  name: "message_threads",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "ViewerMessageThreadsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "MessageThread",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "MessageThreadKey",
                              kind: "LinkedField",
                              name: "thread_key",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "thread_fbid",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "updated_time",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "MessageThreadCustomization",
                              kind: "LinkedField",
                              name: "customization_info",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "MessageThreadParticipantCustomization",
                                  kind: "LinkedField",
                                  name: "participant_customizations",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "nickname",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "participant_id",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                c,
                              ],
                              storageKey: null,
                            },
                            d,
                            {
                              alias: null,
                              args: [e, f],
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "image",
                              plural: !1,
                              selections: g,
                              storageKey: "image(height:36,width:36)",
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "thread_type",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "AllMessagingParticipantsOfThreadConnection",
                              kind: "LinkedField",
                              name: "all_participants",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "AllMessagingParticipantsOfThreadEdge",
                                  kind: "LinkedField",
                                  name: "edges",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "MessagingParticipant",
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
                                            b,
                                            c,
                                            d,
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "short_name",
                                                  storageKey: null,
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
                                                  ],
                                                },
                                              ],
                                              type: "User",
                                              abstractKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: [
                                                e,
                                                {
                                                  kind: "Variable",
                                                  name: "scale",
                                                  variableName: "scale",
                                                },
                                                f,
                                              ],
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "profile_picture",
                                              plural: !1,
                                              selections: g,
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
                      storageKey: null,
                    },
                  ],
                  storageKey: "message_threads(last:10)",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4724975894185258",
          metadata: {},
          name: "CometHomeContactGroupsContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "CometHomeContactGroups_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        b = { kind: "Literal", name: "height", value: 36 },
        c = { kind: "Literal", name: "width", value: 36 },
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "CometHomeContactGroups_viewer",
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
                    name: "should_hide_group_conversations_list",
                    storageKey: null,
                  },
                ],
                type: "User",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
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
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "chat_sidebar_is_collapsed",
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "last", value: 10 }],
            concreteType: "ViewerMessageThreadsConnection",
            kind: "LinkedField",
            name: "message_threads",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "ViewerMessageThreadsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "MessageThread",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "MessageThreadKey",
                        kind: "LinkedField",
                        name: "thread_key",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "thread_fbid",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "updated_time",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "MessageThreadCustomization",
                        kind: "LinkedField",
                        name: "customization_info",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType:
                              "MessageThreadParticipantCustomization",
                            kind: "LinkedField",
                            name: "participant_customizations",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "nickname",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "participant_id",
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      a,
                      {
                        alias: null,
                        args: [b, c],
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "image",
                        plural: !1,
                        selections: d,
                        storageKey: "image(height:36,width:36)",
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "thread_type",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType:
                          "AllMessagingParticipantsOfThreadConnection",
                        kind: "LinkedField",
                        name: "all_participants",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType:
                              "AllMessagingParticipantsOfThreadEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "MessagingParticipant",
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
                                        name: "id",
                                        storageKey: null,
                                      },
                                      a,
                                      {
                                        kind: "InlineFragment",
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "short_name",
                                            storageKey: null,
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
                                            ],
                                          },
                                        ],
                                        type: "User",
                                        abstractKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: [
                                          b,
                                          {
                                            kind: "Variable",
                                            name: "scale",
                                            variableName: "scale",
                                          },
                                          c,
                                        ],
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "profile_picture",
                                        plural: !1,
                                        selections: d,
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
            storageKey: "message_threads(last:10)",
          },
        ],
        type: "Viewer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometHomeContactListItems_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "count" },
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldEnableMWStoriesEntrypoint",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometHomeContactListItems_viewer",
      selections: [
        {
          alias: null,
          args: [{ kind: "Variable", name: "count", variableName: "count" }],
          concreteType: null,
          kind: "LinkedField",
          name: "chat_sidebar_contacts",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
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
                  ],
                },
              ],
              type: "User",
              abstractKey: null,
            },
            {
              args: [
                {
                  kind: "Variable",
                  name: "shouldEnableMWStoriesEntrypoint",
                  variableName: "shouldEnableMWStoriesEntrypoint",
                },
              ],
              kind: "FragmentSpread",
              name: "MWChatContact_profile",
            },
          ],
          storageKey: null,
        },
        { args: null, kind: "FragmentSpread", name: "MWChatContact_viewer" },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometHomeContactsContainerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "numContactsToFetch",
          },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "shouldEnableMWStoriesEntrypoint",
          },
        ],
        b = {
          kind: "Variable",
          name: "count",
          variableName: "numContactsToFetch",
        },
        c = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_hide_contact_list",
              storageKey: null,
            },
          ],
          type: "User",
          abstractKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        g = [
          f,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "val",
            storageKey: null,
          },
        ],
        h = {
          alias: null,
          args: null,
          concreteType: "GHLScramblingProperty",
          kind: "LinkedField",
          name: "attributes",
          plural: !0,
          selections: g,
          storageKey: null,
        };
      g = {
        alias: null,
        args: null,
        concreteType: "GHLScramblingProperty",
        kind: "LinkedField",
        name: "styles",
        plural: !0,
        selections: g,
        storageKey: null,
      };
      var i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tag",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometHomeContactsContainerQuery",
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
                  args: [
                    b,
                    {
                      kind: "Variable",
                      name: "shouldEnableMWStoriesEntrypoint",
                      variableName: "shouldEnableMWStoriesEntrypoint",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "CometHomeContacts_viewer",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [c],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometHomeContactsContainerQuery",
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
                  args: [b],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "chat_sidebar_contacts",
                  plural: !0,
                  selections: [
                    d,
                    e,
                    { kind: "TypeDiscriminator", abstractKey: "__isProfile" },
                    {
                      kind: "InlineFragment",
                      selections: [
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
                        {
                          condition: "shouldEnableMWStoriesEntrypoint",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [
                            {
                              alias: null,
                              args: [
                                { kind: "Literal", name: "first", value: 1 },
                              ],
                              concreteType:
                                "DirectInboxBroadcastBucketConnection",
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
                                    e,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Story",
                                      kind: "LinkedField",
                                      name: "first_story_to_show",
                                      plural: !1,
                                      selections: [
                                        e,
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
                      ],
                      type: "User",
                      abstractKey: null,
                    },
                    f,
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "height", value: 36 },
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
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
                  storageKey: null,
                },
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
                    e,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "chat_sidebar_is_collapsed",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "GHLScramblingNode",
                  kind: "LinkedField",
                  name: "ghl_label",
                  plural: !1,
                  selections: [
                    h,
                    g,
                    i,
                    j,
                    {
                      alias: null,
                      args: null,
                      concreteType: "GHLScramblingNode",
                      kind: "LinkedField",
                      name: "children",
                      plural: !0,
                      selections: [
                        h,
                        g,
                        i,
                        j,
                        {
                          alias: null,
                          args: null,
                          concreteType: "GHLScramblingNode",
                          kind: "LinkedField",
                          name: "children",
                          plural: !0,
                          selections: [h, g, i, j],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "JoinableVideoChatsViewerFields",
                  kind: "LinkedField",
                  name: "joinable_video_chats",
                  plural: !1,
                  selections: [
                    {
                      alias: "new_room_fbt",
                      args: [
                        { kind: "Literal", name: "type", value: "NEW_ROOM" },
                      ],
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "joinable_video_chats_string",
                      plural: !1,
                      selections: [i],
                      storageKey:
                        'joinable_video_chats_string(type:"NEW_ROOM")',
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [d, c, e],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "6598200156921223",
          metadata: {},
          name: "CometHomeContactsContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "CometHomeContacts_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Variable", name: "count", variableName: "count" };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "count" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "shouldEnableMWStoriesEntrypoint",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometHomeContacts_viewer",
        selections: [
          {
            alias: null,
            args: [a],
            concreteType: null,
            kind: "LinkedField",
            name: "chat_sidebar_contacts",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
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
                    ],
                  },
                ],
                type: "User",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
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
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "chat_sidebar_is_collapsed",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "GHLScramblingNode",
            kind: "LinkedField",
            name: "ghl_label",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometGHLScrambledLabel_label",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "JoinableVideoChatsViewerFields",
            kind: "LinkedField",
            name: "joinable_video_chats",
            plural: !1,
            selections: [
              {
                alias: "new_room_fbt",
                args: [{ kind: "Literal", name: "type", value: "NEW_ROOM" }],
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "joinable_video_chats_string",
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
                storageKey: 'joinable_video_chats_string(type:"NEW_ROOM")',
              },
            ],
            storageKey: null,
          },
          {
            args: [
              a,
              {
                kind: "Variable",
                name: "shouldEnableMWStoriesEntrypoint",
                variableName: "shouldEnableMWStoriesEntrypoint",
              },
            ],
            kind: "FragmentSpread",
            name: "CometHomeContactListItems_viewer",
          },
        ],
        type: "Viewer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometHomeRightSideEgoContainer_egoPanel.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometHomeRightSideEgoContainer_egoPanel",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometHomeRightSideEgo_viewer",
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
  "CometHomeRightSideEgoRefetchQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: 0, kind: "LocalArgument", name: "refresh_num" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = {
          kind: "Variable",
          name: "refresh_num",
          variableName: "refresh_num",
        },
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometHomeRightSideEgoRefetchQuery",
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
                  args: [b],
                  kind: "FragmentSpread",
                  name: "CometHomeRightSideEgo_viewer",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometHomeRightSideEgoRefetchQuery",
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
                  alias: "sideFeed",
                  args: [
                    { kind: "Literal", name: "environment", value: "COMET" },
                    { kind: "Literal", name: "query_ego_units", value: !0 },
                    b,
                  ],
                  concreteType: "SideFeedConnection",
                  kind: "LinkedField",
                  name: "side_feed",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
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
                          selections: [
                            {
                              args: null,
                              documentName: "CometHomeRightSideEgo_viewer",
                              fragmentName:
                                "CometAdsSideFeedUnit_adsSideFeedUnit",
                              fragmentPropName: "adsSideFeedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "AdsSideFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: c,
                          type: "Node",
                          abstractKey: "__isNode",
                        },
                        {
                          kind: "InlineFragment",
                          selections: c,
                          type: "AdsSideFeedUnitItem",
                          abstractKey: null,
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
        },
        params: {
          id: "6191033267575188",
          metadata: {},
          name: "CometHomeRightSideEgoRefetchQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometHomeRightSideEgo_viewer.graphql",
  ["CometHomeRightSideEgoRefetchQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: 0, kind: "LocalArgument", name: "refresh_num" },
        { kind: "RootArgument", name: "scale" },
      ],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: ["viewer"],
          operation: b("CometHomeRightSideEgoRefetchQuery.graphql"),
        },
      },
      name: "CometHomeRightSideEgo_viewer",
      selections: [
        {
          alias: "sideFeed",
          args: [
            { kind: "Literal", name: "environment", value: "COMET" },
            { kind: "Literal", name: "query_ego_units", value: !0 },
            {
              kind: "Variable",
              name: "refresh_num",
              variableName: "refresh_num",
            },
          ],
          concreteType: "SideFeedConnection",
          kind: "LinkedField",
          name: "side_feed",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometHomeRightSideEgo_viewer",
                      fragmentName: "CometAdsSideFeedUnit_adsSideFeedUnit",
                      fragmentPropName: "adsSideFeedUnit",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "AdsSideFeedUnit",
                  abstractKey: null,
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
  "CometRightSideHeaderCardsQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "refresh_num" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = { kind: "Literal", name: "environment", value: "COMET" },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
        ],
        e = {
          kind: "InlineFragment",
          selections: d,
          type: "Node",
          abstractKey: "__isNode",
        };
      d = {
        kind: "InlineFragment",
        selections: d,
        type: "AdsSideFeedUnitItem",
        abstractKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometRightSideHeaderCardsQuery",
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
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometRightSideHeaderCards_viewerSideFeed",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometHomeRightSideEgoContainer_egoPanel",
                },
              ],
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "PagesCometHomeAdminContainer_query",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometRightSideHeaderCardsQuery",
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
                  args: [
                    b,
                    { kind: "Literal", name: "query_ego_units", value: !1 },
                    {
                      kind: "Variable",
                      name: "refresh_num",
                      variableName: "refresh_num",
                    },
                  ],
                  concreteType: "SideFeedConnection",
                  kind: "LinkedField",
                  name: "side_feed",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [
                        c,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometRightSideHeaderCards_viewerSideFeed",
                              fragmentName:
                                "PagesCometHomeAdminContainer_pagesPanel",
                              fragmentPropName: "pagesPanel",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "PagesSideFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometRightSideHeaderCards_viewerSideFeed",
                              fragmentName:
                                "FriendingCometHomeInlineRHCContainer_friendsPanel",
                              fragmentPropName: "friendsPanel",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "FriendingRequestsSideFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometRightSideHeaderCards_viewerSideFeed",
                              fragmentName:
                                "CometHomeRemindersContainer_reminderPanel",
                              fragmentPropName: "reminderPanel",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "RemindersSideFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometRightSideHeaderCards_viewerSideFeed",
                              fragmentName:
                                "CometHomeRightSideWidgetContainer_widgetContainer",
                              fragmentPropName: "widgetContainer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometHomeSideFeedWidgetContainer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometRightSideHeaderCards_viewerSideFeed",
                              fragmentName:
                                "CometHomeRightSideWidgetContainerWithSeeMore_widgetContainer",
                              fragmentPropName: "widgetContainer",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometHomeSideFeedWidgetContainerWithSeeMore",
                          abstractKey: null,
                        },
                        e,
                        d,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: "sideFeed",
                  args: [
                    b,
                    { kind: "Literal", name: "query_ego_units", value: !0 },
                    { kind: "Literal", name: "refresh_num", value: 0 },
                  ],
                  concreteType: "SideFeedConnection",
                  kind: "LinkedField",
                  name: "side_feed",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [
                        c,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "CometHomeRightSideEgo_viewer",
                              fragmentName:
                                "CometAdsSideFeedUnit_adsSideFeedUnit",
                              fragmentPropName: "adsSideFeedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "AdsSideFeedUnit",
                          abstractKey: null,
                        },
                        e,
                        d,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'side_feed(environment:"COMET",query_ego_units:true,refresh_num:0)',
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "logout_whitelist",
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4320910721298523",
          metadata: {},
          name: "CometRightSideHeaderCardsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "CometRightSideHeaderCards_viewerSideFeed.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "refresh_num" }],
      kind: "Fragment",
      metadata: null,
      name: "CometRightSideHeaderCards_viewerSideFeed",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Literal", name: "environment", value: "COMET" },
            { kind: "Literal", name: "query_ego_units", value: !1 },
            {
              kind: "Variable",
              name: "refresh_num",
              variableName: "refresh_num",
            },
          ],
          concreteType: "SideFeedConnection",
          kind: "LinkedField",
          name: "side_feed",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
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
                  selections: [
                    {
                      args: null,
                      documentName: "CometRightSideHeaderCards_viewerSideFeed",
                      fragmentName: "PagesCometHomeAdminContainer_pagesPanel",
                      fragmentPropName: "pagesPanel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "PagesSideFeedUnit",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometRightSideHeaderCards_viewerSideFeed",
                      fragmentName:
                        "FriendingCometHomeInlineRHCContainer_friendsPanel",
                      fragmentPropName: "friendsPanel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "FriendingRequestsSideFeedUnit",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometRightSideHeaderCards_viewerSideFeed",
                      fragmentName: "CometHomeRemindersContainer_reminderPanel",
                      fragmentPropName: "reminderPanel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "RemindersSideFeedUnit",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometRightSideHeaderCards_viewerSideFeed",
                      fragmentName:
                        "CometHomeRightSideWidgetContainer_widgetContainer",
                      fragmentPropName: "widgetContainer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometHomeSideFeedWidgetContainer",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometRightSideHeaderCards_viewerSideFeed",
                      fragmentName:
                        "CometHomeRightSideWidgetContainerWithSeeMore_widgetContainer",
                      fragmentPropName: "widgetContainer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometHomeSideFeedWidgetContainerWithSeeMore",
                  abstractKey: null,
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
  "CometFeedInlineComposerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "scale" }],
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
          name: "has_professional_features_for_watch",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometFeedInlineComposerQuery",
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [
                    {
                      kind: "InlineFragment",
                      selections: [
                        b,
                        c,
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometFeedInlineComposerPressableProfilePic_profile",
                        },
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometFeedInlineComposerWOYM_profile",
                        },
                      ],
                      type: "User",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometFeedInlineComposerQuery",
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    b,
                    {
                      kind: "InlineFragment",
                      selections: [
                        c,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "short_name",
                          storageKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: [
                                { kind: "Literal", name: "height", value: 40 },
                                {
                                  kind: "Variable",
                                  name: "scale",
                                  variableName: "scale",
                                },
                                { kind: "Literal", name: "width", value: 40 },
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
                              kind: "ScalarField",
                              name: "name",
                              storageKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "url",
                                  storageKey: null,
                                },
                              ],
                              type: "Entity",
                              abstractKey: "__isEntity",
                            },
                          ],
                          type: "Profile",
                          abstractKey: "__isProfile",
                        },
                      ],
                      type: "User",
                      abstractKey: null,
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
          id: "4050599581690002",
          metadata: {},
          name: "CometFeedInlineComposerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "VideoMeetupCreationDialogContainerCometQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5579713572104108",
        metadata: {},
        name: "VideoMeetupCreationDialogContainerCometQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "RoomsJoinDialogMoreMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3139832112696110",
        metadata: {},
        name: "RoomsJoinDialogMoreMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "RoomsExplanationDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3022353014532684",
        metadata: {},
        name: "RoomsExplanationDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "useRoomsMarkAsInterestedMutation.graphql",
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
          args: [{ kind: "Literal", name: "surface", value: "NF_TRAY" }],
          kind: "ScalarField",
          name: "room_card_cta_enum",
          storageKey: 'room_card_cta_enum(surface:"NF_TRAY")',
        },
        d = [
          {
            kind: "Literal",
            name: "query_type",
            value: "FRIEND_INCLUDING_SELF",
          },
        ],
        e = {
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
          name: "useRoomsMarkAsInterestedMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType:
                "JoinableVideoChatsUpdateInterestedJoinersResponsePayload",
              kind: "LinkedField",
              name: "joinable_video_chats_update_interested_joiners",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerCallInviteLink",
                  kind: "LinkedField",
                  name: "messenger_call_invite_link",
                  plural: !1,
                  selections: [
                    c,
                    {
                      alias: null,
                      args: d,
                      concreteType:
                        "MessengerCallInviteLinkInterestedParticipantsConnection",
                      kind: "LinkedField",
                      name: "interested_participants",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            {
                              kind: "InlineFragment",
                              selections: [
                                e,
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "RoomsJoinInterestedListItem_user",
                                },
                              ],
                              type: "User",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'interested_participants(query_type:"FRIEND_INCLUDING_SELF")',
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
          name: "useRoomsMarkAsInterestedMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType:
                "JoinableVideoChatsUpdateInterestedJoinersResponsePayload",
              kind: "LinkedField",
              name: "joinable_video_chats_update_interested_joiners",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerCallInviteLink",
                  kind: "LinkedField",
                  name: "messenger_call_invite_link",
                  plural: !1,
                  selections: [
                    c,
                    {
                      alias: null,
                      args: d,
                      concreteType:
                        "MessengerCallInviteLinkInterestedParticipantsConnection",
                      kind: "LinkedField",
                      name: "interested_participants",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "__typename",
                              storageKey: null,
                            },
                            e,
                            {
                              kind: "InlineFragment",
                              selections: [
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
                                    {
                                      kind: "Literal",
                                      name: "height",
                                      value: 160,
                                    },
                                    {
                                      kind: "Variable",
                                      name: "scale",
                                      variableName: "scale",
                                    },
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 160,
                                    },
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
                              type: "User",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'interested_participants(query_type:"FRIEND_INCLUDING_SELF")',
                    },
                    e,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "2984287548284549",
          metadata: {},
          name: "useRoomsMarkAsInterestedMutation",
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
  "useRoomsMarkAsInterested_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useRoomsMarkAsInterested_fbts",
      selections: [
        {
          alias: "interested_hint_text",
          args: [
            {
              kind: "Literal",
              name: "type",
              value: "INTERESTED_NOTIF_HINT_TEXT",
            },
          ],
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "joinable_video_chats_string",
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
          storageKey:
            'joinable_video_chats_string(type:"INTERESTED_NOTIF_HINT_TEXT")',
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
  "useRoomsMarkAsInterested_room.graphql",
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
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "useRoomsMarkAsInterested_room",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "link_url",
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "surface", value: "NF_TRAY" }],
            kind: "ScalarField",
            name: "room_card_cta_enum",
            storageKey: 'room_card_cta_enum(surface:"NF_TRAY")',
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "active_call_participant_count",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "link_viewer",
            plural: !1,
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
                alias: null,
                args: [
                  { kind: "Literal", name: "height", value: 160 },
                  { kind: "Variable", name: "scale", variableName: "scale" },
                  { kind: "Literal", name: "width", value: 160 },
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
            storageKey: null,
          },
        ],
        type: "MessengerCallInviteLink",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useJoinableVideoChatsDidViewEducationalQPMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "JoinableVideoChatsDidViewEducationalQpResponsePayload",
            kind: "LinkedField",
            name: "joinable_video_chats_did_view_educational_qp",
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
          name: "useJoinableVideoChatsDidViewEducationalQPMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useJoinableVideoChatsDidViewEducationalQPMutation",
          selections: b,
        },
        params: {
          id: "2786793821356319",
          metadata: {},
          name: "useJoinableVideoChatsDidViewEducationalQPMutation",
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
  "useJoinableVideoChatsOptInMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "JoinableVideoChatsOptInResponsePayload",
            kind: "LinkedField",
            name: "joinable_video_chats_opt_in",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
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
          name: "useJoinableVideoChatsOptInMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useJoinableVideoChatsOptInMutation",
          selections: b,
        },
        params: {
          id: "3774962352575535",
          metadata: {},
          name: "useJoinableVideoChatsOptInMutation",
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
  "RoomsQuickPromotionComet_messengerRoomsStatusOptInPromotionRenderingStrategy.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "RoomsQuickPromotionComet_messengerRoomsStatusOptInPromotionRenderingStrategy",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          {
            alias: "promotion_title",
            args: [
              { kind: "Literal", name: "type", value: "FEED_UPSELL_TITLE" },
            ],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: a,
            storageKey: 'joinable_video_chats_string(type:"FEED_UPSELL_TITLE")',
          },
          {
            alias: "promotion_content",
            args: [
              { kind: "Literal", name: "type", value: "FEED_UPSELL_CONTENT" },
            ],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: a,
            storageKey:
              'joinable_video_chats_string(type:"FEED_UPSELL_CONTENT")',
          },
          {
            alias: "promotion_primary_button_text",
            args: [
              {
                kind: "Literal",
                name: "type",
                value: "FEED_UPSELL_BUTTON_STRING",
              },
            ],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: a,
            storageKey:
              'joinable_video_chats_string(type:"FEED_UPSELL_BUTTON_STRING")',
          },
          {
            alias: "promotion_secondary_button_text",
            args: [
              {
                kind: "Literal",
                name: "type",
                value: "FEED_UPSELL_SECONDARY_BUTTON_STRING",
              },
            ],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: a,
            storageKey:
              'joinable_video_chats_string(type:"FEED_UPSELL_SECONDARY_BUTTON_STRING")',
          },
        ],
        type: "MessengerRoomsStatusOptInPromotionRenderingStrategy",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useRoomsCreateTraySubscriptionSubscription.graphql",
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
        d = [c],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        f = { kind: "Variable", name: "scale", variableName: "scale" },
        g = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        i = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 160 },
            f,
            { kind: "Literal", name: "width", value: 160 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: g,
          storageKey: null,
        },
        j = [i];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useRoomsCreateTraySubscriptionSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType:
                "JoinableVideoChatsRoomCreateSubscribeResponsePayload",
              kind: "LinkedField",
              name: "joinable_video_chats_room_create_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerCallInviteLink",
                  kind: "LinkedField",
                  name: "link",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "link_owner",
                      plural: !1,
                      selections: d,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "link_container",
                      plural: !1,
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: d,
                          type: "Group",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "RoomFriendTileCollapsed_room",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "VideoChatTileCard_link",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "RoomFriendWithActiveRoomTileCardCollapsed_room",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "VideoChatSelfTileCard_link",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useRoomsCreateTraySubscriptionSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType:
                "JoinableVideoChatsRoomCreateSubscribeResponsePayload",
              kind: "LinkedField",
              name: "joinable_video_chats_room_create_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerCallInviteLink",
                  kind: "LinkedField",
                  name: "link",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "link_owner",
                      plural: !1,
                      selections: [
                        e,
                        c,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: "profile_pic",
                              args: [
                                f,
                                { kind: "Literal", name: "width", value: 60 },
                              ],
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "profile_picture",
                              plural: !1,
                              selections: g,
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "short_name",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "gender",
                              storageKey: null,
                            },
                            h,
                            i,
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
                              ],
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "link_container",
                      plural: !1,
                      selections: [
                        e,
                        {
                          kind: "InlineFragment",
                          selections: [
                            c,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "full_name",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "profile_picture",
                              plural: !1,
                              selections: g,
                              storageKey: null,
                            },
                          ],
                          type: "Group",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: d,
                          type: "Node",
                          abstractKey: "__isNode",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "active_call_participant_count",
                      storageKey: null,
                    },
                    c,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "lock_status",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "link_hash",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "link_url",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "surface", value: "NF_TRAY" },
                      ],
                      kind: "ScalarField",
                      name: "room_card_cta_enum",
                      storageKey: 'room_card_cta_enum(surface:"NF_TRAY")',
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "emoji",
                      storageKey: null,
                    },
                    h,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "link_surface",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_published",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_e2e_encrypted",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "expected_call_start_time",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_owner_in_call",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "should_allow_guests",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "MessengerCallRoom",
                      kind: "LinkedField",
                      name: "messenger_call_room",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "MessengerCall",
                          kind: "LinkedField",
                          name: "maybe_stale_active_call",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: [
                                {
                                  kind: "Literal",
                                  name: "should_fetch_only_in_call_participants",
                                  value: !0,
                                },
                              ],
                              concreteType:
                                "MessengerCallToCallParticipantsConnection",
                              kind: "LinkedField",
                              name: "call_participants",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "nodes",
                                  plural: !0,
                                  selections: [
                                    e,
                                    c,
                                    {
                                      kind: "InlineFragment",
                                      selections: j,
                                      type: "User",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: j,
                                      type: "MessengerCallGuestUser",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey:
                                "call_participants(should_fetch_only_in_call_participants:true)",
                            },
                            c,
                          ],
                          storageKey: null,
                        },
                        c,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_viewer_end_calls",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_viewer_report",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_viewer_report_to_group_admin",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "link_viewer",
                      plural: !1,
                      selections: [c, h, i],
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "RoomFriendTileCollapsed_room",
                              fragmentName:
                                "RoomFriendWithoutRoomTileCardCollapsed_user",
                              fragmentPropName: "user",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "RoomFriendTileCollapsed_room",
                              fragmentName:
                                "RoomFriendWithActiveRoomTileCardCollapsed_room",
                              fragmentPropName: "room",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "MessengerCallInviteLink",
                          abstractKey: null,
                        },
                      ],
                      type: "FBRoomCard",
                      abstractKey: "__isFBRoomCard",
                    },
                    {
                      kind: "ClientExtension",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_ending",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__id",
                          storageKey: null,
                        },
                      ],
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
          id: "5377792958961592",
          metadata: {
            subscriptionName: "joinable_video_chats_room_create_subscribe",
          },
          name: "useRoomsCreateTraySubscriptionSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "RoomFriendTileCollapsed_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomFriendTileCollapsed_fbts",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomFriendWithoutRoomTileCardCollapsed_fbts",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomFriendWithActiveRoomTileCardCollapsed_fbts",
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
  "RoomFriendTileCollapsed_room.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomFriendTileCollapsed_room",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "RoomFriendTileCollapsed_room",
              fragmentName: "RoomFriendWithoutRoomTileCardCollapsed_user",
              fragmentPropName: "user",
              kind: "ModuleImport",
            },
          ],
          type: "User",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "RoomFriendTileCollapsed_room",
              fragmentName: "RoomFriendWithActiveRoomTileCardCollapsed_room",
              fragmentPropName: "room",
              kind: "ModuleImport",
            },
          ],
          type: "MessengerCallInviteLink",
          abstractKey: null,
        },
      ],
      type: "FBRoomCard",
      abstractKey: "__isFBRoomCard",
    };
    e.exports = a;
  },
  null
);
__d(
  "RoomsCollapsedSelfTileCard_room.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsCollapsedSelfTileCard_room",
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
          name: "link_hash",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_published",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "active_call_participant_count",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsSelfTileCardAction_room",
        },
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__id",
              storageKey: null,
            },
          ],
        },
      ],
      type: "MessengerCallInviteLink",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "RoomsCreateRoomLabel_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsCreateRoomLabel_user",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
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
  "RoomsCreateRoomTile_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsCreateRoomTile_fbts",
      selections: [
        {
          alias: "create",
          args: [
            {
              kind: "Literal",
              name: "type",
              value: "CREATE_ROOM_BUTTON_TITLE",
            },
          ],
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "joinable_video_chats_string",
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
          storageKey:
            'joinable_video_chats_string(type:"CREATE_ROOM_BUTTON_TITLE")',
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
  "RoomsCreateRoomTile_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsCreateRoomTile_user",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsCreateRoomLabel_user",
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
  "RoomsExpandedTile_roomCard.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsExpandedTile_roomCard",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        { args: null, kind: "FragmentSpread", name: "VideoChatTileCard_link" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsNullStateTileCard_user",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsGroupCreateTileCard_group",
        },
      ],
      type: "FBRoomCard",
      abstractKey: "__isFBRoomCard",
    };
    e.exports = a;
  },
  null
);
__d(
  "RoomsExpandedTile_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsExpandedTile_user",
      selections: [
        { args: null, kind: "FragmentSpread", name: "VideoChatTileCard_fbts" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsNullStateTileCard_fbts",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsGroupCreateTileCard_user",
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
  "RoomsGroupCreateTileCard_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "RoomsGroupCreateTileCard_group",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useIdOrVanityRouteBuilder_group",
          },
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
            concreteType: "Group",
            kind: "LinkedField",
            name: "if_viewer_can_create_open_group_video_room",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "if_viewer_can_create_private_group_video_room",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Variable", name: "scale", variableName: "scale" }],
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
        type: "Group",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "RoomsGroupCreateTileCard_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsGroupCreateTileCard_user",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
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
  "RoomsNullStateTileCard_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsNullStateTileCard_fbts",
      selections: [
        {
          alias: "say_hi_button",
          args: [
            { kind: "Literal", name: "type", value: "SAY_HI_BUTTON_LABEL" },
          ],
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "joinable_video_chats_string",
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
          storageKey: 'joinable_video_chats_string(type:"SAY_HI_BUTTON_LABEL")',
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
  "RoomsNullStateTileCard_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "RoomsNullStateTileCard_user",
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
          args: [{ kind: "Variable", name: "scale", variableName: "scale" }],
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
        { args: null, kind: "FragmentSpread", name: "useRoomsPresense_user" },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "RoomsSelfRoomTile_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsSelfRoomTile_fbts",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsTileCardMetaString_fbts",
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
  "RoomsSelfRoomTile_link.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsSelfRoomTile_link",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "active_call_participant_count",
          storageKey: null,
        },
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
          name: "is_e2e_encrypted",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_hash",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "lock_status",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsTileCardMetaString_link",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsProfileUrisAndAddOn_link",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsShouldShowGradientOnTile_room",
        },
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_ending",
              storageKey: null,
            },
          ],
        },
      ],
      type: "MessengerCallInviteLink",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "RoomsSelfRoomTile_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsSelfRoomTile_user",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsRoomDefaultValues_user",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsTileCardMetaString_user",
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
  "RoomsTileCardMetaStringImpl_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsTileCardMetaStringImpl_fbts",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        {
          alias: "tile_meta_string",
          args: [{ kind: "Literal", name: "type", value: "TILE_META_STRING" }],
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "joinable_video_chats_string",
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
          storageKey: 'joinable_video_chats_string(type:"TILE_META_STRING")',
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
  "RoomsTileCardMetaStringImpl_link.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        b = {
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
        name: "RoomsTileCardMetaStringImpl_link",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "emoji",
            storageKey: null,
          },
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "link_surface",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_published",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_e2e_encrypted",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "link_owner",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [b, a],
                type: "User",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "link_container",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  b,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "full_name",
                    storageKey: null,
                  },
                ],
                type: "Group",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useIsScheduledRoom_room",
          },
          {
            kind: "ClientExtension",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_ending",
                storageKey: null,
              },
            ],
          },
        ],
        type: "MessengerCallInviteLink",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "RoomsTileCardMetaStringImpl_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsTileCardMetaStringImpl_user",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsRoomDefaultValues_user",
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
  "RoomsTileCardMetaString_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsTileCardMetaString_fbts",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsTileCardMetaStringImpl_fbts",
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
  "RoomsTileCardMetaString_link.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsTileCardMetaString_link",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsTileCardMetaStringImpl_link",
        },
      ],
      type: "MessengerCallInviteLink",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "RoomsTileCardMetaString_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsTileCardMetaString_user",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsTileCardMetaStringImpl_user",
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
  "RoomsTrayRoot_messengeTrayRenderingStrategy.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsTrayRoot_messengeTrayRenderingStrategy",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "user",
          plural: !1,
          selections: [
            { args: null, kind: "FragmentSpread", name: "RoomsTrayRoot_room" },
            { args: null, kind: "FragmentSpread", name: "RoomsTrayRoot_user" },
          ],
          storageKey: null,
        },
      ],
      type: "MessengerRoomsStatusTrayRenderingStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoChatTrayQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: 12, kind: "LocalArgument", name: "count" },
        b = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        c = { defaultValue: null, kind: "LocalArgument", name: "id" },
        d = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        e = [{ kind: "Variable", name: "id", variableName: "id" }],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        h = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
          { kind: "Literal", name: "hide_self_link", value: !0 },
          { kind: "Literal", name: "hide_suggested_groups", value: !1 },
        ],
        i = { kind: "TypeDiscriminator", abstractKey: "__isFBRoomCard" },
        j = { kind: "Variable", name: "scale", variableName: "scale" },
        k = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        m = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 160 },
            j,
            { kind: "Literal", name: "width", value: 160 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: k,
          storageKey: null,
        },
        n = {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "availability",
              storageKey: null,
            },
          ],
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_surface",
          storageKey: null,
        },
        p = [m],
        q = {
          alias: null,
          args: [j],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: k,
          storageKey: null,
        },
        r = [f, g];
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d],
          kind: "Fragment",
          metadata: null,
          name: "VideoChatTrayQuery",
          selections: [
            {
              alias: null,
              args: e,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: [
                    { kind: "Variable", name: "count", variableName: "count" },
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "RoomsTrayRoot_room",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [a, b, d, c],
          kind: "Operation",
          name: "VideoChatTrayQuery",
          selections: [
            {
              alias: null,
              args: e,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                f,
                g,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: h,
                      concreteType: "UserToFBRoomCardsConnection",
                      kind: "LinkedField",
                      name: "fb_room_cards",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "UserToFBRoomCardsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                g,
                                f,
                                i,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "active_call_participant_count",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "lock_status",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "link_hash",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "link_url",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "link_owner",
                                      plural: !1,
                                      selections: [
                                        f,
                                        g,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: "profile_pic",
                                              args: [
                                                j,
                                                {
                                                  kind: "Literal",
                                                  name: "width",
                                                  value: 60,
                                                },
                                              ],
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "profile_picture",
                                              plural: !1,
                                              selections: k,
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "short_name",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "gender",
                                              storageKey: null,
                                            },
                                            l,
                                            m,
                                            n,
                                          ],
                                          type: "User",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "surface",
                                          value: "NF_TRAY",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "room_card_cta_enum",
                                      storageKey:
                                        'room_card_cta_enum(surface:"NF_TRAY")',
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "emoji",
                                      storageKey: null,
                                    },
                                    l,
                                    o,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_published",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_e2e_encrypted",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "link_container",
                                      plural: !1,
                                      selections: [
                                        f,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            g,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "full_name",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "profile_picture",
                                              plural: !1,
                                              selections: k,
                                              storageKey: null,
                                            },
                                          ],
                                          type: "Group",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [g],
                                          type: "Node",
                                          abstractKey: "__isNode",
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "expected_call_start_time",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_owner_in_call",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "should_allow_guests",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "MessengerCallRoom",
                                      kind: "LinkedField",
                                      name: "messenger_call_room",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "MessengerCall",
                                          kind: "LinkedField",
                                          name: "maybe_stale_active_call",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: [
                                                {
                                                  kind: "Literal",
                                                  name: "should_fetch_only_in_call_participants",
                                                  value: !0,
                                                },
                                              ],
                                              concreteType:
                                                "MessengerCallToCallParticipantsConnection",
                                              kind: "LinkedField",
                                              name: "call_participants",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "nodes",
                                                  plural: !0,
                                                  selections: [
                                                    f,
                                                    g,
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: p,
                                                      type: "User",
                                                      abstractKey: null,
                                                    },
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: p,
                                                      type: "MessengerCallGuestUser",
                                                      abstractKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey:
                                                "call_participants(should_fetch_only_in_call_participants:true)",
                                            },
                                            g,
                                          ],
                                          storageKey: null,
                                        },
                                        g,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "can_viewer_end_calls",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "can_viewer_report",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "can_viewer_report_to_group_admin",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "User",
                                      kind: "LinkedField",
                                      name: "link_viewer",
                                      plural: !1,
                                      selections: [g, l, m],
                                      storageKey: null,
                                    },
                                    {
                                      kind: "ClientExtension",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "is_ending",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "__id",
                                          storageKey: null,
                                        },
                                      ],
                                    },
                                  ],
                                  type: "MessengerCallInviteLink",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [l, q, n],
                                  type: "User",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "group_address",
                                      storageKey: null,
                                    },
                                    l,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Group",
                                      kind: "LinkedField",
                                      name: "if_viewer_can_create_open_group_video_room",
                                      plural: !1,
                                      selections: r,
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Group",
                                      kind: "LinkedField",
                                      name: "if_viewer_can_create_private_group_video_room",
                                      plural: !1,
                                      selections: r,
                                      storageKey: null,
                                    },
                                    q,
                                  ],
                                  type: "Group",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: "collapsed_room",
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                f,
                                i,
                                g,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    o,
                                    {
                                      args: null,
                                      documentName:
                                        "RoomFriendTileCollapsed_room",
                                      fragmentName:
                                        "RoomFriendWithActiveRoomTileCardCollapsed_room",
                                      fragmentPropName: "room",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "MessengerCallInviteLink",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "RoomFriendTileCollapsed_room",
                                      fragmentName:
                                        "RoomFriendWithoutRoomTileCardCollapsed_user",
                                      fragmentPropName: "user",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "User",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "cursor",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "PageInfo",
                          kind: "LinkedField",
                          name: "page_info",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "end_cursor",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "has_next_page",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: h,
                      filters: [],
                      handle: "connection",
                      key: "RoomsTrayRoot_fb_room_cards",
                      kind: "LinkedHandle",
                      name: "fb_room_cards",
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4022014984542490",
          metadata: {},
          name: "VideoChatTrayQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "RoomsTrayRoot_room.graphql",
  ["VideoChatTrayQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["fb_room_cards"];
      return {
        argumentDefinitions: [
          { defaultValue: 12, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: "count", cursor: "cursor", direction: "forward", path: a },
          ],
          refetch: {
            connection: {
              forward: { count: "count", cursor: "cursor" },
              backward: null,
              path: a,
            },
            fragmentPathInResult: ["node"],
            operation: b("VideoChatTrayQuery.graphql"),
            identifierField: "id",
          },
        },
        name: "RoomsTrayRoot_room",
        selections: [
          {
            alias: "fb_room_cards",
            args: null,
            concreteType: "UserToFBRoomCardsConnection",
            kind: "LinkedField",
            name: "__RoomsTrayRoot_fb_room_cards_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "UserToFBRoomCardsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "VideoChatTrayContent_room",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "VideoChatCollapsedTray_room",
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
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
              {
                alias: null,
                args: null,
                concreteType: "PageInfo",
                kind: "LinkedField",
                name: "page_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_next_page",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
        ],
        type: "User",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "RoomsTrayRoot_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsTrayRoot_user",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoChatTrayContent_self",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoChatTrayContent_fbt",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoChatCollapsedTray_fbt",
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
  "RoomsTrayRoot_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsTrayRoot_viewer",
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
          args: null,
          kind: "FragmentSpread",
          name: "VideoChatCollapsedTray_viewer",
        },
        { args: null, kind: "FragmentSpread", name: "VideoChatTray_viewer" },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoChatCollapsedTray_fbt.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoChatCollapsedTray_fbt",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomFriendTileCollapsed_fbts",
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
  "VideoChatCollapsedTray_room.graphql",
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
        b = [a];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { plural: !0 },
        name: "VideoChatCollapsedTray_room",
        selections: [
          {
            alias: "collapsed_room",
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "node",
            plural: !1,
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
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "link_surface",
                    storageKey: null,
                  },
                ],
                type: "MessengerCallInviteLink",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: b,
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: b,
                type: "Group",
                abstractKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "RoomFriendTileCollapsed_room",
              },
            ],
            storageKey: null,
          },
        ],
        type: "UserToFBRoomCardsEdge",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoChatCollapsedTray_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoChatCollapsedTray_viewer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "JoinableVideoChatsViewerFields",
          kind: "LinkedField",
          name: "joinable_video_chats",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [{ kind: "Literal", name: "first", value: 50 }],
              concreteType:
                "JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsConnection",
              kind: "LinkedField",
              name: "published_self_room_cards",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "RoomsCollapsedSelfTileCard_room",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "RoomFriendTileCollapsed_room",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: "published_self_room_cards(first:50)",
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
  "VideoChatTileCard_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoChatTileCard_fbts",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsMarkAsInterested_fbts",
        },
        { args: null, kind: "FragmentSpread", name: "useRoomsCTAType_fbts" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsTileCardMetaString_fbts",
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
  "VideoChatTileCard_link.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoChatTileCard_link",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "active_call_participant_count",
          storageKey: null,
        },
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
          name: "lock_status",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_hash",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "link_owner",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "RoomsTileCardMetaString_user",
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        { args: null, kind: "FragmentSpread", name: "useRoomsCTAType_room" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsTileCardMetaString_link",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsProfileUrisAndAddOn_link",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsLobbyEntryPointDialogTrigger_room",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsCanViewerReport_room",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsMarkAsInterested_room",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsShouldShowGradientOnTile_room",
        },
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__id",
              storageKey: null,
            },
          ],
        },
      ],
      type: "MessengerCallInviteLink",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoChatTrayContent_fbt.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoChatTrayContent_fbt",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsCreateRoomTile_fbts",
        },
        { args: null, kind: "FragmentSpread", name: "useRoomsSelfRooms_fbts" },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoChatTrayContent_room.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "VideoChatTrayContent_room",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
          plural: !1,
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
              name: "__typename",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "RoomsExpandedTile_roomCard",
            },
          ],
          storageKey: null,
        },
      ],
      type: "UserToFBRoomCardsEdge",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoChatTrayContent_self.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoChatTrayContent_self",
      selections: [
        { args: null, kind: "FragmentSpread", name: "RoomsExpandedTile_user" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "RoomsCreateRoomTile_user",
        },
        { args: null, kind: "FragmentSpread", name: "useRoomsSelfRooms_user" },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoChatTray_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoChatTray_viewer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsSelfRooms_viewer",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useRoomsTrayQuickPromotion_viewer",
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
  "useRoomsSelfRooms_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useRoomsSelfRooms_fbts",
      selections: [
        { args: null, kind: "FragmentSpread", name: "RoomsSelfRoomTile_fbts" },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useRoomsSelfRooms_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useRoomsSelfRooms_user",
      selections: [
        { args: null, kind: "FragmentSpread", name: "RoomsSelfRoomTile_user" },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useRoomsSelfRooms_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: {
        connection: [
          {
            count: null,
            cursor: null,
            direction: "forward",
            path: ["joinable_video_chats", "published_self_room_cards"],
          },
        ],
      },
      name: "useRoomsSelfRooms_viewer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "JoinableVideoChatsViewerFields",
          kind: "LinkedField",
          name: "joinable_video_chats",
          plural: !1,
          selections: [
            {
              alias: "published_self_room_cards",
              args: null,
              concreteType:
                "JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsConnection",
              kind: "LinkedField",
              name: "__useRoomsSelfRooms_published_self_room_cards_connection",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
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
                          name: "RoomsSelfRoomTile_link",
                        },
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
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "cursor",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "PageInfo",
                  kind: "LinkedField",
                  name: "page_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "end_cursor",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "has_next_page",
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
  "useRoomsSelfTileCardAction_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useRoomsSelfTileCardAction_fbts",
        selections: [
          {
            alias: "create",
            args: [
              {
                kind: "Literal",
                name: "type",
                value: "CREATE_ROOM_BUTTON_TITLE",
              },
            ],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: a,
            storageKey:
              'joinable_video_chats_string(type:"CREATE_ROOM_BUTTON_TITLE")',
          },
          {
            alias: "join",
            args: [
              { kind: "Literal", name: "type", value: "JOIN_BUTTON_STRING" },
            ],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: a,
            storageKey:
              'joinable_video_chats_string(type:"JOIN_BUTTON_STRING")',
          },
        ],
        type: "User",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useRoomsSelfTileCardAction_room.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useRoomsSelfTileCardAction_room",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_hash",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_published",
          storageKey: null,
        },
      ],
      type: "MessengerCallInviteLink",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useRoomsShouldShowGradientOnTile_room.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useRoomsShouldShowGradientOnTile_room",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "active_call_participant_count",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "expected_call_start_time",
          storageKey: null,
        },
      ],
      type: "MessengerCallInviteLink",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useRoomsTrayQuickPromotion_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useRoomsTrayQuickPromotion_viewer",
      selections: [
        {
          alias: null,
          args: [{ kind: "Literal", name: "surface_nux_id", value: 8001 }],
          concreteType: "ViewerEligibleQuickPromotionsConnection",
          kind: "LinkedField",
          name: "eligible_promotions",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ViewerEligibleQuickPromotionsEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "QuickPromotion",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "CometQuickPromotionSections",
                      kind: "LinkedField",
                      name: "comet_qp_sections",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometQuickPromotionRoomsTrayWideCardRendererStrategy",
                                "CometQuickPromotionRoomsTrayCardRendererStrategy",
                                "CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy",
                                "CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy",
                                "CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy",
                                "CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy",
                                "CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy",
                                "CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "renderer_strategy",
                          plural: !1,
                          selections: [
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "useRoomsTrayQuickPromotion_viewer",
                                  fragmentName:
                                    "VideoChatTrayWideEduTile_quickPromotion",
                                  fragmentPropName: "quickPromotion",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometQuickPromotionRoomsTrayWideCardRendererStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "useRoomsTrayQuickPromotion_viewer",
                                  fragmentName:
                                    "VideoChatTrayEduTile_quickPromotion",
                                  fragmentPropName: "quickPromotion",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometQuickPromotionRoomsTrayCardRendererStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "useRoomsTrayQuickPromotion_viewer",
                                  fragmentName:
                                    "RoomsTrayQuickPromotionEidRoomTileCard_quickPromotion",
                                  fragmentPropName: "quickPromotion",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "useRoomsTrayQuickPromotion_viewer",
                                  fragmentName:
                                    "RoomsTrayQuickPromotionEidRoomWideTileCard_quickPromotion",
                                  fragmentPropName: "quickPromotion",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "useRoomsTrayQuickPromotion_viewer",
                                  fragmentName:
                                    "RoomsTrayQuickPromotionHappyHourTileCard_quickPromotion",
                                  fragmentPropName: "quickPromotion",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "useRoomsTrayQuickPromotion_viewer",
                                  fragmentName:
                                    "RoomsTrayQuickPromotionHappyHourWideTileCard_quickPromotion",
                                  fragmentPropName: "quickPromotion",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "useRoomsTrayQuickPromotion_viewer",
                                  fragmentName:
                                    "RoomsTrayQuickPromotionSocialNormsWideTemplateTileCard_quickPromotion",
                                  fragmentPropName: "quickPromotion",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "useRoomsTrayQuickPromotion_viewer",
                                  fragmentName:
                                    "RoomsTrayQuickPromotionSocialNormsTemplateTileCard_quickPromotion",
                                  fragmentPropName: "quickPromotion",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'renderer_strategy(supported:["CometQuickPromotionRoomsTrayWideCardRendererStrategy","CometQuickPromotionRoomsTrayCardRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy","CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy"])',
                        },
                        {
                          alias: "rendererStrategyTypeName",
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "CometQuickPromotionRoomsTrayCardRendererStrategy",
                                "CometQuickPromotionRoomsTrayWideCardRendererStrategy",
                                "CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy",
                                "CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy",
                                "CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy",
                                "CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy",
                                "CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy",
                                "CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "renderer_strategy",
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
                          storageKey:
                            'renderer_strategy(supported:["CometQuickPromotionRoomsTrayCardRendererStrategy","CometQuickPromotionRoomsTrayWideCardRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy","CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy"])',
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
          storageKey: "eligible_promotions(surface_nux_id:8001)",
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
  "useRoomsCTAType_fbts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useRoomsCTAType_fbts",
        selections: [
          {
            alias: "already_interested_button",
            args: [
              {
                kind: "Literal",
                name: "type",
                value: "FEED_ATTACHMENT_INTERESTED_STATUS",
              },
            ],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: a,
            storageKey:
              'joinable_video_chats_string(type:"FEED_ATTACHMENT_INTERESTED_STATUS")',
          },
          {
            alias: "create_button",
            args: [
              {
                kind: "Literal",
                name: "type",
                value: "CREATE_ROOM_BUTTON_TITLE",
              },
            ],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: a,
            storageKey:
              'joinable_video_chats_string(type:"CREATE_ROOM_BUTTON_TITLE")',
          },
          {
            alias: "interested_button",
            args: [
              {
                kind: "Literal",
                name: "type",
                value: "FEED_ATTACHMENT_INTERESTED_CTA_LABEL",
              },
            ],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: a,
            storageKey:
              'joinable_video_chats_string(type:"FEED_ATTACHMENT_INTERESTED_CTA_LABEL")',
          },
          {
            alias: "join_button",
            args: [
              { kind: "Literal", name: "type", value: "JOIN_BUTTON_STRING" },
            ],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: a,
            storageKey:
              'joinable_video_chats_string(type:"JOIN_BUTTON_STRING")',
          },
        ],
        type: "User",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useRoomsCTAType_room.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useRoomsCTAType_room",
      selections: [
        {
          alias: null,
          args: [{ kind: "Literal", name: "surface", value: "NF_TRAY" }],
          kind: "ScalarField",
          name: "room_card_cta_enum",
          storageKey: 'room_card_cta_enum(surface:"NF_TRAY")',
        },
      ],
      type: "MessengerCallInviteLink",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useRoomsCanViewerReport_room.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useRoomsCanViewerReport_room",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_report",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_report_to_group_admin",
          storageKey: null,
        },
      ],
      type: "MessengerCallInviteLink",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMegaphoneRootQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: 1, kind: "LocalArgument", name: "first" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [
          { kind: "Variable", name: "first", variableName: "first" },
          { kind: "Literal", name: "surface_nux_id", value: 2646 },
          { kind: "Literal", name: "trigger", value: "NEWSFEED" },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometMegaphoneRootQuery",
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
                  alias: "megaphonePromotions",
                  args: b,
                  concreteType: "ViewerEligibleQuickPromotionsConnection",
                  kind: "LinkedField",
                  name: "eligible_promotions",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "ViewerEligibleQuickPromotionsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "QuickPromotion",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "CometMegaphoneQuickPromotionSection_quickPromotion",
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometMegaphoneRootQuery",
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
                  alias: "megaphonePromotions",
                  args: b,
                  concreteType: "ViewerEligibleQuickPromotionsConnection",
                  kind: "LinkedField",
                  name: "eligible_promotions",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "ViewerEligibleQuickPromotionsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "QuickPromotion",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "CometQuickPromotionSections",
                              kind: "LinkedField",
                              name: "comet_qp_sections",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "supported",
                                      value: [
                                        "CometSlimMegaphoneRendererStrategy",
                                        "CometStandardMegaphoneRendererStrategy",
                                        "CometEmergencyMegaphoneRendererStrategy",
                                        "CometMegaphoneWWWDeviceBasedLoginRendererStrategy",
                                        "CometQuickPromotionAYMTNewsFeedMegaphoneRendererStrategy",
                                        "CometQuickPromotionPageTransparencyMegaphoneRendererStrategy",
                                        "CometQuickPromotionMegaphonePrivacyNotificationRendererStrategy",
                                        "CometQuickPromotionBroadDistributionMegaphoneRendererStrategy",
                                        "CometQuickPromotionLocationTransparencyMegaphoneRendererStrategy",
                                        "CometMegaphoneGDPRContextualConsentRendererStrategy",
                                        "CometQuickPromotionNonprofitMegaphoneRendererStrategy",
                                        "CometQPDiglossiaSurveyRendererStrategy",
                                        "CometQPRegularSurveyRendererStrategy",
                                        "CometQuickPromotionFundraiserPromotionalMegaphoneRendererStrategy",
                                        "CometQuickPromotionFullImageMegaphoneRendererStrategy",
                                        "CometQuickPromotionBLMMegaphoneRendererStrategy",
                                        "CometConsentFrameworkRendererStrategy",
                                        "CometQuickPromotionPPAMegaphoneRendererStrategy",
                                        "CometQuickPromotionPPAPostEnforcementMegaphoneRendererStrategy",
                                        "CometQuickPromotionPPAPreApprovedMegaphoneRendererStrategy",
                                        "CometQuickPromotionAskMeAnythingNewsFeedMegaphoneRendererStrategy",
                                        "CometQuickPromotionFullBleedImageRendererStrategy",
                                        "CometQuickPromotionCreateStreamerFanGroupsRendererStrategy",
                                        "CometSideImageMegaphoneRendererStrategy",
                                        "CometMegaphoneWWWEmailAcquisitionRendererStrategy",
                                        "CometQuickPromotionPrayerSettingsMegaphoneRendererStrategy",
                                        "CometQuickPromotionGroupsExpertsOptInRendererStrategy",
                                        "CometMegaphoneWWWEmailAcquisitionNoAutofillRendererStrategy",
                                      ],
                                    },
                                  ],
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "renderer_strategy",
                                  plural: !1,
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
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometSlimMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometSlimMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometStandardMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometStandardMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometEmergencyMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometEmergencyMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometMegaphoneWWWDeviceBasedLoginRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionAYMTNewsFeedMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionAYMTNewsFeedMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionPageTransparencyMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionPageTransparencyMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionMegaphonePrivacyNotificationRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionMegaphonePrivacyNotificationRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionBroadDistributionMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionBroadDistributionMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionLocationTransparencyMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionLocationTransparencyMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometMegaphoneGDPRContextualConsentRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometMegaphoneGDPRContextualConsentRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionNonprofitMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionNonprofitMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQPDiglossiaSurveyRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQPDiglossiaSurveyRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQPRegularSurveyRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQPRegularSurveyRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionFundraiserPromotionalMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionFundraiserPromotionalMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionFullImageMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionFullImageMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionBLMMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionBLMMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometConsentFrameworkRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometConsentFrameworkRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionPPAMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionPPAMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionPPAPostEnforcementMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionPPAPostEnforcementMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionPPAPreApprovedMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionPPAPreApprovedMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionAskMeAnythingNewsFeedMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionAskMeAnythingNewsFeedMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionFullBleedImageRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionFullBleedImageRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionCreateStreamerFanGroupsRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionCreateStreamerFanGroupsRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometSideImageMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometSideImageMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometMegaphoneWWWEmailAcquisitionRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometMegaphoneWWWEmailAcquisitionRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionPrayerSettingsMegaphoneRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionPrayerSettingsMegaphoneRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometQuickPromotionGroupsExpertsOptInRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionGroupsExpertsOptInRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometMegaphoneQuickPromotionSection_quickPromotion",
                                          fragmentName:
                                            "CometMegaphoneWWWEmailAcquisitionNoAutofillRendererStrategy_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometMegaphoneWWWEmailAcquisitionNoAutofillRendererStrategy",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey:
                                    'renderer_strategy(supported:["CometSlimMegaphoneRendererStrategy","CometStandardMegaphoneRendererStrategy","CometEmergencyMegaphoneRendererStrategy","CometMegaphoneWWWDeviceBasedLoginRendererStrategy","CometQuickPromotionAYMTNewsFeedMegaphoneRendererStrategy","CometQuickPromotionPageTransparencyMegaphoneRendererStrategy","CometQuickPromotionMegaphonePrivacyNotificationRendererStrategy","CometQuickPromotionBroadDistributionMegaphoneRendererStrategy","CometQuickPromotionLocationTransparencyMegaphoneRendererStrategy","CometMegaphoneGDPRContextualConsentRendererStrategy","CometQuickPromotionNonprofitMegaphoneRendererStrategy","CometQPDiglossiaSurveyRendererStrategy","CometQPRegularSurveyRendererStrategy","CometQuickPromotionFundraiserPromotionalMegaphoneRendererStrategy","CometQuickPromotionFullImageMegaphoneRendererStrategy","CometQuickPromotionBLMMegaphoneRendererStrategy","CometConsentFrameworkRendererStrategy","CometQuickPromotionPPAMegaphoneRendererStrategy","CometQuickPromotionPPAPostEnforcementMegaphoneRendererStrategy","CometQuickPromotionPPAPreApprovedMegaphoneRendererStrategy","CometQuickPromotionAskMeAnythingNewsFeedMegaphoneRendererStrategy","CometQuickPromotionFullBleedImageRendererStrategy","CometQuickPromotionCreateStreamerFanGroupsRendererStrategy","CometSideImageMegaphoneRendererStrategy","CometMegaphoneWWWEmailAcquisitionRendererStrategy","CometQuickPromotionPrayerSettingsMegaphoneRendererStrategy","CometQuickPromotionGroupsExpertsOptInRendererStrategy","CometMegaphoneWWWEmailAcquisitionNoAutofillRendererStrategy"])',
                                },
                              ],
                              storageKey: null,
                            },
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
        },
        params: {
          id: "5850065008400734",
          metadata: {},
          name: "CometMegaphoneRootQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayRectangularBuckets_buckets.graphql",
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
        b = [a];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "blur" },
          { kind: "RootArgument", name: "shouldEnableLiveInStoriesDropdown" },
          { kind: "RootArgument", name: "shouldEnableVideoAutoplay" },
          { kind: "RootArgument", name: "shouldPrefetchProfilePic" },
        ],
        kind: "Fragment",
        metadata: { plural: !0 },
        name: "StoriesTrayRectangularBuckets_buckets",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
            kind: "LinkedField",
            name: "unified_stories",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Story",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: b,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            condition: "shouldEnableVideoAutoplay",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Story",
                kind: "LinkedField",
                name: "first_story_to_show",
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
                        args: null,
                        concreteType: "Video",
                        kind: "LinkedField",
                        name: "story_video_thumbnail",
                        plural: !1,
                        selections: b,
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
          {
            condition: "shouldPrefetchProfilePic",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "useStoriesTrayTilePrefetchProfileURI_profile",
              },
            ],
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesBucketsLogger_buckets",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesBucketsIndexer_buckets",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesTrayTileSelf_bucket",
          },
          {
            args: [
              { kind: "Variable", name: "blur", variableName: "blur" },
              {
                kind: "Variable",
                name: "shouldEnableLiveInStoriesDropdown",
                variableName: "shouldEnableLiveInStoriesDropdown",
              },
              {
                kind: "Variable",
                name: "shouldEnableVideoAutoplay",
                variableName: "shouldEnableVideoAutoplay",
              },
            ],
            kind: "FragmentSpread",
            name: "StoriesTrayTile_bucket",
          },
          { args: null, kind: "FragmentSpread", name: "StoriesTrayRow_story" },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayRectangularBuckets_createTileUris.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesTrayRectangularBuckets_createTileUris",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesTrayCreateTile_imageUris",
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
  "StoriesTrayRectangularQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "blur" },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "bucketsToFetch",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        d = { defaultValue: null, kind: "LocalArgument", name: "id" },
        e = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStoriesDropdown",
        },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldEnableVideoAutoplay",
        },
        h = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldPrefetchProfilePic",
        },
        i = [{ kind: "Variable", name: "id", variableName: "id" }],
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "bucketsToFetch" },
        ],
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        n = { kind: "Variable", name: "scale", variableName: "scale" },
        o = { kind: "Literal", name: "width", value: 40 },
        p = [n, o],
        q = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        r = {
          alias: null,
          args: p,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: q,
          storageKey: null,
        },
        s = [
          { kind: "Literal", name: "height", value: 277 },
          n,
          { kind: "Literal", name: "width", value: 156 },
        ],
        t = {
          alias: "coverImage",
          args: s,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: q,
          storageKey: null,
        },
        u = [k],
        v = {
          kind: "InlineFragment",
          selections: u,
          type: "Node",
          abstractKey: "__isNode",
        },
        w = [m, r, t];
      o = [{ kind: "Literal", name: "height", value: 40 }, n, o];
      var x = {
          kind: "InlineFragment",
          selections: u,
          type: "GenericAttachmentMedia",
          abstractKey: null,
        },
        y = {
          kind: "InlineFragment",
          selections: u,
          type: "MontageImage",
          abstractKey: null,
        },
        z = {
          kind: "InlineFragment",
          selections: u,
          type: "MontageVideo",
          abstractKey: null,
        },
        A = [
          {
            kind: "Literal",
            name: "player_suborigin",
            value: "stories_video_preview",
          },
        ],
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        C = [
          B,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "start",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "end",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "representation_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "mime_codec",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "segment_type",
            storageKey: null,
          },
        ],
        D = {
          alias: null,
          args: null,
          concreteType: "StoryBackdrop",
          kind: "LinkedField",
          name: "backdrop",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "media",
              plural: !1,
              selections: [
                j,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "blur",
                          variableName: "blur",
                        },
                        n,
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: q,
                      storageKey: null,
                    },
                  ],
                  type: "Photo",
                  abstractKey: null,
                },
                v,
                x,
                y,
                z,
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      n = {
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
              j,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "height", value: 1920 },
                      n,
                      { kind: "Literal", name: "width", value: 1080 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "image",
                    plural: !1,
                    selections: q,
                    storageKey: null,
                  },
                ],
                type: "Photo",
                abstractKey: null,
              },
              v,
              x,
              y,
              z,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      p = [
        {
          alias: "profilePic",
          args: p,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: q,
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, f, g, h],
          kind: "Fragment",
          metadata: null,
          name: "StoriesTrayRectangularQuery",
          selections: [
            {
              alias: null,
              args: i,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: [
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "StoriesTrayRectangular_me",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [a, b, c, e, f, g, h, d],
          kind: "Operation",
          name: "StoriesTrayRectangularQuery",
          selections: [
            {
              alias: null,
              args: i,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                j,
                k,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: l,
                      concreteType: "UserToUnifiedStoryBucketsConnection",
                      kind: "LinkedField",
                      name: "unified_stories_buckets",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "UserToUnifiedStoryBucketsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                j,
                                {
                                  kind: "TypeDiscriminator",
                                  abstractKey: "__isStoryBucket",
                                },
                                k,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "UnifiedStoryBucketToUnifiedStoriesConnection",
                                  kind: "LinkedField",
                                  name: "unified_stories",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Story",
                                      kind: "LinkedField",
                                      name: "nodes",
                                      plural: !0,
                                      selections: [
                                        k,
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
                                      ],
                                      storageKey: null,
                                    },
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
                                      concreteType:
                                        "UnifiedStoryBucketToUnifiedStoriesEdge",
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
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "expiration_time",
                                              storageKey: null,
                                            },
                                            k,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "story_bucket_type",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "story_bucket_owner",
                                  plural: !1,
                                  selections: [
                                    j,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "is_viewer_friend",
                                          storageKey: null,
                                        },
                                        k,
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "gender",
                                          storageKey: null,
                                        },
                                        m,
                                        r,
                                        t,
                                      ],
                                      type: "User",
                                      abstractKey: null,
                                    },
                                    v,
                                    {
                                      kind: "InlineFragment",
                                      selections: w,
                                      type: "Event",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        m,
                                        {
                                          alias: null,
                                          args: o,
                                          concreteType: "Image",
                                          kind: "LinkedField",
                                          name: "profile_picture",
                                          plural: !1,
                                          selections: q,
                                          storageKey: null,
                                        },
                                        t,
                                      ],
                                      type: "Group",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: w,
                                      type: "Page",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
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
                                  kind: "ScalarField",
                                  name: "can_viewer_post",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "ranking_tracking_string",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Story",
                                  kind: "LinkedField",
                                  name: "thumbnail_story_to_show",
                                  plural: !1,
                                  selections: [
                                    k,
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
                                            j,
                                            v,
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: [
                                                    {
                                                      kind: "Literal",
                                                      name: "framework",
                                                      value: "WARNING_SCREENS",
                                                    },
                                                    {
                                                      kind: "Literal",
                                                      name: "location",
                                                      value: "story_tray",
                                                    },
                                                  ],
                                                  concreteType: "CIXScreen",
                                                  kind: "LinkedField",
                                                  name: "cix_screen",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "view_model",
                                                      plural: !1,
                                                      selections: [
                                                        j,
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              args: null,
                                                              documentName:
                                                                "StoriesTrayTileView_warningScreen",
                                                              fragmentName:
                                                                "CometWarningScreenOverlay_data",
                                                              fragmentPropName:
                                                                "data",
                                                              kind: "ModuleImport",
                                                            },
                                                          ],
                                                          type: "OverlayWarningScreenViewModel",
                                                          abstractKey: null,
                                                        },
                                                        v,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey:
                                                    'cix_screen(framework:"WARNING_SCREENS",location:"story_tray")',
                                                },
                                              ],
                                              type: "CanRenderCIXScreen",
                                              abstractKey:
                                                "__isCanRenderCIXScreen",
                                            },
                                            x,
                                            y,
                                            z,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
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
                                          args: s,
                                          concreteType: "Image",
                                          kind: "LinkedField",
                                          name: "story_thumbnail",
                                          plural: !1,
                                          selections: q,
                                          storageKey: null,
                                        },
                                        {
                                          condition:
                                            "shouldEnableVideoAutoplay",
                                          kind: "Condition",
                                          passingValue: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "Video",
                                              kind: "LinkedField",
                                              name: "story_video_thumbnail",
                                              plural: !1,
                                              selections: [
                                                k,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "animated_image_caption",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "original_width",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "original_height",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "broadcaster_origin",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "broadcast_id",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "broadcast_status",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_live_streaming",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_live_trace_enabled",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_looping",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_video_broadcast",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "loop_count",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_spherical",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_spherical_enabled",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "unsupported_browser_message",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "MusicVideoMetadata",
                                                  kind: "LinkedField",
                                                  name: "pmv_metadata",
                                                  plural: !1,
                                                  selections: [j, k],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_ncsr",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "permalink_url",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "captions_url",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: A,
                                                  kind: "ScalarField",
                                                  name: "dash_prefetch_experimental",
                                                  storageKey:
                                                    'dash_prefetch_experimental(player_suborigin:"stories_video_preview")',
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "VideoCaptionLocale",
                                                  kind: "LinkedField",
                                                  name: "video_available_captions_locales",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "localized_creation_method",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "InstreamExtraConfig",
                                                  kind: "LinkedField",
                                                  name: "instream_extra_config",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "instream_halo_delay_time_seconds",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: A,
                                                  concreteType:
                                                    "VideoPrefetchResources",
                                                  kind: "LinkedField",
                                                  name: "dash_prefetch_resources",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoPrefetchResource",
                                                      kind: "LinkedField",
                                                      name: "audio",
                                                      plural: !0,
                                                      selections: C,
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoPrefetchResource",
                                                      kind: "LinkedField",
                                                      name: "video",
                                                      plural: !0,
                                                      selections: C,
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey:
                                                    'dash_prefetch_resources(player_suborigin:"stories_video_preview")',
                                                },
                                                {
                                                  alias: null,
                                                  args: [
                                                    {
                                                      kind: "Literal",
                                                      name: "context",
                                                      value: "DEFAULT",
                                                    },
                                                    {
                                                      kind: "Literal",
                                                      name: "supported",
                                                      value: [
                                                        "CometVideoPlayerOzImplementation",
                                                        "CometVideoPlayerShakaImplementation",
                                                        "CometVideoPlayerProgressiveImplementation",
                                                      ],
                                                    },
                                                  ],
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "comet_video_player_implementations",
                                                  plural: !0,
                                                  selections: [
                                                    j,
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "useRelay3DVideoImplementations_video",
                                                          fragmentName:
                                                            "useRelay3DOzImplementation_implementation",
                                                          fragmentPropName:
                                                            "implementation",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      type: "CometVideoPlayerOzImplementation",
                                                      abstractKey: null,
                                                    },
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "useRelay3DVideoImplementations_video",
                                                          fragmentName:
                                                            "useRelay3DShakaImplementation_implementation",
                                                          fragmentPropName:
                                                            "implementation",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      type: "CometVideoPlayerShakaImplementation",
                                                      abstractKey: null,
                                                    },
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "useRelay3DVideoImplementations_video",
                                                          fragmentName:
                                                            "useRelay3DProgressiveImplementation_implementation",
                                                          fragmentPropName:
                                                            "implementation",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      type: "CometVideoPlayerProgressiveImplementation",
                                                      abstractKey: null,
                                                    },
                                                  ],
                                                  storageKey:
                                                    'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])',
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "can_use_oz",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: "playable_url_dash",
                                                  args: [
                                                    {
                                                      kind: "Literal",
                                                      name: "scrubbing_preference",
                                                      value: "MPEG_DASH",
                                                    },
                                                  ],
                                                  kind: "ScalarField",
                                                  name: "playable_url",
                                                  storageKey:
                                                    'playable_url(scrubbing_preference:"MPEG_DASH")',
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "dash_manifest",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "min_quality_preference",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_rss_podcast_video",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "VideoPlayerShakaLiveP2PInit",
                                                  kind: "LinkedField",
                                                  name: "video_player_shaka_live_p2p_init",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "json_encoded_video_data",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "playable_url",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias:
                                                    "playable_url_quality_hd",
                                                  args: [
                                                    {
                                                      kind: "Literal",
                                                      name: "quality",
                                                      value: "HD",
                                                    },
                                                  ],
                                                  kind: "ScalarField",
                                                  name: "playable_url",
                                                  storageKey:
                                                    'playable_url(quality:"HD")',
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "SphericalVideoFallbackUrls",
                                                  kind: "LinkedField",
                                                  name: "spherical_video_fallback_urls",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "hd",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "sd",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_gaming_video",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_latency_menu_enabled",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "fbls_tier",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_latency_sensitive_broadcast",
                                                  storageKey: null,
                                                },
                                                {
                                                  kind: "ClientExtension",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "selected_latency_setting",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "comet_video_player_static_config",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "comet_video_player_context_sensitive_config",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "VideoPlayerShakaPerformanceLoggerInit",
                                                  kind: "LinkedField",
                                                  name: "video_player_shaka_performance_logger_init",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      args: null,
                                                      documentName:
                                                        "useVideoPlayerShakaPerformanceLoggerRelayImpl_video",
                                                      fragmentName:
                                                        "useVideoPlayerShakaPerformanceLoggerRelayImpl_init",
                                                      fragmentPropName: "init",
                                                      kind: "ModuleImport",
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "video_player_shaka_performance_logger_should_sample",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "autoplay_gating_result",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "viewer_autoplay_setting",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "can_autoplay",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "drm_info",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "VideoP2PSettings",
                                                  kind: "LinkedField",
                                                  name: "p2p_settings",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "ticket",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoP2PSettingsConfig",
                                                      kind: "LinkedField",
                                                      name: "config",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "delay_p2p_until_play",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "disable_hivejava_for_livevc",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoHiveInitializationOptions",
                                                      kind: "LinkedField",
                                                      name: "hive_initialization_options",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoHiveInitializationOptionHiveJava",
                                                          kind: "LinkedField",
                                                          name: "hive_java",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "min_version",
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "hive_tech_order",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "debug_level",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "AudioSettings",
                                                  kind: "LinkedField",
                                                  name: "audio_settings",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "video_volume_setting",
                                                      storageKey: null,
                                                    },
                                                    k,
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "CaptionsSettings",
                                                  kind: "LinkedField",
                                                  name: "captions_settings",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "always_show_captions",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "captions_background_color",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "captions_background_opacity",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "captions_text_color",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "captions_text_size",
                                                      storageKey: null,
                                                    },
                                                    k,
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "VideoBroadcastLowLatencyConfig",
                                                  kind: "LinkedField",
                                                  name: "broadcast_low_latency_config",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "ll_desired_latency_ms",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "ll_latency_tolerance_ms",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "audio_availability",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "VideoMutedSegment",
                                                  kind: "LinkedField",
                                                  name: "muted_segments",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "mute_start_time_in_sec",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "mute_end_time_in_sec",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "SphericalVideoRenderer",
                                                  kind: "LinkedField",
                                                  name: "spherical_video_renderer",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      args: null,
                                                      documentName:
                                                        "VideoPlayerRelay_video_spherical_video_renderer",
                                                      fragmentName:
                                                        "VideoPlayerSphericalRelay_sphericalVideoRenderer",
                                                      fragmentPropName:
                                                        "sphericalVideoRenderer",
                                                      kind: "ModuleImport",
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "InstreamVideoAdBreaks",
                                                  kind: "LinkedField",
                                                  name: "instream_video_ad_breaks_comet",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      args: null,
                                                      documentName:
                                                        "VideoPlayerRelay_video_instream_video_ad_breaks_comet",
                                                      fragmentName:
                                                        "InstreamVideoAdBreaksPlayer_adBreaks",
                                                      fragmentPropName:
                                                        "adBreaks",
                                                      kind: "ModuleImport",
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "VideoThumbnail",
                                                  kind: "LinkedField",
                                                  name: "preferred_thumbnail",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "image",
                                                      plural: !1,
                                                      selections: q,
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "image_preview_payload",
                                                      storageKey: null,
                                                    },
                                                    k,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "FBStoryPortalInfo",
                                          kind: "LinkedField",
                                          name: "background_color_info",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "FBStoryColorInfo",
                                              kind: "LinkedField",
                                              name: "color_info",
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "dominant_color",
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            k,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
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
                                    k,
                                    D,
                                    n,
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
                                          name: "can_viewer_reply",
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_bucket_live",
                                  storageKey: null,
                                },
                                {
                                  alias: "first_story",
                                  args: null,
                                  concreteType: "Story",
                                  kind: "LinkedField",
                                  name: "first_story_to_show",
                                  plural: !1,
                                  selections: [D, n, k],
                                  storageKey: null,
                                },
                                {
                                  condition: "shouldEnableVideoAutoplay",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Story",
                                      kind: "LinkedField",
                                      name: "first_story_to_show",
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
                                              args: null,
                                              concreteType: "Video",
                                              kind: "LinkedField",
                                              name: "story_video_thumbnail",
                                              plural: !1,
                                              selections: u,
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
                                {
                                  condition: "shouldPrefetchProfilePic",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "story_bucket_owner",
                                      plural: !1,
                                      selections: [
                                        {
                                          kind: "InlineFragment",
                                          selections: p,
                                          type: "Event",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: "profilePic",
                                              args: o,
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "profile_picture",
                                              plural: !1,
                                              selections: q,
                                              storageKey: null,
                                            },
                                          ],
                                          type: "Group",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: p,
                                          type: "Page",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: p,
                                          type: "User",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                },
                                {
                                  condition:
                                    "shouldEnableLiveInStoriesDropdown",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "UnifiedStoryBucketToUnifiedStoriesConnection",
                                      kind: "LinkedField",
                                      name: "unified_stories",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "UnifiedStoryBucketToUnifiedStoriesEdge",
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
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "organic_tracking",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryAttachment",
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
                                                          kind: "InlineFragment",
                                                          selections: u,
                                                          type: "Photo",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: u,
                                                          type: "Video",
                                                          abstractKey: null,
                                                        },
                                                        j,
                                                        v,
                                                        x,
                                                        y,
                                                        z,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryCardStoryInfo",
                                                  kind: "LinkedField",
                                                  name: "story_card_info",
                                                  plural: !1,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "StoryCardToStoryViewersConnection",
                                                      kind: "LinkedField",
                                                      name: "story_viewers",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "count",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "StoryCardSeenState",
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
                                      storageKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Video",
                                          kind: "LinkedField",
                                          name: "live_video",
                                          plural: !1,
                                          selections: [B, k],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "DirectMessageThreadBucket",
                                      abstractKey: null,
                                    },
                                  ],
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "cursor",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "PageInfo",
                          kind: "LinkedField",
                          name: "page_info",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "end_cursor",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "has_next_page",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: l,
                      filters: null,
                      handle: "connection",
                      key: "StoriesTrayRectangular_unified_stories_buckets",
                      kind: "LinkedHandle",
                      name: "unified_stories_buckets",
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3871360926301274",
          metadata: {},
          name: "StoriesTrayRectangularQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayRectangularRootQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: 10, kind: "LocalArgument", name: "blur" },
        b = { defaultValue: 8, kind: "LocalArgument", name: "bucketsToFetch" },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "deferTrayFragment",
        },
        d = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        e = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldEnableLiveInStoriesDropdown",
        },
        f = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldEnableVideoAutoplay",
        },
        g = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldPrefetchProfilePic",
        },
        h = [
          { kind: "Variable", name: "first", variableName: "bucketsToFetch" },
        ],
        i = {
          condition: "deferTrayFragment",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: h,
              concreteType: "UserToUnifiedStoryBucketsConnection",
              kind: "LinkedField",
              name: "unified_stories_buckets",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "approximate_active_bucket_count",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        k = [j],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        n = { kind: "Variable", name: "scale", variableName: "scale" },
        o = { kind: "Literal", name: "width", value: 40 },
        p = [n, o],
        q = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        r = {
          alias: null,
          args: p,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: q,
          storageKey: null,
        },
        s = [
          { kind: "Literal", name: "height", value: 277 },
          n,
          { kind: "Literal", name: "width", value: 156 },
        ],
        t = {
          alias: "coverImage",
          args: s,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: q,
          storageKey: null,
        },
        u = {
          kind: "InlineFragment",
          selections: k,
          type: "Node",
          abstractKey: "__isNode",
        },
        v = [m, r, t];
      o = [{ kind: "Literal", name: "height", value: 40 }, n, o];
      var w = {
          kind: "InlineFragment",
          selections: k,
          type: "GenericAttachmentMedia",
          abstractKey: null,
        },
        x = {
          kind: "InlineFragment",
          selections: k,
          type: "MontageImage",
          abstractKey: null,
        },
        y = {
          kind: "InlineFragment",
          selections: k,
          type: "MontageVideo",
          abstractKey: null,
        },
        z = [l, j],
        A = [
          {
            kind: "Literal",
            name: "player_suborigin",
            value: "stories_video_preview",
          },
        ],
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        C = [
          B,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "start",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "end",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "representation_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "mime_codec",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "segment_type",
            storageKey: null,
          },
        ],
        D = {
          alias: null,
          args: null,
          concreteType: "StoryBackdrop",
          kind: "LinkedField",
          name: "backdrop",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "media",
              plural: !1,
              selections: [
                l,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "blur",
                          variableName: "blur",
                        },
                        n,
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: q,
                      storageKey: null,
                    },
                  ],
                  type: "Photo",
                  abstractKey: null,
                },
                u,
                w,
                x,
                y,
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        E = {
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
                l,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "height", value: 1920 },
                        n,
                        { kind: "Literal", name: "width", value: 1080 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: q,
                      storageKey: null,
                    },
                  ],
                  type: "Photo",
                  abstractKey: null,
                },
                u,
                w,
                x,
                y,
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      p = [
        {
          alias: "profilePic",
          args: p,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: q,
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, f, g],
          kind: "Fragment",
          metadata: null,
          name: "StoriesTrayRectangularRootQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "me",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    i,
                    {
                      kind: "Defer",
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "StoriesTrayRectangular_me",
                        },
                      ],
                    },
                    {
                      kind: "Defer",
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "StoriesTrayRectangularBuckets_createTileUris",
                        },
                      ],
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: k,
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [d, b, a, f, c, g, e],
          kind: "Operation",
          name: "StoriesTrayRectangularRootQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "me",
              plural: !1,
              selections: [
                l,
                j,
                {
                  kind: "InlineFragment",
                  selections: [
                    i,
                    {
                      if: "deferTrayFragment",
                      kind: "Defer",
                      label:
                        "StoriesTrayRectangularRootQuery$defer$stories-buckets-fragment",
                      selections: [
                        {
                          alias: null,
                          args: h,
                          concreteType: "UserToUnifiedStoryBucketsConnection",
                          kind: "LinkedField",
                          name: "unified_stories_buckets",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "UserToUnifiedStoryBucketsEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    l,
                                    {
                                      kind: "TypeDiscriminator",
                                      abstractKey: "__isStoryBucket",
                                    },
                                    j,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "UnifiedStoryBucketToUnifiedStoriesConnection",
                                      kind: "LinkedField",
                                      name: "unified_stories",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Story",
                                          kind: "LinkedField",
                                          name: "nodes",
                                          plural: !0,
                                          selections: [
                                            j,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "StoryCardStoryInfo",
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
                                          ],
                                          storageKey: null,
                                        },
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
                                          concreteType:
                                            "UnifiedStoryBucketToUnifiedStoriesEdge",
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
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "expiration_time",
                                                  storageKey: null,
                                                },
                                                j,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "story_bucket_type",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "story_bucket_owner",
                                      plural: !1,
                                      selections: [
                                        l,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "is_viewer_friend",
                                              storageKey: null,
                                            },
                                            j,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "gender",
                                              storageKey: null,
                                            },
                                            m,
                                            r,
                                            t,
                                          ],
                                          type: "User",
                                          abstractKey: null,
                                        },
                                        u,
                                        {
                                          kind: "InlineFragment",
                                          selections: v,
                                          type: "Event",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            m,
                                            {
                                              alias: null,
                                              args: o,
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "profile_picture",
                                              plural: !1,
                                              selections: q,
                                              storageKey: null,
                                            },
                                            t,
                                          ],
                                          type: "Group",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: v,
                                          type: "Page",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
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
                                      kind: "ScalarField",
                                      name: "can_viewer_post",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "ranking_tracking_string",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Story",
                                      kind: "LinkedField",
                                      name: "thumbnail_story_to_show",
                                      plural: !1,
                                      selections: [
                                        j,
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
                                                l,
                                                u,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "framework",
                                                          value:
                                                            "WARNING_SCREENS",
                                                        },
                                                        {
                                                          kind: "Literal",
                                                          name: "location",
                                                          value: "story_tray",
                                                        },
                                                      ],
                                                      concreteType: "CIXScreen",
                                                      kind: "LinkedField",
                                                      name: "cix_screen",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "view_model",
                                                          plural: !1,
                                                          selections: [
                                                            l,
                                                            {
                                                              kind: "InlineFragment",
                                                              selections: [
                                                                {
                                                                  args: null,
                                                                  documentName:
                                                                    "StoriesTrayTileView_warningScreen",
                                                                  fragmentName:
                                                                    "CometWarningScreenOverlay_data",
                                                                  fragmentPropName:
                                                                    "data",
                                                                  kind: "ModuleImport",
                                                                },
                                                              ],
                                                              type: "OverlayWarningScreenViewModel",
                                                              abstractKey: null,
                                                            },
                                                            u,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey:
                                                        'cix_screen(framework:"WARNING_SCREENS",location:"story_tray")',
                                                    },
                                                  ],
                                                  type: "CanRenderCIXScreen",
                                                  abstractKey:
                                                    "__isCanRenderCIXScreen",
                                                },
                                                w,
                                                x,
                                                y,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
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
                                              args: s,
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "story_thumbnail",
                                              plural: !1,
                                              selections: q,
                                              storageKey: null,
                                            },
                                            {
                                              condition:
                                                "shouldEnableVideoAutoplay",
                                              kind: "Condition",
                                              passingValue: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "Video",
                                                  kind: "LinkedField",
                                                  name: "story_video_thumbnail",
                                                  plural: !1,
                                                  selections: [
                                                    j,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "animated_image_caption",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "original_width",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "original_height",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "broadcaster_origin",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "broadcast_id",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "broadcast_status",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_live_streaming",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_live_trace_enabled",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_looping",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_video_broadcast",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "loop_count",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_spherical",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_spherical_enabled",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "unsupported_browser_message",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "MusicVideoMetadata",
                                                      kind: "LinkedField",
                                                      name: "pmv_metadata",
                                                      plural: !1,
                                                      selections: z,
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_ncsr",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "permalink_url",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "captions_url",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: A,
                                                      kind: "ScalarField",
                                                      name: "dash_prefetch_experimental",
                                                      storageKey:
                                                        'dash_prefetch_experimental(player_suborigin:"stories_video_preview")',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoCaptionLocale",
                                                      kind: "LinkedField",
                                                      name: "video_available_captions_locales",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "localized_creation_method",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "InstreamExtraConfig",
                                                      kind: "LinkedField",
                                                      name: "instream_extra_config",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "instream_halo_delay_time_seconds",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: A,
                                                      concreteType:
                                                        "VideoPrefetchResources",
                                                      kind: "LinkedField",
                                                      name: "dash_prefetch_resources",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoPrefetchResource",
                                                          kind: "LinkedField",
                                                          name: "audio",
                                                          plural: !0,
                                                          selections: C,
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoPrefetchResource",
                                                          kind: "LinkedField",
                                                          name: "video",
                                                          plural: !0,
                                                          selections: C,
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey:
                                                        'dash_prefetch_resources(player_suborigin:"stories_video_preview")',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "context",
                                                          value: "DEFAULT",
                                                        },
                                                        {
                                                          kind: "Literal",
                                                          name: "supported",
                                                          value: [
                                                            "CometVideoPlayerOzImplementation",
                                                            "CometVideoPlayerShakaImplementation",
                                                            "CometVideoPlayerProgressiveImplementation",
                                                          ],
                                                        },
                                                      ],
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "comet_video_player_implementations",
                                                      plural: !0,
                                                      selections: [
                                                        l,
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              args: null,
                                                              documentName:
                                                                "useRelay3DVideoImplementations_video",
                                                              fragmentName:
                                                                "useRelay3DOzImplementation_implementation",
                                                              fragmentPropName:
                                                                "implementation",
                                                              kind: "ModuleImport",
                                                            },
                                                          ],
                                                          type: "CometVideoPlayerOzImplementation",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              args: null,
                                                              documentName:
                                                                "useRelay3DVideoImplementations_video",
                                                              fragmentName:
                                                                "useRelay3DShakaImplementation_implementation",
                                                              fragmentPropName:
                                                                "implementation",
                                                              kind: "ModuleImport",
                                                            },
                                                          ],
                                                          type: "CometVideoPlayerShakaImplementation",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              args: null,
                                                              documentName:
                                                                "useRelay3DVideoImplementations_video",
                                                              fragmentName:
                                                                "useRelay3DProgressiveImplementation_implementation",
                                                              fragmentPropName:
                                                                "implementation",
                                                              kind: "ModuleImport",
                                                            },
                                                          ],
                                                          type: "CometVideoPlayerProgressiveImplementation",
                                                          abstractKey: null,
                                                        },
                                                      ],
                                                      storageKey:
                                                        'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "can_use_oz",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias:
                                                        "playable_url_dash",
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "scrubbing_preference",
                                                          value: "MPEG_DASH",
                                                        },
                                                      ],
                                                      kind: "ScalarField",
                                                      name: "playable_url",
                                                      storageKey:
                                                        'playable_url(scrubbing_preference:"MPEG_DASH")',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "dash_manifest",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "min_quality_preference",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_rss_podcast_video",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoPlayerShakaLiveP2PInit",
                                                      kind: "LinkedField",
                                                      name: "video_player_shaka_live_p2p_init",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "json_encoded_video_data",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "playable_url",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias:
                                                        "playable_url_quality_hd",
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "quality",
                                                          value: "HD",
                                                        },
                                                      ],
                                                      kind: "ScalarField",
                                                      name: "playable_url",
                                                      storageKey:
                                                        'playable_url(quality:"HD")',
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "SphericalVideoFallbackUrls",
                                                      kind: "LinkedField",
                                                      name: "spherical_video_fallback_urls",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "hd",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "sd",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_gaming_video",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_latency_menu_enabled",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "fbls_tier",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "is_latency_sensitive_broadcast",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      kind: "ClientExtension",
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "selected_latency_setting",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "comet_video_player_static_config",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "comet_video_player_context_sensitive_config",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoPlayerShakaPerformanceLoggerInit",
                                                      kind: "LinkedField",
                                                      name: "video_player_shaka_performance_logger_init",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "useVideoPlayerShakaPerformanceLoggerRelayImpl_video",
                                                          fragmentName:
                                                            "useVideoPlayerShakaPerformanceLoggerRelayImpl_init",
                                                          fragmentPropName:
                                                            "init",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "video_player_shaka_performance_logger_should_sample",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "autoplay_gating_result",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "viewer_autoplay_setting",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "can_autoplay",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "drm_info",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoP2PSettings",
                                                      kind: "LinkedField",
                                                      name: "p2p_settings",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "ticket",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoP2PSettingsConfig",
                                                          kind: "LinkedField",
                                                          name: "config",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "delay_p2p_until_play",
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "disable_hivejava_for_livevc",
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "VideoHiveInitializationOptions",
                                                          kind: "LinkedField",
                                                          name: "hive_initialization_options",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType:
                                                                "VideoHiveInitializationOptionHiveJava",
                                                              kind: "LinkedField",
                                                              name: "hive_java",
                                                              plural: !1,
                                                              selections: [
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "min_version",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                              ],
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "hive_tech_order",
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "debug_level",
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "AudioSettings",
                                                      kind: "LinkedField",
                                                      name: "audio_settings",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "video_volume_setting",
                                                          storageKey: null,
                                                        },
                                                        j,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "CaptionsSettings",
                                                      kind: "LinkedField",
                                                      name: "captions_settings",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "always_show_captions",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_background_color",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_background_opacity",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_text_color",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "captions_text_size",
                                                          storageKey: null,
                                                        },
                                                        j,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoBroadcastLowLatencyConfig",
                                                      kind: "LinkedField",
                                                      name: "broadcast_low_latency_config",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "ll_desired_latency_ms",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "ll_latency_tolerance_ms",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "audio_availability",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoMutedSegment",
                                                      kind: "LinkedField",
                                                      name: "muted_segments",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "mute_start_time_in_sec",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "mute_end_time_in_sec",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "SphericalVideoRenderer",
                                                      kind: "LinkedField",
                                                      name: "spherical_video_renderer",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "VideoPlayerRelay_video_spherical_video_renderer",
                                                          fragmentName:
                                                            "VideoPlayerSphericalRelay_sphericalVideoRenderer",
                                                          fragmentPropName:
                                                            "sphericalVideoRenderer",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "InstreamVideoAdBreaks",
                                                      kind: "LinkedField",
                                                      name: "instream_video_ad_breaks_comet",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          args: null,
                                                          documentName:
                                                            "VideoPlayerRelay_video_instream_video_ad_breaks_comet",
                                                          fragmentName:
                                                            "InstreamVideoAdBreaksPlayer_adBreaks",
                                                          fragmentPropName:
                                                            "adBreaks",
                                                          kind: "ModuleImport",
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "VideoThumbnail",
                                                      kind: "LinkedField",
                                                      name: "preferred_thumbnail",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: "Image",
                                                          kind: "LinkedField",
                                                          name: "image",
                                                          plural: !1,
                                                          selections: q,
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "image_preview_payload",
                                                          storageKey: null,
                                                        },
                                                        j,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "FBStoryPortalInfo",
                                              kind: "LinkedField",
                                              name: "background_color_info",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "FBStoryColorInfo",
                                                  kind: "LinkedField",
                                                  name: "color_info",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "dominant_color",
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                j,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
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
                                        j,
                                        D,
                                        E,
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
                                              name: "can_viewer_reply",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_bucket_live",
                                      storageKey: null,
                                    },
                                    {
                                      alias: "first_story",
                                      args: null,
                                      concreteType: "Story",
                                      kind: "LinkedField",
                                      name: "first_story_to_show",
                                      plural: !1,
                                      selections: [D, E, j],
                                      storageKey: null,
                                    },
                                    {
                                      condition: "shouldEnableVideoAutoplay",
                                      kind: "Condition",
                                      passingValue: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Story",
                                          kind: "LinkedField",
                                          name: "first_story_to_show",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "StoryCardStoryInfo",
                                              kind: "LinkedField",
                                              name: "story_card_info",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "Video",
                                                  kind: "LinkedField",
                                                  name: "story_video_thumbnail",
                                                  plural: !1,
                                                  selections: k,
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
                                    {
                                      condition: "shouldPrefetchProfilePic",
                                      kind: "Condition",
                                      passingValue: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "story_bucket_owner",
                                          plural: !1,
                                          selections: [
                                            {
                                              kind: "InlineFragment",
                                              selections: p,
                                              type: "Event",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: "profilePic",
                                                  args: o,
                                                  concreteType: "Image",
                                                  kind: "LinkedField",
                                                  name: "profile_picture",
                                                  plural: !1,
                                                  selections: q,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "Group",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: p,
                                              type: "Page",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: p,
                                              type: "User",
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                    },
                                    {
                                      condition:
                                        "shouldEnableLiveInStoriesDropdown",
                                      kind: "Condition",
                                      passingValue: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "UnifiedStoryBucketToUnifiedStoriesConnection",
                                          kind: "LinkedField",
                                          name: "unified_stories",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "UnifiedStoryBucketToUnifiedStoriesEdge",
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
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "organic_tracking",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "StoryAttachment",
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
                                                              kind: "InlineFragment",
                                                              selections: k,
                                                              type: "Photo",
                                                              abstractKey: null,
                                                            },
                                                            {
                                                              kind: "InlineFragment",
                                                              selections: k,
                                                              type: "Video",
                                                              abstractKey: null,
                                                            },
                                                            l,
                                                            u,
                                                            w,
                                                            x,
                                                            y,
                                                          ],
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "StoryCardStoryInfo",
                                                      kind: "LinkedField",
                                                      name: "story_card_info",
                                                      plural: !1,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "StoryCardToStoryViewersConnection",
                                                          kind: "LinkedField",
                                                          name: "story_viewers",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "count",
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "StoryCardSeenState",
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
                                          storageKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "Video",
                                              kind: "LinkedField",
                                              name: "live_video",
                                              plural: !1,
                                              selections: [B, j],
                                              storageKey: null,
                                            },
                                          ],
                                          type: "DirectMessageThreadBucket",
                                          abstractKey: null,
                                        },
                                      ],
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "cursor",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "PageInfo",
                              kind: "LinkedField",
                              name: "page_info",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "end_cursor",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "has_next_page",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: h,
                          filters: null,
                          handle: "connection",
                          key: "StoriesTrayRectangular_unified_stories_buckets",
                          kind: "LinkedHandle",
                          name: "unified_stories_buckets",
                        },
                        j,
                      ],
                    },
                    {
                      if: "deferTrayFragment",
                      kind: "Defer",
                      label:
                        "StoriesTrayRectangularRootQuery$defer$stories-create-tile-uris",
                      selections: [
                        {
                          alias: "profilePicture",
                          args: [
                            { kind: "Literal", name: "height", value: 150 },
                            n,
                            { kind: "Literal", name: "width", value: 150 },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "profile_picture",
                          plural: !1,
                          selections: q,
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: z,
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4326423664082820",
          metadata: {},
          name: "StoriesTrayRectangularRootQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayRectangular_me.graphql",
  ["StoriesTrayRectangularQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["unified_stories_buckets"];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "blur" },
          { kind: "RootArgument", name: "bucketsToFetch" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { kind: "RootArgument", name: "scale" },
          { kind: "RootArgument", name: "shouldEnableLiveInStoriesDropdown" },
          { kind: "RootArgument", name: "shouldEnableVideoAutoplay" },
          { kind: "RootArgument", name: "shouldPrefetchProfilePic" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            {
              count: "bucketsToFetch",
              cursor: "cursor",
              direction: "forward",
              path: a,
            },
          ],
          refetch: {
            connection: {
              forward: { count: "bucketsToFetch", cursor: "cursor" },
              backward: null,
              path: a,
            },
            fragmentPathInResult: ["node"],
            operation: b("StoriesTrayRectangularQuery.graphql"),
            identifierField: "id",
          },
        },
        name: "StoriesTrayRectangular_me",
        selections: [
          {
            alias: "unified_stories_buckets",
            args: null,
            concreteType: "UserToUnifiedStoryBucketsConnection",
            kind: "LinkedField",
            name: "__StoriesTrayRectangular_unified_stories_buckets_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "UserToUnifiedStoryBucketsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "StoriesTrayRectangularBuckets_buckets",
                      },
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
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "PageInfo",
                kind: "LinkedField",
                name: "page_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_next_page",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
        ],
        type: "User",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayRow_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesTrayRow_story",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesTraySeeAllStoriesTile_story",
        },
      ],
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayTileSelf_bucket.graphql",
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
        b = { kind: "Variable", name: "scale", variableName: "scale" },
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        d = [
          { kind: "Literal", name: "height", value: 277 },
          b,
          { kind: "Literal", name: "width", value: 156 },
        ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "blur" },
          { kind: "RootArgument", name: "scale" },
          { kind: "RootArgument", name: "shouldEnableLiveInStoriesDropdown" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "StoriesTrayTileSelf_bucket",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ranking_tracking_string",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [b, { kind: "Literal", name: "width", value: 40 }],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: c,
                    storageKey: null,
                  },
                  {
                    alias: "coverImage",
                    args: d,
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: c,
                    storageKey: null,
                  },
                ],
                type: "User",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "thumbnail_story_to_show",
            plural: !1,
            selections: [
              a,
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
                        kind: "InlineFragment",
                        selections: [a],
                        type: "Node",
                        abstractKey: "__isNode",
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: [
                              {
                                kind: "Literal",
                                name: "framework",
                                value: "WARNING_SCREENS",
                              },
                              {
                                kind: "Literal",
                                name: "location",
                                value: "story_tray",
                              },
                            ],
                            concreteType: "CIXScreen",
                            kind: "LinkedField",
                            name: "cix_screen",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "view_model",
                                plural: !1,
                                selections: [
                                  {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "StoriesTrayTileView_warningScreen",
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey:
                              'cix_screen(framework:"WARNING_SCREENS",location:"story_tray")',
                          },
                        ],
                        type: "CanRenderCIXScreen",
                        abstractKey: "__isCanRenderCIXScreen",
                      },
                    ],
                    storageKey: null,
                  },
                ],
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
                    args: d,
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "story_thumbnail",
                    plural: !1,
                    selections: c,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
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
              a,
              {
                args: [
                  { kind: "Variable", name: "blur", variableName: "blur" },
                ],
                kind: "FragmentSpread",
                name: "useStoriesTrayTilePressable_story",
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesTrayProfileImpressionLogging_bucket",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_bucket_live",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_bucket_seen_by_viewer",
            storageKey: null,
          },
          {
            args: [
              {
                kind: "Variable",
                name: "shouldEnableLiveInStoriesDropdown",
                variableName: "shouldEnableLiveInStoriesDropdown",
              },
            ],
            kind: "FragmentSpread",
            name: "StoriesTrayTileView_bucket",
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayTile_LWRAnimations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesTrayTile_LWRAnimations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesTrayTileView_LWRAnimations",
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
  "StoriesTrayTile_bucket.graphql",
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
        },
        c = { kind: "Variable", name: "scale", variableName: "scale" },
        d = { kind: "Literal", name: "width", value: 40 },
        e = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        f = [
          { kind: "Literal", name: "height", value: 277 },
          c,
          { kind: "Literal", name: "width", value: 156 },
        ],
        g = {
          alias: "coverImage",
          args: f,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: e,
          storageKey: null,
        },
        h = [
          b,
          {
            alias: null,
            args: [c, d],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: e,
            storageKey: null,
          },
          g,
        ];
      return {
        argumentDefinitions: [
          { defaultValue: 10, kind: "LocalArgument", name: "blur" },
          { kind: "RootArgument", name: "scale" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "shouldEnableLiveInStoriesDropdown",
          },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "shouldEnableVideoAutoplay",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "StoriesTrayTile_bucket",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesTrayProfileImpressionLogging_bucket",
          },
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ranking_tracking_string",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: h,
                type: "Event",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  b,
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "height", value: 40 },
                      c,
                      d,
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: e,
                    storageKey: null,
                  },
                  g,
                ],
                type: "Group",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: h,
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: h,
                type: "User",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "thumbnail_story_to_show",
            plural: !1,
            selections: [
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
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: [
                              {
                                kind: "Literal",
                                name: "framework",
                                value: "WARNING_SCREENS",
                              },
                              {
                                kind: "Literal",
                                name: "location",
                                value: "story_tray",
                              },
                            ],
                            concreteType: "CIXScreen",
                            kind: "LinkedField",
                            name: "cix_screen",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "view_model",
                                plural: !1,
                                selections: [
                                  {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "StoriesTrayTileView_warningScreen",
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey:
                              'cix_screen(framework:"WARNING_SCREENS",location:"story_tray")',
                          },
                        ],
                        type: "CanRenderCIXScreen",
                        abstractKey: "__isCanRenderCIXScreen",
                      },
                    ],
                    storageKey: null,
                  },
                ],
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
                    args: f,
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "story_thumbnail",
                    plural: !1,
                    selections: e,
                    storageKey: null,
                  },
                  {
                    condition: "shouldEnableVideoAutoplay",
                    kind: "Condition",
                    passingValue: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Video",
                        kind: "LinkedField",
                        name: "story_video_thumbnail",
                        plural: !1,
                        selections: [
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "StoriesTrayTileView_coverVideo",
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "FBStoryPortalInfo",
                    kind: "LinkedField",
                    name: "background_color_info",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "FBStoryColorInfo",
                        kind: "LinkedField",
                        name: "color_info",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "dominant_color",
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
                concreteType: "StoryCardStoryInfo",
                kind: "LinkedField",
                name: "story_card_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "can_viewer_reply",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                args: [
                  { kind: "Variable", name: "blur", variableName: "blur" },
                ],
                kind: "FragmentSpread",
                name: "useStoriesTrayTilePressable_story",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_bucket_live",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_bucket_seen_by_viewer",
            storageKey: null,
          },
          {
            args: [
              {
                kind: "Variable",
                name: "shouldEnableLiveInStoriesDropdown",
                variableName: "shouldEnableLiveInStoriesDropdown",
              },
            ],
            kind: "FragmentSpread",
            name: "StoriesTrayTileView_bucket",
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useStoriesTrayProfileImpressionLogging_bucket.graphql",
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
          kind: "InlineFragment",
          selections: [a],
          type: "Node",
          abstractKey: "__isNode",
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useStoriesTrayProfileImpressionLogging_bucket",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              b,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_viewer_friend",
                    storageKey: null,
                  },
                ],
                type: "User",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
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
            kind: "ScalarField",
            name: "ranking_tracking_string",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "thumbnail_story_to_show",
            plural: !1,
            selections: [
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
                    selections: [b],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useStoriesTrayTilePrefetchImageURI_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Variable", name: "scale", variableName: "scale" },
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [
          { defaultValue: 10, kind: "LocalArgument", name: "blur" },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "useStoriesTrayTilePrefetchImageURI_story",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "StoryBackdrop",
            kind: "LinkedField",
            name: "backdrop",
            plural: !1,
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: [
                          {
                            kind: "Variable",
                            name: "blur",
                            variableName: "blur",
                          },
                          a,
                        ],
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "image",
                        plural: !1,
                        selections: b,
                        storageKey: null,
                      },
                    ],
                    type: "Photo",
                    abstractKey: null,
                  },
                ],
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: [
                          { kind: "Literal", name: "height", value: 1920 },
                          a,
                          { kind: "Literal", name: "width", value: 1080 },
                        ],
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "image",
                        plural: !1,
                        selections: b,
                        storageKey: null,
                      },
                    ],
                    type: "Photo",
                    abstractKey: null,
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
  "useStoriesTrayTilePrefetchProfileURI_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Variable", name: "scale", variableName: "scale" },
        b = { kind: "Literal", name: "width", value: 40 },
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        d = [
          {
            alias: "profilePic",
            args: [a, b],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: c,
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: { plural: !0 },
        name: "useStoriesTrayTilePrefetchProfileURI_profile",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: d,
                type: "Event",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: "profilePic",
                    args: [
                      { kind: "Literal", name: "height", value: 40 },
                      a,
                      b,
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: c,
                    storageKey: null,
                  },
                ],
                type: "Group",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: d,
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: d,
                type: "User",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useStoriesTrayTilePressable_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: 10, kind: "LocalArgument", name: "blur" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "useStoriesTrayTilePressable_story",
      selections: [
        {
          args: [{ kind: "Variable", name: "blur", variableName: "blur" }],
          kind: "FragmentSpread",
          name: "useStoriesTrayTilePrefetchImageURI_story",
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
  "useStoriesBucketsIndexer_buckets.graphql",
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
        metadata: { plural: !0 },
        name: "useStoriesBucketsIndexer_buckets",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesIsBucketEmpty_buckets",
          },
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_viewer_post",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "gender",
                    storageKey: null,
                  },
                ],
                type: "User",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "story_bucket_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
            kind: "LinkedField",
            name: "unified_stories",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Story",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
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
                        args: null,
                        kind: "ScalarField",
                        name: "story_card_type",
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
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_bucket_seen_by_viewer",
            storageKey: null,
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useStoriesBucketsLogger_buckets.graphql",
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
        b = [a];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { plural: !0 },
        name: "useStoriesBucketsLogger_buckets",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "story_bucket_type",
            storageKey: null,
          },
          a,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_viewer_friend",
                    storageKey: null,
                  },
                  a,
                ],
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: b,
                type: "Node",
                abstractKey: "__isNode",
              },
            ],
            storageKey: null,
          },
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
            concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
            kind: "LinkedField",
            name: "unified_stories",
            plural: !1,
            selections: [
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
                concreteType: "Story",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: b,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometSideAdsRefreshHandler",
  [
    "CometHomeRightSideEgoRefetchQuery.graphql",
    "CometRHCRefreshConfig",
    "CometRelay",
    "ODS",
    "WebPixelRatio",
    "debounce",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, e, f, g) {
        var h = this;
        d("ODS").bumpEntityKey(
          144,
          "feed_ads",
          "CometSideAdsRefreshHandler.constructor"
        );
        this.$1 = a;
        this.$2 = !0;
        this.$9 = 1;
        this.$3 = !1;
        this.$4 = b;
        this.$6 = !1;
        this.$7 = !1;
        this.$8 = !1;
        this.$10 = !1;
        this.$11 = !1;
        this.$5 = Date.now();
        this.$13 = e;
        this.$14 = f;
        this.$16 = g;
        this.$15 = !1;
        this.$12 = c("debounce")(function () {
          h.checkEligibilityAndRefreshIfAllowed();
        }, c("CometRHCRefreshConfig").debounceDelay);
      }
      var b = a.prototype;
      b.checkEligibilityAndRefreshIfAllowed = function () {
        this.checkRefreshEligibility() && this.refresh();
      };
      b.checkRefreshEligibility = function () {
        if (this.$14 || this.$6 || !this.$2) return !1;
        if (this.isAdBackgroundedOnHomeTab() || this.isAdHiddenOnHomeTab())
          return !1;
        if (
          this.$8 ||
          Date.now() - this.$5 >= c("CometRHCRefreshConfig").refreshTimeout
        ) {
          c("CometRHCRefreshConfig").enableTestMode &&
            d("CometRelay")
              .fetchQuery(
                this.$1,
                c("CometHomeRightSideEgoRefetchQuery.graphql"),
                { refresh_num: this.$9, scale: d("WebPixelRatio").get() },
                {}
              )
              .toPromise();
          return !0;
        }
        return !1;
      };
      b.unregister = function () {
        this.$15 &&
          d("ODS").bumpEntityKey(
            144,
            "feed_ads",
            "CometSideAdsRefreshHandler.reload_query_discarded"
          ),
          (this.$2 = !1),
          this.handleActivityTracking();
      };
      b.refresh = function () {
        var a = this;
        if (this.$6) return;
        d("ODS").bumpEntityKey(
          144,
          "feed_ads",
          "CometSideAdsRefreshHandler.refresh_triggered"
        );
        this.$6 = !0;
        var b = "store-or-network";
        this.$8 &&
          this.$9 !== 0 &&
          (d("ODS").bumpEntityKey(
            144,
            "feed_ads",
            "CometSideAdsRefreshHandler.reload_started"
          ),
          (b = "network-only"),
          (this.$9 = 0),
          (this.$15 = !0));
        d("CometRelay")
          .fetchQuery(
            this.$1,
            c("CometHomeRightSideEgoRefetchQuery.graphql"),
            { refresh_num: this.$9, scale: d("WebPixelRatio").get() },
            { fetchPolicy: b }
          )
          .toPromise()
          .then(function (b) {
            if (
              a.$14 ||
              a.isAdBackgroundedOnHomeTab() ||
              a.isAdHiddenOnHomeTab() ||
              a.$7
            ) {
              d("ODS").bumpEntityKey(
                144,
                "feed_ads",
                "CometSideAdsRefreshHandler.refresh_cancelled"
              );
              return;
            }
            b = a.isAdHiddenForRefresh();
            a.$8 &&
              d("ODS").bumpEntityKey(
                144,
                "feed_ads",
                "CometSideAdsRefreshHandler.reload_finished." +
                  (b ? "hidden" : "visible")
              );
            a.$8 = !1;
            b
              ? ((a.$10 = !0),
                a.$13(a.$9),
                a.$9++,
                d("ODS").bumpEntityKey(
                  144,
                  "feed_ads",
                  "CometSideAdsRefreshHandler.refreshing_ui.hidden"
                ))
              : (a.$13(a.$9),
                a.$9++,
                (a.$15 = !1),
                (a.$5 = Date.now()),
                d("ODS").bumpEntityKey(
                  144,
                  "feed_ads",
                  "CometSideAdsRefreshHandler.refreshing_ui.visible"
                ));
          })
          ["finally"](function () {
            (a.$6 = !1),
              a.$7 &&
                ((a.$7 = !1),
                window.setTimeout(a.checkEligibilityAndRefreshIfAllowed(), 0));
          });
      };
      b.restartInitialLoad = function () {
        if (this.$8 || !this.$2) {
          this.$2 &&
            !this.$8 &&
            d("ODS").bumpEntityKey(
              144,
              "feed_ads",
              "CometSideAdsRefreshHandler.reload_opportunity_lost.not_refreshed"
            );
          return;
        }
        this.$8 = !0;
        this.$6 ? (this.$7 = !0) : this.checkEligibilityAndRefreshIfAllowed();
      };
      b.handleActivityTracking = function () {
        var a = this.$2 && this.$3 && !this.$4;
        a !== this.$11 &&
          (a ? this.enableActivityListeners() : this.removeActivityListeners());
      };
      b.isAdHiddenForRefresh = function () {
        return this.$4 && !this.$3;
      };
      b.isAdHiddenOnHomeTab = function () {
        return !this.$4 && !this.$3;
      };
      b.isAdBackgroundedOnHomeTab = function () {
        return !this.$4 && this.$16();
      };
      b.handleAnyVisibilityChange = function () {
        this.$3 &&
          !this.$4 &&
          this.$10 &&
          ((this.$10 = !1), (this.$15 = !1), (this.$5 = Date.now()));
      };
      b.enableActivityListeners = function () {
        window.addEventListener("scroll", this.$12),
          window.addEventListener("resize", this.$12),
          (this.$11 = !0);
      };
      b.removeActivityListeners = function () {
        window.removeEventListener("scroll", this.$12),
          window.removeEventListener("resize", this.$12),
          (this.$11 = !1);
      };
      b.setHiddenSubtree = function (a) {
        (this.$4 = a),
          a &&
            (d("ODS").bumpEntityKey(
              144,
              "feed_ads",
              "CometSideAdsRefreshHandler.reload_opportunity"
            ),
            this.restartInitialLoad()),
          this.handleAnyVisibilityChange(),
          this.handleActivityTracking();
      };
      b.setAdUnitVisibility = function (a) {
        (this.$3 = a),
          this.handleAnyVisibilityChange(),
          this.handleActivityTracking();
      };
      b.setEnvironment = function (a) {
        this.$1 = a;
      };
      b.setRefetchCallback = function (a) {
        this.$13 = a;
      };
      b.setIsHovered = function (a) {
        this.$14 = a;
      };
      b.setGetIsBackgrounded = function (a) {
        this.$16 = a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "useSideAdsRefreshHandler",
  [
    "CometRelay",
    "CometSideAdsRefreshHandler",
    "HiddenSubtreePassiveContext",
    "react",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useEffect,
      k = b.useRef;
    function a(a, b) {
      var e = d("CometRelay").useRelayEnvironment(),
        f = k(null),
        g = k(null),
        l = i(c("HiddenSubtreePassiveContext")),
        m = h(
          function () {
            return l.getCurrentState().backgrounded;
          },
          [l]
        );
      j(
        function () {
          f.current != null && f.current.setEnvironment(e);
        },
        [e]
      );
      j(
        function () {
          f.current != null &&
            f.current.setRefetchCallback(function (b) {
              a(b);
            });
        },
        [a]
      );
      j(
        function () {
          f.current != null && f.current.setGetIsBackgrounded(m);
        },
        [m]
      );
      j(
        function () {
          f.current != null && f.current.setIsHovered(b);
        },
        [b]
      );
      var n = h(
          function () {
            if (f.current != null) return;
            var d = l.getCurrentState();
            f.current = new (c("CometSideAdsRefreshHandler"))(
              e,
              d.hidden,
              function (b) {
                a(b);
              },
              b,
              m
            );
            g.current != null && (g.current.remove(), (g.current = null));
            g.current = l.subscribeToChanges(function (a) {
              f.current != null && f.current.setHiddenSubtree(a.hidden);
            });
          },
          [m, e, l, b, a]
        ),
        o = c("useVisibilityObserver")({
          onHidden: function () {
            f.current != null && f.current.setAdUnitVisibility(!1);
          },
          onVisible: function () {
            f.current != null && f.current.setAdUnitVisibility(!0);
          },
        }),
        p = h(
          function (a) {
            a != null && (n(), o(a));
          },
          [n, o]
        );
      j(function () {
        return function () {
          f.current != null && (f.current.unregister(), (f.current = null)),
            g.current != null && (g.current.remove(), (g.current = null));
        };
      }, []);
      return p;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometHovercardGroup.react",
  [
    "BaseContextualLayer.react",
    "CometPlaceholder.react",
    "CometRelay",
    "FocusInertRegion.react",
    "HiddenSubtreeContextProvider.react",
    "focusScopeQueries",
    "react",
    "recoverableViolation",
    "stylex",
    "useCometRelayEntrypointContextualEnvironmentProvider",
    "useDelayedState",
    "useFadeEffect",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useContext,
      j = e.useMemo,
      k = e.useRef,
      l = e.useState,
      m = 300,
      n = 50,
      o = {
        hovercard: {
          opacity: "b5wmifdl",
          transitionDuration: "c5ndavph",
          transitionProperty: "art1omkt",
          transitionTimingFunction: "ot9fgl3s",
        },
        hovercardVisible: {
          opacity: "pedkr2u6",
          transitionDuration: "ijkhr0an",
          transitionTimingFunction: "s13u9afw",
        },
      };
    function p(a) {
      var b = a.contentKey,
        e = a.entryPointReference,
        f = a.isVisible,
        g = a.otherProps;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "contentKey",
        "entryPointReference",
        "isVisible",
        "otherProps",
      ]);
      var i = c("useFadeEffect")(f),
        j = i[0],
        k = i[1];
      i = i[2];
      return !j
        ? null
        : h.jsx(
            c("CometPlaceholder.react"),
            {
              fallback: null,
              children: h.jsx(
                c("BaseContextualLayer.react"),
                babelHelpers["extends"]({ align: "middle" }, a, {
                  children: h.jsx(c("HiddenSubtreeContextProvider.react"), {
                    isHidden: !f,
                    children: h.jsx("div", {
                      className: c("stylex")(
                        o.hovercard,
                        k && o.hovercardVisible
                      ),
                      ref: i,
                      children: h.jsx(c("FocusInertRegion.react"), {
                        focusQuery: d("focusScopeQueries").tabbableScopeQuery,
                        children: h.jsx(d("CometRelay").EntryPointContainer, {
                          entryPointReference: e,
                          props: g,
                        }),
                      }),
                    }),
                  }),
                })
              ),
            },
            b
          );
    }
    p.displayName = p.name + " [from " + f.id + "]";
    var q = h.createContext(null);
    function a(a) {
      var b = a.children;
      a = a.xstyle;
      var d = c("useDelayedState")(!1),
        e = d[0],
        f = d[1];
      d = l(null);
      var g = d[0],
        i = d[1];
      d = j(
        function () {
          return {
            onShow: function (a) {
              i(a), f(!0, m);
            },
          };
        },
        [f]
      );
      var k = function () {
        f(!1, n);
      };
      return h.jsxs("div", {
        className: c("stylex")(a),
        onBlur: k,
        onMouseLeave: k,
        children: [
          h.jsx(q.Provider, { value: d, children: b }),
          g != null &&
            h.jsx(p, babelHelpers["extends"]({}, g, { isVisible: e })),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var r = 0;
    function s() {
      return "hovercard-" + r++;
    }
    function b(a) {
      var b = a.children,
        e = a.entryPoint,
        f = a.entryPointParams,
        g = a.xstyle,
        j = babelHelpers.objectWithoutPropertiesLoose(a, [
          "children",
          "entryPoint",
          "entryPointParams",
          "xstyle",
        ]),
        l = c("useCometRelayEntrypointContextualEnvironmentProvider")(),
        m = c("useStable")(s),
        n = k(null);
      a = i(q);
      var o = k(null),
        p = a || {},
        r = p.onShow;
      p = function () {
        r != null &&
          (o.current == null &&
            (o.current = d("CometRelay").loadEntryPoint(l, e, f)),
          r(
            babelHelpers["extends"]({}, j, {
              contentKey: m,
              contextRef: n,
              entryPointReference: o.current,
            })
          ));
      };
      a == null &&
        c("recoverableViolation")(
          "CometHovercardGroup: Cannot render a CometHovercardGroup.Child outside of a CometHovercardGroup.Group. ",
          "comet_ui"
        );
      return h.jsx("div", {
        className: c("stylex")(g),
        onFocus: p,
        onMouseEnter: p,
        children: b(n),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.Group = a;
    g.Child = b;
  },
  98
);
__d(
  "CometFeedEndOfFeedMessageForNewsfeedOnly.react",
  [
    "CometFeedEndOfFeedMessage.react",
    "HiddenSubtreePassiveContext",
    "NetworkStatus",
    "cr:1638891",
    "gkx",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useContext,
      j = e.useEffect,
      k = e.useRef,
      l = c("requireDeferred")("CometNewsFeedEofFalcoEvent").__setRef(
        "CometFeedEndOfFeedMessageForNewsfeedOnly.react"
      ),
      m = c("requireDeferred")("CometNewsFeedEofUnmountedFalcoEvent").__setRef(
        "CometFeedEndOfFeedMessageForNewsfeedOnly.react"
      );
    function a(a) {
      var d = a.endOfFeedComponent;
      d = d === void 0 ? c("CometFeedEndOfFeedMessage.react") : d;
      var e = a.feedUnitReceivedCount,
        f = a.feedUnitRenderedCount,
        g = a.friendsCount,
        n = a.hasPageInfo,
        o = a.isError,
        p = a.maxFeedUnitsReceived,
        q = a.onReload,
        r = a.onTailLoadReload,
        s = a.renderLocation,
        t = a.tailLoadErrored;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "endOfFeedComponent",
        "feedUnitReceivedCount",
        "feedUnitRenderedCount",
        "friendsCount",
        "hasPageInfo",
        "isError",
        "maxFeedUnitsReceived",
        "onReload",
        "onTailLoadReload",
        "renderLocation",
        "tailLoadErrored",
      ]);
      var u = k(!1),
        v = i(c("HiddenSubtreePassiveContext")),
        w = k(null),
        x =
          q != null
            ? function () {
                (u.current = !0), c("gkx")("1555064") && t ? r() : q();
              }
            : void 0;
      j(function () {
        if (s === "homepage_stream") {
          var a = o ? "unknown_error" : "no_more_edges";
          o &&
            (!n && t
              ? (a = "missing_page_info_and_tail_load_error")
              : !n
              ? (a = "missing_page_info")
              : t && (a = "tail_load_error"));
          var b = c("NetworkStatus").isOnline();
          w.current = Date.now();
          l.onReady(function (c) {
            c.log(function () {
              return {
                eof_mount_reason: a,
                feed_unit_count: f,
                feed_unit_received_count: e,
                is_online: b,
                max_feed_units_received_count: p,
                was_in_hidden_subtree:
                  v.getCurrentState().hiddenOrBackgrounded_FIXME,
              };
            });
          });
          return function () {
            var a = Date.now(),
              b = w.current != null ? a - w.current : null,
              c = u.current,
              d = v.getCurrentState().hiddenOrBackgrounded;
            m.onReady(function (a) {
              a.log(function () {
                return {
                  feed_unit_count: f,
                  feed_unit_received_count: e,
                  manual_reload: c,
                  mounted_duration: b,
                  was_in_hidden_subtree: d,
                };
              });
            });
          };
        }
      }, []);
      var y = !o && (g == null || g >= 60);
      return h.jsx(
        d,
        babelHelpers["extends"]({}, a, {
          feedUnitReceivedCount: e,
          friendsCount: g,
          isError: o,
          isTailLoadError: c("gkx")("1555064") && t,
          onReload: x,
          unstable_fbOnlyMessage:
            y && b("cr:1638891") != null ? h.jsx(b("cr:1638891"), {}) : void 0,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedFavoritesEndOfFeedMessage.react",
  ["CometFeedFavoritesEndOfFeedMessageQuery.graphql", "CometRelay", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var c = a.feedUnitReceivedCount;
      a = a.onReload;
      c = { hasNoStories: c === 0 };
      var e = d("CometRelay").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b("CometFeedFavoritesEndOfFeedMessageQuery.graphql")),
        c
      );
      return i.jsxs("div", {
        children: [
          i.jsx(d("CometRelay").MatchContainer, {
            match: e == null ? void 0 : e.see_first_migration_content,
            props: { onReload: a },
          }),
          i.jsx(d("CometRelay").MatchContainer, {
            match: e == null ? void 0 : e.favorites_caught_up_content,
            props: { hasNoStories: c.hasNoStories },
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
  "CometFeedKeyboardNavPositionContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(0);
    g["default"] = b;
  },
  98
);
__d(
  "CometNewsFeedLoadedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743387");
    c = b("FalcoLoggerInternal").create("comet_news_feed_loaded", a);
    e.exports = c;
  },
  null
);
__d(
  "useLogCometFeedUnitRenderAttemptEvent",
  [
    "CometRelay",
    "react",
    "recoverableViolation",
    "unrecoverableViolation",
    "useCometFeedUnitEventLogger",
    "useLogCometFeedUnitRenderAttemptEvent_newsFeedEdge.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useEffect,
      j = e.useRef;
    function a(a, e, f) {
      var g = j(!1);
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "useLogCometFeedUnitRenderAttemptEvent_newsFeedEdge.graphql"
            )),
        a
      );
      var k = a.category,
        l = a.deduplication_key;
      if (a.node == null)
        throw c("unrecoverableViolation")(
          "node cannot be null on edge in useLogCometFeedUnitRenderAttemptEvent",
          "comet_feed"
        );
      var m = c("useCometFeedUnitEventLogger")(a.node);
      i(
        function () {
          if (!g.current) {
            g.current = !0;
            if (l != null) {
              var a;
              m({
                category: (a = k) != null ? a : void 0,
                event: "render_attempt",
                position: e,
                renderLocation: (a = f) != null ? a : void 0,
              });
            } else
              c("recoverableViolation")(
                "deduplication key and node cannot be null in useLogCometFeedUnitRenderAttemptEvent",
                "comet_feed"
              );
          }
        },
        [k, l, m, e, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometNewsFeedUnit.react",
  [
    "CometFeedUnit.react",
    "CometFeedUnitOnUnsupportedLoggerContext",
    "CometFeedUnitSetStatusContext",
    "CometNewsFeedUnit_edge.graphql",
    "CometNewsFeedVPVDStore",
    "CometRelay",
    "FBLogger",
    "react",
    "useLayoutEffect_SAFE_FOR_SSR",
    "useLogCometFeedUnitRenderAttemptEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext;
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("CometNewsFeedUnit_edge.graphql")),
          a.edge
        ),
        f = e.category,
        g = e.node,
        k = g == null ? void 0 : g.__typename,
        l = a.position,
        m =
          a.variables.renderLocation !== "%future added value"
            ? a.variables.renderLocation
            : null;
      c("useLogCometFeedUnitRenderAttemptEvent")(e, l, m);
      var n = j(
          d("CometFeedUnitSetStatusContext").CometFeedUnitSetStatusContext
        ),
        o = g == null;
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          o &&
            (n("error"),
            c("FBLogger")("CometNewsFeedUnitNull").warn(
              "node should not be null in CometNewsFeedUnit",
              "comet_feed"
            ));
        },
        [o, n]
      );
      return g == null
        ? null
        : i.jsx(d("CometNewsFeedVPVDStore").LoggerProvider, {
            newsFeedEdge: e,
            children: i.jsx(
              d("CometFeedUnitOnUnsupportedLoggerContext")
                .CometFeedUnitOnUnsupportedLoggerContextProvider,
              {
                category: f,
                position: l,
                renderLocation: m,
                unitName: k,
                children: i.jsx(c("CometFeedUnit.react"), {
                  feedUnit: g,
                  position: l,
                  variables: a.variables,
                }),
              }
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometNewsfeedOrderingDebuggingState",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = { hasInjectedStories: null, order: null, reorderingEnabled: null };
    function a() {
      return g;
    }
    function b(a) {
      g.order = a;
    }
    function c(a) {
      g.hasInjectedStories = a;
    }
    function d(a) {
      g.reorderingEnabled = a;
    }
    f.dump = a;
    f.setFeedUnitOrderingState = b;
    f.setHasInjectedStories = c;
    f.setReorderingEnabled = d;
  },
  66
);
__d(
  "CometFeedGapRuleConfigProvider",
  ["cr:10858"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:10858");
  },
  98
);
__d(
  "CometFeedGapRules",
  ["CometFeedGapRuleConfigProvider", "FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h() {
      return c("CometFeedGapRuleConfigProvider").configName;
    }
    function a() {
      return Object.keys(c("CometFeedGapRuleConfigProvider").minGapFromTop);
    }
    function i(a) {
      return c("CometFeedGapRuleConfigProvider").minGapFromTop[a] !== void 0;
    }
    var j = new Set();
    function k(a, b, d) {
      if (j.has(a)) return;
      b = c("FBLogger")(b);
      d && (b = b.catching(d));
      b.warn(a);
      j.add(a);
      return;
    }
    function l(a) {
      i(a) ||
        k(
          "Feed unit category " +
            a +
            " is not supported by client-side gap rule config " +
            h(),
          "CometFeedGapValidation"
        );
    }
    function b(a, b) {
      a = [a, b];
      a.forEach(l);
      a.sort();
      b = a[0];
      a = a[1];
      return (b =
        (b = c("CometFeedGapRuleConfigProvider").minGap[b]) == null
          ? void 0
          : b[a]) != null
        ? b
        : 0;
    }
    function d(a) {
      l(a);
      return (a = c("CometFeedGapRuleConfigProvider").minGapFromTop[a]) != null
        ? a
        : 0;
    }
    g.getGapRuleConfigName = h;
    g.getSupportedFeedUnitCategories = a;
    g.getMinGapBetweenCategories = b;
    g.getMinGapFromTop = d;
  },
  98
);
__d(
  "CometFeedUnitStatusTrackingUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a
        .map(function (a, c) {
          return b(a) ? babelHelpers["extends"]({}, a, { position: c }) : null;
        })
        .filter(Boolean);
    }
    function b(a) {
      return a.filter(h);
    }
    function c(a) {
      return a.filter(i);
    }
    function d(a) {
      return a.filter(j);
    }
    function e(a) {
      return a.filter(function (a) {
        return a.status === "received" || a.status === "positioned";
      });
    }
    function g(a) {
      var b = a.reduce(function (a, b, c) {
        return j(b) ? c : a;
      }, -1);
      return a.map(function (a, c) {
        return c <= b && !j(a)
          ? babelHelpers["extends"]({}, a, { status: "rendered" })
          : a;
      });
    }
    function h(a) {
      return a.status === "rendered";
    }
    function i(a) {
      return a.status !== "error";
    }
    function j(a) {
      return (
        a.status === "rendered" ||
        a.status === "error" ||
        a.status === "positioned"
      );
    }
    f.getFeedUnitsWithOriginalPosition = a;
    f.getCurrentlyVisibleFeedUnits = b;
    f.getPossiblyVisibleFeedUnits = c;
    f.getAllPositionedFeedUnits = d;
    f.getUncommittedFeedUnits = e;
    f.getFeedUnitsWithRenderingOutOfOrderFixed = g;
    f.isCurrentlyVisible = h;
    f.isPossiblyVisible = i;
    f.isAnyPositionedType = j;
  },
  66
);
__d(
  "CometValidFeedUnitOrdering",
  ["CometFeedGapRules", "CometFeedUnitStatusTrackingUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return a.reduce(function (a, b) {
        return babelHelpers["extends"]({}, a, ((a = {}), (a[b.key] = b), a));
      }, {});
    }
    function i(a) {
      var b = {};
      d("CometFeedGapRules")
        .getSupportedFeedUnitCategories()
        .forEach(function (a) {
          b[a] = null;
        });
      a.forEach(function (a, c) {
        b[a.category] = c;
      });
      return b;
    }
    function j(a, b, c) {
      return (
        k(a, b, d("CometFeedUnitStatusTrackingUtils").isPossiblyVisible, c) ===
        null
      );
    }
    function k(a, b, c, e) {
      var f = d(
          "CometFeedUnitStatusTrackingUtils"
        ).getFeedUnitsWithOriginalPosition(a, c),
        g = f.length,
        h = i(f);
      a = Object.keys(h);
      c = d("CometFeedGapRules").getMinGapFromTop(b);
      var j = g;
      if (j < c)
        return {
          conflictPosition: null,
          conflictUnitCategory: null,
          violationType: "minGapFromTop",
        };
      j = null;
      var k =
        (c = e == null ? void 0 : e.sponsoredAuctionDistance) != null ? c : 0;
      a.some(function (a) {
        var c = d("CometFeedGapRules").getMinGapBetweenCategories(b, a);
        c = b === "SPONSORED" && a === "SPONSORED" ? Math.max(c, k + 1) : c;
        if (h[a] != null) {
          var e = g - h[a];
          if (e < c) {
            j = {
              conflictPosition: f[h[a]].position,
              conflictUnitCategory: a,
              violationType: "minGapBetweenCategories",
            };
            return !0;
          }
        }
        return !1;
      });
      return j;
    }
    function l(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d,
          e = b[c];
        if (
          j(a, e.category, {
            sponsoredAuctionDistance:
              e == null
                ? void 0
                : (d = e.edgeData) == null
                ? void 0
                : d.sponsoredAuctionDistance,
          })
        )
          return e;
      }
      return null;
    }
    function m(a, b) {
      var c = h(a);
      return b.filter(function (a) {
        return c[a.key] == null;
      });
    }
    function n(a, b) {
      if (a.length < 2 || b.length === 0) return [];
      b = b.reduce(function (a, b) {
        return babelHelpers["extends"]({}, a, ((a = {}), (a[b] = !0), a));
      }, {});
      var c = [];
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        if (b[e.key] != null) return c;
        c.push(e);
      }
      return [];
    }
    function a(a, b) {
      b === void 0 && (b = 0);
      var c = [];
      for (var b = b; b < a.length; b++) {
        var e = a[b];
        if (d("CometFeedUnitStatusTrackingUtils").isCurrentlyVisible(e)) {
          var f = k(
            a.slice(0, b),
            e.category,
            d("CometFeedUnitStatusTrackingUtils").isCurrentlyVisible
          );
          f != null &&
            c.push(
              babelHelpers["extends"]({}, f, {
                violationPosition: b,
                violationUnitCategory: e.category,
                violationUnitKey: e.key,
              })
            );
        }
      }
      return c;
    }
    function b(a, b, c) {
      c === void 0 && (c = !1);
      var d = b.reduce(function (a, b, c) {
          return babelHelpers["extends"]({}, a, ((a = {}), (a[b.key] = c), a));
        }, {}),
        e = {};
      a.forEach(function (a, b) {
        if (e[a.key] != null) {
          e[a.key].receivedPositions = e[a.key].receivedPositions.concat([b]);
          return;
        }
        e[a.key] = {
          receivedPositions: [b],
          renderedPosition: (b = d[a.key]) != null ? b : null,
        };
      });
      if (c) return e;
      var f = {};
      Object.keys(e).forEach(function (a) {
        var b = e[a];
        if (
          b.receivedPositions.length === 1 &&
          b.receivedPositions[0] === b.renderedPosition
        )
          return;
        f[a] = b;
      });
      return f;
    }
    function o(a) {
      var b = {};
      a = a.filter(function (a) {
        if (b[a.key]) return !1;
        b[a.key] = !0;
        return !0;
      });
      return a;
    }
    function c(a, b, c) {
      b = o(b);
      var e = h(b);
      a = a.filter(function (a) {
        return e[a.key] != null;
      });
      a = d("CometFeedUnitStatusTrackingUtils").getAllPositionedFeedUnits(
        d(
          "CometFeedUnitStatusTrackingUtils"
        ).getFeedUnitsWithRenderingOutOfOrderFixed(a)
      );
      c = n(b, c).map(function (a) {
        return babelHelpers["extends"]({}, a, { status: "positioned" });
      });
      var f = c.concat(a),
        g = m(f, b);
      c = function () {
        var a = l(f, g);
        if (a == null) return "break";
        f.push(babelHelpers["extends"]({}, a, { status: "received" }));
        g = g.filter(function (b) {
          return b.key !== a.key;
        });
      };
      while (g.length > 0) {
        a = c();
        if (a === "break") break;
      }
      return f;
    }
    g.getFeedUnitMap = h;
    g.getLastPositionsForCategories = i;
    g.isUnitEligibleToBePlacedNext = j;
    g.getViolationIfUnitIsPlacedNext = k;
    g.getNextEligibleUnit = l;
    g.getAvailableUnits = m;
    g.getNewHeadLoadedUnits = n;
    g.getFeedUnitOrderViolations = a;
    g.getFeedUnitReorderInfo = b;
    g.removeDuplicates = o;
    g.getValidFeedUnitOrdering = c;
  },
  98
);
__d(
  "useCometFeedIneligibleUnitLogger",
  ["CometFeedUnitsTypedLoggerLite", "CometValidFeedUnitOrdering", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useMemo,
      j = b.useRef;
    function a(a, b) {
      var e = j({}),
        f = i(
          function () {
            return a
              .map(function (a) {
                if (
                  a != null &&
                  a.category != null &&
                  a.deduplication_key != null
                ) {
                  return {
                    category: a.category,
                    key: a.deduplication_key,
                    status: "received",
                    typename:
                      (a =
                        a == null
                          ? void 0
                          : (a = a.node) == null
                          ? void 0
                          : a.__typename) != null
                        ? a
                        : null,
                  };
                }
                return null;
              })
              .filter(Boolean);
          },
          [a]
        ),
        g = f.reduce(function (a, b) {
          return babelHelpers["extends"]({}, a, ((a = {}), (a[b.key] = b), a));
        }, {}),
        k = f.map(function (a) {
          return { category: a.category, key: a.key, status: "rendered" };
        }),
        l = 0;
      k.some(function (a, b) {
        if (e.current[a.key] == null) {
          l = b;
          return !0;
        }
      });
      var m = d("CometValidFeedUnitOrdering").getFeedUnitOrderViolations(k, l),
        n = j({});
      h(function () {
        var a = {};
        f.forEach(function (d, e) {
          if (a[d.key] != null) {
            var f;
            a[d.key] += 1;
            a[d.key] > ((f = n.current[d.key]) != null ? f : 0) &&
              c("CometFeedUnitsTypedLoggerLite").log({
                category: d.category,
                event: "ineligible_for_position",
                ineligible_reason: "duplicate",
                position: e,
                render_location: b,
                unit_name: d.typename,
              });
          } else a[d.key] = 1;
        });
        n.current = a;
      });
      h(function () {
        m.forEach(function (a) {
          if (e.current[a.violationUnitKey] == null) {
            var d = a.violationPosition,
              f = a.violationUnitCategory;
            a = a.violationUnitKey;
            c("CometFeedUnitsTypedLoggerLite").log({
              category: f,
              event: "ineligible_for_position",
              ineligible_reason: "gap_rule_violation",
              position: d,
              render_location: b,
              unit_name:
                (d = (f = g[a]) == null ? void 0 : f.typename) != null
                  ? d
                  : null,
            });
          }
        }),
          k.forEach(function (a) {
            e.current[a.key] = !0;
          });
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedRequestWaterfallTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:FeedRequestWaterfallLoggerConfig"
    );
  },
  null
);
__d(
  "useCometFeedRequestWaterfallLogger",
  ["FeedRequestWaterfallTypedLoggerLite", "react", "usePrevious", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef;
    function a(a, b, d) {
      var e = j(null),
        f = c("usePrevious")(a);
      i(
        function () {
          if (f === a) return;
          if (e.current != null) {
            var b =
                f != null
                  ? a.filter(function (a) {
                      return !f.find(function (b) {
                        return b === a;
                      });
                    })
                  : a,
              g = b.reduce(function (a, b) {
                b = b.feed_backend_data;
                if (b == null || b.qid == null) return a;
                a[b.qid] == null && (a[b.qid] = 0);
                a[b.qid] += 1;
                return a;
              }, {});
            Object.keys(g).forEach(function (a) {
              c("FeedRequestWaterfallTypedLoggerLite").log({
                client_query_id: e.current,
                event: "client_received_response",
                is_employee: d,
                number_of_stories: g[a],
                query_id: a,
              });
            });
          }
        },
        [a, d, f]
      );
      var g = j(0),
        k = b.length;
      i(
        function () {
          e.current != null &&
            (c("FeedRequestWaterfallTypedLoggerLite").log({
              client_query_id: e.current,
              event: "client_rendered_success",
              is_employee: d,
              number_of_stories: k - g.current,
            }),
            (g.current = k));
        },
        [k, d]
      );
      b = h(
        function () {
          var a = c("uuid")();
          c("FeedRequestWaterfallTypedLoggerLite").log({
            client_query_id: a,
            event: "client_sent_request",
            is_employee: d,
          });
          e.current = a;
          return a;
        },
        [d]
      );
      var l = h(
        function (a) {
          c("FeedRequestWaterfallTypedLoggerLite").log({
            client_query_id: e.current,
            event: "client_failed_to_receive_response",
            failure_reason: a.message,
            is_employee: d,
            number_of_stories: g.current,
          });
        },
        [d]
      );
      return [b, l];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedUnitOrderingDebugInfo",
  ["CometValidFeedUnitOrdering"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      var c = [],
        e = [],
        f = d("CometValidFeedUnitOrdering").getFeedUnitMap(
          b
            .map(function (a) {
              return babelHelpers["extends"]({}, a, { status: "received" });
            })
            .concat(a)
        ),
        g = d("CometValidFeedUnitOrdering").getFeedUnitReorderInfo(b, a, !0);
      b.forEach(function (a) {
        a = a.key;
        a = {
          renderedPosition: g[a] != null ? g[a].renderedPosition : null,
          receivedPositions: g[a] != null ? g[a].receivedPositions : [],
          category: f[a].category,
          key: a,
          status: f[a].status,
        };
        a.renderedPosition != null ? (c[a.renderedPosition] = a) : e.push(a);
      });
      return { feedUnitsDeferred: e, feedUnitsToRender: c };
    }
    function a(a, b, c, d, e) {
      c === void 0 && (c = !0);
      d === void 0 && (d = 0);
      a = h(a, b);
      b = a.feedUnitsToRender.concat(a.feedUnitsDeferred);
      a = b.slice(d, e != null ? e : b.length);
      d = a.map(function (a) {
        var b = a.renderedPosition !== a.receivedPositions[0];
        return (
          (b ? "*" : " ") +
          " " +
          ((b = a.renderedPosition) != null ? b : "X").toString().padStart(3) +
          ": [" +
          (a.receivedPositions.toString() + "]").padEnd(7) +
          " " +
          a.category.padEnd(12).slice(0, 12) +
          " " +
          a.key.padEnd(10).slice(0, 10) +
          " " +
          a.status.slice(0, 16)
        );
      });
      if (c) {
        e =
          "  Pos: [recvd]  " +
          "Category".padEnd(13) +
          "Key (part)".padEnd(11) +
          "Status";
        return [e].concat(d).join("\n");
      }
      return d.join("\n");
    }
    g.getCometFeedUnitOrderingDebugInfo = h;
    g.getCometFeedUnitOrderingDebugInfoString = a;
  },
  98
);
__d(
  "getCometFeedUnitOrderingDebuggingTable",
  ["CometFeedUnitOrderingDebugInfo"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return {
        ReceivedPositions:
          "[" +
          a.receivedPositions.toString() +
          "]" +
          (a.renderedPosition !== a.receivedPositions[0] ? " reordered" : ""),
        Category: a.category,
        Key: a.key,
        Status: a.status + (a.renderedPosition == null ? " (deferred)" : ""),
      };
    }
    function a(a, b) {
      a = d("CometFeedUnitOrderingDebugInfo").getCometFeedUnitOrderingDebugInfo(
        a,
        b
      );
      b = a.feedUnitsToRender.map(h);
      a = a.feedUnitsDeferred.map(h);
      return { feedUnitsDeferred: a, feedUnitsToRender: b };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometFeedGapRuleViolationLogger",
  [
    "CometFeedUnitOrderingDebugInfo",
    "CometFeedUnitStatusTrackingUtils",
    "CometValidFeedUnitOrdering",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef,
      j = c("requireDeferred")(
        "CometFeedGapRuleViolationTypedLoggerLite"
      ).__setRef("useCometFeedGapRuleViolationLogger"),
      k = 6,
      l = 3;
    function a(a, b, c) {
      var e = i({}),
        f = 0;
      a.some(function (a, b) {
        if (
          d("CometFeedUnitStatusTrackingUtils").isCurrentlyVisible(a) &&
          e.current[a.key] == null
        ) {
          f = b;
          return !0;
        }
      });
      var g = d("CometValidFeedUnitOrdering").getFeedUnitOrderViolations(a, f);
      h(function () {
        g.forEach(function (f) {
          if (
            a[f.violationPosition] != null &&
            e.current[a[f.violationPosition].key] == null
          ) {
            var g = f.conflictPosition,
              h = f.conflictUnitCategory,
              i = f.violationPosition,
              m = f.violationType,
              n = f.violationUnitCategory;
            f = (f = g) != null ? f : 0;
            var o = c
                ? d(
                    "CometFeedUnitOrderingDebugInfo"
                  ).getCometFeedUnitOrderingDebugInfoString(
                    a,
                    b,
                    !0,
                    f - k,
                    i + 1 + l
                  )
                : null,
              p = a.slice(0, i + 1).filter(function (a) {
                return a.status === "error";
              }).length,
              q = a.slice(f + 1, i).filter(function (a) {
                return a.status === "error";
              }).length;
            j.onReady(function (a) {
              a.log({
                conflict_position: g,
                conflict_unit_category: h,
                debug_info: o,
                errored_in_gap_count: q,
                errored_total_count: p,
                reordering_enabled: c,
                violation_cause: "unknown",
                violation_position: i,
                violation_type: m,
                violation_unit_category: n,
              });
            });
          }
        }),
          a
            .filter(d("CometFeedUnitStatusTrackingUtils").isCurrentlyVisible)
            .forEach(function (a) {
              e.current[a.key] = !0;
            });
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometFeedUnitStatusTracking",
  ["CometFeedUnitStatusTrackingUtils", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useRef,
      j = ["received", "positioned", "rendered", "error"];
    function k(a, b) {
      b = b
        .map(function (b) {
          return a[b] != null
            ? { category: a[b].category, key: b, status: a[b].status }
            : null;
        })
        .filter(Boolean);
      return d(
        "CometFeedUnitStatusTrackingUtils"
      ).getFeedUnitsWithRenderingOutOfOrderFixed(b);
    }
    function a(a, b) {
      var c = i({}),
        d = i([]),
        e = i({}),
        f = i(0),
        g = f.current,
        l = h(
          function () {
            if (a != null) {
              var b = k(c.current, d.current);
              a(b);
            }
          },
          [a]
        ),
        m = h(function () {
          return k(c.current, d.current);
        }, []),
        n = h(function () {
          (c.current = {}),
            (d.current = []),
            (e.current = {}),
            (f.current += 1);
        }, []),
        o = h(
          function (a) {
            var b =
              d.current.length === a.length &&
              d.current.every(function (b, c) {
                return b === a[c];
              });
            if (b) return;
            d.current
              .filter(function (b) {
                return a.indexOf(b) === -1;
              })
              .forEach(function (a) {
                delete c.current[a];
              });
            d.current = a;
            l();
          },
          [l]
        ),
        p = h(
          function (a, d) {
            g;
            var f = c.current[a];
            if (f == null) {
              c.current[a] = d;
              l();
              return;
            }
            var h = j[Math.max(j.indexOf(d.status), j.indexOf(f.status))];
            d = { category: d.category, status: h };
            if (d.category === f.category && d.status === f.status) return;
            d.status === "error" &&
              e.current[a] === void 0 &&
              (b != null && b(a, f.status === "rendered"), (e.current[a] = !0));
            c.current[a] = d;
            l();
          },
          [b, l, g]
        ),
        q = k(c.current, d.current);
      return [q, o, p, n, m];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometFeedUnitReordering",
  [
    "CometFeedGapRules",
    "CometFeedUnitStatusTrackingUtils",
    "CometNewsfeedOrderingDebuggingState",
    "CometValidFeedUnitOrdering",
    "FBLogger",
    "InteractionTracingMetrics",
    "cr:991456",
    "emptyFunction",
    "getCometFeedUnitOrderingDebuggingTable",
    "gkx",
    "orEmptyArray",
    "react",
    "recoverableViolation",
    "useCometFeedGapRuleViolationLogger",
    "useCometFeedUnitStatusTracking",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useRef,
      k = e.useState;
    function l(a, b, d) {
      b === void 0 && (b = "CometFeedRenderingOrderError");
      d === void 0 && (d = "Feed unit effects called out of order");
      var e = null,
        f = null;
      a.forEach(function (a, b) {
        a.status === "rendered" && (e = b),
          a.status === "received" && f === null && (f = b);
      });
      if (e != null && f != null && f < e && f !== 0) {
        a = a
          .map(function (a, b) {
            return babelHelpers["extends"]({}, a, { position: b });
          })
          .slice(Math.max(0, f - 2), e + 2)
          .map(function (a) {
            return (
              String(a.position).padStart(2) +
              ": " +
              a.status +
              " | " +
              a.category +
              " | " +
              a.key
            );
          })
          .join("\n");
        c("FBLogger")(b).warn(d + " in positions " + f + "-" + e + ".\n" + a);
      }
    }
    function a(a, e, f) {
      var g = k(0);
      g[0];
      var m = g[1],
        n = j({});
      g = h(function (a, b) {
        m(function (a) {
          return a + 1;
        }),
          b && (n.current[a] = !0);
      }, []);
      i(
        function () {
          d("CometNewsfeedOrderingDebuggingState").setReorderingEnabled(e);
        },
        [e]
      );
      g = c("useCometFeedUnitStatusTracking")(c("emptyFunction"), g);
      var o = g[0],
        p = g[1],
        q = g[2],
        r = g[3],
        s = g[4],
        t = a
          .map(function (a) {
            if (a == null) {
              c("recoverableViolation")(
                "edge should not be nullish in useCometFeedUnitReordering",
                "comet_feed"
              );
              return null;
            }
            if (a.node == null) return null;
            if (a.category == null) {
              c("recoverableViolation")(
                "category should not be nullish in useCometFeedUnitReordering",
                "comet_feed"
              );
              return null;
            }
            if (a.deduplication_key == null) {
              c("recoverableViolation")(
                "deduplication_key should not be nullish in useCometFeedUnitReordering",
                "comet_feed"
              );
              return null;
            }
            var b = { category: a.category, key: a.deduplication_key };
            return c("gkx")("1578866")
              ? babelHelpers["extends"]({}, b, {
                  edgeData: {
                    sponsoredAuctionDistance: a.sponsored_auction_distance,
                  },
                })
              : b;
          })
          .filter(Boolean);
      g = c("usePrevious")(
        t.map(function (a) {
          return a.key;
        })
      );
      c("useCometFeedGapRuleViolationLogger")(o, t, e);
      var u = e
        ? d("CometValidFeedUnitOrdering").getValidFeedUnitOrdering(
            o,
            t,
            c("orEmptyArray")(g)
          )
        : t.map(function (a) {
            return babelHelpers["extends"]({}, a, { status: "received" });
          });
      i(function () {
        var a = u.map(function (a) {
          return a.key;
        });
        p(a);
        d("CometFeedUnitStatusTrackingUtils")
          .getUncommittedFeedUnits(u)
          .forEach(function (a) {
            return q(a.key, { category: a.category, status: a.status });
          });
      });
      var v = a.filter(Boolean).reduce(function (a, b) {
        if (b == null || b.deduplication_key == null) return a;
        return a[b.deduplication_key] != null
          ? a
          : babelHelpers["extends"](
              {},
              a,
              ((a = {}), (a[b.deduplication_key] = b), a)
            );
      }, {});
      o =
        f && e
          ? u.filter(d("CometFeedUnitStatusTrackingUtils").isPossiblyVisible)
          : u;
      g = e
        ? o
            .map(function (a) {
              return v[a.key];
            })
            .filter(Boolean)
        : a.filter(Boolean);
      var w = j(!1);
      i(function () {
        var b;
        b = (b = a[0]) == null ? void 0 : b.deduplication_key;
        if (e && !w.current && b != null && t != null && u != null) {
          var f = d("CometValidFeedUnitOrdering").getFeedUnitReorderInfo(t, u);
          f[b] != null &&
            c("InteractionTracingMetrics")
              .currentInteractionLogger()
              .addMetadata("firstFeedUnitReordered", 1);
          w.current = !0;
        }
      });
      i(
        function () {
          if (b("cr:991456") != null)
            var a,
              c = d("CometFeedGapRules").getGapRuleConfigName(),
              a = {
                CometFeedClientBlueSiteGapRuleConfig: "blue",
                CometFeedClientFullGapRuleConfig: "green",
                CometFeedClientMinimalGapRuleConfig: "cyan",
                CometFeedClientQEBasedGapRuleConfig: "orange",
              },
              c = (a = a[c]) != null ? a : "green";
        },
        [e]
      );
      i(function () {
        d("CometNewsfeedOrderingDebuggingState").setFeedUnitOrderingState(
          c("getCometFeedUnitOrderingDebuggingTable")(u, t)
        ),
          b("cr:991456") != null && b("cr:991456")(u, t);
      });
      i(function () {
        window.requestAnimationFrame(function () {
          l(
            s(),
            "CometFeedRenderingOrderErrorAfterAnimationFrame",
            "Feed units rendered out of order"
          );
        });
      });
      return {
        feedEdgesToRender: g,
        getFeedUnitStatusListPassive: s,
        resetFeedUnitRegistry: r,
        setFeedUnitRecord: q,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometNewsFeed.react",
  [
    "fbt",
    "CometBackupPlaceholder.react",
    "CometFeedEndOfFeedMessageForNewsfeedOnly.react",
    "CometFeedInfiniteScrollSuspenseList.react",
    "CometFeedKeyboardNavPositionContext",
    "CometFeedTailLoadConfig",
    "CometFeedUnitErrorBoundary.react",
    "CometFeedUnitSetDebugInfoContextProvider.react",
    "CometFeedUnitSetStatusContext",
    "CometFeedUnitStatusListPassiveContext",
    "CometFeedUnitsTypedLoggerLite",
    "CometHeroFeedItem.react",
    "CometHeroHoldTrigger.react",
    "CometNewsFeedLoadedFalcoEvent",
    "CometNewsFeedUnit.react",
    "CometNewsFeed_viewer.graphql",
    "CometNewsfeedOrderingDebuggingState",
    "CometOnInitialMount.react",
    "CometRelay",
    "CometScreenReaderHeading.react",
    "ErrorGuard",
    "FBLogger",
    "GHLSurfaceContainerContext",
    "HiddenSubtreePassiveContext",
    "InteractionTracingMetrics",
    "VideoAutoplayLocalScopeProvider.react",
    "VideoPlayerAutoplayRulesProvider",
    "cr:1142206",
    "cr:1813330",
    "gkx",
    "orEmptyArray",
    "react",
    "useCometFeedIneligibleUnitLogger",
    "useCometFeedKeyCommands",
    "useCometFeedRequestWaterfallLogger",
    "useCometFeedUnitReordering",
    "useSimpleImpression",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m = e.useEffect,
      n = e.useRef,
      o = e.useState,
      p = c("gkx")("1101967"),
      q = d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules(
        "default_feed"
      ),
      r = "homepage_stream",
      s = c("gkx")("1217157") ? [2, 2, 2, 2, 4] : void 0,
      t = i !== void 0 ? i : (i = b("CometNewsFeed_viewer.graphql")),
      u = j.memo(function (a) {
        var b,
          e = a.edge,
          f = a.position,
          g = a.setFeedUnitRecord;
        a = a.variables;
        var h = n(!1),
          i = e.node;
        if (i == null) return null;
        var k = (b = i.__typename) != null ? b : null;
        return j.jsx(c("CometHeroFeedItem.react"), {
          position: f,
          children: j.jsx(c("CometBackupPlaceholder.react"), {
            fallback: j.jsx(c("CometOnInitialMount.react"), {
              onInitialMount: function () {
                c("CometFeedUnitsTypedLoggerLite").log({
                  category: e.category,
                  event: "unexpected_resuspense",
                  position: f,
                  render_location: r,
                  unit_name: k,
                });
              },
            }),
            unstable_onSuspense: function (a) {
              h.current ||
                (c("CometFeedUnitsTypedLoggerLite").log({
                  category: e.category,
                  event: "unexpected_resuspense_with_name",
                  position: f,
                  promise_name: a,
                  render_location: r,
                  unit_name: k,
                }),
                (h.current = !0));
            },
            children: j.jsx(
              d("CometFeedUnitSetStatusContext")
                .CometFeedUnitSetStatusContextProvider,
              {
                category: e.category,
                deduplicationKey: e.deduplication_key,
                setFeedUnitRecord: g,
                children: j.jsx(c("CometFeedUnitErrorBoundary.react"), {
                  category: (b = e.category) != null ? b : void 0,
                  feedUnit: i,
                  position: f,
                  renderLocation: r,
                  unitTypename: k,
                  children: j.jsx(c("CometNewsFeedUnit.react"), {
                    edge: e,
                    position: f,
                    variables: a,
                  }),
                }),
              }
            ),
          }),
        });
      });
    function a(a) {
      var e,
        f,
        g = o(!1),
        i = g[0],
        v = g[1];
      g = o(!1);
      var w = g[0],
        x = g[1];
      g = d("CometRelay").usePaginationFragment(t, a.viewer);
      var y = g.data,
        z = g.hasNext,
        A = g.isLoadingNext,
        B = g.loadNext,
        C = d("CometRelay").useIsParentQueryActive(t, a.viewer);
      g = a.endOfFeedComponent;
      var D = a.isReloading,
        E = a.onReload,
        F = a.variables;
      a = y == null ? void 0 : y.is_fb_employee;
      var G = y == null ? void 0 : y.news_feed;
      e = (e = y == null ? void 0 : y.can_have_friends) != null ? e : !0;
      f =
        (f = y == null ? void 0 : (f = y.actor) == null ? void 0 : f.name) !=
        null
          ? f
          : null;
      var H = A || C || !w || D,
        I = !i && (z || C || !w),
        J =
          y == null
            ? void 0
            : (A = y.news_feed) == null
            ? void 0
            : A.injected_stories;
      D = (G == null ? void 0 : G.page_info) != null;
      y =
        y == null
          ? void 0
          : (A = y.all_friends) == null
          ? void 0
          : A.friend_count;
      var K = c("orEmptyArray")(G == null ? void 0 : G.edges);
      A = n(null);
      var L = n(null);
      m(
        function () {
          var a = {
            didMount: w,
            hasMore: I,
            hasNextFromPaginationFragment: z,
            isParentQueryActive: C,
            tailLoadErrored: i,
          };
          if (
            L.current != null &&
            L.current.tailLoadErrored === !1 &&
            L.current.hasMore === !1 &&
            I === !0
          ) {
            var b;
            b =
              (b = c("ErrorGuard").applyWithGuard(
                function () {
                  return JSON.stringify({
                    hasMoreObject: a,
                    previousHasMoreObject: L.current,
                  });
                },
                null,
                []
              )) != null
                ? b
                : "";
            c("FBLogger")("CometNewsfeedHasMoreUnstable")
              .addMetadata(
                "COMET_FEED",
                "FEED_UNIT_RECEIVED_COUNT",
                String(K.length)
              )
              .mustfix(
                "hasMore unexpectedly became true again after being false\n\n" +
                  b
              );
          }
          L.current = a;
        },
        [w, K.length, I, z, C, i]
      );
      var M = n(0),
        N = Math.max(M.current, K.length);
      m(
        function () {
          M.current = N;
        },
        [N]
      );
      c("useCometFeedIneligibleUnitLogger")(K, r);
      var O = l(c("HiddenSubtreePassiveContext"));
      m(function () {
        c("CometNewsFeedLoadedFalcoEvent").log(function () {
          return {
            feed_unit_count: P.length,
            feed_unit_received_count: K.length,
            was_in_hidden_subtree:
              O.getCurrentState().hiddenOrBackgrounded_FIXME,
          };
        });
      }, []);
      m(function () {
        x(!0);
      }, []);
      m(
        function () {
          d("CometNewsfeedOrderingDebuggingState").setHasInjectedStories(
            J != null
          );
        },
        [J]
      );
      G = c("useCometFeedUnitReordering")(K, c("gkx")("951936") && !J, p);
      var P = G.feedEdgesToRender,
        Q = G.getFeedUnitStatusListPassive,
        R = G.setFeedUnitRecord;
      G = c("useCometFeedRequestWaterfallLogger")(K, P, !!a);
      var S = G[0],
        T = G[1],
        U = k(
          function () {
            b("cr:1142206") != null &&
              b("cr:1142206").log(
                "[handleLoadMore]",
                "checking if we have hasNext or are isLoading",
                { hasNext: I, isLoading: H }
              );
            if (!I || H) return;
            b("cr:1142206") != null &&
              b("cr:1142206").log(
                "[handleLoadMore]",
                "starting tail load with trace"
              );
            var a = S();
            B(c("CometFeedTailLoadConfig").fetchCount, {
              UNSTABLE_extraVariables: { clientQueryId: a },
              onComplete: function (a) {
                a != null &&
                  (v(!0),
                  T(a),
                  b("cr:1142206") != null &&
                    b("cr:1142206").log(
                      "[loadNext]",
                      "Failed to fetch next page",
                      { errorMessage: a.toString(), hasNext: I, isLoading: H }
                    ));
              },
            });
          },
          [I, H, B, T, S]
        );
      a = k(
        function () {
          v(!1), U();
        },
        [U]
      );
      c("useSimpleImpression")(function () {
        c("InteractionTracingMetrics")
          .currentInteractionLogger()
          .addMetadata("comet_news_feed_count", P.length);
      });
      G = null;
      J != null && (G = d("CometRelay").ModuleResource.read(J));
      var V = {},
        W = 0,
        X = P.map(function (a, b) {
          if (a.node == null) return null;
          var c = a.deduplication_key;
          c != null
            ? (V[c] != null ? (V[c] += 1) : (V[c] = 1),
              (c = c + "-" + V[c].toString()))
            : (c = b.toString());
          return j.jsx(
            u,
            { edge: a, position: W++, setFeedUnitRecord: R, variables: F },
            c
          );
        });
      b("cr:1813330") != null && b("cr:1813330").setNewsFeedCount(X.length);
      var Y = c("useCometFeedKeyCommands")(P.length, "newsfeed"),
        Z = !H && !I,
        $ = !D || i;
      return j.jsxs("div", {
        "data-testid": void 0,
        ref: A,
        role: "feed",
        children: [
          j.jsx(c("CometScreenReaderHeading.react"), {
            children: h._("News Feed posts"),
          }),
          j.jsx(c("VideoAutoplayLocalScopeProvider.react"), {
            autoplayLocalRules: q,
            children: j.jsx(c("GHLSurfaceContainerContext").Provider, {
              value: A,
              children: j.jsxs(
                c("CometFeedKeyboardNavPositionContext").Provider,
                {
                  value: Y,
                  children: [
                    G ? j.jsx(G, {}) : null,
                    j.jsx(c("CometFeedUnitStatusListPassiveContext").Provider, {
                      value: Q,
                      children: j.jsxs(
                        c("CometFeedUnitSetDebugInfoContextProvider.react"),
                        {
                          location: "newsfeed",
                          children: [
                            j.jsx(c("CometHeroHoldTrigger.react"), {
                              description: "FeedQuery",
                              hold: (I || H) && P.length < 2,
                            }),
                            j.jsx(
                              c("CometFeedInfiniteScrollSuspenseList.react"),
                              {
                                hasMore: I,
                                incrementalRenderingPageSizes: s,
                                interactionSource: 0,
                                isLoading: H,
                                onLoadMore: U,
                                pageletName: "FeedUnit",
                                positionLimitForSSR: c("gkx")("1490223")
                                  ? 1
                                  : 0,
                                waitOnScrollIntent: !0,
                                children: X,
                              }
                            ),
                          ],
                        }
                      ),
                    }),
                    Z
                      ? j.jsx(
                          c("CometFeedEndOfFeedMessageForNewsfeedOnly.react"),
                          {
                            canHaveFriends: e,
                            endOfFeedComponent: g,
                            feedUnitReceivedCount: K.length,
                            feedUnitRenderedCount: P.length,
                            friendsCount: y,
                            hasPageInfo: D,
                            isError: $,
                            maxFeedUnitsReceived: N,
                            onReload: E,
                            onTailLoadReload: a,
                            renderLocation: r,
                            tailLoadErrored: i,
                            viewerName: f,
                          }
                        )
                      : null,
                  ],
                }
              ),
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
  "CometModernHomeFeed.react",
  [
    "CometFeedFavoritesEndOfFeedMessage.react",
    "CometModernHomeFeedQuery.graphql",
    "CometNewsFeed.react",
    "CometRelay",
    "RelayUFI2CommentsKeyContext",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = h !== void 0 ? h : (h = b("CometModernHomeFeedQuery.graphql"));
    a = i.memo(function (a) {
      var b = a.cacheBreaker,
        e = a.feedQueryReference,
        f = a.isLoading;
      a = a.onReload;
      var g = d("CometRelay").usePreloadedQuery(j, e),
        h = String(e.variables.orderby);
      h = h + "_" + b;
      b =
        e.variables.feedStyle === "FAVORITES_FEED" && c("gkx")("1386487")
          ? c("CometFeedFavoritesEndOfFeedMessage.react")
          : void 0;
      return i.jsx(c("RelayUFI2CommentsKeyContext").Provider, {
        value: "CometModernHomeFeedQuery",
        children: i.jsx(
          c("CometNewsFeed.react"),
          {
            endOfFeedComponent: b,
            isReloading: f,
            onReload: a,
            variables: e.variables,
            viewer: g.viewer,
          },
          h
        ),
      });
    });
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedClientQEBasedGapRuleConfig",
  ["qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = {
      configName: "CometFeedClientQEBasedGapRuleConfig",
      minGapFromTop: {
        END_OF_FEED_CONTENT: 0,
        ENGAGEMENT: 0,
        FB_STORIES: 0,
        FB_STORIES_ENGAGEMENT: 0,
        FIXED_POSITION: 0,
        HIGH_VALUE_PROMOTION: 0,
        ORGANIC: 0,
        PROMOTION: 0,
        SPONSORED: 1,
      },
      minGap: {
        END_OF_FEED_CONTENT: {
          ORGANIC: 0,
          ENGAGEMENT: 0,
          FIXED_POSITION: 0,
          PROMOTION: 0,
          SPONSORED: 0,
          END_OF_FEED_CONTENT: 0,
          FB_STORIES: 0,
          HIGH_VALUE_PROMOTION: 0,
          FB_STORIES_ENGAGEMENT: 0,
        },
        ENGAGEMENT: {
          ORGANIC: 0,
          ENGAGEMENT: 2,
          FIXED_POSITION: 0,
          PROMOTION: 0,
          SPONSORED: 0,
          FB_STORIES: 0,
          HIGH_VALUE_PROMOTION: 0,
          FB_STORIES_ENGAGEMENT: 0,
        },
        FB_STORIES: {
          ORGANIC: 0,
          FIXED_POSITION: 0,
          PROMOTION: 0,
          SPONSORED: 0,
          FB_STORIES: 0,
          HIGH_VALUE_PROMOTION: 0,
          FB_STORIES_ENGAGEMENT: 0,
        },
        FB_STORIES_ENGAGEMENT: {
          PROMOTION: 0,
          ORGANIC: 0,
          FIXED_POSITION: 0,
          SPONSORED: 0,
          HIGH_VALUE_PROMOTION: 0,
          FB_STORIES_ENGAGEMENT: 0,
        },
        FIXED_POSITION: {
          ORGANIC: 0,
          FIXED_POSITION: 0,
          PROMOTION: 2,
          SPONSORED: 0,
          HIGH_VALUE_PROMOTION: 0,
        },
        HIGH_VALUE_PROMOTION: {
          ORGANIC: 0,
          PROMOTION: 0,
          SPONSORED: 0,
          HIGH_VALUE_PROMOTION: 0,
        },
        ORGANIC: { ORGANIC: 0, PROMOTION: 0, SPONSORED: 0 },
        PROMOTION: { PROMOTION: 2, SPONSORED: 0 },
        SPONSORED: { SPONSORED: (a = c("qex")._("1450781")) != null ? a : 2 },
      },
    };
    g["default"] = b;
  },
  98
);
__d(
  "CometHomeContactGroup.react",
  [
    "JSResourceForInteraction",
    "JSScheduler",
    "MWThreadAddOnPrimary.re",
    "TetraListCell.react",
    "react",
    "useCometPreloader",
    "useMWChatOpenTabForGroup",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback,
      j = c("JSResourceForInteraction")("MWChatTabContainer.bs").__setRef(
        "CometHomeContactGroup.react"
      );
    function a(a) {
      var b = a.activeStatusOn,
        e = a.images,
        f = a.isThreadActive,
        g = a.lastActiveTime,
        k = a.name,
        l = a.threadID;
      a = c("MWThreadAddOnPrimary.re").get({
        isThreadActive: f,
        lastActiveTime: b ? g : void 0,
        size: 36,
        threadImages: e,
        threadTitle: k,
      });
      f = c("useMWChatOpenTabForGroup")("sidebar", "sidebarGroupsList");
      var m = f[0],
        n = f[1];
      b = i(
        function () {
          d("JSScheduler").scheduleSpeculativeCallback(function () {
            return j.preload();
          }),
            n(l);
        },
        [n, l]
      );
      g = c("useCometPreloader")("button", b, b);
      e = g[0];
      f = g[1];
      return h.jsx(c("TetraListCell.react"), {
        addOnPrimary: a,
        headline: k,
        level: 4,
        onHoverIn: e,
        onHoverOut: f,
        onPress: function () {
          return m(l);
        },
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeContactGroupsContentWrapper.react",
  [
    "fbt",
    "ix",
    "CometHomeContactsPresenceAwareList.react",
    "MWChatOpenNewTab.re",
    "TetraListCell.react",
    "fbicon",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.activeStatusOn;
      a = a.groups;
      var e = d("MWChatOpenNewTab.re").useHook("sidebar", "sidebarGroupsList");
      if (a.length > 0)
        return j.jsx(c("CometHomeContactsPresenceAwareList.react"), {
          active: b,
          children: j.jsx(j.Fragment, { children: a }),
        });
      else
        return c("gkx")("1406650")
          ? null
          : j.jsx(c("TetraListCell.react"), {
              addOnPrimary: {
                icon: d("fbicon")._(i("483769"), 20),
                size: 36,
                type: "contained-icon",
              },
              headline: h._("Create New Group"),
              level: 4,
              onPress: function () {
                return e();
              },
            });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWParticipantListRenderer",
  ["fbt", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    d("react");
    a = (function () {
      function a() {
        var a = this;
        this.$6 = function (b) {
          var c = a.$5;
          if (c != null) {
            var d = b.id;
            if (d != null && c[d] != null && c[d] != void 0) return c[d];
          }
          return a.$2 ? b.short_name : b.name;
        };
        this.$1 = !1;
        this.$2 = !1;
        this.$3 = !1;
        this.$4 = 0;
        this.$5 = null;
      }
      var b = a.prototype;
      b.renderParticipantList = function (a) {
        a = a.map(this.$6);
        switch (a.length) {
          case 0:
            return i(this.$1);
          case 1:
            return j(a);
          case 2:
            return this.$3 ? l(a) : k(a);
          case 3:
            return this.$3 ? n(a) : m(a);
          default:
            return this.$3 ? p(a, this.$4) : o(a, this.$4);
        }
      };
      b.setIsNewThread = function (a) {
        this.$1 = a;
        return this;
      };
      b.setNameRenderer = function (a) {
        this.$6 = a;
        return this;
      };
      b.setUseShortName = function (a) {
        this.$2 = a;
        return this;
      };
      b.setNickname = function (a) {
        this.$5 = a;
        return this;
      };
      b.setUseAndSeparator = function (a) {
        this.$3 = a;
        return this;
      };
      b.setTotalParticipantCount = function (a) {
        this.$4 = a;
        return this;
      };
      return a;
    })();
    function i(a) {
      if (a) return h._("New Message");
      else return h._("No Participants");
    }
    function j(a) {
      return a[0];
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      return h._("{participant1}, {participant2}", [
        h._param("participant1", a[0]),
        h._param("participant2", a[1]),
      ]);
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
      return h._("{participant1} and {participant2}", [
        h._param("participant1", a[0]),
        h._param("participant2", a[1]),
      ]);
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      return h._("{participant1}, {participant2}, {participant3}", [
        h._param("participant1", a[0]),
        h._param("participant2", a[1]),
        h._param("participant3", a[2]),
      ]);
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      return h._("{participant1}, {participant2} and {participant3}", [
        h._param("participant1", a[0]),
        h._param("participant2", a[1]),
        h._param("participant3", a[2]),
      ]);
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a, b) {
      return h._(
        "{participant1}, {participant2}, {participant3}, {others_link}",
        [
          h._param("participant1", a[0]),
          h._param("participant2", a[1]),
          h._param("participant3", a[2]),
          h._param("others_link", q((b || a.length) - 3)),
        ]
      );
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p(a, b) {
      return h._("{participant1}, {participant2} and {others_link}", [
        h._param("participant1", a[0]),
        h._param("participant2", a[1]),
        h._param("others_link", q((b || a.length) - 2)),
      ]);
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function q(a) {
      if (a > 1)
        return h._({ "*": "{others_count} others" }, [
          h._param("others_count", a, [0]),
        ]);
      else return h._("1 other");
    }
    g["default"] = a;
  },
  98
);
__d(
  "MWUIThreadTitle.bs",
  [
    "CurrentUser",
    "FBID.bs",
    "JsDictReadOnly.bs",
    "MWParticipantListRenderer",
    "bs_belt_Array",
    "bs_caml_option",
    "bs_js_dict",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      var c = {};
      b("bs_js_dict")
        .entries(a)
        .forEach(function (a) {
          c[a[0]] = a[1];
        });
      return c;
    }
    function h(a, c, d, e, f) {
      if (a !== "") return a;
      a = g(d);
      return new (b("MWParticipantListRenderer"))()
        .setUseShortName(f)
        .setUseAndSeparator(e)
        .setIsNewThread(!1)
        .setNickname(a)
        .renderParticipantList(c);
    }
    function i(a, c, d) {
      var e = b("CurrentUser").getID(),
        f = b("JsDictReadOnly.bs").keys(c).length,
        g = b("bs_belt_Array").keepMap(
          b("JsDictReadOnly.bs").keys(c),
          function (a) {
            if (b("FBID.bs").ofStringExn(a) === e && f > 1) return;
            a = b("JsDictReadOnly.bs").get(c, a);
            if (a !== void 0)
              return { id: a.id, name: a.name, short_name: a.short_name };
          }
        );
      return h(a, g, d, !0, !0);
    }
    function a(a, c, d) {
      return i(a, b("JsDictReadOnly.bs").from(c), d);
    }
    function j(a, c) {
      if (a !== void 0) return [b("bs_caml_option").valFromOption(a)];
      else {
        var d = b("CurrentUser").getID();
        a = b("JsDictReadOnly.bs").keys(c);
        var e = a.length;
        return b("bs_belt_Array").keepMap(a, function (a) {
          a = b("FBID.bs").ofStringExn(a);
          if (a === d && e !== 1) return;
          else {
            a = b("JsDictReadOnly.bs").get(c, a);
            if (a !== void 0)
              return b("bs_caml_option").nullable_to_opt(
                b("bs_caml_option").valFromOption(a).image_src
              );
            else return;
          }
        });
      }
    }
    function c(a, c) {
      return j(a, b("JsDictReadOnly.bs").from(c));
    }
    f.getTitleForGroup_ = i;
    f.getTitleForGroup = a;
    f.getProfileImages_ = j;
    f.getProfileImages = c;
  },
  null
);
__d(
  "MWUIThreadTitle.re",
  ["MWUIThreadTitle.bs", "bs_curry"],
  function (a, b, c, d, e, f) {
    a = function (a) {
      a = b("bs_curry")._3(
        b("MWUIThreadTitle.bs").getTitleForGroup_,
        a.threadName,
        a.participants,
        a.nicknames
      );
      return a;
    };
    f.getTitleForGroup_ = a;
    c = function (a) {
      a = b("bs_curry")._2(
        b("MWUIThreadTitle.bs").getProfileImages_,
        a.threadImage == null ? void 0 : a.threadImage,
        a.participants
      );
      return a;
    };
    f.getProfileImages_ = c;
  },
  null
);
__d(
  "CometHomeContactGroups.react",
  [
    "fbt",
    "CometHomeContactGroup.react",
    "CometHomeContactGroupsContentWrapper.react",
    "CometHomeContactGroups_viewer.graphql",
    "CometHomeRightRailUnit.react",
    "CometRelay",
    "CometUnitHeader.react",
    "CometVisualCompletionAttributes",
    "MWUIThreadTitle.re",
    "cr:1996927",
    "gkx",
    "orEmptyArray",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = h._("Group Conversations");
    function l(a, b) {
      return a
        .map(function (a) {
          var e, f, g;
          a = a == null ? void 0 : a.node;
          if (
            a == null ||
            ((e = a.thread_key) == null ? void 0 : e.thread_fbid) == null ||
            a.thread_type !== "GROUP"
          )
            return null;
          e = a.thread_key.thread_fbid;
          f = c("orEmptyArray")(
            (f = a.all_participants) == null ? void 0 : f.edges
          );
          var h = !1;
          f = Object.fromEntries(
            f
              .map(function (a) {
                var b;
                a = (a = a.node) == null ? void 0 : a.messaging_actor;
                if ((a == null ? void 0 : a.id) == null) return null;
                var c = a.id;
                if (
                  (a == null ? void 0 : a.name) == null ||
                  ((b = a.profile_picture) == null ? void 0 : b.uri) == null
                )
                  return null;
                a.availability === "ACTIVE" && (h = !0);
                return [
                  c,
                  {
                    id: c,
                    image_src: a.profile_picture.uri,
                    name: a.name,
                    short_name: (b = a.short_name) != null ? b : a.name,
                  },
                ];
              })
              .filter(Boolean)
          );
          g = c("orEmptyArray")(
            (g = a.customization_info) == null
              ? void 0
              : g.participant_customizations
          );
          g = Object.fromEntries(
            g
              .map(function (a) {
                return a == null ||
                  a.participant_id == null ||
                  a.nickname == null
                  ? null
                  : [a.participant_id, a.nickname];
              })
              .filter(Boolean)
          );
          g = d("MWUIThreadTitle.re").getTitleForGroup_({
            nicknames: g,
            participants: f,
            threadName: (g = a.name) != null ? g : "",
          });
          f = d("MWUIThreadTitle.re").getProfileImages_({
            participants: f,
            threadImage: (f = a.image) == null ? void 0 : f.uri,
          });
          return j.jsx(
            "li",
            {
              children: j.jsx(c("CometHomeContactGroup.react"), {
                activeStatusOn: b,
                images: f,
                isThreadActive: h,
                lastActiveTime: a.updated_time,
                name: g,
                threadID: e,
              }),
            },
            e
          );
        })
        .filter(Boolean)
        .slice(0, 3);
    }
    function m(a) {
      var b = a.activeStatusOn;
      a = a.viewer;
      a = l(
        c("orEmptyArray")(
          a == null
            ? void 0
            : (a = a.message_threads) == null
            ? void 0
            : a.edges
        ),
        b
      );
      return j.jsx(c("CometHomeContactGroupsContentWrapper.react"), {
        activeStatusOn: b,
        groups: a,
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      var e;
      a = a.viewer$key;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometHomeContactGroups_viewer.graphql")),
        a
      );
      if ((a == null ? void 0 : a.chat_sidebar_is_collapsed) === !0)
        return null;
      if (
        (a == null
          ? void 0
          : (e = a.actor) == null
          ? void 0
          : e.should_hide_group_conversations_list) === !0
      )
        return null;
      e = c("qex")._("971346");
      e =
        e === !0
          ? (a == null
              ? void 0
              : (e = a.presence_view_side_settings) == null
              ? void 0
              : e.is_active_status_viewable) === !0
          : (a == null ? void 0 : a.chat_visibility) === !0;
      return j.jsx(
        "div",
        babelHelpers["extends"](
          { "data-testid": void 0 },
          c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
          {
            children: j.jsxs(c("CometHomeRightRailUnit.react"), {
              hasBottomDivider: !1,
              header: j.jsx(c("CometUnitHeader.react"), {
                headline: k,
                headlineColor: "secondary",
                level: 3,
              }),
              children: [
                j.jsx(m, { activeStatusOn: e, viewer: a }),
                c("gkx")("1406650") && j.jsx(b("cr:1996927"), {}),
              ],
            }),
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeContactGroupsContainer.react",
  [
    "CometHomeContactGroups.react",
    "CometHomeContactGroupsContainerQuery.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.homeContactGroupsQueryReference;
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("CometHomeContactGroupsContainerQuery.graphql")),
        a
      );
      a = a.viewer;
      return i.jsx(c("CometHomeContactGroups.react"), { viewer$key: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWChatFilterContacts",
  ["CometHomeContactsConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a) {
      var b = 0,
        d = 0;
      a = a.filter(function (a) {
        if (
          d >= c("CometHomeContactsConfig").numContactsToFetch &&
          a.availability !== "ACTIVE"
        )
          return !1;
        var e = a == null ? void 0 : a.id;
        if (e == null) return !1;
        a.availability === "ACTIVE" && b++;
        d++;
        return !0;
      });
      return { activeCount: b, filteredContacts: a };
    };
    g.filter = a;
  },
  98
);
__d(
  "CometHomeContactListItems.react",
  [
    "CometHomeContactListItems_viewer.graphql",
    "CometHovercardGroup.react",
    "CometHovercardQueryRenderer.entrypoint",
    "CometRelay",
    "MWChatContact.react",
    "MWChatFilterContacts",
    "emptyFunction",
    "orEmptyArray",
    "react",
    "useActorHovercardContext",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.openTabForUser;
      a = a.viewer$key;
      var f = c("useActorHovercardContext")(),
        g = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometHomeContactListItems_viewer.graphql")),
          a
        );
      a = c("orEmptyArray")(g == null ? void 0 : g.chat_sidebar_contacts);
      a = d("MWChatFilterContacts").filter(a);
      a = a.filteredContacts;
      return i.jsx(d("CometHovercardGroup.react").Group, {
        children: a.map(function (a) {
          var b;
          return i.jsx(
            "li",
            {
              children: i.jsx(d("CometHovercardGroup.react").Child, {
                entryPoint: c("CometHovercardQueryRenderer.entrypoint"),
                entryPointParams: {
                  context: f,
                  entityID: (b = a.id) != null ? b : "",
                },
                otherProps: {
                  onClose: c("emptyFunction"),
                  visualStyle: "without_action_bar",
                },
                position: "start",
                children: function (b) {
                  return i.jsx("div", {
                    ref: b,
                    children: i.jsx(c("MWChatContact.react"), {
                      lsEntryPoint: "sidebarContactsList",
                      openTabForUser: e,
                      profile: a,
                      viewer: g,
                    }),
                  });
                },
              }),
            },
            a.id
          );
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.memo(a, function (a, b) {
      return b.preventReordering;
    });
    f = e;
    g["default"] = f;
  },
  98
);
__d(
  "CometHomeContacts.react",
  [
    "fbt",
    "ix",
    "BaseContextualLayerAnchorRootContext",
    "CometEntryPointPopoverTrigger.react",
    "CometHomeChatSettings.entrypoint",
    "CometHomeContactListItems.react",
    "CometHomeContactsPresenceAwareList.react",
    "CometHomeContacts_viewer.graphql",
    "CometHomeRightRailUnit.react",
    "CometProgressRingIndeterminate.react",
    "CometRelay",
    "CometTooltip.react",
    "CometTooltipGroup.react",
    "CometUnitHeader.react",
    "CometVisualCompletionAttributes",
    "FocusWithinHandler.react",
    "LogHistory",
    "MWChatFilterContacts",
    "MessengerWebEventsFalcoEvent",
    "RoomsGating",
    "RoomsLinkCreationSupported",
    "TetraButton.react",
    "TetraIcon.react",
    "cometGetKeyCommandConfig",
    "cr:1815922",
    "cr:942",
    "cr:943",
    "fbicon",
    "orEmptyArray",
    "qex",
    "react",
    "useLayerKeyCommands",
    "useMWChatNewVideoChat",
    "useMWChatOpenTabForUser",
    "useMWChatSidebarStateSettingMutation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useEffect,
      m = e.useMemo,
      n = e.useRef,
      o = e.useState,
      p = h._("Contacts"),
      q = h._("New Room"),
      r = h._("Search by name or group"),
      s = h._("Options");
    function a(a) {
      var e;
      a = a.viewer$key;
      var f = n(document.body),
        g = d("CometRelay").useFragment(
          j !== void 0 ? j : (j = b("CometHomeContacts_viewer.graphql")),
          a
        ),
        t = c("orEmptyArray")(g == null ? void 0 : g.chat_sidebar_contacts);
      a = (g == null ? void 0 : g.chat_sidebar_is_collapsed) === !0;
      var u = o(!1),
        v = u[0],
        w = u[1];
      u = c("useMWChatNewVideoChat")();
      var x = u[0];
      u = u[1];
      var y = c("useMWChatSidebarStateSettingMutation")(),
        z = c("useMWChatOpenTabForUser")("sidebar", "sidebarContactsList"),
        A = z[0];
      z[1];
      z =
        b("cr:942") == null
          ? void 0
          : b("cr:942").useHook("rhc_search_icon", "sidebarSearch");
      e =
        (e =
          b("cr:943") == null
            ? void 0
            : b("cr:943")("sidebar", "sidebarContactsList")) != null
          ? e
          : {};
      var B = e.onPress;
      e = babelHelpers.objectWithoutPropertiesLoose(e, ["onPress"]);
      var C = (z = z) != null ? z : B;
      z = m(
        function () {
          return [
            d("cometGetKeyCommandConfig").getCometKeyCommandConfig(
              "newsfeed",
              "searchContacts",
              C
            ),
          ];
        },
        [C]
      );
      c("useLayerKeyCommands")(z);
      B = c("qex")._("971346");
      var D =
        B === !0
          ? (g == null
              ? void 0
              : (z = g.presence_view_side_settings) == null
              ? void 0
              : z.is_active_status_viewable) === !0
          : (g == null ? void 0 : g.chat_visibility) === !0;
      B = g == null ? void 0 : g.ghl_label;
      l(function () {
        c("MessengerWebEventsFalcoEvent").log(function () {
          return { event_name: "show_sidebar_contacts" };
        });
      }, []);
      z =
        (z =
          (z = g.joinable_video_chats) == null
            ? void 0
            : (z = z.new_room_fbt) == null
            ? void 0
            : z.text) != null
          ? z
          : q;
      var E = d("MWChatFilterContacts").filter(t),
        F = E.activeCount,
        G = E.filteredContacts;
      l(
        function () {
          d("LogHistory")
            .getInstance("messenger-comet")
            .debug("num contacts", G.length, t.length);
        },
        [G.length, t.length]
      );
      E = k.jsx(c("CometUnitHeader.react"), {
        addOn_DEPRECATED: k.jsx("div", {
          className: "j83agx80",
          children: k.jsxs(c("CometTooltipGroup.react"), {
            children: [
              d("RoomsLinkCreationSupported").isLinkCreationSupported() &&
              !d("RoomsGating").shouldShowRoomsUnitInCometRHC()
                ? k.jsx(c("CometTooltip.react"), {
                    align: "end",
                    tooltip: z,
                    children:
                      u || !1
                        ? k.jsx("div", {
                            className: "ozuftl9m tvfksri0 j83agx80 bp9cbjyn",
                            children: k.jsx(
                              c("CometProgressRingIndeterminate.react"),
                              { color: "disabled", size: 16 }
                            ),
                          })
                        : k.jsx("div", {
                            className: "ozuftl9m tvfksri0",
                            children: k.jsx(c("TetraIcon.react"), {
                              "aria-label": z,
                              color: "secondary",
                              disabled: u,
                              icon: d("fbicon")._(i("1383158"), 16),
                              onPress: function () {
                                return x("fb_chat_side_bar");
                              },
                            }),
                          }),
                  })
                : null,
              k.jsx(c("CometTooltip.react"), {
                align: "end",
                position: "below",
                tooltip: r,
                children: k.jsx("div", {
                  className: "ozuftl9m tvfksri0",
                  children: k.jsx(
                    c("TetraIcon.react"),
                    babelHelpers["extends"]({}, e, {
                      "aria-label": r,
                      color: "secondary",
                      icon: d("fbicon")._(i("491282"), 16),
                      onPress: C,
                    })
                  ),
                }),
              }),
              k.jsx(c("CometEntryPointPopoverTrigger.react"), {
                align: "end",
                entryPointParams: {},
                otherProps: { chatSettingsContextualSection: "contacts" },
                popoverEntryPoint: c("CometHomeChatSettings.entrypoint"),
                position: "below",
                preloadTrigger: "button",
                children: function (a, b, e) {
                  return k.jsx(c("CometTooltip.react"), {
                    align: "end",
                    position: "below",
                    tooltip: s,
                    children: k.jsx("div", {
                      className: "ozuftl9m",
                      children: k.jsx(c("TetraIcon.react"), {
                        "aria-label": s,
                        color: "secondary",
                        icon: d("fbicon")._(i("484386"), 16),
                        onPress: function () {
                          b();
                        },
                        ref: a,
                      }),
                    }),
                  });
                },
              }),
            ],
          }),
        }),
        headline:
          b("cr:1815922") && B != null
            ? k.jsx(b("cr:1815922"), {
                label: B,
                location: "rhc",
                text: p,
                withTextDecoration: !1,
              })
            : p,
        headlineColor: "secondary",
        level: 3,
      });
      return k.jsx(
        "div",
        babelHelpers["extends"](
          { "data-testid": void 0 },
          c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
          {
            children: k.jsx(
              c("BaseContextualLayerAnchorRootContext").Provider,
              {
                value: f,
                children:
                  G.length > 0
                    ? k.jsx(c("CometHomeRightRailUnit.react"), {
                        hasBottomDivider: !a,
                        header: E,
                        children: a
                          ? k.jsx("div", {
                              className: "dati1w0a sj5x9vvc hv4rvrfc cxgpxx05",
                              children: k.jsx(c("TetraButton.react"), {
                                addOnSecondary: k.jsx(c("TetraIcon.react"), {
                                  icon: d("fbicon")._(i("492450"), 16),
                                }),
                                label: h._("See All ({active count})", [
                                  h._param("active count", F),
                                ]),
                                onPress: function () {
                                  y({ is_collapsed: !1 });
                                },
                                size: "medium",
                                type: "secondary",
                              }),
                            })
                          : k.jsx("div", {
                              onMouseEnter: function () {
                                return w(!0);
                              },
                              onMouseLeave: function () {
                                return w(!1);
                              },
                              children: k.jsx(c("FocusWithinHandler.react"), {
                                children: function (a, b) {
                                  return k.jsx(
                                    c(
                                      "CometHomeContactsPresenceAwareList.react"
                                    ),
                                    {
                                      active: D,
                                      children: k.jsx(
                                        c("CometHomeContactListItems.react"),
                                        {
                                          activeStatusOn: D,
                                          openTabForUser: A,
                                          preventReordering: v || a || b,
                                          viewer$key: g,
                                        }
                                      ),
                                    }
                                  );
                                },
                              }),
                            }),
                      })
                    : null,
              }
            ),
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeContactsContainer.react",
  [
    "CometHomeContacts.react",
    "CometHomeContactsContainerQuery.graphql",
    "CometRelay",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e;
      a = a.homeContactsQueryReference;
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0 ? h : (h = b("CometHomeContactsContainerQuery.graphql")),
        a
      );
      a = a.viewer;
      e =
        (e =
          a == null
            ? void 0
            : (e = a.actor) == null
            ? void 0
            : e.should_hide_contact_list) != null
          ? e
          : !1;
      if (a == null) {
        c("recoverableViolation")(
          "cannot render contacts without a viewer",
          "messenger_web_product"
        );
        return i.jsx("div", {});
      }
      return e
        ? i.jsx("div", {})
        : i.jsx(c("CometHomeContacts.react"), { viewer$key: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeContactAndGroupContainer.react",
  [
    "CometErrorBoundary.react",
    "CometHomeContactGroupsContainer.react",
    "CometHomeContactsContainer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.homeContactGroupsQueryReference;
      a = a.homeContactsQueryReference;
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("CometErrorBoundary.react"), {
            children: h.jsx(c("CometHomeContactsContainer.react"), {
              homeContactsQueryReference: a,
            }),
          }),
          h.jsx(c("CometErrorBoundary.react"), {
            children: h.jsx(c("CometHomeContactGroupsContainer.react"), {
              homeContactGroupsQueryReference: b,
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
  "CometHomeGQLCreateGroupButton.react",
  ["fbt", "ix", "TetraListCell.react", "cr:939", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback;
    function a() {
      var a = b("cr:939")("sidebar", "sidebarGroupsList"),
        e = a.onPress;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["onPress"]);
      var f = k(
        function () {
          e();
        },
        [e]
      );
      return j.jsx(
        c("TetraListCell.react"),
        babelHelpers["extends"]({}, a, {
          addOnPrimary: {
            icon: d("fbicon")._(i("483769"), 20),
            size: 36,
            type: "contained-icon",
          },
          headline: h._("Create New Group"),
          level: 4,
          onPress: f,
          testid: void 0,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeRightSideEgo.react",
  [
    "CometHomeRightSideEgo_viewer.graphql",
    "CometRelay",
    "ODS",
    "Random",
    "react",
    "useSideAdsRefreshHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.startTransition,
      k = e.useCallback,
      l = e.useEffect,
      m = e.useState,
      n = h !== void 0 ? h : (h = b("CometHomeRightSideEgo_viewer.graphql"));
    function a(a) {
      a = d("CometRelay").useRefetchableFragment(n, a.viewerRef);
      var b = a[0],
        e = a[1];
      b = b == null ? void 0 : (a = b.sideFeed) == null ? void 0 : a.nodes;
      a = m(null);
      var f = a[0];
      a = a[1];
      var g = m(!1),
        h = g[0],
        o = g[1];
      l(function () {
        var a = function () {
          o(!1);
        };
        window.addEventListener("blur", a);
        return function () {
          window.removeEventListener("blur", a);
        };
      }, []);
      l(
        function () {
          if (f == null) {
            var a = 2;
            d("Random").coinflip(a) &&
              d("ODS").bumpEntityKey(
                144,
                "feed_ads",
                "CometHomeRightSideEgo.empty_first_unit",
                a
              );
          }
        },
        [f]
      );
      g = k(
        function (a) {
          j(function () {
            e({ refresh_num: a }, { fetchPolicy: "store-only" });
          });
        },
        [e, j]
      );
      g = c("useSideAdsRefreshHandler")(g, h);
      if (b != null && b.length >= 1 && f !== b[0]) {
        a(b[0]);
        return null;
      }
      return f == null || Object.keys(f).length === 0
        ? null
        : i.jsx("div", {
            onMouseEnter: function () {
              o(!0);
            },
            onMouseLeave: function () {
              o(!1);
            },
            ref: g,
            children: i.jsx(d("CometRelay").MatchContainer, { match: f }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = a;
    g["default"] = e;
  },
  98
);
__d(
  "CometHomeRightSideEgoContainer.react",
  [
    "CometHomeRightSideEgo.react",
    "CometHomeRightSideEgoContainer_egoPanel.graphql",
    "CometRelay",
    "FBLogger",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.egoPanel;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometHomeRightSideEgoContainer_egoPanel.graphql")),
        a
      );
      if (!a) {
        c("FBLogger")("feed_ads").mustfix("Expecting non-nullviewer");
        return null;
      }
      return i.jsx("span", {
        children: i.jsx(c("CometHomeRightSideEgo.react"), { viewerRef: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometRightSideHeaderCards.react",
  [
    "CometErrorBoundary.react",
    "CometHomeRightSideEgoContainer.react",
    "CometRelay",
    "CometRightSideHeaderCardsQuery.graphql",
    "CometRightSideHeaderCards_viewerSideFeed.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = h !== void 0 ? h : (h = b("CometRightSideHeaderCardsQuery.graphql")),
      l =
        i !== void 0
          ? i
          : (i = b("CometRightSideHeaderCards_viewerSideFeed.graphql"));
    function m(a) {
      a = a.rightSideHeaderCardsQueryReference;
      a = d("CometRelay").usePreloadedQuery(k, a);
      var b = a.viewer,
        e = a;
      a = d("CometRelay").useFragment(l, b);
      if (b == null) return null;
      a = a == null ? void 0 : (a = a.side_feed) == null ? void 0 : a.nodes;
      var f = null;
      a =
        a != null
          ? a
              .map(function (a, b) {
                if (
                  (a == null ? void 0 : a.__typename) ===
                    "CometHomeSideFeedWidgetContainer" ||
                  (a == null ? void 0 : a.__typename) ===
                    "CometHomeSideFeedWidgetContainerWithSeeMore"
                ) {
                  f = j.jsx(
                    c("CometErrorBoundary.react"),
                    {
                      children: j.jsx(d("CometRelay").MatchContainer, {
                        match: a,
                      }),
                    },
                    b
                  );
                  return null;
                } else if ((a == null ? void 0 : a.__typename) === "PagesSideFeedUnit") return j.jsx(c("CometErrorBoundary.react"), { children: j.jsx(d("CometRelay").MatchContainer, { match: a, props: { query$key: e } }) }, b);
                return j.jsx(
                  c("CometErrorBoundary.react"),
                  {
                    children: j.jsx(d("CometRelay").MatchContainer, {
                      match: a,
                    }),
                  },
                  b
                );
              })
              .filter(Boolean)
          : null;
      return j.jsxs("div", {
        children: [
          f,
          j.jsx(c("CometHomeRightSideEgoContainer.react"), { egoPanel: b }),
          a,
        ],
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      return j.jsx(c("CometErrorBoundary.react"), {
        children: j.jsx(m, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedInlineComposerSproutsList.react",
  [
    "FeedInlineComposerFeelingSprout.react",
    "cr:1454274",
    "cr:1482362",
    "cr:254",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs("div", {
        className:
          "k4urcfbm cxgpxx05 stjgntxs ni8dbmo4 n1l5q3vz kwzhilbh qypqp5cg lhclo0ds j83agx80 bo76ibdq",
        children: [
          b("cr:1482362") &&
            h.jsx(b("cr:1482362"), { triggerRef: a.triggerRef }),
          h.jsx(b("cr:254"), {
            isViewingSelf: !0,
            launchBlueVideoComposer: a.launchBlueVideoComposer,
            onHoverIn: a.onHoverInPrerenderer,
            onHoverOut: a.onHoverOutPrerenderer,
            onPressIn: a.onPressInPrerenderer,
            showComposerDialog: a.showFeedComposerDialog,
            triggerRef: a.triggerRef,
          }),
          !b("cr:1482362") &&
            h.jsx(b("cr:1454274"), {
              onHoverIn: a.onHoverInPrerenderer,
              onHoverOut: a.onHoverOutPrerenderer,
              onPressIn: a.onPressInPrerenderer,
              showComposerDialog: a.showFeedComposerDialog,
              triggerRef: a.triggerRef,
            }),
          h.jsx(c("FeedInlineComposerFeelingSprout.react"), {
            onHoverIn: a.onHoverInPrerenderer,
            onHoverOut: a.onHoverOutPrerenderer,
            onPressIn: a.onPressInPrerenderer,
            showComposerDialog: a.showFeedComposerDialog,
            triggerRef: a.triggerRef,
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
  "CometFeedInlineComposer.react",
  [
    "fbt",
    "CometCard.react",
    "CometFeedInlineComposerPressableProfilePic.react",
    "CometFeedInlineComposerQuery.graphql",
    "CometFeedInlineComposerSproutsList.react",
    "CometFeedInlineComposerWOYM.react",
    "CometRelay",
    "CometScreenReaderHeading.react",
    "cometGetKeyCommandConfig",
    "cr:1993522",
    "cr:2025886",
    "getComposerUnsavedChangesAlert",
    "gkx",
    "qex",
    "react",
    "useComposerTerminalEventLog",
    "useFeedComposerCometDialog",
    "useLayerKeyCommands",
    "useOnBeforeUnload",
    "usePostInProgress",
    "useResumableComposerViewState",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useMemo,
      m = e.useRef,
      n = { current: null };
    function a(a) {
      var e;
      a = a.feedInlineComposerQueryReference;
      var f = m(!1),
        g = c("useResumableComposerViewState")(),
        o = g.clearResumableViewState,
        p = g.getResumableViewState,
        q = g.saveResumableViewState;
      g = c("usePostInProgress")();
      var r = g.postPlainText,
        s = g.updatePostPlainText,
        t = m(!1);
      c("useOnBeforeUnload")(function () {
        return c("getComposerUnsavedChangesAlert")(t.current);
      });
      c("useComposerTerminalEventLog")(
        function () {
          return t.current;
        },
        function () {
          return p().creationSessionID;
        }
      );
      g = k(
        function (a) {
          if (f.current === !0) (t.current = !1), o(), s(p());
          else {
            var b;
            t.current = (b = a == null ? void 0 : a.isDirty) != null ? b : !1;
            q(a);
            s(p());
          }
        },
        [o, s, p, q]
      );
      var u = function () {
          f.current = !1;
        },
        v = function () {
          (t.current = !0), (f.current = !1);
        },
        w = function () {
          f.current = !0;
        },
        x = h._("Create Post");
      a = d("CometRelay").usePreloadedQuery(
        i !== void 0 ? i : (i = b("CometFeedInlineComposerQuery.graphql")),
        a
      );
      a = a.viewer;
      var y =
        (a == null ? void 0 : (e = a.actor) == null ? void 0 : e.id) || "";
      e =
        (a == null
          ? void 0
          : (e = a.actor) == null
          ? void 0
          : e.has_professional_features_for_watch) === !0;
      var z = e && c("gkx")("1430759"),
        A = b("cr:2025886")({
          composerEntryPointRef: "pages_feed_video_composer",
          targetID: y,
        });
      e = c("useFeedComposerCometDialog")({
        composerEntryPointName: "inline_composer",
        composerSourceSurface: "newsfeed",
        composerType: "feed",
        onBeforeClose: g,
        onSave: u,
        onSaveError: v,
        onSubmit: w,
        title: x,
        tracePolicy: "comet.composer.feed",
      });
      var B = e[0];
      g = e[1];
      u = e[2];
      v = e[3];
      w = e[4];
      var C = k(
        function (a) {
          t.current = !1;
          var b = c("qex")._("322") === !0;
          b = p(a == null ? void 0 : a.additionalMediaAttachmentItems, {
            startWithHeaderTextStyle: b,
          });
          b = babelHelpers["extends"]({}, b, {
            characterLimit: 63206,
            mediaAttachmentsLimit: 80,
            videoComposerData: {
              launchBlueVideoComposer: A,
              shouldOpenVideoSpecificComposer: z,
              targetID: y,
            },
          });
          B({
            beginningViewState: b,
            pushedPageOnLoad: a == null ? void 0 : a.pushedPageOnLoad,
          });
        },
        [p, A, B, y, z]
      );
      x = l(
        function () {
          return [
            d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig(
              "newsfeed",
              "newPost",
              C
            ),
          ];
        },
        [C]
      );
      c("useLayerKeyCommands")(x);
      e = h._("Create a post");
      x = j.jsx(c("CometCard.react"), {
        background: "white",
        dropShadow: 1,
        children: j.jsxs("div", {
          "aria-label": e,
          className:
            "pybr56ya dati1w0a hv4rvrfc osnr6wyh lhclo0ds j83agx80 bp9cbjyn",
          role: "region",
          children: [
            j.jsxs("div", {
              className: "k4urcfbm g5gj957u buofh1pr j83agx80 ll8tlv6m",
              children: [
                j.jsx(c("CometScreenReaderHeading.react"), { children: e }),
                j.jsx(c("CometFeedInlineComposerPressableProfilePic.react"), {
                  profile$key: a == null ? void 0 : a.actor,
                }),
                j.jsx(c("CometFeedInlineComposerWOYM.react"), {
                  onHoverInPrerenderer: u,
                  onHoverOutPrerenderer: v,
                  onPress: function () {
                    return C();
                  },
                  onPressInPrerenderer: w,
                  postPlainText: r,
                  profile$key: a == null ? void 0 : a.actor,
                  triggerRef: g,
                }),
              ],
            }),
            j.jsx(c("CometFeedInlineComposerSproutsList.react"), {
              launchBlueVideoComposer: z ? A : null,
              onHoverInPrerenderer: u,
              onHoverOutPrerenderer: v,
              onPressInPrerenderer: w,
              showFeedComposerDialog: C,
              triggerRef: g,
            }),
          ],
        }),
      });
      if (b("cr:1993522") == null) return x;
      else
        return j.jsx(b("cr:1993522"), {
          enableFeature: !1,
          fallback: j.jsx(c("CometCard.react"), {
            background: "white",
            dropShadow: 1,
            children: j.jsxs("div", {
              "aria-label": e,
              className:
                "pybr56ya dati1w0a hv4rvrfc osnr6wyh lhclo0ds j83agx80 bp9cbjyn",
              role: "region",
              children: [
                j.jsx(c("CometScreenReaderHeading.react"), { children: e }),
                j.jsx(c("CometFeedInlineComposerPressableProfilePic.react"), {
                  profile$key: a == null ? void 0 : a.actor,
                }),
                j.jsx(c("CometFeedInlineComposerWOYM.react"), {
                  onPress: function () {},
                  profile$key: a == null ? void 0 : a.actor,
                  triggerRef: n,
                }),
                j.jsx(c("CometFeedInlineComposerSproutsList.react"), {
                  showFeedComposerDialog: function () {},
                  triggerRef: n,
                }),
              ],
            }),
          }),
          children: x,
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometMessengerCreateGroupDialog.entrypoint",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function () {
        return {};
      },
      root: c("JSResourceForInteraction")(
        "CometMessengerCreateGroupCardedDialog.react"
      ).__setRef("CometMessengerCreateGroupDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "useCometOpenCreateGroupDialog",
  [
    "CometMessengerCreateGroupDialog.entrypoint",
    "react",
    "useCometEntryPointDialog",
    "useMWChatOpenTabForGroup",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a() {
      var a = c("useMWChatOpenTabForGroup").apply(void 0, arguments),
        b = a[0];
      a[1];
      var d = c("useCometEntryPointDialog")(
          c("CometMessengerCreateGroupDialog.entrypoint"),
          {}
        ),
        e = d[0],
        f = d[1],
        g = h(
          function () {
            e({
              onCreateGroup: function (a) {
                return b(a);
              },
            });
          },
          [e, b]
        );
      return { onPress: g, ref: f };
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoMeetupCreationDialogContainerComet.entrypoint",
  [
    "JSResourceForInteraction",
    "RoomsInviteViewQuery$Parameters",
    "VideoMeetupCreationDialogContainerCometQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b;
        return {
          queries: {
            inviteQueryReference: {
              parameters: c("RoomsInviteViewQuery$Parameters"),
              variables: {
                linkHash:
                  (b = a.linkHash) != null
                    ? b
                    : (b = a.routeProps) == null
                    ? void 0
                    : b.link_hash,
                scale: d("WebPixelRatio").get(),
              },
            },
            queryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: c(
                "VideoMeetupCreationDialogContainerCometQuery$Parameters"
              ),
              variables: {
                linkHash:
                  (b = a.linkHash) != null
                    ? b
                    : (b = a.routeProps) == null
                    ? void 0
                    : b.link_hash,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "VideoMeetupCreationDialogContainerComet.react"
      ).__setRef("VideoMeetupCreationDialogContainerComet.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "RoomsExplanationDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "RoomsExplanationDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            queryReference: {
              parameters: c("RoomsExplanationDialogQuery$Parameters"),
              variables: { scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "RoomsExplanationDialog.react"
      ).__setRef("RoomsExplanationDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "useRoomsLinkExplanationDialog",
  [
    "RoomsEnumType",
    "RoomsExplanationDialog.entrypoint",
    "VideoChatLogging",
    "useCometEntryPointDialog",
    "useRoomsCreateDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = c("useCometEntryPointDialog")(
          c("RoomsExplanationDialog.entrypoint"),
          {},
          "button"
        ),
        b = a[0],
        e = a[1],
        f = a[2],
        g = a[3];
      a = a[4];
      var h = c("useRoomsCreateDialog")(),
        i = h.showDialog;
      h = d("VideoChatLogging").useVideoChatLogging();
      var j = h.defaultData;
      h = function () {
        var a = babelHelpers["extends"]({}, j);
        b(
          { loggingData: a },
          function (b) {
            b === d("RoomsEnumType").RoomsDialogActions.CREATE &&
              i({ loggingData: a });
          },
          "comet.rooms.info_button"
        );
      };
      return {
        dialogTriggerRef: e,
        onHoverInPrerenderer: f,
        onHoverOutPrerenderer: g,
        onPressInPrerenderer: a,
        showDialogWithLogging: h,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "RoomsJoinDialogMoreMenu.entrypoint",
  ["JSResourceForInteraction", "RoomsJoinDialogMoreMenuQuery$Parameters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.id;
        return {
          queries: {
            popover: {
              parameters: c("RoomsJoinDialogMoreMenuQuery$Parameters"),
              variables: { id: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "RoomsJoinDialogMoreMenu.react"
      ).__setRef("RoomsJoinDialogMoreMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "useRoomsMarkAsInterested",
  [
    "CometRelay",
    "VideoChatLogging",
    "WebPixelRatio",
    "cometPushToast",
    "useRoomsMarkAsInterestedMutation.graphql",
    "useRoomsMarkAsInterested_fbts.graphql",
    "useRoomsMarkAsInterested_room.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = 2e3;
    function a(a, c) {
      var e = d("CometRelay").useMutation(
          h !== void 0 ? h : (h = b("useRoomsMarkAsInterestedMutation.graphql"))
        ),
        f = e[0];
      e[1];
      e = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("useRoomsMarkAsInterested_room.graphql")),
        a
      );
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("useRoomsMarkAsInterested_fbts.graphql")),
        c
      );
      c = d("VideoChatLogging").useVideoChatLogging();
      var g = c.defaultData,
        l = c.logRoomInterestTap,
        m = e == null ? void 0 : e.id,
        n = e == null ? void 0 : e.link_url,
        o = e == null ? void 0 : e.room_card_cta_enum,
        p =
          a == null
            ? void 0
            : (c = a.interested_hint_text) == null
            ? void 0
            : c.text,
        q = babelHelpers["extends"]({}, g, {
          num_room_participants:
            (a = e == null ? void 0 : e.active_call_participant_count) != null
              ? a
              : 0,
          video_call_link_id: (c = m) != null ? c : void 0,
        }),
        r = e == null ? void 0 : e.link_viewer;
      g = function () {
        l(q);
        if (m == null || n == null || o == null) return;
        var a, b;
        o === "ALREADY_INTERESTED"
          ? ((a = "REMOVE_FROM_INTERESTED_PARTICIPANTS"), (b = "INTERESTED"))
          : o === "INTERESTED" &&
            ((a = "ADD_AS_INTERESTED_PARTICIPANT"), (b = "ALREADY_INTERESTED"));
        f({
          onCompleted: function (a) {
            a =
              (a = a.joinable_video_chats_update_interested_joiners) == null
                ? void 0
                : (a = a.messenger_call_invite_link) == null
                ? void 0
                : a.room_card_cta_enum;
            p != null &&
              a === "ALREADY_INTERESTED" &&
              d("cometPushToast").cometPushSimpleToast(p, k);
          },
          onError: function () {
            d("cometPushToast").cometPushErrorToast({
              message:
                "There was an error marking yourself interested in this room. Please try again later.",
            });
          },
          optimisticResponse: {
            joinable_video_chats_update_interested_joiners: {
              messenger_call_invite_link: {
                id: m,
                interested_participants: { nodes: [] },
                room_card_cta_enum: b,
              },
            },
          },
          optimisticUpdater: function (b) {
            var c,
              e = r == null ? void 0 : r.id;
            if (r == null || e == null) return;
            c =
              (c = b.get(m)) == null
                ? void 0
                : c.getLinkedRecord("interested_participants", {
                    query_type: "FRIEND_INCLUDING_SELF",
                  });
            var f = c == null ? void 0 : c.getLinkedRecords("nodes");
            if (f == null || c == null) return;
            var g = [];
            if (a === "REMOVE_FROM_INTERESTED_PARTICIPANTS")
              f[0] != null && f[0].getValue("id") === e && (g = f.slice(1));
            else if (a === "ADD_AS_INTERESTED_PARTICIPANT") {
              var h;
              h = (h = b.get(e)) != null ? h : b.create(e, "User");
              h.setValue(r.name, "name");
              b = h.getOrCreateLinkedRecord("profile_picture", "Image", {
                height: 160,
                scale: d("WebPixelRatio").get(),
                width: 160,
              });
              b.setValue(
                (e = r.profile_picture) == null ? void 0 : e.uri,
                "uri"
              );
              g = [h].concat(f);
            }
            c.setLinkedRecords(g, "nodes");
          },
          variables: {
            input: { action: a, messenger_call_invite_link_uri: n },
            scale: d("WebPixelRatio").get(),
          },
        });
      };
      return g;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useJoinableVideoChatsDidViewEducationalQPMutation",
  ["CometRelay", "useJoinableVideoChatsDidViewEducationalQPMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a() {
      var a = d("CometRelay").useMutation(
          h !== void 0
            ? h
            : (h = b(
                "useJoinableVideoChatsDidViewEducationalQPMutation.graphql"
              ))
        ),
        c = a[0];
      a[1];
      return function (a) {
        return c({ variables: { input: a } });
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useJoinableVideoChatsOptInMutation",
  [
    "createUseMutation_DEPRECATED",
    "useJoinableVideoChatsOptInMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a =
      h !== void 0 ? h : (h = b("useJoinableVideoChatsOptInMutation.graphql"));
    d = c("createUseMutation_DEPRECATED")(a, void 0, void 0, function () {
      return function (a) {
        var b;
        a = (a = a.getRoot()) == null ? void 0 : a.getLinkedRecord("viewer");
        b =
          a == null
            ? void 0
            : (b = a.getLinkedRecord("joinable_video_chats")) == null
            ? void 0
            : b.getLinkedRecord("messenger_rooms_section");
        if (a == null || b == null) return;
        b.setValue(!1, "should_show_educational_qp");
      };
    });
    g["default"] = d;
  },
  98
);
__d(
  "RoomsConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "/help/messenger-app/819584731857901";
    f.LEARN_MORE_URL = a;
  },
  66
);
__d(
  "RoomsQuickPromotionComet.react",
  [
    "fbt",
    "ix",
    "Actor",
    "CometCard.react",
    "CometIconLogoFlat.react",
    "CometImage.react",
    "CometRelay",
    "RoomsConstants",
    "RoomsQuickPromotionComet_messengerRoomsStatusOptInPromotionRenderingStrategy.graphql",
    "TetraButtonGroup.react",
    "TetraCircleButton.react",
    "TetraText.react",
    "VideoChatLogging",
    "fbicon",
    "react",
    "useJoinableVideoChatsOptInMutation",
    "useRoomsCreateDialog",
    "uuid",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a(a) {
      var e,
        f,
        g,
        l = a.messengerRoomsStatusOptInPromotionRenderingStrategy,
        m = a.onDismiss;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b(
              "RoomsQuickPromotionComet_messengerRoomsStatusOptInPromotionRenderingStrategy.graphql"
            )),
        l
      );
      l = c("useRoomsCreateDialog")();
      var n = l.dialogTriggerRef,
        o = l.onHoverInPrerenderer,
        p = l.onHoverOutPrerenderer,
        q = l.onPressInPrerenderer,
        r = l.showDialog,
        s = c("useJoinableVideoChatsOptInMutation")();
      l = d("Actor").useActor();
      var t = l[0];
      l = d("VideoChatLogging").useVideoChatLogging();
      var u = l.defaultData,
        v = l.logPromotionUnitImpression,
        w = l.logPromotionUnitTap,
        x = l.logRoomCreationFlowStart;
      l = l.useVideoChatImpressionLogging;
      l = l({}, v);
      v = function () {
        var a = babelHelpers["extends"]({}, u, {
          session_ids: babelHelpers["extends"](
            {},
            u == null ? void 0 : u.session_ids,
            { funnel_session_id: c("uuid")() }
          ),
          source: "room_promotion_unit",
        });
        x(a);
        r({ loggingData: a });
        m();
        w({
          button_type: "create_room",
          source: "fb_top_of_feed",
          surface: "newsfeed",
        });
      };
      e =
        (e =
          a == null
            ? void 0
            : (e = a.promotion_title) == null
            ? void 0
            : e.text) != null
          ? e
          : "Introducing Messenger Rooms";
      f =
        (f =
          a == null
            ? void 0
            : (f = a.promotion_content) == null
            ? void 0
            : f.text) != null
          ? f
          : "Send a link to group video chat with your friends and family.";
      g =
        (g =
          a == null
            ? void 0
            : (g = a.promotion_primary_button_text) == null
            ? void 0
            : g.text) != null
          ? g
          : "Create Room";
      a =
        (a =
          a == null
            ? void 0
            : (a = a.promotion_secondary_button_text) == null
            ? void 0
            : a.text) != null
          ? a
          : "Learn More";
      return k.jsx("div", {
        className: "k4urcfbm sjgh65i0",
        children: k.jsxs(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          ref: l,
          children: [
            k.jsxs("div", {
              className: "l9j0dhe7 eg9m0zos d76ob5m9 taijpn5t j83agx80",
              children: [
                k.jsx(c("CometImage.react"), { alt: "", src: i("1418705") }),
                k.jsxs("div", {
                  className:
                    "kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
                  children: [
                    k.jsx("div", {
                      className:
                        "j9ispegn pmk7jnqg dati1w0a f10w8fjw rz4wbd8a pybr56ya",
                      children: k.jsx(c("CometIconLogoFlat.react"), {
                        size: 32,
                      }),
                    }),
                    k.jsx("span", {
                      className:
                        "pmk7jnqg hv4rvrfc a8nywdso f10w8fjw pybr56ya n7fi1qx3",
                      children: k.jsx(c("TetraCircleButton.react"), {
                        color: "white",
                        icon: d("fbicon")._(i("478233"), 20),
                        label: h._("Close"),
                        onPress: function () {
                          m(), s({}, {}, { id: t });
                        },
                        size: 32,
                        type: "dark-overlay",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            k.jsxs("div", {
              className:
                "dhix69tm n851cfcs wkznzc2l kvgmc6g5 cbu4d94t j83agx80",
              children: [
                k.jsx("div", {
                  className: "f10w8fjw",
                  children: k.jsx(c("TetraText.react"), {
                    align: "center",
                    type: "headlineEmphasized2",
                    children: e,
                  }),
                }),
                k.jsx(c("TetraText.react"), {
                  align: "center",
                  type: "body3",
                  children: f,
                }),
              ],
            }),
            k.jsx("div", {
              className: "f10w8fjw",
              children: k.jsx(c("TetraButtonGroup.react"), {
                direction: "backward",
                primary: {
                  label: (l = g) != null ? l : "Create Room",
                  onHoverIn: o,
                  onHoverOut: p,
                  onPress: v,
                  onPressIn: q,
                  reduceEmphasis: !0,
                  ref: n,
                  testid: "create_room_button_promotional_unit",
                },
                secondary: {
                  label: (e = a) != null ? e : "Learn More",
                  linkProps: {
                    target: "_blank",
                    url: d("RoomsConstants").LEARN_MORE_URL,
                  },
                  onPress: function () {
                    w({
                      button_type: "learn_more",
                      source: "fb_top_of_feed",
                      surface: "newsfeed",
                    });
                  },
                },
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("VideoChatLogging").withVideoChatLoggingProvider(a, function (a) {
      return { source: "fb_top_of_feed", surface: "newsfeed" };
    });
    g["default"] = e;
  },
  98
);
__d(
  "RoomsQuickPromotionPlaceholder.react",
  [
    "BaseGlimmer.react",
    "CometAspectRatioContainer.react",
    "CometCard.react",
    "CometRow.react",
    "CometRowItem.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        button: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "tv7at329",
        },
        content: { height: "m7zwrmfr" },
        fullBleedHeader: {
          backgroundColor: "g6srhlxm",
          overflowX: "d76ob5m9",
          overflowY: "eg9m0zos",
          position: "l9j0dhe7",
        },
        root: { marginBottom: "sjgh65i0", width: "k4urcfbm" },
        title: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "k7cz35w2",
          width: "t1ll2xni",
        },
      };
    function a() {
      return h.jsx("div", {
        className: c("stylex")(i.root),
        children: h.jsxs(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: [
            h.jsx("div", {
              className: c("stylex")(i.fullBleedHeader),
              children: h.jsx(c("CometAspectRatioContainer.react"), {
                aspectRatio: 500 / 218,
              }),
            }),
            h.jsx(c("CometRow.react"), {
              paddingVertical: 12,
              children: h.jsx(c("CometRowItem.react"), {
                expanding: !0,
                children: h.jsx(c("BaseGlimmer.react"), {
                  index: 0,
                  xstyle: i.title,
                }),
              }),
            }),
            h.jsx("div", { className: c("stylex")(i.content) }),
            h.jsxs(c("CometRow.react"), {
              paddingVertical: 12,
              children: [
                h.jsx(c("CometRowItem.react"), {
                  expanding: !0,
                  children: h.jsx(c("BaseGlimmer.react"), {
                    index: 1,
                    xstyle: i.button,
                  }),
                }),
                h.jsx(c("CometRowItem.react"), {
                  expanding: !0,
                  children: h.jsx(c("BaseGlimmer.react"), {
                    index: 2,
                    xstyle: i.button,
                  }),
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
  "useRoomsCreateTraySubscription",
  [
    "CometRelay",
    "RoomsRelayStoreUtils",
    "RoomsTrayVariantContext",
    "WebPixelRatio",
    "gkx",
    "react",
    "recoverableViolation",
    "useRoomsCreateTraySubscriptionSubscription.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useContext,
      j = e.useEffect,
      k = e.useState,
      l = c("gkx")("1422080") === !0,
      m =
        h !== void 0
          ? h
          : (h = b("useRoomsCreateTraySubscriptionSubscription.graphql"));
    function n(a, b, c) {
      return d("CometRelay").requestSubscription(a, {
        subscription: m,
        updater: o(b, c),
        variables: { input: {}, scale: d("WebPixelRatio").get() },
      });
    }
    function o(a, b) {
      return function (e) {
        var f, g;
        f =
          (f = e.getRootField("joinable_video_chats_room_create_subscribe")) ==
          null
            ? void 0
            : f.getLinkedRecord("link");
        if (!f) {
          c("recoverableViolation")(
            "useRoomsCreateTraySubscription: Expected to find server link",
            "comet_rooms"
          );
          return;
        }
        ((g = f.getLinkedRecord("link_owner")) == null
          ? void 0
          : g.getDataID()) === a &&
        ((g = f.getLinkedRecord("link_container")) == null
          ? void 0
          : g.getDataID()) == null
          ? d("RoomsRelayStoreUtils").addSelfRoom(e, f)
          : d("RoomsRelayStoreUtils").addFriendRoom(e, f);
        b();
      };
    }
    function a(a) {
      var b = d("CometRelay").useRelayEnvironment(),
        e = i(c("RoomsTrayVariantContext")),
        f = e.setVariant,
        g = e.variant;
      e = k(0);
      var h = e[0],
        m = e[1];
      j(
        function () {
          h > 0 && g === "collapsed" && f("expanded");
        },
        [h, f, g]
      );
      j(
        function () {
          if (!l) return;
          if (a == null) {
            c("recoverableViolation")(
              "useRoomsCreateTraySubscription: Expected to a have valid user id",
              "comet_rooms"
            );
            return;
          }
          var d = n(b, a, function () {
            m(function (a) {
              return a + 1;
            });
          });
          return function () {
            d.dispose();
          };
        },
        [b, a, g, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "RoomsCollapsedCreateRoomTilePlaceholder.react",
  ["BaseGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", {
        className: "scb9dxdr dflh9lhu",
        children: h.jsx(c("BaseGlimmer.react"), {
          className:
            "ygsqo3sx f9o22wc5 myj7ivm5 ad2k81qe km676qkl qypqp5cg emzo65vh fmqxjp7s czkt41v7 orhb3f3m",
          index: 0,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RoomCollapsedTrayPlaceholder.react",
  [
    "BaseLoadingStateElement.react",
    "CometCard.react",
    "RoomCollapsedTilePlaceholder.react",
    "RoomsCollapsedCreateRoomTilePlaceholder.react",
    "gkx",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        container: {
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          paddingTop: "pybr56ya",
          paddingEnd: "d1544ag0",
          paddingBottom: "f10w8fjw",
          paddingStart: "scb9dxdr",
          width: "g2wf7z4h",
        },
        hideOverflow: { overflowX: "ni8dbmo4", overflowY: "stjgntxs" },
        marginBottom10: { marginBottom: "oud54xpy" },
        root: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          justifyContent: "jifvfom9",
          marginBottom: "sjgh65i0",
          width: "k4urcfbm",
        },
      };
    function a(a, b) {
      a = c("gkx")("708253");
      var d = 8;
      return h.jsx("div", {
        role: "article",
        children: h.jsx(c("BaseLoadingStateElement.react"), {
          ref: b,
          xstyle: [i.root, a === !1 && i.marginBottom10],
          children: h.jsx(c("CometCard.react"), {
            background: "white",
            dropShadow: 1,
            children: h.jsx("div", {
              className: c("stylex")(i.hideOverflow),
              children: h.jsxs("div", {
                className: c("stylex")(i.container),
                children: [
                  h.jsx(c("RoomsCollapsedCreateRoomTilePlaceholder.react"), {}),
                  Array(d)
                    .fill()
                    .map(function (a, b) {
                      return h.jsx(
                        c("RoomCollapsedTilePlaceholder.react"),
                        {},
                        b
                      );
                    }),
                ],
              }),
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "RoomFriendTileCollapsed.react",
  [
    "CometRelay",
    "RoomFriendTileCollapsed_fbts.graphql",
    "RoomFriendTileCollapsed_room.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = h !== void 0 ? h : (h = b("RoomFriendTileCollapsed_room.graphql")),
      l = i !== void 0 ? i : (i = b("RoomFriendTileCollapsed_fbts.graphql"));
    function a(a) {
      var b = a.cardIndex,
        c = a.fbtsRef;
      a = a.roomRef;
      a = d("CometRelay").useFragment(k, a);
      c = d("CometRelay").useFragment(l, c);
      return j.jsx(d("CometRelay").MatchContainer, {
        match: a,
        props: { cardIndex: b, fbtsRef: c, roomCardRef: a },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RoomsCollapsedCreateRoomTile.react",
  ["fbt", "ix", "IconSource", "TetraIcon.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a() {
      var a = new (c("IconSource"))("FB", i("1384648"), 24),
        b = h._("Create Room");
      return j.jsxs("div", {
        className:
          "tw6a2znq f10w8fjw d1544ag0 pybr56ya idt9hxom taijpn5t qypqp5cg j83agx80 rq0escxv emzo65vh fmqxjp7s czkt41v7 orhb3f3m bhnbqzgi f9z4ik4l o4pe0cca naluy2lp bp9cbjyn",
        children: [
          j.jsx("div", {
            className: "oi9244e8 pq6dq46d",
            children: j.jsx(c("TetraIcon.react"), { icon: a, size: 24 }),
          }),
          j.jsx("div", {
            className: "tiyi1ipj",
            children: j.jsx(c("TetraText.react"), {
              color: "blueLink",
              type: "bodyLink3",
              children: b,
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
  "useRoomsSelfTileCardAction",
  [
    "fbt",
    "CometRelay",
    "VideoMeetupCreationDialogContainerComet.entrypoint",
    "react",
    "useCometEntryPointDialog",
    "useMWChatJoinVideoChat",
    "useRoomsCreateDialog",
    "useRoomsSelfTileCardAction_fbts.graphql",
    "useRoomsSelfTileCardAction_room.graphql",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react").useRef,
      l = i !== void 0 ? i : (i = b("useRoomsSelfTileCardAction_room.graphql")),
      m = j !== void 0 ? j : (j = b("useRoomsSelfTileCardAction_fbts.graphql"));
    function a(a, b) {
      var e = d("CometRelay").useFragment(l, a);
      a = d("CometRelay").useFragment(m, b);
      b = k(null);
      var f = e == null ? void 0 : e.link_hash;
      f = c("useCometEntryPointDialog")(
        c("VideoMeetupCreationDialogContainerComet.entrypoint"),
        { linkHash: f },
        "button"
      );
      var g = f[0],
        i = f[1],
        j = f[2],
        n = f[3];
      f = f[4];
      var o = c("useRoomsCreateDialog")(),
        p = o.onHoverInPrerenderer,
        q = o.onHoverOutPrerenderer,
        r = o.onPressInPrerenderer,
        s = o.showDialog;
      o = i;
      i = p;
      p = q;
      q = r;
      r = c("useMWChatJoinVideoChat")(void 0);
      var t = r[0];
      r[1];
      r =
        (r = a == null ? void 0 : (r = a.create) == null ? void 0 : r.text) !=
        null
          ? r
          : h._("Create").toString();
      if (e == null || e.is_published !== !0) {
        var u = function (a) {
          s({ loggingData: a });
        };
        return {
          actionName: r,
          isActionDeemphasized: !0,
          isCreateTile: !0,
          onButtonPress: u,
          onCardPress: u,
          onHoverInPrerenderer: i,
          onHoverOutPrerenderer: p,
          onPressInPrerenderer: q,
          triggerRef: o,
        };
      }
      return {
        actionName:
          (u = a == null ? void 0 : (r = a.join) == null ? void 0 : r.text) !=
          null
            ? u
            : "",
        isActionDeemphasized: !1,
        isCreateTile: !1,
        onButtonPress: function () {
          return t(e.link_url || "");
        },
        onCardPress: function (a) {
          g(
            { loggingData: a, roomType: "self_lobby" },
            void 0,
            "comet.rooms.lobby"
          );
        },
        onHoverInPrerenderer: j,
        onHoverOutPrerenderer: n,
        onPressInPrerenderer: f,
        triggerRef: b,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "RoomsCollapsedSelfTileCard.react",
  [
    "CometPressable.react",
    "CometRelay",
    "RoomsCollapsedCreateRoomTile.react",
    "RoomsCollapsedSelfTileCard_room.graphql",
    "RoomsGating",
    "RoomsTrayVariantContext",
    "VideoChatLogging",
    "react",
    "useJoinableVideoChatsRoomUpdateSubscription",
    "useRoomsSelfTileCardAction",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect,
      l = e.useMemo,
      m = {
        createRoomPressable: {
          alignItems: "bp9cbjyn",
          borderTopStartRadius: "orhb3f3m",
          borderTopEndRadius: "czkt41v7",
          borderBottomEndRadius: "fmqxjp7s",
          borderBottomStartRadius: "emzo65vh",
          display: "j83agx80",
          height: "qypqp5cg",
          justifyContent: "taijpn5t",
          marginEnd: "oi9244e8",
          minWidth: "idt9hxom",
        },
      },
      n = h !== void 0 ? h : (h = b("RoomsCollapsedSelfTileCard_room.graphql"));
    function a(a) {
      var b;
      a = a.roomRef;
      a = d("CometRelay").useFragment(n, a);
      var e = a == null ? void 0 : a.link_hash,
        f = a == null ? void 0 : a.__id,
        g = a == null ? void 0 : a.active_call_participant_count,
        h = a == null ? void 0 : a.id,
        o = (b = a == null ? void 0 : a.is_published) != null ? b : !1,
        p = d("RoomsGating").roomsTrayCanCollapseWithSelfRooms();
      b = j(c("RoomsTrayVariantContext"));
      var q = b.setVariant,
        r = b.variant;
      b = l(
        function () {
          return e != null && f != null ? { linkHash: e, nodeDataID: f } : null;
        },
        [e, f]
      );
      c("useJoinableVideoChatsRoomUpdateSubscription")(b);
      k(
        function () {
          p !== !0 && r === "collapsed" && e != null && o && q("expanded");
        },
        [o, e, q, r, p]
      );
      b = c("useRoomsSelfTileCardAction")(a);
      var s = b.onCardPress;
      a = b.onHoverInPrerenderer;
      var t = b.onHoverOutPrerenderer;
      b = b.onPressInPrerenderer;
      var u = d("VideoChatLogging").useVideoChatLogging(),
        v = u.defaultData,
        w = u.logRoomCreationFlowStart,
        x = u.logRoomSelfCardTap;
      u = function () {
        var a;
        q("expanded");
        var b = babelHelpers["extends"](
          {},
          v == null ? void 0 : v.session_ids,
          { funnel_session_id: c("uuid")() }
        );
        w({ session_ids: b });
        x({ session_ids: b, video_call_link_id: (a = h) != null ? a : void 0 });
        s &&
          s(
            babelHelpers["extends"]({}, v, {
              num_room_participants: (a = g) != null ? a : void 0,
              session_ids: babelHelpers["extends"]({}, b, {
                card_session_id: c("uuid")(),
              }),
              video_call_link_id: (a = h) != null ? a : void 0,
            })
          );
      };
      var y = i.jsx(c("RoomsCollapsedCreateRoomTile.react"), {});
      return i.jsx(c("CometPressable.react"), {
        "aria-label": "video chats that people can join",
        onHoverIn: a,
        onHoverOut: t,
        onPress: u,
        onPressIn: b,
        testid: void 0,
        xstyle: m.createRoomPressable,
        children: y,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("VideoChatLogging").withVideoChatLoggingProvider(a, function (a) {
      return { card_tray_index: 0 };
    });
    g["default"] = e;
  },
  98
);
__d(
  "RoomsCreateRoomLabel.react",
  [
    "fbt",
    "CometRelay",
    "GraphQLGender",
    "RoomsCreateRoomLabel_user.graphql",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.hasExistingRoom;
      a = a.userRef;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("RoomsCreateRoomLabel_user.graphql")),
        a
      );
      var f = a == null ? void 0 : a.short_name;
      if (f != null && !e) {
        a = new (c("GraphQLGender"))(
          (e = a == null ? void 0 : a.gender) != null ? e : "UNKNOWN"
        ).toIntlVariationsEnum();
        return j.jsx(c("TetraTextPairing.react"), {
          body: h._("Get Started"),
          bodyColor: "secondary",
          bodyLineLimit: 1,
          headline: h
            ._({ "*": "{ownerName}'s Room" }, [h._name("ownerName", f, a)])
            .toString(),
          headlineLineLimit: 1,
          level: 4,
          textAlign: "center",
        });
      } else
        return j.jsx(c("TetraTextPairing.react"), {
          headline: h._("New Room"),
          headlineLineLimit: 2,
          level: 4,
          textAlign: "center",
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RoomsTileButton.react",
  [
    "CometPressable.react",
    "CometProgressRingIndeterminate.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        button: {
          alignItems: "bp9cbjyn",
          backgroundColor: "oo1teu6h",
          borderTopStartRadius: "beltcj47",
          borderTopEndRadius: "p86d2i9g",
          borderBottomEndRadius: "aot14ch1",
          borderBottomStartRadius: "kzx2olss",
          color: "q66pz984",
          display: "j83agx80",
          fontSize: "jq4qci2q",
          height: "tv7at329",
          justifyContent: "taijpn5t",
          lineHeight: "pdlg2rys",
          marginBottom: "bi6gxh9e",
          minWidth: "jrlfinob",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
        deemphasizedButton: {
          backgroundColor: "g5ia77u1",
          boxShadow: "fi88u1cw",
        },
        withGradient: {
          backgroundColor: "q2y6ezfg",
          color: "msa5nt39",
          fontSize: "jq4qci2q",
          fontWeight: "lrazzd5p",
          lineHeight: "a3bd9o3v",
        },
      };
    function a(a) {
      var b = a.actionName,
        d = a.isActionDeemphasized,
        e = a.isDisabled,
        f = a.onButtonPress,
        g = a.shouldShowGradient;
      a = a.testid;
      return h.jsx(c("CometPressable.react"), {
        "aria-label": b,
        disabled: e === !0,
        onPress: f,
        testid: void 0,
        xstyle: [
          i.button,
          d === !0 && i.deemphasizedButton,
          g === !0 && i.withGradient,
        ],
        children:
          e === !0
            ? h.jsx(c("CometProgressRingIndeterminate.react"), {
                color: "disabled",
                size: 24,
              })
            : g === !0
            ? h.jsx("span", { children: b })
            : h.jsx(c("TetraText.react"), {
                color: "blueLink",
                type: "bodyLink3",
                children: b,
              }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoChatTileCardContent.react",
  [
    "fbt",
    "ix",
    "CometCard.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometRow.react",
    "CometRowItem.react",
    "CometTooltip.react",
    "IconSource",
    "RoomsFacepileWithBadge.react",
    "TetraIcon.react",
    "fbicon",
    "react",
    "useRoomsLinkExplanationDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a, b) {
      var e = a.badge,
        f = a.button,
        g = a.description,
        k = a.infoTooltip,
        l = a.isLocked,
        m = a.isSelfCardNullState;
      m = m === void 0 ? !1 : m;
      var n = a.profileUris;
      a = a.shouldShowGradient;
      a = a === void 0 ? !1 : a;
      var o = new (c("IconSource"))("FB", i("1384648"), 24);
      l = l === !0 ? new (c("IconSource"))("FB", i("1286623"), 16) : null;
      var p = c("useRoomsLinkExplanationDialog")(),
        q = p.onHoverInPrerenderer,
        r = p.onHoverOutPrerenderer,
        s = p.onPressInPrerenderer,
        t = p.showDialogWithLogging;
      return j.jsxs(c("CometCard.react"), {
        border: a ? "inset" : "solid",
        ref: b,
        children: [
          a &&
            j.jsx("div", { className: "k4urcfbm pmk7jnqg datstx6m iznvzdgj" }),
          l &&
            j.jsx("div", {
              className: "hhz5lgdu plgsh5y4 hnlv2pgd pmk7jnqg gl3lb2sf",
              children: j.jsx(c("TetraIcon.react"), {
                color: "white",
                icon: l,
                size: 16,
              }),
            }),
          j.jsxs(c("CometColumn.react"), {
            children: [
              j.jsx(c("CometColumnItem.react"), {
                children: j.jsx(c("CometRow.react"), {
                  align: "center",
                  paddingTop: 12,
                  children: j.jsx(c("CometRowItem.react"), {
                    children: m
                      ? j.jsx("div", {
                          className:
                            "ljni7pan taijpn5t cb02d2ww j83agx80 rq0escxv spb7xbtv bkmhp75w emlxlaya s45kfl79 snggw924 czabki66 hx37s9t6 qjs0y65x bp9cbjyn",
                          children: j.jsx(c("TetraIcon.react"), {
                            color: "white",
                            icon: o,
                            size: 24,
                          }),
                        })
                      : j.jsx(c("RoomsFacepileWithBadge.react"), {
                          badge: e,
                          container: "tile",
                          profileUris: n,
                          shouldShowGradient: a,
                        }),
                  }),
                }),
              }),
              j.jsx(c("CometColumnItem.react"), {
                children: j.jsx(c("CometRow.react"), {
                  paddingTop: 12,
                  children: j.jsx(c("CometRowItem.react"), {
                    expanding: !0,
                    children: j.jsx("div", {
                      className: "afyhebng",
                      children: g,
                    }),
                  }),
                }),
              }),
              j.jsx(c("CometColumnItem.react"), {
                children: j.jsx(c("CometRow.react"), {
                  align: "center",
                  paddingHorizontal: 8,
                  paddingTop: 8,
                  children: j.jsx(c("CometRowItem.react"), {
                    expanding: !0,
                    children: f,
                  }),
                }),
              }),
            ],
          }),
          m &&
            j.jsx("div", {
              className: "plgsh5y4 pmk7jnqg swmj3c3o",
              children: j.jsx(c("CometTooltip.react"), {
                tooltip: k,
                children: j.jsx(c("TetraIcon.react"), {
                  "aria-label": h._("Learn More"),
                  color: "tertiary",
                  icon: d("fbicon")._(i("1087709"), 12),
                  onHoverIn: q,
                  onHoverOut: r,
                  onPress: function () {
                    t();
                  },
                  onPressIn: s,
                }),
              }),
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = j.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "RoomsCreateRoomTile.react",
  [
    "CometPressable.react",
    "CometRelay",
    "RoomsCreateRoomLabel.react",
    "RoomsCreateRoomTile_fbts.graphql",
    "RoomsCreateRoomTile_user.graphql",
    "RoomsTileButton.react",
    "VideoChatLogging",
    "VideoChatTileCardContent.react",
    "react",
    "useRoomsCreateDialog",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = {
        pressable: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "datstx6m",
          width: "k4urcfbm",
        },
      },
      l = h !== void 0 ? h : (h = b("RoomsCreateRoomTile_user.graphql")),
      m = i !== void 0 ? i : (i = b("RoomsCreateRoomTile_fbts.graphql"));
    function a(a) {
      var b = a.fbtsRef,
        e = a.hasExistingRoom;
      a = a.userRef;
      b = d("CometRelay").useFragment(m, b);
      a = d("CometRelay").useFragment(l, a);
      var f = c("useRoomsCreateDialog")(),
        g = f.onHoverInPrerenderer,
        h = f.onHoverOutPrerenderer,
        i = f.onPressInPrerenderer,
        n = f.showDialog;
      f = d("VideoChatLogging").useVideoChatLogging();
      var o = f.defaultData,
        p = f.logRoomCreationFlowStart,
        q = f.logRoomSelfCardTap;
      f = j.jsx(c("RoomsCreateRoomLabel.react"), {
        hasExistingRoom: e,
        userRef: a,
      });
      e = function () {
        var a = babelHelpers["extends"](
          {},
          o == null ? void 0 : o.session_ids,
          { funnel_session_id: c("uuid")() }
        );
        p({ session_ids: a });
        q({ session_ids: a });
        n({
          loggingData: babelHelpers["extends"]({}, o, {
            session_ids: babelHelpers["extends"]({}, a, {
              card_session_id: c("uuid")(),
            }),
          }),
        });
      };
      return j.jsx(c("CometPressable.react"), {
        onHoverIn: g,
        onHoverOut: h,
        onPress: e,
        onPressIn: i,
        testid: void 0,
        xstyle: k.pressable,
        children: j.jsx(c("VideoChatTileCardContent.react"), {
          button: j.jsx(c("RoomsTileButton.react"), {
            actionName:
              (g =
                b == null
                  ? void 0
                  : (a = b.create) == null
                  ? void 0
                  : a.text) != null
                ? g
                : "Create",
            isActionDeemphasized: !0,
            onButtonPress: e,
          }),
          description: f,
          isSelfCardNullState: !0,
          profileUris: [],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("VideoChatLogging").withVideoChatLoggingProvider(a, function (a) {
      return { card_tray_index: 0 };
    });
    g["default"] = e;
  },
  98
);
__d(
  "RoomsGroupCreateTileCard.react",
  [
    "fbt",
    "ix",
    "CometBadge_EXPERIMENTAL.react",
    "CometPressable.react",
    "CometRelay",
    "RoomsGroupCreateTileCard_group.graphql",
    "RoomsGroupCreateTileCard_user.graphql",
    "RoomsTileButton.react",
    "TetraTextPairing.react",
    "VideoChatLogging",
    "VideoChatTileCardContent.react",
    "XCometGroupJoinableVideoChatsControllerRouteBuilder",
    "fbicon",
    "gkx",
    "react",
    "recoverableViolation",
    "setTimeout",
    "unrecoverableViolation",
    "useCometRouterDispatcher",
    "useGroupCometComposerCreateDialog",
    "useIdOrVanityRouteBuilder",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l = d("react");
    e = d("react");
    var m = e.useEffect,
      n = e.useMemo,
      o = e.useState,
      p = {
        pressable: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "datstx6m",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
      },
      q = 100;
    function a(a) {
      var e = a.fbtsRef;
      a = a.linkRef;
      var f = d("CometRelay").useFragment(
          j !== void 0 ? j : (j = b("RoomsGroupCreateTileCard_group.graphql")),
          a
        ),
        g = d("CometRelay").useFragment(
          k !== void 0 ? k : (k = b("RoomsGroupCreateTileCard_user.graphql")),
          e
        );
      a = d("VideoChatLogging").useVideoChatLogging();
      var r = a.defaultData;
      e = a.logRoomCardImpression;
      var s = a.logRoomCardTap;
      a = a.useVideoChatImpressionLogging;
      var t = n(
        function () {
          var a;
          return babelHelpers["extends"]({}, r, {
            link_owner_id: (a = g.id) != null ? a : void 0,
            room_container_id: (a = f.id) != null ? a : void 0,
            source: "empty_group_room_card",
            video_call_link_id: void 0,
          });
        },
        [r, f.id, g.id]
      );
      a = a(t, e);
      var u = f == null ? void 0 : f.id;
      e = f == null ? void 0 : f.name;
      var v =
          f.if_viewer_can_create_open_group_video_room !== null ||
          f.if_viewer_can_create_private_group_video_room !== null,
        w = c("useCometRouterDispatcher")(),
        x = c("useIdOrVanityRouteBuilder")(
          c("XCometGroupJoinableVideoChatsControllerRouteBuilder"),
          f
        );
      if (u == null)
        throw c("unrecoverableViolation")(
          "Group ID is required to open a composer dialog",
          "groups_comet"
        );
      var y = o(!1),
        z = y[0],
        A = y[1];
      y = c("useGroupCometComposerCreateDialog")({
        groupID: u,
        onSave: function (a) {
          A(a.room != null);
        },
      });
      var B = y[0];
      m(
        function () {
          if (z && x != null && w != null) {
            var a = c("gkx")("2053653");
            if (a) return;
            c("setTimeout")(function () {
              w.go(x, {});
            }, q);
            A(!1);
          }
        },
        [t, z, x, w]
      );
      y = function () {
        s(t);
        if (u == null) return;
        B({ groupID: u, pushedPageOnLoad: "video_meetup" });
      };
      if (e == null)
        return c("recoverableViolation")(
          "Incomplete data for group-create card",
          "groups_comet"
        );
      return !v
        ? null
        : l.jsx(c("CometPressable.react"), {
            onPress: y,
            xstyle: p.pressable,
            children: l.jsx(c("VideoChatTileCardContent.react"), {
              badge: {
                badge: l.jsx(c("CometBadge_EXPERIMENTAL.react"), {
                  icon: d("fbicon")._(i("485085"), 12),
                  label: h._("Create"),
                  labelIsHidden: !0,
                  type: "positive",
                }),
                badgeAlign: "center",
              },
              button: l.jsx(c("RoomsTileButton.react"), {
                actionName: h._("Create"),
                isActionDeemphasized: !0,
                onButtonPress: y,
              }),
              description: l.jsx(c("TetraTextPairing.react"), {
                headline: f == null ? void 0 : f.name,
                headlineLineLimit: 2,
                level: 4,
                textAlign: "center",
              }),
              isLocked: !1,
              profileUris: [
                (f == null
                  ? void 0
                  : (e = f.profile_picture) == null
                  ? void 0
                  : e.uri) || "",
              ],
              ref: a,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("VideoChatLogging").withVideoChatLoggingProvider(a, function (a) {
      a = a.cardIndex;
      return { card_tray_index: a };
    });
    g["default"] = e;
  },
  98
);
__d(
  "RoomsNullStateTileCard.react",
  [
    "CometActivityBadge.react",
    "CometPressable.react",
    "CometRelay",
    "RoomsNullStateTileCard_fbts.graphql",
    "RoomsNullStateTileCard_user.graphql",
    "RoomsTileButton.react",
    "TetraTextPairing.react",
    "VideoChatLogging",
    "VideoChatTileCardContent.react",
    "react",
    "useRoomsNullStateDialog",
    "useRoomsPresense",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = {
        pressable: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "datstx6m",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
      },
      l = h !== void 0 ? h : (h = b("RoomsNullStateTileCard_user.graphql")),
      m = i !== void 0 ? i : (i = b("RoomsNullStateTileCard_fbts.graphql"));
    function a(a) {
      var b,
        e = a.fbtsRef;
      a = a.userRef;
      a = d("CometRelay").useFragment(l, a);
      e = d("CometRelay").useFragment(m, e);
      var f = d("useRoomsPresense").useRoomsUserPresense(a),
        g = a == null ? void 0 : a.id;
      g = c("useRoomsNullStateDialog")(g);
      var h = g.onHoverInPrerenderer,
        i = g.onHoverOutPrerenderer,
        n = g.onPressInPrerenderer;
      g = g.showDialogWithLogging;
      if (
        a == null ||
        a.id == null ||
        a.name == null ||
        ((b = a.profile_picture) == null ? void 0 : b.uri) == null
      )
        return null;
      b =
        (e =
          e == null
            ? void 0
            : (b = e.say_hi_button) == null
            ? void 0
            : b.text) != null
          ? e
          : "Say Hi";
      e = null;
      e = {
        badge: j.jsx(c("CometActivityBadge.react"), {
          size: 12,
          state: f ? "active" : "inactive",
        }),
        badgeAlign: "right",
      };
      f = j.jsx(c("TetraTextPairing.react"), {
        headline: a.name,
        headlineLineLimit: 2,
        level: 4,
        textAlign: "center",
      });
      return j.jsx(c("CometPressable.react"), {
        onHoverIn: h,
        onHoverOut: i,
        onPress: g,
        onPressIn: n,
        xstyle: k.pressable,
        children: j.jsx(c("VideoChatTileCardContent.react"), {
          badge: e,
          button: j.jsx(c("RoomsTileButton.react"), {
            actionName: b,
            isActionDeemphasized: !0,
            onButtonPress: g,
            testid: void 0,
          }),
          description: f,
          profileUris: [
            (a == null
              ? void 0
              : (h = a.profile_picture) == null
              ? void 0
              : h.uri) || "",
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("VideoChatLogging").withVideoChatLoggingProvider(a, function (a) {
      a = a.cardIndex;
      return { card_tray_index: a };
    });
    g["default"] = e;
  },
  98
);
__d(
  "RoomsTileCardMetaStringImpl.react",
  [
    "fbt",
    "Actor",
    "CometEmoji.react",
    "CometRelay",
    "GraphQLGender",
    "RoomsTileCardMetaStringImpl_fbts.graphql",
    "RoomsTileCardMetaStringImpl_link.graphql",
    "RoomsTileCardMetaStringImpl_user.graphql",
    "TetraTextPairing.react",
    "react",
    "useIsScheduledRoom",
    "useRoomsRoomDefaultValues",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l = d("react"),
      m =
        i !== void 0 ? i : (i = b("RoomsTileCardMetaStringImpl_link.graphql")),
      n =
        j !== void 0 ? j : (j = b("RoomsTileCardMetaStringImpl_fbts.graphql")),
      o =
        k !== void 0 ? k : (k = b("RoomsTileCardMetaStringImpl_user.graphql"));
    function a(a) {
      var b,
        e,
        f = a.fbtsRef,
        g = a.linkRef,
        i = a.shouldShowGradient;
      i = i === void 0 ? !1 : i;
      a = a.userRef;
      var j = d("Actor").useActor();
      j = j[0];
      g = d("CometRelay").useFragment(m, g);
      f = d("CometRelay").useFragment(n, f);
      a = d("CometRelay").useFragment(o, a);
      var k = (g == null ? void 0 : g.is_ending) === !0;
      a = c("useRoomsRoomDefaultValues")(a);
      a = a.defaultRoomName;
      b =
        (b =
          g == null ? void 0 : (b = g.link_owner) == null ? void 0 : b.name) !=
        null
          ? b
          : "";
      var p = g == null ? void 0 : g.emoji;
      e = (e = g == null ? void 0 : g.name) != null ? e : a;
      a = g == null ? void 0 : g.link_surface;
      j =
        j ===
          (g == null ? void 0 : (j = g.link_owner) == null ? void 0 : j.id) &&
        a === "FRIEND_JOINUPS";
      var q = !!(g == null ? void 0 : g.is_published),
        r = !!(g == null ? void 0 : g.is_e2e_encrypted);
      q = g == null || (j && !q);
      var s = c("useIsScheduledRoom")(g),
        t = "",
        u = void 0,
        v = 1,
        w = null;
      if (r) t = h._("Join on mobile");
      else if (q) {
        t =
          (r =
            f == null
              ? void 0
              : (r = f.tile_meta_string) == null
              ? void 0
              : r.text) != null
            ? r
            : "Get Started";
      } else if (a === "GROUP") {
        t =
          (a =
            g == null
              ? void 0
              : (r = g.link_container) == null
              ? void 0
              : r.full_name) != null
            ? a
            : "";
        u =
          "RoomsTileCardMetaString-" +
          ((a =
            g == null
              ? void 0
              : (r = g.link_container) == null
              ? void 0
              : r.id) != null
            ? a
            : "");
      } else
        j ? (t = s ? h._("Coming Up") : k ? null : h._("Active")) : (t = b);
      w = l.jsxs(l.Fragment, {
        children: [
          p != null &&
            p !== "" &&
            l.jsxs(l.Fragment, {
              children: [l.jsx(c("CometEmoji.react"), { emoji: [p] }), " "],
            }),
          e,
        ],
      });
      if (q) {
        g = f == null ? void 0 : f.short_name;
        if (g != null) {
          a = new (c("GraphQLGender"))(
            (r = f == null ? void 0 : f.gender) != null ? r : "UNKNOWN"
          ).toIntlVariationsEnum();
          w = h
            ._({ "*": "{ownerName}'s Room" }, [h._name("ownerName", g, a)])
            .toString();
          v = 1;
        }
      }
      return l.jsx(c("TetraTextPairing.react"), {
        body: t,
        bodyColor: i ? "secondaryOnMedia" : "secondary",
        bodyLineLimit: 1,
        headline: w,
        headlineColor: i ? "white" : void 0,
        headlineLineLimit: v,
        level: 4,
        testid: void 0,
        textAlign: "center",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RoomsTileCardMetaString.react",
  [
    "CometRelay",
    "RoomsTileCardMetaStringImpl.react",
    "RoomsTileCardMetaString_fbts.graphql",
    "RoomsTileCardMetaString_link.graphql",
    "RoomsTileCardMetaString_user.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react"),
      l = h !== void 0 ? h : (h = b("RoomsTileCardMetaString_link.graphql")),
      m = i !== void 0 ? i : (i = b("RoomsTileCardMetaString_fbts.graphql")),
      n = j !== void 0 ? j : (j = b("RoomsTileCardMetaString_user.graphql"));
    function a(a) {
      var b = a.fbtsRef,
        e = a.linkRef,
        f = a.shouldShowGradient;
      f = f === void 0 ? !1 : f;
      a = a.userRef;
      e = d("CometRelay").useFragment(l, e);
      b = d("CometRelay").useFragment(m, b);
      a = d("CometRelay").useFragment(n, a);
      return k.jsx(c("RoomsTileCardMetaStringImpl.react"), {
        fbtsRef: b,
        linkRef: e,
        shouldShowGradient: f,
        userRef: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useRoomsCTAType",
  [
    "CometRelay",
    "useRoomsCTAType_fbts.graphql",
    "useRoomsCTAType_room.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a, c) {
      var e;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useRoomsCTAType_room.graphql")),
        a
      );
      c = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("useRoomsCTAType_fbts.graphql")),
        c
      );
      a = (a = a == null ? void 0 : a.room_card_cta_enum) != null ? a : "JOIN";
      var f,
        g = !1;
      switch (a) {
        case "CREATE_ROOM":
          f =
            (e =
              c == null
                ? void 0
                : (e = c.create_button) == null
                ? void 0
                : e.text) != null
              ? e
              : "Create";
          g = !0;
          break;
        case "ALREADY_INTERESTED":
          f =
            (e =
              c == null
                ? void 0
                : (e = c.already_interested_button) == null
                ? void 0
                : e.text) != null
              ? e
              : "Interested";
          break;
        case "INTERESTED":
          f =
            (e =
              c == null
                ? void 0
                : (e = c.interested_button) == null
                ? void 0
                : e.text) != null
              ? e
              : "Interested";
          g = !0;
          break;
        case "JOIN":
        default:
          f =
            (c =
              c == null
                ? void 0
                : (e = c.join_button) == null
                ? void 0
                : e.text) != null
              ? c
              : "Join";
          break;
      }
      return [a, f, g];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useRoomsCanViewerReport",
  ["CometRelay", "useRoomsCanViewerReport_room.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var c;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useRoomsCanViewerReport_room.graphql")),
        a
      );
      c = (c = a == null ? void 0 : a.can_viewer_report) != null ? c : !1;
      a =
        (a = a == null ? void 0 : a.can_viewer_report_to_group_admin) != null
          ? a
          : !1;
      return c || a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useRoomsShouldShowGradientOnTile",
  [
    "CometRelay",
    "roomsTimeUtils",
    "useRoomsShouldShowGradientOnTile_room.graphql",
    "useServerTime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("useRoomsShouldShowGradientOnTile_room.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(i, a);
      var b = a == null ? void 0 : a.active_call_participant_count,
        e = c("useServerTime")();
      if (
        d("roomsTimeUtils").isScheduledForLater(
          (a == null ? void 0 : a.expected_call_start_time) != null
            ? (a == null ? void 0 : a.expected_call_start_time) * 1e3
            : e.getTime(),
          e.getTime()
        )
      )
        return !1;
      return ((a = b) != null ? a : 0) > 0 ? !0 : !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoChatTileCard.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometPressable.react",
    "CometRelay",
    "CometTransientDialogProvider.react",
    "MessengerCallInviteLinkLockStatus",
    "RoomsJoinDialogMoreMenu.entrypoint",
    "RoomsLobbyEntryPointDialogTrigger.react",
    "RoomsTileButton.react",
    "RoomsTileCardMetaString.react",
    "TetraIcon.react",
    "VideoChatLogging",
    "VideoChatTileCardContent.react",
    "VideoChatTileCard_fbts.graphql",
    "VideoChatTileCard_link.graphql",
    "fbicon",
    "getJSEnumSafe",
    "react",
    "recoverableViolation",
    "stylex",
    "useJoinableVideoChatsRoomUpdateSubscription",
    "useMWChatJoinVideoChat",
    "useRoomsCTAType",
    "useRoomsCanViewerReport",
    "useRoomsMarkAsInterested",
    "useRoomsProfileUrisAndAddOn",
    "useRoomsShouldShowGradientOnTile",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l = d("react");
    e = d("react");
    var m = e.useMemo,
      n = e.useState,
      o = {
        button: {
          end: "swmj3c3o",
          position: "pmk7jnqg",
          top: "fcg2cn6m",
          zIndex: "tkr6xdv7",
        },
        pressable: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "datstx6m",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
        visuallyHidden: {
          clip: "svngc6pa",
          height: "ay7djpcl",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "pmk7jnqg",
          width: "rfua0xdk",
        },
      },
      p = j !== void 0 ? j : (j = b("VideoChatTileCard_link.graphql")),
      q = k !== void 0 ? k : (k = b("VideoChatTileCard_fbts.graphql"));
    function a(a) {
      var b = a.fbtsRef;
      a = a.linkRef;
      var e = d("CometRelay").useFragment(p, a);
      a = d("CometRelay").useFragment(q, b);
      b = e == null ? void 0 : e.active_call_participant_count;
      var f = c("useRoomsShouldShowGradientOnTile")(e),
        g = d("useRoomsProfileUrisAndAddOn").useRoomsProfileUrisAndAddOn(
          e,
          void 0,
          void 0,
          void 0,
          f
        ),
        j = n(!1),
        k = j[0],
        r = j[1];
      j = n(!1);
      var s = j[0],
        t = j[1];
      j = n(!1);
      var u = j[0],
        v = j[1],
        w = c("useRoomsCanViewerReport")(e);
      j = c("useRoomsCTAType")(e, a);
      var x = j[0],
        y = j[1],
        z = j[2],
        A = e == null ? void 0 : e.id;
      j = e == null ? void 0 : e.link_owner;
      var B = e == null ? void 0 : e.link_hash,
        C = e == null ? void 0 : e.__id,
        D = e == null ? void 0 : e.link_url,
        E = m(
          function () {
            return B != null ? { linkHash: B, nodeDataID: C } : null;
          },
          [B, C]
        ),
        F = d("VideoChatLogging").useVideoChatLogging(),
        G = F.defaultData,
        H = F.logRoomCardImpression,
        I = F.logRoomCardTap,
        J = F.logRoomJoinTap;
      F = F.useVideoChatImpressionLogging;
      var K = babelHelpers["extends"]({}, G, {
          num_room_participants: b,
          room_url: (G = D) != null ? G : void 0,
          video_call_link_id: (G = A) != null ? G : void 0,
        }),
        L = F(
          {
            num_room_participants: b,
            video_call_link_id: (G = A) != null ? G : void 0,
          },
          H
        );
      c("useJoinableVideoChatsRoomUpdateSubscription")(E);
      var M = c("useRoomsMarkAsInterested")(e, a);
      F = c("useMWChatJoinVideoChat")();
      var N = F[0];
      F[1];
      if (e == null || g == null || D == null || j == null) {
        c("recoverableViolation")(
          "Expected non-null:" +
            (e == null ? " cardData" : "") +
            (g == null ? " headerData" : "") +
            (D == null ? " linkUrl" : "") +
            (j == null ? " linkOwner" : ""),
          "rooms"
        );
        return null;
      }
      var O = g.badge,
        P = g.profileUris,
        Q = l.jsx(c("RoomsTileCardMetaString.react"), {
          fbtsRef: a,
          linkRef: e,
          shouldShowGradient: f,
          userRef: j,
        });
      return l.jsx(c("CometTransientDialogProvider.react"), {
        children: l.jsx(c("RoomsLobbyEntryPointDialogTrigger.react"), {
          loggingData: K,
          roomRef: e,
          children: function (a) {
            var b = function () {
                a(), I(K);
              },
              g = function () {
                x === "JOIN"
                  ? (N(D, { startCallImmediately: !1 }), J(K))
                  : (x === "ALREADY_INTERESTED" || x === "INTERESTED") && M();
              };
            return l.jsxs(c("CometPressable.react"), {
              onHoverChange: r,
              onPress: b,
              testid: void 0,
              xstyle: o.pressable,
              children: [
                w &&
                  A != null &&
                  l.jsx(c("CometEntryPointPopoverTrigger.react"), {
                    align: "end",
                    entryPointParams: { id: A },
                    onVisibilityChange: v,
                    otherProps: { roomID: A },
                    popoverEntryPoint: c("RoomsJoinDialogMoreMenu.entrypoint"),
                    position: "below",
                    preloadTrigger: "button",
                    children: function (a, b, e, f, g, j) {
                      return l.jsx("div", {
                        className: c("stylex")(
                          o.button,
                          !(k || s || u) && o.visuallyHidden
                        ),
                        ref: a,
                        children: l.jsx(c("TetraIcon.react"), {
                          alt: h._("More"),
                          color: "secondary",
                          icon: d("fbicon")._(i("484387"), 20),
                          onHoverIn: function (a) {
                            f(a), t(!0);
                          },
                          onHoverOut: function (a) {
                            g(), t(!1);
                          },
                          onPress: b,
                          onPressIn: j,
                          size: 16,
                        }),
                      });
                    },
                  }),
                l.jsx(c("VideoChatTileCardContent.react"), {
                  badge: O,
                  button: l.jsx(c("RoomsTileButton.react"), {
                    actionName: y,
                    isActionDeemphasized: z,
                    onButtonPress: g,
                    shouldShowGradient: f,
                  }),
                  description: Q,
                  isLocked:
                    c("getJSEnumSafe")(
                      c("MessengerCallInviteLinkLockStatus"),
                      e == null ? void 0 : e.lock_status
                    ) === "locked_by_owner",
                  profileUris: P,
                  ref: L,
                  shouldShowGradient: f,
                }),
              ],
            });
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("VideoChatLogging").withVideoChatLoggingProvider(a, function (a) {
      a = a.cardIndex;
      return { card_tray_index: a };
    });
    g["default"] = e;
  },
  98
);
__d(
  "RoomsExpandedTile.react",
  [
    "CometRelay",
    "RoomsExpandedTile_roomCard.graphql",
    "RoomsExpandedTile_user.graphql",
    "RoomsGroupCreateTileCard.react",
    "RoomsNullStateTileCard.react",
    "VideoChatTileCard.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    function a(a) {
      var e = a.cardIndex,
        f = a.roomCardRef;
      a = a.userRef;
      f = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("RoomsExpandedTile_roomCard.graphql")),
        f
      );
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("RoomsExpandedTile_user.graphql")),
        a
      );
      var g = f == null ? void 0 : f.__typename;
      switch (g) {
        case "MessengerCallInviteLink":
          return j.jsx(c("VideoChatTileCard.react"), {
            cardIndex: e,
            fbtsRef: a,
            linkRef: f,
          });
        case "User":
          return j.jsx(c("RoomsNullStateTileCard.react"), {
            cardIndex: e,
            fbtsRef: a,
            userRef: f,
          });
        case "Group":
          return j.jsx(c("RoomsGroupCreateTileCard.react"), {
            cardIndex: e,
            fbtsRef: a,
            linkRef: f,
          });
      }
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RoomsTileShareButton.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "RoomsTileButton.react",
    "lazyLoadComponent",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "RoomsTileShareButtonImpl.react"
        ).__setRef("RoomsTileShareButton.react")
      );
    function a(a) {
      var b = a.isEnding;
      a = a.linkHash;
      return i.jsx(c("CometPlaceholder.react"), {
        fallback: i.jsx(c("RoomsTileButton.react"), {
          actionName: h._("Share"),
          isActionDeemphasized: !0,
          isDisabled: b,
          onButtonPress: function () {
            c("recoverableViolation")(
              "Share button on tile clicked before loaded",
              "rooms"
            );
          },
        }),
        children: i.jsx(j, { isEnding: b, linkHash: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RoomsSelfRoomTile.react",
  [
    "fbt",
    "CometPressable.react",
    "CometRelay",
    "MessengerCallInviteLinkLockStatus",
    "RoomsSelfLobbyDialog.entrypoint",
    "RoomsSelfRoomTile_fbts.graphql",
    "RoomsSelfRoomTile_link.graphql",
    "RoomsSelfRoomTile_user.graphql",
    "RoomsTileButton.react",
    "RoomsTileCardMetaString.react",
    "RoomsTileShareButton.react",
    "VideoChatLogging",
    "VideoChatTileCardContent.react",
    "getJSEnumSafe",
    "react",
    "recoverableViolation",
    "useCometAlertDialog",
    "useCometEntryPointDialog",
    "useJoinableVideoChatsRoomUpdateSubscription",
    "useMWChatJoinVideoChat",
    "useRoomsProfileUrisAndAddOn",
    "useRoomsRoomDefaultValues",
    "useRoomsShouldShowGradientOnTile",
    "uuid",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l = d("react");
    e = d("react");
    var m = e.useCallback,
      n = e.useMemo,
      o = {
        pressable: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "datstx6m",
          width: "k4urcfbm",
        },
      },
      p = i !== void 0 ? i : (i = b("RoomsSelfRoomTile_link.graphql")),
      q = j !== void 0 ? j : (j = b("RoomsSelfRoomTile_user.graphql")),
      r = k !== void 0 ? k : (k = b("RoomsSelfRoomTile_fbts.graphql"));
    function a(a) {
      var b,
        e,
        f = a.fbtsRef,
        g = a.linkRef;
      a = a.userRef;
      g = d("CometRelay").useFragment(p, g);
      f = d("CometRelay").useFragment(r, f);
      a = d("CometRelay").useFragment(q, a);
      var h = c("useRoomsRoomDefaultValues")(a);
      h = h.defaultProfileUri;
      var i = c("useRoomsShouldShowGradientOnTile")(g),
        j = d("useRoomsProfileUrisAndAddOn").useRoomsProfileUrisAndAddOn(
          g,
          void 0,
          void 0,
          void 0,
          i
        );
      b = (b = j == null ? void 0 : j.profileUris) != null ? b : [h];
      var k = g == null ? void 0 : g.link_hash;
      h = g == null ? void 0 : g.link_url;
      var m = g == null ? void 0 : g.__id,
        t =
          (e = g == null ? void 0 : g.active_call_participant_count) != null
            ? e
            : void 0,
        u = g == null ? void 0 : g.id;
      e = (g == null ? void 0 : g.is_ending) === !0;
      var v = (g == null ? void 0 : g.is_e2e_encrypted) === !0,
        w = c("useCometEntryPointDialog")(
          c("RoomsSelfLobbyDialog.entrypoint"),
          { linkHash: k },
          "button"
        ),
        x = w[0];
      w[1];
      var y = w[2],
        z = w[3];
      w = w[4];
      var A = n(
        function () {
          return k != null && m != null ? { linkHash: k, nodeDataID: m } : null;
        },
        [k, m]
      );
      c("useJoinableVideoChatsRoomUpdateSubscription")(A);
      A = d("VideoChatLogging").useVideoChatLogging();
      var B = A.defaultData,
        C = A.logRoomCardImpression,
        D = A.logRoomSelfCardTap;
      A = A.useVideoChatImpressionLogging;
      A = A(
        {
          num_room_participants: t,
          video_call_link_id: (A = u) != null ? A : void 0,
        },
        C
      );
      C = l.jsx(c("RoomsTileCardMetaString.react"), {
        fbtsRef: f,
        linkRef: g,
        shouldShowGradient: i,
        userRef: a,
      });
      f = function () {
        var a,
          b = babelHelpers["extends"]({}, B == null ? void 0 : B.session_ids, {
            funnel_session_id: c("uuid")(),
          });
        D({ session_ids: b, video_call_link_id: (a = u) != null ? a : void 0 });
        x(
          {
            loggingData: babelHelpers["extends"]({}, B, {
              num_room_participants: t,
              session_ids: babelHelpers["extends"]({}, b, {
                card_session_id: c("uuid")(),
              }),
              video_call_link_id: (a = u) != null ? a : void 0,
            }),
          },
          void 0,
          "comet.rooms.lobby"
        );
      };
      a = (j == null ? void 0 : j.isScheduledRoom) === !0;
      return l.jsx(c("CometPressable.react"), {
        disabled: e,
        onHoverIn: y,
        onHoverOut: z,
        onPress: f,
        onPressIn: w,
        testid: void 0,
        xstyle: o.pressable,
        children: l.jsx(c("VideoChatTileCardContent.react"), {
          badge: j == null ? void 0 : j.badge,
          button: a
            ? l.jsx(c("RoomsTileShareButton.react"), {
                isEnding: e,
                linkHash: k,
              })
            : l.jsx(s, {
                activeCallParticipantCount: t,
                isE2EE: v,
                isEnding: e,
                isScheduledRoom: a,
                linkID: u,
                linkUrl: h,
                shouldShowGradient: i,
              }),
          description: C,
          isLocked:
            c("getJSEnumSafe")(
              c("MessengerCallInviteLinkLockStatus"),
              g == null ? void 0 : g.lock_status
            ) === "locked_by_owner",
          isSelfCardNullState: !1,
          profileUris: b,
          ref: A,
          shouldShowGradient: i,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function s(a) {
      var b = a.activeCallParticipantCount,
        e = a.isE2EE,
        f = a.isEnding,
        g = a.isScheduledRoom,
        i = a.linkID,
        j = a.linkUrl;
      a = a.shouldShowGradient;
      var k = d("VideoChatLogging").useVideoChatLogging(),
        n = k.logRoomJoinTap;
      k = c("useCometAlertDialog")();
      var o = k[0];
      k = k[1];
      var p = c("useMWChatJoinVideoChat")(void 0),
        q = p[0];
      p[1];
      p = h._("Join");
      var r = h._("Use the Messenger mobile app to join this room"),
        s = h._(
          "This room is end-to-end encrypted, which isn't supported on desktop browsers. You can join the room in the Messenger app on a mobile device."
        ),
        t = m(
          function () {
            if (i != null)
              if (e) {
                var a;
                n({
                  button_type: "join_unsupported_e2ee",
                  num_room_participants: b,
                  room_url: (a = j) != null ? a : void 0,
                  video_call_link_id: i,
                });
              } else {
                n({
                  num_room_participants: b,
                  room_url: (a = j) != null ? a : void 0,
                  video_call_link_id: i,
                });
              }
            else c("recoverableViolation")("Expected non-null linkID", "rooms");
            if (e) o({ body: s, title: r });
            else {
              q((a = j) != null ? a : "");
            }
          },
          [b, s, r, e, q, i, j, n, o]
        );
      return l.jsx(c("RoomsTileButton.react"), {
        actionName: p,
        isActionDeemphasized: g,
        isDisabled: f,
        onButtonPress: t,
        ref: k,
        shouldShowGradient: a,
      });
    }
    s.displayName = s.name + " [from " + f.id + "]";
    e = d("VideoChatLogging").withVideoChatLoggingProvider(a, function (a) {
      a = a.cardIndex;
      return { card_tray_index: a };
    });
    g["default"] = e;
  },
  98
);
__d(
  "VideoChatCollapsedTray.react",
  [
    "CometCard.react",
    "CometHScroll.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometVisualCompletionAttributes",
    "RoomCollapsedTilePlaceholder.react",
    "RoomFriendTileCollapsed.react",
    "RoomsCollapsedSelfTileCard.react",
    "VideoChatCollapsedTray_fbt.graphql",
    "VideoChatCollapsedTray_room.graphql",
    "VideoChatCollapsedTray_viewer.graphql",
    "VideoChatLogging",
    "gkx",
    "orEmptyArray",
    "react",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react"),
      l = d("react").startTransition,
      m = c("gkx")("708253"),
      n = 15,
      o = h !== void 0 ? h : (h = b("VideoChatCollapsedTray_room.graphql")),
      p = i !== void 0 ? i : (i = b("VideoChatCollapsedTray_fbt.graphql")),
      q = j !== void 0 ? j : (j = b("VideoChatCollapsedTray_viewer.graphql"));
    function a(a) {
      var b = a.fbtRef,
        e = a.hasNext,
        f = a.isLoadingNext,
        g = a.loadNext,
        h = a.roomsRef;
      a = a.viewerRef;
      var i = d("CometRelay").useFragment(p, b);
      b = d("CometRelay").useFragment(o, h);
      h = d("CometRelay").useFragment(q, a);
      a = c("orEmptyArray")(
        (a = h.joinable_video_chats) == null
          ? void 0
          : (h = a.published_self_room_cards) == null
          ? void 0
          : h.nodes
      );
      (a.length === 0 || a[0] != null) && (a = [null].concat(a));
      h = c("orEmptyArray")(b);
      b = h.reduce(function (a, b) {
        return (
          a +
          ((b == null
            ? void 0
            : (a = b.collapsed_room) == null
            ? void 0
            : a.__typename) === "MessengerCallInviteLink"
            ? 1
            : 0)
        );
      }, 0);
      var j = d("VideoChatLogging").useVideoChatLogging(),
        r = j.defaultData,
        s = j.logRoomsTrayImpression;
      j = j.useVideoChatImpressionLogging;
      j = j(babelHelpers["extends"]({}, r, { num_rooms: b }), s);
      var t = a.map(function (a, b) {
        if (a == null)
          return k.jsx(
            d("CometHScroll.react").Child,
            {
              type: "custom",
              children: k.jsx(c("RoomsCollapsedSelfTileCard.react"), {
                roomRef: a,
              }),
            },
            "self_vc_card_collapse"
          );
        else
          return k.jsx(
            d("CometHScroll.react").Child,
            {
              children: k.jsx(c("CometPlaceholder.react"), {
                fallback: k.jsx(c("RoomCollapsedTilePlaceholder.react"), {}),
                children: k.jsx(c("RoomFriendTileCollapsed.react"), {
                  cardIndex: b,
                  fbtsRef: i,
                  roomRef: a,
                }),
              }),
            },
            "self_active_room_collapsed" + b
          );
      });
      r = h.map(function (a, b) {
        a = a == null ? void 0 : a.collapsed_room;
        var e = a == null ? void 0 : a.__typename;
        if (
          a == null ||
          (a.link_surface != null &&
            a.link_surface !== "FRIEND_JOINUPS" &&
            a.link_surface !== "MESSENGER_V2") ||
          (e !== "User" && e !== "MessengerCallInviteLink")
        )
          return null;
        else
          return k.jsx(
            d("CometHScroll.react").Child,
            {
              children: k.jsx(c("CometPlaceholder.react"), {
                fallback: k.jsx(c("RoomCollapsedTilePlaceholder.react"), {}),
                children: k.jsx(c("RoomFriendTileCollapsed.react"), {
                  cardIndex: b + t.length,
                  fbtsRef: i,
                  roomRef: a,
                }),
              }),
            },
            a.id
          );
      });
      b = function () {
        if (!e || f) return;
        l(function () {
          g(n);
        });
      };
      e &&
        r.push(
          k.jsx(
            d("CometHScroll.react").Child,
            {
              children: k.jsx(c("RoomCollapsedTilePlaceholder.react"), {
                onVisible: b,
              }),
            },
            "glimmer-more"
          )
        );
      s = [].concat(t, r).filter(Boolean);
      return k.jsx(
        "div",
        babelHelpers["extends"](
          { className: m ? "" : "oud54xpy", ref: j },
          c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
          {
            children: k.jsx(c("CometCard.react"), {
              background: "white",
              dropShadow: 1,
              children: k.jsx("div", {
                className: "du4w35lb k4urcfbm l9j0dhe7 e5nlhep0 ecm0bbzt",
                children: k.jsx(d("CometHScroll.react").Container, {
                  accessibilityLabel: "video chats that people can join",
                  cardWidth: { type: "fixed", width: 48 },
                  gap: 8,
                  peek: !0,
                  peekPaddingStart: 16,
                  children: s,
                }),
              }),
            }),
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("VideoChatLogging").withVideoChatLoggingProvider(a, function (a) {
      return {
        session_ids: { tray_session_id: c("uuid")() },
        source: "fb_top_of_feed",
        surface: "newsfeed",
        tray_ui_type: "compact",
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "useRoomsSelfRooms",
  [
    "RelayHooks",
    "RoomsSelfRoomTile.react",
    "react",
    "useRoomsSelfRooms_fbts.graphql",
    "useRoomsSelfRooms_user.graphql",
    "useRoomsSelfRooms_viewer.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react");
    function a(a, e, f) {
      a = d("RelayHooks").useFragment(
        h !== void 0 ? h : (h = b("useRoomsSelfRooms_viewer.graphql")),
        a
      );
      var g = d("RelayHooks").useFragment(
          i !== void 0 ? i : (i = b("useRoomsSelfRooms_fbts.graphql")),
          e
        ),
        l = d("RelayHooks").useFragment(
          j !== void 0 ? j : (j = b("useRoomsSelfRooms_user.graphql")),
          f
        );
      a =
        a == null
          ? void 0
          : (e = a.joinable_video_chats) == null
          ? void 0
          : (f = e.published_self_room_cards) == null
          ? void 0
          : f.edges;
      return g == null || l == null || a == null
        ? []
        : a.map(function (a, b) {
            return [
              k.jsx(
                c("RoomsSelfRoomTile.react"),
                { cardIndex: b + 1, fbtsRef: g, linkRef: a.node, userRef: l },
                (b = a.node) == null ? void 0 : b.id
              ),
              (b = a.node) == null ? void 0 : b.id,
            ];
          });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useRoomsTrayQuickPromotion",
  ["CometRelay", "react", "useRoomsTrayQuickPromotion_viewer.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    c = d("react");
    var j = c.useEffect,
      k = c.useState,
      l =
        h !== void 0 ? h : (h = b("useRoomsTrayQuickPromotion_viewer.graphql"));
    function a(a, b) {
      var c;
      b = d("CometRelay").useFragment(l, b);
      c =
        b == null
          ? void 0
          : (c = b.eligible_promotions) == null
          ? void 0
          : (c = c.edges) == null
          ? void 0
          : (c = c[0]) == null
          ? void 0
          : (c = c.node) == null
          ? void 0
          : (c = c.comet_qp_sections) == null
          ? void 0
          : (c = c.rendererStrategyTypeName) == null
          ? void 0
          : c.__typename;
      var e = k(c == null || a === !0),
        f = e[0],
        g = e[1];
      j(
        function () {
          a === !0 && g(!0);
        },
        [a]
      );
      if (!f) {
        b = i.jsx(
          d("CometRelay").MatchContainer,
          {
            match:
              b == null
                ? void 0
                : (e = b.eligible_promotions) == null
                ? void 0
                : (f = e.edges) == null
                ? void 0
                : (b = f[0]) == null
                ? void 0
                : (e = b.node) == null
                ? void 0
                : (f = e.comet_qp_sections) == null
                ? void 0
                : f.renderer_strategy,
            props: { onDismiss: g },
          },
          "rooms_tray_promotional_card"
        );
        e =
          c != null &&
          (c ===
            "CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy" ||
            c ===
              "CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy" ||
            c === "CometQuickPromotionRoomsTrayWideCardRendererStrategy" ||
            c ===
              "CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy");
        return { el: b, isWide: e };
      }
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoChatTray.react",
  [
    "CometCard.react",
    "CometHScroll.react",
    "CometPlaceholder.react",
    "CometRelay",
    "RoomsCreateRoomTile.react",
    "RoomsExpandedTile.react",
    "RoomsTrayVariantContext",
    "VideoChatLogging",
    "VideoChatTrayContent_fbt.graphql",
    "VideoChatTrayContent_room.graphql",
    "VideoChatTrayContent_self.graphql",
    "VideoChatTrayTilePlaceholder.react",
    "VideoChatTray_viewer.graphql",
    "filterNulls",
    "orEmptyArray",
    "react",
    "useRoomsSelfRooms",
    "useRoomsTrayQuickPromotion",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k,
      l = d("react");
    e = d("react");
    var m = e.startTransition,
      n = e.useContext,
      o = e.useMemo,
      p = e.useRef,
      q = h !== void 0 ? h : (h = b("VideoChatTrayContent_room.graphql")),
      r = i !== void 0 ? i : (i = b("VideoChatTrayContent_self.graphql")),
      s = j !== void 0 ? j : (j = b("VideoChatTrayContent_fbt.graphql")),
      t = k !== void 0 ? k : (k = b("VideoChatTray_viewer.graphql"));
    function a(a) {
      var b = a.fbtRef,
        e = a.hasNext,
        f = a.isLoadingNext,
        g = a.loadNext,
        h = a.roomsRef,
        i = a.selfRef;
      a = a.viewerRef;
      h = d("CometRelay").useFragment(q, h);
      var j = d("CometRelay").useFragment(r, i);
      i = d("CometRelay").useFragment(s, b);
      b = d("CometRelay").useFragment(t, a);
      var k = c("useRoomsSelfRooms")(b, i, j);
      a = n(c("RoomsTrayVariantContext"));
      var u = a.initialScrollToIndex,
        v = p(!1);
      a = c("orEmptyArray")(h);
      h = a.reduce(function (a, b) {
        return (
          a +
          ((b == null
            ? void 0
            : (a = b.node) == null
            ? void 0
            : a.__typename) === "MessengerCallInviteLink"
            ? 1
            : 0)
        );
      }, 0);
      var w = d("VideoChatLogging").useVideoChatLogging(),
        x = w.defaultData,
        y = w.logRoomsTrayImpression;
      w = w.useVideoChatImpressionLogging;
      w = w(babelHelpers["extends"]({}, x, { num_rooms: h }), y);
      x = c("useRoomsTrayQuickPromotion")(k.length > 0, b);
      h =
        x != null
          ? l.jsx(
              d("CometHScroll.react").Child,
              { type: x.isWide ? "doubleWidth" : "default", children: x.el },
              "qp"
            )
          : null;
      var z = x == null ? 0 : 1,
        A = k.map(function (a) {
          var b = a[0];
          a = a[1];
          return l.jsx(d("CometHScroll.react").Child, { children: b }, a);
        });
      y = c("RoomsCreateRoomTile.react")
        ? l.jsx(
            d("CometHScroll.react").Child,
            {
              children: l.jsx(c("RoomsCreateRoomTile.react"), {
                fbtsRef: i,
                hasExistingRoom: A.length > 0,
                userRef: j,
              }),
            },
            "create_room_card"
          )
        : null;
      b = a.map(function (a, b) {
        a = a == null ? void 0 : a.node;
        if (
          (a == null ? void 0 : a.__typename) ===
          "MessengerViewerGroupThreadRoomCard"
        )
          return null;
        return a == null
          ? null
          : l.jsx(
              d("CometHScroll.react").Child,
              {
                children: l.jsx(c("CometPlaceholder.react"), {
                  fallback: l.jsx(c("VideoChatTrayTilePlaceholder.react"), {}),
                  children: l.jsx(c("RoomsExpandedTile.react"), {
                    cardIndex: b + 1 + k.length + z,
                    roomCardRef: a,
                    userRef: j,
                  }),
                }),
              },
              a.id
            );
      });
      x = e
        ? l.jsx(
            d("CometHScroll.react").Child,
            {
              children: l.jsx(c("VideoChatTrayTilePlaceholder.react"), {
                onVisible: function () {
                  if (!e || f) return;
                  m(function () {
                    g(10);
                  });
                },
              }),
            },
            "glimmer"
          )
        : null;
      i = c("filterNulls")([h, y].concat(A, b, [x]));
      a = o(
        function () {
          if (u != null && A.length === 0 && !v.current) {
            v.current = !0;
            return u;
          }
          return 0;
        },
        [u, A.length]
      );
      return l.jsx("div", {
        className: "du4w35lb k4urcfbm l9j0dhe7 sjgh65i0",
        ref: w,
        children: l.jsx(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: l.jsx("div", {
            className: "e5nlhep0 ecm0bbzt",
            children: l.jsx(d("CometHScroll.react").Container, {
              accessibilityLabel: "video chats that people can join",
              cardWidth: { minWidth: 150, type: "responsive" },
              gap: 8,
              initialScrollToIndex: a,
              peek: !0,
              peekPaddingStart: 16,
              testid: void 0,
              children: i,
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("VideoChatLogging").withVideoChatLoggingProvider(a, function (a) {
      return {
        session_ids: { tray_session_id: c("uuid")() },
        source: "fb_top_of_feed",
        surface: "newsfeed",
        tray_ui_type: "full",
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "useRoomsTrayRefetcher",
  [
    "CometRelay",
    "VideoChatTrayQuery.graphql",
    "WebPixelRatio",
    "qex",
    "react",
    "useInterval",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useRef,
      j = b.useState,
      k = 60 * 1e3;
    function a(a) {
      var b,
        e = d("CometRelay").useRelayEnvironment(),
        f = ((b = c("qex")._("1705466")) != null ? b : 15) * k;
      b = j(!0);
      var g = b[0],
        l = b[1],
        m = i(Date.now()),
        n = h(
          function () {
            if (a == null || f <= 0) return;
            d("CometRelay")
              .fetchQuery(e, c("VideoChatTrayQuery.graphql"), {
                id: a,
                scale: d("WebPixelRatio").get(),
              })
              .subscribe({
                next: function () {
                  m.current = Date.now();
                },
              });
          },
          [e, f, a]
        );
      c("useInterval")(n, g ? f : 0, [g, n, f]);
      b = c("useVisibilityObserver")({
        onHidden: function () {
          l(!1);
        },
        onVisible: function () {
          l(!0), Date.now() - m.current > f && n();
        },
      });
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "RoomsTrayRoot.react",
  [
    "CometRelay",
    "RoomsGating",
    "RoomsTrayRoot_messengeTrayRenderingStrategy.graphql",
    "RoomsTrayRoot_room.graphql",
    "RoomsTrayRoot_user.graphql",
    "RoomsTrayRoot_viewer.graphql",
    "RoomsTrayVariantContext",
    "VideoChatCollapsedTray.react",
    "VideoChatTray.react",
    "react",
    "unrecoverableViolation",
    "useRoomsCreateTraySubscription",
    "useRoomsTrayRefetcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k,
      l = d("react");
    e = d("react");
    var m = e.useContext,
      n = e.useMemo,
      o = e.useState,
      p = h !== void 0 ? h : (h = b("RoomsTrayRoot_user.graphql"));
    function q(a) {
      var e,
        f = a.roomsRef,
        g = a.userRef;
      a = a.viewerRef;
      f = d("CometRelay").usePaginationFragment(
        i !== void 0 ? i : (i = b("RoomsTrayRoot_room.graphql")),
        f
      );
      var h = f.data,
        k = f.hasNext,
        n = f.isLoadingNext;
      f = f.loadNext;
      g = d("CometRelay").useFragment(p, g);
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("RoomsTrayRoot_viewer.graphql")),
        a
      );
      e = (e = a.actor) == null ? void 0 : e.id;
      var o = c("useRoomsTrayRefetcher")(e);
      c("useRoomsCreateTraySubscription")(e);
      e = m(c("RoomsTrayVariantContext"));
      e = e.variant;
      return l.jsx("div", {
        ref: o,
        children:
          e === "collapsed" && !d("RoomsGating").isTopOfFeedUnitEnabled()
            ? l.jsx(c("VideoChatCollapsedTray.react"), {
                fbtRef: g,
                hasNext: k,
                isLoadingNext: n,
                loadNext: f,
                roomsRef:
                  h == null
                    ? void 0
                    : (o = h.fb_room_cards) == null
                    ? void 0
                    : o.edges,
                viewerRef: a,
              })
            : l.jsx(c("VideoChatTray.react"), {
                fbtRef: g,
                hasNext: k,
                isLoadingNext: n,
                loadNext: f,
                roomsRef:
                  h == null
                    ? void 0
                    : (e = h.fb_room_cards) == null
                    ? void 0
                    : e.edges,
                selfRef: g,
                viewerRef: a,
              }),
      });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function a(a) {
      var e = a.messengeTrayRenderingStrategy,
        f = a.shouldShowCollapsedTray;
      a = a.viewerRef;
      e = d("CometRelay").useFragment(
        k !== void 0
          ? k
          : (k = b("RoomsTrayRoot_messengeTrayRenderingStrategy.graphql")),
        e
      );
      e = e == null ? void 0 : e.user;
      if (e == null)
        throw c("unrecoverableViolation")("user should be non-null", "rooms");
      f = o(f ? "collapsed" : "expanded");
      var g = f[0],
        h = f[1];
      f = o(void 0);
      var i = f[0],
        j = f[1];
      f = n(
        function () {
          return {
            initialScrollToIndex: i,
            setInitialScrollToIndex: j,
            setVariant: h,
            variant: g,
          };
        },
        [i, g]
      );
      return l.jsx(c("RoomsTrayVariantContext").Provider, {
        value: f,
        children: l.jsx(q, { roomsRef: e, userRef: e, viewerRef: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoChatHomeContainerComet.react",
  ["cr:1917817", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react"), (g["default"] = b("cr:1917817"));
  },
  98
);
__d(
  "VideoChatTrayPlaceholder.react",
  [
    "BaseLoadingStateElement.react",
    "CometCard.react",
    "VideoChatTrayTilePlaceholder.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        cardContainer: {
          alignItems: "gs1a9yip",
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexGrow: "buofh1pr",
          flexShrink: "pfnyh3mw",
          marginEnd: "cgat1ltu",
          marginStart: "kkf49tns",
        },
        container: {
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          justifyContent: "i1fnvgqd",
          paddingTop: "pybr56ya",
          paddingEnd: "d1544ag0",
          paddingBottom: "f10w8fjw",
          paddingStart: "tw6a2znq",
          width: "g2wf7z4h",
        },
        root: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          justifyContent: "jifvfom9",
          marginBottom: "sjgh65i0",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "k4urcfbm",
        },
      },
      j = {
        narrow: {
          width: "sb3ic3sl",
          "@media (max-width: 299px)": { width: "tfksjxg8" },
        },
        normal: {
          width: "gppcmqpj",
          "@media (min-width: 404px) and (max-width: 561px)": {
            width: "g5egk45q",
          },
        },
        wide: {
          width: "exqoj0th",
          "@media (min-width: 562px) and (max-width: 719px)": {
            width: "m8vaowjb",
          },
        },
      };
    function a(a, b) {
      a = 5;
      return h.jsx("div", {
        role: "article",
        children: h.jsx(c("BaseLoadingStateElement.react"), {
          ref: b,
          xstyle: i.root,
          children: h.jsx(c("CometCard.react"), {
            background: "white",
            dropShadow: 1,
            children: h.jsx("div", {
              className: c("stylex")(i.container),
              children: Array(a)
                .fill()
                .map(function (a, b) {
                  return h.jsx(
                    "div",
                    {
                      className: c("stylex")([
                        i.cardContainer,
                        j.narrow,
                        j.normal,
                        j.wide,
                      ]),
                      children: h.jsx(
                        c("VideoChatTrayTilePlaceholder.react"),
                        {},
                        b
                      ),
                    },
                    b
                  );
                }),
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometMegaphoneRoot.react",
  [
    "CometMegaphoneQuickPromotionSection.react",
    "CometMegaphoneRootQuery.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = h !== void 0 ? h : (h = b("CometMegaphoneRootQuery.graphql"));
    function a(a) {
      a = a.megaphoneQueryReference;
      a = d("CometRelay").usePreloadedQuery(j, a);
      a =
        (a = a.viewer) == null
          ? void 0
          : (a = a.megaphonePromotions) == null
          ? void 0
          : (a = a.edges[0]) == null
          ? void 0
          : a.node;
      return a == null
        ? null
        : i.jsx(c("CometMegaphoneQuickPromotionSection.react"), {
            quickPromotion: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWChatOpenNewSearchTab.bs",
  [
    "LSThreadAttributionStore.bs",
    "MWChatMultitabContext.bs",
    "MWChatMultitabDispatcher.bs",
    "MWChatStateActions.bs",
    "MessengerWebEvent",
    "MessengerWebEventsFalcoEvent.bs",
    "bs_curry",
    "cr:9838",
    "react",
    "useCometFeedNoRoutingNavigationEventLogger",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function i(a) {
      if (!(b("cr:9838") == null))
        return b("bs_curry")._1(b("cr:9838").useDispatch, void 0);
    }
    function a(a, c) {
      var d = b("useCometFeedNoRoutingNavigationEventLogger")(),
        e = h.useContext(b("MWChatMultitabContext.bs").context),
        f = i(void 0);
      if (f !== void 0)
        return function (a) {
          return b("bs_curry")._1(
            f,
            b("MWChatStateActions.bs").openTab(Date.now(), { TAG: 0, _0: [] })
          );
        };
      else
        return h.useCallback(
          function (f) {
            d(Date.now(), "", "messenger");
            b("MessengerWebEventsFalcoEvent.bs").log(function () {
              return {
                entry_point: a,
                event_name: b("MessengerWebEvent").OPEN_CHAT_TAB,
              };
            });
            b("LSThreadAttributionStore.bs").setSourceForNewThread(c);
            if (e !== void 0)
              return b("MWChatMultitabDispatcher.bs").dispatch(void 0, e, 0);
          },
          [a, e, d]
        );
    }
    c = b("cr:9838");
    f.$MWChatStateV2$requireCond = b("cr:9838");
    f.mwChatStateV2 = c;
    f.useDispatch = i;
    f.useHook = a;
  },
  null
);
__d(
  "MWChatOpenNewSearchTab.re",
  ["MWChatOpenNewSearchTab.bs", "bs_curry"],
  function (a, b, c, d, e, f) {
    a = function (a, c) {
      a = b("bs_curry")._2(b("MWChatOpenNewSearchTab.bs").useHook, a, c);
      return a;
    };
    f.useHook = a;
  },
  null
);
__d(
  "StoriesTrayRow.react",
  [
    "CometRelay",
    "StoriesGating",
    "StoriesTrayRow_story.graphql",
    "cr:1998316",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("StoriesTrayRow_story.graphql")),
          a.storyRef
        ),
        f = d("StoriesGating").shouldShowSeeAllStoriesTile() ? 3 : 4,
        g = i.Children.map(a.children, function (a, b) {
          return i.jsx(
            "div",
            {
              className:
                "b3onmgus ph5uu5jm g3eujd1d" +
                (b === f ? " m7p4j22w gxkd9q8g etoy7lt3" : "") +
                (b >= f + 1 ? " rso7evrz aw9tlwxs nrydw347 hluxu7x5" : ""),
              children: a,
            },
            "stories_tray_tile_" + b
          );
        });
      d("StoriesGating").shouldShowSeeAllStoriesTile() &&
        g.push(
          i.jsx(
            "div",
            {
              className: "b3onmgus ph5uu5jm g3eujd1d",
              children:
                b("cr:1998316") != null &&
                i.jsx(b("cr:1998316"), { storyRef: e, urlProps: a.urlProps }),
            },
            "see_all_stories_tile"
          )
        );
      return i.jsx("div", {
        className: "tn7ubyq0 d2edcug0 rq0escxv",
        children: i.jsx("div", {
          className: c("stylex").dedupe(
            {
              "align-items-1": "gs1a9yip",
              "display-1": "j83agx80",
              "flex-direction-1": "btwxx1t3",
              "flex-wrap-1": "owycx6da",
              "justify-content-1": "jifvfom9",
              "margin-end-1": "dlv3wnog",
              "margin-start-1": "rl04r1d5",
              "overflow-x-1": "ni8dbmo4",
              "overflow-y-1": "stjgntxs",
              "padding-bottom-1": "jbae33se",
              "padding-top-1": "cxgpxx05",
              "position-1": "l9j0dhe7",
            },
            d("StoriesGating").isTopOfFeedUnitEnabled()
              ? { "margin-start-1": "dhix69tm", "padding-bottom-1": "ihqw7lf3" }
              : null
          ),
          children: g,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesGlimmerRectangular.react",
  ["StoriesTrayRow.react", "StoriesTrayTileGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.tilesToShow;
      return h.jsx("div", {
        children: h.jsx(c("StoriesTrayRow.react"), {
          children: Array(a)
            .fill()
            .map(function (a, b) {
              return h.jsx(c("StoriesTrayTileGlimmer.react"), { index: b }, b);
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
  "StoriesTrayCreateCard.react",
  [
    "fbt",
    "ix",
    "CometCard.react",
    "QuickPerformanceLogger",
    "StoriesGating",
    "StoriesModuleStoryCreateLoadTtiWwwQPLEvent",
    "TetraAccessoryListCell.react",
    "XCometStoriesCreateControllerRouteBuilder",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback;
    function a() {
      var a = c("XCometStoriesCreateControllerRouteBuilder").buildURL({}),
        b = {
          entryPoint: "add_to_story_persistent_button",
          sourceSurface: "newsfeed",
        },
        e = k(function () {
          c("QuickPerformanceLogger").markerEnd(
            c("StoriesModuleStoryCreateLoadTtiWwwQPLEvent"),
            4
          ),
            c("QuickPerformanceLogger").markerStart(
              c("StoriesModuleStoryCreateLoadTtiWwwQPLEvent")
            );
        }, []);
      return j.jsx("div", {
        className: "sjgh65i0",
        children: j.jsx(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: j.jsx("div", {
            className: "sj5x9vvc cxgpxx05",
            children: j.jsx(c("TetraAccessoryListCell.react"), {
              addOnPrimary: {
                color: "lightblue",
                icon: d("fbicon")._(i("483770"), 24),
                size: 40,
                type: "contained-icon",
              },
              body: d("StoriesGating").getCreationDescription(),
              emphasized: !0,
              headline: h._("Create Story"),
              linkProps: { passthroughProps: b, url: a },
              onPress: e,
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
  "StoriesTrayErrorCard.react",
  [
    "fbt",
    "ix",
    "CometCard.react",
    "TetraCircleButton.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a() {
      return j.jsx("div", {
        className: "sjgh65i0",
        children: j.jsx(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: j.jsxs("div", {
            className: "tw6a2znq f10w8fjw d1544ag0 pybr56ya j83agx80",
            children: [
              j.jsx(c("TetraCircleButton.react"), {
                color: "highlight",
                icon: d("fbicon")._(i("534222"), 20),
                label: h._("Reload the tray"),
                onPress: function () {},
                size: 48,
              }),
              j.jsx("div", {
                className: "a8nywdso pd6db7fv rz4wbd8a l60d2q6s ozuftl9m",
                children: j.jsx(c("TetraTextPairing.react"), {
                  body: h._(
                    "Click to try reloading, or simply refresh your browser"
                  ),
                  bodyColor: "secondary",
                  headline: h._("Stories failed to load"),
                  level: 3,
                }),
              }),
            ],
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
  "useStoriesTrayProfileImpressionLogging",
  [
    "CometRelay",
    "StoriesActorContext",
    "StoriesLoggerHelper",
    "react",
    "requireDeferred",
    "useImpressionLogger",
    "useStoriesTrayProfileImpressionLogging_bucket.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useRef,
      l = c("requireDeferred")("StoryProfileImpressionFalcoEvent").__setRef(
        "useStoriesTrayProfileImpressionLogging"
      ),
      m =
        h !== void 0
          ? h
          : (h = b("useStoriesTrayProfileImpressionLogging_bucket.graphql"));
    function a(a, b, e, f) {
      var g,
        h,
        n = k(!1),
        o = d("CometRelay").useFragment(m, a);
      a = j(c("StoriesActorContext"));
      a = a.actorID;
      g =
        o == null
          ? void 0
          : (g = o.story_bucket_owner) == null
          ? void 0
          : g.__typename;
      var p =
        o == null ? void 0 : (h = o.story_bucket_owner) == null ? void 0 : h.id;
      h =
        (o == null
          ? void 0
          : (h = o.story_bucket_owner) == null
          ? void 0
          : h.is_viewer_friend) || !1;
      var q = d("StoriesLoggerHelper").getOwnerType(a, g, p, h),
        r =
          o == null
            ? void 0
            : (a = o.thumbnail_story_to_show) == null
            ? void 0
            : (g = a.attachments) == null
            ? void 0
            : (h = g[0]) == null
            ? void 0
            : (a = h.media) == null
            ? void 0
            : a.id;
      g = i(
        function (a, c) {
          if (n.current || o == null) return;
          n.current = !0;
          a.log(function () {
            return {
              has_new_content: o.is_bucket_seen_by_viewer || !1,
              has_new_views: o.is_bucket_seen_by_viewer || !1,
              media_id: r,
              preview_type: "rectangle",
              source: b,
              story_index: f,
              story_owner: p,
              story_owner_type: q,
              tracking_string: o == null ? void 0 : o.ranking_tracking_string,
              tray_session_id: e,
            };
          });
        },
        [o, p, q, b, f, e, r]
      );
      return c("useImpressionLogger")(l, g);
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesModuleStoryOpenViewerFromStoriesHomeQPLEvent",
  ["cr:10693"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:10693");
  },
  98
);
__d(
  "useStoriesTrayTilePrefetchImageURI",
  ["CometRelay", "useStoriesTrayTilePrefetchImageURI_story.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var c;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useStoriesTrayTilePrefetchImageURI_story.graphql")),
        a
      );
      c =
        a == null
          ? void 0
          : (c = a.attachments) == null
          ? void 0
          : (c = c[0]) == null
          ? void 0
          : c.media;
      var e = c == null ? void 0 : (c = c.image) == null ? void 0 : c.uri,
        f =
          a == null
            ? void 0
            : (c = a.backdrop) == null
            ? void 0
            : (a = c.media) == null
            ? void 0
            : (c = a.image) == null
            ? void 0
            : c.uri;
      return e == null && f == null
        ? null
        : function () {
            if (e != null) {
              var a = new Image();
              a.src = e;
              if (f != null) {
                a = new Image();
                a.src = f;
              }
            }
          };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesTrayTilePressable",
  [
    "CometRelay",
    "QPLUserFlow",
    "StoriesLoggingConstants",
    "StoriesModuleStoryOpenViewerFromStoriesHomeQPLEvent",
    "StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent",
    "useStoriesTrayTilePrefetchImageURI",
    "useStoriesTrayTilePressable_story.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, e) {
      e === void 0 && (e = c("StoriesLoggingConstants").ACTION_SOURCE.TRAY);
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useStoriesTrayTilePressable_story.graphql")),
        a
      );
      var f = c("useStoriesTrayTilePrefetchImageURI")(a),
        g =
          e === c("StoriesLoggingConstants").ACTION_SOURCE.TRAY
            ? c("StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent")
            : c("StoriesModuleStoryOpenViewerFromStoriesHomeQPLEvent");
      return {
        onPress: function () {
          c("QPLUserFlow").start(g);
        },
        onPressIn: function (a) {
          f && f();
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesTrayTile.react",
  [
    "fbt",
    "CometImage.react",
    "CometRelay",
    "GraphQLGender",
    "StoriesEnums",
    "StoriesLoggingConstants",
    "StoriesTrayTileAvatar.react",
    "StoriesTrayTileView.react",
    "StoriesTrayTile_LWRAnimations.graphql",
    "StoriesTrayTile_bucket.graphql",
    "StoriesTrayUtils",
    "react",
    "useStoriesTrayProfileImpressionLogging",
    "useStoriesTrayTilePressable",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react");
    function a(a) {
      var e,
        f,
        g,
        l,
        m,
        n = a.animations,
        o = a.bucketCount,
        p = a.bucketLength,
        q = a.bucketNode,
        r = a.gender;
      r = r === void 0 ? "UNKNOWN" : r;
      var s = a.hasSelfBucket,
        t = a.isFirstVideoBucket,
        u = a.traySessionID,
        v = a.source;
      v = v === void 0 ? c("StoriesLoggingConstants").ACTION_SOURCE.UNKNOWN : v;
      var w = a.storiesTrayType;
      w = w === void 0 ? "TOP_OF_FEED_TRAY" : w;
      var x = a.index,
        y = a.hasReactionIcon;
      y = y === void 0 ? !1 : y;
      var z = a.onPressIn;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "animations",
        "bucketCount",
        "bucketLength",
        "bucketNode",
        "gender",
        "hasSelfBucket",
        "isFirstVideoBucket",
        "traySessionID",
        "source",
        "storiesTrayType",
        "index",
        "hasReactionIcon",
        "onPressIn",
      ]);
      q = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesTrayTile_bucket.graphql")),
        q
      );
      var A = q == null ? void 0 : q.id;
      x = c("useStoriesTrayProfileImpressionLogging")(q, v, u, x);
      var B = c("useStoriesTrayTilePressable")(
          q == null ? void 0 : q.first_story_to_show,
          v
        ),
        C = B.onPress,
        D = B.onPressIn;
      B = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("StoriesTrayTile_LWRAnimations.graphql")),
        n
      );
      if (q == null || A == null) return null;
      n = q.story_bucket_owner;
      var E = q.first_story_to_show,
        F = q.thumbnail_story_to_show,
        G = q.ranking_tracking_string,
        H = F == null ? void 0 : F.story_card_info;
      e =
        (e =
          E == null
            ? void 0
            : (e = E.story_card_info) == null
            ? void 0
            : e.can_viewer_reply) != null
          ? e
          : !1;
      f =
        (H == null
          ? void 0
          : (f = H.story_thumbnail) == null
          ? void 0
          : f.uri) ||
        (n == null ? void 0 : (f = n.coverImage) == null ? void 0 : f.uri);
      g =
        H == null
          ? void 0
          : (g = H.background_color_info) == null
          ? void 0
          : (g = g.color_info) == null
          ? void 0
          : g[0];
      H = H == null ? void 0 : H.story_video_thumbnail;
      g = g == null ? void 0 : g.dominant_color;
      l = n == null ? void 0 : (l = n.profile_picture) == null ? void 0 : l.uri;
      n = (n == null ? void 0 : n.name) || h._("Story Poster");
      var I = q.is_bucket_seen_by_viewer === !1;
      m = (m = q == null ? void 0 : q.is_bucket_live) != null ? m : !1;
      l =
        l != null
          ? k.jsx(c("CometImage.react"), {
              alt: n,
              height: 40,
              src: l,
              width: 40,
            })
          : k.jsx("div", { className: "q676j6op qypqp5cg" });
      l = k.jsx(c("StoriesTrayTileAvatar.react"), {
        hasNew: I,
        isLiveStreaming: m,
        isOpaqueBackground: !1,
        children: l,
      });
      A = d("StoriesTrayUtils").getBucketURL(
        A,
        E == null ? void 0 : E.id,
        o,
        v
      );
      o = new (c("GraphQLGender"))(r).toIntlVariationsEnum();
      r = h._({ "*": "{Story owner's name (possesive)}'s story" }, [
        h._name("Story owner's name (possesive)", n, o),
      ]);
      o = g != null && g !== "" ? "#" + g : null;
      g =
        F == null
          ? void 0
          : (g = F.attachments) == null
          ? void 0
          : (F = g.find(function (a) {
              return ((a = a.media) == null ? void 0 : a.cix_screen) != null;
            })) == null
          ? void 0
          : (g = F.media) == null
          ? void 0
          : (F = g.cix_screen) == null
          ? void 0
          : F.view_model;
      return k.jsx("div", {
        ref: x,
        children: k.jsx(
          c("StoriesTrayTileView.react"),
          babelHelpers["extends"](
            {
              animations: B,
              avatar: l,
              backgroundColor: o,
              bucket: q,
              bucketUrl: A,
              canViewerReply: e,
              coverImage: f,
              coverVideo: H,
              hasNew: I,
              hasReactionIcon: y,
              isFirstVideoBucket: t,
              label: r,
              onPress: C,
              onPressIn: function (a) {
                D && D(a), z && z();
              },
              passthroughProps: {
                bucketLength: p,
                bucketType:
                  d("StoriesEnums").STORIES_BUCKETS_INDEXER_TYPES.OTHER,
                hasSelfBucket: s,
                source: v,
                storiesTrayType: w,
                trackingString: G,
                traySessionID: u,
              },
              storyId: E == null ? void 0 : E.id,
            },
            a,
            { isLiveStreaming: m, text: n, warningScreenNode: g }
          )
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesTrayTilePlaceholder.react",
  ["StoriesTrayTileAvatar.react", "StoriesTrayTileView.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = babelHelpers["extends"]({}, a);
      return h.jsx(
        c("StoriesTrayTileView.react"),
        babelHelpers["extends"](
          {
            avatar: h.jsx(c("StoriesTrayTileAvatar.react"), {}),
            showShadow: !1,
          },
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
  "StoriesTrayTileSelf.react",
  [
    "fbt",
    "CometImage.react",
    "CometRelay",
    "StoriesEnums",
    "StoriesGating",
    "StoriesLoggingConstants",
    "StoriesTrayTileAvatar.react",
    "StoriesTrayTileSelf_bucket.graphql",
    "StoriesTrayTileView.react",
    "StoriesTrayUtils",
    "react",
    "requireDeferred",
    "useOnBeforeUnload",
    "useStoriesTrayProfileImpressionLogging",
    "useStoriesTrayTilePressable",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useState,
      m = c("requireDeferred")("ODS").__setRef("StoriesTrayTileSelf.react");
    function a(a) {
      var e,
        f,
        g,
        n = a.bucketCount,
        o = a.bucketNode,
        p = a.bucketLength,
        q = a.hasSelfBucket,
        r = a.traySessionID,
        s = a.source;
      s = s === void 0 ? c("StoriesLoggingConstants").ACTION_SOURCE.TRAY : s;
      var t = a.index,
        u = a.isUploading,
        v = a.optimisticStoryURI,
        w = a.onPressIn;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "bucketCount",
        "bucketNode",
        "bucketLength",
        "hasSelfBucket",
        "traySessionID",
        "source",
        "index",
        "isUploading",
        "optimisticStoryURI",
        "onPressIn",
      ]);
      o = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesTrayTileSelf_bucket.graphql")),
        o
      );
      var x = o == null ? void 0 : o.id;
      t = c("useStoriesTrayProfileImpressionLogging")(o, s, r, t);
      var y = l(v),
        z = y[0];
      y = y[1];
      var A = c("useStoriesTrayTilePressable")(
          o == null ? void 0 : o.first_story_to_show,
          s
        ),
        B = A.onPress,
        C = A.onPressIn,
        D = k(function () {
          m.onReady(function (a) {
            a.bumpEntityKey(
              4329,
              "fb_stories_web",
              "stories_tray.self_story_tile",
              1
            );
          });
        }, []);
      c("useOnBeforeUnload")(function (a) {
        if (u === !0 && a == null)
          return {
            warnMessage: h._(
              "Story is uploading, leave this page will cancel the story"
            ),
          };
      });
      if (o == null || x == null) return null;
      A = o.story_bucket_owner;
      var E = o.first_story_to_show,
        F = o.thumbnail_story_to_show,
        G = o.ranking_tracking_string;
      e =
        (F == null
          ? void 0
          : (e = F.story_card_info) == null
          ? void 0
          : (e = e.story_thumbnail) == null
          ? void 0
          : e.uri) ||
        (A == null ? void 0 : (e = A.coverImage) == null ? void 0 : e.uri);
      var H = o.is_bucket_seen_by_viewer === !1;
      f = (f = o == null ? void 0 : o.is_bucket_live) != null ? f : !1;
      e = { coverImage: e, hasNew: H };
      g =
        (F == null
          ? void 0
          : (g = F.story_card_info) == null
          ? void 0
          : g.story_thumbnail) != null;
      var I = h._("Your Story"),
        J = h._("View your story");
      x = d("StoriesTrayUtils").getBucketURL(
        x,
        E == null ? void 0 : E.id,
        n,
        s
      );
      n = A == null ? void 0 : (E = A.profile_picture) == null ? void 0 : E.uri;
      E = (A == null ? void 0 : A.name) || h._("Story Poster");
      A =
        n != null
          ? j.jsx(c("CometImage.react"), {
              alt: E,
              height: 40,
              src: n,
              width: 40,
            })
          : j.jsx("div", { className: "q676j6op qypqp5cg" });
      n =
        F == null
          ? void 0
          : (E = F.attachments) == null
          ? void 0
          : (n = E.find(function (a) {
              return ((a = a.media) == null ? void 0 : a.cix_screen) != null;
            })) == null
          ? void 0
          : (F = n.media) == null
          ? void 0
          : (E = F.cix_screen) == null
          ? void 0
          : E.view_model;
      F = j.jsx(c("StoriesTrayTileAvatar.react"), {
        hasNew: H,
        isLiveStreaming: f,
        isOpaqueBackground: !1,
        isUploading: u,
        children: A,
      });
      if (u === !0 && d("StoriesGating").shouldEnableOptimisticImprovements()) {
        v != null && (z === null || z !== v) && y(v);
        E = { coverImage: z };
        return j.jsx("div", {
          "data-testid": void 0,
          ref: t,
          children: j.jsx(
            c("StoriesTrayTileView.react"),
            babelHelpers["extends"](
              {
                avatar: F,
                bucketUrl: x,
                label: J,
                onPress: B,
                onPressIn: function (a) {
                  C && C(a), w && w(), D();
                },
                passthroughProps: {
                  source: s,
                  trackingString: G,
                  traySessionID: r,
                },
                text: I,
                warningScreenNode: n,
              },
              E,
              a
            )
          ),
        });
      } else if (g)
        return j.jsx("div", {
          "data-testid": void 0,
          ref: t,
          children: j.jsx(
            c("StoriesTrayTileView.react"),
            babelHelpers["extends"](
              {
                avatar: F,
                bucket: o,
                bucketUrl: x,
                isLiveStreaming: f,
                label: J,
                onPressIn: function (a) {
                  C && C(a), w && w(), D();
                },
                passthroughProps: {
                  bucketLength: p,
                  bucketType:
                    d("StoriesEnums").STORIES_BUCKETS_INDEXER_TYPES.OWNED_SELF,
                  hasSelfBucket: q,
                  source: s,
                  trackingString: G,
                  traySessionID: r,
                },
                text: I,
                warningScreenNode: n,
              },
              e,
              a
            )
          ),
        });
      else if (u === !0)
        return j.jsx("div", {
          ref: t,
          children: j.jsx(c("StoriesTrayTileView.react"), {
            avatar: F,
            isUploading: !0,
            label: J,
            text: I,
            warningScreenNode: n,
          }),
        });
      else return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesBucketsIndexer",
  [
    "CometRelay",
    "Env",
    "StoriesActorContext",
    "StoriesEnums",
    "react",
    "useStoriesBucketsIndexer_buckets.graphql",
    "useStoriesIsBucketEmpty",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useContext,
      j = e.useEffect,
      k = e.useRef;
    function l(a) {
      a = (a = a.unified_stories) == null ? void 0 : a.nodes;
      return a != null
        ? a.some(function (a) {
            return (
              ((a = a.story_card_info) == null ? void 0 : a.story_card_type) ===
              "LIVE_STORY"
            );
          })
        : !1;
    }
    function m(a, b) {
      var c;
      return (
        a.can_viewer_post === !0 &&
        ((c = a.story_bucket_owner) == null ? void 0 : c.id) === b &&
        a.story_bucket_type === "STORY"
      );
    }
    function n(a, b) {
      return m(a, b)
        ? d("StoriesEnums").STORIES_BUCKETS_INDEXER_TYPES.OWNED_SELF
        : d("StoriesEnums").STORIES_BUCKETS_INDEXER_TYPES.OTHER;
    }
    function o(a, b, c) {
      return m(a, c) ? !0 : !b && !l(a);
    }
    function a(a) {
      var e = k(!0),
        f = i(c("StoriesActorContext")),
        g = f.actorID;
      f = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useStoriesBucketsIndexer_buckets.graphql")),
        a
      );
      j(function () {
        e.current = !1;
      });
      var l = c("useStoriesIsBucketEmpty")(f);
      return f != null
        ? f.map(function (a) {
            var b,
              d = l(
                a == null ? void 0 : a.id,
                (e.current ? c("Env").start : Date.now()) / 1e3
              );
            return a != null
              ? {
                  gender:
                    (b =
                      (b = a.story_bucket_owner) == null ? void 0 : b.gender) !=
                    null
                      ? b
                      : "UNKNOWN",
                  isEmpty: d,
                  isSeen: (b = a.is_bucket_seen_by_viewer) != null ? b : !1,
                  shouldShow: o(a, d, g),
                  type: n(a, g),
                }
              : null;
          })
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesBucketsLogger",
  [
    "CometRelay",
    "StoriesActorContext",
    "react",
    "requireDeferred",
    "useStoriesBucketsLogger_buckets.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = c("requireDeferred")("StoriesTrayLogger").__setRef(
        "useStoriesBucketsLogger"
      ),
      l = h !== void 0 ? h : (h = b("useStoriesBucketsLogger_buckets.graphql"));
    function a(a, b) {
      var e = d("CometRelay").useFragment(l, b);
      b = j(c("StoriesActorContext"));
      var f = b.actorID;
      return i(
        function (b, c) {
          k.onReady(function (d) {
            d.logStoryTrayLoad({
              actorID: f,
              buckets: e,
              feedUnitTrackingString: c,
              sessionID: b,
              source: a,
            });
          });
        },
        [f, e, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesTrayRectangularBuckets.react",
  [
    "fbt",
    "CometRelay",
    "CometScreenReaderHeading.react",
    "CometVisualCompletionAttributes",
    "StoriesConstants",
    "StoriesEnums",
    "StoriesGating",
    "StoriesLoggingConstants",
    "StoriesTrayCreateCard.react",
    "StoriesTrayCreateTile.react",
    "StoriesTrayRectangularBuckets_buckets.graphql",
    "StoriesTrayRectangularBuckets_createTileUris.graphql",
    "StoriesTrayRow.react",
    "StoriesTrayTile.react",
    "StoriesTrayTilePlaceholder.react",
    "StoriesTrayTileSelf.react",
    "cr:10516",
    "cr:1638955",
    "cr:2005421",
    "cr:2029256",
    "orEmptyArray",
    "react",
    "requireDeferred",
    "usePrevious",
    "useStoriesBucketsIndexer",
    "useStoriesBucketsLogger",
    "useStoriesIsUploading",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useEffect,
      n = e.useMemo,
      o = e.useRef,
      p = e.useState,
      q = e.useTransition,
      r = c("requireDeferred")("ODS").__setRef(
        "StoriesTrayRectangularBuckets.react"
      );
    function s(a, b) {
      if (b == null) return [];
      b = b.reduce(function (b, d) {
        var e = d.id;
        if (e == null) return b;
        var f = a.find(function (a) {
          return a.id === e;
        });
        if (f == null) return b.concat(e);
        d = c("orEmptyArray")(
          (d = d.unified_stories) == null
            ? void 0
            : (d = d.nodes) == null
            ? void 0
            : d.map(function (a) {
                return a.id;
              })
        );
        f = c("orEmptyArray")(
          (f = f.unified_stories) == null
            ? void 0
            : (f = f.nodes) == null
            ? void 0
            : f.map(function (a) {
                return a.id;
              })
        );
        if (d.length !== f.length) return b.concat(e);
        for (var g = 0; g < f.length; g++)
          if (f[g] !== d[g]) return b.concat(e);
        return b;
      }, []);
      return b;
    }
    function t(a, b, e, f, g, h, i, j) {
      var l = f == null ? void 0 : f.type;
      return l == null
        ? null
        : k.jsx(
            c("StoriesTrayTile.react"),
            {
              bucketCount: d("StoriesConstants").NAV_PANE_TOTAL_COUNT,
              bucketLength: b,
              bucketNode: a,
              gender: f.gender,
              hasSelfBucket: e,
              index: h,
              isFirstVideoBucket: j.current != null && j.current === a.id,
              onPressIn: function () {
                i && i(), u(h);
              },
              source: c("StoriesLoggingConstants").ACTION_SOURCE.TRAY,
              traySessionID: g,
            },
            a.id
          );
    }
    t.displayName = t.name + " [from " + f.id + "]";
    function u(a) {
      r.onReady(function (b) {
        b.bumpEntityKey(
          4329,
          "fb_stories_web",
          "stories_tray.pog_index_" + a,
          1
        );
      });
    }
    var v =
      i !== void 0
        ? i
        : (i = b("StoriesTrayRectangularBuckets_createTileUris.graphql"));
    function a(a) {
      var e = a.createTileRef,
        f = a.edges,
        g = a.hasNext,
        i = a.isLoadingNext,
        r = a.loadNext,
        u = a.refetch,
        w = a.traySessionID,
        x = d("CometRelay").useRelayEnvironment();
      a = q();
      var y = a[0],
        z = a[1],
        A = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("StoriesTrayRectangularBuckets_buckets.graphql")),
          f
        ),
        B = b("cr:2029256")(
          d("StoriesGating").shouldPrefetchNavPaneProfilePictureOnClick()
            ? A
            : null
        ),
        C = d("CometRelay").useFragment(v, e);
      a = p(!1);
      var D = a[0],
        E = a[1];
      f = l(
        function () {
          !D &&
            !y &&
            (E(!0),
            z(function () {
              u(function () {
                E(!1);
              });
            }));
        },
        [y, D, u, z]
      );
      var F = c("useStoriesIsUploading")(f),
        G = d("StoriesGating").shouldUseHScroll(),
        H = n(
          function () {
            var a = A || [],
              b = [];
            for (var c = 0; c < a.length; c++) a[c] != null && b.push(a[c]);
            return b;
          },
          [A]
        ),
        I = c("usePrevious")(H);
      m(
        function () {
          var a = s(H, I);
          a.length !== 0 &&
            a.forEach(function (a) {
              x.commitUpdate(function (b) {
                b = b.get(a);
                b != null && b.invalidateRecord();
              });
            });
        },
        [x, I, H]
      );
      var J = c("useStoriesBucketsIndexer")(H),
        K = n(
          function () {
            return c("orEmptyArray")(J);
          },
          [J]
        ),
        L = c("usePrevious")(w),
        M = b("cr:1638955")(),
        N = c("useStoriesBucketsLogger")(
          c("StoriesLoggingConstants").ACTION_SOURCE.TRAY,
          H
        ),
        O = d("StoriesGating").shouldShowSeeAllStoriesTile()
          ? d("StoriesConstants").MAX_TILES_TO_SHOW - 1
          : d("StoriesGating").shouldShowBigTile() ||
            d("StoriesGating").shouldUse5Tiles()
          ? d("StoriesConstants").MAX_TILES_TO_SHOW_BIG
          : d("StoriesConstants").MAX_TILES_TO_SHOW;
      e = n(
        function () {
          if (!d("StoriesGating").shouldAutoPlayAllStories())
            return { firstStoryToFetchRef: null, startAutoPlayBucketId: null };
          var a = null,
            b = null,
            c = !1;
          for (var e = 0; e < H.length; e++) {
            var f = K[e];
            if (
              (f == null ? void 0 : f.shouldShow) === !0 &&
              !(f == null ? void 0 : f.isEmpty) &&
              (f == null ? void 0 : f.type) !==
                d("StoriesEnums").STORIES_BUCKETS_INDEXER_TYPES.OWNED_SELF
            ) {
              if ((f == null ? void 0 : f.isSeen) === !1)
                return {
                  firstStoryToFetchRef: H[e],
                  startAutoPlayBucketId: H[e].id,
                };
              c || ((a = H[e].id), (b = H[e]), (c = !0));
            }
          }
          return { firstStoryToFetchRef: b, startAutoPlayBucketId: a };
        },
        [K, H]
      );
      a = e.firstStoryToFetchRef;
      var P = e.startAutoPlayBucketId,
        Q = o(null);
      f = n(
        function () {
          return d("StoriesGating").shouldAutoPlayAllStories() && P != null
            ? {
                bucket_id: P,
                source: c("StoriesLoggingConstants").ACTION_SOURCE.TRAY,
                tray_session_id: w,
                view_single: !1,
              }
            : {};
        },
        [P, w]
      );
      var R = (e = K == null ? void 0 : K.length) != null ? e : 0,
        S = !1;
      if (K != null && R > 0) {
        var T;
        e = K[0];
        T = (T = K[0]) == null ? void 0 : T.type;
        e = (e = e == null ? void 0 : e.isEmpty) != null ? e : !0;
        T === d("StoriesEnums").STORIES_BUCKETS_INDEXER_TYPES.OWNED_SELF &&
          !e &&
          (S = !0);
      }
      T = n(
        function () {
          var a = !0,
            b = [];
          for (var e = 0; e < H.length && (b.length < O || G); e++) {
            var f = K[e];
            if ((f == null ? void 0 : f.shouldShow) === !0) {
              var g = f == null ? void 0 : f.type;
              if (
                g === d("StoriesEnums").STORIES_BUCKETS_INDEXER_TYPES.OWNED_SELF
              ) {
                var h;
                g = H[e];
                var i = F || D || y;
                h = (h = f == null ? void 0 : f.isEmpty) != null ? h : !0;
                var j = {
                  entryPoint: "add_to_story_first_pog",
                  sourceSurface: "newsfeed",
                };
                b.push(
                  k.jsx(
                    c("StoriesTrayCreateTile.react"),
                    { fragmentProp: C, passthroughProps: j },
                    e
                  )
                );
                (!h || i) &&
                  (b.push(
                    k.jsx(
                      c("StoriesTrayTileSelf.react"),
                      {
                        bucketCount: d("StoriesConstants").NAV_PANE_TOTAL_COUNT,
                        bucketLength: R,
                        bucketNode: g,
                        hasSelfBucket: S,
                        index: e,
                        isUploading: i,
                        onPressIn: B,
                        optimisticStoryURI: M,
                        traySessionID: w,
                      },
                      g.id
                    )
                  ),
                  (a = !1));
              } else {
                j =
                  (j = H[e]) == null
                    ? void 0
                    : (h = j.first_story_to_show) == null
                    ? void 0
                    : (i = h.story_card_info) == null
                    ? void 0
                    : (g = i.story_video_thumbnail) == null
                    ? void 0
                    : g.id;
                j != null && Q.current == null && (Q.current = H[e].id);
                h = t(H[e], R, S, f, w, e, B, Q);
                h != null &&
                  (b.push(h),
                  (f == null ? void 0 : f.isEmpty) === !1 && (a = !1));
              }
            }
          }
          i = O - b.length;
          for (var g = 0; g < Math.max(0, i); g++)
            b.push(
              k.jsx(
                c("StoriesTrayTilePlaceholder.react"),
                {},
                "placeholder-" + g
              )
            );
          return { placeHoldersCount: i, shouldShowCreateCard: a, tiles: b };
        },
        [R, O, C, Q, y, D, F, S, K, B, M, G, H, w]
      );
      e = T.placeHoldersCount;
      var U = T.shouldShowCreateCard;
      T = T.tiles;
      m(
        function () {
          if (L === w) return;
          N(w);
        },
        [w, N, L]
      );
      var V = h._("Stories");
      if (U)
        if (c("StoriesTrayCreateCard.react") != null)
          return k.jsx(c("StoriesTrayCreateCard.react"), {});
        else return null;
      else if (G && b("cr:2005421") != null)
        return k.jsxs(
          "div",
          babelHelpers["extends"](
            { "aria-label": V, className: "l9j0dhe7 ihqw7lf3" },
            c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
            {
              role: "region",
              children: [
                k.jsx(c("CometScreenReaderHeading.react"), { children: V }),
                k.jsx(b("cr:2005421"), {
                  children: T,
                  hasNext: g,
                  hideArrows: e > 0,
                  isLoadingNext: i,
                  loadNext: r,
                }),
              ],
            }
          )
        );
      return k.jsxs("div", {
        "aria-label": V,
        className: "l9j0dhe7",
        role: "region",
        children: [
          k.jsx(c("CometScreenReaderHeading.react"), { children: V }),
          k.jsx(c("StoriesTrayRow.react"), {
            storyRef: a,
            urlProps: f,
            children: T,
          }),
          d("StoriesGating").shouldShowArrowButton() &&
            b("cr:10516") != null &&
            k.jsx(b("cr:10516"), {}, "see_all_stories_button"),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesTrayRectangular.react",
  [
    "CometRelay",
    "StoriesTrayRectangularBuckets.react",
    "StoriesTrayRectangular_me.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useMemo,
      l = h !== void 0 ? h : (h = b("StoriesTrayRectangular_me.graphql"));
    function a(a) {
      var b = a.me;
      a = a.traySessionID;
      var e = d("CometRelay").usePaginationFragment(l, b),
        f = e.data,
        g = e.hasNext,
        h = e.isLoadingNext,
        m = e.loadNext,
        n = e.refetch,
        o = f;
      e = j(
        function (a) {
          n({}, { fetchPolicy: "store-and-network", onComplete: a });
        },
        [n]
      );
      f = k(
        function () {
          var a;
          return (
            (o == null
              ? void 0
              : (a = o.unified_stories_buckets) == null
              ? void 0
              : a.edges) || []
          )
            .map(function (a) {
              return a == null ? void 0 : a.node;
            })
            .filter(Boolean);
        },
        [
          o == null
            ? void 0
            : (f = o.unified_stories_buckets) == null
            ? void 0
            : f.edges,
        ]
      );
      return i.jsx(c("StoriesTrayRectangularBuckets.react"), {
        createTileRef: b,
        edges: f,
        hasNext: g,
        isLoadingNext: h,
        loadNext: m,
        refetch: e,
        traySessionID: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesTrayRefresh",
  ["CometOnRefresh.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = b.useTransition;
    function a(a) {
      var b = j(!1),
        c = k(),
        e = c[0],
        f = c[1];
      c = h(
        function () {
          if (b.current === !0) return;
          b.current = !0;
          f(function () {
            a();
          });
        },
        [a, f]
      );
      i(
        function () {
          b.current = e;
        },
        [e]
      );
      d("CometOnRefresh.react").useOnRefresh(c);
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesTrayRectangularRoot.react",
  [
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRelay",
    "StoriesActorProvider.react",
    "StoriesConstants",
    "StoriesGating",
    "StoriesGlimmerRectangular.react",
    "StoriesTrayCreateCard.react",
    "StoriesTrayErrorCard.react",
    "StoriesTrayRectangular.react",
    "StoriesTrayRectangularRootQuery$Parameters",
    "StoriesTrayRectangularRootQuery.graphql",
    "WebPixelRatio",
    "react",
    "unrecoverableViolation",
    "useRefetchablePreloadedQuery",
    "useStoriesTrayRefresh",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useState,
      l = h !== void 0 ? h : (h = b("StoriesTrayRectangularRootQuery.graphql"));
    function m(a) {
      a = a.storiesTrayQueryReference;
      var b = k(function () {
        return c("uuid")();
      });
      b = b[0];
      a = c("useRefetchablePreloadedQuery")(
        c("StoriesTrayRectangularRootQuery$Parameters"),
        a
      );
      var e = a[0];
      a = a[1];
      a = d("CometRelay").usePreloadedQuery(l, a);
      var f = d("StoriesGating").getTrayBucketCount(),
        g = j(
          function () {
            e({
              bucketsToFetch: f,
              deferTrayFragment: d("StoriesGating").deferTrayFragment(),
              scale: d("WebPixelRatio").get(),
              shouldEnableLiveInStoriesDropdown:
                d("StoriesGating").shouldEnableLiveInStoriesDropdown(),
              shouldEnableVideoAutoplay: !1,
              shouldPrefetchProfilePic:
                d("StoriesGating").shouldPrefetchNavPaneProfilePictureOnClick(),
            });
          },
          [e, f]
        );
      c("useStoriesTrayRefresh")(g);
      if (!a.me)
        throw c("unrecoverableViolation")(
          "Expected current actor for StoriesRoot to be available",
          "fb_stories_web"
        );
      g = a.me;
      if (d("StoriesGating").deferTrayFragment()) {
        var h;
        h =
          (g == null
            ? void 0
            : (h = g.unified_stories_buckets) == null
            ? void 0
            : h.approximate_active_bucket_count) || 0;
        if (h === 0) return i.jsx(c("StoriesTrayCreateCard.react"), {});
      }
      h =
        (h = a.viewer) == null ? void 0 : (a = h.actor) == null ? void 0 : a.id;
      a =
        d("StoriesGating").shouldShowBigTile() ||
        d("StoriesGating").shouldUse5Tiles()
          ? d("StoriesConstants").MAX_TILES_TO_SHOW_BIG
          : d("StoriesConstants").MAX_TILES_TO_SHOW;
      return i.jsx(c("StoriesActorProvider.react"), {
        actorID: h,
        children: i.jsx(c("CometPlaceholder.react"), {
          fallback: i.jsx(c("StoriesGlimmerRectangular.react"), {
            tilesToShow: a,
          }),
          children: i.jsx(c("StoriesTrayRectangular.react"), {
            me: g,
            traySessionID: b,
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      return i.jsx(c("CometErrorBoundary.react"), {
        fallback: function () {
          return i.jsx(c("StoriesTrayErrorCard.react"), {});
        },
        children: i.jsx(m, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesTraySeeAllStoriesButton.react",
  [
    "fbt",
    "ix",
    "CometTooltip.react",
    "Locale",
    "TetraCircleButton.react",
    "XCometStoriesControllerRouteBuilder",
    "fbicon",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = c("requireDeferred")("ODS").__setRef(
        "StoriesTraySeeAllStoriesButton.react"
      );
    function a() {
      var a = function () {
          k.onReady(function (a) {
            a.bumpEntityKey(
              4329,
              "fb_stories_web",
              "stories_tray_see_all_stories_button_click",
              1
            );
          });
        },
        b = d("Locale").isRTL()
          ? d("fbicon")._(i("512647"), 20)
          : d("fbicon")._(i("514454"), 20),
        e = h._("See All Stories");
      b = {
        color: "secondary",
        icon: b,
        label: e,
        linkProps: {
          traceParams: { navigation_source: "stories_tray_arrow" },
          url: c("XCometStoriesControllerRouteBuilder").buildURL({}),
        },
        size: 48,
        type: "overlay",
      };
      return j.jsx(
        "div",
        {
          className:
            "isi1j7uv qwnj5y1i pmk7jnqg fpf4h9qb gsapk3bl nr3idzxk cur7e4n5 ocebsr1h",
          children: j.jsx(c("CometTooltip.react"), {
            delayMs: 300,
            tooltip: e,
            children: j.jsx(
              c("TetraCircleButton.react"),
              babelHelpers["extends"]({}, b, { onPress: a })
            ),
          }),
        },
        "button"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesTrayTilePrefetchProfileURI",
  ["CometRelay", "useStoriesTrayTilePrefetchProfileURI_profile.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useStoriesTrayTilePrefetchProfileURI_profile.graphql")),
        a
      );
      var c =
        a != null
          ? a.map(function (a) {
              return a == null
                ? void 0
                : (a = a.story_bucket_owner) == null
                ? void 0
                : (a = a.profilePic) == null
                ? void 0
                : a.uri;
            })
          : [];
      return c.length === 0
        ? null
        : function () {
            c.map(function (a) {
              if (a != null) {
                var b = new Image();
                b.src = a;
              }
            });
          };
    }
    g["default"] = a;
  },
  98
);
