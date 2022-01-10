if (self.CavalryLogger) {
  CavalryLogger.start_js(["K+Ji5Qm"]);
}

__d(
  "CometCrossProfileNotificationsListItem_cpnInfo$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
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
          name: "text",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometCrossProfileNotificationsListItem_cpnInfo$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "actor",
            plural: !1,
            selections: [a, c],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Notification",
            kind: "LinkedField",
            name: "notif",
            plural: !1,
            selections: [
              c,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "notif_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "notif_type",
                storageKey: null,
              },
              {
                alias: null,
                args: [{ kind: "Literal", name: "site", value: "comet" }],
                kind: "ScalarField",
                name: "url",
                storageKey: 'url(site:"comet")',
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "seen_state",
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Literal",
                    name: "notif_option_set_context",
                    value: {
                      client_action_types: [
                        "HIDE",
                        "UNSUB",
                        "TOGGLE_ACTIVE",
                        "OPEN_IN_INSPECTOR",
                        "REPORT_BUG",
                        "OPEN_PCU_REMINDERS_DIALOG",
                      ],
                      environment: "MAIN_SURFACE",
                      is_comet: !0,
                      supported_display_styles: [
                        {
                          option_display_styles: ["CHEVRON_MENU_OPTION"],
                          option_set_display_style: "CHEVRON_MENU",
                        },
                      ],
                    },
                  },
                ],
                concreteType: "NotificationOptionSetsConnection",
                kind: "LinkedField",
                name: "notif_option_sets",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "NotificationOptionSetsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "NotifOptionSet",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "NotifOptionSetOptionsConnection",
                            kind: "LinkedField",
                            name: "notif_options",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "NotifOptionSetOptionsEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: "NotifOption",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [
                                      c,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "notif_option_renderer",
                                        plural: !1,
                                        selections: [
                                          a,
                                          {
                                            kind: "InlineFragment",
                                            selections: [
                                              {
                                                args: null,
                                                documentName:
                                                  "CometNotificationsDropdownMenu_notification",
                                                fragmentName:
                                                  "CometNotificationsDropdownHideMenuItem_notifOptionRenderer",
                                                fragmentPropName:
                                                  "notifOptionRenderer",
                                                kind: "ModuleImport",
                                              },
                                            ],
                                            type: "NotifOptionHideRenderer",
                                            abstractKey: null,
                                          },
                                          {
                                            kind: "InlineFragment",
                                            selections: [
                                              {
                                                args: null,
                                                documentName:
                                                  "CometNotificationsDropdownMenu_notification",
                                                fragmentName:
                                                  "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer",
                                                fragmentPropName:
                                                  "notifOptionRenderer",
                                                kind: "ModuleImport",
                                              },
                                            ],
                                            type: "NotifOptionDefaultRenderer",
                                            abstractKey: null,
                                          },
                                          {
                                            kind: "InlineFragment",
                                            selections: [
                                              {
                                                args: null,
                                                documentName:
                                                  "CometNotificationsDropdownMenu_notification",
                                                fragmentName:
                                                  "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer",
                                                fragmentPropName:
                                                  "notifOptionRenderer",
                                                kind: "ModuleImport",
                                              },
                                            ],
                                            type: "NotifOptionDialogRenderer",
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
                storageKey:
                  'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG","OPEN_PCU_REMINDERS_DIALOG"],"environment":"MAIN_SURFACE","is_comet":true,"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})',
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "notif_attachments",
                plural: !0,
                selections: [
                  a,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometNotificationsListItemAttachment_notification",
                        fragmentName:
                          "CometNotificationsListItemFriendRequestAttachment_notifAttachments",
                        fragmentPropName: "notifAttachments",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "FriendRequestNotifAttachment",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometNotificationsListItemAttachment_notification",
                        fragmentName:
                          "CometNotificationsListItemInlineCTAAttachment_notifAttachments",
                        fragmentPropName: "notifAttachments",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "InlineCTACometNotifAttachment",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometNotificationsListItemAttachment_notification",
                        fragmentName:
                          "CometNotificationsListItemPageInviteAttachment_notifAttachments",
                        fragmentPropName: "notifAttachments",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "PageInviteNotifAttachment",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometNotificationsListItemAttachment_notification",
                        fragmentName:
                          "CometNotificationsListItemQuickPromotionAttachment_notifAttachments",
                        fragmentPropName: "notifAttachments",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "QuickPromotionNotifAttachment",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometNotificationsListItemAttachment_notification",
                        fragmentName:
                          "CometNotificationsListItemInlineSurveyAttachment_attachment",
                        fragmentPropName: "attachment",
                        kind: "ModuleImport",
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "StructuredSurveySession",
                        kind: "LinkedField",
                        name: "inline_survey",
                        plural: !1,
                        selections: [a],
                        storageKey: null,
                      },
                    ],
                    type: "InlineSurveyNotifAttachment",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "body",
                plural: !1,
                selections: [
                  d,
                  {
                    args: null,
                    fragment: b(
                      "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
                    ),
                    kind: "FragmentSpread",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "height", value: 56 },
                  { kind: "Variable", name: "scale", variableName: "scale" },
                  { kind: "Literal", name: "width", value: 56 },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "notif_image",
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
                alias: "creation_time",
                args: null,
                concreteType: "CreationTimeWithRelativeText",
                kind: "LinkedField",
                name: "creation_time_with_relative_text",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "timestamp",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "GlyphIconData",
                kind: "LinkedField",
                name: "icon_data",
                plural: !1,
                selections: [
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
                    kind: "ScalarField",
                    name: "glyph_name",
                    storageKey: null,
                  },
                ],
                storageKey: null,
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
                args: null,
                concreteType: "NotificationContextInfo",
                kind: "LinkedField",
                name: "context_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "short_text",
                    plural: !1,
                    selections: [d],
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
                    name: "is_hidden",
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
            concreteType: "User",
            kind: "LinkedField",
            name: "target_viewer",
            plural: !1,
            selections: [
              c,
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
                name: "profile_plus_primary_platform_tool",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "target_viewer_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_disable_profile_switch_dialog",
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
  "CometCrossProfileNotificationsListItem_cpnInfo.graphql",
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
        name: "CometCrossProfileNotificationsListItem_cpnInfo",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "actor",
            plural: !1,
            selections: [a],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Notification",
            kind: "LinkedField",
            name: "notif",
            plural: !1,
            selections: [
              a,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "notif_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "notif_type",
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "useCometNotificationURL_notification",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometNotificationsListItem_notification",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "target_viewer",
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
                args: null,
                kind: "ScalarField",
                name: "profile_plus_primary_platform_tool",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "target_viewer_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_disable_profile_switch_dialog",
            storageKey: null,
          },
        ],
        type: "CrossProfileNotificationInfo",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
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
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        d = [c],
        e = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "undo_server_action",
            storageKey: null,
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "NotifOption",
            kind: "LinkedField",
            name: "notif_option",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "option_display",
                plural: !1,
                selections: [
                  a,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "image_icon",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "text",
                        plural: !1,
                        selections: [
                          c,
                          {
                            args: null,
                            fragment: b(
                              "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
                            ),
                            kind: "FragmentSpread",
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "subtext",
                        plural: !1,
                        selections: d,
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "undo_text",
                        plural: !1,
                        selections: d,
                        storageKey: null,
                      },
                    ],
                    type: "GenericNotifOptionRowDisplay",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "server_action",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "client_info",
                plural: !1,
                selections: [
                  a,
                  {
                    kind: "InlineFragment",
                    selections: e,
                    type: "TypeOnlyNotifOptionClientAction",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: e,
                    type: "SubscriptionTwoStateClientAction",
                    abstractKey: null,
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
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        b = [a],
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "undo_server_action",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "NotifOption",
            kind: "LinkedField",
            name: "notif_option",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "option_display",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "image_icon",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "text",
                        plural: !1,
                        selections: [
                          a,
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometTextWithEntitiesRelay_textWithEntities",
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "subtext",
                        plural: !1,
                        selections: b,
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "undo_text",
                        plural: !1,
                        selections: b,
                        storageKey: null,
                      },
                    ],
                    type: "GenericNotifOptionRowDisplay",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "server_action",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "client_info",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: c,
                    type: "TypeOnlyNotifOptionClientAction",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: c,
                    type: "SubscriptionTwoStateClientAction",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "NotifOptionDefaultRenderer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
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
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "NotifOption",
            kind: "LinkedField",
            name: "notif_option",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "option_display",
                plural: !1,
                selections: [
                  a,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "image_icon",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "text",
                        plural: !1,
                        selections: [
                          c,
                          {
                            args: null,
                            fragment: b(
                              "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
                            ),
                            kind: "FragmentSpread",
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "subtext",
                        plural: !1,
                        selections: [c],
                        storageKey: null,
                      },
                    ],
                    type: "GenericNotifOptionRowDisplay",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "server_action",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "client_info",
                plural: !1,
                selections: [
                  a,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "action_type",
                        storageKey: null,
                      },
                    ],
                    type: "TypeOnlyNotifOptionClientAction",
                    abstractKey: null,
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
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "text",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "NotifOption",
            kind: "LinkedField",
            name: "notif_option",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "option_display",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "image_icon",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "text",
                        plural: !1,
                        selections: [
                          a,
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometTextWithEntitiesRelay_textWithEntities",
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "subtext",
                        plural: !1,
                        selections: [a],
                        storageKey: null,
                      },
                    ],
                    type: "GenericNotifOptionRowDisplay",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "server_action",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "client_info",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "action_type",
                        storageKey: null,
                      },
                    ],
                    type: "TypeOnlyNotifOptionClientAction",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "NotifOptionDialogRenderer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsDropdownHideMenuItem_notifOptionRenderer$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
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
        c = [
          {
            args: null,
            fragment: b(
              "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
            ),
            kind: "FragmentSpread",
          },
        ],
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "undo_server_action",
            storageKey: null,
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometNotificationsDropdownHideMenuItem_notifOptionRenderer$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "NotifOption",
            kind: "LinkedField",
            name: "notif_option",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "option_display",
                plural: !1,
                selections: [
                  a,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "image_icon",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "text",
                        plural: !1,
                        selections: c,
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "subtext",
                        plural: !1,
                        selections: c,
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "undo_text",
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
                    ],
                    type: "GenericNotifOptionRowDisplay",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "server_action",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "client_info",
                plural: !1,
                selections: [
                  a,
                  {
                    kind: "InlineFragment",
                    selections: d,
                    type: "TypeOnlyNotifOptionClientAction",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: d,
                    type: "SubscriptionTwoStateClientAction",
                    abstractKey: null,
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
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsDropdownHideMenuItem_notifOptionRenderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometTextWithEntitiesRelay_textWithEntities",
          },
        ],
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "undo_server_action",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometNotificationsDropdownHideMenuItem_notifOptionRenderer",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "NotifOption",
            kind: "LinkedField",
            name: "notif_option",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "option_display",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "image_icon",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "text",
                        plural: !1,
                        selections: a,
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "subtext",
                        plural: !1,
                        selections: a,
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "undo_text",
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
                    ],
                    type: "GenericNotifOptionRowDisplay",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "server_action",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "client_info",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: b,
                    type: "TypeOnlyNotifOptionClientAction",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: b,
                    type: "SubscriptionTwoStateClientAction",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "NotifOptionHideRenderer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsOptionsActionMutation.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        c = [{ kind: "Variable", name: "data", variableName: "input" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometNotificationsOptionsActionMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "NotifOptionActionResponsePayload",
              kind: "LinkedField",
              name: "notif_option_action",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Notification",
                  kind: "LinkedField",
                  name: "notification",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometNotificationsListItem_notification",
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
          name: "CometNotificationsOptionsActionMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "NotifOptionActionResponsePayload",
              kind: "LinkedField",
              name: "notif_option_action",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Notification",
                  kind: "LinkedField",
                  name: "notification",
                  plural: !1,
                  selections: [
                    d,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "notif_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "notif_type",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "seen_state",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "notif_option_set_context",
                          value: {
                            client_action_types: [
                              "HIDE",
                              "UNSUB",
                              "TOGGLE_ACTIVE",
                              "OPEN_IN_INSPECTOR",
                              "REPORT_BUG",
                              "OPEN_PCU_REMINDERS_DIALOG",
                            ],
                            environment: "MAIN_SURFACE",
                            is_comet: !0,
                            supported_display_styles: [
                              {
                                option_display_styles: ["CHEVRON_MENU_OPTION"],
                                option_set_display_style: "CHEVRON_MENU",
                              },
                            ],
                          },
                        },
                      ],
                      concreteType: "NotificationOptionSetsConnection",
                      kind: "LinkedField",
                      name: "notif_option_sets",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "NotificationOptionSetsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "NotifOptionSet",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "NotifOptionSetOptionsConnection",
                                  kind: "LinkedField",
                                  name: "notif_options",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "NotifOptionSetOptionsEdge",
                                      kind: "LinkedField",
                                      name: "edges",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "NotifOption",
                                          kind: "LinkedField",
                                          name: "node",
                                          plural: !1,
                                          selections: [
                                            d,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "notif_option_renderer",
                                              plural: !1,
                                              selections: [
                                                e,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      args: null,
                                                      documentName:
                                                        "CometNotificationsDropdownMenu_notification",
                                                      fragmentName:
                                                        "CometNotificationsDropdownHideMenuItem_notifOptionRenderer",
                                                      fragmentPropName:
                                                        "notifOptionRenderer",
                                                      kind: "ModuleImport",
                                                    },
                                                  ],
                                                  type: "NotifOptionHideRenderer",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      args: null,
                                                      documentName:
                                                        "CometNotificationsDropdownMenu_notification",
                                                      fragmentName:
                                                        "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer",
                                                      fragmentPropName:
                                                        "notifOptionRenderer",
                                                      kind: "ModuleImport",
                                                    },
                                                  ],
                                                  type: "NotifOptionDefaultRenderer",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      args: null,
                                                      documentName:
                                                        "CometNotificationsDropdownMenu_notification",
                                                      fragmentName:
                                                        "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer",
                                                      fragmentPropName:
                                                        "notifOptionRenderer",
                                                      kind: "ModuleImport",
                                                    },
                                                  ],
                                                  type: "NotifOptionDialogRenderer",
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
                      storageKey:
                        'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG","OPEN_PCU_REMINDERS_DIALOG"],"environment":"MAIN_SURFACE","is_comet":true,"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})',
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "notif_attachments",
                      plural: !0,
                      selections: [
                        e,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometNotificationsListItemAttachment_notification",
                              fragmentName:
                                "CometNotificationsListItemFriendRequestAttachment_notifAttachments",
                              fragmentPropName: "notifAttachments",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "FriendRequestNotifAttachment",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometNotificationsListItemAttachment_notification",
                              fragmentName:
                                "CometNotificationsListItemInlineCTAAttachment_notifAttachments",
                              fragmentPropName: "notifAttachments",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "InlineCTACometNotifAttachment",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometNotificationsListItemAttachment_notification",
                              fragmentName:
                                "CometNotificationsListItemPageInviteAttachment_notifAttachments",
                              fragmentPropName: "notifAttachments",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "PageInviteNotifAttachment",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometNotificationsListItemAttachment_notification",
                              fragmentName:
                                "CometNotificationsListItemQuickPromotionAttachment_notifAttachments",
                              fragmentPropName: "notifAttachments",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "QuickPromotionNotifAttachment",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometNotificationsListItemAttachment_notification",
                              fragmentName:
                                "CometNotificationsListItemInlineSurveyAttachment_attachment",
                              fragmentPropName: "attachment",
                              kind: "ModuleImport",
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "StructuredSurveySession",
                              kind: "LinkedField",
                              name: "inline_survey",
                              plural: !1,
                              selections: [e],
                              storageKey: null,
                            },
                          ],
                          type: "InlineSurveyNotifAttachment",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "body",
                      plural: !1,
                      selections: [
                        f,
                        {
                          args: null,
                          fragment: b(
                            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
                          ),
                          kind: "FragmentSpread",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "height", value: 56 },
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
                        { kind: "Literal", name: "width", value: 56 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "notif_image",
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
                      args: [{ kind: "Literal", name: "site", value: "comet" }],
                      kind: "ScalarField",
                      name: "url",
                      storageKey: 'url(site:"comet")',
                    },
                    {
                      alias: "creation_time",
                      args: null,
                      concreteType: "CreationTimeWithRelativeText",
                      kind: "LinkedField",
                      name: "creation_time_with_relative_text",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "timestamp",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "GlyphIconData",
                      kind: "LinkedField",
                      name: "icon_data",
                      plural: !1,
                      selections: [
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
                          kind: "ScalarField",
                          name: "glyph_name",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
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
                      args: null,
                      concreteType: "NotificationContextInfo",
                      kind: "LinkedField",
                      name: "context_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "TextWithEntities",
                          kind: "LinkedField",
                          name: "short_text",
                          plural: !1,
                          selections: [f],
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
                          name: "is_hidden",
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
          id: "4894473353899439",
          metadata: {},
          name: "CometNotificationsOptionsActionMutation",
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
  "PrivacyCheckupCometRemindersDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4707663635970908",
        metadata: {},
        name: "PrivacyCheckupCometRemindersDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfilePlusAdminPermissionsConstants",
  ["gkx", "killswitch"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 12,
      i = 6;
    function a(a) {
      return a === "can_have_limited_access_roles_only" ? h : i;
    }
    d = ["Messages", "Permissions", "Page Deletion"];
    function b() {
      return c("killswitch")("SEPARATE_MESSAGING_COMACTIVITY_PAGE_PERMS");
    }
    e = [
      "Content",
      "Messages",
      "Community Activity",
      "Ads",
      "Insights",
      "Permissions",
      "Page Deletion",
    ];
    f = ["Content", "Messages", "Community Activity", "Ads", "Insights"];
    c("gkx")("1130") && (e.push("Earnings"), f.push("Earnings"));
    var j = "https://www.facebook.com/business/help/582754542592549",
      k = "https://www.facebook.com/policies/pages_groups_events/",
      l = "https://www.facebook.com/business/help/294498964994409#tools",
      m =
        "https://www.facebook.com/business/help/298014914912551?id=418112142508425",
      n = "https://www.facebook.com/business/help/294498964994409";
    g.getInitialNumOfAdminsToShow = a;
    g.PERMISSIONS_NOT_DISPLAYED_IN_VIEW_ACCESS = d;
    g.getSeperateMessagesAndCommunityActivityKS = b;
    g.FULL_ACCESS_PERMISSIONS = e;
    g.CORE_APP_EDITOR_PERMISSIONS = f;
    g.LEARN_MORE_ABOUT_SHARED_PROFILE_LINK = j;
    g.PAGE_TERMS_LINK = k;
    g.VIEW_TOOLS_LINK = l;
    g.PAGE_MANAGEMENT_HISTORY_LINK = m;
    g.LEARN_MORE_ABOUT_RESTRICTED_ROLES = n;
  },
  98
);
__d(
  "CometCrossProfileNotificationStrings",
  ["fbt", "CometLink.react", "ProfilePlusAdminPermissionsConstants", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      return h._(
        "This notification is from your Page {=[additional profile's name]}. Switch into your Page to view it. You can switch between your Page and profile anytime.",
        [
          h._param(
            "=[additional profile's name]",
            i.jsx("strong", {
              children: h._("{additional profile's name}", [
                h._param("additional profile's name", a),
              ]),
            })
          ),
        ]
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      return h._(
        "This notification is from your profile {=[additional profile's name]}. Switch to your profile to view this notification and start using Facebook as your profile.",
        [
          h._param(
            "=[additional profile's name]",
            i.jsx("strong", {
              children: h._("{additional profile's name}", [
                h._param("additional profile's name", a),
              ]),
            })
          ),
        ]
      );
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function e(a) {
      return h._("Switch into {additional profile's name}", [
        h._param("additional profile's name", a),
      ]);
    }
    e.displayName = e.name + " [from " + f.id + "]";
    function j() {
      return h._("Switch");
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k() {
      return h._("Cancel");
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l() {
      return h._("Failed to switch to your Page");
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m() {
      return h._("An unknown error occurred.");
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n() {
      return h._("Go to Tools");
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      return h._(
        "You can comment and interact as {=[additional profile's name]} with tools.",
        [
          h._param(
            "=[additional profile's name]",
            i.jsx("strong", {
              children: h._("{additional profile's name}", [
                h._param("additional profile's name", a),
              ]),
            })
          ),
        ]
      );
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p() {
      return h._(
        "{Link to a help center article that describes more information about limited access roles.}",
        [
          h._param(
            "Link to a help center article that describes more information about limited access roles.",
            i.jsx(c("CometLink.react"), {
              href: d("ProfilePlusAdminPermissionsConstants")
                .LEARN_MORE_ABOUT_RESTRICTED_ROLES,
              target: "_blank",
              children: "Learn More",
            })
          ),
        ]
      );
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function q() {
      return h._("{=Creator Studio}", [
        h._param(
          "=Creator Studio",
          i.jsx("strong", { children: h._("Creator Studio") })
        ),
      ]);
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function r() {
      return h._("{=Facebook Business Suite}", [
        h._param(
          "=Facebook Business Suite",
          i.jsx("strong", { children: h._("Facebook Business Suite") })
        ),
      ]);
    }
    r.displayName = r.name + " [from " + f.id + "]";
    g.getProfileSwitchDialogBodyForAP = a;
    g.getProfileSwitchDialogBodyForProfile = b;
    g.getCAAProfileSwitchDialogTitle = e;
    g.getCAAProfileSwitchDialogConfirmText = j;
    g.getCAAProfileSwitchDialogCancelText = k;
    g.getCAAProfileSwitchErrorDialogTitle = l;
    g.getCAAProfileSwitchErrorDialogBody = m;
    g.getLARGoToToolsDialogTitleText = n;
    g.getLARGoToToolsDialogHeadlineText = o;
    g.getLARGoToToolsDialogLearnMoreLink = p;
    g.getLARGoToToolsDialogCreatorStudioTitle = q;
    g.getLARGoToToolsDialogFacebookBusinessSuiteTitle = r;
  },
  98
);
__d(
  "useCometCrossProfileNotificationsCAAConfirmationDialog",
  [
    "CometCrossProfileNotificationStrings",
    "CometInteractionTracingModuleProfileSwitchingTtiQPLEvent",
    "ProfileCometContext",
    "react",
    "requireDeferred",
    "useCometAlertDialog",
    "useCometConfirmationDialog",
    "useCometInteractionTracing",
    "useCometProfileSwitchWithLogoutMutation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = c("requireDeferred")(
        "ProfilePlusCrossProfileNotificationFalcoEvent"
      ).__setRef("useCometCrossProfileNotificationsCAAConfirmationDialog");
    function a(a) {
      var b = a.adminId,
        e = a.isAdditionalProfile,
        f = a.medium,
        g = a.notifId,
        k = a.notifType,
        l = a.profileId,
        m = a.profileName,
        n = a.url;
      a = c("useCometAlertDialog")();
      var o = a[0];
      a = c("useCometConfirmationDialog")();
      var p = a[0];
      a = i(c("ProfileCometContext"));
      var q = a.viewerID,
        r = c("useCometInteractionTracing")(
          c("CometInteractionTracingModuleProfileSwitchingTtiQPLEvent"),
          "responsive",
          "INTERACTION"
        ),
        s = h(
          function () {
            j.onReady(function (a) {
              a = a.log;
              return a(function () {
                var a;
                return {
                  event: "VIEW_COMET_SWITCHING_DIALOG",
                  logged_in_user_id: (a = b) != null ? a : "",
                  medium: f,
                  ndid: "",
                  notif_id: (a = g) != null ? a : "",
                  notif_type: (a = k) != null ? a : "",
                  target_viewer_id: l,
                  target_viewer_type: "MP_CORE_APP_ADMIN",
                  underlying_admin_id: (a = b) != null ? a : "",
                };
              });
            });
          },
          [l, b, f, g, k]
        ),
        t = h(
          function () {
            j.onReady(function (a) {
              a = a.log;
              return a(function () {
                var a;
                return {
                  event: "CONFIRM_SWITCHING",
                  logged_in_user_id: (a = b) != null ? a : "",
                  medium: f,
                  ndid: "",
                  notif_id: (a = g) != null ? a : "",
                  notif_type: (a = k) != null ? a : "",
                  target_viewer_id: l,
                  target_viewer_type: "MP_CORE_APP_ADMIN",
                  underlying_admin_id: (a = b) != null ? a : "",
                };
              });
            });
          },
          [l, b, f, g, k]
        ),
        u = h(
          function () {
            j.onReady(function (a) {
              a = a.log;
              return a(function () {
                var a;
                return {
                  event: "CANCEL_SWITCHING",
                  logged_in_user_id: (a = b) != null ? a : "",
                  medium: f,
                  ndid: "",
                  notif_id: (a = g) != null ? a : "",
                  notif_type: (a = k) != null ? a : "",
                  target_viewer_id: l,
                  target_viewer_type: "MP_CORE_APP_ADMIN",
                  underlying_admin_id: (a = b) != null ? a : "",
                };
              });
            });
          },
          [l, b, f, g, k]
        ),
        v = c("useCometProfileSwitchWithLogoutMutation")(l, n, function (a) {
          o(
            {
              body: d(
                "CometCrossProfileNotificationStrings"
              ).getCAAProfileSwitchErrorDialogBody(),
              title: d(
                "CometCrossProfileNotificationStrings"
              ).getCAAProfileSwitchErrorDialogTitle(),
            },
            function () {}
          );
        });
      return h(
        function () {
          n != null &&
            m != null &&
            (s(),
            p(
              {
                body: e
                  ? d(
                      "CometCrossProfileNotificationStrings"
                    ).getProfileSwitchDialogBodyForAP(m)
                  : d(
                      "CometCrossProfileNotificationStrings"
                    ).getProfileSwitchDialogBodyForProfile(m),
                cancel: d(
                  "CometCrossProfileNotificationStrings"
                ).getCAAProfileSwitchDialogCancelText(),
                confirm: d(
                  "CometCrossProfileNotificationStrings"
                ).getCAAProfileSwitchDialogConfirmText(),
                title: d(
                  "CometCrossProfileNotificationStrings"
                ).getCAAProfileSwitchDialogTitle(m),
              },
              function () {
                t();
                return r(function (a) {
                  a.addMetadata("origin", "cross_profile_notifications"),
                    a.addMetadata("landing_surface", "post_permalink"),
                    a.addMetadata("originating_user_id", q),
                    v();
                });
              },
              function () {
                u();
              }
            ));
        },
        [e, u, t, s, m, p, v, r, q, n]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometCrossProfileNotificationsListItem.react",
  [
    "CometCrossProfileNotificationsListItem_cpnInfo.graphql",
    "CometNotificationsListItem.react",
    "CometRelay",
    "JSResourceForInteraction",
    "cr:11450",
    "gkx",
    "react",
    "useCometCrossProfileNotificationsCAAConfirmationDialog",
    "useCometLazyDialog",
    "useCometNotificationURL",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback,
      k = c("JSResourceForInteraction")(
        "CometCrossProfileNotificationsLARConfirmationDialog.react"
      ).__setRef("CometCrossProfileNotificationsListItem.react");
    function a(a) {
      var e,
        f = a.actor,
        g = a.cpnInfo,
        l = a.isFromPageNotification,
        m = a.isNotificationsRoute;
      m = m === void 0 ? !1 : m;
      var n = a.onClick,
        o = a.onClose,
        p = a.replace,
        q = a.routeTarget,
        r = a.shouldPrefetch;
      r = r === void 0 ? !1 : r;
      var s = a.showSelectedState;
      s = s === void 0 ? !1 : s;
      a = a.trackingData;
      g = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometCrossProfileNotificationsListItem_cpnInfo.graphql")),
        g
      );
      var t = (e = g.notif) == null ? void 0 : e.id,
        u = (e = g.notif) == null ? void 0 : e.notif_id,
        v = (e = g.notif) == null ? void 0 : e.notif_type,
        w = (e = g.actor) == null ? void 0 : e.id,
        x = g.target_viewer_type === "MP_CORE_APP_ADMIN",
        y = g.target_viewer_type === "MP_LIMITED_ACCESS_ROLE",
        z = (e = g.target_viewer) == null ? void 0 : e.name,
        A = (e = g.target_viewer) == null ? void 0 : e.id,
        B =
          (e = g.target_viewer) == null
            ? void 0
            : e.profile_plus_primary_platform_tool,
        C = c("useCometNotificationURL")(g.notif),
        D = g.should_disable_profile_switch_dialog,
        E = c("useCometCrossProfileNotificationsCAAConfirmationDialog")({
          adminId: w,
          isAdditionalProfile: !0,
          medium: "jewel",
          notifId: u,
          notifType: v,
          profileId: (e = A) != null ? e : "",
          profileName: z,
          url: C,
        });
      e = c("useCometLazyDialog")(k);
      var F = e[0],
        G = b("cr:11450")(A, C);
      e = j(
        function () {
          if (t != null && w != null) {
            n && n();
            if (D === !0) return;
            C != null &&
              z != null &&
              (x && A != null
                ? c("gkx")("3164")
                  ? G && G()
                  : E()
                : C != null &&
                  y &&
                  F({
                    additionalProfileId: A,
                    additionalProfileName: z,
                    adminId: w,
                    larLandingPlatform: B,
                    notifId: u,
                    notifType: v,
                    onClose: function () {},
                    url: C,
                  }));
          }
        },
        [w, B, x, y, u, v, t, n, A, z, G, E, D, F, C]
      );
      return g.notif == null
        ? null
        : i.jsx(c("CometNotificationsListItem.react"), {
            actor: f,
            isFromPageNotification: l,
            isNotificationsRoute: m,
            notification: g.notif,
            onClick: e,
            onClose: o,
            preventLocalNavigation:
              C != null && z != null && t != null && w != null && D !== !0,
            replace: p,
            routeTarget: q,
            shouldPrefetch: r,
            showSelectedState: s,
            trackingData: a,
          });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsOptionsActionMutation",
  ["CometNotificationsOptionsActionMutation.graphql", "CometRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometNotificationsOptionsActionMutation.graphql"));
    function a(a, b, c, e, f) {
      return d("CometRelay").commitMutation(b, {
        mutation: i,
        onCompleted: e && e.onSuccess,
        onError: e && e.onError,
        optimisticUpdater: f,
        variables: c,
      });
    }
    g.doOptionAction = a;
  },
  98
);
__d(
  "cometNotificationOptionsIcons",
  ["ix", "fbicon"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      bug: d("fbicon")._(h("530512"), 20),
      hide: d("fbicon")._(h("577043"), 20),
      settings: d("fbicon")._(h("497570"), 20),
      unfollow: d("fbicon")._(h("578906"), 20),
    };
    b = a.settings;
    g.cometNotificationOptionsIconMap = a;
    g.DEFAULT_ICON = b;
  },
  98
);
__d(
  "CometNotificationsDropdownDefaultMenuItem.react",
  [
    "fbt",
    "CometBoldedEntityRenderer",
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometMenuItem.react",
    "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer.graphql",
    "CometNotificationsOptionsActionMutation",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "WebPixelRatio",
    "cometNotificationOptionsIcons",
    "cometPushToast",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = { "*": [c("CometBoldedEntityRenderer")] },
      m = [c("CometEmoticonTransform")(), c("CometEmojiTransform")()];
    function a(a) {
      var e,
        f,
        g = a.notificationId,
        n = a.notifOptionRenderer;
      a = a.testid;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer.graphql"
            )),
        n
      );
      var o = d("CometRelay").useRelayEnvironment();
      n =
        a == null
          ? void 0
          : (n = a.notif_option) == null
          ? void 0
          : n.option_display;
      e = (e = n == null ? void 0 : n.image_icon) != null ? e : "";
      e =
        (e = d("cometNotificationOptionsIcons").cometNotificationOptionsIconMap[
          e
        ]) != null
          ? e
          : d("cometNotificationOptionsIcons").DEFAULT_ICON;
      var p = n == null ? void 0 : n.text,
        q = n == null ? void 0 : n.subtext,
        r =
          a == null
            ? void 0
            : (f = a.notif_option) == null
            ? void 0
            : f.server_action,
        s =
          a == null
            ? void 0
            : (f = a.notif_option) == null
            ? void 0
            : (a = f.client_info) == null
            ? void 0
            : a.undo_server_action,
        t = n == null ? void 0 : (f = n.undo_text) == null ? void 0 : f.text;
      a = k(
        function () {
          if (s == null || t == null) return;
          d("CometNotificationsOptionsActionMutation").doOptionAction(
            g,
            o,
            {
              input: { action_type: s, is_comet: !0 },
              scale: d("WebPixelRatio").get(),
            },
            {}
          );
        },
        [o, g, t, s]
      );
      var u =
        s != null && t != null
          ? {
              action: { label: h._("Undo"), onPress: a },
              message: t,
              truncateText: !1,
            }
          : null;
      n = k(
        function () {
          if (r == null) return;
          d("CometNotificationsOptionsActionMutation").doOptionAction(
            g,
            o,
            {
              input: { action_type: r, is_comet: !0 },
              scale: d("WebPixelRatio").get(),
            },
            {
              onSuccess: function () {
                var a = c("qex")._("89") ? 6e3 : 3e3;
                u && d("cometPushToast").cometPushToast(u, a);
              },
            }
          );
        },
        [r, o, g, u]
      );
      if (e == null || p == null || (r == null && q == null)) return null;
      return (q == null ? void 0 : q.text) != null
        ? j.jsx(c("CometMenuItem.react"), {
            href: q.text,
            icon: e,
            primaryText: j.jsx(c("CometTextWithEntitiesRelay.react"), {
              renderers: l,
              textWithEntities: p,
              transforms: m,
            }),
            target: "_blank",
            testid: void 0,
          })
        : j.jsx(c("CometMenuItem.react"), {
            icon: e,
            onClick: n,
            primaryText: j.jsx(c("CometTextWithEntitiesRelay.react"), {
              renderers: l,
              textWithEntities: p,
              transforms: m,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PrivacyCheckupEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744197");
    c = b("FalcoLoggerInternal").create("privacy_checkup_event", a);
    e.exports = c;
  },
  null
);
__d(
  "logPrivacyCheckupEvent",
  ["PrivacyCheckupEventFalcoEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = babelHelpers["extends"]({}, a, { client_type: "comet" });
      c("PrivacyCheckupEventFalcoEvent").log(function () {
        return b;
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "PrivacyCheckupLoggingContext",
  ["logPrivacyCheckupEvent", "react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    e = b.createContext;
    var h = b.useCallback,
      i = b.useContext,
      j = e({ type: "none" });
    function a() {
      var a = i(j),
        b = h(
          function (b) {
            var d = {};
            switch (a.type) {
              case "review_step":
                d = {
                  checkup_id: a.reviewID,
                  step_id: a.stepID,
                  step_num: a.stepNum,
                };
                break;
              case "landing_page":
                d = {
                  entry_point: a.source,
                  topics_collection_id: a.topicsCollectionID,
                };
                break;
              default:
                c("recoverableViolation")(
                  "Logging context should be set if logPrivacyCheckupEventWithContext() is called",
                  "privacy_checkup"
                );
                break;
            }
            c("logPrivacyCheckupEvent")(babelHelpers["extends"]({}, b, d));
          },
          [a]
        );
      return b;
    }
    g.PrivacyCheckupLoggingContext = j;
    g.usePrivacyCheckupLoggingContext = a;
  },
  98
);
__d(
  "PrivacyCheckupRemindersUtils",
  [
    "JSResourceForInteraction",
    "PrivacyCheckupCometRemindersDialogQuery$Parameters",
    "PrivacyCheckupLoggingContext",
    "react",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = {
        getPreloadProps: function (a) {
          return {
            queries: {
              queryRef: {
                parameters: b(
                  "PrivacyCheckupCometRemindersDialogQuery$Parameters"
                ),
                variables: { topicsCollectionID: a.topicsCollectionID },
              },
            },
          };
        },
        root: c("JSResourceForInteraction")(
          "PrivacyCheckupCometRemindersDialog.react"
        ).__setRef("PrivacyCheckupRemindersUtils"),
      };
    function a(a) {
      var b = a.topicsCollectionID;
      a = c("useCometEntryPointDialog")(i, { topicsCollectionID: b });
      var e = a[0];
      a = a[1];
      var f = d(
        "PrivacyCheckupLoggingContext"
      ).usePrivacyCheckupLoggingContext();
      return [
        h(
          function () {
            f({ event: "reminder_interaction", topics_collection_id: b }),
              e({});
          },
          [f, e, b]
        ),
        a,
      ];
    }
    g.useRemindersDialogCallback = a;
  },
  98
);
__d(
  "useNotificationsPCURemindersDialog",
  ["PCUTopicsCollectionID", "PrivacyCheckupRemindersUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = c("PCUTopicsCollectionID").TOPICS_COLLECTION_ID;
      return d("PrivacyCheckupRemindersUtils").useRemindersDialogCallback({
        topicsCollectionID: a,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useNotificationsReportBug",
  ["react", "useCometReportBug"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.notificationNotifId,
        d = a.notifType;
      a = c("useCometReportBug")();
      var e = a[0];
      a = a[1];
      var f = h(
        function () {
          var a = { notif_id: b, notif_type: d };
          e({
            attachedMetadata: a,
            initialProduct: "notifications",
            isProductFieldDisabled: !0,
          });
        },
        [d, b, e]
      );
      return [f, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useNotificationsDialogs",
  ["useNotificationsPCURemindersDialog", "useNotificationsReportBug"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.actionType,
        d = a.notificationNotifId;
      a = a.notifType;
      var e = c("useNotificationsPCURemindersDialog")();
      a = c("useNotificationsReportBug")({
        notifType: a,
        notificationNotifId: d,
      });
      switch (b) {
        case "OPEN_PCU_REMINDERS_DIALOG":
          return e;
        case "REPORT_BUG":
          return a;
        default:
          return null;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsDropdownDialogMenuItem.react",
  [
    "CometBoldedEntityRenderer",
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometMenuItem.react",
    "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer.graphql",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "cometNotificationOptionsIcons",
    "react",
    "useNotificationsDialogs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = { "*": [c("CometBoldedEntityRenderer")] },
      k = [c("CometEmoticonTransform")(), c("CometEmojiTransform")()];
    function a(a) {
      var e,
        f,
        g = a.notificationNotifId,
        l = a.notifOptionRenderer,
        m = a.notifType;
      a = a.testid;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer.graphql"
            )),
        l
      );
      l =
        a == null
          ? void 0
          : (l = a.notif_option) == null
          ? void 0
          : l.option_display;
      e = (e = l == null ? void 0 : l.image_icon) != null ? e : "";
      e =
        (e = d("cometNotificationOptionsIcons").cometNotificationOptionsIconMap[
          e
        ]) != null
          ? e
          : d("cometNotificationOptionsIcons").DEFAULT_ICON;
      var n = l == null ? void 0 : l.text;
      l = l == null ? void 0 : l.subtext;
      f =
        a == null
          ? void 0
          : (f = a.notif_option) == null
          ? void 0
          : f.server_action;
      a =
        a == null
          ? void 0
          : (a = a.notif_option) == null
          ? void 0
          : (a = a.client_info) == null
          ? void 0
          : a.action_type;
      m = c("useNotificationsDialogs")({
        actionType: a,
        notifType: m,
        notificationNotifId: g,
      });
      if (m == null) return null;
      g = m[0];
      m = m[1];
      if (e == null || n == null || (f == null && !a)) return null;
      return (l == null ? void 0 : l.text) != null
        ? i.jsx(c("CometMenuItem.react"), {
            href: l.text,
            icon: e,
            primaryText: i.jsx(c("CometTextWithEntitiesRelay.react"), {
              renderers: j,
              textWithEntities: n,
              transforms: k,
            }),
            target: "_blank",
            testid: void 0,
          })
        : i.jsx(c("CometMenuItem.react"), {
            icon: e,
            onClick: g,
            primaryText: i.jsx(c("CometTextWithEntitiesRelay.react"), {
              renderers: j,
              textWithEntities: n,
              transforms: k,
            }),
            ref: m,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsDropdownHideMenuItem.react",
  [
    "fbt",
    "CometBoldedEntityRenderer",
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometMenuItem.react",
    "CometNotificationsDropdownHideMenuItem_notifOptionRenderer.graphql",
    "CometNotificationsMutationLogger",
    "CometNotificationsOptionsActionMutation",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "WebPixelRatio",
    "cometNotificationOptionsIcons",
    "cometPushToast",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = { "*": [c("CometBoldedEntityRenderer")] },
      m = [c("CometEmoticonTransform")(), c("CometEmojiTransform")()];
    function a(a) {
      var e,
        f,
        g = a.notificationId,
        n = a.notifOptionRenderer;
      a = a.testid;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "CometNotificationsDropdownHideMenuItem_notifOptionRenderer.graphql"
            )),
        n
      );
      var o = d("CometRelay").useRelayEnvironment();
      n =
        a == null
          ? void 0
          : (n = a.notif_option) == null
          ? void 0
          : n.option_display;
      e = (e = n == null ? void 0 : n.image_icon) != null ? e : "";
      e =
        (e = d("cometNotificationOptionsIcons").cometNotificationOptionsIconMap[
          e
        ]) != null
          ? e
          : d("cometNotificationOptionsIcons").DEFAULT_ICON;
      var p = n == null ? void 0 : n.text,
        q = n == null ? void 0 : n.subtext,
        r =
          a == null
            ? void 0
            : (f = a.notif_option) == null
            ? void 0
            : f.server_action,
        s =
          a == null
            ? void 0
            : (f = a.notif_option) == null
            ? void 0
            : (a = f.client_info) == null
            ? void 0
            : a.undo_server_action;
      a = n == null ? void 0 : (f = n.undo_text) == null ? void 0 : f.text;
      n = k(
        function () {
          if (s == null) return;
          var a = d(
              "CometNotificationsMutationLogger"
            ).notificationUnhideStart(),
            b = a.logOnError,
            c = a.logOnSuccess;
          d("CometNotificationsOptionsActionMutation").doOptionAction(
            g,
            o,
            {
              input: { action_type: s, is_comet: !0 },
              scale: d("WebPixelRatio").get(),
            },
            {
              onError: b,
              onSuccess: function () {
                c(),
                  d("CometRelay").commitLocalUpdate(o, function (a) {
                    a = a.get(g);
                    a && a.setValue(!1, "is_hidden");
                  });
              },
            },
            function (a) {
              a = a.get(g);
              a && a.setValue(!1, "is_hidden");
            }
          );
        },
        [o, g, s]
      );
      var t =
        s != null && a != null
          ? {
              action: {
                label: h._("Undo"),
                onPress: n,
                testid: "UndoRemoveNotification",
              },
              message: a,
              truncateText: !0,
            }
          : null;
      f = k(
        function () {
          if (r == null) return;
          var a = d("CometNotificationsMutationLogger").notificationHideStart(),
            b = a.logOnError,
            c = a.logOnSuccess;
          d("CometNotificationsOptionsActionMutation").doOptionAction(
            g,
            o,
            {
              input: { action_type: r, is_comet: !0 },
              scale: d("WebPixelRatio").get(),
            },
            {
              onError: b,
              onSuccess: function () {
                c(),
                  d("CometRelay").commitLocalUpdate(o, function (a) {
                    a = a.get(g);
                    a && a.setValue(!0, "is_hidden");
                  }),
                  t && d("cometPushToast").cometPushToast(t, 3e3);
              },
            },
            function (a) {
              a = a.get(g);
              a && a.setValue(!0, "is_hidden");
            }
          );
        },
        [r, o, g, t]
      );
      return e == null || p == null || r == null
        ? null
        : j.jsx(c("CometMenuItem.react"), {
            icon: e,
            onClick: f,
            primaryText: j.jsx(c("CometTextWithEntitiesRelay.react"), {
              renderers: l,
              textWithEntities: p,
              transforms: m,
            }),
            secondaryText:
              q != null
                ? j.jsx(c("CometTextWithEntitiesRelay.react"), {
                    renderers: l,
                    textWithEntities: q,
                    transforms: m,
                  })
                : null,
            testid: void 0,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
