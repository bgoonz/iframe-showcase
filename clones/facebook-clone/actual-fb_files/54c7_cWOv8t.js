if (self.CavalryLogger) {
  CavalryLogger.start_js(["6oGIRh5"]);
}

__d(
  "CometActivityLogActivityHistoryLink_list.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogActivityHistoryLink_list",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "activity_history_navbar_title",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogLeaveViewConfirmation",
          kind: "LinkedField",
          name: "leave_view_confirmation",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "description",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cancel_label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "confirm_label",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "ActivityLogListPage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogAllActivityLink_list.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogAllActivityLink_list",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogLeaveViewConfirmation",
          kind: "LinkedField",
          name: "leave_view_confirmation",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "description",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cancel_label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "confirm_label",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "ActivityLogListPage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogArchiveLink_archive.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogArchiveLink_archive",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "navbar_title",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogLeaveViewConfirmation",
          kind: "LinkedField",
          name: "leave_view_confirmation",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "description",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cancel_label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "confirm_label",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "ActivityLogArchivePage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogBulkActionButtons_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          concreteType: "ActivityLogBulkOption",
          kind: "LinkedField",
          name: "bulk_options",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ActivityLogOptionConfirmationDialog",
              kind: "LinkedField",
              name: "confirmation_dialog_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "body_content",
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
                  kind: "ScalarField",
                  name: "cancel_action_label",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "confirm_action_label",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "title",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "key",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        b = [a],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "category_key",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "activity_history" },
          { kind: "RootArgument", name: "category_key" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometActivityLogBulkActionButtons_actor",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "ActivityLogArchivePage",
            kind: "LinkedField",
            name: "activity_log_archive_page",
            plural: !1,
            selections: b,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ActivityLogTrashPage",
            kind: "LinkedField",
            name: "activity_log_trash_page",
            plural: !1,
            selections: b,
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "category_key",
                variableName: "category_key",
              },
            ],
            concreteType: "ActivityLogManageActivityPage",
            kind: "LinkedField",
            name: "activity_log_manage_activity_page",
            plural: !1,
            selections: b,
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "activity_history",
                variableName: "activity_history",
              },
            ],
            concreteType: "ActivityLogCategoryInfo",
            kind: "LinkedField",
            name: "activity_log_categories",
            plural: !0,
            selections: [
              c,
              {
                alias: null,
                args: null,
                concreteType: "ActivityLogCategoryInfo",
                kind: "LinkedField",
                name: "subcategories",
                plural: !0,
                selections: [c, a],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "ActivityLogActor",
        abstractKey: "__isActivityLogActor",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogBulkActionReauthDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3550763988358218",
        metadata: {},
        name: "CometActivityLogBulkActionReauthDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogDateFilterEntry_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogDateFilterEntry_viewer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometActivityLogFilters_viewer",
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "activity_log_actor",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogDateFilterMenu_actor",
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
  "CometActivityLogFilterActivityTypesItem_category.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "category_key",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometActivityLogFilterActivityTypesItem_category",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "label",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "icon_name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ActivityLogCategoryInfo",
            kind: "LinkedField",
            name: "subcategories",
            plural: !0,
            selections: [
              a,
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometActivityLogFilterActivityTypesSubcategoryItem_category",
              },
            ],
            storageKey: null,
          },
        ],
        type: "ActivityLogCategoryInfo",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogFilterActivityTypesSubcategoryItem_category.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogFilterActivityTypesSubcategoryItem_category",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "category_key",
          storageKey: null,
        },
      ],
      type: "ActivityLogCategoryInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogFilterActivityTypes_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "activity_history" },
        { kind: "RootArgument", name: "manage_mode" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogFilterActivityTypes_actor",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogMultiSelect",
          kind: "LinkedField",
          name: "activity_log_multi_select",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "manageable_categories",
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
              name: "activity_history",
              variableName: "activity_history",
            },
            {
              kind: "Variable",
              name: "manage_mode",
              variableName: "manage_mode",
            },
          ],
          concreteType: "ActivityLogCategoryInfo",
          kind: "LinkedField",
          name: "activity_log_categories",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "category_key",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogFilterActivityTypesItem_category",
            },
          ],
          storageKey: null,
        },
      ],
      type: "ActivityLogActor",
      abstractKey: "__isActivityLogActor",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogFilterActivityTypes_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogFilterActivityTypes_viewer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogContentStrings",
          kind: "LinkedField",
          name: "activity_log_content_strings",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "activity_filter_string",
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
  "CometActivityLogFiltersLink_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogFiltersLink_viewer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "activity_log_actor",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogFilterMenu_actor",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometActivityLogFilters_viewer",
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
  "CometActivityLogItemStory_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { kind: "Literal", name: "height", value: 60 },
          { kind: "Variable", name: "scale", variableName: "scale" },
          { kind: "Literal", name: "width", value: 60 },
        ],
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        c = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actors",
          plural: !0,
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "Image",
              kind: "LinkedField",
              name: "profile_picture",
              plural: !1,
              selections: b,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "media",
          plural: !1,
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "Image",
              kind: "LinkedField",
              name: "image",
              plural: !1,
              selections: b,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        e = [d],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subtitle",
          storageKey: null,
        },
        g = [
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometTextWithEntitiesRelay_textWithEntities",
          },
        ],
        h = {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 1 }],
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "subattachments",
          plural: !0,
          selections: e,
          storageKey: "subattachments(first:1)",
        },
        i = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        j = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: i,
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          concreteType: "PrivacyScope",
          kind: "LinkedField",
          name: "privacy_scope",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "feed_story_label",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometPrivacyIcon_scope",
            },
          ],
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "feedLocation" },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometActivityLogItemStory_story",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometActivityLogUnderlyingAdminCreator_story",
          },
          c,
          {
            alias: null,
            args: null,
            concreteType: "Application",
            kind: "LinkedField",
            name: "application",
            plural: !1,
            selections: [
              {
                alias: null,
                args: a,
                concreteType: "Image",
                kind: "LinkedField",
                name: "bookmark_image",
                plural: !1,
                selections: b,
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
              d,
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "subattachments",
                plural: !0,
                selections: e,
                storageKey: null,
              },
              f,
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "title_with_entities",
                plural: !1,
                selections: g,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "fb_feed_location",
                    variableName: "feedLocation",
                  },
                ],
                kind: "ObjectValue",
                name: "feed_rendering_context",
              },
            ],
            concreteType: "FeedbackContext",
            kind: "LinkedField",
            name: "feedback_context",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [{ kind: "Literal", name: "limit", value: 1 }],
                concreteType: "Comment",
                kind: "LinkedField",
                name: "relevant_comments",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "StoryAttachment",
                    kind: "LinkedField",
                    name: "attachments",
                    plural: !0,
                    selections: [d, h],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "body",
                    plural: !1,
                    selections: i,
                    storageKey: null,
                  },
                ],
                storageKey: "relevant_comments(limit:1)",
              },
            ],
            storageKey: null,
          },
          j,
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "attached_story",
            plural: !1,
            selections: [
              c,
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "attachments",
                plural: !0,
                selections: [d, h, f],
                storageKey: null,
              },
              j,
              k,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "summary",
            plural: !1,
            selections: g,
            storageKey: null,
          },
          k,
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
  "CometActivityLogItemTimeLabel_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogItemTimeLabel_story",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creation_time",
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
  "CometActivityLogItem_edge.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "url",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometActivityLogItem_edge",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometActivityLogMenuButton_data",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "selected_visibility",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "node",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometActivityLogItemStory_story",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometActivityLogUnderlyingAdminCreator_story",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometActivityLogPrivacyRow_story",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometActivityLogItemTimeLabel_story",
              },
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "attachments",
                plural: !0,
                selections: [a],
                storageKey: null,
              },
              a,
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
        type: "ActivityLogStoriesEdge",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogItem_listPage.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogItem_listPage",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogMenuButton_listPage",
        },
      ],
      type: "ActivityLogListPage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogItem_trashPage.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogItem_trashPage",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "max_seconds_left_for_red_metatext",
          storageKey: null,
        },
      ],
      type: "ActivityLogTrashPage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogLandingPageItem_category.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogLandingPageItem_category",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "icon_name",
          storageKey: null,
        },
      ],
      type: "ActivityLogCategoryInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogLandingPage_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "category_key",
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "activity_history" },
          { kind: "RootArgument", name: "manage_mode" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometActivityLogLandingPage_actor",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "ActivityLogLandingPage",
            kind: "LinkedField",
            name: "activity_log_landing_page",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "ActivityLogCategoryInfo",
                kind: "LinkedField",
                name: "quick_category_filters_info",
                plural: !0,
                selections: [
                  a,
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometActivityLogLandingPageItem_category",
                  },
                ],
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
                name: "activity_history",
                variableName: "activity_history",
              },
              {
                kind: "Variable",
                name: "manage_mode",
                variableName: "manage_mode",
              },
            ],
            concreteType: "ActivityLogCategoryInfo",
            kind: "LinkedField",
            name: "activity_log_categories",
            plural: !0,
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: "ActivityLogCategoryInfo",
                kind: "LinkedField",
                name: "subcategories",
                plural: !0,
                selections: [a],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "ActivityLogActor",
        abstractKey: "__isActivityLogActor",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogListReviewButtons_photoReviewString.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogListReviewButtons_photoReviewString",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "photo_review",
          storageKey: null,
        },
      ],
      type: "PhotoReviewString",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogListReviewButtons_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogListReviewButtons_viewer",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "eligible_for_photo_review",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogContentStrings",
          kind: "LinkedField",
          name: "activity_log_content_strings",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "review_buttons_title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "timeline_review_string",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tag_review_string",
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
  "CometActivityLogList_pages.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogList_pages",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogArchivePage",
          kind: "LinkedField",
          name: "activity_log_archive_page",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogManageActivityLinks_archive",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogTrashPage",
          kind: "LinkedField",
          name: "activity_log_trash_page",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogManageActivityLinks_trash",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogListPage",
          kind: "LinkedField",
          name: "activity_log_list_page",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogManageActivityLinks_list",
            },
          ],
          storageKey: null,
        },
      ],
      type: "ActivityLogActor",
      abstractKey: "__isActivityLogActor",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogList_photoReviewString.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogList_photoReviewString",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogListReviewButtons_photoReviewString",
        },
      ],
      type: "PhotoReviewString",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogList_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogList_viewer",
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
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "activity_log_actor",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogStoriesList_actor",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogStoriesList_pages",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogStoriesList_viewer",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogListReviewButtons_viewer",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogManageActivityFilters_viewer",
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
  "CometActivityLogMainContentContainer_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogMainContentContainer_viewer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "activity_log_actor",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogLandingPage_actor",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogStoriesList_actor",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogStoriesList_pages",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogStoriesList_viewer",
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
  "CometActivityLogMainContentRootQuery.graphql",
  [
    "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "activity_history",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "category" },
        d = { defaultValue: null, kind: "LocalArgument", name: "category_key" },
        e = { defaultValue: null, kind: "LocalArgument", name: "count" },
        f = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        g = { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        h = { defaultValue: null, kind: "LocalArgument", name: "manage_mode" },
        i = { defaultValue: null, kind: "LocalArgument", name: "month" },
        j = { defaultValue: null, kind: "LocalArgument", name: "person_id" },
        k = { defaultValue: null, kind: "LocalArgument", name: "privacy" },
        l = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        m = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "timeline_visibility",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "year" },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "category_key",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        r = {
          kind: "Variable",
          name: "activity_history",
          variableName: "activity_history",
        },
        s = {
          kind: "Variable",
          name: "category_key",
          variableName: "category_key",
        },
        t = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "category", variableName: "category" },
          s,
          {
            fields: [
              {
                kind: "Variable",
                name: "person_id",
                variableName: "person_id",
              },
            ],
            kind: "ObjectValue",
            name: "complex_selection_filter",
          },
          { kind: "Variable", name: "first", variableName: "count" },
          { kind: "Variable", name: "month", variableName: "month" },
          { kind: "Variable", name: "privacy", variableName: "privacy" },
          {
            kind: "Variable",
            name: "timeline_visibility",
            variableName: "timeline_visibility",
          },
          { kind: "Variable", name: "year", variableName: "year" },
        ],
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        v = [
          {
            kind: "Literal",
            name: "supported",
            value: "PrivacyScopeEditableRenderer",
          },
        ],
        w = [
          { kind: "Literal", name: "render_location", value: "ACTIVITY_LOG" },
        ],
        x = { kind: "Variable", name: "scale", variableName: "scale" },
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        z = {
          alias: null,
          args: [x],
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
            y,
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
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "feed_story_label",
          storageKey: null,
        };
      x = [
        { kind: "Literal", name: "height", value: 60 },
        x,
        { kind: "Literal", name: "width", value: 60 },
      ];
      y = [y];
      var B = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actors",
          plural: !0,
          selections: [
            o,
            {
              alias: null,
              args: x,
              concreteType: "Image",
              kind: "LinkedField",
              name: "profile_picture",
              plural: !1,
              selections: y,
              storageKey: null,
            },
            u,
          ],
          storageKey: null,
        },
        C = [u],
        D = {
          kind: "InlineFragment",
          selections: C,
          type: "Node",
          abstractKey: "__isNode",
        };
      C = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "media",
        plural: !1,
        selections: [
          o,
          {
            alias: null,
            args: x,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: y,
            storageKey: null,
          },
          D,
          {
            kind: "InlineFragment",
            selections: C,
            type: "GenericAttachmentMedia",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: C,
            type: "MontageImage",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: C,
            type: "MontageVideo",
            abstractKey: null,
          },
        ],
        storageKey: null,
      };
      var E = [C],
        F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subtitle",
          storageKey: null,
        },
        G = [
          {
            args: null,
            fragment: b(
              "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
            ),
            kind: "FragmentSpread",
          },
        ],
        H = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        I = {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 1 }],
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "subattachments",
          plural: !0,
          selections: E,
          storageKey: "subattachments(first:1)",
        },
        J = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        K = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: J,
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title",
          storageKey: null,
        },
        N = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "confirm_action_label",
          storageKey: null,
        },
        O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cancel_action_label",
          storageKey: null,
        },
        P = {
          alias: null,
          args: null,
          concreteType: "ActivityLogBulkOption",
          kind: "LinkedField",
          name: "bulk_options",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ActivityLogOptionConfirmationDialog",
              kind: "LinkedField",
              name: "confirmation_dialog_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "body_content",
                  plural: !1,
                  selections: J,
                  storageKey: null,
                },
                O,
                N,
                M,
              ],
              storageKey: null,
            },
            q,
            L,
          ],
          storageKey: null,
        },
        Q = [P];
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g, h, i, j, k, l, m, n],
          kind: "Fragment",
          metadata: null,
          name: "CometActivityLogMainContentRootQuery",
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
                  name: "CometActivityLogMainContentContainer_viewer",
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
          argumentDefinitions: [l, e, f, c, d, g, n, h, i, k, m, j, a],
          kind: "Operation",
          name: "CometActivityLogMainContentRootQuery",
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
                  name: "activity_log_actor",
                  plural: !1,
                  selections: [
                    o,
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isActivityLogActor",
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "ActivityLogLandingPage",
                      kind: "LinkedField",
                      name: "activity_log_landing_page",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogCategoryInfo",
                          kind: "LinkedField",
                          name: "quick_category_filters_info",
                          plural: !0,
                          selections: [
                            p,
                            q,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "icon_name",
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
                      args: [
                        r,
                        {
                          kind: "Variable",
                          name: "manage_mode",
                          variableName: "manage_mode",
                        },
                      ],
                      concreteType: "ActivityLogCategoryInfo",
                      kind: "LinkedField",
                      name: "activity_log_categories",
                      plural: !0,
                      selections: [
                        p,
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogCategoryInfo",
                          kind: "LinkedField",
                          name: "subcategories",
                          plural: !0,
                          selections: [p],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: t,
                      concreteType: "ActivityLogStoriesConnection",
                      kind: "LinkedField",
                      name: "activity_log_stories",
                      plural: !1,
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
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogStoriesEdge",
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
                                u,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "can_viewer_edit_post_privacy",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "PrivacyScope",
                                  kind: "LinkedField",
                                  name: "privacy_scope",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: v,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "privacy_scope_renderer",
                                      plural: !1,
                                      selections: [
                                        o,
                                        {
                                          alias: null,
                                          args: w,
                                          concreteType: "PrivacyScope",
                                          kind: "LinkedField",
                                          name: "privacy_scope_for_location",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "can_viewer_edit",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "privacy_write_id",
                                              storageKey: null,
                                            },
                                            q,
                                            z,
                                          ],
                                          storageKey:
                                            'privacy_scope_for_location(render_location:"ACTIVITY_LOG")',
                                        },
                                        u,
                                      ],
                                      storageKey:
                                        'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")',
                                    },
                                    A,
                                    q,
                                    z,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "underlying_admin_creator",
                                  plural: !1,
                                  selections: [
                                    o,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "name",
                                      storageKey: null,
                                    },
                                    u,
                                  ],
                                  storageKey: null,
                                },
                                B,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Application",
                                  kind: "LinkedField",
                                  name: "application",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: x,
                                      concreteType: "Image",
                                      kind: "LinkedField",
                                      name: "bookmark_image",
                                      plural: !1,
                                      selections: y,
                                      storageKey: null,
                                    },
                                    u,
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
                                    C,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryAttachment",
                                      kind: "LinkedField",
                                      name: "subattachments",
                                      plural: !0,
                                      selections: E,
                                      storageKey: null,
                                    },
                                    F,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "title_with_entities",
                                      plural: !1,
                                      selections: G,
                                      storageKey: null,
                                    },
                                    H,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      fields: [
                                        {
                                          kind: "Variable",
                                          name: "fb_feed_location",
                                          variableName: "feedLocation",
                                        },
                                      ],
                                      kind: "ObjectValue",
                                      name: "feed_rendering_context",
                                    },
                                  ],
                                  concreteType: "FeedbackContext",
                                  kind: "LinkedField",
                                  name: "feedback_context",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "limit",
                                          value: 1,
                                        },
                                      ],
                                      concreteType: "Comment",
                                      kind: "LinkedField",
                                      name: "relevant_comments",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryAttachment",
                                          kind: "LinkedField",
                                          name: "attachments",
                                          plural: !0,
                                          selections: [C, I],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "TextWithEntities",
                                          kind: "LinkedField",
                                          name: "body",
                                          plural: !1,
                                          selections: J,
                                          storageKey: null,
                                        },
                                        u,
                                      ],
                                      storageKey: "relevant_comments(limit:1)",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                K,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Story",
                                  kind: "LinkedField",
                                  name: "attached_story",
                                  plural: !1,
                                  selections: [
                                    B,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryAttachment",
                                      kind: "LinkedField",
                                      name: "attachments",
                                      plural: !0,
                                      selections: [C, I, F],
                                      storageKey: null,
                                    },
                                    K,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "PrivacyScope",
                                      kind: "LinkedField",
                                      name: "privacy_scope",
                                      plural: !1,
                                      selections: [
                                        A,
                                        q,
                                        z,
                                        {
                                          alias: null,
                                          args: v,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "privacy_scope_renderer",
                                          plural: !1,
                                          selections: [
                                            o,
                                            {
                                              alias: null,
                                              args: w,
                                              concreteType: "PrivacyScope",
                                              kind: "LinkedField",
                                              name: "privacy_scope_for_location",
                                              plural: !1,
                                              selections: [q, z],
                                              storageKey:
                                                'privacy_scope_for_location(render_location:"ACTIVITY_LOG")',
                                            },
                                            u,
                                          ],
                                          storageKey:
                                            'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")',
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    u,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "summary",
                                  plural: !1,
                                  selections: G,
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "ArchiveState",
                                  kind: "LinkedField",
                                  name: "archive_state",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "move_to_archive_time",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TrashState",
                                  kind: "LinkedField",
                                  name: "trash_state",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "remaining_ttl",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "creation_time",
                                  storageKey: null,
                                },
                                H,
                                o,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "ActivityLogOption",
                              kind: "LinkedField",
                              name: "options",
                              plural: !0,
                              selections: [
                                o,
                                L,
                                q,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "ActivityLogOptionConfirmationDialog",
                                  kind: "LinkedField",
                                  name: "confirmation_dialog_info",
                                  plural: !1,
                                  selections: [
                                    M,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "body_content",
                                      plural: !1,
                                      selections: G,
                                      storageKey: null,
                                    },
                                    N,
                                    O,
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
                              name: "selected_visibility",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "visibility_options",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "ent_fbid",
                              storageKey: null,
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
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: t,
                      filters: [
                        "category",
                        "category_key",
                        "year",
                        "month",
                        "privacy",
                        "timeline_visibility",
                        "complex_selection_filter",
                      ],
                      handle: "connection",
                      key: "CometActivityLogStoriesList_actor_activity_log_stories",
                      kind: "LinkedHandle",
                      name: "activity_log_stories",
                    },
                    D,
                    {
                      alias: null,
                      args: null,
                      concreteType: "ActivityLogTrashPage",
                      kind: "LinkedField",
                      name: "activity_log_trash_page",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "max_seconds_left_for_red_metatext",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "ActivityLogListPage",
                      kind: "LinkedField",
                      name: "activity_log_list_page",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "edit_privacy_option",
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [
                    o,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogMultiSelect",
                          kind: "LinkedField",
                          name: "activity_log_multi_select",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "select_all_label",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "deselect_all_label",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogArchivePage",
                          kind: "LinkedField",
                          name: "activity_log_archive_page",
                          plural: !1,
                          selections: Q,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogTrashPage",
                          kind: "LinkedField",
                          name: "activity_log_trash_page",
                          plural: !1,
                          selections: Q,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [s],
                          concreteType: "ActivityLogManageActivityPage",
                          kind: "LinkedField",
                          name: "activity_log_manage_activity_page",
                          plural: !1,
                          selections: Q,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [r],
                          concreteType: "ActivityLogCategoryInfo",
                          kind: "LinkedField",
                          name: "activity_log_categories",
                          plural: !0,
                          selections: [
                            p,
                            {
                              alias: null,
                              args: null,
                              concreteType: "ActivityLogCategoryInfo",
                              kind: "LinkedField",
                              name: "subcategories",
                              plural: !0,
                              selections: [p, P],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      type: "ActivityLogActor",
                      abstractKey: "__isActivityLogActor",
                    },
                    u,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "should_use_page_rename",
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
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4651355348209553",
          metadata: {},
          name: "CometActivityLogMainContentRootQuery",
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
  "CometActivityLogManageActivityFilters_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "category_key",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          concreteType: "ActivityLogFilterOption",
          kind: "LinkedField",
          name: "filter_options",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "filter_key",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "filter_headline",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "filter_meta_text",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        c = [b];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "activity_history" },
          { kind: "RootArgument", name: "manage_mode" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometActivityLogManageActivityFilters_viewer",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometActivityLogFilterActivityTypes_viewer",
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "activity_log_actor",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometActivityLogFilterActivityTypes_actor",
              },
              {
                alias: null,
                args: null,
                concreteType: "ActivityLogFilters",
                kind: "LinkedField",
                name: "activity_log_filters",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "ActivityLogPersonFilter",
                    kind: "LinkedField",
                    name: "person_filter",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "search",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "ActivityLogFilterOptionBottomSheet",
                    kind: "LinkedField",
                    name: "filter_options_bottomsheet",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "filter_option_bottomsheet_header",
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
                args: [
                  {
                    kind: "Variable",
                    name: "activity_history",
                    variableName: "activity_history",
                  },
                  {
                    kind: "Variable",
                    name: "manage_mode",
                    variableName: "manage_mode",
                  },
                ],
                concreteType: "ActivityLogCategoryInfo",
                kind: "LinkedField",
                name: "activity_log_categories",
                plural: !0,
                selections: [
                  a,
                  b,
                  {
                    alias: null,
                    args: null,
                    concreteType: "ActivityLogCategoryInfo",
                    kind: "LinkedField",
                    name: "subcategories",
                    plural: !0,
                    selections: [a, b],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "ActivityLogArchivePage",
                kind: "LinkedField",
                name: "activity_log_archive_page",
                plural: !1,
                selections: c,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "ActivityLogTrashPage",
                kind: "LinkedField",
                name: "activity_log_trash_page",
                plural: !1,
                selections: c,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometActivityLogDateFilterEntry_viewer",
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
  "CometActivityLogManageActivityLink_manage.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogManageActivityLink_manage",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogPivotLink",
          kind: "LinkedField",
          name: "pivot_links",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogLeaveViewConfirmation",
          kind: "LinkedField",
          name: "leave_view_confirmation",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "description",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cancel_label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "confirm_label",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "ActivityLogListPage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogManageActivityLinks_archive.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogManageActivityLinks_archive",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogArchiveLink_archive",
        },
      ],
      type: "ActivityLogArchivePage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogManageActivityLinks_list.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogManageActivityLinks_list",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogActivityHistoryLink_list",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogAllActivityLink_list",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogManageActivityLink_manage",
        },
      ],
      type: "ActivityLogListPage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogManageActivityLinks_trash.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogManageActivityLinks_trash",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogTrashLink_trash",
        },
      ],
      type: "ActivityLogTrashPage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogMenuButton_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogMenuButton_data",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogOption",
          kind: "LinkedField",
          name: "options",
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
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogActionMenu_data",
        },
      ],
      type: "ActivityLogStoriesEdge",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogMenuButton_listPage.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogMenuButton_listPage",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogActionMenu_listPage",
        },
      ],
      type: "ActivityLogListPage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogMultiSelectBar_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogMultiSelectBar_actor",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogMultiSelect",
          kind: "LinkedField",
          name: "activity_log_multi_select",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "select_all_label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "deselect_all_label",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometActivityLogBulkActionButtons_actor",
        },
      ],
      type: "ActivityLogActor",
      abstractKey: "__isActivityLogActor",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogPrivacyRow_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          args: null,
          kind: "FragmentSpread",
          name: "CometPrivacyIcon_scope",
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        };
      a = {
        alias: null,
        args: null,
        concreteType: "PrivacyScope",
        kind: "LinkedField",
        name: "privacy_scope",
        plural: !1,
        selections: [
          a,
          b,
          {
            alias: null,
            args: [
              {
                kind: "Literal",
                name: "supported",
                value: "PrivacyScopeEditableRenderer",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "privacy_scope_renderer",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Literal",
                    name: "render_location",
                    value: "ACTIVITY_LOG",
                  },
                ],
                concreteType: "PrivacyScope",
                kind: "LinkedField",
                name: "privacy_scope_for_location",
                plural: !1,
                selections: [a, b],
                storageKey:
                  'privacy_scope_for_location(render_location:"ACTIVITY_LOG")',
              },
            ],
            storageKey:
              'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")',
          },
        ],
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometActivityLogPrivacyRow_story",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "ArchiveState",
            kind: "LinkedField",
            name: "archive_state",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "move_to_archive_time",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TrashState",
            kind: "LinkedField",
            name: "trash_state",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "remaining_ttl",
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
            name: "attached_story",
            plural: !1,
            selections: [a],
            storageKey: null,
          },
          a,
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
  "CometActivityLogStoriesListPaginationQuery.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "category" },
        c = { defaultValue: null, kind: "LocalArgument", name: "category_key" },
        d = { defaultValue: null, kind: "LocalArgument", name: "count" },
        e = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        f = { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        g = { defaultValue: null, kind: "LocalArgument", name: "id" },
        h = { defaultValue: null, kind: "LocalArgument", name: "month" },
        i = { defaultValue: null, kind: "LocalArgument", name: "person_id" },
        j = { defaultValue: null, kind: "LocalArgument", name: "privacy" },
        k = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "timeline_visibility",
        },
        m = { defaultValue: null, kind: "LocalArgument", name: "year" },
        n = [{ kind: "Variable", name: "id", variableName: "id" }],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        q = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "category", variableName: "category" },
          {
            kind: "Variable",
            name: "category_key",
            variableName: "category_key",
          },
          {
            fields: [
              {
                kind: "Variable",
                name: "person_id",
                variableName: "person_id",
              },
            ],
            kind: "ObjectValue",
            name: "complex_selection_filter",
          },
          { kind: "Variable", name: "first", variableName: "count" },
          { kind: "Variable", name: "month", variableName: "month" },
          { kind: "Variable", name: "privacy", variableName: "privacy" },
          {
            kind: "Variable",
            name: "timeline_visibility",
            variableName: "timeline_visibility",
          },
          { kind: "Variable", name: "year", variableName: "year" },
        ],
        r = [
          {
            kind: "Literal",
            name: "supported",
            value: "PrivacyScopeEditableRenderer",
          },
        ],
        s = [
          { kind: "Literal", name: "render_location", value: "ACTIVITY_LOG" },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        u = { kind: "Variable", name: "scale", variableName: "scale" },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        w = {
          alias: null,
          args: [u],
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
            v,
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
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "feed_story_label",
          storageKey: null,
        };
      u = [
        { kind: "Literal", name: "height", value: 60 },
        u,
        { kind: "Literal", name: "width", value: 60 },
      ];
      v = [v];
      var y = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actors",
          plural: !0,
          selections: [
            o,
            {
              alias: null,
              args: u,
              concreteType: "Image",
              kind: "LinkedField",
              name: "profile_picture",
              plural: !1,
              selections: v,
              storageKey: null,
            },
            p,
          ],
          storageKey: null,
        },
        z = [p];
      z = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "media",
        plural: !1,
        selections: [
          o,
          {
            alias: null,
            args: u,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: v,
            storageKey: null,
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
            type: "GenericAttachmentMedia",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: z,
            type: "MontageImage",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: z,
            type: "MontageVideo",
            abstractKey: null,
          },
        ],
        storageKey: null,
      };
      var A = [z],
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subtitle",
          storageKey: null,
        },
        C = [
          {
            args: null,
            fragment: b(
              "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
            ),
            kind: "FragmentSpread",
          },
        ],
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        E = {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 1 }],
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "subattachments",
          plural: !0,
          selections: A,
          storageKey: "subattachments(first:1)",
        },
        F = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        G = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: F,
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g, h, i, j, k, l, m],
          kind: "Fragment",
          metadata: null,
          name: "CometActivityLogStoriesListPaginationQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometActivityLogStoriesList_actor",
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
          argumentDefinitions: [a, c, d, e, f, h, i, j, k, l, m, g],
          kind: "Operation",
          name: "CometActivityLogStoriesListPaginationQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                o,
                p,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: q,
                      concreteType: "ActivityLogStoriesConnection",
                      kind: "LinkedField",
                      name: "activity_log_stories",
                      plural: !1,
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
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogStoriesEdge",
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
                                p,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "can_viewer_edit_post_privacy",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "PrivacyScope",
                                  kind: "LinkedField",
                                  name: "privacy_scope",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: r,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "privacy_scope_renderer",
                                      plural: !1,
                                      selections: [
                                        o,
                                        {
                                          alias: null,
                                          args: s,
                                          concreteType: "PrivacyScope",
                                          kind: "LinkedField",
                                          name: "privacy_scope_for_location",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "can_viewer_edit",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "privacy_write_id",
                                              storageKey: null,
                                            },
                                            t,
                                            w,
                                          ],
                                          storageKey:
                                            'privacy_scope_for_location(render_location:"ACTIVITY_LOG")',
                                        },
                                        p,
                                      ],
                                      storageKey:
                                        'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")',
                                    },
                                    x,
                                    t,
                                    w,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "underlying_admin_creator",
                                  plural: !1,
                                  selections: [
                                    o,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "name",
                                      storageKey: null,
                                    },
                                    p,
                                  ],
                                  storageKey: null,
                                },
                                y,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Application",
                                  kind: "LinkedField",
                                  name: "application",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: u,
                                      concreteType: "Image",
                                      kind: "LinkedField",
                                      name: "bookmark_image",
                                      plural: !1,
                                      selections: v,
                                      storageKey: null,
                                    },
                                    p,
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
                                    z,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryAttachment",
                                      kind: "LinkedField",
                                      name: "subattachments",
                                      plural: !0,
                                      selections: A,
                                      storageKey: null,
                                    },
                                    B,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "title_with_entities",
                                      plural: !1,
                                      selections: C,
                                      storageKey: null,
                                    },
                                    D,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      fields: [
                                        {
                                          kind: "Variable",
                                          name: "fb_feed_location",
                                          variableName: "feedLocation",
                                        },
                                      ],
                                      kind: "ObjectValue",
                                      name: "feed_rendering_context",
                                    },
                                  ],
                                  concreteType: "FeedbackContext",
                                  kind: "LinkedField",
                                  name: "feedback_context",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "limit",
                                          value: 1,
                                        },
                                      ],
                                      concreteType: "Comment",
                                      kind: "LinkedField",
                                      name: "relevant_comments",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryAttachment",
                                          kind: "LinkedField",
                                          name: "attachments",
                                          plural: !0,
                                          selections: [z, E],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "TextWithEntities",
                                          kind: "LinkedField",
                                          name: "body",
                                          plural: !1,
                                          selections: F,
                                          storageKey: null,
                                        },
                                        p,
                                      ],
                                      storageKey: "relevant_comments(limit:1)",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                G,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Story",
                                  kind: "LinkedField",
                                  name: "attached_story",
                                  plural: !1,
                                  selections: [
                                    y,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryAttachment",
                                      kind: "LinkedField",
                                      name: "attachments",
                                      plural: !0,
                                      selections: [z, E, B],
                                      storageKey: null,
                                    },
                                    G,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "PrivacyScope",
                                      kind: "LinkedField",
                                      name: "privacy_scope",
                                      plural: !1,
                                      selections: [
                                        x,
                                        t,
                                        w,
                                        {
                                          alias: null,
                                          args: r,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "privacy_scope_renderer",
                                          plural: !1,
                                          selections: [
                                            o,
                                            {
                                              alias: null,
                                              args: s,
                                              concreteType: "PrivacyScope",
                                              kind: "LinkedField",
                                              name: "privacy_scope_for_location",
                                              plural: !1,
                                              selections: [t, w],
                                              storageKey:
                                                'privacy_scope_for_location(render_location:"ACTIVITY_LOG")',
                                            },
                                            p,
                                          ],
                                          storageKey:
                                            'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")',
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    p,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "summary",
                                  plural: !1,
                                  selections: C,
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "ArchiveState",
                                  kind: "LinkedField",
                                  name: "archive_state",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "move_to_archive_time",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TrashState",
                                  kind: "LinkedField",
                                  name: "trash_state",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "remaining_ttl",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "creation_time",
                                  storageKey: null,
                                },
                                D,
                                o,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "ActivityLogOption",
                              kind: "LinkedField",
                              name: "options",
                              plural: !0,
                              selections: [
                                o,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "key",
                                  storageKey: null,
                                },
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "ActivityLogOptionConfirmationDialog",
                                  kind: "LinkedField",
                                  name: "confirmation_dialog_info",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "title",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "body_content",
                                      plural: !1,
                                      selections: C,
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "confirm_action_label",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "cancel_action_label",
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
                              name: "selected_visibility",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "visibility_options",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "ent_fbid",
                              storageKey: null,
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
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: q,
                      filters: [
                        "category",
                        "category_key",
                        "year",
                        "month",
                        "privacy",
                        "timeline_visibility",
                        "complex_selection_filter",
                      ],
                      handle: "connection",
                      key: "CometActivityLogStoriesList_actor_activity_log_stories",
                      kind: "LinkedHandle",
                      name: "activity_log_stories",
                    },
                    { kind: "TypeDiscriminator", abstractKey: "__isNode" },
                  ],
                  type: "ActivityLogActor",
                  abstractKey: "__isActivityLogActor",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4288919874561871",
          metadata: {},
          name: "CometActivityLogStoriesListPaginationQuery",
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
  "CometActivityLogStoriesList_actor.graphql",
  ["CometActivityLogStoriesListPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["activity_log_stories"],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "category" },
          { kind: "RootArgument", name: "category_key" },
          { kind: "RootArgument", name: "count" },
          { kind: "RootArgument", name: "cursor" },
          { kind: "RootArgument", name: "feedLocation" },
          { kind: "RootArgument", name: "month" },
          { kind: "RootArgument", name: "person_id" },
          { kind: "RootArgument", name: "privacy" },
          { kind: "RootArgument", name: "scale" },
          { kind: "RootArgument", name: "timeline_visibility" },
          { kind: "RootArgument", name: "year" },
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
            operation: b("CometActivityLogStoriesListPaginationQuery.graphql"),
            identifierField: "id",
          },
        },
        name: "CometActivityLogStoriesList_actor",
        selections: [
          {
            alias: "activity_log_stories",
            args: [
              { kind: "Variable", name: "category", variableName: "category" },
              {
                kind: "Variable",
                name: "category_key",
                variableName: "category_key",
              },
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "person_id",
                    variableName: "person_id",
                  },
                ],
                kind: "ObjectValue",
                name: "complex_selection_filter",
              },
              { kind: "Variable", name: "month", variableName: "month" },
              { kind: "Variable", name: "privacy", variableName: "privacy" },
              {
                kind: "Variable",
                name: "timeline_visibility",
                variableName: "timeline_visibility",
              },
              { kind: "Variable", name: "year", variableName: "year" },
            ],
            concreteType: "ActivityLogStoriesConnection",
            kind: "LinkedField",
            name: "__CometActivityLogStoriesList_actor_activity_log_stories_connection",
            plural: !1,
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
              {
                alias: null,
                args: null,
                concreteType: "ActivityLogStoriesEdge",
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
                      c,
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
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometActivityLogItem_edge",
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "createCometActivityLogSections_edge",
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
                            name: "creation_time",
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
                    kind: "ScalarField",
                    name: "cursor",
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
            selections: [c],
            type: "Node",
            abstractKey: "__isNode",
          },
        ],
        type: "ActivityLogActor",
        abstractKey: "__isActivityLogActor",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogStoriesList_pages.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogStoriesList_pages",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogTrashPage",
          kind: "LinkedField",
          name: "activity_log_trash_page",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogItem_trashPage",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogListPage",
          kind: "LinkedField",
          name: "activity_log_list_page",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogItem_listPage",
            },
          ],
          storageKey: null,
        },
      ],
      type: "ActivityLogActor",
      abstractKey: "__isActivityLogActor",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogStoriesList_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogStoriesList_viewer",
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
              args: null,
              kind: "FragmentSpread",
              name: "CometActivityLogMultiSelectBar_actor",
            },
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
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_use_page_rename",
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
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogTrashLink_trash.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogTrashLink_trash",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "navbar_title",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogLeaveViewConfirmation",
          kind: "LinkedField",
          name: "leave_view_confirmation",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "description",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cancel_label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "confirm_label",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "ActivityLogTrashPage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogUnderlyingAdminCreator_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogUnderlyingAdminCreator_story",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "underlying_admin_creator",
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
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogViewOnlyHeader_autoArchiveContent.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometActivityLogViewOnlyHeader_autoArchiveContent",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "AutoArchiveRoot",
          kind: "LinkedField",
          name: "auto_archive",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ArchiveContent",
              kind: "LinkedField",
              name: "archive_content",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "auto_archive_feature_notice_banner",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "hidden_from_profile_notice_banner",
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
  "CometActivityLogViewOnlyHeader_storyViewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          concreteType: "ActivityLogStoryViewer",
          kind: "LinkedField",
          name: "story_viewer",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "story_audience_banner",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometActivityLogViewOnlyHeader_storyViewer",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "ActivityLogArchivePage",
            kind: "LinkedField",
            name: "activity_log_archive_page",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ActivityLogTrashPage",
            kind: "LinkedField",
            name: "activity_log_trash_page",
            plural: !1,
            selections: a,
            storageKey: null,
          },
        ],
        type: "ActivityLogActor",
        abstractKey: "__isActivityLogActor",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometActivityLogViewViewerQuery.graphql",
  [
    "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "activity_history",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "category" },
        d = { defaultValue: null, kind: "LocalArgument", name: "category_key" },
        e = { defaultValue: null, kind: "LocalArgument", name: "count" },
        f = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        g = { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        h = { defaultValue: null, kind: "LocalArgument", name: "manage_mode" },
        i = { defaultValue: null, kind: "LocalArgument", name: "month" },
        j = { defaultValue: null, kind: "LocalArgument", name: "person_id" },
        k = { defaultValue: null, kind: "LocalArgument", name: "privacy" },
        l = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        m = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "timeline_visibility",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "year" },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          concreteType: "ActivityLogPivotLink",
          kind: "LinkedField",
          name: "pivot_links",
          plural: !0,
          selections: [
            o,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "failure_label",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "move_to_archive_toast",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "move_to_archive_toast_singular",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "move_to_trash_toast",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "move_to_trash_toast_singular",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "restore_toast",
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "restore_toast_singular",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title",
          storageKey: null,
        },
        z = {
          alias: null,
          args: null,
          concreteType: "ActivityLogLeaveViewConfirmation",
          kind: "LinkedField",
          name: "leave_view_confirmation",
          plural: !1,
          selections: [
            y,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "description",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cancel_label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "confirm_label",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "navbar_title",
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          concreteType: "ActivityLogStoryViewer",
          kind: "LinkedField",
          name: "story_viewer",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "story_audience_banner",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          concreteType: "ActivityLogFilterOption",
          kind: "LinkedField",
          name: "filter_options",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "filter_key",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "filter_headline",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "filter_meta_text",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        E = [D],
        F = {
          kind: "InlineFragment",
          selections: E,
          type: "Node",
          abstractKey: "__isNode",
        },
        G = {
          kind: "Variable",
          name: "category_key",
          variableName: "category_key",
        },
        H = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "category", variableName: "category" },
          G,
          {
            fields: [
              {
                kind: "Variable",
                name: "person_id",
                variableName: "person_id",
              },
            ],
            kind: "ObjectValue",
            name: "complex_selection_filter",
          },
          { kind: "Variable", name: "first", variableName: "count" },
          { kind: "Variable", name: "month", variableName: "month" },
          { kind: "Variable", name: "privacy", variableName: "privacy" },
          {
            kind: "Variable",
            name: "timeline_visibility",
            variableName: "timeline_visibility",
          },
          { kind: "Variable", name: "year", variableName: "year" },
        ],
        I = [
          {
            kind: "Literal",
            name: "supported",
            value: "PrivacyScopeEditableRenderer",
          },
        ],
        J = [
          { kind: "Literal", name: "render_location", value: "ACTIVITY_LOG" },
        ],
        K = { kind: "Variable", name: "scale", variableName: "scale" },
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        M = {
          alias: null,
          args: [K],
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
            L,
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
        N = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "feed_story_label",
          storageKey: null,
        };
      K = [
        { kind: "Literal", name: "height", value: 60 },
        K,
        { kind: "Literal", name: "width", value: 60 },
      ];
      L = [L];
      var O = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "actors",
        plural: !0,
        selections: [
          x,
          {
            alias: null,
            args: K,
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: L,
            storageKey: null,
          },
          D,
        ],
        storageKey: null,
      };
      E = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "media",
        plural: !1,
        selections: [
          x,
          {
            alias: null,
            args: K,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: L,
            storageKey: null,
          },
          F,
          {
            kind: "InlineFragment",
            selections: E,
            type: "GenericAttachmentMedia",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: E,
            type: "MontageImage",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: E,
            type: "MontageVideo",
            abstractKey: null,
          },
        ],
        storageKey: null,
      };
      var P = [E],
        Q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subtitle",
          storageKey: null,
        },
        R = [
          {
            args: null,
            fragment: b(
              "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
            ),
            kind: "FragmentSpread",
          },
        ],
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        T = {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 1 }],
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "subattachments",
          plural: !0,
          selections: P,
          storageKey: "subattachments(first:1)",
        },
        U = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        V = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: U,
          storageKey: null,
        },
        W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        X = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "confirm_action_label",
          storageKey: null,
        },
        Y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cancel_action_label",
          storageKey: null,
        },
        aa = {
          kind: "Variable",
          name: "activity_history",
          variableName: "activity_history",
        },
        Z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "category_key",
          storageKey: null,
        },
        ba = {
          alias: null,
          args: null,
          concreteType: "ActivityLogBulkOption",
          kind: "LinkedField",
          name: "bulk_options",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ActivityLogOptionConfirmationDialog",
              kind: "LinkedField",
              name: "confirmation_dialog_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "body_content",
                  plural: !1,
                  selections: U,
                  storageKey: null,
                },
                Y,
                X,
                y,
              ],
              storageKey: null,
            },
            o,
            W,
          ],
          storageKey: null,
        },
        $ = [ba];
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g, h, i, j, k, l, m, n],
          kind: "Fragment",
          metadata: null,
          name: "CometActivityLogViewViewerQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PhotoReviewString",
              kind: "LinkedField",
              name: "photo_review_string",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometActivityLogList_photoReviewString",
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
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometActivityLogViewOnlyHeader_autoArchiveContent",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "activity_log_actor",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "ActivityLogListPage",
                      kind: "LinkedField",
                      name: "activity_log_list_page",
                      plural: !1,
                      selections: [p],
                      storageKey: null,
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometActivityLogList_pages",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometActivityLogViewOnlyHeader_storyViewer",
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "ActivityLogMultiSelect",
                      kind: "LinkedField",
                      name: "activity_log_multi_select",
                      plural: !1,
                      selections: [q, r, s, t, u, v, w],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometActivityLogList_viewer",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometActivityLogFiltersLink_viewer",
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
          argumentDefinitions: [l, e, f, c, d, g, n, i, k, m, j, h, a],
          kind: "Operation",
          name: "CometActivityLogViewViewerQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PhotoReviewString",
              kind: "LinkedField",
              name: "photo_review_string",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "photo_review",
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
                  concreteType: "AutoArchiveRoot",
                  kind: "LinkedField",
                  name: "auto_archive",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "ArchiveContent",
                      kind: "LinkedField",
                      name: "archive_content",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "auto_archive_feature_notice_banner",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "hidden_from_profile_notice_banner",
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "activity_log_actor",
                  plural: !1,
                  selections: [
                    x,
                    {
                      alias: null,
                      args: null,
                      concreteType: "ActivityLogListPage",
                      kind: "LinkedField",
                      name: "activity_log_list_page",
                      plural: !1,
                      selections: [
                        p,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "activity_history_navbar_title",
                          storageKey: null,
                        },
                        z,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "edit_privacy_option",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isActivityLogActor",
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "ActivityLogArchivePage",
                      kind: "LinkedField",
                      name: "activity_log_archive_page",
                      plural: !1,
                      selections: [A, z, B, C],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "ActivityLogTrashPage",
                      kind: "LinkedField",
                      name: "activity_log_trash_page",
                      plural: !1,
                      selections: [
                        A,
                        z,
                        B,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "max_seconds_left_for_red_metatext",
                          storageKey: null,
                        },
                        C,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "ActivityLogMultiSelect",
                      kind: "LinkedField",
                      name: "activity_log_multi_select",
                      plural: !1,
                      selections: [
                        q,
                        r,
                        s,
                        t,
                        u,
                        v,
                        w,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "manageable_categories",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    F,
                    {
                      alias: null,
                      args: H,
                      concreteType: "ActivityLogStoriesConnection",
                      kind: "LinkedField",
                      name: "activity_log_stories",
                      plural: !1,
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
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogStoriesEdge",
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
                                D,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "can_viewer_edit_post_privacy",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "PrivacyScope",
                                  kind: "LinkedField",
                                  name: "privacy_scope",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: I,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "privacy_scope_renderer",
                                      plural: !1,
                                      selections: [
                                        x,
                                        {
                                          alias: null,
                                          args: J,
                                          concreteType: "PrivacyScope",
                                          kind: "LinkedField",
                                          name: "privacy_scope_for_location",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "can_viewer_edit",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "privacy_write_id",
                                              storageKey: null,
                                            },
                                            o,
                                            M,
                                          ],
                                          storageKey:
                                            'privacy_scope_for_location(render_location:"ACTIVITY_LOG")',
                                        },
                                        D,
                                      ],
                                      storageKey:
                                        'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")',
                                    },
                                    N,
                                    o,
                                    M,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "underlying_admin_creator",
                                  plural: !1,
                                  selections: [
                                    x,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "name",
                                      storageKey: null,
                                    },
                                    D,
                                  ],
                                  storageKey: null,
                                },
                                O,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Application",
                                  kind: "LinkedField",
                                  name: "application",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: K,
                                      concreteType: "Image",
                                      kind: "LinkedField",
                                      name: "bookmark_image",
                                      plural: !1,
                                      selections: L,
                                      storageKey: null,
                                    },
                                    D,
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
                                    E,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryAttachment",
                                      kind: "LinkedField",
                                      name: "subattachments",
                                      plural: !0,
                                      selections: P,
                                      storageKey: null,
                                    },
                                    Q,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "title_with_entities",
                                      plural: !1,
                                      selections: R,
                                      storageKey: null,
                                    },
                                    S,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      fields: [
                                        {
                                          kind: "Variable",
                                          name: "fb_feed_location",
                                          variableName: "feedLocation",
                                        },
                                      ],
                                      kind: "ObjectValue",
                                      name: "feed_rendering_context",
                                    },
                                  ],
                                  concreteType: "FeedbackContext",
                                  kind: "LinkedField",
                                  name: "feedback_context",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "limit",
                                          value: 1,
                                        },
                                      ],
                                      concreteType: "Comment",
                                      kind: "LinkedField",
                                      name: "relevant_comments",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryAttachment",
                                          kind: "LinkedField",
                                          name: "attachments",
                                          plural: !0,
                                          selections: [E, T],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "TextWithEntities",
                                          kind: "LinkedField",
                                          name: "body",
                                          plural: !1,
                                          selections: U,
                                          storageKey: null,
                                        },
                                        D,
                                      ],
                                      storageKey: "relevant_comments(limit:1)",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                V,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Story",
                                  kind: "LinkedField",
                                  name: "attached_story",
                                  plural: !1,
                                  selections: [
                                    O,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryAttachment",
                                      kind: "LinkedField",
                                      name: "attachments",
                                      plural: !0,
                                      selections: [E, T, Q],
                                      storageKey: null,
                                    },
                                    V,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "PrivacyScope",
                                      kind: "LinkedField",
                                      name: "privacy_scope",
                                      plural: !1,
                                      selections: [
                                        N,
                                        o,
                                        M,
                                        {
                                          alias: null,
                                          args: I,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "privacy_scope_renderer",
                                          plural: !1,
                                          selections: [
                                            x,
                                            {
                                              alias: null,
                                              args: J,
                                              concreteType: "PrivacyScope",
                                              kind: "LinkedField",
                                              name: "privacy_scope_for_location",
                                              plural: !1,
                                              selections: [o, M],
                                              storageKey:
                                                'privacy_scope_for_location(render_location:"ACTIVITY_LOG")',
                                            },
                                            D,
                                          ],
                                          storageKey:
                                            'privacy_scope_renderer(supported:"PrivacyScopeEditableRenderer")',
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    D,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "summary",
                                  plural: !1,
                                  selections: R,
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "ArchiveState",
                                  kind: "LinkedField",
                                  name: "archive_state",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "move_to_archive_time",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TrashState",
                                  kind: "LinkedField",
                                  name: "trash_state",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "remaining_ttl",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "creation_time",
                                  storageKey: null,
                                },
                                S,
                                x,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "ActivityLogOption",
                              kind: "LinkedField",
                              name: "options",
                              plural: !0,
                              selections: [
                                x,
                                W,
                                o,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "ActivityLogOptionConfirmationDialog",
                                  kind: "LinkedField",
                                  name: "confirmation_dialog_info",
                                  plural: !1,
                                  selections: [
                                    y,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "body_content",
                                      plural: !1,
                                      selections: R,
                                      storageKey: null,
                                    },
                                    X,
                                    Y,
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
                              name: "selected_visibility",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "visibility_options",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "ent_fbid",
                              storageKey: null,
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
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: H,
                      filters: [
                        "category",
                        "category_key",
                        "year",
                        "month",
                        "privacy",
                        "timeline_visibility",
                        "complex_selection_filter",
                      ],
                      handle: "connection",
                      key: "CometActivityLogStoriesList_actor_activity_log_stories",
                      kind: "LinkedHandle",
                      name: "activity_log_stories",
                    },
                    {
                      alias: null,
                      args: [
                        aa,
                        {
                          kind: "Variable",
                          name: "manage_mode",
                          variableName: "manage_mode",
                        },
                      ],
                      concreteType: "ActivityLogCategoryInfo",
                      kind: "LinkedField",
                      name: "activity_log_categories",
                      plural: !0,
                      selections: [
                        Z,
                        o,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "icon_name",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogCategoryInfo",
                          kind: "LinkedField",
                          name: "subcategories",
                          plural: !0,
                          selections: [Z, o, C],
                          storageKey: null,
                        },
                        C,
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
                          concreteType: "TimelineSubfilterPrivacyOptionInfo",
                          kind: "LinkedField",
                          name: "privacy_filters",
                          plural: !0,
                          selections: [
                            o,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "privacy",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "TimelineSubfilterHiddenOptionInfo",
                          kind: "LinkedField",
                          name: "timeline_visibility",
                          plural: !0,
                          selections: [
                            o,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "timeline_visibility",
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
                      concreteType: "ActivityLogFilters",
                      kind: "LinkedField",
                      name: "activity_log_filters",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogPersonFilter",
                          kind: "LinkedField",
                          name: "person_filter",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "search",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogFilterOptionBottomSheet",
                          kind: "LinkedField",
                          name: "filter_options_bottomsheet",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "filter_option_bottomsheet_header",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "clear_filters_label",
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
                      name: "join_time",
                      storageKey: null,
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
                    x,
                    D,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogMultiSelect",
                          kind: "LinkedField",
                          name: "activity_log_multi_select",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "select_all_label",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "deselect_all_label",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogArchivePage",
                          kind: "LinkedField",
                          name: "activity_log_archive_page",
                          plural: !1,
                          selections: $,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "ActivityLogTrashPage",
                          kind: "LinkedField",
                          name: "activity_log_trash_page",
                          plural: !1,
                          selections: $,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [G],
                          concreteType: "ActivityLogManageActivityPage",
                          kind: "LinkedField",
                          name: "activity_log_manage_activity_page",
                          plural: !1,
                          selections: $,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [aa],
                          concreteType: "ActivityLogCategoryInfo",
                          kind: "LinkedField",
                          name: "activity_log_categories",
                          plural: !0,
                          selections: [
                            Z,
                            {
                              alias: null,
                              args: null,
                              concreteType: "ActivityLogCategoryInfo",
                              kind: "LinkedField",
                              name: "subcategories",
                              plural: !0,
                              selections: [Z, ba],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      type: "ActivityLogActor",
                      abstractKey: "__isActivityLogActor",
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "should_use_page_rename",
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
                  name: "eligible_for_photo_review",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "ActivityLogContentStrings",
                  kind: "LinkedField",
                  name: "activity_log_content_strings",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "review_buttons_title",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "timeline_review_string",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "tag_review_string",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "activity_filter_string",
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
          id: "4315317995247245",
          metadata: {},
          name: "CometActivityLogViewViewerQuery",
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
  "createCometActivityLogSections_edge.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "createCometActivityLogSections_edge",
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometActivityLogFilters_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "category_key",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "activity_history" },
          { kind: "RootArgument", name: "manage_mode" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "useCometActivityLogFilters_viewer",
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
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "activity_log_actor",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "activity_history",
                    variableName: "activity_history",
                  },
                  {
                    kind: "Variable",
                    name: "manage_mode",
                    variableName: "manage_mode",
                  },
                ],
                concreteType: "ActivityLogCategoryInfo",
                kind: "LinkedField",
                name: "activity_log_categories",
                plural: !0,
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "category",
                    storageKey: null,
                  },
                  b,
                  {
                    alias: null,
                    args: null,
                    concreteType: "ActivityLogCategoryInfo",
                    kind: "LinkedField",
                    name: "subcategories",
                    plural: !0,
                    selections: [b, a],
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
    })();
    e.exports = a;
  },
  null
);
__d(
  "useCometActivityLogPersonFilterDataSourceQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "queryParams" },
        ],
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
          concreteType: "ActivityLogFilters",
          kind: "LinkedField",
          name: "activity_log_filters",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ActivityLogPersonFilter",
              kind: "LinkedField",
              name: "person_filter",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Variable",
                      name: "query_params",
                      variableName: "queryParams",
                    },
                  ],
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "results",
                  plural: !0,
                  selections: [
                    b,
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
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useCometActivityLogPersonFilterDataSourceQuery",
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
                  name: "activity_log_actor",
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
          name: "useCometActivityLogPersonFilterDataSourceQuery",
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
                  name: "activity_log_actor",
                  plural: !1,
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
                      kind: "InlineFragment",
                      selections: [b],
                      type: "Node",
                      abstractKey: "__isNode",
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
          id: "5233795326693254",
          metadata: {},
          name: "useCometActivityLogPersonFilterDataSourceQuery",
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
  "CometActivityDeleteVoiceInteractionHistoryMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType:
              "ActivityLogDeleteVoiceInteractionHistoryMutationResponse",
            kind: "LinkedField",
            name: "xfb_asst_voice_activity_delete_all_fb_activity_log",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "portal_deletion_successful",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "stella_deletion_successful",
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
          name: "CometActivityDeleteVoiceInteractionHistoryMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometActivityDeleteVoiceInteractionHistoryMutation",
          selections: b,
        },
        params: {
          id: "6105447892806633",
          metadata: {},
          name: "CometActivityDeleteVoiceInteractionHistoryMutation",
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
  "CometActivityLogBulkActionMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "ActivityLogBulkActionResponsePayload",
            kind: "LinkedField",
            name: "activity_log_bulk_action",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "BulkControlStatus",
                kind: "LinkedField",
                name: "status_detail",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "pending",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "completed",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "skipped",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "failed",
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
          name: "CometActivityLogBulkActionMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometActivityLogBulkActionMutation",
          selections: b,
        },
        params: {
          id: "3928584573870595",
          metadata: {},
          name: "CometActivityLogBulkActionMutation",
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
  "CometActivityLogClearSearchHistoryMutation.graphql",
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
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometActivityLogClearSearchHistoryMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "ClearSearchHistoryResponsePayload",
              kind: "LinkedField",
              name: "clear_search_history",
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
          name: "CometActivityLogClearSearchHistoryMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "ClearSearchHistoryResponsePayload",
              kind: "LinkedField",
              name: "clear_search_history",
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
          ],
        },
        params: {
          id: "2827221463973256",
          metadata: {},
          name: "CometActivityLogClearSearchHistoryMutation",
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
  "CometActivityLogDeleteWatchHistoryMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XFBWatchHistoryDeletionMutationResponse",
            kind: "LinkedField",
            name: "xfb_activity_log_delete_watch_history",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "deletion_initiated_successfully",
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
          name: "CometActivityLogDeleteWatchHistoryMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometActivityLogDeleteWatchHistoryMutation",
          selections: b,
        },
        params: {
          id: "6168879386455457",
          metadata: {},
          name: "CometActivityLogDeleteWatchHistoryMutation",
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
  "ActivityLogLegacyList.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.children;
      return h.jsx("div", {
        children: h.jsx("ul", {
          className: "hcukyx3x tvmbv18p cxmmr5t8 aahdfvyu",
          children: h.Children.map(a, function (a) {
            return a !== null ? h.jsx("li", { children: a }) : null;
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
  "CometActivityLogActivityHistoryLink.react",
  [
    "ix",
    "CometActivityLogActivityHistoryLink_list.graphql",
    "CometActivityLogContextActions",
    "CometActivityLogUtils",
    "CometRelay",
    "PrivacySettingsStrings",
    "TetraAccessoryListCell.react",
    "fbicon",
    "qex",
    "react",
    "useCometActivityLogRouter",
    "useCometConfirmationDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.category,
        f = c("useCometConfirmationDialog")(),
        g = f[0];
      f = f[1];
      var k = c("useCometActivityLogRouter")(),
        l = k.go,
        m = d("CometActivityLogUtils").useCometActivityLogStore(),
        n = d("CometActivityLogUtils").useCometActivityLogDispatcher();
      k = d("CometActivityLogUtils").getStoreKeyForCategory(e);
      e = d("CometActivityLogUtils").useStoreSelectedItems(k).size;
      k = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometActivityLogActivityHistoryLink_list.graphql")),
        a.listData
      );
      a = (a = c("qex")._("415")) != null ? a : !1;
      if (!a || !m.shouldLoadLandingPage) return null;
      a = k == null ? void 0 : k.leave_view_confirmation;
      var o = function () {
        n(
          d("CometActivityLogContextActions").setCategoryLabel(
            d("PrivacySettingsStrings").getActivityLogString().toLocaleString()
          )
        ),
          l({
            activity_history: !0,
            category: d("CometActivityLogUtils").getCategoryKeyForAll(),
            clearStores: !0,
            month: m.month,
            personID: m.selectedPersonID,
            personName: m.selectedPersonName,
            shouldLoadLandingPage: !1,
            year: m.year,
          });
      };
      e = d("CometActivityLogUtils").showNumItemsConfirmationDialog(e, a, o, g);
      return j.jsx(c("TetraAccessoryListCell.react"), {
        addOnPrimary: {
          icon: d("fbicon")._(h("486354"), 20),
          size: 36,
          type: "contained-icon",
        },
        headline: k == null ? void 0 : k.activity_history_navbar_title,
        onPress: e,
        ref: a != null ? f : null,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogAllActivityLink.react",
  [
    "ix",
    "CometActivityLogAllActivityLink_list.graphql",
    "CometActivityLogUtils",
    "CometRelay",
    "PrivacySettingsStrings",
    "TetraAccessoryListCell.react",
    "fbicon",
    "react",
    "useCometActivityLogRouter",
    "useCometConfirmationDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.category,
        f = c("useCometConfirmationDialog")(),
        g = f[0];
      f = f[1];
      var k = c("useCometActivityLogRouter")(),
        l = k.go,
        m = d("CometActivityLogUtils").useCometActivityLogStore();
      k = d("CometActivityLogUtils").getStoreKeyForCategory(e);
      k = d("CometActivityLogUtils").useStoreSelectedItems(k).size;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometActivityLogAllActivityLink_list.graphql")),
        a.listData
      );
      if (!d("CometActivityLogUtils").isOnManageMode(e)) return null;
      a = a == null ? void 0 : a.leave_view_confirmation;
      var n = function () {
        l({
          activity_history: !1,
          category: d("CometActivityLogUtils").getCategoryKeyForAll(),
          clearStores: !0,
          month: m.month,
          personID: m.selectedPersonID,
          personName: m.selectedPersonName,
          shouldLoadLandingPage: d(
            "CometActivityLogUtils"
          ).isCategoryKeyArchiveOrTrash(e),
          year: m.year,
        });
      };
      k = d("CometActivityLogUtils").showNumItemsConfirmationDialog(k, a, n, g);
      return j.jsx(c("TetraAccessoryListCell.react"), {
        addOnPrimary: {
          icon: d("fbicon")._(h("486354"), 20),
          size: 36,
          type: "contained-icon",
        },
        headline: d("PrivacySettingsStrings").getActivityLogString(),
        onPress: k,
        ref: a != null ? f : null,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogArchiveLink.react",
  [
    "ix",
    "CometActivityLogArchiveLink_archive.graphql",
    "CometActivityLogUtils",
    "CometRelay",
    "TetraAccessoryListCell.react",
    "fbicon",
    "react",
    "useCometActivityLogRouter",
    "useCometConfirmationDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.category,
        f = c("useCometConfirmationDialog")(),
        g = f[0];
      f = f[1];
      var k = c("useCometActivityLogRouter")(),
        l = k.go,
        m = d("CometActivityLogUtils").useCometActivityLogStore();
      k = d("CometActivityLogUtils").getStoreKeyForCategory(e);
      var n = m.userId;
      k = d("CometActivityLogUtils").useStoreSelectedItems(k).size;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometActivityLogArchiveLink_archive.graphql")),
        a.archiveData
      );
      if (
        e === d("CometActivityLogUtils").getCategoryKeyForArchive() ||
        n == null
      )
        return null;
      e = a == null ? void 0 : a.leave_view_confirmation;
      n = function () {
        l({
          activity_history: !1,
          category: d("CometActivityLogUtils").getCategoryKeyForArchive(),
          clearStores: !0,
          month: m.month,
          personID: m.selectedPersonID,
          personName: m.selectedPersonName,
          shouldLoadLandingPage: !1,
          year: m.year,
        });
      };
      k = d("CometActivityLogUtils").showNumItemsConfirmationDialog(k, e, n, g);
      return j.jsx(c("TetraAccessoryListCell.react"), {
        addOnPrimary: {
          icon: d("fbicon")._(h("637461"), 20),
          size: 36,
          type: "contained-icon",
        },
        headline: a == null ? void 0 : a.navbar_title,
        onPress: k,
        ref: e != null ? f : null,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogBanner.react",
  [
    "CometRow.react",
    "CometRowItem.react",
    "CometTheme.react",
    "TetraText.react",
    "react",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = c("useCurrentDisplayMode")();
      b = b === "dark";
      return h.jsx(c("CometTheme.react"), {
        theme: b ? "dark" : "light",
        xstyle: a.xstyle,
        children: h.jsx(c("CometRow.react"), {
          align: "center",
          paddingHorizontal: 8,
          paddingVertical: 8,
          children: h.jsx(c("CometRowItem.react"), {
            children: h.jsx(c("TetraText.react"), {
              type: "body3",
              children: a.text,
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
  "CometActivityLogBulkActionReauthDialog.entrypoint",
  [
    "CometActivityLogBulkActionReauthDialogQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            viewerQueryReference: {
              parameters: b(
                "CometActivityLogBulkActionReauthDialogQuery$Parameters"
              ),
              variables: {},
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometActivityLogBulkActionReauthDialog.react"
      ).__setRef("CometActivityLogBulkActionReauthDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ClearHistoryErrorCodes",
  ["errorCode"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      return (a == null ? void 0 : a.code) === 2136001;
    }
    g.isSecuredActionError = a;
  },
  98
);
__d(
  "CometActivityLogBulkActionMutation",
  ["CometActivityLogBulkActionMutation.graphql", "CometRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometActivityLogBulkActionMutation.graphql"));
    function a(a, b, c) {
      var e = function (a) {
        for (
          var c = b.storyIDs,
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= c.length) break;
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          a["delete"](f);
        }
      };
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: c && c.onSuccess,
        onError: c && c.onFailure,
        updater: e,
        variables: {
          input: {
            action: b.action,
            category_key: b.categoryKey,
            story_ids: b.storyIDs,
          },
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "useCometActivityLogOnPressForBulkAction",
  [
    "ActivityLogMenuOption",
    "ClearHistoryErrorCodes",
    "CometActivityLogBulkActionMutation",
    "CometActivityLogContextActions",
    "CometActivityLogUtils",
    "CometRelay",
    "CometRelayErrorHandling",
    "ContentAccessAndControlFalcoEvent",
    "ManageActivityFalcoEvent",
    "XCometActivityLogControllerRouteBuilder",
    "getJSEnumSafe",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      var e = d("CometActivityLogUtils").getSingleMenuOptionFromBulkAction(a);
      e != null &&
        c("ContentAccessAndControlFalcoEvent").log(function () {
          return {
            control: c("getJSEnumSafe")(c("ActivityLogMenuOption"), e),
            event: "content_access_and_control_click_begin",
            extra_data: { category_key: b },
            is_access: !1,
            is_bulk: !0,
            is_control: !0,
            surface: "activity_log",
          };
        });
    }
    function i(a) {
      switch (a) {
        case "MOVE_TO_ARCHIVE":
          return "ARCHIVED";
        case "MOVE_TO_TRASH":
          return "TRASH";
        case "RESTORE_FROM_ARCHIVE":
        case "RESTORE_FROM_TRASH":
          return "ALL";
        default:
          return null;
      }
    }
    function j(a) {
      switch (a) {
        case "MOVE_TO_ARCHIVE":
          return "ARCHIVE";
        case "MOVE_TO_TRASH":
          return "TRASH";
        case "RESTORE_FROM_ARCHIVE":
        case "RESTORE_FROM_TRASH":
          return "LOG";
        default:
          return null;
      }
    }
    function a(a, b, e, f, g) {
      var k = new Map(),
        l = d("CometRelay").useRelayEnvironment(),
        m = d("CometActivityLogUtils").useCometActivityLogStore(),
        n = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        o = d("CometActivityLogUtils").getStoreKeyForCategory(a),
        p = d("CometActivityLogUtils").useStoreSelectedItems(o);
      if (b == null) return k;
      b.forEach(function (b) {
        if (b == null) return;
        var q = { action: b, categoryKey: a, storyIDs: Array.from(p) },
          r = function (k) {
            var p = {
                onFailure: function (a) {
                  d("CometRelayErrorHandling").markErrorAsHandled(a),
                    d("ClearHistoryErrorCodes").isSecuredActionError(a) &&
                      k({
                        onClose: function () {
                          n(
                            d(
                              "CometActivityLogContextActions"
                            ).setIsBulkActionInProgress(!1)
                          );
                        },
                        onSubmit: function () {
                          n(
                            d(
                              "CometActivityLogContextActions"
                            ).setIsBulkActionInProgress(!1)
                          );
                        },
                      }),
                    n(
                      d(
                        "CometActivityLogContextActions"
                      ).setIsBulkActionInProgress(!1)
                    ),
                    g == null ? void 0 : g();
                },
                onSuccess: function () {
                  n(
                    d(
                      "CometActivityLogContextActions"
                    ).setIsBulkActionInProgress(!1)
                  );
                  e == null ? void 0 : e(!1);
                  var a = i(b);
                  n(d("CometActivityLogContextActions").clearSelectedItems(o));
                  f == null ? void 0 : f(j(b), !0);
                  a != null &&
                    (n(
                      d("CometActivityLogContextActions").setHasNewItems({
                        hasNewItems: !0,
                        storeKey: o,
                      })
                    ),
                    c("XCometActivityLogControllerRouteBuilder").buildURL({
                      lastRefreshTime: d(
                        "CometActivityLogUtils"
                      ).currentActivityLogStore(a, m).lastRefreshTime,
                      vanity: m.userId,
                    }));
                },
              },
              r = d("CometActivityLogUtils").getSourceNameForBulkActionKey(b);
            r != null &&
              c("ManageActivityFalcoEvent").log(function () {
                return { event: "ma_click", source: r };
              });
            n(
              d("CometActivityLogContextActions").setIsBulkActionInProgress(!0)
            );
            h(b, a);
            d("CometActivityLogBulkActionMutation").commit(l, q, p);
          };
        k.set(b, r);
      });
      return k;
    }
    g.useCometActivityLogOnPressForBulkAction = a;
  },
  98
);
__d(
  "CometActivityLogBulkActionButtons.react",
  [
    "ix",
    "ActivityLogMenuOption",
    "CometActivityLogBulkActionButtons_actor.graphql",
    "CometActivityLogBulkActionReauthDialog.entrypoint",
    "CometActivityLogUtils",
    "CometRelay",
    "ContentAccessAndControlFalcoEvent",
    "ManageActivityFalcoEvent",
    "TetraButton.react",
    "fbicon",
    "getJSEnumSafe",
    "qex",
    "react",
    "useCometActivityLogOnPressForBulkAction",
    "useCometConfirmationDialog",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useEffect;
    function l(a) {
      switch (a) {
        case "DELETE":
        case "MOVE_TO_TRASH":
          return d("fbicon")._(h("483825"), 16);
        case "MOVE_TO_ARCHIVE":
          return d("fbicon")._(h("485302"), 16);
        case "RESTORE_FROM_ARCHIVE":
        case "RESTORE_FROM_TRASH":
          return d("fbicon")._(h("685851"), 16);
        case "UNTAG":
        case "REMOVE_INTERACTION":
          return d("fbicon")._(h("491580"), 16);
        default:
          return null;
      }
    }
    function a(a) {
      var e = d("CometActivityLogUtils").useCometActivityLogStore(),
        f = a.categoryKey,
        g = a.disabled,
        h = a.setIsAllSelected,
        m = a.setMovingToastMessage,
        n = a.showFailureToast,
        o = c("useCometConfirmationDialog")(),
        p = o[0],
        q = o[1];
      o = c("useCometEntryPointDialog")(
        c("CometActivityLogBulkActionReauthDialog.entrypoint"),
        {}
      );
      var r = o[0],
        s = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometActivityLogBulkActionButtons_actor.graphql")),
          a.actor
        );
      o = function () {
        if (f === d("CometActivityLogUtils").getCategoryKeyForArchive()) {
          var a;
          return s == null
            ? void 0
            : (a = s.activity_log_archive_page) == null
            ? void 0
            : a.bulk_options;
        }
        if (f === d("CometActivityLogUtils").getCategoryKeyForTrash()) {
          return s == null
            ? void 0
            : (a = s.activity_log_trash_page) == null
            ? void 0
            : a.bulk_options;
        }
        if (
          f === d("CometActivityLogUtils").getCategoryKeyForManage() ||
          f ===
            d("CometActivityLogUtils").getCategoryKeyForManageInteractions() ||
          f === d("CometActivityLogUtils").getCategoryKeyForManageTags()
        ) {
          return s == null
            ? void 0
            : (a = s.activity_log_manage_activity_page) == null
            ? void 0
            : a.bulk_options;
        }
        a = (a = c("qex")._("415")) != null ? a : !1;
        if (!a) return null;
        a =
          s == null
            ? void 0
            : s.activity_log_categories.find(function (a) {
                return a.category_key === e.parentCategory;
              });
        a = a == null ? void 0 : a.subcategories;
        return a != null
          ? a == null
            ? void 0
            : (a = a.find(function (a) {
                return a.category_key === e.category;
              })) == null
            ? void 0
            : a.bulk_options
          : null;
      };
      var t = o();
      k(
        function () {
          t == null
            ? void 0
            : t.forEach(function (a) {
                a = a.key;
                if (a == null) return;
                var b = d(
                  "CometActivityLogUtils"
                ).getSingleMenuOptionFromBulkAction(a);
                c("ContentAccessAndControlFalcoEvent").log(function () {
                  return {
                    control: c("getJSEnumSafe")(c("ActivityLogMenuOption"), b),
                    event: "content_access_and_control_impression",
                    is_access: !1,
                    is_bulk: !0,
                    is_control: !0,
                    surface: "activity_log",
                  };
                });
              });
        },
        [t]
      );
      var u = d(
        "useCometActivityLogOnPressForBulkAction"
      ).useCometActivityLogOnPressForBulkAction(
        f,
        t == null
          ? void 0
          : t.map(function (a) {
              return a.key;
            }),
        h,
        m,
        n
      );
      a =
        t == null
          ? void 0
          : t.map(function (a, b) {
              var e = a.label,
                f = a.key,
                h = a.confirmation_dialog_info;
              if (e == null || f == null) return null;
              e = l(f);
              if (e == null) return null;
              var i = u.get(f);
              if (i == null) return null;
              var k = d("CometActivityLogUtils").getSourceNameForBulkActionKey(
                f
              );
              k != null &&
                c("ManageActivityFalcoEvent").log(function () {
                  return { event: "ma_impression", source: k };
                });
              var m = function () {
                if (
                  h != null &&
                  h.cancel_action_label != null &&
                  h.confirm_action_label != null &&
                  h.title != null
                ) {
                  var a;
                  p(
                    {
                      body: (a = h.body_content) == null ? void 0 : a.text,
                      cancel: h.cancel_action_label,
                      confirm: h.confirm_action_label,
                      title: h.title,
                    },
                    function () {
                      i(r);
                    }
                  );
                } else i(r);
              };
              f = "comet_activity_log_bulk_action_" + f.toLowerCase();
              return j.jsx(
                "div",
                {
                  className: "tw6a2znq d1544ag0",
                  children: j.jsx(
                    c("TetraButton.react"),
                    {
                      disabled: g,
                      icon: e,
                      label: (f = a.label) != null ? f : "",
                      onPress: m,
                      ref: h != null ? q : null,
                      testid: void 0,
                      type: "secondary",
                    },
                    a.key
                  ),
                },
                b
              );
            });
      return j.jsx("div", { className: "btwxx1t3 j83agx80", children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CometActivityLogBulkActionButtons = a;
  },
  98
);
__d(
  "CometActivityLogClearSearchHistoryMutation",
  [
    "CometActivityLogClearSearchHistoryMutation.graphql",
    "CometActivityLogConstants",
    "CometRelay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometActivityLogClearSearchHistoryMutation.graphql"));
    function a(a, b, c) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: c && c.onSuccess,
        onError: c && c.onFailure,
        variables: {
          input: {
            action: "DELETE_ALL",
            category_key: b,
            entry_point: d("CometActivityLogConstants").ENTRY_POINT,
          },
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometActivityLogDeleteWatchHistoryMutation",
  ["CometActivityLogDeleteWatchHistoryMutation.graphql", "CometRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometActivityLogDeleteWatchHistoryMutation.graphql"));
    function a(a, b) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: b && b.onSuccess,
        onError: b && b.onFailure,
        variables: { input: {} },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometActivityLogClearVideoWatchHistoryButton.react",
  [
    "fbt",
    "CometActivityLogDeleteWatchHistoryMutation",
    "CometPressable.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "ContentAccessAndControlFalcoEvent",
    "TetraText.react",
    "react",
    "stylex",
    "useCometConfirmationDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        rowItemPadding: { paddingStart: "a8nywdso" },
        rowWrapper: { marginTop: "wovflp6s" },
      };
    function k(a) {
      c("ContentAccessAndControlFalcoEvent").log(function () {
        return {
          control: "delete",
          event: "content_access_and_control_click_begin",
          extra_data: { category_key: a },
          is_access: !1,
          is_bulk: !0,
          is_control: !0,
          surface: "activity_log",
        };
      });
    }
    function a(a) {
      var b = a.category;
      a = c("useCometConfirmationDialog")();
      var e = a[0],
        f = d("CometRelay").useRelayEnvironment();
      if (b !== "VIDEOWATCH") return null;
      var g = function () {
        k(b), d("CometActivityLogDeleteWatchHistoryMutation").commit(f);
      };
      return i.jsx("div", {
        className: c("stylex")(j.rowWrapper),
        children: i.jsx(c("CometRow.react"), {
          paddingTop: 0,
          verticalAlign: "center",
          children: i.jsx(c("CometRowItem.react"), {
            xstyle: j.rowItemPadding,
            children: i.jsx(c("CometPressable.react"), {
              display: "inline",
              onPress: function () {
                e(
                  {
                    body: h._(
                      "Remember, only you can see your Video Watch History."
                    ),
                    cancel: h._("Cancel"),
                    confirm: h._("Clear Video Watch History"),
                    title: h._("Are you sure?"),
                  },
                  g
                );
              },
              overlayDisabled: !0,
              children: i.jsx(c("TetraText.react"), {
                color: "blueLink",
                type: "body3",
                children: h._("Clear Video Watch History"),
              }),
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
  "CometActivityDeleteVoiceInteractionHistoryMutation",
  ["CometActivityDeleteVoiceInteractionHistoryMutation.graphql", "CometRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              "CometActivityDeleteVoiceInteractionHistoryMutation.graphql"
            ));
    function a(a, b) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: b && b.onSuccess,
        onError: b && b.onFailure,
        variables: { input: {} },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometActivityLogClearVoiceHistoryButton.react",
  [
    "fbt",
    "CometActivityDeleteVoiceInteractionHistoryMutation",
    "CometPressable.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometTransientDialogProvider.react",
    "ContentAccessAndControlFalcoEvent",
    "FacebookAssistantPrivacyActionsEventFalcoEvent",
    "TetraText.react",
    "react",
    "stylex",
    "useCometConfirmationDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        rowItemPadding: { paddingStart: "a8nywdso" },
        rowWrapper: { marginTop: "wovflp6s" },
      };
    function k(a) {
      c("ContentAccessAndControlFalcoEvent").log(function () {
        return {
          control: "delete",
          event: "content_access_and_control_click_begin",
          extra_data: { category_key: a },
          is_access: !1,
          is_bulk: !0,
          is_control: !0,
          surface: "activity_log",
        };
      });
    }
    function a(a) {
      var b = a.category;
      a = c("useCometConfirmationDialog")();
      var e = a[0],
        f = d("CometRelay").useRelayEnvironment();
      if (b !== "ASSISTANTHISTORY") return null;
      var g = function () {
        k(b), d("CometActivityDeleteVoiceInteractionHistoryMutation").commit(f);
      };
      return i.jsx("div", {
        className: c("stylex")(j.rowWrapper),
        children: i.jsx(c("CometRow.react"), {
          paddingTop: 0,
          verticalAlign: "center",
          children: i.jsx(c("CometRowItem.react"), {
            xstyle: j.rowItemPadding,
            children: i.jsx(c("CometTransientDialogProvider.react"), {
              children: i.jsx(c("CometPressable.react"), {
                display: "inline",
                onPress: function () {
                  c("FacebookAssistantPrivacyActionsEventFalcoEvent").log(
                    function () {
                      return {
                        event: "click_delete_all_history_button",
                        status: "attempted",
                        success: !0,
                      };
                    }
                  ),
                    e(
                      {
                        body: h._(
                          "All your voice interactions will be permanently deleted. The deletion process will continue even if you leave this page or close this window."
                        ),
                        cancel: h._("Cancel"),
                        confirm: h._("Delete All"),
                        title: h._("Are you sure?"),
                      },
                      g
                    );
                },
                overlayDisabled: !0,
                children: i.jsx(c("TetraText.react"), {
                  color: "blueLink",
                  type: "body3",
                  children: h._("Delete All Voice Interactions"),
                }),
              }),
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
  "CometActivityLogCategoryHeader.react",
  [
    "fbt",
    "ix",
    "CometActivityLogClearSearchHistoryMutation",
    "CometActivityLogClearVideoWatchHistoryButton.react",
    "CometActivityLogClearVoiceHistoryButton.react",
    "CometActivityLogUtils",
    "CometPressable.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometTooltip.react",
    "PrivacySettingsStrings",
    "TetraIcon.react",
    "TetraText.react",
    "XCometSettingsControllerRouteBuilder",
    "emptyFunction",
    "fbicon",
    "gkx",
    "react",
    "stylex",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        clearButtonPadding: {
          paddingBottom: "qt6c0cv9",
          paddingTop: "l29c1vbm",
        },
        headerSectionSpacing: {
          marginTop: "n1l5q3vz",
          marginEnd: "tvfksri0",
          marginBottom: "oygrvhab",
          marginStart: "gu00c43d",
          minHeight: "rz7trki1",
          position: "l9j0dhe7",
          zIndex: "tkr6xdv7",
        },
        iconItemPadding: { paddingBottom: "e5nlhep0", paddingTop: "discj3wi" },
        itemPadding: { paddingStart: "a8nywdso", paddingTop: "discj3wi" },
        newItemPadding: { paddingBottom: "jbae33se" },
        tooltipBottomSpacing: { paddingBottom: "r8blr3vg" },
        tooltipRightSpacing: { marginEnd: "oi9244e8" },
      };
    function a(a) {
      var b = d("CometActivityLogUtils").useCometActivityLogStore(),
        e = b.category;
      b = b.categoryLabel;
      var f = c("useCometRouterDispatcher")(),
        g = d("CometRelay").useRelayEnvironment();
      if (e === "ACTIVITY_LOG" || e === "ALL" || b == null) return null;
      var l = function (a) {
          a = c("XCometSettingsControllerRouteBuilder").buildURL({ tab: a });
          if (f == null || a == null) return;
          f.go(a, {});
        },
        m = function (a) {
          if (a === "TAGSBYOTHERSCLUSTER")
            return j.jsx("span", {
              testid: void 0,
              children: j.jsx(c("TetraIcon.react"), {
                "aria-label":
                  'Button for displaying the menu for the activity log category "Posts You\'re Tagged In" settings options',
                color: "secondary",
                icon: d("fbicon")._(i("497567"), 20),
                onPress: function () {
                  return l("notifications");
                },
              }),
            });
          return a === "FRIENDS"
            ? j.jsx("span", {
                testid: void 0,
                children: j.jsx(c("TetraIcon.react"), {
                  "aria-label":
                    'Button for displaying the menu for the activity log category "Added Friends" settings options',
                  color: "secondary",
                  icon: d("fbicon")._(i("497567"), 20),
                  onPress: function () {
                    return l("privacy");
                  },
                }),
              })
            : null;
        },
        n = function (a) {
          var b = function (a, b) {
            return j.jsx("span", {
              className: c("stylex")(
                b && k.tooltipRightSpacing,
                k.tooltipBottomSpacing
              ),
              testid: void 0,
              children: j.jsx(c("CometTooltip.react"), {
                align: "middle",
                position: "above",
                tooltip: a,
                children: j.jsx(c("TetraIcon.react"), {
                  color: "secondary",
                  icon: d("fbicon")._(i("496957"), 16),
                }),
              }),
            });
          };
          if (a === "FOLLOWCLUSTER") {
            var e = d(
              "PrivacySettingsStrings"
            ).getSubscribedToPrivacySettingsText();
            return b(e, !1);
          }
          if (a === "FRIENDS") {
            e = d("PrivacySettingsStrings").getFriendReminderText();
            return b(e, !0);
          }
          return null;
        },
        o = function () {
          d("CometActivityLogClearSearchHistoryMutation").commit(g, e, {
            onFailure: c("emptyFunction"),
            onSuccess: a.onSearchClear,
          });
        },
        p = c("gkx")("1639147");
      return j.jsxs("div", {
        className: c("stylex")(k.headerSectionSpacing),
        children: [
          j.jsxs(c("CometRow.react"), {
            paddingTop: 0,
            verticalAlign: "center",
            children: [
              j.jsx(c("CometRowItem.react"), {
                xstyle: k.itemPadding,
                children: j.jsx("div", {
                  className: c("stylex")(p && k.newItemPadding),
                  testid: void 0,
                  children: j.jsx(c("TetraText.react"), {
                    type: "headlineEmphasized2",
                    children: b,
                  }),
                }),
              }),
              j.jsx(c("CometRowItem.react"), {
                xstyle: k.iconItemPadding,
                children: j.jsxs("div", { children: [n(e), m(e)] }),
              }),
              e !== "SEARCH"
                ? null
                : j.jsx(c("CometRowItem.react"), {
                    verticalAlign: "bottom",
                    xstyle: k.clearButtonPadding,
                    children: j.jsx("span", {
                      testid: void 0,
                      children: j.jsx(c("CometPressable.react"), {
                        display: "inline",
                        onPress: function () {
                          return o();
                        },
                        overlayDisabled: !0,
                        children: j.jsx(c("TetraText.react"), {
                          color: "blueLink",
                          type: "body3",
                          children: h._("Clear Searches"),
                        }),
                      }),
                    }),
                  }),
            ],
          }),
          j.jsx(c("CometActivityLogClearVideoWatchHistoryButton.react"), {
            category: e,
            onReload: a.onSearchClear,
          }),
          j.jsx(c("CometActivityLogClearVoiceHistoryButton.react"), {
            category: e,
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
  "CometActivityLogCategoryHeaderWithButtons.react",
  [
    "fbt",
    "ix",
    "CometActivityLogClearSearchHistoryMutation",
    "CometActivityLogClearVideoWatchHistoryButton.react",
    "CometActivityLogClearVoiceHistoryButton.react",
    "CometActivityLogUtils",
    "CometPressable.react",
    "CometRelay",
    "CometTooltip.react",
    "ContentAccessAndControlFalcoEvent",
    "PrivacySettingsStrings",
    "TetraIcon.react",
    "TetraText.react",
    "XCometSettingsControllerRouteBuilder",
    "emptyFunction",
    "fbicon",
    "react",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function k(a) {
      c("ContentAccessAndControlFalcoEvent").log(function () {
        return {
          control: "delete",
          event: "content_access_and_control_click_begin",
          extra_data: { category_key: a },
          is_access: !1,
          is_bulk: !0,
          is_control: !0,
          surface: "activity_log",
        };
      });
    }
    function a(a) {
      var b = d("CometActivityLogUtils").useCometActivityLogStore(),
        e = a.categoryKey;
      b = b.categoryLabel;
      var f = c("useCometRouterDispatcher")(),
        g = d("CometRelay").useRelayEnvironment();
      if (
        e === d("CometActivityLogUtils").getCategoryKeyForArchive() ||
        e === d("CometActivityLogUtils").getCategoryKeyForTrash()
      )
        return null;
      b =
        (b = b) != null
          ? b
          : d("PrivacySettingsStrings").getActivityLogString();
      var l = function (a) {
          a = c("XCometSettingsControllerRouteBuilder").buildURL({ tab: a });
          if (f == null || a == null) return;
          f.go(a, {});
        },
        m = function (a) {
          if (
            a ===
            d("CometActivityLogUtils").getCategoryKeyForTagsByOthersCluster()
          )
            return j.jsx("span", {
              testid: void 0,
              children: j.jsx(c("TetraIcon.react"), {
                "aria-label":
                  'Button for displaying the menu for the activity log category "Posts You\'re Tagged In" settings options',
                color: "secondary",
                icon: d("fbicon")._(i("497567"), 20),
                onPress: function () {
                  return l("notifications");
                },
              }),
            });
          return a === d("CometActivityLogUtils").getCategoryKeyForFriends()
            ? j.jsx("span", {
                testid: void 0,
                children: j.jsx(c("TetraIcon.react"), {
                  "aria-label":
                    'Button for displaying the menu for the activity log category "Added Friends" settings options',
                  color: "secondary",
                  icon: d("fbicon")._(i("497567"), 20),
                  onPress: function () {
                    return l("privacy");
                  },
                }),
              })
            : null;
        },
        n = function (a) {
          var b = function (a, b) {
            return j.jsx("span", {
              className: (b ? "oi9244e8" : "") + " r8blr3vg",
              testid: void 0,
              children: j.jsx(c("CometTooltip.react"), {
                align: "middle",
                position: "above",
                tooltip: a,
                children: j.jsx(c("TetraIcon.react"), {
                  color: "secondary",
                  icon: d("fbicon")._(i("496957"), 16),
                }),
              }),
            });
          };
          if (
            a === d("CometActivityLogUtils").getCategoryKeyForFollowCluster()
          ) {
            var e = d(
              "PrivacySettingsStrings"
            ).getSubscribedToPrivacySettingsText();
            return b(e, !1);
          }
          if (a === d("CometActivityLogUtils").getCategoryKeyForFriends()) {
            e = d("PrivacySettingsStrings").getFriendReminderText();
            return b(e, !0);
          }
          return null;
        },
        o = function () {
          d("CometActivityLogClearSearchHistoryMutation").commit(g, e, {
            onFailure: c("emptyFunction"),
            onSuccess: a.onSearchClear,
          });
        };
      return j.jsxs("div", {
        className:
          "k4urcfbm discj3wi ihqw7lf3 bi6gxh9e i1fnvgqd btwxx1t3 j83agx80 bp9cbjyn",
        children: [
          j.jsx("div", {
            children: j.jsx("div", {
              children: j.jsx(c("TetraText.react"), {
                type: "headlineEmphasized2",
                children: b,
              }),
            }),
          }),
          j.jsxs("div", {
            children: [
              j.jsxs("div", { children: [n(e), m(e)] }),
              e !== d("CometActivityLogUtils").getCategoryKeyForSearch()
                ? null
                : j.jsx("span", {
                    children: j.jsx(c("CometPressable.react"), {
                      display: "inline",
                      onPress: function () {
                        k(e), o();
                      },
                      overlayDisabled: !0,
                      children: j.jsx(c("TetraText.react"), {
                        color: "blueLink",
                        type: "body3",
                        children: h._("Clear Searches"),
                      }),
                    }),
                  }),
              j.jsx(c("CometActivityLogClearVideoWatchHistoryButton.react"), {
                category: e,
                onReload: a.onSearchClear,
              }),
              j.jsx(c("CometActivityLogClearVoiceHistoryButton.react"), {
                category: e,
              }),
            ],
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
  "CometActivityLogDateFilterEntryButton.react",
  [
    "ix",
    "CometActivityLogContextActions",
    "CometActivityLogUtils",
    "TetraIcon.react",
    "TetraListCell.react",
    "TetraText.react",
    "fbicon",
    "formatDate",
    "react",
    "useCometActivityLogRouter",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b,
        e = d("CometActivityLogUtils").useCometActivityLogStore(),
        f = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        g = c("useCometActivityLogRouter")(),
        j = g.go;
      g = function () {
        e.year != null &&
          (f(d("CometActivityLogContextActions").setYear(null)),
          e.month != null &&
            f(d("CometActivityLogContextActions").setMonth(null))),
          j({
            activity_history: e.activityHistory,
            category: e.category,
            clearStores: !1,
            month: null,
            personID: e.selectedPersonID,
            personName: e.selectedPersonID,
            shouldLoadLandingPage: !1,
            year: null,
          }),
          f(d("CometActivityLogContextActions").setIsBulkActionInProgress(!1)),
          f(d("CometActivityLogContextActions").setIsNavigationInProgress(!1));
      };
      var k = function () {
        var b = a.metaText;
        if (e.year != null)
          if (e.month != null) {
            var d = new Date(e.year, e.month - 1);
            b = c("formatDate")(d, "F Y");
          } else b = e.year.toString();
        return i.jsx(c("TetraText.react"), { type: "meta3", children: b });
      };
      return i.jsx(c("TetraListCell.react"), {
        addOnPrimary: {
          icon: d("fbicon")._(h("481118"), 20),
          size: 40,
          type: "contained-icon",
        },
        headline: (b = a.dateText) != null ? b : "",
        headlineAddOn:
          e.year != null
            ? i.jsx(c("TetraIcon.react"), {
                "aria-label":
                  "This button is used for clearing the date filter off of the currently selected filters ",
                color: "secondary",
                icon: d("fbicon")._(h("478237"), 16),
                onPress: g,
              })
            : null,
        meta: k(),
        onPress: a.onPress,
        ref: a.dialogTriggerRef,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometActivityLogFilters",
  [
    "CometActivityLogContextActions",
    "CometActivityLogUtils",
    "CometRelay",
    "CometRouteParams",
    "XCometActivityLogControllerRouteBuilder",
    "qex",
    "react",
    "useCometActivityLogFilters_viewer.graphql",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useCallback,
      j = e.useEffect,
      k = e.useState;
    function a(a, e) {
      var f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("useCometActivityLogFilters_viewer.graphql")),
          e
        ),
        g = (e = c("qex")._("415")) != null ? e : !1,
        l = d("CometActivityLogUtils").useCometActivityLogStore(),
        m = d("CometActivityLogUtils").useCometActivityLogDispatcher();
      e = k(0);
      var n = e[0],
        o = e[1];
      e = d("CometRouteParams").useRouteParams();
      var p = e.activity_history,
        q = e.person_name,
        r = e.should_load_landing_page,
        s = i(
          function (a) {
            var b;
            b =
              (b = f.activity_log_actor) == null
                ? void 0
                : b.activity_log_categories;
            if (a == null || b == null) return;
            var c = b.find(function (b) {
              return b.category_key === a;
            });
            if (c == null) {
              b = b.flatMap(function (a) {
                return a.subcategories;
              });
              b = b.find(function (b) {
                return b.category_key === a;
              });
              return b == null ? void 0 : b.label;
            }
            return c == null ? void 0 : c.label;
          },
          [f]
        ),
        t = i(
          function (a) {
            var b;
            b =
              (b = f.activity_log_actor) == null
                ? void 0
                : b.activity_log_categories;
            if (a == null || b == null) return;
            b = b.find(function (b) {
              if (a === "GROUPSEARCH") return b.category === "GROUP_SEARCH";
              return a === "ASSISTANTHISTORY"
                ? b.category === "ASSISTANT_HISTORY"
                : b.category === a;
            });
            b = b && b.label;
            return b;
          },
          [f]
        ),
        u = function (a, b, c, e, f) {
          a = [
            a != null,
            b != null,
            c !== "ALL" &&
              c !== "ACTIVITY_LOG" &&
              c !== d("CometActivityLogUtils").getCategoryKeyForArchive() &&
              c !== d("CometActivityLogUtils").getCategoryKeyForTrash(),
            e !== "NONE",
            f !== "ALL",
          ].filter(function (a) {
            return a === !0;
          }).length;
          o(a);
        };
      j(
        function () {
          var b;
          b = g
            ? (b = s(a.category_key)) != null
              ? b
              : l.categoryLabel
            : (b = t(a.category_key)) != null
            ? b
            : l.categoryLabel;
          m(
            d("CometActivityLogContextActions").setFilters({
              activityHistory: typeof p === "boolean" ? p : !1,
              category: a.category_key,
              categoryLabel: b,
              month: a.month,
              privacy: a.privacy,
              shouldLoadLandingPage: typeof r === "boolean" ? r : !1,
              userId: (b = f.actor) == null ? void 0 : b.id,
              visibility: a.timeline_visibility,
              year: a.year,
            })
          );
          q != null &&
            typeof q === "string" &&
            m(d("CometActivityLogContextActions").setSelectedPersonName(q));
          u(a.year, a.month, a.category_key, a.privacy, a.timeline_visibility);
        },
        [
          f,
          t,
          s,
          a.year,
          q,
          a.month,
          a.category_key,
          a.privacy,
          a.timeline_visibility,
          m,
          l.categoryLabel,
          p,
          r,
          g,
        ]
      );
      var v = c("useCometRouterDispatcher")();
      e = function (a, b, e, f, g) {
        var h = l.userId;
        if (a == null || h == null) return;
        if (v != null) {
          v.go(
            c("XCometActivityLogControllerRouteBuilder").buildURL({
              category_key: a,
              filter_hidden: g,
              filter_privacy: f,
              manage_mode: d("CometActivityLogUtils").isOnManageMode(a),
              month: (g = e) != null ? g : void 0,
              person_id: (f = l.selectedPersonID) != null ? f : void 0,
              vanity: h,
              year: (a = b) != null ? a : void 0,
            }),
            {}
          );
        }
      };
      return { numFilters: n, onSubmit: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogDateFilterEntry.react",
  [
    "CometActivityLogDateFilterEntryButton.react",
    "CometActivityLogDateFilterEntry_viewer.graphql",
    "CometActivityLogUtils",
    "CometLazyDialogTrigger.react",
    "CometRelay",
    "CometTransientDialogProvider.react",
    "JSResourceForInteraction",
    "ManageActivityFalcoEvent",
    "react",
    "useCometActivityLogFilters",
    "useNullthrowsViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useEffect,
      k = e.useRef,
      l = c("JSResourceForInteraction")(
        "CometActivityLogDateFilterMenu.react"
      ).__setRef("CometActivityLogDateFilterEntry.react");
    function a(a) {
      var e = d("CometActivityLogUtils").useCometActivityLogStore(),
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometActivityLogDateFilterEntry_viewer.graphql")),
          a.viewer
        ),
        g = c("useNullthrowsViolation")(f, "Filter viewer is null");
      g = c("useCometActivityLogFilters")(a.filterData, g);
      g = g.onSubmit;
      var m = k(!1);
      j(function () {
        m.current === !1 &&
          c("ManageActivityFalcoEvent").log(function () {
            return {
              event: "ma_impression",
              source: "complex_selection_date_filter",
            };
          }),
          (m.current = !0);
      });
      if (a.dateText == null) return null;
      var n = function (a) {
        c("ManageActivityFalcoEvent").log(function () {
          return { event: "ma_click", source: "complex_selection_date_filter" };
        }),
          a();
      };
      return i.jsx(c("CometTransientDialogProvider.react"), {
        children: i.jsx(c("CometLazyDialogTrigger.react"), {
          dialogProps: {
            actor: f == null ? void 0 : f.activity_log_actor,
            month: e.month,
            onSubmit: g,
            year: e.year,
          },
          dialogResource: l,
          children: function (b, d) {
            var e;
            return i.jsx(c("CometActivityLogDateFilterEntryButton.react"), {
              dateText: (e = a.dateText) != null ? e : "",
              dialogTriggerRef: d,
              metaText: a.metaText,
              onPress: function () {
                return n(b);
              },
            });
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogCategoryIcons",
  ["ix", "fbicon"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = function (a, b) {
      b === void 0 && (b = !1);
      if (a == null)
        return {
          color: b ? "blue" : "gray",
          icon: d("fbicon")._(h("899498"), 20),
          size: 40,
          type: "contained-icon",
        };
      switch (a) {
        case "list-bullet":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("486354"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "post":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("729676"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "tag":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("502473"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "photo-album":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("481789"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "friend-tag":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("820312"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "posts":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("482255"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "hide":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("577040"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "like":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("509923"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "comment":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("508554"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "friend-neutral":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("481919"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "life-event":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("481240"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "film":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("843525"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "poll":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("577048"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "music":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("886194"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "article":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("555272"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "games":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("545940"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "book":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("520625"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "shopping-bag":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("556467"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "play-list":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("1069606"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "follow":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("618353"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "group":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("485091"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "calendar-add":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("640913"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "magnifying-glass":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("491283"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "camcorder-plus":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("662993"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "bookmark":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("495598"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "pin":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("481942"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "key":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("679302"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "desktop-mobile":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("702174"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "apps":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("492685"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "activity":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("653246"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "documents":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("634036"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "phone":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("558161"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "poke":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("789679"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "profile":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("558620"), 20),
            size: 40,
            type: "contained-icon",
          };
        case "network":
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("497899"), 20),
            size: 40,
            type: "contained-icon",
          };
        default:
          return {
            color: b ? "blue" : "gray",
            icon: d("fbicon")._(h("899498"), 20),
            size: 40,
            type: "contained-icon",
          };
      }
    };
    g.glyphForName = a;
  },
  98
);
__d(
  "CometActivityLogFilterActivityTypesSubcategoryItem.react",
  [
    "CometActivityLogContextActions",
    "CometActivityLogFilterActivityTypesSubcategoryItem_category.graphql",
    "CometActivityLogUtils",
    "CometRelay",
    "ManageActivityFalcoEvent",
    "PrivacySettingsStrings",
    "TetraListCell.react",
    "gkx",
    "qex",
    "react",
    "useCometActivityLogRouter",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = c("useCometActivityLogRouter")(),
        f = e.go,
        g = d("CometActivityLogUtils").useCometActivityLogStore(),
        j = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        k = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "CometActivityLogFilterActivityTypesSubcategoryItem_category.graphql"
              )),
          a.category
        ),
        l = d("CometActivityLogUtils").getStoreKeyForCategory(g.category),
        m = (e = c("qex")._("415")) != null ? e : !1,
        n = function () {
          var b =
              (k == null ? void 0 : k.category_key) === g.category
                ? d("CometActivityLogUtils").getCategoryKeyForAll()
                : k == null
                ? void 0
                : k.category_key,
            e =
              g.parentCategory === a.parentCategory && !m
                ? null
                : a.parentCategory,
            h = g.userId;
          if (b == null || h == null) return;
          c("ManageActivityFalcoEvent").log(function () {
            return {
              event: "ma_click",
              source: d("CometActivityLogUtils").getSubCategoryNameForLogging(
                b
              ),
            };
          });
          j(
            d("CometActivityLogContextActions").setSelectedParentCategoryKey({
              selectedCategoryKey: b,
              storeKey: l,
            })
          );
          j(d("CometActivityLogContextActions").setCategory(b));
          j(d("CometActivityLogContextActions").setParentCategory(e));
          j(
            d("CometActivityLogContextActions").setCategoryLabel(
              b === d("CometActivityLogUtils").getCategoryKeyForAll()
                ? d("PrivacySettingsStrings")
                    .getActivityLogString()
                    .toLocaleString()
                : k == null
                ? void 0
                : k.label
            )
          );
          f({
            activity_history: g.activityHistory,
            category: b,
            clearStores: !1,
            month: g.month,
            personID: g.selectedPersonID,
            personName: g.selectedPersonName,
            shouldLoadLandingPage: !1,
            year: g.year,
          });
        };
      return i.jsx(c("TetraListCell.react"), {
        headline: k == null ? void 0 : k.label,
        onPress: function () {
          a.clearSelectedParentKey(), n();
        },
        paddingHorizontal: 62,
        selected: (k == null ? void 0 : k.category_key) === g.category,
        selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogFilterActivityTypesItem.react",
  [
    "CometActivityLogCategoryIcons",
    "CometActivityLogContextActions",
    "CometActivityLogFilterActivityTypesItem_category.graphql",
    "CometActivityLogFilterActivityTypesSubcategoryItem.react",
    "CometActivityLogUtils",
    "CometRelay",
    "PrivacySettingsStrings",
    "TetraListCell.react",
    "gkx",
    "qex",
    "react",
    "useCometActivityLogRouter",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useState;
    function a(a) {
      var e = c("useCometActivityLogRouter")(),
        f = e.go,
        g = d("CometActivityLogUtils").useCometActivityLogStore(),
        k = d("CometActivityLogUtils").useCometActivityLogDispatcher();
      e = j({ selectedParentKey: null });
      var l = e[0],
        m = e[1];
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometActivityLogFilterActivityTypesItem_category.graphql")),
        a.dataCategory
      );
      var n = e;
      if (n == null) return null;
      var o = (a = c("qex")._("415")) != null ? a : !1,
        p = n == null ? void 0 : n.subcategories,
        q = d("CometActivityLogUtils").isOnManageMode(n.category_key);
      a = function () {
        var a = !1;
        p.forEach(function (b) {
          b.category_key === g.category && (a = !0);
        });
        return a;
      };
      a =
        n.category_key === g.category ||
        n.category_key === g.parentCategory ||
        a();
      var r = q
          ? n.category_key === g.category
          : p.find(function (a) {
              return a.category_key === g.category;
            }) != null,
        s = function () {
          m(babelHelpers["extends"]({}, l, { selectedParentKey: null }));
        },
        t = function () {
          m(
            babelHelpers["extends"]({}, l, {
              selectedParentKey:
                l.selectedParentKey === n.category_key ? null : n.category_key,
            })
          );
        },
        u = function () {
          var a = o
              ? n == null
                ? void 0
                : n.category_key
              : (n == null ? void 0 : n.category_key) === g.category
              ? d("CometActivityLogUtils").getCategoryKeyForAll()
              : n == null
              ? void 0
              : n.category_key,
            b = g.userId;
          if (a == null || b == null) return;
          k(d("CometActivityLogContextActions").setCategory(a));
          k(d("CometActivityLogContextActions").setParentCategory(a));
          k(
            d("CometActivityLogContextActions").clearSelectedItems(
              d("CometActivityLogUtils").getStoreKeyForCategory(a)
            )
          );
          k(d("CometActivityLogContextActions").setSelectedPersonId(null));
          k(d("CometActivityLogContextActions").setSelectedPersonName(null));
          f({
            activity_history: (b = g.activityHistory) != null ? b : !1,
            category: a,
            clearStores: !1,
            month: g.month,
            personID: g.selectedPersonID,
            personName: g.selectedPersonName,
            shouldLoadLandingPage: !1,
            year: g.year,
          });
        },
        v = function () {
          if (p.length < 1 || p == null) return;
          return {
            children: p.map(function (a, b) {
              return i.jsx(
                c("CometActivityLogFilterActivityTypesSubcategoryItem.react"),
                {
                  category: a,
                  clearSelectedParentKey: s,
                  parentCategory: n.category_key,
                },
                b
              );
            }),
            open: y,
            type: "expander",
          };
        },
        w = function () {
          var a = n == null ? void 0 : n.category_key;
          if (a == null) return;
          if (a === g.category) {
            var b;
            k(
              d("CometActivityLogContextActions").setAccordionIsOpen({
                categoryKey: (b = a) != null ? b : "ALL",
                isOpen: !y,
              })
            );
            return;
          }
          o &&
            k(
              d("CometActivityLogContextActions").setCategoryLabel(
                a === d("CometActivityLogUtils").getCategoryKeyForAll()
                  ? d("PrivacySettingsStrings")
                      .getActivityLogString()
                      .toLocaleString()
                  : n == null
                  ? void 0
                  : n.label
              )
            );
          k(
            d("CometActivityLogContextActions").setAccordionIsOpen({
              categoryKey: (b = a) != null ? b : "ALL",
              isOpen: !y,
            })
          );
          t();
          u();
        },
        x = e == null ? void 0 : e.category_key,
        y =
          (e = g.accordionState.get((e = x) != null ? e : "ALL")) != null
            ? e
            : !1;
      return i.jsx(c("TetraListCell.react"), {
        addOnPrimary: d("CometActivityLogCategoryIcons").glyphForName(
          n.icon_name,
          o ? a : n.category_key === g.parentCategory || r
        ),
        addOnSecondary: o ? v() : q ? null : v(),
        headline: n.label,
        onPress: function () {
          var a;
          if (o) {
            w();
            return;
          }
          k(
            d("CometActivityLogContextActions").setAccordionIsOpen({
              categoryKey: (a = x) != null ? a : "ALL",
              isOpen: !y,
            })
          );
          q ? u() : t();
        },
        selected: o ? a : n.category_key === g.parentCategory || r,
        selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogFilterActivityTypes.react",
  [
    "CometActivityLogContextActions",
    "CometActivityLogFilterActivityTypesItem.react",
    "CometActivityLogFilterActivityTypes_actor.graphql",
    "CometActivityLogFilterActivityTypes_viewer.graphql",
    "CometActivityLogUtils",
    "CometRelay",
    "CometUnitHeader.react",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useRef;
    function a(a) {
      var e,
        f,
        g = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        m = d("CometActivityLogUtils").useCometActivityLogStore(),
        n = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometActivityLogFilterActivityTypes_actor.graphql")),
          a.actor
        );
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometActivityLogFilterActivityTypes_viewer.graphql")),
        a.viewer
      );
      e = (e = c("qex")._("415")) != null ? e : !1;
      var o =
        n == null
          ? void 0
          : (f = n.activity_log_multi_select) == null
          ? void 0
          : f.manageable_categories;
      k(
        function () {
          o != null &&
            g(
              d("CometActivityLogContextActions").setManageableCategoriesList(
                [].concat(o)
              )
            );
        },
        [g, o]
      );
      f = l(!0);
      var p = l(m.activityHistory);
      n = n == null ? void 0 : n.activity_log_categories;
      (f.current === !0 || (e && p.current !== m.activityHistory)) &&
        ((f.current = !1),
        (p.current = m.activityHistory),
        g(d("CometActivityLogContextActions").clearAccordionState()),
        n == null
          ? void 0
          : n.forEach(function (a) {
              a.category_key != null &&
                g(
                  d("CometActivityLogContextActions").setAccordionIsOpen({
                    categoryKey: a.category_key,
                    isOpen: !1,
                  })
                );
            }));
      return n == null
        ? null
        : j.jsxs(j.Fragment, {
            children: [
              e
                ? null
                : j.jsx(c("CometUnitHeader.react"), {
                    headline:
                      a == null
                        ? void 0
                        : (f = a.activity_log_content_strings) == null
                        ? void 0
                        : f.activity_filter_string,
                    level: 2,
                  }),
              j.jsx("div", {
                style: { marginTop: e ? 8 : 16 },
                children: n.map(function (a, b) {
                  return a.category_key ===
                    d("CometActivityLogUtils").getCategoryKeyForAll()
                    ? null
                    : j.jsx(
                        c("CometActivityLogFilterActivityTypesItem.react"),
                        { dataCategory: a },
                        b
                      );
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
  "CometActivityLogFiltersLink.react",
  [
    "fbt",
    "CometActivityLogFiltersLink_viewer.graphql",
    "CometActivityLogUtils",
    "CometLazyDialogTrigger.react",
    "CometPressable.react",
    "CometRelay",
    "CometTransientDialogProvider.react",
    "JSResourceForInteraction",
    "TetraText.react",
    "react",
    "useCometActivityLogFilters",
    "useNullthrowsViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = c("JSResourceForInteraction")(
        "CometActivityLogFilterMenu.react"
      ).__setRef("CometActivityLogFiltersLink.react");
    function a(a) {
      var e = a.filterData,
        f = a.isDisabled;
      a = a.viewer;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometActivityLogFiltersLink_viewer.graphql")),
        a
      );
      var g = c("useCometActivityLogFilters")(e, a),
        l = g.numFilters;
      g = g.onSubmit;
      var m = d("CometActivityLogUtils").useCometActivityLogStore();
      a = c("useNullthrowsViolation")(a.activity_log_actor);
      return j.jsx(c("CometTransientDialogProvider.react"), {
        children: j.jsx(c("CometLazyDialogTrigger.react"), {
          dialogProps: {
            actor: a,
            category: e.category_key,
            month: m.month,
            numFilters: l,
            onSubmit: g,
            privacy: m.privacy,
            visibility: m.visibility,
            year: m.year,
          },
          dialogResource: k,
          children: function (a, b) {
            return j.jsx(c("CometPressable.react"), {
              disabled: f,
              display: "inline",
              onPress: a,
              overlayDisabled: !0,
              ref: b,
              children: j.jsx(c("TetraText.react"), {
                color: f ? "disabled" : "blueLink",
                type: "body3",
                children:
                  l > 0
                    ? h._("Filter ({num_filters})", [
                        h._param("num_filters", l),
                      ])
                    : h._("Filter"),
              }),
            });
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogHomeLink.react",
  [
    "CometActivityLogContextActions",
    "CometActivityLogUtils",
    "CometPressable.react",
    "PrivacySettingsStrings",
    "TetraText.react",
    "qex",
    "react",
    "useCometActivityLogRouter",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      var a = c("useCometActivityLogRouter")(),
        b = a.go,
        e = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        f = d("CometActivityLogUtils").useCometActivityLogStore();
      a = (a = c("qex")._("415")) != null ? a : !1;
      if (
        !a ||
        f.shouldLoadLandingPage === !0 ||
        d("CometActivityLogUtils").isCategoryKeyArchiveOrTrash(f.category)
      )
        return null;
      a = d("CometActivityLogUtils").isCometActivityLogLoading(f);
      var g = function () {
        e(
          d("CometActivityLogContextActions").setCategory(
            d("CometActivityLogUtils").getCategoryKeyForAll()
          )
        ),
          e(d("CometActivityLogContextActions").setParentCategory(null)),
          e(d("CometActivityLogContextActions").clearAccordionState()),
          b({
            activity_history: !1,
            category: d("CometActivityLogUtils").getCategoryKeyForAll(),
            clearStores: !0,
            month: f.month,
            personID: f.selectedPersonID,
            personName: f.selectedPersonName,
            shouldLoadLandingPage: !0,
            year: f.year,
          });
      };
      return h.jsx(c("CometPressable.react"), {
        disabled: a,
        display: "inline",
        onPress: g,
        overlayDisabled: !0,
        children: h.jsx(c("TetraText.react"), {
          color: a ? "disabled" : "blueLink",
          type: "body3",
          children: d("PrivacySettingsStrings").getActivityLogHomeString(),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogAppIcons",
  ["ix", "fbicon"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = function (a) {
      if (a == null)
        return {
          icon: d("fbicon")._(h("899498"), 20),
          size: 60,
          type: "contained-icon",
        };
      switch (a) {
        case a.startsWith("ufi/reactions"):
          return {
            icon: d("fbicon")._(h("509923"), 20),
            size: 60,
            type: "contained-icon",
          };
        case "icons/wall_post":
          return {
            icon: d("fbicon")._(h("729676"), 20),
            size: 60,
            type: "contained-icon",
          };
        case "icons/friend":
          return {
            icon: d("fbicon")._(h("487558"), 20),
            size: 60,
            type: "contained-icon",
          };
        case "icons/calendar_red":
          return {
            icon: d("fbicon")._(h("481118"), 20),
            size: 60,
            type: "contained-icon",
          };
        case "icons/friend_guy":
          return {
            icon: d("fbicon")._(h("784478"), 20),
            size: 60,
            type: "contained-icon",
          };
        case "icons/photo":
          return {
            icon: d("fbicon")._(h("481799"), 20),
            size: 60,
            type: "contained-icon",
          };
        default:
          return {
            icon: d("fbicon")._(h("899498"), 20),
            size: 60,
            type: "contained-icon",
          };
      }
    };
    g.glyphForName = a;
  },
  98
);
__d(
  "CometActivityLogUnderlyingAdminCreator.react",
  [
    "fbt",
    "CometActivityLogUnderlyingAdminCreator_story.graphql",
    "CometRelay",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometActivityLogUnderlyingAdminCreator_story.graphql")),
        a.story
      );
      a =
        a == null
          ? void 0
          : (a = a.underlying_admin_creator) == null
          ? void 0
          : a.name;
      return a == null
        ? null
        : j.jsx(c("TetraText.react"), {
            type: "body4",
            children: h._("By {name}", [h._param("name", a)]),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogItemStory.react",
  [
    "CometActivityLogAppIcons",
    "CometActivityLogItemStory_story.graphql",
    "CometActivityLogUnderlyingAdminCreator.react",
    "CometActivityLogUtils",
    "CometBoldedEntityRenderer",
    "CometPrivacyIcon.react",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "TetraListCell.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        metaData: { display: "j83agx80", flexDirection: "cbu4d94t" },
        privacyRow: {
          paddingEnd: "rz4wbd8a",
          paddingStart: "a8nywdso",
          paddingTop: "jb3vyjys",
        },
        rowContainer: { display: "pq6dq46d", width: "k4urcfbm" },
      };
    function a(a) {
      var e,
        f = a.addOnBottom,
        g = a.isErrorView,
        l = a.isSelected,
        m = a.linkProps,
        n = a.meta,
        o = a.onPress;
      a = a.story$key;
      var p = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometActivityLogItemStory_story.graphql")),
        a
      );
      a = d("CometActivityLogUtils").useCometActivityLogStore();
      a = d("CometActivityLogUtils").isCometActivityLogLoading(a);
      if (p == null) return null;
      e =
        ((e = p.feedback_context) == null
          ? void 0
          : (e = e.relevant_comments) == null
          ? void 0
          : (e = e[0]) == null
          ? void 0
          : (e = e.body) == null
          ? void 0
          : e.text) ||
        ((e = p.message) == null ? void 0 : e.text) ||
        ((e = p.attached_story) == null
          ? void 0
          : (e = e.message) == null
          ? void 0
          : e.text) ||
        ((e = p.attachments) == null
          ? void 0
          : (e = e[0]) == null
          ? void 0
          : e.subtitle);
      var q = function () {
          var a;
          a =
            p.summary ||
            ((a = p.attachments) == null
              ? void 0
              : (a = a[0]) == null
              ? void 0
              : a.title_with_entities);
          return a != null
            ? i.jsx(c("TetraText.react"), {
                type: "body3",
                children: i.jsx(c("CometTextWithEntitiesRelay.react"), {
                  renderers: { "*": [c("CometBoldedEntityRenderer")] },
                  textWithEntities: a,
                  withParagraphs: !0,
                }),
              })
            : null;
        },
        r = function () {
          var a;
          a =
            (p == null ? void 0 : p.privacy_scope) ||
            (p == null
              ? void 0
              : (a = p.attached_story) == null
              ? void 0
              : a.privacy_scope);
          var b = a == null ? void 0 : a.feed_story_label;
          return g || n == null
            ? i.jsxs("div", {
                className: c("stylex")(j.metaData),
                children: [
                  i.jsx(c("CometActivityLogUnderlyingAdminCreator.react"), {
                    story: p,
                  }),
                  i.jsxs("div", {
                    className: c("stylex")(j.rowContainer),
                    children: [
                      a &&
                        i.jsx(c("CometPrivacyIcon.react"), {
                          marginEnd: 4,
                          scope: a,
                        }),
                      i.jsx(c("TetraTextPairing.react"), {
                        body: i.jsx("div", {
                          align: "start",
                          spacing: 8,
                          xstyle: j.privacyRow,
                          children: i.jsx(c("TetraText.react"), {
                            type: "body4",
                            children: b,
                          }),
                        }),
                        level: 3,
                      }),
                    ],
                  }),
                ],
              })
            : n;
        };
      return i.jsx(c("TetraListCell.react"), {
        addOnBottom: f,
        addOnPrimary: k(p),
        body: e,
        bodyColor: "primary",
        bodyLineLimit: 3,
        disabled: a,
        headline: q(),
        headlineLineLimit: 2,
        level: 4,
        linkProps: m != null ? m : void 0,
        meta: r(),
        metaColor: "tertiary",
        onPress: o,
        selected: l,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      var b,
        c = function (a) {
          return d("CometActivityLogAppIcons").glyphForName(a);
        },
        e = function (a) {
          return {
            shape: "circle",
            size: 60,
            source: { uri: a },
            type: "profile-photo",
          };
        };
      if (a == null) return c(null);
      b =
        (b =
          (b =
            (b =
              (b =
                (b =
                  (b = a.feedback_context) == null
                    ? void 0
                    : (b = b.relevant_comments) == null
                    ? void 0
                    : (b = b[0]) == null
                    ? void 0
                    : (b = b.attachments) == null
                    ? void 0
                    : (b = b[0]) == null
                    ? void 0
                    : (b = b.media) == null
                    ? void 0
                    : (b = b.image) == null
                    ? void 0
                    : b.uri) != null
                  ? b
                  : (b = a.feedback_context) == null
                  ? void 0
                  : (b = b.relevant_comments) == null
                  ? void 0
                  : (b = b[0]) == null
                  ? void 0
                  : (b = b.attachments) == null
                  ? void 0
                  : (b = b[0]) == null
                  ? void 0
                  : (b = b.subattachments) == null
                  ? void 0
                  : (b = b[0]) == null
                  ? void 0
                  : (b = b.media) == null
                  ? void 0
                  : (b = b.image) == null
                  ? void 0
                  : b.uri) != null
                ? b
                : (b = a.attached_story) == null
                ? void 0
                : (b = b.attachments) == null
                ? void 0
                : (b = b[0]) == null
                ? void 0
                : (b = b.media) == null
                ? void 0
                : (b = b.image) == null
                ? void 0
                : b.uri) != null
              ? b
              : (b = a.attached_story) == null
              ? void 0
              : (b = b.attachments) == null
              ? void 0
              : (b = b[0]) == null
              ? void 0
              : (b = b.subattachments) == null
              ? void 0
              : (b = b[0]) == null
              ? void 0
              : (b = b.media) == null
              ? void 0
              : (b = b.image) == null
              ? void 0
              : b.uri) != null
            ? b
            : (b = a.attachments) == null
            ? void 0
            : (b = b[0]) == null
            ? void 0
            : (b = b.media) == null
            ? void 0
            : (b = b.image) == null
            ? void 0
            : b.uri) != null
          ? b
          : (b = a.attachments) == null
          ? void 0
          : (b = b[0]) == null
          ? void 0
          : (b = b.subattachments) == null
          ? void 0
          : (b = b[0]) == null
          ? void 0
          : (b = b.media) == null
          ? void 0
          : (b = b.image) == null
          ? void 0
          : b.uri;
      if (b != null) return e(b);
      b =
        (b = a.application) == null
          ? void 0
          : (b = b.bookmark_image) == null
          ? void 0
          : b.uri;
      if (b != null) return e(b);
      b =
        (b = a.attached_story) == null
          ? void 0
          : (b = b.actors) == null
          ? void 0
          : (b = b[0]) == null
          ? void 0
          : (b = b.profile_picture) == null
          ? void 0
          : b.uri;
      if (b != null) return e(b);
      a =
        (b = a.actors) == null
          ? void 0
          : (a = b[0]) == null
          ? void 0
          : (b = a.profile_picture) == null
          ? void 0
          : b.uri;
      return a != null ? e(a) : c(null);
    }
    g.CometActivityLogItemStory = a;
    g.createAddOnPrimary = k;
  },
  98
);
__d(
  "CometActivityLogItemTimeLabel.react",
  [
    "fbt",
    "CometActivityLogItemTimeLabel_story.graphql",
    "CometRelay",
    "TetraText.react",
    "formatDate",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometActivityLogItemTimeLabel_story.graphql")),
        a.story
      );
      e = e == null ? void 0 : e.creation_time;
      if (e == null) return null;
      e = c("formatDate")(e, "g:i A");
      return j.jsx("span", {
        className: c("stylex").dedupe(
          {
            "background-color-1": "cwj9ozl2",
            "bottom-1": "labbqbtg",
            "end-1": "n7fi1qx3",
            "padding-start-1": "pcp91wgn",
            "position-1": "pmk7jnqg",
          },
          a.hidden
            ? {
                "clip-1": "svngc6pa",
                "height-1": "ay7djpcl",
                "overflow-x-1": "ni8dbmo4",
                "overflow-y-1": "stjgntxs",
                "position-1": "pmk7jnqg",
                "width-1": "rfua0xdk",
              }
            : null,
          a.selected ? { "background-color-1": "g5ia77u1" } : null
        ),
        children: j.jsx(c("TetraText.react"), {
          color: "secondary",
          type: "body4",
          children: h._("{time}", [h._param("time", e)]),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogMenuButton.react",
  [
    "fbt",
    "ix",
    "CometActivityLogMenuButton_data.graphql",
    "CometActivityLogMenuButton_listPage.graphql",
    "CometLazyPopoverTrigger.react",
    "CometRelay",
    "JSResourceForInteraction",
    "TetraCircleButton.react",
    "fbicon",
    "gkx",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l = d("react"),
      m = c("JSResourceForInteraction")(
        "CometActivityLogActionMenu.react"
      ).__setRef("CometActivityLogMenuButton.react");
    function a(a) {
      var e,
        f = a.categoryKey,
        g = a.setMovingToastMessage,
        n = a.showFailureToast,
        o = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("CometActivityLogMenuButton_listPage.graphql")),
          a.listPage
        ),
        p = d("CometRelay").useFragment(
          k !== void 0 ? k : (k = b("CometActivityLogMenuButton_data.graphql")),
          a.edge
        );
      if (
        p == null ||
        o == null ||
        ((e = p.options) == null ? void 0 : e.length) === 0
      )
        return null;
      var q = c("gkx")("1639147");
      return l.jsx(c("CometLazyPopoverTrigger.react"), {
        align: "middle",
        popoverProps: {
          categoryKey: f,
          data: p,
          listPage: o,
          setMovingToastMessage: g,
          shouldUsePageRename: a.shouldUsePageRename,
          showFailureToast: n,
        },
        popoverResource: m,
        position: "end",
        children: function (b, e) {
          return l.jsx("div", {
            className: c("stylex").dedupe(
              !q && a.hidden
                ? {
                    "clip-1": "svngc6pa",
                    "height-1": "ay7djpcl",
                    "overflow-x-1": "ni8dbmo4",
                    "overflow-y-1": "stjgntxs",
                    "position-1": "pmk7jnqg",
                    "width-1": "rfua0xdk",
                  }
                : {},
              {
                "end-1": "cypi58rs",
                "pointer-events-1": "mrt03zmi",
                "position-1": "pmk7jnqg",
                "top-1": "rk01pc8j",
                "transform-0.1": "ke6wolob",
              }
            ),
            testid: void 0,
            children: l.jsx(c("TetraCircleButton.react"), {
              color: "primary",
              icon: d("fbicon")._(i("484388"), 24),
              label: h._("Action options"),
              onPress: function () {
                e();
              },
              ref: b,
              size: 36,
              type: q ? "deemphasized" : "normal",
            }),
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
  "CometActivityLogPrivacyRow.react",
  [
    "fbt",
    "ix",
    "CometActivityLogConstants",
    "CometActivityLogPrivacyRow_story.graphql",
    "CometActivityLogUtils",
    "CometPrivacyIcon.react",
    "CometRelay",
    "PrivacySettingsStrings",
    "TetraIcon.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "fbicon",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = {
        privacyRow: {
          paddingEnd: "rz4wbd8a",
          paddingStart: "a8nywdso",
          paddingTop: "jb3vyjys",
        },
      };
    function a(a) {
      var e,
        f,
        g,
        m,
        n,
        o = d("CometActivityLogUtils").useCometActivityLogStore(),
        p = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("CometActivityLogPrivacyRow_story.graphql")),
          a.story
        ),
        q = c("gkx")("2570");
      e =
        p == null
          ? void 0
          : (e = p.archive_state) == null
          ? void 0
          : e.move_to_archive_time;
      f =
        p == null
          ? void 0
          : (f = p.trash_state) == null
          ? void 0
          : f.remaining_ttl;
      g =
        (g = a.timeUntilTrashLabelRed) != null
          ? g
          : d("CometActivityLogConstants").TRASH_TTL_WARNING_TIMEFRAME;
      g = f != null ? f <= g : !1;
      a =
        a.selected_visibility === "HIDE"
          ? a.shouldUsePageRename
            ? h._("Hidden from Page")
            : h._("Hidden from profile")
          : null;
      m =
        (p == null ? void 0 : p.privacy_scope) ||
        (p == null
          ? void 0
          : (m = p.attached_story) == null
          ? void 0
          : m.privacy_scope);
      p =
        (p == null
          ? void 0
          : (n = p.privacy_scope) == null
          ? void 0
          : (n = n.privacy_scope_renderer) == null
          ? void 0
          : n.privacy_scope_for_location) ||
        (p == null
          ? void 0
          : (n = p.attached_story) == null
          ? void 0
          : (p = n.privacy_scope) == null
          ? void 0
          : (n = p.privacy_scope_renderer) == null
          ? void 0
          : n.privacy_scope_for_location);
      n = q ? p : m;
      q = null;
      o.category === d("CometActivityLogUtils").getCategoryKeyForArchive()
        ? e != null && (q = d("PrivacySettingsStrings").getArchivedDateLabel(e))
        : o.category === d("CometActivityLogUtils").getCategoryKeyForTrash()
        ? f != null &&
          (q = d("PrivacySettingsStrings").getTrashNumDaysRemainingLabel(f))
        : (q = n == null ? void 0 : n.label);
      return k.jsxs(k.Fragment, {
        children: [
          n &&
            k.jsx(c("CometPrivacyIcon.react"), {
              "aria-hidden": !0,
              marginEnd: 4,
              scope: n,
            }),
          k.jsx(c("TetraTextPairing.react"), {
            body: k.jsxs("div", {
              align: "start",
              spacing: 8,
              xstyle: l.privacyRow,
              children: [
                k.jsx(c("TetraText.react"), {
                  color: g ? "negative" : null,
                  type: "body4",
                  children: q,
                }),
                a != null &&
                  o.category !==
                    d("CometActivityLogUtils").getCategoryKeyForArchive() &&
                  o.category !==
                    d("CometActivityLogUtils").getCategoryKeyForTrash() &&
                  k.jsxs(k.Fragment, {
                    children: [
                      k.jsx(c("TetraIcon.react"), {
                        color: "secondary",
                        icon: d("fbicon")._(i("505496"), 16),
                        size: 16,
                      }),
                      k.jsx("span", {
                        testid: void 0,
                        children: k.jsx(c("TetraText.react"), {
                          type: "body4",
                          children: a,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            level: 3,
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
  "CometActivityLogItem.react",
  [
    "CometActivityLogContextActions",
    "CometActivityLogItemStory.react",
    "CometActivityLogItemTimeLabel.react",
    "CometActivityLogItem_edge.graphql",
    "CometActivityLogItem_listPage.graphql",
    "CometActivityLogItem_trashPage.graphql",
    "CometActivityLogMenuButton.react",
    "CometActivityLogPrivacyRow.react",
    "CometActivityLogUnderlyingAdminCreator.react",
    "CometActivityLogUtils",
    "CometCheckbox.react",
    "CometLeftRailListItemSeparator.react",
    "CometRelay",
    "CometRouteMatch",
    "react",
    "useMenuButtonVisibilityState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useEffect,
      n = e.useState;
    function a(a) {
      var e,
        f = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        g = d("CometActivityLogUtils").useCometActivityLogStore();
      g = g.loadingState.isBulkActionInProgress;
      var o = a.categoryKey,
        p = a.indices,
        q = a.isAllSelected,
        r = a.numEdges,
        s = a.routeTarget,
        t = a.setIsAllSelected,
        u = d("CometActivityLogUtils").useIsManageMode(o),
        v = n(!1),
        w = v[0],
        x = v[1];
      v = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometActivityLogItem_listPage.graphql")),
        a.listPage
      );
      var y = d("CometRelay").useFragment(
          i !== void 0 ? i : (i = b("CometActivityLogItem_trashPage.graphql")),
          a.trashPage
        ),
        z = d("CometRelay").useFragment(
          j !== void 0 ? j : (j = b("CometActivityLogItem_edge.graphql")),
          a.edge
        ),
        A = z == null ? void 0 : z.node,
        B = A == null ? void 0 : A.id,
        C = d("CometActivityLogUtils").getStoreKeyForCategory(o),
        D = d("CometActivityLogUtils").useStoreSelectedItems(C);
      m(
        function () {
          if (q != null) {
            var a;
            x(q || D.has((a = B) != null ? a : ""));
          }
        },
        [B, q, D]
      );
      var E = d("CometRouteMatch").useHostedRouteMatcher(
          d("CometRouteMatch").MatchFunctions.urlMatchFunction
        ),
        F = c("useMenuButtonVisibilityState")(),
        G = F[0],
        H = F[1].setListItemHovered;
      F = l(
        function () {
          H(!0);
        },
        [H]
      );
      var I = l(
        function () {
          H(!1);
        },
        [H]
      );
      if (
        (z == null ? void 0 : z.node) == null ||
        B == null ||
        z == null ||
        A == null
      )
        return null;
      e =
        (e = A == null ? void 0 : A.url) != null
          ? e
          : A == null
          ? void 0
          : (e = A.attachments) == null
          ? void 0
          : (e = e[0]) == null
          ? void 0
          : e.url;
      s = { routeTarget: s, url: e };
      E = E((E = e) != null ? E : "");
      var J = function () {
        if (B === null) return;
        w
          ? (f(
              d("CometActivityLogContextActions").removeSelectedItem({
                item: B,
                storeKey: C,
              })
            ),
            q === !0 && (t == null ? void 0 : t(!1)))
          : (f(
              d("CometActivityLogContextActions").addSelectedItem({
                item: B,
                storeKey: C,
              })
            ),
            r != null && D.size === r - 1 && (t == null ? void 0 : t(!0)));
        x(D.has(B));
      };
      p =
        p != null
          ? "comet_activity_log_item_checkbox_" +
            p.sectionIndex.toString() +
            "_" +
            p.listIndex.toString()
          : "";
      return k.jsxs("div", {
        className: "l9j0dhe7 btwxx1t3 j83agx80",
        children: [
          u
            ? k.jsx("div", {
                className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
                children: k.jsx(c("CometCheckbox.react"), {
                  checked: w,
                  disabled: g,
                  label: "",
                  name: "comet_activity_log_item_checkbox",
                  onChange: J,
                  testid: void 0,
                  value: w,
                }),
              })
            : null,
          k.jsxs("div", {
            className: "k4urcfbm",
            onMouseEnter: F,
            onMouseLeave: I,
            children: [
              k.jsx("div", {
                className: "oijh8qal",
                children: k.jsx(
                  d("CometActivityLogItemStory.react")
                    .CometActivityLogItemStory,
                  {
                    isErrorView: !1,
                    isSelected: E,
                    linkProps: e == null ? void 0 : s,
                    meta: k.jsxs("div", {
                      className: "cbu4d94t j83agx80",
                      children: [
                        k.jsx(
                          c("CometActivityLogUnderlyingAdminCreator.react"),
                          { story: A }
                        ),
                        k.jsxs("div", {
                          className: "k4urcfbm pq6dq46d",
                          children: [
                            k.jsx(c("CometActivityLogPrivacyRow.react"), {
                              selected_visibility:
                                z == null ? void 0 : z.selected_visibility,
                              shouldUsePageRename: a.shouldUsePageRename,
                              story: A,
                              timeUntilTrashLabelRed:
                                y == null
                                  ? void 0
                                  : y.max_seconds_left_for_red_metatext,
                            }),
                            k.jsx(c("CometActivityLogItemTimeLabel.react"), {
                              hidden: !G,
                              selected: E,
                              story: A,
                            }),
                          ],
                        }),
                      ],
                    }),
                    story$key: A,
                  }
                ),
              }),
              k.jsx(c("CometActivityLogMenuButton.react"), {
                categoryKey: o,
                edge: z,
                hidden: !G,
                listPage: v,
                setMovingToastMessage: a.setMovingToastMessage,
                shouldUsePageRename: a.shouldUsePageRename,
                showFailureToast: a.showFailureToast,
              }),
              a.shouldRenderSeparator === !0
                ? k.jsx(c("CometLeftRailListItemSeparator.react"), {})
                : null,
            ],
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CometActivityLogItem = a;
  },
  98
);
__d(
  "CometActivityLogLandingPageItem.react",
  [
    "ix",
    "CometActivityLogCategoryIcons",
    "CometActivityLogContextActions",
    "CometActivityLogLandingPageItem_category.graphql",
    "CometActivityLogUtils",
    "CometRelay",
    "ManageActivityFalcoEvent",
    "TetraListCell.react",
    "fbicon",
    "react",
    "useCometActivityLogRouter",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = c("useCometActivityLogRouter")(),
        f = e.go,
        g = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        k = a.categoryKey,
        l = a.parentCategoryKey,
        m = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometActivityLogLandingPageItem_category.graphql")),
          a.dataCategory
        );
      return m == null || k == null
        ? null
        : j.jsx(c("TetraListCell.react"), {
            addOnPrimary: d("CometActivityLogCategoryIcons").glyphForName(
              m.icon_name
            ),
            addOnSecondary: {
              icon: d("fbicon")._(h("492536"), 20),
              type: "icon",
            },
            headline: m.label,
            onPress: function () {
              c("ManageActivityFalcoEvent").log(function () {
                return {
                  event: "ma_click",
                  source: d(
                    "CometActivityLogUtils"
                  ).getLandingPageCategoryNameForLogging(k),
                };
              }),
                l != null &&
                  g(
                    d("CometActivityLogContextActions").setAccordionIsOpen({
                      categoryKey: l,
                      isOpen: !0,
                    })
                  ),
                g(d("CometActivityLogContextActions").setParentCategory(l)),
                g(d("CometActivityLogContextActions").setCategory(k)),
                g(
                  d("CometActivityLogContextActions").setCategoryLabel(m.label)
                ),
                f({
                  activity_history: !1,
                  category: k,
                  clearStores: !0,
                  month: null,
                  personID: null,
                  personName: null,
                  shouldLoadLandingPage: !1,
                  year: null,
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
  "CometActivityLogLandingPage.react",
  [
    "CometActivityLogLandingPageItem.react",
    "CometActivityLogLandingPage_actor.graphql",
    "CometLeftRailListItemSeparator.react",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometActivityLogLandingPage_actor.graphql")),
        a.actor
      );
      e =
        a == null
          ? void 0
          : (e = a.activity_log_landing_page) == null
          ? void 0
          : e.quick_category_filters_info;
      var f = a == null ? void 0 : a.activity_log_categories,
        g = new Map();
      a =
        e == null
          ? void 0
          : e.map(function (a, b, d) {
              if (f != null)
                for (
                  var e = f,
                    h = Array.isArray(e),
                    j = 0,
                    e = h
                      ? e
                      : e[
                          typeof Symbol === "function"
                            ? Symbol.iterator
                            : "@@iterator"
                        ]();
                  ;

                ) {
                  var k;
                  if (h) {
                    if (j >= e.length) break;
                    k = e[j++];
                  } else {
                    j = e.next();
                    if (j.done) break;
                    k = j.value;
                  }
                  k = k;
                  for (
                    var l = k.subcategories,
                      m = Array.isArray(l),
                      n = 0,
                      l = m
                        ? l
                        : l[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]();
                    ;

                  ) {
                    var o;
                    if (m) {
                      if (n >= l.length) break;
                      o = l[n++];
                    } else {
                      n = l.next();
                      if (n.done) break;
                      o = n.value;
                    }
                    o = o;
                    o.category_key != null &&
                      k.category_key != null &&
                      g.set(o.category_key, k.category_key);
                  }
                }
              return i.jsxs(
                "div",
                {
                  children: [
                    i.jsx(c("CometActivityLogLandingPageItem.react"), {
                      categoryKey: a.category_key,
                      dataCategory: a,
                      parentCategoryKey: g.get(
                        (o = a.category_key) != null ? o : "ALL"
                      ),
                    }),
                    b !== d.length - 1
                      ? i.jsx(c("CometLeftRailListItemSeparator.react"), {})
                      : null,
                  ],
                },
                b
              );
            });
      return i.jsx("div", {
        className:
          "d46ut3hm discj3wi ihqw7lf3 qvjaupoy l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 hybvsw6c",
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "usePhotoReviewImpressionLogger",
  [
    "PhotoReviewUserEngagementEventFalcoEvent",
    "react",
    "useFullViewImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.event;
      a = h(
        function () {
          c("PhotoReviewUserEngagementEventFalcoEvent").log(function () {
            return { event: b };
          });
        },
        [b]
      );
      return c("useFullViewImpression")({ onFullViewStart: a });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogListReviewButtons.react",
  [
    "ix",
    "CometActivityLogListReviewButtons_photoReviewString.graphql",
    "CometActivityLogListReviewButtons_viewer.graphql",
    "CometActivityLogUtils",
    "CometRelay",
    "CometRouteParams",
    "PhotoReviewUserEngagementEventFalcoEvent",
    "TetraAccessoryListCell.react",
    "fbicon",
    "gkx",
    "react",
    "useCometActivityLogRouter",
    "useCometRouterDispatcher",
    "usePhotoReviewImpressionLogger",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react"),
      l = d("react").useState;
    function a(a) {
      var e,
        f,
        g,
        m = d("CometActivityLogUtils").useCometActivityLogStore(),
        n = c("useCometActivityLogRouter")(),
        o = n.getURL;
      n = l(!1);
      var p = n[0],
        q = n[1],
        r = c("useCometRouterDispatcher")();
      n = d("CometRouteParams").useRouteParams();
      var s = "review",
        t = "tagreview",
        u = "photoreview",
        v =
          n.category_key ===
          d("CometActivityLogUtils").getCategoryKeyForPhotoReview(),
        w =
          n.category_key ===
          d("CometActivityLogUtils").getCategoryKeyForTimelineReview();
      n =
        n.category_key ===
        d("CometActivityLogUtils").getCategoryKeyForTagReview();
      var x = function (a, b) {
          b = o({
            category: b,
            entryPoint: null,
            logFilter: a,
            month: m.month,
            personID: m.selectedPersonID,
            personName: m.selectedPersonName,
            year: m.year,
          });
          return b;
        },
        y = function (a, b) {
          if (r == null) return;
          a = x(a, b);
          a != null && r.go(a, {});
        },
        z = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b(
                "CometActivityLogListReviewButtons_photoReviewString.graphql"
              )),
          a.photoReviewString
        );
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometActivityLogListReviewButtons_viewer.graphql")),
        a.viewer
      );
      e =
        a == null
          ? void 0
          : (e = a.activity_log_content_strings) == null
          ? void 0
          : e.review_buttons_title;
      f =
        a == null
          ? void 0
          : (f = a.activity_log_content_strings) == null
          ? void 0
          : f.timeline_review_string;
      g =
        a == null
          ? void 0
          : (g = a.activity_log_content_strings) == null
          ? void 0
          : g.tag_review_string;
      z = z == null ? void 0 : z.photo_review;
      a =
        (a == null ? void 0 : a.eligible_for_photo_review) === !0 && z !== null;
      var A = c("usePhotoReviewImpressionLogger")({
          event: "entry_point_rendered",
        }),
        B = function () {
          c("PhotoReviewUserEngagementEventFalcoEvent").log(function () {
            return { event: "entry_point_clicked" };
          }),
            y(u, d("CometActivityLogUtils").getCategoryKeyForPhotoReview());
        },
        C = c("gkx")("1639147");
      return k.jsxs(k.Fragment, {
        children: [
          C
            ? k.jsx(c("TetraAccessoryListCell.react"), {
                addOnPrimary: {
                  color: w || v || n ? "blue" : "gray",
                  icon: d("fbicon")._(h("484387"), 20),
                  size: 36,
                  type: "contained-icon",
                },
                addOnSecondary: {
                  icon: p
                    ? d("fbicon")._(h("505566"), 24)
                    : d("fbicon")._(h("492458"), 24),
                  type: "icon",
                },
                headline: e,
                onPress: function () {
                  return q(!p);
                },
                testid: void 0,
              })
            : null,
          !C || p
            ? k.jsxs("div", {
                className: C ? "scy8460b" : "",
                children: [
                  k.jsx(c("TetraAccessoryListCell.react"), {
                    addOnPrimary: {
                      color: w ? "blue" : "gray",
                      icon: d("fbicon")._(h("713013"), 20),
                      size: 36,
                      type: "contained-icon",
                    },
                    headline: f,
                    onPress: function () {
                      return y(
                        s,
                        d(
                          "CometActivityLogUtils"
                        ).getCategoryKeyForTimelineReview()
                      );
                    },
                    selected: w,
                    selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
                    testid: void 0,
                  }),
                  a
                    ? k.jsx(c("TetraAccessoryListCell.react"), {
                        addOnPrimary: {
                          color: v ? "blue" : "gray",
                          icon: d("fbicon")._(h("1250633"), 20),
                          size: 36,
                          type: "contained-icon",
                        },
                        headline: z,
                        onPress: B,
                        ref: A,
                        selected: v,
                        selectedBackground: c("gkx")("1535")
                          ? "wash"
                          : "highlight",
                        testid: void 0,
                      })
                    : null,
                  k.jsx(c("TetraAccessoryListCell.react"), {
                    addOnPrimary: {
                      color: n ? "blue" : "gray",
                      icon: d("fbicon")._(h("502473"), 20),
                      size: 36,
                      type: "contained-icon",
                    },
                    headline: g,
                    onPress: function () {
                      return y(
                        t,
                        d("CometActivityLogUtils").getCategoryKeyForTagReview()
                      );
                    },
                    selected: n,
                    selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
                    testid: void 0,
                  }),
                ],
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogPersonFilterEntryButton.react",
  [
    "ix",
    "CometActivityLogContextActions",
    "CometActivityLogUtils",
    "ManageActivityFalcoEvent",
    "TetraIcon.react",
    "TetraListCell.react",
    "TetraText.react",
    "fbicon",
    "react",
    "useCometActivityLogRouter",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        e = d("CometActivityLogUtils").useCometActivityLogStore(),
        f = c("useCometActivityLogRouter")(),
        g = f.go,
        j = function () {
          b(d("CometActivityLogContextActions").setSelectedPersonId(null)),
            b(d("CometActivityLogContextActions").setSelectedPersonName(null)),
            g({
              activity_history: e.activityHistory,
              category: e.category,
              clearStores: !1,
              month: e.month,
              personID: null,
              personName: null,
              shouldLoadLandingPage: !1,
              year: e.year,
            });
        };
      return i.jsx(c("TetraListCell.react"), {
        addOnPrimary: {
          icon: d("fbicon")._(h("481919"), 20),
          size: 40,
          type: "contained-icon",
        },
        headline: a.personText,
        headlineAddOn:
          e.selectedPersonName != null
            ? i.jsx(c("TetraIcon.react"), {
                "aria-label":
                  "This button is used for clearing the person filter",
                color: "secondary",
                icon: d("fbicon")._(h("478237"), 16),
                onPress: function () {
                  return j();
                },
              })
            : null,
        meta:
          e.selectedPersonName == null
            ? a.metaText
            : i.jsx(c("TetraText.react"), {
                type: "meta3",
                children: e.selectedPersonName,
              }),
        onPress: function () {
          c("ManageActivityFalcoEvent").log(function () {
            return {
              event: "ma_click",
              source: "complex_selection_person_filter",
            };
          }),
            a.setShowSearchBar(!0);
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogPersonFilterViewItem.react",
  ["CometTypeaheadViewItem.react", "TetraListCell.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.entry;
      a.queryString;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "entry",
        "queryString",
      ]);
      var d = b.getRawData(),
        e = d.picture;
      return d == null || e == null
        ? null
        : h.jsx(
            c("CometTypeaheadViewItem.react"),
            babelHelpers["extends"]({}, a, {
              entry: b,
              children: h.jsx(c("TetraListCell.react"), {
                addOnPrimary: {
                  shape: "circle",
                  size: 60,
                  source: { uri: e },
                  type: "profile-photo",
                },
                headline: b.getLabel(),
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
  "useCometActivityLogPersonFilterDataSource",
  [
    "CometTypeaheadDataEntry",
    "orEmptyArray",
    "useCometActivityLogPersonFilterDataSourceQuery.graphql",
    "useCometTypeaheadGraphQLDataSource",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = 5,
      j =
        h !== void 0
          ? h
          : (h = b("useCometActivityLogPersonFilterDataSourceQuery.graphql"));
    function a() {
      return c("useCometTypeaheadGraphQLDataSource")({
        gqlQuery: j,
        limit: i,
        normalize: k,
        queryVariablesBuilderFunction: function (a) {
          a = a.query;
          return { queryParams: { limit: i, name: a } };
        },
      });
    }
    function k(a) {
      a = c("orEmptyArray")(
        a == null
          ? void 0
          : (a = a.viewer) == null
          ? void 0
          : (a = a.activity_log_actor) == null
          ? void 0
          : (a = a.activity_log_filters) == null
          ? void 0
          : (a = a.person_filter) == null
          ? void 0
          : a.results
      );
      return a
        .map(function (a) {
          var b = a.id,
            d = a.name;
          a = a.profile_picture;
          if (b == null || d == null || a == null) return null;
          a = a.uri;
          return new (c("CometTypeaheadDataEntry"))({
            key: b,
            label: d,
            rawData: { id: b, name: d, picture: a },
          });
        })
        .filter(Boolean);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogPersonFilterTypeahead.react",
  [
    "BaseTypeahead.react",
    "CometActivityLogPersonFilterViewItem.react",
    "CometTypeaheadInputRoundedStrategy.react",
    "CometTypeaheadLayoutContextualStrategy.react",
    "react",
    "useCometActivityLogPersonFilterDataSource",
    "useCometTypeaheadViewListStrategy",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = i(""),
        d = b[0];
      b = b[1];
      var e = c("useCometActivityLogPersonFilterDataSource")(),
        f = a.setShowSearchBar,
        g = c("useCometTypeaheadViewListStrategy")({
          viewItemStrategyRenderer: c(
            "CometActivityLogPersonFilterViewItem.react"
          ),
        });
      return h.jsx("div", {
        className: "sj5x9vvc cxgpxx05 dati1w0a hv4rvrfc",
        children: h.jsx(c("BaseTypeahead.react"), {
          autoFocus: !0,
          dataSource: e,
          inputStrategyRenderer: c("CometTypeaheadInputRoundedStrategy.react"),
          layoutStrategyRenderer: c(
            "CometTypeaheadLayoutContextualStrategy.react"
          ),
          onChange: b,
          onClose: function () {
            return f(!1);
          },
          onPressEntry: a.onPressEntry,
          placeholder: a.placeholder,
          queryString: d,
          viewStrategyRenderer: g,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogPersonFilterSearchBar.react",
  [
    "ix",
    "CometActivityLogContextActions",
    "CometActivityLogPersonFilterTypeahead.react",
    "CometActivityLogUtils",
    "TetraIcon.react",
    "fbicon",
    "react",
    "useCometActivityLogRouter",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        e = d("CometActivityLogUtils").useCometActivityLogStore(),
        f = c("useCometActivityLogRouter")(),
        g = f.go;
      f = function (a) {
        a = a && a.getRawData();
        var c = a == null ? void 0 : a.id;
        a = a == null ? void 0 : a.name;
        if (c == null || a == null) return;
        b(d("CometActivityLogContextActions").setSelectedPersonId(c));
        b(d("CometActivityLogContextActions").setSelectedPersonName(a));
        g({
          activity_history: e.activityHistory,
          category: e.category,
          clearStores: !1,
          month: e.month,
          personID: c,
          personName: a,
          shouldLoadLandingPage: !1,
          year: e.year,
        });
      };
      return i.jsxs("div", {
        className: "j83agx80 bp9cbjyn",
        children: [
          i.jsx("div", {
            className: "d46ut3hm",
            children: i.jsx(c("CometActivityLogPersonFilterTypeahead.react"), {
              onPressEntry: f,
              placeholder: a.placeholder,
              setShowSearchBar: a.setShowSearchBar,
            }),
          }),
          i.jsx("div", {
            className: "cg1f0npj",
            children: i.jsx(c("TetraIcon.react"), {
              "aria-label":
                "This button is used for clearing the person filter",
              color: "secondary",
              icon: d("fbicon")._(h("478237"), 16),
              onPress: function () {
                return a.setShowSearchBar(!1);
              },
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
  "CometActivityLogPersonFilterEntry.react",
  [
    "CometActivityLogPersonFilterEntryButton.react",
    "CometActivityLogPersonFilterSearchBar.react",
    "ManageActivityFalcoEvent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef,
      k = b.useState;
    function a(a) {
      var b = k(!1),
        d = b[0];
      b = b[1];
      var e = j(!1);
      i(function () {
        e.current === !1 &&
          c("ManageActivityFalcoEvent").log(function () {
            return {
              event: "ma_impression",
              source: "complex_selection_person_filter",
            };
          }),
          (e.current = !0);
      });
      return h.jsx(h.Fragment, {
        children: d
          ? h.jsx(c("CometActivityLogPersonFilterSearchBar.react"), {
              placeholder: a.placeholder,
              setShowSearchBar: b,
            })
          : h.jsx(c("CometActivityLogPersonFilterEntryButton.react"), {
              metaText: a.metaText,
              personText: a.personText,
              setShowSearchBar: b,
            }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogManageActivityFilters.react",
  [
    "CometActivityLogDateFilterEntry.react",
    "CometActivityLogFilterActivityTypes.react",
    "CometActivityLogManageActivityFilters_viewer.graphql",
    "CometActivityLogPersonFilterEntry.react",
    "CometActivityLogUtils",
    "CometLeftRailListItemSeparator.react",
    "CometRelay",
    "CometUnitHeader.react",
    "qex",
    "react",
    "useNullthrowsViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f,
        g = a.filterData;
      a = a.viewer;
      var j = d("CometActivityLogUtils").useCometActivityLogStore();
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometActivityLogManageActivityFilters_viewer.graphql")),
        a
      );
      var k = c("useNullthrowsViolation")(a, "Filter viewer is null"),
        l = c("useNullthrowsViolation")(k.activity_log_actor),
        m = g.category_key,
        n = function (a) {
          var b;
          b =
            a === d("CometActivityLogUtils").getCategoryKeyForArchive()
              ? (b = l.activity_log_archive_page) == null
                ? void 0
                : b.filter_options
              : a === d("CometActivityLogUtils").getCategoryKeyForTrash()
              ? (b = l.activity_log_trash_page) == null
                ? void 0
                : b.filter_options
              : (a = l.activity_log_categories.find(function (a) {
                  return a.category_key === m;
                })) == null
              ? void 0
              : a.filter_options;
          if (
            b == null &&
            l.activity_log_categories.find(function (a) {
              return a.category_key === m;
            }) == null
          ) {
            a = l.activity_log_categories.find(function (a) {
              return a.subcategories.find(function (a) {
                return a.category_key === m;
              });
            });
            a =
              a == null
                ? void 0
                : a.subcategories.find(function (a) {
                    return a.category_key === m;
                  });
            return a == null ? void 0 : a.filter_options;
          }
          return b;
        };
      n = n(m);
      if (n == null) return null;
      e =
        l == null
          ? void 0
          : (e = l.activity_log_filters) == null
          ? void 0
          : (e = e.filter_options_bottomsheet) == null
          ? void 0
          : e.filter_option_bottomsheet_header;
      f = (f = c("qex")._("415")) != null ? f : !1;
      j =
        f &&
        j.shouldLoadLandingPage &&
        m === d("CometActivityLogUtils").getCategoryKeyForAll();
      var o =
        !j &&
        d("CometActivityLogUtils").shouldShowManageActivityFilter(
          n,
          d("CometActivityLogUtils").getFilterKeyForDate()
        );
      j =
        !j &&
        d("CometActivityLogUtils").shouldShowManageActivityFilter(
          n,
          d("CometActivityLogUtils").getFilterKeyForPerson()
        );
      var p = d("CometActivityLogUtils").shouldShowManageActivityFilter(
          n,
          d("CometActivityLogUtils").getFilterKeyForCategory()
        ),
        q = n.find(function (a) {
          return (
            a.filter_key === d("CometActivityLogUtils").getFilterKeyForDate()
          );
        });
      n = n.find(function (a) {
        return (
          a.filter_key === d("CometActivityLogUtils").getFilterKeyForPerson()
        );
      });
      return i.jsxs(i.Fragment, {
        children: [
          f ? null : i.jsx(c("CometLeftRailListItemSeparator.react"), {}),
          o || j
            ? i.jsx(c("CometUnitHeader.react"), {
                headline: (e = e) != null ? e : "",
                level: 2,
              })
            : null,
          i.jsxs("div", {
            className: o || j ? "sj5x9vvc cxgpxx05" : "",
            children: [
              o
                ? i.jsx(c("CometActivityLogDateFilterEntry.react"), {
                    dateText: q == null ? void 0 : q.filter_headline,
                    filterData: g,
                    metaText: q == null ? void 0 : q.filter_meta_text,
                    viewer: k,
                  })
                : null,
              j
                ? i.jsx(c("CometActivityLogPersonFilterEntry.react"), {
                    metaText: n == null ? void 0 : n.filter_meta_text,
                    personText: n == null ? void 0 : n.filter_headline,
                    placeholder:
                      (q =
                        (e = l.activity_log_filters) == null
                          ? void 0
                          : (g = e.person_filter) == null
                          ? void 0
                          : g.search) != null
                        ? q
                        : "",
                  })
                : null,
              p
                ? i.jsxs(i.Fragment, {
                    children: [
                      f && (o || j)
                        ? i.jsx(c("CometLeftRailListItemSeparator.react"), {})
                        : null,
                      i.jsx(c("CometActivityLogFilterActivityTypes.react"), {
                        actor: l,
                        viewer: a,
                      }),
                    ],
                  })
                : null,
            ],
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
  "CometActivityLogManageActivityLink.react",
  [
    "ix",
    "CometActivityLogContextActions",
    "CometActivityLogManageActivityLink_manage.graphql",
    "CometActivityLogUtils",
    "CometRelay",
    "TetraAccessoryListCell.react",
    "fbicon",
    "react",
    "useCometActivityLogRouter",
    "useCometConfirmationDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.category,
        f = c("useCometConfirmationDialog")(),
        g = f[0];
      f = f[1];
      var k = c("useCometActivityLogRouter")(),
        l = k.go,
        m = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        n = d("CometActivityLogUtils").useCometActivityLogStore();
      k = d("CometActivityLogUtils").getStoreKeyForCategory(e);
      k = d("CometActivityLogUtils").useStoreSelectedItems(k).size;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometActivityLogManageActivityLink_manage.graphql")),
        a.manageData
      );
      var o =
        a == null
          ? void 0
          : a.pivot_links.find(function (a) {
              return (a == null ? void 0 : a.type) === "MANAGE";
            });
      if (d("CometActivityLogUtils").isOnManageMode(e) || o === void 0)
        return null;
      e = a == null ? void 0 : a.leave_view_confirmation;
      o = (a = o == null ? void 0 : o.label) != null ? a : "";
      a = function () {
        m(
          d("CometActivityLogContextActions").setParentCategory(
            d("CometActivityLogUtils").getCategoryKeyForManage()
          )
        ),
          l({
            activity_history: !1,
            category: d("CometActivityLogUtils").getCategoryKeyForManage(),
            clearStores: !0,
            month: n.month,
            personID: n.selectedPersonID,
            personName: n.selectedPersonName,
            shouldLoadLandingPage: !1,
            year: n.year,
          });
      };
      k = d("CometActivityLogUtils").showNumItemsConfirmationDialog(k, e, a, g);
      return j.jsx(c("TetraAccessoryListCell.react"), {
        addOnPrimary: {
          icon: d("fbicon")._(h("486354"), 20),
          size: 36,
          type: "contained-icon",
        },
        headline: o,
        onPress: k,
        ref: e != null ? f : null,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogTrashLink.react",
  [
    "ix",
    "CometActivityLogTrashLink_trash.graphql",
    "CometActivityLogUtils",
    "CometRelay",
    "TetraAccessoryListCell.react",
    "fbicon",
    "react",
    "useCometActivityLogRouter",
    "useCometConfirmationDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.category,
        f = c("useCometConfirmationDialog")(),
        g = f[0];
      f = f[1];
      var k = c("useCometActivityLogRouter")(),
        l = k.go,
        m = d("CometActivityLogUtils").useCometActivityLogStore();
      k = d("CometActivityLogUtils").getStoreKeyForCategory(e);
      var n = m.userId;
      k = d("CometActivityLogUtils").useStoreSelectedItems(k).size;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometActivityLogTrashLink_trash.graphql")),
        a.trashData
      );
      if (
        e === d("CometActivityLogUtils").getCategoryKeyForTrash() ||
        n == null
      )
        return null;
      e = a == null ? void 0 : a.leave_view_confirmation;
      n = function () {
        l({
          activity_history: !1,
          category: d("CometActivityLogUtils").getCategoryKeyForTrash(),
          clearStores: !0,
          month: m.month,
          personID: m.selectedPersonID,
          personName: m.selectedPersonName,
          shouldLoadLandingPage: !1,
          year: m.year,
        });
      };
      k = d("CometActivityLogUtils").showNumItemsConfirmationDialog(k, e, n, g);
      return j.jsx(c("TetraAccessoryListCell.react"), {
        addOnPrimary: {
          icon: d("fbicon")._(h("483826"), 20),
          size: 36,
          type: "contained-icon",
        },
        headline: a == null ? void 0 : a.navbar_title,
        onPress: k,
        ref: e != null ? f : null,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogManageActivityLinks.react",
  [
    "CometActivityLogActivityHistoryLink.react",
    "CometActivityLogAllActivityLink.react",
    "CometActivityLogArchiveLink.react",
    "CometActivityLogManageActivityLink.react",
    "CometActivityLogManageActivityLinks_archive.graphql",
    "CometActivityLogManageActivityLinks_list.graphql",
    "CometActivityLogManageActivityLinks_trash.graphql",
    "CometActivityLogTrashLink.react",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react");
    function a(a) {
      var e = a.categoryKey,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometActivityLogManageActivityLinks_list.graphql")),
          a.listData
        ),
        g = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometActivityLogManageActivityLinks_archive.graphql")),
          a.archiveData
        );
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometActivityLogManageActivityLinks_trash.graphql")),
        a.trashData
      );
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx(c("CometActivityLogAllActivityLink.react"), {
            category: e,
            listData: f,
          }),
          k.jsx(c("CometActivityLogManageActivityLink.react"), {
            category: e,
            manageData: f,
          }),
          k.jsx(c("CometActivityLogArchiveLink.react"), {
            archiveData: g,
            category: e,
          }),
          k.jsx(c("CometActivityLogTrashLink.react"), {
            category: e,
            trashData: a,
          }),
          k.jsx(c("CometActivityLogActivityHistoryLink.react"), {
            category: e,
            listData: f,
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
  "CometActivityLogMultiSelectBar",
  [
    "CometActivityLogBulkActionButtons.react",
    "CometActivityLogContextActions",
    "CometActivityLogMultiSelectBar_actor.graphql",
    "CometActivityLogUtils",
    "CometCheckbox.react",
    "CometRelay",
    "ManageActivityFalcoEvent",
    "TetraButton.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f,
        g = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        j = d("CometActivityLogUtils").useCometActivityLogStore();
      j =
        j.loadingState.isBulkActionInProgress ||
        j.loadingState.areNewListItemsLoading;
      var k = a.categoryKey,
        l = a.isAllSelected,
        m = a.setIsAllSelected,
        n = a.setMovingToastMessage,
        o = a.showFailureToast,
        p = d("CometActivityLogUtils").useIsManageMode(k);
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometActivityLogMultiSelectBar_actor.graphql")),
        a.actor
      );
      e =
        (e =
          a == null
            ? void 0
            : (e = a.activity_log_multi_select) == null
            ? void 0
            : e.select_all_label) != null
          ? e
          : "";
      f =
        (f =
          a == null
            ? void 0
            : (f = a.activity_log_multi_select) == null
            ? void 0
            : f.deselect_all_label) != null
          ? f
          : "";
      var q = d("CometActivityLogUtils").getStoreKeyForCategory(k),
        r = d("CometActivityLogUtils").useStoreSelectedItems(q).size,
        s = function () {
          l != null && l === !0
            ? (c("ManageActivityFalcoEvent").log(function () {
                return { event: "ma_click", source: "ma_select_all_opt_out" };
              }),
              g(d("CometActivityLogContextActions").clearSelectedItems(q)))
            : c("ManageActivityFalcoEvent").log(function () {
                return { event: "ma_click", source: "ma_select_all_opt_in" };
              }),
            m == null ? void 0 : m(!l);
        },
        t = function () {
          g(d("CometActivityLogContextActions").clearSelectedItems(q)),
            m == null ? void 0 : m(!1);
        };
      return p
        ? i.jsxs("div", {
            className:
              "k4urcfbm sjgh65i0 i1fnvgqd btwxx1t3 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 hybvsw6c bp9cbjyn" +
              (d("CometActivityLogUtils").isCategoryKeyArchiveOrTrash(k)
                ? " gh1tjcio"
                : ""),
            children: [
              i.jsx("div", {
                className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
                children: i.jsx(c("CometCheckbox.react"), {
                  checked: (p = l) != null ? p : !1,
                  disabled: j,
                  label: e,
                  name: "comet_activity_log_select_all_checkbox",
                  onChange: s,
                  testid: void 0,
                  value: l,
                }),
              }),
              r === 0
                ? null
                : i.jsx("div", {
                    className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
                    children: i.jsx(c("TetraText.react"), {
                      testid: void 0,
                      type: "headline3",
                      children: r,
                    }),
                  }),
              i.jsxs("div", {
                className:
                  "dati1w0a ihqw7lf3 hv4rvrfc discj3wi btwxx1t3 j83agx80",
                children: [
                  r === 0
                    ? null
                    : i.jsx("div", {
                        className: "tw6a2znq d1544ag0",
                        children: i.jsx(c("TetraButton.react"), {
                          disabled: j,
                          label: f,
                          onPress: t,
                          type: "secondary",
                        }),
                      }),
                  i.jsx(
                    d("CometActivityLogBulkActionButtons.react")
                      .CometActivityLogBulkActionButtons,
                    {
                      actor: a,
                      categoryKey: k,
                      disabled: r === 0 || j,
                      setIsAllSelected: m,
                      setMovingToastMessage: n,
                      showFailureToast: o,
                    }
                  ),
                ],
              }),
            ],
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CometActivityLogMultiSelectBar = a;
  },
  98
);
__d(
  "CometActivityLogSectionHeader.react",
  ["CometUnitHeader.react", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        className: c("gkx")("1639147") ? "bi6gxh9e" : "",
        children: h.jsx(c("CometUnitHeader.react"), {
          headline: a.header,
          level: 3,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "createCometActivityLogSections",
  ["CometRelay", "createCometActivityLogSections_edge.graphql", "formatDate"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var e = {};
      a.forEach(function (a) {
        var f = d("CometRelay").readInlineData(
          h !== void 0
            ? h
            : (h = b("createCometActivityLogSections_edge.graphql")),
          a
        );
        f = (f = f.node) == null ? void 0 : f.creation_time;
        if (f == null) return;
        f = c("formatDate")(f, "F j, Y", { utc: !1 });
        e[f] ? (e[f] = [].concat(e[f], [a])) : (e[f] = [a]);
      });
      return i(e);
    }
    function i(a) {
      var b = Object.keys(a);
      return b.map(function (b) {
        return [b, a[b]];
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogStoriesList.react",
  [
    "fbt",
    "CometActivityLogCategoryHeader.react",
    "CometActivityLogCategoryHeaderWithButtons.react",
    "CometActivityLogConstants",
    "CometActivityLogContextActions",
    "CometActivityLogItem.react",
    "CometActivityLogMultiSelectBar",
    "CometActivityLogSectionHeader.react",
    "CometActivityLogStoriesList_actor.graphql",
    "CometActivityLogStoriesList_pages.graphql",
    "CometActivityLogStoriesList_viewer.graphql",
    "CometActivityLogUtils",
    "CometInfiniteScrollTrigger.react",
    "CometListCellGlimmer.react",
    "CometRelay",
    "CometSearchEventEmitterContext",
    "CometUnitHeader.react",
    "ProfileCometContext",
    "WebPixelRatio",
    "createCometActivityLogSections",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l = d("react");
    e = d("react");
    var m = e.startTransition,
      n = e.useCallback,
      o = e.useContext,
      p = e.useEffect,
      q = e.useMemo,
      r = e.useRef;
    function a(a) {
      var e,
        f = d("CometActivityLogUtils").useCometActivityLogStore(),
        g = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        s = o(c("CometSearchEventEmitterContext")),
        t = s.publishClearGlobalRecentSearches,
        u = a.categoryKey,
        v = a.isAllSelected,
        w = a.setIsAllSelected,
        x = a.setMovingToastMessage,
        y = a.showFailureToast,
        z = d("CometActivityLogUtils").useIsManageMode(u);
      s = d("CometRelay").usePaginationFragment(
        i !== void 0 ? i : (i = b("CometActivityLogStoriesList_actor.graphql")),
        a.actor
      );
      var A = s.data,
        B = s.hasNext,
        C = s.isLoadingNext,
        D = s.loadNext,
        E = s.refetch,
        F = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("CometActivityLogStoriesList_viewer.graphql")),
          a.viewer
        ),
        G = d("CometRelay").useFragment(
          k !== void 0
            ? k
            : (k = b("CometActivityLogStoriesList_pages.graphql")),
          a.pages
        );
      s = F == null ? void 0 : F.actor;
      var H =
          A == null
            ? void 0
            : (A = A.activity_log_stories) == null
            ? void 0
            : A.edges,
        I = H == null ? void 0 : H.length,
        J = r(0),
        K = d("CometActivityLogUtils").getStoreKeyForCategory(
          (A = u) != null ? A : "ALL"
        );
      A = d("CometActivityLogUtils").useStoreSelectedItems(K);
      p(
        function () {
          if (!z) return;
          var a = J.current;
          if (a !== I) {
            g(
              d("CometActivityLogContextActions").setAreNewListItemsLoading(!1)
            );
            J.current = I;
            v === !0 && (w == null ? void 0 : w(!1));
            return;
          }
          B ||
            g(
              d("CometActivityLogContextActions").setAreNewListItemsLoading(!1)
            );
          v === !0 &&
            H != null &&
            g(
              d("CometActivityLogContextActions").addSelectedItems({
                items: H.map(function (a) {
                  return (a = a.node) == null ? void 0 : a.id;
                }).filter(Boolean),
                storeKey: K,
              })
            );
        },
        [u, g, H, B, v, z, I, A, w, K]
      );
      A = n(
        function () {
          if (!B || C) return;
          g(d("CometActivityLogContextActions").setAreNewListItemsLoading(!0));
          D(d("CometActivityLogConstants").PAGINATION_FETCH_COUNT);
        },
        [g, B, C, D]
      );
      var L = F == null ? void 0 : (e = F.actor) == null ? void 0 : e.id;
      e = q(
        function () {
          var a;
          return {
            isInViewAs: !1,
            profileID: "",
            profileVanity: null,
            viewerID: (a = L) != null ? a : "",
          };
        },
        [L]
      );
      if (H == null) return null;
      if (u == null) return null;
      var M = c("createCometActivityLogSections")(H),
        N = function () {
          var a = f.userId;
          if (a == null) return;
          t();
          m(function () {
            E({
              category: u,
              category_key: u,
              count: 0,
              cursor: null,
              id: a,
              month: f.month,
              privacy: f.privacy,
              scale: d("WebPixelRatio").get(),
              timeline_visibility: f.visibility,
              year: f.year,
            });
          });
        },
        O = c("gkx")("1639147");
      return l.jsx(c("ProfileCometContext").Provider, {
        value: e,
        children: l.jsxs("div", {
          className: O ? "d46ut3hm" : "",
          children: [
            O
              ? l.jsx(c("CometActivityLogCategoryHeaderWithButtons.react"), {
                  categoryKey: u,
                  onSearchClear: N,
                })
              : l.jsx(c("CometActivityLogCategoryHeader.react"), {
                  onSearchClear: N,
                }),
            l.jsx(
              d("CometActivityLogMultiSelectBar")
                .CometActivityLogMultiSelectBar,
              {
                actor: s,
                categoryKey: u,
                isAllSelected: v,
                setIsAllSelected: w,
                setMovingToastMessage: x,
                showFailureToast: y,
              }
            ),
            M.length < 1
              ? l.jsx(c("CometUnitHeader.react"), {
                  headline: h._("Nothing to show"),
                  level: 3,
                })
              : M.map(function (b, e) {
                  var f = b[0];
                  b = b[1];
                  return l.jsxs(
                    "div",
                    {
                      className:
                        "kvgmc6g5" +
                        (O
                          ? " sj5x9vvc sjgh65i0 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 hybvsw6c"
                          : ""),
                      testid: void 0,
                      children: [
                        l.jsx(c("CometActivityLogSectionHeader.react"), {
                          header: f,
                        }),
                        b.map(function (b, c, f) {
                          return l.jsx(
                            d("CometActivityLogItem.react")
                              .CometActivityLogItem,
                            {
                              categoryKey: a.filterData.category_key,
                              edge: b,
                              indices: { listIndex: c, sectionIndex: e },
                              isAllSelected: v,
                              listPage:
                                G == null ? void 0 : G.activity_log_list_page,
                              numEdges: I,
                              routeTarget: O ? "self" : "content",
                              setIsAllSelected: w,
                              setMovingToastMessage: x,
                              shouldRenderSeparator: O && c !== f.length - 1,
                              shouldUsePageRename:
                                (F == null
                                  ? void 0
                                  : (b = F.actor) == null
                                  ? void 0
                                  : b.should_use_page_rename) === !0,
                              showFailureToast: y,
                              trashPage:
                                G == null ? void 0 : G.activity_log_trash_page,
                            },
                            c
                          );
                        }),
                      ],
                    },
                    e
                  );
                }),
            l.jsx(c("CometInfiniteScrollTrigger.react"), {
              hasMore: B,
              isLoading: C,
              onLoadMore: A,
              rootMargin: O
                ? 0
                : d("CometActivityLogConstants").PAGINATION_ROOT_MARGIN,
              children: l.jsx(c("CometListCellGlimmer.react"), {
                imageSize: 60,
                imageStyle: "circle",
                numberOfItems: 2,
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CometActivityLogStoriesList = a;
  },
  98
);
__d(
  "CometActivityLogList.react",
  [
    "fbt",
    "CometActivityLogConstants",
    "CometActivityLogListReviewButtons.react",
    "CometActivityLogList_pages.graphql",
    "CometActivityLogList_photoReviewString.graphql",
    "CometActivityLogList_viewer.graphql",
    "CometActivityLogManageActivityFilters.react",
    "CometActivityLogManageActivityLinks.react",
    "CometActivityLogStoriesList.react",
    "CometActivityLogUtils",
    "CometLeftRailListItemSeparator.react",
    "CometLink.react",
    "CometRelay",
    "ProfileCometContext",
    "TetraListCell.react",
    "gkx",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l = d("react"),
      m = d("react").useMemo;
    function a(a) {
      var e,
        f,
        g = a.categoryKey,
        n = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometActivityLogList_photoReviewString.graphql")),
          a.photoReviewString
        ),
        o = d("CometRelay").useFragment(
          j !== void 0 ? j : (j = b("CometActivityLogList_viewer.graphql")),
          a.viewer
        ),
        p = d("CometRelay").useFragment(
          k !== void 0 ? k : (k = b("CometActivityLogList_pages.graphql")),
          a.pages
        ),
        q = o == null ? void 0 : o.activity_log_actor,
        r = o == null ? void 0 : (e = o.actor) == null ? void 0 : e.id;
      e = m(
        function () {
          var a;
          return {
            isInViewAs: !1,
            profileID: "",
            profileVanity: null,
            viewerID: (a = r) != null ? a : "",
          };
        },
        [r]
      );
      if (g == null) return null;
      var s = function (a) {
          return h._(
            "You must use the Android, iPhone, or Facebook Lite app to manage your activity in your archive or trash. {=Learn more about your activity log.}",
            [
              h._param(
                "=Learn more about your activity log.",
                l.jsx(c("CometLink.react"), {
                  href: a,
                  children: h._("Learn more about your activity log."),
                })
              ),
            ]
          );
        },
        t = c("gkx")("1639147");
      f = (f = c("qex")._("415")) != null ? f : !1;
      return l.jsxs(c("ProfileCometContext").Provider, {
        value: e,
        children: [
          d("CometActivityLogUtils").isCategoryKeyArchiveOrTrash(g) &&
          !c("gkx")("1606554")
            ? l.jsx(c("TetraListCell.react"), {
                body: s(d("CometActivityLogConstants").VIEW_ONLY_LINK),
              })
            : null,
          f
            ? l.jsxs(l.Fragment, {
                children: [
                  g !== d("CometActivityLogUtils").getCategoryKeyForTrash() && t
                    ? l.jsx(c("CometActivityLogManageActivityFilters.react"), {
                        filterData: a.filterData,
                        viewer: o,
                      })
                    : null,
                  l.jsx(c("CometLeftRailListItemSeparator.react"), {}),
                ],
              })
            : null,
          l.jsx(c("CometActivityLogManageActivityLinks.react"), {
            archiveData: p == null ? void 0 : p.activity_log_archive_page,
            categoryKey: g,
            listData: p == null ? void 0 : p.activity_log_list_page,
            trashData: p == null ? void 0 : p.activity_log_trash_page,
          }),
          d("CometActivityLogUtils").isCategoryKeyArchiveOrTrash(g)
            ? null
            : l.jsx("div", {
                className: f ? "bq3qbged" : "",
                children: l.jsx(c("CometActivityLogListReviewButtons.react"), {
                  photoReviewString: n,
                  viewer: o,
                }),
              }),
          g !== d("CometActivityLogUtils").getCategoryKeyForTrash() && t && !f
            ? l.jsx(c("CometActivityLogManageActivityFilters.react"), {
                filterData: a.filterData,
                viewer: o,
              })
            : null,
          t
            ? null
            : l.jsxs(l.Fragment, {
                children: [
                  l.jsx(c("CometLeftRailListItemSeparator.react"), {}),
                  l.jsx(
                    d("CometActivityLogStoriesList.react")
                      .CometActivityLogStoriesList,
                    {
                      actor: q,
                      categoryKey: a.categoryKey,
                      filterData: a.filterData,
                      pages: q,
                      setMovingToastMessage: a.setMovingToastMessage,
                      showFailureToast: a.showFailureToast,
                      viewer: o,
                    }
                  ),
                ],
              }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CometActivityLogList = a;
  },
  98
);
__d(
  "CometActivityLogMainContentContainer.react",
  [
    "CometActivityLogLandingPage.react",
    "CometActivityLogMainContentContainer_viewer.graphql",
    "CometActivityLogStoriesList.react",
    "CometActivityLogUtils",
    "CometLoadingAnimation.react",
    "CometRelay",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useState;
    function a(a) {
      var e,
        f = a.categoryKey,
        g = a.filterData,
        k = a.setMovingToastMessage,
        l = a.showFailureToast,
        m = j(!1),
        n = m[0],
        o = m[1];
      m = d("CometActivityLogUtils").useCometActivityLogStore();
      var p =
        m.loadingState.isBulkActionInProgress ||
        m.loadingState.isNavigationInProgress;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometActivityLogMainContentContainer_viewer.graphql")),
        a.viewer
      );
      var q = a == null ? void 0 : a.activity_log_actor,
        r = function (a) {
          o(a);
        };
      e = (e = c("qex")._("415")) != null ? e : !1;
      return i.jsxs(i.Fragment, {
        children: [
          e &&
          m.shouldLoadLandingPage &&
          f === d("CometActivityLogUtils").getCategoryKeyForAll()
            ? i.jsx(c("CometActivityLogLandingPage.react"), {
                actor: q,
                categoryKey: f,
              })
            : i.jsx(
                d("CometActivityLogStoriesList.react")
                  .CometActivityLogStoriesList,
                {
                  actor: q,
                  categoryKey: f,
                  filterData: g,
                  isAllSelected: n,
                  pages: q,
                  setIsAllSelected: r,
                  setMovingToastMessage: k,
                  showFailureToast: l,
                  viewer: a,
                }
              ),
          p
            ? i.jsx("div", {
                className: "rk01pc8j poy2od1o oi4qjx4h",
                children: i.jsx(c("CometLoadingAnimation.react"), { size: 40 }),
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogUnselectedItem.react",
  [
    "fbt",
    "CometContentArea.react",
    "NullStateFiles",
    "TetraNullState.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx(c("CometContentArea.react"), {
        verticalAlign: "middle",
        children: i.jsx(c("TetraNullState.react"), {
          headline: h._("Select an item to open."),
          icon: c("NullStateFiles"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogMainContentRoot.react",
  [
    "CometActivityLogMainContentContainer.react",
    "CometActivityLogMainContentRootQuery.graphql",
    "CometActivityLogUnselectedItem.react",
    "CometActivityLogUtils",
    "CometContentArea.react",
    "CometRelay",
    "CometRelayEnvironmentFactory",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useEffect;
    function a(a) {
      var e,
        f = a.props;
      a = a.queries;
      a = a.CometActivityLogMainContentQueryReference;
      e = {
        category_key:
          (e = a.variables.category_key) != null
            ? e
            : d("CometActivityLogUtils").getCategoryKeyForAll(),
        month: a.variables.month,
        person_id: a.variables.person_id,
        privacy: (e = a.variables.privacy) != null ? e : "NONE",
        timeline_visibility:
          (e = a.variables.timeline_visibility) != null ? e : "ALL",
        year: a.variables.year,
      };
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("CometActivityLogMainContentRootQuery.graphql")),
        a
      );
      j(
        function () {
          d("CometRelayEnvironmentFactory").commitLocalUpdateForEachEnvironment(
            function (a, b, c) {
              c.invalidateStore();
            }
          );
        },
        [f.children]
      );
      var g = c("gkx")("1639147");
      return i.jsx(c("CometContentArea.react"), {
        children: g
          ? i.jsx(c("CometActivityLogMainContentContainer.react"), {
              categoryKey: f.categoryKey,
              filterData: e,
              setMovingToastMessage: f.setMovingToastMessage,
              showFailureToast: f.showFailureToast,
              viewer: a.viewer,
            })
          : i.jsx(c("CometActivityLogUnselectedItem.react"), {}),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogRootFallbackComponent.react",
  [
    "fbt",
    "ActivityLogLegacyList.react",
    "CometContentArea.react",
    "CometLeftRailAndMainContentContainer.react",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometListCellGlimmer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx(c("CometLeftRailAndMainContentContainer.react"), {
        leftRailContent: i.jsx(c("CometLeftRailComponent.react"), {
          header: i.jsx(c("CometLeftRailHeader.react"), {
            title: h._("Activity Log"),
          }),
          primaryNav: i.jsx(c("ActivityLogLegacyList.react"), {
            children: i.jsx(c("CometListCellGlimmer.react"), {
              imageSize: 60,
              imageStyle: "circle",
              numberOfItems: 4,
            }),
          }),
        }),
        leftRailHeading: h._("List of Activity Log Items"),
        mainContent: i.jsx(c("CometContentArea.react"), { children: null }),
        mainContentHeading: h._("Activity Log Item"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogToast.react",
  ["CometToast.react", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      if (!c("gkx")("1606554")) return null;
      var b = a.displayTime,
        d = a.message,
        e = a.onClose;
      a = function () {
        window.setTimeout(function () {
          e();
        }, b);
      };
      return d == null
        ? null
        : h.jsxs("div", {
            className: "n99xedck q8oxv3v4 poy2od1o rkwpkyys",
            children: [
              b != null ? a() : null,
              h.jsx(c("CometToast.react"), { message: d, onDismiss: e }),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogViewOnlyHeader.react",
  [
    "CometActivityLogBanner.react",
    "CometActivityLogUtils",
    "CometActivityLogViewOnlyHeader_autoArchiveContent.graphql",
    "CometActivityLogViewOnlyHeader_storyViewer.graphql",
    "CometRelay",
    "ManageActivityFalcoEvent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = {
        root: {
          backgroundColor: "pwoa4pd7",
          end: "n7fi1qx3",
          paddingTop: "jktsbyx5",
          paddingEnd: "rv4hoivh",
          paddingBottom: "osnr6wyh",
          paddingStart: "h4z51re5",
          position: "pmk7jnqg",
          textAlign: "oqcyycmt",
          top: "kr520xx4",
          width: "k4urcfbm",
        },
        subBannerContent: {
          end: "n7fi1qx3",
          paddingTop: "discj3wi",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "ihqw7lf3",
          paddingStart: "dati1w0a",
          position: "pmk7jnqg",
          textAlign: "oqcyycmt",
          top: "miomc0xe",
          width: "k4urcfbm",
        },
      };
    function a(a) {
      var e,
        f = a.categoryKey,
        g = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometActivityLogViewOnlyHeader_storyViewer.graphql")),
          a.storyViewer
        );
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "CometActivityLogViewOnlyHeader_autoArchiveContent.graphql"
            )),
        a.autoArchiveContent
      );
      var l = f === d("CometActivityLogUtils").getCategoryKeyForArchive();
      g = l
        ? g == null
          ? void 0
          : (e = g.activity_log_archive_page) == null
          ? void 0
          : e.story_viewer
        : f === d("CometActivityLogUtils").getCategoryKeyForTrash()
        ? g == null
          ? void 0
          : (e = g.activity_log_trash_page) == null
          ? void 0
          : e.story_viewer
        : null;
      e = g == null ? void 0 : g.story_audience_banner;
      a =
        a == null
          ? void 0
          : (g = a.auto_archive) == null
          ? void 0
          : g.archive_content;
      g = l
        ? a == null
          ? void 0
          : a.auto_archive_feature_notice_banner
        : f === d("CometActivityLogUtils").getCategoryKeyForHiddenFromProfile()
        ? a == null
          ? void 0
          : a.hidden_from_profile_notice_banner
        : null;
      if (e == null && g == null) return null;
      g != null &&
        c("ManageActivityFalcoEvent").log(function () {
          return {
            event: "ma_impression",
            extra_data: { category_key: f },
            source: "auto_activity_controls_banner",
          };
        });
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx(c("CometActivityLogBanner.react"), {
            text: (l = g) != null ? l : e,
            xstyle: k.root,
          }),
          g != null
            ? j.jsx(c("CometActivityLogBanner.react"), {
                text: e,
                xstyle: k.subBannerContent,
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogView.react",
  [
    "fbt",
    "CometActivityLogConstants",
    "CometActivityLogContextActions",
    "CometActivityLogFiltersLink.react",
    "CometActivityLogHomeLink.react",
    "CometActivityLogList.react",
    "CometActivityLogToast.react",
    "CometActivityLogUtils",
    "CometActivityLogViewOnlyHeader.react",
    "CometActivityLogViewViewerQuery.graphql",
    "CometLeftRailAndMainContentContainer.react",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometRelay",
    "CometRouteParams",
    "ContentAccessAndControlFalcoEvent",
    "ManageActivityFalcoEvent",
    "PrivacySettingsStrings",
    "gkx",
    "qex",
    "react",
    "useCometActivityLogRouter",
    "useNullthrowsViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useRef,
      m = e.useState;
    function n(a) {
      switch (a) {
        case d("CometActivityLogUtils").getCategoryKeyForArchive():
          return "archive";
        case d("CometActivityLogUtils").getCategoryKeyForTrash():
          return "trash";
        case d("CometActivityLogUtils").getCategoryKeyForManage():
          return "manage_posts";
        case d("CometActivityLogUtils").getCategoryKeyForManageInteractions():
          return "manage_interactions";
        case d("CometActivityLogUtils").getCategoryKeyForManageTags():
          return "manage_tags";
        default:
          return "activity_log";
      }
    }
    function o(a, b) {
      var d = n(a);
      c("ManageActivityFalcoEvent").log(function () {
        return { entrypoint: b, event: "ma_impression", source: d };
      });
    }
    function p(a) {
      c("ContentAccessAndControlFalcoEvent").log(function () {
        return {
          event: "content_access_and_control_impression",
          extra_data: { category_key: a },
          is_access: !0,
          is_control: !1,
          surface: "activity_log",
        };
      });
    }
    function a(a) {
      var e,
        f,
        g = d("CometActivityLogUtils").useCometActivityLogStore(),
        n = d("CometActivityLogUtils").useCometActivityLogDispatcher(),
        q = m({ failureToastVisible: !1, movingToastMessage: null }),
        r = q[0],
        s = q[1];
      q = a.filterData;
      var t = c("useCometActivityLogRouter")(),
        u = t.go;
      t = d("CometRouteParams").useRouteParams();
      var v = t.entry_point;
      t = d("CometRelay").usePreloadedQuery(
        i !== void 0 ? i : (i = b("CometActivityLogViewViewerQuery.graphql")),
        a.query
      );
      var w = c("useNullthrowsViolation")(
          t.viewer,
          "Missing viewer for Activity Log"
        ),
        x = c("useNullthrowsViolation")(
          w.activity_log_actor,
          "Missing actor for Activity Log"
        ),
        y = q.category_key,
        z =
          w == null
            ? void 0
            : (e = w.activity_log_actor) == null
            ? void 0
            : e.activity_log_multi_select;
      e = function () {
        s(babelHelpers["extends"]({}, r, { failureToastVisible: !0 }));
      };
      var A = c("gkx")("1639147"),
        B = function (a, b) {
          if (!c("gkx")("1606554") || (b && !A)) return;
          var d = null;
          switch (a) {
            case "ARCHIVE":
              d = b
                ? z == null
                  ? void 0
                  : z.move_to_archive_toast
                : z == null
                ? void 0
                : z.move_to_archive_toast_singular;
              break;
            case "TRASH":
              d = b
                ? z == null
                  ? void 0
                  : z.move_to_trash_toast
                : z == null
                ? void 0
                : z.move_to_trash_toast_singular;
              break;
            case "LOG":
            case "MANAGE":
              d = b
                ? z == null
                  ? void 0
                  : z.restore_toast
                : z == null
                ? void 0
                : z.restore_toast_singular;
              break;
          }
          s(babelHelpers["extends"]({}, r, { movingToastMessage: d }));
        },
        C = l(!1);
      k(function () {
        C.current === !1 && p(y);
        C.current = !0;
        var b = typeof v === "string" ? v : null;
        o(y, b);
        c("qex")._("1949074");
        b = d("CometActivityLogUtils").currentActivityLogStore(y, g);
        b.hasNewItems &&
          (n(
            d("CometActivityLogContextActions").setHasNewItems({
              hasNewItems: !1,
              storeKey: d("CometActivityLogUtils").getStoreKeyForCategory(y),
            })
          ),
          u({
            activity_history: g.activityHistory,
            category: y,
            clearStores: !1,
            month: g.month,
            personID: g.selectedPersonID,
            personName: g.selectedPersonName,
            shouldLoadLandingPage: !1,
            year: g.year,
          }));
        g.manage_mode !== a.query.variables.manage_mode &&
          n(
            d("CometActivityLogContextActions").setManageMode(
              a.query.variables.manage_mode
            )
          );
      });
      var D = d("CometActivityLogUtils").isCometActivityLogLoading(g),
        E = (f = c("qex")._("415")) != null ? f : !1;
      f = function () {
        if (y === d("CometActivityLogUtils").getCategoryKeyForArchive())
          return d("PrivacySettingsStrings").getArchiveString();
        else if (y === d("CometActivityLogUtils").getCategoryKeyForTrash())
          return d("PrivacySettingsStrings").getTrashString();
        else if (g.manage_mode === !0 && !E) {
          var a;
          return (a =
            x == null
              ? void 0
              : (a = x.activity_log_list_page) == null
              ? void 0
              : (a = a.pivot_links) == null
              ? void 0
              : (a = a.find(function (a) {
                  return (a == null ? void 0 : a.type) === "MANAGE";
                })) == null
              ? void 0
              : a.label) != null
            ? a
            : "";
        } else return d("PrivacySettingsStrings").getActivityLogString();
      };
      return j.jsx(c("CometLeftRailAndMainContentContainer.react"), {
        leftRailContent: j.jsx(c("CometLeftRailComponent.react"), {
          header: j.jsx(c("CometLeftRailHeader.react"), {
            auxiliary: A
              ? j.jsx(c("CometActivityLogHomeLink.react"), {})
              : j.jsx(c("CometActivityLogFiltersLink.react"), {
                  filterData: q,
                  isDisabled:
                    y === d("CometActivityLogUtils").getCategoryKeyForTrash(),
                  viewer: w,
                }),
            disableProportional: !0,
            title: f(),
          }),
          primaryNav: j.jsx("div", {
            className: D ? "qwwmc0zo" : "",
            children: j.jsx(
              d("CometActivityLogList.react").CometActivityLogList,
              {
                categoryKey: y,
                filterData: q,
                pages: x,
                photoReviewString: t == null ? void 0 : t.photo_review_string,
                setMovingToastMessage: B,
                showFailureToast: e,
                viewer: t == null ? void 0 : t.viewer,
              }
            ),
          }),
        }),
        leftRailHeading: h._("List of Activity Log Items"),
        mainContent: j.jsxs(j.Fragment, {
          children: [
            j.jsx("div", {
              className: "jw7fvnv1" + (D ? " qwwmc0zo" : ""),
              children:
                (f = a.children) != null
                  ? f
                  : j.jsx(d("CometRelay").EntryPointContainer, {
                      entryPointReference: a.entryPoints.contentEntryPoint,
                      props: {
                        categoryKey: y,
                        setMovingToastMessage: B,
                        showFailureToast: e,
                      },
                    }),
            }),
            j.jsx(c("CometActivityLogViewOnlyHeader.react"), {
              autoArchiveContent: t == null ? void 0 : t.viewer,
              categoryKey: y,
              storyViewer: w == null ? void 0 : w.activity_log_actor,
            }),
            r.failureToastVisible === !1
              ? null
              : j.jsx(c("CometActivityLogToast.react"), {
                  message:
                    w == null
                      ? void 0
                      : (q = w.activity_log_actor) == null
                      ? void 0
                      : (D = q.activity_log_multi_select) == null
                      ? void 0
                      : D.failure_label,
                  onClose: function () {
                    return s(
                      babelHelpers["extends"]({}, r, {
                        failureToastVisible: !1,
                      })
                    );
                  },
                }),
            r.movingToastMessage == null
              ? null
              : j.jsx(c("CometActivityLogToast.react"), {
                  displayTime: d("CometActivityLogConstants")
                    .TOAST_DEFAULT_DISPLAY_TIME,
                  message: r.movingToastMessage,
                  onClose: function () {
                    return s(
                      babelHelpers["extends"]({}, r, {
                        movingToastMessage: null,
                      })
                    );
                  },
                }),
          ],
        }),
        mainContentHeading: h._("Activity Log Item"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometActivityLogRoot.react",
  [
    "CometActivityLogContext",
    "CometActivityLogRootFallbackComponent.react",
    "CometActivityLogUtils",
    "CometActivityLogView.react",
    "CometPlaceholder.react",
    "CometTransientDialogProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b,
        e = a.entryPoints,
        f = a.props.children;
      a = a.queries;
      a = a.CometActivityLogViewQueryReference;
      b = {
        category_key:
          (b = a.variables.category_key) != null
            ? b
            : d("CometActivityLogUtils").getCategoryKeyForAll(),
        month: a.variables.month,
        person_id: a.variables.person_id,
        privacy: (b = a.variables.privacy) != null ? b : "NONE",
        timeline_visibility:
          (b = a.variables.timeline_visibility) != null ? b : "ALL",
        year: a.variables.year,
      };
      return h.jsx(
        d("CometActivityLogContext").CometActivityLogContextProvider,
        {
          children: h.jsx(c("CometTransientDialogProvider.react"), {
            children: h.jsx(c("CometPlaceholder.react"), {
              fallback: h.jsx(
                c("CometActivityLogRootFallbackComponent.react"),
                {}
              ),
              children: h.jsx(c("CometActivityLogView.react"), {
                entryPoints: e,
                filterData: b,
                query: a,
                children: f,
              }),
            }),
          }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
