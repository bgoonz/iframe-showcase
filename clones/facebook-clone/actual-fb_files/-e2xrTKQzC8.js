if (self.CavalryLogger) {
  CavalryLogger.start_js(["ilxo8Nj"]);
}

__d(
  "XLynxAsyncCallbackControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/si/linkclick/ajax_callback/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "FBLynxLogging",
  ["AsyncRequest", "ODS", "XLynxAsyncCallbackControllerRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = c("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});
      new (c("AsyncRequest"))(b)
        .setData({ lynx_uri: a })
        .setErrorHandler(function (a) {
          a = a.getError();
          d("ODS").bumpEntityKey(3861, "linkshim", "click_log.post.fail." + a);
        })
        .setTransportErrorHandler(function (a) {
          a = a.getError();
          d("ODS").bumpEntityKey(
            3861,
            "linkshim",
            "click_log.post.transport_fail." + a
          );
        })
        .send();
    }
    g.log = a;
  },
  98
);
__d(
  "FBLynxBase",
  ["$", "FBLynxLogging", "LinkshimHandlerConfig", "URI", "isLinkshimURI"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function h(a) {
      if (!b("isLinkshimURI")(a)) return null;
      a = a.getQueryData().u;
      return !a ? null : a;
    }
    var i = {
      logAsyncClick: function (a) {
        i.swapLinkWithUnshimmedLink(a);
        a = a.getAttribute("data-lynx-uri");
        if (!a) return;
        b("FBLynxLogging").log(a);
      },
      originReferrerPolicyClick: function (a) {
        var c = b("$")("meta_referrer");
        c.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
        i.logAsyncClick(a);
        setTimeout(function () {
          c.content = b("LinkshimHandlerConfig").default_meta_referrer_policy;
        }, 100);
      },
      swapLinkWithUnshimmedLink: function (a) {
        var c = a.href,
          d = h(new (g || (g = b("URI")))(c));
        if (!d) return;
        a.setAttribute("data-lynx-uri", c);
        a.href = d;
      },
      revertSwapIfLynxURIPresent: function (a) {
        var b = a.getAttribute("data-lynx-uri");
        if (!b) return;
        a.removeAttribute("data-lynx-uri");
        a.href = b;
      },
    };
    e.exports = i;
  },
  null
);
__d(
  "FBLynx",
  ["Base64", "Event", "FBLynxBase", "LinkshimHandlerConfig", "Parent", "URI"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = (g || (g = b("URI"))).goURIOnWindow,
      i = {
        alreadySetup: !1,
        setupDelegation: function (a) {
          a === void 0 && (a = !1);
          if (document.body == null) {
            if (a) return;
            setTimeout(function () {
              i.setupDelegation(!0);
            }, 100);
            return;
          }
          if (i.alreadySetup) return;
          i.alreadySetup = !0;
          var c = function (a) {
            var c = i.getMaybeLynxLink(a.target);
            if (!c) return;
            var d = c[0];
            c = c[1];
            var e = c,
              f = new (g || (g = b("URI")))(c.href),
              j;
            if (
              b("LinkshimHandlerConfig").ghl_param_link_shim &&
              d !== "hover" &&
              c.dataset &&
              c.dataset.attributes
            ) {
              j = b("Base64").decodeObject(c.dataset.attributes);
              if (j && j.open_link) {
                var k;
                for (k in j) k !== "open_link" && f.addQueryData(k, j[k]);
                k = c.cloneNode(!0);
                k.href = f.toString();
                e = k;
              }
            }
            switch (d) {
              case "async":
              case "asynclazy":
                b("FBLynxBase").logAsyncClick(e);
                break;
              case "origin":
                b("FBLynxBase").originReferrerPolicyClick(e);
                break;
              case "hover":
                i.hoverClick(e);
                break;
            }
            b("LinkshimHandlerConfig").ghl_param_link_shim &&
              d !== "hover" &&
              j &&
              j.open_link &&
              (a.preventDefault(), h(f, window.open("", e.target), !0));
          };
          b("Event").listen(document.body, "click", c);
          b("LinkshimHandlerConfig").middle_click_requires_event &&
            b("Event").listen(document.body, "mouseup", function (a) {
              a.button == 1 && c(a);
            });
          b("Event").listen(document.body, "mouseover", function (a) {
            a = i.getMaybeLynxLink(a.target);
            if (!a) return;
            var b = a[0];
            a = a[1];
            switch (b) {
              case "async":
              case "asynclazy":
              case "origin":
              case "hover":
                i.mouseover(a);
                break;
            }
          });
          b("Event").listen(document.body, "contextmenu", function (a) {
            a = i.getMaybeLynxLink(a.target);
            if (!a) return;
            var b = a[0];
            a = a[1];
            switch (b) {
              case "async":
              case "hover":
              case "origin":
                i.contextmenu(a);
                break;
              case "asynclazy":
                break;
            }
          });
        },
        getMaybeLynxLink: function (a) {
          a = b("Parent").byAttribute(a, "data-lynx-mode");
          if (a instanceof HTMLAnchorElement) {
            var c = a.getAttribute("data-lynx-mode");
            switch (c) {
              case "async":
              case "asynclazy":
              case "hover":
              case "origin":
                return [c, a];
              default:
                return null;
            }
          }
          return null;
        },
        hoverClick: function (a) {
          b("FBLynxBase").revertSwapIfLynxURIPresent(a);
        },
        mouseover: function (a) {
          b("FBLynxBase").swapLinkWithUnshimmedLink(a);
        },
        contextmenu: function (a) {
          b("FBLynxBase").revertSwapIfLynxURIPresent(a);
        },
      };
    e.exports = i;
  },
  null
);
__d(
  "AbstractLinkLynxMode",
  ["FBLynx", "LinkshimHandlerConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a
        ? [c("LinkshimHandlerConfig").www_safe_js_mode, null]
        : ["hover", null];
    }
    function b() {
      d("FBLynx").setupDelegation();
    }
    g.getMode = a;
    g.setupDelegation = b;
  },
  98
);
__d(
  "ReactPropTransfererCore",
  ["emptyFunction", "joinClasses"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function (b, c, d) {
        !Object.prototype.hasOwnProperty.call(b, c)
          ? (b[c] = d)
          : (b[c] = a(b[c], d));
      };
    }
    c = a(function (a, b) {
      return Object.assign({}, b, a);
    });
    var g = {
      children: b("emptyFunction"),
      className: a(b("joinClasses")),
      style: c,
    };
    function h(a, b) {
      for (var c in b) {
        if (!Object.prototype.hasOwnProperty.call(b, c)) continue;
        var d = g[c];
        d && Object.prototype.hasOwnProperty.call(g, c)
          ? d(a, c, b[c])
          : Object.prototype.hasOwnProperty.call(a, c) || (a[c] = b[c]);
      }
      return a;
    }
    d = {
      mergeProps: function (a, b) {
        return h(Object.assign({}, a), b);
      },
    };
    e.exports = d;
  },
  null
);
__d(
  "ReactPropTransferer",
  ["ReactPropTransfererCore"],
  function (a, b, c, d, e, f) {
    e.exports = b("ReactPropTransfererCore");
  },
  null
);
__d(
  "TabIsolation",
  ["Event", "Focus", "Keys", "TabbableElements", "containsNode"],
  function (a, b, c, d, e, f, g) {
    var h = [],
      i = 0;
    a = (function () {
      function a(a) {
        var b = this;
        this.enable = function () {
          b.disable(),
            h.unshift(b.$2),
            (b.$1 = c("Event").listen(
              window,
              "keydown",
              function (a) {
                h[0] === b.$2 && b.$4(a);
              },
              c("Event").Priority.URGENT
            ));
        };
        this.disable = function () {
          if (b.$1) {
            var a = h.indexOf(b.$2);
            a > -1 && h.splice(a, 1);
            b.$1.remove();
            b.$1 = null;
          }
        };
        this.$3 = a;
        this.$1 = null;
        this.$2 = i++;
      }
      var b = a.prototype;
      b.$4 = function (a) {
        if (c("Event").getKeyCode(a) !== c("Keys").TAB) return;
        var b = a.getTarget();
        if (!b) return;
        var e = d("TabbableElements").find(this.$3),
          f = e[0];
        e = e[e.length - 1];
        var g = a.getModifiers();
        g = g.shift;
        g && b === f
          ? (a.preventDefault(), d("Focus").set(e))
          : ((!g && b === e) || !c("containsNode")(this.$3, b)) &&
            (a.preventDefault(), d("Focus").set(f));
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "Button",
  [
    "csx",
    "cx",
    "invariant",
    "CSS",
    "DOM",
    "DataStore",
    "Event",
    "Parent",
    "emptyFunction",
    "isNode",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    var k = "uiButtonDisabled",
      l = "uiButtonDepressed",
      m = "_42fr",
      n = "_42fs",
      o = "button:blocker",
      p = "href",
      q = "ajaxify";
    function r(a, b) {
      var e = d("DataStore").get(a, o);
      b
        ? e && (e.remove(), d("DataStore").remove(a, o))
        : e ||
          d("DataStore").set(
            a,
            o,
            c("Event").listen(
              a,
              "click",
              c("emptyFunction").thatReturnsFalse,
              c("Event").Priority.URGENT
            )
          );
    }
    function s(a) {
      a =
        d("Parent").byClass(a, "uiButton") ||
        d("Parent").bySelector(a, "._42ft");
      if (!a) throw new Error("invalid use case");
      return a;
    }
    function t(a) {
      return c("DOM").isNodeOfType(a, "a");
    }
    function u(a) {
      return c("DOM").isNodeOfType(a, "button");
    }
    function v(a) {
      return d("CSS").matchesSelector(a, "._42ft");
    }
    var w = {
      getInputElement: function (a) {
        a = s(a);
        if (t(a)) throw new Error("invalid use case");
        if (u(a)) {
          a instanceof HTMLButtonElement || j(0, 21261);
          return a;
        }
        return c("DOM").find(a, "input");
      },
      isEnabled: function (a) {
        return !(d("CSS").hasClass(s(a), k) || d("CSS").hasClass(s(a), m));
      },
      setEnabled: function (a, b) {
        a = s(a);
        var c = v(a) ? m : k;
        d("CSS").conditionClass(a, c, !b);
        if (t(a)) {
          c = a.getAttribute("href");
          var e = a.getAttribute("ajaxify"),
            f = d("DataStore").get(a, p, "#"),
            g = d("DataStore").get(a, q);
          b
            ? (c || a.setAttribute("href", f),
              !e && g && a.setAttribute("ajaxify", g),
              a.removeAttribute("tabIndex"))
            : (c && c !== f && d("DataStore").set(a, p, c),
              e && e !== g && d("DataStore").set(a, q, e),
              a.removeAttribute("href"),
              a.removeAttribute("ajaxify"),
              a.setAttribute("tabIndex", "-1"));
          r(a, b);
        } else {
          f = w.getInputElement(a);
          f.disabled = !b;
          r(f, b);
        }
      },
      setDepressed: function (a, b) {
        a = s(a);
        var c = v(a) ? n : l;
        d("CSS").conditionClass(a, c, b);
      },
      isDepressed: function (a) {
        a = s(a);
        var b = v(a) ? n : l;
        return d("CSS").hasClass(a, b);
      },
      setLabel: function (a, b) {
        a = s(a);
        if (v(a)) {
          var e = [];
          b && e.push(b);
          var f = c("DOM").scry(a, ".img");
          for (var g = 0; g < f.length; g++) {
            var h = f[g],
              i = h.parentNode;
            i.classList &&
            (i.classList.contains("_4o_3") || i.classList.contains("_-xe"))
              ? a.firstChild === i
                ? e.unshift(i)
                : e.push(i)
              : a.firstChild == h
              ? e.unshift(h)
              : e.push(h);
          }
          c("DOM").setContent(a, e);
        } else if (t(a)) {
          i = c("DOM").find(a, "span.uiButtonText");
          c("DOM").setContent(i, b);
        } else w.getInputElement(a).value = b;
        h = v(a) ? "_42fv" : "uiButtonNoText";
        d("CSS").conditionClass(a, h, !b);
      },
      getIcon: function (a) {
        a = s(a);
        return c("DOM").scry(a, ".img")[0];
      },
      setIcon: function (a, b) {
        if (b && !c("isNode")(b)) return;
        var e = w.getIcon(a);
        if (!b) {
          e && c("DOM").remove(e);
          return;
        }
        d("CSS").addClass(b, "customimg");
        e != b &&
          (e ? c("DOM").replace(e, b) : c("DOM").prependContent(s(a), b));
      },
    };
    a = w;
    g["default"] = a;
  },
  98
);
__d(
  "focusWithinLayer",
  ["DOMQuery", "Focus", "TabbableElements", "getActiveElement"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      var e = d("DOMQuery").scry(a, ".autofocus")[0],
        f = !0;
      if (!e) {
        var g = c("getActiveElement")();
        if (d("DOMQuery").isNodeOfType(g, ["input", "textarea"])) return;
        g = d("TabbableElements").find(a);
        for (var h = 0; h < g.length; h++) {
          var i = g[h];
          if (i.tagName !== "A" || i.getAttribute("role") === "button") {
            e = g[h];
            break;
          }
        }
      } else e.tabIndex !== 0 && (f = !1);
      e
        ? f
          ? d("Focus").set(e, b)
          : d("Focus").setWithoutOutline(e)
        : a.offsetWidth || ((a.tabIndex = -1), d("Focus").setWithoutOutline(a));
    }
    g["default"] = a;
  },
  98
);
__d(
  "LayerAutoFocus",
  ["focusWithinLayer"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this._subscription = null),
          (this._layer = a),
          (this._subscription = null);
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscription = this._layer.subscribe(
          "aftershow",
          this._focus.bind(this)
        );
      };
      b.disable = function () {
        this._subscription && this._subscription.unsubscribe(),
          (this._subscription = null);
      };
      b._focus = function () {
        var a = this._layer.getRoot();
        a && c("focusWithinLayer")(a, !0);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "LayerHideSources",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BLUR: "blur",
      ESCAPE: "escape",
      LAYER_CANCEL_BUTTON: "layerCancelButton",
      LAYER_HIDE_BUTTON: "layerHideButton",
      TRANSITION: "transition",
    });
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "LayerButtons",
  ["csx", "Button", "Event", "LayerHideSources", "Parent"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      "use strict";
      function a(a) {
        this._layer = a;
      }
      var c = a.prototype;
      c.enable = function () {
        this._listener = b("Event").listen(
          this._layer.getRoot(),
          "click",
          this._handle.bind(this)
        );
      };
      c.disable = function () {
        this._listener.remove(), (this._listener = null);
      };
      c._handle = function (a) {
        var c = a.getTarget(),
          d = b("Parent").byClass(c, "layerHide");
        if (d) {
          this._layer.hide(b("LayerHideSources").LAYER_HIDE_BUTTON);
          return;
        }
        d = b("Parent").byClass(c, "layerConfirm");
        if (d) {
          if (this._isButton(d) && !b("Button").isEnabled(d)) return;
          if (this._isInNestedLayer(d)) return;
          this._layer.inform("confirm", d) === !1 && a.prevent();
          return;
        }
        d = b("Parent").byClass(c, "layerCancel");
        if (d) {
          if (this._isButton(d) && !b("Button").isEnabled(d)) return;
          if (this._isInNestedLayer(d)) return;
          this._layer.inform("cancel", d) !== !1 &&
            this._layer.hide(b("LayerHideSources").LAYER_CANCEL_BUTTON);
          a.prevent();
          return;
        }
        d = b("Parent").byClass(c, "layerButton");
        if (d) {
          if (this._isButton(d) && !b("Button").isEnabled(d)) return;
          if (this._isInNestedLayer(d)) return;
          this._layer.inform("button", d) === !1 && a.prevent();
        }
      };
      c._isInNestedLayer = function (a) {
        a = b("Parent").byClass(a, "uiLayer");
        var c = this._layer.getRoot();
        return !!(a && c !== a);
      };
      c._isButton = function (a) {
        return !!(
          b("Parent").byClass(a, "uiButton") ||
          b("Parent").bySelector(a, "._42ft")
        );
      };
      return a;
    })();
    a.prototype._listener = null;
    e.exports = a;
  },
  null
);
__d(
  "LayerFadeOnShow",
  ["Bootloader", "Run", "emptyFunction", "ifRequired"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this._layer = a),
          d("Run").onAfterLoad(function () {
            c("Bootloader").loadModules(
              ["CSSFade"],
              c("emptyFunction"),
              "LayerFadeOnShow"
            );
          });
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscriptions = [
          this._layer.subscribe("show", this._animate.bind(this)),
        ];
      };
      b.disable = function () {
        if (this._subscriptions) {
          while (this._subscriptions.length)
            this._subscriptions.pop().unsubscribe();
          this._subscriptions = null;
        }
      };
      b._getDuration = function () {
        return 100;
      };
      b._animate = function () {
        var a = this,
          b = this._layer.getRoot();
        c("ifRequired")(
          "CSSFade",
          function (c) {
            c.show(b, { duration: a._getDuration() });
          },
          function () {}
        );
      };
      a.forDuration = function (b) {
        var d = (function (b) {
          babelHelpers.inheritsLoose(a, b);
          function a() {
            return b.apply(this, arguments) || this;
          }
          return a;
        })(a);
        d.prototype._getDuration = c("emptyFunction").thatReturns(b);
        return d;
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscriptions: null });
    g["default"] = a;
  },
  98
);
__d(
  "LayerFormHooks",
  ["Event"],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        this._layer = a;
      }
      var c = a.prototype;
      c.enable = function () {
        var a = this._layer.getRoot();
        this._subscriptions = [
          b("Event").listen(a, "submit", this._onSubmit.bind(this)),
          b("Event").listen(a, "success", this._onSuccess.bind(this)),
          b("Event").listen(a, "error", this._onError.bind(this)),
        ];
      };
      c.disable = function () {
        this._subscriptions.forEach(function (a) {
          a.remove();
        }),
          (this._subscriptions = null);
      };
      c._onSubmit = function (a) {
        this._layer.inform("submit", a) === !1 && a.kill();
      };
      c._onSuccess = function (a) {
        this._layer.inform("success", a) === !1 && a.kill();
      };
      c._onError = function (a) {
        var b = a.getData();
        this._layer.inform("error", { response: b.response }) === !1 &&
          a.kill();
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscriptions: null });
    e.exports = a;
  },
  null
);
__d(
  "LayerRefocusOnHide",
  [
    "ContextualThing",
    "DOM",
    "DOMQuery",
    "Focus",
    "Parent",
    "getActiveElement",
    "nullthrows",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscription = this._layer.subscribe(
          "hide",
          this._handle.bind(this)
        );
      };
      b.disable = function () {
        c("nullthrows")(this._subscription).unsubscribe(),
          (this._subscription = null);
      };
      b._handle = function () {
        var a = c("getActiveElement")();
        if (
          a === document.body ||
          d("DOMQuery").contains(this._layer.getRoot(), a)
        ) {
          a = this._layer.getCausalElement();
          while (a && !a.offsetWidth) {
            var b = d("Parent").byClass(a, "uiToggle");
            if (b && b.offsetWidth) a = c("DOM").scry(b, '[rel="toggle"]')[0];
            else {
              b = d("ContextualThing").getContext(a);
              b ? (a = b) : (a = a.parentNode);
            }
          }
          a && ((a = a), d("Focus").set(a));
        }
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscription: null });
    g["default"] = a;
  },
  98
);
__d(
  "LayerTabIsolation",
  ["TabIsolation"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this._layer = a),
          (this._tabIsolation = null),
          (this._subscriptions = null);
      }
      var b = a.prototype;
      b.enable = function () {
        var a = this._layer.getRoot();
        if (a == null) return;
        a = new (c("TabIsolation"))(a);
        this._tabIsolation = a;
        this._subscriptions = [
          this._layer.subscribe("show", a.enable.bind(a)),
          this._layer.subscribe("hide", a.disable.bind(a)),
        ];
      };
      b.disable = function () {
        while (this._subscriptions && this._subscriptions.length)
          this._subscriptions.pop().unsubscribe();
        this._tabIsolation && this._tabIsolation.disable();
        this._tabIsolation = null;
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscriptions: [] });
    g["default"] = a;
  },
  98
);
__d(
  "LynxGeneration",
  ["LinkshimHandlerConfig", "URI"],
  function (a, b, c, d, e, f, g) {
    var h = new (c("URI"))(c("LinkshimHandlerConfig").linkshim_path).setDomain(
        c("LinkshimHandlerConfig").linkshim_host
      ),
      i = {
        getShimURI: function () {
          return new (c("URI"))(h);
        },
        getLynxURIProtocol: function (a) {
          return c("LinkshimHandlerConfig").always_use_https
            ? "https"
            : a.getProtocol() === "http"
            ? "http"
            : "https";
        },
        getShimmedHref: function (a, b, d) {
          var e;
          a = new (c("URI"))(a);
          var f = i.getLynxURIProtocol(a);
          a = i
            .getShimURI()
            .setQueryData(
              ((e = {}),
              (e[c("LinkshimHandlerConfig").linkshim_url_param] = a.toString()),
              (e[c("LinkshimHandlerConfig").linkshim_enc_param] = b),
              e)
            )
            .setProtocol(f);
          b = d == null ? void 0 : d.trackingNodes;
          e = d == null ? void 0 : d.callbacks;
          b && b.length && (a = a.addQueryData("__tn__", b.join("")));
          e && e.length && (a = a.addQueryData("c", e));
          return a;
        },
      };
    a = i;
    g["default"] = a;
  },
  98
);
__d(
  "NonFBLinkReferrerProtector",
  ["$", "Event", "LinkshimHandlerConfig", "Parent", "URI", "setTimeout"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = (g || (g = b("URI"))).goURIOnWindow,
      i = {
        alreadySetup: !1,
        originReferrerPolicyClickWithoutLog: function (a) {
          var c = b("$")("meta_referrer");
          c.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
          b("setTimeout")(function () {
            c.content = b("LinkshimHandlerConfig").default_meta_referrer_policy;
          }, 100);
        },
        setupDelegation: function (a) {
          a === void 0 && (a = !1);
          if (document.body == null) {
            if (a) return;
            b("setTimeout")(function () {
              i.setupDelegation(!0);
            }, 100);
            return;
          }
          if (i.alreadySetup) return;
          i.alreadySetup = !0;
          a = function (a) {
            var c = i.getMaybeNonFBLinkReferrerJSMode(a.target);
            if (!c) return;
            var d = c[0];
            c = c[1];
            switch (d) {
              case "origin":
                i.originReferrerPolicyClickWithoutLog(c);
                break;
              case "ie":
                d = new (g || (g = b("URI")))(c.href);
                a.preventDefault();
                h(d, window.open("", c.target), !0);
                break;
            }
          };
          b("Event").listen(document.body, "click", a);
        },
        getMaybeNonFBLinkReferrerJSMode: function (a) {
          a = b("Parent").byAttribute(a, "data-lnfb-mode");
          if (a instanceof HTMLAnchorElement) {
            var c = a.getAttribute("data-lnfb-mode");
            switch (c) {
              case "ie":
              case "origin":
                return [c, a];
              default:
                return null;
            }
          }
          return null;
        },
      };
    e.exports = i;
  },
  null
);
__d(
  "AbstractLink.react",
  [
    "AbstractLinkLynxMode",
    "LynxGeneration",
    "NonFBLinkReferrerProtector",
    "isTruthy",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        this.props.dataLnfbMode !== null
          ? d("NonFBLinkReferrerProtector").setupDelegation()
          : this.props.isLinkshimSupported &&
            d("AbstractLinkLynxMode").setupDelegation();
      };
      e.render = function () {
        var a = this.props,
          b = a.href,
          e = a.linkRef,
          f = a.shimhash,
          g = a.nofollow,
          i = a.noopener,
          j = a.rel,
          k = a.isSafeToSkipShim,
          l = a.dataLnfbMode;
        a.isLinkshimSupported;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "href",
          "linkRef",
          "shimhash",
          "nofollow",
          "noopener",
          "rel",
          "isSafeToSkipShim",
          "dataLnfbMode",
          "isLinkshimSupported",
        ]);
        var m = b;
        j = j;
        var n = null,
          o = null,
          p = null;
        if (f !== null) {
          m = c("LynxGeneration").getShimmedHref(b, f || "");
          b = d("AbstractLinkLynxMode").getMode(k);
          o = b[0];
          n = b[1];
        }
        g && (j = c("isTruthy")(j) ? j + " nofollow" : "nofollow");
        i && (j = c("isTruthy")(j) ? j + " noopener" : "noopener");
        c("isTruthy")(l) && (p = l);
        return h.jsx(
          "a",
          babelHelpers["extends"]({}, a, {
            href: m.toString() || null,
            rel: j,
            ref: e,
            "data-sigil": n,
            "data-lynx-mode": o,
            "data-lnfb-mode": p,
          })
        );
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "first",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      for (
        var a = a,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        return d;
      }
      return null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "ClickIDParameterUtils",
  [
    "URI",
    "compactArray",
    "first",
    "isCdnURI",
    "isClickIDBlacklistSVDomainURI",
    "isFacebookSVDomainURI",
    "isFacebookURI",
    "isFbDotComURI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(["http", "https"]);
    function i(a) {
      return h.has(a.getProtocol());
    }
    var j = "fbclid";
    b = "doubleclick.net";
    var k =
      ((d = {}),
      (d[b] = [
        {
          extractor: function (a) {
            a = a.getQueryString();
            return a != null && a.startsWith("http") ? new (c("URI"))(a) : null;
          },
          injector: function (a, b, c) {
            b = b.addQueryData(j, c);
            return a.setQueryString(b.toString());
          },
        },
      ]),
      d);
    function l(a) {
      var b = a.getProtocol(),
        c = a.getDomain();
      a = a.getPort();
      return (
        (b !== null && b.length > 0) ||
        (c !== null && c.length > 0) ||
        a !== null
      );
    }
    function m(a) {
      var b = c("first")(
        Object.keys(k).filter(function (b) {
          return a.getDomain().endsWith(b);
        })
      );
      b = b != null ? k[b] : null;
      return b == null
        ? null
        : c("first")(
            c("compactArray")(
              b.map(function (b) {
                var c = b.extractor(a);
                return c == null ? null : { injector: b.injector, uri: c };
              })
            )
          );
    }
    function n(a) {
      return (
        !c("isFacebookURI")(a) &&
        !c("isFacebookSVDomainURI")(a) &&
        !c("isCdnURI")(a) &&
        !c("isFbDotComURI")(a) &&
        l(a) &&
        i(a) &&
        !o(a)
      );
    }
    function o(a) {
      var b = c("isClickIDBlacklistSVDomainURI")(a);
      if (b) return !0;
      b = m(a);
      return b != null ? o(b.uri) : !1;
    }
    function p(a, b) {
      var c = m(a);
      return c != null ? c.injector(a, c.uri, b) : a.addQueryData(j, b);
    }
    function a(a, b) {
      return n(a) ? p(a, b) : a;
    }
    g.QUERY_PARAM = j;
    g.appendClickIDQueryParam = a;
  },
  98
);
__d(
  "Link.react",
  [
    "AbstractLink.react",
    "ClickIDParameterUtils",
    "LinkshimHandlerConfig",
    "Random",
    "URI",
    "isExpressWifiDotComURI",
    "isFacebookURI",
    "isInternalFBURI",
    "isLinkshimURI",
    "isMessengerDotComURI",
    "isOculusDotComURI",
    "isWorkplaceDotComURI",
    "killswitch",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i() {
      return /(^|\.)oculus\.com$/.test(
        c("LinkshimHandlerConfig").current_domain
      );
    }
    function j() {
      return /(^|\.)expresswifi\.com$/.test(
        c("LinkshimHandlerConfig").current_domain
      );
    }
    function k() {
      return /(^|\.)workplace\.com$/.test(
        c("LinkshimHandlerConfig").current_domain
      );
    }
    function l() {
      return /(^|\.)internalfb\.com$/.test(
        c("LinkshimHandlerConfig").current_domain
      );
    }
    function m(a) {
      return c("isFacebookURI")(a) || c("isMessengerDotComURI")(a);
    }
    function n(a) {
      return a.getDomain().endsWith(".onion");
    }
    function o(a) {
      if (k()) return p(a);
      if (l()) return c("isInternalFBURI")(a) || m(a);
      if (i()) return c("isOculusDotComURI")(a);
      return j() ? c("isExpressWifiDotComURI")(a) : m(a);
    }
    function p(a) {
      return c("isWorkplaceDotComURI")(a);
    }
    var q = /^(#|\/\w)/;
    function r(a) {
      if (q.test(a.toString())) return !1;
      var b = a.getProtocol();
      return b !== "http" && b !== "https" ? !1 : !o(a);
    }
    function s(a) {
      var b = "#",
        d = null;
      a instanceof c("URI")
        ? (b = a.toString())
        : typeof a === "string" && a !== "" && a !== "#"
        ? (b = a)
        : typeof a === "object" && a !== null
        ? ((b = a.url.toString()), (d = a.shimhash ? a.shimhash.toString() : d))
        : ((b = "#"), (d = null));
      return c("URI").isValidURI(b) ? [new (c("URI"))(b), d] : [null, d];
    }
    var t = new RegExp("^(l|lm|h)\\..*$", "i");
    function u(a) {
      if (c("killswitch")("LINK_UPGRADE_UNSHIMMED_JS")) return null;
      if (a.getProtocol() !== "http") return null;
      if (!o(a)) return null;
      return t.test(a.getDomain()) ? null : a.setProtocol("https");
    }
    function v(a) {
      return a.getProtocol() === "" ||
        (a.getDomain() === "" && a.getPort() === "")
        ? !1
        : !0;
    }
    function w(a) {
      if (!v(a)) return !1;
      var b = c("LinkshimHandlerConfig").current_domain;
      if (b === "") {
        b = "." + b;
        return a.getDomain().endsWith(b);
      }
      return !0;
    }
    function x(a, b) {
      var d = null,
        e = !1;
      a = a !== null && a instanceof c("URI") ? a : new (c("URI"))("#");
      var f = w(a),
        g = f === !0;
      b = b || (f === !0 ? "_blank" : null);
      var h = c("LinkshimHandlerConfig").use_rel_no_opener && b === "_blank";
      return [a, g, h, b, d, e, f];
    }
    function y(a, b, e, f) {
      if (a !== null && a instanceof c("URI")) {
        if (
          !c("killswitch")("LINK_PARSES_SHIMHASH_FROM_LINKSHIM") &&
          c("isLinkshimURI")(a)
        ) {
          var g =
              a.getQueryData()[c("LinkshimHandlerConfig").linkshim_url_param],
            h = a.getQueryData()[c("LinkshimHandlerConfig").linkshim_enc_param];
          c("URI").isValidURI(g) &&
            ((a = new (c("URI"))(g)), b == null && (b = h));
        }
        g = c("LinkshimHandlerConfig").click_ids;
        if (
          !c("killswitch")("LINKSHIM_ADD_CLICK_ID_PARAM") &&
          g != null &&
          g.length > 0
        ) {
          h = Math.floor(c("Random").random() * g.length);
          g = g[h];
          a = d("ClickIDParameterUtils").appendClickIDQueryParam(a, g);
        }
      } else a = new (c("URI"))("#");
      b == null &&
        r(a) &&
        (b = c("LinkshimHandlerConfig").link_react_default_hash);
      h = u(a);
      h != null && (a = h);
      g = b != null;
      h = e || (b !== null ? "_blank" : null);
      e = !!f;
      c("LinkshimHandlerConfig").onion_always_shim && n(a) && (e = !1);
      f =
        c("LinkshimHandlerConfig").use_rel_no_opener &&
        b !== null &&
        h === "_blank";
      var i = w(a);
      return [a, g, f, h, b, e, i];
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props;
        a.allowunsafehref;
        var b = a.s,
          d = a.href,
          e = a.linkRef,
          f = a.target;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "allowunsafehref",
          "s",
          "href",
          "linkRef",
          "target",
        ]);
        d = s(d);
        var g = d[0];
        d = d[1];
        d = c("LinkshimHandlerConfig").is_linkshim_supported
          ? y(g, d, f, b)
          : x(g, f);
        b = d[0];
        g = d[1];
        f = d[2];
        var i = d[3],
          j = d[4],
          k = d[5];
        d = d[6];
        var l = null;
        !c("LinkshimHandlerConfig").is_linkshim_supported &&
          d &&
          (l = c("LinkshimHandlerConfig").non_linkshim_lnfb_mode);
        return h.jsx(
          c("AbstractLink.react"),
          babelHelpers["extends"]({}, a, {
            href: b,
            linkRef: e,
            nofollow: g,
            noopener: f,
            shimhash: j,
            target: i,
            isSafeToSkipShim: k,
            dataLnfbMode: l,
            isLinkshimSupported: c("LinkshimHandlerConfig")
              .is_linkshim_supported,
          })
        );
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "cloneWithProps_DEPRECATED",
  ["React", "ReactPropTransferer", "warning"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("React"),
      h = "children";
    c = !1;
    function a(a, c) {
      c = b("ReactPropTransferer").mergeProps(c, a.props);
      !Object.prototype.hasOwnProperty.call(c, h) &&
        Object.prototype.hasOwnProperty.call(a.props, h) &&
        (c.children = a.props.children);
      return g.createElement(a.type, c);
    }
    e.exports = a;
  },
  null
);
__d(
  "AbstractButton.react",
  [
    "cx",
    "Link.react",
    "cloneWithProps_DEPRECATED",
    "joinClasses",
    "prop-types",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = d("react").Component;
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.buttonRef = i.createRef()),
          (c.handleLinkClick = function (a) {
            c.props.disabled
              ? a.preventDefault()
              : c.props.onClick && c.props.onClick(a);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.focus = function () {
        this.buttonRef.current != null && this.buttonRef.current.focus();
      };
      d.render = function () {
        var a = this.props,
          b = a.depressed,
          d = a.disabled,
          e = a.image,
          f = a.imageRight,
          g = a.label,
          h = a.labelIsHidden;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "depressed",
          "disabled",
          "image",
          "imageRight",
          "label",
          "labelIsHidden",
        ]);
        delete a.shade;
        b = "_42ft" + (d ? " _42fr" : "") + (b ? " _42fs" : "");
        e = e;
        if (e) {
          var j = {};
          g && ((j.alt = ""), h || (j.className = "_3-8_"));
          e = c("cloneWithProps_DEPRECATED")(e, j);
        }
        j = f;
        if (j) {
          f = {};
          g && ((f.alt = ""), h || (f.className = "_3-99"));
          j = c("cloneWithProps_DEPRECATED")(j, f);
        }
        if (this.props.href) {
          f = this.props;
          var k = f.disabled;
          f = f.role;
          f = k && f === "button";
          return i.jsxs(
            c("Link.react"),
            babelHelpers["extends"]({}, a, {
              linkRef: this.buttonRef,
              "aria-disabled": f ? !0 : void 0,
              className: c("joinClasses")(this.props.className, b),
              onClick: this.handleLinkClick,
              tabIndex: k ? -1 : this.props.tabIndex,
              children: [
                e,
                h
                  ? i.jsx("span", { className: "accessible_elem", children: g })
                  : g,
                j,
              ],
            })
          );
        } else if (this.props.type && this.props.type !== "submit")
          return i.jsxs(
            "button",
            babelHelpers["extends"]({}, a, {
              ref: this.buttonRef,
              className: c("joinClasses")(this.props.className, b),
              disabled: d,
              type: this.props.type,
              children: [
                e,
                h
                  ? i.jsx("span", { className: "accessible_elem", children: g })
                  : g,
                j,
              ],
            })
          );
        else
          return i.jsxs(
            "button",
            babelHelpers["extends"]({}, a, {
              ref: this.buttonRef,
              className: c("joinClasses")(this.props.className, b),
              disabled: d,
              type: "submit",
              value: "1",
              children: [
                e,
                h
                  ? i.jsx("span", { className: "accessible_elem", children: g })
                  : g,
                j,
              ],
            })
          );
      };
      return b;
    })(a);
    b.propTypes = {
      image: c("prop-types").element,
      imageRight: c("prop-types").element,
      depressed: c("prop-types").bool,
      label: c("prop-types").node,
      onClick: c("prop-types").func,
      labelIsHidden: c("prop-types").bool,
    };
    b.defaultProps = { disabled: !1, depressed: !1, labelIsHidden: !1 };
    f.exports = b;
  },
  34
);
__d(
  "XUIAbstractGlyphButton.react",
  ["cx", "AbstractButton.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return i.jsx(
          c("AbstractButton.react"),
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")(this.props.className, "_5upp"),
            label: this.props.label,
          })
        );
      };
      return b;
    })(i.Component);
    a.propTypes = c("AbstractButton.react").propTypes;
    g["default"] = a;
  },
  98
);
__d(
  "XUICloseButton.react",
  [
    "cx",
    "fbt",
    "XUIAbstractGlyphButton.react",
    "joinClasses",
    "prop-types",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i,
      j = i || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.render = function () {
        var a = this.props.size,
          c = this.props.shade;
        a =
          "_50zy" +
          (a === "small" ? " _50zz" : "") +
          (a === "medium" ? " _50-0" : "") +
          (a === "large" ? " _50-1" : "") +
          (c === "light" ? " _50z_" : "") +
          (c === "dark" ? " _50z-" : "");
        c = this.props.label;
        var d = this.props.title;
        !this.props.title && !this.props.tooltip && (d = c);
        return j.jsx(
          b("XUIAbstractGlyphButton.react"),
          babelHelpers["extends"]({}, this.props, {
            label: c,
            title: d,
            type: this.props.href ? void 0 : this.props.type,
            "data-hover": this.props.tooltip && "tooltip",
            "data-tooltip-alignh": this.props.tooltip && "center",
            "data-tooltip-content": this.props.tooltip,
            className: b("joinClasses")(this.props.className, a),
          })
        );
      };
      return c;
    })(j.Component);
    a.propTypes = {
      shade: b("prop-types").oneOf(["light", "dark"]),
      size: b("prop-types").oneOf(["small", "medium", "large"]),
      title: b("prop-types").string,
      tooltip: b("prop-types").string,
      type: b("prop-types").oneOf(["submit", "button", "reset"]),
    };
    a.defaultProps = {
      label: h._("Remove"),
      size: "medium",
      shade: "dark",
      type: "button",
    };
    e.exports = a;
  },
  null
);
__d(
  "flattenArray",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = [];
      g(a, b);
      return b;
    }
    function g(a, b) {
      var c = a.length,
        d = 0;
      while (c--) {
        var e = a[d++];
        Array.isArray(e) ? g(e, b) : b.push(e);
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "JSXDOM",
  ["DOM", "FbtResultBase", "flattenArray"],
  function (a, b, c, d, e, f) {
    a = [
      "a",
      "blockquote",
      "br",
      "button",
      "canvas",
      "checkbox",
      "dd",
      "div",
      "dl",
      "dt",
      "em",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "i",
      "iframe",
      "img",
      "input",
      "label",
      "li",
      "option",
      "p",
      "pre",
      "select",
      "span",
      "strong",
      "table",
      "tbody",
      "thead",
      "td",
      "textarea",
      "th",
      "tr",
      "ul",
      "video",
    ];
    var g = {};
    a.forEach(function (a) {
      var c = function (c, d) {
        arguments.length > 2 && (d = Array.prototype.slice.call(arguments, 1));
        !d && c && ((d = c.children), delete c.children);
        d &&
          ((d = Array.isArray(d) ? d : [d]),
          (d = d.map(function (a) {
            return a instanceof b("FbtResultBase") ? a.flattenToArray() : a;
          })),
          (d = b("flattenArray")(d)));
        return b("DOM").create(a, c, d);
      };
      g[a] = c;
    });
    e.exports = g;
  },
  null
);
