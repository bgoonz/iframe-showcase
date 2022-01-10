if (self.CavalryLogger) {
  CavalryLogger.start_js(["74UmWoL"]);
}

__d(
  "fileSliceName",
  ["UserAgent_DEPRECATED"],
  function (a, b, c, d, e, f, g) {
    a = "slice";
    (b = d("UserAgent_DEPRECATED").chrome())
      ? b < 21 && (a = "webkitSlice")
      : (b = d("UserAgent_DEPRECATED").firefox())
      ? b < 13 && (a = "mozSlice")
      : d("UserAgent_DEPRECATED").safari() ||
        (d("UserAgent_DEPRECATED").webkit() && (a = "webkitSlice"));
    c = a;
    g["default"] = c;
  },
  98
);
__d(
  "fileSlice",
  ["fileSliceName"],
  function (a, b, c, d, e, f, g) {
    b = a.File && a.File.prototype[c("fileSliceName")];
    b || (b = a.Blob && a.Blob.prototype[c("fileSliceName")]);
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "VideoUploadFeatureDetector",
  ["UserAgent_DEPRECATED", "fileSlice"],
  function (a, b, c, d, e, f, g) {
    function a() {
      return typeof c("fileSlice") === "function" && this.supportsXHR();
    }
    function b() {
      return !d("UserAgent_DEPRECATED").firefox();
    }
    function e() {
      return "FileList" in window;
    }
    function f() {
      return "FileReader" in window && "DataView" in window;
    }
    function h() {
      return "FormData" in window;
    }
    g.supportsChunking = a;
    g.supportsFullProgress = b;
    g.supportsFileAPI = e;
    g.supportsFileReading = f;
    g.supportsXHR = h;
  },
  98
);
__d(
  "VideoUploadFile",
  ["VideoUploadFeatureDetector", "fileSlice", "md5"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b, c, d) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d == null ? void 0 : d.toLowerCase());
      }
      a.fromBlob = function (b) {
        var c =
          b.type.indexOf("/") != -1
            ? "." + b.type.split("/").pop().toLowerCase()
            : "";
        c = "blob" + c;
        c = new File([b], c, { type: b.type });
        return a.fromFile(c);
      };
      a.fromFile = function (b) {
        var c = a.getExtensionFromFileName(b.name);
        return new this(null, b, b.size, c);
      };
      a.fromFileInput = function (b) {
        var c = null,
          e = null,
          f = a.getExtensionFromFileInput(b);
        d("VideoUploadFeatureDetector").supportsFileAPI() &&
          b.files.length &&
          ((c = b.files[0]), (e = c.size));
        return new this(b, c, e, f);
      };
      var b = a.prototype;
      b.getFileInput = function () {
        return this.$1;
      };
      b.getFile = function () {
        return this.$2;
      };
      b.getSize = function () {
        return this.$3;
      };
      b.getExtension = function () {
        return this.$4;
      };
      b.getCreatorProduct = function () {
        return this.$4 === "gif" ? 4 : 2;
      };
      b.getChunk = function (a, b) {
        return this.$2 !== null && this.$2 !== void 0
          ? c("fileSlice").call(this.$2, a, b)
          : null;
      };
      b.getFilePath = function () {
        var a;
        return (a = this.$2) == null ? void 0 : a.name;
      };
      b.getStableAssetID = function () {
        var a;
        return (a = c("md5")(this.getFilePath())) != null ? a : "unknown";
      };
      a.getExtensionFromFileInput = function (a) {
        return this.getExtensionFromFileName(a.value);
      };
      a.getExtensionFromFileName = function (a) {
        return a !== null && a !== void 0 && a.indexOf(".") !== -1
          ? a.split(".").pop().toLowerCase()
          : "";
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "BrandedContentSponsorRelationship",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      WITH: 0,
      PAID_RELATIONSHIP_WITH: 1,
      PRESENTED_BY: 2,
      SOCIAL_TAGGING: 3,
      SUPPORT: 4,
      BRAND_INLINE_AD_WITHOUT_CREATOR_PAGE: 5,
      CREATOR_INLINE_AD_WITHOUT_SPONSOR_PAGE: 6,
      SPONSORSHIP: 7,
    });
    f["default"] = a;
  },
  66
);
__d(
  "VideoProjection",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      FLAT: "flat",
      EQUIRECTANGULAR: "equirectangular",
      CUBEMAP: "cubemap",
      ROTATED_CUBEMAP: "rotated_cubemap",
      BARREL: "barrel",
      BARREL_SPLIT: "barrel_split",
      CDS_BARREL: "cds_barrel",
      HALF_EQUIRECTANGULAR: "half_equirectangular",
    });
    f["default"] = a;
  },
  66
);
__d(
  "Network",
  ["$InternalEnum", "mixInEventEmitter"],
  function (a, b, c, d, e, f, g) {
    var h = !0,
      i = a.navigator.connection,
      j = { 0: "unknown", 1: "ethernet", 2: "wifi", 3: "2g", 4: "3g" },
      k = b("$InternalEnum")({
        Bluetooth: "bluetooth",
        Cellular: "cellular",
        Ethernet: "ethernet",
        None: "none",
        Wifi: "wifi",
        Wimax: "wimax",
        Other: "other",
        Unavailable: "unavailable",
        Unknown: "unknown",
      }),
      l = b("$InternalEnum")({
        Type_Slow2g: "slow-2g",
        Type_2g: "2g",
        Type_3g: "3g",
        Type_4g: "4g",
        Unavailable: "unavailable",
      });
    function m() {
      return h;
    }
    function d(a) {
      if (a == h) return;
      h = a;
      r.emit(a ? "online" : "offline");
    }
    function e() {
      if (!m()) return 0;
      var a = i == null ? void 0 : i.downlinkMax;
      if (typeof a === "number" && Number.isFinite(a)) return a;
      a = i == null ? void 0 : i.downlink;
      return typeof a === "number" && Number.isFinite(a) ? a : null;
    }
    function f() {
      if (!m()) return 0;
      var a = i == null ? void 0 : i.rtt;
      return typeof a === "number" && Number.isFinite(a) ? a : null;
    }
    function n() {
      return i != null && i != void 0;
    }
    function o() {
      var a = i ? String(i.type) : "0";
      return j[a] || a;
    }
    function p() {
      var a = i == null ? void 0 : i.type;
      return (a = typeof a === "string" ? k.cast(a) : null) != null
        ? a
        : k.Unavailable;
    }
    function q() {
      var a = i == null ? void 0 : i.effectiveType;
      return (a = typeof a === "string" ? l.cast(a) : null) != null
        ? a
        : l.Unavailable;
    }
    var r = {
      NetworkConnectivityType: k,
      NetworkConnectivityEffectiveType: l,
      getBandwidth: e,
      getEffectiveType: q,
      getType: p,
      getType_DEPRECATED_DO_NOT_USE: o,
      isOnline: m,
      setOnline: d,
      getRTT: f,
      containsNetworkInformation: n,
    };
    c("mixInEventEmitter")(r, { online: !0, offline: !0 });
    a.addEventListener
      ? (a.addEventListener("online", d.bind(null, !0)),
        a.addEventListener("offline", d.bind(null, !1)))
      : a.attachEvent &&
        (a.attachEvent("online", d.bind(null, !0)),
        a.attachEvent("offline", d.bind(null, !1)));
    b = r;
    g["default"] = b;
  },
  98
);
__d(
  "ResumableUploadService",
  ["cr:720"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:720");
  },
  98
);
__d(
  "ComposerMediaFileUploader",
  [
    "fbt",
    "ActorURI",
    "ReactComposerMediaConfig",
    "VideoUploadFile",
    "VideoUploadFlowNotifier",
    "VideoUploadSurface",
    "VideoUploader",
    "XComposerPhotoUploader",
    "cometComposerMediaUploadLogger",
    "gkx",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = (function () {
        function a() {
          this.subscribers = [];
        }
        var b = a.prototype;
        b.subscribe = function (a) {
          this.subscribers.push(a);
        };
        b.notify = function (a) {
          this.subscribers.forEach(function (b) {
            return b(a);
          });
        };
        b.unsubscribe = function (a) {
          this.subscribers = this.subscribers.filter(function (b) {
            return b !== a;
          });
        };
        return a;
      })(),
      j = new Map(),
      k = (function () {
        function a(a, b, c, e, f) {
          this.startedObserver = new i();
          this.progressObserver = new i();
          this.successObserver = new i();
          this.errorObserver = new i();
          this.sphericalImageDetectedObserver = new i();
          this.uploadStatuses = new Map();
          this.uploadStatusChangeObserver = new i();
          this.resizer = void 0;
          this.videoUploadsQueue = [];
          this.actorID = a;
          this.resizer = e;
          this.videoUploaderConfig = b;
          this.creationSessionID = (a = c) != null ? a : "";
          this.photoUploader = this.$1(this.actorID, f);
          this.videoUploader = this.$2(
            this.videoUploaderConfig,
            this.creationSessionID
          );
          this.videoUploadFlowNotifier = d(
            "VideoUploadFlowNotifier"
          ).createVideoUploadFlowNotifier({
            cancel_on_leave: !1,
            composer_entry_point_ref:
              (e = this.videoUploaderConfig.composer_entry_point_ref) != null
                ? e
                : "unknown",
            composer_session_id: (b = this.creationSessionID) != null ? b : "",
            extended_flow_logging_enabled: !0,
            source: this.videoUploaderConfig.source,
          });
          d("VideoUploadSurface")
            .VideoUploadSurface.getOrCreate(
              d("VideoUploadSurface").VideoUploadSurfaceIDs.FEED
            )
            .notifiers()
            .register(this.videoUploadFlowNotifier, this.creationSessionID);
        }
        var b = a.prototype;
        b.$3 = function (a, b) {
          var c;
          c = (c = this.uploadStatuses.get(a)) == null ? void 0 : c.bytesTotal;
          if (c == null) return;
          this.uploadStatuses.set(a, {
            bytesLoaded: (a = b) != null ? a : c,
            bytesTotal: c,
          });
          this.uploadStatusChangeObserver.notify(this.uploadStatuses);
        };
        b.$1 = function (a, b) {
          var e = this;
          return new (c("XComposerPhotoUploader"))({
            concurrentLimit: c("ReactComposerMediaConfig").photo
              .concurrentLimit,
            onUploadFailure: function (a, b) {
              var c;
              e.$4(
                a,
                "PHOTO",
                (c = b.response.getErrorDescriptionString()) != null ? c : "",
                null,
                b.response.error.toString()
              );
              e.errorObserver.notify({
                entID: (c = b.response.payload) == null ? void 0 : c.photoID,
                error: b.response.getErrorSummary(),
                uploadID: a,
              });
            },
            onUploadIsSpherical: function (a, b, c) {
              a &&
                b &&
                e.sphericalImageDetectedObserver.notify({
                  isSpherical: a,
                  sphericalImage: b,
                  uploadID: c,
                });
            },
            onUploadProgress: function (a, b) {
              var c = Math.min(1, Math.max(0, b.event.loaded / b.event.total));
              e.progressObserver.notify({ percentComplete: c, uploadID: a });
              e.$3(a, b.event.loaded);
            },
            onUploadStart: function (a, b) {
              e.$5(a, "PHOTO"), e.startedObserver.notify({ uploadID: a });
            },
            onUploadSuccess: function (a, b) {
              var c = b.response.payload;
              if (c == null) {
                var d;
                e.$4(
                  a,
                  "PHOTO",
                  (d = b.response.getErrorDescriptionString()) != null ? d : ""
                );
                e.errorObserver.notify({
                  entID: null,
                  error: b.response.getErrorSummary(),
                  uploadID: a,
                });
              } else
                e.$6(a, c.photoID, "PHOTO"),
                  e.successObserver.notify({
                    attachmentType: "PHOTO",
                    entID: c.photoID,
                    imageURL: c.imageSrc,
                    takenTime: c.mediaTakenTime ? c.mediaTakenTime * 1e3 : null,
                    uploadID: a,
                  }),
                  e.$3(a);
            },
            resizer: this.resizer,
            retryLimit: c("ReactComposerMediaConfig").photo.retryLimit,
            uploadData: babelHelpers["extends"](
              {},
              c("ReactComposerMediaConfig").photo.uploadData,
              { source: 8 },
              b ? { work_shared_draft_mode: "drafter_creating" } : {}
            ),
            uploadEndpoint: d("ActorURI").create(
              c("ReactComposerMediaConfig").photo.uploadEndpoint,
              this.actorID
            ),
          });
        };
        b.$2 = function (a, b) {
          a = babelHelpers["extends"]({}, a, {
            isMultiMediaPost: !0,
            waterfall_id: b,
          });
          return new (c("VideoUploader"))(a);
        };
        b.upload = function (a, b, c) {
          var d = this;
          a.forEach(function (a) {
            var b = a[0];
            a[1];
            a = b.uploadID;
            a != null &&
              d.uploadStatuses.get(a) == null &&
              d.uploadStatuses.set(a, { bytesLoaded: 0, bytesTotal: b.size });
          });
          this.uploadStatusChangeObserver.notify(this.uploadStatuses);
          this.$7(
            a
              .filter(function (a) {
                a[0];
                a = a[1];
                return a === "PHOTO";
              })
              .map(function (a) {
                var b = a[0];
                a[1];
                return b;
              }),
            c
          );
          this.$8(
            a
              .filter(function (a) {
                a[0];
                a = a[1];
                return a === "VIDEO";
              })
              .map(function (a) {
                var b = a[0];
                a[1];
                return b;
              }),
            b
          );
        };
        b.$7 = function (a, b) {
          a.length > 0 &&
            this.photoUploader
              .getAsyncUploadRequest(a, { preventDefaultErrorHandler: b })
              .send();
        };
        b.$8 = function (a, b) {
          var d = this;
          a.length > 0 &&
            (this.videoUploadsQueue = this.videoUploadsQueue.concat(a));
          if (
            this.videoUploadsQueue.length > 0 &&
            !this.videoUploader.isSessionExist()
          ) {
            var e = this.videoUploadsQueue.shift();
            this.currentVideoUploadID = e.uploadID;
            this.videoUploader = this.$2(
              this.videoUploaderConfig,
              this.creationSessionID
            );
            var f = this.videoUploader;
            f.subscribe("upload-started", function (a, b) {
              a = e.uploadID;
              a != null &&
                (d.$5(a, "VIDEO"), d.startedObserver.notify({ uploadID: a }));
            });
            f.subscribe("upload-progressed", function (a, b) {
              a = Math.min(
                1,
                Math.max(0, (b.start_offset + b.sent_bytes) / b.file_size)
              );
              var c = e.uploadID;
              c != null &&
                (d.progressObserver.notify({
                  entID: f.getVideoID(),
                  percentComplete: a,
                  uploadID: c,
                }),
                d.$3(c, b.start_offset + b.sent_bytes));
            });
            f.subscribe("upload-finished", function (a, b) {
              f.reset();
              a = e.uploadID;
              a != null &&
                (d.$6(a, b.video_id, "VIDEO"),
                d.successObserver.notify({
                  attachmentType: "VIDEO",
                  entID: b.video_id,
                  uploadID: a,
                }),
                d.$3(a));
              d.$8([]);
            });
            f.subscribe("upload-failed", function (a, b) {
              a = e.uploadID;
              if (a != null) {
                d.$4(
                  a,
                  "VIDEO",
                  b.error_description,
                  b.video_id,
                  b.error_code,
                  b.error_summary
                );
                d.errorObserver.notify({
                  entID: b.video_id,
                  error:
                    (b = b.error_description) != null
                      ? b
                      : h._(
                          "Something went wrong and your video couldn't be uploaded. Please try again."
                        ),
                  uploadID: a,
                });
              }
              c("gkx")("537") && d.$8([]);
            });
            f.subscribe("upload-canceled", function (a) {
              a = e.uploadID;
              a != null && d.$9(a, "VIDEO");
            });
            this.videoUploadFlowNotifier.registerVideoUpload(f, e.uploadID);
            a = null;
            b != null &&
              (a = [
                {
                  params: {
                    trim_end: b.videoTrimEnd,
                    trim_start: b.videoTrimStart,
                  },
                  type: "VideoTrim",
                },
              ]);
            f.upload(c("VideoUploadFile").fromFile(e), { creativeTools: a });
          }
        };
        b.$5 = function (a, b) {
          c("cometComposerMediaUploadLogger")(
            {
              fields: { media_id: a, media_type: b },
              type: "MEDIA_UPLOAD_TRANSFER_START",
            },
            this.creationSessionID
          );
        };
        b.$6 = function (a, b, d) {
          c("cometComposerMediaUploadLogger")(
            {
              fields: { media_id: a, media_item_fbid: b, media_type: d },
              type: "MEDIA_UPLOAD_TRANSFER_SUCCESS",
            },
            this.creationSessionID
          ),
            c("cometComposerMediaUploadLogger")(
              {
                fields: { media_id: a, media_item_fbid: b, media_type: d },
                type: "MEDIA_UPLOAD_SUCCESS",
              },
              this.creationSessionID
            ),
            c("cometComposerMediaUploadLogger")(
              {
                fields: { media_id: a, media_item_fbid: b, media_type: d },
                type: "MEDIA_UPLOAD_FLOW_SUCCESS",
              },
              this.creationSessionID
            );
        };
        b.$4 = function (a, b, d, e, f, g) {
          c("cometComposerMediaUploadLogger")(
            {
              fields: {
                error_code: f,
                error_description: d,
                error_summary: g,
                media_id: a,
                media_item_fbid: e,
                media_type: b,
              },
              type: "MEDIA_UPLOAD_FAILURE",
            },
            this.creationSessionID
          );
        };
        b.$9 = function (a, b) {
          c("cometComposerMediaUploadLogger")(
            {
              fields: { media_id: a, media_type: b },
              type: "MEDIA_UPLOAD_CANCEL",
            },
            this.creationSessionID
          );
        };
        b.getCreationSessionID = function () {
          return this.creationSessionID;
        };
        b.cancelUpload = function (a, b) {
          b === "VIDEO" &&
            ((this.videoUploadsQueue = this.videoUploadsQueue.filter(function (
              b
            ) {
              return b.uploadID !== a;
            })),
            this.currentVideoUploadID === a &&
              (this.videoUploader.cancel(), this.$8([])));
        };
        return a;
      })();
    a = {
      createOrGetInstance: function (a, b, c, e, f) {
        f === void 0 && (f = !1);
        e = j.get(a) || new k(a, b, c, e, f);
        if (e.creationSessionID !== c) {
          e.creationSessionID = (f = c) != null ? f : "";
          e.videoUploaderConfig = b;
          e.videoUploadFlowNotifier = d(
            "VideoUploadFlowNotifier"
          ).createVideoUploadFlowNotifier({
            cancel_on_leave: !1,
            composer_entry_point_ref:
              (f = e.videoUploaderConfig.composer_entry_point_ref) != null
                ? f
                : "unknown",
            composer_session_id: (b = c) != null ? b : "",
            extended_flow_logging_enabled: !0,
            source: e.videoUploaderConfig.source,
          });
          d("VideoUploadSurface")
            .VideoUploadSurface.getOrCreate(
              d("VideoUploadSurface").VideoUploadSurfaceIDs.FEED
            )
            .notifiers()
            .register(e.videoUploadFlowNotifier, e.creationSessionID);
        }
        j.set(a, e);
        return e;
      },
      getInstance: function (a) {
        return j.get(a);
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "CircularProgressBar.react",
  ["cx", "createReactClass_DEPRECATED", "gkx", "prop-types", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = c("createReactClass_DEPRECATED")({
      displayName: "CircularProgressBar",
      propTypes: {
        animate: c("prop-types").bool,
        percentComplete: c("prop-types").number.isRequired,
        text: c("prop-types").string,
      },
      render: function () {
        var a = this.props,
          b = a.animate,
          d = a.text;
        a = a.percentComplete;
        var e = (360 * a) / 100,
          f = Math.max(e, 180) - 180;
        e = Math.min(e, 180);
        var g = a < 100 ? "1" : "0",
          h = c("gkx")("1217157") ? "_1_br _9q5e" : "_1_br";
        return i.jsxs("div", {
          "aria-valuemax": 100,
          "aria-valuemin": 0,
          "aria-valuenow": a,
          className: "_1_bj",
          role: "progressbar",
          style: { opacity: g },
          children: [
            !!d && i.jsx("div", { className: "_22sa", children: d }),
            i.jsx("div", {
              className: "_1_bk",
              children: i.jsxs("div", {
                className: b ? "_22sb" : "",
                children: [
                  i.jsx("div", { className: "_1_bl", style: { opacity: g } }),
                  i.jsx("div", {
                    className: "_1_bp _1_bq",
                    children: i.jsx("div", {
                      className: h,
                      style: {
                        transform: "translateX(-100%) rotate(" + f + "deg)",
                        opacity: g,
                      },
                    }),
                  }),
                  i.jsx("div", {
                    className: "_1_bs _1_bq",
                    children: i.jsx("div", {
                      className: h,
                      style: {
                        transform: "translateX(-100%) rotate(" + e + "deg)",
                        opacity: g,
                      },
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      },
    });
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CollageItemFallback.react",
  [
    "ix",
    "CircularProgressBar.react",
    "CometImage.react",
    "TetraText.react",
    "qex",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.filename,
        d = a.fileType;
      a = a.percentComplete;
      b = b != null ? b : void 0;
      var e = c("qex")._("1138950");
      return i.jsxs("div", {
        className:
          "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 taijpn5t datstx6m cbu4d94t j83agx80 rq0escxv qsy8amke bp9cbjyn n5ue3fu6",
        children: [
          i.jsx("div", {
            className: c("stylex").dedupe(
              e === !0
                ? {
                    "display-1": "j83agx80",
                    "margin-bottom-1": "qacpv2si",
                    "margin-top-1": "f0zqjlou",
                  }
                : { "display-1": "j83agx80", "margin-bottom-1": "n851cfcs" }
            ),
            children: i.jsx(c("CometImage.react"), {
              alt: b,
              draggable: !1,
              src: d === "VIDEO" ? h("567270") : h("557364"),
            }),
          }),
          a != null &&
            i.jsx(c("CircularProgressBar.react"), { percentComplete: a * 100 }),
          i.jsx(c("TetraText.react"), {
            numberOfLines: 1,
            type: "meta1",
            children: b,
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
  "getComposerMediaFileUploaderWithClientSideImageResizer",
  ["ComposerMediaFileUploader", "cr:1342782", "emptyFunction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h() {
      return b("cr:1342782") != null && b("cr:1342782").isSupported()
        ? b("cr:1342782").get()
        : [void 0, c("emptyFunction")];
    }
    function a(a, b, d, e) {
      e === void 0 && (e = !1);
      var f = h(),
        g = f[0];
      f = f[1];
      a = c("ComposerMediaFileUploader").createOrGetInstance(a, b, d, g, e);
      return [a, f];
    }
    g["default"] = a;
  },
  98
);
__d(
  "SpectrumImageResizer",
  [
    "invariant",
    "BlobFactory",
    "FBLogger",
    "Promise",
    "cr:1917805",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 2048,
      j = 2048,
      k = 85,
      l = 0,
      m = null,
      n = null,
      o = (function () {
        function a() {
          (this.$1 = i), (this.$2 = j), (this.$3 = k), (n = b("cr:1917805")());
        }
        var d = a.prototype;
        d.setEncodeQuality = function (a) {
          this.$3 = a;
          return this;
        };
        d.setMaxWidth = function (a) {
          this.$2 = a;
          return this;
        };
        d.setMaxHeight = function (a) {
          this.$1 = a;
          return this;
        };
        d.resizeBlob = function (a, b, c) {
          this.$4(a, this.$2, this.$1, this.$3, b);
        };
        d.resize360Blob = function (a, b, c, d) {
          var e;
          d === void 0 || d === null
            ? ((c = this.$2 * 4), (e = this.$1 * 4))
            : ((c = d), (e = d));
          this.$4(a, c, e, this.$3, b);
        };
        d.$4 = function (a, d, e, f, g) {
          var i = new FileReader();
          i.onload = function (i) {
            var j = new Uint8Array(this.result);
            j.length > 0 || h(0, 18539);
            function k(a) {
              return new (b("Promise"))(function (b, c) {
                var d = new Image();
                d.onload = function () {
                  URL.revokeObjectURL(d.src),
                    b({ width: d.width, height: d.height });
                };
                d.onerror = function (a) {
                  URL.revokeObjectURL(d.src), c(a);
                };
                d.src = URL.createObjectURL(a);
              });
            }
            return k(a)
              .then(function (a) {
                n != null || h(0, 18573);
                return n.then(function (b) {
                  var h = b.cwrap("resizeJpeg", "number", [
                    "number",
                    "number",
                    "number",
                    "number",
                    "number",
                    "number",
                  ]);
                  function i(a) {
                    var c = b.getMemory(a.length);
                    b.HEAP8.set(a, c);
                    return c;
                  }
                  var l = 0,
                    m = 0;
                  try {
                    var n = function (a, c) {
                      var d = new Int8Array(c);
                      d.set(b.HEAP8.subarray(a, a + c));
                      return d;
                    };
                    l = b.getMemory(j.length);
                    m = i(j);
                    i = h(m, j.length, l, d, e, f);
                    h = n(l, i);
                    var o = c("BlobFactory").getBlob([h], {
                      type: "image/jpeg",
                      done: !0,
                    });
                    c("promiseDone")(
                      k(o).then(function (b) {
                        g(null, o, !1, a.width, a.height, b.width, b.height);
                      })
                    );
                  } finally {
                    try {
                      m !== 0 && b._free(m), l !== 0 && b._free(l);
                    } catch (a) {
                      c("FBLogger")("spectrum")
                        .catching(a)
                        .info("Error while freeing resources after resizing");
                    }
                  }
                });
              })
              ["catch"](function (a) {
                g(a, null, !0, null, null, null, null);
              });
          };
          i.readAsArrayBuffer(a);
        };
        return a;
      })();
    a = {
      get: function () {
        l++;
        m || (m = new o());
        var a = !1;
        return [
          m,
          function () {
            if (a) return;
            a = !0;
            l--;
            l === 0 && ((m = null), (n = null));
          },
        ];
      },
      isSupported: function () {
        try {
          if (
            typeof WebAssembly === "object" &&
            typeof WebAssembly.instantiate === "function"
          ) {
            var a = new WebAssembly.Module(
              Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
            );
            if (a instanceof WebAssembly.Module)
              return (
                new WebAssembly.Instance(a) instanceof WebAssembly.Instance
              );
          }
        } catch (a) {
          c("FBLogger")("spectrum")
            .catching(a)
            .mustfix("Instantiating empty WebAssembly module threw an error");
        }
        return !1;
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "SpectrumWasm2021",
  ["Promise", "bx"],
  function (a, b, c, d, e, f) {
    var g = b("bx").getURL(b("bx")("1911529")),
      h = (function () {
        var c =
          typeof document !== "undefined" && document.currentScript
            ? document.currentScript.src
            : void 0;
        return function (d) {
          d = d || {};
          var f = typeof d !== "undefined" ? d : {},
            i = {},
            j;
          for (j in f)
            Object.prototype.hasOwnProperty.call(f, j) && (i[j] = f[j]);
          f.arguments = [];
          f.thisProgram = "./this.program";
          f.quit = function (a, b) {
            throw b;
          };
          f.preRun = [];
          f.postRun = [];
          var k = !0,
            l = !1,
            m = "";
          (k || l) &&
            (l
              ? (m = self.location.href)
              : document.currentScript && (m = document.currentScript.src),
            c && (m = c),
            m.indexOf("blob:") !== 0
              ? (m = m.substr(0, m.lastIndexOf("/") + 1))
              : (m = ""),
            (f.read = function (a) {
              var b = new XMLHttpRequest();
              b.open("GET", a, !1);
              b.send(null);
              return b.responseText;
            }),
            l &&
              (f.readBinary = function (a) {
                var b = new XMLHttpRequest();
                b.open("GET", a, !1);
                b.responseType = "arraybuffer";
                b.send(null);
                return new Uint8Array(b.response);
              }),
            (f.readAsync = function (a, b, c) {
              var d = new XMLHttpRequest();
              d.open("GET", a, !0);
              d.responseType = "arraybuffer";
              d.onload = function () {
                if (d.status == 200 || (d.status == 0 && d.response)) {
                  b(d.response);
                  return;
                }
                c();
              };
              d.onerror = c;
              d.send(null);
            }),
            (f.setWindowTitle = function (a) {
              document.title = a;
            }));
          var n =
              f.print ||
              (typeof console !== "undefined"
                ? emptyFunction.bind(console)
                : typeof print !== "undefined"
                ? print
                : null),
            o =
              f.printErr ||
              (typeof printErr !== "undefined"
                ? printErr
                : (typeof console !== "undefined" &&
                    emptyFunction.bind(console)) ||
                  n);
          for (j in i)
            Object.prototype.hasOwnProperty.call(i, j) && (f[j] = i[j]);
          i = void 0;
          function aa(a) {
            var b = B[C >> 2];
            a = (b + a + 15) & -16;
            a > wb() && $();
            B[C >> 2] = a;
            return b;
          }
          function p(a) {
            switch (a) {
              case "i1":
              case "i8":
                return 1;
              case "i16":
                return 2;
              case "i32":
                return 4;
              case "i64":
                return 8;
              case "float":
                return 4;
              case "double":
                return 8;
              default:
                if (a[a.length - 1] === "*") return 4;
                else if (a[0] === "i") {
                  var b = parseInt(a.substr(1));
                  t(
                    b % 8 === 0,
                    "getNativeTypeSize invalid bits " + b + ", type " + a
                  );
                  return b / 8;
                } else return 0;
            }
          }
          var ba = {
            "f64-rem": function (a, b) {
              return a % b;
            },
            debugger: function () {
              debugger;
            },
          };
          new Array(0);
          var ca = 0,
            q = function (a) {
              ca = a;
            };
          m = function () {
            return ca;
          };
          typeof WebAssembly !== "object" &&
            o("no native wasm support detected");
          function p(a, b, c, d) {
            c = c || "i8";
            c.charAt(c.length - 1) === "*" && (c = "i32");
            switch (c) {
              case "i1":
                z[a >> 0] = b;
                break;
              case "i8":
                z[a >> 0] = b;
                break;
              case "i16":
                qa[a >> 1] = b;
                break;
              case "i32":
                B[a >> 2] = b;
                break;
              case "i64":
                (tempI64 = [
                  b >>> 0,
                  ((tempDouble = b),
                  +Ia(tempDouble) >= 1
                    ? tempDouble > 0
                      ? (La(+Ka(tempDouble / 4294967296), 4294967295) | 0) >>> 0
                      : ~~+Ja(
                          (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
                        ) >>> 0
                    : 0),
                ]),
                  (B[a >> 2] = tempI64[0]),
                  (B[(a + 4) >> 2] = tempI64[1]);
                break;
              case "float":
                ra[a >> 2] = b;
                break;
              case "double":
                sa[a >> 3] = b;
                break;
              default:
                $("invalid type for setValue: " + c);
            }
          }
          var r,
            s = !1;
          function t(a, b) {
            a || $("Assertion failed: " + b);
          }
          function da(a) {
            var b = f["_" + a];
            t(
              b,
              "Cannot call unknown function " + a + ", make sure it is exported"
            );
            return b;
          }
          function ea(a, b, c, d, e) {
            var f = {
              string: function (a) {
                var b = 0;
                if (a !== null && a !== void 0 && a !== 0) {
                  var c = (a.length << 2) + 1;
                  b = wc(c);
                  ha(a, b, c);
                }
                return b;
              },
              array: function (a) {
                var b = wc(a.length);
                ja(a, b);
                return b;
              },
            };
            function e(a) {
              if (b === "string") return v(a);
              return b === "boolean" ? Boolean(a) : a;
            }
            a = da(a);
            var g = [],
              h = 0;
            if (d)
              for (var i = 0; i < d.length; i++) {
                var j = f[c[i]];
                j ? (h === 0 && (h = Z()), (g[i] = j(d[i]))) : (g[i] = d[i]);
              }
            j = a.apply(null, g);
            j = e(j);
            h !== 0 && Y(h);
            return j;
          }
          function p(a, b, c, d) {
            c = c || [];
            var e = c.every(function (a) {
                return a === "number";
              }),
              f = b !== "string";
            return f && e && !d
              ? da(a)
              : function () {
                  return ea(a, b, c, arguments, d);
                };
          }
          j = 3;
          function fa(a) {
            return !Aa ? aa(a) : W(a);
          }
          var ga =
            typeof TextDecoder !== "undefined"
              ? new TextDecoder("utf8")
              : void 0;
          function u(a, b, c) {
            c = b + c;
            var d = b;
            while (a[d] && !(d >= c)) ++d;
            if (d - b > 16 && a.subarray && ga)
              return ga.decode(a.subarray(b, d));
            else {
              c = "";
              while (b < d) {
                var e = a[b++];
                if (!(e & 128)) {
                  c += String.fromCharCode(e);
                  continue;
                }
                var f = a[b++] & 63;
                if ((e & 224) == 192) {
                  c += String.fromCharCode(((e & 31) << 6) | f);
                  continue;
                }
                var g = a[b++] & 63;
                (e & 240) == 224
                  ? (e = ((e & 15) << 12) | (f << 6) | g)
                  : (e =
                      ((e & 7) << 18) | (f << 12) | (g << 6) | (a[b++] & 63));
                if (e < 65536) c += String.fromCharCode(e);
                else {
                  f = e - 65536;
                  c += String.fromCharCode(
                    55296 | (f >> 10),
                    56320 | (f & 1023)
                  );
                }
              }
            }
            return c;
          }
          function v(a, b) {
            return a ? u(A, a, b) : "";
          }
          function w(a, b, c, d) {
            if (!(d > 0)) return 0;
            var e = c;
            d = c + d - 1;
            for (var f = 0; f < a.length; ++f) {
              var g = a.charCodeAt(f);
              if (g >= 55296 && g <= 57343) {
                var h = a.charCodeAt(++f);
                g = (65536 + ((g & 1023) << 10)) | (h & 1023);
              }
              if (g <= 127) {
                if (c >= d) break;
                b[c++] = g;
              } else if (g <= 2047) {
                if (c + 1 >= d) break;
                b[c++] = 192 | (g >> 6);
                b[c++] = 128 | (g & 63);
              } else if (g <= 65535) {
                if (c + 2 >= d) break;
                b[c++] = 224 | (g >> 12);
                b[c++] = 128 | ((g >> 6) & 63);
                b[c++] = 128 | (g & 63);
              } else {
                if (c + 3 >= d) break;
                b[c++] = 240 | (g >> 18);
                b[c++] = 128 | ((g >> 12) & 63);
                b[c++] = 128 | ((g >> 6) & 63);
                b[c++] = 128 | (g & 63);
              }
            }
            b[c] = 0;
            return c - e;
          }
          function ha(a, b, c) {
            return w(a, A, b, c);
          }
          function x(a) {
            var b = 0;
            for (var c = 0; c < a.length; ++c) {
              var d = a.charCodeAt(c);
              d >= 55296 &&
                d <= 57343 &&
                (d = (65536 + ((d & 1023) << 10)) | (a.charCodeAt(++c) & 1023));
              d <= 127
                ? ++b
                : d <= 2047
                ? (b += 2)
                : d <= 65535
                ? (b += 3)
                : (b += 4);
            }
            return b;
          }
          typeof TextDecoder !== "undefined"
            ? new TextDecoder("utf-16le")
            : void 0;
          function ia(a) {
            var b = x(a) + 1,
              c = W(b);
            c && w(a, z, c, b);
            return c;
          }
          function ja(b, a) {
            z.set(b, a);
          }
          function ka(b, a, c) {
            for (var d = 0; d < b.length; ++d) z[a++ >> 0] = b.charCodeAt(d);
            c || (z[a >> 0] = 0);
          }
          function la(a) {
            return a;
          }
          function ma(a) {
            var b = /__Z[\w\d_]+/g;
            return a.replace(b, function (a) {
              var b = la(a);
              return a === b ? a : b + " [" + a + "]";
            });
          }
          function na() {
            var a = new Error();
            if (!a.stack) {
              try {
                throw new Error(0);
              } catch (b) {
                a = b;
              }
              if (!a.stack) return "(no stack trace available)";
            }
            return a.stack.toString();
          }
          function oa() {
            var a = na();
            f.extraStackTrace && (a += "\n" + f.extraStackTrace());
            return ma(a);
          }
          i = 65536;
          function pa(a, b) {
            a % b > 0 && (a += b - (a % b));
            return a;
          }
          var y, z, A, qa, B, ra, sa;
          function ta() {
            (f.HEAP8 = z = new Int8Array(y)),
              (f.HEAP16 = qa = new Int16Array(y)),
              (f.HEAP32 = B = new Int32Array(y)),
              (f.HEAPU8 = A = new Uint8Array(y)),
              (f.HEAPU16 = new Uint16Array(y)),
              (f.HEAPU32 = new Uint32Array(y)),
              (f.HEAPF32 = ra = new Float32Array(y)),
              (f.HEAPF64 = sa = new Float64Array(y));
          }
          j = 5387120;
          var C = 144208,
            ua = 5242880,
            D = f.TOTAL_MEMORY || 16777216;
          D < ua &&
            o(
              "TOTAL_MEMORY should be larger than TOTAL_STACK, was " +
                D +
                "! (TOTAL_STACK=" +
                ua +
                ")"
            );
          f.buffer
            ? (y = f.buffer)
            : typeof WebAssembly === "object" &&
              typeof WebAssembly.Memory === "function"
            ? ((r = new WebAssembly.Memory({ initial: D / i })), (y = r.buffer))
            : (y = new ArrayBuffer(D));
          ta();
          B[C >> 2] = j;
          function va(a) {
            while (a.length > 0) {
              var b = a.shift();
              if (typeof b == "function") {
                b();
                continue;
              }
              var c = b.func;
              typeof c === "number"
                ? b.arg === void 0
                  ? f.dynCall_v(c)
                  : f.dynCall_vi(c, b.arg)
                : c(b.arg === void 0 ? null : b.arg);
            }
          }
          var wa = [],
            xa = [],
            ya = [],
            za = [],
            Aa = !1;
          function Ba() {
            if (f.preRun) {
              typeof f.preRun == "function" && (f.preRun = [f.preRun]);
              while (f.preRun.length) Ga(f.preRun.shift());
            }
            va(wa);
          }
          function Ca() {
            (Aa = !0),
              !f.noFSInit && !S.init.initialized && S.init(),
              O.init(),
              va(xa);
          }
          function Da() {
            (S.ignorePermissions = !1), va(ya);
          }
          function Ea() {}
          function Fa() {
            if (f.postRun) {
              typeof f.postRun == "function" && (f.postRun = [f.postRun]);
              while (f.postRun.length) Ha(f.postRun.shift());
            }
            va(za);
          }
          function Ga(a) {
            wa.unshift(a);
          }
          function Ha(a) {
            za.unshift(a);
          }
          var Ia = Math.abs,
            Ja = Math.ceil,
            Ka = Math.floor,
            La = Math.min,
            E = 0,
            Ma = null,
            F = null;
          function Na(a) {
            return a;
          }
          function Oa(a) {
            E++, f.monitorRunDependencies && f.monitorRunDependencies(E);
          }
          function Pa(a) {
            E--;
            f.monitorRunDependencies && f.monitorRunDependencies(E);
            if (E == 0) {
              Ma !== null && (clearInterval(Ma), (Ma = null));
              if (F) {
                a = F;
                F = null;
                a();
              }
            }
          }
          f.preloadedImages = {};
          f.preloadedAudios = {};
          var Qa = "data:application/octet-stream;base64,";
          function Ra(a) {
            return String.prototype.startsWith
              ? a.startsWith(Qa)
              : a.indexOf(Qa) === 0;
          }
          var G = g;
          function Sa() {
            try {
              if (f.wasmBinary) return new Uint8Array(f.wasmBinary);
              if (f.readBinary) return f.readBinary(G);
              else throw "both async and sync fetching of the wasm failed";
            } catch (a) {
              $(a);
            }
          }
          function Ta() {
            return !f.wasmBinary && (k || l) && typeof fetch === "function"
              ? fetch(G, { credentials: "same-origin" })
                  .then(function (a) {
                    if (!a.ok)
                      throw "failed to load wasm binary file at '" + G + "'";
                    return a.arrayBuffer();
                  })
                  ["catch"](function () {
                    return Sa();
                  })
              : new (b("Promise"))(function (a, b) {
                  a(Sa());
                });
          }
          function Ua(a) {
            var b = {
              env: a,
              global: { NaN: NaN, Infinity: Infinity },
              "global.Math": Math,
              asm2wasm: ba,
            };
            function c(b, a) {
              a = b.exports;
              f.asm = a;
              Pa("wasm-instantiate");
            }
            Oa("wasm-instantiate");
            function d(a) {
              c(a.instance);
            }
            function g(a) {
              return Ta()
                .then(function (a) {
                  return WebAssembly.instantiate(a, b);
                })
                .then(a, function (a) {
                  o("failed to asynchronously prepare wasm: " + a), $(a);
                });
            }
            function h() {
              if (
                !f.wasmBinary &&
                typeof WebAssembly.instantiateStreaming === "function" &&
                !Ra(G) &&
                typeof fetch === "function"
              )
                fetch(G, { credentials: "same-origin" }).then(function (a) {
                  return WebAssembly.instantiateStreaming(a, b).then(
                    d,
                    function (a) {
                      o("wasm streaming compile failed: " + a),
                        o("falling back to ArrayBuffer instantiation"),
                        g(d);
                    }
                  );
                });
              else return g(d);
            }
            if (f.instantiateWasm)
              try {
                return f.instantiateWasm(b, c);
              } catch (a) {
                o("Module.instantiateWasm callback failed with error: " + a);
                return !1;
              }
            h();
            return {};
          }
          f.asm = function (b, c, d) {
            c.memory = r;
            c.table = new WebAssembly.Table({
              initial: 2194,
              maximum: 2194,
              element: "anyfunc",
            });
            c.__memory_base = 1024;
            c.__table_base = 0;
            b = Ua(c);
            return b;
          };
          xa.push({
            func: function () {
              uc();
            },
          });
          function Va(a, b, c, d) {
            $(
              "Assertion failed: " +
                v(a) +
                ", at: " +
                [
                  b ? v(b) : "unknown filename",
                  c,
                  d ? v(d) : "unknown function",
                ]
            );
          }
          var H = {};
          function Wa(b) {
            var c = 64,
              d = 1024,
              e;
            !Wa.called
              ? ((Wa.called = !0),
                (H.USER = H.LOGNAME = "web_user"),
                (H.PATH = "/"),
                (H.PWD = "/"),
                (H.HOME = "/home/web_user"),
                (H.LANG = "C.UTF-8"),
                (H.LANG =
                  (
                    (typeof navigator === "object" &&
                      navigator.languages &&
                      navigator.languages[0]) ||
                    "C"
                  ).replace("-", "_") + ".UTF-8"),
                (H._ = f.thisProgram),
                (e = fa(d)),
                (c = fa(c * 4)),
                (B[c >> 2] = e),
                (B[b >> 2] = c))
              : ((c = B[b >> 2]), (e = B[c >> 2]));
            b = [];
            var g = 0;
            for (var a in H)
              if (typeof H[a] === "string") {
                var h = a + "=" + H[a];
                b.push(h);
                g += h.length;
              }
            if (g > d)
              throw new Error("Environment size exceeded TOTAL_ENV_SIZE!");
            g = 4;
            for (var d = 0; d < b.length; d++) {
              var h = b[d];
              ka(h, e);
              B[(c + d * g) >> 2] = e;
              e += h.length + 1;
            }
            B[(c + b.length * g) >> 2] = 0;
          }
          function Xa(a) {
            return W(a);
          }
          var I = {},
            Ya = [];
          function Za(a) {
            if (!a) return;
            a = I[a];
            a.refcount++;
          }
          function $a(b) {
            if (!b || I[b]) return b;
            for (var a in I) {
              var c = +a,
                d = I[c].adjusted,
                e = d.length;
              for (var f = 0; f < e; f++) if (d[f] === b) return c;
            }
            return b;
          }
          function ab(a) {
            var b = I[a];
            b && !b.caught && ((b.caught = !0), V.uncaught_exception--);
            b && (b.rethrown = !1);
            Ya.push(a);
            Za($a(a));
            return a;
          }
          var J = 0;
          function bb(a) {
            try {
              return vc(a);
            } catch (a) {}
          }
          function cb(a) {
            if (!a) return;
            var b = I[a];
            b.refcount--;
            b.refcount === 0 &&
              !b.rethrown &&
              (b.destructor && f.dynCall_vi(b.destructor, a),
              delete I[a],
              bb(a));
          }
          function db() {
            X(0);
            var a = Ya.pop();
            a && (cb($a(a)), (J = 0));
          }
          function eb(a) {
            J || (J = a);
            throw a;
          }
          function K() {
            var a = J;
            if (!a) return (q(0), 0) | 0;
            var b = I[a],
              c = b.type;
            if (!c) return (q(0), a) | 0;
            var d = Array.prototype.slice.call(arguments);
            tc(c);
            K.buffer || (K.buffer = W(4));
            B[K.buffer >> 2] = a;
            a = K.buffer;
            for (var e = 0; e < d.length; e++)
              if (d[e] && sc(d[e], c, a)) {
                a = B[a >> 2];
                b.adjusted.push(a);
                return (q(d[e]), a) | 0;
              }
            a = B[a >> 2];
            return (q(c), a) | 0;
          }
          f.___cxa_find_matching_catch = K;
          function fb(a, b) {
            return K(a, b);
          }
          function gb(a, b, c) {
            return K(a, b, c);
          }
          function hb() {
            s = !0;
            throw "Pure virtual function called!";
          }
          function ib() {
            var a = Ya.pop();
            a = $a(a);
            I[a].rethrown || (Ya.push(a), (I[a].rethrown = !0));
            J = a;
            throw a;
          }
          function jb(a, b, c) {
            I[a] = {
              ptr: a,
              adjusted: [a],
              type: b,
              destructor: c,
              refcount: 0,
              caught: !1,
              rethrown: !1,
            };
            J = a;
            !("uncaught_exception" in V)
              ? (V.uncaught_exception = 1)
              : V.uncaught_exception++;
            throw a;
          }
          function kb() {
            return !!V.uncaught_exception;
          }
          function lb() {}
          function L(a) {
            f.___errno_location && (B[f.___errno_location() >> 2] = a);
            return a;
          }
          function mb(a, b) {
            L(1);
            return -1;
          }
          var M = {
              splitPath: function (a) {
                var b =
                  /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                return b.exec(a).slice(1);
              },
              normalizeArray: function (a, b) {
                var c = 0;
                for (var d = a.length - 1; d >= 0; d--) {
                  var e = a[d];
                  e === "."
                    ? a.splice(d, 1)
                    : e === ".."
                    ? (a.splice(d, 1), c++)
                    : c && (a.splice(d, 1), c--);
                }
                if (b) for (; c; c--) a.unshift("..");
                return a;
              },
              normalize: function (a) {
                var b = a.charAt(0) === "/",
                  c = a.substr(-1) === "/";
                a = M.normalizeArray(
                  a.split("/").filter(function (a) {
                    return !!a;
                  }),
                  !b
                ).join("/");
                !a && !b && (a = ".");
                a && c && (a += "/");
                return (b ? "/" : "") + a;
              },
              dirname: function (a) {
                a = M.splitPath(a);
                var b = a[0];
                a = a[1];
                if (!b && !a) return ".";
                a && (a = a.substr(0, a.length - 1));
                return b + a;
              },
              basename: function (a) {
                if (a === "/") return "/";
                var b = a.lastIndexOf("/");
                return b === -1 ? a : a.substr(b + 1);
              },
              extname: function (a) {
                return M.splitPath(a)[3];
              },
              join: function () {
                var a = Array.prototype.slice.call(arguments, 0);
                return M.normalize(a.join("/"));
              },
              join2: function (a, b) {
                return M.normalize(a + "/" + b);
              },
            },
            N = {
              resolve: function () {
                var a = "",
                  b = !1;
                for (var c = arguments.length - 1; c >= -1 && !b; c--) {
                  var d = c >= 0 ? arguments[c] : S.cwd();
                  if (typeof d !== "string")
                    throw new TypeError(
                      "Arguments to path.resolve must be strings"
                    );
                  else if (!d) return "";
                  a = d + "/" + a;
                  b = d.charAt(0) === "/";
                }
                a = M.normalizeArray(
                  a.split("/").filter(function (a) {
                    return !!a;
                  }),
                  !b
                ).join("/");
                return (b ? "/" : "") + a || ".";
              },
              relative: function (a, b) {
                a = N.resolve(a).substr(1);
                b = N.resolve(b).substr(1);
                function c(a) {
                  var b = 0;
                  for (; b < a.length; b++) if (a[b] !== "") break;
                  var c = a.length - 1;
                  for (; c >= 0; c--) if (a[c] !== "") break;
                  return b > c ? [] : a.slice(b, c - b + 1);
                }
                a = c(a.split("/"));
                c = c(b.split("/"));
                b = Math.min(a.length, c.length);
                var d = b;
                for (var e = 0; e < b; e++)
                  if (a[e] !== c[e]) {
                    d = e;
                    break;
                  }
                b = [];
                for (var e = d; e < a.length; e++) b.push("..");
                b = b.concat(c.slice(d));
                return b.join("/");
              },
            },
            O = {
              ttys: [],
              init: function () {},
              shutdown: function () {},
              register: function (a, b) {
                (O.ttys[a] = { input: [], output: [], ops: b }),
                  S.registerDevice(a, O.stream_ops);
              },
              stream_ops: {
                open: function (a) {
                  var b = O.ttys[a.node.rdev];
                  if (!b) throw new S.ErrnoError(19);
                  a.tty = b;
                  a.seekable = !1;
                },
                close: function (a) {
                  a.tty.ops.flush(a.tty);
                },
                flush: function (a) {
                  a.tty.ops.flush(a.tty);
                },
                read: function (b, a, c, d, e) {
                  if (!b.tty || !b.tty.ops.get_char) throw new S.ErrnoError(6);
                  e = 0;
                  for (var f = 0; f < d; f++) {
                    var g;
                    try {
                      g = b.tty.ops.get_char(b.tty);
                    } catch (a) {
                      throw new S.ErrnoError(5);
                    }
                    if (g === void 0 && e === 0) throw new S.ErrnoError(11);
                    if (g === null || g === void 0) break;
                    e++;
                    a[c + f] = g;
                  }
                  e && (b.node.timestamp = Date.now());
                  return e;
                },
                write: function (b, a, c, d, e) {
                  if (!b.tty || !b.tty.ops.put_char) throw new S.ErrnoError(6);
                  try {
                    for (var e = 0; e < d; e++)
                      b.tty.ops.put_char(b.tty, a[c + e]);
                  } catch (a) {
                    throw new S.ErrnoError(5);
                  }
                  d && (b.node.timestamp = Date.now());
                  return e;
                },
              },
              default_tty_ops: {
                get_char: function (a) {
                  if (!a.input.length) {
                    var b = null;
                    typeof window != "undefined" &&
                    typeof window.prompt == "function"
                      ? ((b = window.prompt("Input: ")),
                        b !== null && (b += "\n"))
                      : typeof readline == "function" &&
                        ((b = readline()), b !== null && (b += "\n"));
                    if (!b) return null;
                    a.input = Qb(b, !0);
                  }
                  return a.input.shift();
                },
                put_char: function (a, b) {
                  b === null || b === 10
                    ? (n(u(a.output, 0)), (a.output = []))
                    : b != 0 && a.output.push(b);
                },
                flush: function (a) {
                  a.output &&
                    a.output.length > 0 &&
                    (n(u(a.output, 0)), (a.output = []));
                },
              },
              default_tty1_ops: {
                put_char: function (a, b) {
                  b === null || b === 10
                    ? (o(u(a.output, 0)), (a.output = []))
                    : b != 0 && a.output.push(b);
                },
                flush: function (a) {
                  a.output &&
                    a.output.length > 0 &&
                    (o(u(a.output, 0)), (a.output = []));
                },
              },
            },
            P = {
              ops_table: null,
              mount: function (a) {
                return P.createNode(null, "/", 16384 | 511, 0);
              },
              createNode: function (a, b, c, d) {
                if (S.isBlkdev(c) || S.isFIFO(c)) throw new S.ErrnoError(1);
                P.ops_table ||
                  (P.ops_table = {
                    dir: {
                      node: {
                        getattr: P.node_ops.getattr,
                        setattr: P.node_ops.setattr,
                        lookup: P.node_ops.lookup,
                        mknod: P.node_ops.mknod,
                        rename: P.node_ops.rename,
                        unlink: P.node_ops.unlink,
                        rmdir: P.node_ops.rmdir,
                        readdir: P.node_ops.readdir,
                        symlink: P.node_ops.symlink,
                      },
                      stream: { llseek: P.stream_ops.llseek },
                    },
                    file: {
                      node: {
                        getattr: P.node_ops.getattr,
                        setattr: P.node_ops.setattr,
                      },
                      stream: {
                        llseek: P.stream_ops.llseek,
                        read: P.stream_ops.read,
                        write: P.stream_ops.write,
                        allocate: P.stream_ops.allocate,
                        mmap: P.stream_ops.mmap,
                        msync: P.stream_ops.msync,
                      },
                    },
                    link: {
                      node: {
                        getattr: P.node_ops.getattr,
                        setattr: P.node_ops.setattr,
                        readlink: P.node_ops.readlink,
                      },
                      stream: {},
                    },
                    chrdev: {
                      node: {
                        getattr: P.node_ops.getattr,
                        setattr: P.node_ops.setattr,
                      },
                      stream: S.chrdev_stream_ops,
                    },
                  });
                c = S.createNode(a, b, c, d);
                S.isDir(c.mode)
                  ? ((c.node_ops = P.ops_table.dir.node),
                    (c.stream_ops = P.ops_table.dir.stream),
                    (c.contents = {}))
                  : S.isFile(c.mode)
                  ? ((c.node_ops = P.ops_table.file.node),
                    (c.stream_ops = P.ops_table.file.stream),
                    (c.usedBytes = 0),
                    (c.contents = null))
                  : S.isLink(c.mode)
                  ? ((c.node_ops = P.ops_table.link.node),
                    (c.stream_ops = P.ops_table.link.stream))
                  : S.isChrdev(c.mode) &&
                    ((c.node_ops = P.ops_table.chrdev.node),
                    (c.stream_ops = P.ops_table.chrdev.stream));
                c.timestamp = Date.now();
                a && (a.contents[b] = c);
                return c;
              },
              getFileDataAsRegularArray: function (a) {
                if (a.contents && a.contents.subarray) {
                  var b = [];
                  for (var c = 0; c < a.usedBytes; ++c) b.push(a.contents[c]);
                  return b;
                }
                return a.contents;
              },
              getFileDataAsTypedArray: function (a) {
                if (!a.contents) return new Uint8Array();
                return a.contents.subarray
                  ? a.contents.subarray(0, a.usedBytes)
                  : new Uint8Array(a.contents);
              },
              expandFileStorage: function (a, b) {
                var c = a.contents ? a.contents.length : 0;
                if (c >= b) return;
                var d = 1024 * 1024;
                b = Math.max(b, (c * (c < d ? 2 : 1.125)) | 0);
                c != 0 && (b = Math.max(b, 256));
                d = a.contents;
                a.contents = new Uint8Array(b);
                a.usedBytes > 0 &&
                  a.contents.set(d.subarray(0, a.usedBytes), 0);
                return;
              },
              resizeFileStorage: function (a, b) {
                if (a.usedBytes == b) return;
                if (b == 0) {
                  a.contents = null;
                  a.usedBytes = 0;
                  return;
                }
                if (!a.contents || a.contents.subarray) {
                  var c = a.contents;
                  a.contents = new Uint8Array(new ArrayBuffer(b));
                  c && a.contents.set(c.subarray(0, Math.min(b, a.usedBytes)));
                  a.usedBytes = b;
                  return;
                }
                a.contents || (a.contents = []);
                if (a.contents.length > b) a.contents.length = b;
                else while (a.contents.length < b) a.contents.push(0);
                a.usedBytes = b;
              },
              node_ops: {
                getattr: function (a) {
                  var b = {};
                  b.dev = S.isChrdev(a.mode) ? a.id : 1;
                  b.ino = a.id;
                  b.mode = a.mode;
                  b.nlink = 1;
                  b.uid = 0;
                  b.gid = 0;
                  b.rdev = a.rdev;
                  S.isDir(a.mode)
                    ? (b.size = 4096)
                    : S.isFile(a.mode)
                    ? (b.size = a.usedBytes)
                    : S.isLink(a.mode)
                    ? (b.size = a.link.length)
                    : (b.size = 0);
                  b.atime = new Date(a.timestamp);
                  b.mtime = new Date(a.timestamp);
                  b.ctime = new Date(a.timestamp);
                  b.blksize = 4096;
                  b.blocks = Math.ceil(b.size / b.blksize);
                  return b;
                },
                setattr: function (a, b) {
                  b.mode !== void 0 && (a.mode = b.mode),
                    b.timestamp !== void 0 && (a.timestamp = b.timestamp),
                    b.size !== void 0 && P.resizeFileStorage(a, b.size);
                },
                lookup: function (a, b) {
                  throw S.genericErrors[2];
                },
                mknod: function (a, b, c, d) {
                  return P.createNode(a, b, c, d);
                },
                rename: function (a, b, c) {
                  if (S.isDir(a.mode)) {
                    var d;
                    try {
                      d = S.lookupNode(b, c);
                    } catch (a) {}
                    if (d) for (var e in d.contents) throw new S.ErrnoError(39);
                  }
                  delete a.parent.contents[a.name];
                  a.name = c;
                  b.contents[c] = a;
                  a.parent = b;
                },
                unlink: function (a, b) {
                  delete a.contents[b];
                },
                rmdir: function (a, b) {
                  var c = S.lookupNode(a, b);
                  for (var d in c.contents) throw new S.ErrnoError(39);
                  delete a.contents[b];
                },
                readdir: function (b) {
                  var c = [".", ".."];
                  for (var a in b.contents) {
                    if (!Object.prototype.hasOwnProperty.call(b.contents, a))
                      continue;
                    c.push(a);
                  }
                  return c;
                },
                symlink: function (a, b, c) {
                  a = P.createNode(a, b, 511 | 40960, 0);
                  a.link = c;
                  return a;
                },
                readlink: function (a) {
                  if (!S.isLink(a.mode)) throw new S.ErrnoError(22);
                  return a.link;
                },
              },
              stream_ops: {
                read: function (b, a, c, d, e) {
                  var f = b.node.contents;
                  if (e >= b.node.usedBytes) return 0;
                  b = Math.min(b.node.usedBytes - e, d);
                  if (b > 8 && f.subarray) a.set(f.subarray(e, e + b), c);
                  else for (var d = 0; d < b; d++) a[c + d] = f[e + d];
                  return b;
                },
                write: function (b, a, c, d, e, f) {
                  f = !1;
                  if (!d) return 0;
                  b = b.node;
                  b.timestamp = Date.now();
                  if (a.subarray && (!b.contents || b.contents.subarray))
                    if (f) {
                      b.contents = a.subarray(c, c + d);
                      b.usedBytes = d;
                      return d;
                    } else if (b.usedBytes === 0 && e === 0) {
                      b.contents = new Uint8Array(a.subarray(c, c + d));
                      b.usedBytes = d;
                      return d;
                    } else if (e + d <= b.usedBytes) {
                      b.contents.set(a.subarray(c, c + d), e);
                      return d;
                    }
                  P.expandFileStorage(b, e + d);
                  if (b.contents.subarray && a.subarray)
                    b.contents.set(a.subarray(c, c + d), e);
                  else for (var f = 0; f < d; f++) b.contents[e + f] = a[c + f];
                  b.usedBytes = Math.max(b.usedBytes, e + d);
                  return d;
                },
                llseek: function (a, b, c) {
                  b = b;
                  c === 1
                    ? (b += a.position)
                    : c === 2 &&
                      S.isFile(a.node.mode) &&
                      (b += a.node.usedBytes);
                  if (b < 0) throw new S.ErrnoError(22);
                  return b;
                },
                allocate: function (a, b, c) {
                  P.expandFileStorage(a.node, b + c),
                    (a.node.usedBytes = Math.max(a.node.usedBytes, b + c));
                },
                mmap: function (b, a, c, d, e, f, g) {
                  if (!S.isFile(b.node.mode)) throw new S.ErrnoError(19);
                  c = b.node.contents;
                  if (!(g & 2) && (c.buffer === a || c.buffer === a.buffer))
                    (f = !1), (g = c.byteOffset);
                  else {
                    (e > 0 || e + d < b.node.usedBytes) &&
                      (c.subarray
                        ? (c = c.subarray(e, e + d))
                        : (c = Array.prototype.slice.call(c, e, e + d)));
                    f = !0;
                    g = W(d);
                    if (!g) throw new S.ErrnoError(12);
                    a.set(c, g);
                  }
                  return { ptr: g, allocated: f };
                },
                msync: function (b, a, c, d, e) {
                  if (!S.isFile(b.node.mode)) throw new S.ErrnoError(19);
                  if (e & 2) return 0;
                  P.stream_ops.write(b, a, 0, d, c, !1);
                  return 0;
                },
              },
            },
            Q = {
              dbs: {},
              indexedDB: (function (a) {
                function b() {
                  return a.apply(this, arguments);
                }
                b.toString = function () {
                  return a.toString();
                };
                return b;
              })(function () {
                if (typeof indexedDB !== "undefined") return indexedDB;
                var a = null;
                typeof window === "object" &&
                  (a =
                    window.indexedDB ||
                    window.mozIndexedDB ||
                    window.webkitIndexedDB ||
                    window.msIndexedDB);
                t(a, "IDBFS used, but indexedDB not supported");
                return a;
              }),
              DB_VERSION: 21,
              DB_STORE_NAME: "FILE_DATA",
              mount: function (a) {
                return P.mount.apply(null, arguments);
              },
              syncfs: function (a, b, c) {
                Q.getLocalSet(a, function (d, e) {
                  if (d) return c(d);
                  Q.getRemoteSet(a, function (a, d) {
                    if (a) return c(a);
                    a = b ? d : e;
                    d = b ? e : d;
                    Q.reconcile(a, d, c);
                  });
                });
              },
              getDB: function (a, b) {
                var c = Q.dbs[a];
                if (c) return b(null, c);
                var d;
                try {
                  d = Q.indexedDB().open(a, Q.DB_VERSION);
                } catch (a) {
                  return b(a);
                }
                if (!d) return b("Unable to connect to IndexedDB");
                d.onupgradeneeded = function (b) {
                  var a = b.target.result;
                  b = b.target.transaction;
                  a.objectStoreNames.contains(Q.DB_STORE_NAME)
                    ? (b = b.objectStore(Q.DB_STORE_NAME))
                    : (b = a.createObjectStore(Q.DB_STORE_NAME));
                  b.indexNames.contains("timestamp") ||
                    b.createIndex("timestamp", "timestamp", { unique: !1 });
                };
                d.onsuccess = function () {
                  (c = d.result), (Q.dbs[a] = c), b(null, c);
                };
                d.onerror = function (a) {
                  b(this.error), a.preventDefault();
                };
              },
              getLocalSet: function (a, b) {
                var c = {};
                function d(a) {
                  return a !== "." && a !== "..";
                }
                function e(a) {
                  return function (b) {
                    return M.join2(a, b);
                  };
                }
                a = S.readdir(a.mountpoint).filter(d).map(e(a.mountpoint));
                while (a.length) {
                  var f = a.pop(),
                    g;
                  try {
                    g = S.stat(f);
                  } catch (a) {
                    return b(a);
                  }
                  S.isDir(g.mode) &&
                    a.push.apply(a, S.readdir(f).filter(d).map(e(f)));
                  c[f] = { timestamp: g.mtime };
                }
                return b(null, { type: "local", entries: c });
              },
              getRemoteSet: function (a, b) {
                var c = {};
                Q.getDB(a.mountpoint, function (a, d) {
                  if (a) return b(a);
                  try {
                    a = d.transaction([Q.DB_STORE_NAME], "readonly");
                    a.onerror = function (a) {
                      b(this.error), a.preventDefault();
                    };
                    a = a.objectStore(Q.DB_STORE_NAME);
                    a = a.index("timestamp");
                    a.openKeyCursor().onsuccess = function (a) {
                      a = a.target.result;
                      if (!a)
                        return b(null, { type: "remote", db: d, entries: c });
                      c[a.primaryKey] = { timestamp: a.key };
                      a["continue"]();
                    };
                  } catch (a) {
                    return b(a);
                  }
                });
              },
              loadLocalEntry: function (a, b) {
                try {
                  var c = S.lookupPath(a);
                  c = c.node;
                  a = S.stat(a);
                } catch (a) {
                  return b(a);
                }
                if (S.isDir(a.mode))
                  return b(null, { timestamp: a.mtime, mode: a.mode });
                else if (S.isFile(a.mode)) {
                  c.contents = P.getFileDataAsTypedArray(c);
                  return b(null, {
                    timestamp: a.mtime,
                    mode: a.mode,
                    contents: c.contents,
                  });
                } else return b(new Error("node type not supported"));
              },
              storeLocalEntry: function (a, b, c) {
                try {
                  if (S.isDir(b.mode)) S.mkdir(a, b.mode);
                  else if (S.isFile(b.mode))
                    S.writeFile(a, b.contents, { canOwn: !0 });
                  else return c(new Error("node type not supported"));
                  S.chmod(a, b.mode);
                  S.utime(a, b.timestamp, b.timestamp);
                } catch (a) {
                  return c(a);
                }
                c(null);
              },
              removeLocalEntry: function (a, b) {
                try {
                  S.lookupPath(a);
                  var c = S.stat(a);
                  S.isDir(c.mode)
                    ? S.rmdir(a)
                    : S.isFile(c.mode) && S.unlink(a);
                } catch (a) {
                  return b(a);
                }
                b(null);
              },
              loadRemoteEntry: function (a, b, c) {
                a = a.get(b);
                a.onsuccess = function (a) {
                  c(null, a.target.result);
                };
                a.onerror = function (a) {
                  c(this.error), a.preventDefault();
                };
              },
              storeRemoteEntry: function (a, b, c, d) {
                a = a.put(c, b);
                a.onsuccess = function () {
                  d(null);
                };
                a.onerror = function (a) {
                  d(this.error), a.preventDefault();
                };
              },
              removeRemoteEntry: function (a, b, c) {
                a = a["delete"](b);
                a.onsuccess = function () {
                  c(null);
                };
                a.onerror = function (a) {
                  c(this.error), a.preventDefault();
                };
              },
              reconcile: function (a, b, c) {
                var d = 0,
                  e = [];
                Object.keys(a.entries).forEach(function (c) {
                  var f = a.entries[c],
                    g = b.entries[c];
                  (!g || f.timestamp > g.timestamp) && (e.push(c), d++);
                });
                var f = [];
                Object.keys(b.entries).forEach(function (c) {
                  b.entries[c];
                  var e = a.entries[c];
                  e || (f.push(c), d++);
                });
                if (!d) return c(null);
                var g = 0,
                  h = a.type === "remote" ? a.db : b.db;
                h = h.transaction([Q.DB_STORE_NAME], "readwrite");
                var i = h.objectStore(Q.DB_STORE_NAME);
                function k(a) {
                  if (a) {
                    if (!k.errored) {
                      k.errored = !0;
                      return c(a);
                    }
                    return;
                  }
                  if (++g >= d) return c(null);
                }
                h.onerror = function (a) {
                  k(this.error), a.preventDefault();
                };
                e.sort().forEach(function (a) {
                  b.type === "local"
                    ? Q.loadRemoteEntry(i, a, function (b, c) {
                        if (b) return k(b);
                        Q.storeLocalEntry(a, c, k);
                      })
                    : Q.loadLocalEntry(a, function (b, c) {
                        if (b) return k(b);
                        Q.storeRemoteEntry(i, a, c, k);
                      });
                });
                f.sort()
                  .reverse()
                  .forEach(function (a) {
                    b.type === "local"
                      ? Q.removeLocalEntry(a, k)
                      : Q.removeRemoteEntry(i, a, k);
                  });
              },
            },
            R = {
              DIR_MODE: 16895,
              FILE_MODE: 33279,
              reader: null,
              mount: function (a) {
                t(l);
                R.reader || (R.reader = new FileReaderSync());
                var b = R.createNode(null, "/", R.DIR_MODE, 0),
                  c = {};
                function d(a) {
                  a = a.split("/");
                  var d = b;
                  for (var e = 0; e < a.length - 1; e++) {
                    var f = a.slice(0, e + 1).join("/");
                    c[f] || (c[f] = R.createNode(d, a[e], R.DIR_MODE, 0));
                    d = c[f];
                  }
                  return d;
                }
                function e(a) {
                  a = a.split("/");
                  return a[a.length - 1];
                }
                Array.prototype.forEach.call(a.opts.files || [], function (a) {
                  R.createNode(
                    d(a.name),
                    e(a.name),
                    R.FILE_MODE,
                    0,
                    a,
                    a.lastModifiedDate
                  );
                });
                (a.opts.blobs || []).forEach(function (a) {
                  R.createNode(d(a.name), e(a.name), R.FILE_MODE, 0, a.data);
                });
                (a.opts.packages || []).forEach(function (a) {
                  a.metadata.files.forEach(function (b) {
                    var c = b.filename.substr(1);
                    R.createNode(
                      d(c),
                      e(c),
                      R.FILE_MODE,
                      0,
                      a.blob.slice(b.start, b.end)
                    );
                  });
                });
                return b;
              },
              createNode: function (a, b, c, d, e, f) {
                d = S.createNode(a, b, c);
                d.mode = c;
                d.node_ops = R.node_ops;
                d.stream_ops = R.stream_ops;
                d.timestamp = (f || new Date()).getTime();
                t(R.FILE_MODE !== R.DIR_MODE);
                c === R.FILE_MODE
                  ? ((d.size = e.size), (d.contents = e))
                  : ((d.size = 4096), (d.contents = {}));
                a && (a.contents[b] = d);
                return d;
              },
              node_ops: {
                getattr: function (a) {
                  return {
                    dev: 1,
                    ino: void 0,
                    mode: a.mode,
                    nlink: 1,
                    uid: 0,
                    gid: 0,
                    rdev: void 0,
                    size: a.size,
                    atime: new Date(a.timestamp),
                    mtime: new Date(a.timestamp),
                    ctime: new Date(a.timestamp),
                    blksize: 4096,
                    blocks: Math.ceil(a.size / 4096),
                  };
                },
                setattr: function (a, b) {
                  b.mode !== void 0 && (a.mode = b.mode),
                    b.timestamp !== void 0 && (a.timestamp = b.timestamp);
                },
                lookup: function (a, b) {
                  throw new S.ErrnoError(2);
                },
                mknod: function (a, b, c, d) {
                  throw new S.ErrnoError(1);
                },
                rename: function (a, b, c) {
                  throw new S.ErrnoError(1);
                },
                unlink: function (a, b) {
                  throw new S.ErrnoError(1);
                },
                rmdir: function (a, b) {
                  throw new S.ErrnoError(1);
                },
                readdir: function (b) {
                  var c = [".", ".."];
                  for (var a in b.contents) {
                    if (!Object.prototype.hasOwnProperty.call(b.contents, a))
                      continue;
                    c.push(a);
                  }
                  return c;
                },
                symlink: function (a, b, c) {
                  throw new S.ErrnoError(1);
                },
                readlink: function (a) {
                  throw new S.ErrnoError(1);
                },
              },
              stream_ops: {
                read: function (b, a, c, d, e) {
                  if (e >= b.node.size) return 0;
                  b = b.node.contents.slice(e, e + d);
                  e = R.reader.readAsArrayBuffer(b);
                  a.set(new Uint8Array(e), c);
                  return b.size;
                },
                write: function (b, a, c, d, e) {
                  throw new S.ErrnoError(5);
                },
                llseek: function (a, b, c) {
                  b = b;
                  c === 1
                    ? (b += a.position)
                    : c === 2 && S.isFile(a.node.mode) && (b += a.node.size);
                  if (b < 0) throw new S.ErrnoError(22);
                  return b;
                },
              },
            },
            S = {
              root: null,
              mounts: [],
              devices: {},
              streams: [],
              nextInode: 1,
              nameTable: null,
              currentPath: "/",
              initialized: !1,
              ignorePermissions: !0,
              trackingDelegate: {},
              tracking: { openFlags: { READ: 1, WRITE: 2 } },
              ErrnoError: null,
              genericErrors: {},
              filesystems: null,
              syncFSRequests: 0,
              handleFSError: function (a) {
                if (!(a instanceof S.ErrnoError)) throw a + " : " + oa();
                return L(a.errno);
              },
              lookupPath: function (b, c) {
                b = N.resolve(S.cwd(), b);
                c = c || {};
                if (!b) return { path: "", node: null };
                var d = { follow_mount: !0, recurse_count: 0 };
                for (var a in d) c[a] === void 0 && (c[a] = d[a]);
                if (c.recurse_count > 8) throw new S.ErrnoError(40);
                d = M.normalizeArray(
                  b.split("/").filter(function (a) {
                    return !!a;
                  }),
                  !1
                );
                b = S.root;
                var e = "/";
                for (var f = 0; f < d.length; f++) {
                  var g = f === d.length - 1;
                  if (g && c.parent) break;
                  b = S.lookupNode(b, d[f]);
                  e = M.join2(e, d[f]);
                  S.isMountpoint(b) &&
                    (!g || (g && c.follow_mount)) &&
                    (b = b.mounted.root);
                  if (!g || c.follow) {
                    g = 0;
                    while (S.isLink(b.mode)) {
                      var h = S.readlink(e);
                      e = N.resolve(M.dirname(e), h);
                      h = S.lookupPath(e, { recurse_count: c.recurse_count });
                      b = h.node;
                      if (g++ > 40) throw new S.ErrnoError(40);
                    }
                  }
                }
                return { path: e, node: b };
              },
              getPath: function (a) {
                var b;
                while (!0) {
                  if (S.isRoot(a)) {
                    var c = a.mount.mountpoint;
                    return !b
                      ? c
                      : c[c.length - 1] !== "/"
                      ? c + "/" + b
                      : c + b;
                  }
                  b = b ? a.name + "/" + b : a.name;
                  a = a.parent;
                }
              },
              hashName: function (a, b) {
                var c = 0;
                for (var d = 0; d < b.length; d++)
                  c = ((c << 5) - c + b.charCodeAt(d)) | 0;
                return ((a + c) >>> 0) % S.nameTable.length;
              },
              hashAddNode: function (a) {
                var b = S.hashName(a.parent.id, a.name);
                a.name_next = S.nameTable[b];
                S.nameTable[b] = a;
              },
              hashRemoveNode: function (a) {
                var b = S.hashName(a.parent.id, a.name);
                if (S.nameTable[b] === a) S.nameTable[b] = a.name_next;
                else {
                  b = S.nameTable[b];
                  while (b) {
                    if (b.name_next === a) {
                      b.name_next = a.name_next;
                      break;
                    }
                    b = b.name_next;
                  }
                }
              },
              lookupNode: function (b, c) {
                var a = S.mayLookup(b);
                if (a) throw new S.ErrnoError(a, b);
                a = S.hashName(b.id, c);
                for (var a = S.nameTable[a]; a; a = a.name_next) {
                  var d = a.name;
                  if (a.parent.id === b.id && d === c) return a;
                }
                return S.lookup(b, c);
              },
              createNode: function (a, b, c, d) {
                if (!S.FSNode) {
                  S.FSNode = function (a, b, c, d) {
                    a || (a = this),
                      (this.parent = a),
                      (this.mount = a.mount),
                      (this.mounted = null),
                      (this.id = S.nextInode++),
                      (this.name = b),
                      (this.mode = c),
                      (this.node_ops = {}),
                      (this.stream_ops = {}),
                      (this.rdev = d);
                  };
                  S.FSNode.prototype = {};
                  var e = 292 | 73,
                    f = 146;
                  Object.defineProperties(S.FSNode.prototype, {
                    read: {
                      get: function () {
                        return (this.mode & e) === e;
                      },
                      set: function (a) {
                        a ? (this.mode |= e) : (this.mode &= ~e);
                      },
                    },
                    write: {
                      get: function () {
                        return (this.mode & f) === f;
                      },
                      set: function (a) {
                        a ? (this.mode |= f) : (this.mode &= ~f);
                      },
                    },
                    isFolder: {
                      get: function () {
                        return S.isDir(this.mode);
                      },
                    },
                    isDevice: {
                      get: function () {
                        return S.isChrdev(this.mode);
                      },
                    },
                  });
                }
                a = new S.FSNode(a, b, c, d);
                S.hashAddNode(a);
                return a;
              },
              destroyNode: function (a) {
                S.hashRemoveNode(a);
              },
              isRoot: function (a) {
                return a === a.parent;
              },
              isMountpoint: function (a) {
                return !!a.mounted;
              },
              isFile: function (a) {
                return (a & 61440) === 32768;
              },
              isDir: function (a) {
                return (a & 61440) === 16384;
              },
              isLink: function (a) {
                return (a & 61440) === 40960;
              },
              isChrdev: function (a) {
                return (a & 61440) === 8192;
              },
              isBlkdev: function (a) {
                return (a & 61440) === 24576;
              },
              isFIFO: function (a) {
                return (a & 61440) === 4096;
              },
              isSocket: function (a) {
                return (a & 49152) === 49152;
              },
              flagModes: {
                r: 0,
                rs: 1052672,
                "r+": 2,
                w: 577,
                wx: 705,
                xw: 705,
                "w+": 578,
                "wx+": 706,
                "xw+": 706,
                a: 1089,
                ax: 1217,
                xa: 1217,
                "a+": 1090,
                "ax+": 1218,
                "xa+": 1218,
              },
              modeStringToFlags: function (a) {
                var b = S.flagModes[a];
                if (typeof b === "undefined")
                  throw new Error("Unknown file open mode: " + a);
                return b;
              },
              flagsToPermissionString: function (a) {
                var b = ["r", "w", "rw"][a & 3];
                a & 512 && (b += "w");
                return b;
              },
              nodePermissions: function (a, b) {
                if (S.ignorePermissions) return 0;
                if (b.indexOf("r") !== -1 && !(a.mode & 292)) return 13;
                else if (b.indexOf("w") !== -1 && !(a.mode & 146)) return 13;
                else if (b.indexOf("x") !== -1 && !(a.mode & 73)) return 13;
                return 0;
              },
              mayLookup: function (b) {
                var a = S.nodePermissions(b, "x");
                if (a) return a;
                return !b.node_ops.lookup ? 13 : 0;
              },
              mayCreate: function (a, b) {
                try {
                  S.lookupNode(a, b);
                  return 17;
                } catch (a) {}
                return S.nodePermissions(a, "wx");
              },
              mayDelete: function (a, b, c) {
                try {
                  b = S.lookupNode(a, b);
                } catch (a) {
                  return a.errno;
                }
                a = S.nodePermissions(a, "wx");
                if (a) return a;
                if (c) {
                  if (!S.isDir(b.mode)) return 20;
                  if (S.isRoot(b) || S.getPath(b) === S.cwd()) return 16;
                } else if (S.isDir(b.mode)) return 21;
                return 0;
              },
              mayOpen: function (a, b) {
                if (!a) return 2;
                if (S.isLink(a.mode)) return 40;
                else if (
                  S.isDir(a.mode) &&
                  (S.flagsToPermissionString(b) !== "r" || b & 512)
                )
                  return 21;
                return S.nodePermissions(a, S.flagsToPermissionString(b));
              },
              MAX_OPEN_FDS: 4096,
              nextfd: function (a, b) {
                a = a || 0;
                b = b || S.MAX_OPEN_FDS;
                for (var a = a; a <= b; a++) if (!S.streams[a]) return a;
                throw new S.ErrnoError(24);
              },
              getStream: function (a) {
                return S.streams[a];
              },
              createStream: function (a, b, c) {
                S.FSStream ||
                  ((S.FSStream = function () {}),
                  (S.FSStream.prototype = {}),
                  Object.defineProperties(S.FSStream.prototype, {
                    object: {
                      get: function () {
                        return this.node;
                      },
                      set: function (a) {
                        this.node = a;
                      },
                    },
                    isRead: {
                      get: function () {
                        return (this.flags & 2097155) !== 1;
                      },
                    },
                    isWrite: {
                      get: function () {
                        return (this.flags & 2097155) !== 0;
                      },
                    },
                    isAppend: {
                      get: function () {
                        return this.flags & 1024;
                      },
                    },
                  }));
                var d = new S.FSStream();
                for (var e in a) d[e] = a[e];
                a = d;
                d = S.nextfd(b, c);
                a.fd = d;
                S.streams[d] = a;
                return a;
              },
              closeStream: function (a) {
                S.streams[a] = null;
              },
              chrdev_stream_ops: {
                open: function (a) {
                  var b = S.getDevice(a.node.rdev);
                  a.stream_ops = b.stream_ops;
                  a.stream_ops.open && a.stream_ops.open(a);
                },
                llseek: function () {
                  throw new S.ErrnoError(29);
                },
              },
              major: function (a) {
                return a >> 8;
              },
              minor: function (a) {
                return a & 255;
              },
              makedev: function (a, b) {
                return (a << 8) | b;
              },
              registerDevice: function (a, b) {
                S.devices[a] = { stream_ops: b };
              },
              getDevice: function (a) {
                return S.devices[a];
              },
              getMounts: function (a) {
                var b = [];
                a = [a];
                while (a.length) {
                  var c = a.pop();
                  b.push(c);
                  a.push.apply(a, c.mounts);
                }
                return b;
              },
              syncfs: function (a, b) {
                typeof a === "function" && ((b = a), (a = !1));
                S.syncFSRequests++;
                S.syncFSRequests > 1;
                var c = S.getMounts(S.root.mount),
                  d = 0;
                function e(a) {
                  S.syncFSRequests--;
                  return b(a);
                }
                function f(a) {
                  if (a) {
                    if (!f.errored) {
                      f.errored = !0;
                      return e(a);
                    }
                    return;
                  }
                  ++d >= c.length && e(null);
                }
                c.forEach(function (b) {
                  if (!b.type.syncfs) return f(null);
                  b.type.syncfs(b, a, f);
                });
              },
              mount: function (a, b, c) {
                var d = c === "/",
                  e = !c,
                  f;
                if (d && S.root) throw new S.ErrnoError(16);
                else if (!d && !e) {
                  e = S.lookupPath(c, { follow_mount: !1 });
                  c = e.path;
                  f = e.node;
                  if (S.isMountpoint(f)) throw new S.ErrnoError(16);
                  if (!S.isDir(f.mode)) throw new S.ErrnoError(20);
                }
                e = { type: a, opts: b, mountpoint: c, mounts: [] };
                b = a.mount(e);
                b.mount = e;
                e.root = b;
                d
                  ? (S.root = b)
                  : f && ((f.mounted = e), f.mount && f.mount.mounts.push(e));
                return b;
              },
              unmount: function (a) {
                a = S.lookupPath(a, { follow_mount: !1 });
                if (!S.isMountpoint(a.node)) throw new S.ErrnoError(22);
                a = a.node;
                var b = a.mounted,
                  c = S.getMounts(b);
                Object.keys(S.nameTable).forEach(function (a) {
                  a = S.nameTable[a];
                  while (a) {
                    var b = a.name_next;
                    c.indexOf(a.mount) !== -1 && S.destroyNode(a);
                    a = b;
                  }
                });
                a.mounted = null;
                b = a.mount.mounts.indexOf(b);
                a.mount.mounts.splice(b, 1);
              },
              lookup: function (a, b) {
                return a.node_ops.lookup(a, b);
              },
              mknod: function (b, c, d) {
                var e = S.lookupPath(b, { parent: !0 });
                e = e.node;
                b = M.basename(b);
                if (!b || b === "." || b === "..") throw new S.ErrnoError(22);
                var a = S.mayCreate(e, b);
                if (a) throw new S.ErrnoError(a);
                if (!e.node_ops.mknod) throw new S.ErrnoError(1);
                return e.node_ops.mknod(e, b, c, d);
              },
              create: function (a, b) {
                b = b !== void 0 ? b : 438;
                b &= 4095;
                b |= 32768;
                return S.mknod(a, b, 0);
              },
              mkdir: function (a, b) {
                b = b !== void 0 ? b : 511;
                b &= 511 | 512;
                b |= 16384;
                return S.mknod(a, b, 0);
              },
              mkdirTree: function (a, b) {
                a = a.split("/");
                var c = "";
                for (var d = 0; d < a.length; ++d) {
                  if (!a[d]) continue;
                  c += "/" + a[d];
                  try {
                    S.mkdir(c, b);
                  } catch (a) {
                    if (a.errno != 17) throw a;
                  }
                }
              },
              mkdev: function (a, b, c) {
                typeof c === "undefined" && ((c = b), (b = 438));
                b |= 8192;
                return S.mknod(a, b, c);
              },
              symlink: function (b, c) {
                if (!N.resolve(b)) throw new S.ErrnoError(2);
                var d = S.lookupPath(c, { parent: !0 });
                d = d.node;
                if (!d) throw new S.ErrnoError(2);
                c = M.basename(c);
                var a = S.mayCreate(d, c);
                if (a) throw new S.ErrnoError(a);
                if (!d.node_ops.symlink) throw new S.ErrnoError(1);
                return d.node_ops.symlink(d, c, b);
              },
              rename: function (a, b) {
                var c = M.dirname(a),
                  d = M.dirname(b),
                  e = M.basename(a),
                  f = M.basename(b),
                  g,
                  h;
                try {
                  (g = S.lookupPath(a, { parent: !0 })),
                    (h = g.node),
                    (g = S.lookupPath(b, { parent: !0 })),
                    (g = g.node);
                } catch (a) {
                  throw new S.ErrnoError(16);
                }
                if (!h || !g) throw new S.ErrnoError(2);
                if (h.mount !== g.mount) throw new S.ErrnoError(18);
                var i = S.lookupNode(h, e);
                d = N.relative(a, d);
                if (d.charAt(0) !== ".") throw new S.ErrnoError(22);
                d = N.relative(b, c);
                if (d.charAt(0) !== ".") throw new S.ErrnoError(39);
                try {
                  c = S.lookupNode(g, f);
                } catch (a) {}
                if (i === c) return;
                d = S.isDir(i.mode);
                e = S.mayDelete(h, e, d);
                if (e) throw new S.ErrnoError(e);
                e = c ? S.mayDelete(g, f, d) : S.mayCreate(g, f);
                if (e) throw new S.ErrnoError(e);
                if (!h.node_ops.rename) throw new S.ErrnoError(1);
                if (S.isMountpoint(i) || (c && S.isMountpoint(c)))
                  throw new S.ErrnoError(16);
                if (g !== h) {
                  e = S.nodePermissions(h, "w");
                  if (e) throw new S.ErrnoError(e);
                }
                try {
                  S.trackingDelegate.willMovePath &&
                    S.trackingDelegate.willMovePath(a, b);
                } catch (a) {}
                S.hashRemoveNode(i);
                try {
                  h.node_ops.rename(i, g, f);
                } catch (a) {
                  throw a;
                } finally {
                  S.hashAddNode(i);
                }
                try {
                  S.trackingDelegate.onMovePath &&
                    S.trackingDelegate.onMovePath(a, b);
                } catch (a) {}
              },
              rmdir: function (b) {
                var c = S.lookupPath(b, { parent: !0 });
                c = c.node;
                var d = M.basename(b),
                  e = S.lookupNode(c, d),
                  a = S.mayDelete(c, d, !0);
                if (a) throw new S.ErrnoError(a);
                if (!c.node_ops.rmdir) throw new S.ErrnoError(1);
                if (S.isMountpoint(e)) throw new S.ErrnoError(16);
                try {
                  S.trackingDelegate.willDeletePath &&
                    S.trackingDelegate.willDeletePath(b);
                } catch (a) {}
                c.node_ops.rmdir(c, d);
                S.destroyNode(e);
                try {
                  S.trackingDelegate.onDeletePath &&
                    S.trackingDelegate.onDeletePath(b);
                } catch (a) {}
              },
              readdir: function (a) {
                a = S.lookupPath(a, { follow: !0 });
                a = a.node;
                if (!a.node_ops.readdir) throw new S.ErrnoError(20);
                return a.node_ops.readdir(a);
              },
              unlink: function (b) {
                var c = S.lookupPath(b, { parent: !0 });
                c = c.node;
                var d = M.basename(b),
                  e = S.lookupNode(c, d),
                  a = S.mayDelete(c, d, !1);
                if (a) throw new S.ErrnoError(a);
                if (!c.node_ops.unlink) throw new S.ErrnoError(1);
                if (S.isMountpoint(e)) throw new S.ErrnoError(16);
                try {
                  S.trackingDelegate.willDeletePath &&
                    S.trackingDelegate.willDeletePath(b);
                } catch (a) {}
                c.node_ops.unlink(c, d);
                S.destroyNode(e);
                try {
                  S.trackingDelegate.onDeletePath &&
                    S.trackingDelegate.onDeletePath(b);
                } catch (a) {}
              },
              readlink: function (a) {
                a = S.lookupPath(a);
                a = a.node;
                if (!a) throw new S.ErrnoError(2);
                if (!a.node_ops.readlink) throw new S.ErrnoError(22);
                return N.resolve(S.getPath(a.parent), a.node_ops.readlink(a));
              },
              stat: function (a, b) {
                a = S.lookupPath(a, { follow: !b });
                b = a.node;
                if (!b) throw new S.ErrnoError(2);
                if (!b.node_ops.getattr) throw new S.ErrnoError(1);
                return b.node_ops.getattr(b);
              },
              lstat: function (a) {
                return S.stat(a, !0);
              },
              chmod: function (a, b, c) {
                if (typeof a === "string") {
                  c = S.lookupPath(a, { follow: !c });
                  c = c.node;
                } else c = a;
                if (!c.node_ops.setattr) throw new S.ErrnoError(1);
                c.node_ops.setattr(c, {
                  mode: (b & 4095) | (c.mode & -4096),
                  timestamp: Date.now(),
                });
              },
              lchmod: function (a, b) {
                S.chmod(a, b, !0);
              },
              fchmod: function (a, b) {
                a = S.getStream(a);
                if (!a) throw new S.ErrnoError(9);
                S.chmod(a.node, b);
              },
              chown: function (a, b, c, d) {
                if (typeof a === "string") {
                  b = S.lookupPath(a, { follow: !d });
                  c = b.node;
                } else c = a;
                if (!c.node_ops.setattr) throw new S.ErrnoError(1);
                c.node_ops.setattr(c, { timestamp: Date.now() });
              },
              lchown: function (a, b, c) {
                S.chown(a, b, c, !0);
              },
              fchown: function (a, b, c) {
                a = S.getStream(a);
                if (!a) throw new S.ErrnoError(9);
                S.chown(a.node, b, c);
              },
              truncate: function (a, b) {
                if (b < 0) throw new S.ErrnoError(22);
                if (typeof a === "string") {
                  var c = S.lookupPath(a, { follow: !0 });
                  c = c.node;
                } else c = a;
                if (!c.node_ops.setattr) throw new S.ErrnoError(1);
                if (S.isDir(c.mode)) throw new S.ErrnoError(21);
                if (!S.isFile(c.mode)) throw new S.ErrnoError(22);
                a = S.nodePermissions(c, "w");
                if (a) throw new S.ErrnoError(a);
                c.node_ops.setattr(c, { size: b, timestamp: Date.now() });
              },
              ftruncate: function (a, b) {
                a = S.getStream(a);
                if (!a) throw new S.ErrnoError(9);
                if ((a.flags & 2097155) === 0) throw new S.ErrnoError(22);
                S.truncate(a.node, b);
              },
              utime: function (a, b, c) {
                a = S.lookupPath(a, { follow: !0 });
                a = a.node;
                a.node_ops.setattr(a, { timestamp: Math.max(b, c) });
              },
              open: function (a, b, c, d, e) {
                if (a === "") throw new S.ErrnoError(2);
                b = typeof b === "string" ? S.modeStringToFlags(b) : b;
                c = typeof c === "undefined" ? 438 : c;
                b & 64 ? (c = (c & 4095) | 32768) : (c = 0);
                var g;
                if (typeof a === "object") g = a;
                else {
                  a = M.normalize(a);
                  try {
                    var h = S.lookupPath(a, { follow: !(b & 131072) });
                    g = h.node;
                  } catch (a) {}
                }
                h = !1;
                if (b & 64)
                  if (g) {
                    if (b & 128) throw new S.ErrnoError(17);
                  } else (g = S.mknod(a, c, 0)), (h = !0);
                if (!g) throw new S.ErrnoError(2);
                S.isChrdev(g.mode) && (b &= -513);
                if (b & 65536 && !S.isDir(g.mode)) throw new S.ErrnoError(20);
                if (!h) {
                  c = S.mayOpen(g, b);
                  if (c) throw new S.ErrnoError(c);
                }
                b & 512 && S.truncate(g, 0);
                b &= ~(128 | 512);
                h = S.createStream(
                  {
                    node: g,
                    path: S.getPath(g),
                    flags: b,
                    seekable: !0,
                    position: 0,
                    stream_ops: g.stream_ops,
                    ungotten: [],
                    error: !1,
                  },
                  d,
                  e
                );
                h.stream_ops.open && h.stream_ops.open(h);
                f.logReadFiles &&
                  !(b & 1) &&
                  (S.readFiles || (S.readFiles = {}),
                  a in S.readFiles || (S.readFiles[a] = 1));
                try {
                  if (S.trackingDelegate.onOpenFile) {
                    c = 0;
                    (b & 2097155) !== 1 && (c |= S.tracking.openFlags.READ);
                    (b & 2097155) !== 0 && (c |= S.tracking.openFlags.WRITE);
                    S.trackingDelegate.onOpenFile(a, c);
                  }
                } catch (a) {}
                return h;
              },
              close: function (a) {
                if (S.isClosed(a)) throw new S.ErrnoError(9);
                a.getdents && (a.getdents = null);
                try {
                  a.stream_ops.close && a.stream_ops.close(a);
                } catch (a) {
                  throw a;
                } finally {
                  S.closeStream(a.fd);
                }
                a.fd = null;
              },
              isClosed: function (a) {
                return a.fd === null;
              },
              llseek: function (a, b, c) {
                if (S.isClosed(a)) throw new S.ErrnoError(9);
                if (!a.seekable || !a.stream_ops.llseek)
                  throw new S.ErrnoError(29);
                if (c != 0 && c != 1 && c != 2) throw new S.ErrnoError(22);
                a.position = a.stream_ops.llseek(a, b, c);
                a.ungotten = [];
                return a.position;
              },
              read: function (b, a, c, d, e) {
                if (d < 0 || e < 0) throw new S.ErrnoError(22);
                if (S.isClosed(b)) throw new S.ErrnoError(9);
                if ((b.flags & 2097155) === 1) throw new S.ErrnoError(9);
                if (S.isDir(b.node.mode)) throw new S.ErrnoError(21);
                if (!b.stream_ops.read) throw new S.ErrnoError(22);
                var f = typeof e !== "undefined";
                if (!f) e = b.position;
                else if (!b.seekable) throw new S.ErrnoError(29);
                a = b.stream_ops.read(b, a, c, d, e);
                f || (b.position += a);
                return a;
              },
              write: function (b, a, c, d, e, f) {
                if (d < 0 || e < 0) throw new S.ErrnoError(22);
                if (S.isClosed(b)) throw new S.ErrnoError(9);
                if ((b.flags & 2097155) === 0) throw new S.ErrnoError(9);
                if (S.isDir(b.node.mode)) throw new S.ErrnoError(21);
                if (!b.stream_ops.write) throw new S.ErrnoError(22);
                b.flags & 1024 && S.llseek(b, 0, 2);
                var g = typeof e !== "undefined";
                if (!g) e = b.position;
                else if (!b.seekable) throw new S.ErrnoError(29);
                a = b.stream_ops.write(b, a, c, d, e, f);
                g || (b.position += a);
                try {
                  b.path &&
                    S.trackingDelegate.onWriteToFile &&
                    S.trackingDelegate.onWriteToFile(b.path);
                } catch (a) {}
                return a;
              },
              allocate: function (a, b, c) {
                if (S.isClosed(a)) throw new S.ErrnoError(9);
                if (b < 0 || c <= 0) throw new S.ErrnoError(22);
                if ((a.flags & 2097155) === 0) throw new S.ErrnoError(9);
                if (!S.isFile(a.node.mode) && !S.isDir(a.node.mode))
                  throw new S.ErrnoError(19);
                if (!a.stream_ops.allocate) throw new S.ErrnoError(95);
                a.stream_ops.allocate(a, b, c);
              },
              mmap: function (b, a, c, d, e, f, g) {
                if ((f & 2) !== 0 && (g & 2) === 0 && (b.flags & 2097155) !== 2)
                  throw new S.ErrnoError(13);
                if ((b.flags & 2097155) === 1) throw new S.ErrnoError(13);
                if (!b.stream_ops.mmap) throw new S.ErrnoError(19);
                return b.stream_ops.mmap(b, a, c, d, e, f, g);
              },
              msync: function (b, a, c, d, e) {
                return !b || !b.stream_ops.msync
                  ? 0
                  : b.stream_ops.msync(b, a, c, d, e);
              },
              munmap: function (a) {
                return 0;
              },
              ioctl: function (a, b, c) {
                if (!a.stream_ops.ioctl) throw new S.ErrnoError(25);
                return a.stream_ops.ioctl(a, b, c);
              },
              readFile: function (a, b) {
                b = b || {};
                b.flags = b.flags || "r";
                b.encoding = b.encoding || "binary";
                if (b.encoding !== "utf8" && b.encoding !== "binary")
                  throw new Error('Invalid encoding type "' + b.encoding + '"');
                var c,
                  d = S.open(a, b.flags);
                a = S.stat(a);
                a = a.size;
                var e = new Uint8Array(a);
                S.read(d, e, 0, a, 0);
                b.encoding === "utf8"
                  ? (c = u(e, 0))
                  : b.encoding === "binary" && (c = e);
                S.close(d);
                return c;
              },
              writeFile: function (a, b, c) {
                c = c || {};
                c.flags = c.flags || "w";
                a = S.open(a, c.flags, c.mode);
                if (typeof b === "string") {
                  var d = new Uint8Array(x(b) + 1),
                    e = w(b, d, 0, d.length);
                  S.write(a, d, 0, e, void 0, c.canOwn);
                } else if (ArrayBuffer.isView(b))
                  S.write(a, b, 0, b.byteLength, void 0, c.canOwn);
                else throw new Error("Unsupported data type");
                S.close(a);
              },
              cwd: function () {
                return S.currentPath;
              },
              chdir: function (b) {
                b = S.lookupPath(b, { follow: !0 });
                if (b.node === null) throw new S.ErrnoError(2);
                if (!S.isDir(b.node.mode)) throw new S.ErrnoError(20);
                var a = S.nodePermissions(b.node, "x");
                if (a) throw new S.ErrnoError(a);
                S.currentPath = b.path;
              },
              createDefaultDirectories: function () {
                S.mkdir("/tmp"), S.mkdir("/home"), S.mkdir("/home/web_user");
              },
              createDefaultDevices: function () {
                S.mkdir("/dev");
                S.registerDevice(S.makedev(1, 3), {
                  read: function () {
                    return 0;
                  },
                  write: function (b, a, c, d, e) {
                    return d;
                  },
                });
                S.mkdev("/dev/null", S.makedev(1, 3));
                O.register(S.makedev(5, 0), O.default_tty_ops);
                O.register(S.makedev(6, 0), O.default_tty1_ops);
                S.mkdev("/dev/tty", S.makedev(5, 0));
                S.mkdev("/dev/tty1", S.makedev(6, 0));
                var a;
                if (
                  typeof crypto === "object" &&
                  typeof crypto.getRandomValues === "function"
                ) {
                  var b = new Uint8Array(1);
                  a = function () {
                    crypto.getRandomValues(b);
                    return b[0];
                  };
                }
                a ||
                  (a = function () {
                    $("random_device");
                  });
                S.createDevice("/dev", "random", a);
                S.createDevice("/dev", "urandom", a);
                S.mkdir("/dev/shm");
                S.mkdir("/dev/shm/tmp");
              },
              createSpecialDirectories: function () {
                S.mkdir("/proc"),
                  S.mkdir("/proc/self"),
                  S.mkdir("/proc/self/fd"),
                  S.mount(
                    {
                      mount: function () {
                        var a = S.createNode(
                          "/proc/self",
                          "fd",
                          16384 | 511,
                          73
                        );
                        a.node_ops = {
                          lookup: function (a, b) {
                            a = +b;
                            var c = S.getStream(a);
                            if (!c) throw new S.ErrnoError(9);
                            b = {
                              parent: null,
                              mount: { mountpoint: "fake" },
                              node_ops: {
                                readlink: function () {
                                  return c.path;
                                },
                              },
                            };
                            b.parent = b;
                            return b;
                          },
                        };
                        return a;
                      },
                    },
                    {},
                    "/proc/self/fd"
                  );
              },
              createStandardStreams: function () {
                f.stdin
                  ? S.createDevice("/dev", "stdin", f.stdin)
                  : S.symlink("/dev/tty", "/dev/stdin"),
                  f.stdout
                    ? S.createDevice("/dev", "stdout", null, f.stdout)
                    : S.symlink("/dev/tty", "/dev/stdout"),
                  f.stderr
                    ? S.createDevice("/dev", "stderr", null, f.stderr)
                    : S.symlink("/dev/tty1", "/dev/stderr"),
                  S.open("/dev/stdin", "r"),
                  S.open("/dev/stdout", "w"),
                  S.open("/dev/stderr", "w");
              },
              ensureErrnoError: function () {
                if (S.ErrnoError) return;
                S.ErrnoError = function (a, b) {
                  (this.node = b),
                    (this.setErrno = function (a) {
                      this.errno = a;
                    }),
                    this.setErrno(a),
                    (this.message = "FS error"),
                    this.stack &&
                      Object.defineProperty(this, "stack", {
                        value: new Error().stack,
                        writable: !0,
                      });
                };
                S.ErrnoError.prototype = new Error();
                S.ErrnoError.prototype.constructor = S.ErrnoError;
                [2].forEach(function (a) {
                  (S.genericErrors[a] = new S.ErrnoError(a)),
                    (S.genericErrors[a].stack = "<generic error, no stack>");
                });
              },
              staticInit: function () {
                S.ensureErrnoError(),
                  (S.nameTable = new Array(4096)),
                  S.mount(P, {}, "/"),
                  S.createDefaultDirectories(),
                  S.createDefaultDevices(),
                  S.createSpecialDirectories(),
                  (S.filesystems = { MEMFS: P, IDBFS: Q, WORKERFS: R });
              },
              init: function (a, b, c) {
                (S.init.initialized = !0),
                  S.ensureErrnoError(),
                  (f.stdin = a || f.stdin),
                  (f.stdout = b || f.stdout),
                  (f.stderr = c || f.stderr),
                  S.createStandardStreams();
              },
              quit: function () {
                S.init.initialized = !1;
                var a = f._fflush;
                a && a(0);
                for (var a = 0; a < S.streams.length; a++) {
                  var b = S.streams[a];
                  if (!b) continue;
                  S.close(b);
                }
              },
              getMode: function (a, b) {
                var c = 0;
                a && (c |= 292 | 73);
                b && (c |= 146);
                return c;
              },
              joinPath: function (a, b) {
                a = M.join.apply(null, a);
                b && a[0] == "/" && (a = a.substr(1));
                return a;
              },
              absolutePath: function (a, b) {
                return N.resolve(b, a);
              },
              standardizePath: function (a) {
                return M.normalize(a);
              },
              findObject: function (a, b) {
                a = S.analyzePath(a, b);
                if (a.exists) return a.object;
                else {
                  L(a.error);
                  return null;
                }
              },
              analyzePath: function (a, b) {
                try {
                  var c = S.lookupPath(a, { follow: !b });
                  a = c.path;
                } catch (a) {}
                var d = {
                  isRoot: !1,
                  exists: !1,
                  error: 0,
                  name: null,
                  path: null,
                  object: null,
                  parentExists: !1,
                  parentPath: null,
                  parentObject: null,
                };
                try {
                  var c = S.lookupPath(a, { parent: !0 });
                  d.parentExists = !0;
                  d.parentPath = c.path;
                  d.parentObject = c.node;
                  d.name = M.basename(a);
                  c = S.lookupPath(a, { follow: !b });
                  d.exists = !0;
                  d.path = c.path;
                  d.object = c.node;
                  d.name = c.node.name;
                  d.isRoot = c.path === "/";
                } catch (a) {
                  d.error = a.errno;
                }
                return d;
              },
              createFolder: function (a, b, c, d) {
                a = M.join2(typeof a === "string" ? a : S.getPath(a), b);
                b = S.getMode(c, d);
                return S.mkdir(a, b);
              },
              createPath: function (a, b, c, d) {
                a = typeof a === "string" ? a : S.getPath(a);
                c = b.split("/").reverse();
                while (c.length) {
                  d = c.pop();
                  if (!d) continue;
                  var e = M.join2(a, d);
                  try {
                    S.mkdir(e);
                  } catch (a) {}
                  a = e;
                }
                return e;
              },
              createFile: function (a, b, c, d, e) {
                c = M.join2(typeof a === "string" ? a : S.getPath(a), b);
                a = S.getMode(d, e);
                return S.create(c, a);
              },
              createDataFile: function (a, b, c, d, e, f) {
                b = b
                  ? M.join2(typeof a === "string" ? a : S.getPath(a), b)
                  : a;
                a = S.getMode(d, e);
                d = S.create(b, a);
                if (c) {
                  if (typeof c === "string") {
                    e = new Array(c.length);
                    for (var b = 0, g = c.length; b < g; ++b)
                      e[b] = c.charCodeAt(b);
                    c = e;
                  }
                  S.chmod(d, a | 146);
                  b = S.open(d, "w");
                  S.write(b, c, 0, c.length, 0, f);
                  S.close(b);
                  S.chmod(d, a);
                }
                return d;
              },
              createDevice: function (a, b, c, d) {
                a = M.join2(typeof a === "string" ? a : S.getPath(a), b);
                b = S.getMode(!!c, !!d);
                S.createDevice.major || (S.createDevice.major = 64);
                var e = S.makedev(S.createDevice.major++, 0);
                S.registerDevice(e, {
                  open: function (a) {
                    a.seekable = !1;
                  },
                  close: function (a) {
                    d && d.buffer && d.buffer.length && d(10);
                  },
                  read: function (b, a, d, e, f) {
                    f = 0;
                    for (var g = 0; g < e; g++) {
                      var h;
                      try {
                        h = c();
                      } catch (a) {
                        throw new S.ErrnoError(5);
                      }
                      if (h === void 0 && f === 0) throw new S.ErrnoError(11);
                      if (h === null || h === void 0) break;
                      f++;
                      a[d + g] = h;
                    }
                    f && (b.node.timestamp = Date.now());
                    return f;
                  },
                  write: function (b, a, c, e, f) {
                    for (var f = 0; f < e; f++)
                      try {
                        d(a[c + f]);
                      } catch (a) {
                        throw new S.ErrnoError(5);
                      }
                    e && (b.node.timestamp = Date.now());
                    return f;
                  },
                });
                return S.mkdev(a, b, e);
              },
              createLink: function (a, b, c, d, e) {
                d = M.join2(typeof a === "string" ? a : S.getPath(a), b);
                return S.symlink(c, d);
              },
              forceLoadFile: function (a) {
                if (a.isDevice || a.isFolder || a.link || a.contents) return !0;
                var b = !0;
                if (typeof XMLHttpRequest !== "undefined")
                  throw new Error(
                    "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
                  );
                else if (f.read)
                  try {
                    (a.contents = Qb(f.read(a.url), !0)),
                      (a.usedBytes = a.contents.length);
                  } catch (a) {
                    b = !1;
                  }
                else
                  throw new Error(
                    "Cannot load without read() or XMLHttpRequest."
                  );
                b || L(5);
                return b;
              },
              createLazyFile: function (a, b, c, d, e) {
                function f() {
                  (this.lengthKnown = !1), (this.chunks = []);
                }
                f.prototype.get = function (a) {
                  if (a > this.length - 1 || a < 0) return void 0;
                  var b = a % this.chunkSize;
                  a = (a / this.chunkSize) | 0;
                  return this.getter(a)[b];
                };
                f.prototype.setDataGetter = function (a) {
                  this.getter = a;
                };
                f.prototype.cacheLength = function () {
                  var a = new XMLHttpRequest();
                  a.open("HEAD", c, !1);
                  a.send(null);
                  if (
                    !((a.status >= 200 && a.status < 300) || a.status === 304)
                  )
                    throw new Error(
                      "Couldn't load " + c + ". Status: " + a.status
                    );
                  var b = Number(a.getResponseHeader("Content-length")),
                    d,
                    e =
                      (d = a.getResponseHeader("Accept-Ranges")) &&
                      d === "bytes";
                  a =
                    (d = a.getResponseHeader("Content-Encoding")) &&
                    d === "gzip";
                  var f = 1024 * 1024;
                  e || (f = b);
                  var g = function (d, e) {
                      if (d > e)
                        throw new Error(
                          "invalid range (" +
                            d +
                            ", " +
                            e +
                            ") or no bytes requested!"
                        );
                      if (e > b - 1)
                        throw new Error(
                          "only " + b + " bytes available! programmer error!"
                        );
                      var a = new XMLHttpRequest();
                      a.open("GET", c, !1);
                      b !== f &&
                        a.setRequestHeader("Range", "bytes=" + d + "-" + e);
                      typeof Uint8Array != "undefined" &&
                        (a.responseType = "arraybuffer");
                      a.overrideMimeType &&
                        a.overrideMimeType(
                          "text/plain; charset=x-user-defined"
                        );
                      a.send(null);
                      if (
                        !(
                          (a.status >= 200 && a.status < 300) ||
                          a.status === 304
                        )
                      )
                        throw new Error(
                          "Couldn't load " + c + ". Status: " + a.status
                        );
                      if (a.response !== void 0)
                        return new Uint8Array(a.response || []);
                      else return Qb(a.responseText || "", !0);
                    },
                    h = this;
                  h.setDataGetter(function (a) {
                    var c = a * f,
                      d = (a + 1) * f - 1;
                    d = Math.min(d, b - 1);
                    typeof h.chunks[a] === "undefined" &&
                      (h.chunks[a] = g(c, d));
                    if (typeof h.chunks[a] === "undefined")
                      throw new Error("doXHR failed!");
                    return h.chunks[a];
                  });
                  (a || !b) &&
                    ((f = b = 1), (b = this.getter(0).length), (f = b));
                  this._length = b;
                  this._chunkSize = f;
                  this.lengthKnown = !0;
                };
                if (typeof XMLHttpRequest !== "undefined") {
                  if (!l)
                    throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                  f = new f();
                  Object.defineProperties(f, {
                    length: {
                      get: function () {
                        this.lengthKnown || this.cacheLength();
                        return this._length;
                      },
                    },
                    chunkSize: {
                      get: function () {
                        this.lengthKnown || this.cacheLength();
                        return this._chunkSize;
                      },
                    },
                  });
                  f = { isDevice: !1, contents: f };
                } else var f = { isDevice: !1, url: c };
                var g = S.createFile(a, b, f, d, e);
                f.contents
                  ? (g.contents = f.contents)
                  : f.url && ((g.contents = null), (g.url = f.url));
                Object.defineProperties(g, {
                  usedBytes: {
                    get: function () {
                      return this.contents.length;
                    },
                  },
                });
                var h = {};
                a = Object.keys(g.stream_ops);
                a.forEach(function (a) {
                  var b = g.stream_ops[a];
                  h[a] = function () {
                    if (!S.forceLoadFile(g)) throw new S.ErrnoError(5);
                    return b.apply(null, arguments);
                  };
                });
                h.read = function (b, a, c, d, e) {
                  if (!S.forceLoadFile(g)) throw new S.ErrnoError(5);
                  b = b.node.contents;
                  if (e >= b.length) return 0;
                  d = Math.min(b.length - e, d);
                  if (b.slice) for (var f = 0; f < d; f++) a[c + f] = b[e + f];
                  else for (var f = 0; f < d; f++) a[c + f] = b.get(e + f);
                  return d;
                };
                g.stream_ops = h;
                return g;
              },
              createPreloadedFile: function (a, b, c, d, e, g, h, i, j, k) {
                Browser.init();
                var l = b ? N.resolve(M.join2(a, b)) : a,
                  m = Na("cp " + l);
                function n(c) {
                  function n(c) {
                    k && k(),
                      i || S.createDataFile(a, b, c, d, e, j),
                      g && g(),
                      Pa(m);
                  }
                  var o = !1;
                  f.preloadPlugins.forEach(function (a) {
                    if (o) return;
                    a.canHandle(l) &&
                      (a.handle(c, l, n, function () {
                        h && h(), Pa(m);
                      }),
                      (o = !0));
                  });
                  o || n(c);
                }
                Oa(m);
                typeof c == "string"
                  ? Browser.asyncLoad(
                      c,
                      function (a) {
                        n(a);
                      },
                      h
                    )
                  : n(c);
              },
              indexedDB: function () {
                return (
                  window.indexedDB ||
                  window.mozIndexedDB ||
                  window.webkitIndexedDB ||
                  window.msIndexedDB
                );
              },
              DB_NAME: function () {
                return "EM_FS_" + window.location.pathname;
              },
              DB_VERSION: 20,
              DB_STORE_NAME: "FILE_DATA",
              saveFilesToDB: function (a, b, c) {
                b = b || function () {};
                c = c || function () {};
                var d = S.indexedDB();
                try {
                  var e = d.open(S.DB_NAME(), S.DB_VERSION);
                } catch (a) {
                  return c(a);
                }
                e.onupgradeneeded = function () {
                  var a = e.result;
                  a.createObjectStore(S.DB_STORE_NAME);
                };
                e.onsuccess = function () {
                  var d = e.result;
                  d = d.transaction([S.DB_STORE_NAME], "readwrite");
                  var f = d.objectStore(S.DB_STORE_NAME),
                    g = 0,
                    h = 0,
                    i = a.length;
                  function j() {
                    h == 0 ? b() : c();
                  }
                  a.forEach(function (a) {
                    a = f.put(S.analyzePath(a).object.contents, a);
                    a.onsuccess = function () {
                      g++, g + h == i && j();
                    };
                    a.onerror = function () {
                      h++, g + h == i && j();
                    };
                  });
                  d.onerror = c;
                };
                e.onerror = c;
              },
              loadFilesFromDB: function (a, b, c) {
                b = b || function () {};
                c = c || function () {};
                var d = S.indexedDB();
                try {
                  var e = d.open(S.DB_NAME(), S.DB_VERSION);
                } catch (a) {
                  return c(a);
                }
                e.onupgradeneeded = c;
                e.onsuccess = function () {
                  var d = e.result;
                  try {
                    d = d.transaction([S.DB_STORE_NAME], "readonly");
                  } catch (a) {
                    c(a);
                    return;
                  }
                  var f = d.objectStore(S.DB_STORE_NAME),
                    g = 0,
                    h = 0,
                    i = a.length;
                  function j() {
                    h == 0 ? b() : c();
                  }
                  a.forEach(function (a) {
                    var b = f.get(a);
                    b.onsuccess = function () {
                      S.analyzePath(a).exists && S.unlink(a),
                        S.createDataFile(
                          M.dirname(a),
                          M.basename(a),
                          b.result,
                          !0,
                          !0,
                          !0
                        ),
                        g++,
                        g + h == i && j();
                    };
                    b.onerror = function () {
                      h++, g + h == i && j();
                    };
                  });
                  d.onerror = c;
                };
                e.onerror = c;
              },
            },
            T = {
              DEFAULT_POLLMASK: 5,
              mappings: {},
              umask: 511,
              calculateAt: function (a, b) {
                if (b[0] !== "/") {
                  var c;
                  if (a === -100) c = S.cwd();
                  else {
                    a = S.getStream(a);
                    if (!a) throw new S.ErrnoError(9);
                    c = a.path;
                  }
                  b = M.join2(c, b);
                }
                return b;
              },
              doStat: function (a, b, c) {
                try {
                  a = a(b);
                } catch (a) {
                  if (
                    a &&
                    a.node &&
                    M.normalize(b) !== M.normalize(S.getPath(a.node))
                  )
                    return -20;
                  throw a;
                }
                B[c >> 2] = a.dev;
                B[(c + 4) >> 2] = 0;
                B[(c + 8) >> 2] = a.ino;
                B[(c + 12) >> 2] = a.mode;
                B[(c + 16) >> 2] = a.nlink;
                B[(c + 20) >> 2] = a.uid;
                B[(c + 24) >> 2] = a.gid;
                B[(c + 28) >> 2] = a.rdev;
                B[(c + 32) >> 2] = 0;
                (tempI64 = [
                  a.size >>> 0,
                  ((tempDouble = a.size),
                  +Ia(tempDouble) >= 1
                    ? tempDouble > 0
                      ? (La(+Ka(tempDouble / 4294967296), 4294967295) | 0) >>> 0
                      : ~~+Ja(
                          (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
                        ) >>> 0
                    : 0),
                ]),
                  (B[(c + 40) >> 2] = tempI64[0]),
                  (B[(c + 44) >> 2] = tempI64[1]);
                B[(c + 48) >> 2] = 4096;
                B[(c + 52) >> 2] = a.blocks;
                B[(c + 56) >> 2] = (a.atime.getTime() / 1e3) | 0;
                B[(c + 60) >> 2] = 0;
                B[(c + 64) >> 2] = (a.mtime.getTime() / 1e3) | 0;
                B[(c + 68) >> 2] = 0;
                B[(c + 72) >> 2] = (a.ctime.getTime() / 1e3) | 0;
                B[(c + 76) >> 2] = 0;
                (tempI64 = [
                  a.ino >>> 0,
                  ((tempDouble = a.ino),
                  +Ia(tempDouble) >= 1
                    ? tempDouble > 0
                      ? (La(+Ka(tempDouble / 4294967296), 4294967295) | 0) >>> 0
                      : ~~+Ja(
                          (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
                        ) >>> 0
                    : 0),
                ]),
                  (B[(c + 80) >> 2] = tempI64[0]),
                  (B[(c + 84) >> 2] = tempI64[1]);
                return 0;
              },
              doMsync: function (a, b, c, d) {
                a = new Uint8Array(A.subarray(a, a + c));
                S.msync(b, a, 0, c, d);
              },
              doMkdir: function (a, b) {
                a = M.normalize(a);
                a[a.length - 1] === "/" && (a = a.substr(0, a.length - 1));
                S.mkdir(a, b, 0);
                return 0;
              },
              doMknod: function (a, b, c) {
                switch (b & 61440) {
                  case 32768:
                  case 8192:
                  case 24576:
                  case 4096:
                  case 49152:
                    break;
                  default:
                    return -22;
                }
                S.mknod(a, b, c);
                return 0;
              },
              doReadlink: function (a, b, c) {
                if (c <= 0) return -22;
                a = S.readlink(a);
                var d = Math.min(c, x(a)),
                  e = z[b + d];
                ha(a, b, c + 1);
                z[b + d] = e;
                return d;
              },
              doAccess: function (a, b) {
                if (b & -8) return -22;
                a = S.lookupPath(a, { follow: !0 });
                a = a.node;
                var c = "";
                b & 4 && (c += "r");
                b & 2 && (c += "w");
                b & 1 && (c += "x");
                return c && S.nodePermissions(a, c) ? -13 : 0;
              },
              doDup: function (a, b, c) {
                var d = S.getStream(c);
                d && S.close(d);
                return S.open(a, b, 0, c, c).fd;
              },
              doReadv: function (a, b, c, d) {
                var e = 0;
                for (var f = 0; f < c; f++) {
                  var g = B[(b + f * 8) >> 2],
                    h = B[(b + (f * 8 + 4)) >> 2];
                  g = S.read(a, z, g, h, d);
                  if (g < 0) return -1;
                  e += g;
                  if (g < h) break;
                }
                return e;
              },
              doWritev: function (a, b, c, d) {
                var e = 0;
                for (var f = 0; f < c; f++) {
                  var g = B[(b + f * 8) >> 2],
                    h = B[(b + (f * 8 + 4)) >> 2];
                  g = S.write(a, z, g, h, d);
                  if (g < 0) return -1;
                  e += g;
                }
                return e;
              },
              varargs: 0,
              get: function (a) {
                T.varargs += 4;
                a = B[(T.varargs - 4) >> 2];
                return a;
              },
              getStr: function () {
                var a = v(T.get());
                return a;
              },
              getStreamFromFD: function () {
                var a = S.getStream(T.get());
                if (!a) throw new S.ErrnoError(9);
                return a;
              },
              get64: function () {
                var a = T.get();
                T.get();
                return a;
              },
              getZero: function () {
                T.get();
              },
            };
          function nb(a, b) {
            T.varargs = b;
            try {
              a = T.getStreamFromFD();
              b = T.get();
              var c = T.get(),
                d = T.get(),
                e = T.get(),
                f = 4294967296;
              b = b * f + (c >>> 0);
              f = 9007199254740992;
              if (b <= -f || b >= f) return -75;
              S.llseek(a, b, e);
              (tempI64 = [
                a.position >>> 0,
                ((tempDouble = a.position),
                +Ia(tempDouble) >= 1
                  ? tempDouble > 0
                    ? (La(+Ka(tempDouble / 4294967296), 4294967295) | 0) >>> 0
                    : ~~+Ja(
                        (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
                      ) >>> 0
                  : 0),
              ]),
                (B[d >> 2] = tempI64[0]),
                (B[(d + 4) >> 2] = tempI64[1]);
              a.getdents && b === 0 && e === 0 && (a.getdents = null);
              return 0;
            } catch (a) {
              (typeof S === "undefined" || !(a instanceof S.ErrnoError)) &&
                $(a);
              return -a.errno;
            }
          }
          function ob(a, b) {
            T.varargs = b;
            try {
              a = T.getStreamFromFD();
              b = T.get();
              var c = T.get();
              return T.doWritev(a, b, c);
            } catch (a) {
              (typeof S === "undefined" || !(a instanceof S.ErrnoError)) &&
                $(a);
              return -a.errno;
            }
          }
          function pb(a, b) {
            T.varargs = b;
            try {
              a = T.getStreamFromFD();
              S.close(a);
              return 0;
            } catch (a) {
              (typeof S === "undefined" || !(a instanceof S.ErrnoError)) &&
                $(a);
              return -a.errno;
            }
          }
          function qb(a, b) {
            T.varargs = b;
            try {
              a = T.get();
              b = T.get();
              if (a == -1 || b == 0) return -22;
              var c = T.mappings[a];
              if (!c) return 0;
              if (b === c.len) {
                var d = S.getStream(c.fd);
                T.doMsync(a, d, b, c.flags);
                S.munmap(d);
                T.mappings[a] = null;
                c.allocated && vc(c.malloc);
              }
              return 0;
            } catch (a) {
              (typeof S === "undefined" || !(a instanceof S.ErrnoError)) &&
                $(a);
              return -a.errno;
            }
          }
          function rb() {}
          function sb() {
            f.abort();
          }
          function tb() {
            $();
          }
          function ub() {
            return (
              typeof performance === "object" &&
              performance &&
              typeof performance.now === "function"
            );
          }
          function vb(a, b) {
            var c;
            if (a === 0) c = Date.now();
            else if (a === 1 && ub()) c = tb();
            else {
              L(22);
              return -1;
            }
            B[b >> 2] = (c / 1e3) | 0;
            B[(b + 4) >> 2] = ((c % 1e3) * 1e3 * 1e3) | 0;
            return 0;
          }
          function wb() {
            return z.length;
          }
          function xb(a) {
            ad(a);
          }
          function U(a) {
            if (a === 0) return 0;
            a = v(a);
            if (!Object.prototype.hasOwnProperty.call(H, a)) return 0;
            U.ret && vc(U.ret);
            U.ret = ia(H[a]);
            return U.ret;
          }
          function yb(a) {
            return a;
          }
          function zb(a) {
            return Math.pow(2, a);
          }
          function Ab(a) {
            return zb(a);
          }
          function Bb(a) {
            var b = Cb,
              c = b.LLVM_SAVEDSTACKS[a];
            b.LLVM_SAVEDSTACKS.splice(a, 1);
            Y(c);
          }
          function Cb() {
            var a = Cb;
            a.LLVM_SAVEDSTACKS || (a.LLVM_SAVEDSTACKS = []);
            a.LLVM_SAVEDSTACKS.push(Z());
            return a.LLVM_SAVEDSTACKS.length - 1;
          }
          function Db() {
            $("trap!");
          }
          function Eb(a, b, c) {
            A.set(A.subarray(b, b + c), a);
          }
          function Fb() {
            return 0;
          }
          function Gb(a) {
            $("OOM");
          }
          function Hb(a) {
            var b = 65536;
            a = pa(a, b);
            b = y.byteLength;
            try {
              a = r.grow((a - b) / 65536);
              if (a !== (-1 | 0)) {
                y = r.buffer;
                return !0;
              } else return !1;
            } catch (a) {
              return !1;
            }
          }
          function Ib(a) {
            var b = wb(),
              c = 65536,
              d = 2147483648 - c;
            if (a > d) return !1;
            var e = 16777216;
            b = Math.max(b, e);
            while (b < a)
              b <= 536870912
                ? (b = pa(2 * b, c))
                : (b = Math.min(pa((3 * b + 2147483648) / 4, c), d));
            if (!Hb(b)) return !1;
            ta();
            return !0;
          }
          function Jb(a) {
            return a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0);
          }
          function Kb(a, b) {
            var c = 0;
            for (var d = 0; d <= b; c += a[d++]);
            return c;
          }
          var Lb = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            Mb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          function Nb(a, b) {
            a = new Date(a.getTime());
            while (b > 0) {
              var c = Jb(a.getFullYear()),
                d = a.getMonth();
              c = (c ? Lb : Mb)[d];
              if (b > c - a.getDate())
                (b -= c - a.getDate() + 1),
                  a.setDate(1),
                  d < 11
                    ? a.setMonth(d + 1)
                    : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
              else {
                a.setDate(a.getDate() + b);
                return a;
              }
            }
            return a;
          }
          function Ob(a, b, c, d) {
            var e = B[(d + 40) >> 2];
            d = {
              tm_sec: B[d >> 2],
              tm_min: B[(d + 4) >> 2],
              tm_hour: B[(d + 8) >> 2],
              tm_mday: B[(d + 12) >> 2],
              tm_mon: B[(d + 16) >> 2],
              tm_year: B[(d + 20) >> 2],
              tm_wday: B[(d + 24) >> 2],
              tm_yday: B[(d + 28) >> 2],
              tm_isdst: B[(d + 32) >> 2],
              tm_gmtoff: B[(d + 36) >> 2],
              tm_zone: e ? v(e) : "",
            };
            e = v(c);
            c = {
              "%c": "%a %b %d %H:%M:%S %Y",
              "%D": "%m/%d/%y",
              "%F": "%Y-%m-%d",
              "%h": "%b",
              "%r": "%I:%M:%S %p",
              "%R": "%H:%M",
              "%T": "%H:%M:%S",
              "%x": "%m/%d/%y",
              "%X": "%H:%M:%S",
              "%Ec": "%c",
              "%EC": "%C",
              "%Ex": "%m/%d/%y",
              "%EX": "%H:%M:%S",
              "%Ey": "%y",
              "%EY": "%Y",
              "%Od": "%d",
              "%Oe": "%e",
              "%OH": "%H",
              "%OI": "%I",
              "%Om": "%m",
              "%OM": "%M",
              "%OS": "%S",
              "%Ou": "%u",
              "%OU": "%U",
              "%OV": "%V",
              "%Ow": "%w",
              "%OW": "%W",
              "%Oy": "%y",
            };
            for (var f in c) e = e.replace(new RegExp(f, "g"), c[f]);
            var g = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              h = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
            function i(a, b, c) {
              a = typeof a === "number" ? a.toString() : a || "";
              while (a.length < b) a = c[0] + a;
              return a;
            }
            function j(a, b) {
              return i(a, b, "0");
            }
            function k(a, b) {
              function c(a) {
                return a < 0 ? -1 : a > 0 ? 1 : 0;
              }
              var d;
              (d = c(a.getFullYear() - b.getFullYear())) === 0 &&
                (d = c(a.getMonth() - b.getMonth())) === 0 &&
                (d = c(a.getDate() - b.getDate()));
              return d;
            }
            function l(a) {
              switch (a.getDay()) {
                case 0:
                  return new Date(a.getFullYear() - 1, 11, 29);
                case 1:
                  return a;
                case 2:
                  return new Date(a.getFullYear(), 0, 3);
                case 3:
                  return new Date(a.getFullYear(), 0, 2);
                case 4:
                  return new Date(a.getFullYear(), 0, 1);
                case 5:
                  return new Date(a.getFullYear() - 1, 11, 31);
                case 6:
                  return new Date(a.getFullYear() - 1, 11, 30);
              }
            }
            function m(a) {
              a = Nb(new Date(a.tm_year + 1900, 0, 1), a.tm_yday);
              var b = new Date(a.getFullYear(), 0, 4),
                c = new Date(a.getFullYear() + 1, 0, 4);
              b = l(b);
              c = l(c);
              if (k(b, a) <= 0)
                if (k(c, a) <= 0) return a.getFullYear() + 1;
                else return a.getFullYear();
              else return a.getFullYear() - 1;
            }
            c = {
              "%a": function (a) {
                return g[a.tm_wday].substring(0, 3);
              },
              "%A": function (a) {
                return g[a.tm_wday];
              },
              "%b": function (a) {
                return h[a.tm_mon].substring(0, 3);
              },
              "%B": function (a) {
                return h[a.tm_mon];
              },
              "%C": function (a) {
                a = a.tm_year + 1900;
                return j((a / 100) | 0, 2);
              },
              "%d": function (a) {
                return j(a.tm_mday, 2);
              },
              "%e": function (a) {
                return i(a.tm_mday, 2, " ");
              },
              "%g": function (a) {
                return m(a).toString().substring(2);
              },
              "%G": function (a) {
                return m(a);
              },
              "%H": function (a) {
                return j(a.tm_hour, 2);
              },
              "%I": function (a) {
                a = a.tm_hour;
                a == 0 ? (a = 12) : a > 12 && (a -= 12);
                return j(a, 2);
              },
              "%j": function (a) {
                return j(
                  a.tm_mday + Kb(Jb(a.tm_year + 1900) ? Lb : Mb, a.tm_mon - 1),
                  3
                );
              },
              "%m": function (a) {
                return j(a.tm_mon + 1, 2);
              },
              "%M": function (a) {
                return j(a.tm_min, 2);
              },
              "%n": function () {
                return "\n";
              },
              "%p": function (a) {
                if (a.tm_hour >= 0 && a.tm_hour < 12) return "AM";
                else return "PM";
              },
              "%S": function (a) {
                return j(a.tm_sec, 2);
              },
              "%t": function () {
                return "\t";
              },
              "%u": function (a) {
                return a.tm_wday || 7;
              },
              "%U": function (a) {
                var b = new Date(a.tm_year + 1900, 0, 1),
                  c = b.getDay() === 0 ? b : Nb(b, 7 - b.getDay());
                a = new Date(a.tm_year + 1900, a.tm_mon, a.tm_mday);
                if (k(c, a) < 0) {
                  var d =
                      Kb(Jb(a.getFullYear()) ? Lb : Mb, a.getMonth() - 1) - 31,
                    e = 31 - c.getDate();
                  e = e + d + a.getDate();
                  return j(Math.ceil(e / 7), 2);
                }
                return k(c, b) === 0 ? "01" : "00";
              },
              "%V": function (a) {
                var b = new Date(a.tm_year + 1900, 0, 4),
                  c = new Date(a.tm_year + 1901, 0, 4);
                b = l(b);
                c = l(c);
                var d = Nb(new Date(a.tm_year + 1900, 0, 1), a.tm_yday);
                if (k(d, b) < 0) return "53";
                if (k(c, d) <= 0) return "01";
                b.getFullYear() < a.tm_year + 1900
                  ? (c = a.tm_yday + 32 - b.getDate())
                  : (c = a.tm_yday + 1 - b.getDate());
                return j(Math.ceil(c / 7), 2);
              },
              "%w": function (a) {
                return a.tm_wday;
              },
              "%W": function (a) {
                var b = new Date(a.tm_year, 0, 1),
                  c =
                    b.getDay() === 1
                      ? b
                      : Nb(b, b.getDay() === 0 ? 1 : 7 - b.getDay() + 1);
                a = new Date(a.tm_year + 1900, a.tm_mon, a.tm_mday);
                if (k(c, a) < 0) {
                  var d =
                      Kb(Jb(a.getFullYear()) ? Lb : Mb, a.getMonth() - 1) - 31,
                    e = 31 - c.getDate();
                  e = e + d + a.getDate();
                  return j(Math.ceil(e / 7), 2);
                }
                return k(c, b) === 0 ? "01" : "00";
              },
              "%y": function (a) {
                return (a.tm_year + 1900).toString().substring(2);
              },
              "%Y": function (a) {
                return a.tm_year + 1900;
              },
              "%z": function (a) {
                a = a.tm_gmtoff;
                var b = a >= 0;
                a = Math.abs(a) / 60;
                a = (a / 60) * 100 + (a % 60);
                return (b ? "+" : "-") + String("0000" + a).slice(-4);
              },
              "%Z": function (a) {
                return a.tm_zone;
              },
              "%%": function () {
                return "%";
              },
            };
            for (var f in c)
              e.indexOf(f) >= 0 && (e = e.replace(new RegExp(f, "g"), c[f](d)));
            c = Qb(e, !1);
            if (c.length > b) return 0;
            ja(c, a);
            return c.length - 1;
          }
          function Pb(a, b, c, d) {
            return Ob(a, b, c, d);
          }
          S.staticInit();
          typeof dateNow !== "undefined"
            ? (tb = dateNow)
            : typeof performance === "object" &&
              performance &&
              typeof performance.now === "function"
            ? (tb = function () {
                return performance.now();
              })
            : (tb = Date.now);
          function Qb(a, b, c) {
            c = c > 0 ? c : x(a) + 1;
            c = new Array(c);
            a = w(a, c, 0, c.length);
            b && (c.length = a);
            return c;
          }
          function Rb(a, b, c, d) {
            var e = Z();
            try {
              return xc(a, b, c, d);
            } catch (a) {
              Y(e);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function Sb(a, b, c, d) {
            var e = Z();
            try {
              return yc(a, b, c, d);
            } catch (a) {
              Y(e);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function Tb(a) {
            var b = Z();
            try {
              return zc(a);
            } catch (a) {
              Y(b);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function Ub(a, b) {
            var c = Z();
            try {
              return Ac(a, b);
            } catch (a) {
              Y(c);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function Vb(a, b, c) {
            var d = Z();
            try {
              return Bc(a, b, c);
            } catch (a) {
              Y(d);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function Wb(a, b, c, d) {
            var e = Z();
            try {
              return Cc(a, b, c, d);
            } catch (a) {
              Y(e);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function Xb(a, b, c, d) {
            var e = Z();
            try {
              return Dc(a, b, c, d);
            } catch (a) {
              Y(e);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function Yb(a, b, c, d, e) {
            var f = Z();
            try {
              return Ec(a, b, c, d, e);
            } catch (a) {
              Y(f);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function Zb(a, b, c, d, e, f) {
            var g = Z();
            try {
              return Fc(a, b, c, d, e, f);
            } catch (a) {
              Y(g);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function $b(a, b, c, d, e, f, g) {
            var h = Z();
            try {
              return Gc(a, b, c, d, e, f, g);
            } catch (a) {
              Y(h);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function ac(a, b, c, d, e, f, g, h) {
            var i = Z();
            try {
              return Hc(a, b, c, d, e, f, g, h);
            } catch (a) {
              Y(i);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function bc(a, b, c, d, e, f, g, h, i) {
            var j = Z();
            try {
              return Ic(a, b, c, d, e, f, g, h, i);
            } catch (a) {
              Y(j);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function cc(a, b, c, d, e, f, g, h, i, j, k) {
            var l = Z();
            try {
              return Jc(a, b, c, d, e, f, g, h, i, j, k);
            } catch (a) {
              Y(l);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function dc(a, b, c, d, e, f, g, h, i, j, k, l) {
            var m = Z();
            try {
              return Kc(a, b, c, d, e, f, g, h, i, j, k, l);
            } catch (a) {
              Y(m);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function ec(a, b, c, d, e, f, g, h, i, j, k, l, m) {
            var n = Z();
            try {
              return Lc(a, b, c, d, e, f, g, h, i, j, k, l, m);
            } catch (a) {
              Y(n);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function fc(a, b, c, d, e) {
            var f = Z();
            try {
              return Mc(a, b, c, d, e);
            } catch (a) {
              Y(f);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function gc(a) {
            var b = Z();
            try {
              Nc(a);
            } catch (a) {
              Y(b);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function hc(a, b) {
            var c = Z();
            try {
              Oc(a, b);
            } catch (a) {
              Y(c);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function ic(a, b, c) {
            var d = Z();
            try {
              Pc(a, b, c);
            } catch (a) {
              Y(d);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function jc(a, b, c, d, e, f, g, h) {
            var i = Z();
            try {
              Qc(a, b, c, d, e, f, g, h);
            } catch (a) {
              Y(i);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function kc(a, b, c, d) {
            var e = Z();
            try {
              Rc(a, b, c, d);
            } catch (a) {
              Y(e);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function lc(a, b, c, d, e) {
            var f = Z();
            try {
              Sc(a, b, c, d, e);
            } catch (a) {
              Y(f);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function mc(a, b, c, d, e, f) {
            var g = Z();
            try {
              Tc(a, b, c, d, e, f);
            } catch (a) {
              Y(g);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function nc(a, b, c, d, e, f, g) {
            var h = Z();
            try {
              Uc(a, b, c, d, e, f, g);
            } catch (a) {
              Y(h);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function oc(a, b, c, d, e, f, g) {
            var h = Z();
            try {
              Vc(a, b, c, d, e, f, g);
            } catch (a) {
              Y(h);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function pc(a, b, c, d, e, f, g, h) {
            var i = Z();
            try {
              Wc(a, b, c, d, e, f, g, h);
            } catch (a) {
              Y(i);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function qc(a, b, c, d, e, f, g, h, i, j, k) {
            var l = Z();
            try {
              Xc(a, b, c, d, e, f, g, h, i, j, k);
            } catch (a) {
              Y(l);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          function rc(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, aa) {
            var p = Z();
            try {
              Yc(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, aa);
            } catch (a) {
              Y(p);
              if (a !== a + 0 && a !== "longjmp") throw a;
              X(1, 0);
            }
          }
          ua = {};
          i = {
            s: $,
            X: q,
            b: m,
            K: Rb,
            S: Sb,
            t: Tb,
            f: Ub,
            i: Vb,
            F: Wb,
            r: Xb,
            q: Yb,
            M: Zb,
            A: $b,
            V: ac,
            U: bc,
            w: cc,
            L: dc,
            E: ec,
            W: fc,
            l: gc,
            m: hc,
            e: ic,
            H: jc,
            g: kc,
            k: lc,
            j: mc,
            T: nc,
            J: oc,
            x: pc,
            D: qc,
            I: rc,
            na: Va,
            ma: Wa,
            n: Xa,
            u: ab,
            v: db,
            c: fb,
            h: gb,
            p: bb,
            la: hb,
            R: ib,
            o: jb,
            ka: kb,
            ja: lb,
            ia: mb,
            d: eb,
            Q: L,
            ha: nb,
            P: ob,
            ga: pb,
            fa: qb,
            O: rb,
            N: sb,
            ea: vb,
            da: wb,
            ca: Eb,
            ba: Ib,
            aa: xb,
            G: U,
            B: yb,
            C: Ab,
            z: Bb,
            y: Cb,
            $: Db,
            _: Fb,
            Z: Pb,
            Y: Gb,
            a: C,
          };
          D = f.asm(ua, i, y);
          f.asm = D;
          var V = (f.__ZSt18uncaught_exceptionv = function () {
              return f.asm.oa.apply(null, arguments);
            }),
            sc = (f.___cxa_can_catch = function () {
              return f.asm.pa.apply(null, arguments);
            }),
            tc = (f.___cxa_is_pointer_type = function () {
              return f.asm.qa.apply(null, arguments);
            }),
            uc = (f.___emscripten_environ_constructor = function () {
              return f.asm.ra.apply(null, arguments);
            });
          f.___errno_location = function () {
            return f.asm.sa.apply(null, arguments);
          };
          var vc = (f._free = function () {
              return f.asm.ta.apply(null, arguments);
            }),
            W = (f._malloc = function () {
              return f.asm.ua.apply(null, arguments);
            });
          f._resizeJpeg = function () {
            return f.asm.va.apply(null, arguments);
          };
          var X = (f._setThrew = function () {
              return f.asm.wa.apply(null, arguments);
            }),
            wc = (f.stackAlloc = function () {
              return f.asm.Za.apply(null, arguments);
            }),
            Y = (f.stackRestore = function () {
              return f.asm._a.apply(null, arguments);
            }),
            Z = (f.stackSave = function () {
              return f.asm.$a.apply(null, arguments);
            }),
            xc = (f.dynCall_diii = function () {
              return f.asm.xa.apply(null, arguments);
            }),
            yc = (f.dynCall_fiii = function () {
              return f.asm.ya.apply(null, arguments);
            }),
            zc = (f.dynCall_i = function () {
              return f.asm.za.apply(null, arguments);
            }),
            Ac = (f.dynCall_ii = function () {
              return f.asm.Aa.apply(null, arguments);
            }),
            Bc = (f.dynCall_iii = function () {
              return f.asm.Ba.apply(null, arguments);
            }),
            Cc = (f.dynCall_iiif = function () {
              return f.asm.Ca.apply(null, arguments);
            }),
            Dc = (f.dynCall_iiii = function () {
              return f.asm.Da.apply(null, arguments);
            }),
            Ec = (f.dynCall_iiiii = function () {
              return f.asm.Ea.apply(null, arguments);
            }),
            Fc = (f.dynCall_iiiiii = function () {
              return f.asm.Fa.apply(null, arguments);
            }),
            Gc = (f.dynCall_iiiiiii = function () {
              return f.asm.Ga.apply(null, arguments);
            }),
            Hc = (f.dynCall_iiiiiiii = function () {
              return f.asm.Ha.apply(null, arguments);
            }),
            Ic = (f.dynCall_iiiiiiiii = function () {
              return f.asm.Ia.apply(null, arguments);
            }),
            Jc = (f.dynCall_iiiiiiiiiii = function () {
              return f.asm.Ja.apply(null, arguments);
            }),
            Kc = (f.dynCall_iiiiiiiiiiii = function () {
              return f.asm.Ka.apply(null, arguments);
            }),
            Lc = (f.dynCall_iiiiiiiiiiiii = function () {
              return f.asm.La.apply(null, arguments);
            }),
            Mc = (f.dynCall_jiiii = function () {
              return f.asm.Ma.apply(null, arguments);
            }),
            Nc = (f.dynCall_v = function () {
              return f.asm.Na.apply(null, arguments);
            }),
            Oc = (f.dynCall_vi = function () {
              return f.asm.Oa.apply(null, arguments);
            }),
            Pc = (f.dynCall_vii = function () {
              return f.asm.Pa.apply(null, arguments);
            }),
            Qc = (f.dynCall_viifiiii = function () {
              return f.asm.Qa.apply(null, arguments);
            }),
            Rc = (f.dynCall_viii = function () {
              return f.asm.Ra.apply(null, arguments);
            }),
            Sc = (f.dynCall_viiii = function () {
              return f.asm.Sa.apply(null, arguments);
            }),
            Tc = (f.dynCall_viiiii = function () {
              return f.asm.Ta.apply(null, arguments);
            }),
            Uc = (f.dynCall_viiiiif = function () {
              return f.asm.Ua.apply(null, arguments);
            }),
            Vc = (f.dynCall_viiiiii = function () {
              return f.asm.Va.apply(null, arguments);
            }),
            Wc = (f.dynCall_viiiiiii = function () {
              return f.asm.Wa.apply(null, arguments);
            }),
            Xc = (f.dynCall_viiiiiiiiii = function () {
              return f.asm.Xa.apply(null, arguments);
            }),
            Yc = (f.dynCall_viiiiiiiiiiiiiii = function () {
              return f.asm.Ya.apply(null, arguments);
            });
          f.asm = D;
          f.ccall = ea;
          f.cwrap = p;
          f.getMemory = fa;
          f.then = function (a) {
            if (f.calledRun) a(f);
            else {
              var b = f.onRuntimeInitialized;
              f.onRuntimeInitialized = function () {
                b && b(), a(f);
              };
            }
            return f;
          };
          function Zc(a) {
            (this.name = "ExitStatus"),
              (this.message = "Program terminated with exit(" + a + ")"),
              (this.status = a);
          }
          Zc.prototype = new Error();
          Zc.prototype.constructor = Zc;
          F = function a() {
            f.calledRun || $c(), f.calledRun || (F = a);
          };
          function $c(a) {
            a || f.arguments;
            if (E > 0) return;
            Ba();
            if (E > 0) return;
            if (f.calledRun) return;
            function b() {
              if (f.calledRun) return;
              f.calledRun = !0;
              if (s) return;
              Ca();
              Da();
              f.onRuntimeInitialized && f.onRuntimeInitialized();
              Fa();
            }
            f.setStatus
              ? (f.setStatus("Running..."),
                setTimeout(function () {
                  setTimeout(function () {
                    f.setStatus("");
                  }, 1),
                    b();
                }, 1))
              : b();
          }
          f.run = $c;
          function ad(a, b) {
            if (b && f.noExitRuntime && a === 0) return;
            f.noExitRuntime || ((s = !0), a, Ea(), f.onExit && f.onExit(a));
            f.quit(a, new Zc(a));
          }
          function $(a) {
            f.onAbort && f.onAbort(a);
            a !== void 0 ? (n(a), o(a), (a = '"' + a + '"')) : (a = "");
            s = !0;
            throw "abort(" + a + "). Build with -s ASSERTIONS=1 for more info.";
          }
          f.abort = $;
          if (f.preInit) {
            typeof f.preInit == "function" && (f.preInit = [f.preInit]);
            while (f.preInit.length > 0) f.preInit.pop()();
          }
          f.noExitRuntime = !0;
          $c();
          return d;
        };
      })();
    typeof f === "object" && typeof e === "object"
      ? (e.exports = h)
      : typeof define === "function" && define.amd
      ? define([], function () {
          return h;
        })
      : typeof f === "object" && (f.SpectrumWasm2021 = h);
  },
  null
);
__d(
  "ResumableUploadServiceBlue",
  [
    "AsyncRequest",
    "ConstUriUtils",
    "EventEmitter",
    "Promise",
    "ResumableUploadServiceState.enum",
    "gkx",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "rupload",
      i = "facebook.com";
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(b, d, e, f, g, j, k, l, m, n, o, p, q) {
        var r;
        r = a.call(this) || this;
        r.consumer = b;
        r.accessToken = d;
        r.sessionKey = e || c("uuid")();
        r.contentKey = f || "";
        r.contentValue = g || "";
        r.serviceName = j && j != "" ? j : h;
        r.serviceDomain = k && k != "" ? k : i;
        r.receiveParameters = l;
        r.flowCaptureHeaderValue = m;
        r.skipOffsetFetching = n;
        r.thriftParams = (b = o) != null ? b : new Map();
        r.tracingHeaderValue = p;
        r.customHttpHeaders = (d = q) != null ? d : new Map();
        return r;
      }
      e.create = function (a) {
        return new e(
          a.consumer,
          null,
          a.sessionKey || "",
          a.contentKey,
          a.contentValue,
          a.serviceName,
          a.serviceDomain,
          a.receiveParameters,
          a.flowCaptureHeaderValue,
          a.skipOffsetFetching,
          a.thriftParams,
          a.tracingHeaderValue,
          a.customHttpHeaders
        );
      };
      var f = e.prototype;
      f.$ResumableUploadServiceBlue2 = function (a) {
        if (c("gkx")("1765373")) {
          var b;
          if (
            ((b = this.receiveParameters) == null ? void 0 : b.target_id) !=
            null
          ) {
            a.setRequestHeader(
              "target_id",
              String(
                (b = this.receiveParameters) == null ? void 0 : b.target_id
              )
            );
          }
          if (
            ((b = this.receiveParameters) == null
              ? void 0
              : b.video_waterfall_id) != null
          ) {
            a.setRequestHeader(
              "x_fb_video_waterfall_id",
              String(
                (b = this.receiveParameters) == null
                  ? void 0
                  : b.video_waterfall_id
              )
            );
          }
        }
        if (
          ((b = this.receiveParameters) == null ? void 0 : b.xpv_asset_id) !=
          null
        ) {
          a.setRequestHeader(
            "xpv_asset_id",
            String(
              (b = this.receiveParameters) == null ? void 0 : b.xpv_asset_id
            )
          );
        }
        if (
          ((b = this.receiveParameters) == null
            ? void 0
            : b.is_xpv_single_prod) != null
        ) {
          a.setRequestHeader(
            "is_xpv_single_prod",
            String(
              (b = this.receiveParameters) == null
                ? void 0
                : b.is_xpv_single_prod
            )
          );
        }
      };
      f.resume = function (a) {
        var e = this,
          f = this.getServiceName();
        f = d("ConstUriUtils").getUri(
          "https://" + f + "/" + this.consumer + "/" + this.sessionKey
        );
        f != null &&
          this.contentKey &&
          this.contentValue &&
          (f = f.addQueryParam(this.contentKey, this.contentValue));
        if (f == null) {
          var g = new Error("ResumableUploadService: Invalid uploadURI");
          g.stack;
          throw g;
        }
        var h = f.toString();
        g = function () {
          return new (b("Promise"))(function (a, b) {
            a = new (c("AsyncRequest"))()
              .setAllowCrossOrigin(!0)
              .setAllowCredentials(!0)
              .setMethod("GET")
              .setURI(h)
              .setReadOnly(!0)
              .setHandler(a)
              .setErrorHandler(b)
              .setOption("suppressEvaluation", !0)
              .setTransportErrorHandler(function (a) {
                e.emit(
                  c("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
                  a,
                  { method: "GET" }
                );
              });
            e.$ResumableUploadServiceBlue2(a);
            e.decorateRequestFlowCaptureHeader(a);
            self.$ResumableUploadServiceBlue1 = a;
            a.send();
          });
        };
        f = function (d) {
          return new (b("Promise"))(function (b, f) {
            var g = 0;
            if (d !== void 0) {
              var i = JSON.parse(d.payload.response);
              g = i.offset;
            }
            e.emit(c("ResumableUploadServiceState.enum").START, { offset: g });
            self.$ResumableUploadServiceBlue1 = new (c("AsyncRequest"))()
              .setAllowCrossOrigin(!0)
              .setAllowCredentials(!0)
              .setURI(h)
              .setRawData(a.slice(g))
              .setHandler(b)
              .setErrorHandler(f)
              .setRequestHeader("X-Entity-Name", encodeURIComponent(a.name))
              .setRequestHeader("X-Entity-Type", a.type)
              .setRequestHeader("X-Entity-Length", String(a.size))
              .setRequestHeader("Offset", String(g))
              .setOption("suppressEvaluation", !0)
              .setUploadProgressHandler(function (b) {
                b = new ProgressEvent("upload-service", {
                  total: a.size,
                  loaded: b.loaded + Number(g),
                });
                e.emit(c("ResumableUploadServiceState.enum").PROGRESS, b);
              })
              .setTransportErrorHandler(function (a) {
                e.emit(
                  c("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
                  a,
                  { method: "POST", offset: g }
                );
              });
            e.$ResumableUploadServiceBlue2(self.$ResumableUploadServiceBlue1);
            e.decorateRequestFlowCaptureHeader(
              self.$ResumableUploadServiceBlue1
            );
            if (e.receiveParameters) {
              i = e.receiveParameters;
              self.$ResumableUploadServiceBlue1.setRequestHeader(
                "start_offset",
                String(i.start_offset)
              );
              self.$ResumableUploadServiceBlue1.setRequestHeader(
                "end_offset",
                String(i.end_offset)
              );
              self.$ResumableUploadServiceBlue1.setRequestHeader(
                "composer_session_id",
                String(i.composer_session_id)
              );
              self.$ResumableUploadServiceBlue1.setRequestHeader(
                "id",
                String(i.upload_session_id)
              );
              self.$ResumableUploadServiceBlue1.setRequestHeader(
                "product_media_id",
                String(i.product_media_id)
              );
              i.fb_region &&
                self.$ResumableUploadServiceBlue1.setRequestHeader(
                  "X-FB-Region",
                  String(i.fb_region)
                );
              i.total_file_size &&
                self.$ResumableUploadServiceBlue1.setRequestHeader(
                  "X-Total-Asset-Size",
                  String(i.total_file_size)
                );
            }
            e.thriftParams.size > 0 &&
              self.$ResumableUploadServiceBlue1.setRequestHeader(
                "X-Thrift-Params",
                JSON.stringify(Object.fromEntries(e.thriftParams.entries()))
              );
            e.tracingHeaderValue &&
              self.$ResumableUploadServiceBlue1.setRequestHeader(
                "x-fb-product-log",
                e.tracingHeaderValue
              );
            if (e.customHttpHeaders.size > 0)
              for (
                var b = e.customHttpHeaders,
                  f = Array.isArray(b),
                  i = 0,
                  b = f
                    ? b
                    : b[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                ;

              ) {
                var j;
                if (f) {
                  if (i >= b.length) break;
                  j = b[i++];
                } else {
                  i = b.next();
                  if (i.done) break;
                  j = i.value;
                }
                j = j;
                var k = j[0];
                j = j[1];
                self.$ResumableUploadServiceBlue1.setRequestHeader(k, j);
              }
            self.$ResumableUploadServiceBlue1.send();
          });
        };
        var i = function (a) {
            if (a != null) {
              a = JSON.parse(a.payload.response);
              a.h != null
                ? e.emit(c("ResumableUploadServiceState.enum").SUCCESS, a.h)
                : e.emit(c("ResumableUploadServiceState.enum").SUCCESS, a);
            } else
              e.emit(
                c("ResumableUploadServiceState.enum").FAIL,
                "uploading failed"
              );
          },
          j = function (a) {
            return e.emit(c("ResumableUploadServiceState.enum").FAIL, a);
          };
        g = this.skipOffsetFetching ? b("Promise").resolve() : g();
        return g.then(f, j).then(i, j);
      };
      f.getServiceName = function () {
        return this.serviceName + "." + this.serviceDomain;
      };
      f.cancel = function () {
        self.$ResumableUploadServiceBlue1 &&
          self.$ResumableUploadServiceBlue1.abort(),
          this.emit(c("ResumableUploadServiceState.enum").CANCEL);
      };
      f.emitFileSizeWarning = function (a) {
        this.emit(c("ResumableUploadServiceState.enum").FILE_TOO_LARGE, a);
      };
      f.decorateRequestFlowCaptureHeader = function (a) {
        this.flowCaptureHeaderValue &&
          a.setRequestHeader(
            "X-Fb-Flow-Capture",
            String(this.flowCaptureHeaderValue)
          );
      };
      return e;
    })(c("EventEmitter"));
    g["default"] = a;
  },
  98
);
