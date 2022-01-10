if (self.CavalryLogger) {
  CavalryLogger.start_js(["2PMO052"]);
}

__d(
  "GroupsCometPresenceGroupShownInGroupsTabLogger_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometPresenceGroupShownInGroupsTabLogger_group",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGroupsCometIsProfileDelegateGroup_group",
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
  "useGroupsCometIsProfileDelegateGroup_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useGroupsCometIsProfileDelegateGroup_group",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "GroupNavigationInfo",
          kind: "LinkedField",
          name: "navigation_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "destination",
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
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CommunityPresenceModulePresenceGroupShownInGroupsTabQPLEvent",
  ["cr:8987"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:8987");
  },
  98
);
__d(
  "useGroupsCometIsProfileDelegateGroup",
  ["CometRelay", "useGroupsCometIsProfileDelegateGroup_group.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = a.group$key;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useGroupsCometIsProfileDelegateGroup_group.graphql")),
        a
      );
      return (
        ((a = a.navigation_info) == null
          ? void 0
          : (a = a.destination) == null
          ? void 0
          : a.__typename) === "User"
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometPresenceGroupShownInGroupsTabLogger.react",
  [
    "CometRelay",
    "CommunityPresenceModulePresenceGroupShownInGroupsTabQPLEvent",
    "GroupsCometPresenceGroupShownInGroupsTabLogger_group.graphql",
    "QuickPerformanceLogger",
    "react",
    "useCurrentRoute",
    "useGroupsCometIsProfileDelegateGroup",
    "useRouteReferrer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useEffect,
      j = e.useRef;
    function a(a) {
      a = a.group$key;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "GroupsCometPresenceGroupShownInGroupsTabLogger_group.graphql"
            )),
        a
      );
      var e = j(!1),
        f = c("useRouteReferrer")(),
        g = c("useCurrentRoute")(),
        k = c("useGroupsCometIsProfileDelegateGroup")({ group$key: a });
      i(function () {
        if (!k) return;
        if (e.current === !1) {
          var a;
          e.current = !0;
          a = {
            string: {
              entity_key_entity_type:
                g == null
                  ? void 0
                  : (a = g.entityKeyConfig) == null
                  ? void 0
                  : (a = a.entity_type) == null
                  ? void 0
                  : a.value,
              entity_key_section:
                g == null
                  ? void 0
                  : (a = g.entityKeyConfig) == null
                  ? void 0
                  : (a = a.section) == null
                  ? void 0
                  : a.value,
              is_initial_page_load: String(
                (f == null ? void 0 : f.actorID) === void 0
              ),
              referrer_navigation_type: f == null ? void 0 : f.navigationType,
              referrer_trace_policy: f == null ? void 0 : f.tracePolicy,
              route_type: g == null ? void 0 : g.type,
              route_url: g == null ? void 0 : g.url,
            },
          };
          c("QuickPerformanceLogger").markerStart(
            c("CommunityPresenceModulePresenceGroupShownInGroupsTabQPLEvent")
          );
          c("QuickPerformanceLogger").markerAnnotate(
            c("CommunityPresenceModulePresenceGroupShownInGroupsTabQPLEvent"),
            a
          );
          c("QuickPerformanceLogger").markerEnd(
            c("CommunityPresenceModulePresenceGroupShownInGroupsTabQPLEvent"),
            2
          );
        }
      }, []);
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CrisisClickUnitFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743531");
    c = b("FalcoLoggerInternal").create("crisis_click_unit", a);
    e.exports = c;
  },
  null
);
__d(
  "CrisisToolViewPageFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743532");
    c = b("FalcoLoggerInternal").create("crisis_tool_view_page", a);
    e.exports = c;
  },
  null
);
__d(
  "CrisisViewModuleFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743533");
    c = b("FalcoLoggerInternal").create("crisis_view_module", a);
    e.exports = c;
  },
  null
);
__d(
  "CrisisViewUnitFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743534");
    c = b("FalcoLoggerInternal").create("crisis_view_unit", a);
    e.exports = c;
  },
  null
);
__d(
  "GroupsTabCometEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1814360");
    c = b("FalcoLoggerInternal").create("groups_tab_comet_event", a);
    e.exports = c;
  },
  null
);
__d(
  "CommunityPresenceModulePresenceGroupShownInGroupsTabQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(759373195);
    g["default"] = a;
  },
  98
);
