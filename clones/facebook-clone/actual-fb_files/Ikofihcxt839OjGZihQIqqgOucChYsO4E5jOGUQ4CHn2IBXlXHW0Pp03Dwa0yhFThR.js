if (self.CavalryLogger) {
  CavalryLogger.start_js(["LLpQWBU"]);
}

__d(
  "CometNotificationsDropdownMenuButton_notification.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: !1, kind: "LocalArgument", name: "isToast" },
        { defaultValue: !1, kind: "LocalArgument", name: "menuUseEntryPoint" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometNotificationsDropdownMenuButton_notification",
      selections: [
        {
          condition: "menuUseEntryPoint",
          kind: "Condition",
          passingValue: !1,
          selections: [
            {
              args: [
                { kind: "Variable", name: "isToast", variableName: "isToast" },
              ],
              kind: "FragmentSpread",
              name: "CometNotificationsDropdownMenu_notification",
            },
          ],
        },
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
          condition: "menuUseEntryPoint",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: "id_for_entrypoint",
                  args: null,
                  kind: "ScalarField",
                  name: "__id",
                  storageKey: null,
                },
              ],
            },
          ],
        },
      ],
      type: "Notification",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsDropdownMenuContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4118287461558249",
        metadata: {},
        name: "CometNotificationsDropdownMenuContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsListItemAttachment_notification.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: !1, kind: "LocalArgument", name: "isToast" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometNotificationsListItemAttachment_notification",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "notif_attachments",
          plural: !0,
          selections: [
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
              condition: "isToast",
              kind: "Condition",
              passingValue: !1,
              selections: [
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
                  ],
                  type: "InlineSurveyNotifAttachment",
                  abstractKey: null,
                },
              ],
            },
          ],
          storageKey: null,
        },
      ],
      type: "Notification",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsListItem_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometNotificationsListItem_actor",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
      ],
      type: "Actor",
      abstractKey: "__isActor",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsListItem_notification.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Variable", name: "isToast", variableName: "isToast" },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: !1, kind: "LocalArgument", name: "hideIcon" },
          { defaultValue: !1, kind: "LocalArgument", name: "isToast" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "menuUseEntryPoint",
          },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometNotificationsListItem_notification",
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
            name: "notif_id",
            storageKey: null,
          },
          {
            args: [
              a,
              {
                kind: "Variable",
                name: "menuUseEntryPoint",
                variableName: "menuUseEntryPoint",
              },
            ],
            kind: "FragmentSpread",
            name: "CometNotificationsDropdownMenuButton_notification",
          },
          {
            args: [a],
            kind: "FragmentSpread",
            name: "CometNotificationsListItemAttachment_notification",
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "body",
            plural: !1,
            selections: [
              b,
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
            concreteType: null,
            kind: "LinkedField",
            name: "notif_attachments",
            plural: !0,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "StructuredSurveySession",
                    kind: "LinkedField",
                    name: "inline_survey",
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
                type: "InlineSurveyNotifAttachment",
                abstractKey: null,
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
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "seen_state",
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
            condition: "hideIcon",
            kind: "Condition",
            passingValue: !1,
            selections: [
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
            ],
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "tracking",
            storageKey: null,
          },
          {
            condition: "isToast",
            kind: "Condition",
            passingValue: !1,
            selections: [
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
                    selections: [b],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
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
        type: "Notification",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsUpdateSeenStateMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "environment",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "input" },
        c = [{ kind: "Variable", name: "data", variableName: "input" }],
        d = {
          alias: null,
          args: null,
          concreteType: "Notification",
          kind: "LinkedField",
          name: "notifications",
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
              name: "seen_state",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "CometNotificationsUpdateSeenStateMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "NotificationsUpdateSeenOrReadResponsePayload",
              kind: "LinkedField",
              name: "notifications_update_seen_or_read",
              plural: !1,
              selections: [
                d,
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
                      name: "CometNotificationsBadgeCountFragment_viewer",
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
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "CometNotificationsUpdateSeenStateMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "NotificationsUpdateSeenOrReadResponsePayload",
              kind: "LinkedField",
              name: "notifications_update_seen_or_read",
              plural: !1,
              selections: [
                d,
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
                        {
                          kind: "Variable",
                          name: "environment",
                          variableName: "environment",
                        },
                      ],
                      kind: "ScalarField",
                      name: "notifications_unseen_count",
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
          id: "4323423014334765",
          metadata: {},
          name: "CometNotificationsUpdateSeenStateMutation",
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
  "CometFriendNotificationsStateChangeSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "environment",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "input" },
        c = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "NotificationStateChangeSubscribeResponsePayload",
            kind: "LinkedField",
            name: "notification_state_change_subscribe",
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
                    name: "seen_state",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "notif_id",
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
                    args: [
                      {
                        kind: "Variable",
                        name: "environment",
                        variableName: "environment",
                      },
                    ],
                    kind: "ScalarField",
                    name: "notifications_unseen_count",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "last_update_timestamp",
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
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "CometFriendNotificationsStateChangeSubscription",
          selections: c,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "CometFriendNotificationsStateChangeSubscription",
          selections: c,
        },
        params: {
          id: "3291362027598695",
          metadata: { subscriptionName: "notification_state_change_subscribe" },
          name: "CometFriendNotificationsStateChangeSubscription",
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
  "getCometNotificationURL_notification.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "getCometNotificationURL_notification",
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometNotificationURL_notification.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometNotificationURL_notification",
      selections: [
        {
          kind: "InlineDataFragmentSpread",
          name: "getCometNotificationURL_notification",
          selections: [
            {
              alias: null,
              args: [{ kind: "Literal", name: "site", value: "comet" }],
              kind: "ScalarField",
              name: "url",
              storageKey: 'url(site:"comet")',
            },
          ],
        },
      ],
      type: "Notification",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometToastCard.react",
  [
    "fbt",
    "ix",
    "CometAccessibilityAnnouncement.react",
    "CometCard.react",
    "CometPressable.react",
    "TetraIcon.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.accessibilityAnnouncement,
        e = a.content,
        f = a.headline,
        g = a.onCloseClick;
      a = a.onMouseEnter;
      return j.jsxs(c("CometCard.react"), {
        background: "white",
        dropShadow: 2,
        children: [
          j.jsxs("div", {
            className:
              "jbcpqwzg jq4qci2q cbu4d94t j83agx80 rq0escxv bi1v6m2q l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
            onMouseEnter: a,
            children: [
              j.jsx("div", {
                className: "n1l5q3vz",
                children: j.jsxs("div", {
                  className:
                    "dati1w0a qt6c0cv9 hv4rvrfc jb3vyjys i1fnvgqd j83agx80 bp9cbjyn",
                  children: [
                    j.jsx(c("TetraTextPairing.react"), {
                      headline: f,
                      level: 4,
                    }),
                    j.jsx(c("CometPressable.react"), {
                      display: "inline",
                      label: h._("Close"),
                      onPress: g,
                      overlayDisabled: !0,
                      children: j.jsx("span", {
                        className:
                          "b73ngqbp taijpn5t rgmg9uty j83agx80 owxd89k7 n3ddgdk9 h2jyy9rg br7hx15l tdjehn4e bp9cbjyn",
                        children: j.jsx(c("TetraIcon.react"), {
                          color: "primary",
                          icon: d("fbicon")._(i("478231"), 12),
                          size: 12,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              j.jsx("div", {
                className: "ecm0bbzt sj5x9vvc ezxwwwxp",
                role: "grid",
                children: e,
              }),
            ],
          }),
          b != null &&
            j.jsx(
              c("CometAccessibilityAnnouncement.react"),
              { children: b.text },
              b.id
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
  "useNotificationsImpressionLogger",
  ["gkx", "react", "requireDeferred", "usePartialViewImpression"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("requireDeferred")("NotifImpressionEventsFalcoEvent").__setRef(
        "useNotificationsImpressionLogger"
      );
    function a(a) {
      var b = a.actorId,
        d = a.loggerContext,
        e = a.notifId,
        f = a.trackingData;
      a = h(
        function (a) {
          a = a.visibleDuration;
          var c = {
            notification_data: {
              duration: String(a),
              logger_context: d,
              notif_id: e,
              user_id: b,
            },
            ref: "www_tab",
            tracking: JSON.stringify(f),
          };
          i.onReady(function (a) {
            a = a.log;
            return a(function () {
              return c;
            });
          });
        },
        [f, d, e, b]
      );
      a = c("usePartialViewImpression")({ onImpressionEnd: a });
      return [a, null];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsDropdownMenuContainer.entrypoint",
  [
    "CometNotificationsDropdownMenuContainerQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = {
          encoded_notif_id: a.encodedNotifId,
          scale: d("WebPixelRatio").get(),
        };
        return {
          queries: {
            dropdownQueryRef: {
              parameters: b(
                "CometNotificationsDropdownMenuContainerQuery$Parameters"
              ),
              variables: a,
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometNotificationsDropdownMenuContainer.react"
      ).__setRef("CometNotificationsDropdownMenuContainer.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsDropdownMenuButton.react",
  [
    "fbt",
    "CometListCellHoverButton.react",
    "CometNotificationsDropdownMenuButton_notification.graphql",
    "CometNotificationsDropdownMenuContainer.entrypoint",
    "CometRelay",
    "JSResourceForInteraction",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = c("JSResourceForInteraction")(
        "CometNotificationsDropdownMenu.react"
      ).__setRef("CometNotificationsDropdownMenuButton.react"),
      m = c("requireDeferred")("OpenOptionsMenuFalcoEvent").__setRef(
        "CometNotificationsDropdownMenuButton.react"
      );
    function a(a) {
      var e = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b(
                "CometNotificationsDropdownMenuButton_notification.graphql"
              )),
          a.notification
        ),
        f = a.userId,
        g = k(
          function () {
            m.onReady(function (a) {
              a = a.log;
              return a(function () {
                return {
                  notification_data: {
                    alert_id: e == null ? void 0 : e.notif_id,
                    logger_context: "www_tab",
                    notif_type: e == null ? void 0 : e.notif_type,
                    user_id: f,
                  },
                  ref: "www_tab",
                };
              });
            });
          },
          [e, f]
        );
      return (e == null ? void 0 : e.id_for_entrypoint) == null
        ? j.jsx(c("CometListCellHoverButton.react"), {
            hidden: a.hidden,
            label: h._("Options for this notification"),
            onFocusChange: a.onFocusChange,
            onHoverChange: a.onHoverChange,
            onMenuStateChange: a.onMenuStateChange,
            onPress: g,
            popoverProps: { notification: e },
            popoverResource: l,
            popoverTriggerType: "lazy",
            popoverType: "menu",
          })
        : j.jsx(c("CometListCellHoverButton.react"), {
            entryPointParams: { encodedNotifId: e.id_for_entrypoint },
            hidden: a.hidden,
            label: h._("Options for this notification"),
            onFocusChange: a.onFocusChange,
            onHoverChange: a.onHoverChange,
            onMenuStateChange: a.onMenuStateChange,
            onPress: g,
            popoverEntryPoint: c(
              "CometNotificationsDropdownMenuContainer.entrypoint"
            ),
            popoverProps: {},
            popoverTriggerType: "entryPoint",
            popoverType: "menu",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsListItemAttachment.react",
  [
    "CometErrorBoundary.react",
    "CometNotificationsListItemAttachment_notification.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var b = a.date,
        d = a.notification;
      a = a.onPress;
      return i.jsx(c("CometErrorBoundary.react"), {
        children: i.jsx(j, { date: b, notification: d, onPress: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      var c = a.date,
        e = a.notification,
        f = a.onPress;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometNotificationsListItemAttachment_notification.graphql"
            )),
        e
      );
      e = a.notif_attachments;
      if (e == null) return null;
      a = e
        .map(function (a, b) {
          return i.jsx(
            d("CometRelay").MatchContainer,
            { match: a, props: { date: c, notifAttachments: a, onPress: f } },
            b
          );
        })
        .filter(Boolean);
      return a.length === 0 ? null : a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsListItemSeenContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(function () {});
    g["default"] = b;
  },
  98
);
__d(
  "UntruncatedNotificationsTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:UntruncatedNotificationsLoggerConfig"
    );
  },
  null
);
__d(
  "cometNotificationsListItemIcon",
  ["ix", "ImageIconSource", "getReactionSVGSource"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {
      app_facebook: h("958818"),
      app_instagram: h("958820"),
      app_messenger: h("958823"),
      app_pages: h("958824"),
      app_rooms: h("1395467"),
      "app-oculus": h("20924"),
      arrows_up_down: h("958826"),
      badge_heart: h("958827"),
      bar_chart: h("958828"),
      bookmark: h("958830"),
      breaking_news: h("958831"),
      briefcase: h("958832"),
      cake: h("958833"),
      calendar: h("958835"),
      camcorder_live: h("958836"),
      card: h("1289629"),
      caution_triangle: h("958837"),
      circle_3: h("958838"),
      "circle-heart-ribbon": h("12810"),
      comment: h("958852"),
      comment_star: h("958851"),
      default: h("958829"),
      "desktop-mobile": h("1964681"),
      direct: h("958854"),
      friend_add: h("958857"),
      friends: h("958858"),
      fundraiser: h("958859"),
      games: h("958821"),
      group: h("958860"),
      headphones: h("2007797"),
      heart_lock: h("1250959"),
      high_five_hands: h("958861"),
      instagram_reels: h("1951540"),
      marketplace: h("894424"),
      notif_messages_question_live: h("1495236"),
      "notif-star-tip": h("1970274"),
      pencil: h("958866"),
      pencil_checkmark: h("958865"),
      photo: h("958867"),
      pin: h("958868"),
      play_circle: h("958869"),
      poke: h("958870"),
      politics: h("958871"),
      polls: h("958872"),
      posts: h("958873"),
      profile_circle: h("958874"),
      relationship: h("958875"),
      safety_check: h("958876"),
      share: h("958877"),
      shield: h("958878"),
      shops: h("1686153"),
      spark_ar: h("1079479"),
      stories: h("1819883"),
      tag: h("958882"),
      topics: h("958883"),
      volunteer: h("1185872"),
      watch_tv: h("958885"),
      water: h("958886"),
    };
    function j(a) {
      return new (c("ImageIconSource"))(i[a] || i["default"], 28, 28);
    }
    function a(a, b) {
      if (b != null) {
        b = c("getReactionSVGSource")(b);
        if (b != null) return new (c("ImageIconSource"))(b, 28, 28);
      }
      return a != null ? j(a) : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getCometNotificationURL",
  [
    "CometRelay",
    "ConstUriUtils",
    "absoluteToRelative",
    "getCometNotificationURL_notification.graphql",
    "isBulletinDotComURI",
    "isBusinessURI",
    "isDevelopersURI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = d("CometRelay").readInlineData(
        h !== void 0
          ? h
          : (h = b("getCometNotificationURL_notification.graphql")),
        a
      );
      a = a == null ? void 0 : a.url;
      if (a == null) return null;
      var e = d("ConstUriUtils").getUri(a);
      if (e == null) return a;
      if (
        window.location.hostname.startsWith("www.facebook.com") ||
        c("isBusinessURI")(e) ||
        c("isDevelopersURI")(e) ||
        c("isBulletinDotComURI")(e)
      )
        return a;
      else return c("absoluteToRelative")(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometNotificationURL",
  [
    "CometRelay",
    "getCometNotificationURL",
    "useCometNotificationURL_notification.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useCometNotificationURL_notification.graphql")),
        a
      );
      return c("getCometNotificationURL")(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useScrollToNotif",
  ["CometRouteMatch", "XCometNotificationsControllerRouteBuilder", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useRef;
    a = function (a) {
      var b = d("CometRouteMatch").useCurrentRouteMatcher(
          d("CometRouteMatch").MatchFunctions.urlMatchFunction
        ),
        e = d("CometRouteMatch").useHostedRouteMatcher(
          d("CometRouteMatch").MatchFunctions.urlMatchFunction
        );
      e = a != null ? e(a) : !1;
      a = b(
        c("XCometNotificationsControllerRouteBuilder").buildURL({}).toString()
      );
      b = h(e && !a);
      return [e, b];
    };
    g.useScrollToNotif = a;
  },
  98
);
__d(
  "CometNotificationsListItem.react",
  [
    "fbt",
    "CometBadge.react",
    "CometBoldedEntityRenderer",
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometFocusTableContext",
    "CometNotificationsDropdownMenuButton.react",
    "CometNotificationsListItemAttachment.react",
    "CometNotificationsListItemSeenContext",
    "CometNotificationsListItem_actor.graphql",
    "CometNotificationsListItem_notification.graphql",
    "CometNotificationsMutationLogger",
    "CometNotificationsTimestamp.react",
    "CometPressable.react",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "FocusWithinHandler.react",
    "TetraAccessoryListCell.react",
    "TetraIcon.react",
    "UntruncatedNotificationsTypedLoggerLite",
    "cometNotificationsListItemIcon",
    "cr:503",
    "mergeRefs",
    "react",
    "requireDeferred",
    "scrollIntoView",
    "stylex",
    "useCometNotificationURL",
    "useMenuButtonVisibilityState",
    "useNotificationsImpressionLogger",
    "useScrollToNotif",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useLayoutEffect,
      p = e.useMemo,
      q = e.useRef,
      r = c("requireDeferred")("NotifClickEventsFalcoEvent").__setRef(
        "CometNotificationsListItem.react"
      ),
      s = 0,
      t = {
        dot: { marginEnd: "cgat1ltu", marginStart: "kkf49tns" },
        hiddenLabel: {
          clip: "q45zohi1",
          clipPath: "g0aa4cga",
          position: "pmk7jnqg",
          wordBreak: "dxrwds1f",
        },
        listItemContainer: { position: "l9j0dhe7" },
        pressable: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          height: "m7zwrmfr",
          justifyContent: "taijpn5t",
          paddingStart: "b3onmgus",
          width: "odw8uiq3",
        },
        spacer: { height: "cyypbtt7", width: "fwizqjfa" },
      },
      u = { "*": [c("CometBoldedEntityRenderer")] },
      v = [c("CometEmoticonTransform")(), c("CometEmojiTransform")()],
      aa =
        i !== void 0 ? i : (i = b("CometNotificationsListItem_actor.graphql")),
      ba =
        j !== void 0
          ? j
          : (j = b("CometNotificationsListItem_notification.graphql"));
    function a(a) {
      var e = a.actor,
        f = a.hideMenuButton,
        g = f === void 0 ? !1 : f;
      f = a.isFromPageNotification;
      var i = a.isNotificationsRoute,
        j = i === void 0 ? !1 : i;
      i = a.loggerContext;
      var w = i === void 0 ? "www_tab" : i;
      i = a.notification;
      var x = a.onClick,
        y = a.onClose,
        z = a.preventLocalNavigation,
        A = a.replace,
        B = a.routeTarget,
        C = a.shouldOpenInBlankTarget,
        D = a.shouldPrefetch;
      D = D === void 0 ? !1 : D;
      var E = a.showSelectedState,
        ca = E === void 0 ? !1 : E,
        F = a.trackingData;
      E = d("CometRelay").useFragment(aa, e);
      var G = d("CometRelay").useFragment(ba, i);
      a = c("useCometNotificationURL")(G);
      e = G.body;
      i = G.context_info;
      var H = G.creation_time,
        I = G.id,
        da = G.notif_attachments,
        J = G.notif_id,
        K = G.notif_image,
        L = G.notif_type,
        M = G.seen_state,
        N = G.tracking,
        O = q(null),
        P = E == null ? void 0 : E.id,
        Q = (E = f) != null ? E : !1;
      f = babelHelpers["extends"](
        { navigation_source: "notifications_click" },
        L != null ? { notif_type: L } : null
      );
      E = p(
        function () {
          var a;
          return (a = F) != null ? a : { notif_tracking: N };
        },
        [N, F]
      );
      var ea = {
        onNavigate: y,
        passthroughProps: {
          initialTracePolicy: "comet.notifications",
          notification_id: (y = J) != null ? y : void 0,
          notificationTracking: E,
          notificationType: L,
          ref: "notification",
        },
        prefetchQueries: D,
        preventLocalNavigation: (y = z) != null ? y : !1,
        productAttribution: { tap_point: "via_notification" },
        replace: (D = A) != null ? D : void 0,
        routeTarget: Q ? "content" : (z = B) != null ? z : void 0,
        target: C === !0 ? "_blank" : void 0,
        traceParams: f,
        url: (y = a) != null ? y : void 0,
      };
      A = d("useScrollToNotif").useScrollToNotif(a);
      var fa = A[0],
        R = A[1],
        S = R.current;
      D = m(c("CometFocusTableContext"));
      B = D.FocusCell;
      z = D.FocusRow;
      var ga = (C = B) != null ? C : k.Fragment,
        ha = (f = z) != null ? f : k.Fragment;
      o(
        function () {
          O.current != null &&
            S &&
            (c("scrollIntoView")(O.current, {
              behavior: "auto",
              verticalAlign: "center",
            }),
            (R.current = !1));
        },
        [S, R]
      );
      var T = b("cr:503")({
          accessibilityString: h._("Notification was marked read."),
          mutationLogger: d("CometNotificationsMutationLogger")
            .notificationMarkAsReadStart,
          notifId: I,
          seenState: M,
          timestamp: null,
          updateType: "MARK_READ",
        }),
        ia = l(
          function () {
            I != null &&
              P != null &&
              (x && x(),
              r.onReady(function (a) {
                a = a.log;
                return a(function () {
                  var a;
                  return {
                    notification_data: {
                      alert_id: (a = J) != null ? a : "",
                      logger_context: (a = w) != null ? a : "",
                      to_user: P,
                    },
                    ref: j ? "notifications_route" : "www_tab",
                    tracking: JSON.stringify(F),
                  };
                });
              }),
              T());
          },
          [P, T, j, w, J, I, x, F]
        ),
        U = e;
      y = H == null ? void 0 : H.timestamp;
      a = K == null ? void 0 : K.uri;
      A = c("useMenuButtonVisibilityState")();
      var ja = A[0];
      D = A[1];
      var V = D.setListItemHovered,
        ka = D.setMenuBtnFocused,
        la = D.setMenuBtnHovered,
        ma = D.setMenuOpened,
        na = l(
          function () {
            V(!1);
          },
          [V]
        ),
        oa = l(
          function () {
            V(!0);
          },
          [V]
        );
      B = c("useNotificationsImpressionLogger")({
        actorId: P,
        loggerContext: w,
        notifId: J,
        trackingData: E,
      });
      var W = B[0],
        pa = B[1],
        qa = m(c("CometNotificationsListItemSeenContext")),
        X = c("useVisibilityObserver")({
          onVisible: function () {
            qa(I);
          },
        }),
        ra = p(
          function () {
            if (w === "www_tab" || w === "beeper")
              return c("mergeRefs")(W, O, X);
            else return O;
          },
          [X, w, W]
        ),
        Y = U == null ? void 0 : (C = U.text) == null ? void 0 : C.length;
      n(
        function () {
          Y != null &&
            Y > s &&
            c("UntruncatedNotificationsTypedLoggerLite").log({
              length: Y,
              notification_type: L,
            });
        },
        [L, Y]
      );
      if (I == null || U == null || a == null || M == null || y == null)
        return null;
      z = new Date(y * 1e3);
      var Z = M === "SEEN_AND_READ";
      e = (f = G.icon_data) == null ? void 0 : f.reaction_type;
      K = (H = G.icon_data) == null ? void 0 : H.glyph_name;
      A = c("cometNotificationsListItemIcon")(K, e);
      D =
        A != null
          ? {
              backgroundColor: "transparent",
              icon: k.jsx(c("TetraIcon.react"), { color: "white", icon: A }),
              size: 28,
              type: "activityBadge",
            }
          : null;
      E = k.jsx(c("CometNotificationsTimestamp.react"), {
        date: z,
        seenAndRead: Z,
      });
      var sa = {
          addOn: D,
          shape: "circle",
          size: 56,
          source: { uri: a },
          type: "profile-photo",
        },
        ta = {
          component: k.jsx(c("CometNotificationsListItemAttachment.react"), {
            date: z,
            notification: G,
            onPress: T,
          }),
          type: "override-column",
        };
      B = G == null ? void 0 : G.is_hidden;
      if (B === !0) return null;
      var $ =
        da.find(function (a) {
          return a.inline_survey != null;
        }) != null;
      y = i == null ? void 0 : (C = i.short_text) == null ? void 0 : C.text;
      var ua = k.jsxs(k.Fragment, {
        children: [
          E,
          y != null &&
            y !== "" &&
            k.jsxs(k.Fragment, {
              children: [
                k.jsx("span", {
                  "aria-hidden": "true",
                  className: c("stylex")(t.dot),
                  children: "\xb7",
                }),
                y,
              ],
            }),
        ],
      });
      return k.jsx(c("FocusWithinHandler.react"), {
        children: function (a, b) {
          return k.jsx(ha, {
            children: k.jsxs("div", {
              className: c("stylex")(t.listItemContainer),
              onMouseEnter: oa,
              onMouseLeave: na,
              ref: ra,
              role: "row",
              children: [
                pa,
                k.jsx(c("TetraAccessoryListCell.react"), {
                  addOnBottom: ta,
                  addOnPrimary: sa,
                  addOnSecondary: {
                    addOn: Z
                      ? k.jsx("div", { className: c("stylex")(t.spacer) })
                      : k.jsx(c("CometPressable.react"), {
                          expanding: !0,
                          onPress: T,
                          overlayDisabled: !0,
                          role: "none",
                          testid: void 0,
                          xstyle: t.pressable,
                          children: k.jsx(c("CometBadge.react"), {
                            color: "blue",
                            isProfileBadge: !0,
                            size: 12,
                          }),
                        }),
                    type: "body",
                  },
                  addOnSecondaryVerticalAlign: $ ? "top" : "center",
                  body: k.jsxs(k.Fragment, {
                    children: [
                      Z
                        ? null
                        : k.jsx("div", {
                            className: c("stylex")(t.hiddenLabel),
                            children: h._("Unread"),
                          }),
                      k.jsx(c("CometTextWithEntitiesRelay.react"), {
                        renderers: u,
                        textWithEntities: U,
                        transforms: v,
                      }),
                    ],
                  }),
                  bodyColor: Z ? "secondary" : "primary",
                  bodyLineLimit: 3,
                  linkProps: ea,
                  meta: ua,
                  metaLineLimit: 1,
                  onPress: ia,
                  role: "none",
                  selected: fa && ca,
                  testid: void 0,
                }),
                L !== "friend" && L !== "page_invite" && !$
                  ? k.jsx(ga, {
                      children: k.jsx(
                        c("CometNotificationsDropdownMenuButton.react"),
                        {
                          hidden: g || Q || (!(a && b) && !ja),
                          notification: G,
                          onFocusChange: ka,
                          onHoverChange: la,
                          onMenuStateChange: ma,
                          userId: P,
                        }
                      ),
                    })
                  : null,
              ],
            }),
          });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = k.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometNotificationsUpdateSeenStateMutation",
  [
    "CometNotificationsThinClientConnectionHandler",
    "CometNotificationsUpdateSeenStateMutation.graphql",
    "CometRelay",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometNotificationsUpdateSeenStateMutation.graphql")),
      j = function (a) {
        return a.get(d("relay-runtime").VIEWER_ID);
      },
      k = function (a) {
        return a.getValue("notifications_unseen_count", {
          environment: "MAIN_SURFACE",
        });
      },
      l = function (a) {
        a = j(a);
        if (a == null) return;
        a = d("CometNotificationsThinClientConnectionHandler").getConnection(
          a,
          "CometNotificationsList_notifications_page"
        );
        if (a == null) return;
        a = a.getLinkedRecords("edges");
        if (a == null || a.length === 0) return;
        var b = [];
        a.forEach(function (a) {
          if (a == null) return;
          a = a.getLinkedRecord("node");
          if (a == null) return;
          var c = a.getType();
          if (
            c !== "NotifPageNotificationRow" &&
            c !== "NotifPageCachedNotificationRow"
          )
            return;
          c = a.getLinkedRecord("notif");
          if (c == null) return;
          b.push(c);
        });
        return b;
      };
    function a(a, b) {
      a = l(a);
      if (a == null || a.length === 0) return;
      var c = a.findIndex(function (a) {
        return a.getValue("id") === b;
      });
      if (c < 0) return;
      a[c] != null && a[c].setValue("SEEN_BUT_UNREAD", "seen_state");
    }
    function c(a, b) {
      a = l(a);
      if (a == null || a.length === 0) return;
      var c = a.findIndex(function (a) {
        return a.getValue("id") === b;
      });
      if (c < 0) return;
      a[c] != null && a[c].setValue("SEEN_AND_READ", "seen_state");
    }
    var m = function (a, b) {
      a = l(a);
      if (a == null || a.length === 0) return;
      a.forEach(function (a) {
        return b(a);
      });
    };
    function e(a) {
      var b = function (a) {
        if (a == null) return;
        a.getValue("seen_state") === "UNSEEN_AND_UNREAD" &&
          a.setValue("SEEN_BUT_UNREAD", "seen_state");
      };
      m(a, b);
    }
    function f(a) {
      var b = function (a) {
        if (a == null) return;
        (a.getValue("seen_state") === "UNSEEN_AND_UNREAD" ||
          a.getValue("seen_state") === "SEEN_BUT_UNREAD") &&
          a.setValue("SEEN_AND_READ", "seen_state");
      };
      m(a, b);
    }
    function n(a) {
      a = j(a);
      if (a == null) return;
      var b = k(a);
      if (b == null) return;
      b = +b - 1;
      a.setValue(Math.max(0, b), "notifications_unseen_count", {
        environment: "MAIN_SURFACE",
      });
    }
    function o(a) {
      a = j(a);
      if (a == null) return;
      a.setValue(0, "notifications_unseen_count", {
        environment: "MAIN_SURFACE",
      });
    }
    function p(a, b, c) {
      var e = c.mutationLogger(),
        f = e.logOnError,
        g = e.logOnSuccess;
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function () {
          g(), c.onSuccess && c.onSuccess();
        },
        onError: function (a) {
          f(a), c.onError && c.onError(a);
        },
        optimisticUpdater: c.updater,
        variables: b,
      });
    }
    g.updateSingleNotifSeenState = a;
    g.updateSingleNotifReadState = c;
    g.updateMultiNotifSeenState = e;
    g.updateMultiNotifReadState = f;
    g.lowerBadgeCountByOne = n;
    g.clearBadgeCount = o;
    g.CometNotificationsUpdateSeenStateMutation = p;
    g.mutation = i;
  },
  98
);
__d(
  "FriendingCometConfirmedFriendRequestToast.react",
  [
    "fbt",
    "CometNotificationsListItem.react",
    "CometNotificationsMutationLogger",
    "CometNotificationsUpdateSeenStateMutation",
    "CometRelay",
    "CometToastCard.react",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useRef,
      l = "MARK_SEEN",
      m = "comet_toast",
      n = "beeper";
    function a(a) {
      var b,
        e = a.onCloseClick;
      a = a.response;
      a = a == null ? void 0 : a.friend_request_confirm_subscribe;
      var f = a == null ? void 0 : a.notif,
        g = f == null ? void 0 : f.id,
        o = f == null ? void 0 : f.seen_state,
        p = a == null ? void 0 : a.new_friend;
      a = a == null ? void 0 : (a = a.viewer) == null ? void 0 : a.actor;
      b = f == null ? void 0 : (b = f.body) == null ? void 0 : b.text;
      var q = k(!1),
        r = d("CometRelay").useRelayEnvironment(),
        s = j(
          function () {
            if (g == null || o !== "UNSEEN_AND_UNREAD" || q.current === !0)
              return;
            d(
              "CometNotificationsUpdateSeenStateMutation"
            ).CometNotificationsUpdateSeenStateMutation(
              r,
              {
                environment: "FRIENDS_TAB",
                input: {
                  environment: "FRIENDS_TAB",
                  is_comet: !0,
                  last_notif_sync_time: 0,
                  notif_ids: [g],
                  source: m,
                  update_type: l,
                },
              },
              {
                mutationLogger: d("CometNotificationsMutationLogger")
                  .notificationMarkAsSeenStart,
                onError: function (a) {
                  c("recoverableViolation")(
                    "Failed to mark friend confirmed notification as seen in the toast: ",
                    "growth_friending",
                    { error: a }
                  );
                },
                onSuccess: function () {
                  q.current = !0;
                },
                updater: function (a) {
                  d(
                    "CometNotificationsUpdateSeenStateMutation"
                  ).updateSingleNotifReadState(a, g);
                },
              }
            );
          },
          [r, g, o]
        );
      if (p == null || f == null) return null;
      p = g == null || b == null ? null : { id: g, text: b };
      return i.jsx(c("CometToastCard.react"), {
        accessibilityAnnouncement: p,
        content: i.jsx(c("CometNotificationsListItem.react"), {
          actor: a,
          loggerContext: n,
          notification: f,
          onClick: e,
        }),
        headline: h._("New Notification"),
        onCloseClick: e,
        onMouseEnter: s,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometFriendRequestToast.react",
  [
    "fbt",
    "CometNotificationsListItem.react",
    "CometNotificationsMutationLogger",
    "CometNotificationsUpdateSeenStateMutation",
    "CometRelay",
    "CometToastCard.react",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useRef,
      l = "MARK_SEEN",
      m = "comet_toast",
      n = "beeper";
    function a(a) {
      var b,
        e = a.onCloseClick;
      a = a.response;
      a = a == null ? void 0 : a.friend_request_receive_subscribe;
      var f = a == null ? void 0 : a.notif,
        g = f == null ? void 0 : f.id,
        o = f == null ? void 0 : f.seen_state;
      a = a == null ? void 0 : (a = a.viewer) == null ? void 0 : a.actor;
      b = f == null ? void 0 : (b = f.body) == null ? void 0 : b.text;
      var p = k(!1),
        q = d("CometRelay").useRelayEnvironment(),
        r = j(
          function () {
            if (g == null || o !== "UNSEEN_AND_UNREAD" || p.current === !0)
              return;
            d(
              "CometNotificationsUpdateSeenStateMutation"
            ).CometNotificationsUpdateSeenStateMutation(
              q,
              {
                environment: "FRIENDS_TAB",
                input: {
                  environment: "FRIENDS_TAB",
                  is_comet: !0,
                  last_notif_sync_time: 0,
                  notif_ids: [g],
                  source: m,
                  update_type: l,
                },
              },
              {
                mutationLogger: d("CometNotificationsMutationLogger")
                  .notificationMarkAsSeenStart,
                onError: function (a) {
                  c("recoverableViolation")(
                    "Failed to mark friend notification as seen in the toast: ",
                    "growth_friending",
                    { error: a }
                  );
                },
                onSuccess: function () {
                  p.current = !0;
                },
                updater: function (a) {
                  d(
                    "CometNotificationsUpdateSeenStateMutation"
                  ).updateSingleNotifSeenState(a, g),
                    d(
                      "CometNotificationsUpdateSeenStateMutation"
                    ).lowerBadgeCountByOne(a);
                },
              }
            );
          },
          [q, g, o]
        );
      if (f == null) return null;
      b = g == null || b == null ? null : { id: g, text: b };
      return i.jsx(c("CometToastCard.react"), {
        accessibilityAnnouncement: b,
        content: i.jsx(c("CometNotificationsListItem.react"), {
          actor: a,
          loggerContext: n,
          notification: f,
          onClick: e,
        }),
        headline: h._("New Notification"),
        onCloseClick: e,
        onMouseEnter: r,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFriendNotificationsStateChangeSubscription",
  [
    "CometFriendNotificationsStateChangeSubscription.graphql",
    "CometRelay",
    "FriendingCometSubscriptionToastHelper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometFriendNotificationsStateChangeSubscription.graphql"));
    function a(a, b) {
      var c = function (a) {
        a =
          a == null
            ? void 0
            : (a = a.notification_state_change_subscribe) == null
            ? void 0
            : a.notification;
        var c = a == null ? void 0 : a.seen_state;
        a = a == null ? void 0 : a.notif_id;
        c != null &&
          a != null &&
          d("FriendingCometSubscriptionToastHelper").deleteToastIfSeen(c, a, b);
      };
      return d("CometRelay").requestSubscription(a, {
        onNext: c,
        subscription: i,
        variables: {
          environment: "FRIENDS_TAB",
          input: { environment: "FRIENDS_TAB" },
        },
      });
    }
    g.subscription = i;
    g.subscribeToFriendNotifs = a;
  },
  98
);
__d(
  "FriendingCometFriendRequestsPanelPaginationQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: 20, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
          {
            kind: "Literal",
            name: "friending_channel",
            value: "REQUESTS_JEWEL",
          },
        ],
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
        e = { kind: "Variable", name: "scale", variableName: "scale" },
        f = [
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
          name: "FriendingCometFriendRequestsPanelPaginationQuery",
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
                    { kind: "Variable", name: "count", variableName: "count" },
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "FriendingCometFriendRequestsPanel_viewerConnection",
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
          name: "FriendingCometFriendRequestsPanelPaginationQuery",
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
                  args: b,
                  concreteType: "FriendingPossibilitiesConnection",
                  kind: "LinkedField",
                  name: "friending_possibilities",
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
                      concreteType: "FriendingPossibilitiesEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_seen",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "time",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "User",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            c,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "friendship_status",
                              storageKey: null,
                            },
                            d,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "url",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: [
                                { kind: "Literal", name: "height", value: 60 },
                                e,
                                { kind: "Literal", name: "width", value: 60 },
                              ],
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "profile_picture",
                              plural: !1,
                              selections: f,
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
                              name: "__typename",
                              storageKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  kind: "InlineFragment",
                                  selections: [
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
                                      alias: null,
                                      args: null,
                                      concreteType: "User",
                                      kind: "LinkedField",
                                      name: "social_context_top_mutual_friends",
                                      plural: !0,
                                      selections: [
                                        c,
                                        d,
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "site",
                                              value: "comet",
                                            },
                                          ],
                                          kind: "ScalarField",
                                          name: "url",
                                          storageKey: 'url(site:"comet")',
                                        },
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "height",
                                              value: 20,
                                            },
                                            e,
                                            {
                                              kind: "Literal",
                                              name: "width",
                                              value: 20,
                                            },
                                          ],
                                          concreteType: "Image",
                                          kind: "LinkedField",
                                          name: "profile_picture",
                                          plural: !1,
                                          selections: f,
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
                              type: "FriendNode",
                              abstractKey: "__isFriendNode",
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
                          name: "has_next_page",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "end_cursor",
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
                  args: b,
                  filters: ["friending_channel"],
                  handle: "connection",
                  key: "FriendingCometFriendRequestsPanel_friending_possibilities",
                  kind: "LinkedHandle",
                  name: "friending_possibilities",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4533978409949134",
          metadata: {},
          name: "FriendingCometFriendRequestsPanelPaginationQuery",
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
  "FriendingCometFriendRequestsPanel_viewerConnection.graphql",
  ["FriendingCometFriendRequestsPanelPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["friending_possibilities"];
      return {
        argumentDefinitions: [
          { defaultValue: 20, kind: "LocalArgument", name: "count" },
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
            fragmentPathInResult: ["viewer"],
            operation: b(
              "FriendingCometFriendRequestsPanelPaginationQuery.graphql"
            ),
          },
        },
        name: "FriendingCometFriendRequestsPanel_viewerConnection",
        selections: [
          {
            alias: "friending_possibilities",
            args: [
              {
                kind: "Literal",
                name: "friending_channel",
                value: "REQUESTS_JEWEL",
              },
            ],
            concreteType: "FriendingPossibilitiesConnection",
            kind: "LinkedField",
            name: "__FriendingCometFriendRequestsPanel_friending_possibilities_connection",
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
                concreteType: "FriendingPossibilitiesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_seen",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "time",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "User",
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
                        name: "friendship_status",
                        storageKey: null,
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "FriendingCometFriendRequestsListItem_user",
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
                    name: "has_next_page",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey:
              '__FriendingCometFriendRequestsPanel_friending_possibilities_connection(friending_channel:"REQUESTS_JEWEL")',
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
  "FriendingCometPYMKListItem_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "FriendingCometPYMKListItem_user",
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
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 60 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 60 },
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
          args: null,
          kind: "FragmentSpread",
          name: "FriendingCometListItemWithButtons_user",
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
  "FriendingCometPYMKPanelPaginationQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: 10, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          {
            defaultValue: "FRIENDS_CENTER",
            kind: "LocalArgument",
            name: "location",
          },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = { kind: "Variable", name: "location", variableName: "location" },
        c = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
          b,
        ],
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
          name: "name",
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
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometPYMKPanelPaginationQuery",
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
                    { kind: "Variable", name: "count", variableName: "count" },
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                    b,
                  ],
                  kind: "FragmentSpread",
                  name: "FriendingCometPYMKPanel_viewer",
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
          name: "FriendingCometPYMKPanelPaginationQuery",
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
                  concreteType: "PeopleYouMayKnowConnection",
                  kind: "LinkedField",
                  name: "people_you_may_know",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "tracking_signature",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PeopleYouMayKnowEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "User",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            d,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "friendship_status",
                              storageKey: null,
                            },
                            e,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "url",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: [
                                { kind: "Literal", name: "height", value: 60 },
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
                              name: "__typename",
                              storageKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  kind: "InlineFragment",
                                  selections: [
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
                                      alias: null,
                                      args: null,
                                      concreteType: "User",
                                      kind: "LinkedField",
                                      name: "social_context_top_mutual_friends",
                                      plural: !0,
                                      selections: [
                                        d,
                                        e,
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "site",
                                              value: "comet",
                                            },
                                          ],
                                          kind: "ScalarField",
                                          name: "url",
                                          storageKey: 'url(site:"comet")',
                                        },
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "height",
                                              value: 20,
                                            },
                                            f,
                                            {
                                              kind: "Literal",
                                              name: "width",
                                              value: 20,
                                            },
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
                                  ],
                                  type: "User",
                                  abstractKey: null,
                                },
                              ],
                              type: "FriendNode",
                              abstractKey: "__isFriendNode",
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
                          name: "has_next_page",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "end_cursor",
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
                  args: c,
                  filters: ["location"],
                  handle: "connection",
                  key: "FriendingCometPYMKPanel_people_you_may_know",
                  kind: "LinkedHandle",
                  name: "people_you_may_know",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3872788706142213",
          metadata: {},
          name: "FriendingCometPYMKPanelPaginationQuery",
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
  "FriendingCometPYMKPanel_viewer.graphql",
  ["FriendingCometPYMKPanelPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["people_you_may_know"];
      return {
        argumentDefinitions: [
          { defaultValue: 10, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          {
            defaultValue: "FRIENDS_CENTER",
            kind: "LocalArgument",
            name: "location",
          },
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
            fragmentPathInResult: ["viewer"],
            operation: b("FriendingCometPYMKPanelPaginationQuery.graphql"),
          },
        },
        name: "FriendingCometPYMKPanel_viewer",
        selections: [
          {
            alias: "people_you_may_know",
            args: [
              { kind: "Variable", name: "location", variableName: "location" },
            ],
            concreteType: "PeopleYouMayKnowConnection",
            kind: "LinkedField",
            name: "__FriendingCometPYMKPanel_people_you_may_know_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "tracking_signature",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "PeopleYouMayKnowEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "User",
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
                        name: "FriendingCometPYMKListItem_user",
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
                    name: "has_next_page",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
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
  "FriendingCometManageFriendsDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "2832366396868895",
        metadata: {},
        name: "FriendingCometManageFriendsDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "FriendingCometFriendsBadgeCountClearMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "bookmarkID" },
        b = { defaultValue: null, kind: "LocalArgument", name: "hasBookmark" },
        c = { defaultValue: null, kind: "LocalArgument", name: "hasTopTab" },
        d = { defaultValue: null, kind: "LocalArgument", name: "input" },
        e = [{ kind: "Variable", name: "data", variableName: "input" }],
        f = [
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
          { kind: "Literal", name: "folder_id", value: "PRODUCT" },
          { kind: "Literal", name: "sections", value: ["FACEBOOK_APP"] },
        ],
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        h = [
          {
            kind: "Literal",
            name: "bookmark_render_location",
            value: "COMET_LEFT_NAV",
          },
        ],
        i = {
          condition: "hasBookmark",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: "bookmark_unread_count",
              args: h,
              kind: "ScalarField",
              name: "unread_count",
              storageKey:
                'unread_count(bookmark_render_location:"COMET_LEFT_NAV")',
            },
          ],
        };
      h = {
        alias: "bookmark_unread_count_string",
        args: h,
        kind: "ScalarField",
        name: "unread_count_string",
        storageKey:
          'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")',
      };
      var j = {
          condition: "hasTopTab",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: "tab_unread_count",
              args: [
                {
                  kind: "Literal",
                  name: "bookmark_render_location",
                  value: "COMET_TOP_TAB",
                },
              ],
              kind: "ScalarField",
              name: "unread_count",
              storageKey:
                'unread_count(bookmark_render_location:"COMET_TOP_TAB")',
            },
          ],
        },
        k = {
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
              concreteType: "FriendConfirmedNotificationsConnection",
              kind: "LinkedField",
              name: "friend_confirmed_notifications",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "FriendConfirmedNotificationsEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_unseen",
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
              concreteType: "FriendingPossibilitiesConnection",
              kind: "LinkedField",
              name: "friending_possibilities",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "FriendingPossibilitiesEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_seen",
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
          argumentDefinitions: [a, b, c, d],
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometFriendsBadgeCountClearMutation",
          selections: [
            {
              alias: null,
              args: e,
              concreteType: "ViewerFriendsBadgeCountClearResponsePayload",
              kind: "LinkedField",
              name: "viewer_friends_badge_count_clear",
              plural: !1,
              selections: [
                {
                  alias: "viewer_for_badge_count",
                  args: null,
                  concreteType: "Viewer",
                  kind: "LinkedField",
                  name: "viewer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: f,
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
                                  selections: [g],
                                  storageKey: null,
                                },
                                i,
                                h,
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
                  ],
                  storageKey: null,
                },
                k,
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [a, c, b, d],
          kind: "Operation",
          name: "FriendingCometFriendsBadgeCountClearMutation",
          selections: [
            {
              alias: null,
              args: e,
              concreteType: "ViewerFriendsBadgeCountClearResponsePayload",
              kind: "LinkedField",
              name: "viewer_friends_badge_count_clear",
              plural: !1,
              selections: [
                {
                  alias: "viewer_for_badge_count",
                  args: null,
                  concreteType: "Viewer",
                  kind: "LinkedField",
                  name: "viewer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: f,
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
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "__typename",
                                      storageKey: null,
                                    },
                                    g,
                                  ],
                                  storageKey: null,
                                },
                                i,
                                h,
                                j,
                                g,
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
                k,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4000690190000783",
          metadata: {},
          name: "FriendingCometFriendsBadgeCountClearMutation",
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
  "FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql",
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
              "ProactiveFriendingAlertImpressionUpdateResponsePayload",
            kind: "LinkedField",
            name: "proactive_friending_alert_impression_update",
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
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometProactiveFriendingAlertImpressionUpdateMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "FriendingCometProactiveFriendingAlertImpressionUpdateMutation",
          selections: b,
        },
        params: {
          id: "2963531890425143",
          metadata: {},
          name: "FriendingCometProactiveFriendingAlertImpressionUpdateMutation",
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
  "FriendingCometFriendRequestsScrollHoldingContainer.react",
  ["BaseScrollableAreaContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useLayoutEffect,
      l = b.useRef;
    function a(a) {
      var b = i(c("BaseScrollableAreaContext")),
        d = l(null),
        e = l(null),
        f = l(0),
        g = l(null),
        m = b[b.length - 1];
      j(
        function () {
          var a = m.getDOMNode();
          if (a != null) {
            f.current = a.scrollTop;
            var b = function () {
              f.current = a.scrollTop;
            };
            a.addEventListener("scroll", b, { passive: !0 });
            return function () {
              a.removeEventListener("scroll", b, { passive: !0 });
            };
          }
        },
        [m]
      );
      k(function () {
        if (d.current != null) {
          var b = d.current.getBoundingClientRect();
          if (e.current != null) {
            if (g.current === a.firstRequesterID) {
              g.current = a.firstRequesterID;
              e.current = b;
              return;
            }
            var c = b.height - e.current.height,
              h = m.getDOMNode();
            h != null && h.scrollTop === f.current && (h.scrollTop += c);
          }
          g.current = a.firstRequesterID;
          e.current = b;
        }
      });
      return h.jsx("div", { ref: d, children: a.children });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometFriendsTabInteractionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743629");
    c = b("FalcoLoggerInternal").create(
      "friending_comet_friends_tab_interaction",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "FriendingCometPanel.react",
  ["CometUnitHeader.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            className: "rtmu0sqt qzhwtbm6",
            children: h.jsx(c("CometUnitHeader.react"), {
              action: a.headlineAddOn,
              actionLinkProps: a.headlineAddOnLinkProps,
              headline: a.heading,
              level: 3,
              onActionPress: a.onHeadlineAddOnPress,
            }),
          }),
          a.children,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometFriendRequestsPanel.react",
  [
    "fbt",
    "ix",
    "CometListCellGlimmer.react",
    "CometRelay",
    "FriendingCometFriendRequestsListItem.react",
    "FriendingCometFriendRequestsPanel_viewerConnection.graphql",
    "FriendingCometFriendRequestsScrollHoldingContainer.react",
    "FriendingCometFriendsTabInteractionFalcoEvent",
    "FriendingCometPanel.react",
    "FriendingCometTestIDHelper",
    "TetraButton.react",
    "TetraIcon.react",
    "TetraText.react",
    "WebPixelRatio",
    "XCometFriendingSectionControllerRouteBuilder",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useRef,
      m = e.useTransition;
    function a(a) {
      var e = m(),
        f = e[0],
        g = e[1];
      e = d("CometRelay").useBlockingPaginationFragment(
        j !== void 0
          ? j
          : (j = b(
              "FriendingCometFriendRequestsPanel_viewerConnection.graphql"
            )),
        a.viewerConnection
      );
      var n = e.data,
        o = e.hasNext,
        p = e.loadNext,
        q = e.refetch,
        r =
          n == null
            ? void 0
            : (e = n.friending_possibilities) == null
            ? void 0
            : e.edges;
      e =
        (n =
          n == null
            ? void 0
            : (e = n.friending_possibilities) == null
            ? void 0
            : e.count) != null
          ? n
          : 0;
      a = (n = a.shouldShowSeeAllButton) != null ? n : !0;
      var s = l(!1),
        t = 10;
      n = function () {
        if (!o || f) return;
        if (r != null) {
          var a;
          ((a = r[r.length - 1]) == null
            ? void 0
            : (a = a.node) == null
            ? void 0
            : a.friendship_status) === "INCOMING_REQUEST"
            ? g(function () {
                p(t, {
                  onComplete: function (a) {
                    a != null &&
                      q({
                        count: r.length + t,
                        scale: d("WebPixelRatio").get(),
                      });
                  },
                });
              })
            : g(function () {
                q({ count: r.length + t, scale: d("WebPixelRatio").get() });
              });
        }
        s.current
          ? c("FriendingCometFriendsTabInteractionFalcoEvent").log(function () {
              return { event: "friend_requests_see_more_click" };
            })
          : (c("FriendingCometFriendsTabInteractionFalcoEvent").log(
              function () {
                return { event: "friend_requests_see_more_first_click" };
              }
            ),
            (s.current = !0));
      };
      var u = function () {
          c("FriendingCometFriendsTabInteractionFalcoEvent").log(function () {
            return { event: "friend_requests_see_all_click" };
          });
        },
        v = null,
        w = null;
      if (r != null) {
        v = r.map(function (a, b) {
          var d,
            e = a == null ? void 0 : a.node;
          return e == null
            ? null
            : k.jsx(
                c("FriendingCometFriendRequestsListItem.react"),
                {
                  isSeen: (d = a == null ? void 0 : a.is_seen) != null ? d : !0,
                  position: b + 1,
                  timeReceived:
                    (d = a == null ? void 0 : a.time) != null ? d : 0,
                  user: e,
                },
                (a = e == null ? void 0 : e.id) != null ? a : b
              );
        });
        if (f)
          w = k.jsx(c("CometListCellGlimmer.react"), {
            imageSize: 60,
            imageStyle: "circle",
            numberOfItems: 1,
          });
        else if (o) {
          var x = e - v.length < t ? e - v.length : t;
          w = k.jsx("div", {
            className: "n1l5q3vz dhix69tm wkznzc2l n851cfcs",
            children: k.jsx("div", {
              className: "k4urcfbm",
              "data-testid": void 0,
              children: k.jsx(c("TetraButton.react"), {
                addOnSecondary: k.jsx(c("TetraIcon.react"), {
                  icon: d("fbicon")._(i("492450"), 16),
                }),
                label: h._("See {numRequestsToShow} More", [
                  h._param("numRequestsToShow", x),
                ]),
                onPress: n,
                size: "medium",
                type: "secondary",
              }),
            }),
          });
        }
      }
      (v == null || v.length === 0) &&
        (v = k.jsx("div", {
          className: "oqcyycmt swg4t2nn sej5wr8e",
          children: k.jsx(c("TetraText.react"), {
            color: "secondary",
            type: "meta3",
            children: h._("No new requests"),
          }),
        }));
      x =
        e === 0
          ? h._("Friend Requests")
          : h._({ "*": "{number} Friend Requests", _1: "1 Friend Request" }, [
              h._plural(e, "number"),
            ]);
      n = null;
      e = "";
      a &&
        ((n = h._("See All")),
        (e = c("XCometFriendingSectionControllerRouteBuilder").buildURL({
          friending_section: "requests",
        })));
      return k.jsxs(c("FriendingCometPanel.react"), {
        heading: x,
        headlineAddOn: n,
        headlineAddOnLinkProps: { url: e },
        onHeadlineAddOnPress: u,
        children: [
          k.jsx(c("FriendingCometFriendRequestsScrollHoldingContainer.react"), {
            firstRequesterID:
              r == null || r.length === 0
                ? null
                : (a = r[0].node) == null
                ? void 0
                : a.id,
            children: v,
          }),
          w,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometNullStateView.react",
  [
    "fbt",
    "CometContentArea.react",
    "NullStatePeople",
    "TetraNullState.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.hasRequestsOrSuggestions;
      a = a
        ? h._("Select people's names to preview their profile.")
        : h._(
            "When you have friend requests or suggestions, you'll see them here."
          );
      return i.jsx(c("CometContentArea.react"), {
        verticalAlign: "middle",
        children: i.jsx(c("TetraNullState.react"), {
          headline: a,
          icon: c("NullStatePeople"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometPYMKListItem.react",
  [
    "fbt",
    "CometRelay",
    "FriendingCometErrorHandler.react",
    "FriendingCometFriendRequestCancelMutation",
    "FriendingCometFriendRequestSendMutation",
    "FriendingCometListItemWithButtons.react",
    "FriendingCometPYMKListItem_user.graphql",
    "FriendingCometTestIDHelper",
    "RegularPymkAddFalcoEvent",
    "RegularPymkImpFalcoEvent",
    "RegularPymkProfileFalcoEvent",
    "react",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useRef;
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          i !== void 0 ? i : (i = b("FriendingCometPYMKListItem_user.graphql")),
          a.user
        ),
        g = a.onDelete,
        m = f.friendship_status,
        n = f.id,
        o = f.name,
        p = f.profile_picture,
        q = f.url;
      p = p == null ? void 0 : p.uri;
      var r = a.signature,
        s = d("CometRelay").useRelayEnvironment(),
        t = l(!1),
        u = l(!1),
        v = d("FriendingCometErrorHandler.react").useFriendingErrorHandler({
          addFriendId: (e = n) != null ? e : "0",
          addFriendSource: "people_you_may_know",
        });
      e = k(
        function () {
          n != null &&
            (d("FriendingCometFriendRequestSendMutation").commit(
              s,
              n,
              "people_you_may_know",
              v,
              "friends_center"
            ),
            c("RegularPymkAddFalcoEvent").log(function () {
              return {
                pymk_id: n,
                pymk_location: "friends_center",
                pymk_signature: r,
              };
            }));
        },
        [s, v, n, r]
      );
      var w = k(
          function () {
            n != null &&
              ((u.current = !0),
              d("FriendingCometFriendRequestCancelMutation").commit(
                s,
                n,
                "pymk",
                v
              ));
          },
          [s, v, n]
        ),
        x = k(
          function () {
            n != null &&
              c("RegularPymkProfileFalcoEvent").log(function () {
                return {
                  pymk_id: n,
                  pymk_location: "friends_center",
                  pymk_signature: r,
                };
              });
          },
          [n, r]
        ),
        y = k(
          function () {
            n != null &&
              !t.current &&
              (c("RegularPymkImpFalcoEvent").log(function () {
                return {
                  pymk_id: n,
                  pymk_location: "friends_center",
                  pymk_signature: r,
                };
              }),
              (t.current = !0));
          },
          [n, r]
        );
      y = c("useVisibilityObserver")({ onVisible: y });
      if (n == null || q == null || p == null || o == null) return null;
      var z = null;
      switch (m) {
        case "CAN_REQUEST":
          z = u.current ? h._("Request canceled") : null;
          u.current = !1;
          return j.jsx("div", {
            "data-testid": void 0,
            ref: y,
            children: j.jsx(c("FriendingCometListItemWithButtons.react"), {
              href: q,
              iconSrc: p,
              message: z,
              onAddFriend: e,
              onClick: x,
              onDelete: g,
              reduceEmphasisPrimary: a.reduceEmphasisPrimary,
              routeTarget: "content",
              title: o,
              user: f,
            }),
          });
        case "OUTGOING_REQUEST":
          z = h._("Request sent");
          return j.jsx("div", {
            "data-testid": void 0,
            ref: y,
            children: j.jsx(c("FriendingCometListItemWithButtons.react"), {
              href: q,
              iconSrc: p,
              message: z,
              onCancelRequest: w,
              onClick: x,
              routeTarget: "content",
              title: o,
              user: f,
            }),
          });
        case "INCOMING_REQUEST":
        case "ARE_FRIENDS":
          return null;
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometPYMKPanel.react",
  [
    "fbt",
    "CometListCellGlimmer.react",
    "CometRelay",
    "FriendingCometPYMKBlacklistSuggestionMutation",
    "FriendingCometPYMKListItem.react",
    "FriendingCometPYMKPanel_viewer.graphql",
    "FriendingCometPanel.react",
    "FriendingCometTestIDHelper",
    "RegularPymkXoutFalcoEvent",
    "react",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useTransition,
      m = 30;
    function a(a) {
      var e = l(),
        f = e[0],
        g = e[1];
      e = d("CometRelay").useBlockingPaginationFragment(
        i !== void 0 ? i : (i = b("FriendingCometPYMKPanel_viewer.graphql")),
        a.viewer
      );
      var n = e.data,
        o = e.hasNext,
        p = e.loadNext;
      e =
        n == null
          ? void 0
          : (e = n.people_you_may_know) == null
          ? void 0
          : e.edges;
      var q =
          n == null
            ? void 0
            : (n = n.people_you_may_know) == null
            ? void 0
            : n.tracking_signature,
        r = d("CometRelay").useRelayEnvironment();
      n = k(
        function () {
          if (!o || f) return;
          g(function () {
            p(m);
          });
        },
        [o, f, p, g]
      );
      n = c("useVisibilityObserver")({ onVisible: n });
      var s = null;
      if (e != null) {
        var t = function (a) {
          return function () {
            a != null &&
              (d("FriendingCometPYMKBlacklistSuggestionMutation").commit(
                r,
                "FriendingCometPYMKPanel_people_you_may_know",
                d("CometRelay").VIEWER_ID,
                a,
                "FRIENDS_CENTER",
                "FRIENDS_CENTER"
              ),
              c("RegularPymkXoutFalcoEvent").log(function () {
                return {
                  pymk_id: a,
                  pymk_location: "friends_center",
                  pymk_signature: q,
                };
              }));
          };
        };
        s = e.map(function (b, d) {
          b = b == null ? void 0 : b.node;
          return b == null
            ? null
            : j.jsx(
                c("FriendingCometPYMKListItem.react"),
                {
                  onDelete: t(b.id),
                  reduceEmphasisPrimary: a.reduceEmphasisPrimary,
                  signature: q,
                  user: b,
                },
                (b = b == null ? void 0 : b.id) != null ? b : d
              );
        });
        o &&
          s.push(
            j.jsx(
              "div",
              {
                "data-testid": void 0,
                ref: n,
                children: j.jsx(c("CometListCellGlimmer.react"), {
                  imageSize: 60,
                  imageStyle: "circle",
                  numberOfItems: 2,
                }),
              },
              "glimmer"
            )
          );
      }
      return s != null && s.length !== 0
        ? j.jsx(c("FriendingCometPanel.react"), {
            heading: h._("People You May Know"),
            children: s,
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometManageFriendsDialog.entrypoint",
  [
    "FriendingCometManageFriendsDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            queryReference: {
              parameters: b(
                "FriendingCometManageFriendsDialogQuery$Parameters"
              ),
              variables: { scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "FriendingCometManageFriendsDialog.react"
      ).__setRef("FriendingCometManageFriendsDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometProactiveFriendingAlertImpressionUpdateMutation",
  [
    "CometRelay",
    "FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              "FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql"
            ));
    function a(a, b, c) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onError: c,
        variables: { input: b },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "ManageFriendsEntryPointClickFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743888");
    c = b("FalcoLoggerInternal").create("manage_friends_entry_point_click", a);
    e.exports = c;
  },
  null
);
__d(
  "ManageFriendsEntryPointDismissalFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743889");
    c = b("FalcoLoggerInternal").create(
      "manage_friends_entry_point_dismissal",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ManageFriendsEntryPointImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743890");
    c = b("FalcoLoggerInternal").create(
      "manage_friends_entry_point_impression",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "FriendingCometFriendLimitWarning.react",
  [
    "fbt",
    "ix",
    "CometCard.react",
    "CometRelay",
    "FriendingCometManageFriendsDialog.entrypoint",
    "FriendingCometProactiveFriendingAlertImpressionUpdateMutation",
    "ManageFriendsEntryPointClickFalcoEvent",
    "ManageFriendsEntryPointDismissalFalcoEvent",
    "ManageFriendsEntryPointImpressionFalcoEvent",
    "TetraButton.react",
    "TetraCircleButton.react",
    "TetraIcon.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
    "useCometEntryPointDialog",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useRef;
    function a(a) {
      var b = d("CometRelay").useRelayEnvironment();
      a = c("useCometEntryPointDialog")(
        c("FriendingCometManageFriendsDialog.entrypoint"),
        {}
      );
      var e = a[0],
        f = l(!1);
      a = k(
        function () {
          f.current ||
            (d(
              "FriendingCometProactiveFriendingAlertImpressionUpdateMutation"
            ).commit(b, {}),
            c("ManageFriendsEntryPointImpressionFalcoEvent").log(function () {
              return { entry_point: "proactive_module" };
            }),
            (f.current = !0));
        },
        [b]
      );
      a = c("useVisibilityObserver")({ onVisible: a });
      var g = j.jsx("div", {
          className: "datstx6m",
          children: j.jsx("div", {
            className:
              "ciadx1gn l9j0dhe7 a8nywdso qt6c0cv9 rz4wbd8a jb3vyjys taijpn5t mudddibn j83agx80 rq0escxv sk4xxmp2 agehan2d n8ej3o3l rt8b4zig spb7xbtv bkmhp75w emlxlaya s45kfl79 ibgm0fz6 bp9cbjyn",
            children: j.jsx(c("TetraIcon.react"), {
              color: "white",
              icon: d("fbicon")._(i("502061"), 16),
            }),
          }),
        }),
        m = j.jsx("div", {
          className: "knvmm38d h676nmdw oi9244e8 ama3r5zh buofh1pr",
          children: j.jsx(c("TetraTextPairing.react"), {
            body: h._(
              "The maximum is 5,000. Consider removing some friends before adding new ones."
            ),
            headline: h._("Reaching Friend Limit"),
            level: 3,
          }),
        }),
        n = j.jsx("div", {
          className: "datstx6m",
          children: j.jsx(c("TetraCircleButton.react"), {
            color: "secondary",
            icon: d("fbicon")._(i("478238"), 20),
            label: h._("Close"),
            onPress: function () {
              d("CometRelay").commitLocalUpdate(b, function (a) {
                a = a.get(d("CometRelay").VIEWER_ID);
                a == null
                  ? void 0
                  : a.setValue(!1, "should_show_proactive_friending_alert");
              }),
                c("ManageFriendsEntryPointDismissalFalcoEvent").log(
                  function () {
                    return { entry_point: "proactive_module" };
                  }
                );
            },
            size: 32,
          }),
        }),
        o = j.jsx(c("TetraButton.react"), {
          label: h._("Manage Friends"),
          onPress: function () {
            e({}),
              c("ManageFriendsEntryPointClickFalcoEvent").log(function () {
                return { entry_point: "proactive_module" };
              });
          },
          padding: "wide",
          type: "secondary",
        });
      return j.jsx("div", {
        className: "jei6r52m dhix69tm wkznzc2l n851cfcs",
        ref: a,
        children: j.jsx(c("CometCard.react"), {
          dropShadow: 2,
          children: j.jsxs("div", {
            className: "lb8aey2d a5h7je3r oj5qckz4 p6qk8glf",
            children: [
              j.jsxs("div", { className: "j83agx80", children: [g, m, n] }),
              o,
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
  "FriendingCometSectionTabViewLeftRail.react",
  [
    "fbt",
    "CometLeftRailBreadcrumbs.react",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometRouteParams",
    "XCometFriendingControllerRouteBuilder",
    "XCometFriendingSectionControllerRouteBuilder",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b,
        e = d("CometRouteParams").useRouteParams();
      e = e.friending_section;
      b = (b = c("qex")._("1907930")) != null ? b : !1;
      var f = c("XCometFriendingControllerRouteBuilder").buildURL({}),
        g = [{ label: h._("Friends"), url: f }];
      b ||
        g.push({
          label: a.title,
          url: c("XCometFriendingSectionControllerRouteBuilder").buildURL({
            friending_section: e,
          }),
        });
      return i.jsx(c("CometLeftRailComponent.react"), {
        header: i.jsx(c("CometLeftRailHeader.react"), {
          backActionAddOn: b
            ? { linkProps: { passthroughProps: { ref_tab: e }, url: f } }
            : void 0,
          meta: i.jsx(c("CometLeftRailBreadcrumbs.react"), { breadcrumbs: g }),
          title: a.title,
        }),
        primaryNav: a.leftRail,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometSectionTabView.react",
  [
    "CometLeftRailAndMainContentContainer.react",
    "FriendingCometSectionTabViewLeftRail.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b;
      return h.jsx(c("CometLeftRailAndMainContentContainer.react"), {
        leftRailContent: h.jsx(
          c("FriendingCometSectionTabViewLeftRail.react"),
          { leftRail: a.leftRail, title: a.title }
        ),
        leftRailHeading: a.title,
        mainContent: (b = a.children) != null ? b : a.mainContent,
        mainContentHeading: a.title,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometFriendsBadgeCountClearMutation",
  [
    "CometHomepageBadgeCountClearingMutationHelper",
    "CometRelay",
    "FriendingCometFriendsBadgeCountClearMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = { bookmarkID: "2356318349", hasBookmark: !0, hasTopTab: !0 },
      j =
        h !== void 0
          ? h
          : (h = b("FriendingCometFriendsBadgeCountClearMutation.graphql"));
    function k(a) {
      d("CometHomepageBadgeCountClearingMutationHelper").clearBadgeCount(
        babelHelpers["extends"]({}, i, { store: a })
      );
    }
    var l = function (a) {
      d("CometHomepageBadgeCountClearingMutationHelper").onCompleted(
        i.bookmarkID,
        a == null
          ? void 0
          : (a = a.viewer_friends_badge_count_clear) == null
          ? void 0
          : a.viewer_for_badge_count
      );
    };
    function a(a, b, c) {
      var e = function (a) {
        if (b == null) return;
        k(a);
      };
      return d("CometRelay").commitMutation(a, {
        mutation: j,
        onCompleted: l,
        onError: c,
        optimisticUpdater: e,
        variables: babelHelpers["extends"]({}, i, { input: b }),
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "FriendsCenterOpenedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743630");
    c = b("FalcoLoggerInternal").create("friends_center_opened", a);
    e.exports = c;
  },
  null
);
__d(
  "useCometTailLoadGlimmerTracker",
  [
    "IntersectionObserver",
    "cr:1703077",
    "intersectionObserverEntryIsIntersecting",
    "performanceNow",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useRef;
    function a(a, d, e) {
      var f = j(null),
        g = j(-1),
        k = j(-1),
        l = j(0),
        m = j(!1),
        n = j(null),
        o = j(null);
      b("cr:1703077") &&
        a != null &&
        b("cr:1703077").setTailLoadStartTime(a, e);
      i(function () {
        return function () {
          o.current && o.current(), (o.current = null);
        };
      }, []);
      return h(
        function (e) {
          if (
            a != null &&
            b("cr:1703077") &&
            e &&
            (g.current !== d || f.current !== e)
          ) {
            f.current = e;
            o.current && (o.current(), (o.current = null));
            if (m.current) {
              var h = n.current;
              h != null && (l.current += c("performanceNow")() - h);
              n.current = c("performanceNow")();
              m.current = !1;
            }
            g.current !== d &&
              (l.current > 0 &&
                (b("cr:1703077").reportInterruptedConsumption(
                  a,
                  g.current,
                  l.current
                ),
                (k.current = g.current)),
              (g.current = d),
              (l.current = 0));
            h = function (a) {
              Array.prototype.forEach.call(a, function (a) {
                if (
                  c("intersectionObserverEntryIsIntersecting")(a) &&
                  !m.current
                )
                  (m.current = !0), (n.current = a.time);
                else if (
                  !c("intersectionObserverEntryIsIntersecting")(a) &&
                  m.current
                ) {
                  m.current = !1;
                  var b = n.current;
                  b != null && (l.current += a.time - b);
                }
              });
            };
            var i = new (c("IntersectionObserver"))(h);
            i.observe(e);
            o.current = function () {
              i.disconnect();
            };
          }
        },
        [a, d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometInfiniteScrollSuspenseList.react",
  [
    "CometPagelet.react",
    "CometPlaceholder.react",
    "CometSuspendWhileWaitingOnDOM.react",
    "CometSuspenseList.react",
    "CometVisualCompletionAttributes",
    "ExecutionEnvironment",
    "cr:1142206",
    "gkx",
    "mergeRefs",
    "performanceNow",
    "react",
    "stylex",
    "useCometTailLoadGlimmerTracker",
    "useLayoutEffect_SAFE_FOR_SSR",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.Children,
      j = e.startTransition,
      k = e.useCallback,
      l = e.useEffect,
      m = e.useMemo,
      n = e.useRef,
      o = e.useState,
      p = { glimmerRoot: { overflowAnchor: "rek2kq2y" } };
    function q(a) {
      var d = a.onLoadMore,
        e = a.rootMargin;
      a = a.triggerXStyle;
      var f = n(!1),
        g = k(
          function () {
            b("cr:1142206") != null &&
              b("cr:1142206").log("[onVisible] fired", {
                alreadyTriggered: f.current,
              });
            if (f.current) return;
            f.current = !0;
            d();
          },
          [d]
        );
      e = c("useVisibilityObserver")({
        onVisible: g,
        options: { rootMargin: (g = e) != null ? g : 0 },
      });
      return h.jsx("div", { className: c("stylex")(a), ref: e });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.children,
        e = a.endGlimmerRef,
        f = a.hasMore,
        g = a.isLoading,
        r = a.listGlimmer,
        s = a.onLoadMore,
        t = a.pageletName,
        u = a.positionLimitForSSR,
        v = a.revealOrder,
        w = a.rootMargin;
      a = a.triggerXStyle;
      var x = o(0),
        y = x[0],
        z = x[1],
        A = n(!1),
        B = n(null),
        C = n(0),
        D = f;
      x = k(
        function () {
          (C.current = c("performanceNow")()),
            j(function () {
              z(function (a) {
                return a + 1;
              }),
                s(B);
            });
        },
        [s, j, B]
      );
      l(
        function () {
          return;
        },
        [x, g, f, D]
      );
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          D || (A.current = !1);
        },
        [D]
      );
      var E = k(
          function () {
            return;
          },
          [f, g, x]
        ),
        F = k(function () {
          return;
        }, []),
        G = c("useVisibilityObserver")({
          onHidden: F,
          onVisible: E,
          options: { rootMargin: (F = w) != null ? F : 0 },
        }),
        H = 0;
      E = i.map(b, function (a) {
        var b = u != null && H > u,
          e = b
            ? {
                pageletAriaProps: babelHelpers["extends"](
                  {},
                  c("CometVisualCompletionAttributes").IGNORE_LATE_MUTATION
                ),
              }
            : null;
        return a
          ? t != null
            ? h.jsx(
                d("CometPagelet.react").Placeholder,
                babelHelpers["extends"]({ fallback: r, name: t }, e, {
                  position: H++,
                  trackTailLoad: !0,
                  children:
                    b && !d("ExecutionEnvironment").canUseDOM
                      ? h.jsx(c("CometSuspendWhileWaitingOnDOM.react"), {})
                      : a,
                })
              )
            : h.jsx(c("CometPlaceholder.react"), { fallback: r, children: a })
          : null;
      });
      F = o(!1);
      b = F[0];
      var I = F[1];
      l(function () {
        return I(!0);
      }, []);
      if (f && !g && b) {
        F = h.jsx(
          q,
          { onLoadMore: x, rootMargin: w, triggerXStyle: a },
          "tailTrigger" + y
        );
        v === "backwards" ? E.unshift(F) : E.push(F);
      }
      f = H;
      var J = c("useCometTailLoadGlimmerTracker")(t, f, C.current);
      g = m(
        function () {
          return c("mergeRefs")(e, B, J, G);
        },
        [e, J, G]
      );
      return h.jsxs(h.Fragment, {
        children: [
          D && v === "backwards"
            ? h.jsx("div", { ref: g, children: r }, "glimmerBackwards")
            : null,
          h.jsx(
            c("CometSuspenseList.react"),
            { revealOrder: v || "forwards", tail: "hidden", children: E },
            "list"
          ),
          h.jsx("div", { "data-testid": void 0 }),
          D && v !== "backwards"
            ? h.jsx(
                "div",
                {
                  className: c("stylex")(c("gkx")("1386096") && p.glimmerRoot),
                  ref: g,
                  children: r,
                },
                "glimmer"
              )
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
  "CometInfiniteScrollSuspenseListIncrementalRenderer.react",
  ["CometInfiniteScrollSuspenseList.react", "react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.Children,
      j = b.useCallback,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState,
      n = [1, 2, 2, 2, 4];
    function a(a) {
      var b = a.children,
        d = a.hasMore,
        e = a.isLoading,
        f = a.onLoadMore,
        g = a.revealOrder;
      g = g === void 0 ? "forwards" : g;
      var o = a.pageSizes,
        p = o === void 0 ? n : o;
      o = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "hasMore",
        "isLoading",
        "onLoadMore",
        "revealOrder",
        "pageSizes",
      ]);
      a = m(p[0]);
      var q = a[0],
        r = a[1],
        s = l(1),
        t = i.count(b);
      a = q < t;
      if (g !== "forwards")
        throw c("unrecoverableViolation")(
          'CometInfiniteScrollSuspenseListIncrementalRenderer currently only supports revealOrder="forwards"',
          "comet_feed"
        );
      var u = j(
          function (a) {
            s.current = Math.min(s.current, p.length - 1);
            var b = p[s.current];
            q < t
              ? (s.current++, r(q + b))
              : d && !e && (q === t && (s.current++, r(q + b)), f(a));
          },
          [d, e, t, q, f, p]
        ),
        v = k(
          function () {
            return i.toArray(b).slice(0, q);
          },
          [b, q]
        );
      return h.jsx(
        c("CometInfiniteScrollSuspenseList.react"),
        babelHelpers["extends"]({}, o, {
          hasMore: d || a,
          isLoading: e && !a,
          onLoadMore: u,
          revealOrder: g,
          children: v,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHideableComponent.react",
  [
    "BaseView.react",
    "ContentVisibility",
    "HiddenSubtreeContextProvider.react",
    "HiddenSubtreePassiveContext",
    "gkx",
    "intersectionObserverEntryIsIntersecting",
    "nullIntersectionObserverEntryLogger",
    "qex",
    "react",
    "stylex",
    "unrecoverableViolation",
    "useIntersectionObserver",
    "useMergeRefs",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState,
      m = 600,
      n = (function () {
        var a = null;
        return function () {
          if (a === null) {
            var b;
            b = (b = document) == null ? void 0 : b.documentElement;
            if (b == null)
              throw c("unrecoverableViolation")(
                "Scroll anchoring feature detection called in an environment without a documentElement",
                "comet_infra"
              );
            a = b.style.overflowAnchor != null;
          }
          return a;
        };
      })();
    function o() {
      var a = l(null),
        b = a[0],
        c = a[1];
      j(
        function () {
          b === null &&
            c(function () {
              return n();
            });
        },
        [b]
      );
      return (a = b) != null ? a : !1;
    }
    var p = {
        contentVisibility: {
          contentVisibility: "qnk6mcem",
          minHeight: "ededomy5",
        },
        invisible: { display: "mkhogb32" },
        resetBlockFormattingContext: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
        },
        shadowPadding: {
          paddingTop: "jwdofwj8",
          paddingEnd: "n8tt0mok",
          paddingBottom: "r8blr3vg",
          paddingStart: "hyh9befq",
        },
      },
      q = d("ContentVisibility").CONTENT_VISIBILITY_ENABLED
        ? { bottom: 0, top: 0 }
        : { bottom: 4e3, top: 4e3 };
    function a(a) {
      var b = arguments,
        e = a.children,
        f = k(null),
        g = k(null),
        n = i(c("HiddenSubtreePassiveContext")),
        r = l(!0),
        s = r[0],
        t = r[1],
        u = l(null),
        v = u[0],
        w = u[1],
        x = c("usePrevious")(s);
      j(
        function () {
          var a = (function () {
            if (d("ContentVisibility").CONTENT_VISIBILITY_ENABLED)
              return v == null || x !== s;
            else return v == null && !s;
          })();
          g.current != null && a && w(g.current.getBoundingClientRect().height);
        },
        [s, v, x]
      );
      var y = function (a) {
          c("nullIntersectionObserverEntryLogger")(
            a,
            "IntersectionObserverEntry is null. num_arguments=" + b.length
          );
          var e = n.getCurrentState().hiddenOrBackgrounded_FIXME;
          c("intersectionObserverEntryIsIntersecting")(a)
            ? (d("ContentVisibility").CONTENT_VISIBILITY_ENABLED || w(null),
              t(!0))
            : e || t(!1);
        },
        z = c("useIntersectionObserver")(y, {
          root: null,
          rootMargin: q,
          threshold: 0,
        }),
        A = c("useMergeRefs")(z, f),
        B = (function () {
          if (d("ContentVisibility").CONTENT_VISIBILITY_ENABLED) {
            var a;
            return {
              containIntrinsicSize: "0 " + ((a = v) != null ? a : m) + "px",
            };
          }
          if (!s && v !== null) return { height: v };
        })(),
        C = !s && v !== null,
        D = o(),
        E = D && !c("qex")._("1609699") ? A : void 0;
      return c("gkx")("659")
        ? h.jsx("div", {
            className: c("stylex")(p.resetBlockFormattingContext),
            children: h.jsx(c("BaseView.react"), { children: e }),
          })
        : h.jsx("div", {
            className: c("stylex")(
              p.resetBlockFormattingContext,
              d("ContentVisibility").CONTENT_VISIBILITY_ENABLED &&
                p.contentVisibility
            ),
            ref: E,
            style: B,
            children: h.jsx(c("BaseView.react"), {
              hidden: !d("ContentVisibility").CONTENT_VISIBILITY_ENABLED && C,
              ref: g,
              xstyle: [
                C &&
                  !d("ContentVisibility").CONTENT_VISIBILITY_ENABLED &&
                  p.invisible,
                d("ContentVisibility").CONTENT_VISIBILITY_ENABLED &&
                  p.shadowPadding,
              ],
              children: h.jsx(c("HiddenSubtreeContextProvider.react"), {
                isHidden:
                  !d("ContentVisibility").CONTENT_VISIBILITY_ENABLED && C,
                children: e,
              }),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = a;
    g["default"] = e;
  },
  98
);
__d(
  "CometTailLoadDebugger",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [];
    function a() {
      return g;
    }
    function b() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      g.push([new Date().toLocaleString()].concat(b));
    }
    f.dump = a;
    f.log = b;
  },
  66
);
__d(
  "CometFeedHighlightedStoriesContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = new Set();
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "CometFeedUnitLoadingContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      onFinishLoading: c("emptyFunction"),
      onStartLoading: c("emptyFunction"),
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometFeedUnitsTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:CometFeedUnitsLoggerConfig"
    );
  },
  null
);
__d(
  "CometFeedUnitOnUnsupportedLoggerContext",
  ["CometFeedUnitsTypedLoggerLite", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useRef,
      k = h.createContext(function () {
        return void 0;
      });
    function a(a) {
      var b = a.category,
        d = a.children,
        e = a.position,
        f = a.renderLocation,
        g = a.unitName,
        l = j(!1);
      a = i(
        function (a) {
          if (!l.current) {
            l.current = !0;
            c("CometFeedUnitsTypedLoggerLite").log({
              category: b,
              event: "unsupported",
              position: e,
              related_ids: (a = a) != null ? a : null,
              render_location: f,
              unit_name: g,
            });
          }
        },
        [b, e, f, g]
      );
      return h.jsx(k.Provider, { value: a, children: d });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CometFeedUnitOnUnsupportedLoggerContext = k;
    g.CometFeedUnitOnUnsupportedLoggerContextProvider = a;
  },
  98
);
__d(
  "CometFeedUnitSetStatusContext",
  ["react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback,
      j = h.createContext(function () {
        return void 0;
      });
    function a(a) {
      var b = a.category,
        d = a.children,
        e = a.deduplicationKey,
        f = a.setFeedUnitRecord;
      a = i(
        function (a) {
          e != null && b != null
            ? f(e, { category: b, status: a })
            : c("recoverableViolation")(
                "Category or deduplication_key cannot be null in CometFeedUnitSetStatusContextProvider; Feed unit status not set.",
                "CometFeedUnitStatusTracking"
              );
        },
        [b, e, f]
      );
      return h.jsx(j.Provider, { value: a, children: d });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CometFeedUnitSetStatusContext = j;
    g.CometFeedUnitSetStatusContextProvider = a;
  },
  98
);
__d(
  "CometHeroFeedItem.react",
  ["CometHeroInteractionContextPassthrough.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.position;
      a = a == null || a <= 1;
      return h.jsx(c("CometHeroInteractionContextPassthrough.react"), {
        clear: !a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useProfileCometIsCenteredLayout",
  [
    "CometLeftRailLayoutContext",
    "CometRouteRenderType",
    "react",
    "useMatchViewport",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("CometLeftRailLayoutContext")),
        b = d("CometRouteRenderType").useIsHosted();
      a = a || b;
      b = a ? 1259 : 899;
      return c("useMatchViewport")("max", "width", b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsUpdateAllSeenStateMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "environment",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "input" },
        c = [{ kind: "Variable", name: "data", variableName: "input" }],
        d = {
          alias: null,
          args: null,
          concreteType: "Notification",
          kind: "LinkedField",
          name: "notifications",
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
              name: "seen_state",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "CometNotificationsUpdateAllSeenStateMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "NotificationsUpdateAllSeenStateResponsePayload",
              kind: "LinkedField",
              name: "notifications_update_all_seen_state",
              plural: !1,
              selections: [
                d,
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
                      name: "CometNotificationsBadgeCountFragment_viewer",
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
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "CometNotificationsUpdateAllSeenStateMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "NotificationsUpdateAllSeenStateResponsePayload",
              kind: "LinkedField",
              name: "notifications_update_all_seen_state",
              plural: !1,
              selections: [
                d,
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
                        {
                          kind: "Variable",
                          name: "environment",
                          variableName: "environment",
                        },
                      ],
                      kind: "ScalarField",
                      name: "notifications_unseen_count",
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
          id: "4331912310175516",
          metadata: {},
          name: "CometNotificationsUpdateAllSeenStateMutation",
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
  "NullStateNotifications",
  ["IconSource"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      dark: new (c("IconSource"))(
        "nullStateGlyphs",
        "/images/comet/empty_states_icons/notifications/null_states_notifications_dark_mode.svg",
        112
      ),
      default: new (c("IconSource"))(
        "nullStateGlyphs",
        "/images/comet/empty_states_icons/notifications/null_states_notifications_gray_wash.svg",
        112
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometFocusTable.react",
  [
    "CometCompositeFocusIndicator.react",
    "CometFocusTableContext",
    "FocusTable.react",
    "focusScopeQueries",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    b = d("FocusTable.react").createFocusTable(
      d("focusScopeQueries").focusableScopeQuery
    );
    var j = b[0],
      k = b[1],
      l = b[2];
    function m(a) {
      var b = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
      return h.jsx(
        l,
        babelHelpers["extends"]({}, a, {
          children: h.jsx("div", { role: "gridcell", children: b }),
        })
      );
    }
    m.displayName = m.name + " [from " + f.id + "]";
    var n = { horizontal: !0, role: "grid", vertical: !0 };
    function a(a) {
      var b = a.label,
        d = babelHelpers.objectWithoutPropertiesLoose(a, ["label"]);
      a = i(function () {
        return { FocusCell: m, FocusRow: k, FocusTable: j };
      }, []);
      return h.jsx(c("CometFocusTableContext").Provider, {
        value: a,
        children: h.jsx(c("CometCompositeFocusIndicator.react"), {
          compositeInfo: n,
          children: function (a) {
            return h.jsx("div", {
              "aria-label": b,
              className: c("stylex")(a),
              role: "grid",
              children: h.jsx(j, babelHelpers["extends"]({}, d)),
            });
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CometFocusTable = a;
    g.CometFocusCell = l;
    g.CometFocusRow = k;
  },
  98
);
__d(
  "CometNoNotifications.react",
  [
    "fbt",
    "CometContentArea.react",
    "NullStateNotifications",
    "TetraNullState.react",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useEffect,
      k = c("requireDeferred")("NoNotificationsFalcoEvent").__setRef(
        "CometNoNotifications.react"
      );
    function a(a) {
      var b = a.loggingSurface,
        d = a.userId;
      j(
        function () {
          k.onReady(function (a) {
            a = a.log;
            return a(function () {
              return { ref: b, user_id: d };
            });
          });
        },
        [b, d]
      );
      return i.jsx(c("CometContentArea.react"), {
        verticalAlign: "middle",
        children: i.jsx(c("TetraNullState.react"), {
          "data-testid": void 0,
          headline: h._("You have no notifications"),
          icon: c("NullStateNotifications"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsInteractionLoggingContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = d("react");
    var h = b.useMemo,
      i = b.useRef;
    c = function () {
      var a = i(!1),
        b = h(
          function () {
            return { notifsLoadCompleteRef: a };
          },
          [a]
        );
      return b;
    };
    e = a.createContext({ notifsLoadCompleteRef: { current: !1 } });
    g.useInteractionLoggingRefs = c;
    g.CometNotificationsInteractionLoggingContext = e;
  },
  98
);
__d(
  "CometNotificationsContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ renderLocation: null });
    g["default"] = b;
  },
  98
);
__d(
  "CometNotificationsRenderLocations",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "dropdown";
    b = "rail";
    f.DROPDOWN = a;
    f.RAIL = b;
  },
  66
);
__d(
  "CometNotificationsScrollHoldingContainer.react",
  ["BaseScrollableAreaContext", "HiddenSubtreePassiveContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useLayoutEffect,
      l = b.useRef;
    function a(a) {
      var b = i(c("BaseScrollableAreaContext")),
        d = i(c("HiddenSubtreePassiveContext")),
        e = l(null),
        f = l(null),
        g = l(null),
        m = l(0),
        n = b[b.length - 1];
      j(
        function () {
          var a = n.getDOMNode();
          if (a != null) {
            m.current = a.scrollTop;
            var b = function () {
              m.current = a.scrollTop;
            };
            a.addEventListener("scroll", b, { passive: !0 });
            return function () {
              a.removeEventListener("scroll", b, { passive: !0 });
            };
          }
        },
        [n]
      );
      k(function () {
        if (
          e.current != null &&
          !d.getCurrentState().hiddenOrBackgrounded_FIXME
        ) {
          var b = e.current.getBoundingClientRect();
          if (g.current != null && f.current != null) {
            var c = b.height - g.current.height;
            if (c === 0 || f.current === a.firstNotificationID) {
              f.current = a.firstNotificationID;
              g.current = b;
              return;
            }
            var h = n.getDOMNode();
            h != null &&
              (h.scrollTop === m.current || g.current == null) &&
              (h.scrollTop += c);
          }
          f.current = a.firstNotificationID;
          g.current = b;
        }
      });
      return h.jsx("div", { ref: e, children: a.children });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsUpdateAllSeenStateMutation",
  [
    "CometNotificationsMutationLogger",
    "CometNotificationsThinClientConnectionHandler",
    "CometNotificationsUpdateAllSeenStateMutation.graphql",
    "CometRelay",
    "emptyFunction",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometNotificationsUpdateAllSeenStateMutation.graphql"));
    function j(a, b) {
      a = a.get(d("relay-runtime").VIEWER_ID);
      if (a == null) return;
      var c = d("CometNotificationsThinClientConnectionHandler").getConnection(
        a,
        "CometNotificationsList_notifications_page"
      );
      if (c == null) return;
      c = c.getLinkedRecords("edges");
      if (c == null || c.length === 0) return;
      var e = [];
      c.forEach(function (a) {
        if (a == null) return;
        a = a.getLinkedRecord("node");
        if (a == null) return;
        var b = a.getType();
        if (
          b !== "NotifPageNotificationRow" &&
          b !== "NotifPageCachedNotificationRow"
        )
          return;
        b = a.getLinkedRecord("notif");
        if (b == null) return;
        e.push(b);
      });
      for (var c = 0; c < e.length; c++)
        b === "seen"
          ? e[c] != null &&
            e[c].getValue("seen_state") === "UNSEEN_AND_UNREAD" &&
            e[c].setValue("SEEN_BUT_UNREAD", "seen_state")
          : b === "read" &&
            e[c] != null &&
            (e[c].getValue("seen_state") === "UNSEEN_AND_UNREAD" ||
              e[c].getValue("seen_state") === "SEEN_BUT_UNREAD") &&
            e[c].setValue("SEEN_AND_READ", "seen_state");
      c = a.getValue("notifications_unseen_count", {
        environment: "MAIN_SURFACE",
      });
      if (c == null) return;
      a.setValue(0, "notifications_unseen_count", {
        environment: "MAIN_SURFACE",
      });
    }
    function a(a, b, e) {
      var f = function (a) {
          var c = b.input;
          if (c == null) return;
          c = c.update_type;
          if (c == null) return;
          j(a, c);
        },
        g = c("emptyFunction"),
        h = c("emptyFunction"),
        k = b.input.update_type;
      if (k === "read") {
        var l = d(
          "CometNotificationsMutationLogger"
        ).notificationMarkAllAsReadStart();
        g = l.logOnError;
        h = l.logOnSuccess;
      } else if (k === "seen") {
        l = d(
          "CometNotificationsMutationLogger"
        ).notificationMarkAllAsSeenStart();
        g = l.logOnError;
        h = l.logOnSuccess;
      }
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function () {
          h(), e && e.onSuccess();
        },
        onError: function (a) {
          g(a), e && e.onError(a);
        },
        optimisticUpdater: f,
        variables: b,
      });
    }
    g.mutation = i;
    g.CometNotificationsUpdateAllSeenStateMutation = a;
  },
  98
);
__d(
  "useHandleMarkAllAsRead",
  [
    "CometNotificationsUpdateAllSeenStateMutation",
    "CometRelay",
    "react",
    "recoverableViolation",
    "useTriggerAccessibilityAlert",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = "MAIN_SURFACE";
    function a(a) {
      var b = c("useTriggerAccessibilityAlert")(),
        e = a.accessibilityString,
        f = a.receivedNotificationIdsRef,
        g = a.timestamp,
        j = d("CometRelay").useRelayEnvironment();
      return h(
        function () {
          if (f.current.size === 0 || g == null) return;
          d(
            "CometNotificationsUpdateAllSeenStateMutation"
          ).CometNotificationsUpdateAllSeenStateMutation(
            j,
            {
              environment: i,
              input: {
                environment: i,
                is_comet: !0,
                latest_time_sent: g,
                notif_ids: Array.from(f.current),
                source: "unknown",
                update_type: "read",
              },
            },
            {
              onError: function (a) {
                c("recoverableViolation")(
                  "Mark all as read mutation failed with an error: ",
                  "Notifications",
                  { error: a }
                );
              },
              onSuccess: function () {
                e != null && b(e);
              },
            }
          );
        },
        [e, j, f, g, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useHandleMarkAllAsSeen",
  [
    "CometNotificationsUpdateAllSeenStateMutation",
    "CometRelay",
    "CometThrottle",
    "createCancelableFunction",
    "emptyFunction",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo,
      i = "MAIN_SURFACE",
      j = function (a, b, e) {
        if (b == null) return;
        d(
          "CometNotificationsUpdateAllSeenStateMutation"
        ).CometNotificationsUpdateAllSeenStateMutation(
          e,
          {
            environment: i,
            input: {
              environment: i,
              is_comet: !0,
              latest_time_sent: b,
              notif_ids: Array.from(a.current),
              source: "unknown",
              update_type: "seen",
            },
          },
          {
            onError: function (a) {
              c("recoverableViolation")(
                "Mark all as seen mutation failed with an error: ",
                "Notifications",
                { error: a }
              );
            },
            onSuccess: c("emptyFunction"),
          }
        );
      };
    function a(a) {
      var b = a.receivedNotificationIdsRef,
        e = a.timestamp,
        f = d("CometRelay").useRelayEnvironment();
      return h(
        function () {
          var a = c("createCancelableFunction")(function () {
              return j(b, e, f);
            }),
            d = !1,
            g = c("CometThrottle")(
              function () {
                (d = !1), a();
              },
              1e3,
              { leading: !0 }
            ),
            h = function () {
              (d = !0), g();
            };
          h.dispose = function () {
            d && a(), a.cancel();
          };
          return h;
        },
        [f, b, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          kind: "Literal",
          name: "bookmark_render_location",
          value: "COMET_LEFT_NAV",
        },
      ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "bookmarkID" }],
        kind: "Fragment",
        metadata: null,
        name: "CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer",
        selections: [
          {
            alias: null,
            args: [
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
                        alias: "bookmark_unread_count",
                        args: a,
                        kind: "ScalarField",
                        name: "unread_count",
                        storageKey:
                          'unread_count(bookmark_render_location:"COMET_LEFT_NAV")',
                      },
                      {
                        alias: "bookmark_unread_count_string",
                        args: a,
                        kind: "ScalarField",
                        name: "unread_count_string",
                        storageKey:
                          'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")',
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
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometHomepageBadgeCountClearingMutationHelper_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          kind: "Literal",
          name: "bookmark_render_location",
          value: "COMET_LEFT_NAV",
        },
      ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "bookmarkID" },
          { kind: "RootArgument", name: "hasBookmark" },
          { kind: "RootArgument", name: "hasTopTab" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometHomepageBadgeCountClearingMutationHelper_viewer",
        selections: [
          {
            alias: null,
            args: [
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
              { kind: "Literal", name: "folder_id", value: "PRODUCT" },
              { kind: "Literal", name: "sections", value: ["FACEBOOK_APP"] },
            ],
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
                        condition: "hasBookmark",
                        kind: "Condition",
                        passingValue: !0,
                        selections: [
                          {
                            alias: "bookmark_unread_count",
                            args: a,
                            kind: "ScalarField",
                            name: "unread_count",
                            storageKey:
                              'unread_count(bookmark_render_location:"COMET_LEFT_NAV")',
                          },
                        ],
                      },
                      {
                        alias: "bookmark_unread_count_string",
                        args: a,
                        kind: "ScalarField",
                        name: "unread_count_string",
                        storageKey:
                          'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")',
                      },
                      {
                        condition: "hasTopTab",
                        kind: "Condition",
                        passingValue: !0,
                        selections: [
                          {
                            alias: "tab_unread_count",
                            args: [
                              {
                                kind: "Literal",
                                name: "bookmark_render_location",
                                value: "COMET_TOP_TAB",
                              },
                            ],
                            kind: "ScalarField",
                            name: "unread_count",
                            storageKey:
                              'unread_count(bookmark_render_location:"COMET_TOP_TAB")',
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
  "CometFlexibleGrid.react",
  ["react", "stylex", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
      j = b.useRef,
      k = b.useState,
      l = {
        grid: {
          alignContent: "bq4bzpyk",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          flexWrap: "lhclo0ds",
          justifyContent: "jifvfom9",
          marginTop: "muag1w35",
          marginEnd: "dlv3wnog",
          marginBottom: "enqfppq2",
          marginStart: "rl04r1d5",
        },
        gridJustifyCenter: { justifyContent: "taijpn5t" },
        item: {
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexBasis: "rj1gh0hx",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
          flexShrink: "g5gj957u",
          paddingEnd: "ph5uu5jm",
          paddingStart: "b3onmgus",
          visibility: "kr9hpln1",
        },
        itemVisible: {
          paddingBottom: "e5nlhep0",
          paddingTop: "ecm0bbzt",
          visibility: "n1dktuyu",
        },
      };
    function a(a) {
      var b = a.columnMaxWidth,
        d = a.columnMinWidth,
        e = a.justify;
      e = e === void 0 ? "start" : e;
      var f = a.maxItems;
      f = f === void 0 ? Infinity : f;
      var g = a.minItems,
        m = g === void 0 ? 1 : g,
        n = a.onTotalItemsChanged;
      g = a.xstyle;
      var o = h.Children.toArray(a.children);
      a = k(o.length);
      var p = a[0],
        q = a[1],
        r = j(null);
      i(
        function () {
          function a(a) {
            a !== p && (n && n(a), q(a));
          }
          function b() {
            if (r.current != null) {
              var b = r.current.children;
              if (m < 1 || m > b.length) {
                a(b.length);
                return;
              }
              var c = b[m - 1].offsetTop;
              for (var d = m; d < b.length; d++)
                if (b[d].offsetTop > c) {
                  a(d);
                  return;
                }
              a(b.length);
            }
          }
          b();
          window.addEventListener("resize", b);
          return function () {
            window.removeEventListener("resize", b);
          };
        },
        [b, d, m, f, p, n]
      );
      if (m > f)
        throw c("unrecoverableViolation")(
          "minItems must be less than maxItems",
          "comet_ui"
        );
      a = Math.min(Math.max(m, o.length + (e !== "center" ? 10 : 0)), f);
      return h.jsx("div", {
        className: c("stylex")(
          l.grid,
          e === "center" && l.gridJustifyCenter,
          g
        ),
        ref: r,
        children: Array(a)
          .fill()
          .map(function (a, e) {
            a = o[e];
            var f = e < p;
            return h.jsx(
              "div",
              {
                className: c("stylex")(l.item, f && l.itemVisible),
                style: { maxWidth: b, minWidth: d },
                children: f ? a : null,
              },
              (f = a == null ? void 0 : a.key) != null ? f : e
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
  "CometHomepageBadgeCountClearingMutationHelper",
  [
    "CometHomeProductBadgedNavigationLogger",
    "CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer.graphql",
    "CometHomepageBadgeCountClearingMutationHelper_viewer.graphql",
    "RelayFBConnectionHandler_UNSTABLE",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0
      ? h
      : (h = b("CometHomepageBadgeCountClearingMutationHelper_viewer.graphql"));
    i !== void 0
      ? i
      : (i = b(
          "CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer.graphql"
        ));
    function a(a) {
      var b = a.bookmarkID,
        e = a.hasBookmark,
        f = a.hasTopTab;
      a = a.store;
      if (f === !1 && e === !1) return;
      var g = a.getRoot();
      if (!g) return;
      g = g.getLinkedRecord("viewer");
      if (!g) return;
      var h = g.getLinkedRecord("bookmarks", {
        bookmark_ids: [b],
        environment: "COMET",
        folder_id: "PRODUCT",
        sections: ["FACEBOOK_APP"],
      });
      if (!h && e) {
        e = g.getLinkedRecord("bookmark_folder", { folder: "PRODUCT" });
        if (e != null) {
          a = d(
            "RelayFBConnectionHandler_UNSTABLE"
          ).unstable_getAllConnectionsWithKey(
            a,
            e,
            "CometHomeLeftRailWithBlueRankingRefetchSection_bookmarks"
          );
          a && a.length > 0 && (h = a[0]);
        }
      }
      !h &&
        f &&
        c("gkx")("2204") &&
        (h = g.getLinkedRecord("tab_bookmarks", {
          environment: "COMET",
          folder_id: "PRODUCT",
        }));
      if (!h) return;
      e = h.getLinkedRecords("edges");
      if (!e) return;
      a = null;
      e.forEach(function (c) {
        var d;
        c = c == null ? void 0 : c.getLinkedRecord("node");
        d =
          c == null
            ? void 0
            : (d = c.getLinkedRecord("bookmarked_node")) == null
            ? void 0
            : d.getValue("id");
        d === b && (a = c);
      });
      if (!a) return;
      a.setValue(0, "unread_count", {
        bookmark_render_location: "COMET_LEFT_NAV",
      });
      a.setValue(null, "unread_count_string", {
        bookmark_render_location: "COMET_LEFT_NAV",
      });
      a.setValue(0, "unread_count", {
        bookmark_render_location: "COMET_TOP_TAB",
      });
    }
    function e(a, b) {
      b = b == null ? void 0 : (b = b.bookmarks) == null ? void 0 : b.edges;
      if (b != null && b.length > 0) {
        b = b[0].node;
        var c = b == null ? void 0 : b.bookmark_unread_count,
          e = b == null ? void 0 : b.bookmark_unread_count_string;
        b = b == null ? void 0 : b.tab_unread_count;
        c === 0 && (b == null || b === 0) && e == null
          ? d("CometHomeProductBadgedNavigationLogger").markerEnd(a, 2)
          : (c == null
              ? d("CometHomeProductBadgedNavigationLogger").markerAnnotate(
                  { string: { bookmark_unread_count: "null" } },
                  a
                )
              : c > 0 &&
                d("CometHomeProductBadgedNavigationLogger").markerAnnotate(
                  { int: { bookmark_unread_count: c } },
                  a
                ),
            b == null
              ? d("CometHomeProductBadgedNavigationLogger").markerAnnotate(
                  { string: { tab_unread_count: "null" } },
                  a
                )
              : b > 0 &&
                d("CometHomeProductBadgedNavigationLogger").markerAnnotate(
                  { int: { tab_unread_count: b } },
                  a
                ),
            e != null &&
              d("CometHomeProductBadgedNavigationLogger").markerAnnotate(
                { string: { bookmark_unread_count_string: e } },
                a
              ),
            d("CometHomeProductBadgedNavigationLogger").markerEnd(a, 3));
      }
    }
    g.clearBadgeCount = a;
    g.onCompleted = e;
  },
  98
);
__d(
  "filterMap",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = new Map();
      for (
        var a = a,
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var g = f[0];
        f = f[1];
        b(f, g) && c.set(g, f);
      }
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometNotificationsMarkReadMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "NotificationMarkReadResponsePayload",
            kind: "LinkedField",
            name: "notification_mark_read",
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
                    name: "seen_state",
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
          name: "CometNotificationsMarkReadMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometNotificationsMarkReadMutation",
          selections: b,
        },
        params: {
          id: "2798957586856236",
          metadata: {},
          name: "CometNotificationsMarkReadMutation",
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
  "NotificationsModuleNotificationsMutationAttemptQPLEvent",
  ["cr:8252"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:8252");
  },
  98
);
__d(
  "CometNotificationsMutationLogger",
  [
    "NotificationsModuleNotificationsMutationAttemptQPLEvent",
    "QuickPerformanceLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "client_action",
      i = "status",
      j = "seen_state",
      k = 0;
    function l(a, b) {
      var d;
      b === void 0 && (b = null);
      var e = k++;
      c("QuickPerformanceLogger").markerStart(
        c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
        e
      );
      c("QuickPerformanceLogger").markerAnnotate(
        c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
        { string: ((d = {}), (d[h] = a), d) },
        { instanceKey: e }
      );
      c("QuickPerformanceLogger").markerAnnotate(
        c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
        { string: ((a = {}), (a[i] = "started"), a) },
        { instanceKey: e }
      );
      c("QuickPerformanceLogger").markerAnnotate(
        c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
        { string: { environment: "MAIN_SURFACE" } },
        { instanceKey: e }
      );
      if (b) {
        c("QuickPerformanceLogger").markerAnnotate(
          c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
          { string: ((d = {}), (d[j] = b), d) },
          { instanceKey: e }
        );
      }
      return o(e);
    }
    function m(a) {
      var b;
      c("QuickPerformanceLogger").markerAnnotate(
        c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
        { string: ((b = {}), (b[i] = "success"), b) },
        { instanceKey: a }
      );
      c("QuickPerformanceLogger").markerEnd(
        c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
        2,
        a
      );
    }
    function n(a, b) {
      c("QuickPerformanceLogger").markerAnnotate(
        c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
        { string: { status: "error" } },
        { instanceKey: a }
      ),
        c("QuickPerformanceLogger").markerAnnotate(
          c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
          {
            string: {
              error_localized_description: b == null ? void 0 : b.message,
            },
          },
          { instanceKey: a }
        ),
        c("QuickPerformanceLogger").markerAnnotate(
          c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
          { string: { error_domain: b == null ? void 0 : b.name } },
          { instanceKey: a }
        ),
        c("QuickPerformanceLogger").markerEnd(
          c("NotificationsModuleNotificationsMutationAttemptQPLEvent"),
          87,
          a
        );
    }
    function o(a) {
      return {
        logOnError: function (b) {
          return n(a, b);
        },
        logOnSuccess: function () {
          return m(a);
        },
      };
    }
    function a() {
      return l("HIDE");
    }
    function b() {
      return l("MARK_ALL_AS_READ");
    }
    function d() {
      return l("MARK_ALL_AS_SEEN");
    }
    function e(a) {
      return l("MARK_AS_READ", a);
    }
    function f() {
      return l("MARK_AS_SEEN");
    }
    function p(a) {
      return l("MARK_AS_UNREAD", a);
    }
    function q() {
      return l("UNHIDE");
    }
    g.notificationHideStart = a;
    g.notificationMarkAllAsReadStart = b;
    g.notificationMarkAllAsSeenStart = d;
    g.notificationMarkAsReadStart = e;
    g.notificationMarkAsSeenStart = f;
    g.notificationMarkAsUnreadStart = p;
    g.notificationUnhideStart = q;
  },
  98
);
__d(
  "CometNotificationsTimestamp.react",
  ["CometRelativeTimestamp.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.date,
        d = a.format;
      a = a.seenAndRead;
      return a
        ? h.jsx(c("TetraText.react"), {
            color: "secondary",
            type: "body4",
            children: h.jsx(c("CometRelativeTimestamp.react"), {
              date: b,
              format: (a = d) != null ? a : "normal",
            }),
          })
        : h.jsx(c("TetraText.react"), {
            color: "highlight",
            type: "bodyLink4",
            children: h.jsx(c("CometRelativeTimestamp.react"), {
              date: b,
              format: (a = d) != null ? a : "normal",
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsMarkReadMutation",
  [
    "CometNotificationsMarkReadMutation.graphql",
    "CometNotificationsMutationLogger",
    "CometRelay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometNotificationsMarkReadMutation.graphql"));
    function a(a, b, c, e) {
      c = d("CometNotificationsMutationLogger").notificationMarkAsReadStart(c);
      var f = c.logOnError,
        g = c.logOnSuccess;
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function () {
          g(), e && e.onSuccess();
        },
        onError: function (a) {
          f(a), e && e.onError();
        },
        optimisticResponse: {
          notification_mark_read: {
            notification: { id: b.input.notif_id, seen_state: "SEEN_AND_READ" },
          },
        },
        variables: b,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useHandleMarkRead",
  ["CometNotificationsMarkReadMutation", "CometRelay", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = "MAIN_SURFACE",
      j = "unknown";
    function a(a) {
      var b = a.notifId,
        e = a.seenState,
        f = d("CometRelay").useRelayEnvironment();
      return h(
        function () {
          if (b == null || e == null) return;
          c("CometNotificationsMarkReadMutation")(
            f,
            { input: { environment: i, is_comet: !0, notif_id: b, source: j } },
            e
          );
        },
        [f, b, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "isBusinessURI",
  ["isFacebookURI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return c("isFacebookURI")(a) && a.getSubdomain() === "business";
    }
    g["default"] = a;
  },
  98
);
__d(
  "isDevelopersURI",
  ["isFacebookURI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return c("isFacebookURI")(a) && a.getSubdomain() === "developers";
    }
    g["default"] = a;
  },
  98
);
__d(
  "NotificationsModuleNotificationsMutationAttemptQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(3473469);
    g["default"] = a;
  },
  98
);
