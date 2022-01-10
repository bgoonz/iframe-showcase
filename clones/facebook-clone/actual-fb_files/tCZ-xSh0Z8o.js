if (self.CavalryLogger) {
  CavalryLogger.start_js(["iKvYO0j"]);
}

__d(
  "CometUFILiveTypingBroadcastMutation_StartMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "FeedbackStartTypingResponsePayload",
            kind: "LinkedField",
            name: "feedback_start_typing",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
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
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUFILiveTypingBroadcastMutation_StartMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFILiveTypingBroadcastMutation_StartMutation",
          selections: b,
        },
        params: {
          id: "4132343240150432",
          metadata: {},
          name: "CometUFILiveTypingBroadcastMutation_StartMutation",
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
  "CometUFILiveTypingBroadcastMutation_StopMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "FeedbackStopTypingResponsePayload",
            kind: "LinkedField",
            name: "feedback_stop_typing",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
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
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUFILiveTypingBroadcastMutation_StopMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFILiveTypingBroadcastMutation_StopMutation",
          selections: b,
        },
        params: {
          id: "2449415248515863",
          metadata: {},
          name: "CometUFILiveTypingBroadcastMutation_StopMutation",
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
  "CometUFIStickersComposerUpgradedPreviewContentQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "stickerId" },
        ],
        b = [{ kind: "Variable", name: "id", variableName: "stickerId" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = { kind: "Variable", name: "scale", variableName: "scale" },
        e = [
          { kind: "Literal", name: "height", value: 80 },
          d,
          { kind: "Literal", name: "width", value: 80 },
        ],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        g = [
          f,
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
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUFIStickersComposerUpgradedPreviewContentQuery",
          selections: [
            {
              alias: "sticker",
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "UFI2CommentSticker_sticker",
                    },
                  ],
                  type: "Sticker",
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
          name: "CometUFIStickersComposerUpgradedPreviewContentQuery",
          selections: [
            {
              alias: "sticker",
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
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
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "frame_count",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "frame_rate",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "frames_per_column",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "frames_per_row",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "label",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "StickerPack",
                      kind: "LinkedField",
                      name: "pack",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "name",
                          storageKey: null,
                        },
                        c,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: e,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "sprite_image",
                      plural: !1,
                      selections: [f],
                      storageKey: null,
                    },
                    {
                      alias: "sticker_image",
                      args: e,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: g,
                      storageKey: null,
                    },
                    {
                      alias: "larger_sticker_image",
                      args: [
                        { kind: "Literal", name: "height", value: 120 },
                        d,
                        { kind: "Literal", name: "width", value: 120 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: g,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "sticker_type",
                      storageKey: null,
                    },
                  ],
                  type: "Sticker",
                  abstractKey: null,
                },
                c,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4141340565935606",
          metadata: {},
          name: "CometUFIStickersComposerUpgradedPreviewContentQuery",
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
  "UFI2CommentSticker_sticker.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Variable", name: "scale", variableName: "scale" },
        b = [
          { kind: "Literal", name: "height", value: 80 },
          a,
          { kind: "Literal", name: "width", value: 80 },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        d = [
          c,
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
        ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "UFI2CommentSticker_sticker",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "frame_count",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "frame_rate",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "frames_per_column",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "frames_per_row",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "label",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "StickerPack",
            kind: "LinkedField",
            name: "pack",
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
            args: b,
            concreteType: "Image",
            kind: "LinkedField",
            name: "sprite_image",
            plural: !1,
            selections: [c],
            storageKey: null,
          },
          {
            alias: "sticker_image",
            args: b,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: d,
            storageKey: null,
          },
          {
            alias: "larger_sticker_image",
            args: [
              { kind: "Literal", name: "height", value: 120 },
              a,
              { kind: "Literal", name: "width", value: 120 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: d,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "sticker_type",
            storageKey: null,
          },
        ],
        type: "Sticker",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "getCometComposerMentionsSearchForOutline",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      a = a.anchor;
      if (a.type !== "character") return null;
      var b = a.getNode();
      if (!b.isSimpleText()) return null;
      a = a.offset;
      return b.getTextContent().slice(0, a);
    }
    function a(a) {
      var b = null;
      a.getViewModel().read(function (a) {
        a = a.getSelection();
        if (a == null) return;
        b = g(a);
      });
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "useCometOutlineHasFocus",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    function a(a) {
      var b = i(!1),
        c = b[0],
        d = b[1];
      h(
        function () {
          return a(function (a) {
            return d(a);
          });
        },
        [a]
      );
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometMentionsResolutionForOutline",
  ["getCometComposerMentionsSearchForOutline", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.startTransition,
      i = b.useEffect,
      j = b.useState;
    function k(a, b) {
      var c = window.getSelection();
      if (c === null || !c.isCollapsed || a === null) return !1;
      var d = c.anchorNode;
      a = a.leadOffset;
      c = c.anchorOffset;
      try {
        b.setStart(d, a), b.setEnd(d, c);
      } catch (a) {
        return !1;
      }
      return !0;
    }
    function a(a, b) {
      var d = j(null),
        e = d[0],
        f = d[1];
      i(
        function () {
          var d = document.createRange(),
            e = null,
            g = null,
            i = null,
            j = function () {
              var j = d,
                l = c("getCometComposerMentionsSearchForOutline")(a);
              if (l === e || j === null) return;
              e = l;
              l = b(l);
              var m = l.dataSource,
                n = l.searchResult;
              if (m === g && n === i) return;
              l = k(n, j);
              g = m;
              i = n;
              !l || m === null || n === null
                ? h(function () {
                    return f(null);
                  })
                : h(function () {
                    return f({ dataSource: m, range: j, searchResult: n });
                  });
            },
            l = a.addListener("update", j);
          return function () {
            (d = null), l();
          };
        },
        [b, a]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometMentionsForOutline.react",
  [
    "CometMentions.react",
    "Keys",
    "emptyFunction",
    "getCometComposerMentionsSearchForOutline",
    "react",
    "recoverableViolation",
    "useCometMentionsLoggingProvider",
    "useCometMentionsResolutionForOutline",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState;
    function a(a) {
      var b = a.addKeyBinding,
        d = a.createMentionNode,
        e = a.dataSourceResolver,
        f = a.editor,
        g = a.hasFocus,
        k = a.onAriaChange;
      a = a.viewItemStrategyRenderer;
      var m = c("useCometMentionsResolutionForOutline")(f, e),
        o = l(!1),
        r = n(f),
        s = r[0],
        t = r[1],
        u = l(null),
        v = q(k);
      j(
        function () {
          g || v();
        },
        [g, v]
      );
      r = i(
        function () {
          v();
        },
        [v]
      );
      j(
        function () {
          return b(function (a) {
            var b = u.current,
              d = o.current;
            if (b === null || !d || s) return "not-handled";
            d = function (b) {
              a.preventDefault();
              a.stopImmediatePropagation();
              b();
              return "handled";
            };
            var e = function () {
              return "not-handled";
            };
            switch (a.keyCode) {
              case c("Keys").UP:
                return d(function () {
                  return b.moveUp();
                });
              case c("Keys").DOWN:
                return d(function () {
                  return b.moveDown();
                });
              case c("Keys").RETURN:
              case c("Keys").TAB:
                if (b.hasSelection)
                  return d(function () {
                    return b.select();
                  });
                else return e();
              case c("Keys").ESC:
                return d(function () {
                  v(), t();
                });
            }
            return e();
          });
        },
        [b, t, v, s]
      );
      k = i(function (a) {
        o.current = a;
      }, []);
      var w = i(
          function (a) {
            if (a) return;
            v();
          },
          [v]
        ),
        x = i(
          function (a) {
            var b = c("getCometComposerMentionsSearchForOutline")(f);
            if (b == null) {
              c("recoverableViolation")(
                "Race condition where the user selected a mention but theres no text in the editor",
                "search"
              );
              return;
            }
            b = e(b);
            b = b.searchResult;
            if (b == null) {
              c("recoverableViolation")(
                "onPressEntry was called and no search result was found for the query",
                "CometComposer"
              );
              return;
            }
            v();
            p(f, d, a, b);
          },
          [d, e, f, v]
        ),
        y = c("useCometMentionsLoggingProvider")();
      if (m === null || s) {
        o.current = !1;
        return null;
      }
      return h.jsx(c("CometMentions.react"), {
        context: m.range,
        dataSource: m.dataSource,
        editorHasFocus: g,
        loggingProvider: y,
        onAriaChange: v,
        onBlur: r,
        onEntriesUpdated: w,
        onFocus: c("emptyFunction"),
        onSelectedEntry: x,
        onVisibilityChange: k,
        position: "below",
        queryString: m.searchResult.matchingString,
        ref: u,
        viewItemStrategyRenderer: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function n(a) {
      var b = m(!1),
        c = b[0],
        d = b[1];
      j(
        function () {
          if (c) {
            var b = null;
            return a.addListener("update", function () {
              var c = a.getTextContent();
              c !== b && ((b = c), d(!1));
            });
          }
        },
        [a, c]
      );
      return k(
        function () {
          return [
            c,
            function () {
              return d(!0);
            },
          ];
        },
        [c]
      );
    }
    function o(a, b, c) {
      c = c;
      for (var d = c; d <= b.length; d++)
        a.substr(-d) === b.substr(0, d) && (c = d);
      return c;
    }
    function p(a, b, d, e) {
      a.update(function (a) {
        a = a.getSelection();
        if (a == null || !a.isCollapsed()) return;
        a = a.anchor;
        if (a.type !== "character") return;
        var f = a.getNode();
        if (!f.isSimpleText()) return;
        a = a.offset;
        var g = f.getTextContent().slice(0, a),
          h = d.getLabel(),
          i = e.replaceableString.length;
        g = o(g, h, i);
        h = a - g;
        if (h < 0) return;
        if (h === 0) {
          i = f.splitText(a);
          g = i[0];
        } else {
          i = f.splitText(h, a);
          g = i[1];
        }
        if (g == null) {
          c("recoverableViolation")(
            "createMentionNodeFromSearchResult failed to find correct offsets. Found offsets: " +
              h +
              ", " +
              a +
              ".",
            "search"
          );
          return;
        }
        f = b({ id: d.getKey(), text: d.getLabel(), type: "Actor" });
        g.replace(f);
        f.selectNext(0, 0);
      }, "createMentionNodeFromSearchResult");
    }
    function q(a) {
      var b = l(void 0),
        c = l(void 0);
      return i(
        function (d, e) {
          var f = b.current,
            g = c.current;
          (f !== d || g !== e) && ((b.current = d), (c.current = e), a(d, e));
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFILiveTypingBroadcastMutation",
  [
    "ChannelClientID",
    "CometRelay",
    "CometUFILiveTypingBroadcastMutation_StartMutation.graphql",
    "CometUFILiveTypingBroadcastMutation_StopMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j =
        h !== void 0
          ? h
          : (h = b(
              "CometUFILiveTypingBroadcastMutation_StartMutation.graphql"
            )),
      k =
        i !== void 0
          ? i
          : (i = b("CometUFILiveTypingBroadcastMutation_StopMutation.graphql"));
    function a(a, b, c, e) {
      c = {
        input: {
          feedback_id: c.feedbackID,
          session_id: d("ChannelClientID").getID(),
        },
      };
      var f;
      e = { onCompleted: e, variables: c };
      a
        ? (f = d("CometRelay").commitMutation(
            b,
            babelHelpers["extends"]({ mutation: j }, e)
          ))
        : (f = d("CometRelay").commitMutation(
            b,
            babelHelpers["extends"]({ mutation: k }, e)
          ));
      return {
        dispose: function () {
          f && f.dispose(), (f = null);
        },
      };
    }
    c = a.bind(null, !0);
    e = a.bind(null, !1);
    g.start = c;
    g.stop = e;
  },
  98
);
__d(
  "AbstractCommentLiveTypingPublisher",
  ["destroyOnUnload", "gkx"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 10 * 1e3,
      h = 10 * 1e3,
      i = 200;
    a = (function () {
      function a() {
        var a = this;
        this.$1 = null;
        this.$2 = null;
        this.$3 = -1;
        b("gkx")("708253") || b("destroyOnUnload")(this.destroy.bind(this));
        window.addEventListener &&
          window.addEventListener("unload", function () {
            a.destroy();
          });
      }
      var c = a.prototype;
      c.destroy = function () {
        this.$4(), this.$5(), this.$6();
      };
      c.handleStartEvent = function () {
        this.$7() || this.$8(), this.$9();
      };
      c.handleStopEvent = function () {
        this.$4();
      };
      c.publishStartEvent = function () {
        throw new Error("publishStartEvent should be overridden by subclass");
      };
      c.publishStopEvent = function () {
        throw new Error("publishStopEvent should be overridden by subclass");
      };
      c.$7 = function () {
        return !!this.$1;
      };
      c.$5 = function () {
        this.$2 && (clearTimeout(this.$2), (this.$2 = null));
      };
      c.$6 = function () {
        this.$1 && (clearTimeout(this.$1), (this.$1 = null));
      };
      c.$9 = function () {
        var a = this,
          b = Date.now(),
          c = this.$3;
        b > c + i &&
          ((this.$3 = b),
          this.$5(),
          (this.$2 = setTimeout(function () {
            a.$4();
          }, h)));
      };
      c.$4 = function () {
        this.$7() && (this.publishStopEvent(), this.$6()), this.$5();
      };
      c.$8 = function () {
        var a = this;
        this.publishStartEvent();
        this.$6();
        this.$1 = setTimeout(function () {
          a.$8();
        }, g);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "CometUFILiveTypingBroadcastPublisher",
  ["AbstractCommentLiveTypingPublisher", "CometUFILiveTypingBroadcastMutation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        var e;
        e = a.call(this) || this;
        e.$CometUFILiveTypingBroadcastPublisher1 = b;
        e.$CometUFILiveTypingBroadcastPublisher2 = c;
        e.$CometUFILiveTypingBroadcastPublisher3 = null;
        e.$CometUFILiveTypingBroadcastPublisher4 = null;
        e.$CometUFILiveTypingBroadcastPublisher5 = d;
        return e;
      }
      var c = b.prototype;
      c.destroy = function () {
        this.$CometUFILiveTypingBroadcastPublisher3 &&
          this.$CometUFILiveTypingBroadcastPublisher3.dispose(),
          this.$CometUFILiveTypingBroadcastPublisher4 &&
            this.$CometUFILiveTypingBroadcastPublisher4.dispose();
      };
      c.handleStartEvent = function () {
        a.prototype.handleStartEvent.call(this);
      };
      c.handleStopEvent = function () {
        a.prototype.handleStopEvent.call(this);
      };
      c.publishStartEvent = function () {
        var a = this;
        if (this.$CometUFILiveTypingBroadcastPublisher3) return;
        this.$CometUFILiveTypingBroadcastPublisher4 &&
          (this.$CometUFILiveTypingBroadcastPublisher4.dispose(),
          (this.$CometUFILiveTypingBroadcastPublisher4 = null));
        var b = function () {
          a.$CometUFILiveTypingBroadcastPublisher3 = null;
        };
        this.$CometUFILiveTypingBroadcastPublisher3 = d(
          "CometUFILiveTypingBroadcastMutation"
        ).start(
          this.$CometUFILiveTypingBroadcastPublisher5,
          {
            actorID: this.$CometUFILiveTypingBroadcastPublisher1,
            feedbackID: this.$CometUFILiveTypingBroadcastPublisher2,
          },
          b
        );
      };
      c.publishStopEvent = function () {
        var a = this;
        if (this.$CometUFILiveTypingBroadcastPublisher4) return;
        this.$CometUFILiveTypingBroadcastPublisher3 &&
          (this.$CometUFILiveTypingBroadcastPublisher3.dispose(),
          (this.$CometUFILiveTypingBroadcastPublisher3 = null));
        var b = function () {
          a.$CometUFILiveTypingBroadcastPublisher4 = null;
        };
        this.$CometUFILiveTypingBroadcastPublisher4 = d(
          "CometUFILiveTypingBroadcastMutation"
        ).stop(
          this.$CometUFILiveTypingBroadcastPublisher5,
          {
            actorID: this.$CometUFILiveTypingBroadcastPublisher1,
            feedbackID: this.$CometUFILiveTypingBroadcastPublisher2,
          },
          b
        );
      };
      return b;
    })(c("AbstractCommentLiveTypingPublisher"));
    g["default"] = a;
  },
  98
);
__d(
  "getUpgradedCometUFIEmojiComposerHandler",
  ["CometUFIOutlineEmojiNode", "EmojiRenderer", "FBEmojiResource"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.addTextNodeTransform(function (a, b) {
        if (!a.isSimpleText()) return;
        var e = a.getTextContent();
        b = b.getSelection();
        var f = a;
        a = void 0;
        var g = 0;
        d("EmojiRenderer")
          .parse(e)
          .forEach(function (b) {
            var e = b.emoji,
              h = b.length;
            b = b.offset;
            var i = e.join("");
            e = c("FBEmojiResource").fromCodepoints(e);
            if (e == null) return;
            e = e.getImageURL(d("CometUFIOutlineEmojiNode").size);
            if (e == null) return;
            var j = i;
            i = d("CometUFIOutlineEmojiNode").createEmojiNode(i, j, e);
            j = b - g;
            e = j + h;
            if (j === 0) {
              b = f.splitText(e);
              a = b[0];
              f = b[1];
            } else {
              h = f.splitText(j, e);
              a = h[1];
              f = h[2];
            }
            g += e;
            a.replace(i);
            a = i;
          });
        b !== null &&
          (!b.anchor.getNode().isAttached() ||
            !b.focus.getNode().isAttached()) &&
          (f !== void 0 ? f.select(0, 0) : a !== void 0 && a.selectNext(0, 0));
      });
      return function () {
        b();
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "getUpgradedCometUFIEmoticonsComposerHandler",
  ["CometUFIOutlineEmojiNode", "EmoticonsList", "FBEmojiResource", "Outline"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      if (!a.isSimpleText()) return;
      b = b.getSelection();
      var e = a.getTextContent();
      b !== null &&
        b.isCollapsed() &&
        b.anchor.type === "character" &&
        b.anchor.key === a.getKey() &&
        (e = e.slice(0, b.anchor.offset));
      var f = e.split(d("EmoticonsList").regexp),
        g = 0,
        h;
      a = a;
      for (var i = 0; i < f.length; i++) {
        var j = f[i];
        if (j !== "") {
          var k = j.length,
            l = g + k,
            m = d("EmoticonsList").emotes[j];
          if (m !== void 0) {
            var n = d("EmoticonsList").emoji[m],
              o = a.getNextSibling();
            o = l === e.length ? d("Outline").isLineBreakNode(o) : e[l] === " ";
            if (o && n != null) {
              o = void 0;
              if (g === 0) {
                var p = a.splitText(g + k);
                o = p[0];
                a = p[1];
              } else {
                p = a.splitText(g, g + k);
                o = p[1];
                a = p[2];
              }
              k = n.length === 5 && n.slice(0, 2) === "1f";
              p = k ? String.fromCodePoint(parseInt("0x" + n, 0)) : m;
              m = k ? p : j;
              k = new (c("FBEmojiResource"))(n);
              j = k.getImageURL(d("CometUFIOutlineEmojiNode").size);
              if (j != null) {
                h = d("CometUFIOutlineEmojiNode").createEmojiNode(p, m, j);
                o.replace(h);
                if (a === void 0) break;
                e = a.getTextContent();
                g = 0;
                continue;
              }
            }
          }
          g = l;
        }
      }
      if (h) {
        n = h;
        b !== null &&
          (!b.anchor.getNode().isAttached() ||
            !b.focus.getNode().isAttached()) &&
          (a ? a.select() : n.selectNext(0, 0));
      }
    }
    function a(a) {
      return a.addTextNodeTransform(h);
    }
    g["default"] = a;
  },
  98
);
__d(
  "getUpgradedCometUFIHashtagComposerHandler",
  ["OutlineHashtagNode", "getHashtagRegex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("getHashtagRegex")();
    function a(a) {
      return a.addTextNodeTransform(function (a) {
        if (!a.isSimpleText()) return;
        var b = a.getTextContent();
        a = a;
        var c = 0;
        while (!0) {
          var e = h.exec(b);
          if (e === null) return;
          var f = e[3].length + 1;
          e = e.index + e[1].length - c;
          f = e + f;
          var g = void 0;
          if (e === 0) {
            var i = a.splitText(f);
            g = i[0];
            a = i[1];
          } else {
            i = a.splitText(e, f);
            g = i[1];
            a = i[2];
          }
          c += f;
          d("OutlineHashtagNode").toggleHashtag(g);
        }
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "UFI2CommentSticker.react",
  [
    "JSResource",
    "UFI2CometRelayCreateFragmentContainer",
    "UFI2CommentSticker_sticker.graphql",
    "UFI2ScaleRect",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = c("lazyLoadComponent")(
        c("JSResource")("Sticker.react").__setRef("UFI2CommentSticker.react")
      );
    function a(a) {
      var b = a.className;
      a = a.sticker;
      var c = a.sticker_type === "AVATAR",
        e = a.sprite_image,
        f = c ? a.larger_sticker_image : a.sticker_image;
      if (f == null) return null;
      c = c ? 120 : 80;
      c = d("UFI2ScaleRect").scaleToContain({
        gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero: !1,
        maxHeight: c,
        maxWidth: c,
        srcHeight: f.height || c,
        srcWidth: f.width || c,
      });
      var g = c.height;
      c = c.width;
      var h = i.jsx("div", {
        style: {
          backgroundImage: "url(" + (f.uri || "") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: c + "px " + g + "px",
          height: g,
          width: c,
        },
      });
      return i.jsx(i.Suspense, {
        fallback: h,
        children: i.jsx(j, {
          accessibilityLabel: a.label,
          animationTrigger: "load_and_hover",
          className: b,
          frameCount: a.frame_count,
          frameRate: a.frame_rate,
          framesPerCol: a.frames_per_column,
          framesPerRow: a.frames_per_row,
          packName: (h = a.pack) == null ? void 0 : h.name,
          sourceHeight: g,
          sourceURI: f.uri,
          sourceWidth: c,
          spriteURI: e == null ? void 0 : e.uri,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "UFI2CommentSticker";
    e = c("UFI2CometRelayCreateFragmentContainer").createFragmentContainer(a, {
      sticker: h !== void 0 ? h : (h = b("UFI2CommentSticker_sticker.graphql")),
    });
    g["default"] = e;
  },
  98
);
__d(
  "CometUFIStickersComposerUpgradedPreviewContent.react",
  [
    "cx",
    "CometUFIStickersComposerUpgradedPreviewContentQuery.graphql",
    "ErrorBoundary.react",
    "FBLogger",
    "RelayModern",
    "SiteData",
    "UFI2CommentSticker.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.environment,
        f = a.loadingIndicatorElement,
        g = a.onError,
        h = a.stickerId;
      return j.jsx(c("ErrorBoundary.react"), {
        onError: g,
        children: j.jsx(d("RelayModern").QueryRenderer, {
          environment: e,
          query:
            i !== void 0
              ? i
              : (i = b(
                  "CometUFIStickersComposerUpgradedPreviewContentQuery.graphql"
                )),
          render: function (a) {
            var b = a.error;
            a = a.props;
            if (b) throw b;
            if (a == null) return f;
            b = a.sticker;
            if (!b) {
              c("FBLogger")("ufi2")
                .addMetadata("UFI", "STICKER_ID", h)
                .mustfix("Failed to fetch a sticker.");
              return null;
            }
            return j.jsx(c("UFI2CommentSticker.react"), {
              className: "mal",
              sticker: b,
            });
          },
          variables: { scale: c("SiteData").pr, stickerId: h },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFILiveTypingBroadcastComposerUpgradedPlugin.react",
  ["CometUFILiveTypingBroadcastPublisher", "FBLogger", "JSScheduler", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = a.feedback,
        d = a.pluginProps,
        e = a.relayEnvironment,
        f = (a = b.viewer_actor) == null ? void 0 : a.id,
        g = d.addCommitListener,
        j = d.addFocusListener,
        k = b.id,
        l = i(!1),
        m = i(null),
        n = d.editor;
      h(
        function () {
          if (l.current === !0) return;
          if (f == null || k == null) {
            c("FBLogger")("ufi2").warn(
              "Failed to fetch `feedback.viewer_actor.id` or `feedback.id` for use in the UFI live typing broadcast plugin. The live typing broadcast is disabled for this UFI."
            );
            l.current = !0;
            return;
          }
          var a = "",
            b = function () {
              if (m.current === null) {
                var a = new (c("CometUFILiveTypingBroadcastPublisher"))(
                  f,
                  k,
                  e
                );
                m.current = a;
              }
              return m.current;
            },
            d = n.addListener("update", function () {
              var d = n.getTextContent().trim();
              if (a !== d) {
                var e = b();
                a = d;
                c("JSScheduler").defer(function () {
                  e.handleStartEvent();
                });
              }
            }),
            h = j(function (a) {
              var b = m.current;
              !a && b !== null && b.handleStopEvent();
            }),
            i = g(function () {
              var a = m.current;
              a !== null && a.handleStopEvent();
              return "continue-commit";
            });
          return function () {
            var a = m.current;
            a !== null && ((m.current = null), a.destroy());
            d();
            h();
            i();
          };
        },
        [f, g, j, n, k, e]
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "upgradedUFI2MentionsComposerPluginCreatorWithTypeaheadViewForOutline",
  [
    "CometComposerMentionsTypeaheadListItemResolver.react",
    "CometMentionsForOutline.react",
    "CometOutlineEventPriority",
    "CometUFIOutlineGenericEntityNode",
    "react",
    "useCometOutlineHasFocus",
    "useFeedComposerCometMentionsDataSourceResolverConfig",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect;
    function a() {
      return function (a) {
        a = a.pluginProps;
        var b = a.addFocusListener,
          e = a.editor,
          f = a.setComposerState,
          g = a.addKeyBinding,
          k = c("useCometOutlineHasFocus")(b);
        a = c("useFeedComposerCometMentionsDataSourceResolverConfig")({
          enableMentionsSeeMoreDecorator: !1,
          limit: 5,
          shouldBootstrapOnLayoutEffect: !1,
        });
        var l = a.bootstrap;
        b = a.resolver;
        a = i(
          function (a) {
            return g(
              a,
              d("CometOutlineEventPriority").CometOutlineEventPriority.CRITICAL
            );
          },
          [g]
        );
        j(
          function () {
            k && l();
          },
          [l, k]
        );
        var m = i(function (a) {
            var b = a.id,
              c = a.text;
            a = a.type;
            return d(
              "CometUFIOutlineGenericEntityNode"
            ).createCometUFIOutlineGenericEntityNode({
              id: b,
              text: c,
              type: a,
            });
          }, []),
          n = i(
            function (a, b) {
              f(function (c) {
                return babelHelpers["extends"]({}, c, {
                  ariaInputs: {
                    "aria-activedescendant": a,
                    "aria-controls": b,
                  },
                });
              });
            },
            [f]
          );
        return h.jsx(c("CometMentionsForOutline.react"), {
          addKeyBinding: a,
          createMentionNode: m,
          dataSourceResolver: b,
          editor: e,
          hasFocus: k,
          onAriaChange: n,
          viewItemStrategyRenderer: c(
            "CometComposerMentionsTypeaheadListItemResolver.react"
          ),
        });
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createUpgradedUFI2MentionsComposerPluginForOutline",
  ["upgradedUFI2MentionsComposerPluginCreatorWithTypeaheadViewForOutline"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c(
      "upgradedUFI2MentionsComposerPluginCreatorWithTypeaheadViewForOutline"
    )();
    g["default"] = a;
  },
  98
);
