if (self.CavalryLogger) {
  CavalryLogger.start_js(["rRsfgFi"]);
}

__d(
  "JournalistRegistrationAdditionalBenefitsSelection_linkedIGAccounts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "JournalistRegistrationAdditionalBenefitsSelection_linkedIGAccounts",
      selections: [
        {
          alias: "linkedIGAccounts",
          args: null,
          concreteType: "InstagramUserV2",
          kind: "LinkedField",
          name: "linked_ig_accounts",
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
              name: "username",
              storageKey: null,
            },
            {
              alias: "profilePicture",
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
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "JournalistRegistrationNUX_nux.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "JournalistRegistrationNUX_nux",
      selections: [
        { args: null, kind: "FragmentSpread", name: "useNUXHelpers_nux" },
      ],
      type: "DefaultNUX",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "JournalistRegistrationPostRegistrationCredentials_credentials.graphql",
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
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "JournalistRegistrationPostRegistrationCredentials_credentials",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "JournalistRegistrationLinkData",
            kind: "LinkedField",
            name: "submitted_links_with_businesses",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "url",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "AdBusiness",
                kind: "LinkedField",
                name: "associated_business",
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
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "business_verification_status",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "primary_page",
                    plural: !1,
                    selections: [
                      a,
                      {
                        alias: null,
                        args: [
                          { kind: "Literal", name: "height", value: 48 },
                          { kind: "Literal", name: "width", value: 48 },
                        ],
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "page_logo",
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
                        storageKey: "page_logo(height:48,width:48)",
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "page_vanity_url",
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
        type: "NewsPersonInfo",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "JournalistRegistrationPostRegistrationInstagramAccountCard_accounts.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "JournalistRegistrationPostRegistrationInstagramAccountCard_accounts",
      selections: [
        {
          alias: "selectedIGAccounts",
          args: null,
          concreteType: "InstagramUserV2",
          kind: "LinkedField",
          name: "selected_ig_accounts",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "username",
              storageKey: null,
            },
            {
              alias: "profilePicture",
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
      type: "NewsPersonInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "JournalistRegistrationPostRegistration_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "JournalistRegistrationPostRegistration_query",
      selections: [
        {
          alias: "journalistRegistration",
          args: null,
          concreteType: "NewsPersonInfo",
          kind: "LinkedField",
          name: "journalist_registration",
          plural: !1,
          selections: [
            {
              alias: "isV2Registered",
              args: null,
              kind: "ScalarField",
              name: "is_v2_registered",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "JournalistRegistrationPostRegistrationCredentials_credentials",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "JournalistRegistrationPostRegistrationInstagramAccountCard_accounts",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "JournalistRegistrationPreSubmissionTool_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "nuxID" }],
      kind: "Fragment",
      metadata: null,
      name: "JournalistRegistrationPreSubmissionTool_query",
      selections: [
        {
          alias: null,
          args: [{ kind: "Variable", name: "nux_id", variableName: "nuxID" }],
          concreteType: null,
          kind: "LinkedField",
          name: "nux",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "JournalistRegistrationNUX_nux",
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
              name: "JournalistRegistrationAdditionalBenefitsSelection_linkedIGAccounts",
            },
          ],
          storageKey: null,
        },
        {
          alias: "journalistRegistration",
          args: null,
          concreteType: "NewsPersonInfo",
          kind: "LinkedField",
          name: "journalist_registration",
          plural: !1,
          selections: [
            {
              alias: "isRegisteredV1",
              args: null,
              kind: "ScalarField",
              name: "is_registered_v1",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "JournalistRegistrationRootQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "nuxID" }],
        b = {
          alias: "hasReviewJobs",
          args: null,
          kind: "ScalarField",
          name: "has_review_jobs",
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
          name: "username",
          storageKey: null,
        },
        e = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        f = {
          alias: "profilePicture",
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: e,
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "JournalistRegistrationRootQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "JournalistRegistrationPreSubmissionTool_query",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "JournalistRegistrationPostRegistration_query",
            },
            {
              alias: "journalistRegistration",
              args: null,
              concreteType: "NewsPersonInfo",
              kind: "LinkedField",
              name: "journalist_registration",
              plural: !1,
              selections: [b],
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
          name: "JournalistRegistrationRootQuery",
          selections: [
            {
              alias: null,
              args: [
                { kind: "Variable", name: "nux_id", variableName: "nuxID" },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "nux",
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
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "nux_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "should_show",
                      storageKey: null,
                    },
                  ],
                  type: "DefaultNUX",
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
                  alias: "linkedIGAccounts",
                  args: null,
                  concreteType: "InstagramUserV2",
                  kind: "LinkedField",
                  name: "linked_ig_accounts",
                  plural: !0,
                  selections: [c, d, f],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: "journalistRegistration",
              args: null,
              concreteType: "NewsPersonInfo",
              kind: "LinkedField",
              name: "journalist_registration",
              plural: !1,
              selections: [
                {
                  alias: "isRegisteredV1",
                  args: null,
                  kind: "ScalarField",
                  name: "is_registered_v1",
                  storageKey: null,
                },
                c,
                {
                  alias: "isV2Registered",
                  args: null,
                  kind: "ScalarField",
                  name: "is_v2_registered",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "JournalistRegistrationLinkData",
                  kind: "LinkedField",
                  name: "submitted_links_with_businesses",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "url",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdBusiness",
                      kind: "LinkedField",
                      name: "associated_business",
                      plural: !1,
                      selections: [
                        c,
                        g,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "business_verification_status",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Page",
                          kind: "LinkedField",
                          name: "primary_page",
                          plural: !1,
                          selections: [
                            g,
                            {
                              alias: null,
                              args: [
                                { kind: "Literal", name: "height", value: 48 },
                                { kind: "Literal", name: "width", value: 48 },
                              ],
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "page_logo",
                              plural: !1,
                              selections: e,
                              storageKey: "page_logo(height:48,width:48)",
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "page_vanity_url",
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
                {
                  alias: "selectedIGAccounts",
                  args: null,
                  concreteType: "InstagramUserV2",
                  kind: "LinkedField",
                  name: "selected_ig_accounts",
                  plural: !0,
                  selections: [d, f, c],
                  storageKey: null,
                },
                b,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3910329915653778",
          metadata: {},
          name: "JournalistRegistrationRootQuery",
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
  "JournalistRegistrationEmailSubmissionMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "SubmitEmailAddressResponsePayload",
            kind: "LinkedField",
            name: "submit_email_address",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email_associated_with_npi",
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
          name: "JournalistRegistrationEmailSubmissionMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "JournalistRegistrationEmailSubmissionMutation",
          selections: b,
        },
        params: {
          id: "4057121377647981",
          metadata: {},
          name: "JournalistRegistrationEmailSubmissionMutation",
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
  "JournalistRegistrationEmailVerificationMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "VerifyConfirmationCodeResponsePayload",
            kind: "LinkedField",
            name: "verify_confirmation_code",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "code_is_verified",
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
          name: "JournalistRegistrationEmailVerificationMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "JournalistRegistrationEmailVerificationMutation",
          selections: b,
        },
        params: {
          id: "3344101419018628",
          metadata: {},
          name: "JournalistRegistrationEmailVerificationMutation",
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
  "JournalistRegistrationOptOutMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "DeleteNewsPersonInfoResponsePayload",
            kind: "LinkedField",
            name: "delete_news_person_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "deleted",
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
          name: "JournalistRegistrationOptOutMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "JournalistRegistrationOptOutMutation",
          selections: b,
        },
        params: {
          id: "3864661863543885",
          metadata: {},
          name: "JournalistRegistrationOptOutMutation",
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
  "JournalistRegistrationSubmitApplicationMutation.graphql",
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
              "JournalistRegistrationSubmitApplicationResponsePayload",
            kind: "LinkedField",
            name: "journalist_registration_submit_application",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "exception",
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
          name: "JournalistRegistrationSubmitApplicationMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "JournalistRegistrationSubmitApplicationMutation",
          selections: b,
        },
        params: {
          id: "4654352614635773",
          metadata: {},
          name: "JournalistRegistrationSubmitApplicationMutation",
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
  "JournalistRegistrationUpdateArticleLinkMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [{ kind: "Variable", name: "input", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_verification_status",
          storageKey: null,
        },
        e = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 48 },
            { kind: "Literal", name: "width", value: 48 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "page_logo",
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
          storageKey: "page_logo(height:48,width:48)",
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_vanity_url",
          storageKey: null,
        },
        g = {
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
          name: "JournalistRegistrationUpdateArticleLinkMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "AdBusiness",
              kind: "LinkedField",
              name: "journalist_registration_update_article_link",
              plural: !1,
              selections: [
                c,
                d,
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "primary_page",
                  plural: !1,
                  selections: [c, e, f],
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
          name: "JournalistRegistrationUpdateArticleLinkMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "AdBusiness",
              kind: "LinkedField",
              name: "journalist_registration_update_article_link",
              plural: !1,
              selections: [
                c,
                d,
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "primary_page",
                  plural: !1,
                  selections: [c, e, f, g],
                  storageKey: null,
                },
                g,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3694973373866596",
          metadata: {},
          name: "JournalistRegistrationUpdateArticleLinkMutation",
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
  "JournalistRegistrationUpdateStaffDirectoryMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [{ kind: "Variable", name: "input", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_verification_status",
          storageKey: null,
        },
        e = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 48 },
            { kind: "Literal", name: "width", value: 48 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "page_logo",
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
          storageKey: "page_logo(height:48,width:48)",
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_vanity_url",
          storageKey: null,
        },
        g = {
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
          name: "JournalistRegistrationUpdateStaffDirectoryMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "AdBusiness",
              kind: "LinkedField",
              name: "journalist_registration_update_staff_directory",
              plural: !1,
              selections: [
                c,
                d,
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "primary_page",
                  plural: !1,
                  selections: [c, e, f],
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
          name: "JournalistRegistrationUpdateStaffDirectoryMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "AdBusiness",
              kind: "LinkedField",
              name: "journalist_registration_update_staff_directory",
              plural: !1,
              selections: [
                c,
                d,
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "primary_page",
                  plural: !1,
                  selections: [c, e, f, g],
                  storageKey: null,
                },
                g,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4662437600497355",
          metadata: {},
          name: "JournalistRegistrationUpdateStaffDirectoryMutation",
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
  "JournalistRegistrationDivider.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", { className: "k4urcfbm tr9rh885 sjgh65i0 kzizifcz" });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "JournalistRegistrationStrings",
  ["fbt", "CometLink.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    b = d("react");
    e =
      "https://www.facebook.com/business/help/377680816096171?id=644465919618833";
    f = "https://www.facebook.com/gpa/facebook-protect";
    d = "https://www.facebook.com/privacy/explanation/";
    var i = "https://www.facebook.com/terms/",
      j = "https://apps.crowdtangle.com/search";
    e = {
      ADD_URL_BUTTON_LABEL: h._("Add"),
      ADDITIONAL_BENEFITS_SECTION_TITLE: h._("Additional Benefits"),
      APPLICATION_REVIEW_SUBTITLE: h._(
        "Once this is complete, we will send you an email confirming access to the following:"
      ),
      APPLICATION_UNDER_REVIEW_MESSAGE: h._(
        "Our team is reviewing the information you submitted."
      ),
      BENEFITS_INTRODUCTION_DESCRIPTION: h._(
        "Once we have confirmed your information, you may be eligible to receive:"
      ),
      BENEFITS_INTRODUCTION_TITLE: h._("Benefits"),
      BLUE_BADGE_OPT_IN_TEXT: h._(
        "Opt-in to automatically apply for a Blue Verification Badge."
      ),
      BLUE_BADGE_VERIFICATION_EXPLANATION: h._(
        "Let people know your Facebook account has been verified."
      ),
      BLUE_BADGE_VERIFICATION_TITLE: h._("Blue Badge Verification"),
      BYLINE_LINK_NOT_REGISTERED_MESSAGE: h._(
        "This link is not tied to a registered news Page on Facebook. Learn about news Page registration {help center link}.",
        [
          h._param(
            "help center link",
            b.jsx(c("CometLink.react"), {
              color: "highlight",
              href: e,
              target: "_blank",
              children: "here",
            })
          ),
        ]
      ),
      BYLINES_INFO: h._(
        "We require this information for journalists to be considered for Blue Badge Verification. Providing this information will also get you access to security measures and CrowdTangle Search."
      ),
      BYLINES_INPUT_INSTRUCTION: h._(
        "Provide 5 links to the news stories that list you as an author or contributor."
      ),
      BYLINES_SECTION_TITLE: h._("Bylines"),
      CHANGE_YOUR_MIND: h._("Change your mind?"),
      CREDENTIALS_INFO_BBV: h._(
        "We use this information to verify your affiliation with a registered news Page on Facebook. You will get access to security measures and CrowdTangle Search and you will be eligible for Blue Badge Verification."
      ),
      CREDENTIALS_INSTRUCTION: h._(
        "Choose one of the methods below to verify your credentials."
      ),
      CREDENTIALS_SECTION_TITLE: h._("Credentials"),
      CROWDTANGLE_SEARCH_ACCESS: h._("Access CrowdTangle Search {=here}.", [
        h._param(
          "=here",
          b.jsx(c("CometLink.react"), {
            color: "highlight",
            href: j,
            target: "_blank",
            children: h._("here"),
          })
        ),
      ]),
      CROWDTANGLE_SEARCH_CONTACT: h._(
        "For any CrowdTangle questions, please contact us at {crowdTangle search link}",
        [
          h._param(
            "crowdTangle search link",
            b.jsx(c("CometLink.react"), {
              color: "highlight",
              href: "mailto: support@crowdtangle.com",
              target: "_blank",
              children: "support@crowdtangle.com",
            })
          ),
        ]
      ),
      CROWDTANGLE_SEARCH_EXPLANATION: h._(
        "Get greater insights into public content across social media."
      ),
      CROWDTANGLE_SEARCH_TITLE: h._("CrowdTangle Search"),
      DATA_DISCLAIMER_TEXT: h._(
        "We use the information below to assess whether you are eligible to register as a journalist, to better understand the type of journalists who are interested in this program, and in accordance with the {=Facebook Data Policy}.",
        [
          h._param(
            "=Facebook Data Policy",
            b.jsx(c("CometLink.react"), {
              color: "highlight",
              href: d,
              target: "_blank",
              children: h._("Facebook Data Policy"),
            })
          ),
        ]
      ),
      DATA_DISCLAIMER_TITLE: h._("Data Disclaimer"),
      DATA_POLICY_AND_TERM_OF_SERVICE: h._(
        "For more information about how we use your data, see the {=Facebook Data Policy} and {=Terms of Service}.",
        [
          h._param(
            "=Facebook Data Policy",
            b.jsx(c("CometLink.react"), {
              color: "highlight",
              href: d,
              target: "_blank",
              children: h._("Facebook Data Policy"),
            })
          ),
          h._param(
            "=Terms of Service",
            b.jsx(c("CometLink.react"), {
              color: "highlight",
              href: i,
              target: "_blank",
              children: h._("Terms of Service"),
            })
          ),
        ]
      ),
      EMAIL_DOMAIN_NOT_ASSOCIATED_WITH_NPI_MESSAGE: h._(
        "The email you provided is not associated with a Facebook registered news Page. Submit your credentials in the next step to complete your registration."
      ),
      EMAIL_INPUT_PLACEHOLDER: h._("Enter email address"),
      EMAIL_VERIFICATION_INSTRUCTION: h._(
        "Enter the code we sent to your email address you provided here."
      ),
      EMAIL_VERIFICATION_TITLE: h._("Verify Email"),
      EMAIL_VERIFIED_MESSAGE: h._(
        "The email you submitted to register as a journalist has been verified and approved and you will now receive security protection from Facebook. Provide additional credentials below to receive more journalist benefits."
      ),
      ERROR_MESSAGE: h._("Something went wrong. Please try again."),
      ERROR_TITLE: h._("Error"),
      FEATURE_UPDATES_EXPLANATION: h._(
        "Be notified about new features for journalists as they are being released."
      ),
      FEATURE_UPDATES_TITLE: h._("Updates on special features"),
      INDUSTRY_ROLES_INFO: h._(
        "We use this information to better understand the types of journalists who are interested in this program and to improve the product experience over time."
      ),
      INDUSTRY_ROLES_PROMPT: h._("News Industry Role"),
      INDUSTRY_ROLES_SECTION_TITLE: h._("Role"),
      INDUSTRY_ROLES_SELECTION_EXPLANATION: h._(
        "Select all the roles that apply."
      ),
      INSTAGRAM_ACCOUNT_PROTECTION_OPTION: h._(
        "Extend safety and security protections to your Instagram accounts."
      ),
      JOURNALIST_RESOURCES: h._("Journalist Resources"),
      JOURNALIST_RESOURCES_ACCESS_DESCRIPTION: h._(
        "Your submission is pending approval."
      ),
      JOURNALIST_RESOURCES_ACCESS_TITLE: h._("Access"),
      JOURNALIST_RESOURCES_CREDENTIALS_DESCRIPTION: h._(
        "Our team is reviewing the information you submitted."
      ),
      JOURNALIST_RESOURCES_CREDENTIALS_TITLE: h._("Credentials"),
      JOURNALIST_RESOURCES_LINKED_IG_ACCOUNT_TITLE: h._(
        "Linked Instagram Accounts"
      ),
      LEARN_MORE: h._("Learn more"),
      LINK_LABEL: h._("Link"),
      LOADING_MESSAGE: h._("Please wait"),
      NEGATIVE_LABEL: h._("No"),
      NET_WORK_ERROR_TITLE: h._("Network Error"),
      NEWS_ORGANIZATION_EXPLANATION: h._(
        "If applicable, enter the email associated with the news organization you work with. If you are a freelancer, enter your professional email address."
      ),
      NEWS_ORGANIZATION_PROMPT: h._("Professional Email"),
      NEWS_ORGANIZATION_SECTION_TITLE: h._("Organization"),
      NUMBER_ONE: h._("{number one}", [h._param("number one", "1.")]),
      NUMBER_TWO: h._("{number two}", [h._param("number two", "2.")]),
      NUX_SUBTITLE: h._(
        "Update your information to receive access to features for journalists as they are developed."
      ),
      NUX_TITLE: h._("New! Access to Tools & Features"),
      POLITICAL_AFFILIATION_INFO: h._(
        "We include this question to determine eligibility for journalist registration. Facebook does not collect or store this information."
      ),
      POLITICAL_AFFILIATION_MESSAGE: h._(
        "Because you chose 'Yes', you may be eligible for Facebook Protect, a program which offers candidates, elected officials, federal and state departments and agencies and party committees as well as their staff a way to further secure their Facebook and Instagram accounts with stronger protections against online threats. Learn more about Facebook Protect {Facebook Protect Link}.",
        [
          h._param(
            "Facebook Protect Link",
            b.jsx(c("CometLink.react"), {
              color: "highlight",
              href: f,
              target: "_blank",
              children: "here",
            })
          ),
        ]
      ),
      POLITICAL_AFFILIATION_QUESTION: h._(
        "Are you currently a candidate for political office; campaign staffer for someone running for political office or a government employee?"
      ),
      POLITICAL_AFFILIATION_TITLE: h._("Politicians / Government Employees"),
      POPOVER_PROMPT: h._("Why do we need this information?"),
      POSITIVE_LABEL: h._("Yes"),
      PRIMARY_PAGE_LABEL: h._("Primary Page"),
      PROFESSIONAL_EMAIL_INFO: h._(
        "We use this information to verify your affiliation with a registered news Page on Facebook. You will get access to security measures and CrowdTangle Search."
      ),
      PROJECT_NAME: h._("Journalist Resources"),
      REGISTRATION_TITLE: h._("Registration"),
      REMOVE_LABEL: h._("Remove"),
      REMOVE_REGISTRATION: h._("Remove your registration"),
      REMOVE_REGISTRATION_CONFIRMATION_MESSAGE: h._(
        "Now you are no longer registered as a journalist on Facebook."
      ),
      REMOVE_REGISTRATION_CONFIRMATION_TITLE: h._("Removal Confirmed"),
      SAFETY_AND_PROTECTION_DESCRIPTION: h._(
        "Stronger security measures that protect your Facebook and Instagram profiles against harassment and potential hacking threats."
      ),
      SAFETY_AND_PROTECTION_FOR_IG_TITLE: h._(
        "Safety and Protection measures for Instagram"
      ),
      SAFETY_AND_PROTECTION_TITLE: h._("Safety and Protection measures"),
      STAFF_DIRECTORY_INFO: h._(
        "We use this information to verify your affiliation with a registered news Page on Facebook. You will get access to security measures and CrowdTangle Search."
      ),
      STAFF_DIRECTORY_INSTRUCTION: h._(
        "Provide a link to your news organization's staff directory."
      ),
      STAFF_DIRECTORY_TITLE: h._("Staff Directory"),
      SUBMIT_BUTTON_LABEL: h._("Submit"),
      SUBMITTED_LABEL: h._("Submitted"),
      VERIFICATION_CODE_INPUT_LABEL: h._("Verification code"),
      WEBSITE_URL_INPUT_PLACEHOLDER: h._("Website URL"),
    };
    function a(a) {
      switch (a) {
        case "Reporter":
          return h._("Reporter");
        case "Writer":
          return h._("Writer");
        case "Editor":
          return h._("Editor");
        case "Columnist":
          return h._("Columnist");
        case "Commentator":
          return h._("Commentator");
        case "Producer":
          return h._("Producer");
        case "Radio/TV Announcer":
          return h._("Radio/TV Announcer");
        case "Photographer":
          return h._("Photographer");
        case "Cameraperson":
          return h._("Cameraperson");
        case "Podcaster":
          return h._("Podcaster");
        case "Film/Video Editor":
          return h._("Film/Video Editor");
        case "Blogger":
          return h._("Blogger");
        case "Audio/Video Technician":
          return h._("Audio/Video Technician");
        case "Sound Engineer":
          return h._("Sound Engineer");
        case "Other":
          return h._("Other");
        default:
          return h._("Other");
      }
    }
    g.JournalistRegistrationStrings = e;
    g.getFbtForIndustryRole = a;
  },
  98
);
__d(
  "JournalistRegistrationAdditionalBenefitsSelection.react",
  [
    "CometImageIcon_DEPRECATED.react",
    "CometLink.react",
    "CometRelay",
    "CometToggle.react",
    "JournalistRegistrationAdditionalBenefitsSelection_linkedIGAccounts.graphql",
    "JournalistRegistrationDivider.react",
    "JournalistRegistrationStrings",
    "TetraText.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "JournalistRegistrationAdditionalBenefitsSelection_linkedIGAccounts.graphql"
              )),
          a.linkedIGAccounts
        ),
        g = a.addOrRemoveIGAccountID,
        j = a.isAccountSelected,
        k = a.optInForBlueBadge,
        l = a.optInForIGAccountProtection,
        m = a.setOptInForBlueBadge;
      a = a.setOptInForIGAccountProtection;
      f = f == null ? void 0 : f.linkedIGAccounts;
      var n = (e = f == null ? void 0 : f.length) != null ? e : 0;
      return i.jsxs("div", {
        className: "sj5x9vvc btwxx1t3 j83agx80",
        children: [
          i.jsx("div", {
            className: "foejyqcu dati1w0a",
            children: i.jsx(c("TetraText.react"), {
              color: "primary",
              type: "headlineEmphasized3",
              children: d("JournalistRegistrationStrings")
                .JournalistRegistrationStrings
                .ADDITIONAL_BENEFITS_SECTION_TITLE,
            }),
          }),
          i.jsxs("div", {
            className: "fbgwweev",
            children: [
              i.jsxs("div", {
                className: "pxsmfnpt btwxx1t3 j83agx80",
                children: [
                  i.jsx("div", {
                    className: "pfqjqu37 wkznzc2l",
                    children: i.jsx(c("TetraText.react"), {
                      type: "headlineEmphasized4",
                      children: d("JournalistRegistrationStrings")
                        .JournalistRegistrationStrings.BLUE_BADGE_OPT_IN_TEXT,
                    }),
                  }),
                  i.jsx("div", {
                    className: "cg1f0npj",
                    children: i.jsx(c("CometToggle.react"), {
                      onValueChange: m,
                      value: k,
                      children: " ",
                    }),
                  }),
                ],
              }),
              i.jsx(c("JournalistRegistrationDivider.react"), {}),
              i.jsxs("div", {
                className: "pxsmfnpt btwxx1t3 j83agx80",
                children: [
                  i.jsx("div", {
                    className: "pfqjqu37 wkznzc2l",
                    children: i.jsx(c("TetraText.react"), {
                      type: "headlineEmphasized4",
                      children: d("JournalistRegistrationStrings")
                        .JournalistRegistrationStrings
                        .INSTAGRAM_ACCOUNT_PROTECTION_OPTION,
                    }),
                  }),
                  i.jsx("div", {
                    className: "cg1f0npj",
                    children: i.jsx(c("CometToggle.react"), {
                      onValueChange: a,
                      value: l,
                      children: " ",
                    }),
                  }),
                  i.jsx("div", {
                    className: "mwd26vqw",
                    children:
                      f == null
                        ? void 0
                        : f.map(function (a, b) {
                            var e = a.id,
                              f = a.profilePicture;
                            a = a.username;
                            if (e == null || a == null) return null;
                            f = f == null ? void 0 : f.uri;
                            return (
                              l &&
                              i.jsxs(
                                "div",
                                {
                                  children: [
                                    i.jsxs("div", {
                                      className:
                                        "myj7ivm5 km676qkl frluczxc cb02d2ww btwxx1t3 j83agx80",
                                      children: [
                                        i.jsx("div", {
                                          className:
                                            "a8yuo7t3 myj7ivm5 km676qkl",
                                          children: i.jsx(
                                            c(
                                              "CometImageIcon_DEPRECATED.react"
                                            ),
                                            {
                                              size: 48,
                                              src: (f = f) != null ? f : "",
                                              style: "circle",
                                            }
                                          ),
                                        }),
                                        i.jsx("div", {
                                          className:
                                            "hy61f1kz myj7ivm5 km676qkl",
                                          children: i.jsx(
                                            c("TetraText.react"),
                                            {
                                              type: "headlineEmphasized4",
                                              children: "@" + a,
                                            }
                                          ),
                                        }),
                                        i.jsx("div", {
                                          className: "myj7ivm5 km676qkl",
                                          children: i.jsx(
                                            c("TetraTextPairing.react"),
                                            {
                                              headline: i.jsx(
                                                c("CometLink.react"),
                                                {
                                                  color: "highlight",
                                                  onPressEnd: function () {
                                                    g(e);
                                                  },
                                                  children: j(e)
                                                    ? d(
                                                        "JournalistRegistrationStrings"
                                                      )
                                                        .JournalistRegistrationStrings
                                                        .REMOVE_LABEL
                                                    : d(
                                                        "JournalistRegistrationStrings"
                                                      )
                                                        .JournalistRegistrationStrings
                                                        .LINK_LABEL,
                                                }
                                              ),
                                              headlineLineLimit: 1,
                                              level: 3,
                                            }
                                          ),
                                        }),
                                      ],
                                    }),
                                    b !== n - 1 &&
                                      i.jsx(
                                        c(
                                          "JournalistRegistrationDivider.react"
                                        ),
                                        {}
                                      ),
                                  ],
                                },
                                b
                              )
                            );
                          }),
                  }),
                ],
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
  "ArticleLinksIndex",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ FIRST: 0, SECOND: 1, THIRD: 2, FOURTH: 3, FIFTH: 4 });
    f["default"] = a;
  },
  66
);
__d(
  "JournalistRegistrationBusinessInfoView.react",
  [
    "ix",
    "CometImage.react",
    "CometImageIcon_DEPRECATED.react",
    "CometLink.react",
    "JournalistRegistrationStrings",
    "TetraText.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b;
      a = a.businessData;
      return a
        ? i.jsxs("div", {
            className: "btwxx1t3 j83agx80",
            children: [
              i.jsx("div", {
                className: "eu5xto3x hyh9befq n8tt0mok",
                children:
                  ((b = a == null ? void 0 : a.pageLogoURI) != null ? b : "") &&
                  i.jsx(c("CometImageIcon_DEPRECATED.react"), {
                    size: 48,
                    src:
                      (b = a == null ? void 0 : a.pageLogoURI) != null ? b : "",
                    style: "circle",
                  }),
              }),
              i.jsxs("div", {
                className:
                  "t6nst519 oud54xpy ku2m03ct frluczxc cbu4d94t j83agx80",
                children: [
                  i.jsxs("div", {
                    className: "btwxx1t3 j83agx80",
                    children: [
                      i.jsx(c("TetraText.react"), {
                        type: "headline3",
                        children: a == null ? void 0 : a.businessName,
                      }),
                      i.jsx("div", {
                        className: "h676nmdw",
                        children:
                          (a == null ? void 0 : a.businessIsVerified) ===
                            "verified" &&
                          i.jsx(c("CometImage.react"), {
                            alt: "verification badge",
                            src: h("1085285"),
                          }),
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "aov4n071 btwxx1t3 j83agx80",
                    children: i.jsx(c("TetraTextPairing.react"), {
                      level: 3,
                      meta: i.jsxs(i.Fragment, {
                        children: [
                          d("JournalistRegistrationStrings")
                            .JournalistRegistrationStrings.PRIMARY_PAGE_LABEL,
                          ": ",
                          (a == null ? void 0 : a.pageName) != null
                            ? i.jsx(c("CometLink.react"), {
                                color: "highlight",
                                href: a == null ? void 0 : a.pageURL,
                                target: "_blank",
                                children: a == null ? void 0 : a.pageName,
                              })
                            : null,
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        : i.jsx(i.Fragment, {});
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "JournalistRegistrationUpdateArticleLinkMutation",
  ["CometRelay", "JournalistRegistrationUpdateArticleLinkMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("JournalistRegistrationUpdateArticleLinkMutation.graphql"));
    function a(a, b, c, e) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function (a, b) {
          e.onCompleted(a);
        },
        onError: e.onError,
        variables: { input: { article_link_url: b, index: c } },
      });
    }
    g.updateArticleLink = a;
  },
  98
);
__d(
  "JournalistRegistrationArticleLinkInputRow.react",
  [
    "ArticleLinksIndex",
    "CometFormTextInput.react",
    "CometRelay",
    "JournalistRegistrationBusinessInfoView.react",
    "JournalistRegistrationStrings",
    "JournalistRegistrationUpdateArticleLinkMutation",
    "TetraButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function j(a) {
      var b = null;
      Object.keys(c("ArticleLinksIndex")).some(function (d) {
        c("ArticleLinksIndex")[d] === a && (b = c("ArticleLinksIndex")[d]);
      });
      return b;
    }
    function a(a) {
      var b = a.index,
        e = a.setLinkIsAssociated,
        f = a.setShouldLockInputs;
      a = a.shouldLockInputs;
      var g = d("CometRelay").useRelayEnvironment(),
        k = i(null),
        l = k[0],
        m = k[1];
      k = i(!1);
      var n = k[0],
        o = k[1];
      k = i(null);
      var p = k[0],
        q = k[1];
      k = i(null);
      var r = k[0],
        s = k[1];
      return h.jsxs("div", {
        className: "d46ut3hm n1l5q3vz n851cfcs btwxx1t3 j83agx80",
        children: [
          h.jsxs("div", {
            className: "sujlz0zj btwxx1t3 j83agx80",
            children: [
              h.jsx("div", {
                className: "a9ndjppc",
                children: h.jsx(c("CometFormTextInput.react"), {
                  disabled: n || a,
                  label: d("JournalistRegistrationStrings")
                    .JournalistRegistrationStrings
                    .WEBSITE_URL_INPUT_PLACEHOLDER,
                  onValueChange: function (a) {
                    e(!1), m(a), q(null);
                  },
                  validationState: (function () {
                    if (n) return "LOADING";
                    switch (p) {
                      case !0:
                        return "CORRECT";
                      case !1:
                        return "ERROR";
                      default:
                        return null;
                    }
                  })(),
                  value: (k = l) != null ? k : "",
                }),
              }),
              h.jsx("div", {
                className: "myj7ivm5 km676qkl h676nmdw",
                children: h.jsx(c("TetraButton.react"), {
                  disabled: l == null || l === "",
                  label: d("JournalistRegistrationStrings")
                    .JournalistRegistrationStrings.ADD_URL_BUTTON_LABEL,
                  onPress: function () {
                    var a,
                      c = j(b);
                    if (c === null || c === void 0) return;
                    o(!0);
                    f(!0);
                    q(null);
                    e(!1);
                    d(
                      "JournalistRegistrationUpdateArticleLinkMutation"
                    ).updateArticleLink(g, (a = l) != null ? a : "", c, {
                      onCompleted: function (a) {
                        var b;
                        o(!1);
                        f(!1);
                        a = a.journalist_registration_update_article_link;
                        var c = a == null ? void 0 : a.name;
                        if (c == null) {
                          o(!1);
                          q(!1);
                          e(!1);
                          return;
                        }
                        e(!0);
                        q(!0);
                        var d = a == null ? void 0 : a.primary_page,
                          g = d == null ? void 0 : d.name;
                        b =
                          d == null
                            ? void 0
                            : (b = d.page_logo) == null
                            ? void 0
                            : b.uri;
                        d = d == null ? void 0 : d.page_vanity_url;
                        a =
                          (a == null
                            ? void 0
                            : a.business_verification_status) === "verified";
                        s({
                          businessIsVerified: a,
                          businessName: c,
                          pageLogoURI: b,
                          pageName: g,
                          pageURL: d,
                        });
                      },
                      onError: function () {
                        f(!1), o(!1), e(!1), q(!1);
                      },
                    });
                  },
                  type: "secondary",
                }),
              }),
            ],
          }),
          h.jsx("div", {
            className: "mwd26vqw myj7ivm5 km676qkl frluczxc",
            children: (function () {
              if (p === !1)
                return d("JournalistRegistrationStrings")
                  .JournalistRegistrationStrings
                  .BYLINE_LINK_NOT_REGISTERED_MESSAGE;
              return p === !0
                ? h.jsx(c("JournalistRegistrationBusinessInfoView.react"), {
                    businessData: r,
                  })
                : null;
            })(),
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
  "JournalistRegistrationArticleLinks.react",
  [
    "JournalistRegistrationArticleLinkInputRow.react",
    "JournalistRegistrationStrings",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = a.numArticleLinks,
        e = a.setArticleLinkAssociatedAtIndex;
      a = i(!1);
      var f = a[0],
        g = a[1];
      return h.jsxs("div", {
        className: "tr9rh885",
        children: [
          h.jsx(c("TetraTextPairing.react"), {
            headline: h.jsxs("div", {
              className: "nc684nl6",
              children: [
                d("JournalistRegistrationStrings").JournalistRegistrationStrings
                  .NUMBER_ONE,
                " ",
                d("JournalistRegistrationStrings").JournalistRegistrationStrings
                  .BYLINES_SECTION_TITLE,
              ],
            }),
            level: 4,
            meta: d("JournalistRegistrationStrings")
              .JournalistRegistrationStrings.BYLINES_INPUT_INSTRUCTION,
          }),
          h.jsx("div", {
            className: "aov4n071",
            children: Array.from(Array(b).keys()).map(function (a) {
              return h.jsx(
                c("JournalistRegistrationArticleLinkInputRow.react"),
                {
                  index: a,
                  setLinkIsAssociated: function (b) {
                    e(b, a);
                  },
                  setShouldLockInputs: function (a) {
                    g(a);
                  },
                  shouldLockInputs: f,
                },
                a
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
  "JournalistRegistrationBenefitsCards.react",
  [
    "ix",
    "CometTintedIcon.react",
    "JournalistRegistrationStrings",
    "TetraText.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = "fds-primary-icon";
    function k(a) {
      return i.jsxs("div", {
        className: "gh1tjcio btwxx1t3 j83agx80",
        children: [
          a.icon,
          i.jsx("div", {
            className: "dhix69tm",
            children: i.jsx(c("TetraTextPairing.react"), {
              body: i.jsx(c("TetraText.react"), {
                type: "meta4",
                children: a.bodyText,
              }),
              headline: a.headlineText,
              level: 4,
              reduceEmphasis: !0,
            }),
          }),
        ],
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l() {
      return i.jsx(k, {
        bodyText: d("JournalistRegistrationStrings")
          .JournalistRegistrationStrings.SAFETY_AND_PROTECTION_DESCRIPTION,
        headlineText: d("JournalistRegistrationStrings")
          .JournalistRegistrationStrings.SAFETY_AND_PROTECTION_TITLE,
        icon: i.jsx(c("CometTintedIcon.react"), {
          color: j,
          icon: d("fbicon")._(h("497246"), 24),
        }),
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m() {
      return i.jsx(k, {
        bodyText: d("JournalistRegistrationStrings")
          .JournalistRegistrationStrings.BLUE_BADGE_VERIFICATION_EXPLANATION,
        headlineText: d("JournalistRegistrationStrings")
          .JournalistRegistrationStrings.BLUE_BADGE_VERIFICATION_TITLE,
        icon: i.jsx(c("CometTintedIcon.react"), {
          color: j,
          icon: d("fbicon")._(h("478215"), 24),
        }),
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n() {
      return i.jsx(k, {
        bodyText: d("JournalistRegistrationStrings")
          .JournalistRegistrationStrings.CROWDTANGLE_SEARCH_EXPLANATION,
        headlineText: d("JournalistRegistrationStrings")
          .JournalistRegistrationStrings.CROWDTANGLE_SEARCH_TITLE,
        icon: i.jsx(c("CometTintedIcon.react"), {
          color: j,
          icon: d("fbicon")._(h("497015"), 24),
        }),
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o() {
      return i.jsx(k, {
        bodyText: d("JournalistRegistrationStrings")
          .JournalistRegistrationStrings.FEATURE_UPDATES_EXPLANATION,
        headlineText: d("JournalistRegistrationStrings")
          .JournalistRegistrationStrings.FEATURE_UPDATES_TITLE,
        icon: i.jsx(c("CometTintedIcon.react"), {
          color: j,
          icon: d("fbicon")._(h("515025"), 24),
        }),
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a() {
      return i.jsxs("div", {
        children: [i.jsx(l, {}), i.jsx(m, {}), i.jsx(n, {}), i.jsx(o, {})],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "JournalistRegistrationBenefitsIntroduction.react",
  [
    "JournalistRegistrationBenefitsCards.react",
    "JournalistRegistrationStrings",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        children: [
          h.jsx("div", {
            className: "dati1w0a",
            children: h.jsx(c("TetraText.react"), {
              type: "headlineEmphasized2",
              children: d("JournalistRegistrationStrings")
                .JournalistRegistrationStrings.REGISTRATION_TITLE,
            }),
          }),
          h.jsxs("div", {
            className: "gh1tjcio btwxx1t3 j83agx80",
            children: [
              h.jsx("div", {
                className: "foejyqcu dati1w0a",
                children: h.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized3",
                  children: d("JournalistRegistrationStrings")
                    .JournalistRegistrationStrings.BENEFITS_INTRODUCTION_TITLE,
                }),
              }),
              h.jsxs("div", {
                className: "hy61f1kz",
                children: [
                  h.jsx(c("TetraText.react"), {
                    type: "body3",
                    children: d("JournalistRegistrationStrings")
                      .JournalistRegistrationStrings
                      .BENEFITS_INTRODUCTION_DESCRIPTION,
                  }),
                  h.jsx(c("JournalistRegistrationBenefitsCards.react"), {}),
                ],
              }),
            ],
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.JournalistRegistrationBenefitsIntroduction = a;
  },
  98
);
__d(
  "JournalistRegistrationCredentialsMat.react",
  [
    "ix",
    "CometImage.react",
    "CometLink.react",
    "JournalistRegistrationStrings",
    "TetraText.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j =
        "https://www.facebook.com/business/help/620369758565492?id=644465919618833";
    function a(a) {
      return i.jsxs("div", {
        className:
          "n5hh3s10 ve1iu6zt btwxx1t3 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 tdjehn4e",
        children: [
          i.jsx("div", {
            className: "lz8ugiop tr9rh885 dhix69tm",
            children: i.jsx(c("CometImage.react"), { src: h("1760243") }),
          }),
          i.jsx("div", {
            className: "gwo797ei tr9rh885 wkznzc2l",
            children: i.jsx(c("TetraTextPairing.react"), {
              body: i.jsxs(c("TetraText.react"), {
                color: a.sectionEnabled ? "primary" : "disabled",
                type: "body3",
                children: [
                  d("JournalistRegistrationStrings")
                    .JournalistRegistrationStrings.CREDENTIALS_INSTRUCTION,
                  " ",
                  i.jsx(c("CometLink.react"), {
                    color: a.sectionEnabled ? "highlight" : "tertiary",
                    disabled: !a.sectionEnabled,
                    href: j,
                    target: "_blank",
                    children: d("JournalistRegistrationStrings")
                      .JournalistRegistrationStrings.LEARN_MORE,
                  }),
                  ".",
                ],
              }),
              level: 3,
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
  "JournalistRegistrationUpdateStaffDirectoryMutation",
  ["CometRelay", "JournalistRegistrationUpdateStaffDirectoryMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              "JournalistRegistrationUpdateStaffDirectoryMutation.graphql"
            ));
    function a(a, b, c) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function (a, b) {
          c.onCompleted(a);
        },
        onError: c.onError,
        variables: { input: { link_url: b } },
      });
    }
    g.updateStaffDirectoryLink = a;
  },
  98
);
__d(
  "JournalistRegistrationStaffDirectory.react",
  [
    "CometFormTextInput.react",
    "CometRelay",
    "JournalistRegistrationBusinessInfoView.react",
    "JournalistRegistrationStrings",
    "JournalistRegistrationUpdateStaffDirectoryMutation",
    "TetraButton.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = d("CometRelay").useRelayEnvironment(),
        e = i(null),
        f = e[0],
        g = e[1];
      e = i(null);
      var j = e[0],
        k = e[1];
      e = i(null);
      var l = e[0],
        m = e[1];
      e = i(!1);
      var n = e[0],
        o = e[1],
        p = a.markStaffDirectoryAssociationStatus;
      return h.jsxs("div", {
        className: "d46ut3hm n851cfcs n1l5q3vz cbu4d94t j83agx80",
        children: [
          h.jsx(c("TetraTextPairing.react"), {
            headline: h.jsxs("div", {
              className: "nc684nl6",
              children: [
                d("JournalistRegistrationStrings").JournalistRegistrationStrings
                  .NUMBER_TWO,
                " ",
                d("JournalistRegistrationStrings").JournalistRegistrationStrings
                  .STAFF_DIRECTORY_TITLE,
              ],
            }),
            level: 4,
            meta: d("JournalistRegistrationStrings")
              .JournalistRegistrationStrings.STAFF_DIRECTORY_INSTRUCTION,
          }),
          h.jsxs("div", {
            className: "n1l5q3vz btwxx1t3 j83agx80",
            children: [
              h.jsxs("div", {
                className: "odbpb0u3 btwxx1t3 j83agx80",
                children: [
                  h.jsx("div", {
                    className: "a9ndjppc",
                    children: h.jsx(c("CometFormTextInput.react"), {
                      disabled: n,
                      label: d("JournalistRegistrationStrings")
                        .JournalistRegistrationStrings
                        .WEBSITE_URL_INPUT_PLACEHOLDER,
                      onValueChange: function (a) {
                        p(!1), g(a), m(null);
                      },
                      validationState: (function () {
                        if (n) return "LOADING";
                        switch (l) {
                          case !0:
                            return "CORRECT";
                          case !1:
                            return "ERROR";
                          default:
                            return null;
                        }
                      })(),
                      value: (e = f) != null ? e : "",
                    }),
                  }),
                  h.jsx("div", {
                    className: "myj7ivm5 km676qkl h676nmdw",
                    children: h.jsx(c("TetraButton.react"), {
                      disabled: f == null || f === "",
                      label: d("JournalistRegistrationStrings")
                        .JournalistRegistrationStrings.SUBMIT_BUTTON_LABEL,
                      onPress: function () {
                        var a;
                        o(!0);
                        p(!1);
                        m(null);
                        d(
                          "JournalistRegistrationUpdateStaffDirectoryMutation"
                        ).updateStaffDirectoryLink(
                          b,
                          (a = f) != null ? a : "",
                          {
                            onCompleted: function (a) {
                              var b;
                              o(!1);
                              a =
                                a.journalist_registration_update_staff_directory;
                              var c = a == null ? void 0 : a.name;
                              if (c == null) {
                                o(!1);
                                m(!1);
                                p(!1);
                                return;
                              }
                              m(!0);
                              p(!0);
                              var d = a == null ? void 0 : a.primary_page,
                                e = d == null ? void 0 : d.name;
                              b =
                                d == null
                                  ? void 0
                                  : (b = d.page_logo) == null
                                  ? void 0
                                  : b.uri;
                              d = d == null ? void 0 : d.page_vanity_url;
                              a =
                                (a == null
                                  ? void 0
                                  : a.business_verification_status) ===
                                "verified";
                              k({
                                businessIsVerified: a,
                                businessName: c,
                                pageLogoURI: b,
                                pageName: e,
                                pageURL: d,
                              });
                            },
                            onError: function () {
                              o(!1), p(!1), m(!1);
                            },
                          }
                        );
                      },
                      type: "secondary",
                    }),
                  }),
                ],
              }),
              h.jsx("div", {
                className: "m67ris61 myj7ivm5 km676qkl frluczxc",
                children: (function () {
                  if (l === !1)
                    return d("JournalistRegistrationStrings")
                      .JournalistRegistrationStrings
                      .BYLINE_LINK_NOT_REGISTERED_MESSAGE;
                  return l === !0
                    ? h.jsx(c("JournalistRegistrationBusinessInfoView.react"), {
                        businessData: j,
                      })
                    : null;
                })(),
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
  "JournalistRegistrationCredentials.react",
  [
    "JournalistRegistrationArticleLinks.react",
    "JournalistRegistrationCredentialsMat.react",
    "JournalistRegistrationDivider.react",
    "JournalistRegistrationStaffDirectory.react",
    "JournalistRegistrationStrings",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.credentialsEnabled,
        e = a.markStaffDirectoryAssociationStatus,
        f = a.numArticleLinks,
        g = a.setArticleLinkAssociatedAtIndex;
      return h.jsxs("div", {
        className: "ihqw7lf3 btwxx1t3 j83agx80",
        children: [
          h.jsx("div", {
            className: "foejyqcu dati1w0a",
            children: h.jsx(c("TetraText.react"), {
              color: b ? "primary" : "disabled",
              type: "headlineEmphasized3",
              children: d("JournalistRegistrationStrings")
                .JournalistRegistrationStrings.CREDENTIALS_SECTION_TITLE,
            }),
          }),
          h.jsxs("div", {
            className: "fbgwweev",
            children: [
              h.jsx(c("JournalistRegistrationCredentialsMat.react"), {
                sectionEnabled: a.credentialsEnabled,
              }),
              b &&
                h.jsxs(h.Fragment, {
                  children: [
                    h.jsx(c("JournalistRegistrationArticleLinks.react"), {
                      numArticleLinks: f,
                      setArticleLinkAssociatedAtIndex: g,
                    }),
                    h.jsx(c("JournalistRegistrationDivider.react"), {}),
                  ],
                }),
              b &&
                h.jsx(c("JournalistRegistrationStaffDirectory.react"), {
                  markStaffDirectoryAssociationStatus: e,
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
  "JournalistRegistrationDataDisclaimer.react",
  ["JournalistRegistrationStrings", "TetraTextPairing.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        className: "btwxx1t3 j83agx80",
        children: [
          h.jsx("div", {
            className: "foejyqcu dati1w0a",
            children: h.jsx(c("TetraTextPairing.react"), {
              headline: h.jsx(h.Fragment, {
                children: d("JournalistRegistrationStrings")
                  .JournalistRegistrationStrings.DATA_DISCLAIMER_TITLE,
              }),
              level: 3,
            }),
          }),
          h.jsx("div", {
            className: "sujlz0zj",
            children: h.jsx(c("TetraTextPairing.react"), {
              body: h.jsx(h.Fragment, {
                children: d("JournalistRegistrationStrings")
                  .JournalistRegistrationStrings.DATA_DISCLAIMER_TEXT,
              }),
              level: 3,
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
  "JournalistRegistrationEmailSubmissionMutation",
  ["CometRelay", "JournalistRegistrationEmailSubmissionMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("JournalistRegistrationEmailSubmissionMutation.graphql"));
    function a(a, b, c) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function (a, b) {
          c.onCompleted(a);
        },
        onError: c.onError,
        variables: { input: { email_address: b } },
      });
    }
    g.submitEmailAddress = a;
  },
  98
);
__d(
  "JournalistRegistrationEmailVerificationMutation",
  ["CometRelay", "JournalistRegistrationEmailVerificationMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("JournalistRegistrationEmailVerificationMutation.graphql"));
    function a(a, b, c) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function (a, b) {
          c.onCompleted(a);
        },
        onError: c.onError,
        variables: { input: { confirmation_code: b } },
      });
    }
    g.verifyConfirmationCode = a;
  },
  98
);
__d(
  "JournalistRegistrationUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    function a(a) {
      return g.test(a);
    }
    f.isSyntacticallyValidEmail = a;
  },
  66
);
__d(
  "JournalistRegistrationEmailVerification.react",
  [
    "CometFormTextInput.react",
    "CometRelay",
    "JournalistRegistrationDivider.react",
    "JournalistRegistrationEmailSubmissionMutation",
    "JournalistRegistrationEmailVerificationMutation",
    "JournalistRegistrationStrings",
    "JournalistRegistrationUtils",
    "TetraButton.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function j(a) {
      return /^\d+$/.test(a);
    }
    function a(a) {
      var b = i(""),
        e = b[0];
      b = b[1];
      var f = i(null),
        g = f[0],
        k = f[1];
      f = i(!1);
      var l = f[0],
        m = f[1];
      f = i(!1);
      var n = f[0],
        o = f[1];
      f = i("");
      var p = f[0],
        q = f[1];
      f = i(!1);
      var r = f[0],
        s = f[1];
      f = i(null);
      var t = f[0],
        u = f[1],
        v = d("CometRelay").useRelayEnvironment();
      return h.jsxs("div", {
        className: "btwxx1t3 j83agx80",
        children: [
          h.jsx("div", {
            className: "foejyqcu dati1w0a",
            children: h.jsx(c("TetraText.react"), {
              type: "headlineEmphasized3",
              children: d("JournalistRegistrationStrings")
                .JournalistRegistrationStrings.NEWS_ORGANIZATION_SECTION_TITLE,
            }),
          }),
          h.jsxs("div", {
            className: "fbgwweev cbu4d94t j83agx80",
            children: [
              h.jsx(c("TetraTextPairing.react"), {
                headline: h.jsx("div", {
                  className: "nc684nl6",
                  children: d("JournalistRegistrationStrings")
                    .JournalistRegistrationStrings.NEWS_ORGANIZATION_PROMPT,
                }),
                level: 4,
              }),
              h.jsx("div", {
                className: "eq70wtua aov4n071",
                children: h.jsx(c("TetraText.react"), {
                  type: "meta4",
                  children: d("JournalistRegistrationStrings")
                    .JournalistRegistrationStrings
                    .NEWS_ORGANIZATION_EXPLANATION,
                }),
              }),
              h.jsxs("div", {
                className: "k4urcfbm n1l5q3vz btwxx1t3 j83agx80",
                children: [
                  h.jsx("div", {
                    className: "n99xedck",
                    children: h.jsx(c("CometFormTextInput.react"), {
                      label: d("JournalistRegistrationStrings")
                        .JournalistRegistrationStrings.EMAIL_INPUT_PLACEHOLDER,
                      onValueChange: b,
                      validationState: (function () {
                        return n ? "LOADING" : g === !0 ? "CORRECT" : null;
                      })(),
                      value: e,
                    }),
                  }),
                  h.jsx("div", {
                    className: "myj7ivm5 km676qkl ozuftl9m",
                    children: h.jsx(c("TetraButton.react"), {
                      disabled: !d(
                        "JournalistRegistrationUtils"
                      ).isSyntacticallyValidEmail(e),
                      label: d("JournalistRegistrationStrings")
                        .JournalistRegistrationStrings.SUBMIT_BUTTON_LABEL,
                      onPress: function () {
                        o(!0),
                          d(
                            "JournalistRegistrationEmailSubmissionMutation"
                          ).submitEmailAddress(v, e, {
                            onCompleted: function (b) {
                              o(!1);
                              m(!1);
                              b =
                                (b = b.submit_email_address) == null
                                  ? void 0
                                  : b.email_associated_with_npi;
                              k(b);
                              b === !1 && a.enableCredentialsSection();
                            },
                            onError: function () {
                              o(!1), m(!0);
                            },
                          });
                      },
                      type: "secondary",
                    }),
                  }),
                ],
              }),
              h.jsx("div", {
                className: "n99xedck n1l5q3vz",
                children: h.jsx(c("TetraText.react"), {
                  type: "body3",
                  children: (function () {
                    if (l)
                      return d("JournalistRegistrationStrings")
                        .JournalistRegistrationStrings.ERROR_MESSAGE;
                    switch (g) {
                      case !1:
                        return d("JournalistRegistrationStrings")
                          .JournalistRegistrationStrings
                          .EMAIL_DOMAIN_NOT_ASSOCIATED_WITH_NPI_MESSAGE;
                      case !0:
                        return "";
                      default:
                        return "";
                    }
                  })(),
                }),
              }),
              g === !0
                ? h.jsxs("div", {
                    className: "tr9rh885",
                    children: [
                      h.jsx(c("JournalistRegistrationDivider.react"), {}),
                      h.jsx(c("TetraText.react"), {
                        type: "headlineEmphasized4",
                        children: d("JournalistRegistrationStrings")
                          .JournalistRegistrationStrings
                          .EMAIL_VERIFICATION_TITLE,
                      }),
                      h.jsx("div", {
                        className: "eq70wtua aov4n071",
                        children: h.jsx(c("TetraText.react"), {
                          type: "meta4",
                          children: d("JournalistRegistrationStrings")
                            .JournalistRegistrationStrings
                            .EMAIL_VERIFICATION_INSTRUCTION,
                        }),
                      }),
                      h.jsx("div", {
                        className: "k4urcfbm n1l5q3vz btwxx1t3 j83agx80",
                        children: h.jsx("div", {
                          className: "n99xedck",
                          children: h.jsx(c("CometFormTextInput.react"), {
                            label: d("JournalistRegistrationStrings")
                              .JournalistRegistrationStrings
                              .VERIFICATION_CODE_INPUT_LABEL,
                            maxLength: 6,
                            onValueChange: function (b) {
                              j(b) &&
                                (q(b),
                                u(null),
                                b.length === 6 &&
                                  (s(!0),
                                  d(
                                    "JournalistRegistrationEmailVerificationMutation"
                                  ).verifyConfirmationCode(v, b, {
                                    onCompleted: function (b) {
                                      s(!1);
                                      b =
                                        (b = b.verify_confirmation_code) == null
                                          ? void 0
                                          : b.code_is_verified;
                                      b == null
                                        ? u(!1)
                                        : (u(b),
                                          b === !0 &&
                                            a.enableCredentialsSection());
                                    },
                                    onError: function () {
                                      s(!1), u(!1);
                                    },
                                  })));
                            },
                            validationState: (function () {
                              if (r) return "LOADING";
                              switch (t) {
                                case !0:
                                  return "CORRECT";
                                case !1:
                                  return "ERROR";
                                default:
                                  return null;
                              }
                            })(),
                            value: p,
                          }),
                        }),
                      }),
                      h.jsx("div", {
                        className: "n99xedck n1l5q3vz",
                        children: h.jsx(c("TetraText.react"), {
                          type: "body3",
                          children:
                            t === !0
                              ? d("JournalistRegistrationStrings")
                                  .JournalistRegistrationStrings
                                  .EMAIL_VERIFIED_MESSAGE
                              : "",
                        }),
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
  "NewsPersonIndexIndustryRole",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      REPORTER: "Reporter",
      WRITER: "Writer",
      EDITOR: "Editor",
      COLUMNIST: "Columnist",
      COMMENTATOR: "Commentator",
      PRODUCER: "Producer",
      RADIO_TV_ANNOUNCER: "Radio/TV Announcer",
      PHOTOGRAPHER: "Photographer",
      CAMERAPERSON: "Cameraperson",
      PODCASTER: "Podcaster",
      FILM_VIDEO_EDITOR: "Film/Video Editor",
      BLOGGER: "Blogger",
      AUDIO_VIDEO_TECHNICIAN: "Audio/Video Technician",
      SOUND_ENGINEER: "Sound Engineer",
      OTHER: "Other",
    });
    f["default"] = a;
  },
  66
);
__d(
  "JournalistRegistrationIndustryRolesSection.react",
  [
    "CometCheckbox.react",
    "CometResponsiveColumns.react",
    "JournalistRegistrationStrings",
    "NewsPersonIndexIndustryRole",
    "TetraText.react",
    "TetraTextPairing.react",
    "objectValues",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 8;
    function j(a, b) {
      var e = c("objectValues")(c("NewsPersonIndexIndustryRole"));
      e = [e.slice(0, i), e.slice(i, e.length)];
      var f = e[0];
      e = e[1];
      var g = function (e, f) {
        return h.jsx(
          c("CometCheckbox.react"),
          {
            checked: b.has(e),
            label: d("JournalistRegistrationStrings").getFbtForIndustryRole(e),
            name: "checkbox",
            onChange: function () {
              a(e);
            },
            value: "checkbox_" + e,
          },
          f
        );
      };
      return h.jsx("div", {
        className: "n1l5q3vz",
        children: h.jsxs(d("CometResponsiveColumns.react").Container, {
          children: [
            h.jsx(d("CometResponsiveColumns.react").Column, {
              children: f.map(function (a, b) {
                return g(a, b);
              }),
            }),
            h.jsx(d("CometResponsiveColumns.react").Column, {
              children: e.map(function (a, b) {
                return g(a, b);
              }),
            }),
          ],
        }),
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function a(a) {
      return h.jsxs("div", {
        className: "btwxx1t3 j83agx80",
        children: [
          h.jsx("div", {
            className: "foejyqcu dati1w0a",
            children: h.jsx(c("TetraTextPairing.react"), {
              headline: h.jsx("div", {
                className: "nc684nl6",
                children: d("JournalistRegistrationStrings")
                  .JournalistRegistrationStrings.INDUSTRY_ROLES_SECTION_TITLE,
              }),
              level: 3,
            }),
          }),
          h.jsxs("div", {
            className: "fbgwweev",
            children: [
              h.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: d("JournalistRegistrationStrings")
                  .JournalistRegistrationStrings.INDUSTRY_ROLES_PROMPT,
              }),
              h.jsx("div", {
                className: "aov4n071",
                children: h.jsx(c("TetraText.react"), {
                  type: "meta4",
                  children: d("JournalistRegistrationStrings")
                    .JournalistRegistrationStrings
                    .INDUSTRY_ROLES_SELECTION_EXPLANATION,
                }),
              }),
              h.jsx("div", {
                styles: "tr9rh885",
                children: j(a.addOrRemoveIndustryRole, a.selectedIndustryRoles),
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
  "JournalistRegistrationInfoCard.react",
  ["TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.desc;
      a = a.header;
      return h.jsxs("div", {
        children: [
          h.jsx("div", {
            className:
              "tw6a2znq f10w8fjw d1544ag0 pybr56ya n1l5q3vz ozuftl9m tvfksri0 mrjvor2e jinzq4gt pw54ja7n ue3kfks5 g6srhlxm",
            children: h.jsx(c("TetraText.react"), {
              type: "headlineEmphasized3",
              children: a,
            }),
          }),
          h.jsx("div", {
            className:
              "tw6a2znq f10w8fjw d1544ag0 pybr56ya ozuftl9m tvfksri0 jcgfde61 afxsp9o4 ed0hlay0 frvqaej8 mk2mc5f4 s44p3ltw ccm00jje goun2846 l82x9zwi uo3d90p7 h905i5nu monazrh9 rbyq7rg5 nalm63nx i2z0utgf est2fu8x cwj9ozl2",
            children: b,
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
  "JournalistRegistrationInstagramAccountView.react",
  ["CometImageIcon_DEPRECATED.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs("div", {
        className: "btwxx1t3 j83agx80",
        children: [
          h.jsx("div", {
            className: "nt3nj8gj",
            children: h.jsx(c("CometImageIcon_DEPRECATED.react"), {
              size: 48,
              src: a.profilePictureURI,
              style: "circle",
            }),
          }),
          h.jsx("div", {
            className: "t6nst519 bi6gxh9e aov4n071 t7yuvbsa cbu4d94t j83agx80",
            children: h.jsx("div", {
              className: "myj7ivm5 km676qkl btwxx1t3 j83agx80",
              children: h.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: "@" + a.username,
              }),
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
  "JournalistRegistrationNUX.react",
  [
    "ix",
    "CometCard.react",
    "CometImage.react",
    "CometRelay",
    "JournalistRegistrationNUX_nux.graphql",
    "JournalistRegistrationStrings",
    "TetraCircleButton.react",
    "TetraText.react",
    "fbicon",
    "react",
    "useNUXHelpers",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("JournalistRegistrationNUX_nux.graphql")),
        a.nux
      );
      a = c("useNUXHelpers")(a);
      var e = a[0];
      a = a[1];
      return e
        ? j.jsx(c("CometCard.react"), {
            children: j.jsx("div", {
              className: "d23ldmr1 bn9y4plq",
              children: j.jsxs("div", {
                className: "i1fnvgqd j83agx80",
                children: [
                  j.jsxs("div", {
                    className: "jifvfom9 j83agx80 n5ue3fu6",
                    children: [
                      j.jsx("div", {
                        className: "pybr56ya tw6a2znq",
                        children: j.jsx(c("CometImage.react"), {
                          alt: "New user experience icon",
                          src: h("388024"),
                          width: 180,
                        }),
                      }),
                      j.jsxs("div", {
                        className: "fwmrzyh3 taijpn5t cbu4d94t j83agx80",
                        children: [
                          j.jsx(c("TetraText.react"), {
                            color: "white",
                            numberOfLines: 1,
                            type: "headlineEmphasized3",
                            children: d("JournalistRegistrationStrings")
                              .JournalistRegistrationStrings.NUX_TITLE,
                          }),
                          j.jsx("div", {
                            className: "aov4n071",
                            children: j.jsx(c("TetraText.react"), {
                              color: "white",
                              type: "body3",
                              children: d("JournalistRegistrationStrings")
                                .JournalistRegistrationStrings.NUX_SUBTITLE,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  j.jsx("div", {
                    className: "aahdfvyu cgat1ltu",
                    children: j.jsx(c("TetraCircleButton.react"), {
                      icon: d("fbicon")._(h("478231"), 12),
                      label: "Close Nux",
                      onPress: a,
                      size: 24,
                      type: "deemphasized-overlay",
                    }),
                  }),
                ],
              }),
            }),
          })
        : j.jsx(j.Fragment, {});
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "JournalistRegistrationPostRegistrationBenefitsCard.react",
  [
    "ix",
    "CometTintedIcon.react",
    "JournalistRegistrationDivider.react",
    "JournalistRegistrationStrings",
    "TetraText.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = "fds-primary-icon";
    function k(a) {
      return i.jsxs("div", {
        className: "w0hvl6rk qjjbsfad btwxx1t3 j83agx80",
        children: [
          a.icon,
          i.jsx("div", {
            className: "aahdfvyu dhix69tm",
            children: i.jsx(c("TetraTextPairing.react"), {
              body: i.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: a.headlineText,
              }),
              level: 1,
            }),
          }),
        ],
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l() {
      return i.jsx(k, {
        headlineText: d("JournalistRegistrationStrings")
          .JournalistRegistrationStrings.SAFETY_AND_PROTECTION_FOR_IG_TITLE,
        icon: i.jsx(c("CometTintedIcon.react"), {
          color: j,
          icon: d("fbicon")._(h("671882"), 24),
        }),
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m() {
      return i.jsx(k, {
        headlineText: d("JournalistRegistrationStrings")
          .JournalistRegistrationStrings.FEATURE_UPDATES_TITLE,
        icon: i.jsx(c("CometTintedIcon.react"), {
          color: j,
          icon: d("fbicon")._(h("515025"), 24),
        }),
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a() {
      return i.jsxs("div", {
        className: "cwj9ozl2",
        children: [
          i.jsx(m, {}),
          i.jsx(c("JournalistRegistrationDivider.react"), {}),
          i.jsx(l, {}),
          i.jsx(c("JournalistRegistrationDivider.react"), {}),
          i.jsxs("div", {
            className: "w0hvl6rk qjjbsfad btwxx1t3 j83agx80",
            children: [
              i.jsx(c("CometTintedIcon.react"), {
                color: j,
                icon: d("fbicon")._(h("679303"), 24),
              }),
              i.jsxs("div", {
                className: "aahdfvyu dhix69tm",
                children: [
                  i.jsx(c("TetraTextPairing.react"), {
                    body: i.jsx(c("TetraText.react"), {
                      type: "headlineEmphasized4",
                      children: d("JournalistRegistrationStrings")
                        .JournalistRegistrationStrings.CROWDTANGLE_SEARCH_TITLE,
                    }),
                    level: 1,
                  }),
                  i.jsx("div", {
                    className: "qjjbsfad",
                    children: i.jsx(c("TetraTextPairing.react"), {
                      body: i.jsx(c("TetraText.react"), {
                        type: "body4",
                        children: d("JournalistRegistrationStrings")
                          .JournalistRegistrationStrings
                          .CROWDTANGLE_SEARCH_ACCESS,
                      }),
                      level: 4,
                      reduceEmphasis: !0,
                    }),
                  }),
                  i.jsx("div", {
                    className: "qjjbsfad",
                    children: i.jsx(c("TetraTextPairing.react"), {
                      body: i.jsx(c("TetraText.react"), {
                        type: "body4",
                        children: d("JournalistRegistrationStrings")
                          .JournalistRegistrationStrings
                          .CROWDTANGLE_SEARCH_CONTACT,
                      }),
                      level: 4,
                      reduceEmphasis: !0,
                    }),
                  }),
                ],
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
  "JournalistRegistrationPostRegistrationCredentials.react",
  [
    "CometLink.react",
    "CometRelay",
    "JournalistRegistrationBusinessInfoView.react",
    "JournalistRegistrationDivider.react",
    "JournalistRegistrationPostRegistrationCredentials_credentials.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "JournalistRegistrationPostRegistrationCredentials_credentials.graphql"
            )),
        a.credentials
      );
      a = a.submitted_links_with_businesses;
      var e = {};
      a.forEach(function (a) {
        var b,
          c = a.associated_business;
        a = (a = a.url) != null ? a : "";
        var d = c == null ? void 0 : c.id,
          f = c == null ? void 0 : c.name;
        if (d == null || f == null) return;
        if (d in e) {
          e[d].urls.push(a);
          return;
        }
        var g = c == null ? void 0 : c.primary_page,
          h = g == null ? void 0 : g.name;
        b = g == null ? void 0 : (b = g.page_logo) == null ? void 0 : b.uri;
        g = g == null ? void 0 : g.page_vanity_url;
        c =
          (c == null ? void 0 : c.business_verification_status) === "verified";
        c = {
          businessIsVerified: c,
          businessName: f,
          pageLogoURI: b,
          pageName: h,
          pageURL: g,
        };
        e[d] = { businessData: c, urls: [a] };
      });
      var f = Object.keys(e).length;
      return i.jsx("div", {
        className: "d46ut3hm n851cfcs n1l5q3vz cbu4d94t j83agx80 cwj9ozl2",
        children: Object.keys(e).map(function (a, b) {
          a = e[a];
          var d = a.businessData;
          a = a.urls;
          var g = a.length;
          return i.jsxs(
            "div",
            {
              children: [
                i.jsxs("div", {
                  className: "btwxx1t3 j83agx80",
                  children: [
                    i.jsx("div", {
                      className: "m38g9o4q myj7ivm5 km676qkl btwxx1t3 j83agx80",
                      children: i.jsx(
                        c("JournalistRegistrationBusinessInfoView.react"),
                        { businessData: d }
                      ),
                    }),
                    i.jsx("div", {
                      className: "r1eg49ei t7yuvbsa cbu4d94t j83agx80",
                      children: a.map(function (a, b) {
                        return i.jsxs(
                          "div",
                          {
                            className: "myj7ivm5 km676qkl",
                            children: [
                              i.jsx(c("CometLink.react"), {
                                color: "highlight",
                                href: a,
                                target: "_blank",
                                children: a,
                              }),
                              b !== g - 1 &&
                                i.jsx(
                                  c("JournalistRegistrationDivider.react"),
                                  {}
                                ),
                            ],
                          },
                          b
                        );
                      }),
                    }),
                  ],
                }),
                b !== f - 1 &&
                  i.jsx(c("JournalistRegistrationDivider.react"), {}),
              ],
            },
            b
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
  "JournalistRegistrationOptOutMutation",
  ["CometRelay", "JournalistRegistrationOptOutMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("JournalistRegistrationOptOutMutation.graphql"));
    function a(a, b) {
      var c = "PRODUCTION";
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function (a, c) {
          b.onCompleted(a);
        },
        onError: b.onError,
        variables: { input: { environment: c } },
      });
    }
    g.optOutJournalistRegistration = a;
  },
  98
);
__d(
  "JournalistRegistrationPostRegistrationFooter.react",
  [
    "CometContextRowLink.react",
    "CometRelay",
    "JSResourceForInteraction",
    "JournalistRegistrationOptOutMutation",
    "JournalistRegistrationStrings",
    "TetraText.react",
    "TetraTextPairing.react",
    "react",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("JSResourceForInteraction")(
        "JournalistRegistrationPostRegistrationRemovalConfirmation.react"
      ).__setRef("JournalistRegistrationPostRegistrationFooter.react");
    function a() {
      var a = d("CometRelay").useRelayEnvironment(),
        b = c("useCometLazyDialog")(i),
        e = b[0];
      return h.jsxs("div", {
        className: "ecm0bbzt osnr6wyh",
        children: [
          h.jsx("div", {
            className: "oud54xpy ku2m03ct ggphbty4",
            children: h.jsx(c("TetraTextPairing.react"), {
              body: h.jsxs(h.Fragment, {
                children: [
                  d("JournalistRegistrationStrings")
                    .JournalistRegistrationStrings.CHANGE_YOUR_MIND,
                  " ",
                  h.jsx(c("CometContextRowLink.react"), {
                    onPress: function () {
                      d(
                        "JournalistRegistrationOptOutMutation"
                      ).optOutJournalistRegistration(a, {
                        onCompleted: function (a) {
                          e({ isSuccessful: !0 }, function () {});
                        },
                        onError: function () {
                          e({ isSuccessful: !1 }, function () {});
                        },
                      });
                    },
                    children: h.jsx(c("TetraText.react"), {
                      color: "highlight",
                      type: "bodyLink4",
                      children: d("JournalistRegistrationStrings")
                        .JournalistRegistrationStrings.REMOVE_REGISTRATION,
                    }),
                  }),
                ],
              }),
              level: 4,
              reduceEmphasis: !0,
            }),
          }),
          h.jsx("div", {
            className: "oud54xpy ku2m03ct ggphbty4",
            children: h.jsx(c("TetraTextPairing.react"), {
              body: h.jsx(c("TetraText.react"), {
                type: "body4",
                children: d("JournalistRegistrationStrings")
                  .JournalistRegistrationStrings
                  .DATA_POLICY_AND_TERM_OF_SERVICE,
              }),
              level: 4,
              reduceEmphasis: !0,
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
  "JournalistRegistrationPostRegistrationInstagramAccountCard.react",
  [
    "CometRelay",
    "JournalistRegistrationDivider.react",
    "JournalistRegistrationInstagramAccountView.react",
    "JournalistRegistrationPostRegistrationInstagramAccountCard_accounts.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "JournalistRegistrationPostRegistrationInstagramAccountCard_accounts.graphql"
            )),
        a.accounts
      );
      a = a.selectedIGAccounts;
      var e = a.length;
      return i.jsxs("div", {
        className: "d46ut3hm n851cfcs n1l5q3vz btwxx1t3 j83agx80 cwj9ozl2",
        children: [
          i.jsx("div", {
            className: "pfqjqu37 btwxx1t3 j83agx80",
            children: a.map(function (a, b) {
              var d = a.profilePicture;
              a = a.username;
              d = (d = d == null ? void 0 : d.uri) != null ? d : "";
              return a == null
                ? null
                : i.jsxs(
                    "div",
                    {
                      children: [
                        i.jsx(
                          c("JournalistRegistrationInstagramAccountView.react"),
                          { profilePictureURI: d, username: a }
                        ),
                        b !== e - 1 &&
                          i.jsx(c("JournalistRegistrationDivider.react"), {}),
                      ],
                    },
                    b
                  );
            }),
          }),
          i.jsx("div", { className: "t1ll2xni cbu4d94t j83agx80" }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "JournalistRegistrationPostRegistration.react",
  [
    "CometRelay",
    "JournalistRegistrationDivider.react",
    "JournalistRegistrationInfoCard.react",
    "JournalistRegistrationPostRegistrationBenefitsCard.react",
    "JournalistRegistrationPostRegistrationCredentials.react",
    "JournalistRegistrationPostRegistrationFooter.react",
    "JournalistRegistrationPostRegistrationInstagramAccountCard.react",
    "JournalistRegistrationPostRegistration_query.graphql",
    "JournalistRegistrationStrings",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("JournalistRegistrationPostRegistration_query.graphql")),
        a.query
      );
      a = a.journalistRegistration;
      var e = a == null ? void 0 : a.isV2Registered,
        f = i.jsx("div", {
          children:
            e === !0
              ? i.jsx(
                  c("JournalistRegistrationPostRegistrationBenefitsCard.react"),
                  {}
                )
              : i.jsx(c("TetraText.react"), {
                  type: "body3",
                  children: d("JournalistRegistrationStrings")
                    .JournalistRegistrationStrings
                    .JOURNALIST_RESOURCES_ACCESS_DESCRIPTION,
                }),
        });
      e = i.jsx("div", {
        children:
          e === !0
            ? a != null &&
              i.jsx(
                c("JournalistRegistrationPostRegistrationCredentials.react"),
                { credentials: a }
              )
            : i.jsx(c("TetraText.react"), {
                type: "body3",
                children: d("JournalistRegistrationStrings")
                  .JournalistRegistrationStrings
                  .JOURNALIST_RESOURCES_CREDENTIALS_DESCRIPTION,
              }),
      });
      return i.jsx("div", {
        className: "k4urcfbm",
        children: i.jsxs("div", {
          className:
            "hy61f1kz pybr56ya f9o22wc5 myj7ivm5 ad2k81qe km676qkl hybvsw6c",
          children: [
            i.jsx("div", {
              className: "n851cfcs n1l5q3vz ozuftl9m",
              children: i.jsx(c("TetraText.react"), {
                type: "headlineEmphasized2",
                children: d("JournalistRegistrationStrings")
                  .JournalistRegistrationStrings.JOURNALIST_RESOURCES,
              }),
            }),
            i.jsx(c("JournalistRegistrationDivider.react"), {}),
            i.jsx(c("JournalistRegistrationInfoCard.react"), {
              desc: f,
              header: d("JournalistRegistrationStrings")
                .JournalistRegistrationStrings
                .JOURNALIST_RESOURCES_ACCESS_TITLE,
            }),
            i.jsx(c("JournalistRegistrationInfoCard.react"), {
              desc: e,
              header: d("JournalistRegistrationStrings")
                .JournalistRegistrationStrings
                .JOURNALIST_RESOURCES_CREDENTIALS_TITLE,
            }),
            a != null &&
              i.jsx(c("JournalistRegistrationInfoCard.react"), {
                desc: i.jsx(
                  c(
                    "JournalistRegistrationPostRegistrationInstagramAccountCard.react"
                  ),
                  { accounts: a }
                ),
                header: d("JournalistRegistrationStrings")
                  .JournalistRegistrationStrings
                  .JOURNALIST_RESOURCES_LINKED_IG_ACCOUNT_TITLE,
              }),
            i.jsx(c("JournalistRegistrationPostRegistrationFooter.react"), {}),
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
  "JournalistRegistrationSubmitApplicationMutation",
  [
    "CometRelay",
    "JournalistRegistrationSubmitApplicationMutation.graphql",
    "NewsPersonIndexIndustryRole",
    "getGraphQLEnumSafe",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("JournalistRegistrationSubmitApplicationMutation.graphql"));
    function a(a, b, e, f, g) {
      f = Array.from(f).map(function (a) {
        return (a = c("getGraphQLEnumSafe")(
          c("NewsPersonIndexIndustryRole"),
          a
        )) != null
          ? a
          : "OTHER";
      });
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function (a, b) {
          g.onCompleted(a);
        },
        onError: g.onError,
        variables: {
          input: {
            industry_roles: f,
            opt_in_for_blue_badge: e,
            selected_ig_account_ids: Array.from(b),
          },
        },
      });
    }
    g.submitApplication = a;
  },
  98
);
__d(
  "JournalistRegistrationPreSubmissionTool.react",
  [
    "CometProgressButtonIndeterminate.react",
    "CometRelay",
    "JSResourceForInteraction",
    "JournalistRegistrationAdditionalBenefitsSelection.react",
    "JournalistRegistrationBenefitsIntroduction.react",
    "JournalistRegistrationCredentials.react",
    "JournalistRegistrationDataDisclaimer.react",
    "JournalistRegistrationDivider.react",
    "JournalistRegistrationEmailVerification.react",
    "JournalistRegistrationIndustryRolesSection.react",
    "JournalistRegistrationNUX.react",
    "JournalistRegistrationPreSubmissionTool_query.graphql",
    "JournalistRegistrationStrings",
    "JournalistRegistrationSubmitApplicationMutation",
    "TetraButton.react",
    "TetraText.react",
    "react",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useState,
      k = c("JSResourceForInteraction")(
        "JournalistRegistrationSubmissionConfirmation.react"
      ).__setRef("JournalistRegistrationPreSubmissionTool.react"),
      l = 5;
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("JournalistRegistrationPreSubmissionTool_query.graphql")),
        a.query
      );
      var f = a.journalistRegistration,
        g = a.nux;
      a = a.viewer;
      f = f == null ? void 0 : f.isRegisteredV1;
      e = j((e = f) != null ? e : !1);
      var m = e[0],
        n = e[1];
      e = j(!1);
      var o = e[0];
      e = e[1];
      var p = function () {
          n(!0);
        },
        q = j(new Set()),
        r = q[0],
        s = q[1];
      q = j(new Set());
      var t = q[0],
        u = q[1];
      q = j(!1);
      var v = q[0],
        w = q[1];
      q = j(Array(l).fill(!1));
      var x = q[0],
        y = q[1];
      q = j(!1);
      var z = q[0],
        A = q[1];
      q = j(!1);
      var B = q[0],
        C = q[1];
      q = function (a) {
        var b = new Set(r);
        b.has(a) ? b["delete"](a) : b.add(a);
        s(b);
      };
      var D = function (a) {
          var b = new Set(t);
          b.has(a) ? b["delete"](a) : b.add(a);
          u(b);
        },
        E = function (a) {
          w(a);
        },
        F = function (a) {
          return r.has(a);
        },
        G = j(!1),
        H = G[0];
      G = G[1];
      v =
        (x.every(function (a) {
          return a === !0;
        }) ||
          v) &&
        (f === !0 || t.size > 0) &&
        !B;
      B = function (a, b) {
        if (b < 0 || b > l - 1) return;
        var c = x.slice();
        c[b] = a;
        y(c);
      };
      var I = c("useCometLazyDialog")(k),
        J = I[0],
        K = d("CometRelay").useRelayEnvironment();
      return i.jsx("div", {
        className: "k4urcfbm",
        children: i.jsxs("div", {
          className:
            "hy61f1kz pybr56ya f9o22wc5 myj7ivm5 ad2k81qe km676qkl hybvsw6c",
          children: [
            g && i.jsx(c("JournalistRegistrationNUX.react"), { nux: g }),
            i.jsxs("div", {
              className: "n1l5q3vz h676nmdw",
              children: [
                i.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized1",
                  children: d("JournalistRegistrationStrings")
                    .JournalistRegistrationStrings.PROJECT_NAME,
                }),
                i.jsx(c("JournalistRegistrationDivider.react"), {}),
                i.jsx(
                  d("JournalistRegistrationBenefitsIntroduction.react")
                    .JournalistRegistrationBenefitsIntroduction,
                  {}
                ),
                i.jsx(c("JournalistRegistrationDivider.react"), {}),
                i.jsx(c("JournalistRegistrationDataDisclaimer.react"), {}),
                i.jsx(c("JournalistRegistrationDivider.react"), {}),
                i.jsxs("div", {
                  children: [
                    f !== !0
                      ? i.jsxs(i.Fragment, {
                          children: [
                            i.jsx(
                              c(
                                "JournalistRegistrationIndustryRolesSection.react"
                              ),
                              {
                                addOrRemoveIndustryRole: D,
                                selectedIndustryRoles: t,
                              }
                            ),
                            i.jsx(c("JournalistRegistrationDivider.react"), {}),
                          ],
                        })
                      : null,
                    f !== !0
                      ? i.jsxs(i.Fragment, {
                          children: [
                            i.jsx(
                              c(
                                "JournalistRegistrationEmailVerification.react"
                              ),
                              { enableCredentialsSection: p }
                            ),
                            i.jsx(c("JournalistRegistrationDivider.react"), {}),
                          ],
                        })
                      : null,
                    i.jsx(c("JournalistRegistrationCredentials.react"), {
                      credentialsEnabled: m,
                      markStaffDirectoryAssociationStatus: E,
                      numArticleLinks: l,
                      setArticleLinkAssociatedAtIndex: B,
                    }),
                    i.jsx(c("JournalistRegistrationDivider.react"), {}),
                    m &&
                      i.jsxs(i.Fragment, {
                        children: [
                          i.jsx(
                            c(
                              "JournalistRegistrationAdditionalBenefitsSelection.react"
                            ),
                            {
                              addOrRemoveIGAccountID: q,
                              isAccountSelected: F,
                              linkedIGAccounts: a,
                              optInForBlueBadge: o,
                              optInForIGAccountProtection: H,
                              setOptInForBlueBadge: e,
                              setOptInForIGAccountProtection: G,
                            }
                          ),
                          i.jsx(c("JournalistRegistrationDivider.react"), {}),
                        ],
                      }),
                  ],
                }),
                i.jsx("div", {
                  children: i.jsx("div", {
                    className: "k6hq67h2 ihqw7lf3 f9o22wc5 ad2k81qe",
                    children: z
                      ? i.jsx(c("CometProgressButtonIndeterminate.react"), {
                          label: d("JournalistRegistrationStrings")
                            .JournalistRegistrationStrings.SUBMIT_BUTTON_LABEL,
                        })
                      : i.jsx(c("TetraButton.react"), {
                          disabled: !v,
                          label: d("JournalistRegistrationStrings")
                            .JournalistRegistrationStrings.SUBMIT_BUTTON_LABEL,
                          onPress: function () {
                            A(!0),
                              d(
                                "JournalistRegistrationSubmitApplicationMutation"
                              ).submitApplication(K, H ? r : new Set(), o, t, {
                                onCompleted: function (a) {
                                  A(!1);
                                  a =
                                    (a =
                                      a.journalist_registration_submit_application) ==
                                    null
                                      ? void 0
                                      : a.exception;
                                  a = a === "NULL";
                                  a && C(!0);
                                  J({ isSuccessful: a }, function () {});
                                },
                                onError: function () {
                                  A(!1),
                                    J({ isSuccessful: !1 }, function () {});
                                },
                              });
                          },
                        }),
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
  "JournalistRegistrationRoot.react",
  [
    "CometRelay",
    "CometRelayEnvironmentProvider",
    "JournalistRegistrationPostRegistration.react",
    "JournalistRegistrationPreSubmissionTool.react",
    "JournalistRegistrationRootQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e;
      a = a.queries.journalistRegistrationRootQueryRef;
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0 ? h : (h = b("JournalistRegistrationRootQuery.graphql")),
        a
      );
      e = (e = a.journalistRegistration) == null ? void 0 : e.hasReviewJobs;
      return i.jsx(c("CometRelayEnvironmentProvider"), {
        children:
          e === !0
            ? i.jsx(c("JournalistRegistrationPostRegistration.react"), {
                query: a,
              })
            : i.jsx(c("JournalistRegistrationPreSubmissionTool.react"), {
                query: a,
              }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
