if (self.CavalryLogger) {
  CavalryLogger.start_js(["7XDpvNn"]);
}

__d(
  "StoriesCometCardStatusSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          concreteType: "StoryCardStoryInfo",
          kind: "LinkedField",
          name: "story_card_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "thread_status",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "StoriesCometCardStatusSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "StoryCardStatusSubscribeResponsePayload",
              kind: "LinkedField",
              name: "story_card_status_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "story",
                  plural: !1,
                  selections: [c],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "StoriesCometCardStatusSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "StoryCardStatusSubscribeResponsePayload",
              kind: "LinkedField",
              name: "story_card_status_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "story",
                  plural: !1,
                  selections: [
                    c,
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
          ],
        },
        params: {
          id: "2776252045744354",
          metadata: { subscriptionName: "story_card_status_subscribe" },
          name: "StoriesCometCardStatusSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesCreateMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "story_id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logging_token",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "StoriesCreateMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "StoryCreateResponsePayload",
              kind: "LinkedField",
              name: "story_create",
              plural: !1,
              selections: [
                c,
                d,
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
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "useProfileCometStoryStatus_user",
                            },
                          ],
                          type: "User",
                          abstractKey: null,
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
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "StoriesCreateMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "StoryCreateResponsePayload",
              kind: "LinkedField",
              name: "story_create",
              plural: !1,
              selections: [
                c,
                d,
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
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
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
                              args: [
                                { kind: "Literal", name: "first", value: 1 },
                              ],
                              concreteType:
                                "DirectInboxBroadcastBucketConnection",
                              kind: "LinkedField",
                              name: "story_bucket",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "DirectMessageThreadBucket",
                                  kind: "LinkedField",
                                  name: "nodes",
                                  plural: !0,
                                  selections: [
                                    e,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Story",
                                      kind: "LinkedField",
                                      name: "first_story_to_show",
                                      plural: !1,
                                      selections: [
                                        e,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryCardSeenState",
                                          kind: "LinkedField",
                                          name: "story_card_seen_state",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "is_seen_by_viewer",
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
                              storageKey: "story_bucket(first:1)",
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        e,
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
          id: "4400460223318043",
          metadata: {},
          name: "StoriesCreateMutation",
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
  "StoriesCometCardStatusSubscription",
  ["CometRelay", "StoriesCometCardStatusSubscription.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("StoriesCometCardStatusSubscription.graphql"));
    function a(a, b, c) {
      b = { input: b };
      return d("CometRelay").requestSubscription(a, {
        onNext: c,
        subscription: i,
        variables: b,
      });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "StoriesModuleUploadStoryWwwQPLEvent",
  ["cr:7182"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:7182");
  },
  98
);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d(
  "blueimp-canvas-to-blob-3.14.0",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = {};
    var g = { exports: b },
      h;
    function i() {
      (function (a) {
        var b = a.HTMLCanvasElement && a.HTMLCanvasElement.prototype,
          c =
            a.Blob &&
            (function () {
              try {
                return Boolean(new Blob());
              } catch (a) {
                return !1;
              }
            })(),
          d =
            c &&
            a.Uint8Array &&
            (function () {
              try {
                return new Blob([new Uint8Array(100)]).size === 100;
              } catch (a) {
                return !1;
              }
            })(),
          e =
            a.BlobBuilder ||
            a.WebKitBlobBuilder ||
            a.MozBlobBuilder ||
            a.MSBlobBuilder,
          f = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
          i =
            (c || e) &&
            a.atob &&
            a.ArrayBuffer &&
            a.Uint8Array &&
            function (a) {
              var b, g, h, i;
              b = a.match(f);
              if (!b) throw new Error("invalid data URI");
              g = b[2] ? b[1] : "text/plain" + (b[3] || ";charset=US-ASCII");
              h = !!b[4];
              a = a.slice(b[0].length);
              h ? (b = atob(a)) : (b = decodeURIComponent(a));
              h = new ArrayBuffer(b.length);
              a = new Uint8Array(h);
              for (i = 0; i < b.length; i += 1) a[i] = b.charCodeAt(i);
              if (c) return new Blob([d ? a : h], { type: g });
              b = new e();
              b.append(h);
              return b.getBlob(g);
            };
        a.HTMLCanvasElement &&
          !b.toBlob &&
          (b.mozGetAsFile
            ? (b.toBlob = function (a, c, d) {
                var e = this;
                setTimeout(function () {
                  d && b.toDataURL && i
                    ? a(i(e.toDataURL(c, d)))
                    : a(e.mozGetAsFile("blob", c));
                });
              })
            : b.toDataURL &&
              i &&
              (b.toBlob = function (a, b, c) {
                var d = this;
                setTimeout(function () {
                  a(i(d.toDataURL(b, c)));
                });
              }));
        typeof h === "function" && h.amd
          ? h(function () {
              return i;
            })
          : typeof g === "object" && g.exports
          ? (g.exports = i)
          : (a.dataURLtoBlob = i);
      })(window);
    }
    var j = !1;
    function k() {
      j || ((j = !0), i());
      return g.exports;
    }
    function a(a) {
      switch (a) {
        case void 0:
          return k();
      }
    }
    e.exports = a;
  },
  null
);
__d(
  "blueimp-canvas-to-blob",
  ["blueimp-canvas-to-blob-3.14.0"],
  function (a, b, c, d, e, f) {
    e.exports = b("blueimp-canvas-to-blob-3.14.0")();
  },
  null
);
__d(
  "StoriesCreatePhotoUploadUtils",
  [
    "FBLogger",
    "MediaUploadFailureFalcoEvent",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "StoriesModuleUploadStoryWwwQPLEvent",
    "StoriesUtils",
    "blueimp-canvas-to-blob",
    "cometComposerMediaUploadLogger",
    "cometUniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("blueimp-canvas-to-blob");
    function a(a, b, c, d) {
      if (
        b == null ||
        d ===
          (c == null
            ? void 0
            : (d = c.uploadingInfo) == null
            ? void 0
            : d.photoDescriptorID)
      )
        return;
      c = b.bottomColor;
      d = b.topColor;
      b = a.getContext("2d");
      b.save();
      var e = b.createLinearGradient(0, 0, a.width, a.height);
      d != null && e.addColorStop(0, d);
      c != null && e.addColorStop(1, c);
      b.fillStyle = e;
      b.fillRect(0, 0, a.width, a.height);
      b.restore();
    }
    function e(a, b, d, e, f) {
      if (
        d === ((d = b.uploadingInfo) == null ? void 0 : d.photoDescriptorID)
      ) {
        e();
        return;
      }
      var g = b.displayedURI;
      if (g == null) {
        e();
        return;
      }
      var h = b.bounds,
        i = b.rotation,
        j = a.width,
        k = a.height;
      d = i % 180 !== 0 ? [k, j] : [j, k];
      var l = d[0],
        m = d[1],
        n = new Image();
      n.crossOrigin = "Anonymous";
      n.onerror = function () {
        var a = "Failed to load image: " + g;
        c("FBLogger")("fbstories").warn(a);
        f(a);
      };
      n.onload = function () {
        var b = a.getContext("2d"),
          c = h.x * l,
          d = h.y * m,
          f = h.width * l,
          g = h.height * m;
        b.save();
        b.translate(j / 2, k / 2);
        b.rotate((i * Math.PI) / 180);
        b.translate(-l / 2, -m / 2);
        b.drawImage(n, 0, 0, n.width, n.height, c, d, f, g);
        b.restore();
        e();
      };
      n.src = g;
    }
    function f(a, b, c, d) {
      return [
        a == null ? void 0 : a.bottomColor,
        a == null ? void 0 : a.topColor,
        b == null ? void 0 : b.rotation,
        b == null ? void 0 : b.offset.dx,
        b == null ? void 0 : b.offset.dy,
        b == null ? void 0 : b.scale,
        c,
        d,
      ].join();
    }
    function h(a) {
      if (a < 1e5) return "extra-small";
      else if (a < 3e5) return "small";
      else if (a < 5e5) return "medium";
      else if (a < 75e4) return "large";
      else return "extra-large";
    }
    function i(a, b, e, f, g, i, j, k) {
      var l,
        m = function (a, d) {
          var f = function () {
              b.successObserver.unsubscribe(g), b.errorObserver.unsubscribe(h);
            },
            g = function (b) {
              b.uploadID === a &&
                (d &&
                  c("cometComposerMediaUploadLogger")(
                    {
                      fields: { media_id: b.entID, media_type: "PHOTO" },
                      type: "MEDIA_UPLOAD_SUCCESS",
                    },
                    e
                  ),
                f(),
                j(b.entID));
            },
            h = function (b) {
              b.uploadID === a &&
                (d &&
                  (c("FBLogger")("fbstories").warn(
                    "Photo upload failed: %s",
                    b.error != null ? b.error.toString() : ""
                  ),
                  c("MediaUploadFailureFalcoEvent").log(function () {
                    var a;
                    return {
                      creation_session_id: e,
                      error_info: (a = b.error) == null ? void 0 : a.toString(),
                    };
                  })),
                f(),
                k(b.error));
            };
          b.successObserver.subscribe(g);
          b.errorObserver.subscribe(h);
        };
      l = (l = f.uploadingInfo) == null ? void 0 : l.photoDescriptorID;
      if (l != null && g === l) {
        g = f.uploadingInfo;
        if (g != null)
          if (g.entID != null) {
            j(g.entID);
            return g.uploadID;
          } else {
            l = g.uploadID;
            if (l != null) {
              m(l, !1);
              return l;
            }
          }
      }
      var n = c("cometUniqueID")();
      f = d("StoriesUtils").getBlobImageParams();
      g = f.format;
      l = f.quality;
      a.toBlob(
        function (a) {
          i != null &&
            c("QuickPerformanceLogger").markerPoint(i, "blob created");
          a = a;
          a.uploadID = n;
          var d = h(a.size);
          c("QPLUserFlow").addPoint(
            c("StoriesModuleUploadStoryWwwQPLEvent"),
            "Blob created",
            d != null ? { data: { string: { fileSizeToLog: d } } } : void 0
          );
          m(n, !0);
          c("cometComposerMediaUploadLogger")(
            {
              fields: { media_id: n, media_type: "PHOTO" },
              type: "MEDIA_UPLOAD_START",
            },
            e
          );
          b.upload([[a, "PHOTO"]]);
        },
        g,
        l
      );
      return n;
    }
    g.drawBlurredBackgroundOnCanvas = a;
    g.drawPhotoOnCanvas = e;
    g.generatePhotoDescriptorID = f;
    g.getFileSizeLogName = h;
    g.uploadPhoto = i;
  },
  98
);
__d(
  "StoriesCreateBlurredBgTransformer",
  ["QuickPerformanceLogger", "StoriesCreatePhotoUploadUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      var f = a.blurredBg;
      a = a.photoData;
      if (f == null || f.topColor == null || f.bottomColor == null) {
        e(b);
        return;
      }
      var g = b.canvas,
        h = b.photoDescriptorID,
        i = b.qplEvent;
      d("StoriesCreatePhotoUploadUtils").drawBlurredBackgroundOnCanvas(
        g,
        f,
        a,
        h
      );
      i != null &&
        c("QuickPerformanceLogger").markerPoint(
          i,
          "blurred background drawn to canvas"
        );
      e(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateCTALinkTransformer",
  ["StoriesCreateMediaTypeEnum"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      var e;
      if (
        (((e = a.formData) == null ? void 0 : e.mediaType) !==
          c("StoriesCreateMediaTypeEnum").PHOTO &&
          ((e = a.formData) == null ? void 0 : e.mediaType) !==
            c("StoriesCreateMediaTypeEnum").VIDEO) ||
        ((e = a.ctaLinkData) == null ? void 0 : e.ctaType) == null ||
        ((e = a.ctaLinkData) == null ? void 0 : e.link) == null
      ) {
        d(b);
        return;
      }
      d(
        babelHelpers["extends"]({}, b, {
          call_to_action_data: {
            is_cta_share_post: !0,
            link: a.ctaLinkData.link,
            type: a.ctaLinkData.ctaType,
          },
        })
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateOverlayTransformer",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "StoriesGating",
    "StoriesModuleUploadStoryWwwQPLEvent",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")("html2canvas-v1.0-rc_1").__setRef(
        "StoriesCreateOverlayTransformer"
      ),
      i = 4;
    function a(a, b, e) {
      if (
        (a.textOverlays == null || a.textOverlays.overlays.length === 0) &&
        (a.stickerData == null || a.stickerData.stickers.length === 0)
      ) {
        e(b);
        return;
      }
      var f = b.clonedOverlayNode;
      if (f == null) {
        c("FBLogger")("fbstories").warn(
          "Overlay transformer missing cloned node"
        );
        e(b);
        return;
      }
      var g = b.canvas,
        j = b.qplEvent,
        k = g.getContext("2d");
      c("promiseDone")(h.load(), function (a) {
        j != null &&
          c("QuickPerformanceLogger").markerPoint(
            j,
            "html2canvas module loaded"
          );
        var h = document.body;
        if (h == null) {
          c("FBLogger")("fbstories").warn(
            "Overlay transformer missing document body"
          );
          e(b);
          return;
        }
        h.appendChild(f);
        c("promiseDone")(
          a(f, {
            allowTaint: !0,
            backgroundColor: "rgba(0,0,0,0)",
            ignoreElements: function (a) {
              if (
                a.contains(f) ||
                a.parentElement.nodeName === "HTML" ||
                a === f ||
                f.contains(a) ||
                a instanceof HTMLStyleElement
              )
                return !1;
              else if (a instanceof HTMLLinkElement)
                return (
                  a.as === "script" || a.getAttribute("data-preloader") != null
                );
              else return !0;
            },
            logging: d("StoriesGating").isEmployee(),
            scale: i,
          }).then(function (a) {
            k.drawImage(a, 0, 0, g.width, g.height),
              f.remove(),
              c("QPLUserFlow").addPoint(
                c("StoriesModuleUploadStoryWwwQPLEvent"),
                "Overlays added"
              ),
              j != null &&
                c("QuickPerformanceLogger").markerPoint(j, "overlays added"),
              e(b);
          })
        );
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreatePhotoTransformer",
  [
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "StoriesCreateMediaTypeEnum",
    "StoriesCreatePhotoUploadUtils",
    "StoriesModuleUploadStoryWwwQPLEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      var f = a.photoData;
      if (
        ((a = a.formData) == null ? void 0 : a.mediaType) !==
          c("StoriesCreateMediaTypeEnum").PHOTO ||
        f == null
      ) {
        e(b);
        return;
      }
      a = f.displayedURI;
      if (a == null) {
        e(b);
        return;
      }
      a = b.canvas;
      var g = b.photoDescriptorID,
        h = b.qplEvent;
      d("StoriesCreatePhotoUploadUtils").drawPhotoOnCanvas(
        a,
        f,
        g,
        function () {
          c("QPLUserFlow").addPoint(
            c("StoriesModuleUploadStoryWwwQPLEvent"),
            "Photo drawn to canvas"
          ),
            h != null &&
              c("QuickPerformanceLogger").markerPoint(
                h,
                "photo drawn to canvas"
              ),
            e(b);
        },
        function (a) {
          c("QPLUserFlow").endFailure(
            c("StoriesModuleUploadStoryWwwQPLEvent"),
            "Photo drawing failed"
          ),
            b.onTransformError(a);
        }
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreatePhotoUploadTransformer",
  [
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "StoriesCreatePhotoUploadUtils",
    "StoriesModuleUploadStoryWwwQPLEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      var f;
      f = a == null ? void 0 : (f = a.mediaAttachments) == null ? void 0 : f[0];
      var g = a.photoData,
        h = b.audiences,
        i = b.canvas,
        j = b.photoDescriptorID,
        k = b.qplEvent,
        l = b.uploader;
      h =
        h == null
          ? void 0
          : (h = h[0]) == null
          ? void 0
          : (h = h.stories) == null
          ? void 0
          : (h = h.self) == null
          ? void 0
          : h.target_id;
      if (
        (f == null ? void 0 : f.fileType) !== "PHOTO" ||
        h == null ||
        g == null
      ) {
        e(b);
        return;
      }
      d("StoriesCreatePhotoUploadUtils").uploadPhoto(
        i,
        l,
        a.composerSessionID,
        g,
        j,
        k,
        function (a) {
          c("QPLUserFlow").addPoint(
            c("StoriesModuleUploadStoryWwwQPLEvent"),
            "Photo uploaded"
          ),
            k != null &&
              c("QuickPerformanceLogger").markerPoint(k, "photo uploaded"),
            e(
              babelHelpers["extends"]({}, b, {
                attachments: [{ photo: { id: a } }],
              })
            );
        },
        function (a) {
          c("QPLUserFlow").endFailure(
            c("StoriesModuleUploadStoryWwwQPLEvent"),
            "Upload failed"
          ),
            b.onTransformError(a);
        }
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateSATPCanvasUtils",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      var e = b.background;
      if (e == null) return;
      var f = new Image();
      f.crossOrigin = "Anonymous";
      f.onerror = function () {
        var a = "Failed to load image: " + e;
        c("FBLogger")("fbstories").warn(a);
      };
      f.onload = function () {
        var b = a.getContext("2d");
        b.save();
        b.drawImage(f, 0, 0, a.width, a.height);
        b.restore();
        d();
      };
      f.src = e;
    }
    g.drawSATPBgOnCanvas = a;
  },
  98
);
__d(
  "StoriesCreateSATPBgTransformer",
  [
    "StoriesCreateMediaTypeEnum",
    "StoriesCreateSATPCanvasUtils",
    "StoriesGating",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      var f;
      if (
        ((f = a.formData) == null ? void 0 : f.mediaType) !==
          c("StoriesCreateMediaTypeEnum").SATP ||
        !d("StoriesGating").shouldEnableOptimisticImprovements()
      ) {
        e(b);
        return;
      }
      f = b.canvas;
      a = a == null ? void 0 : a.satpData;
      if (a == null)
        throw c("unrecoverableViolation")(
          "Stories Create mutation SATP Data should not be null/undefined",
          "fb_stories_web"
        );
      d("StoriesCreateSATPCanvasUtils").drawSATPBgOnCanvas(f, a, function () {
        e(b);
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateSATPTransformer",
  ["StoriesCreateMediaTypeEnum", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      var e;
      if (
        ((e = a.formData) == null ? void 0 : e.mediaType) !==
        c("StoriesCreateMediaTypeEnum").SATP
      ) {
        d(b);
        return;
      }
      e = a == null ? void 0 : a.satpData;
      if (e == null)
        throw c("unrecoverableViolation")(
          "Stories Create mutation SATP Data should not be null/undefined",
          "fb_stories_web"
        );
      d(
        babelHelpers["extends"]({}, b, {
          message: { ranges: [], text: e.text },
          text_format_metadata: { inspirations_custom_font_id: e.fontID },
          text_format_preset_id: e.presetID,
        })
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateVideoTransformer",
  ["cometUniqueID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      var e, f, g;
      e = a == null ? void 0 : (e = a.mediaAttachments) == null ? void 0 : e[0];
      if (
        (e == null ? void 0 : e.fileType) !== "VIDEO" ||
        (e == null ? void 0 : e.file) == null
      ) {
        d(b);
        return;
      }
      var h = b.uploader,
        i = e == null ? void 0 : e.file;
      i.uploadID = c("cometUniqueID")();
      f =
        (f = (f = a.videoData) == null ? void 0 : f.currentDuration) != null
          ? f
          : 0;
      g =
        (g = (g = a.videoData) == null ? void 0 : g.initialDuration) != null
          ? g
          : 0;
      a =
        (a = (a = a.videoData) == null ? void 0 : a.startTime) != null ? a : 0;
      var j = null;
      f !== g && (j = { videoTrimEnd: a + f, videoTrimStart: a });
      h.successObserver.subscribe(function (a) {
        a.uploadID === i.uploadID &&
          d(
            babelHelpers["extends"]({}, b, {
              attachments: [{ video: { id: a.entID } }],
            })
          );
      });
      h.errorObserver.subscribe(function (a) {
        d(b);
      });
      h.upload([[i, e.fileType]], j);
    }
    g["default"] = a;
  },
  98
);
__d(
  "reduceStoriesCreateViewStateToCreationData",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = window.open("about:blank", "image from canvas");
      b != null && b.document.write("<img src='" + a + "' alt='from canvas'/>");
    }
    function b(a, b, c, d) {
      function e(c, f) {
        var g = b[f];
        if (g != null) {
          var h = function (a) {
            e(a, f + 1);
          };
          g(a, c, h);
        } else {
          g = c.canvas;
          c.clonedOverlayNode;
          c.onTransformError;
          c.photoDescriptorID;
          c.qplEvent;
          c.uploader;
          h = babelHelpers.objectWithoutPropertiesLoose(c, [
            "canvas",
            "clonedOverlayNode",
            "onTransformError",
            "photoDescriptorID",
            "qplEvent",
            "uploader",
          ]);
          d(h, g);
        }
      }
      e(c, 0);
    }
    g["default"] = b;
  },
  98
);
__d(
  "storiesUploadUpdater",
  ["CometRelay", "StoriesGating", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      var e = c("uuid")(),
        f = a.create("client:newNode:" + e, "Story"),
        g = a.create(c("uuid")(), "StoryCardStoryInfo");
      if (
        b != null &&
        d("StoriesGating").shouldEnableOptimisticImprovements()
      ) {
        a = a.create(c("uuid")(), "Image");
        a.setValue(b, "uri");
        g.setLinkedRecord(a, "story_thumbnail");
      }
      g.setValue("PENDING", "thread_status");
      f.setValue(e, "id");
      f.setLinkedRecord(g, "story_card_info");
      return f;
    }
    function i(a, b) {
      var e = a.create(
        "client:newNode:" + c("uuid")(),
        "UnifiedStoryBucketToUnifiedStoriesConnection"
      );
      b = h(a, b);
      a = d("CometRelay").ConnectionHandler.createEdge(
        a,
        e,
        b,
        "UnifiedStoryBucketToUnifiedStoriesEdge"
      );
      d("CometRelay").ConnectionHandler.insertEdgeBefore(e, a);
      return e;
    }
    function j(a, b, d) {
      var e = c("uuid")(),
        f = a.create("client:newNode:" + e, "StoryBucket");
      f.setLinkedRecord(b, "story_bucket_owner");
      b = i(a, d);
      f.setLinkedRecord(b, "unified_stories");
      f.setValue(e, "id");
      return f;
    }
    function a(a, b, c) {
      b = a.get(b);
      if (!b) return;
      var e = b.getOrCreateLinkedRecord(
        "unified_stories_buckets",
        "UserToUnifiedStoryBucketsConnection",
        { find: "loading", first: 1 }
      );
      if (e) {
        b = j(a, b, c);
        c = d("CometRelay").ConnectionHandler.createEdge(
          a,
          e,
          b,
          "UserToUnifiedStoryBucketsEdge"
        );
        c && d("CometRelay").ConnectionHandler.insertEdgeAfter(e, c);
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateMutation",
  [
    "CometRelay",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "StoriesCometCardStatusSubscription",
    "StoriesCreateBlurredBgTransformer",
    "StoriesCreateCTALinkTransformer",
    "StoriesCreateMutation.graphql",
    "StoriesCreateOverlayTransformer",
    "StoriesCreatePhotoTransformer",
    "StoriesCreatePhotoUploadTransformer",
    "StoriesCreatePhotoUploadUtils",
    "StoriesCreateSATPBgTransformer",
    "StoriesCreateSATPTransformer",
    "StoriesCreateVideoTransformer",
    "StoriesGating",
    "StoriesModuleUploadStoryWwwQPLEvent",
    "cometComposerLogger",
    "getComposerLoggingPayload",
    "reduceStoriesCreateViewStateToCreationData",
    "storiesUploadUpdater",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = [
        c("StoriesCreateSATPTransformer"),
        c("StoriesCreateSATPBgTransformer"),
        c("StoriesCreateBlurredBgTransformer"),
        c("StoriesCreatePhotoTransformer"),
        c("StoriesCreateOverlayTransformer"),
        c("StoriesCreateVideoTransformer"),
        c("StoriesCreateCTALinkTransformer"),
        c("StoriesCreatePhotoUploadTransformer"),
      ],
      j = h !== void 0 ? h : (h = b("StoriesCreateMutation.graphql"));
    function a(a, b, e, f, g, h, l, m, n) {
      var o;
      c("QPLUserFlow").start(c("StoriesModuleUploadStoryWwwQPLEvent"));
      var p = d("getComposerLoggingPayload").getStoriesComposerLoggingPayload(
        a
      );
      c("cometComposerLogger")(
        {
          fields: { composerType: "stories", payload: p },
          type: "COMPOSER_POST",
        },
        a.composerSessionID
      );
      p = document.createElement("canvas");
      var q = null,
        r = d("StoriesCometCardStatusSubscription").subscribe(
          e,
          { send_key: a.composerSessionID },
          function (b) {
            b =
              b == null
                ? void 0
                : (b = b.story_card_status_subscribe) == null
                ? void 0
                : (b = b.story) == null
                ? void 0
                : (b = b.story_card_info) == null
                ? void 0
                : b.thread_status;
            (b === "PUBLISHED" || b === "FAILED") &&
              (b === "PUBLISHED"
                ? (c("cometComposerLogger")(
                    {
                      fields: { destination: "stories" },
                      type: "COMPOSER_POST_SERVER_CONTENT_RENDERED",
                    },
                    a.composerSessionID
                  ),
                  h != null && c("QuickPerformanceLogger").markerEnd(h, 2))
                : h != null && c("QuickPerformanceLogger").markerEnd(h, 3),
              q && q.dispose(),
              r.dispose());
          }
        ),
        s = function (a) {
          var b = new Error();
          a != null && (b.description = a.toString());
          h != null && c("QuickPerformanceLogger").markerEnd(h, 3);
          l(b);
          q && q.dispose();
          r.dispose();
        },
        t = {
          audiences: [{ stories: { self: { target_id: b } } }],
          source: "WWW",
        },
        u = d("StoriesGating").shouldEnableOptimisticImprovements();
      u || (q = k(e, t, b));
      p.height = 1920;
      p.width = 1080;
      o = d("StoriesCreatePhotoUploadUtils").generatePhotoDescriptorID(
        a.blurredBg,
        a.photoData,
        (o = (o = a.textOverlays) == null ? void 0 : o.overlays.length) != null
          ? o
          : 0,
        (o = (o = a.stickerData) == null ? void 0 : o.stickers.length) != null
          ? o
          : 0
      );
      c("reduceStoriesCreateViewStateToCreationData")(
        a,
        i,
        {
          audiences: [{ stories: { self: { target_id: b } } }],
          audiences_is_complete: !0,
          canvas: p,
          clonedOverlayNode: g,
          logging: { composer_session_id: a.composerSessionID },
          onTransformError: s,
          photoDescriptorID: o,
          qplEvent: h,
          source: "WWW",
          uploader: f,
        },
        function (f, g) {
          u && (q = k(e, t, b, g.toDataURL())),
            (f.tracking = f.tracking ? f.tracking.concat(n) : [n]),
            c("cometComposerLogger")(
              {
                fields: { destination: "stories" },
                type: "COMPOSER_POST_MUTATION_START",
              },
              a.composerSessionID
            ),
            h != null &&
              c("QuickPerformanceLogger").markerPoint(h, "mutation started"),
            c("QPLUserFlow").addPoint(
              c("StoriesModuleUploadStoryWwwQPLEvent"),
              "Mutation started"
            ),
            d("CometRelay").commitMutation(e, {
              mutation: j,
              onCompleted: function (b) {
                h != null &&
                  c("QuickPerformanceLogger").markerPoint(
                    h,
                    "mutation successful"
                  );
                c("cometComposerLogger")(
                  {
                    fields: {
                      composerType: "stories",
                      loggingIds:
                        (b = b.story_create) == null ? void 0 : b.logging_token,
                    },
                    type: "COMPOSER_POST_SUCCESS",
                  },
                  a.composerSessionID
                );
                q && q.dispose();
                c("QPLUserFlow").endSuccess(
                  c("StoriesModuleUploadStoryWwwQPLEvent")
                );
                m();
              },
              onError: function (b) {
                var d;
                h != null &&
                  c("QuickPerformanceLogger").markerPoint(h, "mutation failed");
                c("cometComposerLogger")(
                  {
                    fields: {
                      composerType: "stories",
                      errorDescription:
                        typeof b.description === "string"
                          ? b.description
                          : (d = b.description) == null
                          ? void 0
                          : d.toString(),
                      errorInfo: b.message,
                    },
                    type: "COMPOSER_POST_FAILURE",
                  },
                  a.composerSessionID
                );
                q && q.dispose();
                r && r.dispose();
                c("QPLUserFlow").endFailure(
                  c("StoriesModuleUploadStoryWwwQPLEvent"),
                  "Mutation failed"
                );
                l(b);
              },
              variables: { input: babelHelpers["extends"]({}, f) },
            });
        }
      );
    }
    function k(a, b, e, f) {
      var g = d("CometRelay").applyOptimisticMutation(a, {
        mutation: j,
        optimisticUpdater: function (a) {
          c("storiesUploadUpdater")(a, e, f);
        },
        variables: { input: babelHelpers["extends"]({}, b) },
      });
      return {
        dispose: function () {
          g && g.dispose(), (g = null);
        },
      };
    }
    g.createStories = a;
  },
  98
);
__d(
  "StoriesModuleUploadStoryWwwQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(13252469);
    g["default"] = a;
  },
  98
);
