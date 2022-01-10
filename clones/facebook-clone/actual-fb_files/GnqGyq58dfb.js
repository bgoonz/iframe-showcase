if (self.CavalryLogger) {
  CavalryLogger.start_js(["J8kjS7R"]);
}

__d(
  "useSearchCometFilterTypeaheadBootstrapDataSourceQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "first" }],
        b = [{ kind: "Variable", name: "first", variableName: "first" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = {
          kind: "InlineFragment",
          selections: [
            c,
            {
              alias: null,
              args: [
                { kind: "Literal", name: "height", value: 72 },
                { kind: "Literal", name: "width", value: 72 },
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
              storageKey: "profile_picture(height:72,width:72)",
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
          ],
          type: "Actor",
          abstractKey: "__isActor",
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useSearchCometFilterTypeaheadBootstrapDataSourceQuery",
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
                  concreteType: "BootstrapResultsConnection",
                  kind: "LinkedField",
                  name: "bootstrap_entities",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "BootstrapResultsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "BootstrapResult",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "searchable",
                              plural: !1,
                              selections: [
                                {
                                  kind: "InlineDataFragmentSpread",
                                  name: "getSearchCometFilterTypeaheadEntity_actor",
                                  selections: [d],
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useSearchCometFilterTypeaheadBootstrapDataSourceQuery",
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
                  concreteType: "BootstrapResultsConnection",
                  kind: "LinkedField",
                  name: "bootstrap_entities",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "BootstrapResultsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "BootstrapResult",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "searchable",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "__typename",
                                  storageKey: null,
                                },
                                d,
                                {
                                  kind: "InlineFragment",
                                  selections: [c],
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
          id: "4322900554429427",
          metadata: {},
          name: "useSearchCometFilterTypeaheadBootstrapDataSourceQuery",
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
  "useSearchCometFilterTypeaheadTypedDataSourceQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "filterID" },
          { defaultValue: null, kind: "LocalArgument", name: "query" },
        ],
        b = [{ kind: "Variable", name: "id", variableName: "filterID" }],
        c = [
          { kind: "Variable", name: "first", variableName: "count" },
          { kind: "Variable", name: "named", variableName: "query" },
        ],
        d = {
          alias: "filterValue",
          args: null,
          kind: "ScalarField",
          name: "value",
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
          args: [
            { kind: "Literal", name: "height", value: 72 },
            { kind: "Literal", name: "width", value: 72 },
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
          storageKey: "profile_picture(height:72,width:72)",
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useSearchCometFilterTypeaheadTypedDataSourceQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: c,
                      concreteType: "GraphSearchQueryFilterValuesConnection",
                      kind: "LinkedField",
                      name: "filter_values",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "GraphSearchQueryFilterValuesEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "GraphSearchQueryFilterValue",
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
                                  name: "value_object",
                                  plural: !1,
                                  selections: [
                                    {
                                      kind: "InlineDataFragmentSpread",
                                      name: "getSearchCometFilterTypeaheadEntity_actor",
                                      selections: [
                                        {
                                          kind: "InlineFragment",
                                          selections: [e, f, g],
                                          type: "Actor",
                                          abstractKey: "__isActor",
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
                      storageKey: null,
                    },
                  ],
                  type: "GraphSearchQueryFilter",
                  abstractKey: null,
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
          name: "useSearchCometFilterTypeaheadTypedDataSourceQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                h,
                e,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: c,
                      concreteType: "GraphSearchQueryFilterValuesConnection",
                      kind: "LinkedField",
                      name: "filter_values",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "GraphSearchQueryFilterValuesEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "GraphSearchQueryFilterValue",
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
                                  name: "value_object",
                                  plural: !1,
                                  selections: [
                                    h,
                                    e,
                                    {
                                      kind: "InlineFragment",
                                      selections: [f, g],
                                      type: "Actor",
                                      abstractKey: "__isActor",
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
                  type: "GraphSearchQueryFilter",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3864326977023760",
          metadata: {},
          name: "useSearchCometFilterTypeaheadTypedDataSourceQuery",
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
  "getSearchCometFilterTypeaheadEntity_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "getSearchCometFilterTypeaheadEntity_actor",
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometFilterTypeaheadTextOnlyViewItem.react",
  ["CometTypeaheadViewItem.react", "TetraText.react", "react"],
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
      return h.jsx(
        c("CometTypeaheadViewItem.react"),
        babelHelpers["extends"]({}, a, {
          entry: b,
          children: h.jsx("div", {
            className: "hzawbc8m hyh9befq cehpxlet rs0gx3tq",
            children: h.jsx(c("TetraText.react"), {
              numberOfLines: 1,
              type: "headline4",
              children: b.getLabel(),
            }),
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
  "SearchCometFilterTypeaheadTextWithPhotoViewItem.react",
  [
    "CometImageIcon_DEPRECATED.react",
    "CometTypeaheadViewItem.react",
    "TetraText.react",
    "react",
  ],
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
      var d = b.getRawData();
      d = d.photo;
      return h.jsx(
        c("CometTypeaheadViewItem.react"),
        babelHelpers["extends"]({}, a, {
          entry: b,
          children: h.jsx("div", {
            className: "i1fnvgqd btwxx1t3 j83agx80",
            children: h.jsxs("div", {
              className:
                "a8nywdso r8blr3vg rz4wbd8a jwdofwj8 stjgntxs ni8dbmo4 dumg13m2 jifvfom9 btwxx1t3 j83agx80",
              children: [
                h.jsx("div", {
                  className: "b3onmgus",
                  children:
                    d != null && d !== ""
                      ? h.jsx(c("CometImageIcon_DEPRECATED.react"), {
                          size: 36,
                          src: d,
                          style: "roundedRect",
                        })
                      : h.jsx(c("CometImageIcon_DEPRECATED.react"), {
                          size: 36,
                          src: "/images/tiles/typeahead_default.png",
                          style: "roundedRect",
                        }),
                }),
                h.jsx("div", {
                  className: "ni8dbmo4 kwzhilbh cbu4d94t j83agx80",
                  children: h.jsx("div", {
                    className: "hzawbc8m tw6a2znq",
                    children: h.jsx(c("TetraText.react"), {
                      numberOfLines: 1,
                      type: "body3",
                      children: b.getLabel(),
                    }),
                  }),
                }),
              ],
            }),
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
  "SearchCometFilterTypeaheadViewItem.react",
  [
    "SearchCometFilterTypeaheadTextOnlyViewItem.react",
    "SearchCometFilterTypeaheadTextWithPhotoViewItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.entry;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
      var d = b.getRawData();
      d = d.photo;
      return d != null
        ? h.jsx(
            c("SearchCometFilterTypeaheadTextWithPhotoViewItem.react"),
            babelHelpers["extends"]({}, a, { entry: b })
          )
        : h.jsx(
            c("SearchCometFilterTypeaheadTextOnlyViewItem.react"),
            babelHelpers["extends"]({}, a, { entry: b })
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometFilterTypeaheadViewStrategy.react",
  [
    "fbt",
    "CometTypeaheadProgressGlimmer.react",
    "CometTypeaheadViewEmptyState.react",
    "CometTypeaheadViewList.react",
    "SearchCometFilterTypeaheadViewItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.ariaProps,
        d = a.entries;
      a.extraViewProps;
      var e = a.highlightedEntry,
        f = a.isLoading;
      a.onAbandonTypeahead_DO_NOT_USE;
      var g = babelHelpers.objectWithoutPropertiesLoose(a, [
        "ariaProps",
        "entries",
        "extraViewProps",
        "highlightedEntry",
        "isLoading",
        "onAbandonTypeahead_DO_NOT_USE",
      ]);
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx("div", {
            className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
            "data-testid": void 0,
            children:
              d.length > 0
                ? i.jsx(c("CometTypeaheadViewList.react"), {
                    ariaProps: b,
                    entries: d,
                    highlightedEntry: e,
                    children: function (a) {
                      var b = a.entry,
                        d = a.isActive;
                      a = a.itemRole;
                      return i.createElement(
                        c("SearchCometFilterTypeaheadViewItem.react"),
                        babelHelpers["extends"]({}, g, {
                          entry: b,
                          isActive: d,
                          key: b.getKey(),
                          role: a,
                        })
                      );
                    },
                  })
                : i.jsx(c("CometTypeaheadViewEmptyState.react"), {
                    children: h._(
                      "We couldn't find anything for {query_string}",
                      [
                        h._param(
                          "query_string",
                          (a = g.queryString) != null ? a : ""
                        ),
                      ]
                    ),
                  }),
          }),
          f && i.jsx(c("CometTypeaheadProgressGlimmer.react"), {}),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPivotLinkSearchDropdownMenu.react",
  [
    "BaseTypeahead.react",
    "CometTypeaheadInputRoundedStrategy.react",
    "CometTypeaheadLayoutInlineStrategy.react",
    "SearchCometFilterTypeaheadViewStrategy.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        input: {
          paddingEnd: "hv4rvrfc",
          paddingStart: "dati1w0a",
          paddingTop: "discj3wi",
        },
        view: {
          backgroundColor: "cwj9ozl2",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          boxShadow: "o55z2nyb",
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
          width: "k4urcfbm",
        },
      };
    function a(a) {
      var b = a.dataSource,
        d = a.label,
        e = a.onFocus,
        f = a.onPressEntry,
        g = a.onQueryChange,
        j = a.placeholder;
      j = j === void 0 ? "" : j;
      a = a.queryString;
      return h.jsx(c("BaseTypeahead.react"), {
        dataSource: b,
        inputStrategyRenderer: c("CometTypeaheadInputRoundedStrategy.react"),
        label: d,
        layoutStrategyRenderer: c("CometTypeaheadLayoutInlineStrategy.react"),
        onChange: g,
        onFocus: e,
        onPressEntry: f,
        placeholder: j,
        queryString: a,
        shouldQueryStringUpdateFromSelectedEntryOnClick: !1,
        viewStrategyRenderer: c("SearchCometFilterTypeaheadViewStrategy.react"),
        xstyles: { inputXStyle: i.input, layoutXStyle: i.view },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPivotLinkWithSearchDropdown.react",
  [
    "fbt",
    "ix",
    "CometDeferredPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "TetraButton.react",
    "TetraIcon.react",
    "fbicon",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = c("requireDeferred")(
        "CometPivotLinkSearchDropdownMenu.react"
      ).__setRef("CometPivotLinkWithSearchDropdown.react");
    function a(a) {
      var b = a.dataSource,
        e = a.label,
        f = a.onClearButtonPress,
        g = a.onFocus,
        l = a.onPressEntry,
        m = a.onQueryChange,
        n = a.placeholder;
      n = n === void 0 ? "" : n;
      var o = a.queryString,
        p = a.selectedEntry;
      return j.jsx(c("CometDeferredPopoverTrigger.react"), {
        align: "middle",
        fallback: j.jsx(c("CometPopoverLoadingState.react"), {}),
        popoverProps: {
          dataSource: b,
          label: e,
          onFocus: g,
          onPressEntry: l,
          onQueryChange: m,
          placeholder: n,
          queryString: o,
        },
        popoverResource: k,
        position: "below",
        children: function (a, b, g, k, l, m, n, o) {
          g = p != null && p.name != null && p.name.length > 0;
          return j.jsx(c("TetraButton.react"), {
            addOnSecondary: g
              ? j.jsx(c("TetraIcon.react"), {
                  "aria-label": h._("Clear {buttonText}", [
                    h._param("buttonText", e),
                  ]),
                  color: "highlight",
                  icon: d("fbicon")._(i("491580"), 16),
                  onPress: f,
                })
              : j.jsx(c("TetraIcon.react"), {
                  color: o ? "highlight" : "secondary",
                  icon: d("fbicon")._(i("481882"), 16),
                }),
            "aria-label": e,
            "aria-pressed": o,
            label: g ? ((k = p == null ? void 0 : p.name) != null ? k : "") : e,
            onPress: b,
            reduceEmphasis: o || g,
            ref: a,
            type: o || g ? "primary" : "secondary",
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
  "SearchCometFilterTypeaheadBaseInputLabel.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      return j.jsx("div", {
        className: a.shouldBeHidden ? "mkhogb32" : "",
        children: j.jsxs(c("CometPressable.react"), {
          "aria-expanded": !1,
          "aria-haspopup": "listbox",
          display: "block",
          onPress: a.onPress,
          overlayRadius: 8,
          role: "combobox",
          children: [
            j.jsx("div", {
              className:
                "k4urcfbm hzawbc8m sj5x9vvc cxgpxx05 scb9dxdr j83agx80 rq0escxv",
              children: j.jsx("div", {
                className: "n8z77nuh knvmm38d qzhwtbm6 buofh1pr",
                children: j.jsx(c("TetraText.react"), {
                  color: "primary",
                  numberOfLines: 1,
                  type: "body3",
                  children: h._("{label}", [h._param("label", a.label)]),
                }),
              }),
            }),
            j.jsx("div", {
              className: "plgsh5y4 pmk7jnqg ditlmg2l dpjh1vo5",
              children: j.jsx(c("TetraIcon.react"), {
                color: "secondary",
                icon: d("fbicon")._(i("481884"), 20),
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
  "SearchCometFilterTypeaheadInputStrategy.react",
  [
    "ix",
    "BaseTextInput_DEPRECATED.react",
    "SearchCometFilterTypeaheadBaseInputLabel.react",
    "TetraIcon.react",
    "cometTypeaheadInputWebkitStyles",
    "emptyFunction",
    "fbicon",
    "react",
    "stylex",
    "useCometTypeaheadInputRefs",
    "useCometTypeaheadInputStrategyOnChangeHandler",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useState,
      m = {
        hidden: { display: "mkhogb32" },
        iconEnd: {
          end: "dpjh1vo5",
          marginEnd: "ditlmg2l",
          position: "pmk7jnqg",
          top: "plgsh5y4",
        },
        root: { position: "l9j0dhe7" },
        textInput: {
          borderTop: "qur5y5es",
          borderEnd: "ld3qfrls",
          borderBottom: "lscdqw11",
          borderStart: "isb582sq",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          boxSizing: "rq0escxv",
          color: "oo9gr5id",
          fontSize: "jq4qci2q",
          height: "datstx6m",
          outline: "lzcic4wl",
          paddingBottom: "osnr6wyh",
          paddingEnd: "f7vcsfb0",
          paddingStart: "scb9dxdr",
          paddingTop: "pwkaztap",
          width: "k4urcfbm",
        },
        textInputEndIcon: {
          paddingTop: "jb3vyjys",
          paddingEnd: "bowiujrr",
          paddingBottom: "qt6c0cv9",
          paddingStart: "h4z51re5",
        },
        textInputFocused: { backgroundColor: "qsy8amke" },
      };
    function a(a, b) {
      var e = a.ariaProps;
      a.description;
      a.errorMessage;
      var f = a.id,
        g = a.inputEndContent;
      a.inputExtraProps;
      var n = a.inputStartContent,
        o = a.isDisabled,
        p = a.label,
        q = a.onBlur,
        r = a.onChange,
        s = a.onClick,
        t = a.onFocus,
        u = a.placeholder,
        v = a.queryString,
        w = a.testid;
      w = babelHelpers.objectWithoutPropertiesLoose(a, [
        "ariaProps",
        "description",
        "errorMessage",
        "id",
        "inputEndContent",
        "inputExtraProps",
        "inputStartContent",
        "isDisabled",
        "label",
        "onBlur",
        "onChange",
        "onClick",
        "onFocus",
        "placeholder",
        "queryString",
        "testid",
      ]);
      a = l(!1);
      var x = a[0],
        y = a[1];
      a = l(!1);
      var z = a[0],
        A = a[1];
      a = c("useCometTypeaheadInputRefs")(b);
      b = a.composedRef;
      var B = a.inputRef;
      k(
        function () {
          var a = B.current;
          z && a && a.focus();
        },
        [b, B, z]
      );
      k(
        function () {
          x || A(!1);
        },
        [x]
      );
      a = j(
        function () {
          y(!1), q && q();
        },
        [q]
      );
      r = c("useCometTypeaheadInputStrategyOnChangeHandler")({ onChange: r });
      var C = j(
          function () {
            y(!0), t && t();
          },
          [t]
        ),
        D = j(
          function () {
            A(!0), s && s();
          },
          [s]
        );
      f = (f = f) != null ? f : c("useCometUniqueID")();
      return i.jsxs("div", {
        className: c("stylex")(m.root),
        "data-testid": void 0,
        children: [
          n,
          i.jsx(c("SearchCometFilterTypeaheadBaseInputLabel.react"), {
            label: p,
            onPress: D,
            shouldBeHidden: z,
          }),
          i.jsxs("div", {
            className: c("stylex")(!z && m.hidden),
            children: [
              i.jsx(
                c("BaseTextInput_DEPRECATED.react"),
                babelHelpers["extends"]({}, e, w, {
                  autoComplete: "off",
                  className: c("stylex")(
                    m.textInputEndIcon,
                    m.textInput,
                    x && m.textInputFocused,
                    c("cometTypeaheadInputWebkitStyles")["default"]
                  ),
                  "data-testid": void 0,
                  disabled: o,
                  id: f,
                  onBlur: a,
                  onChange: r,
                  onClick: c("emptyFunction"),
                  onFocus: C,
                  placeholder: (n = u) != null ? n : "",
                  ref: b,
                  type: "search",
                  value: v,
                })
              ),
              i.jsx("div", {
                className: c("stylex")(m.iconEnd),
                children: i.jsx(c("TetraIcon.react"), {
                  color: "secondary",
                  icon: d("fbicon")._(h("481884"), 20),
                }),
              }),
            ],
          }),
          g,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "SearchCometFilterTypeaheadSelectedValue.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.label,
        e = a.onClearButtonPress;
      a = a.value;
      return j.jsxs("div", {
        className:
          "k4urcfbm scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 taijpn5t j83agx80 rq0escxv",
        children: [
          j.jsx("div", {
            className: "hpfvmrgz knvmm38d qzhwtbm6 buofh1pr",
            children: j.jsx(c("TetraText.react"), {
              color: "highlight",
              numberOfLines: 1,
              testid: void 0,
              type: "bodyLink3",
              children: a,
            }),
          }),
          j.jsx("div", {
            className: "kkf49tns cgat1ltu",
            children: j.jsx(c("CometPressable.react"), {
              "aria-label": h._("Clear {buttonText}", [
                h._param("buttonText", b),
              ]),
              display: "inline",
              onPress: e,
              overlayRadius: "50%",
              children: j.jsx(c("TetraIcon.react"), {
                color: "highlight",
                icon: d("fbicon")._(i("491581"), 20),
                testid: void 0,
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
  "SearchCometFilterTypeahead.react",
  [
    "BaseTypeahead.react",
    "CometTypeaheadLayoutContextualStrategy.react",
    "SearchCometFilterTypeaheadInputStrategy.react",
    "SearchCometFilterTypeaheadSelectedValue.react",
    "SearchCometFilterTypeaheadViewStrategy.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.dataSource,
        d = a.entry,
        e = a.label,
        f = a.onClearButtonPress,
        g = a.onFocus,
        i = a.onPressEntry,
        j = a.onQueryChange,
        k = a.placeholder;
      k = k === void 0 ? "" : k;
      a = a.queryString;
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            className: d != null ? "mkhogb32" : "",
            children: h.jsx(c("BaseTypeahead.react"), {
              dataSource: b,
              inputStrategyRenderer: c(
                "SearchCometFilterTypeaheadInputStrategy.react"
              ),
              label: e,
              layoutStrategyRenderer: c(
                "CometTypeaheadLayoutContextualStrategy.react"
              ),
              onChange: j,
              onFocus: g,
              onPressEntry: i,
              placeholder: k,
              queryString: a,
              shouldQueryStringUpdateFromSelectedEntryOnClick: !1,
              viewStrategyRenderer: c(
                "SearchCometFilterTypeaheadViewStrategy.react"
              ),
            }),
          }),
          d != null
            ? h.jsx(c("SearchCometFilterTypeaheadSelectedValue.react"), {
                label: e,
                onClearButtonPress: f,
                value: d.name,
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
  "getSearchCometFilterTypeaheadEntity",
  ["CometRelay", "getSearchCometFilterTypeaheadEntity_actor.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = a.actor$key;
      if (a == null) return { id: null, name: null, profilePictureURI: null };
      a = d("CometRelay").readInlineData(
        h !== void 0
          ? h
          : (h = b("getSearchCometFilterTypeaheadEntity_actor.graphql")),
        a
      );
      var c = a.id,
        e = a.name;
      a = a.profile_picture;
      return { id: c, name: e, profilePictureURI: a == null ? void 0 : a.uri };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometFilterTypeaheadBootstrapDataSource",
  [
    "CometTypeaheadDataEntry",
    "getSearchCometFilterTypeaheadEntity",
    "useCometTypeaheadCompositeBootstrapDataSource",
    "useSearchCometFilterTypeaheadBootstrapDataSourceQuery.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = 1e3,
      j = 3;
    function a(a) {
      var d = a.customValueTemplate;
      return c("useCometTypeaheadCompositeBootstrapDataSource")({
        fetchPolicy: "store-or-network",
        gqlQuery:
          h !== void 0
            ? h
            : (h = b(
                "useSearchCometFilterTypeaheadBootstrapDataSourceQuery.graphql"
              )),
        limit: j,
        normalize: function (a) {
          a =
            a == null
              ? void 0
              : (a = a.viewer) == null
              ? void 0
              : (a = a.bootstrap_entities) == null
              ? void 0
              : a.edges;
          return !a
            ? []
            : a
                .map(function (a) {
                  a = a.node;
                  a = c("getSearchCometFilterTypeaheadEntity")({
                    actor$key: a == null ? void 0 : a.searchable,
                  });
                  var b = a.id,
                    e = a.name;
                  a = a.profilePictureURI;
                  return e == null || b == null || a == null
                    ? null
                    : new (c("CometTypeaheadDataEntry"))({
                        key: b,
                        label: e,
                        rawData: {
                          name: e,
                          photo: a,
                          value: d.replace("VALUE", b),
                        },
                      });
                })
                .filter(Boolean);
        },
        queryVariables: { first: i },
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometFilterTypeaheadTypedDataSource",
  [
    "CometTypeaheadDataEntry",
    "getSearchCometFilterTypeaheadEntity",
    "useCometTypeaheadGraphQLDataSource",
    "useSearchCometFilterTypeaheadTypedDataSourceQuery.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              "useSearchCometFilterTypeaheadTypedDataSourceQuery.graphql"
            ));
    function a(a) {
      var b = a.filterID;
      a = a.limit;
      return c("useCometTypeaheadGraphQLDataSource")({
        gqlQuery: i,
        limit: a,
        normalize: j,
        queryVariablesBuilderFunction: function (a) {
          a = a.query;
          return { count: 8, filterID: b, query: a };
        },
      });
    }
    function j(a) {
      a =
        a == null
          ? void 0
          : (a = a.node) == null
          ? void 0
          : (a = a.filter_values) == null
          ? void 0
          : a.edges;
      return !a
        ? []
        : a
            .map(function (a) {
              a = a.node;
              a = (a = a) != null ? a : {};
              var b = a.filterValue;
              a = a.value_object;
              if (b == null || a == null) return null;
              a = c("getSearchCometFilterTypeaheadEntity")({ actor$key: a });
              var d = a.id,
                e = a.name;
              a = a.profilePictureURI;
              return e == null || d == null || a == null
                ? null
                : new (c("CometTypeaheadDataEntry"))({
                    key: d,
                    label: e,
                    rawData: { name: e, photo: a, value: b },
                  });
            })
            .filter(Boolean);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadCompositeStaticDataSource",
  ["Promise", "react", "useCometTypeaheadStaticDataSource"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      var d = c("useCometTypeaheadStaticDataSource")(a);
      return h(
        function () {
          return {
            fetchCache: function (a) {
              return d.fetchCache(a);
            },
            fetchNetwork: function (a) {
              return b("Promise").resolve(d.fetchCache(a));
            },
          };
        },
        [d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometFiltersTypeaheadFilter.react",
  [
    "CometPivotLinkWithSearchDropdown.react",
    "SearchCometFilterTypeahead.react",
    "SearchCometFiltersContext",
    "SearchCometResultsUIContext",
    "gkx",
    "react",
    "useCometTypeaheadCompositeDataSource",
    "useCometTypeaheadCompositeStaticDataSource",
    "useSearchCometFilterTypeaheadBootstrapDataSource",
    "useSearchCometFilterTypeaheadTypedDataSource",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useState,
      m = "__UNDEFINED__",
      n = 5;
    function a(a) {
      var b = a.customValueTemplate,
        e = a.entries,
        f = a.filterID,
        g = a.filterViewID,
        o = a.label,
        p = a.placeholder;
      a = a.value;
      var q = l(""),
        r = q[0],
        s = q[1];
      k(
        function () {
          s("");
        },
        [a]
      );
      var t = d("SearchCometFiltersContext").useSearchFiltersDispatcher(),
        u = i(
          function (a, b) {
            if (a == null) return;
            b = b === m ? null : b;
            t({
              filterViewID: g,
              type: "DROPDOWN_SELECT",
              value: { name: a, value: b },
            });
          },
          [t, g]
        );
      q = i(
        function () {
          s(""), u(g, void 0);
        },
        [g, u]
      );
      var v = i(
        function (a) {
          a = a.getRawData();
          s("");
          u(g, (a = a.value) != null ? a : "");
        },
        [g, u]
      );
      b = c("useSearchCometFilterTypeaheadBootstrapDataSource")({
        customValueTemplate: b,
      });
      var w = c("useCometTypeaheadCompositeDataSource")({
        bootstrapDataSource: c("gkx")("1303") ? b : void 0,
        limit: n,
        networkDataSource: c("useSearchCometFilterTypeaheadTypedDataSource")({
          filterID: f,
          limit: n,
        }),
        nullstateDataSource: c("useCometTypeaheadCompositeStaticDataSource")({
          entries: e,
          limit: n,
        }),
      });
      b = i(
        function () {
          w.bootstrap();
        },
        [w]
      );
      f = j(c("SearchCometResultsUIContext"));
      e = f.isResponsive;
      f = h.jsx(c("SearchCometFilterTypeahead.react"), {
        dataSource: w,
        entry: a,
        label: o,
        onClearButtonPress: q,
        onFocus: b,
        onPressEntry: v,
        onQueryChange: s,
        placeholder: p,
        queryString: r,
      });
      if (!e) return f;
      e = h.jsx(c("CometPivotLinkWithSearchDropdown.react"), {
        dataSource: w,
        label: o,
        onClearButtonPress: q,
        onFocus: b,
        onPressEntry: v,
        onQueryChange: s,
        placeholder: p,
        queryString: r,
        selectedEntry: a,
      });
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", { className: "hlyrhctz l9j0dhe7", children: f }),
          h.jsx("div", { className: "en3zacjc l9j0dhe7", children: e }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
