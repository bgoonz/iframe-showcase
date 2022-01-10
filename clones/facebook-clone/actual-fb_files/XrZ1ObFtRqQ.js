if (self.CavalryLogger) {
  CavalryLogger.start_js(["5hYbOKh"]);
}

__d(
  "useCometFeedStoryMatchDebugger_iCometStorySection.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometFeedStoryMatchDebugger_iCometStorySection",
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
          name: "is_prod_eligible",
          storageKey: null,
        },
      ],
      type: "ICometStorySection",
      abstractKey: "__isICometStorySection",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryAudienceStrategy_audience$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometFeedStoryAudienceStrategy_audience$normalization",
      selections: [
        {
          kind: "InlineFragment",
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
              name: "is_prod_eligible",
              storageKey: null,
            },
          ],
          type: "ICometStorySection",
          abstractKey: "__isICometStorySection",
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
              concreteType: "PrivacyScope",
              kind: "LinkedField",
              name: "privacy_scope",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "icon_image",
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
                  name: "description",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "display_label",
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
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryAudienceStrategy_audience.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAudienceStrategy_audience",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
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
              concreteType: "PrivacyScope",
              kind: "LinkedField",
              name: "privacy_scope",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "icon_image",
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
                  name: "description",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "display_label",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometFeedStoryAudienceStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryActorPhotoStrategy_actorPhoto$normalization.graphql",
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
          name: "url",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          concreteType: "WorkForeignEntityInfo",
          kind: "LinkedField",
          name: "work_foreign_entity_info",
          plural: !1,
          selections: [
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
        e = {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "first_story_to_show",
          plural: !1,
          selections: [
            b,
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
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryActorPhotoStrategy_actorPhoto$normalization",
        selections: [
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
                concreteType: null,
                kind: "LinkedField",
                name: "actors",
                plural: !0,
                selections: [
                  a,
                  { kind: "TypeDiscriminator", abstractKey: "__isActor" },
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
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "width",
                        storageKey: null,
                      },
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
                    ],
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      c,
                      {
                        alias: "profile_url",
                        args: null,
                        kind: "ScalarField",
                        name: "url",
                        storageKey: null,
                      },
                      c,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "category_type",
                            storageKey: null,
                          },
                        ],
                        type: "Page",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          d,
                          {
                            alias: null,
                            args: null,
                            concreteType: "WorkUserInfo",
                            kind: "LinkedField",
                            name: "work_info",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_active_account",
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          d,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "work_official_status",
                            storageKey: null,
                          },
                        ],
                        type: "Group",
                        abstractKey: null,
                      },
                    ],
                    type: "Entity",
                    abstractKey: "__isEntity",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_business_page_active",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "pages_story_bucket_v2",
                        plural: !1,
                        selections: [a, b, e],
                        storageKey: null,
                      },
                    ],
                    type: "Page",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: [{ kind: "Literal", name: "first", value: 1 }],
                        concreteType: "DirectInboxBroadcastBucketConnection",
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
                            selections: [b, e],
                            storageKey: null,
                          },
                        ],
                        storageKey: "story_bucket(first:1)",
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
                ],
                storageKey: null,
              },
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
                          "GroupMemberProfileActionLink",
                          "GroupMemberAnonProfileActionLink",
                          "VideoHomeActorActionLink",
                        ],
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "action_link",
                    plural: !1,
                    selections: [
                      a,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryActorLink_story",
                            fragmentName:
                              "CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink",
                            fragmentPropName: "groupMemberProfileActionLink",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "GroupMemberProfileActionLink",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryActorLink_story",
                            fragmentName:
                              "CometFeedStoryTitleGroupAnonProfileActor_actionLink",
                            fragmentPropName: "actionLink",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "GroupMemberAnonProfileActionLink",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryActorLink_story",
                            fragmentName:
                              "CometFeedStoryTitleVideoHomeActor_actionLink",
                            fragmentPropName: "actionLink",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "VideoHomeActorActionLink",
                        abstractKey: null,
                      },
                    ],
                    storageKey:
                      'action_link(supported:["GroupMemberProfileActionLink","GroupMemberAnonProfileActionLink","VideoHomeActorActionLink"])',
                  },
                ],
                storageKey: null,
              },
              b,
            ],
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
                name: "is_prod_eligible",
                storageKey: null,
              },
            ],
            type: "ICometStorySection",
            abstractKey: "__isICometStorySection",
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryActorPhotoStrategy_actorPhoto.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryActorPhotoStrategy_actorPhoto",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryActorLink_story",
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "actors",
                plural: !0,
                selections: [
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
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_business_page_active",
                        storageKey: null,
                      },
                    ],
                    type: "Page",
                    abstractKey: null,
                  },
                  {
                    args: [
                      { kind: "Literal", name: "height", value: 40 },
                      {
                        kind: "Variable",
                        name: "scale",
                        variableName: "scale",
                      },
                      { kind: "Literal", name: "width", value: 40 },
                    ],
                    kind: "FragmentSpread",
                    name: "CometProfilePhotoForActor_actor",
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "story",
        },
      ],
      type: "CometFeedStoryActorPhotoStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometGHLScrambledLabel_GHLNode.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
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
          name: "val",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometGHLScrambledLabel_GHLNode",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "GHLScramblingProperty",
            kind: "LinkedField",
            name: "attributes",
            plural: !0,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "GHLScramblingProperty",
            kind: "LinkedField",
            name: "styles",
            plural: !0,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "tag",
            storageKey: null,
          },
        ],
        type: "GHLScramblingNode",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometGHLScrambledLabel_label.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
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
            name: "val",
            storageKey: null,
          },
        ],
        b = {
          alias: null,
          args: null,
          concreteType: "GHLScramblingProperty",
          kind: "LinkedField",
          name: "attributes",
          plural: !0,
          selections: a,
          storageKey: null,
        };
      a = {
        alias: null,
        args: null,
        concreteType: "GHLScramblingProperty",
        kind: "LinkedField",
        name: "styles",
        plural: !0,
        selections: a,
        storageKey: null,
      };
      var c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tag",
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometGHLScrambledLabel_label",
        selections: [
          b,
          a,
          c,
          d,
          {
            alias: null,
            args: null,
            concreteType: "GHLScramblingNode",
            kind: "LinkedField",
            name: "children",
            plural: !0,
            selections: [
              b,
              a,
              c,
              d,
              {
                alias: null,
                args: null,
                concreteType: "GHLScramblingNode",
                kind: "LinkedField",
                name: "children",
                plural: !0,
                selections: [b, a, c, d],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "GHLScramblingNode",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFIShareActionLinkMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3849144858530600",
        metadata: {},
        name: "CometUFIShareActionLinkMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIShareActionRenderer_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIShareActionRenderer_feedback",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIShareAction_feedback",
        },
      ],
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIShareActionRenderer_shareable.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIShareActionRenderer_shareable",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIShareAction_shareable",
        },
      ],
      type: "Entity",
      abstractKey: "__isEntity",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIShareActionRenderer_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIShareActionRenderer_story",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show_pf_admin_reshare_nux",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIShareAction_story",
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
  "CometUFIShareAction_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIShareAction_feedback",
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
          name: "should_show_reshare_warning",
          storageKey: null,
        },
      ],
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIShareAction_shareable.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIShareAction_shareable",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
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
          type: "Node",
          abstractKey: "__isNode",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIShareActionLinkMenu_shareable",
        },
      ],
      type: "Entity",
      abstractKey: "__isEntity",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIShareAction_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIShareAction_story",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIShareActionLinkMenu_story",
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
  "ReshareWarningCometDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4212847538801116",
        metadata: {},
        name: "ReshareWarningCometDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryMatchDebuggerDispatcherContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {};
    c = { add: function (a) {}, remove: function (a) {} };
    e = a.createContext(c);
    g["default"] = e;
  },
  98
);
__d(
  "useCometFeedStoryMatchDebugger",
  [
    "CometFeedStoryMatchDebuggerDispatcherContext",
    "CometRelay",
    "react",
    "useCometFeedStoryMatchDebugger_iCometStorySection.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useContext,
      j = e.useEffect;
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "useCometFeedStoryMatchDebugger_iCometStorySection.graphql"
            )),
        a
      );
      var e = a.__typename,
        f = a.is_prod_eligible,
        g = i(c("CometFeedStoryMatchDebuggerDispatcherContext"));
      j(
        function () {
          if (e != null && f === !1) {
            g.add(e);
            return function () {
              g.remove(e);
            };
          }
        },
        [g, f, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryAudienceStrategy.react",
  [
    "fbt",
    "ix",
    "CometFeedStoryAudienceStrategy_audience.graphql",
    "CometFeedStoryMetaSectionMiddot.react",
    "CometRelay",
    "CometScreenReaderText.react",
    "CometTooltip.react",
    "TetraIcon.react",
    "fbicon",
    "getPrivacyTextTreatmentInfo",
    "react",
    "unrecoverableViolation",
    "useCometFeedStoryMatchDebugger",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function l(a) {
      switch (a) {
        case "acquaintances":
          return d("fbicon")._(i("588044"), 12);
        case "close_friends":
          return d("fbicon")._(i("479321"), 12);
        case "paid_online_event":
          return d("fbicon")._(i("562219"), 12);
        case "event":
        case "private_event":
          return d("fbicon")._(i("495077"), 12);
        case "everyone":
          return d("fbicon")._(i("560118"), 12);
        case "facebook":
          return d("fbicon")._(i("487657"), 12);
        case "friends":
          return d("fbicon")._(i("487556"), 12);
        case "friends_except":
        case "friends_except_acquaintances":
          return d("fbicon")._(i("500233"), 12);
        case "friends_of_friends":
          return d("fbicon")._(i("485085"), 12);
        case "specific_friends":
          return d("fbicon")._(i("784474"), 12);
        case "list_members":
        case "generic_list":
          return d("fbicon")._(i("949989"), 12);
        case "good_friends":
          return d("fbicon")._(i("722855"), 12);
        case "group":
        case "work_group_private":
          return d("fbicon")._(i("573122"), 12);
        case "only_me":
          return d("fbicon")._(i("497243"), 12);
        case "school_group":
          return d("fbicon")._(i("1679807"), 12);
        case "work_community":
        case "work_feed":
        case "work_group_open":
          return d("fbicon")._(i("481903"), 12);
        case "work_multi_company":
          return d("fbicon")._(i("785426"), 12);
        case "supporter_exclusive":
          return d("fbicon")._(i("495338"), 12);
        case "no_icon":
        case "app_list":
        case "custom":
        case "gamer_friends":
        default:
          return d("fbicon")._(i("497565"), 12);
      }
    }
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometFeedStoryAudienceStrategy_audience.graphql")),
        a.audience
      );
      c("useCometFeedStoryMatchDebugger")(a);
      e = (e = a.story) == null ? void 0 : e.privacy_scope;
      if (e == null)
        throw c("unrecoverableViolation")(
          "scope cannot be null in CometFeedStoryAudienceStrategy",
          "comet_feed"
        );
      var f = e.description;
      e = e.icon_image;
      e = e == null ? void 0 : e.name;
      if (f == null || e == null)
        throw c("unrecoverableViolation")(
          "description and iconImageName cannot be null in CometFeedStoryAudienceStrategy",
          "comet_feed"
        );
      var g = h._("Shared with {audience}", [h._param("audience", f)]);
      a = c("getPrivacyTextTreatmentInfo")(
        (a = a.story) == null
          ? void 0
          : (a = a.privacy_scope) == null
          ? void 0
          : a.display_label
      );
      var i = a.privacyLabel,
        m = a.shouldShowIcon;
      a = a.shouldShowText;
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx(c("CometFeedStoryMetaSectionMiddot.react"), {}),
          k.jsx("span", {
            className: "g0qnabr5",
            children: k.jsxs(c("CometTooltip.react"), {
              align: "middle",
              position: "above",
              tooltip: f,
              children: [
                m &&
                  k.jsx("span", {
                    className: "ormqv51v l9j0dhe7",
                    children: k.jsx(c("TetraIcon.react"), {
                      alt: a ? "" : g,
                      color: "secondary",
                      icon: l(e),
                    }),
                  }),
                a &&
                  k.jsxs("span", {
                    className: m ? "b3onmgus" : "",
                    children: [
                      k.jsx(c("CometScreenReaderText.react"), {
                        text: h._("Shared with:"),
                      }),
                      i,
                    ],
                  }),
              ],
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
  "CometFeedStoryActorPhotoStrategy.react",
  [
    "CometFeedStoryActorLink.react",
    "CometFeedStoryActorPhotoStrategy_actorPhoto.graphql",
    "CometProfilePhotoForActor.react",
    "CometRelay",
    "PageGreenDotImpressionFalcoEvent",
    "react",
    "unrecoverableViolation",
    "useCometFeedStoryMatchDebugger",
    "usePartialViewImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback,
      k =
        h !== void 0
          ? h
          : (h = b("CometFeedStoryActorPhotoStrategy_actorPhoto.graphql"));
    function a(a) {
      var b;
      a = d("CometRelay").useFragment(k, a.actorPhoto);
      c("useCometFeedStoryMatchDebugger")(a);
      a = a.story;
      var e = a == null ? void 0 : (b = a.actors) == null ? void 0 : b[0];
      b = function () {
        c("PageGreenDotImpressionFalcoEvent").log(function () {
          return {
            location: "comet_page_newsfeed_post",
            page_id: e.id,
            show_green_dot: e.is_business_page_active === !0 ? "true" : "false",
          };
        });
      };
      b = c("usePartialViewImpression")({
        onImpressionStart: j(b, [e.id, e.is_business_page_active]),
      });
      if (e == null)
        throw c("unrecoverableViolation")(
          "actor cannot be nullish in CometFeedStoryActorPhotoStrategy",
          "comet_feed"
        );
      var f;
      e.is_business_page_active === !0 && (f = { type: "availabilityBadge" });
      return i.jsx(c("CometFeedStoryActorLink.react"), {
        "aria-hidden": !0,
        story: a,
        children: i.jsx("div", {
          className: "q676j6op qypqp5cg",
          "data-testid": void 0,
          ref: b,
          children: i.jsx(c("CometProfilePhotoForActor.react"), {
            actor: e,
            addOn: f,
            entrypoint: "news_feed",
            noHovercard: !0,
            shape: "circle",
            size: 40,
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
  "CometGHLNode.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = function (a) {
        return a == null
          ? {}
          : a.reduce(function (a, b) {
              var c = b.name;
              b = b.val;
              c != null && b != null && (a[c] = b);
              return a;
            }, {});
      };
    function j(a) {
      var b = a.attributes,
        c = a.children,
        d = a.styles,
        e = a.tag;
      a = a.text;
      b = i(b);
      d = i(d);
      e = e == null || e === "" ? "span" : e;
      return h.jsxs(
        e,
        babelHelpers["extends"]({}, b, {
          className:
            "b6zbclly myohyog2 l9j0dhe7 aenfhxwr l94mrbxd ihxqhq3m nc684nl6 t5a262vz" +
            (b["data-content"] !== null ? " sdhka5h4" : ""),
          style: d,
          children: [
            a,
            c &&
              c.map(function (a, b) {
                return h.jsx(j, babelHelpers["extends"]({}, a), b);
              }),
          ],
        })
      );
    }
    j.displayName = j.name + " [from " + f.id + "]";
    g["default"] = j;
  },
  98
);
__d(
  "CometGHLScrambledLabel.react",
  [
    "fbt",
    "CometGHLNode.react",
    "CometGHLScrambledLabel_GHLNode.graphql",
    "CometGHLScrambledLabel_label.graphql",
    "CometRelay",
    "cr:1787397",
    "gkx",
    "react",
    "useCometAriaID",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react");
    i !== void 0 ? i : (i = b("CometGHLScrambledLabel_GHLNode.graphql"));
    function a(a) {
      var e = a.label,
        f = a.location;
      f = f === void 0 ? "news_feed" : f;
      var g = a.text;
      a = a.withTextDecoration;
      a = a === void 0 ? !0 : a;
      var i = c("gkx")("1787398");
      i = c("gkx")("1787399") && !i;
      var l = c("gkx")("1787400") && f === "news_feed";
      f = c("gkx")("1844895") && f === "rhc";
      e = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("CometGHLScrambledLabel_label.graphql")),
        e
      );
      var m = c("useCometAriaID")("aria-labelledby"),
        n = m[0],
        o = n[0];
      n = n[1];
      m = m[1];
      var p = m[0];
      m = m[1];
      var q = c("useCometAriaID")("aria-labelledby"),
        r = q[0],
        s = r[0];
      r = r[1];
      q = q[1];
      var t = q[0];
      q = q[1];
      var u = c("useCometAriaID")("aria-labelledby"),
        v = u[0],
        w = v[0];
      v = v[1];
      u = u[1];
      var x = u[0];
      u = u[1];
      o = b("cr:1787397")
        ? k.jsx(b("cr:1787397"), { targetProps: o, targetRef: n, children: g })
        : null;
      n = b("cr:1787397")
        ? k.jsx(b("cr:1787397"), {
            targetProps: s,
            targetRef: r,
            children: h._("Sponsored"),
          })
        : null;
      g = b("cr:1787397")
        ? k.jsx(b("cr:1787397"), {
            targetProps: w,
            targetRef: v,
            children: h._("Advertiser link"),
          })
        : null;
      s = l
        ? k.jsx(
            "span",
            babelHelpers["extends"](
              { "aria-label": i ? null : h._("Sponsored") },
              i ? t : null,
              { ref: i ? q : null, children: n }
            )
          )
        : null;
      r = f
        ? k.jsx(
            "span",
            babelHelpers["extends"](
              { "aria-label": i ? null : h._("Advertiser link") },
              i ? x : null,
              { ref: i ? u : null, children: g }
            )
          )
        : null;
      return k.jsxs(
        "span",
        babelHelpers["extends"]({}, i ? p : null, {
          className:
            "j1lvzwm4 stjgntxs ni8dbmo4 q9uorilb" + (a ? " gpro0wi8" : ""),
          ref: i ? m : null,
          children: [
            s,
            r,
            o,
            k.jsx(c("CometGHLNode.react"), babelHelpers["extends"]({}, e)),
          ],
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GHLAriaLabel.react",
  [
    "BasePortal.react",
    "CometPlaceholder.react",
    "ExecutionEnvironment",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = null,
      j = function () {
        d("ExecutionEnvironment").canUseDOM &&
          i === null &&
          ((i = document.createElement("div")),
          i.setAttribute("hidden", "true"),
          (i.style.display = "none"),
          document.body && document.body.appendChild(i));
        return i;
      };
    function a(a) {
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: h.jsx(c("BasePortal.react"), {
          target: j(),
          children: h.jsx(
            "span",
            babelHelpers["extends"]({}, a.targetProps, {
              ref: a.targetRef,
              children: a.children,
            })
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useGHLLinkProps",
  ["GHLAriaLabelTracker", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useState,
      k = "#";
    function a(a) {
      var b = a.href,
        d = a.label,
        e = a.onFocus,
        f = a.onHoverStart;
      a = j(k);
      var g = a[0],
        l = a[1];
      a = j("label");
      var m = a[0],
        n = a[1];
      i(
        function () {
          if (c("gkx")("1787398") === !1) return;
          var a = c("GHLAriaLabelTracker").onAdd(function () {
            n(d);
          });
          return a.dispose;
        },
        [d]
      );
      a = h(
        function (a) {
          l(b),
            c("gkx")("1787398") && c("GHLAriaLabelTracker").set(),
            e !== void 0 && e(a);
        },
        [e, b]
      );
      var o = h(
          function (a) {
            l(b), f !== void 0 && f(a);
          },
          [b, f]
        ),
        p = null;
      c("gkx")("1787398")
        ? (p = { label: m })
        : c("gkx")("1787399") || (p = { label: d });
      return babelHelpers["extends"](
        { href: g, onFocus: a, onHoverStart: o },
        p
      );
    }
    e = c("gkx")("1787401")
      ? a
      : function (a) {
          return a;
        };
    g["default"] = e;
  },
  98
);
__d(
  "GHLLink.react",
  ["CometLink.react", "react", "useGHLLinkProps"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.href,
        d = a.label,
        e = a.onFocus,
        f = a.onHoverStart;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "href",
        "label",
        "onFocus",
        "onHoverStart",
      ]);
      b = c("useGHLLinkProps")({
        href: b,
        label: d,
        onFocus: e,
        onHoverStart: f,
      });
      return h.jsx(
        c("CometLink.react"),
        babelHelpers["extends"]({ role: "link" }, b, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIComposerActions.react",
  ["CometErrorBoundary.react", "CometTooltipGroup.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("CometTooltipGroup.react"), {
        children: h.jsx("ul", {
          className: "fop5sh7t cgat1ltu tv7at329 j83agx80 c4hnarmi bp9cbjyn",
          children: h.Children.map(a.children, function (a, b) {
            return h.jsx(
              c("CometErrorBoundary.react"),
              {
                children: h.jsx("li", {
                  className: "ggphbty4 fv0vnmcu q9uorilb",
                  children: a,
                }),
              },
              b
            );
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometUFIComposerOnBeforeUnloader.react",
  ["fbt", "react", "useOnBeforeUnload"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    d("react");
    function a(a) {
      c("useOnBeforeUnload")(function () {
        if (a.isUnfinished())
          return {
            warnMessage: h._(
              "You haven't finished your comment yet. Do you want to leave without finishing?"
            ),
          };
      });
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIShareActionLinkLabel",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("Send this to friends or post it on your timeline.");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometUFIShareActionLinkMenu.entrypoint",
  ["CometUFIShareActionLinkMenuQuery$Parameters", "JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.storyUrl;
        a = a.url;
        return {
          extraProps: {},
          queries: {
            shareMenuQueryReference: {
              parameters: b("CometUFIShareActionLinkMenuQuery$Parameters"),
              variables: {
                hasParentStory: c != null,
                shareableParams: { url: a },
                storyParams: { url: c },
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometUFIShareActionLinkMenu.react"
      ).__setRef("CometUFIShareActionLinkMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ReshareWarningCometDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ReshareWarningCometDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.feedbackID;
        return {
          queries: {
            queryReference: {
              parameters: b("ReshareWarningCometDialogQuery$Parameters"),
              variables: { feedbackID: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "ReshareWarningCometDialog.react"
      ).__setRef("ReshareWarningCometDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIShareAction.react",
  [
    "CometEntryPointPopoverTrigger.react",
    "CometPressable.react",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "CometUFIShareActionLinkMenu.entrypoint",
    "CometUFIShareAction_feedback.graphql",
    "CometUFIShareAction_shareable.graphql",
    "CometUFIShareAction_story.graphql",
    "ReshareWarningCometDialog.entrypoint",
    "cr:1761713",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "useCometEntryPointDialog",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useRef,
      n = e.useState,
      o = c("requireDeferred")("ShareMetricsLoggingController").__setRef(
        "CometUFIShareAction.react"
      ),
      p = {
        circularButton: {
          borderTopColor: "est2fu8x",
          borderEndColor: "i2z0utgf",
          borderBottomColor: "nalm63nx",
          borderStartColor: "rbyq7rg5",
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          borderTopStyle: "goun2846",
          borderEndStyle: "ccm00jje",
          borderBottomStyle: "s44p3ltw",
          borderStartStyle: "mk2mc5f4",
          borderTopWidth: "frvqaej8",
          borderEndWidth: "ed0hlay0",
          borderBottomWidth: "afxsp9o4",
          borderStartWidth: "jcgfde61",
          height: "kn9t4qvh",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "bxs1uw09",
        },
      };
    function q(a) {
      var b = a.children;
      a = a.refs;
      return b(c("useMergeRefs").apply(void 0, a));
    }
    function a(a) {
      var e = a.buttonVariant,
        f = e === void 0 ? "DEFAULT" : e,
        g = a.children;
      e = a.feedback;
      var r = a.feedLocation,
        s = a.onPress,
        t = a.parentStory,
        u = a.productData;
      a = a.shareable;
      e = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometUFIShareAction_feedback.graphql")),
        e
      );
      t = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometUFIShareAction_story.graphql")),
        t
      );
      var v = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("CometUFIShareAction_shareable.graphql")),
        a
      );
      a = n(!e.should_show_reshare_warning);
      var w = a[0],
        x = a[1];
      e = c("useCometEntryPointDialog")(
        c("ReshareWarningCometDialog.entrypoint"),
        { feedbackID: (a = e.id) != null ? a : "" }
      );
      var y = e[0],
        z = e[1],
        A = l(
          function (a) {
            y({}, function (b) {
              x(b), b && a();
            });
          },
          [y]
        ),
        B = m(!1);
      if (v.url == null) {
        c("recoverableViolation")(
          "Can't render a share button without a `url`",
          "ufi2"
        );
        return null;
      }
      a = function (a) {
        B.current && !a
          ? o.onReady(function (a) {
              a.logShareFlowAbandoned(v.id, r);
            })
          : !B.current &&
            a &&
            o.onReady(function (a) {
              a.logShareFlowStarted(v.id, r);
            }),
          (B.current = a);
      };
      e =
        t != null
          ? { feedLocation: r, parentStory: t, productData: u, shareable: v }
          : { feedLocation: r, productData: u, shareable: v };
      return k.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 17,
        children: k.jsx(c("CometEntryPointPopoverTrigger.react"), {
          align: "middle",
          entryPointParams: { url: v.url },
          onVisibilityChange: a,
          otherProps: e,
          popoverEntryPoint: c("CometUFIShareActionLinkMenu.entrypoint"),
          preloadTrigger: "button",
          children: function (a, d, e, h, i, j) {
            return k.jsx(q, {
              refs: [a, z],
              children: function (a) {
                return k.jsx(c("CometPressable.react"), {
                  label: b("cr:1761713"),
                  onHoverIn: h,
                  onHoverOut: i,
                  onPress: function () {
                    w ? d() : A(d), s == null ? void 0 : s();
                  },
                  onPressIn: j,
                  overlayRadius: 4,
                  preventContextMenu: !0,
                  ref: a,
                  testid: void 0,
                  xstyle: f === "CIRCULAR" && p.circularButton,
                  children: g,
                });
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
  "CometUFIShareActionRenderer.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometUFIShareAction.react",
    "CometUFIShareActionRenderer_feedback.graphql",
    "CometUFIShareActionRenderer_shareable.graphql",
    "CometUFIShareActionRenderer_story.graphql",
    "TetraIcon.react",
    "TetraText.react",
    "emptyFunction",
    "fbicon",
    "nux:51",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l,
      m = d("react"),
      n = {
        labelContainer: { height: "qu8okrzs", whiteSpace: "g0qnabr5" },
        nux: { width: "cs7azdtd" },
      };
    function a(a) {
      var e,
        f,
        g = a.color,
        o = a.feedback,
        p = a.feedLocation,
        q = a.onPress,
        r = a.parentStory,
        s = a.productData,
        t = a.shareable;
      a = a.xstyle;
      o = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometUFIShareActionRenderer_feedback.graphql")),
        o
      );
      r = d("CometRelay").useFragment(
        k !== void 0 ? k : (k = b("CometUFIShareActionRenderer_story.graphql")),
        r
      );
      t = d("CometRelay").useFragment(
        l !== void 0
          ? l
          : (l = b("CometUFIShareActionRenderer_shareable.graphql")),
        t
      );
      e =
        (e =
          b("nux:51") == null
            ? void 0
            : b("nux:51")("reshare_comet_admin_newsfeed")) != null
          ? e
          : c("emptyFunction");
      e = e(
        {
          align: "end",
          arrowStyle: "edge",
          hasCloseButton: !0,
          label: h._(
            "Share to your page: Sharing can help increase your page's reach and engagement"
          ),
          position: "below",
          type: "accent",
          xstyle: n.nux,
        },
        p === "NEWSFEED" &&
          (r == null ? void 0 : r.should_show_pf_admin_reshare_nux) === !0
      );
      if (o == null || t == null) return null;
      f = (f = g) != null ? f : "secondary";
      g = (g = g) != null ? g : "secondary";
      return m.jsx(c("CometUFIShareAction.react"), {
        feedLocation: p,
        feedback: o,
        onPress: q,
        parentStory: r,
        productData: s,
        shareable: t,
        children: m.jsxs(c("CometRow.react"), {
          align: "center",
          expanding: !0,
          paddingTop: 0,
          spacingHorizontal: 8,
          verticalAlign: "center",
          xstyle: [n.labelContainer, a],
          children: [
            m.jsx(c("CometRowItem.react"), {
              children: m.jsx(c("TetraIcon.react"), {
                color: f,
                icon: d("fbicon")._(i("484399"), 18),
              }),
            }),
            m.jsx(c("CometRowItem.react"), {
              children: m.jsx(c("TetraText.react"), {
                color: g,
                ref: e,
                type: "bodyLink3",
                children: h._("Share"),
              }),
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
  "textProbablyWritingMarkdown",
  ["CurrentUser"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e3;
    function a(a) {
      a = a.slice(0, h);
      var b = a.match(/^[*+-] /gm);
      if (b && b.length > 1) return !0;
      b = a.match(/^[\t ]*[>+-]/gm);
      if (b != null) return !0;
      b = a.match(/`/);
      if (b) return !0;
      b = a.match(/\$([^ \t\n\$]([^\$]*[^ \t\n\$])?)\$/);
      if (b) return !0;
      b = a.match(/__([\s\S]+?)__(?!_)|\*\*([\s\S]+?)\*\*(?!\*)/);
      if (b) return !0;
      b = a.match(/(^\s{0,3}#{2,6}[^#])|(^\s*[-=]{5,}\s*$)/m);
      if (b) return !0;
      b = a.match(/\]\(|\]\[/);
      if (b) return !0;
      b = a.includes("#markdown");
      if (b) return !0;
      if (!c("CurrentUser").isEmployee()) return !1;
      b = a.match(/\b[sS]\d{5,6}\b/);
      if (b) return !0;
      b = a.match(/\b[tT]\d{7,8}\b/);
      if (b) return !0;
      b = a.match(/\b[dD]\d{6,8}\b/);
      if (b) return !0;
      b = a.match(/\b[qQ]\d{1,8}\b/);
      if (b) return !0;
      b = a.match(/\b[pP]\d{7,9}\b/);
      if (b) return !0;
      b = a.match(/\b(cms|CMS)\d\b/);
      if (b) return !0;
      b = a.match(/\b[aA]\d{4,}\b/);
      if (b) return !0;
      b = a.match(/\b[aA][eE]\d{4,}\b/);
      if (b) return !0;
      b = a.match(/\b[zZ][0-9]{4,}\b/);
      if (b) return !0;
      b = a.match(/\b(NT|nt)\d{4,}\b/);
      if (b) return !0;
      b = a.match(/\b(BK|nt)\d{3,}\b/);
      if (b) return !0;
      b = a.match(/\b(re|RE)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(ram|RAM)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(s2p|S2P)\s?\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b([Gg][Bb])\s?\d{4,5}\b/);
      if (b) return !0;
      b = a.match(/\b(pr|PR)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(po|PO)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(inv|INV)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(inb|INB)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(out|OUT)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(nda|NDA)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(set|SET)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(contract|CONTRACT)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(ie|IE)\d{3,15}\b/);
      if (b) return !0;
      b = a.match(/\b[lL][0-9]{5,}(?:[a-zA-Z]{1,5}\d{0,})?\b/);
      if (b) return !0;
      b = a.match(/\b(C|C#|CASE)\d{3,}\b/);
      if (b) return !0;
      b = a.match(/\b[Nn](\d{4,10})\b/);
      if (b) return !0;
      b = a.match(/\b(nwt|NWT)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(oa|OA)\d{1,16}\b/);
      if (b) return !0;
      b = a.match(/\b(rid|RID)\d{4,16}\b/);
      if (b) return !0;
      b = a.match(/\b(PD|pd|M|m)\d{6,11}\b/);
      if (b) return !0;
      b = a.match(/\b(CM|cm)\d{5,}\b/);
      if (b) return !0;
      b = a.match(/\b(ME|Me|mE|me)[0-9]{3,11}\b/);
      if (b) return !0;
      b = a.match(/\b(K|k)[0-9]{3,}\b/);
      if (b) return !0;
      b = a.match(/\b(G|g)(\d{1,})\b/);
      if (b) return !0;
      b = a.match(
        /\b(20\d{2}[01]\d[0-3]\d_[0-2]\d[0-5]\d[0-5]\d_[0-9]{5}_[a-kmnp-z2-9]{5})\b/
      );
      if (b) return !0;
      if (a.match(/\bfbt\s+[0-9A-Fa-f]{32}\b/)) return !0;
      if (a.match(/\b(FD|fd)\d{6,11}\b/)) return !0;
      if (a.match(/\b(CC|cc)\d{4,}\b/)) return !0;
      if (a.match(/\b(EXTRR|extrr|EXTREVIEW|extreview)[0-9]{4,11}\b/))
        return !0;
      if (a.match(/\basync( jobtype)? ?#?(\d+)\b/i)) return !0;
      if (a.match(/\b(BR|br)\d{4,}\b/)) return !0;
      if (a.match(/\b((asset:\/\/)\S+)\b/)) return !0;
      if (a.match(/\b(PROG|prog)([PWA]|[pwa])(\d+)\b/)) return !0;
      return a.match(/\b(rfx|rfi|rfp|rfq|rpu)\d{4,}\b/i) ? !0 : !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometUFICommentFormattingStyleForText",
  ["gkx", "textProbablyWritingMarkdown"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return c("gkx")("2051215") && c("textProbablyWritingMarkdown")(a)
        ? "MARKDOWN"
        : (a = b) != null
        ? a
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useBoolean",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useState;
    function a(a) {
      a = i(a);
      var b = a[0],
        c = a[1];
      return {
        value: b,
        set: c,
        toggle: h(function () {
          return c(function (a) {
            return !a;
          });
        }, []),
        setTrue: h(function () {
          return c(!0);
        }, []),
        setFalse: h(function () {
          return c(!1);
        }, []),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "declareNUXRequireable",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a;
    }
    f["default"] = a;
  },
  66
);
