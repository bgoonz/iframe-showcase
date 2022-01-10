if (self.CavalryLogger) {
  CavalryLogger.start_js(["1xrsGuo"]);
}

__d(
  "useCometOutlineDragAndDrop",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a, b) {
      var c = b.onDragEnter,
        d = b.onDragLeave,
        e = b.onDragOver,
        f = b.onDrop,
        g = b.onPaste;
      h(
        function () {
          return a.addListener("root", function (a, b) {
            b != null &&
              (c && b.removeEventListener("dragenter", c),
              d && b.removeEventListener("dragleave", d),
              e && b.removeEventListener("dragover", e),
              f && b.removeEventListener("drop", f, !0),
              g && b.removeEventListener("paste", g, !0)),
              a !== null &&
                (c && a.addEventListener("dragenter", c),
                d && a.addEventListener("dragleave", d),
                e && a.addEventListener("dragover", e),
                f && a.addEventListener("drop", f, !0),
                g && a.addEventListener("paste", g, !0));
          });
        },
        [a, c, d, e, f, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometOutlineFileDragAndDrop",
  ["react", "useCometOutlineDragAndDrop"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useRef;
    function a(a) {
      var b = a.editor,
        d = a.isMimeTypeAcceptable,
        e = a.onHover,
        f = e === void 0 ? function () {} : e;
      e = a.onSubmit;
      var g = e === void 0 ? function () {} : e,
        j = i(0),
        k = h(
          function (a) {
            return Array.from(a).filter(d);
          },
          [d]
        );
      a = h(
        function (a) {
          j.current++;
          var b = a.dataTransfer;
          if (b == null) return f([], !0);
          b = k(b.items);
          b.length > 0 && a.preventDefault();
          return f(b, !0);
        },
        [k, f]
      );
      e = h(
        function (a) {
          j.current--;
          if (j.current === 0) return f([], !1);
        },
        [f]
      );
      var l = h(
          function (a) {
            var b = a.dataTransfer;
            if (b == null) return f([], !0);
            b = k(b.items);
            b.length > 0 && a.preventDefault();
            return f(b, !0);
          },
          [k, f]
        ),
        m = h(
          function (a, b) {
            b = k(b.items);
            b = b
              .map(function (a) {
                return a.getAsFile();
              })
              .filter(Boolean);
            if (b.length > 0) {
              a.stopPropagation();
              a.preventDefault();
              return g(b);
            } else return g([]);
          },
          [k, g]
        ),
        n = h(
          function (a) {
            var b = a.dataTransfer;
            j.current = 0;
            f([], !1);
            if (b != null) return m(a, b);
            else return g([]);
          },
          [m, f, g]
        ),
        o = h(
          function (a) {
            var b = a.clipboardData;
            return b == null ? g([]) : m(a, b);
          },
          [m, g]
        );
      c("useCometOutlineDragAndDrop")(b, {
        onDragEnter: a,
        onDragLeave: e,
        onDragOver: l,
        onDrop: n,
        onPaste: o,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometOutlineEmptyListeners",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c = d("react");
    var h = c.useCallback,
      i = c.useEffect,
      j = c.useMemo,
      k = c.useRef,
      l = c.useState;
    function a(a) {
      var b = l(!1),
        c = b[0],
        d = b[1];
      i(
        function () {
          return a(function (a) {
            return d(a);
          });
        },
        [a]
      );
      return c;
    }
    function b(a) {
      var b = j(function () {
          return new Set();
        }, []),
        c = k(!1),
        d = k(!1),
        e = h(
          function (a) {
            var c = Array.from(b);
            for (var d = 0; d < c.length; d++) c[d](a);
          },
          [b]
        ),
        f = h(
          function () {
            var b = a.getTextContent();
            b = b === "" && !d.current;
            c.current !== b && ((c.current = b), e(b));
          },
          [a, e]
        );
      i(f, [f]);
      i(
        function () {
          return a.addListener("update", f);
        },
        [a, f]
      );
      i(
        function () {
          var b = function () {
              (d.current = !0), f();
            },
            c = function () {
              (d.current = !1), f();
            };
          return a.addListener("root", function (a, d) {
            d != null &&
              (d.removeEventListener("compositionstart", b),
              d.removeEventListener("compositionend", c)),
              a !== null &&
                (a.addEventListener("compositionstart", b),
                a.addEventListener("compositionend", c));
          });
        },
        [f, a]
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
    g.useCometOutlineIsEmpty = a;
    g.useCometOutlineEmptyListeners = b;
  },
  98
);
__d(
  "CometUFIOutlineDelightNode",
  ["CometOutlineEntityTextNode"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a, c, d, e, f) {
        a = b.call(this, a, f) || this;
        a.__ufiType = "TextDelightCampaign";
        a.__type = "delight";
        a.__styles = c;
        a.__campaignID = d;
        a.__delightAsset = e;
        return a;
      }
      a.deserialize = function (b) {
        return new a(b.__text, b.__styles, b.__campaignID, b.__delightAsset);
      };
      var c = a.prototype;
      c.clone = function () {
        return new a(
          this.__text,
          this.__styles,
          this.__campaignID,
          this.__delightAsset,
          this.__key
        );
      };
      c.createDOM = function (a) {
        a = b.prototype.createDOM.call(this, a);
        var c = this.__delightAsset.id,
          d = this.__styles,
          e = d.color;
        d = d["font-weight"];
        c != null && a.setAttribute("data-delight-asset", c);
        a.setAttribute("data-delight", "true");
        e != null &&
          d != null &&
          ((a.style.color = e), (a.style.fontWeight = d));
        return a;
      };
      c.getUFIComposerEntity = function (a) {
        return {
          __UFI__: !0,
          id: this.__campaignID,
          isWeak: !1,
          type: this.__ufiType,
        };
      };
      return a;
    })(c("CometOutlineEntityTextNode"));
    function a(a, b, c, d) {
      return new h(a, b, c, d).makeSegmented();
    }
    g.CometUFIOutlineDelightNode = h;
    g.createCometUFIOutlineDelightNode = a;
  },
  98
);
__d(
  "CometUFIComposerInnerForOutline.react",
  ["cr:11238", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react"), (g["default"] = b("cr:11238"));
  },
  98
);
__d(
  "createCometUFIAssociateReplyWithParentComposerPluginForOutline",
  ["useLayoutEffect_SAFE_FOR_SSR"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = a.pluginProps;
      var b = a.addCommandListener,
        d = a.setComposerState;
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          b(function (a) {
            if (a.__type === "SetReplyAssociation") {
              var b = a.commentAssociatedWithReply;
              d(function () {
                return { commentAssociatedWithReply: b };
              });
              return "handled";
            }
            return "not-handled";
          });
        },
        [b, d]
      );
      return null;
    }
    function a() {
      return {
        above: null,
        action: null,
        below: h,
        id: "associate_reply",
        inside: null,
        props: {},
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFIDelightsComposerPluginForOutline",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "CometTextDelightAnimation.entrypoint",
    "CometTextDelightConfig",
    "CometUFIOutlineDelightNode",
    "Outline",
    "ReactDOMComet",
    "getCampaignRegex",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useMemo,
      l = b.useState;
    function m(a) {
      return /[\s\d.,\\\/!$%\^&\*;:{}=\-`~()]/.test(a);
    }
    function n(a) {
      return (
        a instanceof d("CometUFIOutlineDelightNode").CometUFIOutlineDelightNode
      );
    }
    function o(a) {
      var b = d("Outline").createTextNode(a.getTextContent());
      a.replace(b);
    }
    function p(a, b) {
      var e = a.getTextContent();
      if (!a.isSimpleText()) {
        var f = a.getPreviousSibling();
        n(f) && o(f);
        f = a.getNextSibling();
        n(f) && o(f);
        return;
      } else if (e.length === 0) {
        f = a.getPreviousSibling();
        var g = a.getNextSibling();
        d("Outline").isTextNode(f) && !f.isSimpleText() && n(g) && o(g);
        d("Outline").isTextNode(g) && !g.isSimpleText() && n(f) && o(f);
        return;
      }
      g = b.getSelection();
      if (!m(e[0])) {
        f = a.getPreviousSibling();
        n(f) && o(f);
      }
      b = a;
      f = void 0;
      a = 0;
      for (var h in c("CometTextDelightConfig").campaigns) {
        var i = c("CometTextDelightConfig").campaigns[h],
          j = c("getCampaignRegex")(i),
          k = i.id,
          l = i.styles;
        k = c("CometTextDelightConfig").campaigns[k].delight_asset;
        if (k == null) continue;
        var p;
        while ((p = j.exec(e.substr(a))) !== null) {
          if (p === null) break;
          var q = p[1],
            r = p.index + q.length;
          p = r + p[2].length;
          var s = f;
          a += p;
          if (q !== "" && !m(q[q.length - 1])) continue;
          if (r === 0) {
            q = b.getPreviousSibling();
            if (d("Outline").isTextNode(q)) continue;
            q = b.splitText(p);
            f = q[0];
            b = q[1];
          } else {
            q = b.splitText(r, p);
            f = q[1];
            b = q[2];
          }
          if (b) {
            r = b.getTextContent();
            if (r.length > 0 && !m(r[0])) {
              f = s;
              continue;
            }
          }
          p = f.getTextContent();
          q = d("CometUFIOutlineDelightNode").createCometUFIOutlineDelightNode(
            p,
            l,
            i.id,
            k
          );
          f.replace(q);
          f = q;
        }
      }
      g !== null &&
        (!g.anchor.getNode().isAttached() || !g.focus.getNode().isAttached()) &&
        (f !== void 0 ? f.selectNext(0, 0) : b !== void 0 && b.select(0, 0));
    }
    function q(a) {
      a = a.pluginProps;
      var b = a.editor,
        e = d("CometRelay").useRelayEnvironment();
      a = k(
        function () {
          return {
            getEnvironment: function () {
              return e;
            },
          };
        },
        [e]
      );
      a = d("CometRelay").useEntryPointLoader(
        a,
        c("CometTextDelightAnimation.entrypoint")
      );
      var f = a[0],
        g = a[1];
      a = l(!1);
      var m = a[0],
        n = a[1];
      j(
        function () {
          b.registerNodeType(
            "delight",
            d("CometUFIOutlineDelightNode").CometUFIOutlineDelightNode
          );
          return b.addTextNodeTransform(p);
        },
        [b]
      );
      var o = i(
        function (a) {
          a = a.target;
          var b =
            a instanceof Element ? a.getAttribute("data-delight-asset") : null;
          b != null &&
            !m &&
            d("ReactDOMComet").unstable_batchedUpdates(function () {
              g({ id: b }), n(!0);
            });
        },
        [m, g]
      );
      j(
        function () {
          return b.addListener("root", function (a, b) {
            b !== null && b.removeEventListener("click", o),
              a !== null && a.addEventListener("click", o);
          });
        },
        [o, b]
      );
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children:
          m &&
          f != null &&
          h.jsx(d("CometRelay").EntryPointContainer, {
            entryPointReference: f,
            props: {
              onRepeatEnd: function () {
                n(!1);
              },
            },
          }),
      });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function a() {
      return {
        above: null,
        action: null,
        below: q,
        id: "delights",
        inside: null,
        props: {},
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIInsertEmojiComposerActionForOutline.react",
  [
    "fbt",
    "ix",
    "CometPopoverLoadingState.react",
    "CometUFILazyPopoverComposerAction.react",
    "JSResourceForInteraction",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useMemo,
      l = c("JSResourceForInteraction")(
        "CometUFIEmojiPickerPopoverForOutline.react"
      ).__setRef("CometUFIInsertEmojiComposerActionForOutline.react"),
      m = { popoverFallback: { minHeight: "k1c241ex" } };
    function a(a) {
      var b = a.pluginProps;
      a = k(
        function () {
          return { pluginProps: b };
        },
        [b]
      );
      return j.jsx(c("CometUFILazyPopoverComposerAction.react"), {
        fallback: j.jsx(c("CometPopoverLoadingState.react"), {
          withArrow: !0,
          xstyle: m.popoverFallback,
        }),
        icon: d("fbicon")._(i("642536"), 16),
        label: h._("Insert an emoji"),
        popoverProps: a,
        popoverResource: l,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useDeferredModuleOnReady",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    function a(b) {
      var c = i(function () {
          return b.getModuleIfRequireable();
        }),
        a = c[0],
        d = c[1];
      h(
        function () {
          if (a != null) return;
          var c = b.onReady(function (a) {
            d(function () {
              return a;
            });
          });
          return function () {
            c.remove();
          };
        },
        [b, a]
      );
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFIEmojiComposerPluginForOutline",
  [
    "CometUFIInsertEmojiComposerActionForOutline.react",
    "react",
    "requireDeferred",
    "useDeferredModuleOnReady",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = c("requireDeferred")(
        "getUpgradedCometUFIEmojiComposerHandler"
      ).__setRef("createCometUFIEmojiComposerPluginForOutline");
    function j(a) {
      var b = a.pluginProps.editor,
        d = c("useDeferredModuleOnReady")(i);
      h(
        function () {
          if (d != null) return d(b);
        },
        [b, d]
      );
      return null;
    }
    function a(a) {
      return {
        above: null,
        action: function () {
          return c("CometUFIInsertEmojiComposerActionForOutline.react");
        },
        below: j,
        id: "emoji",
        inside: null,
        props: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFIEmoticonsComposerPluginForOutline",
  ["react", "requireDeferred", "useDeferredModuleOnReady"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = c("requireDeferred")(
        "getUpgradedCometUFIEmoticonsComposerHandler"
      ).__setRef("createCometUFIEmoticonsComposerPluginForOutline");
    function j(a) {
      var b = a.pluginProps.editor,
        d = c("useDeferredModuleOnReady")(i);
      h(
        function () {
          if (d != null) return d(b);
        },
        [b, d]
      );
      return null;
    }
    function a(a) {
      return {
        above: null,
        action: null,
        below: j,
        id: "emoticons",
        inside: null,
        props: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIGIFComposerPreviewArea.react",
  ["fbt", "CometImage.react", "CometUFIComposerPreviewArea.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback,
      k = {
        previewImage: {
          borderTopStartRadius: "e72ty7fz",
          borderTopEndRadius: "qlfml3jp",
          borderBottomEndRadius: "inkptoze",
          borderBottomStartRadius: "qmr60zad",
          display: "a8c37x1j",
          height: "idiwt2bm",
          maxWidth: "d2edcug0",
        },
      };
    function l(a) {
      return a.attachment && a.attachment.__type === "GIF"
        ? a.attachment.data
        : null;
    }
    function a(a) {
      var b = a.composerState,
        d = a.setComposerState;
      a = l(b);
      b = j(
        function () {
          d(function () {
            return { attachment: null };
          });
        },
        [d]
      );
      return a == null
        ? null
        : i.jsx(c("CometUFIComposerPreviewArea.react"), {
            label: h._("Remove GIF"),
            onRemove: b,
            children: i.jsx(c("CometImage.react"), {
              height: a.media.preview.height,
              src: a.media.preview.url,
              width: a.media.preview.width,
              xstyle: k.previewImage,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIInsertGIFComposerActionForOutline.react",
  [
    "fbt",
    "ix",
    "CometPopoverLoadingState.react",
    "CometUFILazyPopoverComposerAction.react",
    "JSResourceForInteraction",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useMemo,
      l = c("JSResourceForInteraction")(
        "CometUFIGIFPickerPopoverForOutline.react"
      ).__setRef("CometUFIInsertGIFComposerActionForOutline.react"),
      m = { popoverFallback: { minHeight: "if5txojj" } };
    function a(a) {
      var b = a.pluginProps;
      a = k(
        function () {
          return { pluginProps: b };
        },
        [b]
      );
      return j.jsx(c("CometUFILazyPopoverComposerAction.react"), {
        fallback: j.jsx(c("CometPopoverLoadingState.react"), {
          withArrow: !0,
          xstyle: m.popoverFallback,
        }),
        icon: d("fbicon")._(i("687980"), 16),
        label: h._("Comment with a GIF"),
        popoverProps: a,
        popoverResource: l,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometUFIGIFAttachmentMapper",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a) {
      h(
        function () {
          return a(function (a) {
            return a.__type === "GIF"
              ? { link: { external: { url: a.data.source.url } } }
              : null;
          });
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFIGIFComposerPluginForOutline",
  [
    "CometUFIGIFComposerPreviewArea.react",
    "CometUFIInsertGIFComposerActionForOutline.react",
    "qex",
    "react",
    "useCometUFIGIFAttachmentMapper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      a = a.pluginProps;
      var b = a.addAttachmentMapper,
        d = a.composerState;
      a = a.setComposerState;
      c("useCometUFIGIFAttachmentMapper")(b);
      return h.jsx("div", {
        className: "buofh1pr",
        children: h.jsx(c("CometUFIGIFComposerPreviewArea.react"), {
          composerState: d,
          setComposerState: a,
        }),
      });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function j(a) {
      a = a.pluginProps;
      a = a.composerState;
      return !a || !a.attachment
        ? c("CometUFIInsertGIFComposerActionForOutline.react")
        : null;
    }
    function a(a) {
      a = a.ftentidentifier;
      return {
        above: null,
        action: j,
        below: i,
        id: "gifs",
        inside: null,
        props: { ftentidentifier: c("qex")._("1000665") ? a : null },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFIHashtagComposerPluginForOutline",
  ["react", "requireDeferred", "useDeferredModuleOnReady"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = c("requireDeferred")(
        "getUpgradedCometUFIHashtagComposerHandler"
      ).__setRef("createCometUFIHashtagComposerPluginForOutline");
    function j(a) {
      var b = a.pluginProps.editor,
        d = c("useDeferredModuleOnReady")(i);
      h(
        function () {
          if (d != null) return d(b);
        },
        [b, d]
      );
      return null;
    }
    function a() {
      return {
        above: null,
        action: null,
        below: j,
        id: "hashtag",
        inside: null,
        props: {},
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIMediaUploadComposerActionForOutline.react",
  [
    "fbt",
    "ix",
    "CometUFIActionsContext",
    "CometUFIComposerActionButton.react",
    "UFICommentFileInputAcceptValues",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useContext,
      m = b.useEffect,
      n = b.useRef,
      o = b.useState;
    function a(a) {
      var b = a.pluginProps,
        e = b.composerState.feedbackID;
      a = b.fileIsHoveringOverDropTarget;
      var f = b.mediaUploadError !== null,
        g = l(d("CometUFIActionsContext").CometUFIActionsContext),
        p = g.registerUFIActions,
        q = n(null);
      g = o(!1);
      var r = g[0],
        s = g[1],
        t = k(
          function () {
            var a;
            s(!0);
            (a = q.current) == null ? void 0 : a.click();
          },
          [s]
        );
      m(
        function () {
          if (e == null) return;
          var a = p(e, { uploadMedia: t });
          return function () {
            a && a.dispose();
          };
        },
        [p, t, e]
      );
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx(c("CometUFIComposerActionButton.react"), {
            color: r ? "highlight" : f && !a ? "negative" : "secondary",
            icon: a
              ? d("fbicon")._(i("568448"), 16)
              : d("fbicon")._(i("550098"), 16),
            label: f
              ? h._("There was a problem attaching the file, please try again")
              : h._("Attach a photo or video"),
            onFocusIn: function () {
              return s(!1);
            },
            onPress: t,
          }),
          j.jsx("input", {
            accept: c("UFICommentFileInputAcceptValues").both,
            className: "mkhogb32",
            onChange: function (a) {
              var c = a.target.files.item(0);
              a = b.setComposerState;
              a(function () {
                return {
                  attachment: {
                    __type: "Media",
                    reference: { __type: "File", file: c },
                  },
                };
              });
              s(!1);
            },
            ref: q,
            type: "file",
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
  "cometUFIMediaUploadComposerPluginSupportedTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = ["photo", "video"];
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "CometUFIMediaUploadProgressBar.react",
  ["CometProgressStepper.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.label;
      a = a.value;
      return h.jsx("div", {
        className: "bi6gxh9e aov4n071 oi9244e8 buofh1pr",
        children: h.jsx(c("CometProgressStepper.react"), {
          label: b,
          step: a,
          totalSteps: 100,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometUFIMediaUploadDragAndDrop",
  ["react", "useCometOutlineFileDragAndDrop"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function i(a, b) {
      a(function () {
        return {
          attachment: {
            __type: "Media",
            reference: { __type: "File", file: b },
          },
        };
      });
    }
    function a(a) {
      var b = a.editor,
        d = a.isMimeTypeAcceptable,
        e = a.setComposerState,
        f = a.setFileIsHoveringOverDropTarget;
      a = h(
        function (a, b) {
          f(b);
        },
        [f]
      );
      var g = h(
        function (a) {
          a.length > 0 && i(e, a[0]);
        },
        [e]
      );
      c("useCometOutlineFileDragAndDrop")({
        editor: b,
        isMimeTypeAcceptable: d,
        onHover: a,
        onSubmit: g,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometUFIPreventCommitWhenUploadingFile",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a) {
      var b = a.addCommitListener,
        c = a.composerState;
      h(
        function () {
          return b(function () {
            var a = c.attachment;
            return (a == null ? void 0 : a.__type) === "Media" &&
              (a == null ? void 0 : a.reference.__type) !== "UploadedFile"
              ? "block-commit"
              : "continue-commit";
          });
        },
        [b, c.attachment]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFIMediaUploadComposerPluginForOutline",
  [
    "fbt",
    "CometPlaceholder.react",
    "CometUFIComposerPreviewArea.react",
    "CometUFIMediaUploadComposerActionForOutline.react",
    "CometUFIMediaUploadProgressBar.react",
    "JSResourceForInteraction",
    "cometIsMimeTypeForMedia",
    "cometUFIMediaUploadComposerPluginSupportedTypes",
    "lazyLoadComponent",
    "react",
    "useCometUFIMediaUploadDragAndDrop",
    "useCometUFIPreventCommitWhenUploadingFile",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback,
      k = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometUFIMediaUploadUpgradedPlugin.experimental.react"
        ).__setRef("createCometUFIMediaUploadComposerPluginForOutline")
      );
    function l(a) {
      return ((a = a.attachment) == null ? void 0 : a.__type) === "Media";
    }
    function m(a) {
      if (a.kind !== "file") return !1;
      for (
        var b = c("cometUFIMediaUploadComposerPluginSupportedTypes"),
          e = Array.isArray(b),
          f = 0,
          b = e
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= b.length) break;
          g = b[f++];
        } else {
          f = b.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        switch (g) {
          case "photo":
            if (d("cometIsMimeTypeForMedia").isMimeTypeForPhoto(a.type))
              return !0;
            break;
          case "video":
            if (d("cometIsMimeTypeForMedia").isMimeTypeForVideo(a.type))
              return !0;
            break;
          default:
            g;
        }
      }
      return !1;
    }
    function n(a) {
      var b = a.feedback;
      a = a.pluginProps;
      var d = a.addCommitListener,
        e = a.composerState,
        f = a.editor,
        g = a.setComposerState,
        n = a.setFileIsHoveringOverDropTarget,
        o = l(e);
      c("useCometUFIMediaUploadDragAndDrop")({
        editor: f,
        isMimeTypeAcceptable: m,
        setComposerState: g,
        setFileIsHoveringOverDropTarget: n,
      });
      c("useCometUFIPreventCommitWhenUploadingFile")({
        addCommitListener: d,
        composerState: e,
      });
      f = j(
        function () {
          g(function () {
            return { attachment: null };
          });
        },
        [g]
      );
      n = i.jsx("div", {
        className: "buofh1pr",
        children: i.jsx(c("CometUFIComposerPreviewArea.react"), {
          label: h._("Cancel upload"),
          onRemove: f,
          children: i.jsx(c("CometUFIMediaUploadProgressBar.react"), {
            label: h._("{value}\u0025", [h._param("value", "0")]),
            value: 0,
          }),
        }),
      });
      if (o)
        return i.jsx(c("CometPlaceholder.react"), {
          fallback: n,
          children: i.jsx(k, { feedback: b, pluginProps: a }),
        });
      else return null;
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      a = a.pluginProps;
      a = a.composerState;
      return a.attachment != null
        ? null
        : c("CometUFIMediaUploadComposerActionForOutline.react");
    }
    function a(a) {
      a = a.feedback;
      return {
        above: null,
        action: o,
        below: n,
        id: "media_upload",
        inside: null,
        props: { feedback: a },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFIGroupMentionsComposerPluginForOutline",
  ["react", "useDeferredModuleOnReady"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      var b = a.config,
        d = a.pluginProps;
      a = a.upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE;
      a = c("useDeferredModuleOnReady")(a);
      if (a == null) return null;
      else return h.jsx(a, { config: b, pluginProps: d });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE",
      ]);
      return {
        above: null,
        action: null,
        below: i,
        id: "group_mentions",
        inside: null,
        props: { config: a, upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE: b },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFIMentionsComposerPluginForOutline",
  ["react", "useDeferredModuleOnReady"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      var b = a.config,
        d = a.pluginProps;
      a = a.upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE;
      a = c("useDeferredModuleOnReady")(a);
      if (a == null) return null;
      else return h.jsx(a, { config: b, pluginProps: d });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE",
      ]);
      return {
        above: null,
        action: null,
        below: i,
        id: "mentions",
        inside: null,
        props: { config: a, upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE: b },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "OutlineParagraphNode",
  ["cr:1967614"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:1967614");
  },
  null
);
__d(
  "createCometUFIPrefillMentionComposerPluginForOutline",
  [
    "CometUFIOutlineGenericEntityNode",
    "FBLogger",
    "Outline",
    "OutlineParagraphNode",
    "requireDeferred",
    "useLayoutEffect_SAFE_FOR_SSR",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("UFIODSLogger").__setRef(
      "createCometUFIPrefillMentionComposerPluginForOutline"
    );
    function i(a) {
      a = a.pluginProps;
      var b = a.addCommandListener,
        e = a.editor;
      a = a.setComposerState;
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          b(function (a) {
            if (a.__type === "PrefillMention") {
              h.onReady(function (a) {
                a.bump(
                  "prefill_mention_plugin.prefill_requested.with_implementation",
                  "relay"
                );
              });
              e.update(function (b) {
                var f = a.mentionableEntity,
                  g = e.getTextContent(),
                  h = g.trim().length === 0,
                  i = !1;
                b.getRoot()
                  .getAllTextNodes()
                  .forEach(function (a) {
                    a instanceof
                      d("CometUFIOutlineGenericEntityNode")
                        .CometUFIOutlineGenericEntityNode &&
                      a.getTextContent() === g.trim() &&
                      (i = !0);
                  });
                if (!h && !i) return;
                h = b.getRoot();
                var k = h.getFirstChild();
                if (k instanceof d("Outline").BlockNode) {
                  k.clear();
                  var l = d("Outline").createTextNode();
                  k.append(l);
                  l = l;
                } else if (k === null) {
                  k = d("Outline").createTextNode();
                  h.append(
                    d("OutlineParagraphNode").createParagraphNode().append(k)
                  );
                  l = k;
                } else {
                  h = b.getRoot().getFirstTextNode();
                  if (h === null) {
                    c("FBLogger")("UFIOutlineComposer").mustfix(
                      "Prefill mentions plugin found a nullish targetNode. This should not happen."
                    );
                    return;
                  }
                  l = h;
                }
                k = j(f.getType());
                b = d(
                  "CometUFIOutlineGenericEntityNode"
                ).createCometUFIOutlineGenericEntityNode({
                  id: f.getUniqueID(),
                  text: f.getTitle(),
                  type: k,
                  uri: f.getURI(),
                });
                l.replace(b);
                h = new (d("Outline").TextNode)(" ");
                b.insertAfter(h);
                h.select();
              }, "CometUFIPrefillMentionComposerPlugin");
              return "handled";
            }
            return "not-handled";
          });
        },
        [b, e, a]
      );
      return null;
    }
    function j(a) {
      switch (a) {
        case "Actor":
        case "Application":
        case "CMSObject":
        case "Doc":
        case "Event":
        case "FundraiserPersonForPerson":
        case "FundraiserPersonToCharity":
        case "GeneralGroupContextualProfile":
        case "Group":
        case "GroupAnonAuthorProfile":
        case "GroupCommerceProductItem":
        case "GroupRule":
        case "InstantArticle":
        case "KnowledgeNote":
        case "Menu":
        case "Note":
        case "Page":
        case "Photo":
        case "ProductItem":
        case "ReducedMessagingActor":
        case "Story":
        case "User":
        case "Video":
        case "VideoList":
        case "WorkKnowledgeCollection":
          return a;
        default:
          c("FBLogger")("UFIOutlinePlugin").mustfix(
            "PrefillMention unexpected command entity type " + a
          );
          return "Actor";
      }
    }
    function a() {
      return {
        above: null,
        action: null,
        below: i,
        id: "prefill_mentions",
        inside: null,
        props: Object.freeze({}),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFISetReplyClickedComposerPluginForOutline",
  ["useLayoutEffect_SAFE_FOR_SSR"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = a.pluginProps;
      var b = a.addCommandListener,
        d = a.setComposerState;
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          b(function (a) {
            if (a.__type === "SetReplyClicked") {
              d(function () {
                return { replyTargetClicked: !0 };
              });
              return "handled";
            }
            return "not-handled";
          });
        },
        [b, d]
      );
      return null;
    }
    function a() {
      return {
        above: null,
        action: null,
        below: h,
        id: "set_reply_clicked",
        inside: null,
        props: {},
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "getComposerStateSnapshotterForOutline",
  ["CometLruCache", "memoizeWithArgsWeak"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("CometLruCache").create(20);
    function i(a, b) {
      return JSON.stringify({
        commentID: (b = b) != null ? b : "",
        feedbackID: a,
      });
    }
    function a(a, b) {
      var c = i(a, b);
      return {
        clear: function () {
          h["delete"](c);
        },
        get: function () {
          return h.get(c);
        },
        set: function (a) {
          h.set(c, a);
        },
      };
    }
    b = c("memoizeWithArgsWeak")(a);
    g["default"] = b;
  },
  98
);
__d(
  "createCometStateSnapshotComposerPluginForOutline",
  ["getComposerStateSnapshotterForOutline", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function j(a) {
      a = a.pluginProps;
      var b = a.addCommandListener,
        d = a.addCommitListener,
        e = a.composerState,
        f = a.editor,
        g = a.setComposerState;
      a = e.commentID;
      var j = e.feedbackID,
        k = c("getComposerStateSnapshotterForOutline")(
          j,
          (j = a) != null ? j : null
        ),
        l = i(!1),
        m = i(!1),
        n = i(!1),
        o = i(f.getViewModel());
      h(
        function () {
          if (!l.current) {
            var a = k.get();
            if (a != null) {
              var b = a.state;
              b.editor;
              var c = babelHelpers.objectWithoutPropertiesLoose(b, ["editor"]);
              g(function () {
                return c;
              });
              f.setViewModel(a.viewModel);
            }
            l.current = !0;
          }
          return function () {
            f.getRootElement() == null &&
              !m.current &&
              !n.current &&
              (o.current.markDirty(),
              k.set({ state: e, viewModel: o.current }));
          };
        },
        [k, g, f, e]
      );
      h(
        function () {
          return f.addListener("update", function () {
            f.getRootElement() != null && (o.current = f.getViewModel());
          });
        },
        [f]
      );
      h(
        function () {
          return d(function () {
            m.current = !0;
            k.clear();
            return "continue-commit";
          });
        },
        [k, d]
      );
      h(function () {
        return b(function (a) {
          if (a.__type === "BeforeFinishEdit") {
            n.current = !0;
            k.clear();
            return "handled";
          }
          return "not-handled";
        });
      });
      return null;
    }
    function a() {
      return {
        above: null,
        action: null,
        below: j,
        id: "statesnapshot",
        inside: null,
        props: Object.freeze({}),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIInsertStickerComposerActionForOutline.react",
  [
    "fbt",
    "ix",
    "CometPopoverLoadingState.react",
    "CometStickerPickerCardPopoverRootWithPresetProps",
    "CometUFIEntryPointPopoverComposerAction.react",
    "fbicon",
    "gkx",
    "react",
    "useCometOutlineEmptyListeners",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback;
    b = 274;
    var l = Math.floor(b / 4),
      m = {
        popover: { height: "j707pzvn", width: "hdkcmrsv" },
        popoverFallback: { minHeight: "enf79l09" },
      },
      n = 10;
    function a(a) {
      var b = a.feedbackID;
      a = a.pluginProps;
      var e = a.setComposerState,
        f = a.commentAction,
        g = a.onCommit,
        o = d("useCometOutlineEmptyListeners").useCometOutlineIsEmpty(
          a.addEmptyListener
        ),
        p = a.editor;
      a = k(
        function (a) {
          var b = a.stickerID;
          if (c("gkx")("1632")) {
            a = function (a) {
              return babelHelpers["extends"]({}, a, {
                attachment: { __type: "Sticker", id: b },
                updateSource: "InsertStickerButton",
              });
            };
            o && f === "ADD" ? g(a) : (e(a), p.focus());
          } else
            e(
              function () {
                return {
                  attachment: { __type: "Sticker", id: b },
                  updateSource: "InsertStickerButton",
                };
              },
              function () {
                o && f === "ADD" && g(), p.focus();
              }
            );
        },
        [e, o, f, p, g]
      );
      return j.jsx(
        c("CometUFIEntryPointPopoverComposerAction.react"),
        babelHelpers["extends"](
          {},
          c("CometStickerPickerCardPopoverRootWithPresetProps").props,
          {
            entryPointParams: {
              feedbackID: b,
              flyoutTagsCount: n,
              stickerInterface: "COMMENTS",
            },
            fallback: j.jsx(c("CometPopoverLoadingState.react"), {
              withArrow: !0,
              xstyle: m.popoverFallback,
            }),
            icon: d("fbicon")._(i("687986"), 16),
            label: h._("Comment with a Sticker"),
            otherProps: {
              onSelect: a,
              stickerHeight: l,
              stickerWidth: l,
              xstyle: m.popover,
            },
            popoverEntryPoint: c(
              "CometStickerPickerCardPopoverRootWithPresetProps"
            ).resource,
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIStickersComposerPreviewArea.react",
  [
    "fbt",
    "CometProgressIndicator.react",
    "CometUFIComposerPreviewArea.react",
    "FBLogger",
    "react",
    "requireDeferred",
    "useDeferredModuleOnReady",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback,
      k = c("requireDeferred")(
        "CometUFIStickersComposerUpgradedPreviewContent.react"
      ).__setRef("CometUFIStickersComposerPreviewArea.react");
    function l(a) {
      return a.attachment && a.attachment.__type === "Sticker"
        ? a.attachment.id
        : null;
    }
    function a(a) {
      var b = a.composerState,
        d = a.environment,
        e = a.setComposerState;
      a = l(b);
      b = c("useDeferredModuleOnReady")(k);
      var f = j(
          function () {
            e(function () {
              return { attachment: null };
            });
          },
          [e]
        ),
        g = j(
          function (a) {
            e(function () {
              return { attachment: null };
            }),
              c("FBLogger")("ufi2")
                .catching(a)
                .mustfix("Encountered an error while rendering a sticker.");
          },
          [e]
        ),
        m = i.jsx(c("CometProgressIndicator.react"), { size: "small" });
      return a == null
        ? null
        : i.jsx(c("CometUFIComposerPreviewArea.react"), {
            label: h._("Remove sticker"),
            onRemove: f,
            children:
              b == null
                ? m
                : i.jsx(b, {
                    environment: d,
                    loadingIndicatorElement: m,
                    onError: g,
                    stickerId: a,
                  }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometUFIStickersAttachmentMapper",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a) {
      h(
        function () {
          return a(function (a) {
            return a.__type === "Sticker" ? { media: { id: a.id } } : null;
          });
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFIStickersComposerPluginForOutline",
  [
    "CometUFIInsertStickerComposerActionForOutline.react",
    "CometUFIStickersComposerPreviewArea.react",
    "react",
    "useCometUFIStickersAttachmentMapper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      var b = a.environment;
      a = a.pluginProps;
      var d = a.addAttachmentMapper,
        e = a.composerState;
      a = a.setComposerState;
      c("useCometUFIStickersAttachmentMapper")(d);
      return h.jsx("div", {
        className: "buofh1pr",
        children: h.jsx(c("CometUFIStickersComposerPreviewArea.react"), {
          composerState: e,
          environment: b,
          setComposerState: a,
        }),
      });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function j(a) {
      a = a.pluginProps;
      a = a.composerState;
      return !a || !a.attachment
        ? c("CometUFIInsertStickerComposerActionForOutline.react")
        : null;
    }
    function a(a) {
      return {
        above: null,
        action: j,
        below: i,
        id: "stickers",
        inside: null,
        props: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometUFILiveTypingBroadcastComposerPluginForOutline",
  ["react", "requireDeferred", "useDeferredModuleOnReady"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("requireDeferred")(
        "CometUFILiveTypingBroadcastComposerUpgradedPlugin.react"
      ).__setRef("createCometUFILiveTypingBroadcastComposerPluginForOutline");
    function j(a) {
      var b = a.feedback,
        d = a.pluginProps;
      a = a.relayEnvironment;
      var e = c("useDeferredModuleOnReady")(i);
      return e != null
        ? h.jsx(e, { feedback: b, pluginProps: d, relayEnvironment: a })
        : null;
    }
    function a(a) {
      var b = a.feedback;
      a = a.relayEnvironment;
      return {
        above: null,
        action: null,
        below: j,
        id: "typing_broadcast",
        inside: null,
        props: { feedback: b, relayEnvironment: a },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createDeferredUpgradedUFI2GroupMentionsComposerPluginForOutline",
  ["requireDeferred"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("requireDeferred")(
      "createUpgradedUFI2GroupMentionsComposerPluginForOutline"
    ).__setRef(
      "createDeferredUpgradedUFI2GroupMentionsComposerPluginForOutline"
    );
    g["default"] = a;
  },
  98
);
__d(
  "createDeferredUpgradedUFI2MentionsComposerPluginForOutline",
  ["requireDeferred"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("requireDeferred")(
      "createUpgradedUFI2MentionsComposerPluginForOutline"
    ).__setRef("createDeferredUpgradedUFI2MentionsComposerPluginForOutline");
    g["default"] = a;
  },
  98
);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 * @generated
 * @preserve-whitespace
 * @fullSyntaxTransform
 */ __d(
  "Outline.prod",
  [],
  function $module_Outline_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports
  ) {
    "use strict";
    function l(a) {
      throw Error(
        "Minified Outline error #" +
          a +
          "; see codes.json for the full message or " +
          "use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var aa =
        /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/,
      ba =
        /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
      da = {
        bold: 1,
        underline: 8,
        strikethrough: 4,
        italic: 2,
        code: 16,
        overflowed: 128,
      },
      ea = function ea() {};
    var fa = 0;
    var ha = Array.isArray,
      ia = window.Promise,
      ja =
        "function" === typeof queueMicrotask
          ? queueMicrotask
          : function (a) {
              return ia.resolve().then(a);
            };
    function ka(a, b, c) {
      a = a.getRootElement();
      try {
        return null !== a && a.contains(b) && a.contains(c);
      } catch (_unused) {
        return !1;
      }
    }
    function la(a) {
      return aa.test(a) ? "rtl" : ba.test(a) ? "ltr" : null;
    }
    function q(a) {
      return a.isImmutable() || a.isInert() || a.isSegmented();
    }
    function ma(a) {
      for (; null != a; ) {
        if (3 === a.nodeType) return a;
        a = a.firstChild;
      }
      return null;
    }
    function na(a, b, c) {
      b = da[b];
      return a & b && (null === c || 0 === (c & b))
        ? a ^ b
        : null === c || c & b
        ? a | b
        : a;
    }
    var r = (function () {
      function r(a, b, c) {
        this.key = a;
        this.offset = b;
        this.type = c;
      }
      var _proto = r.prototype;
      _proto.is = function is(a) {
        return (
          this.key === a.key && this.offset === a.offset && this.type === a.type
        );
      };
      _proto.getNode = function getNode() {
        var a = t(this.key);
        null === a && l(20);
        return a;
      };
      return r;
    })();
    function w(a, b, c, d) {
      a.key = b;
      a.offset = c;
      a.type = d;
    }
    var z = (function () {
      function z(a, b, c) {
        this.anchor = a;
        this.focus = b;
        this.isDirty = !1;
        this.textFormat = c;
      }
      var _proto2 = z.prototype;
      _proto2.is = function is(a) {
        return this.anchor.is(a.anchor) && this.focus.is(a.focus);
      };
      _proto2.isCollapsed = function isCollapsed() {
        return this.anchor.is(this.focus);
      };
      _proto2.getNodes = function getNodes() {
        var a = this.anchor.getNode(),
          b = this.focus.getNode();
        return a === b ? [a] : a.getNodesBetween(b);
      };
      _proto2.setTextNodeRange = function setTextNodeRange(a, b, c, d) {
        w(this.anchor, a.__key, b, "character");
        w(this.focus, c.__key, d, "character");
        this.isDirty = !0;
      };
      _proto2.getTextContent = function getTextContent() {
        var a = this.getNodes();
        if (0 === a.length) return "";
        var b = a[0],
          c = a[a.length - 1],
          d = b === this.anchor.getNode(),
          e = this.anchor.offset || 0,
          f = this.focus.offset || 0;
        var g = "";
        a.forEach(function (h) {
          if (A(h)) {
            var k = h.getTextContent();
            h === b
              ? (k =
                  h === c
                    ? e < f
                      ? k.slice(e, f)
                      : k.slice(f, e)
                    : d
                    ? k.slice(e)
                    : k.slice(f))
              : h === c && (k = d ? k.slice(0, f) : k.slice(0, e));
            g += k;
          } else B(h) || D(h) ? (g += "\n") : E(h) && (g += h.getTextContent());
        });
        return g;
      };
      _proto2.applyDOMRange = function applyDOMRange(a) {
        var b = ra();
        a = sa(a.startContainer, a.startOffset, a.endContainer, a.endOffset, b);
        if (null !== a) {
          var _a = a,
            c = _a[0],
            d = _a[1];
          w(this.anchor, c.key, c.offset, c.type);
          w(this.focus, d.key, d.offset, d.type);
        }
      };
      _proto2.clone = function clone() {
        var a = this.anchor,
          b = this.focus;
        return new z(
          new r(a.key, a.offset, a.type),
          new r(b.key, b.offset, b.type),
          this.textFormat
        );
      };
      _proto2.swapPoints = function swapPoints() {
        var a = this.focus,
          b = this.anchor,
          c = b.key,
          d = b.offset,
          e = b.type;
        w(b, a.key, a.offset, a.type);
        w(a, c, d, e);
      };
      _proto2.toggleTextFormatType = function toggleTextFormatType(a) {
        this.textFormat = na(this.textFormat, a, null);
        this.isDirty = !0;
      };
      return z;
    })();
    function ta(a) {
      a: {
        for (; null != a; ) {
          var b = a.__outlineInternalRef;
          if (void 0 !== b) {
            a = b;
            break a;
          }
          a = a.parentNode;
        }
        a = null;
      }
      return null === a ? null : t(a);
    }
    function ua(a, b) {
      var c = a;
      if (1 === c.nodeType && "BR" !== c.nodeName) {
        a = !1;
        c = c.childNodes;
        var d = c.length;
        b === d && ((a = !0), (b = d - 1));
        c = c[b];
        d = ta(c);
        if (B(d)) {
          if (a) {
            d = d.getLastTextNode();
            if (null === d) return null;
            b = d.getTextContentSize();
          } else (d = d.getFirstTextNode()), (b = 0);
        } else A(d) && (b = a ? d.getTextContentSize() : 0);
      } else d = ta(c);
      if (D(d) || (A(d) && d.isInert()))
        return (
          (b = d.getPreviousSibling()),
          A(b) || l(21),
          (a = b.getTextContentSize()),
          new r(b.__key, a, "character")
        );
      if (!A(d)) return null;
      a = ma(c);
      null !== a && 0 !== b && "\u2060" === a.nodeValue[0] && b--;
      "" === d.getTextContent() && (b = 0);
      return new r(d.__key, b, "character");
    }
    function sa(a, b, c, d, e) {
      if (null === a || null === c || !ka(e, a, c)) return null;
      a = ua(a, b);
      if (null === a) return null;
      c = ua(c, d);
      if (null === c) return null;
      if ("character" === a.type && "character" === c.type) {
        d = a.getNode();
        var f = c.getNode(),
          g = d.getTextContentSize();
        if (0 !== g) {
          var h = a.offset,
            k = c.offset;
          d === f && h === k
            ? 0 === b &&
              ((d = d.getPreviousSibling()),
              A(d) &&
                !d.isImmutable() &&
                ((b = d.getTextContentSize()),
                (d = d.__key),
                (a.key = d),
                (c.key = d),
                (a.offset = b),
                (c.offset = b)))
            : h === g &&
              ((b = d.getNextSibling()),
              A(b) && !b.isImmutable() && ((a.key = b.__key), (a.offset = 0)));
        }
        b = e.getViewModel()._selection;
        e.isComposing() &&
          e._compositionKey !== a.key &&
          null !== b &&
          ((e = b.anchor),
          (b = b.focus),
          w(a, e.key, e.offset, e.type),
          w(c, b.key, b.offset, b.type));
      }
      return [a, c];
    }
    function va(a, b, c, d, e, f) {
      var g = F();
      a = new z(new r(a, b, e), new r(c, d, f), 0);
      a.isDirty = !0;
      return (g._selection = a);
    }
    function wa(a, b) {
      a = b.getViewModel()._selection;
      var c = (c = window.event) && c.type;
      var d, e;
      if (
        void 0 === c ||
        null === a ||
        "selectionchange" === c ||
        "beforeinput" === c ||
        "compositionstart" === c ||
        "compositionend" === c
      ) {
        var f = window.getSelection();
        if (null === f) return null;
        c = f.anchorNode;
        d = f.focusNode;
        e = f.anchorOffset;
        f = f.focusOffset;
      } else
        return (
          (b = a.anchor),
          (c = a.focus),
          new z(
            new r(b.key, b.offset, b.type),
            new r(c.key, c.offset, c.type),
            a.textFormat
          )
        );
      b = sa(c, e, d, f, b);
      if (null === b) return null;
      var _b = b,
        g = _b[0],
        h = _b[1];
      return new z(g, h, null === a ? 0 : a.textFormat);
    }
    function H() {
      return F()._selection;
    }
    function xa(a, b, c) {
      for (; null !== a && !c.has(a); ) {
        c.add(a);
        a = b.get(a);
        if (void 0 === a) break;
        a = a.__parent;
      }
    }
    function ya(a) {
      a = a.getTopParentBlockOrThrow();
      if (null !== a.getDirection()) {
        var b = a.getTextContent(!1, !1);
        null === la(b) && a.setDirection(null);
      }
    }
    function za(a) {
      var b = a.getPreviousSibling();
      if (null === b || !A(b) || q(b)) (b = I("")), a.insertBefore(b);
      b = a.getNextSibling();
      if (null === b || !A(b) || q(b)) (b = I("")), a.insertAfter(b);
      return a;
    }
    var Aa = (function () {
      Aa.deserialize = function deserialize() {
        l(22, this.constructor.name);
      };
      var _proto3 = Aa.prototype;
      _proto3.clone = function clone() {
        l(23, this.constructor.name);
      };
      function Aa(a) {
        this.__type = "node";
        this.__flags = 0;
        if (!a) {
          L();
          a = F();
          var b = a._dirtyNodes,
            c = "" + fa++;
          a._nodeMap.set(c, this);
          b.add(c);
          a = c;
        }
        this.__key = a;
        this.__parent = null;
      }
      _proto3.getType = function getType() {
        return this.__type;
      };
      _proto3.isAttached = function isAttached() {
        var a = this.__parent;
        if (null === a) return !1;
        a = t(a);
        return null !== a && a.isAttached();
      };
      _proto3.isSelected = function isSelected() {
        var a = F()._selection,
          b = this.__key;
        return null !== a && a.anchor.key === b && a.focus.key === b;
      };
      _proto3.getFlags = function getFlags() {
        return this.getLatest().__flags;
      };
      _proto3.getKey = function getKey() {
        return this.__key;
      };
      _proto3.getParent = function getParent() {
        var a = this.getLatest().__parent;
        return null === a ? null : t(a);
      };
      _proto3.getParentOrThrow = function getParentOrThrow() {
        var a = this.getParent();
        null === a && l(24, this.__key);
        return a;
      };
      _proto3.getParentBlockOrThrow = function getParentBlockOrThrow() {
        var a = this;
        for (; null !== a; ) {
          if (((a = a.getParent()), B(a))) return a;
        }
        l(25, this.__key);
      };
      _proto3.getTopParentBlock = function getTopParentBlock() {
        var a = this;
        for (; null !== a; ) {
          var b = a.getParent();
          if (Ba(b) && B(a)) return a;
          a = b;
        }
        return null;
      };
      _proto3.getTopParentBlockOrThrow = function getTopParentBlockOrThrow() {
        var a = this.getTopParentBlock();
        null === a && l(26, this.__key);
        return a;
      };
      _proto3.getParents = function getParents() {
        var a = [];
        var b = this.getParent();
        for (; null !== b; ) {
          a.push(b), (b = b.getParent());
        }
        return a;
      };
      _proto3.getPreviousSibling = function getPreviousSibling() {
        var a = this.getParentOrThrow().__children,
          b = a.indexOf(this.__key);
        return 0 >= b ? null : t(a[b - 1]);
      };
      _proto3.getPreviousSiblings = function getPreviousSiblings() {
        var a = this.getParentOrThrow().__children,
          b = a.indexOf(this.__key);
        return a.slice(0, b).map(function (c) {
          return Ca(c);
        });
      };
      _proto3.getNextSibling = function getNextSibling() {
        var a = this.getParentOrThrow().__children,
          b = a.length,
          c = a.indexOf(this.__key);
        return c >= b - 1 ? null : t(a[c + 1]);
      };
      _proto3.getNextSiblings = function getNextSiblings() {
        var a = this.getParentOrThrow().__children,
          b = a.indexOf(this.__key);
        return a.slice(b + 1).map(function (c) {
          return Ca(c);
        });
      };
      _proto3.getCommonAncestor = function getCommonAncestor(a) {
        var b = this.getParents();
        var c = a.getParents();
        a = b.length;
        var d = c.length;
        if (0 === a || 0 === d || b[a - 1] !== c[d - 1]) return null;
        c = new Set(c);
        for (d = 0; d < a; d++) {
          var e = b[d];
          if (c.has(e)) return e;
        }
        return null;
      };
      _proto3.is = function is(a) {
        return null == a ? !1 : this.getKey() === a.getKey();
      };
      _proto3.isBefore = function isBefore(a) {
        var b = this.getCommonAncestor(a);
        var c = this;
        for (;;) {
          var d = c.getParentOrThrow();
          if (d === b) {
            d = d.__children.indexOf(c.__key);
            break;
          }
          c = d;
        }
        for (c = a; ; ) {
          a = c.getParentOrThrow();
          if (a === b) {
            b = a.__children.indexOf(c.__key);
            break;
          }
          c = a;
        }
        return d < b;
      };
      _proto3.isParentOf = function isParentOf(a) {
        var b = this.__key;
        for (; null !== a; ) {
          if (a.__key === b) return !0;
          a = a.getParent();
        }
        return !1;
      };
      _proto3.getNodesBetween = function getNodesBetween(a) {
        var b = [];
        if (this.isBefore(a))
          for (var c = this; ; ) {
            b.push(c);
            if (c === a) break;
            var d = B(c) ? c.getFirstChild() : null;
            if (null !== d) c = d;
            else if (((d = c.getNextSibling()), null !== d)) c = d;
            else {
              c = c.getParentOrThrow();
              b.push(c);
              d = c;
              do {
                null === d && l(27),
                  (c = d.getNextSibling()),
                  (d = d.getParent());
              } while (null === c);
            }
          }
        else {
          for (c = this; ; ) {
            b.push(c);
            if (c === a) break;
            d = B(c) ? c.getLastChild() : null;
            if (null !== d) c = d;
            else if (((d = c.getPreviousSibling()), null !== d)) c = d;
            else {
              c = c.getParentOrThrow();
              b.push(c);
              d = c;
              do {
                null === d && l(27),
                  (c = d.getPreviousSibling()),
                  (d = d.getParent());
              } while (null === c);
            }
          }
          b.reverse();
        }
        return b;
      };
      _proto3.isImmutable = function isImmutable() {
        return 0 !== (this.getLatest().__flags & 1);
      };
      _proto3.isSegmented = function isSegmented() {
        return 0 !== (this.getLatest().__flags & 2);
      };
      _proto3.isInert = function isInert() {
        return 0 !== (this.getLatest().__flags & 4);
      };
      _proto3.isDirectionless = function isDirectionless() {
        return 0 !== (this.getLatest().__flags & 8);
      };
      _proto3.isDirty = function isDirty() {
        return F()._dirtyNodes.has(this.__key);
      };
      _proto3.isComposing = function isComposing() {
        return this.__key === M();
      };
      _proto3.getLatest = function getLatest() {
        var a = t(this.__key);
        null === a && l(28);
        return a;
      };
      _proto3.getWritable = function getWritable() {
        L();
        var a = F(),
          b = a._dirtyNodes;
        var c = a._nodeMap,
          d = this.__key;
        var e = this.getLatest(),
          f = e.__parent;
        null !== f && xa(f, c, a._dirtySubTrees);
        if (b.has(d)) return e;
        a = e.clone();
        a.__parent = f;
        a.__flags = e.__flags;
        B(a)
          ? (a.__children = Array.from(e.__children))
          : A(a) && (a.__format = e.__format);
        a.__key = d;
        e = a.getLatest();
        f = e.__parent;
        b = F();
        var g = b._nodeMap;
        null !== f && xa(f, g, b._dirtySubTrees);
        b._dirtyNodes.add(e.__key);
        c.set(d, a);
        return a;
      };
      _proto3.getTextContent = function getTextContent() {
        return "";
      };
      _proto3.getTextContentSize = function getTextContentSize(a, b) {
        return this.getTextContent(a, b).length;
      };
      _proto3.createDOM = function createDOM() {
        l(29);
      };
      _proto3.updateDOM = function updateDOM() {
        l(30);
      };
      _proto3.setFlags = function setFlags(a) {
        L();
        this.isImmutable() && l(31);
        var b = this.getWritable();
        this.getWritable().__flags = a;
        return b;
      };
      _proto3.makeImmutable = function makeImmutable() {
        L();
        var a = this.getWritable();
        a.__flags |= 1;
        return a;
      };
      _proto3.makeSegmented = function makeSegmented() {
        L();
        var a = this.getWritable();
        a.__flags |= 2;
        return a;
      };
      _proto3.makeInert = function makeInert() {
        L();
        var a = this.getWritable();
        a.__flags |= 4;
        return a;
      };
      _proto3.makeDirectionless = function makeDirectionless() {
        L();
        var a = this.getWritable();
        a.__flags |= 8;
        return a;
      };
      _proto3.remove = function remove() {
        L();
        var a = this.__key,
          b = this.getParent();
        null !== b &&
          ((b = b.getWritable().__children),
          (a = b.indexOf(a)),
          -1 < a && b.splice(a, 1),
          (this.getWritable().__parent = null));
      };
      _proto3.replace = function replace(a, b) {
        L();
        var c;
        var d = this.__key;
        if (b && A(this) && (b = H())) {
          var e = b.anchor.getNode();
          b.isCollapsed() && e.__key === d && (c = b.anchor.offset);
        }
        a = a.getWritable();
        b = a.getParent();
        null !== b &&
          ((b = b.getWritable().__children),
          (e = b.indexOf(a.__key)),
          -1 < e && b.splice(e, 1));
        e = this.getParentOrThrow();
        var f = e.getWritable().__children,
          g = f.indexOf(this.__key);
        b = a.__key;
        -1 < g && f.splice(g, 0, b);
        a.__parent = e.__key;
        this.remove();
        e = a.__flags;
        e & 8 && ya(a);
        (e & 1 || e & 2 || e & 4 || D(a)) && za(a);
        A(a) && void 0 !== c && a.select(c, c);
        M() === d && Da(b);
        return a;
      };
      _proto3.insertAfter = function insertAfter(a) {
        L();
        var b = this.getWritable();
        a = a.getWritable();
        var c = a.getParent();
        if (null !== c) {
          c = c.getWritable().__children;
          var d = c.indexOf(a.__key);
          -1 < d && c.splice(d, 1);
        }
        d = this.getParentOrThrow().getWritable();
        c = a.__key;
        a.__parent = b.__parent;
        d = d.__children;
        var e = d.indexOf(b.__key);
        -1 < e ? d.splice(e + 1, 0, c) : d.push(c);
        c = a.__flags;
        c & 8 && ya(a);
        (c & 1 || c & 2 || c & 4 || D(a)) && za(a);
        return b;
      };
      _proto3.insertBefore = function insertBefore(a) {
        L();
        var b = this.getWritable();
        a = a.getWritable();
        var c = a.getParent();
        if (null !== c) {
          c = c.getWritable().__children;
          var d = c.indexOf(a.__key);
          -1 < d && c.splice(d, 1);
        }
        d = this.getParentOrThrow().getWritable();
        c = a.__key;
        a.__parent = b.__parent;
        d = d.__children;
        var e = d.indexOf(b.__key);
        -1 < e ? d.splice(e, 0, c) : d.push(c);
        c = a.__flags;
        c & 8 && ya(a);
        (c & 1 || c & 2 || c & 4 || D(a)) && za(a);
        return b;
      };
      _proto3.selectNext = function selectNext(a, b) {
        L();
        var c = this.getNextSibling();
        (null !== c && A(c) && !q(c)) || l(32);
        return c.select(a, b);
      };
      return Aa;
    })();
    function t(a) {
      a = F()._nodeMap.get(a);
      return void 0 === a ? null : a;
    }
    function Ca(a) {
      a = t(a);
      null === a && l(33);
      return a;
    }
    function Da(a) {
      var b = ra();
      var c = b._compositionKey;
      b._compositionKey = a;
      null !== c && ((b = t(c)), null !== b && b.getWritable());
      null !== a && ((a = t(a)), null !== a && a.getWritable());
    }
    function M() {
      return ra()._compositionKey;
    }
    function Ea(a, b, c, d, e) {
      if (e === void 0) {
        e = {};
      }
      var f = c._nodeTypes.get(a.__type);
      void 0 === f && l(34);
      f = f.deserialize(a);
      var g = f.__key;
      Ba(f) && F()._nodeMap.set("root", f);
      f.__flags = a.__flags;
      f.__flags & 128 && (f.__flags ^= 128);
      f.__parent = d;
      if (B(f)) {
        d = a.__children;
        for (var k = 0; k < d.length; k++) {
          var h = b.get(d[k]);
          void 0 !== h &&
            ((h = Ea(h, b, c, g, e).getKey()), f.__children.push(h));
        }
      }
      b = null != e ? e.originalSelection : void 0;
      null != b &&
        (a.__key === b.anchor.key &&
          ((e.remappedSelection = e.remappedSelection || {
            anchor: babelHelpers["extends"]({}, b.anchor),
            focus: babelHelpers["extends"]({}, b.focus),
          }),
          (e.remappedSelection.anchor.key = f.__key)),
        a.__key === b.focus.key &&
          ((e.remappedSelection = e.remappedSelection || {
            anchor: babelHelpers["extends"]({}, b.anchor),
            focus: babelHelpers["extends"]({}, b.focus),
          }),
          (e.remappedSelection.focus.key = f.__key)));
      return f;
    }
    var Fa = (function (_Aa) {
      babelHelpers.inheritsLoose(Fa, _Aa);
      function Fa(a) {
        var _this;
        _this = _Aa.call(this, a) || this;
        _this.__type = "decorator";
        _this.__flags = 1;
        return _this;
      }
      var _proto4 = Fa.prototype;
      _proto4.decorate = function decorate() {
        l(14);
      };
      return Fa;
    })(Aa);
    function E(a) {
      return a instanceof Fa;
    }
    var Ga = (function (_Aa2) {
      babelHelpers.inheritsLoose(Ga, _Aa2);
      function Ga(a) {
        var _this2;
        _this2 = _Aa2.call(this, a) || this;
        _this2.__children = [];
        return _this2;
      }
      var _proto5 = Ga.prototype;
      _proto5.getChildren = function getChildren() {
        var a = this.getLatest().__children,
          b = [];
        for (var c = 0; c < a.length; c++) {
          var d = t(a[c]);
          null !== d && b.push(d);
        }
        return b;
      };
      _proto5.getChildrenSize = function getChildrenSize() {
        return this.getLatest().__children.length;
      };
      _proto5.getAllTextNodes = function getAllTextNodes(a) {
        var b = [],
          c = this.getLatest().__children;
        for (var e = 0; e < c.length; e++) {
          var d = t(c[e]);
          !A(d) || (!a && d.isInert())
            ? B(d) && ((d = d.getAllTextNodes(a)), b.push.apply(b, d))
            : b.push(d);
        }
        return b;
      };
      _proto5.getFirstTextNode = function getFirstTextNode(a) {
        var b = this.getChildren();
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          if (A(d) && (a || !d.isInert())) return d;
          if (B(d)) return d.getFirstTextNode();
        }
        return null;
      };
      _proto5.getLastTextNode = function getLastTextNode(a) {
        var b = this.getChildren();
        for (var c = b.length - 1; 0 <= c; c--) {
          var d = b[c];
          if (A(d) && (a || !d.isInert())) return d;
          if (B(d)) return d.getLastTextNode();
        }
        return null;
      };
      _proto5.getFirstChild = function getFirstChild() {
        var a = this.getLatest().__children;
        return 0 === a.length ? null : t(a[0]);
      };
      _proto5.getLastChild = function getLastChild() {
        var a = this.getLatest().__children,
          b = a.length;
        return 0 === b ? null : t(a[b - 1]);
      };
      _proto5.getTextContent = function getTextContent(a, b) {
        if ((!a && this.isInert()) || (!1 === b && this.isDirectionless()))
          return "";
        var c = "";
        var d = this.getChildren(),
          e = d.length;
        for (var f = 0; f < e; f++) {
          var g = d[f];
          c += g.getTextContent(a, b);
          B(g) && f !== e - 1 && (c += "\n\n");
        }
        return c;
      };
      _proto5.getDirection = function getDirection() {
        var a = this.__flags;
        return a & 32 ? "ltr" : a & 64 ? "rtl" : null;
      };
      _proto5.selectEnd = function selectEnd() {
        L();
        var a = H(),
          b = this.__key;
        if (null === a) return va(b, null, b, null, "end", "end");
        w(a.anchor, b, null, "end");
        w(a.focus, b, null, "end");
        a.isDirty = !0;
        return a;
      };
      _proto5.clear = function clear() {
        L();
        var a = this.getWritable();
        this.getChildren().forEach(function (b) {
          return b.remove();
        });
        return a;
      };
      _proto5.append = function append(a) {
        L();
        var b = this.getWritable();
        a = a.getWritable();
        var c = a.getParent();
        if (null !== c) {
          c = c.getWritable().__children;
          var d = c.indexOf(a.__key);
          -1 < d && c.splice(d, 1);
        }
        a.__parent = b.__key;
        b.__children.push(a.__key);
        c = a.__flags;
        c & 8 && ya(a);
        (c & 1 || c & 2 || c & 4 || D(a)) && za(a);
        return b;
      };
      _proto5.insertNewAfter = function insertNewAfter() {
        return null;
      };
      _proto5.canInsertTab = function canInsertTab() {
        return !1;
      };
      _proto5.setDirection = function setDirection(a) {
        L();
        var b = this.getWritable(),
          c = b.__flags;
        c & 32 && (b.__flags ^= 32);
        c & 64 && (b.__flags ^= 64);
        "ltr" === a ? (b.__flags |= 32) : "rtl" === a && (b.__flags |= 64);
        return b;
      };
      return Ga;
    })(Aa);
    function B(a) {
      return a instanceof Ga;
    }
    function Ha(a, b) {
      return b & 1 ? "strong" : b & 2 ? "em" : "span";
    }
    function Ka(a, b, c, d, e) {
      var _a2, _a3;
      a = d.classList;
      d = e.underlineStrikethrough;
      var f = !1;
      var g = b & 8 && b & 4;
      var h = c & 8 && c & 4;
      void 0 !== d &&
        (ha(d) || ((d = d.split(" ")), (e.underlineStrikethrough = d)),
        h
          ? ((f = !0), g || (_a2 = a).add.apply(_a2, d))
          : g && (_a3 = a).remove.apply(_a3, d));
      for (var k in da) {
        var _a4, _a5, _a6;
        (h = da[k]),
          (d = e[k]),
          void 0 !== d &&
            (ha(d) || ((d = d.split(" ")), (e[k] = d)),
            c & h
              ? !f || ("underline" !== k && "strikethrough" !== k)
                ? (0 === (b & h) ||
                    (g && "underline" === k) ||
                    "strikethrough" === k) &&
                  (_a4 = a).add.apply(_a4, d)
                : b & h && (_a5 = a).remove.apply(_a5, d)
              : b & h && (_a6 = a).remove.apply(_a6, d));
      }
    }
    function La(a, b, c) {
      var d = b.firstChild,
        e = c.isComposing();
      e = (q(c) || "" !== a || e ? "" : "\u2060") + a + (e ? "\u00A0" : "");
      null == d ? (b.textContent = e) : d.nodeValue !== e && (d.nodeValue = e);
      d = b.lastChild;
      null != d &&
        ((c = c.getParent()),
        (a = "" === a && null !== c && 1 === c.__children.length) &&
        3 === d.nodeType
          ? ((d = document.createElement("br")), b.appendChild(d))
          : a || 3 === d.nodeType || b.removeChild(d));
    }
    var O = (function (_Aa3) {
      babelHelpers.inheritsLoose(O, _Aa3);
      O.deserialize = function deserialize(a) {
        return new O(a.__text);
      };
      function O(a, b) {
        var _this3;
        _this3 = _Aa3.call(this, b) || this;
        _this3.__text = a;
        _this3.__type = "text";
        _this3.__format = 0;
        return _this3;
      }
      var _proto6 = O.prototype;
      _proto6.clone = function clone() {
        return new O(this.__text, this.__key);
      };
      _proto6.getFormat = function getFormat() {
        return this.getLatest().__format;
      };
      _proto6.isBold = function isBold() {
        return 0 !== (this.getFormat() & 1);
      };
      _proto6.isItalic = function isItalic() {
        return 0 !== (this.getFormat() & 2);
      };
      _proto6.isStrikethrough = function isStrikethrough() {
        return 0 !== (this.getFormat() & 4);
      };
      _proto6.isUnderline = function isUnderline() {
        return 0 !== (this.getFormat() & 8);
      };
      _proto6.isCode = function isCode() {
        return 0 !== (this.getFormat() & 16);
      };
      _proto6.isOverflowed = function isOverflowed() {
        return 0 !== (this.getFormat() & 128);
      };
      _proto6.isUnmergeable = function isUnmergeable() {
        return 0 !== (this.getFlags() & 16);
      };
      _proto6.isSimpleText = function isSimpleText() {
        return (
          "text" === this.__type &&
          !this.isImmutable() &&
          !this.isInert() &&
          !this.isSegmented()
        );
      };
      _proto6.getTextContent = function getTextContent(a, b) {
        return (!a && this.isInert()) || (!1 === b && this.isDirectionless())
          ? ""
          : this.getLatest().__text;
      };
      _proto6.getTextNodeFormat = function getTextNodeFormat(a, b) {
        var c = this.getLatest().__format;
        return na(c, a, b);
      };
      _proto6.createDOM = function createDOM(a) {
        var b = this.__format;
        var c = b & 16 ? "code" : null;
        var d = Ha(this, b),
          e = document.createElement(null === c ? d : c);
        var f = e;
        null !== c && ((f = document.createElement(d)), e.appendChild(f));
        c = f;
        La(this.__text, c, this);
        a = a.text;
        void 0 !== a && Ka(d, 0, b, c, a);
        return e;
      };
      _proto6.updateDOM = function updateDOM(a, b, c) {
        var d = this.__text;
        var e = a.__format;
        a = this.__format;
        var f = e & 16 ? "code" : null,
          g = a & 16 ? "code" : null,
          h = Ha(this, e);
        var k = Ha(this, a);
        if ((null === f ? h : f) !== (null === g ? k : g)) return !0;
        if (f === g && h !== k)
          return (
            (f = b.firstChild),
            null == f && l(6),
            (e = g = document.createElement(k)),
            La(d, e, this),
            (c = c.text),
            void 0 !== c && Ka(k, 0, a, e, c),
            b.replaceChild(g, f),
            !1
          );
        h = b;
        null !== g && null !== f && ((h = b.firstChild), null == h && l(7));
        La(d, h, this);
        b = c.text;
        void 0 !== b && e !== a && Ka(k, e, a, h, b);
        return !1;
      };
      _proto6.setFormat = function setFormat(a) {
        L();
        this.isImmutable() && l(8);
        var b = this.getWritable();
        this.getWritable().__format = a;
        return b;
      };
      _proto6.toggleBold = function toggleBold() {
        return this.setFormat(this.getFormat() ^ 1);
      };
      _proto6.toggleItalics = function toggleItalics() {
        return this.setFormat(this.getFormat() ^ 2);
      };
      _proto6.toggleStrikethrough = function toggleStrikethrough() {
        return this.setFormat(this.getFormat() ^ 4);
      };
      _proto6.toggleUnderline = function toggleUnderline() {
        return this.setFormat(this.getFormat() ^ 8);
      };
      _proto6.toggleCode = function toggleCode() {
        return this.setFormat(this.getFormat() ^ 16);
      };
      _proto6.toggleOverflowed = function toggleOverflowed() {
        return this.setFormat(this.getFormat() ^ 128);
      };
      _proto6.toggleUnmergeable = function toggleUnmergeable() {
        return this.setFlags(this.getFlags() ^ 16);
      };
      _proto6.setTextContent = function setTextContent(a) {
        L();
        this.isImmutable() && l(9);
        var b = this.getWritable();
        var c = this.getTopParentBlock();
        if (null !== c) {
          var d = "" === a && "" === c.getTextContent(!1, !1);
          b.__text = a;
          b = c.getDirection();
          null === b || d
            ? ((a = la(a)), null !== a && c.setDirection(a))
            : null !== b &&
              "" === a &&
              "" === c.getTextContent() &&
              c.setDirection(null);
        } else b.__text = a;
      };
      _proto6.select = function select(a, b) {
        L();
        if (this.isImmutable()) return this.selectNext(0, 0);
        var c = H();
        var d = this.getTextContent();
        var e = this.__key;
        "string" === typeof d
          ? ((d = d.length), void 0 === a && (a = d), void 0 === b && (b = d))
          : (b = a = 0);
        if (null === c) return va(e, a, e, b, "character", "character");
        d = M();
        (d !== c.anchor.key && d !== c.focus.key) || Da(e);
        c.setTextNodeRange(this, a, this, b);
        return c;
      };
      _proto6.spliceText = function spliceText(a, b, c, d) {
        L();
        this.isImmutable() && l(10);
        var e = this.getWritable(),
          f = e.__text,
          g = c.length;
        var h = a;
        0 > h && ((h = g + h), 0 > h && (h = 0));
        d &&
          (null === e.__key && l(11),
          (d = H()),
          null === d && l(12),
          (a += g),
          d.setTextNodeRange(e, a, e, a));
        b = f.slice(0, h) + c + f.slice(h + b);
        e.setTextContent(b);
        return e;
      };
      _proto6.canInsertTextAtEnd = function canInsertTextAtEnd() {
        return !0;
      };
      _proto6.splitText = function splitText() {
        var _a7;
        for (
          var _len = arguments.length, a = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          a[_key] = arguments[_key];
        }
        L();
        this.isImmutable() && l(13);
        var b = this.getTextContent(),
          c = this.__key,
          d = new Set(a);
        a = [];
        var e = b.length,
          f = "";
        for (var g = 0; g < e; g++) {
          "" !== f && d.has(g) && (a.push(f), (f = "")), (f += b[g]);
        }
        "" !== f && a.push(f);
        d = a.length;
        if (0 === d) return [];
        if (a[0] === b) return [this];
        var h = a[0];
        e = this.getParentOrThrow();
        f = e.__key;
        var k;
        this.isSegmented()
          ? ((b = I(h)),
            (b.__parent = f),
            (g = b.__flags),
            (k = b.__format),
            this.remove())
          : ((b = this.getWritable()),
            (b.__text = h),
            (g = b.__flags),
            (k = b.__format));
        var p = H();
        b = [b];
        h = h.length;
        for (var u = 1; u < d; u++) {
          var m = a[u],
            n = m.length;
          m = I(m).getWritable();
          m.__flags = g;
          m.__format = k;
          var x = m.__key;
          n = h + n;
          if (null !== p) {
            var y = p.anchor,
              C = p.focus;
            y.key === c &&
              "character" === y.type &&
              y.offset > h &&
              y.offset <= n &&
              ((y.key = x), (y.offset -= h), (p.isDirty = !0));
            C.key === c &&
              "character" === C.type &&
              C.offset > h &&
              C.offset <= n &&
              ((C.key = x), (C.offset -= h), (p.isDirty = !0));
          }
          h = n;
          m.__parent = f;
          b.push(m);
        }
        a = e.getWritable().__children;
        c = a.indexOf(c);
        d = b.map(function (u) {
          return u.__key;
        });
        (_a7 = a).splice.apply(_a7, [c, 1].concat(d));
        return b;
      };
      return O;
    })(Aa);
    function I(a) {
      if (a === void 0) {
        a = "";
      }
      return new O(a);
    }
    function A(a) {
      return a instanceof O;
    }
    var P = "",
      Q = "",
      Ma,
      R,
      Na,
      Oa,
      Pa,
      Qa,
      S,
      Ra = !1;
    function Sa(a, b) {
      var c = Pa.get(a);
      if (null !== b) {
        var d = T(R, a);
        b.removeChild(d);
      }
      Qa.has(a) || R._keyToDOMMap["delete"](a);
      B(c) && ((a = c.__children), Ta(a, 0, a.length - 1, null));
    }
    function Ta(a, b, c, d) {
      for (; b <= c; ++b) {
        var e = a[b];
        void 0 !== e && Sa(e, d);
      }
    }
    function Ua(a, b, c) {
      var d = Qa.get(a);
      void 0 === d && l(35);
      var e = d.createDOM(Ma);
      var f = d.__flags,
        g = f & 4;
      var h = f & 1;
      var k = R;
      null === a && l(38);
      k = k._keyToDOMMap;
      e.__outlineInternalRef = a;
      k.set(a, e);
      A(d)
        ? e.setAttribute("data-Outline-text", "true")
        : E(d) && e.setAttribute("data-Outline-decorator", "true");
      if (h || g) e.contentEditable = "false";
      g &&
        ((g = e.style),
        (g.pointerEvents = "none"),
        (g.userSelect = "none"),
        g.setProperty("-webkit-user-select", "none"));
      B(d)
        ? (f & 32 ? (e.dir = "ltr") : f & 64 && (e.dir = "rtl"),
          Va(d),
          (a = d.__children),
          Wa(a, 0, a.length - 1, e, null))
        : (E(d) && ((f = d.decorate(R)), null !== f && Xa(a, f)),
          (a = d.getTextContent()),
          (P += a),
          (Q += a));
      null !== b && (null != c ? b.insertBefore(e, c) : b.appendChild(e));
      return e;
    }
    function Wa(a, b, c, d, e) {
      var f = P;
      for (P = ""; b <= c; ++b) {
        Ua(a[b], d, e);
      }
      d.__outlineTextContent = P;
      P = f + P;
    }
    function Ya(a, b) {
      var c = Pa.get(a),
        d = Qa.get(a);
      (void 0 !== c && void 0 !== d) || l(36);
      var e = Ra || Oa.has(a) || Na.has(a);
      var f = T(R, a);
      if (c === d && !e) {
        if (B(c)) {
          var g = f.__outlineTextContent;
          void 0 !== g && ((P += g), (Q += g));
        } else (g = c.getTextContent()), (Q += g), (P += g);
        return f;
      }
      if (d.updateDOM(c, f, Ma))
        return (
          (g = Ua(a, null, null)),
          null === b && l(37),
          b.replaceChild(g, f),
          Sa(a, null),
          g
        );
      if (B(c) && B(d)) {
        if (
          (Va(d),
          (a = c.__flags),
          (b = d.getLatest().__flags),
          b & 32
            ? 0 === (a & 32) && (f.dir = "ltr")
            : b & 64
            ? 0 === (a & 64) && (f.dir = "rtl")
            : (a & 32 || a & 64) && f.removeAttribute("dir"),
          (a = c.__children),
          (d = d.getLatest().__children),
          a !== d || e)
        ) {
          e = d;
          d = P;
          P = "";
          b = a.length;
          c = e.length;
          if (1 === b && 1 === c) {
            if (((g = a[0]), (e = e[0]), g === e)) Ya(g, f);
            else {
              var h = T(R, g);
              e = Ua(e, null, null);
              f.replaceChild(e, h);
              Sa(g, null);
            }
          } else if (0 === b) 0 !== c && Wa(e, 0, c - 1, f, null);
          else if (0 === c)
            0 !== b && (Ta(a, 0, b - 1, null), (f.textContent = ""));
          else {
            var p = b - 1;
            --c;
            var m = f.firstChild,
              n = 0;
            for (b = 0; n <= p && b <= c; ) {
              var k = a[n];
              var u = e[b];
              if (k === u) (m = Ya(u, f).nextSibling), n++, b++;
              else {
                void 0 === g && (g = new Set(a));
                void 0 === h && (h = new Set(e));
                var x = h.has(k),
                  y = g.has(u);
                x
                  ? (y
                      ? ((k = T(R, u)),
                        k === m
                          ? (m = Ya(u, f).nextSibling)
                          : (null != m
                              ? f.insertBefore(k, m)
                              : f.appendChild(k),
                            Ya(u, f)),
                        n++)
                      : Ua(u, f, m),
                    b++)
                  : ((m = T(R, k).nextSibling), Sa(k, f), n++);
              }
            }
            g = n > p;
            h = b > c;
            g && !h
              ? ((g = e[c + 1]),
                (g = void 0 === g ? null : R.getElementByKey(g)),
                Wa(e, b, c, f, g))
              : h && !g && Ta(a, n, p, f);
          }
          f.__outlineTextContent = P;
          P = d + P;
        }
      } else
        E(d) && ((g = d.decorate(R)), null !== g && Xa(a, g)),
          (g = d.getTextContent()),
          (P += g),
          (Q += g);
      return f;
    }
    function Za(a) {
      var b = babelHelpers["extends"]({}, a._decorators);
      return (a._pendingDecorators = b);
    }
    function Xa(a, b) {
      var c = R._pendingDecorators;
      var d = R._decorators;
      if (null === c) {
        if (d[a] === b) return;
        c = Za(R);
      }
      c[a] = b;
    }
    function T(a, b) {
      a = a._keyToDOMMap.get(b);
      void 0 === a && l(39);
      return a;
    }
    function $a(a, b, c) {
      var d = a[0].getWritable(),
        e = d.__key,
        f = M();
      var g = d.getTextContentSize(),
        h = !1;
      for (var k = 1; k < a.length; k++) {
        var p = a[k],
          m = p.getTextContent(),
          n = p.__key;
        f === n && Da(e);
        null !== b &&
          n === b.key &&
          ((b.offset = g + b.offset), (b.key = e), (h = !0));
        null !== c &&
          n === c.key &&
          ((c.offset = g + c.offset), (c.key = e), (h = !0));
        d.spliceText(g, 0, m);
        g += m.length;
        p.remove();
      }
      h && null !== S && (S.isDirty = !0);
    }
    function Va(a) {
      a = a.getChildren();
      var b = [],
        c = null,
        d = null,
        e = null,
        f = null;
      null !== S && ((e = S.anchor), (f = S.focus));
      for (var g = 0; g < a.length; g++) {
        var h = a[g];
        if (
          !A(h) ||
          "text" !== h.__type ||
          h.isImmutable() ||
          h.isSegmented() ||
          h.isUnmergeable()
        )
          1 < b.length && $a(b, e, f), (b = []), (d = c = null);
        else {
          var k = h.__flags,
            p = h.__format;
          (null !== c && k !== c) || (null !== d && p !== d)
            ? (1 < b.length && $a(b, e, f), (b = [h]))
            : b.push(h);
          c = k;
          d = p;
        }
      }
      1 < b.length && $a(b, e, f);
    }
    var U = null,
      V = null,
      W = !1,
      cb = !1,
      db = !1;
    function L() {
      W && l(16);
    }
    function F() {
      null === U && l(17);
      return U;
    }
    function ra() {
      null === V && l(18);
      return V;
    }
    var eb = {
      getRoot: function getRoot() {
        return F()._nodeMap.get("root");
      },
      getNodeByKey: t,
      getSelection: H,
      clearSelection: function clearSelection() {
        F()._selection = null;
      },
      setSelection: function setSelection(a) {
        F()._selection = a;
      },
      createNodeFromParse: function createNodeFromParse(a, b) {
        L();
        var c = ra();
        return Ea(a, b, c, null);
      },
      markNodeAsDirty: function markNodeAsDirty(a) {
        a.getWritable();
      },
      setCompositionKey: Da,
      getCompositionKey: M,
    };
    function fb(a, b) {
      b = b.getViewModel()._selection;
      a = a._selection;
      if (null !== a) {
        if (null === b || a.isDirty || !a.is(b)) return !0;
      } else if (null !== b) return !0;
      return !1;
    }
    function gb(a, b, c, d, e) {
      var f = U,
        g = W,
        h = V;
      U = a;
      W = !1;
      V = e;
      try {
        c && (a._selection = wa(a, e));
        var y = e._compositionKey;
        b(eb);
        if (d) {
          var k = a._nodeMap,
            p = Array.from(e._viewModel._nodeMap);
          for (b = 0; b < p.length; b++) {
            var _p$b = p[b],
              J = _p$b[0],
              G = _p$b[1];
            A(G) && k.has(J) && G.getWritable();
          }
        }
        if (a.hasDirtyNodes()) {
          var m = e._textNodeTransforms;
          if (0 < m.size) {
            var N = a._nodeMap;
            var n = Array.from(a._dirtyNodes),
              u = Array.from(m);
            try {
              cb = !0;
              k = N;
              var x = M();
              for (p = 0; p < n.length; p++) {
                var v = k.get(n[p]);
                if (
                  void 0 !== v &&
                  A(v) &&
                  v.__key !== x &&
                  !D(v) &&
                  v.isAttached() &&
                  !v.isImmutable() &&
                  !v.isSegmented()
                )
                  for (
                    m = 0;
                    m < u.length && (u[m](v, eb), v.isAttached());
                    m++
                  ) {}
              }
            } finally {
              cb = !1;
            }
          }
          var J = Array.from(a._dirtyNodes),
            G = a._nodeMap;
          for (x = 0; x < J.length; x++) {
            var _N = J[x],
              _v = G.get(_N);
            void 0 === _v ||
              _v.isAttached() ||
              (B(_v) && hb(_v, _N, G), G["delete"](_N));
          }
        }
        y !== e._compositionKey && (a._flushSync = !0);
        var C = a._selection;
        if (null !== C) {
          var _J = a._nodeMap,
            _G = C.focus.key;
          (void 0 !== _J.get(C.anchor.key) && void 0 !== _J.get(_G)) || l(19);
        }
      } catch (y) {
        return y;
      } finally {
        (U = f), (W = g), (V = h);
      }
      return null;
    }
    function hb(a, b, c) {
      a = a.__children;
      var d = a.length;
      for (var e = 0; e < d; e++) {
        var f = a[e],
          g = c.get(f);
        void 0 !== g &&
          g.__parent === b &&
          (B(g) && hb(g, f, c), c["delete"](f));
      }
    }
    function X(a, b) {
      var c = a._pendingViewModel,
        d = a._rootElement;
      if (null !== d && null !== c) {
        var e = a._viewModel;
        a._pendingViewModel = null;
        a._viewModel = c;
        var f = U,
          g = W,
          h = V;
        V = a;
        U = c;
        W = !1;
        try {
          var k = c._dirtySubTrees,
            p = c._dirtyNodes,
            m = c._isDirty || c.hasDirtyNodes();
          var oa = c._selection;
          if (m) {
            Y("mutation", a, null);
            try {
              (m = oa),
                (Q = P = ""),
                (R = a),
                (Ma = a._editorThemeClasses),
                (Na = k),
                (Oa = p),
                (Pa = e._nodeMap),
                (Qa = c._nodeMap),
                (S = m),
                (Ra = c._isDirty),
                Ya("root", null),
                (a._textContent = Q),
                (Ma = S = Qa = Pa = Oa = Na = R = void 0);
            } finally {
              Y("mutation", a, d);
            }
          }
          var n = window.getSelection();
          if (null !== n) {
            e = oa;
            var ab = n.anchorNode,
              bb = n.focusNode,
              nb = n.anchorOffset,
              ob = n.focusOffset;
            if (null === e) ka(a, ab, bb) && n.removeAllRanges();
            else {
              var u = e.anchor,
                x = e.focus,
                y = u.key,
                C = x.key,
                J = u.getNode(),
                G = x.getNode(),
                N = T(a, y),
                v = T(a, C);
              if ("character" === u.type) {
                var ca = u.offset;
                var pa = ma(N);
                var Ia = q(J) || "" !== J.getTextContent() ? ca : ca + 1;
              } else (pa = N), (Ia = 0);
              if ("character" === x.type) {
                var _ca = x.offset;
                var qa = ma(v);
                var Ja = q(G) || "" !== G.getTextContent() ? _ca : _ca + 1;
              } else (qa = v), (Ja = 0);
              if (
                null !== pa &&
                null !== qa &&
                (nb !== Ia || ob !== Ja || ab !== pa || bb !== qa)
              )
                try {
                  n.setBaseAndExtent(pa, Ia, qa, Ja);
                } catch (_unused2) {}
            }
          }
        } catch (oa) {
          Y("error", a, oa, b);
          db ||
            (ib(a),
            a._keyToDOMMap.set("root", d),
            (a._pendingViewModel = c),
            (db = !0),
            X(a, "ReconcileRecover"),
            (db = !1));
          return;
        } finally {
          (U = f), (W = g), (V = h);
        }
        b = a._decorators;
        d = a._pendingDecorators || b;
        f = c._nodeMap;
        for (var K in d) {
          f.has(K) || (d === b && (d = Za(a)), delete d[K]);
        }
        K = a._pendingDecorators;
        null !== K &&
          ((a._decorators = K),
          (a._pendingDecorators = null),
          Y("decorator", a, K));
        Y("update", a, c);
        c = a._deferred;
        if (0 !== c.length) {
          for (K = 0; K < c.length; K++) {
            c[K]();
          }
          a._deferred = [];
        }
      }
    }
    function Y(a, b) {
      a = Array.from(b._listeners[a]);
      for (
        var _len2 = arguments.length,
          c = new Array(_len2 > 2 ? _len2 - 2 : 0),
          _key2 = 2;
        _key2 < _len2;
        _key2++
      ) {
        c[_key2 - 2] = arguments[_key2];
      }
      for (b = 0; b < a.length; b++) {
        var _a8;
        (_a8 = a)[b].apply(_a8, c);
      }
    }
    var jb = (function () {
      function jb(a) {
        this._nodeMap = a;
        this._selection = null;
        this._dirtyNodes = new Set();
        this._dirtySubTrees = new Set();
        this._flushSync = this._isDirty = !1;
      }
      var _proto7 = jb.prototype;
      _proto7.hasDirtyNodes = function hasDirtyNodes() {
        return 0 < this._dirtyNodes.size;
      };
      _proto7.isDirty = function isDirty() {
        return this._isDirty;
      };
      _proto7.markDirty = function markDirty() {
        this._isDirty = !0;
      };
      _proto7.getDirtyNodes = function getDirtyNodes() {
        var a = Array.from(this._dirtyNodes),
          b = this._nodeMap,
          c = [];
        for (var d = 0; d < a.length; d++) {
          var e = b.get(a[d]);
          void 0 !== e && c.push(e);
        }
        return c;
      };
      _proto7.read = function read(a) {
        var b = U,
          c = W,
          d = V;
        U = this;
        W = !0;
        V = null;
        try {
          return a(eb);
        } finally {
          (U = b), (W = c), (V = d);
        }
      };
      _proto7.stringify = function stringify(a) {
        var b = this._selection;
        return JSON.stringify(
          {
            _nodeMap: Array.from(this._nodeMap.entries()),
            _selection:
              null === b
                ? null
                : {
                    anchor: {
                      key: b.anchor.key,
                      offset: b.anchor.offset,
                      type: b.anchor.type,
                    },
                    focus: {
                      key: b.focus.key,
                      offset: b.focus.offset,
                      type: b.focus.type,
                    },
                  },
          },
          null,
          a
        );
      };
      return jb;
    })();
    var Z = (function (_Ga) {
      babelHelpers.inheritsLoose(Z, _Ga);
      Z.deserialize = function deserialize() {
        return new Z();
      };
      function Z() {
        var _this4;
        _this4 = _Ga.call(this, "root") || this;
        _this4.__type = "root";
        return _this4;
      }
      var _proto8 = Z.prototype;
      _proto8.clone = function clone() {
        return new Z();
      };
      _proto8.isAttached = function isAttached() {
        return !0;
      };
      _proto8.updateDOM = function updateDOM() {
        return !1;
      };
      return Z;
    })(Ga);
    function kb() {
      return new Z();
    }
    function Ba(a) {
      return a instanceof Z;
    }
    var lb = (function (_Aa4) {
      babelHelpers.inheritsLoose(lb, _Aa4);
      lb.deserialize = function deserialize() {
        return new lb();
      };
      function lb(a) {
        var _this5;
        _this5 = _Aa4.call(this, a) || this;
        _this5.__type = "linebreak";
        return _this5;
      }
      var _proto9 = lb.prototype;
      _proto9.getTextContent = function getTextContent() {
        return "\n";
      };
      _proto9.clone = function clone() {
        return new lb(this.__key);
      };
      _proto9.createDOM = function createDOM() {
        return document.createElement("br");
      };
      _proto9.updateDOM = function updateDOM() {
        return !1;
      };
      return lb;
    })(Aa);
    function D(a) {
      return a instanceof lb;
    }
    function ib(a) {
      var b = kb();
      b = new Map([["root", b]]);
      b = new jb(b);
      var c = a._keyToDOMMap,
        d = a._rootElement;
      Y("mutation", a, null);
      null !== d && (d.textContent = "");
      a._viewModel = b;
      a._pendingViewModel = null;
      a._compositionKey = null;
      a._rootElement = null;
      c.clear();
      a._textContent = "";
      Y("update", a, a._viewModel);
    }
    function mb(a, b, c, d, e) {
      e && a._deferred.push(e);
      e = a._pendingViewModel;
      var f = !1;
      null === e &&
        ((e = a._pendingViewModel = new jb(new Map(a._viewModel._nodeMap))),
        (f = !0));
      b = gb(e, b, f, c, a);
      if (null !== b)
        return (
          Y("error", a, b, d),
          (b = a._viewModel),
          b.markDirty(),
          (a._pendingViewModel = b),
          X(a, "UpdateRecover"),
          !1
        );
      if (!e.hasDirtyNodes() && !fb(e, a))
        return f && (a._pendingViewModel = null), !1;
      e._flushSync
        ? ((e._flushSync = !1), X(a, d))
        : f &&
          ja(function () {
            X(a, d);
          });
      return !0;
    }
    var pb = (function () {
      function pb(a, b) {
        this._rootElement = null;
        this._viewModel = a;
        this._compositionKey = this._pendingViewModel = null;
        this._deferred = [];
        this._keyToDOMMap = new Map();
        this._listeners = {
          decorator: new Set(),
          error: new Set(),
          mutation: new Set(),
          root: new Set(),
          update: new Set(),
        };
        this._editorThemeClasses = b;
        this._textNodeTransforms = new Set();
        this._nodeTypes = new Map([
          ["text", O],
          ["linebreak", lb],
          ["root", Z],
        ]);
        this._decorators = {};
        this._pendingDecorators = null;
        this._textContent = "";
      }
      var _proto10 = pb.prototype;
      _proto10.isComposing = function isComposing() {
        return null != this._compositionKey;
      };
      _proto10.registerNodeType = function registerNodeType(a, b) {
        this._nodeTypes.set(a, b);
      };
      _proto10.addListener = function addListener(a, b) {
        var _this6 = this;
        var c = this._listeners[a];
        c.add(b);
        var d = "root" === a;
        d && b(this._rootElement, null);
        return function () {
          c["delete"](b);
          d ? b(null, _this6._rootElement) : "mutation" === a && b(null);
        };
      };
      _proto10.addTextNodeTransform = function addTextNodeTransform(a) {
        var _this7 = this;
        this._textNodeTransforms.add(a);
        mb(this, ea, !0, "addTextNodeTransform");
        return function () {
          _this7._textNodeTransforms["delete"](a);
        };
      };
      _proto10.getDecorators = function getDecorators() {
        return this._decorators;
      };
      _proto10.getRootElement = function getRootElement() {
        return this._rootElement;
      };
      _proto10.getTextContent = function getTextContent() {
        return this._textContent;
      };
      _proto10.setRootElement = function setRootElement(a) {
        var b = this._rootElement;
        a !== b &&
          ((null !== a && null === b) || ib(this),
          (this._rootElement = a),
          null !== a &&
            (a.setAttribute("data-Outline-editor", "true"),
            this._keyToDOMMap.set("root", a),
            X(this, "setRootElement")),
          Y("root", this, a, b));
      };
      _proto10.getElementByKey = function getElementByKey(a) {
        return this._keyToDOMMap.get(a) || null;
      };
      _proto10.getViewModel = function getViewModel() {
        return this._viewModel;
      };
      _proto10.setViewModel = function setViewModel(a) {
        null !== this._pendingViewModel && X(this, "setViewModel #1");
        this._pendingViewModel = a;
        X(this, "setViewModel #2");
      };
      _proto10.parseViewModel = function parseViewModel(a) {
        var b = JSON.parse(a);
        a = new Map();
        a = new jb(a);
        var c = { originalSelection: b._selection },
          d = W,
          e = V;
        U = a;
        W = !1;
        V = this;
        try {
          var f = new Map(b._nodeMap);
          var g = f.get("root");
          Ea(g, f, this, null, c);
        } finally {
          (U = a), (W = d), (V = e);
        }
        f = c.remappedSelection || c.originalSelection;
        f =
          null === f
            ? null
            : new z(
                new r(f.anchor.key, f.anchor.offset, f.anchor.type),
                new r(f.focus.key, f.focus.offset, f.focus.type),
                0
              );
        a._selection = f;
        a._isDirty = !0;
        return a;
      };
      _proto10.update = function update(a, b, c) {
        cb && l(15);
        return mb(this, a, !1, b, c);
      };
      _proto10.focus = function focus(a) {
        var b = this._rootElement;
        null !== b &&
          (b.focus({ preventScroll: !0 }),
          b.setAttribute("autocapitalize", "off"),
          this.update(
            function (c) {
              var d = c.getSelection();
              null !== d
                ? (d.isDirty = !0)
                : ((c = c.getRoot().getLastTextNode()),
                  null !== c && c.select());
            },
            "focus",
            function () {
              b.removeAttribute("autocapitalize");
              a && a();
            }
          ));
      };
      _proto10.canShowPlaceholder = function canShowPlaceholder() {
        if (this.isComposing() || "" !== this._textContent) return !1;
        var a = this._viewModel._nodeMap,
          b = a.get("root").__children,
          c = b.length;
        if (1 < c) return !1;
        for (var e = 0; e < c; e++) {
          var d = a.get(b[e]);
          if (B(d)) {
            if ("paragraph" !== d.__type) return !1;
            d = d.__children;
            for (var f = 0; f < d.length; f++) {
              var g = a.get(d[f]);
              if (!A(g)) return !1;
            }
          }
        }
        return !0;
      };
      return pb;
    })();
    exports.BlockNode = Ga;
    exports.DecoratorNode = Fa;
    exports.RootNode = Z;
    exports.TextNode = O;
    exports.createEditor = function (a) {
      var b = kb();
      b = new Map([["root", b]]);
      b = new jb(b);
      return new pb(b, a || {});
    };
    exports.createLineBreakNode = function () {
      return new lb();
    };
    exports.createRootNode = kb;
    exports.createTextNode = I;
    exports.isBlockNode = B;
    exports.isDecoratorNode = E;
    exports.isLineBreakNode = D;
    exports.isRootNode = Ba;
    exports.isTextNode = A;
  },
  null
);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 * @generated
 * @preserve-whitespace
 * @fullSyntaxTransform
 */ __d(
  "OutlineParagraphNode.prod",
  ["Outline"],
  function $module_OutlineParagraphNode_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports
  ) {
    "use strict";
    var d = (function (_b$BlockNode) {
      babelHelpers.inheritsLoose(d, _b$BlockNode);
      d.deserialize = function deserialize() {
        return new d();
      };
      function d(a) {
        var _this;
        _this = _b$BlockNode.call(this, a) || this;
        _this.__type = "paragraph";
        return _this;
      }
      var _proto = d.prototype;
      _proto.clone = function clone() {
        return new d(this.__key);
      };
      _proto.createDOM = function createDOM(a) {
        var c = document.createElement("p");
        a = a.paragraph;
        void 0 !== a && (c.className = a);
        return c;
      };
      _proto.updateDOM = function updateDOM() {
        return !1;
      };
      _proto.insertNewAfter = function insertNewAfter() {
        var a = e(),
          c = this.getDirection();
        a.setDirection(c);
        this.insertAfter(a);
        return a;
      };
      return d;
    })(require("Outline").BlockNode);
    function e() {
      return new d();
    }
    exports.ParagraphNode = d;
    exports.createParagraphNode = e;
    exports.isParagraphNode = function (a) {
      return a instanceof d;
    };
  },
  null
);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 * @generated
 * @preserve-whitespace
 * @fullSyntaxTransform
 */ __d(
  "useOutlineDecorators.prod",
  ["ReactDOMComet", "react"],
  function $module_useOutlineDecorators_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports
  ) {
    "use strict";
    var c_react;
    var d = c_react || (c_react = require("react"));
    var h =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement,
      l = h && "documentMode" in document ? document.documentMode : null;
    h && /Win/.test(navigator.platform);
    h && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    h && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    h && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
    h && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
    h && /^(?=.*Chrome).*/i.test(navigator.userAgent);
    h && "InputEvent" in window && !l
      ? "getTargetRanges" in new window.InputEvent("input")
      : !1;
    var m = h ? d.useLayoutEffect : d.useEffect;
    module.exports = function (b) {
      var _d$useState = d.useState(function () {
          return b.getDecorators();
        }),
        f = _d$useState[0],
        n = _d$useState[1];
      m(
        function () {
          return b.addListener("decorator", function (e) {
            require("ReactDOMComet").flushSync(function () {
              n(e);
            });
          });
        },
        [b]
      );
      return d.useMemo(
        function () {
          var e = [],
            k = Object.keys(f);
          for (var g = 0; g < k.length; g++) {
            var c = k[g];
            var p = f[c];
            c = b.getElementByKey(c);
            null !== c && e.push(require("ReactDOMComet").createPortal(p, c));
          }
          return e;
        },
        [f, b]
      );
    };
  },
  null
);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 * @generated
 * @preserve-whitespace
 * @fullSyntaxTransform
 */ __d(
  "useOutlinePlainText.prod",
  [
    "Outline",
    "OutlineHashtagNode",
    "OutlineHistoryHelpers",
    "OutlineParagraphNode",
    "react",
  ],
  function $module_useOutlinePlainText_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports
  ) {
    "use strict";
    var c_react;
    var q = c_react || (c_react = require("react"));
    var y =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement,
      aa = y && "documentMode" in document ? document.documentMode : null;
    y && /Win/.test(navigator.platform);
    y && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var z = y && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    y && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
    var B = y && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
    y && /^(?=.*Chrome).*/i.test(navigator.userAgent);
    var C =
        y && "InputEvent" in window && !aa
          ? "getTargetRanges" in new window.InputEvent("input")
          : !1,
      F = y ? q.useLayoutEffect : q.useEffect;
    function G(a, b) {
      return "selectionchange" === a ||
        "keyup" === a ||
        "pointerup" === a ||
        "pointercancel" === a
        ? b.ownerDocument
        : b;
    }
    function ba(a, b, c) {
      F(
        function () {
          if (!c) {
            var d = [],
              e = [];
            var _loop = function _loop(f) {
              var _a$f = a[f],
                g = _a$f[0],
                k = _a$f[1],
                h = function h(l) {
                  k(l, b);
                };
              d.push(function (l) {
                G(g, l).addEventListener(g, h);
              });
              e.push(function (l) {
                G(g, l).removeEventListener(g, h);
              });
            };
            for (var f = 0; f < a.length; f++) {
              _loop(f);
            }
            return b.addListener("root", function (f, g) {
              null !== g &&
                e.forEach(function (k) {
                  return k(g);
                });
              null !== f &&
                d.forEach(function (k) {
                  return k(f);
                });
            });
          }
        },
        [b, a, c]
      );
    }
    function H(a) {
      return a.isImmutable() || a.isInert();
    }
    function I(a) {
      throw Error(
        "Minified Outline error #" +
          a +
          "; see codes.json for the full message or " +
          "use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function J(a) {
      a.isCollapsed() && K(a, !0, "lineboundary", !1);
      L(a);
    }
    function M(a) {
      a.isCollapsed() && K(a, !1, "lineboundary", !1);
      L(a);
    }
    function N(a) {
      a.isCollapsed() && K(a, !0, "word", !1);
      L(a);
    }
    function O(a) {
      a.isCollapsed() && K(a, !1, "word", !1);
      L(a);
    }
    function ca(a, b) {
      var c = a.anchor;
      a = a.focus;
      var d = c.getNode(),
        e = a.getNode();
      if (d === e && "character" === c.type && "character" === a.type) {
        var f = c.offset,
          g = a.offset;
        var k = f < g;
        e = k ? f : g;
        g = k ? g : f;
        f = g - 1;
        e !== f &&
          ((d = d.getTextContent().slice(e, g)),
          /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(d) ||
            (b ? (a.offset = f) : (c.offset = f)));
      }
    }
    function da(a) {
      var b = a.anchor;
      if ("character" === b.type) {
        b = b.getNode();
        var c = b.getTextContent();
        a = a.anchor.offset;
        if (0 === a && b.isSimpleText()) {
          if (
            ((a = b.getPreviousSibling()),
            require("Outline").isTextNode(a) &&
              require("OutlineHashtagNode").isHashtagNode(a))
          ) {
            a.select();
            var d = a.getTextContent();
            a.setTextContent(d + c);
            b.remove();
          }
        } else
          require("OutlineHashtagNode").isHashtagNode(b) &&
            a === b.getTextContentSize() &&
            ((a = b.getNextSibling()),
            require("Outline").isTextNode(a) &&
              a.isSimpleText() &&
              ((d = a.getTextContent()), b.setTextContent(c + d), a.remove()));
      }
    }
    function P(a, b) {
      if (a.isCollapsed()) {
        K(a, b, "character", !1);
        var c = a.anchor,
          d = a.focus;
        if (!a.isCollapsed()) {
          d = "character" === d.type ? d.getNode() : null;
          c = "character" === c.type ? c.getNode() : null;
          if (null !== d && d.isSegmented()) {
            Q(d, b);
            return;
          }
          if (null !== c && c.isSegmented()) {
            Q(c, b);
            return;
          }
          ca(a, b);
        } else if (
          b &&
          ((b = c.getNode().getParentOrThrow()),
          (d = b.getType()),
          0 === c.offset && "paragraph" !== d)
        ) {
          var e = require("OutlineParagraphNode").createParagraphNode();
          b.getChildren().forEach(function (f) {
            return e.append(f);
          });
          "listitem" === d
            ? ((a = b.getParentOrThrow()),
              1 === a.getChildrenSize()
                ? a.replace(e)
                : (a.insertBefore(e), b.remove()))
            : b.replace(e);
          return;
        }
      }
      L(a);
      da(a);
    }
    function Q(a, b) {
      var c = a.getTextContent().split(/\s/g);
      b ? c.pop() : c.shift();
      c = c.join(" ");
      var d = b ? a.getNextSibling() : a.getPreviousSibling();
      require("Outline").isTextNode(d) &&
        ("" === c ? a.remove() : a.setTextContent(c),
        b ? d.select(0, 0) : d.select());
    }
    function K(a, b, c, d) {
      var e = window.getSelection();
      var f = a.focus.getNode();
      var g = a.focus.offset,
        k = b ? f.getPreviousSibling() : f.getNextSibling();
      if (
        !b ||
        0 !== g ||
        null !== k ||
        null !== f.getParentOrThrow().getPreviousSibling()
      ) {
        var h = f.getTextContentSize();
        f = b
          ? 0 === g && "" === f.getTextContent() && !H(f)
          : g === h &&
            require("Outline").isTextNode(k) &&
            !H(k) &&
            "" === k.getTextContent();
        e.modify(d ? "move" : "extend", b ? "backward" : "forward", c);
        f &&
          "character" === c &&
          e.modify(d ? "move" : "extend", b ? "backward" : "forward", c);
        0 < e.rangeCount &&
          ((b = e.getRangeAt(0)),
          a.applyDOMRange(b),
          d ||
            (e.anchorNode === b.startContainer &&
              e.anchorOffset === b.startOffset) ||
            a.swapPoints());
      }
    }
    function L(a) {
      R(a, "");
    }
    function S(a, b) {
      var c = require("Outline").createLineBreakNode();
      b ? T(a, [c], !0) : T(a, [c]) && c.selectNext(0, 0);
    }
    function T(a, b, c) {
      var _a;
      a.isCollapsed() || L(a);
      a = a.anchor;
      "character" !== a.type && I(0);
      var d = a.offset,
        e = a.getNode(),
        f = e.getTextContent().length;
      a = [];
      var g = e.getNextSiblings(),
        k = e.getTopParentBlockOrThrow();
      if (0 === d)
        (d = require("Outline").createTextNode("")),
          e.insertBefore(d),
          a.push(e);
      else if (d === f) d = e;
      else {
        if (H(e)) return !1;
        var _e$splitText = e.splitText(d);
        d = _e$splitText[0];
        e = _e$splitText[1];
        a.push(e);
      }
      e = d;
      (_a = a).push.apply(_a, g);
      for (g = 0; g < b.length; g++) {
        (f = b[g]),
          require("Outline").isBlockNode(f) &&
            require("Outline").isTextNode(d) &&
            (d = k),
          d.insertAfter(f),
          (d = f);
      }
      if (require("Outline").isBlockNode(d)) {
        if (
          ((b = d.getLastTextNode()),
          require("Outline").isTextNode(b) || I(4),
          c ? e.select() : b.select(),
          0 !== a.length)
        )
          for (c = b, b = 0; b < a.length; b++) {
            (k = a[b]), c.insertAfter(k), (c = k);
          }
      } else
        require("Outline").isTextNode(d)
          ? c
            ? e.select()
            : d.select()
          : ((a = d.getPreviousSibling()),
            require("Outline").isTextNode(a) && a.select());
      return !0;
    }
    function U(a, b) {
      var c = b.split(/\r?\n/);
      if (1 === c.length) R(a, b);
      else {
        b = [];
        var d = c.length;
        for (var e = 0; e < d; e++) {
          b.push(require("Outline").createTextNode(c[e])),
            e !== d - 1 && b.push(require("Outline").createLineBreakNode());
        }
        T(a, b);
      }
    }
    function R(a, b) {
      var c = a.getNodes(),
        d = c.length,
        e = a.anchor,
        f = a.focus,
        g = a.textFormat,
        k = c[0];
      require("Outline").isTextNode(k) || I(5);
      ("character" === e.type && "character" === f.type) || I(0);
      var h = e.offset,
        l = f.offset;
      f = k.getTextContent().length;
      var p = k === e.getNode();
      if (k.isSegmented() || !k.canInsertTextAtEnd())
        if (a.isCollapsed() && l === f) {
          if (
            ((e = k.getNextSibling()),
            require("Outline").isTextNode(e) ||
              ((e = require("Outline").createTextNode()), k.insertAfter(e)),
            e.select(0, 0),
            (k = e),
            "" !== b)
          ) {
            R(a, b);
            return;
          }
        } else
          k.isSegmented() &&
            ((e = require("Outline").createTextNode(k.getTextContent())),
            k.replace(e, !0),
            (k = e));
      var m;
      if (1 === d) {
        if (H(k))
          (c = require("Outline").createTextNode(b)), k.replace(c), c.select();
        else {
          c = k.getFormat();
          m = h > l ? l : h;
          h = h > l ? h : l;
          if (m === h && c !== g)
            if ("" === k.getTextContent()) k.setFormat(g);
            else {
              var _k$splitText = k.splitText(m);
              c = _k$splitText[0];
              k = require("Outline").createTextNode(b);
              k.setFormat(g);
              c.insertAfter(k);
              k.select();
              return;
            }
          k.spliceText(m, h - m, b, !0);
          k.isComposing() &&
            "character" === a.anchor.type &&
            (a.anchor.offset -= b.length);
        }
      } else {
        g = d - 1;
        var n = c[g];
        d = new Set(k.getParents());
        e = new Set(n.getParents());
        var r = k.getParent();
        var t = n.getParent();
        var E = !1,
          D = !1;
        m = p ? h : l;
        h = p ? l : h;
        h === n.getTextContentSize()
          ? (n.remove(), (D = !0))
          : H(n)
          ? ((D = !0),
            (h = require("Outline").createTextNode("")),
            n.replace(h))
          : require("Outline").isTextNode(n) &&
            (n.isSegmented() &&
              ((l = require("Outline").createTextNode(n.getTextContent())),
              n.replace(l, !0),
              (n = l)),
            n.spliceText(0, h, "", !1));
        if (
          require("Outline").isBlockNode(r) &&
          require("Outline").isBlockNode(t)
        ) {
          h = t.getChildren();
          l = new Set(c);
          r = r.is(t);
          for (p = h.length - 1; 0 <= p; p--) {
            var A = h[p];
            if (A.is(k)) break;
            A.isAttached() &&
              (!l.has(A) || A.is(n) ? r || k.insertAfter(A) : A.remove());
          }
          if (!r)
            for (n = t; null !== n; ) {
              0 === n.getChildrenSize() && e["delete"](n), (n = n.getParent());
            }
        }
        H(k)
          ? ((E = !0),
            (b = require("Outline").createTextNode(b)),
            k.replace(b),
            b.select())
          : (k.spliceText(m, f - m, b, !0),
            k.isComposing() &&
              "character" === a.anchor.type &&
              (a.anchor.offset -= b.length));
        for (k = 1; k < g; k++) {
          (b = c[k]), (!E && d.has(b)) || (!D && e.has(b)) || b.remove();
        }
      }
    }
    var V = !1;
    function W(a, b) {
      b = b.__outlineInternalRef;
      return void 0 !== b ? a.getNodeByKey(b) : null;
    }
    function X(a, b) {
      for (; null != b; ) {
        var c = W(a, b);
        if (null !== c) return c;
        b = b.parentNode;
      }
      return null;
    }
    function ia(a) {
      return a.getViewModel().read(function (b) {
        return b.getSelection();
      });
    }
    function Y(a, b, c) {
      var d = a.anchor,
        e = a.focus;
      if ("character" !== d.type || "character" !== e.type) return !0;
      var f = d.offset;
      e = e.offset;
      d = d.getNode().getTextContentSize();
      c = c ? 2 > f || 2 > e : f > d - 2 || e > d - 2;
      return a.isCollapsed() ? b || c : b && c;
    }
    function ja(a) {
      a.preventDefault();
    }
    function ka(a, b) {
      a.preventDefault();
      b.update(function (c) {
        var d = a.clipboardData;
        c = c.getSelection();
        if (null !== c && null != d) {
          var e = window.getSelection();
          if (!e.isCollapsed) {
            var f = e.getRangeAt(0);
            f &&
              ((e = document.createElement("div")),
              (f = f.cloneContents()),
              e.appendChild(f),
              d.setData("text/html", e.innerHTML));
            d.setData("text/plain", c.getTextContent());
          }
        }
      }, "onCopyForPlainText");
    }
    function la(a, b, c) {
      return (
        b.isSegmented() ||
        (a.isCollapsed() &&
          (!c || b.getTextContentSize() === a.anchor.offset) &&
          !b.canInsertTextAtEnd())
      );
    }
    function ma(a, b, c) {
      var d = X(b, a);
      if (require("Outline").isTextNode(d) && !d.isDirty()) {
        var e = a.nodeValue;
        a = e.replace("\u2060", "");
        d.isComposing() && "\u00A0" === a[a.length - 1] && (a = a.slice(0, -1));
        if (a !== d.getTextContent()) {
          var f = d;
          H(f) ? (b.markNodeAsDirty(f), (f = !0)) : (f = !1);
          if (!f)
            if (c.isComposing() && !d.isComposing()) b.markNodeAsDirty(d);
            else {
              c = b.getSelection();
              f = window.getSelection();
              var g = null === f || 0 === f.rangeCount ? null : f.getRangeAt(0);
              if (null === f || null === c || null === g) d.setTextContent(a);
              else {
                var k = d.getTextContent();
                c.applyDOMRange(g);
                var h = d.getKey();
                if (!C && null !== c) {
                  g = c.anchor;
                  var l = c.focus;
                  if (
                    "character" === g.type &&
                    "character" === l.type &&
                    g.key === h &&
                    (d.getFormat() !== c.textFormat ||
                      (0 === a.indexOf(k) && la(c, d, !1)))
                  ) {
                    e = c.isCollapsed();
                    a = a.slice(k.length);
                    b.markNodeAsDirty(d);
                    g.offset -= a.length;
                    0 > g.offset && (g.offset = 0);
                    e && (l.offset = g.offset);
                    R(c, a);
                    return;
                  }
                }
                d.isSegmented() &&
                  ((b = require("Outline").createTextNode(k)),
                  d.replace(b, !0),
                  (d = b));
                d.setTextContent(a);
                c.isCollapsed() &&
                  c.anchor.key === h &&
                  "\u2060" === e[0] &&
                  ((b = f.focusOffset - 1), d.select(b, b));
              }
            }
        }
      }
    }
    function na(a, b) {
      var c = a.inputType;
      "deleteCompositionText" !== c &&
        "insertCompositionText" !== c &&
        b.update(function (d) {
          var e = d.getSelection();
          if (null !== e)
            if ("deleteContentBackward" === c)
              d.setCompositionKey(null), a.preventDefault(), P(e, !0);
            else {
              var f = a.data;
              if (e.isCollapsed() && a.getTargetRanges) {
                var g = a.getTargetRanges()[0];
                g && e.applyDOMRange(g);
              }
              g = a.inputType;
              var k = e.anchor,
                h = e.focus;
              ("insertText" !== g && "insertReplacementText" !== g) ||
              0 !== k.offset ||
              1 !== h.offset ||
              k.key !== h.key
                ? (g = !1)
                : ((g = a.dataTransfer),
                  (g =
                    ". " === (null != g ? g.getData("text/plain") : a.data)));
              if (g) a.preventDefault(), R(e, "  ");
              else {
                g = e.anchor;
                k = e.focus;
                h = g.getNode();
                var l = k.getNode();
                if ("insertText" === c)
                  "\n" === f
                    ? (a.preventDefault(), S(e))
                    : "\n\n" === f
                    ? (a.preventDefault(), S(e), S(e))
                    : null == f && a.dataTransfer
                    ? ((f = a.dataTransfer.getData("text/plain")),
                      a.preventDefault(),
                      U(e, f))
                    : null != f &&
                      (g.key !== k.key ||
                        !require("Outline").isTextNode(h) ||
                        h.getFormat() !== e.textFormat ||
                        la(e, h, !0) ||
                        1 < f.length) &&
                      (a.preventDefault(), R(e, f));
                else
                  switch ((a.preventDefault(), c)) {
                    case "insertFromComposition":
                      f && (d.setCompositionKey(null), R(e, f));
                      break;
                    case "insertLineBreak":
                    case "insertParagraph":
                      d.setCompositionKey(null);
                      S(e);
                      break;
                    case "insertFromYank":
                    case "insertFromDrop":
                    case "insertReplacementText":
                    case "insertFromPaste":
                      d = a.dataTransfer;
                      null != d
                        ? ((f = d.getData("text/plain")), null != f && U(e, f))
                        : f && R(e, f);
                      break;
                    case "deleteByComposition":
                      (h === l && H(h) && H(l)) || L(e);
                      break;
                    case "deleteByDrag":
                    case "deleteByCut":
                      L(e);
                      break;
                    case "deleteContent":
                      P(e, !1);
                      break;
                    case "deleteWordBackward":
                      N(e);
                      break;
                    case "deleteWordForward":
                      O(e);
                      break;
                    case "deleteHardLineBackward":
                    case "deleteSoftLineBackward":
                      J(e);
                      break;
                    case "deleteContentForward":
                    case "deleteHardLineForward":
                    case "deleteSoftLineForward":
                      M(e);
                  }
              }
            }
        }, "onBeforeInputForPlainText");
    }
    function oa(a, b) {
      var c = window.getSelection();
      c = null === c ? null : c.anchorNode;
      null !== c && 3 === c.nodeType && ma(c, b, a);
    }
    function pa(a, b, c) {
      a.update(function (d) {
        var e = !0;
        for (var f = 0; f < b.length; f++) {
          var g = b[f],
            k = g.type,
            h = g.target,
            l = X(d, h);
          if (!require("Outline").isDecoratorNode(l))
            if ("characterData" === k)
              3 === h.nodeType && (ma(h, d, a), (e = !1));
            else if ("childList" === k) {
              k = g.addedNodes;
              l = g.removedNodes;
              g = g.nextSibling;
              for (var p = 0; p < l.length; p++) {
                var n = l[p];
                var m = W(d, n);
                var r = g;
                null !== m &&
                  ((m = m.getNextSibling()),
                  null !== m &&
                    ((m = m.getKey()),
                    (m = a.getElementByKey(m)),
                    null !== m && null !== m.parentNode && (r = m)));
                if (null != r)
                  for (; null != r; ) {
                    m = r.parentNode;
                    if (m === h) {
                      h.insertBefore(n, r);
                      break;
                    }
                    r = m;
                  }
                else h.appendChild(n);
              }
              for (h = 0; h < k.length; h++) {
                (l = k[h]),
                  (g = W(d, l)),
                  (p = l.parentNode),
                  null != p && null === g && p.removeChild(l);
              }
            }
        }
        f = c.takeRecords();
        if (0 < f.length) {
          for (k = 0; k < f.length; k++) {
            for (h = f[k].addedNodes, l = 0; l < h.length; l++) {
              (g = h[l]),
                (p = g.parentNode),
                null != p && "BR" === g.nodeName && p.removeChild(g);
            }
          }
          c.takeRecords();
        }
        e &&
          ((e = ia(a)),
          null !== e && ((e = e.clone()), (e.isDirty = !0), d.setSelection(e)));
      }, "onMutation");
    }
    function qa(a) {
      q.useEffect(
        function () {
          var b = function b(c) {
            var d = a.getRootElement();
            if (
              document.activeElement === d &&
              ((d = c.data), "string" === typeof d)
            ) {
              try {
                var e = JSON.parse(d);
              } catch (f) {
                return;
              }
              if (
                e &&
                "nuanria_messaging" === e.protocol &&
                "request" === e.type &&
                (e = e.payload) &&
                "makeChanges" === e.functionId &&
                (e = e.args)
              ) {
                var _e = e,
                  f = _e[0],
                  g = _e[1],
                  k = _e[2],
                  h = _e[3],
                  l = _e[4];
                a.update(function (p) {
                  p = p.getSelection();
                  if (null !== p) {
                    var m = p.anchor;
                    var n = m.getNode(),
                      r = 0,
                      t = 0;
                    require("Outline").isTextNode(n) &&
                      0 <= f &&
                      0 <= g &&
                      ((r = f), (t = f + g), p.setTextNodeRange(n, r, n, t));
                    if (r !== t || "" !== k) U(p, k), (n = m.getNode());
                    require("Outline").isTextNode(n) &&
                      ((r = h),
                      (t = h + l),
                      (m = n.getTextContentSize()),
                      (r = r > m ? m : r),
                      (t = t > m ? m : t),
                      p.setTextNodeRange(n, r, n, t));
                    c.stopImmediatePropagation();
                  }
                }, "useOutlineDragonSupport");
              }
            }
          };
          window.addEventListener("message", b, !0);
          return function () {
            window.removeEventListener("message", b, !0);
          };
        },
        [a]
      );
    }
    function ra(a, b) {
      if (require("OutlineHistoryHelpers").viewModelsWithoutHistory.has(b))
        return (
          require("OutlineHistoryHelpers").viewModelsWithoutHistory["delete"](
            b
          ),
          0
        );
      if (null === a) return 1;
      var c = b._selection;
      var d = a._selection;
      if (!b.hasDirtyNodes()) return null === d && null !== c ? 0 : 2;
      b = b.getDirtyNodes();
      if (
        1 === b.length &&
        ((b = b[0]),
        (a = a._nodeMap.get(b.__key)),
        void 0 !== a &&
          require("Outline").isTextNode(a) &&
          require("Outline").isTextNode(b) &&
          a.__flags === b.__flags)
      ) {
        a = a.__text;
        if ("" === a) return 1;
        a = b.__text.length - a.length;
        if (0 === a) return 0;
        if (-1 === a || 1 === a) {
          if (null == c || null === d) return 0;
          c = c.anchor;
          if (c.key !== d.anchor.key || "character" !== c.type) return 1;
          if (d.anchor.offset === c.offset - 1) return 0;
        }
      }
      return 1;
    }
    function sa(a) {
      var b = q.useMemo(function () {
        return { current: null, redoStack: [], undoStack: [] };
      }, []);
      q.useEffect(
        function () {
          var c = a.getRootElement();
          if (null !== c) {
            var d = function d() {
                var h = b.redoStack;
                var l = b.undoStack,
                  p = l.length;
                if (0 !== p) {
                  var m = b.current;
                  null !== m &&
                    (1 === p || m.hasDirtyNodes() || (m = l.pop()), h.push(m));
                  h = l.pop();
                  b.current = h;
                  h.markDirty();
                  a.setViewModel(h);
                }
              },
              e = function e() {
                var h = b.redoStack;
                var l = b.undoStack;
                if (0 !== h.length) {
                  var p = b.current;
                  null !== p && l.push(p);
                  h = h.pop();
                  b.current = h;
                  h.markDirty();
                  a.setViewModel(h);
                }
              },
              f = function f(h) {
                if (!a.isComposing())
                  if (
                    90 === h.keyCode &&
                    !h.shiftKey &&
                    (z ? h.metaKey : h.ctrlKey)
                  )
                    h.preventDefault(), d();
                  else {
                    {
                      var p = h.keyCode,
                        m = h.shiftKey,
                        n = h.ctrlKey;
                      var l = z
                        ? 90 === p && h.metaKey && m
                        : (89 === p && n) || (90 === p && n && m);
                    }
                    l && (h.preventDefault(), e());
                  }
              },
              g = function g(h) {
                var l = h.inputType;
                "historyUndo" === l
                  ? (h.preventDefault(), d())
                  : "historyRedo" === l && (h.preventDefault(), e());
              },
              k = a.addListener("update", function (h) {
                var l = b.current,
                  p = b.redoStack,
                  m = b.undoStack;
                if (h !== l) {
                  if (!h.isDirty()) {
                    var n = ra(l, h);
                    if (1 === n)
                      0 !== p.length && (b.redoStack = []),
                        null !== l && m.push(l);
                    else if (2 === n) return;
                  }
                  b.current = h;
                }
              });
            c.addEventListener("keydown", f);
            c.addEventListener("beforeinput", g);
            return function () {
              k();
              c.removeEventListener("keydown", f);
              c.removeEventListener("beforeinput", g);
            };
          }
        },
        [b, a]
      );
      return q.useCallback(
        function () {
          b.undoStack = [];
          b.redoStack = [];
          b.current = null;
        },
        [b]
      );
    }
    function ta(a) {
      a.update(function (b) {
        var c = b.getRoot();
        if (null === c.getFirstChild()) {
          var d = require("OutlineParagraphNode").createParagraphNode(),
            e = require("Outline").createTextNode();
          c.append(d.append(e));
          null !== b.getSelection() && e.select();
        }
      }, "initEditor");
    }
    function ua(a, b) {
      a.update(
        function (c) {
          var d = c.getRoot().getFirstChild();
          if (require("OutlineParagraphNode").isParagraphNode(d)) {
            d.clear();
            var e = require("Outline").createTextNode();
            d.append(e);
            null !== c.getSelection() && e.select();
          }
        },
        "clearEditor",
        b
      );
    }
    var Z = [
      [
        "selectionchange",
        function (a, b) {
          a = window.getSelection();
          var c = b.getRootElement();
          (c && !c.contains(a.anchorNode)) ||
            b.update(function (d) {
              d = d.getSelection();
              if (null !== d && d.isCollapsed()) {
                var e = d.anchor;
                "character" === e.type &&
                  ((e = e.getNode()), (d.textFormat = e.getFormat()));
              }
            }, "onSelectionChange");
        },
      ],
      [
        "keydown",
        function (a, b) {
          V = "Unidentified" === a.key && 229 === a.keyCode;
          b.isComposing() ||
            b.update(function (c) {
              c = c.getSelection();
              if (null !== c) {
                var d = a.shiftKey;
                var e =
                  "rtl" ===
                  c.anchor.getNode().getTopParentBlockOrThrow().getDirection();
                if (37 !== a.keyCode || a.ctrlKey || a.metaKey || a.altKey) {
                  if (39 !== a.keyCode || a.ctrlKey || a.metaKey || a.altKey) {
                    var f;
                    (f = 13 === a.keyCode && !a.shiftKey) ||
                      (f = 13 === a.keyCode && a.shiftKey);
                    if (f) a.preventDefault(), S(c);
                    else if (z && a.ctrlKey && 79 === a.keyCode)
                      a.preventDefault(), S(c, !0);
                    else {
                      var g = a.keyCode,
                        k = a.altKey,
                        h = a.metaKey,
                        l = a.ctrlKey;
                      if (
                        z
                          ? k || h
                            ? 0
                            : 8 === a.keyCode || (72 === g && l)
                          : l || k || h
                          ? 0
                          : 8 === a.keyCode
                      )
                        a.preventDefault(), P(c, !0);
                      else {
                        var p = a.keyCode,
                          m = a.shiftKey,
                          n = a.altKey,
                          r = a.metaKey,
                          t = a.ctrlKey;
                        if (
                          z
                            ? m || n || r
                              ? 0
                              : 46 === a.keyCode || (68 === p && t)
                            : t || n || r
                            ? 0
                            : 46 === a.keyCode
                        )
                          a.preventDefault(), P(c, !1);
                        else {
                          var E = a.altKey,
                            D = a.metaKey,
                            A = a.ctrlKey;
                          if (
                            z
                              ? A || D
                                ? 0
                                : 37 === a.keyCode && E
                              : E || D
                              ? 0
                              : 37 === a.keyCode && A
                          ) {
                            if (B || Y(c, d, !e))
                              a.preventDefault(), K(c, !e, "word", !d);
                          } else {
                            var ea = a.altKey,
                              fa = a.metaKey,
                              ha = a.ctrlKey;
                            if (
                              z
                                ? ha || fa
                                  ? 0
                                  : 39 === a.keyCode && ea
                                : ea || fa
                                ? 0
                                : 39 === a.keyCode && ha
                            ) {
                              if (B || Y(c, d, e))
                                a.preventDefault(), K(c, e, "word", !d);
                            } else
                              8 === a.keyCode && (z ? a.altKey : a.ctrlKey)
                                ? (a.preventDefault(), N(c))
                                : 46 === a.keyCode && (z ? a.altKey : a.ctrlKey)
                                ? (a.preventDefault(), O(c))
                                : z && a.metaKey && 8 === a.keyCode
                                ? (a.preventDefault(), J(c))
                                : z && a.metaKey && 46 === a.keyCode
                                ? (a.preventDefault(), M(c))
                                : 65 === a.keyCode &&
                                  (z ? a.metaKey : a.ctrlKey) &&
                                  (a.preventDefault(),
                                  (e = c.anchor
                                    .getNode()
                                    .getTopParentBlockOrThrow()
                                    .getParentOrThrow()),
                                  (d = e.getFirstTextNode()),
                                  (e = e.getLastTextNode()),
                                  null !== d &&
                                    null !== e &&
                                    c.setTextNodeRange(
                                      d,
                                      0,
                                      e,
                                      e.getTextContentSize()
                                    ));
                          }
                        }
                      }
                    }
                  } else
                    Y(c, d, e) &&
                      (a.preventDefault(), K(c, e, "character", !d));
                } else
                  Y(c, d, !e) &&
                    (a.preventDefault(), K(c, !e, "character", !d));
              }
            }, "onKeyDownForPlainText");
        },
      ],
      [
        "compositionstart",
        function (a, b) {
          b.update(function (c) {
            var d = c.getSelection();
            null === d ||
              b.isComposing() ||
              (c.setCompositionKey(d.anchor.key),
              null == a.data || V || R(d, " "));
          }, "onCompositionStart");
        },
      ],
      [
        "compositionend",
        function (a, b) {
          b.update(function (c) {
            oa(b, c);
            c.setCompositionKey(null);
          }, "onCompositionEnd");
        },
      ],
      [
        "cut",
        function (a, b) {
          ka(a, b);
          b.update(function (c) {
            c = c.getSelection();
            null !== c && L(c);
          }, "onCutForPlainText");
        },
      ],
      ["copy", ka],
      [
        "dragstart",
        function (a) {
          a.preventDefault();
        },
      ],
      [
        "paste",
        function (a, b) {
          a.preventDefault();
          b.update(function (c) {
            c = c.getSelection();
            var d = a.clipboardData;
            null != d &&
              null !== c &&
              ((d = d.getData("text/plain")), null != d && U(c, d));
          }, "onPasteForPlainText");
        },
      ],
      [
        "input",
        function (a, b) {
          b.update(function (c) {
            oa(b, c);
          }, "onInput");
        },
      ],
    ];
    C ? Z.push(["beforeinput", na]) : Z.push(["drop", ja]);
    module.exports = function (a, b) {
      F(
        function () {
          var d = a.addListener("root", function (g) {
              null !== g &&
                (ta(a),
                a.registerNodeType(
                  "paragraph",
                  require("OutlineParagraphNode").ParagraphNode
                ));
            }),
            e = new MutationObserver(function (g) {
              pa(a, g, e);
            }),
            f = a.addListener("mutation", function (g) {
              null === g
                ? e.disconnect()
                : e.observe(g, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                  });
            });
          return function () {
            f();
            d();
          };
        },
        [a]
      );
      ba(Z, a, b);
      qa(a);
      var c = sa(a);
      return q.useCallback(
        function (d) {
          ua(a, function () {
            c();
            d && d();
          });
        },
        [c, a]
      );
    };
  },
  null
);
