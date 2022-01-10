if (self.CavalryLogger) {
  CavalryLogger.start_js(["ZzYBzW1"]);
}

__d(
  "CometUFIOutlineURINode",
  ["Outline"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a, c) {
        a = b.call(this, a, c) || this;
        a.__type = "external_url";
        return a;
      }
      a.deserialize = function (b) {
        return new a(b.__text);
      };
      var c = a.prototype;
      c.clone = function () {
        return new a(this.__text, this.__key);
      };
      c.createDOM = function (a) {
        a = b.prototype.createDOM.call(this, a);
        a.className = "bnpdmtie diy96o5h";
        return a;
      };
      c.canInsertTextAtEnd = function () {
        return !1;
      };
      return a;
    })(d("Outline").TextNode);
    function a(a) {
      return new h(a).makeSegmented().makeDirectionless();
    }
    g.CometUFIOutlineURINode = h;
    g.createCometUFIOutlineURINode = a;
  },
  98
);
__d(
  "CometUFIOutlineEditor",
  [
    "CometUFIOutlineEmojiNode",
    "CometUFIOutlineGenericEntityNode",
    "CometUFIOutlineURINode",
    "Outline",
    "OutlineHashtagNode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("Outline").createEditor({
        hashtag: "humdl8nn diy96o5h",
        paragraph: "hcukyx3x oygrvhab cxmmr5t8 kvgmc6g5",
        text: { overflowed: "g68o7guq" },
      });
      a.registerNodeType(
        "actor",
        d("CometUFIOutlineGenericEntityNode").CometUFIOutlineGenericEntityNode
      );
      a.registerNodeType("emoji", d("CometUFIOutlineEmojiNode").EmojiNode);
      a.registerNodeType(
        "external_url",
        d("CometUFIOutlineURINode").CometUFIOutlineURINode
      );
      a.registerNodeType("hashtag", d("OutlineHashtagNode").HashtagNode);
      return a;
    }
    g.createCometUFIComposerOutlineCreateEditor = a;
  },
  98
);
__d(
  "cometUFIOutlineIsEmpty",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a.getTextContent().trim() === "";
    }
    f["default"] = a;
  },
  66
);
__d(
  "useCometOutlineAddCommitListeners",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useMemo;
    function a() {
      var a = i(function () {
          return new Set();
        }, []),
        b = h(
          function (b) {
            a.add(b);
            return function () {
              a["delete"](b);
            };
          },
          [a]
        );
      return [
        function () {
          return Array.from(a);
        },
        b,
      ];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometOutlineFocusListeners",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useRef;
    function a(a) {
      var b = j(function () {
          return new Set();
        }, []),
        c = k(document.activeElement === a.getRootElement());
      i(
        function () {
          var d = function () {
              var a = Array.from(b),
                d = c.current;
              for (var e = 0; e < a.length; e++) a[e](d);
            },
            e = function () {
              (c.current = !0), d();
            },
            f = function () {
              (c.current = !1), d();
            };
          return a.addListener("root", function (a, b) {
            b !== null &&
              (b.removeEventListener("focus", e),
              b.removeEventListener("blur", f)),
              a !== null
                ? ((c.current = document.activeElement === a),
                  a.addEventListener("focus", e),
                  a.addEventListener("blur", f))
                : (c.current = !1),
              d();
          });
        },
        [a, b]
      );
      return h(
        function (a) {
          b.add(a);
          a(c.current);
          return function () {
            b["delete"](a);
          };
        },
        [b]
      );
    }
    g.useCometOutlineFocusListeners = a;
  },
  98
);
__d(
  "CometOutlinePlaceholder.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        placeholder: {
          color: "m9osqain",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          pointerEvents: "hzruof5a",
          position: "pmk7jnqg",
          start: "j9ispegn",
          textOverflow: "ltmttdrg",
          top: "kr520xx4",
          userSelect: "abiwlrkh",
          whiteSpace: "g0qnabr5",
          width: "k4urcfbm",
        },
      };
    function a(a) {
      var b = a.children;
      a = a.xstyle;
      return h.jsx("div", {
        children: b,
        className: c("stylex")(i.placeholder, a),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometOutlinePlaceholder",
  ["ReactDOMComet", "react", "useLayoutEffect_SAFE_FOR_SSR"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useRef,
      i = b.useState;
    function a(a) {
      var b = i(!0),
        e = b[0],
        f = b[1],
        g = h(!0);
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          var b = function (b) {
            var c = a.canShowPlaceholder();
            g.current !== c &&
              ((g.current = c),
              b
                ? d("ReactDOMComet").flushSync(function () {
                    return f(c);
                  })
                : f(c));
          };
          b(!1);
          return a.addListener("update", function () {
            return b(!0);
          });
        },
        [a]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometOutlineErrorListener",
  ["Outline", "useLayoutEffect_SAFE_FOR_SSR"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          return a.addListener("error", function (c, d) {
            var e = document.activeElement,
              f = null;
            e != null &&
              (f = {
                activeElement: e.nodeName,
                rootSelected: e === a.getRootElement(),
              });
            e = window.getSelection();
            var g = null;
            if (e != null) {
              var i = e.anchorNode,
                j = e.focusNode;
              g = {
                anchorNode: i === null ? null : i.nodeName,
                anchorOffset: e.anchorOffset,
                focusNode: j === null ? null : j.nodeName,
                focusOffset: e.focusOffset,
                isCollapsed: e.isCollapsed,
              };
            }
            i = window.event;
            j = null;
            i != null &&
              (j = {
                altKey: i.altKey,
                ctrlKey: i.ctrlKey,
                data: i.data,
                inputType: i.inputType,
                isComposing: i.isComposing,
                keyCode: i.keyCode,
                metaKey: i.metaKey,
                shiftKey: i.shiftKey,
                type: i.type,
              });
            e = null;
            try {
              e = h(a);
            } catch (a) {}
            b({
              activeElement: f,
              error: c,
              event: j,
              selection: g,
              tree: e,
              updateName: d,
            });
          });
        },
        [b, a]
      );
    }
    function h(a) {
      function b(a) {
        var b = [];
        a = a.getRoot().getChildren();
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
          var g = [];
          b.push({
            children: g,
            flags: f.__flags,
            key: f.__key,
            name: f.__type,
            parent: f.__parent,
            type: f.__type,
          });
          c(f, g);
        }
        return b;
      }
      function c(a, b) {
        if (d("Outline").isBlockNode(a)) {
          a = a.getChildren();
          for (
            var a = a,
              e = Array.isArray(a),
              f = 0,
              a = e
                ? a
                : a[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var g;
            if (e) {
              if (f >= a.length) break;
              g = a[f++];
            } else {
              f = a.next();
              if (f.done) break;
              g = f.value;
            }
            g = g;
            var h = [];
            b.push({
              children: h,
              flags: g.__flags,
              key: g.__key,
              name: g.__type,
              parent: g.__parent,
              type: g.__type,
            });
            c(g, h);
          }
        }
      }
      a = a.getViewModel().read(function (a) {
        return b(a);
      });
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometOutlineKeyBindings",
  [
    "CometOutlineEventPriority",
    "Keys",
    "react",
    "useLayoutEffect_SAFE_FOR_SSR",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useMemo,
      j = new Set([
        c("Keys").ESC,
        c("Keys").TAB,
        c("Keys").RETURN,
        c("Keys").LEFT,
        c("Keys").UP,
        c("Keys").RIGHT,
        c("Keys").DOWN,
        c("Keys").LEFT_WINDOW_KEY,
        c("Keys").SHIFT,
        c("Keys").CTRL,
        c("Keys").ALT,
        c("Keys").CAPS_LOCK,
        c("Keys").BACKSPACE,
        c("Keys").DELETE,
        c("Keys").SPACE,
      ]);
    function a(a) {
      var b = i(function () {
          return {};
        }, []),
        e = h(
          function (a, c) {
            c === void 0 &&
              (c = d("CometOutlineEventPriority").CometOutlineEventPriority
                .NORMAL);
            b[c] == null && (b[c] = new Set());
            b[c].add(a);
            return function () {
              b[c]["delete"](a);
            };
          },
          [b]
        );
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          var c = function (a) {
            var c = a.keyCode;
            if (j.has(c))
              for (
                var c = d(
                    "CometOutlineEventPriority"
                  ).CometOutlineEventPrioritySorted,
                  e = Array.isArray(c),
                  f = 0,
                  c = e
                    ? c
                    : c[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                ;

              ) {
                var g;
                if (e) {
                  if (f >= c.length) break;
                  g = c[f++];
                } else {
                  f = c.next();
                  if (f.done) break;
                  g = f.value;
                }
                g = g;
                g = Array.from((g = b[g]) != null ? g : []);
                for (var h = g.length - 1; h > -1; h--) {
                  var i = g[h];
                  i = i(a);
                  if (i === "handled") return;
                }
              }
          };
          return a.addListener("root", function (a, b) {
            b !== null && b.removeEventListener("keydown", c),
              a !== null && a.addEventListener("keydown", c);
          });
        },
        [a, b]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometOutlineComposerPlugins",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a, b) {
      return i(
        function () {
          var c = [],
            d = [],
            e = [],
            f = [];
          if (a != null)
            for (var g = 0; g < a.length; g++) {
              var i = a[g];
              if (typeof i !== "function") {
                var j = i.above,
                  k = i.action,
                  l = i.below,
                  m = i.id,
                  n = i.inside;
                i = i.props;
                var o = null;
                k !== null &&
                  (o = k(babelHelpers["extends"]({}, i, { pluginProps: b })));
                if (o !== null) {
                  c.push(
                    h.createElement(
                      o,
                      babelHelpers["extends"]({}, (k = i) != null ? k : {}, {
                        key: m,
                        pluginProps: b,
                      })
                    )
                  );
                }
                if (j !== null) {
                  d.push(
                    h.createElement(
                      j,
                      babelHelpers["extends"]({}, (o = i) != null ? o : {}, {
                        key: m,
                        pluginProps: b,
                      })
                    )
                  );
                }
                if (l !== null) {
                  e.push(
                    h.createElement(
                      l,
                      babelHelpers["extends"]({}, (k = i) != null ? k : {}, {
                        key: m,
                        pluginProps: b,
                      })
                    )
                  );
                }
                if (n !== null) {
                  f.push(
                    h.createElement(
                      n,
                      babelHelpers["extends"]({}, (j = i) != null ? j : {}, {
                        key: m,
                        pluginProps: b,
                      })
                    )
                  );
                }
              }
            }
          return { above: d, actions: c, below: e, inside: f };
        },
        [a, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIComposerInputWithActionsForOutline.react",
  [
    "CometOutlineContentEditable.react",
    "CometOutlineEventPriority",
    "CometOutlinePlaceholder.react",
    "CometUFIComposerActions.react",
    "CometVisualCompletionAttributes",
    "FBLogger",
    "FocusRegion.react",
    "cr:2012305",
    "cr:287",
    "cr:846",
    "react",
    "stylex",
    "useCometOutlineAddCommitListeners",
    "useCometOutlineComposerPlugins",
    "useCometOutlineEmptyListeners",
    "useCometOutlineErrorListener",
    "useCometOutlineFocusListeners",
    "useCometOutlineKeyBindings",
    "useCometOutlinePlaceholder",
    "useLayoutEffect_SAFE_FOR_SSR",
    "useMergeRefs",
    "useOutlineDecorators",
    "useOutlinePlainText",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useMemo,
      k = e.useState,
      l = {
        composerDenial: {
          backgroundColor: "r898ja9m",
          borderTop: "pmg7q2s5",
          borderEnd: "m2wu88kb",
          borderBottom: "hxpkjkow",
          borderStart: "czm2i3kx",
        },
        disabled: { cursor: "bnpdmtie" },
        disabledForm: { backgroundColor: "r898ja9m" },
        editorWrapper: { position: "l9j0dhe7" },
        emptyInput: {
          color: "m9osqain",
          fontSize: "jq4qci2q",
          fontWeight: "b1v8xokw",
          textOverflow: "ltmttdrg",
          whiteSpace: "g0qnabr5",
          ":focus": { color: "r2ndix9n" },
        },
        focusPressable: { cursor: "o6r2urh6", position: "l9j0dhe7" },
        form: {
          backgroundColor: "b3i9ofy5",
          borderTopStartRadius: "e72ty7fz",
          borderTopEndRadius: "qlfml3jp",
          borderBottomEndRadius: "inkptoze",
          borderBottomStartRadius: "qmr60zad",
          borderTopWidth: "rt8b4zig",
          borderEndWidth: "n8ej3o3l",
          borderBottomWidth: "agehan2d",
          borderStartWidth: "sk4xxmp2",
          display: "j83agx80",
          justifyContent: "bkfpd7mw",
        },
        formWithDraftComment: { flexWrap: "lhclo0ds" },
        input: {
          cursor: "o6r2urh6",
          flexBasis: "mg4g778l",
          flexGrow: "buofh1pr",
          flexShrink: "g5gj957u",
          fontSize: "jq4qci2q",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          paddingTop: "cxgpxx05",
          paddingEnd: "d1544ag0",
          paddingBottom: "sj5x9vvc",
          paddingStart: "tw6a2znq",
        },
      };
    function m(a, c) {
      b("cr:2012305") !== null &&
        a != null &&
        b("cr:2012305").trackTypingPerf(a, "UFI2RichComposerInput", c, {
          editor: "OutlineEditor",
        });
    }
    function a(a) {
      var e = a.addAttachmentMapper,
        f = a.addCommandListener,
        g = a.ariaDescribedBy,
        n = a.ariaLabel,
        o = a.commentAction,
        p = a.composerState,
        q = a.depth,
        r = a.editor,
        s = a.execCommand,
        t = a.formElementRef,
        u = a.handleFormClick,
        v = a.initialOutlinePlugins,
        w = a.inputElementRef,
        x = a.isLocked,
        y = a.onCommit,
        z = a.onFocus,
        A = a.onInputRefUpdated,
        B = a.placeholder,
        C = a.setComposerState;
      a = i(
        function (a) {
          var b = w.current;
          if (b === a) return;
          w.current = a;
          r.setRootElement(a);
          m(a, b);
        },
        [r, w]
      );
      var D = d("useCometOutlineEmptyListeners").useCometOutlineEmptyListeners(
          r
        ),
        E = d("useCometOutlineFocusListeners").useCometOutlineFocusListeners(r),
        F = c("useCometOutlineKeyBindings")(r),
        G = c("useOutlineDecorators")(r),
        H = c("useCometOutlineAddCommitListeners")(),
        I = H[0],
        J = H[1];
      H = k(!1);
      var K = H[0],
        L = H[1];
      H = k(null);
      var M = H[0],
        N = H[1];
      H = k(!1);
      var O = H[0],
        P = H[1];
      H = d("useCometOutlineEmptyListeners").useCometOutlineIsEmpty(D);
      var Q = c("useCometOutlinePlaceholder")(r),
        R;
      c("useCometOutlineErrorListener")(r, function (a) {
        var b = a.error,
          d = a.updateName;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "error",
          "updateName",
        ]);
        c("FBLogger")("UFIOutlineComposer")
          .catching(b)
          .mustfix(
            "Outline Update Error \u2013 " +
              (d || "MissingName") +
              " \u2013 " +
              JSON.stringify(a)
          );
        P(!0);
      });
      var S = i(
        function (a) {
          var b;
          a = a;
          ((b = a) == null ? void 0 : b.constructor.name) ===
            "SyntheticBaseEvent" &&
            (c("FBLogger")("UFIOutlineComposer").mustfix(
              "First onCommit param is of type SyntheticBaseEvent. This is probably because you're passing onCommit directly to the React handler. Make sure you're explicitly calling onCommit() when you want to set the first param undefined"
            ),
            (a = void 0));
          b = I();
          for (
            var b = b,
              d = Array.isArray(b),
              e = 0,
              b = d
                ? b
                : b[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= b.length) break;
              f = b[e++];
            } else {
              e = b.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            if (f() === "block-commit") return;
          }
          y(R, a);
        },
        [R, I, y]
      );
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          return F(function (a) {
            if (
              a.keyCode === 13 &&
              !a.ctrlKey &&
              !a.metaKey &&
              !a.shiftKey &&
              !a.altKey
            ) {
              a.preventDefault();
              a.stopImmediatePropagation();
              S();
              return "handled";
            }
            return "not-handled";
          }, d("CometOutlineEventPriority").CometOutlineEventPriority.EDITOR);
        },
        [F, S]
      );
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          if (z == null) return;
          return E(function (a) {
            a && z();
          });
        },
        [E, z]
      );
      var T = !1,
        U = j(
          function () {
            return {
              addAttachmentMapper: e,
              addCommandListener: f,
              addCommitListener: J,
              addEmptyListener: D,
              addFocusListener: E,
              addKeyBinding: F,
              commentAction: o,
              composerState: p,
              depth: q,
              editor: r,
              execCommand: s,
              fileIsHoveringOverDropTarget: K,
              isCommentDenied: T,
              mediaUploadError: M,
              onCommit: S,
              setComposerState: C,
              setFileIsHoveringOverDropTarget: L,
              setMediaUploadError: N,
            };
          },
          [e, f, J, D, E, F, o, p, q, r, s, K, T, M, S, C]
        );
      v = c("useCometOutlineComposerPlugins")(v, U);
      var V = v.above,
        W = v.actions,
        X = v.below;
      v = v.inside;
      var Y = q ? "UFI2ComposerInput/reply" : "UFI2ComposerInput/comment",
        Z = p.ariaInputs,
        $ = Z ? Z["aria-activedescendant"] : void 0;
      Z = Z ? Z["aria-controls"] : void 0;
      R = c("useOutlinePlainText")(r, x);
      return h.jsxs(h.Fragment, {
        children: [
          V,
          O && b("cr:287") != null
            ? h.jsx(b("cr:287"), { editor: r, source: "Editor update" })
            : null,
          h.jsxs("form", {
            className: c("stylex")(
              T && l.composerDenial,
              x && l.disabled,
              x && l.disabledForm,
              l.focusPressable,
              l.form,
              !H && l.formWithDraftComment
            ),
            "data-testid": void 0,
            onClick: u,
            ref: t,
            role: "presentation",
            children: [
              h.jsxs(
                "div",
                babelHelpers["extends"](
                  { className: c("stylex")([H && l.emptyInput, l.input]) },
                  c("CometVisualCompletionAttributes").IGNORE,
                  {
                    children: [
                      h.jsxs("div", {
                        className: c("stylex")(l.editorWrapper),
                        children: [
                          h.jsx(d("FocusRegion.react").FocusRegion, {
                            recoverFocusQuery: null,
                            children: h.jsx(
                              c("CometOutlineContentEditable.react"),
                              {
                                ariaActiveDescendantID: $,
                                ariaControls: Z,
                                ariaDescribedBy: g,
                                ariaLabel: String((V = n) != null ? V : B),
                                contentEditableRef: c("useMergeRefs")(a, A),
                                readOnly: x,
                                spellCheck: !0,
                                webDriverTestID: Y + ":rich-input",
                              }
                            ),
                          }),
                          Q &&
                            h.jsx(c("CometOutlinePlaceholder.react"), {
                              children: B,
                            }),
                        ],
                      }),
                      G,
                      v,
                    ],
                  }
                )
              ),
              h.jsx(c("CometUFIComposerActions.react"), { children: W }),
            ],
          }),
          X,
          b("cr:846") && h.jsx(b("cr:846"), { editor: r, pluginProps: U }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getCommentDataFromCometUFIComposerStateForOutline",
  [
    "CometOutlineEntityTextNode",
    "CometUFIOutlineEmojiNode",
    "Outline",
    "UnicodeUtils",
    "cometUFICommentFormattingStyleForText",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      var f = b.attachment,
        g = b.feedbackID,
        h;
      f == null
        ? (h = null)
        : f.__type === "ExistingAttachment"
        ? (h = [])
        : (h = Array.from(e)
            .map(function (a) {
              return a(f);
            })
            .filter(Boolean));
      var i = {},
        j = [],
        k = "";
      a.getViewModel().read(function (b) {
        b = b.getRoot().getFirstChild();
        b instanceof d("Outline").BlockNode &&
          b.getChildren().forEach(function (b) {
            if (b instanceof c("CometOutlineEntityTextNode")) {
              var e = b.getUFIComposerEntity(a);
              i[e.id] = e;
              j.push({
                entity: { id: e.id },
                length: d("UnicodeUtils").strlen(b.getTextContent()),
                offset: d("UnicodeUtils").strlen(k),
              });
            } else if (b instanceof d("CometUFIOutlineEmojiNode").EmojiNode) {
              k += b.getRawText();
              return;
            }
            k += b.getTextContent();
          });
      });
      return k.trim() === "" && b.attachment == null
        ? null
        : {
            commentData: {
              attachments: h,
              feedback_id: g,
              file_marker: b.fileMarker,
              formatting_style: c("cometUFICommentFormattingStyleForText")(
                k,
                b.formattingStyle
              ),
              insights_point_json: b.insightsPoint,
              is_inline_vote_enabled_for_qna:
                b.shouldDisableReactionsOnOptimisticComment,
              message: { ranges: j, text: k },
              reply_comment_parent_fbid:
                (e = b.commentAssociatedWithReply) == null ? void 0 : e.id,
              reply_target_clicked: b.replyTargetClicked,
            },
            entitiesByID: i,
            usedWritingHelpToCompose: b.usedWritingHelpToCompose === !0,
          };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIComposerInnerForOutline.stable.react",
  [
    "CometErrorBoundary.react",
    "CometTrackingNodeProvider.react",
    "CometUFICommentRow.react",
    "CometUFIComposerInputWithActionsForOutline.react",
    "CometUFIComposerOnBeforeUnloader.react",
    "CometUFIOutlineEditor",
    "FBLogger",
    "ReactDOMComet",
    "UFICommonInteractionEvents",
    "UFICommonInteractionLogger",
    "UFIODSLogger",
    "collectDataAttributes",
    "cometUFIOutlineIsEmpty",
    "cr:287",
    "getCommentDataFromCometUFIComposerStateForOutline",
    "gkx",
    "orEmptyArray",
    "performanceNow",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 500;
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), j = 0; j < f; j++)
          g[j] = arguments[j];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.state = {
            composerState: e.props.initialComposerState || {
              attachment: null,
              commentAssociatedWithReply: null,
              commentID: e.$1(),
              editor: d(
                "CometUFIOutlineEditor"
              ).createCometUFIComposerOutlineCreateEditor(),
              feedbackID: e.$2(),
              inputDecorators: [],
              inputState: { __type: "outline-editor-state-based" },
              isLocked: !1,
            },
          }),
          (e.$4 = h.createRef()),
          (e.$5 = h.createRef()),
          (e.$6 = new Set()),
          (e.$7 = function (a, b) {
            var d = e.$4.current;
            return d !== null ? c("collectDataAttributes")(d, a, b) : null;
          }),
          (e.$8 = new Set()),
          (e.$3 = !1),
          (e.$9 = null),
          (e.isUnfinished = function () {
            if (e.props.initialComposerState) {
              if (e.props.initialComposerState !== e.state.composerState)
                return !0;
            } else {
              var a;
              a = (a = e.state.composerState.editor) != null ? a : e.$10();
              if (!c("cometUFIOutlineIsEmpty")(a)) return !0;
            }
            return !1;
          }),
          (e.execCommand = function (a) {
            var b = Array.from(e.$8);
            for (var d = 0; d < b.length; d++) {
              var f = b[d];
              f = f(a);
              if (f === "handled") return;
            }
            c("FBLogger")("UFIOutlineComposer").warn(
              "UFI Outline Composer command type " + a.__type + " not handled."
            );
          }),
          (e.$11 = function (a) {
            var b = e.$8;
            b.add(a);
            return function () {
              b["delete"](a);
            };
          }),
          (e.focus = function () {
            var a = e.$4.current;
            if (!a) return;
            if (!e.state.composerState.isLocked) {
              var b = e.state.composerState.editor;
              if (b !== null) {
                a = b.getViewModel().read(function (a) {
                  return a.getRoot().getChildrenSize() !== 0;
                });
                if (a) b.focus();
                else
                  var c = b.addListener("update", function () {
                    c(), b.focus();
                  });
              }
            }
          }),
          (e.getElementToScrollTo = function () {
            return e.$4.current;
          }),
          (e.$13 = function (a) {
            a.preventDefault(),
              document.activeElement !== e.$4.current && e.focus();
          }),
          (e.$14 = function (a) {
            a.target === e.$5.current && e.$13(a);
          }),
          (e.$15 = function (a) {
            if (e.state.composerState.isLocked) return;
            var b = e.props,
              f = b.actor,
              g = b.environment,
              h = b.feedLocation,
              j = b.onCommit,
              k = b.topLevelFeedbackID,
              l = b.useDefaultActor,
              m = "client:" + d("UFICommonInteractionLogger").makeTrackingID(),
              n = f.id;
            if (n == null)
              throw c("unrecoverableViolation")(
                "We can't commit a comment without knowing the ID of the current actor. Check why the GraphQL query for `viewer_current_actor.id` failed.",
                "ufi2"
              );
            var o = e.state.composerState.usedWritingHelpToCompose,
              p = function (a, b) {
                b === void 0 && (b = {});
                var d = c("performanceNow")();
                if (e.$9 != null) {
                  var f = d - e.$9.time;
                  if (f < i) {
                    e.$9.duplicateCommitCount += 1;
                    c("FBLogger")("UFIOutlineComposer").warn(
                      "Possible duplicate commit detected in the outline composer. Delta: %s, Count: %s",
                      f,
                      (f =
                        (f = e.$9) == null ? void 0 : f.duplicateCommitCount) !=
                        null
                        ? f
                        : -1
                    );
                  } else e.$9.duplicateCommitCount = 0;
                }
                j({
                  actorID: n,
                  clientID: m,
                  commentData: a,
                  entitiesByID: b,
                  environment: g,
                  feedLocation: h,
                  feedbackSource: e.props.feedbackSource,
                  focusCommentID: e.props.focusCommentID,
                  getTrackingDataFn: e.$7,
                  topLevelFeedbackID: k,
                  useDefaultActor: l,
                  usedWritingHelpToCompose: o,
                });
                e.$9 = {
                  duplicateCommitCount:
                    (a =
                      (f = e.$9) == null ? void 0 : f.duplicateCommitCount) !=
                    null
                      ? a
                      : 0,
                  time: d,
                };
              },
              q = function () {
                var b,
                  d = e.state.composerState,
                  f = (b = d.editor) != null ? b : e.$10();
                b = c("getCommentDataFromCometUFIComposerStateForOutline")(
                  f,
                  d,
                  e.$6
                );
                if (b == null) {
                  e.setState(function (a) {
                    return a.composerState.isLocked
                      ? {
                          composerState: babelHelpers["extends"](
                            {},
                            a.composerState,
                            { isLocked: !1 }
                          ),
                        }
                      : a;
                  });
                  e.props.commentAction === "EDIT" && p(null, {});
                  return;
                }
                p(b.commentData, b.entitiesByID);
                a(function () {
                  e.setState(
                    function (a) {
                      return {
                        composerState: babelHelpers["extends"](
                          {},
                          a.composerState,
                          {
                            attachment: null,
                            formattingStyle: void 0,
                            isLocked: !1,
                            replyTargetClicked: !1,
                            usedWritingHelpToCompose: !1,
                          }
                        ),
                      };
                    },
                    function () {
                      f.focus();
                    }
                  );
                });
              };
            e.$12(m);
            d("ReactDOMComet").flushSync(function () {
              return e.setState(function (a) {
                return {
                  composerState: babelHelpers["extends"]({}, a.composerState, {
                    isLocked: !0,
                  }),
                };
              }, q);
            });
          }),
          (e.$16 = function (a) {
            var b = e.$6;
            b.add(a);
            return function () {
              b["delete"](a);
            };
          }),
          (e.$17 = function (a, b) {
            e.setState(function (b) {
              b = b.composerState;
              if (b.isLocked) return null;
              var c = a(b);
              return { composerState: babelHelpers["extends"]({}, b, c) };
            }, b);
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var f = e.prototype;
      f.componentDidMount = function () {
        var a = this.props,
          b = a.depth;
        a = a.feedbackSource;
        a === 1 &&
          (b === 0
            ? d("UFIODSLogger").bump(
                "composer.newsfeed.toplevel.componentDidMount",
                "comet"
              )
            : d("UFIODSLogger").bump(
                "composer.newsfeed.replies.componentDidMount",
                "comet"
              ));
      };
      f.componentDidUpdate = function () {
        var a = c("orEmptyArray")(this.props.initialPlugins);
        !this.$3 &&
          a.length !== 0 &&
          (c("FBLogger")("UFIOutlineComposer").warn(
            "Outline composer received " +
              a.length +
              " Draftjs plugins. This indicates that these plugins have not been migrated, or that there is a bug in the forking logic."
          ),
          (this.$3 = !0));
      };
      f.$1 = function () {
        this.props.commentAction === "EDIT" &&
          this.props.commentID == null &&
          c("FBLogger")("UFIOutlineComposer").mustfix(
            "A `CometUFIComposer` was mounted without a comment ID on EDIT"
          );
        return this.props.commentID;
      };
      f.$2 = function () {
        if (this.props.feedback.id == null)
          throw c("FBLogger")("UFIOutlineComposer").mustfixThrow(
            "A `CometUFIComposer` was mounted without a feedback target ID. This is a fatal error, since there's nothing useful a composer can do without one. Please check why the GraphQL query for this feedback object failed to materialize an ID.",
            "ufi2"
          );
        return this.props.feedback.id;
      };
      f.$12 = function (a) {
        var b = this.props.commentAction,
          e =
            b === "ADD"
              ? c("UFICommonInteractionEvents").COMET_UFI_OPTIMISTIC_COMMENT
              : c("UFICommonInteractionEvents")
                  .COMET_UFI_OPTIMISTIC_COMMENT_EDIT;
        d("UFICommonInteractionLogger").startInteraction(e, a + e);
        e =
          b === "ADD"
            ? c("UFICommonInteractionEvents").COMET_UFI_PERSISTED_COMMENT
            : c("UFICommonInteractionEvents").COMET_UFI_PERSISTED_COMMENT_EDIT;
        d("UFICommonInteractionLogger").startInteraction(e, a + e);
      };
      f.$10 = function () {
        if (!c("gkx")("1521"))
          throw c("FBLogger")("UFIOutlineComposer").mustfixThrow(
            "editor should never be nullish in the UFI outline composer"
          );
        if (this.state.composerState.editor == null) {
          c("FBLogger")("UFIOutlineComposer").mustfix(
            "editor should never be nullish in the UFI outline composer"
          );
          var a = d(
            "CometUFIOutlineEditor"
          ).createCometUFIComposerOutlineCreateEditor();
          this.setState(function (b) {
            b = b.composerState;
            return {
              composerState: babelHelpers["extends"]({}, b, { editor: a }),
            };
          });
          return a;
        } else return this.state.composerState.editor;
      };
      f.render = function () {
        var a,
          d = this.props,
          e = d.actor,
          f = d.ariaDescribedBy,
          g = d.ariaLabel,
          i = d.commentAction,
          j = d.depth,
          k = d.forceLargeAvatar,
          l = d.initialOutlinePlugins,
          m = d.onFocus,
          n = d.onInputRefUpdated,
          o = d.placeholder;
        d = d.xstyle;
        var p = this.state.composerState,
          q = (a = p.editor) != null ? a : this.$10();
        return h.jsx(c("CometErrorBoundary.react"), {
          context: { project: "ufi2" },
          fallback: function () {
            return b("cr:287") != null
              ? h.jsx(b("cr:287"), { editor: q, source: "Error boundary" })
              : null;
          },
          children: h.jsxs(c("CometTrackingNodeProvider.react"), {
            trackingNode: 34,
            children: [
              h.jsx(c("CometUFIComposerOnBeforeUnloader.react"), {
                isUnfinished: this.isUnfinished,
              }),
              h.jsx(c("CometUFICommentRow.react"), {
                actor: e,
                "data-testid": void 0,
                depth: j,
                forceLargeAvatar: k,
                isComposer: !0,
                onAvatarClick: this.$13,
                xstyle: d,
                children: h.jsx(
                  c("CometUFIComposerInputWithActionsForOutline.react"),
                  {
                    addAttachmentMapper: this.$16,
                    addCommandListener: this.$11,
                    ariaDescribedBy: f,
                    ariaLabel: g,
                    commentAction: i,
                    composerState: p,
                    depth: j,
                    editor: q,
                    execCommand: this.execCommand,
                    formElementRef: this.$5,
                    handleFormClick: this.$14,
                    initialOutlinePlugins: l,
                    initialPlugins: [],
                    inputElementRef: this.$4,
                    isLocked: p.isLocked,
                    onCommit: this.$15,
                    onFocus: m,
                    onInputRefUpdated: n,
                    placeholder: o,
                    setComposerState: this.$17,
                  }
                ),
              }),
            ],
          }),
        });
      };
      return e;
    })(h.PureComponent);
    g["default"] = a;
  },
  98
);
