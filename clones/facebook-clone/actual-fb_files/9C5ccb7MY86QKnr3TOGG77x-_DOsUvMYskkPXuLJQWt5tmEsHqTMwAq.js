if (self.CavalryLogger) {
  CavalryLogger.start_js(["uFypp1X"]);
}

__d(
  "csx",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error("csx: Unexpected class selector transformation.");
    }
    f["default"] = a;
  },
  66
);
__d(
  "BlueBar",
  ["csx", "CSS", "DOMQuery", "Style", "ge"],
  function (a, b, c, d, e, f, g, h) {
    var i = document,
      j = {};
    function k(a) {
      return d("DOMQuery").scry(i, a)[0];
    }
    function l(a, b) {
      return j[a] ? j[a] : (j[a] = k(b));
    }
    function a() {
      (i = c("ge")("blueBarDOMInspector") || document), (j = {});
    }
    function b() {
      var a = this.getMaybeFixedRoot();
      return !a
        ? !1
        : d("CSS").matchesSelector(a, "._5rmj") || c("Style").isFixed(a);
    }
    function m() {
      return l("bar", "div._1s4v");
    }
    function e() {
      return l("navRoot", "div._cx4") || m();
    }
    function f() {
      return l("maybeFixedRoot", "div._26aw");
    }
    function h() {
      return l("maybeFixedRootLoggedOut", "div._1pmx");
    }
    function n() {
      return l("maybeFixedRootLogin", "div._53jh");
    }
    a();
    g.hasFixedBlueBar = b;
    g.getBar = m;
    g.getNavRoot = e;
    g.getMaybeFixedRoot = f;
    g.getLoggedOutRoot = h;
    g.getNewLoggedOutRoot = n;
  },
  98
);
__d(
  "isValidReactElement",
  [],
  function (a, b, c, d, e, f) {
    var g =
      (typeof Symbol === "function" &&
        Symbol["for"] &&
        Symbol["for"]("react.element")) ||
      60103;
    function a(a) {
      return !!(typeof a === "object" && a !== null && a.$$typeof === g);
    }
    f["default"] = a;
  },
  66
);
__d(
  "BootloadedReact",
  ["Bootloader", "isValidReactElement"],
  function (a, b, c, d, e, f) {
    var g = function (a) {
      b("Bootloader").loadModules(["ReactDOM"], a, "BootloadedReact");
    };
    a = {
      isValidElement: function (a) {
        return b("isValidReactElement")(a);
      },
      render: function (a, b, c) {
        g(function (d) {
          d.render(a, b, function () {
            c && c(this);
          });
        });
      },
      unmountComponentAtNode: function (a, b) {
        g(function (c) {
          c.unmountComponentAtNode(a), b && b();
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ContextualThing",
  ["CSS", "containsNode", "ge", "getOrCreateDOMID"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      a.setAttribute("data-ownerid", c("getOrCreateDOMID")(b));
    }
    function b(a, b) {
      b = b;
      while (b) {
        if (c("containsNode")(a, b)) return !0;
        b = h(b);
      }
      return !1;
    }
    function h(a) {
      a = a;
      var b;
      while (a) {
        if (a.getAttribute && (b = a.getAttribute("data-ownerid")))
          return c("ge")(b);
        a = a.parentNode;
      }
      return null;
    }
    function e(a, b) {
      a = a;
      var e;
      while (a && !d("CSS").hasClass(a, b))
        a.getAttribute && (e = a.getAttribute("data-ownerid"))
          ? (a = c("ge")(e))
          : (a = a.parentNode);
      return a;
    }
    g.register = a;
    g.containsIncludingLayers = b;
    g.getContext = h;
    g.parentByClass = e;
  },
  98
);
__d(
  "DOMDimensions",
  ["Style", "getDocumentScrollElement"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a ? a.offsetHeight : 0;
      a = a ? a.offsetWidth : 0;
      return { height: b, width: a };
    }
    function b(a) {
      a = c("getDocumentScrollElement")(a);
      var b = a.scrollWidth || 0;
      a = a.scrollHeight || 0;
      return { width: b, height: a };
    }
    function d(a, b, d, e, f) {
      var g;
      switch (b) {
        case "left":
        case "right":
        case "top":
        case "bottom":
          g = [b];
          break;
        case "width":
          g = ["left", "right"];
          break;
        case "height":
          g = ["top", "bottom"];
          break;
        default:
          throw Error("Invalid plane: " + b);
      }
      b = function (b, d) {
        var e = 0;
        for (var f = 0; f < g.length; f++)
          e += parseFloat(c("Style").get(a, b + "-" + g[f] + d)) || 0;
        return e;
      };
      return (
        (d ? b("padding", "") : 0) +
        (e ? b("border", "-width") : 0) +
        (f ? b("margin", "") : 0)
      );
    }
    g.getElementDimensions = a;
    g.getDocumentDimensions = b;
    g.measureElementBox = d;
  },
  98
);
__d(
  "FocusEvent",
  ["Event", "Run", "ge", "getOrCreateDOMID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
      i = !1;
    function j(a, b) {
      if (h[a]) {
        b = h[a].indexOf(b);
        b >= 0 && h[a].splice(b, 1);
        h[a].length === 0 && delete h[a];
      }
    }
    function k(a) {
      var b = a.getTarget();
      if (h[b.id] && h[b.id].length > 0) {
        var c = a.type === "focusin" || a.type === "focus";
        h[b.id].forEach(function (a) {
          a(c);
        });
      }
    }
    function l() {
      if (i) return;
      c("Event").listen(document.documentElement, "focusout", k);
      c("Event").listen(document.documentElement, "focusin", k);
      i = !0;
    }
    function a(a, b) {
      l();
      var e = c("getOrCreateDOMID")(a);
      h[e] || (h[e] = []);
      h[e].push(b);
      var f = !1;
      function g() {
        f || (j(e, b), i && (i.remove(), (i = null)), (f = !0));
      }
      var i = d("Run").onLeave(function () {
        c("ge")(e) || g();
      });
      return {
        remove: function () {
          g();
        },
      };
    }
    g.listen = a;
  },
  98
);
__d(
  "tooltipPropsFor",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      if (!a) return {};
      a = { "data-tooltip-content": a, "data-hover": "tooltip" };
      b && (a["data-tooltip-position"] = b);
      c && (a["data-tooltip-alignh"] = c);
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "TooltipData",
  [
    "DOM",
    "DataStore",
    "FBLogger",
    "URI",
    "getElementText",
    "ifRequired",
    "isStringNullOrEmpty",
    "isTextNode",
    "killswitch",
    "tooltipPropsFor",
  ],
  function (a, b, c, d, e, f) {
    var g;
    function h(a) {
      var c = a.getAttribute("data-tooltip-delay");
      c = c ? parseInt(c, 10) || 1e3 : 0;
      if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))
        return babelHelpers["extends"](
          {
            className: a.getAttribute("data-tooltip-root-class"),
            content: a.getAttribute("data-tooltip-content"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay:
              a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction"),
          },
          b("DataStore").get(a, "tooltip")
        );
      else {
        var d;
        d = (d = b("DataStore").get(a, "tooltip")) != null ? d : {};
        var e = d.content;
        d = babelHelpers.objectWithoutPropertiesLoose(d, ["content"]);
        var f = a.getAttribute("data-tooltip-content");
        !b("isStringNullOrEmpty")(e) &&
          !b("isStringNullOrEmpty")(f) &&
          b("FBLogger")("tooltip").warn(
            'Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore',
            a.getAttribute("data-tooltip-content")
          );
        return babelHelpers["extends"](
          {
            className: a.getAttribute("data-tooltip-root-class"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay:
              a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction"),
            content: (a = (c = f) != null ? c : e) != null ? a : null,
          },
          d
        );
      }
    }
    function i(a, c) {
      var d = h(a);
      if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))
        b("DataStore").set(a, "tooltip", {
          content: c.content || d.content,
          position: c.position || d.position,
          alignH: c.alignH || d.alignH,
          suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
          overflowDisplay: c.overflowDisplay || d.overflowDisplay,
          persistOnClick: c.persistOnClick || d.persistOnClick,
        });
      else {
        !b("isStringNullOrEmpty")(c.content) &&
          !b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content")) &&
          b("FBLogger")("tooltip").warn(
            'Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid',
            a.getAttribute("data-tooltip-content")
          );
        b("DataStore").set(a, "tooltip", {
          content:
            c.content ||
            ((a = b("DataStore").get(a, "tooltip")) != null ? a : {}).content,
          position: c.position || d.position,
          alignH: c.alignH || d.alignH,
          suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
          overflowDisplay: c.overflowDisplay || d.overflowDisplay,
          persistOnClick: c.persistOnClick || d.persistOnClick,
        });
      }
    }
    function j(a, b) {
      i(a, b), a.setAttribute("data-hover", "tooltip");
    }
    function k(a, b) {}
    var l = {
      remove: function (a, c) {
        c = c === void 0 ? {} : c;
        c = c.onlyCleanupDataStore;
        c = c === void 0 ? !1 : c;
        b("DataStore").remove(a, "tooltip");
        c ||
          (a.removeAttribute("data-hover"),
          a.removeAttribute("data-tooltip-position"),
          a.removeAttribute("data-tooltip-alignh"),
          b("ifRequired")("Tooltip", function (b) {
            b.isActive(a) && b.hide();
          }));
      },
      set: function (a, c, d, e) {
        k(a, c);
        if (c instanceof (g || (g = b("URI"))))
          a.setAttribute("data-tooltip-uri", c),
            b("ifRequired")("Tooltip", function (b) {
              b.isActive(a) && b.fetchIfNecessary(a);
            });
        else if (
          b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")
        ) {
          var f = l._store({ context: a, content: c, position: d, alignH: e });
          typeof f.content !== "string"
            ? a.setAttribute(
                "data-tooltip-content",
                b("getElementText")(f.content)
              )
            : a.setAttribute("data-tooltip-content", f.content);
          l.refreshIfActive(a);
        } else
          a.removeAttribute("data-tooltip-content"),
            l._store({ context: a, content: c, position: d, alignH: e }),
            l.refreshIfActive(a);
      },
      refreshIfActive: function (a) {
        b("ifRequired")("Tooltip", function (b) {
          b.isActive(a) && b.show(a);
        });
      },
      _store: function (a) {
        var c = a.context,
          d = a.content,
          e = a.position;
        a = a.alignH;
        k(c, d);
        b("isTextNode")(d) && (d = b("getElementText")(d));
        var f = !1;
        typeof d !== "string"
          ? (d = b("DOM").create("div", {}, d))
          : (f = d === "");
        a = { alignH: a, content: d, position: e, suppress: f };
        j(c, a);
        return a;
      },
      propsFor: b("tooltipPropsFor"),
      enableDisplayOnOverflow: function (a) {
        a.removeAttribute("data-tooltip-display"),
          j(a, { overflowDisplay: !0 });
      },
      enablePersistOnClick: function (a) {
        a.removeAttribute("data-pitloot-persistOnClick"),
          j(a, { persistOnClick: !0 });
      },
      suppress: function (a, b) {
        i(a, { suppress: b });
      },
      _get: h,
    };
    e.exports = l;
  },
  null
);
__d(
  "Focus",
  [
    "cx",
    "CSS",
    "Event",
    "FocusEvent",
    "KeyStatus",
    "TooltipData",
    "ifRequired",
  ],
  function (a, b, c, d, e, f, g, h) {
    function a(a, b) {
      b === void 0 && (b = !1);
      if (a) {
        var e = c("ifRequired")(
          "VirtualCursorStatus",
          function (a) {
            return a.isVirtualCursorTriggered();
          },
          function () {
            return !1;
          }
        );
        b || d("KeyStatus").isKeyDown() || e ? j(a) : i(a);
      }
    }
    function i(a) {
      if (a) {
        d("CSS").addClass(a, "_5f0v");
        var b = c("Event").listen(a, "blur", function () {
          a && d("CSS").removeClass(a, "_5f0v"), b.remove();
        });
        d("TooltipData").suppress(a, !0);
        j(a);
        d("TooltipData").suppress(a, !1);
      }
    }
    function b(a, b) {
      d("CSS").addClass(a, "_5f0v");
      return d("FocusEvent").listen(a, this.performRelocation.bind(this, a, b));
    }
    function e(a, b, e) {
      d("CSS").addClass(a, "_5f0v");
      a = c("ifRequired")(
        "FocusRing",
        function (a) {
          return a.usingKeyboardNavigation();
        },
        function () {
          return !0;
        }
      );
      e = e && a;
      d("CSS").conditionClass(b, "_3oxt", e);
      d("CSS").conditionClass(b, "_16jm", e);
    }
    function j(a) {
      try {
        (a.tabIndex = a.tabIndex), a.focus();
      } catch (a) {}
    }
    g.set = a;
    g.setWithoutOutline = i;
    g.relocate = b;
    g.performRelocation = e;
  },
  98
);
__d(
  "isContentEditable",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a;
      while (a instanceof HTMLElement) {
        if (
          a.contentEditable === "true" ||
          a.contentEditable === "plaintext-only"
        )
          return !0;
        a = a.parentElement;
      }
      return !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "isElementInteractive",
  ["isContentEditable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
      i = new Set(["button", "checkbox", "radio", "submit"]);
    function a(a) {
      if (!a instanceof HTMLElement) return !1;
      var b = c("isContentEditable")(a),
        d = h.has(a.nodeName);
      a = a instanceof HTMLInputElement && i.has(a.type);
      return (b || d) && !a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "KeyEventController",
  [
    "Bootloader",
    "DOMQuery",
    "Event",
    "Run",
    "emptyFunction",
    "getElementText",
    "isContentEditable",
    "isElementInteractive",
    "isEmpty",
  ],
  function (a, b, c, d, e, f, g) {
    var h = null,
      i = {
        BACKSPACE: [8],
        TAB: [9],
        RETURN: [13],
        ALT: [18],
        ESCAPE: [27],
        LEFT: [37, 63234],
        UP: [38, 63232],
        RIGHT: [39, 63235],
        DOWN: [40, 63233],
        NUMPAD_ADD: [43],
        NUMPAD_SUBSTRACT: [45],
        DELETE: [46],
        COMMA: [188],
        PERIOD: [190],
        SLASH: [191],
        "`": [192],
        "[": [219],
        "]": [221],
        PAGE_UP: [33],
        PAGE_DOWN: [34],
        END: [35],
        HOME: [36],
        SPACE: [32],
        KP_DOT: [46, 110],
        "-": [189],
        "=": [187],
        FORWARD_SLASH: [191],
      },
      j =
        ((a = {}),
        (a[8] = 1),
        (a[9] = 1),
        (a[13] = 1),
        (a[27] = 1),
        (a[32] = 1),
        (a[37] = 1),
        (a[63234] = 1),
        (a[38] = 1),
        (a[63232] = 1),
        (a[39] = 1),
        (a[63235] = 1),
        (a[40] = 1),
        (a[63233] = 1),
        (a[46] = 1),
        a);
    b = (function () {
      function a() {
        var a = this;
        this.handlers = {};
        ["keyup", "keydown", "keypress"].forEach(function (b) {
          return document.addEventListener(b, a.onkeyevent.bind(a, "on" + b));
        });
      }
      var b = a.prototype;
      b.mapKey = function (a) {
        if (/^[0-9]$/.test(a + "")) {
          typeof a !== "number" && (a = a.charCodeAt(0) - 48);
          return [48 + a, 96 + a];
        }
        a += "";
        var b = i[a.toUpperCase()];
        return b ? b : [a.toUpperCase().charCodeAt(0)];
      };
      b.onkeyevent = function (a, b) {
        b = c("Event").$E(b);
        var d = this.handlers[b.keyCode] || this.handlers[b.which];
        if (d)
          for (var e = 0; e < d.length; e++) {
            var f = d[e].callback,
              g = d[e].filter;
            try {
              if (!g || g(b, a)) {
                g = (function () {
                  var d = f(b, a),
                    e = b.which || b.keyCode;
                  c("Bootloader").loadModules(
                    ["KeyEventTypedLogger"],
                    function (a) {
                      new a()
                        .setAction("key_shortcut")
                        .setKey(b.key || "")
                        .setKeyChar(String.fromCharCode(e))
                        .setKeyCode(e)
                        .addToExtraData("is_trusted", b.isTrusted)
                        .log();
                    },
                    "KeyEventController"
                  );
                  if (d === !1) return { v: c("Event").kill(b) };
                })();
                if (typeof g === "object") return g.v;
              }
            } catch (a) {}
          }
        return !0;
      };
      b.resetHandlers = function () {
        for (var a in this.handlers)
          if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
            var b = this.handlers[a].filter(function (a) {
              return a.preserve();
            });
            b.length ? (this.handlers[a] = b) : delete this.handlers[a];
          }
      };
      a.getInstance = function () {
        return h || (h = new a());
      };
      a.defaultFilter = function (b, d) {
        b = c("Event").$E(b);
        return (
          a.filterEventTypes(b, d) &&
          a.filterEventTargets(b, d) &&
          a.filterEventModifiers(b, d)
        );
      };
      a.filterEventTypes = function (a, b) {
        return b === "onkeydown" ? !0 : !1;
      };
      a.filterEventTargets = function (a, b) {
        b = a.getTarget();
        return (
          !c("isElementInteractive")(b) ||
          (a.keyCode in j &&
            ((d("DOMQuery").isNodeOfType(b, ["input", "textarea"]) &&
              b.value.length === 0) ||
              (c("isContentEditable")(b) &&
                c("getElementText")(b).length === 0)))
        );
      };
      a.filterEventModifiers = function (a, b) {
        return a.ctrlKey || a.altKey || a.metaKey || a.repeat ? !1 : !0;
      };
      a.registerKeyAcrossTransitions = function (b, d, e, f) {
        e === void 0 && (e = a.defaultFilter);
        f === void 0 && (f = !1);
        return a.registerKey(b, d, e, f, c("emptyFunction").thatReturnsTrue);
      };
      a.registerKey = function (b, e, f, g, h) {
        f === void 0 && (f = a.defaultFilter);
        g === void 0 && (g = !1);
        h === void 0 && (h = c("emptyFunction").thatReturnsFalse);
        var i = a.getInstance(),
          j = b == null ? [] : i.mapKey(b);
        c("isEmpty")(i.handlers) && d("Run").onLeave(i.resetHandlers.bind(i));
        var k = {};
        for (var l = 0; l < j.length; l++) {
          b = "" + j[l];
          (!i.handlers[b] || g) && (i.handlers[b] = []);
          var m = { callback: e, filter: f, preserve: h };
          k[b] = m;
          i.handlers[b].push(m);
        }
        return {
          remove: function () {
            for (var a in k) {
              if (i.handlers[a] && i.handlers[a].length) {
                var b = i.handlers[a].indexOf(k[a]);
                b >= 0 && i.handlers[a].splice(b, 1);
              }
              delete k[a];
            }
          },
        };
      };
      return a;
    })();
    g["default"] = b;
  },
  98
);
__d(
  "ViewportBounds",
  [
    "Arbiter",
    "ArbiterMixin",
    "BlueBar",
    "ExecutionEnvironment",
    "PageEvents",
    "Vector",
    "emptyFunction",
    "removeFromArray",
  ],
  function (a, b, c, d, e, f) {
    var g = { top: [], right: [], bottom: [], left: [] };
    function a(a) {
      return function () {
        return g[a].reduce(function (a, b) {
          return Math.max(a, b.getSize());
        }, 0);
      };
    }
    function c(a, b) {
      return function (c) {
        return new h(a, c, b);
      };
    }
    var h = (function () {
      "use strict";
      function a(a, c, d) {
        d === void 0 && (d = !1),
          (this.getSide = b("emptyFunction").thatReturns(a)),
          (this.getSize = function () {
            return typeof c === "function" ? c() : c;
          }),
          (this.isPersistent = b("emptyFunction").thatReturns(d)),
          g[a].push(this),
          i.inform("change");
      }
      var c = a.prototype;
      c.remove = function () {
        b("removeFromArray")(g[this.getSide()], this), i.inform("change");
      };
      return a;
    })();
    b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONUNLOAD, function () {
      ["top", "right", "bottom", "left"].forEach(function (a) {
        a = g[a];
        for (var b = a.length - 1; b >= 0; b--) {
          var c = a[b];
          c.isPersistent() || c.remove();
        }
      });
    });
    var i = babelHelpers["extends"]({}, b("ArbiterMixin"), {
      getTop: a("top"),
      getRight: a("right"),
      getBottom: a("bottom"),
      getLeft: a("left"),
      getElementPosition: function (a) {
        a = b("Vector").getElementPosition(a);
        a.y -= i.getTop();
        return a;
      },
      addTop: c("top"),
      addRight: c("right"),
      addBottom: c("bottom"),
      addLeft: c("left"),
      addPersistentTop: c("top", !0),
      addPersistentRight: c("right", !0),
      addPersistentBottom: c("bottom", !0),
      addPersistentLeft: c("left", !0),
    });
    i.addPersistentTop(function () {
      if (
        b("ExecutionEnvironment").canUseDOM &&
        b("BlueBar").hasFixedBlueBar()
      ) {
        var a = b("BlueBar").getMaybeFixedRoot();
        return a ? a.offsetHeight : 0;
      }
      return 0;
    });
    e.exports = i;
  },
  null
);
__d(
  "getOverlayZIndex",
  ["Style"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      b = b;
      a = a;
      b = b || document.body;
      var d = [];
      while (a && a !== b) d.push(a), (a = a.parentNode);
      if (a !== b) return 0;
      for (var a = d.length - 1; a >= 0; a--) {
        b = d[a];
        if (c("Style").get(b, "position") != "static") {
          b = parseInt(c("Style").get(b, "z-index"), 10);
          if (!isNaN(b)) return b;
        }
      }
      return 0;
    }
    g["default"] = a;
  },
  98
);
__d(
  "Layer",
  [
    "invariant",
    "ArbiterMixin",
    "BehaviorsMixin",
    "BootloadedReact",
    "CSS",
    "ContextualThing",
    "DOM",
    "DataStore",
    "Event",
    "FBLogger",
    "HTML",
    "KeyEventController",
    "KeyStatus",
    "Parent",
    "Style",
    "ge",
    "isNode",
    "mixin",
    "removeFromArray",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g, h) {
    b("KeyStatus");
    var i = [],
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, d) {
          var e;
          e = b.call(this) || this;
          e._config = a || {};
          if (d) {
            e._configure(e._config, d);
            a = e._config.addedBehaviors || [];
            e.enableBehaviors(e._getDefaultBehaviors().concat(a));
          } else
            c("FBLogger")("layer").warn(
              "The markup param wasn't provided to the Layer constructor"
            );
          return e;
        }
        var e = a.prototype;
        e.init = function (a) {
          this._configure(this._config, a);
          a = this._config.addedBehaviors || [];
          this.enableBehaviors(this._getDefaultBehaviors().concat(a));
          this._initialized = !0;
          return this;
        };
        e._configure = function (a, b) {
          var e = this;
          if (b) {
            var f = c("isNode")(b),
              g = typeof b === "string" || c("HTML").isHTML(b);
            this.containsReactComponent =
              d("BootloadedReact").isValidElement(b);
            !f &&
              !g &&
              !this.containsReactComponent &&
              c("FBLogger")("layer").warn(
                "Layer must be init with HTML, DOM node or React instance"
              );
            if (g) b = c("HTML")(b).getRootNode();
            else if (this.containsReactComponent) {
              f = document.createElement("div");
              var h = !0;
              d("BootloadedReact").render(b, f, function () {
                e.inform("reactshow"), h || e.updatePosition();
              });
              h = !1;
              b = this._reactContainer = f;
            }
          }
          this._root = this._buildWrapper(a, b);
          a.attributes && c("DOM").setAttributes(this._root, a.attributes);
          a.classNames &&
            a.classNames.forEach(d("CSS").addClass.bind(null, this._root));
          d("CSS").addClass(this._root, "uiLayer");
          a.causalElement && (this._causalElement = c("ge")(a.causalElement));
          a.permanent && (this._permanent = a.permanent);
          a.isStrictlyControlled &&
            (this._isStrictlyControlled = a.isStrictlyControlled);
          d("DataStore").set(this._root, "layer", this);
        };
        e._getDefaultBehaviors = function () {
          return [];
        };
        e.getCausalElement = function () {
          return this._causalElement;
        };
        e.setCausalElement = function (a) {
          this._causalElement = a;
          return this;
        };
        e.getInsertParent = function () {
          return this._insertParent || document.body;
        };
        e.getRoot = function () {
          this._root ||
            (this._destroyed
              ? c("FBLogger")("layer").warn(
                  "No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed."
                )
              : c("FBLogger")("layer").warn(
                  "No root node for this Layer. It has probably not been set."
                ));
          return this._root;
        };
        e.getContentRoot = function () {
          return this.getRoot();
        };
        e._buildWrapper = function (a, b) {
          return b;
        };
        e.setInsertParent = function (a) {
          a &&
            (this._shown &&
              a !== this.getInsertParent() &&
              (c("DOM").appendContent(a, this.getRoot()),
              this.updatePosition()),
            (this._insertParent = a));
          return this;
        };
        e.showAfterDelay = function (a) {
          window.setTimeout(this.show.bind(this), a);
        };
        e.show = function () {
          var b = this;
          if (this._shown) return this;
          var e = this.getRoot();
          e != null || h(0, 5142);
          this.inform("beforeshow");
          c("Style").set(e, "visibility", "hidden");
          c("Style").set(e, "overflow", "hidden");
          d("CSS").show(e);
          c("DOM").appendContent(this.getInsertParent(), e);
          this.updatePosition() !== !1
            ? ((this._shown = !0),
              this.inform("show"),
              a.inform("show", this),
              this._permanent ||
                window.setTimeout(function () {
                  b._shown && i.push(b);
                }, 0))
            : d("CSS").hide(e);
          c("Style").set(e, "visibility", "");
          c("Style").set(e, "overflow", "");
          c("Style").set(e, "opacity", "1");
          this.inform("aftershow");
          return this;
        };
        e.hide = function (a) {
          if (this._isStrictlyControlled) {
            this._shown && this.inform("runhide", a);
            return this;
          }
          return this._hide();
        };
        e._hide = function () {
          if (this._hiding || !this._shown || this.inform("beforehide") === !1)
            return this;
          this._hiding = !0;
          this.inform("starthide") !== !1 && this.finishHide();
          return this;
        };
        e.conditionShow = function (a) {
          return a ? this.show() : this._hide();
        };
        e.finishHide = function () {
          if (this._shown) {
            this._permanent || c("removeFromArray")(i, this);
            this._hiding = !1;
            this._shown = !1;
            var b = this.getRoot();
            b != null || h(0, 5143);
            d("CSS").hide(b);
            this.inform("hide");
            a.inform("hide", this);
          }
        };
        e.isShown = function () {
          return this._shown;
        };
        e.updatePosition = function () {
          return !0;
        };
        e.destroy = function () {
          this.containsReactComponent &&
            d("BootloadedReact").unmountComponentAtNode(this._reactContainer);
          this.finishHide();
          var b = this.getRoot();
          c("DOM").remove(b);
          this.destroyBehaviors();
          this.inform("destroy");
          a.inform("destroy", this);
          d("DataStore").remove(b, "layer");
          this._root = this._causalElement = null;
          this._destroyed = !0;
        };
        a.init = function (a, b) {
          a.init(b);
        };
        a.initAndShow = function (a, b) {
          a.init(b).show();
        };
        a.show = function (a) {
          a.show();
        };
        a.showAfterDelay = function (a, b) {
          a.showAfterDelay(b);
        };
        a.getTopmostLayer = function () {
          return i[i.length - 1];
        };
        a.informBlur = function (a) {
          k = null;
          l = null;
          var b = i.length;
          if (!b) return;
          while (b--) {
            var c = i[b],
              e = c.getContentRoot();
            e != null || h(0, 5144);
            if (d("ContextualThing").containsIncludingLayers(e, a)) return;
            if (c.inform("blur", { target: a }) === !1 || c.isShown()) return;
          }
        };
        return a;
      })(c("mixin")(d("ArbiterMixin"), c("BehaviorsMixin")));
    Object.assign(j, d("ArbiterMixin"));
    Object.assign(j.prototype, {
      _destroyed: !1,
      _initialized: !1,
      _root: null,
      _shown: !1,
      _hiding: !1,
      _causalElement: null,
      _reactContainer: null,
    });
    c("Event").listen(
      document.documentElement,
      "keydown",
      function (a) {
        if (c("KeyEventController").filterEventTargets(a, "keydown"))
          for (var b = i.length - 1; b >= 0; b--)
            if (i[b].inform("key", a) === !1) return !1;
        return !0;
      },
      c("Event").Priority.URGENT
    );
    var k;
    c("Event").listen(document.documentElement, "mousedown", function (a) {
      k = a.getTarget();
    });
    var l;
    c("Event").listen(document.documentElement, "mouseup", function (a) {
      (l = a.getTarget()),
        c("setImmediate")(function () {
          (k = null), (l = null);
        });
    });
    c("Event").listen(document.documentElement, "click", function (a) {
      var b = k,
        e = l;
      k = null;
      l = null;
      var f = i.length;
      if (!f) return;
      f = a.getTarget();
      if (f !== e || f !== b) return;
      if (!c("DOM").contains(document.documentElement, f)) return;
      if (f.offsetWidth != null && !f.offsetWidth) return;
      if (d("Parent").byClass(f, "generic_dialog")) return;
      j.informBlur(f);
    });
    g["default"] = j;
  },
  98
);
__d(
  "DOMControl",
  ["$", "DataStore"],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        (this.root = b("$").fromIDOrElement(a)),
          (this.updating = !1),
          b("DataStore").set(a, "DOMControl", this);
      }
      var c = a.prototype;
      c.getRoot = function () {
        return this.root;
      };
      c.beginUpdate = function () {
        if (this.updating) return !1;
        this.updating = !0;
        return !0;
      };
      c.endUpdate = function () {
        this.updating = !1;
      };
      c.update = function (a) {
        if (!this.beginUpdate()) return this;
        this.onupdate(a);
        this.endUpdate();
      };
      c.onupdate = function (a) {};
      a.getInstance = function (a) {
        return b("DataStore").get(a, "DOMControl");
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "Input",
  ["CSS", "DOMControl", "DOMQuery"],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      return !/\S/.test(a || "");
    }
    function i(a) {
      return h(a.value);
    }
    function a(a) {
      return i(a) ? "" : a.value;
    }
    function b(a) {
      return a.value;
    }
    function e(a, b) {
      a.value = b || "";
      b = c("DOMControl").getInstance(a);
      b && b.resetHeight && b.resetHeight();
    }
    function f(a, b) {
      b || (b = ""),
        a.setAttribute("aria-label", b),
        a.setAttribute("placeholder", b);
    }
    function j(a) {
      (a.value = ""), (a.style.height = "");
    }
    function k(a, b) {
      d("CSS").conditionClass(a, "enter_submit", b);
    }
    function l(a) {
      return d("CSS").hasClass(a, "enter_submit");
    }
    function m(a, b) {
      b > 0
        ? a.setAttribute("maxlength", b.toString())
        : a.removeAttribute("maxlength");
    }
    g.isWhiteSpaceOnly = h;
    g.isEmpty = i;
    g.getValue = a;
    g.getValueRaw = b;
    g.setValue = e;
    g.setPlaceholder = f;
    g.reset = j;
    g.setSubmitOnEnter = k;
    g.getSubmitOnEnter = l;
    g.setMaxLength = m;
  },
  98
);
__d(
  "Form",
  [
    "DOM",
    "DOMQuery",
    "DTSG",
    "DTSGUtils",
    "DataStore",
    "Input",
    "LSD",
    "PHPQuerySerializer",
    "Random",
    "SprinkleConfig",
    "URI",
    "getElementPosition",
    "isFacebookURI",
    "isNode",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h,
      i = "FileList" in window,
      j = "FormData" in window;
    function k(a) {
      var c = {};
      (g || (g = b("PHPQuerySerializer")))
        .serialize(a)
        .split("&")
        .forEach(function (a) {
          if (a) {
            a = /^([^=]*)(?:=(.*))?$/.exec(a);
            var d = (h || (h = b("URI"))).decodeComponent(a[1]),
              e = a[2] !== void 0;
            e = e ? (h || (h = b("URI"))).decodeComponent(a[2]) : null;
            c[d] = e;
          }
        });
      return c;
    }
    var l = {
      getInputs: function (a) {
        a === void 0 && (a = document);
        return [].concat(
          b("DOMQuery").scry(a, "input"),
          b("DOMQuery").scry(a, "select"),
          b("DOMQuery").scry(a, "textarea"),
          b("DOMQuery").scry(a, "button")
        );
      },
      getInputsByName: function (a) {
        var b = {};
        l.getInputs(a).forEach(function (a) {
          var c = b[a.name];
          b[a.name] = typeof c === "undefined" ? a : [a].concat(c);
        });
        return b;
      },
      getSelectValue: function (a) {
        return a.options[a.selectedIndex].value;
      },
      setSelectValue: function (a, b) {
        for (var c = 0; c < a.options.length; ++c)
          if (a.options[c].value == b) {
            a.selectedIndex = c;
            break;
          }
      },
      getRadioValue: function (a) {
        for (var b = 0; b < a.length; b++) if (a[b].checked) return a[b].value;
        return null;
      },
      getElements: function (a) {
        return a.tagName == "FORM" && a.elements != a
          ? Array.from(a.elements)
          : l.getInputs(a);
      },
      getAttribute: function (a, b) {
        return (a.getAttributeNode(b) || {}).value || null;
      },
      setDisabled: function (a, c) {
        l.getElements(a).forEach(function (a) {
          if (a.disabled !== void 0) {
            var d = b("DataStore").get(a, "origDisabledState");
            c
              ? (d === void 0 &&
                  b("DataStore").set(a, "origDisabledState", a.disabled),
                (a.disabled = c))
              : d === !1 && (a.disabled = !1);
          }
        });
      },
      forEachValue: function (a, c, d) {
        l.getElements(a).forEach(function (a) {
          if (!a.name || a.disabled) return;
          if (a.type === "submit") return;
          if (a.type === "reset" || a.type === "button" || a.type === "image")
            return;
          if ((a.type === "radio" || a.type === "checkbox") && !a.checked)
            return;
          if (a.nodeName === "SELECT") {
            for (var c = 0, e = a.options.length; c < e; c++) {
              var f = a.options[c];
              f.selected && d("select", a.name, f.value);
            }
            return;
          }
          if (a.type === "file") {
            if (i) {
              f = a.files;
              for (var c = 0; c < f.length; c++) d("file", a.name, f.item(c));
            }
            return;
          }
          d(a.type, a.name, b("Input").getValue(a));
        }),
          c &&
            c.name &&
            c.type === "submit" &&
            b("DOMQuery").contains(a, c) &&
            b("DOMQuery").isNodeOfType(c, ["input", "button"]) &&
            d("submit", c.name, c.value);
      },
      createFormData: function (a, c) {
        if (!j) return null;
        var d = new FormData();
        if (a)
          if (b("isNode")(a))
            l.forEachValue(a, c, function (b, a, c) {
              d.append(a, c);
            });
          else {
            c = k(a);
            for (var e in c) c[e] == null ? d.append(e, "") : d.append(e, c[e]);
          }
        return d;
      },
      serialize: function (a, b) {
        var c = {};
        l.forEachValue(a, b, function (a, b, d) {
          if (a === "file") return;
          l._serializeHelper(c, b, d);
        });
        return l._serializeFix(c);
      },
      _serializeHelper: function (a, b, c) {
        var d = Object.prototype.hasOwnProperty,
          e = /([^\]]+)\[([^\]]*)\](.*)/.exec(b);
        if (e) {
          if (!a[e[1]] || !d.call(a, e[1])) {
            a[e[1]] = d = {};
            if (a[e[1]] !== d) return;
          }
          d = 0;
          if (e[2] === "") while (a[e[1]][d] !== void 0) d++;
          else d = e[2];
          e[3] === ""
            ? (a[e[1]][d] = c)
            : l._serializeHelper(a[e[1]], d.concat(e[3]), c);
        } else a[b] = c;
      },
      _serializeFix: function (a) {
        for (var b in a)
          a[b] instanceof Object && (a[b] = l._serializeFix(a[b]));
        var c = Object.keys(a);
        if (c.length === 0 || c.some(isNaN)) return a;
        c.sort(function (a, b) {
          return a - b;
        });
        var d = 0,
          e = c.every(function (a) {
            return +a === d++;
          });
        return e
          ? c.map(function (b) {
              return a[b];
            })
          : a;
      },
      post: function (a, c, d, e) {
        e === void 0 && (e = !0);
        a = new (h || (h = b("URI")))(a);
        var f = document.createElement("form");
        f.action = a.toString();
        f.method = "POST";
        f.style.display = "none";
        var g = !b("isFacebookURI")(a);
        if (d) {
          if (g) {
            f.rel = "noopener";
            if (d === "_blank") {
              d = btoa(b("Random").uint32());
              var i = window.open("about:blank", d);
              i === void 0 || (i.opener = null);
            }
          }
          f.target = d;
        }
        if (e && !g && a.getSubdomain() !== "apps") {
          i = b("DTSG").getToken();
          i &&
            ((c.fb_dtsg = i),
            b("SprinkleConfig").param_name &&
              (c[b("SprinkleConfig").param_name] =
                b("DTSGUtils").getNumericValue(i)));
          b("LSD").token &&
            ((c.lsd = b("LSD").token),
            b("SprinkleConfig").param_name &&
              !i &&
              (c[b("SprinkleConfig").param_name] = b(
                "DTSGUtils"
              ).getNumericValue(b("LSD").token)));
        }
        l.createHiddenInputs(c, f);
        b("DOMQuery").getRootElement().appendChild(f);
        f.submit();
        return !1;
      },
      createHiddenInputs: function (a, c, d, e) {
        e === void 0 && (e = !1);
        d = d || {};
        a = k(a);
        for (var f in a) {
          if (a[f] === null) continue;
          if (d[f] && e) d[f].value = a[f];
          else {
            var g = b("DOM").create("input", {
              type: "hidden",
              name: f,
              value: a[f],
            });
            d[f] = g;
            c.appendChild(g);
          }
        }
        return d;
      },
      getFirstElement: function (a, c) {
        c === void 0 &&
          (c = [
            'input[type="text"]',
            "textarea",
            'input[type="password"]',
            'input[type="button"]',
            'input[type="submit"]',
          ]);
        var d = [];
        for (var e = 0; e < c.length; e++) {
          d = b("DOMQuery").scry(a, c[e]);
          for (var f = 0; f < d.length; f++) {
            var g = d[f];
            try {
              var h = b("getElementPosition")(g);
              if (h.y > 0 && h.x > 0) return g;
            } catch (a) {}
          }
        }
        return null;
      },
      focusFirst: function (a) {
        a = l.getFirstElement(a);
        if (a) {
          a.focus();
          return !0;
        }
        return !1;
      },
    };
    e.exports = l;
  },
  null
);
__d(
  "AsyncUploadBase",
  [
    "ArbiterMixin",
    "AsyncRequest",
    "AsyncResponse",
    "BrowserSupport",
    "Form",
    "forEachObject",
    "mixin",
    "removeFromArray",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      b.parseFiles = function (a) {
        var b = {};
        c("forEachObject")(a, function (a, c) {
          if (Array.isArray(a)) b[c] = a;
          else {
            b[c] = [];
            if (a instanceof window.FileList)
              for (var d = 0; d < a.length; d++) b[c].push(a.item(d));
            else
              (a instanceof window.File || a instanceof window.Blob) &&
                b[c].push(a);
          }
        });
        return b;
      };
      function b(b) {
        var c;
        c = a.call(this) || this;
        c._allowCrossOrigin = !1;
        c._allowCrossPageTransition = !1;
        c._customHeader = {};
        c._inFlight = !1;
        c._limit = 10;
        c._option = {};
        c._preventDefaultErrorHandler = !1;
        c._suspended = !1;
        b && c.setURI(b);
        c.setNetworkErrorRetryLimit(0);
        return c;
      }
      var e = b.prototype;
      e.setAllowCrossOrigin = function (a) {
        this._allowCrossOrigin = !!a;
        return this;
      };
      e.setAllowCrossPageTransition = function (a) {
        this._allowCrossPageTransition = !!a;
        return this;
      };
      e.setCustomHttpHeader = function (a, b) {
        this._customHeader[a] = b;
        return this;
      };
      e.setData = function (a) {
        this._data = a;
        return this;
      };
      e.setOption = function (a, b) {
        this._option[a] = b;
        return this;
      };
      e.setPreventDefaultErrorHandler = function (a) {
        this._preventDefaultErrorHandler = a;
        return this;
      };
      e.setLimit = function (a) {
        this._limit = a;
        return this;
      };
      e.setNetworkErrorRetryLimit = function (a) {
        this._retryLimit = a;
        return this;
      };
      e.setPreprocessHandler = function (a) {
        this._preprocessHandler = a;
        return this;
      };
      e.setRelativeTo = function (a) {
        this._relativeTo = a;
        return this;
      };
      e.setStatusElement = function (a) {
        this._statusElement = a;
        return this;
      };
      e.setURI = function (a) {
        this._uri = a;
        return this;
      };
      e.suspend = function () {
        this._suspended = !0;
        return this;
      };
      e.resume = function () {
        this._suspended = !1;
        this._processQueue();
        return this;
      };
      e.isUploading = function () {
        return this._inFlight;
      };
      e._createFileUpload = function (a, b, c) {
        return new h(a, b, c);
      };
      e._processQueue = function () {
        if (this._suspended) return;
        while (this._pending.length < this._limit) {
          if (!this._waiting.length) break;
          var a = this._waiting.shift(),
            b = this._preprocessHandler;
          b ? b(a, this._processUpload.bind(this)) : this._processUpload(a);
          this._pending.push(a);
        }
      };
      e._processUpload = function (a) {
        var b = d("Form").createFormData(a.getData() || this._data);
        if (a.getFile()) {
          b.append(a.getName(), a.getFile());
          var e = a.getFile().uploadID;
          e && b.append("upload_id", e);
          a.getAdditionalData().forEach(function (a, c) {
            return b.append(c, a);
          });
        }
        e = new (c("AsyncRequest"))()
          .setAllowCrossOrigin(this._allowCrossOrigin)
          .setAllowCrossPageTransition(this._allowCrossPageTransition)
          .setURI(this._uri)
          .setRawData(b)
          .setStatusElement(this._statusElement)
          .setHandler(this._success.bind(this, a))
          .setErrorHandler(this._failure.bind(this, a))
          .setUploadProgressHandler(this._progress.bind(this, a))
          .setInitialHandler(this._initial.bind(this, a));
        for (var f in this._option) e.setOption(f, this._option[f]);
        for (var g in this._customHeader)
          e.setRequestHeader(g, this._customHeader[g]);
        this._relativeTo && e.setRelativeTo(this._relativeTo);
        e.send();
        a.setAsyncRequest(e);
        this._inFlight = !0;
        a.getRetryCount() || this.inform("start", a);
      };
      e._abort = function (a) {
        this._pending.indexOf(a) !== -1 &&
          (c("removeFromArray")(this._pending, a), this._processQueue()),
          c("removeFromArray")(this._waiting, a),
          a.abort();
      };
      e._initial = function (a) {
        if (a.isAborted()) return;
        this.inform("initial", a);
      };
      e._success = function (a, b) {
        if (a.isAborted()) {
          this.inform("success_after_abort", b);
          return;
        }
        this._complete(a);
        this.inform("success", a.handleSuccess(b));
        this._processQueue();
      };
      e._retryUpload = function (a) {
        a.increaseRetryCount(), this._processUpload(a);
      };
      e._failure = function (a, b) {
        if (a.isAborted()) return;
        if (b.error === 1004 && a.getRetryCount() < (this._retryLimit || 0))
          return this._retryUpload(a);
        this._complete(a);
        this.inform("failure", a.handleFailure(b)) !== !1 &&
          (this._preventDefaultErrorHandler ||
            c("AsyncResponse").defaultErrorHandler(b));
        this._processQueue();
      };
      e._progress = function (a, b) {
        if (a.isAborted()) return;
        this.inform("progress", a.handleProgress(b));
      };
      e._complete = function (a) {
        c("removeFromArray")(this._pending, a),
          this._pending.length || (this._inFlight = !1);
      };
      b.isSupported = function () {
        return d("BrowserSupport").hasFileAPI();
      };
      return b;
    })(c("mixin")(d("ArbiterMixin")));
    var h = (function () {
      function a(a, b, c) {
        (this._additionalData = new Map()),
          (this._success = null),
          (this._response = null),
          (this._progressEvent = null),
          (this._request = null),
          (this._numRetries = 0),
          (this._aborted = !1),
          (this._name = a),
          (this._file = b),
          (this._data = c);
      }
      var b = a.prototype;
      b.getName = function () {
        return this._name;
      };
      b.getFile = function () {
        return this._file;
      };
      b.setFile = function (a) {
        this._file = a;
      };
      b.getData = function () {
        return this._data;
      };
      b.getAdditionalData = function () {
        return this._additionalData;
      };
      b.isComplete = function () {
        return this._success !== null;
      };
      b.isSuccess = function () {
        return this._success === !0;
      };
      b.getResponse = function () {
        return this._response;
      };
      b.getProgressEvent = function () {
        return this._progressEvent;
      };
      b.setAsyncRequest = function (a) {
        this._request = a;
        return this;
      };
      b.increaseRetryCount = function () {
        this._numRetries++;
        return this;
      };
      b.getRetryCount = function () {
        return this._numRetries;
      };
      b.isWaiting = function () {
        return !this._request;
      };
      b.isAborted = function () {
        return this._aborted;
      };
      b.abort = function () {
        (this._request = null), (this._aborted = !0);
      };
      b.handleSuccess = function (a) {
        this._success = !0;
        this._response = a;
        this._progressEvent = null;
        return this;
      };
      b.handleFailure = function (a) {
        this._success = !1;
        this._response = a;
        this._progressEvent = null;
        return this;
      };
      b.handleProgress = function (a) {
        this._progressEvent = a;
        return this;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "AsyncUploadRequest",
  ["AsyncUploadBase"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c._files = null),
          (c._uploads = []),
          (c._fileLessUpload = null),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.setFiles = function (a) {
        this._files = c("AsyncUploadBase").parseFiles(a);
        return this;
      };
      d.setAlwaysReturnResponse = function (a) {
        this._shouldAlwaysReturnResponse = a;
      };
      d.abort = function () {
        var a = this;
        this._uploads.forEach(function (b) {
          return a._abort(b);
        }, this);
      };
      d.send = function () {
        if (this._inFlight) return;
        this._inFlight = !0;
        this._uploads = [];
        for (var a in this._files)
          this._files[a].forEach(
            function (b) {
              this._uploads.push(this._createFileUpload(a, b));
            }.bind(this)
          );
        this._waiting = this._uploads.slice(0);
        this._pending = [];
        this._uploads.length
          ? this._processQueue()
          : ((this._fileLessUpload = this._createFileUpload(null, null)),
            this._processUpload(this._fileLessUpload));
      };
      d._processQueue = function () {
        a.prototype._processQueue.call(this);
        if (!this._pending.length && !this._waiting.length) {
          var b = this._uploads;
          b = this._shouldAlwaysReturnResponse
            ? this._fileLessUpload != null
              ? { response: this._fileLessUpload.getResponse(), uploads: b }
              : { response: b[0].getResponse(), uploads: b }
            : b;
          this.inform("complete", b);
        }
      };
      b.isSupported = function () {
        return c("AsyncUploadBase").isSupported();
      };
      return b;
    })(c("AsyncUploadBase"));
    g["default"] = a;
  },
  98
);
__d(
  "XAsyncRequest",
  ["AsyncRequest"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        var b = this;
        this.setAllowCrossPageTransition = function (a) {
          b.$1.setAllowCrossPageTransition(a);
          return b;
        };
        this.$1 = new (c("AsyncRequest"))(a);
      }
      var b = a.prototype;
      b.setURI = function (a) {
        this.$1.setURI(a);
        return this;
      };
      b.setOption = function (a, b) {
        this.$1.setOption(a, b);
        return this;
      };
      b.setMethod = function (a) {
        this.$1.setMethod(a);
        return this;
      };
      b.setData = function (a) {
        this.$1.setData(a);
        return this;
      };
      b.setHandler = function (a) {
        this.$1.setHandler(a);
        return this;
      };
      b.setPayloadHandler = function (a) {
        this.setHandler(function (b) {
          return a(b.payload);
        });
        return this;
      };
      b.setErrorHandler = function (a) {
        this.$1.setErrorHandler(a);
        return this;
      };
      b.send = function () {
        this.$1.send();
        return this;
      };
      b.abort = function () {
        this.$1.abort();
      };
      b.setReadOnly = function (a) {
        this.$1.setReadOnly(a);
        return this;
      };
      b.setAllowCrossOrigin = function (a) {
        this.$1.setAllowCrossOrigin(a);
        return this;
      };
      b.setAllowCredentials = function (a) {
        this.$1.setAllowCredentials(a);
        return this;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "XWebGraphQLMutationController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/webgraphql/mutation/", {
      query_id: { type: "FBID" },
      variables: { type: "String" },
      doc_id: { type: "FBID" },
    });
  },
  null
);
__d(
  "base62",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function a(a) {
      if (!a) return "0";
      var b = "";
      while (a > 0) (b = g[a % 62] + b), (a = Math.floor(a / 62));
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "WebGraphQLMutationBase",
  [
    "invariant",
    "CurrentUser",
    "WebGraphQLLegacyHelper",
    "XWebGraphQLMutationController",
    "base62",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 0;
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.__getVariables = function () {
        return this.$1;
      };
      b.__getDocID = function () {
        return this.constructor.__getDocID();
      };
      a.__getController = function () {
        return c("XWebGraphQLMutationController");
      };
      a.__getDocID = function () {
        h(0, 1804);
      };
      a.getURI = function (a) {
        return d("WebGraphQLLegacyHelper").getURI({
          controller: this.__getController(),
          docID: this.__getDocID(),
          variables: {
            data: babelHelpers["extends"](
              {
                client_mutation_id: c("base62")(i++),
                actor_id: c("CurrentUser").getID(),
              },
              a
            ),
          },
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "XUIDialog.react",
  ["csx", "AbstractDialog.react", "LayerFadeOnShow", "ReactLayer"],
  function (a, b, c, d, e, f, g) {
    a = b("ReactLayer").createClass(
      b("AbstractDialog.react").createSpec({
        displayName: "XUIDialog",
        addedBehaviors: { LayerFadeOnShow: b("LayerFadeOnShow") },
        titleClass: "._52c9",
        hideOnEscape: !0,
      })
    );
    e.exports = a;
  },
  null
);
__d(
  "Animation",
  [
    "BrowserSupport",
    "CSS",
    "DOM",
    "DataStore",
    "Style",
    "clearInterval",
    "clearTimeout",
    "getVendorPrefixedName",
    "requestAnimationFrame",
    "setIntervalAcrossTransitions",
    "setTimeoutAcrossTransitions",
    "shield",
  ],
  function (a, b, c, d, e, f) {
    var g = b("requestAnimationFrame"),
      h = [],
      i;
    function j(b) {
      if (a == this) return new j(b);
      else
        (this.obj = b),
          this._reset_state(),
          (this.queue = []),
          (this.last_attr = null),
          (this.unit = "px"),
          (this.behaviorOverrides = { ignoreUserScroll: !1 });
    }
    function k(a) {
      if (b("BrowserSupport").hasCSS3DTransforms()) return n(a);
      else return m(a);
    }
    function l(a) {
      return a.toFixed(8);
    }
    function m(a) {
      a = [a[0], a[4], a[1], a[5], a[12], a[13]];
      return "matrix(" + a.map(l).join(",") + ")";
    }
    function n(a) {
      return "matrix3d(" + a.map(l).join(",") + ")";
    }
    function o(a, b) {
      a || (a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      var c = [];
      for (var d = 0; d < 4; d++)
        for (var e = 0; e < 4; e++) {
          var f = 0;
          for (var g = 0; g < 4; g++) f += a[d * 4 + g] * b[g * 4 + e];
          c[d * 4 + e] = f;
        }
      return c;
    }
    var p = 0;
    j.prototype._reset_state = function () {
      this.state = { attrs: {}, duration: 500 };
    };
    j.prototype.stop = function () {
      this._reset_state();
      this.queue = [];
      return this;
    };
    j.prototype._build_container = function () {
      if (this.container_div) {
        this._refresh_container();
        return;
      }
      if (this.obj.firstChild && this.obj.firstChild.__animation_refs) {
        this.container_div = this.obj.firstChild;
        this.container_div.__animation_refs++;
        this._refresh_container();
        return;
      }
      var a = document.createElement("div");
      a.style.padding = "0px";
      a.style.margin = "0px";
      a.style.border = "0px";
      a.__animation_refs = 1;
      var b = this.obj.childNodes;
      while (b.length) a.appendChild(b[0]);
      this.obj.appendChild(a);
      this._orig_overflow = this.obj.style.overflow;
      this.obj.style.overflow = "hidden";
      this.container_div = a;
      this._refresh_container();
    };
    j.prototype._refresh_container = function () {
      (this.container_div.style.height = "auto"),
        (this.container_div.style.width = "auto"),
        (this.container_div.style.height =
          this.container_div.offsetHeight + this.unit),
        (this.container_div.style.width =
          this.container_div.offsetWidth + this.unit);
    };
    j.prototype._destroy_container = function () {
      if (!this.container_div) return;
      if (!--this.container_div.__animation_refs) {
        var a = this.container_div.childNodes;
        while (a.length) this.obj.appendChild(a[0]);
        this.obj.removeChild(this.container_div);
      }
      this.container_div = null;
      this.obj.style.overflow = this._orig_overflow;
    };
    var q = 1,
      r = 2,
      s = 3;
    j.prototype._attr = function (a, b, c) {
      a = a.replace(/-[a-z]/gi, function (a) {
        return a.substring(1).toUpperCase();
      });
      var d = !1;
      switch (a) {
        case "background":
          this._attr("backgroundColor", b, c);
          return this;
        case "backgroundColor":
        case "borderColor":
        case "color":
          b = w(b);
          break;
        case "opacity":
          b = parseFloat(b, 10);
          break;
        case "height":
        case "width":
          b == "auto" ? (d = !0) : (b = parseInt(b, 10));
          break;
        case "borderWidth":
        case "lineHeight":
        case "fontSize":
        case "margin":
        case "marginBottom":
        case "marginLeft":
        case "marginRight":
        case "marginTop":
        case "padding":
        case "paddingBottom":
        case "paddingLeft":
        case "paddingRight":
        case "paddingTop":
        case "bottom":
        case "left":
        case "right":
        case "top":
        case "scrollTop":
        case "scrollLeft":
          b = parseInt(b, 10);
          break;
        case "rotateX":
        case "rotateY":
        case "rotateZ":
          b = (parseInt(b, 10) * Math.PI) / 180;
          break;
        case "translateX":
        case "translateY":
        case "translateZ":
        case "scaleX":
        case "scaleY":
        case "scaleZ":
          b = parseFloat(b, 10);
          break;
        case "rotate3d":
          this._attr("rotateX", b[0], c);
          this._attr("rotateY", b[1], c);
          this._attr("rotateZ", b[2], c);
          return this;
        case "rotate":
          this._attr("rotateZ", b, c);
          return this;
        case "scale3d":
          this._attr("scaleZ", b[2], c);
        case "scale":
          this._attr("scaleX", b[0], c);
          this._attr("scaleY", b[1], c);
          return this;
        case "translate3d":
          this._attr("translateZ", b[2], c);
        case "translate":
          this._attr("translateX", b[0], c);
          this._attr("translateY", b[1], c);
          return this;
        default:
          throw new Error(a + " is not a supported attribute!");
      }
      this.state.attrs[a] === void 0 && (this.state.attrs[a] = {});
      d && (this.state.attrs[a].auto = !0);
      switch (c) {
        case s:
          this.state.attrs[a].start = b;
          break;
        case r:
          this.state.attrs[a].by = !0;
        case q:
          this.state.attrs[a].value = b;
          break;
      }
    };
    function t(a) {
      var c,
        d = parseInt((c = b("Style")).get(a, "paddingLeft"), 10),
        e = parseInt(c.get(a, "paddingRight"), 10),
        f = parseInt(c.get(a, "borderLeftWidth"), 10);
      c = parseInt(c.get(a, "borderRightWidth"), 10);
      return (
        a.offsetWidth - (d ? d : 0) - (e ? e : 0) - (f ? f : 0) - (c ? c : 0)
      );
    }
    function u(a) {
      var c,
        d = parseInt((c = b("Style")).get(a, "paddingTop"), 10),
        e = parseInt(c.get(a, "paddingBottom"), 10),
        f = parseInt(c.get(a, "borderTopWidth"), 10);
      c = parseInt(c.get(a, "borderBottomWidth"), 10);
      return (
        a.offsetHeight - (d ? d : 0) - (e ? e : 0) - (f ? f : 0) - (c ? c : 0)
      );
    }
    j.prototype.setUnit = function (a) {
      this.unit = a;
      return this;
    };
    j.prototype.to = function (a, b) {
      b === void 0
        ? this._attr(this.last_attr, a, q)
        : (this._attr(a, b, q), (this.last_attr = a));
      return this;
    };
    j.prototype.by = function (a, b) {
      b === void 0
        ? this._attr(this.last_attr, a, r)
        : (this._attr(a, b, r), (this.last_attr = a));
      return this;
    };
    j.prototype.from = function (a, b) {
      b === void 0
        ? this._attr(this.last_attr, a, s)
        : (this._attr(a, b, s), (this.last_attr = a));
      return this;
    };
    j.prototype.duration = function (a) {
      this.state.duration = a ? a : 0;
      return this;
    };
    j.prototype.checkpoint = function (a, b) {
      a === void 0 && (a = 1);
      this.state.checkpoint = a;
      this.queue.push(this.state);
      this._reset_state();
      this.state.checkpointcb = b;
      return this;
    };
    j.prototype.blind = function () {
      this.state.blind = !0;
      return this;
    };
    j.prototype.hide = function () {
      this.state.hide = !0;
      return this;
    };
    j.prototype.show = function () {
      this.state.show = !0;
      return this;
    };
    j.prototype.ease = function (a) {
      this.state.ease = a;
      return this;
    };
    j.prototype.CSSAnimation = function (a) {
      var b = { duration: this.state.duration };
      this.state.ondone && (b.callback = this.state.ondone);
      a(this.obj, b);
    };
    j.prototype.go = function () {
      var a = Date.now();
      this.queue.push(this.state);
      for (var b = 0; b < this.queue.length; b++)
        (this.queue[b].start = a - p),
          this.queue[b].checkpoint &&
            (a += this.queue[b].checkpoint * this.queue[b].duration);
      x(this);
      return this;
    };
    j.prototype._show = function () {
      b("CSS").show(this.obj);
    };
    j.prototype._hide = function () {
      b("CSS").hide(this.obj);
    };
    j.prototype.overrideBehavior = function (a) {
      this.behaviorOverrides = babelHelpers["extends"](
        {},
        this.behaviorOverrides,
        a
      );
      return this;
    };
    j.prototype._frame = function (c) {
      var d = !0,
        e = !1,
        f;
      function g(a) {
        return document.documentElement[a] || document.body[a];
      }
      function h(a, b) {
        return a === document.body ? g(b) : a[b];
      }
      function i(a, b) {
        return (
          (b.lastScrollTop !== void 0 &&
            b.lastScrollTop !== h(a.obj, "scrollTop")) ||
          (b.lastScrollLeft !== void 0 &&
            b.lastScrollLeft !== h(a.obj, "scrollLeft"))
        );
      }
      function j(a, b) {
        (b.lastScrollTop = h(a.obj, "scrollTop")),
          (b.lastScrollLeft = h(a.obj, "scrollLeft"));
      }
      for (var l = 0; l < this.queue.length; l++) {
        var m = this.queue[l];
        if (m.start > c) {
          d = !1;
          continue;
        }
        m.checkpointcb &&
          (this._callback(m.checkpointcb, c - m.start),
          (m.checkpointcb = null));
        if (m.started === void 0) {
          m.show && this._show();
          for (var n in m.attrs) {
            if (m.attrs[n].start !== void 0) continue;
            switch (n) {
              case "backgroundColor":
              case "borderColor":
              case "color":
                f = w(
                  b("Style").get(
                    this.obj,
                    n == "borderColor" ? "borderLeftColor" : n
                  )
                );
                m.attrs[n].by &&
                  ((m.attrs[n].value[0] = Math.min(
                    255,
                    Math.max(0, m.attrs[n].value[0] + f[0])
                  )),
                  (m.attrs[n].value[1] = Math.min(
                    255,
                    Math.max(0, m.attrs[n].value[1] + f[1])
                  )),
                  (m.attrs[n].value[2] = Math.min(
                    255,
                    Math.max(0, m.attrs[n].value[2] + f[2])
                  )));
                break;
              case "opacity":
                f = b("Style").getOpacity(this.obj);
                m.attrs[n].by &&
                  (m.attrs[n].value = Math.min(
                    1,
                    Math.max(0, m.attrs[n].value + f)
                  ));
                break;
              case "height":
                f = u(this.obj);
                m.attrs[n].by && (m.attrs[n].value += f);
                break;
              case "width":
                f = t(this.obj);
                m.attrs[n].by && (m.attrs[n].value += f);
                break;
              case "scrollLeft":
              case "scrollTop":
                f = h(this.obj, n);
                m.attrs[n].by && (m.attrs[n].value += f);
                j(this, m);
                break;
              case "rotateX":
              case "rotateY":
              case "rotateZ":
              case "translateX":
              case "translateY":
              case "translateZ":
                f = b("DataStore").get(this.obj, n, 0);
                m.attrs[n].by && (m.attrs[n].value += f);
                break;
              case "scaleX":
              case "scaleY":
              case "scaleZ":
                f = b("DataStore").get(this.obj, n, 1);
                m.attrs[n].by && (m.attrs[n].value += f);
                break;
              default:
                f = parseInt(b("Style").get(this.obj, n), 10) || 0;
                m.attrs[n].by && (m.attrs[n].value += f);
                break;
            }
            m.attrs[n].start = f;
          }
          if (
            (m.attrs.height && m.attrs.height.auto) ||
            (m.attrs.width && m.attrs.width.auto)
          ) {
            this._destroy_container();
            for (var n in {
              height: 1,
              width: 1,
              fontSize: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              paddingLeft: 1,
              paddingRight: 1,
              paddingTop: 1,
              paddingBottom: 1,
            })
              m.attrs[n] &&
                (this.obj.style[n] =
                  m.attrs[n].value +
                  (typeof m.attrs[n].value === "number" ? this.unit : ""));
            m.attrs.height &&
              m.attrs.height.auto &&
              (m.attrs.height.value = u(this.obj));
            m.attrs.width &&
              m.attrs.width.auto &&
              (m.attrs.width.value = t(this.obj));
          }
          m.started = !0;
          m.blind && this._build_container();
        }
        var p = (c - m.start) / m.duration;
        p >= 1 ? ((p = 1), m.hide && this._hide()) : (d = !1);
        var q = m.ease ? m.ease(p) : p;
        !e && p != 1 && m.blind && (e = !0);
        for (var n in m.attrs)
          switch (n) {
            case "backgroundColor":
            case "borderColor":
            case "color":
              m.attrs[n].start[3] != m.attrs[n].value[3]
                ? (this.obj.style[n] =
                    "rgba(" +
                    v(q, m.attrs[n].start[0], m.attrs[n].value[0], !0) +
                    "," +
                    v(q, m.attrs[n].start[1], m.attrs[n].value[1], !0) +
                    "," +
                    v(q, m.attrs[n].start[2], m.attrs[n].value[2], !0) +
                    "," +
                    v(q, m.attrs[n].start[3], m.attrs[n].value[3], !1) +
                    ")")
                : (this.obj.style[n] =
                    "rgb(" +
                    v(q, m.attrs[n].start[0], m.attrs[n].value[0], !0) +
                    "," +
                    v(q, m.attrs[n].start[1], m.attrs[n].value[1], !0) +
                    "," +
                    v(q, m.attrs[n].start[2], m.attrs[n].value[2], !0) +
                    ")");
              break;
            case "opacity":
              b("Style").set(
                this.obj,
                "opacity",
                v(q, m.attrs[n].start, m.attrs[n].value)
              );
              break;
            case "height":
            case "width":
              this.obj.style[n] =
                q == 1 && m.attrs[n].auto
                  ? "auto"
                  : v(q, m.attrs[n].start, m.attrs[n].value, !0) + this.unit;
              break;
            case "scrollLeft":
            case "scrollTop":
              var r = this.obj === document.body;
              if (!this.behaviorOverrides.ignoreUserScroll && i(this, m))
                delete m.attrs.scrollTop, delete m.attrs.scrollLeft;
              else {
                var s = v(q, m.attrs[n].start, m.attrs[n].value, !0);
                !r
                  ? (this.obj[n] = s)
                  : n == "scrollLeft"
                  ? a.scrollTo(s, g("scrollTop"))
                  : a.scrollTo(g("scrollLeft"), s);
                j(this, m);
              }
              break;
            case "translateX":
            case "translateY":
            case "translateZ":
            case "rotateX":
            case "rotateY":
            case "rotateZ":
            case "scaleX":
            case "scaleY":
            case "scaleZ":
              b("DataStore").set(
                this.obj,
                n,
                v(q, m.attrs[n].start, m.attrs[n].value, !1)
              );
              break;
            default:
              this.obj.style[n] =
                v(q, m.attrs[n].start, m.attrs[n].value, !0) + this.unit;
              break;
          }
        r = null;
        s = b("DataStore").get(this.obj, "translateX", 0);
        q = b("DataStore").get(this.obj, "translateY", 0);
        var x = b("DataStore").get(this.obj, "translateZ", 0);
        (s || q || x) &&
          (r = o(r, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, s, q, x, 1]));
        s = b("DataStore").get(this.obj, "scaleX", 1);
        q = b("DataStore").get(this.obj, "scaleY", 1);
        x = b("DataStore").get(this.obj, "scaleZ", 1);
        (s - 1 || q - 1 || x - 1) &&
          (r = o(r, [s, 0, 0, 0, 0, q, 0, 0, 0, 0, x, 0, 0, 0, 0, 1]));
        s = b("DataStore").get(this.obj, "rotateX", 0);
        s &&
          (r = o(r, [
            1,
            0,
            0,
            0,
            0,
            Math.cos(s),
            Math.sin(-s),
            0,
            0,
            Math.sin(s),
            Math.cos(s),
            0,
            0,
            0,
            0,
            1,
          ]));
        q = b("DataStore").get(this.obj, "rotateY", 0);
        q &&
          (r = o(r, [
            Math.cos(q),
            0,
            Math.sin(q),
            0,
            0,
            1,
            0,
            0,
            Math.sin(-q),
            0,
            Math.cos(q),
            0,
            0,
            0,
            0,
            1,
          ]));
        x = b("DataStore").get(this.obj, "rotateZ", 0);
        x &&
          (r = o(r, [
            Math.cos(x),
            Math.sin(-x),
            0,
            0,
            Math.sin(x),
            Math.cos(x),
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
          ]));
        s = b("getVendorPrefixedName")("transform");
        if (s)
          if (r) {
            q = k(r);
            b("Style").set(this.obj, s, q);
          } else d && b("Style").set(this.obj, s, null);
        p == 1 &&
          (this.queue.splice(l--, 1),
          this._callback(m.ondone, c - m.start - m.duration));
      }
      !e && this.container_div && this._destroy_container();
      return !d;
    };
    j.prototype.ondone = function (a) {
      this.state.ondone = a;
      return this;
    };
    j.prototype._callback = function (a, b) {
      a && ((p = b), a.call(this), (p = 0));
    };
    function v(a, b, c, d) {
      return (d ? parseInt : parseFloat)((c - b) * a + b, 10);
    }
    function w(a) {
      var b = /^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(a);
      if (b)
        return [
          parseInt(b[1].length == 1 ? b[1] + b[1] : b[1], 16),
          parseInt(b[2].length == 1 ? b[2] + b[2] : b[2], 16),
          parseInt(b[3].length == 1 ? b[3] + b[3] : b[3], 16),
          1,
        ];
      else {
        b =
          /^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9\.]+))?\)$/.exec(
            a
          );
        if (b)
          return [
            parseInt(b[1], 10),
            parseInt(b[2], 10),
            parseInt(b[3], 10),
            b[4] ? parseFloat(b[4]) : 1,
          ];
        else if (a == "transparent") return [255, 255, 255, 0];
        else throw new Error("Named color attributes are not supported.");
      }
    }
    function x(a) {
      h.push(a),
        h.length === 1 &&
          (g ? g(z) : (i = b("setIntervalAcrossTransitions")(z, 20))),
        g && y(),
        z(Date.now(), !0);
    }
    function y() {
      if (!g)
        throw new Error("Ending timer only valid with requestAnimationFrame");
      var a = 0;
      for (var c = 0; c < h.length; c++) {
        var d = h[c];
        for (var e = 0; e < d.queue.length; e++) {
          var f = d.queue[e].start + d.queue[e].duration;
          f > a && (a = f);
        }
      }
      i && (b("clearTimeout")(i), (i = null));
      f = Date.now();
      a > f && (i = b("setTimeoutAcrossTransitions")(b("shield")(z), a - f));
    }
    function z(a, c) {
      a = Date.now();
      for (var c = c === !0 ? h.length - 1 : 0; c < h.length; c++)
        try {
          h[c]._frame(a) || h.splice(c--, 1);
        } catch (a) {
          h.splice(c--, 1);
        }
      h.length === 0
        ? i && (g ? b("clearTimeout")(i) : b("clearInterval")(i), (i = null))
        : g && g(z);
    }
    j.ease = {};
    j.ease.begin = function (a) {
      return Math.sin((Math.PI / 2) * (a - 1)) + 1;
    };
    j.ease.end = function (a) {
      return Math.sin(0.5 * Math.PI * a);
    };
    j.ease.both = function (a) {
      return 0.5 * Math.sin(Math.PI * (a - 0.5)) + 0.5;
    };
    j.prependInsert = function (a, c) {
      j.insert(a, c, b("DOM").prependContent);
    };
    j.appendInsert = function (a, c) {
      j.insert(a, c, b("DOM").appendContent);
    };
    j.insert = function (a, c, d) {
      b("Style").set(c, "opacity", 0),
        d(a, c),
        new j(c).from("opacity", 0).to("opacity", 1).duration(400).go();
    };
    e.exports = j;
  },
  null
);
__d(
  "BasicVector",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a, b) {
        (this.x = a), (this.y = b);
      }
      var b = a.prototype;
      b.derive = function (b, c) {
        return new a(b, c);
      };
      b.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
      };
      b.add = function (a, b) {
        b === void 0 && ((b = a.y), (a = a.x));
        a = parseFloat(a);
        b = parseFloat(b);
        return this.derive(this.x + a, this.y + b);
      };
      b.mul = function (a, b) {
        b === void 0 && (b = a);
        return this.derive(this.x * a, this.y * b);
      };
      b.div = function (a, b) {
        b === void 0 && (b = a);
        return this.derive((this.x * 1) / a, (this.y * 1) / b);
      };
      b.sub = function (a, b) {
        if (arguments.length === 1) return this.add(a.mul(-1));
        else return this.add(-a, -b);
      };
      b.distanceTo = function (a) {
        return this.sub(a).magnitude();
      };
      b.magnitude = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      };
      b.rotate = function (a) {
        return this.derive(
          this.x * Math.cos(a) - this.y * Math.sin(a),
          this.x * Math.sin(a) + this.y * Math.cos(a)
        );
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "DOMVector",
  [
    "BasicVector",
    "getDocumentScrollElement",
    "getElementPosition",
    "getUnboundedScrollPosition",
    "getViewportDimensions",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        b = a.call(this, b, c) || this;
        b.domain = d || "pure";
        return b;
      }
      var d = b.prototype;
      d.derive = function (a, c, d) {
        return new b(a, c, d || this.domain);
      };
      d.add = function (c, d) {
        c instanceof b &&
          c.getDomain() !== "pure" &&
          (c = c.convertTo(this.domain));
        return a.prototype.add.call(this, c, d);
      };
      d.convertTo = function (a) {
        if (a != "pure" && a != "viewport" && a != "document")
          return this.derive(0, 0);
        if (a == this.domain) return this.derive(this.x, this.y, this.domain);
        if (a == "pure") return this.derive(this.x, this.y);
        if (this.domain == "pure") return this.derive(0, 0);
        var c = b.getScrollPosition("document"),
          d = this.x,
          e = this.y;
        this.domain == "document"
          ? ((d -= c.x), (e -= c.y))
          : ((d += c.x), (e += c.y));
        return this.derive(d, e, a);
      };
      d.getDomain = function () {
        return this.domain;
      };
      b.from = function (a, c, d) {
        return new b(a, c, d);
      };
      b.getScrollPosition = function (a) {
        a = a || "document";
        var b = c("getUnboundedScrollPosition")(window);
        return this.from(b.x, b.y, "document").convertTo(a);
      };
      b.getElementPosition = function (a, b) {
        b = b || "document";
        a = c("getElementPosition")(a);
        return this.from(a.x, a.y, "viewport").convertTo(b);
      };
      b.getElementDimensions = function (a) {
        return this.from(a.offsetWidth || 0, a.offsetHeight || 0);
      };
      b.getViewportDimensions = function () {
        var a = c("getViewportDimensions")();
        return this.from(a.width, a.height, "viewport");
      };
      b.getLayoutViewportDimensions = function () {
        var a = c("getViewportDimensions").layout();
        return this.from(a.width, a.height, "viewport");
      };
      b.getViewportWithoutScrollbarDimensions = function () {
        var a = c("getViewportDimensions").withoutScrollbars();
        return this.from(a.width, a.height, "viewport");
      };
      b.getDocumentDimensions = function (a) {
        a = c("getDocumentScrollElement")(a);
        return this.from(a.scrollWidth, a.scrollHeight, "document");
      };
      return b;
    })(c("BasicVector"));
    g["default"] = a;
  },
  98
);
__d(
  "Vector",
  ["DOMVector", "Event", "Scroll"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        return a.call(this, parseFloat(b), parseFloat(c), d) || this;
      }
      var e = b.prototype;
      e.derive = function (a, c, d) {
        return new b(a, c, d || this.domain);
      };
      e.setElementPosition = function (a) {
        var b = this.convertTo("document");
        a.style.left = parseInt(b.x, 10) + "px";
        a.style.top = parseInt(b.y, 10) + "px";
        return this;
      };
      e.setElementDimensions = function (a) {
        return this.setElementWidth(a).setElementHeight(a);
      };
      e.setElementWidth = function (a) {
        a.style.width = parseInt(this.x, 10) + "px";
        return this;
      };
      e.setElementHeight = function (a) {
        a.style.height = parseInt(this.y, 10) + "px";
        return this;
      };
      e.scrollElementBy = function (a) {
        a == document.body
          ? window.scrollBy(this.x, this.y)
          : (d("Scroll").setLeft(a, d("Scroll").getLeft(a) + this.x),
            d("Scroll").setTop(a, d("Scroll").getTop(a) + this.y));
        return this;
      };
      b.from = function (a, c, d) {
        return new b(a, c, d);
      };
      b.getEventPosition = function (a, b) {
        b === void 0 && (b = "document");
        a = c("Event").getPosition(a);
        a = this.from(a.x, a.y, "document");
        return a.convertTo(b);
      };
      b.getTouchEventPosition = function (a, b) {
        b === void 0 && (b = "document");
        a = a.touches[0];
        a = this.from(a.pageX, a.pageY, "document");
        return a.convertTo(b);
      };
      b.deserialize = function (a) {
        a = a.split(",");
        return this.from(a[0], a[1]);
      };
      return b;
    })(c("DOMVector"));
    g["default"] = a;
  },
  98
);
__d(
  "Rect",
  ["invariant", "$", "Vector", "react"],
  function (a, b, c, d, e, f, g, h) {
    d("react");
    a = (function () {
      function a(b, d, e, f, g) {
        if (arguments.length === 1) {
          if (b instanceof a) return b;
          if (b instanceof c("Vector"))
            return new a(b.y, b.x, b.y, b.x, b.domain);
          typeof b === "string" && (b = c("$")(b));
          return a.getElementBounds(b);
        }
        (typeof b === "number" &&
          typeof d === "number" &&
          typeof e === "number" &&
          typeof f === "number" &&
          (!g || typeof g === "string")) ||
          h(0, 1087);
        Object.assign(this, { t: b, r: d, b: e, l: f, domain: g || "pure" });
        return this;
      }
      var b = a.prototype;
      b.w = function () {
        return this.r - this.l;
      };
      b.h = function () {
        return this.b - this.t;
      };
      b.getWidth = function () {
        return this.w();
      };
      b.getHeight = function () {
        return this.h();
      };
      b.toString = function () {
        return (
          "((" + this.l + ", " + this.t + "), (" + this.r + ", " + this.b + "))"
        );
      };
      b.contains = function (b) {
        b = new a(b).convertTo(this.domain);
        var c = this;
        return c.l <= b.l && c.r >= b.r && c.t <= b.t && c.b >= b.b;
      };
      b.intersection = function (b) {
        b = b.convertTo(this.domain);
        var c = Math.min(this.b, b.getBottom()),
          d = Math.max(this.l, b.getLeft()),
          e = Math.min(this.r, b.getRight());
        b = Math.max(this.t, b.getTop());
        return c > b && e > d ? new a(b, e, c, d) : null;
      };
      b.isEqualTo = function (a) {
        return (
          this.t === a.t &&
          this.r === a.r &&
          this.b === a.b &&
          this.l === a.l &&
          this.domain === a.domain
        );
      };
      b.add = function (b, d) {
        if (arguments.length == 1) {
          b instanceof a &&
            b.domain != "pure" &&
            (b = b.convertTo(this.domain));
          return b instanceof c("Vector") ? this.add(b.x, b.y) : this;
        }
        var e = parseFloat(b),
          f = parseFloat(d);
        return new a(
          this.t + f,
          this.r + e,
          this.b + f,
          this.l + e,
          this.domain
        );
      };
      b.sub = function (a, b) {
        if (arguments.length == 1 && a instanceof c("Vector"))
          return this.add(a.mul(-1));
        else if (typeof a === "number" && typeof b === "number")
          return this.add(-a, -b);
        return this;
      };
      b.rotateAroundOrigin = function (b) {
        var c = this.getCenter().rotate((b * Math.PI) / 2),
          d = 0;
        b % 2
          ? ((d = this.h()), (b = this.w()))
          : ((d = this.w()), (b = this.h()));
        var e = c.y - b / 2;
        c = c.x - d / 2;
        b = e + b;
        d = c + d;
        return new a(e, d, b, c, this.domain);
      };
      b.boundWithin = function (a) {
        var b = 0,
          c = 0;
        this.l < a.l ? (b = a.l - this.l) : this.r > a.r && (b = a.r - this.r);
        this.t < a.t ? (c = a.t - this.t) : this.b > a.b && (c = a.b - this.b);
        return this.add(b, c);
      };
      b.getCenter = function () {
        return new (c("Vector"))(
          this.l + this.w() / 2,
          this.t + this.h() / 2,
          this.domain
        );
      };
      b.getTop = function () {
        return this.t;
      };
      b.getRight = function () {
        return this.r;
      };
      b.getBottom = function () {
        return this.b;
      };
      b.getLeft = function () {
        return this.l;
      };
      b.getArea = function () {
        return (this.b - this.t) * (this.r - this.l);
      };
      b.getPositionVector = function () {
        return new (c("Vector"))(this.l, this.t, this.domain);
      };
      b.getDimensionVector = function () {
        return new (c("Vector"))(this.w(), this.h(), "pure");
      };
      b.convertTo = function (b) {
        if (this.domain == b) return this;
        if (b == "pure") return new a(this.t, this.r, this.b, this.l, "pure");
        if (this.domain == "pure") return new a(0, 0, 0, 0);
        var d = new (c("Vector"))(this.l, this.t, this.domain).convertTo(b);
        return new a(d.y, d.x + this.w(), d.y + this.h(), d.x, b);
      };
      a.deserialize = function (b) {
        b = b.split(":");
        return new a(
          parseFloat(b[1]),
          parseFloat(b[2]),
          parseFloat(b[3]),
          parseFloat(b[0])
        );
      };
      a.newFromVectors = function (b, c) {
        return new a(b.y, b.x + c.x, b.y + c.y, b.x, b.domain);
      };
      a.getElementBounds = function (b) {
        return a.newFromVectors(
          c("Vector").getElementPosition(b),
          c("Vector").getElementDimensions(b)
        );
      };
      a.getViewportBounds = function () {
        return a.newFromVectors(
          c("Vector").getScrollPosition(),
          c("Vector").getViewportDimensions()
        );
      };
      a.getViewportWithoutScrollbarsBounds = function () {
        return a.newFromVectors(
          c("Vector").getScrollPosition(),
          c("Vector").getViewportWithoutScrollbarDimensions()
        );
      };
      a.minimumBoundingBox = function (b) {
        var c = new a(Infinity, -Infinity, -Infinity, Infinity),
          d;
        for (var e = 0; e < b.length; e++)
          (d = b[e]),
            (c.t = Math.min(c.t, d.t)),
            (c.r = Math.max(c.r, d.r)),
            (c.b = Math.max(c.b, d.b)),
            (c.l = Math.min(c.l, d.l));
        return c;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "fbjs/lib/emptyFunction",
  ["emptyFunction"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("emptyFunction");
  },
  null
);
__d(
  "fbjs/lib/invariant",
  ["invariant"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("invariant");
  },
  null
);
__d(
  "fbjs/lib/warning",
  ["warning"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("warning");
  },
  null
);
__d(
  "prop-types/lib/ReactPropTypesSecret",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    e.exports = a;
  },
  null
);
__d(
  "prop-types/checkPropTypes",
  [
    "fbjs/lib/invariant",
    "fbjs/lib/warning",
    "prop-types/lib/ReactPropTypesSecret",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a, b, c, d, e) {}
    e.exports = a;
  },
  null
);
__d(
  "ReactFbPropTypes",
  ["FbtResultBase", "warning"],
  function (a, b, c, d, e, f) {
    function a(a) {
      var c = function (c, d, e, f, g, h, i) {
          var j = d[e];
          if (j instanceof b("FbtResultBase")) return null;
          if (c) return a.isRequired(d, e, f, g, h, i);
          else return a(d, e, f, g, h, i);
        },
        d = c.bind(null, !1);
      d.isRequired = c.bind(null, !0);
      return d;
    }
    f.wrapStringTypeChecker = a;
  },
  null
);
__d(
  "prop-types/prop-types",
  [
    "fbjs/lib/emptyFunction",
    "fbjs/lib/invariant",
    "fbjs/lib/warning",
    "prop-types/checkPropTypes",
    "prop-types/lib/ReactPropTypesSecret",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h = function () {
        b("fbjs/lib/invariant")(0, 1492);
      };
    a = function () {
      return h;
    };
    h.isRequired = h;
    c = {
      array: h,
      bool: h,
      func: h,
      number: h,
      object: h,
      string: h,
      symbol: h,
      any: h,
      arrayOf: a,
      element: h,
      instanceOf: a,
      node: h,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
    };
    c.checkPropTypes = b("fbjs/lib/emptyFunction");
    c.PropTypes = c;
    e.exports = c;
  },
  null
);
__d(
  "prop-types",
  ["ReactFbPropTypes", "prop-types/prop-types"],
  function (a, b, c, d, e, f) {
    e.exports = b("prop-types/prop-types");
  },
  null
);
__d(
  "PageTransitionsComet",
  ["URI", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      c("recoverableViolation")(
        "PageTransitions." +
          a +
          " called unexpectedly. This is not supported in Comet!",
        "comet_infra"
      );
    }
    function a() {
      h("_executeCompleteCallbacks");
    }
    function b(a) {
      h("_handleTransition");
      return !1;
    }
    function d() {
      h("_hasBootloadErrors");
      return !1;
    }
    function e(a) {
      h("_historyManagerHandler");
      return !1;
    }
    function f() {
      h("_init");
      return !1;
    }
    function i(a, b) {
      h("_loadPage");
    }
    function j(a, b) {
      h("_warnBeforeLeaving");
    }
    function k() {
      h("disableScrollAnimation");
    }
    function l() {
      h("disableTransitions");
    }
    function m() {
      h("getCurrentURI");
      return new (c("URI"))();
    }
    function n() {
      h("getMostRecentURI");
      return new (c("URI"))();
    }
    function o() {
      h("getNextReferredURI");
      return new (c("URI"))();
    }
    function p() {
      h("getNextURI");
      return new (c("URI"))();
    }
    function q() {
      h("getReferrerURI");
      return new (c("URI"))();
    }
    function r(a, b) {
      b === void 0, h("go");
    }
    function s(a, b) {
      b === void 0, h("goBase");
    }
    function t() {
      h("init");
    }
    function u() {
      h("isInitalized");
      return !1;
    }
    function v() {
      h("isTransitioning");
      return !1;
    }
    function w(a) {
      h("registerCompletionCallback");
    }
    function x(a, b) {
      h("registerHandler");
    }
    function y(a, b) {
      h("removeHanlder");
    }
    function z(a) {
      h("restoreScrollPosition");
      return !1;
    }
    function A(a, b) {
      h("rewriteCurrentURI");
    }
    function B(a) {
      a === void 0, h("transitionComplete");
    }
    function C() {
      h("unifyURI");
    }
    g._executeCompletionCallbacks = a;
    g._handleTransition = b;
    g._hasBootloadErrors = d;
    g._historyManagerHandler = e;
    g._init = f;
    g._loadPage = i;
    g._warnBeforeLeaving = j;
    g.disableScrollAnimation = k;
    g.disableTransitions = l;
    g.getCurrentURI = m;
    g.getMostRecentURI = n;
    g.getNextReferrerURI = o;
    g.getNextURI = p;
    g.getReferrerURI = q;
    g.go = r;
    g.goBase = s;
    g.init = t;
    g.isInitialized = u;
    g.isTransitioning = v;
    g.registerCompletionCallback = w;
    g.registerHandler = x;
    g.removeHandler = y;
    g.restoreScrollPosition = z;
    g.rewriteCurrentURI = A;
    g.transitionComplete = B;
    g.unifyURI = C;
  },
  98
);
__d(
  "ErrorMessageConsole",
  ["ErrorPubSub", "cr:1458113"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (a.type !== "fatal") return;
      b("cr:1458113") && b("cr:1458113").showErrorDialog(a);
    }
    var h = !1;
    function d() {
      if (h) return;
      h = !0;
      c("ErrorPubSub").addListener(i);
    }
    function i(a) {
      if (a.type !== "fatal") return;
      b("cr:1458113") && b("cr:1458113").showErrorDialog(a);
    }
    g.addError = a;
    g.listenForUncaughtErrors = d;
  },
  98
);
__d(
  "PageTransitions",
  ["cr:917439"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:917439");
  },
  98
);
__d(
  "VideoPermalinkURI",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return g(a) !== null;
    }
    function g(a) {
      if (i(a)) {
        var b = a.getQueryData();
        return b.v != null
          ? {
              video_id: String(b.v),
              set_token: b.set != null ? String(b.set) : b.set,
            }
          : null;
      }
      b = a.getPath();
      b[b.length - 1] === "/" && (b = b.substring(0, b.length - 1));
      a = b.split("/");
      if (a.length >= 3 && a[2] === "videos")
        if (a.length === 4 && h(a[3]))
          return { video_id: a[3], set_token: null };
        else if (a.length === 5) {
          if (h(a[4])) return { video_id: a[4], set_token: a[3] };
          else if (h(a[3])) return { video_id: a[3], story_id: a[4] };
        } else if (a.length === 6 && h(a[4]))
          return { video_id: a[4], set_token: a[3], story_id: a[5] };
      return null;
    }
    function h(a) {
      return /^\d+$/.exec(a) !== null;
    }
    function i(a) {
      a = a.getPath();
      a[a.length - 1] === "/" && (a = a.substring(0, a.length - 1));
      return a === "/photo.php" ||
        a === "/force_photo/photo.php" ||
        a === "/photo" ||
        a === "/force_photo/photo/index.php" ||
        a === "/photo/index.php" ||
        a === "/force_photo/photo" ||
        a === "/video.php" ||
        a === "/video/video.php"
        ? !0
        : !1;
    }
    function b(a) {
      a = a.getDomain();
      return a === "fb.watch" || a === "fbwat.ch";
    }
    function c(a, b) {
      return a + b + "/";
    }
    f.isValid = a;
    f.parse = g;
    f.isNumeric = h;
    f.isValidLegacy = i;
    f.isValidFBWatchDomain = b;
    f.getCustomStoryURI = c;
  },
  66
);
__d(
  "UITinyViewportAction",
  [
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "Event",
    "FullScreen",
    "getDocumentScrollElement",
    "queryThenMutateDOM",
    "throttle",
  ],
  function (a, b, c, d, e, f) {
    var g = document.documentElement,
      h,
      i,
      j,
      k,
      l = !1,
      m = !1,
      n = !1,
      o = {
        init: function (a) {
          a = b("throttle")(function () {
            if (b("FullScreen").isFullScreen()) return;
            b("queryThenMutateDOM")(
              function () {
                (k = k || b("getDocumentScrollElement")()),
                  (i = g.clientWidth < k.scrollWidth - 1),
                  (j = g.clientHeight < 400),
                  (h = j || i);
              },
              function () {
                if (h !== l || i !== m || j !== n) {
                  var a;
                  (a = b("CSS")).conditionClass(g, "tinyViewport", h);
                  a.conditionClass(g, "tinyWidth", i);
                  a.conditionClass(g, "tinyHeight", j);
                  a.conditionClass(g, "canHaveFixedElements", !h);
                  o.inform("change", h);
                  b("Arbiter").inform(
                    "tinyViewport/change",
                    { tiny: h, tinyWidth: i, tinyHeight: j },
                    "state"
                  );
                  l = h;
                  m = i;
                  n = j;
                }
              },
              "TinyViewport"
            );
          });
          a();
          b("Arbiter").subscribe("quickling/response", a);
          b("Event").listen(window, "resize", a);
          b("FullScreen").subscribe("changed", a);
        },
        isTiny: function () {
          return h;
        },
        isTinyWidth: function () {
          return i;
        },
        isTinyHeight: function () {
          return j;
        },
      };
    Object.assign(o, b("ArbiterMixin"));
    e.exports = o;
  },
  null
);
__d(
  "BaseGraphQLSubscription",
  [
    "GQLSManager",
    "ODS",
    "Random",
    "RelayRTIGraphQLSubscriber",
    "RelayRTIUtils",
    "gkx",
    "nullthrows",
    "relay-runtime",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 100,
      i = 1e3,
      j = 100,
      k = "gqls_default_logging_base",
      l = "gqls_workplace_logging_base",
      m = 110,
      n = {
        bumpTotalSubscribeCounter: function (a) {
          d("ODS").bumpEntityKey(
            m,
            "basegraphqlsubscription_migration",
            a + ".subscribe.total"
          );
        },
        bumpSsttSubscribeCounter: function (a) {
          d("ODS").bumpEntityKey(
            m,
            "basegraphqlsubscription_migration",
            a + ".subscribe.sstt"
          ),
            n.bumpTotalSubscribeCounter(a);
        },
        bumpTotalReceiveCounter: function (a) {
          d("ODS").bumpEntityKey(
            m,
            "basegraphqlsubscription_migration",
            a + ".receive.total"
          );
        },
        bumpSsttReceiveCounter: function (a) {
          d("ODS").bumpEntityKey(
            m,
            "basegraphqlsubscription_migration",
            a + ".receive.sstt"
          ),
            n.bumpTotalReceiveCounter(a);
        },
      };
    function o() {
      if (c("gkx")("676906") && c("Random").coinflip(h)) return k;
      if (c("gkx")("1383502") && c("Random").coinflip(j)) return l;
      if (
        c("gkx")("1388683") ||
        (c("gkx")("1382775") && c("Random").coinflip(i))
      )
        return k;
    }
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.getQuery = function () {
        throw new Error(
          "getQuery() or getQueryID() unimplemented by subclass of BaseGraphQLSubscription"
        );
      };
      b.getQueryParameters = function (a) {
        throw new Error(
          "getQueryParameters() unimplemented by subclass of BaseGraphQLSubscription"
        );
      };
      b.getSubscriptionName = function () {
        var a = d("relay-runtime").getRequest(this.getQuery());
        return String(c("nullthrows")(a.params.metadata.subscriptionName));
      };
      a.subscribe = function (a, b, c, d) {
        return new this().subscribe(a, b, c, d);
      };
      b.subscribe = function (a, b, e, f) {
        var g = this.getQueryParameters(a),
          h = d("relay-runtime").getRequest(this.getQuery()).params,
          i = String(
            c("nullthrows")(
              (a = h.metadata) == null ? void 0 : a.subscriptionName
            )
          );
        a = "gqls/" + i + "/";
        var j = c("GQLSManager").getSubscriptionType(a),
          k = (a = e == null ? void 0 : e.forceLogContext) != null ? a : o();
        n.bumpSsttSubscribeCounter(i);
        g = babelHelpers["extends"]({}, g, {
          input: babelHelpers["extends"]({}, g.input, {
            client_subscription_id: c("uuid")(),
          }),
        });
        a = d("RelayRTIGraphQLSubscriber")
          .subscribeWithMobileStyleTopicTransform(
            h,
            g,
            k,
            e == null ? void 0 : e.viewerID,
            f
          )
          ["do"]({
            start: function () {
              d("RelayRTIUtils").logSubscriptionEvent(
                "client_subscribe",
                i,
                g,
                k,
                j,
                h.id
              );
            },
            next: function () {
              d("RelayRTIUtils").logSubscriptionEvent(
                "receivepayload",
                i,
                g,
                k,
                j,
                h.id
              );
            },
            unsubscribe: function () {
              d("RelayRTIUtils").logSubscriptionEvent(
                "client_unsubscribe",
                i,
                g,
                k,
                j,
                h.id
              );
            },
          });
        return a.subscribe({
          next: function (a) {
            n.bumpSsttReceiveCounter(i),
              typeof a == "object" && a.data && b(a.data);
          },
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
