if (self.CavalryLogger) {
  CavalryLogger.start_js(["a8Uuj0c"]);
}

__d(
  "GroupsCometInlineComposerRenderer_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "feedType" }],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometInlineComposerRenderer_group",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Variable", name: "feed_type", variableName: "feedType" },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_inline_composer_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometInlineComposerRenderer_group",
                  fragmentName:
                    "GroupsCometDefaultGroupInlineComposerRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupInlineDefaultComposerRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometInlineComposerRenderer_group",
                  fragmentName:
                    "GroupsCometQuestionsInlineComposerRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupInlineQuestionsComposerRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometInlineComposerRenderer_group",
                  fragmentName:
                    "GroupsCometSaleInlineComposerRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupInlineSalesComposerRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometInlineComposerRenderer_group",
                  fragmentName: "CometGroupJobComposerRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupInlineJobsComposerRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometInlineComposerRenderer_group",
                  fragmentName: "CometGroupQAComposerRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupInlineQAComposerRenderer",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometForumMigrationDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4426206560763168",
        metadata: {},
        name: "GroupsCometForumMigrationDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList_group",
      selections: [
        {
          alias: "off_plat_comet_crawlability_gk",
          args: [
            {
              kind: "Literal",
              name: "gk_name",
              value: "groups_off_platform_distribution_comet_crawability",
            },
          ],
          concreteType: "EntGKCheck",
          kind: "LinkedField",
          name: "gk_check",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "passes_gk",
              storageKey: null,
            },
          ],
          storageKey:
            'gk_check(gk_name:"groups_off_platform_distribution_comet_crawability")',
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometFeedHoistedStoriesnPaginationQuery.graphql",
  ["CometFeedUnit_feedUnit$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        h = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        i = { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        j = { defaultValue: null, kind: "LocalArgument", name: "feedType" },
        k = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        m = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "hasHoistStories",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "hoistStories" },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "hoistStoriesCount",
        },
        p = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "hoistedSectionHeaderType",
        },
        q = { defaultValue: null, kind: "LocalArgument", name: "id" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "privacySelectorRenderLocation",
        },
        s = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        u = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        v = [{ kind: "Variable", name: "id", variableName: "id" }],
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        y = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "feed_type", variableName: "feedType" },
          {
            kind: "Variable",
            name: "first",
            variableName: "hoistStoriesCount",
          },
          {
            kind: "Variable",
            name: "hoist_stories",
            variableName: "hoistStories",
          },
          {
            kind: "Variable",
            name: "hoisted_section_header_type",
            variableName: "hoistedSectionHeaderType",
          },
          { kind: "Literal", name: "should_exclude_announcements", value: !0 },
        ],
        z = [x];
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
            u,
          ],
          kind: "Fragment",
          metadata: null,
          name: "GroupsCometFeedHoistedStoriesnPaginationQuery",
          selections: [
            {
              alias: null,
              args: v,
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
                    {
                      kind: "Variable",
                      name: "feedType",
                      variableName: "feedType",
                    },
                    {
                      kind: "Variable",
                      name: "hoistedSectionHeaderType",
                      variableName: "hoistedSectionHeaderType",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "GroupsCometFeedHoistedStories_group",
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
            r,
            s,
            t,
            u,
            q,
          ],
          kind: "Operation",
          name: "GroupsCometFeedHoistedStoriesnPaginationQuery",
          selections: [
            {
              alias: null,
              args: v,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                w,
                x,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      condition: "hasHoistStories",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: "group_hoisted_feed",
                          args: y,
                          concreteType: "GroupFeedConnection",
                          kind: "LinkedField",
                          name: "group_feed",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "GroupFeedEdge",
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
                                    w,
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
                                          kind: "ScalarField",
                                          name: "cache_id",
                                          storageKey: null,
                                        },
                                      ],
                                      type: "Cacheable",
                                      abstractKey: "__isCacheable",
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
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
                                          alias: null,
                                          args: null,
                                          concreteType: "Group",
                                          kind: "LinkedField",
                                          name: "target_group",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "can_viewer_see_sorting_switcher",
                                              storageKey: null,
                                            },
                                            x,
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryHeader",
                                          kind: "LinkedField",
                                          name: "story_header",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "style_infos",
                                              plural: !0,
                                              selections: [
                                                w,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "GroupFeedSortingSwitcher",
                                                      kind: "LinkedField",
                                                      name: "viewer_available_sorting_switchers",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "option_description",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "option_name",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "sorting_setting",
                                                          storageKey: null,
                                                        },
                                                        w,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: "GroupsSectionHeaderStyleInfo",
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "GroupsSectionHeaderUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      args: null,
                                      fragment: b(
                                        "CometFeedUnit_feedUnit$normalization.graphql"
                                      ),
                                      kind: "FragmentSpread",
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: z,
                                      type: "Story",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: z,
                                      type: "Node",
                                      abstractKey: "__isNode",
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: z,
                                      type: "CommunityChatFeedObject",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: z,
                                      type: "CommunityTabNewJoinFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: z,
                                      type: "CommunityTabTrendingPOGFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: z,
                                      type: "XFBGroupsTabSuggestedGroupSetFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: z,
                                      type: "XFBGroupsTabSuggestedGroupSetsFeedUnit",
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
                          alias: "group_hoisted_feed",
                          args: y,
                          filters: [
                            "hoist_stories",
                            "hoisted_section_header_type",
                            "should_exclude_announcements",
                            "feed_type",
                          ],
                          handle: "connection",
                          key: "GroupsCometFeedHoistedStoriesn_group_hoisted_feed",
                          kind: "LinkedHandle",
                          name: "group_feed",
                        },
                      ],
                    },
                  ],
                  type: "Group",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4373242889364021",
          metadata: {},
          name: "GroupsCometFeedHoistedStoriesnPaginationQuery",
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
  "GroupsCometFeedHoistedStories_group.graphql",
  ["GroupsCometFeedHoistedStoriesnPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["group_hoisted_feed"],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "UFI2CommentsProvider_commentsKey" },
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
          { defaultValue: null, kind: "LocalArgument", name: "feedType" },
          { kind: "RootArgument", name: "feedbackSource" },
          { kind: "RootArgument", name: "focusCommentID" },
          { kind: "RootArgument", name: "hasHoistStories" },
          { kind: "RootArgument", name: "hoistStories" },
          { kind: "RootArgument", name: "hoistStoriesCount" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "hoistedSectionHeaderType",
          },
          { kind: "RootArgument", name: "privacySelectorRenderLocation" },
          { kind: "RootArgument", name: "renderLocation" },
          { kind: "RootArgument", name: "scale" },
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            {
              count: "hoistStoriesCount",
              cursor: "cursor",
              direction: "forward",
              path: a,
            },
          ],
          refetch: {
            connection: {
              forward: { count: "hoistStoriesCount", cursor: "cursor" },
              backward: null,
              path: a,
            },
            fragmentPathInResult: ["node"],
            operation: b(
              "GroupsCometFeedHoistedStoriesnPaginationQuery.graphql"
            ),
            identifierField: "id",
          },
        },
        name: "GroupsCometFeedHoistedStories_group",
        selections: [
          {
            condition: "hasHoistStories",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: "group_hoisted_feed",
                args: [
                  {
                    kind: "Variable",
                    name: "feed_type",
                    variableName: "feedType",
                  },
                  {
                    kind: "Variable",
                    name: "hoist_stories",
                    variableName: "hoistStories",
                  },
                  {
                    kind: "Variable",
                    name: "hoisted_section_header_type",
                    variableName: "hoistedSectionHeaderType",
                  },
                  {
                    kind: "Literal",
                    name: "should_exclude_announcements",
                    value: !0,
                  },
                ],
                concreteType: "GroupFeedConnection",
                kind: "LinkedField",
                name: "__GroupsCometFeedHoistedStoriesn_group_hoisted_feed_connection",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "GroupFeedEdge",
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
                            name: "__typename",
                            storageKey: null,
                          },
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "cache_id",
                                storageKey: null,
                              },
                            ],
                            type: "Cacheable",
                            abstractKey: "__isCacheable",
                          },
                          {
                            kind: "InlineFragment",
                            selections: [
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
                                args: null,
                                kind: "FragmentSpread",
                                name: "GroupsCometSectionHeader_groupsSectionHeaderUnit",
                              },
                            ],
                            type: "GroupsSectionHeaderUnit",
                            abstractKey: null,
                          },
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometFeedUnit_feedUnit",
                          },
                          {
                            kind: "InlineFragment",
                            selections: [c],
                            type: "Story",
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
            ],
          },
          c,
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
  "GroupsCometFeedRegularStoriesPaginationQuery.graphql",
  ["CometFeedUnit_feedUnit$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "count" },
        d = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
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
        k = { defaultValue: null, kind: "LocalArgument", name: "feedType" },
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
        n = { defaultValue: null, kind: "LocalArgument", name: "id" },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "privacySelectorRenderLocation",
        },
        p = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        q = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "sortingSetting",
        },
        s = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "stream_initial_count",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        u = [{ kind: "Variable", name: "id", variableName: "id" }],
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
        x = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "feed_type", variableName: "feedType" },
          { kind: "Variable", name: "first", variableName: "count" },
          {
            kind: "Variable",
            name: "set_sorting",
            variableName: "sortingSetting",
          },
          { kind: "Literal", name: "should_exclude_announcements", value: !0 },
        ],
        y = [w];
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
          name: "GroupsCometFeedRegularStoriesPaginationQuery",
          selections: [
            {
              alias: null,
              args: u,
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
                    {
                      kind: "Variable",
                      name: "feedType",
                      variableName: "feedType",
                    },
                    {
                      kind: "Variable",
                      name: "stream_initial_count",
                      variableName: "stream_initial_count",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "GroupsCometFeedRegularStories_paginationGroup",
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
            o,
            p,
            q,
            r,
            s,
            t,
            n,
          ],
          kind: "Operation",
          name: "GroupsCometFeedRegularStoriesPaginationQuery",
          selections: [
            {
              alias: null,
              args: u,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                v,
                w,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: x,
                      concreteType: "GroupFeedConnection",
                      kind: "LinkedField",
                      name: "group_feed",
                      plural: !1,
                      selections: [
                        {
                          if: null,
                          kind: "Stream",
                          label:
                            "GroupsCometFeedRegularStories_paginationGroup$stream$GroupsCometFeedRegularStories_group_group_feed",
                          metadata: null,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "GroupFeedEdge",
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
                                          kind: "ScalarField",
                                          name: "cache_id",
                                          storageKey: null,
                                        },
                                      ],
                                      type: "Cacheable",
                                      abstractKey: "__isCacheable",
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
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
                                          alias: null,
                                          args: null,
                                          concreteType: "Group",
                                          kind: "LinkedField",
                                          name: "target_group",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "can_viewer_see_sorting_switcher",
                                              storageKey: null,
                                            },
                                            w,
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryHeader",
                                          kind: "LinkedField",
                                          name: "story_header",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "style_infos",
                                              plural: !0,
                                              selections: [
                                                v,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "GroupFeedSortingSwitcher",
                                                      kind: "LinkedField",
                                                      name: "viewer_available_sorting_switchers",
                                                      plural: !0,
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "option_description",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "option_name",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "sorting_setting",
                                                          storageKey: null,
                                                        },
                                                        v,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: "GroupsSectionHeaderStyleInfo",
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "GroupsSectionHeaderUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      args: null,
                                      fragment: b(
                                        "CometFeedUnit_feedUnit$normalization.graphql"
                                      ),
                                      kind: "FragmentSpread",
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: y,
                                      type: "Story",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: y,
                                      type: "Node",
                                      abstractKey: "__isNode",
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: y,
                                      type: "CommunityChatFeedObject",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: y,
                                      type: "CommunityTabNewJoinFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: y,
                                      type: "CommunityTabTrendingPOGFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: y,
                                      type: "XFBGroupsTabSuggestedGroupSetFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: y,
                                      type: "XFBGroupsTabSuggestedGroupSetsFeedUnit",
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
                          ],
                          useCustomizedBatch: null,
                        },
                        {
                          if: null,
                          kind: "Defer",
                          label:
                            "GroupsCometFeedRegularStories_paginationGroup$defer$GroupsCometFeedRegularStories_group_group_feed$page_info",
                          selections: [
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
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: x,
                      filters: [
                        "should_exclude_announcements",
                        "feed_type",
                        "set_sorting",
                      ],
                      handle: "connection",
                      key: "GroupsCometFeedRegularStories_group_group_feed",
                      kind: "LinkedHandle",
                      name: "group_feed",
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "group_address",
                      storageKey: null,
                    },
                  ],
                  type: "Group",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4266228670129628",
          metadata: {},
          name: "GroupsCometFeedRegularStoriesPaginationQuery",
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
  "GroupsCometFeedRegularStories_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometFeedRegularStories_group",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList_group",
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometFeedRegularStories_paginationGroup.graphql",
  ["GroupsCometFeedRegularStoriesPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["group_feed"],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "UFI2CommentsProvider_commentsKey" },
          { defaultValue: null, kind: "LocalArgument", name: "count" },
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
          { defaultValue: null, kind: "LocalArgument", name: "feedType" },
          { kind: "RootArgument", name: "feedbackSource" },
          { kind: "RootArgument", name: "focusCommentID" },
          { kind: "RootArgument", name: "privacySelectorRenderLocation" },
          { kind: "RootArgument", name: "renderLocation" },
          { kind: "RootArgument", name: "scale" },
          { kind: "RootArgument", name: "sortingSetting" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "stream_initial_count",
          },
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
            fragmentPathInResult: ["node"],
            operation: b(
              "GroupsCometFeedRegularStoriesPaginationQuery.graphql"
            ),
            identifierField: "id",
          },
        },
        name: "GroupsCometFeedRegularStories_paginationGroup",
        selections: [
          {
            alias: "group_feed",
            args: [
              { kind: "Variable", name: "feed_type", variableName: "feedType" },
              {
                kind: "Variable",
                name: "set_sorting",
                variableName: "sortingSetting",
              },
              {
                kind: "Literal",
                name: "should_exclude_announcements",
                value: !0,
              },
            ],
            concreteType: "GroupFeedConnection",
            kind: "LinkedField",
            name: "__GroupsCometFeedRegularStories_group_group_feed_connection",
            plural: !1,
            selections: [
              {
                kind: "Stream",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "GroupFeedEdge",
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
                            name: "__typename",
                            storageKey: null,
                          },
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "cache_id",
                                storageKey: null,
                              },
                            ],
                            type: "Cacheable",
                            abstractKey: "__isCacheable",
                          },
                          {
                            kind: "InlineFragment",
                            selections: [
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
                                args: null,
                                kind: "FragmentSpread",
                                name: "GroupsCometSectionHeader_groupsSectionHeaderUnit",
                              },
                            ],
                            type: "GroupsSectionHeaderUnit",
                            abstractKey: null,
                          },
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometFeedUnit_feedUnit",
                          },
                          {
                            kind: "InlineFragment",
                            selections: [c],
                            type: "Story",
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
            kind: "ScalarField",
            name: "group_address",
            storageKey: null,
          },
          c,
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
  "GroupsCometFeed_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Variable", name: "feedType", variableName: "feedType" },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          {
            defaultValue: "DISCUSSION",
            kind: "LocalArgument",
            name: "feedType",
          },
          {
            defaultValue: "NOTIFICATIONS",
            kind: "LocalArgument",
            name: "hoistedSectionHeaderType",
          },
          {
            defaultValue: 3,
            kind: "LocalArgument",
            name: "regular_stories_count",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "regular_stories_cursor",
          },
          {
            defaultValue: 2,
            kind: "LocalArgument",
            name: "regular_stories_stream_initial_count",
          },
          { kind: "RootArgument", name: "shouldDeferMainFeed" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "GroupsCometFeed_group",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometQPTopOfMallSection_group",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometFeedInlineMessages_group",
          },
          {
            args: [
              a,
              {
                kind: "Variable",
                name: "hoistedSectionHeaderType",
                variableName: "hoistedSectionHeaderType",
              },
            ],
            kind: "FragmentSpread",
            name: "GroupsCometFeedHoistedStories_group",
          },
          {
            kind: "Defer",
            selections: [
              {
                args: [
                  {
                    kind: "Variable",
                    name: "count",
                    variableName: "regular_stories_count",
                  },
                  {
                    kind: "Variable",
                    name: "cursor",
                    variableName: "regular_stories_cursor",
                  },
                  a,
                  {
                    kind: "Variable",
                    name: "stream_initial_count",
                    variableName: "regular_stories_stream_initial_count",
                  },
                ],
                kind: "FragmentSpread",
                name: "GroupsCometFeedRegularStories_paginationGroup",
              },
            ],
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometFeedRegularStories_group",
          },
          b,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "context_actor_hovercard",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "if_viewer_can_see_streamer_videos",
            plural: !1,
            selections: [
              {
                args: null,
                documentName: "GroupsCometFeed_group",
                fragmentName: "CometGroupLatestVideosRenderer_group",
                fragmentPropName: "group",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "if_viewer_can_see_highlight_units",
            plural: !1,
            selections: [
              {
                args: null,
                documentName: "GroupsCometFeed_group_highlight_units",
                fragmentName: "GroupsCometHighlightsSection_group",
                fragmentPropName: "group",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "if_viewer_can_see_announcements_unit",
            plural: !1,
            selections: [
              {
                args: null,
                documentName: "GroupsCometFeed_group_announcement_unit",
                fragmentName: "GroupsCometFeedAnnouncements_group",
                fragmentPropName: "group",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: "if_viewer_can_see_announcements_unit_for_count",
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "if_viewer_can_see_announcements_unit",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "first", value: 1 },
                  {
                    kind: "Literal",
                    name: "orderby",
                    value: ["is_pinned", "most_recent"],
                  },
                  {
                    kind: "Literal",
                    name: "should_hide_viewed_announcements",
                    value: !0,
                  },
                ],
                concreteType: "GroupAnnouncementStoriesConnection",
                kind: "LinkedField",
                name: "group_announcement_stories",
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
                storageKey:
                  'group_announcement_stories(first:1,orderby:["is_pinned","most_recent"],should_hide_viewed_announcements:true)',
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
                concreteType: "GroupFeedEdge",
                kind: "LinkedField",
                name: "locally_composed_feed_edges",
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
                        name: "__typename",
                        storageKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "cache_id",
                            storageKey: null,
                          },
                        ],
                        type: "Cacheable",
                        abstractKey: "__isCacheable",
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
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
                            args: null,
                            kind: "FragmentSpread",
                            name: "GroupsCometSectionHeader_groupsSectionHeaderUnit",
                          },
                        ],
                        type: "GroupsSectionHeaderUnit",
                        abstractKey: null,
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometFeedUnit_feedUnit",
                      },
                      {
                        kind: "InlineFragment",
                        selections: [b],
                        type: "Story",
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
  "GroupsCometSectionHeader_groupsSectionHeaderUnit.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometSectionHeader_groupsSectionHeaderUnit",
      selections: [
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
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "target_group",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "can_viewer_see_sorting_switcher",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "StoryHeader",
          kind: "LinkedField",
          name: "story_header",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "style_infos",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "GroupsCometFeedSortingSwitcherMenu_groupsSectionHeaderStyleInfo",
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "GroupFeedSortingSwitcher",
                      kind: "LinkedField",
                      name: "viewer_available_sorting_switchers",
                      plural: !0,
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
                  type: "GroupsSectionHeaderStyleInfo",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "GroupsSectionHeaderUnit",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "groupStoriesByHeader_feedUnit.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "groupStoriesByHeader_feedUnit",
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
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cache_id",
              storageKey: null,
            },
          ],
          type: "Cacheable",
          abstractKey: "__isCacheable",
        },
        {
          kind: "InlineFragment",
          selections: [
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
              args: null,
              kind: "FragmentSpread",
              name: "GroupsCometSectionHeader_groupsSectionHeaderUnit",
            },
          ],
          type: "GroupsSectionHeaderUnit",
          abstractKey: null,
        },
        { args: null, kind: "FragmentSpread", name: "CometFeedUnit_feedUnit" },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
          ],
          type: "Story",
          abstractKey: null,
        },
      ],
      type: "FeedUnit",
      abstractKey: "__isFeedUnit",
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometFeedInlineMessage_message.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometFeedInlineMessage_message",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        {
          kind: "ClientExtension",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              action: "THROW",
              path: "id",
            },
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "group_id",
                storageKey: null,
              },
              action: "THROW",
              path: "group_id",
            },
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "message",
                storageKey: null,
              },
              action: "THROW",
              path: "message",
            },
          ],
        },
      ],
      type: "LocalGroupFeedInlineMessage",
      abstractKey: "__isLocalGroupFeedInlineMessage",
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometFeedInlineMessages_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometFeedInlineMessages_group",
      selections: [
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "local_feed_inline_messages",
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
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "GroupsCometFeedInlineMessage_message",
                },
              ],
              storageKey: null,
            },
          ],
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometQPTopOfMallSection_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometQPTopOfMallSection_group",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Literal", name: "first", value: 1 },
            { kind: "Literal", name: "surface_nux_id", value: 7340 },
          ],
          concreteType: "GroupTopLevelEligiblePromotionsConnection",
          kind: "LinkedField",
          name: "top_level_eligible_promotions",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "QuickPromotion",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
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
                            "CometQuickPromotionGroupsTopOfMallRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallRoomsRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallClaimBadgeRendererStrategy",
                            "CometQuickPromotionSocialLearningSyncGroupsTopOfMallRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallIntegrityWarningCardRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallGroupAdminTaggingUpsellRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallGroupAffiliationRendererStrategy",
                            "CometQuickPromotionJobsHiringGroupsHeadsUpRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallJobGroupConfirmationRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallAdminAssistantRendererStrategy",
                            "CometQuickPromotionGroupModerationAlertsCardRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallJobFeaturesConfirmationRendererStrategy",
                            "CometQuickPromotionGroupsForceMigrateTopicsToHashtagsTopOfMallRendererStrategy",
                            "CometQuickPromotionGroupsMigrateTopicsToHashtagsTopOfMallRendererStrategy",
                            "CometQuickPromotionGroupsReputationSystemCommentVotingTopOfMallRendererStrategy",
                            "CometQuickPromotionGroupsShareGroupToPageTopOfMallRendererStrategy",
                            "CometQuickPromotionGroupsWelcomePostTopOfMallRendererStrategy",
                            "CometQuickPromotionCommunityAdditionalProfileCommunityCreateAPostRendererStrategy",
                            "CometQuickPromotionGroupMallAutomaticInviteRendererStrategy",
                            "GroupsCometQuickPromotionLookingForPlayersTopOfMallRendererStrategy",
                            "GroupsCometQuickPromotionExpertSuggestionTopOfMallRendererStrategy",
                            "CometQuickPromotionGroupConversionToForumScheduledCardRendererStrategy",
                            "CometQuickPromotionGroupOptInToForumCardRendererStrategy",
                            "CometQuickPromotionGroupForumParticipationControlCardRendererStrategy",
                            "CometQuickPromotionGroupForumMigrationPreparationPhaseCardRendererStrategy",
                            "CometQuickPromotionCollaborativeFormatsCardRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallRoomsThirdPartyRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallGroupsChatsNUXRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallFaithAskForPrayerRendererStrategy",
                            "GroupsCometQuickPromotionTopOfMallFaithLearnMoreRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationRendererStrategy",
                            "CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationConfirmationRendererStrategy",
                            "CometQuickPromotionFanGroupTopicAsChannelOnboardTopOfMallRendererStrategy",
                            "CometQuickPromotionGroupsLinkShopTopOfMallRendererStrategy",
                            "CometQuickPromotionGroupsAnonymousPostSettingUpsellRendererStrategy",
                            "CometQuickPromotionFBNotesDiscoveryRendererStrategy",
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
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionGroupsTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionTopOfMallRoomsRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallRoomsRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionTopOfMallClaimBadgeRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallClaimBadgeRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionSocialLearningSyncGroupsTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionSocialLearningSyncGroupsTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionTopOfMallIntegrityWarningCardRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallIntegrityWarningCardRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionGroupsTopOfMallGroupAdminTaggingUpsellRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallGroupAdminTaggingUpsellRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionGroupsTopOfMallGroupAffiliationRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallGroupAffiliationRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionJobsHiringGroupsHeadsUpRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionJobsHiringGroupsHeadsUpRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionGroupsTopOfMallJobGroupConfirmationRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallJobGroupConfirmationRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionGroupsTopOfMallAdminAssistantRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallAdminAssistantRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionGroupModerationAlertsCardRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupModerationAlertsCardRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionGroupsTopOfMallJobFeaturesConfirmationRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallJobFeaturesConfirmationRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionForceMigrateTopicsTohashtagsTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsForceMigrateTopicsToHashtagsTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionMigrateTopicsToHashtagsTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsMigrateTopicsToHashtagsTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionReputationSystemCommentVotingTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsReputationSystemCommentVotingTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionShareGroupToPageTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsShareGroupToPageTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionGroupsWelcomePostTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsWelcomePostTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionCommunityAdditionalProfileCommunityCreateAPostRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionCommunityAdditionalProfileCommunityCreateAPostRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionAutomaticInviteTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupMallAutomaticInviteRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionLookingForPlayersTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GroupsCometQuickPromotionLookingForPlayersTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionExpertSuggestionTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GroupsCometQuickPromotionExpertSuggestionTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionGroupConversionToForumScheduledCardRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupConversionToForumScheduledCardRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionGroupOptInToForumCardRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupOptInToForumCardRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionGroupForumParticipationControlCardRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupForumParticipationControlCardRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionGroupForumMigrationPreparationPhaseCardRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupForumMigrationPreparationPhaseCardRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionCollaborativeFormatsCardRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionCollaborativeFormatsCardRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionGroupsTopOfMallRoomsThirdPartyRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallRoomsThirdPartyRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionTopOfMallGroupsChatsNUXRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallGroupsChatsNUXRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionGroupsTopOfMallFaithAskForPrayerRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallFaithAskForPrayerRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionTopOfMallFaithLearnMoreRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GroupsCometQuickPromotionTopOfMallFaithLearnMoreRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CoworkerGroupsCometQuickPromotionTopOfMallWorkGroupsDeprecationRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CoworkerGroupsCometQuickPromotionTopOfMallWorkGroupsDeprecationConfirmationRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationConfirmationRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometTopicAsChannelOnboardTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionFanGroupTopicAsChannelOnboardTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionLinkShopTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsLinkShopTopOfMallRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "GroupsCometQuickPromotionAnonymousPostTopOfMallRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionGroupsAnonymousPostSettingUpsellRendererStrategy",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometQPTopOfMallSection_group",
                              fragmentName:
                                "CometQuickPromotionFBNotesDiscoveryRendererStrategy_quickPromotion",
                              fragmentPropName: "quickPromotion",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CometQuickPromotionFBNotesDiscoveryRendererStrategy",
                          abstractKey: null,
                        },
                      ],
                      storageKey:
                        'renderer_strategy(supported:["CometQuickPromotionGroupsTopOfMallRendererStrategy","CometQuickPromotionGroupsTopOfMallRoomsRendererStrategy","CometQuickPromotionGroupsTopOfMallClaimBadgeRendererStrategy","CometQuickPromotionSocialLearningSyncGroupsTopOfMallRendererStrategy","CometQuickPromotionGroupsTopOfMallIntegrityWarningCardRendererStrategy","CometQuickPromotionGroupsTopOfMallGroupAdminTaggingUpsellRendererStrategy","CometQuickPromotionGroupsTopOfMallGroupAffiliationRendererStrategy","CometQuickPromotionJobsHiringGroupsHeadsUpRendererStrategy","CometQuickPromotionGroupsTopOfMallJobGroupConfirmationRendererStrategy","CometQuickPromotionGroupsTopOfMallAdminAssistantRendererStrategy","CometQuickPromotionGroupModerationAlertsCardRendererStrategy","CometQuickPromotionGroupsTopOfMallJobFeaturesConfirmationRendererStrategy","CometQuickPromotionGroupsForceMigrateTopicsToHashtagsTopOfMallRendererStrategy","CometQuickPromotionGroupsMigrateTopicsToHashtagsTopOfMallRendererStrategy","CometQuickPromotionGroupsReputationSystemCommentVotingTopOfMallRendererStrategy","CometQuickPromotionGroupsShareGroupToPageTopOfMallRendererStrategy","CometQuickPromotionGroupsWelcomePostTopOfMallRendererStrategy","CometQuickPromotionCommunityAdditionalProfileCommunityCreateAPostRendererStrategy","CometQuickPromotionGroupMallAutomaticInviteRendererStrategy","GroupsCometQuickPromotionLookingForPlayersTopOfMallRendererStrategy","GroupsCometQuickPromotionExpertSuggestionTopOfMallRendererStrategy","CometQuickPromotionGroupConversionToForumScheduledCardRendererStrategy","CometQuickPromotionGroupOptInToForumCardRendererStrategy","CometQuickPromotionGroupForumParticipationControlCardRendererStrategy","CometQuickPromotionGroupForumMigrationPreparationPhaseCardRendererStrategy","CometQuickPromotionCollaborativeFormatsCardRendererStrategy","CometQuickPromotionGroupsTopOfMallRoomsThirdPartyRendererStrategy","CometQuickPromotionGroupsTopOfMallGroupsChatsNUXRendererStrategy","CometQuickPromotionGroupsTopOfMallFaithAskForPrayerRendererStrategy","GroupsCometQuickPromotionTopOfMallFaithLearnMoreRendererStrategy","CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationRendererStrategy","CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationConfirmationRendererStrategy","CometQuickPromotionFanGroupTopicAsChannelOnboardTopOfMallRendererStrategy","CometQuickPromotionGroupsLinkShopTopOfMallRendererStrategy","CometQuickPromotionGroupsAnonymousPostSettingUpsellRendererStrategy","CometQuickPromotionFBNotesDiscoveryRendererStrategy"])',
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey:
            "top_level_eligible_promotions(first:1,surface_nux_id:7340)",
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometQPTopOfSideColumnSection_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometQPTopOfSideColumnSection_group",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "QuickPromotion",
          kind: "LinkedField",
          name: "side_column_eligible_promotions",
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
                        "CometQuickPromotionGroupsTopOfMallRendererStrategy",
                        "CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy",
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
                            "GroupsCometQPTopOfSideColumnSection_group",
                          fragmentName:
                            "CometQuickPromotionGroupsTopOfMallRendererStrategy_quickPromotion",
                          fragmentPropName: "quickPromotion",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometQuickPromotionGroupsTopOfMallRendererStrategy",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "GroupsCometQPTopOfSideColumnSection_group",
                          fragmentName:
                            "CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy_quickPromotion",
                          fragmentPropName: "quickPromotion",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy",
                      abstractKey: null,
                    },
                  ],
                  storageKey:
                    'renderer_strategy(supported:["CometQuickPromotionGroupsTopOfMallRendererStrategy","CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy"])',
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useGroupsCometVisitMutation.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "bookmarkID" },
        c = { defaultValue: null, kind: "LocalArgument", name: "input" },
        d = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skipFetchingUnreadCount",
        },
        f = [{ kind: "Variable", name: "data", variableName: "input" }],
        g = [
          {
            items: [
              {
                kind: "Variable",
                name: "bookmark_ids.0",
                variableName: "bookmarkID",
              },
            ],
            kind: "ListValue",
            name: "bookmark_ids",
          },
          { kind: "Literal", name: "environment", value: "COMET" },
          { kind: "Literal", name: "folder_id", value: "FAVORITES" },
          { kind: "Literal", name: "sections", value: ["FACEBOOK_APP"] },
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = [h],
        j = {
          kind: "Literal",
          name: "bookmark_render_location",
          value: "COMET_LEFT_NAV",
        },
        k = [j],
        l = {
          alias: "bookmark_unread_count",
          args: k,
          kind: "ScalarField",
          name: "unread_count",
          storageKey: 'unread_count(bookmark_render_location:"COMET_LEFT_NAV")',
        },
        m = {
          alias: "bookmark_unread_count_string",
          args: k,
          kind: "ScalarField",
          name: "unread_count_string",
          storageKey:
            'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")',
        },
        n = [
          { kind: "Literal", name: "seen_states", value: ["NEW", "UNSEEN"] },
        ],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "stories_count",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "group",
          plural: !1,
          selections: i,
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        r = { kind: "Literal", name: "landing_tab", value: "ENGAGE_MAIN" },
        s = [r, { kind: "Literal", name: "seen_states", value: ["NEW"] }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "badge_id",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "sender_id",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "time",
          storageKey: null,
        },
        w = [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "notifications",
            plural: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "GroupsCometNotificationListItem_tabBadge",
              },
              t,
              u,
              v,
            ],
            storageKey: null,
          },
        ],
        x = [r, { kind: "Literal", name: "seen_states", value: ["SEEN"] }];
      r = [r, { kind: "Literal", name: "seen_states", value: ["UNSEEN"] }];
      var y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        z = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "bookmarked_node",
          plural: !1,
          selections: [y, h],
          storageKey: null,
        },
        A = { kind: "Variable", name: "scale", variableName: "scale" },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        C = [B],
        D = [
          {
            args: null,
            fragment: b(
              "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
            ),
            kind: "FragmentSpread",
          },
        ];
      u = [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "notifications",
          plural: !0,
          selections: [
            y,
            { kind: "TypeDiscriminator", abstractKey: "__isTabBadge" },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "destination_uri",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TabBadgeImageData",
              kind: "LinkedField",
              name: "image_data",
              plural: !1,
              selections: C,
              storageKey: null,
            },
            u,
            v,
            {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "title",
              plural: !1,
              selections: D,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TabBadgeContextData",
              kind: "LinkedField",
              name: "context",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "text",
                  plural: !1,
                  selections: D,
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
              name: "story",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "debug_info",
                  storageKey: null,
                },
                h,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "serialized_frtp_identifiers",
                  storageKey: null,
                },
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
                      args: null,
                      kind: "ScalarField",
                      name: "comment_count",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "reaction_count",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "first", value: 3 },
                        {
                          kind: "Literal",
                          name: "orderby",
                          value: "COUNT_DESC",
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
                              concreteType: "FeedbackReactionInfo",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "height",
                                      value: 16,
                                    },
                                    {
                                      kind: "Literal",
                                      name: "scale",
                                      value: 16,
                                    },
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 16,
                                    },
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "face_image",
                                  plural: !1,
                                  selections: C,
                                  storageKey:
                                    "face_image(height:16,scale:16,width:16)",
                                },
                                h,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: 'top_reactions(first:3,orderby:"COUNT_DESC")',
                    },
                    h,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "post_id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            t,
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e],
          kind: "Fragment",
          metadata: null,
          name: "useGroupsCometVisitMutation",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: "ViewerGroupsTabLogGroupVisitResponsePayload",
              kind: "LinkedField",
              name: "viewer_groups_tab_log_group_visit",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Bookmark",
                  kind: "LinkedField",
                  name: "group_bookmark",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometFolderBookmarkListItem_bookmark",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: "viewer_for_homepage_unread_count",
                  args: null,
                  concreteType: "Viewer",
                  kind: "LinkedField",
                  name: "viewer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: g,
                      concreteType: "BookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "BookmarksEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Bookmark",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "bookmarked_node",
                                  plural: !1,
                                  selections: i,
                                  storageKey: null,
                                },
                                l,
                                m,
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
                  concreteType: "Viewer",
                  kind: "LinkedField",
                  name: "viewer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "GroupsTab",
                      kind: "LinkedField",
                      name: "groups_tab",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: n,
                          concreteType: "GroupsTabBadgeContentConnection",
                          kind: "LinkedField",
                          name: "badge_content",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "GroupsTabBadgeContentEdge",
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
                                      kind: "InlineFragment",
                                      selections: [
                                        o,
                                        p,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "action_link",
                                          plural: !1,
                                          selections: [q],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "GroupWithNewPostsGroupsTabBadgeContent",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey:
                            'badge_content(seen_states:["NEW","UNSEEN"])',
                        },
                        {
                          alias: "newHighlights",
                          args: s,
                          concreteType: "GroupsTabSurfaceHighlights",
                          kind: "LinkedField",
                          name: "highlights",
                          plural: !1,
                          selections: w,
                          storageKey:
                            'highlights(landing_tab:"ENGAGE_MAIN",seen_states:["NEW"])',
                        },
                        {
                          alias: "seenHighlights",
                          args: x,
                          concreteType: "GroupsTabSurfaceHighlights",
                          kind: "LinkedField",
                          name: "highlights",
                          plural: !1,
                          selections: w,
                          storageKey:
                            'highlights(landing_tab:"ENGAGE_MAIN",seen_states:["SEEN"])',
                        },
                        {
                          alias: "unseenHighlights",
                          args: r,
                          concreteType: "GroupsTabSurfaceHighlights",
                          kind: "LinkedField",
                          name: "highlights",
                          plural: !1,
                          selections: w,
                          storageKey:
                            'highlights(landing_tab:"ENGAGE_MAIN",seen_states:["UNSEEN"])',
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
          argumentDefinitions: [c, d, a, e],
          kind: "Operation",
          name: "useGroupsCometVisitMutation",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: "ViewerGroupsTabLogGroupVisitResponsePayload",
              kind: "LinkedField",
              name: "viewer_groups_tab_log_group_visit",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Bookmark",
                  kind: "LinkedField",
                  name: "group_bookmark",
                  plural: !1,
                  selections: [
                    z,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "additonal_profile_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_additonal_profile",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "with_core_app_access",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_news_feed",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "section",
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
                      name: "has_user_hidden",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        j,
                        { kind: "Literal", name: "site", value: "comet" },
                      ],
                      kind: "ScalarField",
                      name: "url",
                      storageKey:
                        'url(bookmark_render_location:"COMET_LEFT_NAV",site:"comet")',
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "tracking",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "icon_size", value: "DP36" },
                        A,
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "bookmark_icon_image",
                      plural: !1,
                      selections: C,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "height", value: 36 },
                        {
                          kind: "Literal",
                          name: "icon_style",
                          value: "CASPIAN",
                        },
                        A,
                        { kind: "Literal", name: "width", value: 36 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: [
                        B,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_silhouette",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      condition: "skipFetchingUnreadCount",
                      kind: "Condition",
                      passingValue: !1,
                      selections: [
                        {
                          alias: null,
                          args: k,
                          kind: "ScalarField",
                          name: "unread_count",
                          storageKey:
                            'unread_count(bookmark_render_location:"COMET_LEFT_NAV")',
                        },
                      ],
                    },
                    {
                      alias: null,
                      args: k,
                      kind: "ScalarField",
                      name: "unread_count_string",
                      storageKey:
                        'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")',
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "context_sentence",
                      plural: !1,
                      selections: D,
                      storageKey: null,
                    },
                    h,
                  ],
                  storageKey: null,
                },
                {
                  alias: "viewer_for_homepage_unread_count",
                  args: null,
                  concreteType: "Viewer",
                  kind: "LinkedField",
                  name: "viewer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: g,
                      concreteType: "BookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "BookmarksEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Bookmark",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [z, l, m, h],
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
                  concreteType: "Viewer",
                  kind: "LinkedField",
                  name: "viewer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "GroupsTab",
                      kind: "LinkedField",
                      name: "groups_tab",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: n,
                          concreteType: "GroupsTabBadgeContentConnection",
                          kind: "LinkedField",
                          name: "badge_content",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "GroupsTabBadgeContentEdge",
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
                                    y,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        o,
                                        p,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "action_link",
                                          plural: !1,
                                          selections: [y, q],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "GroupWithNewPostsGroupsTabBadgeContent",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey:
                            'badge_content(seen_states:["NEW","UNSEEN"])',
                        },
                        {
                          alias: "newHighlights",
                          args: s,
                          concreteType: "GroupsTabSurfaceHighlights",
                          kind: "LinkedField",
                          name: "highlights",
                          plural: !1,
                          selections: u,
                          storageKey:
                            'highlights(landing_tab:"ENGAGE_MAIN",seen_states:["NEW"])',
                        },
                        {
                          alias: "seenHighlights",
                          args: x,
                          concreteType: "GroupsTabSurfaceHighlights",
                          kind: "LinkedField",
                          name: "highlights",
                          plural: !1,
                          selections: u,
                          storageKey:
                            'highlights(landing_tab:"ENGAGE_MAIN",seen_states:["SEEN"])',
                        },
                        {
                          alias: "unseenHighlights",
                          args: r,
                          concreteType: "GroupsTabSurfaceHighlights",
                          kind: "LinkedField",
                          name: "highlights",
                          plural: !1,
                          selections: u,
                          storageKey:
                            'highlights(landing_tab:"ENGAGE_MAIN",seen_states:["UNSEEN"])',
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
          id: "4140029382757430",
          metadata: {},
          name: "useGroupsCometVisitMutation",
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
  "CometGroupDiscussionRootSuccessQuery.graphql",
  ["CometFeedUnit_feedUnit$normalization.graphql", "relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "creative_provider_id",
        },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        h = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        i = { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        j = { defaultValue: null, kind: "LocalArgument", name: "feedType" },
        k = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        m = { defaultValue: null, kind: "LocalArgument", name: "groupID" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "hasHoistStories",
        },
        o = { defaultValue: null, kind: "LocalArgument", name: "hoistStories" },
        p = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "hoistStoriesCount",
        },
        q = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "hoistedSectionHeaderType",
        },
        r = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "prefetchRecentMediaPhotos",
        },
        s = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "privacySelectorRenderLocation",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "regular_stories_count",
        },
        u = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "regular_stories_cursor",
        },
        v = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "regular_stories_stream_initial_count",
        },
        w = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        x = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        y = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "shouldDeferMainFeed",
        },
        z = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "sortingSetting",
        },
        A = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useCometPhotoViewerPlaceholderFrag",
        },
        B = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        C = [{ kind: "Variable", name: "id", variableName: "groupID" }],
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_last_visited_time",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        F = { kind: "Literal", name: "first", value: 1 },
        G = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        H = { kind: "Variable", name: "feed_type", variableName: "feedType" },
        I = [G];
      I = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "node",
        plural: !1,
        selections: [
          E,
          { kind: "TypeDiscriminator", abstractKey: "__isFeedUnit" },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "cache_id",
                storageKey: null,
              },
            ],
            type: "Cacheable",
            abstractKey: "__isCacheable",
          },
          {
            kind: "InlineFragment",
            selections: [
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
                alias: null,
                args: null,
                concreteType: "Group",
                kind: "LinkedField",
                name: "target_group",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "can_viewer_see_sorting_switcher",
                    storageKey: null,
                  },
                  G,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "StoryHeader",
                kind: "LinkedField",
                name: "story_header",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "style_infos",
                    plural: !0,
                    selections: [
                      E,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "GroupFeedSortingSwitcher",
                            kind: "LinkedField",
                            name: "viewer_available_sorting_switchers",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "option_description",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "option_name",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "sorting_setting",
                                storageKey: null,
                              },
                              E,
                            ],
                            storageKey: null,
                          },
                        ],
                        type: "GroupsSectionHeaderStyleInfo",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "GroupsSectionHeaderUnit",
            abstractKey: null,
          },
          {
            args: null,
            fragment: b("CometFeedUnit_feedUnit$normalization.graphql"),
            kind: "FragmentSpread",
          },
          {
            kind: "InlineFragment",
            selections: I,
            type: "Story",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: I,
            type: "Node",
            abstractKey: "__isNode",
          },
          {
            kind: "InlineFragment",
            selections: I,
            type: "CommunityChatFeedObject",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: I,
            type: "CommunityTabNewJoinFeedUnit",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: I,
            type: "CommunityTabTrendingPOGFeedUnit",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: I,
            type: "XFBGroupsTabSuggestedGroupSetFeedUnit",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: I,
            type: "XFBGroupsTabSuggestedGroupSetsFeedUnit",
            abstractKey: null,
          },
        ],
        storageKey: null,
      };
      var J = {
          kind: "Literal",
          name: "should_exclude_announcements",
          value: !0,
        },
        K = [
          H,
          {
            kind: "Variable",
            name: "first",
            variableName: "hoistStoriesCount",
          },
          {
            kind: "Variable",
            name: "hoist_stories",
            variableName: "hoistStories",
          },
          {
            kind: "Variable",
            name: "hoisted_section_header_type",
            variableName: "hoistedSectionHeaderType",
          },
          J,
        ],
        L = {
          alias: null,
          args: null,
          concreteType: "GroupFeedEdge",
          kind: "LinkedField",
          name: "edges",
          plural: !0,
          selections: [
            I,
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
        M = {
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
        };
      J = [
        {
          kind: "Variable",
          name: "after",
          variableName: "regular_stories_cursor",
        },
        H,
        {
          kind: "Variable",
          name: "first",
          variableName: "regular_stories_count",
        },
        {
          kind: "Variable",
          name: "set_sorting",
          variableName: "sortingSetting",
        },
        J,
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
            u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
          ],
          kind: "Fragment",
          metadata: null,
          name: "CometGroupDiscussionRootSuccessQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: C,
                concreteType: "Group",
                kind: "LinkedField",
                name: "group",
                plural: !1,
                selections: [
                  {
                    args: [
                      {
                        kind: "Variable",
                        name: "feedType",
                        variableName: "feedType",
                      },
                      {
                        kind: "Variable",
                        name: "hoistedSectionHeaderType",
                        variableName: "hoistedSectionHeaderType",
                      },
                      {
                        kind: "Variable",
                        name: "regular_stories_count",
                        variableName: "regular_stories_count",
                      },
                      {
                        kind: "Variable",
                        name: "regular_stories_cursor",
                        variableName: "regular_stories_cursor",
                      },
                      {
                        kind: "Variable",
                        name: "regular_stories_stream_initial_count",
                        variableName: "regular_stories_stream_initial_count",
                      },
                    ],
                    kind: "FragmentSpread",
                    name: "GroupsCometFeed_group",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "GroupsCometFeedSecondaryColumn_group",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "GroupsCometFeedNotifSection_group",
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Group",
                    kind: "LinkedField",
                    name: "if_viewer_can_see_pending_forum_post_experience",
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "GroupsCometFeedPendingPostsSection_group",
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "GroupsCometInlineComposerRenderer_group",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "GroupsCometRelatedGroupsChainingSection_group",
                  },
                  D,
                  {
                    alias: null,
                    args: null,
                    concreteType: "Group",
                    kind: "LinkedField",
                    name: "if_viewer_can_see_content",
                    plural: !1,
                    selections: [E],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "group",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [
            c,
            h,
            d,
            e,
            f,
            g,
            i,
            k,
            l,
            j,
            x,
            z,
            B,
            m,
            o,
            p,
            q,
            n,
            r,
            s,
            w,
            a,
            t,
            v,
            u,
            y,
            A,
          ],
          kind: "Operation",
          name: "CometGroupDiscussionRootSuccessQuery",
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Literal",
                  name: "query_name",
                  value: "CometGroupDiscussionRootSuccessQuery",
                },
              ],
              kind: "ScalarField",
              name: "relay_early_flush",
              storageKey:
                'relay_early_flush(query_name:"CometGroupDiscussionRootSuccessQuery")',
            },
            {
              alias: null,
              args: C,
              concreteType: "Group",
              kind: "LinkedField",
              name: "group",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [
                    F,
                    { kind: "Literal", name: "surface_nux_id", value: 7340 },
                  ],
                  concreteType: "GroupTopLevelEligiblePromotionsConnection",
                  kind: "LinkedField",
                  name: "top_level_eligible_promotions",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "QuickPromotion",
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
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
                                    "CometQuickPromotionGroupsTopOfMallRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallRoomsRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallClaimBadgeRendererStrategy",
                                    "CometQuickPromotionSocialLearningSyncGroupsTopOfMallRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallIntegrityWarningCardRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallGroupAdminTaggingUpsellRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallGroupAffiliationRendererStrategy",
                                    "CometQuickPromotionJobsHiringGroupsHeadsUpRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallJobGroupConfirmationRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallAdminAssistantRendererStrategy",
                                    "CometQuickPromotionGroupModerationAlertsCardRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallJobFeaturesConfirmationRendererStrategy",
                                    "CometQuickPromotionGroupsForceMigrateTopicsToHashtagsTopOfMallRendererStrategy",
                                    "CometQuickPromotionGroupsMigrateTopicsToHashtagsTopOfMallRendererStrategy",
                                    "CometQuickPromotionGroupsReputationSystemCommentVotingTopOfMallRendererStrategy",
                                    "CometQuickPromotionGroupsShareGroupToPageTopOfMallRendererStrategy",
                                    "CometQuickPromotionGroupsWelcomePostTopOfMallRendererStrategy",
                                    "CometQuickPromotionCommunityAdditionalProfileCommunityCreateAPostRendererStrategy",
                                    "CometQuickPromotionGroupMallAutomaticInviteRendererStrategy",
                                    "GroupsCometQuickPromotionLookingForPlayersTopOfMallRendererStrategy",
                                    "GroupsCometQuickPromotionExpertSuggestionTopOfMallRendererStrategy",
                                    "CometQuickPromotionGroupConversionToForumScheduledCardRendererStrategy",
                                    "CometQuickPromotionGroupOptInToForumCardRendererStrategy",
                                    "CometQuickPromotionGroupForumParticipationControlCardRendererStrategy",
                                    "CometQuickPromotionGroupForumMigrationPreparationPhaseCardRendererStrategy",
                                    "CometQuickPromotionCollaborativeFormatsCardRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallRoomsThirdPartyRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallGroupsChatsNUXRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallFaithAskForPrayerRendererStrategy",
                                    "GroupsCometQuickPromotionTopOfMallFaithLearnMoreRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationRendererStrategy",
                                    "CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationConfirmationRendererStrategy",
                                    "CometQuickPromotionFanGroupTopicAsChannelOnboardTopOfMallRendererStrategy",
                                    "CometQuickPromotionGroupsLinkShopTopOfMallRendererStrategy",
                                    "CometQuickPromotionGroupsAnonymousPostSettingUpsellRendererStrategy",
                                    "CometQuickPromotionFBNotesDiscoveryRendererStrategy",
                                  ],
                                },
                              ],
                              concreteType: null,
                              kind: "LinkedField",
                              name: "renderer_strategy",
                              plural: !1,
                              selections: [
                                E,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionGroupsTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionTopOfMallRoomsRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallRoomsRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionTopOfMallClaimBadgeRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallClaimBadgeRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionSocialLearningSyncGroupsTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionSocialLearningSyncGroupsTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionTopOfMallIntegrityWarningCardRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallIntegrityWarningCardRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionGroupsTopOfMallGroupAdminTaggingUpsellRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallGroupAdminTaggingUpsellRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionGroupsTopOfMallGroupAffiliationRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallGroupAffiliationRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionJobsHiringGroupsHeadsUpRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionJobsHiringGroupsHeadsUpRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionGroupsTopOfMallJobGroupConfirmationRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallJobGroupConfirmationRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionGroupsTopOfMallAdminAssistantRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallAdminAssistantRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionGroupModerationAlertsCardRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupModerationAlertsCardRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionGroupsTopOfMallJobFeaturesConfirmationRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallJobFeaturesConfirmationRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionForceMigrateTopicsTohashtagsTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsForceMigrateTopicsToHashtagsTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionMigrateTopicsToHashtagsTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsMigrateTopicsToHashtagsTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionReputationSystemCommentVotingTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsReputationSystemCommentVotingTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionShareGroupToPageTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsShareGroupToPageTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionGroupsWelcomePostTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsWelcomePostTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionCommunityAdditionalProfileCommunityCreateAPostRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionCommunityAdditionalProfileCommunityCreateAPostRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionAutomaticInviteTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupMallAutomaticInviteRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionLookingForPlayersTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "GroupsCometQuickPromotionLookingForPlayersTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionExpertSuggestionTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "GroupsCometQuickPromotionExpertSuggestionTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionGroupConversionToForumScheduledCardRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupConversionToForumScheduledCardRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionGroupOptInToForumCardRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupOptInToForumCardRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionGroupForumParticipationControlCardRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupForumParticipationControlCardRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionGroupForumMigrationPreparationPhaseCardRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupForumMigrationPreparationPhaseCardRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionCollaborativeFormatsCardRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionCollaborativeFormatsCardRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionGroupsTopOfMallRoomsThirdPartyRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallRoomsThirdPartyRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionTopOfMallGroupsChatsNUXRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallGroupsChatsNUXRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionGroupsTopOfMallFaithAskForPrayerRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallFaithAskForPrayerRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionTopOfMallFaithLearnMoreRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "GroupsCometQuickPromotionTopOfMallFaithLearnMoreRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CoworkerGroupsCometQuickPromotionTopOfMallWorkGroupsDeprecationRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CoworkerGroupsCometQuickPromotionTopOfMallWorkGroupsDeprecationConfirmationRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationConfirmationRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometTopicAsChannelOnboardTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionFanGroupTopicAsChannelOnboardTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionLinkShopTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsLinkShopTopOfMallRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "GroupsCometQuickPromotionAnonymousPostTopOfMallRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionGroupsAnonymousPostSettingUpsellRendererStrategy",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "GroupsCometQPTopOfMallSection_group",
                                      fragmentName:
                                        "CometQuickPromotionFBNotesDiscoveryRendererStrategy_quickPromotion",
                                      fragmentPropName: "quickPromotion",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "CometQuickPromotionFBNotesDiscoveryRendererStrategy",
                                  abstractKey: null,
                                },
                              ],
                              storageKey:
                                'renderer_strategy(supported:["CometQuickPromotionGroupsTopOfMallRendererStrategy","CometQuickPromotionGroupsTopOfMallRoomsRendererStrategy","CometQuickPromotionGroupsTopOfMallClaimBadgeRendererStrategy","CometQuickPromotionSocialLearningSyncGroupsTopOfMallRendererStrategy","CometQuickPromotionGroupsTopOfMallIntegrityWarningCardRendererStrategy","CometQuickPromotionGroupsTopOfMallGroupAdminTaggingUpsellRendererStrategy","CometQuickPromotionGroupsTopOfMallGroupAffiliationRendererStrategy","CometQuickPromotionJobsHiringGroupsHeadsUpRendererStrategy","CometQuickPromotionGroupsTopOfMallJobGroupConfirmationRendererStrategy","CometQuickPromotionGroupsTopOfMallAdminAssistantRendererStrategy","CometQuickPromotionGroupModerationAlertsCardRendererStrategy","CometQuickPromotionGroupsTopOfMallJobFeaturesConfirmationRendererStrategy","CometQuickPromotionGroupsForceMigrateTopicsToHashtagsTopOfMallRendererStrategy","CometQuickPromotionGroupsMigrateTopicsToHashtagsTopOfMallRendererStrategy","CometQuickPromotionGroupsReputationSystemCommentVotingTopOfMallRendererStrategy","CometQuickPromotionGroupsShareGroupToPageTopOfMallRendererStrategy","CometQuickPromotionGroupsWelcomePostTopOfMallRendererStrategy","CometQuickPromotionCommunityAdditionalProfileCommunityCreateAPostRendererStrategy","CometQuickPromotionGroupMallAutomaticInviteRendererStrategy","GroupsCometQuickPromotionLookingForPlayersTopOfMallRendererStrategy","GroupsCometQuickPromotionExpertSuggestionTopOfMallRendererStrategy","CometQuickPromotionGroupConversionToForumScheduledCardRendererStrategy","CometQuickPromotionGroupOptInToForumCardRendererStrategy","CometQuickPromotionGroupForumParticipationControlCardRendererStrategy","CometQuickPromotionGroupForumMigrationPreparationPhaseCardRendererStrategy","CometQuickPromotionCollaborativeFormatsCardRendererStrategy","CometQuickPromotionGroupsTopOfMallRoomsThirdPartyRendererStrategy","CometQuickPromotionGroupsTopOfMallGroupsChatsNUXRendererStrategy","CometQuickPromotionGroupsTopOfMallFaithAskForPrayerRendererStrategy","GroupsCometQuickPromotionTopOfMallFaithLearnMoreRendererStrategy","CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationRendererStrategy","CometQuickPromotionGroupsTopOfMallWorkGroupsDeprecationConfirmationRendererStrategy","CometQuickPromotionFanGroupTopicAsChannelOnboardTopOfMallRendererStrategy","CometQuickPromotionGroupsLinkShopTopOfMallRendererStrategy","CometQuickPromotionGroupsAnonymousPostSettingUpsellRendererStrategy","CometQuickPromotionFBNotesDiscoveryRendererStrategy"])',
                            },
                          ],
                          storageKey: null,
                        },
                        G,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    "top_level_eligible_promotions(first:1,surface_nux_id:7340)",
                },
                G,
                {
                  alias: "off_plat_comet_crawlability_gk",
                  args: [
                    {
                      kind: "Literal",
                      name: "gk_name",
                      value:
                        "groups_off_platform_distribution_comet_crawability",
                    },
                  ],
                  concreteType: "EntGKCheck",
                  kind: "LinkedField",
                  name: "gk_check",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "passes_gk",
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'gk_check(gk_name:"groups_off_platform_distribution_comet_crawability")',
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "context_actor_hovercard",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "Group",
                  kind: "LinkedField",
                  name: "if_viewer_can_see_streamer_videos",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName: "GroupsCometFeed_group",
                      fragmentName: "CometGroupLatestVideosRenderer_group",
                      fragmentPropName: "group",
                      kind: "ModuleImport",
                    },
                    G,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "Group",
                  kind: "LinkedField",
                  name: "if_viewer_can_see_highlight_units",
                  plural: !1,
                  selections: [
                    G,
                    {
                      args: null,
                      documentName: "GroupsCometFeed_group_highlight_units",
                      fragmentName: "GroupsCometHighlightsSection_group",
                      fragmentPropName: "group",
                      kind: "ModuleImport",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "Group",
                  kind: "LinkedField",
                  name: "if_viewer_can_see_announcements_unit",
                  plural: !1,
                  selections: [
                    G,
                    {
                      args: null,
                      documentName: "GroupsCometFeed_group_announcement_unit",
                      fragmentName: "GroupsCometFeedAnnouncements_group",
                      fragmentPropName: "group",
                      kind: "ModuleImport",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: "if_viewer_can_see_announcements_unit_for_count",
                  args: null,
                  concreteType: "Group",
                  kind: "LinkedField",
                  name: "if_viewer_can_see_announcements_unit",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: [
                        F,
                        {
                          kind: "Literal",
                          name: "orderby",
                          value: ["is_pinned", "most_recent"],
                        },
                        {
                          kind: "Literal",
                          name: "should_hide_viewed_announcements",
                          value: !0,
                        },
                      ],
                      concreteType: "GroupAnnouncementStoriesConnection",
                      kind: "LinkedField",
                      name: "group_announcement_stories",
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
                      storageKey:
                        'group_announcement_stories(first:1,orderby:["is_pinned","most_recent"],should_hide_viewed_announcements:true)',
                    },
                    G,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "QuickPromotion",
                  kind: "LinkedField",
                  name: "side_column_eligible_promotions",
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
                                "CometQuickPromotionGroupsTopOfMallRendererStrategy",
                                "CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "renderer_strategy",
                          plural: !1,
                          selections: [
                            E,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometQPTopOfSideColumnSection_group",
                                  fragmentName:
                                    "CometQuickPromotionGroupsTopOfMallRendererStrategy_quickPromotion",
                                  fragmentPropName: "quickPromotion",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometQuickPromotionGroupsTopOfMallRendererStrategy",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "GroupsCometQPTopOfSideColumnSection_group",
                                  fragmentName:
                                    "CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy_quickPromotion",
                                  fragmentPropName: "quickPromotion",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'renderer_strategy(supported:["CometQuickPromotionGroupsTopOfMallRendererStrategy","CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy"])',
                        },
                      ],
                      storageKey: null,
                    },
                    G,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    {
                      kind: "Literal",
                      name: "supported",
                      value: [
                        "CometGroupDiscussionTabOnboardingCardRenderer",
                        "CometGroupDiscussionTabPublicGroupEducationHubCardRenderer",
                        "CometGroupDiscussionTabAboutCardRenderer",
                        "CometGroupDiscussionTabStreamerSchedulesCardRenderer",
                        "CometGroupDiscussionTabHashtagsCardRenderer",
                        "CometGroupDiscussionTabTopicsCardRenderer",
                        "CometGroupDiscussionTabJoinableVideoChatCardRenderer",
                        "CometGroupDiscussionTabSubFeedsCardRenderer",
                        "CometGroupDiscussionTabChatsCardRenderer",
                        "CometGroupDiscussionTabRecentFilesCardRenderer",
                        "CometGroupDiscussionTabRecentMediaCardRenderer",
                        "CometGroupDiscussionTabUpcomingEventsCardRenderer",
                        "CometGroupDiscussionTabMarketplaceInterlinkingCardRenderer",
                        "CometGroupDiscussionTabMarketplaceCommercePivotCardRenderer",
                        "CometGroupDiscussionTabRankedPhotoGridRenderer",
                      ],
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_discussion_tab_cards",
                  plural: !0,
                  selections: [
                    E,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometOnboardingRHCCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabOnboardingCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometPublicGroupEducationHubRHCCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabPublicGroupEducationHubCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometAboutRHCCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabAboutCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometStreamerSchedulesCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabStreamerSchedulesCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometHashtagsCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabHashtagsCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometTopicsCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabTopicsCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName: "GroupRoomRHCCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabJoinableVideoChatCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometSubgroupsRHCCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabSubFeedsCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometChatsCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabChatsCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometRecentFilesCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabRecentFilesCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometRecentMediaCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabRecentMediaCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometUpcomingEventsCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabUpcomingEventsCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometMarketplaceInterlinkingCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabMarketplaceInterlinkingCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometMarketplacePivotCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabMarketplaceCommercePivotCardRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedSecondaryColumn_group",
                          fragmentName:
                            "GroupsCometRankedPhotoGridCardRenderer_cardRenderer",
                          fragmentPropName: "cardRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupDiscussionTabRankedPhotoGridRenderer",
                      abstractKey: null,
                    },
                  ],
                  storageKey:
                    'comet_discussion_tab_cards(supported:["CometGroupDiscussionTabOnboardingCardRenderer","CometGroupDiscussionTabPublicGroupEducationHubCardRenderer","CometGroupDiscussionTabAboutCardRenderer","CometGroupDiscussionTabStreamerSchedulesCardRenderer","CometGroupDiscussionTabHashtagsCardRenderer","CometGroupDiscussionTabTopicsCardRenderer","CometGroupDiscussionTabJoinableVideoChatCardRenderer","CometGroupDiscussionTabSubFeedsCardRenderer","CometGroupDiscussionTabChatsCardRenderer","CometGroupDiscussionTabRecentFilesCardRenderer","CometGroupDiscussionTabRecentMediaCardRenderer","CometGroupDiscussionTabUpcomingEventsCardRenderer","CometGroupDiscussionTabMarketplaceInterlinkingCardRenderer","CometGroupDiscussionTabMarketplaceCommercePivotCardRenderer","CometGroupDiscussionTabRankedPhotoGridRenderer"])',
                },
                {
                  alias: null,
                  args: [
                    {
                      kind: "Variable",
                      name: "creativeProviderID",
                      variableName: "creative_provider_id",
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_notification_promotion_dialog",
                  plural: !1,
                  selections: [
                    E,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "GroupsCometNotifLandingDialogSampleRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogCommonRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "GroupsCometNotifLandingDialogAdminCanPostBrandedContentRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogAdminCanPostBrandedContentRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "CometGroupNotifLandingDialogPurposeAutoUpdateOptOutRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogPurposeAutoUpdateOptOutRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "CometGroupNotifLandingDialogPurposeAutoUpdateConversionRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogPurposeAutoUpdateConversionRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "CometGroupNotifLandingDialogJobsPurposeOptOutRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogJobsPurposeOptOutRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "CometGroupNotifLandingDialogJobGroupConfirmationRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogJobGroupConfirmationRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "CometGroupNotifLandingDialogForumOptInRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogForumOptInRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "CometGroupNotifLandingDialogRoomsValuePropEduRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogRoomsValuePropEduRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "CometGroupNotifLandingDialogJobsFeatureOptOutRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogJobsFeatureOptOutRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "CometGroupNotifLandingDialogJobsFeatureConfirmationRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogJobsFeatureConfirmationRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "GroupsCometNotifLandingDialogAdminWeeklyAnalyticsContentRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogAdminWeeklyAnalyticsContentRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "GroupsCometNotifLandingDialogFoundingMemberBadgeInfoRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogFoundingMemberBadgeInfoRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "GroupsCometNotifLandingDialogForumMigrationPreparationPhaseRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogForumMigrationPreparationPhaseRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "GroupsCometNotifLandingDialogForumMigrationOnboardingPhaseRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupNotifLandingDialogForumMigrationOnboardingPhaseRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "GroupsCometNotifLandingDialogFaithGroupAdminPrayerSettingRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "GroupsCometNotifLandingDialogFaithGroupAdminPrayerSettingRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "GroupsCometNotifLandingDialogExpertSuggestionRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "GroupsCometNotifLandingDialogExpertSuggestionRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "GroupsCometFeedNotifSection_group",
                          fragmentName:
                            "GroupsCometNotifLandingDialogAdminAddSelfAsExpertRenderer_dialogRenderer",
                          fragmentPropName: "dialogRenderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "GroupsCometNotifLandingDialogAdminAddSelfAsExpertRenderer",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "Group",
                  kind: "LinkedField",
                  name: "if_viewer_can_see_pending_forum_post_experience",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Group",
                      kind: "LinkedField",
                      name: "if_viewer_can_see_pending_forum_post_experience",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "CometGroupForumPendingParticipationPostCardRenderer",
                          kind: "LinkedField",
                          name: "comet_pending_post_cards",
                          plural: !1,
                          selections: [
                            {
                              args: null,
                              documentName:
                                "GroupsCometFeedPendingPostsSection_group",
                              fragmentName:
                                "GroupsCometForumPendingParticipationPostCardRenderer_cardRenderer",
                              fragmentPropName: "cardRenderer",
                              kind: "ModuleImport",
                            },
                          ],
                          storageKey: null,
                        },
                        G,
                      ],
                      storageKey: null,
                    },
                    G,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [H],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_inline_composer_renderer",
                  plural: !1,
                  selections: [
                    E,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "GroupsCometInlineComposerRenderer_group",
                          fragmentName:
                            "GroupsCometDefaultGroupInlineComposerRenderer_renderer",
                          fragmentPropName: "renderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupInlineDefaultComposerRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "GroupsCometInlineComposerRenderer_group",
                          fragmentName:
                            "GroupsCometQuestionsInlineComposerRenderer_renderer",
                          fragmentPropName: "renderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupInlineQuestionsComposerRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "GroupsCometInlineComposerRenderer_group",
                          fragmentName:
                            "GroupsCometSaleInlineComposerRenderer_renderer",
                          fragmentPropName: "renderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupInlineSalesComposerRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "GroupsCometInlineComposerRenderer_group",
                          fragmentName:
                            "CometGroupJobComposerRenderer_renderer",
                          fragmentPropName: "renderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupInlineJobsComposerRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "GroupsCometInlineComposerRenderer_group",
                          fragmentName: "CometGroupQAComposerRenderer_renderer",
                          fragmentPropName: "renderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometGroupInlineQAComposerRenderer",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "CometGroupRelatedGroupsChainingCardRenderer",
                  kind: "LinkedField",
                  name: "comet_related_groups_chaining_card",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        "GroupsCometRelatedGroupsChainingSection_group",
                      fragmentName:
                        "GroupsCometRelatedGroupsChainingCardRenderer_cardRenderer",
                      fragmentPropName: "cardRenderer",
                      kind: "ModuleImport",
                    },
                  ],
                  storageKey: null,
                },
                D,
                {
                  alias: null,
                  args: null,
                  concreteType: "Group",
                  kind: "LinkedField",
                  name: "if_viewer_can_see_content",
                  plural: !1,
                  selections: [E, G],
                  storageKey: null,
                },
                {
                  kind: "ClientExtension",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "local_feed_inline_messages",
                      plural: !0,
                      selections: [
                        G,
                        E,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "group_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "message",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "GroupFeedEdge",
                      kind: "LinkedField",
                      name: "locally_composed_feed_edges",
                      plural: !0,
                      selections: [I],
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "hasHoistStories",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: "group_hoisted_feed",
                      args: K,
                      concreteType: "GroupFeedConnection",
                      kind: "LinkedField",
                      name: "group_feed",
                      plural: !1,
                      selections: [L, M],
                      storageKey: null,
                    },
                    {
                      alias: "group_hoisted_feed",
                      args: K,
                      filters: [
                        "hoist_stories",
                        "hoisted_section_header_type",
                        "should_exclude_announcements",
                        "feed_type",
                      ],
                      handle: "connection",
                      key: "GroupsCometFeedHoistedStoriesn_group_hoisted_feed",
                      kind: "LinkedHandle",
                      name: "group_feed",
                    },
                  ],
                },
                {
                  if: "shouldDeferMainFeed",
                  kind: "Defer",
                  label:
                    "GroupsCometFeed_group$defer$GroupsCometFeedRegularStories_paginationGroup_2oxhXo",
                  selections: [
                    {
                      alias: null,
                      args: J,
                      concreteType: "GroupFeedConnection",
                      kind: "LinkedField",
                      name: "group_feed",
                      plural: !1,
                      selections: [
                        {
                          if: null,
                          kind: "Stream",
                          label:
                            "GroupsCometFeedRegularStories_paginationGroup$stream$GroupsCometFeedRegularStories_group_group_feed",
                          metadata: null,
                          selections: [L],
                          useCustomizedBatch: null,
                        },
                        {
                          if: null,
                          kind: "Defer",
                          label:
                            "GroupsCometFeedRegularStories_paginationGroup$defer$GroupsCometFeedRegularStories_group_group_feed$page_info",
                          selections: [M],
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: J,
                      filters: [
                        "should_exclude_announcements",
                        "feed_type",
                        "set_sorting",
                      ],
                      handle: "connection",
                      key: "GroupsCometFeedRegularStories_group_group_feed",
                      kind: "LinkedHandle",
                      name: "group_feed",
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "group_address",
                      storageKey: null,
                    },
                    G,
                  ],
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3738850639549015",
          metadata: {},
          name: "CometGroupDiscussionRootSuccessQuery",
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
  "GroupsCometFeedPendingPostsSection_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometFeedPendingPostsSection_group",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "if_viewer_can_see_pending_forum_post_experience",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  concreteType:
                    "CometGroupForumPendingParticipationPostCardRenderer",
                  kind: "LinkedField",
                  name: "comet_pending_post_cards",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName: "GroupsCometFeedPendingPostsSection_group",
                      fragmentName:
                        "GroupsCometForumPendingParticipationPostCardRenderer_cardRenderer",
                      fragmentPropName: "cardRenderer",
                      kind: "ModuleImport",
                    },
                  ],
                  storageKey: null,
                },
                action: "THROW",
                path: "if_viewer_can_see_pending_forum_post_experience.comet_pending_post_cards",
              },
            ],
            storageKey: null,
          },
          action: "LOG",
          path: "if_viewer_can_see_pending_forum_post_experience",
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometFeedSecondaryColumn_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometFeedSecondaryColumn_group",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometQPTopOfSideColumnSection_group",
        },
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometGroupDiscussionTabOnboardingCardRenderer",
                "CometGroupDiscussionTabPublicGroupEducationHubCardRenderer",
                "CometGroupDiscussionTabAboutCardRenderer",
                "CometGroupDiscussionTabStreamerSchedulesCardRenderer",
                "CometGroupDiscussionTabHashtagsCardRenderer",
                "CometGroupDiscussionTabTopicsCardRenderer",
                "CometGroupDiscussionTabJoinableVideoChatCardRenderer",
                "CometGroupDiscussionTabSubFeedsCardRenderer",
                "CometGroupDiscussionTabChatsCardRenderer",
                "CometGroupDiscussionTabRecentFilesCardRenderer",
                "CometGroupDiscussionTabRecentMediaCardRenderer",
                "CometGroupDiscussionTabUpcomingEventsCardRenderer",
                "CometGroupDiscussionTabMarketplaceInterlinkingCardRenderer",
                "CometGroupDiscussionTabMarketplaceCommercePivotCardRenderer",
                "CometGroupDiscussionTabRankedPhotoGridRenderer",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_discussion_tab_cards",
          plural: !0,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName:
                    "GroupsCometOnboardingRHCCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabOnboardingCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName:
                    "GroupsCometPublicGroupEducationHubRHCCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabPublicGroupEducationHubCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName: "GroupsCometAboutRHCCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabAboutCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName:
                    "GroupsCometStreamerSchedulesCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabStreamerSchedulesCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName: "GroupsCometHashtagsCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabHashtagsCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName: "GroupsCometTopicsCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabTopicsCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName: "GroupRoomRHCCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabJoinableVideoChatCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName:
                    "GroupsCometSubgroupsRHCCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabSubFeedsCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName: "GroupsCometChatsCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabChatsCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName:
                    "GroupsCometRecentFilesCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabRecentFilesCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName:
                    "GroupsCometRecentMediaCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabRecentMediaCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName:
                    "GroupsCometUpcomingEventsCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabUpcomingEventsCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName:
                    "GroupsCometMarketplaceInterlinkingCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabMarketplaceInterlinkingCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName:
                    "GroupsCometMarketplacePivotCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabMarketplaceCommercePivotCardRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedSecondaryColumn_group",
                  fragmentName:
                    "GroupsCometRankedPhotoGridCardRenderer_cardRenderer",
                  fragmentPropName: "cardRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupDiscussionTabRankedPhotoGridRenderer",
              abstractKey: null,
            },
          ],
          storageKey:
            'comet_discussion_tab_cards(supported:["CometGroupDiscussionTabOnboardingCardRenderer","CometGroupDiscussionTabPublicGroupEducationHubCardRenderer","CometGroupDiscussionTabAboutCardRenderer","CometGroupDiscussionTabStreamerSchedulesCardRenderer","CometGroupDiscussionTabHashtagsCardRenderer","CometGroupDiscussionTabTopicsCardRenderer","CometGroupDiscussionTabJoinableVideoChatCardRenderer","CometGroupDiscussionTabSubFeedsCardRenderer","CometGroupDiscussionTabChatsCardRenderer","CometGroupDiscussionTabRecentFilesCardRenderer","CometGroupDiscussionTabRecentMediaCardRenderer","CometGroupDiscussionTabUpcomingEventsCardRenderer","CometGroupDiscussionTabMarketplaceInterlinkingCardRenderer","CometGroupDiscussionTabMarketplaceCommercePivotCardRenderer","CometGroupDiscussionTabRankedPhotoGridRenderer"])',
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometFeedNotifSection_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "creative_provider_id" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometFeedNotifSection_group",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "creativeProviderID",
              variableName: "creative_provider_id",
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_notification_promotion_dialog",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "GroupsCometNotifLandingDialogSampleRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogCommonRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "GroupsCometNotifLandingDialogAdminCanPostBrandedContentRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogAdminCanPostBrandedContentRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "CometGroupNotifLandingDialogPurposeAutoUpdateOptOutRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogPurposeAutoUpdateOptOutRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "CometGroupNotifLandingDialogPurposeAutoUpdateConversionRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogPurposeAutoUpdateConversionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "CometGroupNotifLandingDialogJobsPurposeOptOutRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogJobsPurposeOptOutRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "CometGroupNotifLandingDialogJobGroupConfirmationRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogJobGroupConfirmationRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "CometGroupNotifLandingDialogForumOptInRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogForumOptInRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "CometGroupNotifLandingDialogRoomsValuePropEduRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogRoomsValuePropEduRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "CometGroupNotifLandingDialogJobsFeatureOptOutRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogJobsFeatureOptOutRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "CometGroupNotifLandingDialogJobsFeatureConfirmationRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogJobsFeatureConfirmationRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "GroupsCometNotifLandingDialogAdminWeeklyAnalyticsContentRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogAdminWeeklyAnalyticsContentRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "GroupsCometNotifLandingDialogFoundingMemberBadgeInfoRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogFoundingMemberBadgeInfoRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "GroupsCometNotifLandingDialogForumMigrationPreparationPhaseRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogForumMigrationPreparationPhaseRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "GroupsCometNotifLandingDialogForumMigrationOnboardingPhaseRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometGroupNotifLandingDialogForumMigrationOnboardingPhaseRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "GroupsCometNotifLandingDialogFaithGroupAdminPrayerSettingRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupsCometNotifLandingDialogFaithGroupAdminPrayerSettingRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "GroupsCometNotifLandingDialogExpertSuggestionRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupsCometNotifLandingDialogExpertSuggestionRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometFeedNotifSection_group",
                  fragmentName:
                    "GroupsCometNotifLandingDialogAdminAddSelfAsExpertRenderer_dialogRenderer",
                  fragmentPropName: "dialogRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupsCometNotifLandingDialogAdminAddSelfAsExpertRenderer",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometInlineComposerRenderer.react",
  ["CometRelay", "GroupsCometInlineComposerRenderer_group.graphql", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var c = a.feedLocation,
        e = a.group$key,
        f = a.onComposerOpen,
        g = a.onSave;
      a = a.renderLocation;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("GroupsCometInlineComposerRenderer_group.graphql")),
        e
      );
      e = e.comet_inline_composer_renderer;
      return i.jsx(d("CometRelay").MatchContainer, {
        match: e,
        props: {
          feedLocation: c,
          onComposerOpen: f,
          onSave: g,
          renderLocation: a,
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometForumMigrationDialog.entrypoint",
  [
    "GroupsCometForumMigrationDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = a.groupID,
          e = a.isOnboardingPhase;
        a = a.source;
        return {
          extraProps: { source: a },
          queries: {
            dialogQuery: {
              parameters: c("GroupsCometForumMigrationDialogQuery$Parameters"),
              variables: {
                groupID: b,
                isOnboardingPhase: e,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "GroupsCometForumMigrationDialog.react"
      ).__setRef("GroupsCometForumMigrationDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometFeedSection.react",
  ["react", "useCometScrollAnchor"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.header,
        c = a.scrollAnchorID;
      c = c === void 0 ? null : c;
      var e = a.sectionContents;
      a = a.testid;
      a = a === void 0 ? "CometFeedSection" : a;
      a = d("useCometScrollAnchor").useCometScrollAnchor("feed-section", c);
      return h.jsxs("div", {
        "data-testid": void 0,
        ref: a,
        role: "feed",
        children: [
          h.jsx("div", {
            className: "dati1w0a f10w8fjw ocgrx2df tmqn73lw",
            children: b,
          }),
          e,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometSectionHeader.react",
  [
    "fbt",
    "ix",
    "CometLazyPopoverTrigger.react",
    "CometRelay",
    "CometUnitHeader.react",
    "GroupsCometSectionHeader_groupsSectionHeaderUnit.graphql",
    "JSResourceForInteraction",
    "fbicon",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useState,
      m = c("JSResourceForInteraction")(
        "GroupsCometFeedSortingSwitcherMenu.react"
      ).__setRef("GroupsCometSectionHeader.react"),
      n =
        j !== void 0
          ? j
          : (j = b("GroupsCometSectionHeader_groupsSectionHeaderUnit.graphql"));
    function a(a) {
      var b,
        e = a.groupsSectionHeaderUnit$key,
        f = a.onChangeGroupFeedSortingSetting;
      a = d("CometRelay").useFragment(n, e);
      e = l(a == null ? void 0 : (e = a.title) == null ? void 0 : e.text);
      var g = e[0],
        j = e[1],
        o =
          g === (a == null ? void 0 : (e = a.title) == null ? void 0 : e.text);
      if (g == null)
        return c("recoverableViolation")(
          "group feed section header is null",
          "groups_comet"
        );
      e =
        a == null
          ? void 0
          : (e = a.story_header) == null
          ? void 0
          : (e = e.style_infos[0]) == null
          ? void 0
          : e.viewer_available_sorting_switchers;
      if (
        (a == null
          ? void 0
          : (b = a.target_group) == null
          ? void 0
          : b.can_viewer_see_sorting_switcher) === !0 &&
        e != null &&
        e.length > 0 &&
        f != null
      ) {
        b = function (a, b) {
          j(a), f(b);
        };
        return k.jsx("div", {
          className: "j83agx80",
          children: k.jsx(c("CometLazyPopoverTrigger.react"), {
            popoverProps: {
              groupsSectionHeaderStyleInfo$key:
                a == null
                  ? void 0
                  : (e = a.story_header) == null
                  ? void 0
                  : e.style_infos[0],
              onChangeGroupFeedSortingSetting: b,
              selectedHeader: g,
            },
            popoverResource: m,
            children: function (a, b) {
              return k.jsx(c("CometUnitHeader.react"), {
                action: d("fbicon")._(i("481882"), 16),
                actionAccessibilityLabel: h._("sort group feed by"),
                actionRef: a,
                disabled: !o,
                headline: g,
                headlineColor: "secondary",
                iconColor: "secondary",
                level: 4,
                onPress: b,
                testid: void 0,
              });
            },
          }),
        });
      }
      return k.jsx(c("CometUnitHeader.react"), {
        headline: g,
        headlineColor: "secondary",
        level: 4,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "groupStoriesByHeader",
  ["groupStoriesByHeader_feedUnit.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h !== void 0 ? h : (h = b("groupStoriesByHeader_feedUnit.graphql"));
    function a(a, b) {
      var c = null,
        d = void 0,
        e = [];
      a.forEach(function (a) {
        if (a == null || a.cache_id == null) return;
        if (a.__typename === "GroupsSectionHeaderUnit" && c == null) {
          var f;
          c = (f = a.title) == null ? void 0 : f.text;
          d = a;
        }
        a.__typename === "Story" &&
          a.id != null &&
          (b == null || b(a)) &&
          e.push(a);
        a.__typename === "QuickPromotionNativeTemplateFeedUnit" &&
          (b == null || b(a)) &&
          e.push(a);
      });
      return { groupsSectionHeaderUnit$key: d, header: c, stories: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "getHoistedStoriesByHeader",
  ["groupStoriesByHeader"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (a.length === 0 || b.size === 0) return new Map();
      a = c("groupStoriesByHeader")(a, function (a) {
        return a == null || a.id == null ? !1 : b.has(a.id);
      });
      var d = a.groupsSectionHeaderUnit$key,
        e = a.header;
      a = a.stories;
      return new Map([[e, { groupsSectionHeaderUnit$key: d, stories: a }]]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "mapMap",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = new Map();
      a.forEach(function (a, d) {
        c.set(d, b(a, d));
      });
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "getRenderedStoriesByHeader",
  [
    "CometFeedStoryGlimmer.react",
    "CometFeedUnit.react",
    "CometPlaceholder.react",
    "mapMap",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.currentPosition,
        d = a.feedUnitVariables,
        e = a.shouldWrapPlaceholder,
        f = e === void 0 ? !0 : e;
      e = a.storiesByHeader;
      var g = b;
      a = c("mapMap")(e, function (a) {
        var b = a.stories
          .map(function (a) {
            var b, e;
            if (a == null) {
              c("recoverableViolation")(
                "Unexpected null node in feed section",
                "groups_comet"
              );
              return null;
            }
            if (a.cache_id == null) {
              c("recoverableViolation")(
                "Unexpected null node identifier in feed section",
                "groups_comet"
              );
              return null;
            }
            a = f
              ? h.jsx(
                  c("CometPlaceholder.react"),
                  {
                    fallback: h.jsx(c("CometFeedStoryGlimmer.react"), {}),
                    children: h.jsx(c("CometFeedUnit.react"), {
                      "data-testid": void 0,
                      feedUnit: a,
                      position: g,
                      variables: d,
                    }),
                  },
                  a.cache_id
                )
              : h.jsx(
                  c("CometFeedUnit.react"),
                  {
                    "data-testid": void 0,
                    feedUnit: a,
                    position: g,
                    variables: d,
                  },
                  a.cache_id
                );
            g++;
            return a;
          })
          .filter(Boolean);
        return {
          groupsSectionHeaderUnit$key: a.groupsSectionHeaderUnit$key,
          stories: b,
        };
      });
      return { nextPosition: g, renderedStoriesByHeader: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometFeedHoistedStories.react",
  [
    "CometRelay",
    "CometSuspenseList.react",
    "GroupsCometFeedHoistedStories_group.graphql",
    "GroupsCometFeedSection.react",
    "GroupsCometSectionHeader.react",
    "getHoistedStoriesByHeader",
    "getRenderedStoriesByHeader",
    "mapMapToArray",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo,
      k =
        h !== void 0
          ? h
          : (h = b("GroupsCometFeedHoistedStories_group.graphql"));
    function a(a) {
      var b = a.feedStartPosition,
        e = a.group$key,
        f = a.hoistStoriesIDSet,
        g = a.variables;
      a = d("CometRelay").usePaginationFragment(k, e);
      e = a.data;
      a = j(
        function () {
          g.feedType;
          g.groupID;
          var a = babelHelpers.objectWithoutPropertiesLoose(g, [
            "feedType",
            "groupID",
          ]);
          return a;
        },
        [g]
      );
      e = e.group_hoisted_feed
        ? (e = e.group_hoisted_feed) == null
          ? void 0
          : e.edges.map(function (a) {
              return a == null ? void 0 : a.node;
            })
        : [];
      e = c("getHoistedStoriesByHeader")(e, f);
      f = c("getRenderedStoriesByHeader")({
        currentPosition: b,
        feedUnitVariables: a,
        storiesByHeader: e,
      });
      b = f.renderedStoriesByHeader;
      a = c("mapMapToArray")(b, function (a, b) {
        var d = a.groupsSectionHeaderUnit$key;
        a = a.stories;
        return i.jsx(
          c("GroupsCometFeedSection.react"),
          {
            header: i.jsx(c("GroupsCometSectionHeader.react"), {
              groupsSectionHeaderUnit$key: d,
            }),
            scrollAnchorID: "notifications",
            sectionContents: i.jsx(
              c("CometSuspenseList.react"),
              { revealOrder: "forwards", children: a },
              "group_hoisted_stories"
            ),
            testid: void 0,
          },
          b
        );
      }).filter(Boolean);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometFeedInlineMessage.react",
  [
    "fbt",
    "ix",
    "CometCard.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "GroupsCometFeedInlineMessage_message.graphql",
    "TetraButton.react",
    "TetraIcon.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "addLocalGroupFeedInlineMessage",
    "fbicon",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a(a) {
      a = a.message$key;
      var e = d("CometRelay").useRelayEnvironment();
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("GroupsCometFeedInlineMessage_message.graphql")),
        a
      );
      var f = a.__typename,
        g = a.group_id,
        l = a.id;
      a = a.message;
      var m, n;
      switch (f) {
        case "LocalGroupFeedVideoInlineMessage":
          m = h._("Processing Video");
          n = d("fbicon")._(i("507228"), 20);
          break;
        default:
          throw c("unrecoverableViolation")(
            'Group Feed Inline Message: unhandled local inline message type "' +
              f +
              '"',
            "groups_comet"
          );
      }
      return k.jsx("div", {
        className: "sjgh65i0",
        children: k.jsx(c("CometCard.react"), {
          background: "white",
          border: "none",
          dropShadow: 1,
          children: k.jsxs(c("CometRow.react"), {
            paddingVertical: 16,
            verticalAlign: "center",
            children: [
              k.jsx(c("CometRowItem.react"), {
                children: k.jsx("div", {
                  className:
                    "thwo4zme taijpn5t tv7at329 j83agx80 spb7xbtv bkmhp75w emlxlaya s45kfl79 tdjehn4e bp9cbjyn",
                  children: k.jsx(c("TetraIcon.react"), {
                    color: "primary",
                    icon: n,
                  }),
                }),
              }),
              k.jsx(c("CometRowItem.react"), {
                expanding: !0,
                children: k.jsxs(c("CometRow.react"), {
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                  verticalAlign: "center",
                  children: [
                    k.jsx(c("CometRowItem.react"), {
                      expanding: !0,
                      children: k.jsx(c("TetraTextPairing.react"), {
                        body: k.jsx(c("TetraText.react"), {
                          type: "bodyLink3",
                          children: m,
                        }),
                        level: 3,
                        meta: a,
                      }),
                    }),
                    k.jsx(c("CometRowItem.react"), {
                      children: k.jsx(c("TetraButton.react"), {
                        label: h._("Dismiss"),
                        onPress: function () {
                          return d(
                            "addLocalGroupFeedInlineMessage"
                          ).removeLocalFeedMessage(e, g, l);
                        },
                        type: "secondary",
                      }),
                    }),
                  ],
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
  "GroupsCometFeedInlineMessages.react",
  [
    "CometErrorBoundary.react",
    "CometRelay",
    "GroupsCometFeedInlineMessage.react",
    "GroupsCometFeedInlineMessages_group.graphql",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.group$key;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("GroupsCometFeedInlineMessages_group.graphql")),
        a
      );
      a = a.local_feed_inline_messages;
      return a == null || a.length === 0
        ? null
        : i.jsx("div", {
            className: "sjgh65i0",
            children: a.map(function (a) {
              return i.jsx(
                c("CometErrorBoundary.react"),
                {
                  onError: function (a) {
                    c("recoverableViolation")(
                      "Group Feed Inline Messages: failed to render inline message",
                      "groups_comet",
                      { error: a }
                    );
                  },
                  children: i.jsx(c("GroupsCometFeedInlineMessage.react"), {
                    message$key: a,
                  }),
                },
                a.id
              );
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupFeedRankingSetting",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CHRONOLOGICAL: "CHRONOLOGICAL",
      RECENT_ACTIVITY: "RECENT_ACTIVITY",
      TOP_POSTS: "TOP_POSTS",
      MOST_POPULAR: "MOST_POPULAR",
      TOP_LISTINGS: "TOP_LISTINGS",
      RECENT_LISTING_ACTIVITY: "RECENT_LISTING_ACTIVITY",
      NEARBY_LISTINGS: "NEARBY_LISTINGS",
    });
    f["default"] = a;
  },
  66
);
__d(
  "GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList.react",
  [
    "CometFeedInfiniteScrollSuspenseList.react",
    "CometRelay",
    "GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList_group.graphql",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo;
    function a(a) {
      var e = a.group$key,
        f = babelHelpers.objectWithoutPropertiesLoose(a, ["group$key"]);
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList_group.graphql"
            )),
        e
      );
      var g =
        (a =
          a == null
            ? void 0
            : (e = a.off_plat_comet_crawlability_gk) == null
            ? void 0
            : e.passes_gk) != null
          ? a
          : !1;
      e = j(
        function () {
          return !c("gkx")("1779508") || !g
            ? f
            : babelHelpers["extends"]({}, f, {
                incrementalRendering: !1,
                waitOnScrollIntent: !1,
              });
        },
        [g, f]
      );
      return i.jsx(
        c("CometFeedInfiniteScrollSuspenseList.react"),
        babelHelpers["extends"]({}, e)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "deduplicateStories",
  ["filterMap", "mapMap"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d = b ? new Set(b) : new Set();
      b = c("mapMap")(a, function (a) {
        var b = a.stories.filter(function (a) {
          if (a == null) return !1;
          if (a.id != null) {
            a = a.id;
            if (d.has(a)) return !1;
            d.add(a);
          }
          return !0;
        });
        return babelHelpers["extends"]({}, a, { stories: b });
      });
      return c("filterMap")(b, function (a) {
        return a.stories.length > 0;
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "getRegularStoriesByHeader",
  ["groupStoriesByHeader"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (a.length === 0) return new Map();
      a = c("groupStoriesByHeader")(a);
      var b = a.groupsSectionHeaderUnit$key,
        d = a.header;
      a = a.stories;
      return new Map([[d, { groupsSectionHeaderUnit$key: b, stories: a }]]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometFeedRegularStories.react",
  [
    "CometEndOfFeedLoader.react",
    "CometFeedStoryGlimmer.react",
    "CometRelay",
    "CrisisCometLogging",
    "GroupFeedRankingSetting",
    "GroupsCometEndOfFeed.entrypoint",
    "GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList.react",
    "GroupsCometFeedRegularStories_group.graphql",
    "GroupsCometFeedRegularStories_paginationGroup.graphql",
    "GroupsCometFeedSection.react",
    "GroupsCometSectionHeader.react",
    "XCometGroupDiscussionControllerRouteBuilder",
    "deduplicateStories",
    "getJSEnumSafe",
    "getRegularStoriesByHeader",
    "getRenderedStoriesByHeader",
    "gkx",
    "mapMapToArray",
    "react",
    "recoverableViolation",
    "unrecoverableViolation",
    "useCometFeedKeyCommands",
    "useCometRouterDispatcher",
    "useGroupsCometCleanUpLocallyComposedPost",
    "useGroupsCometCleanupLocalFeedInlineMessages",
    "useIsCometOnMobile.hybrid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useMemo,
      m =
        h !== void 0
          ? h
          : (h = b("GroupsCometFeedRegularStories_paginationGroup.graphql")),
      n = new Set(["BUY_AND_SELL", "SUBGROUP"]),
      o = 3,
      p = [2, 2, 2, 2, 4],
      q = [0, 1, 2, 2, 4];
    function a(a) {
      var e = a.feedStartPosition,
        f = a.group$key,
        g = a.hoistStoriesIDSet,
        h = a.paginationGroup$key,
        r = a.variables;
      a = d("CometRelay").usePaginationFragment(m, h);
      var s = a.data,
        t = a.hasNext,
        u = a.isLoadingNext,
        v = a.loadNext,
        w = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("GroupsCometFeedRegularStories_group.graphql")),
          f
        );
      h = d("CometRelay").useIsParentQueryActive(m, f);
      a = c("useIsCometOnMobile.hybrid")();
      var x = a || c("gkx")("1921416"),
        y = u || h,
        z = t || h,
        A = k(
          function () {
            if (!t || u) return;
            v(o);
          },
          [t, u, v]
        );
      f = l(
        function () {
          var a = r.feedType,
            b = r.groupID,
            c = babelHelpers.objectWithoutPropertiesLoose(r, [
              "feedType",
              "groupID",
            ]);
          return { feedType: a, feedUnitVariables: c, groupID: b };
        },
        [r]
      );
      a = f.feedType;
      h = f.feedUnitVariables;
      var B = f.groupID,
        C = c("useCometRouterDispatcher")(),
        D = c("useGroupsCometCleanUpLocallyComposedPost")(),
        E = c("useGroupsCometCleanupLocalFeedInlineMessages")(),
        F = k(
          function (a) {
            var b = s == null ? void 0 : s.group_address;
            b = b != null && b !== "" ? b : B;
            a = c("getJSEnumSafe")(c("GroupFeedRankingSetting"), a);
            if (a == null) return;
            b = c("XCometGroupDiscussionControllerRouteBuilder").buildURL({
              idorvanity: b,
              sorting_setting: a,
            });
            C != null && (C.go(b, {}), D(B), E(B));
          },
          [D, E, C, s, B]
        );
      f = s.group_feed
        ? (f = s.group_feed) == null
          ? void 0
          : f.edges.map(function (a) {
              return a == null ? void 0 : a.node;
            })
        : [];
      var G = c("getRegularStoriesByHeader")(f);
      G = c("deduplicateStories")(new Map([].concat(Array.from(G))), g);
      if (e === 0 && G.size === 0 && !n.has(a))
        if (z)
          c("recoverableViolation")(
            "No stories available to render in mall feed for group " +
              B +
              " (feedType=" +
              a +
              ")",
            "groups_comet"
          );
        else
          throw c("unrecoverableViolation")(
            "No stories available to render in mall feed for group " +
              B +
              " (feedType=" +
              a +
              ")",
            "groups_comet"
          );
      a = c("getRenderedStoriesByHeader")({
        currentPosition: e,
        feedUnitVariables: h,
        shouldWrapPlaceholder: !1,
        storiesByHeader: G,
      });
      h = a.renderedStoriesByHeader;
      c("useCometFeedKeyCommands")(f.length, null, 60);
      G = c("mapMapToArray")(h, function (a, b) {
        var d = a.groupsSectionHeaderUnit$key;
        a = a.stories;
        return j.jsx(
          c("GroupsCometFeedSection.react"),
          {
            header: j.jsx(c("GroupsCometSectionHeader.react"), {
              groupsSectionHeaderUnit$key: d,
              onChangeGroupFeedSortingSetting: F,
            }),
            sectionContents: j.jsxs(j.Fragment, {
              children: [
                j.jsx(
                  c(
                    "GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList.react"
                  ),
                  {
                    group$key: w,
                    hasMore: z,
                    incrementalRenderingPageSizes: x
                      ? p
                      : g.size > 0 || e > 0
                      ? q
                      : void 0,
                    interactionSource: 4,
                    isLoading: y,
                    onLoadMore: A,
                    waitOnScrollIntent: !0,
                    children: a,
                  }
                ),
                z === !1 && y === !1
                  ? j.jsx(c("CometEndOfFeedLoader.react"), {
                      entryPoint: c("GroupsCometEndOfFeed.entrypoint"),
                      entryPointParams: { id: B },
                      entryPointProps: {},
                      glimmer: j.jsx(c("CometFeedStoryGlimmer.react"), {}),
                    })
                  : null,
              ],
            }),
            testid: void 0,
          },
          b
        );
      }).filter(Boolean);
      return G;
    }
    f = d("CrisisCometLogging").withCrisisLoggingProvider(a, function () {
      return { page_type_name: "group_mall" };
    });
    g["default"] = f;
  },
  98
);
__d(
  "GroupsCometQPTopOfMallSection.react",
  [
    "CometCard.react",
    "CometQuickPromotionLoggerContext.react",
    "CometRelay",
    "GroupsCometQPTopOfMallSection_group.graphql",
    "react",
    "useQuickPromotionFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = { section: "quick_promotion" };
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("GroupsCometQPTopOfMallSection_group.graphql")),
        a.group
      );
      a =
        a == null
          ? void 0
          : (a = a.top_level_eligible_promotions) == null
          ? void 0
          : (a = a.nodes[0]) == null
          ? void 0
          : (a = a.comet_qp_sections) == null
          ? void 0
          : a.renderer_strategy;
      var e = c("useQuickPromotionFalcoEvent")({
        context_surface_id: 7923,
        context_trigger: "group_top_of_mall_view",
      });
      return a == null
        ? null
        : i.jsx("div", {
            className: "sjgh65i0",
            children: i.jsx(
              c("CometQuickPromotionLoggerContext.react").Provider,
              {
                value: e,
                children: i.jsx(c("CometCard.react"), {
                  background: "white",
                  dropShadow: 1,
                  children: i.jsx(d("CometRelay").MatchContainer, {
                    match: a,
                    props: j,
                  }),
                }),
              }
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupsMallUserViewedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1835973");
    c = b("FalcoLoggerInternal").create("groups_mall_user_viewed", a);
    e.exports = c;
  },
  null
);
__d(
  "GroupsCometFeed.react",
  [
    "Actor",
    "ActorHovercardContext",
    "CometErrorBoundary.react",
    "CometFeedHighlightedStoriesContext",
    "CometHovercardGroupContext",
    "CometPlaceholder.react",
    "CometRelay",
    "CometScrollAnchorContext",
    "CometSuspenseList.react",
    "GroupsCometFeedHoistedStories.react",
    "GroupsCometFeedInlineMessages.react",
    "GroupsCometFeedRegularStories.react",
    "GroupsCometFeedRegularStoriesGlimmer.react",
    "GroupsCometFeed_group.graphql",
    "GroupsCometQPTopOfMallSection.react",
    "GroupsMallUserViewedFalcoEvent",
    "VideoAutoplayLocalScopeProvider.react",
    "VideoPlayerAutoplayRulesProvider",
    "getRenderedStoriesByHeader",
    "gkx",
    "mapMapToArray",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect,
      l = e.useMemo,
      m = { key: "feed-section", value: "notifications" },
      n = h !== void 0 ? h : (h = b("GroupsCometFeed_group.graphql"));
    function a(a) {
      var b,
        e,
        f,
        g = a.groupKey,
        h = a.variables,
        o = d("CometRelay").useFragment(n, g),
        p = h.feedType,
        q = h.groupID,
        r = h.hoistStories;
      a = d("Actor").useActor();
      var s = a[0];
      k(
        function () {
          c("gkx")("126") &&
            c("GroupsMallUserViewedFalcoEvent").log(function () {
              return { group_id_or_vanity: q, user_id: s };
            });
        },
        [q, s]
      );
      g = l(
        function () {
          var a = h.feedType,
            b = h.groupID;
          h.hoistStories;
          var c = babelHelpers.objectWithoutPropertiesLoose(h, [
            "feedType",
            "groupID",
            "hoistStories",
          ]);
          return {
            feedSectionVariables: babelHelpers["extends"](
              { feedType: a, groupID: b },
              c
            ),
            feedUnitVariables: c,
          };
        },
        [h]
      );
      a = g.feedSectionVariables;
      g = g.feedUnitVariables;
      var t = l(
          function () {
            return r != null ? new Set(r.filter(Boolean)) : new Set();
          },
          [r]
        ),
        u = l(
          function () {
            var a =
              p !== "BUY_AND_SELL" && o.locally_composed_feed_edges
                ? o.locally_composed_feed_edges
                    .map(function (a) {
                      return a == null ? void 0 : a.node;
                    })
                    .filter(Boolean)
                : [];
            a = new Map([[null, { stories: a }]]);
            return a;
          },
          [o.locally_composed_feed_edges, p]
        );
      u = c("getRenderedStoriesByHeader")({
        currentPosition: 0,
        feedUnitVariables: g,
        storiesByHeader: u,
      });
      u = u.renderedStoriesByHeader;
      u = c("mapMapToArray")(u, function (a, b) {
        a = a.stories;
        b = i.jsx(
          c("CometSuspenseList.react"),
          { revealOrder: "forwards", children: a },
          b
        );
        return a.length < 1 ? null : b;
      }).filter(Boolean);
      var v = j(c("CometScrollAnchorContext")),
        w = l(
          function () {
            return (v == null ? void 0 : v.key) === "ufi-comment" ||
              (v == null ? void 0 : v.key) === "ufi-reply"
              ? v
              : r && r.length > 0
              ? m
              : null;
          },
          [v, r]
        ),
        x = l(
          function () {
            var a;
            return { groupID: (a = o.id) != null ? a : void 0 };
          },
          [o.id]
        );
      b =
        (b = (b = o.locally_composed_feed_edges) == null ? void 0 : b.length) !=
        null
          ? b
          : 0;
      e = (e = r == null ? void 0 : r.length) != null ? e : 0;
      f =
        (f = o.if_viewer_can_see_announcements_unit_for_count) == null
          ? void 0
          : (f = f.group_announcement_stories) == null
          ? void 0
          : f.count;
      f = f != null && f > 0 ? 1 : 0;
      var y = d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules(
        "default_feed"
      );
      return i.jsx(c("VideoAutoplayLocalScopeProvider.react"), {
        autoplayLocalRules: y,
        children: i.jsx(c("CometFeedHighlightedStoriesContext").Provider, {
          value: t,
          children: i.jsx(c("CometScrollAnchorContext").Provider, {
            value: w,
            children: i.jsx(c("ActorHovercardContext").Provider, {
              value: o.context_actor_hovercard,
              children: i.jsx(c("CometHovercardGroupContext").Provider, {
                value: x,
                children: i.jsxs(
                  c("CometSuspenseList.react"),
                  {
                    revealOrder: "forwards",
                    children: [
                      i.jsx(c("CometErrorBoundary.react"), {
                        children: i.jsx(c("CometPlaceholder.react"), {
                          fallback: null,
                          children: i.jsx(
                            c("GroupsCometQPTopOfMallSection.react"),
                            { group: o }
                          ),
                        }),
                      }),
                      i.jsx(c("CometPlaceholder.react"), {
                        fallback: null,
                        children: i.jsx(d("CometRelay").MatchContainer, {
                          match: o.if_viewer_can_see_highlight_units,
                          props: { feedUnitVariables: g },
                        }),
                      }),
                      i.jsx(c("CometPlaceholder.react"), {
                        fallback: null,
                        children: i.jsx(d("CometRelay").MatchContainer, {
                          match: o.if_viewer_can_see_streamer_videos,
                        }),
                      }),
                      i.jsx(c("CometErrorBoundary.react"), {
                        children: i.jsx(c("CometPlaceholder.react"), {
                          fallback: null,
                          children: i.jsx(
                            c("GroupsCometFeedInlineMessages.react"),
                            { group$key: o }
                          ),
                        }),
                      }),
                      i.jsx(c("CometPlaceholder.react"), {
                        fallback: null,
                        children: u,
                      }),
                      i.jsx(c("CometErrorBoundary.react"), {
                        children: i.jsx(c("CometPlaceholder.react"), {
                          fallback: null,
                          children: i.jsx(
                            c("GroupsCometFeedHoistedStories.react"),
                            {
                              feedStartPosition: b,
                              group$key: o,
                              hoistStoriesIDSet: t,
                              variables: babelHelpers["extends"]({}, g, {
                                feedType: p,
                                groupID: q,
                              }),
                            }
                          ),
                        }),
                      }),
                      i.jsx(c("CometErrorBoundary.react"), {
                        children: i.jsx(c("CometPlaceholder.react"), {
                          fallback: null,
                          children: i.jsx(d("CometRelay").MatchContainer, {
                            match: o.if_viewer_can_see_announcements_unit,
                            props: {
                              feedStartPosition: b + e,
                              feedUnitVariables: g,
                              groupKey: o.if_viewer_can_see_announcements_unit,
                            },
                          }),
                        }),
                      }),
                      i.jsx(c("CometErrorBoundary.react"), {
                        children: i.jsx(c("CometPlaceholder.react"), {
                          fallback: i.jsx(
                            c("GroupsCometFeedRegularStoriesGlimmer.react"),
                            { hasSortingSetting: g.sortingSetting != null }
                          ),
                          children: i.jsx(
                            c("GroupsCometFeedRegularStories.react"),
                            {
                              feedStartPosition: b + e + f,
                              group$key: o,
                              groupID: q,
                              hoistStoriesIDSet: t,
                              paginationGroup$key: o,
                              variables: a,
                            }
                          ),
                        }),
                      }),
                    ],
                  },
                  "group_feed"
                ),
              }),
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "GroupsCometQPTopOfSideColumnSection.react",
  [
    "CometCard.react",
    "CometQuickPromotionLoggerContext.react",
    "CometRelay",
    "GroupsCometQPTopOfSideColumnSection_group.graphql",
    "react",
    "useQuickPromotionFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = { section: "quick_promotion" };
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("GroupsCometQPTopOfSideColumnSection_group.graphql")),
        a.group
      );
      a =
        a == null
          ? void 0
          : (a = a.side_column_eligible_promotions) == null
          ? void 0
          : (a = a.comet_qp_sections) == null
          ? void 0
          : a.renderer_strategy;
      var e = c("useQuickPromotionFalcoEvent")({
        context_surface_id: 7923,
        context_trigger: "community_ap_community_top_of_side_column_view",
      });
      return a == null
        ? null
        : i.jsx("div", {
            className: "sjgh65i0",
            children: i.jsx(
              c("CometQuickPromotionLoggerContext.react").Provider,
              {
                value: e,
                children: i.jsx(c("CometCard.react"), {
                  background: "white",
                  dropShadow: 1,
                  children: i.jsx(d("CometRelay").MatchContainer, {
                    match: a,
                    props: j,
                  }),
                }),
              }
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useGroupsCometVisitMutation",
  ["CometRelay", "useGroupsCometVisitMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a() {
      var a = d("CometRelay").useMutation(
        h !== void 0 ? h : (h = b("useGroupsCometVisitMutation.graphql"))
      );
      a = a[0];
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometFeedNotifSection.react",
  [
    "CometErrorBoundary.react",
    "CometRelay",
    "GroupsCometFeedNotifSection_group.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("GroupsCometFeedNotifSection_group.graphql")),
        a.groupKey
      );
      a = a.comet_notification_promotion_dialog;
      return a == null
        ? null
        : i.jsx("div", {
            className: "sjgh65i0",
            children: i.jsx(c("CometErrorBoundary.react"), {
              children: i.jsx(d("CometRelay").MatchContainer, { match: a }),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometFeedPendingPostsSection.react",
  [
    "CometErrorBoundary.react",
    "CometRelay",
    "GroupsCometFeedPendingPostsSection_group.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.group$key;
      a = a.variables;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("GroupsCometFeedPendingPostsSection_group.graphql")),
        f
      );
      e =
        f == null
          ? void 0
          : (e = f.if_viewer_can_see_pending_forum_post_experience) == null
          ? void 0
          : e.comet_pending_post_cards;
      return e === null
        ? null
        : i.jsx(c("CometErrorBoundary.react"), {
            children: i.jsx(d("CometRelay").MatchContainer, {
              match: e,
              props: { group: f, variables: a },
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometFeedSecondaryColumn.react",
  [
    "CometDirectionalDockingView.react",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometSuspenseList.react",
    "GroupsCometDiscussionSecondaryColumnGlimmer.react",
    "GroupsCometFeedSecondaryColumn_group.graphql",
    "GroupsCometQPTopOfSideColumnSection.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.group$key;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("GroupsCometFeedSecondaryColumn_group.graphql")),
        a
      );
      var e = a.comet_discussion_tab_cards.map(function (a) {
        return i.jsx(d("CometRelay").MatchContainer, { match: a });
      });
      return e.length === 0
        ? null
        : i.jsxs(c("CometDirectionalDockingView.react"), {
            bottom: 16,
            top: 16,
            children: [
              i.jsx(c("CometErrorBoundary.react"), {
                children: i.jsx(c("CometPlaceholder.react"), {
                  fallback: null,
                  children: i.jsx(
                    c("GroupsCometQPTopOfSideColumnSection.react"),
                    { group: a }
                  ),
                }),
              }),
              i.jsx(
                c("CometSuspenseList.react"),
                {
                  revealOrder: "forwards",
                  children: e.map(function (a, b) {
                    return i.jsx(
                      c("CometErrorBoundary.react"),
                      {
                        children: i.jsx(c("CometPlaceholder.react"), {
                          fallback: i.jsx(
                            c(
                              "GroupsCometDiscussionSecondaryColumnGlimmer.react"
                            ),
                            {}
                          ),
                          children: a,
                        }),
                      },
                      b
                    );
                  }),
                },
                "group_RHC_cards"
              ),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometGroupDiscussionRoot.Success.react",
  [
    "CometErrorBoundary.react",
    "CometFeedStoryGlimmer.react",
    "CometFeedVisitationContext",
    "CometGroupDiscussionRootSuccessQuery.graphql",
    "CometHomepageBadgeCountClearingMutationHelper",
    "CometPagelet.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometRouteParams",
    "CometTransientDialogProvider.react",
    "FeedInlineComposerGlimmer.react",
    "GroupsCometDiscussionLayout.react",
    "GroupsCometDiscussionSecondaryColumnGlimmer.react",
    "GroupsCometFeed.react",
    "GroupsCometFeedNotifSection.react",
    "GroupsCometFeedPendingPostsSection.react",
    "GroupsCometFeedSecondaryColumn.react",
    "GroupsCometForumMigrationDialog.entrypoint",
    "GroupsCometInlineComposerRenderer.react",
    "GroupsCometRelatedGroupsChainingSection.react",
    "GroupsCometTabFalcoEventLog",
    "ProfileCometContext",
    "RelayUFI2CommentsKeyContext",
    "WebPixelRatio",
    "XCometGroupAboutControllerRouteBuilder",
    "gkx",
    "orEmptyArray",
    "qex",
    "react",
    "unrecoverableViolation",
    "useCometEntryPointDialog",
    "useCometRouterDispatcher",
    "useCurrentRoute",
    "useGroupsCometVisitMutation",
    "useIdorvanity",
    "useIsLoggedOut",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useRef,
      n = (e = c("qex")._("522")) != null ? e : !1;
    function a(a) {
      var e;
      a = a.queryReference;
      var f = a.variables,
        g = f.creative_provider_id,
        o = f.feedType,
        p = f.focusCommentID,
        q = f.groupID,
        r = f.hoistStories;
      f = f.renderLocation;
      var s = c("useCometRouterDispatcher")(),
        t = c("useIdorvanity")();
      e =
        ((e = c("useCurrentRoute")()) == null
          ? void 0
          : (e = e.entityKeyConfig) == null
          ? void 0
          : (e = e.entity_type) == null
          ? void 0
          : e.value) === "profile";
      e && (t = q);
      if (t == null || s == null)
        throw c("unrecoverableViolation")(
          "idorvanity or dispatcher in group mall feed is null",
          "groups_comet"
        );
      e = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("CometGroupDiscussionRootSuccessQuery.graphql")),
        a
      );
      e = e.group;
      var u = Boolean(d("CometRouteParams").useRouteParams().modal);
      d("GroupsCometTabFalcoEventLog").useLogGroupsTabImpressionDeferred(
        "CometGroupDiscussionRootSuccess",
        q + ":" + String(u)
      );
      var v = c("useGroupsCometVisitMutation")();
      u = c("useIsLoggedOut")();
      var w = m(!u);
      u = k(c("ProfileCometContext"));
      var x = u.isInViewAs,
        y = j(
          function (a) {
            d("CometHomepageBadgeCountClearingMutationHelper").onCompleted(
              q,
              a == null
                ? void 0
                : (a = a.viewer_groups_tab_log_group_visit) == null
                ? void 0
                : a.viewer_for_homepage_unread_count
            );
          },
          [q]
        ),
        z =
          (u =
            d("CometRouteParams").useRouteParams()
              .show_migration_preparation_dialog) != null
            ? u
            : !1,
        A =
          (u =
            d("CometRouteParams").useRouteParams()
              .show_migration_onboarding_dialog) != null
            ? u
            : !1;
      u = c("useCometEntryPointDialog")(
        c("GroupsCometForumMigrationDialog.entrypoint"),
        { isOnboardingPhase: !1, source: "qp_megaphone" }
      );
      var B = u[0];
      u = c("useCometEntryPointDialog")(
        c("GroupsCometForumMigrationDialog.entrypoint"),
        { isOnboardingPhase: !0, source: "qp_megaphone" }
      );
      var C = u[0];
      l(
        function () {
          w.current &&
            (x ||
              v({
                onCompleted: y,
                variables: {
                  bookmarkID: q,
                  input: {
                    badge_entry_point: "GROUPS_TAB_MAIN",
                    bookmark_folder_id: "FAVORITES",
                    environment: "COMET",
                    group_id: q,
                  },
                  scale: d("WebPixelRatio").get(),
                  skipFetchingUnreadCount: c("gkx")("2252"),
                },
              }),
            (w.current = !1)),
            z && B({}),
            A && C({});
        },
        [q, v, z, A, y, B, C]
      );
      u = e.if_viewer_can_see_content == null;
      u &&
        s.go(
          c("XCometGroupAboutControllerRouteBuilder").buildURL({
            idorvanity: t,
          }),
          { replace: !0, target: "self" }
        );
      u = i.jsx(c("GroupsCometRelatedGroupsChainingSection.react"), {
        group$key: e,
      });
      return i.jsx(c("GroupsCometDiscussionLayout.react"), {
        beforeContent: n ? null : u,
        feed: i.jsxs(c("RelayUFI2CommentsKeyContext").Provider, {
          value: "CometGroupDiscussionRootSuccessQuery",
          children: [
            i.jsx(c("CometErrorBoundary.react"), {
              children: i.jsx(d("CometPagelet.react").Placeholder, {
                fallback: i.jsx(c("FeedInlineComposerGlimmer.react"), {}),
                name: "GroupInlineComposer",
                children: i.jsx(c("CometTransientDialogProvider.react"), {
                  children: i.jsx(
                    c("GroupsCometInlineComposerRenderer.react"),
                    { group$key: e, renderLocation: f }
                  ),
                }),
              }),
            }),
            i.jsx(c("CometErrorBoundary.react"), {
              children: i.jsx(c("CometPlaceholder.react"), {
                fallback: null,
                children:
                  g != null
                    ? i.jsx("div", {
                        children: i.jsx(
                          c("GroupsCometFeedNotifSection.react"),
                          { creative_provider_id: g, groupKey: e }
                        ),
                      })
                    : null,
              }),
            }),
            e.if_viewer_can_see_pending_forum_post_experience != null &&
              i.jsx(c("GroupsCometFeedPendingPostsSection.react"), {
                group$key: e.if_viewer_can_see_pending_forum_post_experience,
                variables: a.variables,
              }),
            i.jsx(
              d("CometFeedVisitationContext")
                .CometFeedVisitationContextProvider,
              {
                feedLastVisitTime: e.viewer_last_visited_time,
                children: i.jsx(d("CometPagelet.react").Placeholder, {
                  fallback: i.jsx(c("CometFeedStoryGlimmer.react"), {}),
                  name: "GroupFeed",
                  children: i.jsx(
                    c("GroupsCometFeed.react"),
                    { groupKey: e, variables: a.variables },
                    q +
                      "-" +
                      ((s = p) != null ? s : "_") +
                      "-" +
                      c("orEmptyArray")(r).join("-") +
                      "-" +
                      o
                  ),
                }),
              }
            ),
          ],
        }),
        secondaryColumn: i.jsx(c("CometPlaceholder.react"), {
          fallback: i.jsx(
            c("GroupsCometDiscussionSecondaryColumnGlimmer.react"),
            {}
          ),
          children: i.jsx(c("GroupsCometFeedSecondaryColumn.react"), {
            group$key: e,
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
