if (self.CavalryLogger) {
  CavalryLogger.start_js(["jk5Ypmd"]);
}

__d(
  "CometMediaEditorSaverContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ current: new Map() });
    g["default"] = b;
  },
  98
);
__d(
  "useMediaEditorSaver",
  ["Actor", "CometMediaEditorSaverContext", "useContextRef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      e === void 0 && (e = 0);
      var f = d("Actor").useActor();
      f = f[0];
      return c("useContextRef")(
        { priority: e, saver: a(b, f) },
        c("CometMediaEditorSaverContext")
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometPhotoEditorCropDragButton.react",
  [
    "fbt",
    "CometPressable.react",
    "MediaEditorViewStateContext",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useContext,
      k = {
        button: {
          backgroundColor: "q2y6ezfg",
          borderTop: "o8l4vnqg",
          borderEnd: "jjlpdeaj",
          borderBottom: "oejp51xy",
          borderStart: "gxv468qn",
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          height: "bsodd3zb",
          position: "pmk7jnqg",
          width: "xthkpp0z",
        },
        leftDiagonalActive: { cursor: "dfck0lc5" },
        rightDiagonalActive: { cursor: "bcd4bg8y" },
      };
    function a(a) {
      var b,
        d = a.cropCorner,
        e = a.left,
        f = a.setIsPressed;
      a = a.top;
      b = (b = j(c("MediaEditorViewStateContext")).angle) != null ? b : 0;
      b = b === 270 || b === 90;
      var g = function () {
        f(d);
      };
      return i.jsx(c("CometPressable.react"), {
        "aria-label": h._("Drag to crop photo"),
        onPressIn: g,
        children: i.jsx("div", {
          className: c("stylex")(
            k.button,
            d === "TOP_LEFT" || d === "BOTTOM_RIGHT"
              ? b
                ? k.rightDiagonalActive
                : k.leftDiagonalActive
              : b
              ? k.leftDiagonalActive
              : k.rightDiagonalActive
          ),
          style: { left: e, top: a },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPhotoEditorCropWindow.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.height,
        c = a.left,
        d = a.top;
      a = a.width;
      b = { height: b, left: c, top: d, width: a };
      return h.jsx("div", {
        className: "pmk7jnqg rq0escxv ddn55etz todgtsvd mher9iwd okr6w53f",
        style: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPhotoEditorCropWindowShadow.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = "px solid rgba(0, 0, 0, .5)";
      a = {
        borderBottom: "" + a.bottom + b,
        borderLeft: "" + a.left + b,
        borderRight: "" + a.right + b,
        borderTop: "" + a.top + b,
      };
      return h.jsx("div", {
        className:
          "k4urcfbm kr520xx4 pmk7jnqg datstx6m rq0escxv ddn55etz todgtsvd mher9iwd okr6w53f",
        style: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getMediaEditorMetadataMutationHandler",
  ["recoverableViolation", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      var e = d.photoHandlers,
        f = d.videoHandlers;
      if (e == null && f == null)
        throw c("unrecoverableViolation")(
          "Cannot save without metadata/async handlers",
          "comet_composer"
        );
      var g = (d = b) != null ? d : h;
      b =
        e == null
          ? null
          : function (b, c) {
              var d = e.asyncMutationHandler,
                f = e.metadataMutation,
                h = i(b, g),
                j = b;
              h && (j = f(a, b, c));
              if (d != null) return { asyncMutation: d, newMediaItem: j };
              else return { newMediaItem: j };
            };
      d =
        f == null
          ? null
          : function (b) {
              var c = f.asyncMutationHandler,
                d = f.metadataMutation,
                e = i(b, g);
              b = b;
              e && (b = d(a, b));
              if (c != null) return { asyncMutation: c, newMediaItem: b };
              else return { newMediaItem: b };
            };
      return { actionForPhoto: b, actionForVideo: d };
    }
    function h(a) {
      return !0;
    }
    function i(a, b) {
      b = b(a);
      if (!b) {
        c("recoverableViolation")(
          "Invalid action taken to alter metadata of media of type: " +
            a.fileType +
            " which is in the " +
            a.state +
            " state.",
          "comet_composer"
        );
        return !1;
      }
      return !0;
    }
    g["default"] = a;
  },
  98
);
__d(
  "resolvePhotoPromise",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      if (b == null) return;
      if (d == null) {
        b(a);
        return;
      }
      var e;
      a.state === "PREEXISTING"
        ? (e = babelHelpers["extends"]({}, a, {
            data: babelHelpers["extends"]({}, a.data, { id: d }),
            entID: d,
            isEntMutated: !0,
          }))
        : a.state === "UPLOADED" &&
          (e = babelHelpers["extends"]({}, a, {
            data: babelHelpers["extends"]({}, a.data, { id: d }),
            entID: d,
            isEntMutated: !0,
          }));
      if (e == null)
        throw c("unrecoverableViolation")(
          "Invalid media supplied to run an async mutation on media of type: " +
            a.fileType,
          "comet_composer"
        );
      b && b(e);
    }
    g["default"] = a;
  },
  98
);
__d(
  "getPhotoEditorAsyncMutationHandler",
  ["Promise", "recoverableViolation", "resolvePhotoPromise"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, d, e, f, g) {
      var h = function (a) {
        a = d && d(a);
        return a == null ? !1 : !0;
      };
      return function (d) {
        var i = h(d);
        if (i == null) {
          c("recoverableViolation")(
            "Invalid action taken to trigger mutation of media of type: " +
              d.fileType +
              " which is in the " +
              d.state +
              " state.",
            "comet_composer"
          );
          return b("Promise").resolve(d);
        }
        var j;
        i = new (b("Promise"))(function (a) {
          j = a;
        });
        e(
          a,
          d,
          function (a, b) {
            f && f(a), c("resolvePhotoPromise")(a, j, b);
          },
          function (b) {
            g && g(b),
              c("resolvePhotoPromise")(b, j),
              c("recoverableViolation")(
                "Mutation " +
                  a.type +
                  " failed: " +
                  d.fileType +
                  " which is in the " +
                  d.state +
                  " state.",
                "comet_composer"
              );
          }
        );
        return i;
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "getPhotoEditorSaver",
  [
    "getMediaEditorMetadataMutationHandler",
    "getPhotoEditorAsyncMutationHandler",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e, f, g, h, i) {
      f =
        b != null
          ? c("getPhotoEditorAsyncMutationHandler")(a, f, b, h, i)
          : null;
      b = c("getMediaEditorMetadataMutationHandler")(a, g, {
        photoHandlers: { asyncMutationHandler: f, metadataMutation: d },
      });
      h = b.actionForPhoto;
      if (h == null)
        throw c("unrecoverableViolation")(
          "Cannot edit photo item",
          "comet_composer"
        );
      return { actionForPhoto: h, checkerForPhoto: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometPhotoEditorCropSaver",
  ["CometMediaViewerPhotoActions", "getPhotoEditorSaver"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      if (a.type === "CROP") {
        return babelHelpers["extends"]({}, b, {
          originalEntID: (a = b.originalEntID) != null ? a : b.data.id,
          useCDNPreview: !0,
        });
      }
      return b;
    }
    function i(a, b, c) {
      if (a.type !== "CROP") return;
      var e = a.dimensions;
      a = a.environment;
      var f = e.clientImageHeight,
        g = e.clientImageWidth,
        h = e.newHeight,
        i = e.newWidth,
        k = e.x;
      e = e.y;
      k = k / g;
      e = e / f;
      i = i / g;
      g = h / f;
      d("CometMediaViewerPhotoActions").cropPhoto({
        environment: a,
        input: {
          height: j(g),
          photo_id: b.data.id,
          width: j(i),
          x: j(k),
          y: j(e),
        },
        onCompleted: function (a) {
          return c(
            b,
            a == null
              ? void 0
              : (a = a.photo_crop) == null
              ? void 0
              : (a = a.photo) == null
              ? void 0
              : a.id
          );
        },
      });
    }
    function j(a) {
      return Math.min(1, Math.max(0, a));
    }
    function k(a) {
      return function (b, c) {
        if (a.type === "CROP") {
          b = a.dimensions;
          if (b == null) return;
          c = b.clientImageHeight;
          var d = b.clientImageWidth,
            e = b.newHeight;
          b = b.newWidth;
          return e !== c || b !== d ? "CROP" : null;
        }
      };
    }
    function a(a) {
      return c("getPhotoEditorSaver")(a, i, h, k(a));
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCoordinateTransforms.react",
  ["MediaEditorViewStateContext", "react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a() {
      var a = i(c("MediaEditorViewStateContext")),
        b = a == null ? void 0 : a.clickEventCoordinateTransforms,
        d = function (d) {
          for (
            var e = b,
              f = Array.isArray(e),
              g = 0,
              e = f
                ? e
                : e[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var h;
            if (f) {
              if (g >= e.length) break;
              h = e[g++];
            } else {
              g = e.next();
              if (g.done) break;
              h = g.value;
            }
            h = h;
            h = h(babelHelpers["extends"]({}, d, { mediaViewState: a }));
            var i = h.intermediateX;
            h = h.intermediateY;
            d.intermediateX = i;
            d.intermediateY = h;
          }
          if (d.intermediateX == null || d.intermediateY == null)
            throw c("unrecoverableViolation")(
              "Mouse click event can never be null",
              "comet_composer"
            );
          return {
            intermediateX: d.intermediateX,
            intermediateY: d.intermediateY,
          };
        };
      return h(d, [b, a]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePhotoEditorMouseEventTracker.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a, b, c) {
      h(
        function () {
          window.addEventListener("mousemove", b);
          window.addEventListener("mouseup", c);
          a.current != null && a.current.addEventListener("mouseup", c);
          var d = function () {
            window.removeEventListener("mousemove", b),
              window.removeEventListener("mouseup", c),
              a.current != null && a.current.removeEventListener("mouseup", c);
          };
          return function () {
            return d();
          };
        },
        [a, b, c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometPhotoEditorCropLayer.react",
  [
    "CometPhotoEditorCropDragButton.react",
    "CometPhotoEditorCropWindow.react",
    "CometPhotoEditorCropWindowShadow.react",
    "CometRelay",
    "cometPhotoEditorCropSaver",
    "react",
    "updateSaveStatusReducer",
    "useCoordinateTransforms.react",
    "useMediaEditorReducer",
    "useMediaEditorSaver",
    "useMediaEditorViewStateDispatcher",
    "usePhotoEditorMouseEventTracker.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState,
      m = 18,
      n = 8;
    function a(a) {
      var b = a.clientImageHeight,
        e = a.clientImageWidth;
      a = a.containerRef;
      c("useMediaEditorReducer")(c("updateSaveStatusReducer"));
      var f = c("useMediaEditorViewStateDispatcher")(),
        g = k(null),
        o = l(null),
        p = o[0],
        q = o[1],
        r = c("useCoordinateTransforms.react")();
      o = i(
        function (a) {
          a.preventDefault();
          if (g.current != null) {
            var c = g.current.getBoundingClientRect(),
              d = c.left;
            c = c.top;
            a = r({
              clientWindowX: a.clientX,
              clientWindowY: a.clientY,
              imageLeftPosition: d,
              imageTopPosition: c,
            });
            d = a.intermediateX;
            c = a.intermediateY;
            a = c - m;
            c = d - n;
            d = a + m < 0 ? -m : a > b - m ? b - m : a;
            a = c + n < 0 ? -n : c > e - n ? e - n : c;
            switch (p) {
              case "TOP_LEFT":
                u(d);
                w(a);
                break;
              case "TOP_RIGHT":
                u(d);
                A(a);
                break;
              case "BOTTOM_LEFT":
                y(d);
                w(a);
                break;
              case "BOTTOM_RIGHT":
                y(d);
                A(a);
                break;
            }
          }
        },
        [b, e, r, p]
      );
      var s = l(0 - m),
        t = s[0],
        u = s[1];
      s = l(0 - n);
      var v = s[0],
        w = s[1];
      s = l(((s = b) != null ? s : 0) - m);
      var x = s[0],
        y = s[1];
      s = l(((s = e) != null ? s : 0) - n);
      var z = s[0],
        A = s[1];
      j(
        function () {
          y(b - m), A(e - n);
        },
        [b, e]
      );
      s = d("CometRelay").useRelayEnvironment();
      c("useMediaEditorSaver")(
        c("cometPhotoEditorCropSaver"),
        {
          dimensions: {
            clientImageHeight: b,
            clientImageWidth: e,
            newHeight: x - t,
            newWidth: z - v,
            x: v + n,
            y: t + m,
          },
          environment: s,
          type: "CROP",
        },
        5
      );
      c("usePhotoEditorMouseEventTracker.react")(a, o, function () {
        f({ type: "REFRESH_STATE" }), q(null);
      });
      return h.jsxs("div", {
        className: "k4urcfbm datstx6m rq0escxv",
        ref: g,
        children: [
          h.jsx(c("CometPhotoEditorCropWindowShadow.react"), {
            bottom: b - x - m,
            left: v + n,
            right: e - z - n,
            top: t + m,
          }),
          h.jsx(c("CometPhotoEditorCropWindow.react"), {
            height: x - t,
            left: v + n,
            top: t + m,
            width: z - v,
          }),
          h.jsx(c("CometPhotoEditorCropDragButton.react"), {
            cropCorner: "TOP_LEFT",
            left: v,
            setIsPressed: q,
            top: t,
          }),
          h.jsx(c("CometPhotoEditorCropDragButton.react"), {
            cropCorner: "TOP_RIGHT",
            left: z,
            setIsPressed: q,
            top: t,
          }),
          h.jsx(c("CometPhotoEditorCropDragButton.react"), {
            cropCorner: "BOTTOM_LEFT",
            left: v,
            setIsPressed: q,
            top: x,
          }),
          h.jsx(c("CometPhotoEditorCropDragButton.react"), {
            cropCorner: "BOTTOM_RIGHT",
            left: z,
            setIsPressed: q,
            top: x,
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
  "CometPhotoEditorCropLayerRenderer.react",
  ["CometPhotoEditorCropLayer.react", "MediaEditorViewStateContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      a = a.containerRef;
      var b = i(c("MediaEditorViewStateContext")),
        d = b == null ? void 0 : b.clientImageHeight;
      b = b == null ? void 0 : b.clientImageWidth;
      return d === 0 || b === 0 || d == null || b == null
        ? null
        : h.jsx(c("CometPhotoEditorCropLayer.react"), {
            clientImageHeight: d,
            clientImageWidth: b,
            containerRef: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "cometPhotoEditorTagSaver",
  ["CometMediaEditorUtils", "getPhotoEditorSaver", "orEmptyArray"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, d) {
      if (a.type === "SET_TAGS") {
        a = a.tags;
        a = c("orEmptyArray")(a).map(function (a) {
          if (a == null) return;
          var b = a.x,
            c = a.y;
          c =
            d && b != null && c != null
              ? (b = d({ intermediateX: b, intermediateY: c })) != null
                ? b
                : {}
              : {};
          b = c.intermediateX;
          c = c.intermediateY;
          return b == null || c == null
            ? null
            : babelHelpers["extends"]({}, a, { x: b, y: c });
        });
        return babelHelpers["extends"]({}, b, {
          data: babelHelpers["extends"]({}, b.data, { tags: a }),
        });
      }
      return b;
    }
    function i(a, b) {
      if (b == null) return;
      b = c("orEmptyArray")(b.tags);
      a = c("orEmptyArray")((a = a.data) == null ? void 0 : a.tags);
      return d("CometMediaEditorUtils").checkChangesForTags(a, b)
        ? "XY_TAG"
        : null;
    }
    function a(a) {
      return c("getPhotoEditorSaver")(a, null, h, i);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometPhotoEditorTagBox.react",
  [
    "fbt",
    "CometContextualLayer.react",
    "CometPhotoEditorTagDropdown.react",
    "CometPressable.react",
    "CometProductTagDotHint.react",
    "CometProductTaggingConstants",
    "MediaEditorViewStateContext",
    "react",
    "stylex",
    "useMediaEditorViewStateDispatcher",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useReducer,
      n = e.useRef,
      o = e.useState,
      p = {
        hideTag: { opacity: "b5wmifdl" },
        pressable: {
          borderTopWidth: "rt8b4zig",
          borderEndWidth: "n8ej3o3l",
          borderBottomWidth: "agehan2d",
          borderStartWidth: "sk4xxmp2",
          paddingTop: "jb3vyjys",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "qt6c0cv9",
          paddingStart: "a8nywdso",
        },
        tagBox: {
          borderTop: "c0kuhrxr",
          borderEnd: "dloffhmg",
          borderBottom: "lo2jlchb",
          borderStart: "rey1xuvt",
        },
        tagBoxContainer: { pointerEvents: "oqq733wu", position: "pmk7jnqg" },
      };
    function b(b) {
      var e = o(!1),
        f = e[0];
      e = e[1];
      var g = o(!1),
        q = g[0],
        r = g[1],
        s = c("useMediaEditorViewStateDispatcher")();
      g =
        (g = k(c("MediaEditorViewStateContext"))) == null
          ? void 0
          : g.hoveredProductID;
      var t = m(function (a) {
        return a + 1;
      });
      t[0];
      var u = t[1],
        v = n(null),
        w = n(null),
        x = j(function () {
          w.current != null && w.current.reposition({ autoflip: !0 });
        }, []);
      l(
        function () {
          a.addEventListener("resize", x);
          return function () {
            a.removeEventListener("resize", x);
          };
        },
        [x]
      );
      t = b.borderSize;
      var y = b.horizontalPercentage,
        z = b.id,
        A = b.isAddingTag,
        B = b.isProductTagging,
        C = b.logImpression,
        D = b.name,
        E = b.onDeletePressed,
        F = b.onPressHandler,
        G = b.photoID,
        H = b.productImage,
        I = b.productPerUnitPrice,
        J = b.productPrice,
        K = b.tagBoxSize,
        L = b.tagModeEnabled,
        M = b.verticalPercentage;
      t =
        B === !0 ? d("CometProductTaggingConstants").TOTAL_DOT_SIZE : K + 2 * t;
      var N = B === !0 ? null : K;
      g = B === !0 && g === z;
      var O = n(C);
      l(function () {
        O.current && O.current();
      }, []);
      C = B === !0 ? f || q || g : f || q || L;
      l(
        function () {
          B === !0 &&
            (f || q
              ? s({ productID: z, type: "HOVER_PRODUCT_TAG_ENTER" })
              : s({ productID: z, type: "HOVER_PRODUCT_TAG_LEAVE" }));
        },
        [f, q, z, s, B]
      );
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx("div", {
            className: c("stylex")(p.tagBoxContainer, B !== !0 && p.hideTag),
            ref: function (a) {
              (v.current = a), u();
            },
            style: {
              height: N,
              left: "calc(" + y + "% - " + t + "px / 2",
              top: "calc(" + M + "% - " + t + "px / 2",
              width: N,
            },
            children:
              v.current && B === !0
                ? i.jsx(c("CometPressable.react"), {
                    "aria-label": h._("Tag dot"),
                    onHoverChange: e,
                    overlayDisabled: !0,
                    children: i.jsx(c("CometProductTagDotHint.react"), {
                      borderSize: b.borderSize,
                      dotSize: b.tagBoxSize,
                      isHighlighted: C,
                      padding: d("CometProductTaggingConstants")
                        .DOT_HINT_PADDING,
                    }),
                  })
                : i.jsx(c("CometPressable.react"), {
                    "aria-label": h._("tag box"),
                    display: "inline",
                    onHoverChange: e,
                    onPress: F,
                    overlayDisabled: !0,
                    xstyle: p.pressable,
                    children: i.jsx("div", {
                      className: c("stylex")(p.tagBox),
                      style: { height: K, width: K },
                    }),
                  }),
          }),
          v.current &&
            C &&
            i.jsx(
              c("CometContextualLayer.react"),
              {
                align: "middle",
                context_DEPRECATED: v.current,
                imperativeRef: w,
                position: "below",
                children: i.jsx(c("CometPhotoEditorTagDropdown.react"), {
                  id: z,
                  name: D,
                  onDeletePressed: E,
                  onMouseEnter: function () {
                    A || r(!0);
                  },
                  onMouseLeave: function () {
                    r(!1);
                  },
                  photoID: G,
                  productImage: H,
                  productPerUnitPrice: I,
                  productPrice: J,
                }),
              },
              "tagDropdown-" + q.toString()
            ),
        ],
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = b;
  },
  98
);
__d(
  "RemoteVideoFilePreviewQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "videoID" }],
        b = [{ kind: "Variable", name: "id", variableName: "videoID" }],
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
          name: "__typename",
          storageKey: null,
        },
        e = [
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
            kind: "ScalarField",
            name: "start",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "end",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "representation_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "mime_codec",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "segment_type",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "RemoteVideoFilePreviewQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "VideoPlayerRelay_video",
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
          name: "RemoteVideoFilePreviewQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                c,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "animated_image_caption",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "original_width",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "original_height",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "broadcaster_origin",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "broadcast_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "broadcast_status",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_live_streaming",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_live_trace_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_looping",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_video_broadcast",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "loop_count",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_spherical",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_spherical_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "unsupported_browser_message",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "MusicVideoMetadata",
                  kind: "LinkedField",
                  name: "pmv_metadata",
                  plural: !1,
                  selections: [d, c],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_ncsr",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "permalink_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "captions_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dash_prefetch_experimental",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoCaptionLocale",
                  kind: "LinkedField",
                  name: "video_available_captions_locales",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "localized_creation_method",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InstreamExtraConfig",
                  kind: "LinkedField",
                  name: "instream_extra_config",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "instream_halo_delay_time_seconds",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoPrefetchResources",
                  kind: "LinkedField",
                  name: "dash_prefetch_resources",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "VideoPrefetchResource",
                      kind: "LinkedField",
                      name: "audio",
                      plural: !0,
                      selections: e,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "VideoPrefetchResource",
                      kind: "LinkedField",
                      name: "video",
                      plural: !0,
                      selections: e,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "context", value: "DEFAULT" },
                    {
                      kind: "Literal",
                      name: "supported",
                      value: [
                        "CometVideoPlayerOzImplementation",
                        "CometVideoPlayerShakaImplementation",
                        "CometVideoPlayerProgressiveImplementation",
                      ],
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_video_player_implementations",
                  plural: !0,
                  selections: [
                    d,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "useRelay3DVideoImplementations_video",
                          fragmentName:
                            "useRelay3DOzImplementation_implementation",
                          fragmentPropName: "implementation",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometVideoPlayerOzImplementation",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "useRelay3DVideoImplementations_video",
                          fragmentName:
                            "useRelay3DShakaImplementation_implementation",
                          fragmentPropName: "implementation",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometVideoPlayerShakaImplementation",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "useRelay3DVideoImplementations_video",
                          fragmentName:
                            "useRelay3DProgressiveImplementation_implementation",
                          fragmentPropName: "implementation",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometVideoPlayerProgressiveImplementation",
                      abstractKey: null,
                    },
                  ],
                  storageKey:
                    'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])',
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_use_oz",
                  storageKey: null,
                },
                {
                  alias: "playable_url_dash",
                  args: [
                    {
                      kind: "Literal",
                      name: "scrubbing_preference",
                      value: "MPEG_DASH",
                    },
                  ],
                  kind: "ScalarField",
                  name: "playable_url",
                  storageKey: 'playable_url(scrubbing_preference:"MPEG_DASH")',
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dash_manifest",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "min_quality_preference",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_rss_podcast_video",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoPlayerShakaLiveP2PInit",
                  kind: "LinkedField",
                  name: "video_player_shaka_live_p2p_init",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "json_encoded_video_data",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "playable_url",
                  storageKey: null,
                },
                {
                  alias: "playable_url_quality_hd",
                  args: [{ kind: "Literal", name: "quality", value: "HD" }],
                  kind: "ScalarField",
                  name: "playable_url",
                  storageKey: 'playable_url(quality:"HD")',
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "SphericalVideoFallbackUrls",
                  kind: "LinkedField",
                  name: "spherical_video_fallback_urls",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "hd",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "sd",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_gaming_video",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_latency_menu_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "fbls_tier",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_latency_sensitive_broadcast",
                  storageKey: null,
                },
                {
                  kind: "ClientExtension",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "selected_latency_setting",
                      storageKey: null,
                    },
                  ],
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "comet_video_player_static_config",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "comet_video_player_context_sensitive_config",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoPlayerShakaPerformanceLoggerInit",
                  kind: "LinkedField",
                  name: "video_player_shaka_performance_logger_init",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        "useVideoPlayerShakaPerformanceLoggerRelayImpl_video",
                      fragmentName:
                        "useVideoPlayerShakaPerformanceLoggerRelayImpl_init",
                      fragmentPropName: "init",
                      kind: "ModuleImport",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "video_player_shaka_performance_logger_should_sample",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "autoplay_gating_result",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "viewer_autoplay_setting",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_autoplay",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "drm_info",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoP2PSettings",
                  kind: "LinkedField",
                  name: "p2p_settings",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "ticket",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "VideoP2PSettingsConfig",
                      kind: "LinkedField",
                      name: "config",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "delay_p2p_until_play",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "disable_hivejava_for_livevc",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "VideoHiveInitializationOptions",
                      kind: "LinkedField",
                      name: "hive_initialization_options",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "VideoHiveInitializationOptionHiveJava",
                          kind: "LinkedField",
                          name: "hive_java",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "min_version",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "hive_tech_order",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "debug_level",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "AudioSettings",
                  kind: "LinkedField",
                  name: "audio_settings",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "video_volume_setting",
                      storageKey: null,
                    },
                    c,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "CaptionsSettings",
                  kind: "LinkedField",
                  name: "captions_settings",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "always_show_captions",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "captions_background_color",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "captions_background_opacity",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "captions_text_color",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "captions_text_size",
                      storageKey: null,
                    },
                    c,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoBroadcastLowLatencyConfig",
                  kind: "LinkedField",
                  name: "broadcast_low_latency_config",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "ll_desired_latency_ms",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "ll_latency_tolerance_ms",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audio_availability",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoMutedSegment",
                  kind: "LinkedField",
                  name: "muted_segments",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "mute_start_time_in_sec",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "mute_end_time_in_sec",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "SphericalVideoRenderer",
                  kind: "LinkedField",
                  name: "spherical_video_renderer",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        "VideoPlayerRelay_video_spherical_video_renderer",
                      fragmentName:
                        "VideoPlayerSphericalRelay_sphericalVideoRenderer",
                      fragmentPropName: "sphericalVideoRenderer",
                      kind: "ModuleImport",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InstreamVideoAdBreaks",
                  kind: "LinkedField",
                  name: "instream_video_ad_breaks_comet",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        "VideoPlayerRelay_video_instream_video_ad_breaks_comet",
                      fragmentName: "InstreamVideoAdBreaksPlayer_adBreaks",
                      fragmentPropName: "adBreaks",
                      kind: "ModuleImport",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoThumbnail",
                  kind: "LinkedField",
                  name: "preferred_thumbnail",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
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
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "image_preview_payload",
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
        },
        params: {
          id: "3728036250630491",
          metadata: {},
          name: "RemoteVideoFilePreviewQuery",
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
  "LocalVideoFilePreview.react",
  [
    "MediaEditorViewStateContext",
    "VideoPlayerPlayButton.react",
    "clearTimeout",
    "generateVideoThumbnails",
    "react",
    "regeneratorRuntime",
    "setTimeout",
    "useComposerViewStateDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useContext,
      j = e.useRef,
      k = e.useState,
      l = function (a) {
        var d, e, f;
        return b("regeneratorRuntime").async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  d = a.videoPlayer;
                  g.next = 3;
                  return b("regeneratorRuntime").awrap(
                    c("generateVideoThumbnails")(
                      d,
                      d.videoWidth ? d.videoWidth : 0,
                      d.videoHeight ? d.videoHeight : 0,
                      10,
                      "contain",
                      0,
                      null
                    )
                  );
                case 3:
                  e = g.sent;
                  f = e.thumbnails;
                  return g.abrupt("return", f);
                case 6:
                case "end":
                  return g.stop();
              }
          },
          null,
          this
        );
      };
    function a(a) {
      var d = a.disableHoverPlay,
        e = a.disablePlayOverlayBtn,
        f = a.mediaAttachment,
        g = a.needLoadData,
        m = a.setVideoRef,
        n = a.showPlaybackControls,
        o = a.thumbnailURL,
        p = a.videoAttachmentMetadata,
        q = j(null),
        r = j(null);
      a = k(!1);
      var s = a[0],
        t = a[1],
        u = c("useComposerViewStateDispatcher")(),
        v =
          (a =
            (a = i(c("MediaEditorViewStateContext"))) == null
              ? void 0
              : a.index) != null
            ? a
            : 0;
      a = function () {
        r.current !== null && c("clearTimeout")(r.current),
          q.current && q.current.play(),
          t(!0),
          n || (r.current = c("setTimeout")(w, 1e4));
      };
      var w = function () {
          var a = q.current;
          a !== null && (a.pause(), n || (a.currentTime = 0));
          t(!1);
        },
        x = function (a) {
          u({
            currentIndex: v,
            type: "SET_VIDEO_ATTACHMENT_METADATA",
            videoAttachmentMetadata: babelHelpers["extends"]({}, p, {
              generatedThumbnails: a,
            }),
          });
        },
        y = function (a) {
          u({
            currentIndex: v,
            type: "SET_VIDEO_ATTACHMENT_METADATA",
            videoAttachmentMetadata: babelHelpers["extends"]({}, p, {
              isGeneratingThumbnails: a,
            }),
          });
        },
        z = function () {
          var a, c;
          return b("regeneratorRuntime").async(
            function (d) {
              while (1)
                switch ((d.prev = d.next)) {
                  case 0:
                    a = q.current;
                    if (!(a !== null)) {
                      d.next = 11;
                      break;
                    }
                    m && m(a);
                    if (!g) {
                      d.next = 11;
                      break;
                    }
                    y(!0);
                    d.next = 7;
                    return b("regeneratorRuntime").awrap(l({ videoPlayer: a }));
                  case 7:
                    (c = d.sent), (a.currentTime = 0), x(c), y(!1);
                  case 11:
                  case "end":
                    return d.stop();
                }
            },
            null,
            this
          );
        };
      return f.fileType !== "FILE"
        ? h.jsxs(h.Fragment, {
            children: [
              h.jsx("video", {
                className: "k4urcfbm r0294ipz datstx6m",
                controls: n,
                crossOrigin: "anonymous",
                onClick: function () {
                  t(!0);
                },
                onLoadedData: z,
                onMouseEnter: d ? null : a,
                onMouseLeave: d ? null : w,
                onPause: function () {
                  t(!1);
                },
                onPlay: function () {
                  return t(!0);
                },
                poster: o,
                ref: q,
                src:
                  f.state !== "NEW" &&
                  f.state !== "CLIENT_PROCESSING" &&
                  f.state !== "CLIENT_PROCESSING_COMPLETE" &&
                  f.fileObjectURL,
              }),
              h.jsx(c("VideoPlayerPlayButton.react"), {
                isVisible: !s && !e,
                onClick: a,
              }),
            ],
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerClip",
  ["VideoPlayerHooks", "react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = a.clipDuration,
        e = a.clipStartTime,
        f = e === void 0 ? 0 : e;
      e = a.pauseOnLoop;
      var g = e === void 0 ? !1 : e,
        j = d("VideoPlayerHooks").useController(),
        k = i(null);
      h(
        function () {
          f >= 0 ||
            c("recoverableViolation")(
              "useVideoPlayerClip clipStartTime must be greater than zero",
              "comet_video_player"
            );
          b != null &&
            !(b > 0) &&
            c("recoverableViolation")(
              "useVideoPlayerClip clipDuration must be greater than zero",
              "comet_video_player"
            );
          if (f >= 0 && b != null && b > 0) {
            k.current = j.getPlayheadPosition();
            var a = j.subscribe(function () {
              var a = k.current,
                c = j.getPlayheadPosition(),
                d = j.getCurrentState();
              if (a != null && c !== a && !d.seeking) {
                k.current = c;
                a = Math.min(d.duration, f + b);
                d = "product_initiated";
                c >= a ? (j.seek(f), g && j.pause(d)) : c < f && j.seek(f);
              }
            });
            return function () {
              a.remove(), (k.current = null);
            };
          }
        },
        [b, f, j, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "RemoteVideoFilePreview.react",
  [
    "CometPlaceholder.react",
    "CometProgressRing.react",
    "CometRelay",
    "PlayableCollageItemOverlay.react",
    "RecoverableViolationWithComponentStack.react",
    "RemoteVideoFilePreviewQuery.graphql",
    "VideoPlayerHooks",
    "VideoPlayerRelay.react",
    "VideoPlayerSurface.react",
    "react",
    "useDebouncedValue",
    "useVideoPlayerClip",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.mediaAttachment;
      a = a.entID;
      return a == null
        ? null
        : i.jsx(c("CometPlaceholder.react"), {
            fallback: i.jsx(k, {}),
            children: i.jsx(j, { videoID: a }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      a = a.videoID;
      a = d("CometRelay").useLazyLoadQuery(
        h !== void 0 ? h : (h = b("RemoteVideoFilePreviewQuery.graphql")),
        { videoID: a }
      );
      a = a.video;
      return a == null
        ? i.jsx(c("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "video should not be null in preview",
            projectName: "comet_composer",
          })
        : i.jsx(c("VideoPlayerRelay.react"), {
            canAutoplay: "do_not_autoplay",
            portalingEnabled: !1,
            subOrigin: "embedded_video_preview",
            video: a,
            children: i.jsx(c("VideoPlayerSurface.react"), {
              children: i.jsx(l, {}),
            }),
          });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k() {
      return i.jsx("div", {
        className: "k4urcfbm pmk7jnqg datstx6m",
        children: i.jsx(c("CometProgressRing.react"), {
          color: "dark",
          duration: 5,
          size: 32,
          type: "estimated",
        }),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l() {
      var a = d("VideoPlayerHooks").useController(),
        b = d("VideoPlayerHooks").usePaused(),
        e = d("VideoPlayerHooks").usePlaying();
      e = c("useDebouncedValue")(e, 5);
      b = b && !e;
      c("useVideoPlayerClip")({ clipDuration: 10, pauseOnLoop: !0 });
      e = function () {
        a.getCurrentState().paused && a.play("user_initiated");
      };
      var f = function () {
        a.getCurrentState().playing &&
          (a.pause("product_initiated"), a.seek(0));
      };
      return i.jsx("div", {
        className: "k4urcfbm pmk7jnqg datstx6m",
        onMouseEnter: e,
        onMouseLeave: f,
        children: b ? i.jsx(c("PlayableCollageItemOverlay.react"), {}) : null,
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerVideoPreview.react",
  [
    "CollageItemFallback.react",
    "CometVideoEditorUtils.react",
    "LocalVideoFilePreview.react",
    "RemoteVideoFilePreview.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { imageArea: { height: "djkytl3r" } };
    function a(a) {
      var b = a.isPlayablePreview;
      b = b === void 0 ? !1 : b;
      var e = a.mediaAttachment,
        f = a.setVideoRef;
      a = a.videoStyle;
      if (e.fileType !== "VIDEO") return null;
      var g = d("CometVideoEditorUtils.react").getThumbnailURLFromVideoMetadata(
        e
      );
      if (e.fileObjectURL != null)
        if (e.file && e.useCDNPreview === !0)
          return h.jsx("div", {
            className: c("stylex")(i.imageArea),
            children: h.jsx(c("CollageItemFallback.react"), {
              fileType: e.fileType,
              filename: e.file.name,
            }),
          });
        else if (e.file || e.state === "PREEXISTING") {
          var j = (e == null ? void 0 : e.videoAttachmentMetadata) || {},
            k = (j == null ? void 0 : j.generatedThumbnails) || [];
          k = k && k.length > 0;
          return h.jsx("div", {
            className: c("stylex")(a),
            children: h.jsx(c("LocalVideoFilePreview.react"), {
              disableHoverPlay: b,
              disablePlayOverlayBtn:
                b &&
                (j == null ? void 0 : j.thumbnailType) === "scrubber_selected",
              mediaAttachment: e,
              needLoadData: b && !k,
              setVideoRef: f,
              showPlaybackControls:
                b &&
                (j == null ? void 0 : j.thumbnailType) !== "scrubber_selected",
              thumbnailURL: g,
              videoAttachmentMetadata: j,
            }),
          });
        }
      return e.state === "PREEXISTING"
        ? h.jsx("div", {
            className: c("stylex")(a),
            children: h.jsx(c("RemoteVideoFilePreview.react"), {
              mediaAttachment: e,
            }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "HelpCenterHeaderNavigation_config.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "HelpCenterHeaderNavigation_config",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "HelpCenterNavigation_config",
        },
      ],
      type: "HelpCenterNavigation",
      abstractKey: "__isHelpCenterNavigation",
    };
    e.exports = a;
  },
  null
);
__d(
  "HelpCenterHeader_config.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "HelpCenterHeader_config",
      selections: [
        {
          alias: "inboxUri",
          args: null,
          kind: "ScalarField",
          name: "inbox_uri",
          storageKey: null,
        },
        {
          alias: "selectedLanguage",
          args: null,
          kind: "ScalarField",
          name: "selected_language",
          storageKey: null,
        },
      ],
      type: "HelpCenterHeaderConfig",
      abstractKey: "__isHelpCenterHeaderConfig",
    };
    e.exports = a;
  },
  null
);
__d(
  "HelpCenterNavigationTopTabs_folder.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "HelpCenterNavigationTopTabs_folder",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "HelpCenterNavigationTabMenu_folder",
        },
      ],
      type: "HelpCenterNavigationFolder",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "HelpCenterNavigation_config.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "HelpCenterNavigation_config",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "HelpCenterNavigationFolder",
            kind: "LinkedField",
            name: "navigation",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "children",
                plural: !0,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "HelpCenterNavigationTopTabs_folder",
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "navigation",
        },
      ],
      type: "HelpCenterNavigation",
      abstractKey: "__isHelpCenterNavigation",
    };
    e.exports = a;
  },
  null
);
__d(
  "HelpCenterLocaleTypeaheadDataSourceQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3425587200806838",
        metadata: {},
        name: "HelpCenterLocaleTypeaheadDataSourceQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometOnClickOutsideRefs",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b) {
      return h(function (c) {
        var d = c.target;
        if (d instanceof Node)
          for (
            var e = b,
              f = Array.isArray(e),
              g = 0,
              e = f
                ? e
                : e[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var h;
            if (f) {
              if (g >= e.length) break;
              h = e[g++];
            } else {
              g = e.next();
              if (g.done) break;
              h = g.value;
            }
            h = h;
            if (
              h.current != null &&
              h.current instanceof Node &&
              h.current.contains(d)
            )
              return;
          }
        a(c);
      }, [a].concat(b));
    }
    g.useCometOnClickOutsideRefs = a;
  },
  98
);
__d(
  "HelpCenterLocaleDialog.entrypoint",
  [
    "HelpCenterLocaleTypeaheadDataSourceQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            queryReference: {
              parameters: c(
                "HelpCenterLocaleTypeaheadDataSourceQuery$Parameters"
              ),
              variables: {},
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "HelpCenterLocaleDialog.react"
      ).__setRef("HelpCenterLocaleDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "HelpCenterHeaderIconGroup.react",
  [
    "fbt",
    "ix",
    "CometDeferredDialogTrigger.react",
    "CometEntryPointDialogTrigger.react",
    "CometRow.react",
    "CometRowItem.react",
    "CometTooltip.react",
    "HelpCenterContextProvider",
    "HelpCenterLocaleDialog.entrypoint",
    "TetraButton.react",
    "TetraCircleButton.react",
    "fbicon",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        container: { end: "n7fi1qx3", minWidth: "royuam97" },
        selectedLanguage: { marginTop: "aov4n071" },
        topNavItem: { height: "e5d9fub0", justifyContent: "taijpn5t" },
      },
      l = c("requireDeferred")("HelpCenterSearchDialog.react").__setRef(
        "HelpCenterHeaderIconGroup.react"
      );
    function a(a) {
      var b = a.inboxURI,
        e = a.selectedLanguage;
      a = d("HelpCenterContextProvider").useHelpCenterContext();
      var f = a.helpIdentifier;
      a = a.sessionID;
      return j.jsxs(c("CometRow.react"), {
        align: "end",
        paddingHorizontal: 0,
        paddingVertical: 0,
        spacingHorizontal: 8,
        spacingVertical: 0,
        xstyle: k.container,
        children: [
          j.jsx(c("CometRowItem.react"), {
            testid: void 0,
            xstyle: k.topNavItem,
            children: j.jsx(c("CometTooltip.react"), {
              align: "middle",
              position: "below",
              tooltip: h._("Search"),
              children: j.jsx(c("CometDeferredDialogTrigger.react"), {
                dialogProps: { helpIdentifier: f, sessionID: a },
                dialogResource: l,
                children: function (a) {
                  return j.jsx(c("TetraCircleButton.react"), {
                    color: "primary",
                    icon: d("fbicon")._(i("491283"), 20),
                    label: h._("Search"),
                    onPress: a,
                    size: 40,
                  });
                },
              }),
            }),
          }),
          b != null
            ? j.jsx(c("CometRowItem.react"), {
                xstyle: k.topNavItem,
                children: j.jsx(c("CometTooltip.react"), {
                  align: "middle",
                  position: "below",
                  tooltip: h._("Support Inbox"),
                  children: j.jsx(c("TetraCircleButton.react"), {
                    color: "primary",
                    icon: d("fbicon")._(i("510233"), 20),
                    label: h._("Support Inbox"),
                    linkProps: { target: "_self", url: b },
                    size: 40,
                  }),
                }),
              })
            : null,
          j.jsx(c("CometRowItem.react"), {
            xstyle: k.selectedLanguage,
            children: j.jsx(c("CometEntryPointDialogTrigger.react"), {
              dialogEntryPoint: c("HelpCenterLocaleDialog.entrypoint"),
              otherProps: { currentLocale: e },
              preloadParams: {},
              preloadTrigger: "button",
              children: function (a, b, d, f) {
                return j.jsx(c("TetraButton.react"), {
                  "aria-label": h._("Change Language: {language}", [
                    h._param("language", e),
                  ]),
                  label: e,
                  onHoverIn: b,
                  onHoverOut: d,
                  onPress: a,
                  onPressIn: f,
                  size: "large",
                  type: "secondary",
                });
              },
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
  "HelpCenterHeaderLogo.react",
  [
    "fbt",
    "CometLink.react",
    "CometRow.react",
    "CometRowItem.react",
    "HelpCenterAppFactory",
    "HelpCenterContextProvider",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        container: { ":hover": { textDecoration: "p8dawk7l" } },
        headerText: { paddingStart: "h4z51re5" },
      };
    function a() {
      var a = d("HelpCenterContextProvider").useHelpCenterContext();
      a = a.helpIdentifier;
      return i.jsx(c("CometLink.react"), {
        href: d("HelpCenterAppFactory").getRoutingHomeURL(a),
        xstyle: j.container,
        children: i.jsxs(c("CometRow.react"), {
          align: "start",
          paddingHorizontal: 0,
          paddingVertical: 0,
          spacing: 0,
          verticalAlign: "center",
          children: [
            i.jsx(c("CometRowItem.react"), {
              children: d("HelpCenterAppFactory").getRegisteredIcon(a),
            }),
            i.jsx(c("CometRowItem.react"), {
              xstyle: j.headerText,
              children: i.jsx(c("TetraText.react"), {
                color: "primary",
                type: "bodyLink2",
                children: h._("Help Center"),
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
  "HelpCenterNavigationTopTab.react",
  [
    "CometLazyPopoverTrigger.react",
    "CometPressable.react",
    "CometPressableOverlay.react",
    "CometRelay",
    "HelpCenterNavigationTopTabs_folder.graphql",
    "JSResourceForInteraction",
    "Keys",
    "TetraText.react",
    "react",
    "stylex",
    "useCometOnClickOutsideRefs",
    "useGlobalEventListener",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useRef,
      l = e.useState,
      m = {
        overlayHovered: { backgroundColor: "rnr61an3" },
        tabPressable: {
          alignItems: "bp9cbjyn",
          cursor: "nhd2j8a9",
          display: "j83agx80",
          height: "m7zwrmfr",
          justifyContent: "taijpn5t",
          width: "kc0xjvvi",
        },
      },
      n = c("JSResourceForInteraction")(
        "HelpCenterNavigationTabMenu.react"
      ).__setRef("HelpCenterNavigationTopTab.react");
    function a(a) {
      a = a.folder;
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("HelpCenterNavigationTopTabs_folder.graphql")),
        a
      );
      a = l(!1);
      var f = a[0],
        g = a[1];
      a = l(!1);
      var o = a[0],
        p = a[1];
      a = l(!1);
      var q = a[0],
        r = a[1];
      a = k(null);
      var s = k(null);
      s = d("useCometOnClickOutsideRefs").useCometOnClickOutsideRefs(
        function () {
          g(!1);
        },
        [s, a]
      );
      a = j(
        function (a) {
          a.keyCode === c("Keys").ESC
            ? g(!1)
            : a.keyCode === c("Keys").TAB && q
            ? (g(!1), r(!1))
            : a.keyCode === c("Keys").TAB && f && (r(!0), g(!1));
        },
        [q, f]
      );
      c("useGlobalEventListener")("mousedown", s);
      c("useGlobalEventListener")("keydown", a);
      return i.jsx(c("CometLazyPopoverTrigger.react"), {
        align: "start",
        popoverProps: { folder: e },
        popoverResource: n,
        position: "below",
        preloadTrigger: "button",
        children: function (a, b, d, h, j, k) {
          return i.jsx(c("CometPressable.react"), {
            "aria-expanded": f,
            "aria-haspopup": "menu",
            display: "block",
            onHoverIn: function (a) {
              p(!0), h(a);
            },
            onHoverOut: function () {
              p(!1), j();
            },
            onPress: function () {
              g(!0), b();
            },
            onPressIn: k,
            overlayDisabled: !0,
            ref: a,
            testid: void 0,
            children: i.jsxs("div", {
              className: c("stylex")(m.tabPressable),
              id: e.name,
              children: [
                i.jsx(c("TetraText.react"), {
                  color: f ? "primary" : "secondary",
                  type: "bodyLink3",
                  children: e.name,
                }),
                i.jsx(c("CometPressableOverlay.react"), {
                  hovered: o || f,
                  hoveredStyle: m.overlayHovered,
                  offset: { bottom: 0, left: 7, right: 7, top: 0 },
                  radius: 8,
                }),
              ],
            }),
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
  "HelpCenterNavigation.react",
  [
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometScrollableArea.react",
    "HelpCenterNavigationTopTab.react",
    "HelpCenterNavigation_config.graphql",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        container: { marginEnd: "cxmmr5t8", marginStart: "hcukyx3x" },
        scrollable: { width: "k4urcfbm" },
        scrollableContainer: {
          "@media (max-width: 1260px)": {
            marginEnd: "ofl8ma26",
            minWidth: "f627461x",
            width: "jt2xkfax",
          },
        },
      };
    function a(a) {
      a = a.navConfig;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("HelpCenterNavigation_config.graphql")),
        a
      );
      a = a.navigation;
      return i.jsx("div", {
        className: c("stylex")(j.scrollableContainer),
        role: "navigation",
        children: i.jsx(c("CometScrollableArea.react"), {
          horizontal: !0,
          vertical: !1,
          xstyle: j.scrollable,
          children: i.jsx(c("CometRow.react"), {
            paddingHorizontal: 0,
            paddingVertical: 0,
            spacingHorizontal: 16,
            spacingVertical: 8,
            xstyle: j.container,
            children: a.children.map(function (a, b) {
              return i.jsx(
                c("CometRowItem.react"),
                {
                  children: i.jsx(c("HelpCenterNavigationTopTab.react"), {
                    folder: a,
                  }),
                },
                b
              );
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "HelpCenterHeader.react",
  [
    "fbt",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "ErrorBoundary.react",
    "FBLogger",
    "HelpCenterHeaderIconGroup.react",
    "HelpCenterHeaderLogo.react",
    "HelpCenterHeaderNavigation_config.graphql",
    "HelpCenterHeader_config.graphql",
    "HelpCenterNavigation.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react"),
      l = {
        container: { minWidth: "sxcvaqpb" },
        contentWrapper: {
          position: "poy2od1o",
          width: "k4urcfbm",
          zIndex: "tkr6xdv7",
          "@media (max-width: 1038px)": {
            minWidth: "bnysi8ir",
            paddingTop: "eyyrty8w",
            position: "omh6a3kb",
          },
        },
        navWrapper: {
          backgroundColor: "hybvsw6c",
          boxShadow: "czqri4pq",
          height: "e5d9fub0",
          top: "kr520xx4",
          width: "k4urcfbm",
          "@media (max-width: 1038px)": { minWidth: "bnysi8ir" },
        },
      };
    function a(a) {
      var e = a.headerConfig;
      a = a.navConfig;
      e = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("HelpCenterHeader_config.graphql")),
        e
      );
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("HelpCenterHeaderNavigation_config.graphql")),
        a
      );
      var f = "English (US)";
      return k.jsx("div", {
        "aria-label": h._("Help Center home page"),
        className: c("stylex")(l.contentWrapper),
        role: "banner",
        children: k.jsx("div", {
          className: c("stylex")(l.navWrapper),
          children: k.jsx(c("ErrorBoundary.react"), {
            onError: function (a) {
              c("FBLogger")("help_center_redesign", "Top Nav")
                .catching(a)
                .mustfix("Unknown expected rendering top nav.");
            },
            children: k.jsxs(c("CometRow.react"), {
              paddingHorizontal: 16,
              paddingTop: 0,
              spacingHorizontal: 0,
              spacingVertical: 0,
              testid: void 0,
              verticalAlign: "center",
              xstyle: l.container,
              children: [
                k.jsx(c("CometRowItem.react"), {
                  children: k.jsx(c("HelpCenterHeaderLogo.react"), {}),
                }),
                k.jsx(c("CometRowItem.react"), {
                  children:
                    a != null &&
                    k.jsx(c("HelpCenterNavigation.react"), { navConfig: a }),
                }),
                k.jsx(c("CometRowItem.react"), {
                  children: k.jsx(c("HelpCenterHeaderIconGroup.react"), {
                    inboxURI: e == null ? void 0 : e.inboxUri,
                    selectedLanguage:
                      (a = e == null ? void 0 : e.selectedLanguage) != null
                        ? a
                        : f,
                  }),
                }),
              ],
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometIXSupportInboxItemList_fragmentProp.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometIXSupportInboxItemList_fragmentProp",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "item_title",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometTextWithEntitiesRelay_textWithEntities",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "support_inbox_item_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "support_inbox_infra_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "support_inbox_item_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "item_updates_subtitle",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "item_metadata_information",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "item_preview",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometIXSupportInboxItemList_fragmentProp",
                  fragmentName: "CometSupportInboxItemListIconPreview_data",
                  fragmentPropName: "data",
                  kind: "ModuleImport",
                },
              ],
              type: "SupportInboxItemListIconPreview",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometIXSupportInboxItemList_fragmentProp",
                  fragmentName: "CometSupportInboxItemListImagePreview_data",
                  fragmentPropName: "data",
                  kind: "ModuleImport",
                },
              ],
              type: "SupportInboxItemListImagePreview",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "SupportInboxGenericItemListData",
      abstractKey: "__isSupportInboxGenericItemListData",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometSupportInboxItemListIconPreview_data$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometSupportInboxItemListIconPreview_data$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "icon_url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "icon_shape",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometSupportInboxItemListIconPreview_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometSupportInboxItemListIconPreview_data",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "icon_url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "icon_shape",
          storageKey: null,
        },
      ],
      type: "SupportInboxItemListIconPreview",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometContextList.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        c = a.items;
      a = a.testID;
      return h.jsx("div", {
        className: "sv5sfqaa obtkqiv7",
        "data-testid": void 0,
        children: c.map(function (a, c) {
          return b({ item: a, props: { key: (a = a.key) != null ? a : c } });
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "UfixFbSupportInboxItemFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("2012837");
    c = b("FalcoLoggerInternal").create("ufix_fb_support_inbox_item", a);
    e.exports = c;
  },
  null
);
__d(
  "XCometSupportControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/support/",
      Object.freeze({ second: !1, shimmed_in_item: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometIXSupportInboxItemList.react",
  [
    "CometBadge.react",
    "CometCard.react",
    "CometErrorBoundary.react",
    "CometIXSupportInboxItemList_fragmentProp.graphql",
    "CometPlaceholder.react",
    "CometPressable.react",
    "CometRelay",
    "CometRouteParams",
    "CometTextWithEntitiesRelay.react",
    "TetraTextPairing.react",
    "UfixFbSupportInboxItemFalcoEvent",
    "XCometPageVanitySettingsControllerRouteBuilder",
    "XCometSupportControllerRouteBuilder",
    "react",
    "stylex",
    "useNullthrowsViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useState,
      k = {
        cardSpacing: { marginTop: "n1l5q3vz" },
        imageContainer: { width: "q676j6op" },
        itemContainer: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          minHeight: "iihba337",
        },
        itemContainerRoot: {
          paddingTop: "cxgpxx05",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "sj5x9vvc",
          paddingStart: "dati1w0a",
          width: "k4urcfbm",
        },
        itemListBadge: { marginEnd: "cgat1ltu" },
        itemListBody: { marginStart: "ozuftl9m" },
      };
    function l(a) {
      var e = c("useNullthrowsViolation")(a.fragmentProp),
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometIXSupportInboxItemList_fragmentProp.graphql")),
          e
        );
      e = j(!1);
      var g = e[0],
        l = e[1];
      e = c("useNullthrowsViolation")(f.item_title);
      var o = f.item_updates_subtitle,
        p = c("useNullthrowsViolation")(f.item_metadata_information),
        q = c("useNullthrowsViolation")(f.item_preview),
        r = d("CometRouteParams").useRouteParams(),
        s = c("useNullthrowsViolation")(f.support_inbox_item_id);
      o =
        o != null
          ? i.jsxs("div", {
              children: [
                i.jsx("span", {
                  className: c("stylex")(k.itemListBadge),
                  children: i.jsx(c("CometBadge.react"), {
                    isProfileBadge: !0,
                    size: 8,
                  }),
                }),
                o,
              ],
            })
          : null;
      var t = function () {
        l(!0), n(s, f.support_inbox_item_type, a.sessionID, a.screenType);
      };
      return i.jsx("div", {
        className: c("stylex")(k.cardSpacing),
        children: i.jsx(c("CometCard.react"), {
          background: "white",
          border: "none",
          dropShadow: 1,
          children: i.jsx(c("CometPressable.react"), {
            disabled: g,
            display: "block",
            linkProps: { routeTarget: "self", url: m(f, r) },
            onPress: t,
            xstyle: k.itemContainerRoot,
            children: i.jsxs("div", {
              className: c("stylex")(k.itemContainer),
              children: [
                i.jsx("div", {
                  className: c("stylex")(k.imageContainer),
                  children: i.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: i.jsx(d("CometRelay").MatchContainer, {
                      match: q,
                    }),
                  }),
                }),
                i.jsx("div", {
                  className: c("stylex")(k.itemListBody),
                  children: i.jsx(c("TetraTextPairing.react"), {
                    body: o,
                    headline: i.jsx(c("CometTextWithEntitiesRelay.react"), {
                      textWithEntities: e,
                    }),
                    headlineLineLimit: 2,
                    level: 4,
                    meta: p,
                    reduceEmphasis: o == null,
                  }),
                }),
              ],
            }),
          }),
        }),
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a, b) {
      var d = {};
      (a == null ? void 0 : a.support_inbox_infra_type) === "OLD_INFRA" &&
        (d = babelHelpers["extends"]({}, d, { shimmed_in_item: !0 }));
      a = a == null ? void 0 : a.support_inbox_item_id;
      a != null && (d = babelHelpers["extends"]({}, d, { item_id: a }));
      if ("tab" in b && "vanity" in b && b.tab === "support_dashboard") {
        a = b.vanity;
        b = babelHelpers["extends"]({ tab: "support_dashboard", vanity: a }, d);
        return c("XCometPageVanitySettingsControllerRouteBuilder").buildURL(b);
      }
      return c("XCometSupportControllerRouteBuilder").buildURL(d);
    }
    function a(a) {
      return i.jsx(c("CometErrorBoundary.react"), {
        fallback: function () {
          return null;
        },
        children: i.jsx(l, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function n(a, b, d, e) {
      if (b == null) return;
      c("UfixFbSupportInboxItemFalcoEvent").log(function () {
        return {
          core: {
            entity_id: "",
            event_source: "fb_support_inbox",
            event_step: "client_action",
            session_id: d,
          },
          ix_support_inbox: { item_id: a, item_type: b },
          ixt_screen: { screen: e },
        };
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "IXSupportInboxIconShapeConverter",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (a) {
        case "CIRCULAR":
          return "circle";
        case "ROUNDED":
          return "roundedRect";
        default:
          return "circle";
      }
    }
    f.convertIXIconShapeTypeToImageIconStyle = a;
  },
  66
);
__d(
  "CometSupportInboxItemListIconPreview.react",
  [
    "CometRelay",
    "CometSkittleIcon.react",
    "CometSupportInboxItemListIconPreview_data.graphql",
    "IXSupportInboxIconShapeConverter",
    "ImageIconSource",
    "react",
    "useNullthrowsViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometSupportInboxItemListIconPreview_data.graphql")),
        a.data
      );
      var e = c("useNullthrowsViolation")(a.icon_url);
      a = d(
        "IXSupportInboxIconShapeConverter"
      ).convertIXIconShapeTypeToImageIconStyle(
        (a = a.icon_shape) != null ? a : "ROUNDED"
      );
      e = new (c("ImageIconSource"))(e, 20, 20);
      return i.jsx("div", {
        className: "q676j6op qypqp5cg",
        children: i.jsx(c("CometSkittleIcon.react"), {
          color: "gray",
          icon: e,
          shape: a,
          size: 40,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometAIProductTagSuggestionsQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "max_suggestions_per_photo",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "photo_ids" },
        c = [
          {
            kind: "Variable",
            name: "max_suggestions_per_photo",
            variableName: "max_suggestions_per_photo",
          },
          { kind: "Variable", name: "photo_ids", variableName: "photo_ids" },
        ],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "photo_id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "top_left",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "bottom_right",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "center_x",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "center_y",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "score",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        l = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 64 },
            { kind: "Literal", name: "sizing", value: "cover-fill-cropped" },
            { kind: "Literal", name: "width", value: 64 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
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
          storageKey: 'image(height:64,sizing:"cover-fill-cropped",width:64)',
        },
        m = {
          alias: null,
          args: null,
          concreteType: "CurrencyAmount",
          kind: "LinkedField",
          name: "listing_price",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "formatted_amount",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          concreteType: "CatalogItemUnitPrice",
          kind: "LinkedField",
          name: "per_unit_price",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "formatted_text",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "confidence",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "CometAIProductTagSuggestionsQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "ProductTagAISuggestionInfo",
              kind: "LinkedField",
              name: "product_tag_suggestions",
              plural: !0,
              selections: [
                d,
                {
                  alias: null,
                  args: null,
                  concreteType: "ProductTagProductBox",
                  kind: "LinkedField",
                  name: "suggestions",
                  plural: !0,
                  selections: [
                    e,
                    f,
                    g,
                    h,
                    i,
                    {
                      alias: null,
                      args: null,
                      concreteType: "ProductTagSuggestedProduct",
                      kind: "LinkedField",
                      name: "products",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "ProductItem",
                          kind: "LinkedField",
                          name: "product_item",
                          plural: !1,
                          selections: [
                            j,
                            k,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "primary_listing_photo",
                              plural: !1,
                              selections: [l],
                              storageKey: null,
                            },
                            m,
                            n,
                          ],
                          storageKey: null,
                        },
                        i,
                      ],
                      storageKey: null,
                    },
                    o,
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
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "CometAIProductTagSuggestionsQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "ProductTagAISuggestionInfo",
              kind: "LinkedField",
              name: "product_tag_suggestions",
              plural: !0,
              selections: [
                d,
                {
                  alias: null,
                  args: null,
                  concreteType: "ProductTagProductBox",
                  kind: "LinkedField",
                  name: "suggestions",
                  plural: !0,
                  selections: [
                    e,
                    f,
                    g,
                    h,
                    i,
                    {
                      alias: null,
                      args: null,
                      concreteType: "ProductTagSuggestedProduct",
                      kind: "LinkedField",
                      name: "products",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "ProductItem",
                          kind: "LinkedField",
                          name: "product_item",
                          plural: !1,
                          selections: [
                            j,
                            k,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "primary_listing_photo",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "__typename",
                                  storageKey: null,
                                },
                                l,
                                j,
                              ],
                              storageKey: null,
                            },
                            m,
                            n,
                          ],
                          storageKey: null,
                        },
                        i,
                      ],
                      storageKey: null,
                    },
                    o,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4198171616930399",
          metadata: {},
          name: "CometAIProductTagSuggestionsQuery",
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
  "CometAIProductTagSuggestionsUtil_photo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "CometAIProductTagSuggestionsUtil_photo",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometAIProductTagSuggestionsQuery.react",
  ["CometAIProductTagSuggestionsQuery.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h !== void 0 ? h : (h = b("CometAIProductTagSuggestionsQuery.graphql"));
    g["default"] = a;
  },
  98
);
__d(
  "ProductTagConfidence",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum").Mirrored(["HIGH", "LOW", "VERY_HIGH", "VERY_LOW"]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "ProductTagConfidenceUtils.facebook",
  ["$InternalEnumUtils", "ProductTagConfidence"],
  function (a, b, c, d, e, f, g) {
    a = d("$InternalEnumUtils").createToJSEnum(c("ProductTagConfidence"));
    b = d("$InternalEnumUtils").createFromJSEnum(c("ProductTagConfidence"));
    g.toJSEnum = a;
    g.fromJSEnum = b;
  },
  98
);
__d(
  "SharedAIProductTagUtils",
  ["ProductTagConfidenceUtils.facebook"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 5;
    function a(a) {
      var b = new Map();
      a.product_tag_suggestions.map(function (a) {
        var c = a.photo_id;
        a = a.suggestions;
        if (c == null || a == null) return;
        var e = [],
          f = [];
        a.map(function (a) {
          a = (a = a) != null ? a : {};
          var b = a.bottom_right,
            c = a.center_x,
            g = a.center_y,
            h = a.confidence,
            i = a.products,
            j = a.score;
          a = a.top_left;
          if (c == null || g == null || j == null) return;
          c = c * 100;
          g = g * 100;
          i = i == null ? void 0 : i[0];
          var k = i == null ? void 0 : i.score;
          h = d("ProductTagConfidenceUtils.facebook").toJSEnum(h);
          i = (i = i == null ? void 0 : i.product_item) != null ? i : {};
          var l = i.id,
            m = i.listing_price,
            n = i.name,
            o = i.per_unit_price;
          i = i.primary_listing_photo;
          b = {
            boundingBoxJSON: JSON.stringify({ bottomRight: b, topLeft: a }),
            boxScore: j,
            confidence: h,
            productID: l,
            productScore: k,
          };
          if ((h === "VERY_HIGH" || h === "HIGH") && e.length === 0) {
            if (l == null || n == null) return null;
            j = {
              id: l,
              image_uri:
                i == null ? void 0 : (a = i.image) == null ? void 0 : a.uri,
              metadata: { product_tag_type: "AI_HIGH_CONFIDENCE" },
              name: n,
              product_per_unit_price: o == null ? void 0 : o.formatted_text,
              product_price: m == null ? void 0 : m.formatted_amount,
            };
            k = babelHelpers["extends"]({}, b, {
              source: "AI_suggested",
              taggee: j,
              x: c,
              y: g,
            });
            e.push(k);
          } else h === "LOW" && f.push(babelHelpers["extends"]({}, b, { x: c, y: g }));
        });
        b.set(c, { knownSuggestions: e, unknownSuggestions: f });
      });
      return b;
    }
    function b(a, b, c, d) {
      return a >= c - h && a <= c + h && b >= d - h && b <= d + h;
    }
    g.USER_TAGGING_TOLERANCE = h;
    g.processAIProductTagSuggestionsQueryResponse = a;
    g.isPointNearbyPoint = b;
  },
  98
);
__d(
  "CometAIProductTagSuggestionsUtil.react",
  [
    "CometAIProductTagSuggestionsUtil_photo.graphql",
    "CometRelay",
    "SharedAIProductTagUtils",
    "orEmptyArray",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometAIProductTagSuggestionsUtil_photo.graphql"));
    function j(a, b) {
      return (
        a.productID === b.productID ||
        d("SharedAIProductTagUtils").isPointNearbyPoint(a.x, a.y, b.x, b.y)
      );
    }
    function k(a) {
      return c("orEmptyArray")(
        a == null
          ? void 0
          : (a = a.photo_product_tags) == null
          ? void 0
          : a
              .map(function (a) {
                var b;
                b = (b = a.product_item) == null ? void 0 : b.id;
                a = a.xy_location;
                var c = a == null ? void 0 : a.x;
                a = a == null ? void 0 : a.y;
                return c === void 0 ||
                  c === null ||
                  a === void 0 ||
                  a === null ||
                  b === null ||
                  b === void 0
                  ? null
                  : { productID: b, x: c, y: a };
              })
              .filter(Boolean)
      );
    }
    function a(a, b) {
      a = d("CometRelay").readInlineData(i, a);
      b =
        b == null
          ? void 0
          : b.get((b = a == null ? void 0 : a.id) != null ? b : "");
      var c = k(a);
      if (!b) return [];
      a =
        b == null
          ? void 0
          : b.filter(function (a) {
              var b =
                (c == null
                  ? void 0
                  : c.filter(function (b) {
                      return j({ productID: a.productID, x: a.x, y: a.y }, b);
                    }).length) > 0;
              return !b;
            });
      return a;
    }
    function e(a, b) {
      a = d("CometRelay").readInlineData(i, a);
      b =
        b == null
          ? void 0
          : b.get((b = a == null ? void 0 : a.id) != null ? b : "");
      var c = k(a);
      if (!b) return [];
      a =
        b == null
          ? void 0
          : b.filter(function (a) {
              var b =
                (c == null
                  ? void 0
                  : c.filter(function (b) {
                      return j({ productID: a.productID, x: a.x, y: a.y }, b);
                    }).length) > 0;
              return !b;
            });
      return a;
    }
    function f(a) {
      return !a;
    }
    g.getUntaggedKnownTags = a;
    g.getUntaggedUnknownTags = e;
    g.canUsePretagExperience = f;
  },
  98
);
__d(
  "VideoPlayerWithUnmutedPlay.react",
  ["VideoPlayerHooks", "react", "usePrevious"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a() {
      var a = d("VideoPlayerHooks").useController(),
        b = i(!1),
        e = d("VideoPlayerHooks").usePaused(),
        f = c("usePrevious")(e);
      h(
        function () {
          f === !0 &&
            e === !1 &&
            !b.current &&
            (a.setMuted(!1, "product_initiated"), (b.current = !0));
        },
        [a, e, f]
      );
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProductTaggingAiEvaluationFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744233");
    c = b("FalcoLoggerInternal").create("product_tagging_ai_evaluation", a);
    e.exports = c;
  },
  null
);
__d(
  "CometSimpleGrid.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        center: { justifyContent: "taijpn5t" },
        container: {
          alignItems: "gs1a9yip",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          flexWrap: "lhclo0ds",
        },
        dummy: { visibility: "kr9hpln1" },
        item: { flexBasis: "rj1gh0hx" },
        start: { justifyContent: "jifvfom9" },
      };
    function a(a) {
      var b = a.children,
        d = a.gap;
      d = d === void 0 ? 0 : d;
      var e = a.justify;
      e = e === void 0 ? "center" : e;
      var f = a.maxWidth;
      a = a.minWidth;
      var g = { margin: d / 2, maxWidth: f, minWidth: a };
      return h.jsxs("div", {
        className: c("stylex")(i.container, i[e]),
        style: { margin: -d / 2 },
        children: [
          b.map(function (a, b) {
            return h.jsx(
              "div",
              { className: c("stylex")(i.item), style: g, children: a },
              b
            );
          }),
          Array.from({ length: 10 }).map(function (a, b) {
            return h.jsx(
              "div",
              { className: c("stylex")(i.dummy), style: g },
              "dummy" + b
            );
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
  "BaseStyledRadio.react",
  ["BaseRadio.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback,
      j = {
        disabledBorder: {
          borderTop: "a2qmuk9k",
          borderEnd: "i7icyguk",
          borderBottom: "iywaf9al",
          borderStart: "crqf1j52",
        },
        radio: { display: "j83agx80" },
        radioBorder: {
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          boxSizing: "rq0escxv",
          display: "q9uorilb",
          flexShrink: "pfnyh3mw",
          height: "rgmg9uty",
          position: "l9j0dhe7",
          width: "b73ngqbp",
        },
        selectedBorder: {
          borderTop: "iv6tldhd",
          borderEnd: "cg3hf2bh",
          borderBottom: "t4dffd6c",
          borderStart: "j130xd0i",
        },
        sizeLarge: { height: "rgmg9uty", width: "b73ngqbp" },
        sizeMedium: { height: "jnigpg78", width: "odw8uiq3" },
        unselectedBorder: {
          borderTop: "pkycon04",
          borderEnd: "ikm2a2f7",
          borderBottom: "g6zz85f0",
          borderStart: "fdb45ksv",
        },
      };
    function a(a) {
      var b = a["aria-label"],
        d = a.checked,
        e = a.checkedBorderXStyle,
        f = a.checkedIcon,
        g = a.children,
        k = a.disabled;
      k = k === void 0 ? !1 : k;
      var l = a.id,
        m = a.name,
        n = a.onSelect,
        o = a.size;
      o = o === void 0 ? "large" : o;
      var p = a.tabIndex,
        q = a.testid,
        r = a.value;
      q = i(
        function () {
          n(r);
        },
        [n, r]
      );
      return h.jsxs(c("BaseRadio.react"), {
        "aria-label": b,
        checked: d,
        disabled: k,
        id: l,
        name: m,
        onValueChange: q,
        tabIndex: p,
        testid: void 0,
        value: r != null ? String(r) : null,
        xstyle: j.radio,
        children: [
          h.jsx("div", {
            className: c("stylex")(
              j.radioBorder,
              !k && d && j.selectedBorder,
              !k && !d && j.unselectedBorder,
              k && j.disabledBorder,
              o === "large" && j.sizeLarge,
              o === "medium" && j.sizeMedium,
              d && e
            ),
            children: d ? f : null,
          }),
          g,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometRadio.react",
  [
    "BaseStyledRadio.react",
    "CometPressableOverlay.react",
    "TetraText.react",
    "react",
    "stylex",
    "useCometPressableEventHandlers",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        radioDisabled: { backgroundColor: "c98fg2ug" },
        radioSelected: {
          backgroundColor: "is6700om",
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          height: "cyypbtt7",
          position: "pmk7jnqg",
          width: "fwizqjfa",
        },
        root: {
          WebkitTapHighlightColor: "oajrlxb2",
          alignItems: "bp9cbjyn",
          cursor: "nhd2j8a9",
          display: "j83agx80",
          paddingBottom: "sj5x9vvc",
          paddingTop: "cxgpxx05",
          position: "l9j0dhe7",
          touchAction: "f1sip0of",
        },
        selectedSizeLarge: { start: "sgaxgfmg", top: "tmxdrx1h" },
        selectedSizeMedium: { start: "tkxwya3v", top: "bk00n993" },
        text: { marginStart: "h676nmdw" },
      };
    function a(a) {
      var b = a.checked,
        d = a.disabled;
      d = d === void 0 ? !1 : d;
      var e = a.id,
        f = a.label,
        g = a.labelIsHidden;
      g = g === void 0 ? !1 : g;
      var j = a.name,
        k = a.onChange,
        l = a.reduceEmphasis;
      l = l === void 0 ? !1 : l;
      var m = a.size;
      m = m === void 0 ? "large" : m;
      var n = a.testid;
      n = a.value;
      a = a.xstyle;
      var o = c("useCometPressableEventHandlers")({ disabled: d }),
        p = o[0];
      o[1];
      var q = o[2],
        r = q.focusVisible,
        s = q.hovered;
      q = q.pressed;
      o = o[3];
      return h.jsxs(
        "label",
        babelHelpers["extends"]({ className: c("stylex")(i.root, a) }, o, {
          ref: p,
          children: [
            h.jsx(c("BaseStyledRadio.react"), {
              "aria-label": g ? f : void 0,
              checked: b,
              checkedIcon: h.jsx("span", {
                className: c("stylex")(
                  i.radioSelected,
                  d && i.radioDisabled,
                  m === "xlarge" && i.selectedSizeLarge,
                  m === "large" && i.selectedSizeLarge,
                  m === "medium" && i.selectedSizeMedium
                ),
              }),
              disabled: d,
              id: e,
              name: j,
              onSelect: k,
              size: m,
              testid: void 0,
              value: n,
              children: h.jsx(c("CometPressableOverlay.react"), {
                focusVisible: r,
                hovered: s,
                offset: 8,
                pressed: q,
                radius: "50%",
              }),
            }),
            g
              ? null
              : h.jsx("div", {
                  className: c("stylex")(i.text),
                  children: h.jsx(c("TetraText.react"), {
                    color: d ? "disabled" : "primary",
                    type: m === "xlarge" ? "button1" : l ? "body3" : "button2",
                    children: f,
                  }),
                }),
          ],
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometProgressRing.react",
  [
    "BaseLoadingStateElement.react",
    "CometProgressRingUtils",
    "performanceNavigationStart",
    "react",
    "recoverableViolation",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useLayoutEffect,
      l = b.useMemo,
      m = b.useRef,
      n = b.useState,
      o = 2,
      p = {
        leftContainer: {
          bottom: "i09qtzwb",
          end: "oi4qjx4h",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        rightContainer: {
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "pmk7jnqg",
          start: "kfkz5moi",
          top: "kr520xx4",
        },
        root: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        rootDiv: { position: "l9j0dhe7" },
        svgFromLeft: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          end: "n1wid1uc",
          transformOrigin: "ibn2g74t",
        },
        svgFromRight: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          top: "kr520xx4",
          start: "s084nw3x",
          transformOrigin: "ibn2g74t",
        },
      },
      q = d("CometProgressRingUtils").getCubicBezierPercentageFunc(
        0.45,
        0,
        0.25,
        0.85
      );
    function a(a) {
      var b = a.beginningPercentage,
        e = a.color,
        f = a.duration,
        g = a.explicitStartTime,
        t = a.onComplete,
        u = a.pause,
        v = a.percentage,
        w = a.size,
        x = a.type;
      x !== "default" &&
        v != null &&
        c("recoverableViolation")(
          "percentage should only be applied to default type",
          "comet_ui"
        );
      var y = m(null),
        z = m(null),
        A = m(null),
        B = m(null),
        C = m(null);
      a = n(!0);
      var D = a[0],
        E = a[1];
      a = r(x, v, b);
      b = a.completedPercentage;
      var F = a.finalPercentage;
      a = a.startPercentage;
      var G = m(a),
        H = m(F),
        I = m(b);
      a = d("CometProgressRingUtils").getRingColor(e);
      var J = a.backgroundColor,
        K = a.foregroundColor,
        L = i(
          function (a) {
            var b = z.current,
              d = A.current;
            if (b == null || d == null) return;
            if (!(b instanceof SVGSVGElement) || !(d instanceof SVGSVGElement))
              return;
            if (x === "default" && u === !0) return;
            C.current == null &&
              (C.current =
                g != null ? g - c("performanceNavigationStart")() : a);
            if (x === "estimated")
              if (I.current > 75)
                I.current += 0.3 * Math.pow((100 - I.current) / 50, 2);
              else {
                var e = (a - C.current) / f / 1e3;
                e = q(e);
                I.current = e * 75;
              }
            else if (x === "default" && I.current < H.current) {
              e = ((a - C.current) / 1e3 / f) * 100;
              I.current = Math.min(e, 100);
            } else if (x === "count-down" && I.current > H.current) {
              e = ((a - C.current) / 1e3 / f) * 100;
              I.current = G.current - e;
              I.current = Math.max(I.current, 0);
            }
            a = (Math.max(0, Math.min(100, I.current)) / 100) * 360;
            b.style.transform = "rotate(" + Math.min(a, 180) + "deg)";
            d.style.transform = "rotate(" + Math.max(a - 180, 0) + "deg)";
            s(x, I.current, v)
              ? (window.cancelAnimationFrame(B.current),
                (b.style.opacity = "0"),
                (d.style.opacity = "0"),
                (C.current = null),
                (B.current = null),
                y.current instanceof SVGSVGElement &&
                  (y.current.style.opacity = "0"),
                t && t())
              : (B.current = window.requestAnimationFrame(L));
          },
          [f, g, t, u, v, x]
        );
      k(
        function () {
          D && E(!D);
        },
        [D]
      );
      j(
        function () {
          if (window.requestAnimationFrame != null) {
            B.current = window.requestAnimationFrame(L);
            return function () {
              B.current != null &&
                ((C.current = null),
                window.cancelAnimationFrame(B.current),
                (B.current = null));
            };
          }
        },
        [w, L]
      );
      var M = (w - o) * Math.PI;
      F = l(
        function () {
          return h.jsxs(h.Fragment, {
            children: [
              h.jsx("svg", {
                className: c("stylex")(p.root),
                height: w,
                ref: y,
                viewBox: "0 0 " + w + " " + w,
                width: w,
                children: h.jsx("circle", {
                  cx: w / 2,
                  cy: w / 2,
                  fill: "none",
                  "non-scaling-stroke": "non-scaling-stroke",
                  r: (w - o) / 2,
                  stroke: J,
                  strokeLinecap: "round",
                  strokeWidth: o,
                }),
              }),
              h.jsx("div", {
                className: c("stylex")(p.rightContainer),
                children: h.jsx("svg", {
                  className: c("stylex")(p.svgFromRight),
                  height: w,
                  ref: z,
                  viewBox: "0 0 " + w + " " + w,
                  width: w,
                  children: h.jsx("circle", {
                    cx: w / 2,
                    cy: w / 2,
                    fill: "none",
                    "non-scaling-stroke": "non-scaling-stroke",
                    r: (w - o) / 2,
                    stroke: K,
                    strokeDasharray: M / 2,
                    strokeDashoffset: (3 * M) / 4,
                    strokeWidth: o,
                    style: { visibility: D ? "hidden" : void 0 },
                  }),
                }),
              }),
              h.jsx("div", {
                className: c("stylex")(p.leftContainer),
                children: h.jsx("svg", {
                  className: c("stylex")(p.svgFromLeft),
                  height: w,
                  ref: A,
                  viewBox: "0 0 " + w + " " + w,
                  width: w,
                  children: h.jsx("circle", {
                    cx: w / 2,
                    cy: w / 2,
                    fill: "none",
                    "non-scaling-stroke": "non-scaling-stroke",
                    r: (w - o) / 2,
                    stroke: K,
                    strokeDasharray: M / 2,
                    strokeDashoffset: M / 4,
                    strokeWidth: o,
                    style: { visibility: D ? "hidden" : void 0 },
                  }),
                }),
              }),
            ],
          });
        },
        [w, J, K, M, D]
      );
      return h.jsx(c("BaseLoadingStateElement.react"), {
        style: { height: w, width: w },
        xstyle: p.rootDiv,
        children: F,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function r(a, b, c) {
      switch (a) {
        case "default":
          return {
            completedPercentage: (a = c) != null ? a : 0,
            finalPercentage: (a = b) != null ? a : 100,
            startPercentage: (b = c) != null ? b : 0,
          };
        case "count-down":
          return {
            completedPercentage: 100,
            finalPercentage: 0,
            startPercentage: 100,
          };
        case "estimated":
          return {
            completedPercentage: 0,
            finalPercentage: 75,
            startPercentage: 0,
          };
        default:
          return {
            completedPercentage: 0,
            finalPercentage: 0,
            startPercentage: 0,
          };
      }
    }
    function s(a, b, c) {
      return a === "count-down"
        ? b <= 0 || b > 100
        : b >= ((a = c) != null ? a : 100);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometResharesConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 3e3;
    f.UNDO_DELAY_MS = a;
  },
  66
);
__d(
  "CometTextInputWithIcon.react",
  [
    "BaseTextInput.react",
    "CometScreenReaderText.react",
    "TetraIcon.react",
    "react",
    "stylex",
    "useBaseInputValidators",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        disabledInput: { cursor: "rj84mg9z" },
        iconEnd: { end: "dpjh1vo5", position: "pmk7jnqg", top: "plgsh5y4" },
        iconStart: { position: "pmk7jnqg", start: "dnzpfbms", top: "plgsh5y4" },
        root: { color: "oo9gr5id", fontSize: "jq4qci2q", position: "l9j0dhe7" },
        textInput: {
          backgroundColor: "cwj9ozl2",
          borderTop: "l6v480f0",
          borderEnd: "maa8sdkg",
          borderBottom: "s1tcr66n",
          borderStart: "aypy0576",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          boxSizing: "rq0escxv",
          color: "oo9gr5id",
          fontSize: "l94mrbxd",
          fontWeight: "ekzkrbhg",
          height: "tv7at329",
          width: "k4urcfbm",
        },
        textInputEndIcon: {
          paddingTop: "jb3vyjys",
          paddingEnd: "bowiujrr",
          paddingBottom: "qt6c0cv9",
          paddingStart: "h4z51re5",
        },
        textInputStartIcon: {
          paddingTop: "jb3vyjys",
          paddingEnd: "rv4hoivh",
          paddingBottom: "qt6c0cv9",
          paddingStart: "jg4yhqs5",
        },
      };
    function a(a, b) {
      var d,
        e = a["aria-describedby"],
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.icon,
        j = a.iconColor,
        k = a.iconPlacement;
      k = k === void 0 ? "start" : k;
      var l = a.label,
        m = a.validator,
        n = a.value;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "aria-describedby",
        "disabled",
        "icon",
        "iconColor",
        "iconPlacement",
        "label",
        "validator",
        "value",
      ]);
      var o = c("useCometUniqueID")();
      m = c("useBaseInputValidators")({ validator: m, value: String(n) });
      var p = m.topResultReason;
      m = m.topResultType;
      e =
        p != null
          ? o + " " + ((d = e) != null ? d : "")
          : (d = e) != null
          ? d
          : void 0;
      return h.jsxs("div", {
        className: c("stylex")(i.root),
        children: [
          k === "start"
            ? h.jsx("div", {
                className: c("stylex")(i.iconStart),
                children: h.jsx(c("TetraIcon.react"), {
                  color: j,
                  icon: g,
                  size: 16,
                }),
              })
            : null,
          h.jsx(
            c("BaseTextInput.react"),
            babelHelpers["extends"](
              {
                "aria-describedby": e,
                "aria-invalid": m === "ERROR",
                "aria-label": l,
                disabled: f,
                value: n,
                xstyle: [
                  f && i.disabledInput,
                  i.textInput,
                  k === "start" && i.textInputStartIcon,
                  k === "end" && i.textInputEndIcon,
                ],
              },
              a,
              { ref: b }
            )
          ),
          k === "end"
            ? h.jsx("div", {
                className: c("stylex")(i.iconEnd),
                children: h.jsx(c("TetraIcon.react"), {
                  color: j,
                  icon: g,
                  size: 16,
                }),
              })
            : null,
          p != null
            ? h.jsx(c("CometScreenReaderText.react"), { id: o, text: p })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "updateTagReducer",
  ["SharedAIProductTagUtils", "orEmptyArray"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, c) {
      return d("SharedAIProductTagUtils").isPointNearbyPoint(a, b, c.x, c.y);
    }
    function a(a, b) {
      switch (b.type) {
        case "REMOVE_TAG":
          return babelHelpers["extends"]({}, a, {
            tags: c("orEmptyArray")(a.tags).filter(function (a) {
              return (
                (a == null
                  ? void 0
                  : (a = a.taggee) == null
                  ? void 0
                  : a.id) !== b.tagToDelete
              );
            }),
          });
        case "ADD_TAG":
          return babelHelpers["extends"]({}, a, {
            tags: [].concat(c("orEmptyArray")(a.tags), [b.newTag]),
            unknownProductTagSuggestions: c("orEmptyArray")(
              a.unknownProductTagSuggestions
            ).filter(function (a) {
              return !h(a.x, a.y, b.newTag);
            }),
          });
        case "SET_VIDEO_PRODUCT_TAGS":
          return babelHelpers["extends"]({}, a, {
            videoProductTags: c("orEmptyArray")(b.videoProductTags),
          });
        case "ADD_KNOWN_AI_SUGGESTED_PRODUCT_TAG":
          var d = {
            source: b.newAISuggestedProductTag.source,
            taggee: b.newAISuggestedProductTag.taggee,
            x: b.newAISuggestedProductTag.x,
            y: b.newAISuggestedProductTag.y,
          };
          return babelHelpers["extends"]({}, a, {
            tags:
              c("orEmptyArray")(a.tags).filter(function (a) {
                return a.taggee.id === d.taggee.id;
              }).length > 0
                ? c("orEmptyArray")(a.tags)
                : [].concat(c("orEmptyArray")(a.tags), [d]),
          });
        case "ADD_UNKNOWN_AI_SUGGESTED_PRODUCT_TAG":
          return babelHelpers["extends"]({}, a, {
            unknownProductTagSuggestions:
              c("orEmptyArray")(a.unknownProductTagSuggestions).includes(
                b.newUnknownSuggestedProductTag
              ) ||
              c("orEmptyArray")(a.tags).some(function (a) {
                return h(
                  b.newUnknownSuggestedProductTag.x,
                  b.newUnknownSuggestedProductTag.y,
                  a
                );
              })
                ? c("orEmptyArray")(a.unknownProductTagSuggestions)
                : [].concat(c("orEmptyArray")(a.unknownProductTagSuggestions), [
                    b.newUnknownSuggestedProductTag,
                  ]),
          });
        case "RESET":
          if (b.finalMutatedMediaAttachment.fileType === "PHOTO")
            return babelHelpers["extends"]({}, a, {
              tags: c("orEmptyArray")(
                b.finalMutatedMediaAttachment.data.tags
              ).filter(Boolean),
            });
      }
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CixWarningScreensFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743358");
    c = b("FalcoLoggerInternal").create("cix_warning_screens", a);
    e.exports = c;
  },
  null
);
__d(
  "WarningScreenType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      GRAPHIC: "Violence and Gore",
      OBJECTIONABLE: "Sexual",
      HATE: "Hate",
      CHILD_ABUSE_NON_SEXUAL: "Child Abuse (non-sexual)",
      SENSITIVE: "Sensitive",
      CRUEL: "Cruel",
      MATURE_ONLY_14_AND_OVER: "Mature Only 14 And Over",
      SENSITIVE_TEXT: "Sensitive Text",
      FALSE_NEWS: "False News",
      FALSE_HEADLINE_NEWS: "False Headline News",
      MISLEADING_NEWS: "Misleading News",
      ALTERED_MEDIA: "Altered Media",
      MISSING_CONTEXT: "Missing Context",
      GOVERNMENT_CORRECTION: "Government Correction",
      CENSUS_BORDERLINE: "Census Borderline",
      WIDELY_DEBUNKED_HOAX_COVID: "Widely Debunked Hoax Covid",
      HEALTH_GENERIC: "Health Generic",
      GENERIC_INFORM_TREATMENT: "Generic Inform Treatment",
      CLIMATE_GENERIC_INFORM_TREATMENT:
        "Climate Science Generic Inform Treatment",
      NEWSWORTHY: "Newsworthy",
      SELF_APPLIED_GRAPHIC_VIOLENCE: "Self Applied Graphic Violence",
      CIVIC_VOTER_INFORM_TREATMENT: "Civic Voter Inform Treatment",
      CIVIC_VOTER_INFORM_TREATMENT_FOR_MM:
        "Civic Voter Inform Treatment For Myanmar",
      CIVIC_VOTER_INFORM_TREATMENT_FOR_BR:
        "Civic Voter Inform Treatment For Brazil",
      CIVIC_VOTER_INFORM_TREATMENT_FOR_ID:
        "Civic Voter Inform Treatment For Indonesia",
      CIVIC_FACTS_ABOUT_VOTING_INFORM_TREATMENT:
        "Civic Facts About Voting Inform Treatment",
      HACK_AND_LEAK: "Hack And Leak",
      GRAPHIC_MISINFO: "Graphic Misinfo",
      WIDELY_DEBUNKED_HOAX_VACCINE: "Widely Debunked Hoax Vaccine",
      WORK_RECRUITING_GROUP_POST: "Recruiting Group Post",
      MISINFORMATION: "Misinformation",
      GENERIC_CIVIC: "Generic Civic",
      COMPASS: "Compass",
      GENERIC_INFORM: "Generic Inform",
      DUMMY_GIT: "Dummy GIT",
      ANIMAL_VIOLENCE: "Animal Violence",
      POLITICAL: "Politically Charged",
      PROFANITY: "Profanity",
      CENSUS_MISINFO: "Census Misinfo",
      COVID_ELECTION_BORDERLINE: "Covd Election Borderline",
    });
    f["default"] = a;
  },
  66
);
__d(
  "CometWarningScreenClientLogger",
  ["CixWarningScreensFalcoEvent", "WarningScreenType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b,
        d =
          (b = a.contentIDRaw) == null
            ? void 0
            : b
                .split(":")
                .filter(function (a) {
                  return a !== "";
                })
                .pop();
      c("CixWarningScreensFalcoEvent").log(function () {
        return {
          action: a.action,
          content_id_raw: d,
          event: a.event,
          inform_session_id: a.session_id,
          integrity_ui_element: a.integrityUIElement,
          product: a.product,
          render_type: a.renderType,
          story_ent_identifier_graphql_id: a.storyID,
          story_render_location: a.storyRenderLocation,
          surface: a.surface,
          top_warning_screen_category: h(a.objectionableCategory),
        };
      });
    }
    function h(a) {
      if (a == null) return null;
      a = a;
      return c("WarningScreenType")[a];
    }
    g.logInformTreatmentEvent = a;
  },
  98
);
__d(
  "CometProductTaggingConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 7;
    b = 16;
    c = 8;
    d = 46;
    f.DOT_HINT_BORDER_SIZE = a;
    f.DOT_HINT_DOT_SIZE = b;
    f.DOT_HINT_PADDING = c;
    f.TOTAL_DOT_SIZE = d;
  },
  66
);
__d(
  "adjustFaceboxPosition",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.boxSize,
        c = a.imageDimension;
      a = a.originalPos;
      return a < 0 ? 0 : a + b > c ? c - b : a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometMediaRemoveTagFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743382");
    c = b("FalcoLoggerInternal").create("comet_media_remove_tag", a);
    e.exports = c;
  },
  null
);
__d(
  "CometMediaVpvdFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743384");
    c = b("FalcoLoggerInternal").create("comet_media_vpvd", a);
    e.exports = c;
  },
  null
);
__d(
  "CometFeedStoryUnavailableAttachmentStyle_styleTypeRenderer$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          args: null,
          fragment: b(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
          ),
          kind: "FragmentSpread",
        },
      ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryUnavailableAttachmentStyle_styleTypeRenderer$normalization",
        selections: [
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_prod_eligible",
                storageKey: null,
              },
            ],
            type: "StoryAttachmentStyleRendererUnion",
            abstractKey: "__isStoryAttachmentStyleRendererUnion",
          },
          {
            alias: null,
            args: null,
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "attachment",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "description",
                plural: !1,
                selections: a,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "title_with_entities",
                plural: !1,
                selections: a,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unavailable_attachment_style",
            storageKey: null,
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryUnavailableAttachmentStyle_styleTypeRenderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometTextWithEntitiesRelay_textWithEntities",
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryUnavailableAttachmentStyle_styleTypeRenderer",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion",
          },
          {
            alias: null,
            args: null,
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "attachment",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "description",
                plural: !1,
                selections: a,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "title_with_entities",
                plural: !1,
                selections: a,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unavailable_attachment_style",
            storageKey: null,
          },
        ],
        type: "StoryAttachmentUnavailableStyleRenderer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "UnavailableAttachmentStyle",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ COMPACT: "COMPACT", FULL_WIDTH: "FULL_WIDTH" });
    f["default"] = a;
  },
  66
);
__d(
  "CometFeedStoryUnavailableAttachmentStyle.react",
  [
    "ix",
    "CometFeedStandardInlineAttachmentContainer.react",
    "CometFeedStoryUnavailableAttachmentStyle_styleTypeRenderer.graphql",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "CometTintedIcon.react",
    "TetraTextPairing.react",
    "UnavailableAttachmentStyle",
    "fbicon",
    "getJSEnumSafe",
    "react",
    "useCometFeedStoryAttachmentMatchDebugger",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "CometFeedStoryUnavailableAttachmentStyle_styleTypeRenderer.graphql"
            )),
        a.styleTypeRenderer
      );
      c("useCometFeedStoryAttachmentMatchDebugger")(a);
      var f = c("getJSEnumSafe")(
        c("UnavailableAttachmentStyle"),
        a.unavailable_attachment_style
      );
      e = (e = a.attachment) == null ? void 0 : e.description;
      a = (a = a.attachment) == null ? void 0 : a.title_with_entities;
      var g =
        "ozuftl9m tvfksri0 btwxx1t3 j83agx80 m8zidbmv ccq6eem2 ellw4o9j kzizifcz";
      f === "FULL_WIDTH" && (g = "btwxx1t3 j83agx80 kzizifcz ccq6eem2");
      return j.jsx(c("CometFeedStandardInlineAttachmentContainer.react"), {
        children: j.jsxs("div", {
          className: g,
          children: [
            j.jsx("div", {
              className: "n1l5q3vz ozuftl9m tvfksri0",
              children: j.jsx(c("CometTintedIcon.react"), {
                color: "fds-primary-icon",
                icon: d("fbicon")._(h("497246"), 24),
              }),
            }),
            j.jsx("div", {
              className: "n1l5q3vz tvfksri0 n851cfcs",
              children: j.jsx(c("TetraTextPairing.react"), {
                body:
                  e != null
                    ? j.jsx(c("CometTextWithEntitiesRelay.react"), {
                        textWithEntities: e,
                      })
                    : null,
                bodyColor: "secondary",
                headline:
                  a != null
                    ? j.jsx(c("CometTextWithEntitiesRelay.react"), {
                        textWithEntities: a,
                      })
                    : a,
                level: 4,
                reduceEmphasis: !0,
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
  "updateSaveStatusReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      switch (b.type) {
        case "SET_SAVE_STATE":
          return babelHelpers["extends"]({}, a, { isSaving: b.isSaving });
        case "RESET":
          return babelHelpers["extends"]({}, a, { isSaving: !1 });
        case "REFRESH_STATE":
          return babelHelpers["extends"]({}, a);
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
