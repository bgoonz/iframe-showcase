if (self.CavalryLogger) {
  CavalryLogger.start_js(["gi1w4H5"]);
}

__d(
  "CometReshareDialogTargetSection.react",
  ["CometUnit.react", "CometUnitHeader.react", "TetraList.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.sectionTitle;
      return h.jsx(c("CometUnit.react"), {
        header: h.jsx(c("CometUnitHeader.react"), { headline: a, level: 3 }),
        children: h.jsx(c("TetraList.react"), { children: b }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadLayoutInlineStrategyARIAProps",
  [
    "react",
    "useCometInternalTypeaheadFetch",
    "useCometInternalTypeaheadState",
    "useCometTypeaheadViewLabel",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      var b = a.helperText,
        d = a.inputLabel,
        e = d === void 0 ? "" : d,
        f = a.viewRole,
        g = c("useCometUniqueID")();
      d = c("useCometInternalTypeaheadFetch")();
      var i = d.isLoading;
      a = c("useCometInternalTypeaheadState")();
      d = a.activeEntries;
      var j = c("useCometTypeaheadViewLabel")({ activeEntries: d }),
        k = h(
          function () {
            var a = { "aria-label": e, role: "textbox" };
            b != null &&
              String(b).length > 0 &&
              (a = Object.assign({}, a, { "aria-describedby": g }));
            return a;
          },
          [g, b, e]
        ),
        l = h(
          function () {
            return { "aria-busy": i, "aria-label": j, role: f };
          },
          [i, j, f]
        );
      return h(
        function () {
          return {
            ariaDescribedByProps: { id: g },
            ariaInputProps: k,
            ariaViewProps: l,
          };
        },
        [g, k, l]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadLayoutInlineStrategy.react",
  [
    "CometTypeaheadHelperText.react",
    "CometTypeaheadInternalLayoutInlineStrategy.react",
    "react",
    "useCometInternalTypeaheadFetch",
    "useCometInternalTypeaheadStateDispatcher",
    "useCometTypeaheadInputRefs",
    "useCometTypeaheadInternalLayoutInlineStrategyHandlers",
    "useCometTypeaheadLayoutInlineStrategyARIAProps",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect,
      j = {
        view: {
          backgroundColor: "cwj9ozl2",
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
        },
      };
    function a(a, b) {
      var d = a.extraLayoutProps,
        e = a.helperText,
        f = a.label,
        g = a.onBlur,
        k = a.onChange,
        l = a.onDownArrow,
        m = a.onEnter,
        n = a.onEscape,
        o = a.onHighlightEntry,
        p = a.onOutsideClick,
        q = a.onPressEntry,
        r = a.onUpArrow,
        s = a.viewRole,
        t = a.xstyles;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "extraLayoutProps",
        "helperText",
        "label",
        "onBlur",
        "onChange",
        "onDownArrow",
        "onEnter",
        "onEscape",
        "onHighlightEntry",
        "onOutsideClick",
        "onPressEntry",
        "onUpArrow",
        "viewRole",
        "xstyles",
      ]);
      var u = c("useCometInternalTypeaheadFetch")();
      u = u.isLoading;
      var v = c("useCometInternalTypeaheadStateDispatcher")(),
        w = v.dispatchIsOpened;
      i(
        function () {
          w(!0);
        },
        [w]
      );
      v = c("useCometTypeaheadInputRefs")(b);
      b = v.composedRef;
      v = v.inputRef;
      v = c("useCometTypeaheadInternalLayoutInlineStrategyHandlers")({
        inputRef: v,
        onBlur: g,
        onChange: k,
        onDownArrow: l,
        onEnter: m,
        onEscape: n,
        onHighlightEntry: o,
        onOutsideClick: p,
        onPressEntry: q,
        onUpArrow: r,
      });
      g = c("useCometTypeaheadLayoutInlineStrategyARIAProps")({
        helperText: e,
        inputLabel: f,
        viewRole: s,
      });
      return h.jsx(
        c("CometTypeaheadInternalLayoutInlineStrategy.react"),
        babelHelpers["extends"]({}, a, v, {
          extraLayoutProps: {
            afterViewContent:
              (k = d == null ? void 0 : d.afterViewContent) != null ? k : null,
            ariaProps: g,
            beforeViewContent:
              (l = d == null ? void 0 : d.beforeViewContent) != null ? l : null,
            helperTextComponent:
              e != null
                ? h.jsx(c("CometTypeaheadHelperText.react"), { text: e })
                : null,
            isLoading: u,
            isOpened: !0,
          },
          label: f,
          ref: b,
          viewRole: s,
          xstyles: babelHelpers["extends"]({}, t, {
            viewXStyle_DO_NOT_USE: [
              j.view,
              t == null ? void 0 : t.viewXStyle_DO_NOT_USE,
            ],
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
