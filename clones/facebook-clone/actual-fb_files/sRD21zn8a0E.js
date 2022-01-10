if (self.CavalryLogger) {
  CavalryLogger.start_js(["wBAS8Ly"]);
}

__d(
  "CometStoryAggregatedUsersTitleDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4243402565721203",
        metadata: {},
        name: "CometStoryAggregatedUsersTitleDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometBadgeSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometBadgeSection_story",
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
                    "CometFeedUserVerifiedBadgeStrategy",
                    "CometFeedPageVerifiedBadgeStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "badge",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometBadgeSection_story",
                      fragmentName: "CometFeedUserVerifiedBadgeStrategy_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedUserVerifiedBadgeStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometBadgeSection_story",
                      fragmentName: "CometFeedPageVerifiedBadgeStrategy_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedPageVerifiedBadgeStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'badge(supported:["CometFeedUserVerifiedBadgeStrategy","CometFeedPageVerifiedBadgeStrategy"])',
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
  "CometFeedStoryFollowButtonSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryFollowButtonSection_story",
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
                  value: ["CometFeedStoryFollowButtonStrategy"],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "follow_button",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryFollowButtonSection_story",
                      fragmentName:
                        "CometFeedStoryFollowButtonStrategy_followButton",
                      fragmentPropName: "followButton",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryFollowButtonStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'follow_button(supported:["CometFeedStoryFollowButtonStrategy"])',
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
  "CometFeedStoryTitleSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryTitleSection_story",
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
                    "CometFeedStoryCampusDirectedTitleStrategy",
                    "GeminiFeedStoryQATitleStrategy",
                    "CometFeedStoryCommunityAttributionTitleStrategy",
                    "CometFeedStoryCommunityViewDirectedTitleStrategy",
                    "CometFeedStoryGroupsTabDirectedTitleStrategy",
                    "CometFeedStoryDirectedTitleStrategy",
                    "CometFeedStoryViaTitleStrategy",
                    "CometFeedStoryTitleWithActorStrategy",
                    "CometFeedStoryDefaultTitleStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "title",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryTitleSection_story",
                      fragmentName:
                        "CometFeedStoryCampusDirectedTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryCampusDirectedTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryTitleSection_story",
                      fragmentName:
                        "GeminiFeedStoryQATitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryQATitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryTitleSection_story",
                      fragmentName:
                        "CometFeedStoryCommunityAttributionTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryCommunityAttributionTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryTitleSection_story",
                      fragmentName:
                        "CometFeedStoryCommunityViewDirectedTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryCommunityViewDirectedTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryTitleSection_story",
                      fragmentName:
                        "CometFeedStoryGroupsTabDirectedTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryGroupsTabDirectedTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryTitleSection_story",
                      fragmentName:
                        "CometFeedStoryDirectedTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryDirectedTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryTitleSection_story",
                      fragmentName:
                        "CometFeedStoryViaTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryViaTitleStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryTitleSection_story",
                      fragmentName:
                        "CometFeedStoryTitleWithActorStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryTitleWithActorStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryTitleSection_story",
                      fragmentName:
                        "CometFeedStoryDefaultTitleStrategy_contextTitle",
                      fragmentPropName: "contextTitle",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryDefaultTitleStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'title(supported:["CometFeedStoryCampusDirectedTitleStrategy","GeminiFeedStoryQATitleStrategy","CometFeedStoryCommunityAttributionTitleStrategy","CometFeedStoryCommunityViewDirectedTitleStrategy","CometFeedStoryGroupsTabDirectedTitleStrategy","CometFeedStoryDirectedTitleStrategy","CometFeedStoryViaTitleStrategy","CometFeedStoryTitleWithActorStrategy","CometFeedStoryDefaultTitleStrategy"])',
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
  "CometFeedStoryTitleWithActorStrategy_contextTitle$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
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
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
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
        e = [
          {
            kind: "Variable",
            name: "location",
            variableName: "renderLocation",
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryTitleWithActorStrategy_contextTitle$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "actors",
                plural: !0,
                selections: [
                  c,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  a,
                  { kind: "TypeDiscriminator", abstractKey: "__isActor" },
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
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: e,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "title",
                plural: !1,
                selections: [
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
                args: e,
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
                      c,
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
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Literal",
                        name: "supported",
                        value: [
                          "CometFeedUserVerifiedBadgeStrategy",
                          "CometFeedPageVerifiedBadgeStrategy",
                        ],
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "badge",
                    plural: !1,
                    selections: [
                      c,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometBadgeSection_story",
                            fragmentName:
                              "CometFeedUserVerifiedBadgeStrategy_badge",
                            fragmentPropName: "badge",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedUserVerifiedBadgeStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometBadgeSection_story",
                            fragmentName:
                              "CometFeedPageVerifiedBadgeStrategy_badge",
                            fragmentPropName: "badge",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedPageVerifiedBadgeStrategy",
                        abstractKey: null,
                      },
                    ],
                    storageKey:
                      'badge(supported:["CometFeedUserVerifiedBadgeStrategy","CometFeedPageVerifiedBadgeStrategy"])',
                  },
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Literal",
                        name: "supported",
                        value: ["CometFeedStoryFollowButtonStrategy"],
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "follow_button",
                    plural: !1,
                    selections: [
                      c,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName:
                              "CometFeedStoryFollowButtonSection_story",
                            fragmentName:
                              "CometFeedStoryFollowButtonStrategy_followButton",
                            fragmentPropName: "followButton",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryFollowButtonStrategy",
                        abstractKey: null,
                      },
                    ],
                    storageKey:
                      'follow_button(supported:["CometFeedStoryFollowButtonStrategy"])',
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
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              c,
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
  "CometFeedStoryTitleWithActorStrategy_contextTitle.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryTitleWithActorStrategy_contextTitle",
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
              kind: "ScalarField",
              name: "id",
              storageKey: null,
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
              args: [
                {
                  kind: "Variable",
                  name: "location",
                  variableName: "renderLocation",
                },
              ],
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "title",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometTextWithEntitiesRelay_textWithEntities",
                },
              ],
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryActorLink_story",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometBadgeSection_story",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryFollowButtonSection_story",
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometFeedStoryTitleWithActorStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometTitleSentenceGroupJoinButtonRenderer_entity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometTitleSentenceGroupJoinButtonRenderer_entity",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "target_group",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "CometTitleSentenceGroupJoinButtonRenderer_entity",
              fragmentName:
                "CometFeedStoryCommunityAttributionTitleJoinButton_group",
              fragmentPropName: "group",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
      ],
      type: "TitleSentenceGroupJoinButton",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWorkMulticompanyEntityRenderer_entity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
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
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { mask: !1 },
        name: "CometWorkMulticompanyEntityRenderer_entity",
        selections: [
          {
            kind: "InlineFragment",
            selections: a,
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: a,
            type: "Group",
            abstractKey: null,
          },
        ],
        type: "Entity",
        abstractKey: "__isEntity",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "GeminiDeactivatedAccountRenderer_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "GeminiDeactivatedAccountRenderer_user",
      selections: [
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
    };
    e.exports = a;
  },
  null
);
__d(
  "GeminiOfficialEntityRenderer_entity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GeminiOfficialEntityRenderer_entity",
      selections: [
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
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStandardAttachedStoryLevelContext",
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
  "CometStoryAggregatedUsersTitleDialog.entrypoint",
  [
    "CometStoryAggregatedUsersTitleDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.storyID;
        a = a.storyRenderLocation;
        return {
          queries: {
            queryReference: {
              parameters: b(
                "CometStoryAggregatedUsersTitleDialogQuery$Parameters"
              ),
              variables: {
                id: c,
                renderLocation: a,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometStoryAggregatedUsersTitleDialog.react"
      ).__setRef("CometStoryAggregatedUsersTitleDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometBadgeSection.react",
  [
    "CometBadgeSection_story.graphql",
    "CometFeedMatchRenderer.react",
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
        h !== void 0 ? h : (h = b("CometBadgeSection_story.graphql")),
        a.story
      );
      e =
        a == null ? void 0 : (e = a.comet_sections) == null ? void 0 : e.badge;
      return i.jsx(c("CometFeedMatchRenderer.react"), {
        match: e,
        section: "badge",
        trackingData: a == null ? void 0 : a.encrypted_tracking,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryFollowButtonSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryFollowButtonSection_story.graphql",
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
        h !== void 0
          ? h
          : (h = b("CometFeedStoryFollowButtonSection_story.graphql")),
        a.story
      );
      return i.jsx(c("CometFeedMatchRenderer.react"), {
        match: (e = a.comet_sections) == null ? void 0 : e.follow_button,
        section: "follow_button",
        trackingData: a == null ? void 0 : a.encrypted_tracking,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryTitleSection.react",
  [
    "BaseHeading.react",
    "CometFeedARIAProperties.react",
    "CometFeedMatchRenderer.react",
    "CometFeedStoryTitleSection_story.graphql",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "react",
    "usePageletMatchMetadata",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext,
      k = { heading: { marginTop: "aahdfvyu", textAlign: "hzawbc8m" } };
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometFeedStoryTitleSection_story.graphql")),
          a.story
        ),
        g = j(c("CometFeedARIAProperties.react"));
      e = (e = f.comet_sections) == null ? void 0 : e.title;
      c("usePageletMatchMetadata")("title", e);
      return i.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 10,
        children: i.jsx(
          c("BaseHeading.react"),
          babelHelpers["extends"]({ xstyle: k.heading }, g.titleTargetProps, {
            ref: g.titleTargetRef,
            children: i.jsx(c("CometFeedMatchRenderer.react"), {
              match: e,
              props: { variables: a.variables },
              section: "title",
              trackingData: f.encrypted_tracking,
            }),
          })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryTitleAggregatedUsersRenderer",
  [
    "CometEntryPointDialogTrigger.react",
    "CometLink.react",
    "CometStoryAggregatedUsersTitleDialog.entrypoint",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function (a, b) {
      return function (d) {
        if (a == null || b == null) {
          c("recoverableViolation")(
            "story ID or render location were null when rendering aggregated users link in story title",
            "comet_ui"
          );
          return d;
        }
        return h.jsx(c("CometEntryPointDialogTrigger.react"), {
          dialogEntryPoint: c(
            "CometStoryAggregatedUsersTitleDialog.entrypoint"
          ),
          otherProps: {},
          preloadParams: { storyID: a, storyRenderLocation: b },
          children: function (a) {
            return h.jsx(c("CometLink.react"), { onClick: a, children: d });
          },
        });
      };
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometTitleSentenceGroupJoinButtonRenderer",
  [
    "CometRelay",
    "CometTitleSentenceGroupJoinButtonRenderer_entity.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("CometTitleSentenceGroupJoinButtonRenderer_entity.graphql"));
    a = function (a, b) {
      a = d("CometRelay").useFragment(j, b);
      return a.target_group == null
        ? null
        : i.jsx(d("CometRelay").MatchContainer, {
            match: a.target_group,
            props: { group$key: a.target_group },
          });
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometWorkMulticompanyEntityRenderer",
  [
    "fbt",
    "ix",
    "CometWorkMulticompanyEntityRenderer_entity.graphql",
    "TetraIcon.react",
    "fbicon",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    j !== void 0
      ? j
      : (j = b("CometWorkMulticompanyEntityRenderer_entity.graphql"));
    function a(a, b) {
      var e = null;
      switch ((b = b.work_foreign_entity_info) == null ? void 0 : b.type) {
        case "LIMITED":
          e = c("gkx")("2401") ? d("fbicon")._(i("785430"), 16) : null;
          break;
        case "FOREIGN":
          e = d("fbicon")._(i("785426"), 12);
          break;
        default:
          e = null;
          break;
      }
      return k.jsxs(k.Fragment, {
        children: [
          a,
          e &&
            k.jsx("span", {
              className: "hrs1iv20 l9j0dhe7 qnrpqo6b pq6dq46d",
              children: k.jsx(c("TetraIcon.react"), {
                alt: h._("Not part of your organization"),
                color: "primary",
                icon: e,
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
  "WIGIcon.react",
  ["TetraIcon.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("TetraIcon.react"), babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GeminiDeactivatedAccountRenderer",
  [
    "fbt",
    "ix",
    "GeminiDeactivatedAccountRenderer_user.graphql",
    "WIGIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    j !== void 0 ? j : (j = b("GeminiDeactivatedAccountRenderer_user.graphql"));
    function a(a, b) {
      return ((b = b.work_info) == null ? void 0 : b.is_active_account) === !1
        ? k.jsxs(k.Fragment, {
            children: [
              k.jsx("span", { className: "m9osqain", children: a }),
              k.jsx("span", {
                className: "hrs1iv20 l9j0dhe7 qnrpqo6b pq6dq46d",
                children: k.jsx(c("WIGIcon.react"), {
                  alt: h._("Deactivated account"),
                  color: "secondary",
                  icon: d("fbicon")._(i("648667"), 12),
                }),
              }),
            ],
          })
        : a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GeminiOfficialGroupBage.react",
  ["fbt", "ix", "ImageIconSource", "TetraIcon.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      a = a.size;
      a =
        a === 12
          ? new (c("ImageIconSource"))(i("20314"), 12, 12)
          : new (c("ImageIconSource"))(i("20323"), 16, 16);
      return j.jsx(c("TetraIcon.react"), {
        alt: h._("Official group"),
        icon: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GeminiOfficialEntityRenderer",
  [
    "GeminiOfficialEntityRenderer_entity.graphql",
    "GeminiOfficialGroupBage.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    h !== void 0 ? h : (h = b("GeminiOfficialEntityRenderer_entity.graphql"));
    function a(a, b) {
      return b.work_official_status !== "OFFICIAL"
        ? a
        : i.jsxs(i.Fragment, {
            children: [
              a,
              i.jsx("span", {
                className: "hrs1iv20 l9j0dhe7 qnrpqo6b pq6dq46d",
                children: i.jsx(c("GeminiOfficialGroupBage.react"), {
                  size: 12,
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
  "GroupsCometAnonAuthorProfileEntityRenderer",
  ["CometLink.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(c("CometLink.react"), { children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryTitleWithActorStrategy.react",
  [
    "CometAggregatedEntitiesTooltipRenderer",
    "CometBadgeSection.react",
    "CometBoldedEntityRenderer",
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometFeedStoryActorLink.react",
    "CometFeedStoryFollowButtonSection.react",
    "CometFeedStoryTitleAggregatedUsersRenderer",
    "CometFeedStoryTitleWithActorStrategy_contextTitle.graphql",
    "CometHovercardEntityRenderer",
    "CometImageEntityRenderer",
    "CometLinkedEntityRenderer",
    "CometRelay",
    "CometStoryRenderLocationContext.react",
    "CometTextWithEntitiesRelay.react",
    "CometTitleSentenceGroupJoinButtonRenderer",
    "CometTrackingNodeProvider.react",
    "CometTrackingNodeRenderer",
    "CometWorkMulticompanyEntityRenderer",
    "GeminiDeactivatedAccountRenderer",
    "GeminiOfficialEntityRenderer",
    "GroupsCometAnonAuthorProfileEntityRenderer",
    "react",
    "unrecoverableViolation",
    "useCometFeedStoryMatchDebugger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useMemo,
      l = [c("CometEmoticonTransform")(), c("CometEmojiTransform")()];
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryTitleWithActorStrategy_contextTitle.graphql"
            )),
        a.contextTitle
      );
      c("useCometFeedStoryMatchDebugger")(a);
      a = a.story;
      var f = a == null ? void 0 : a.id,
        g = j(c("CometStoryRenderLocationContext.react")),
        m = k(
          function () {
            return {
              "*": [c("CometBoldedEntityRenderer")],
              Aggregate: [
                c("CometAggregatedEntitiesTooltipRenderer"),
                c("CometFeedStoryTitleAggregatedUsersRenderer")(f, g),
              ],
              Album: [
                c("CometLinkedEntityRenderer"),
                c("CometTrackingNodeRenderer"),
              ],
              Application: [
                c("CometLinkedEntityRenderer"),
                c("CometTrackingNodeRenderer"),
              ],
              CoronavirusHub: [c("CometLinkedEntityRenderer")],
              Crisis: [c("CometLinkedEntityRenderer")],
              Event: [
                c("CometHovercardEntityRenderer"),
                c("CometLinkedEntityRenderer"),
                c("CometTrackingNodeRenderer"),
              ],
              ExternalUrl: [c("CometLinkedEntityRenderer")],
              Game: [
                c("CometHovercardEntityRenderer"),
                c("CometLinkedEntityRenderer"),
              ],
              GeneralGroupContextualProfile: [
                c("CometHovercardEntityRenderer"),
                c("CometLinkedEntityRenderer"),
              ],
              Group: [
                c("CometHovercardEntityRenderer"),
                c("CometWorkMulticompanyEntityRenderer"),
                c("GeminiOfficialEntityRenderer"),
                c("CometLinkedEntityRenderer"),
                c("CometTrackingNodeRenderer"),
              ],
              GroupAnonAuthorProfile: [
                c("CometHovercardEntityRenderer"),
                c("GroupsCometAnonAuthorProfileEntityRenderer"),
              ],
              GroupPost: [c("CometLinkedEntityRenderer")],
              HealthGroupContextualProfile: [
                c("CometHovercardEntityRenderer"),
                c("CometLinkedEntityRenderer"),
              ],
              Image: [c("CometImageEntityRenderer")()],
              Page: [
                c("CometHovercardEntityRenderer"),
                c("CometLinkedEntityRenderer"),
                c("CometTrackingNodeRenderer"),
              ],
              Story: [
                c("CometLinkedEntityRenderer"),
                c("CometTrackingNodeRenderer"),
              ],
              SyntheticActor: [
                c("CometLinkedEntityRenderer"),
                c("CometTrackingNodeRenderer"),
              ],
              TitleSentenceGroupJoinButton: [
                c("CometTitleSentenceGroupJoinButtonRenderer"),
              ],
              TitleSentenceLink: [
                c("CometHovercardEntityRenderer"),
                c("CometLinkedEntityRenderer"),
              ],
              User: [
                c("CometHovercardEntityRenderer"),
                c("CometWorkMulticompanyEntityRenderer"),
                c("GeminiDeactivatedAccountRenderer"),
                c("CometLinkedEntityRenderer"),
                c("CometTrackingNodeRenderer"),
              ],
            };
          },
          [f, g]
        );
      if (a == null)
        throw c("unrecoverableViolation")(
          "Cannot have null story in feed story title with actors",
          "comet_feed"
        );
      e = (e = a.actors) == null ? void 0 : e[0];
      if (e == null)
        throw c("unrecoverableViolation")(
          "Cannot have null actor in feed story title with actors",
          "comet_feed"
        );
      var n = a.title;
      n =
        n != null
          ? i.jsx(c("CometTextWithEntitiesRelay.react"), {
              renderers: m,
              textWithEntities: n,
              transforms: l,
            })
          : i.jsxs(c("CometTrackingNodeProvider.react"), {
              trackingNode: 304,
              children: [
                i.jsx(c("CometFeedStoryActorLink.react"), {
                  renderers: m,
                  story: a,
                  children: e.name,
                }),
                i.jsx(c("CometBadgeSection.react"), { story: a }),
                i.jsx(c("CometFeedStoryFollowButtonSection.react"), {
                  story: a,
                }),
              ],
            });
      return n;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
