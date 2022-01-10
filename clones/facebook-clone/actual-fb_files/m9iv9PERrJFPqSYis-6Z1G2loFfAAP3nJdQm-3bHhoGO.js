if (self.CavalryLogger) {
  CavalryLogger.start_js(["BDzDC3e"]);
}

__d(
  "CometUFIReactionsMenu_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIReactionsMenu_feedback",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "FeedbackReaction",
          kind: "LinkedField",
          name: "supported_reactions",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "FeedbackReactionAnimation",
              kind: "LinkedField",
              name: "animation",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "uri_keyframes2",
                  storageKey: null,
                },
              ],
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
      ],
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerCommentCharacterLimitPlugin_plugin$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "cometUFIComposerCommentCharacterLimitPlugin_plugin$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "cometUFIComposerCommentCharacterLimitPlugin_plugin.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "cometUFIComposerCommentCharacterLimitPlugin_plugin",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CommentComposerCommentCharacterLimitPlugin",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedVisitationContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    c = d("react");
    var i = c.useContext,
      j = c.useMemo,
      k = h.createContext({ feedLastVisitTime: null });
    function a(a) {
      var b = a.children,
        c = a.feedLastVisitTime;
      a = j(
        function () {
          return { feedLastVisitTime: c };
        },
        [c]
      );
      return h.jsx(k.Provider, { value: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      return i(k);
    }
    g.CometFeedVisitationContextProvider = a;
    g.useCometFeedVisitationContext = b;
  },
  98
);
__d(
  "CometUFIReactionsMenuA11yCloseButton.react",
  ["fbt", "CometPressable.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        accessibleElem: {
          clip: "q45zohi1",
          clipPath: "g0aa4cga",
          position: "pmk7jnqg",
        },
      };
    function a(a) {
      var b = a.onClose,
        d = a.onFocusIn;
      return i.jsx(c("CometPressable.react"), {
        focusable: !1,
        onFocusIn: function () {
          return d(null);
        },
        onPress: b,
        xstyle: j.accessibleElem,
        children: h._("Close reactions"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIReactionsMenuImpl.react",
  [
    "fbt",
    "CometFocusGroup.react",
    "CometFocusGroupContext",
    "CometPressable.react",
    "CometTrackingNodeProvider.react",
    "CometUFIReactionsMenuA11yCloseButton.react",
    "CometVisualCompletionAttributes",
    "FocusRegion.react",
    "UFIReactionTypes",
    "cr:1752989",
    "cr:1752990",
    "focusScopeQueries",
    "react",
    "stylex",
    "useGlobalEventListener",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = d("react");
    var j = a.useCallback,
      k = a.useContext,
      l = a.useRef,
      m = a.useState,
      n = {
        backgroundHidden: { backgroundColor: "b0kwm4yp" },
        reactionIcon: {
          transitionDuration: "kmdw4o4n",
          transitionProperty: "flx89l3n",
        },
        reactionIconActive: { transform: "miwn0s2l" },
        reactionIconTooltip: {
          animationDuration: "mu51a5us",
          animationFillMode: "j1l0snac",
          animationIterationCount: "h9pa7xm5",
          animationName: "sbevj9st",
          backgroundColor: "iuug3ofb",
          borderTopStartRadius: "r3sa2fe4",
          borderTopEndRadius: "inxzxsdm",
          borderBottomEndRadius: "p0leutie",
          borderBottomStartRadius: "kbv20vi1",
          bottom: "dgqlqyvj",
          color: "rbpys9yp",
          fontSize: "sq6gx45u",
          fontWeight: "n3ffmt46",
          left: "pzli0o6b",
          paddingTop: "linoseic",
          paddingEnd: "jxrgncrl",
          paddingBottom: "pby63qed",
          paddingStart: "qnrpqo6b",
          position: "pmk7jnqg",
          transform: "cj5g2342",
        },
        reactionIconTooltipHidden: { display: "mkhogb32" },
        reactionIconWrapper: {
          alignItems: "bp9cbjyn",
          animationDuration: "mu51a5us",
          animationFillMode: "j1l0snac",
          animationIterationCount: "h9pa7xm5",
          animationName: "og22hbeg",
          animationTimingFunction: "rr7aif1o",
          cursor: "nhd2j8a9",
          display: "j83agx80",
          marginEnd: "cgat1ltu",
          marginStart: "kkf49tns",
          position: "l9j0dhe7",
        },
        reactionIconsToolbar: { display: "j83agx80" },
        root: {
          animationDuration: "mu51a5us",
          animationFillMode: "j1l0snac",
          animationIterationCount: "h9pa7xm5",
          animationName: "sbevj9st",
          backgroundColor: "cwj9ozl2",
          borderTopStartRadius: "ql22ph3y",
          borderTopEndRadius: "llvz9h1a",
          borderBottomEndRadius: "cqhxmwf1",
          borderBottomStartRadius: "eq5eb3yx",
          boxShadow: "eqgx27jh",
          display: "j83agx80",
          paddingBottom: "ae35evdt",
          paddingTop: "fdg1wqfs",
          pointerEvents: "mrt03zmi",
          whiteSpace: "g0qnabr5",
        },
      };
    e = i.memo(
      i.forwardRef(function (a, b) {
        var e = a.disableAnimationPlayback,
          f = a.enableVCTracking,
          g = a.focusOnShow,
          j = a.hideBackground,
          k = a.initialReaction,
          l = a.onClose,
          p = a.onHoverIn,
          q = a.onHoverOut,
          r = a.onReactionSelect,
          s = a.scrubbingMode,
          t = a.shouldFocusOnShow,
          u = a.supportedReactions;
        a = a.xstyle;
        var v = m(null),
          w = v[0];
        v = v[1];
        t = (t && t()) || g === !0;
        g = function () {
          w && r(w);
        };
        f =
          f !== !0
            ? c("CometVisualCompletionAttributes").IGNORE_DYNAMIC
            : void 0;
        return i.jsx(d("FocusRegion.react").FocusRegion, {
          autoFocusQuery: t ? d("focusScopeQueries").tabbableScopeQuery : null,
          containFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
          recoverFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
          children: i.jsx(
            "div",
            babelHelpers["extends"]({}, f, {
              "aria-label": h._("Reactions"),
              className: c("stylex")(n.root, j === !0 && n.backgroundHidden, a),
              "data-testid": void 0,
              onMouseEnter: p,
              onMouseLeave: q,
              onMouseUp: s ? g : null,
              ref: b,
              role: "dialog",
              children: i.jsx(o, {
                currentReaction: w,
                disableAnimationPlayback: e,
                initialReaction: k,
                onClose: l,
                onReactionChange: v,
                onSelect: g,
                scrubbingMode: s,
                supportedReactions: u,
              }),
            })
          ),
        });
      })
    );
    function o(a) {
      var b = a.currentReaction,
        e = a.disableAnimationPlayback,
        f = a.initialReaction,
        g = a.onClose,
        h = a.onReactionChange,
        k = a.onSelect,
        m = a.scrubbingMode,
        o = a.supportedReactions,
        q = l(null);
      function r() {
        q.current === null && (q.current = new WeakMap());
        return q.current;
      }
      var s = function () {
        h(null);
      };
      a = j(
        function (a) {
          a = a.touches;
          a = a[0];
          a = document.elementFromPoint(a.clientX, a.clientY);
          if (a instanceof HTMLElement) {
            var b = r();
            if (b) {
              b = b.get(a);
              b && h(b);
            }
          }
        },
        [h]
      );
      c("useGlobalEventListener")("touchcancel", m ? g : null);
      c("useGlobalEventListener")("touchend", m ? k : null);
      c("useGlobalEventListener")("touchmove", m ? a : null);
      var t = "toolbar";
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("CometFocusGroup.react"), {
            hideArrowSignifiers: !0,
            orientation: "horizontal",
            role: t,
            tabScopeQuery: d("focusScopeQueries").tabbableScopeQuery,
            wrap: !0,
            children: function (a) {
              return i.jsx("div", {
                className: c("stylex")(n.reactionIconsToolbar),
                role: t,
                children: o.map(function (a) {
                  var c = a.animationURI,
                    d = a.key;
                  return i.jsx(
                    p,
                    {
                      animationURI: c,
                      disableAnimationPlayback: e,
                      isActive: b === d,
                      isSelected: f === d,
                      onFocusIn: h,
                      onFocusOut: s,
                      onSelect: k,
                      reaction: d,
                      touchElementRef: function (a) {
                        if (a) {
                          var b = r();
                          b && b.set(a, d);
                        }
                      },
                    },
                    d
                  );
                }),
              });
            },
          }),
          i.jsx(c("CometUFIReactionsMenuA11yCloseButton.react"), {
            onClose: g,
            onFocusIn: h,
          }),
        ],
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p(a) {
      var d = a.animationURI,
        e = a.disableAnimationPlayback,
        f = a.isActive,
        g = a.isSelected,
        j = a.onFocusIn,
        l = a.onFocusOut,
        m = a.onSelect,
        o = a.reaction;
      a = a.touchElementRef;
      var p = c("UFIReactionTypes").reactions[o].display_name,
        q = function () {
          return j(o);
        },
        r = [n.reactionIcon];
      f && r.push(n.reactionIconActive);
      var s = k(c("CometFocusGroupContext"));
      s = s.FocusItem;
      g = g
        ? h._("Remove {selected reaction}", [h._param("selected reaction", p)])
        : p;
      var t = null;
      b("cr:1752989") != null
        ? (t = i.jsx(b("cr:1752989"), {
            animationURI: d,
            disableAnimationPlayback: e,
            reactionType: o,
            ref: a,
            size: 39,
            xstyle: r,
          }))
        : b("cr:1752990") != null &&
          (t = i.jsx(b("cr:1752990"), {
            reactionType: o,
            ref: a,
            size: 39,
            xstyle: r,
          }));
      e = (d = s) != null ? d : i.Fragment;
      return i.jsx(e, {
        children: i.jsx(c("CometTrackingNodeProvider.react"), {
          trackingNode: 5,
          children: i.jsxs(c("CometPressable.react"), {
            "aria-label": g,
            onFocusIn: q,
            onFocusOut: l,
            onHoverIn: q,
            onHoverOut: l,
            onPress: m,
            overlayDisabled: !0,
            testid: void 0,
            xstyle: n.reactionIconWrapper,
            children: [
              t,
              i.jsx("div", {
                className: c("stylex")(
                  n.reactionIconTooltip,
                  !f && n.reactionIconTooltipHidden
                ),
                "data-testid": void 0,
                children: p,
              }),
            ],
          }),
        }),
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    g["default"] = e;
  },
  98
);
__d(
  "CometUFIReactionsMenu.react",
  [
    "CometContextualLayer.react",
    "CometHideLayerOnEscape.react",
    "CometRelay",
    "CometUFIReactionsMenuImpl.react",
    "CometUFIReactionsMenu_feedback.graphql",
    "UFIReactionTypes",
    "orEmptyArray",
    "react",
    "useOnOutsideClick",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo;
    function a(a) {
      var e = a.contextRef,
        f = a.feedback,
        g = a.onClose,
        k = a.visible;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "contextRef",
        "feedback",
        "onClose",
        "visible",
      ]);
      var l = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometUFIReactionsMenu_feedback.graphql")),
        f
      );
      f = j(
        function () {
          return c("orEmptyArray")(l.supported_reactions)
            .map(function (a) {
              var b = a.animation;
              a = a.key;
              if (a == null) return null;
              a = d("UFIReactionTypes").ordering.indexOf(a);
              return a !== -1
                ? {
                    animationURI: b == null ? void 0 : b.uri_keyframes2,
                    key: d("UFIReactionTypes").ordering[a],
                  }
                : null;
            })
            .filter(Boolean);
        },
        [l.supported_reactions]
      );
      var m = c("useOnOutsideClick")(k ? g : null);
      return !k
        ? null
        : i.jsx(c("CometContextualLayer.react"), {
            align: "start",
            contextRef: e,
            position: "above",
            children: i.jsx(c("CometHideLayerOnEscape.react"), {
              onHide: g,
              children: i.jsx(
                c("CometUFIReactionsMenuImpl.react"),
                babelHelpers["extends"]({}, a, {
                  onClose: g,
                  ref: m,
                  supportedReactions: f,
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
  "cometUFIComposerCommentCharacterLimitPlugin",
  ["cometUFIComposerCommentCharacterLimitPlugin_plugin.graphql", "cr:25"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h !== void 0
      ? h
      : (h = b("cometUFIComposerCommentCharacterLimitPlugin_plugin.graphql"));
    function a(a) {
      return b("cr:25")();
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometUnhideToastMessage",
  ["fbt", "ix", "TetraIcon.react", "cometPushToast", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = {
          action: {
            label: h._("Undo"),
            onPress: function () {
              return a();
            },
          },
          icon: j.jsx(c("TetraIcon.react"), {
            icon: d("fbicon")._(i("2020"), 20),
          }),
          message: h._("Comment Unhidden"),
          supressCloseButton: !0,
        },
        e = function () {
          d("cometPushToast").cometPushToast(b);
        };
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometUnhideToastMessageNoop",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {}
    f["default"] = a;
  },
  66
);
__d(
  "CometWallConstants",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({ COMMENT_MAX_LENGTH: 8e3 });
  },
  null
);
__d(
  "CometOutlineEventPriority",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "CRITICAL",
      "HIGH",
      "NORMAL",
      "LOW",
      "EDITOR",
    ]);
    c = [a.CRITICAL, a.HIGH, a.NORMAL, a.LOW, a.EDITOR];
    f.CometOutlineEventPriority = a;
    f.CometOutlineEventPrioritySorted = c;
  },
  66
);
__d(
  "CometUFIOutlineEmojiNode",
  ["Outline"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 16,
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c, d, e) {
          a = b.call(this, a, e) || this;
          a.__type = "emoji";
          a.__src = d;
          a.__rawText = c;
          return a;
        }
        a.deserialize = function (b) {
          return new a(b.__text, b.__rawText, b.__src);
        };
        var c = a.prototype;
        c.clone = function () {
          return new a(this.__text, this.__rawText, this.__src, this.__key);
        };
        c.getRawText = function () {
          var a = this.getLatest();
          return a.__rawText;
        };
        c.createDOM = function () {
          var a = this.__text,
            b = this.__src,
            c = document.createElement("span"),
            d = document.createElement("span"),
            e = c.style;
          c.style.cursor = "default";
          c.className =
            "sf5mxxl7 oqcyycmt nvdbi5me oygrvhab ditlmg2l kvgmc6g5 q9uorilb sgc6yxs4 qb00l2mb mufzhxvi";
          c.setAttribute("data-testid", "emoji");
          d.className = "enjifjd9 p16kav6w q9uorilb jedpkwab";
          b != null &&
            ((e.backgroundImage = "url(" + b + ")"),
            (e.backgroundSize = h + "px " + h + "px"),
            (e.height = h + "px"),
            (e.width = h + "px"));
          c.appendChild(d);
          d.textContent = a;
          return c;
        };
        c.updateDOM = function () {
          return !1;
        };
        return a;
      })(d("Outline").TextNode);
    function a(a, b, c) {
      return new i(a, b, c).makeImmutable();
    }
    g.size = h;
    g.EmojiNode = i;
    g.createEmojiNode = a;
  },
  98
);
__d(
  "destroyOnUnload",
  ["Run"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return d("Run").onLeave(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "UFI2ScaleRect",
  ["invariant", "FBLogger"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      return i(a, !0);
    }
    function b(a) {
      return i(a, !1);
    }
    function i(a, b) {
      var d = a.srcHeight,
        e = a.srcWidth,
        f = a.maxHeight,
        g = a.maxWidth;
      a = a.gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero;
      !1 === a
        ? (d > 0 || h(0, 5272, d), e > 0 || h(0, 5273, e))
        : (d === 0 || e === 0) &&
          c("FBLogger")("ufi2").warn(
            "Scaling UFI2 rect with invalid zero height or width: height=%s / width=%s",
            String(d),
            String(e)
          );
      f > 0 || h(0, 5274, f);
      g > 0 || h(0, 5275, g);
      d = a && d === 0 ? f : d;
      a = a && e === 0 ? g : e;
      e = g / a;
      g = f / d;
      f = b ? Math.min(e, g) : Math.min(e, g, 1);
      return { height: Math.round(d * f), width: Math.round(a * f) };
    }
    g.scaleToContain = a;
    g.shrinkToContain = b;
  },
  98
);
__d(
  "CometOutlineContentEditable.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        editor: {
          color: "oo9gr5id",
          outline: "lzcic4wl",
          overflowWrap: "jm1wdb64",
          position: "l9j0dhe7",
          textAlign: "gsox5hk5",
          userSelect: "mdldhsdk",
          whiteSpace: "ii04i59q",
        },
      };
    function a(a) {
      var b = a.ariaActiveDescendantID,
        d = a.ariaAutoComplete,
        e = a.ariaControls,
        f = a.ariaDescribedBy,
        g = a.ariaExpanded,
        j = a.ariaLabel,
        k = a.ariaLabelledBy,
        l = a.ariaMultiline,
        m = a.ariaOwneeID,
        n = a.ariaRequired,
        o = a.autoCapitalize,
        p = a.autoComplete,
        q = a.autoCorrect,
        r = a.contentEditableRef,
        s = a.readOnly;
      s = s === void 0 ? !1 : s;
      var t = a.role;
      t = t === void 0 ? "textbox" : t;
      var u = a.spellCheck;
      u = u === void 0 ? !1 : u;
      var v = a.tabIndex,
        w = a.webDriverTestID;
      w = a.xstyle;
      return h.jsx("div", {
        "aria-activedescendant": s ? null : b,
        "aria-autocomplete": s ? null : d,
        "aria-controls": s ? null : e,
        "aria-describedby": f,
        "aria-expanded": s ? null : t === "combobox" ? !!g : null,
        "aria-label": j,
        "aria-labelledby": k,
        "aria-multiline": l,
        "aria-owns": s ? null : m,
        "aria-required": n,
        autoCapitalize: o,
        autoComplete: p,
        autoCorrect: q,
        className: c("stylex")(i.editor, w) + " " + (s ? "" : "notranslate"),
        contentEditable: !s,
        "data-testid": void 0,
        ref: r,
        role: s ? null : t,
        spellCheck: u,
        suppressContentEditableWarning: !0,
        tabIndex: v,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useOutlineDecorators",
  ["cr:10463"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:10463");
  },
  null
);
__d(
  "useOutlinePlainText",
  ["cr:1967621"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:1967621");
  },
  null
);
__d(
  "Outline",
  ["cr:1967606"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:1967606");
  },
  null
);
__d(
  "CometOutlineEntityTextNode",
  ["Outline", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.getUFIComposerEntity = function (a) {
        throw c("unrecoverableViolation")(
          "CometOutlineEntityTextNode does not implement getUFIComposerEntity",
          "ufi2"
        );
      };
      return b;
    })(d("Outline").TextNode);
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIOutlineGenericEntityNode",
  ["CometOutlineEntityTextNode"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a, c) {
        var d = a.id,
          e = a.text,
          f = a.type;
        a = a.uri;
        e = b.call(this, e, c) || this;
        e.__type = "actor";
        e.__id = d;
        e.__ufiType = f;
        e.__uri = a;
        return e;
      }
      a.deserialize = function (b) {
        return new a({
          id: b.__id,
          text: b.__text,
          type: b.__ufiType,
          uri: (b = b.__uri) != null ? b : void 0,
        });
      };
      var c = a.prototype;
      c.clone = function () {
        var b;
        return new a(
          {
            id: this.__id,
            text: this.__text,
            type: this.__ufiType,
            uri: (b = this.__uri) != null ? b : void 0,
          },
          this.__key
        );
      };
      c.createDOM = function (a) {
        a = b.prototype.createDOM.call(this, a);
        a.className = "bnpdmtie diy96o5h";
        a.spellcheck = !1;
        return a;
      };
      c.getUFIComposerEntity = function (a) {
        a = this.__uri != null ? { uri: this.__uri } : null;
        a = babelHelpers["extends"](
          { __UFI__: !0, id: this.__id, isWeak: !1, type: this.__ufiType },
          a
        );
        return a;
      };
      return a;
    })(c("CometOutlineEntityTextNode"));
    function a(a) {
      return new h(a).makeSegmented().makeDirectionless();
    }
    g.CometUFIOutlineGenericEntityNode = h;
    g.createCometUFIOutlineGenericEntityNode = a;
  },
  98
);
__d(
  "OutlineHashtagNode",
  ["cr:395"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:395");
  },
  null
);
