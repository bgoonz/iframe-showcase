if (self.CavalryLogger) {
  CavalryLogger.start_js(["QRTQvuW"]);
}

__d(
  "MediaUploadFBDefaultServerConfigurationRetrieverQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "source_type" },
        ],
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "service_name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "service_domain",
            storageKey: null,
          },
        ];
      b = [
        {
          alias: null,
          args: null,
          concreteType: "MediaUploadConfiguration",
          kind: "LinkedField",
          name: "media_upload_config",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "source_type",
                  variableName: "source_type",
                },
              ],
              concreteType: "MediaUploadVideoMetadataValidation",
              kind: "LinkedField",
              name: "video_metadata_validation",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "min_size_kb",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "max_size_kb",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "min_duration_secs",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "max_duration_secs",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "min_width",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "min_height",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "min_aspect_ration",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "max_aspect_ration",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "allowed_extensions",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "accept_dimensions_from_player",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "MediaUploadNetworkStart",
              kind: "LinkedField",
              name: "network_start",
              plural: !1,
              selections: b,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "MediaUploadNetworkReceive",
              kind: "LinkedField",
              name: "network_receive",
              plural: !1,
              selections: b,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "MediaUploadNetworkUploadService",
              kind: "LinkedField",
              name: "network_upload_service",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MediaUploadNetworkUploadServiceTarget",
                  kind: "LinkedField",
                  name: "default",
                  plural: !1,
                  selections: c,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "MediaUploadNetworkUploadServiceTarget",
                  kind: "LinkedField",
                  name: "targeted",
                  plural: !1,
                  selections: c,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "MediaUploadNetworkUploadServiceTracing",
                  kind: "LinkedField",
                  name: "tracing",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "enabled",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "min_file_size_kb",
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
              concreteType: "MediaUploadNetworkMonitor",
              kind: "LinkedField",
              name: "network_monitor",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "network_probe_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "internet_probe_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "internet_probe_timeout_ms",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "MediaUploadBackoffPolicy",
                  kind: "LinkedField",
                  name: "internet_probe_backoff",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "backoff_initial_ms",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "backoff_jitter_ms",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "backoff_exp_base_ms",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "backoff_exp_multiplier",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "backoff_max_ms",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "limits_total_retry_count",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "limits_total_time_ms",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "stall_detection_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "stall_detection_timeout_ms",
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
          name: "MediaUploadFBDefaultServerConfigurationRetrieverQuery",
          selections: b,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "MediaUploadFBDefaultServerConfigurationRetrieverQuery",
          selections: b,
        },
        params: {
          id: "4094129890651883",
          metadata: {},
          name: "MediaUploadFBDefaultServerConfigurationRetrieverQuery",
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
  "VideoComposerVideoPublishingMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "VideoPublishResponsePayload",
            kind: "LinkedField",
            name: "video_publish",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "video_asset_id",
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
          name: "VideoComposerVideoPublishingMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "VideoComposerVideoPublishingMutation",
          selections: b,
        },
        params: {
          id: "5343496179025842",
          metadata: {},
          name: "VideoComposerVideoPublishingMutation",
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
  "BandicootSession",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.freeze({
        ACTIVE: "ACTIVE",
        INACTIVE: "INACTIVE",
        CLOSED: "CLOSED",
      }),
      h = 10 * 60 * 1e3,
      i = 14 * 24 * 60 * 60 * 1e3;
    function j(a) {
      return Date.now() - a.lastUpdated;
    }
    function a(a) {
      return !!(typeof a === "object" && a && a.lastUpdated && a.status);
    }
    function b(a) {
      if (a.status === g.CLOSED) return !1;
      else if (a.status === g.INACTIVE && j(a) > h) return !1;
      return !0;
    }
    function c(a) {
      return a.status === g.ACTIVE && j(a) > h;
    }
    function d(a) {
      return j(a) > i;
    }
    f.Status = g;
    f.isValidSession = a;
    f.isTrackedSession = b;
    f.isCrashedSession = c;
    f.isOrphanSession = d;
  },
  66
);
__d(
  "Bandicoot",
  ["invariant", "BandicootSession", "FBLogger"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 5 * 1e3,
      j = i * 2,
      k = "Bandicoot:";
    function a() {
      try {
        var a = window.localStorage;
        if (a) {
          var b = "__test" + Date.now();
          a.setItem(b, "");
          a.removeItem(b);
        }
        return a;
      } catch (a) {
        c("FBLogger")("bandicoot").warn("Local storage is full");
        return null;
      }
    }
    var l = a();
    b = (function () {
      function a(a) {
        (this.$5 = k + a),
          (this.$4 = {}),
          (this.$1 = this.$7.bind(this)),
          (this.sessionID = null),
          (this.sessionStartTime = null),
          (this.storage = l);
      }
      var b = a.prototype;
      b.getCrashTimeData = function () {
        var a = (window.performance && window.performance.memory) || {},
          b = this.sessionStartTime;
        return {
          duration: b ? Date.now() - b : 0,
          tabs: Object.keys(this.$8()).length,
          jsHeapSizeLimit: a.jsHeapSizeLimit,
          totalJSHeapSize: a.totalJSHeapSize,
          usedJSHeapSize: a.usedJSHeapSize,
          elementsInDOM: document.getElementsByTagName("*").length,
          uri: window.location.href,
        };
      };
      b.getLogTimeData = function () {
        return { userAgent: window.navigator.userAgent };
      };
      b.logCrash = function (a, b, d) {
        c("FBLogger")("bandicoot").warn("Session %s crashed at %s", a, d);
      };
      b.logBrowserUnsupported = function () {
        c("FBLogger")("bandicoot").warn("Browser not supported");
      };
      b.logTrackingError = function () {
        c("FBLogger")("bandicoot").warn(
          "Failed to record data for current session"
        );
      };
      b.startSession = function () {
        var a = this;
        if (!this.storage) {
          this.logBrowserUnsupported();
          return;
        }
        if (this.$2) return;
        this.sessionID ||
          (this.sessionID = Math.random().toString(36).slice(2, 9));
        this.sessionStartTime || (this.sessionStartTime = Date.now());
        this.$2 = setInterval(function () {
          a.$9();
        }, i);
        this.$9();
        document.addEventListener &&
          document.addEventListener("visibilitychange", this.$1);
        this.$10();
      };
      b.endSession = function () {
        if (!this.storage) return;
        if (!this.$2) return;
        clearInterval(this.$2);
        this.$2 = null;
        this.$3 || this.$11({ status: d("BandicootSession").Status.CLOSED });
        this.sessionID = null;
        this.sessionStartTime = null;
        document.removeEventListener &&
          document.removeEventListener("visibilitychange", this.$1);
      };
      b.logKnownCrashes = function () {
        var a = this;
        if (!this.storage) return;
        if (!this.$2) {
          var b = this.$8();
          b = this.$12(b, function (b, c) {
            if (d("BandicootSession").isCrashedSession(b)) {
              a.logCrash(c, b, a.getLogTimeData());
              return null;
            } else return b;
          });
          this.$13(b);
        }
      };
      b.$14 = function () {
        var a = this.sessionID;
        a || h(0, 663);
        return a;
      };
      b.$9 = function () {
        var a = this.$8();
        this.$15(a);
        a = this.$16(a);
        this.$13(a);
      };
      b.$15 = function (a) {
        var b = this.$14(),
          c = a[b] ? a[b] : {};
        a[b] = babelHelpers["extends"]({}, c, this.getCrashTimeData(), {
          lastUpdated: Date.now(),
          status: this.$17(),
        });
      };
      b.$12 = function (a, b) {
        var c = {};
        Object.keys(a).forEach(function (e) {
          var f = a[e];
          if (
            d("BandicootSession").isValidSession(f) &&
            d("BandicootSession").isTrackedSession(f) &&
            !d("BandicootSession").isOrphanSession(f)
          ) {
            f = b(f, e);
            f && (c[e] = f);
          }
        });
        return c;
      };
      b.$16 = function (a) {
        var b = this;
        return this.$12(a, function (a, c) {
          if (d("BandicootSession").isCrashedSession(a)) {
            var e = a.loggerReportTime || 0;
            if (Date.now() - e > j)
              (a.loggerReportTime = Date.now()),
                (a.loggerReportSession = b.$14());
            else if (a.loggerReportSession == b.$14()) {
              b.logCrash(c, a, b.getLogTimeData());
              b.$4[c] = !0;
              return null;
            }
          }
          return a;
        });
      };
      b.$8 = function (a) {
        a = a || this.$5;
        var b = this.storage.getItem(a) || "{}";
        try {
          b = JSON.parse(b);
        } catch (d) {
          (b = {}),
            this.storage.removeItem(a),
            c("FBLogger")("bandicoot").catching(d).warn("Invalid JSON data");
        }
        return b;
      };
      b.$11 = function (a) {
        a.lastUpdated = Date.now();
        var b = this.$8(),
          c = this.sessionID;
        c && b[c] && (Object.assign(b[c], a), this.$13(b));
      };
      b.$13 = function (a) {
        a = JSON.stringify(a);
        try {
          this.storage.setItem(this.$5, a);
        } catch (d) {
          a = this.$6;
          var b = Date.now();
          (!a || b > a + i) && (this.logTrackingError(), (this.$6 = b));
          try {
            this.storage.removeItem(this.$5);
          } catch (a) {
            (this.$3 = !0),
              this.endSession(),
              c("FBLogger")("bandicoot")
                .catching(a)
                .warn("Removing from storage failed");
          }
        }
      };
      b.$10 = function () {
        for (var a = 0; a < this.storage.length; ++a) {
          var b = this.storage.key(a);
          if (b.indexOf(k) === 0 && b !== this.$5) {
            var c = this.$8(b),
              e = Object.keys(c).every(function (a) {
                a = c[a];
                return (
                  !d("BandicootSession").isValidSession(a) ||
                  d("BandicootSession").isOrphanSession(a)
                );
              });
            e && this.storage.removeItem(b);
          }
        }
      };
      b.$7 = function () {
        this.$11({ status: this.$17() });
      };
      b.$17 = function () {
        return document.hidden
          ? d("BandicootSession").Status.INACTIVE
          : d("BandicootSession").Status.ACTIVE;
      };
      return a;
    })();
    g["default"] = b;
  },
  98
);
__d(
  "FileHasher",
  ["FileHashWorkerResource", "WebWorker", "emptyFunction", "fileSliceName"],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      a.isSupported = function () {
        return b("WebWorker").isSupported();
      };
      function a() {
        var a = this,
          c = b("FileHashWorkerResource");
        b("WebWorker").prepareResource(c);
        this.$1 = new (b("WebWorker"))(c)
          .setMessageHandler(function (b) {
            a.$2(b);
          })
          .execute();
      }
      var c = a.prototype;
      c.hash = function (a, c) {
        this.$2 = c;
        this.$1.postMessage({ file: a, fileSliceName: b("fileSliceName") });
        return this;
      };
      c.destroy = function () {
        (this.$2 = b("emptyFunction")), this.$1.terminate();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "MediaUploadAssetEvent",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "ASSET_ADDED",
      "ASSET_STARTED",
      "ASSET_REMOVED",
      "ASSET_FAILED",
      "ASSET_SUCCEED",
      "ASSET_PROGRESS",
      "ASSET_STALL",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadAssetStatus",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "REQUESTED",
      "SCHEDULED",
      "PROCESSING",
      "UPLOADING",
      "COMPLETED",
      "FAILED",
      "REMOVED",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadTime",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1e3,
      h = g * 60,
      i = h * 60;
    function a(a) {
      return a;
    }
    function b(a) {
      return a * g;
    }
    function c(a) {
      return a * h;
    }
    function d(a) {
      return a * i;
    }
    function j(a) {
      return a;
    }
    function k(a) {
      return (1 * a) / g;
    }
    function l(a) {
      return (1 * a) / h;
    }
    function m(a) {
      return (1 * a) / i;
    }
    function n(a, b) {
      return a == null ? null : b(a);
    }
    function e(a) {
      return n(a, j);
    }
    function o(a) {
      return n(a, k);
    }
    function p(a) {
      return n(a, l);
    }
    function q(a) {
      return n(a, m);
    }
    function r(a, b) {
      return a + b;
    }
    function s(a, b) {
      return a - b;
    }
    function t(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    f.millisecondsToTime = a;
    f.secondsToTime = b;
    f.minutesToTime = c;
    f.hoursToTime = d;
    f.timeToMilliseconds = j;
    f.timeToSeconds = k;
    f.timeToMinutes = l;
    f.timeToHours = m;
    f.maybeTimeToMilliseconds = e;
    f.maybeTimeToSeconds = o;
    f.maybeTimeToMinutes = p;
    f.maybeTimeToHours = q;
    f.addTime = r;
    f.subtractTime = s;
    f.compareTime = t;
  },
  66
);
__d(
  "MediaUploadBytesSummary",
  ["MediaUploadTime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.reset = function () {
        this.$2 = null;
      };
      b.updateForUploadStart = function (a) {
        var b = this.$1.currentTimeProvider();
        this.$2 = {
          fullyCompleted: !1,
          startedAt: b,
          updatedAt: b,
          totalBytes: a,
          uploadedBytes: 0,
          skippedUpload: !1,
        };
      };
      b.updateForUploadSkip = function (a) {
        var b = this.$1.currentTimeProvider();
        this.$2 = {
          fullyCompleted: !0,
          startedAt: b,
          updatedAt: b,
          finishedAt: b,
          totalBytes: a,
          uploadedBytes: a,
          skippedUpload: !0,
        };
      };
      b.updateForProgress = function (a) {
        var b = this.$2;
        if (b == null) {
          this.$1.reportRecoverableError(
            "Upload stats have not been initialized"
          );
          return;
        }
        b.uploadedBytes = a;
        b.updatedAt = this.$1.currentTimeProvider();
      };
      b.updateForUploadComplete = function () {
        var a = this.$2;
        if (a == null) {
          this.$1.reportRecoverableError(
            "Upload stats have not been initialized"
          );
          return;
        }
        this.updateForProgress(a.totalBytes);
        a.fullyCompleted = !0;
        a.uploadedBytes = a.totalBytes;
      };
      b.updateForUploadAbandoned = function () {
        var a = this.$2;
        if (a == null) {
          this.$1.reportRecoverableError(
            "Upload stats have not been initialized"
          );
          return;
        }
        a.finishedAt = this.$1.currentTimeProvider();
      };
      b.computeSpeedBps = function () {
        var a = this.$2;
        if (a == null || a.skippedUpload) return null;
        else {
          var b = d("MediaUploadTime").timeToSeconds(
            d("MediaUploadTime").subtractTime(a.updatedAt, a.startedAt)
          );
          return b > 0.1 ? a.uploadedBytes / b : 0;
        }
      };
      b.computeUploadedPortion = function () {
        var a = this.$2;
        if (a == null) return null;
        else if (a.fullyCompleted) return 1;
        else if (a.totalBytes === 0) return 0;
        else return (1 * a.uploadedBytes) / a.totalBytes;
      };
      b.computeSnapshot = function () {
        var a = this.$2;
        if (a == null) return null;
        else
          return {
            uploadedBytes: a.uploadedBytes,
            speedBps: this.computeSpeedBps(),
            skippedUpload: a.skippedUpload,
            startedAtMs: d("MediaUploadTime").timeToMilliseconds(a.startedAt),
            finishedAtMs: d("MediaUploadTime").maybeTimeToMilliseconds(
              a.finishedAt
            ),
          };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadOperationOutcome",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "SUCCESS",
      "CANCELED",
      "FAILED_NON_TRANSIENT",
      "FAILED_NO_MORE_RETRIES",
      "FAILED_OUT_OF_TIME",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadStageEvent",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "STAGE_STARTED",
      "STAGE_PROGRESS",
      "STAGE_SUCCEED",
      "STAGE_FAILED",
      "STAGE_CANCELED",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadAssetContext",
  [
    "MediaUploadAssetEvent",
    "MediaUploadAssetStatus",
    "MediaUploadBytesSummary",
    "MediaUploadOperationOutcome",
    "MediaUploadStageEvent",
    "MediaUploadTime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = a.sessionContext,
          d = a.assetRequest,
          e = a.emitter,
          f = a.progressCalculator,
          g = a.retryState;
        a = a.params;
        this.sessionContext = b;
        this.request = d;
        this.assetID = d.assetID;
        this.asset = d.asset;
        this.retryState = g;
        this.$2 = e;
        this.$3 = f;
        this.$1 = a.currentTimeProvider;
        this.$4 = c("MediaUploadAssetStatus").REQUESTED;
        this.createdAt = this.$1();
        this.uploadSummary = new (c("MediaUploadBytesSummary"))(a);
        this.progress = {
          completedStages: new Set(),
          calculated: { rawValue: 0, percentageComplete: 0 },
        };
      }
      var b = a.prototype;
      b.emitAssetEvent = function (a) {
        this.$2.emitAssetEvent(a, this),
          (a === c("MediaUploadAssetEvent").ASSET_SUCCEED ||
            a === c("MediaUploadAssetEvent").ASSET_REMOVED) &&
            this.recalculateProgressAndEmit();
      };
      b.emitStageEvent = function (a, b) {
        this.$2.emitStageEvent(a, this, b),
          a === c("MediaUploadStageEvent").STAGE_SUCCEED &&
            (this.progress.completedStages.add(b),
            this.recalculateProgressAndEmit()),
          a === c("MediaUploadStageEvent").STAGE_PROGRESS &&
            this.recalculateProgressAndEmit();
      };
      b.emitStageEventForOperationOutcome = function (a, b) {
        a === c("MediaUploadOperationOutcome").SUCCESS
          ? this.emitStageEvent(c("MediaUploadStageEvent").STAGE_SUCCEED, b)
          : a === c("MediaUploadOperationOutcome").CANCELED
          ? this.emitStageEvent(c("MediaUploadStageEvent").STAGE_CANCELED, b)
          : this.emitStageEvent(c("MediaUploadStageEvent").STAGE_FAILED, b);
      };
      b.recalculateProgressAndEmit = function () {
        var a = this.$3.calculateAssetProgress(this);
        this.sessionContext.recalculateProgressAndEmit();
        a && this.emitAssetEvent(c("MediaUploadAssetEvent").ASSET_PROGRESS);
      };
      b.$5 = function () {
        this.uploadSummary.reset(),
          this.progress.completedStages.clear(),
          this.recalculateProgressAndEmit();
      };
      b.updateStatusAndEmit = function (a) {
        if (this.$4 === a) return;
        this.$4 = a;
        switch (a) {
          case c("MediaUploadAssetStatus").REMOVED:
            this.emitAssetEvent(c("MediaUploadAssetEvent").ASSET_REMOVED);
            break;
          case c("MediaUploadAssetStatus").FAILED:
            this.emitAssetEvent(c("MediaUploadAssetEvent").ASSET_FAILED);
            break;
          case c("MediaUploadAssetStatus").COMPLETED:
            this.emitAssetEvent(c("MediaUploadAssetEvent").ASSET_SUCCEED);
            break;
          case c("MediaUploadAssetStatus").PROCESSING:
            this.emitAssetEvent(c("MediaUploadAssetEvent").ASSET_STARTED);
            break;
          case c("MediaUploadAssetStatus").UPLOADING:
            this.progress.lastAttemptStartedAt = this.$1();
            break;
          case c("MediaUploadAssetStatus").REQUESTED:
          case c("MediaUploadAssetStatus").SCHEDULED:
            this.$5();
            break;
        }
      };
      b.isCompleted = function () {
        return this.$4 === c("MediaUploadAssetStatus").COMPLETED;
      };
      b.isSchedulable = function () {
        return (
          this.$4 === c("MediaUploadAssetStatus").REQUESTED ||
          this.$4 === c("MediaUploadAssetStatus").FAILED
        );
      };
      b.isRemoved = function () {
        return this.$4 === c("MediaUploadAssetStatus").REMOVED;
      };
      b.isFailed = function () {
        return this.$4 === c("MediaUploadAssetStatus").FAILED;
      };
      b.__composeBaseSnapshot = function () {
        return {
          asset: this.asset,
          assetID: this.assetID,
          status: this.$4,
          createdAtMs: d("MediaUploadTime").timeToMilliseconds(this.createdAt),
          lastUploadStartedAtMs: d("MediaUploadTime").maybeTimeToMilliseconds(
            this.progress.lastAttemptStartedAt
          ),
          metadata:
            this.metadata == null
              ? void 0
              : {
                  width: this.metadata.width,
                  height: this.metadata.height,
                  isSpherical: this.metadata.isSpherical,
                  durationMs: d("MediaUploadTime").maybeTimeToMilliseconds(
                    this.metadata.duration
                  ),
                },
          retries: { totalRetryAttempts: this.retryState.getRetryAttempts() },
          uploadSummary: this.uploadSummary.computeSnapshot(),
          percentageComplete: this.progress.calculated.percentageComplete,
        };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadExtrasStorage",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$2 = new Map()), (this.$1 = a);
      }
      var b = a.prototype;
      b.setFromObject = function (a) {
        var b = Object.keys(a);
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          this.set(d, a[d]);
        }
        return this;
      };
      b.set = function (a, b) {
        this.$2.set(a, b);
        return this;
      };
      b.getNumber = function (a) {
        var b = this.getUnsafe(a);
        if (b == null || typeof b === "number") return b;
        else {
          this.$1.reportRecoverableError(
            "Requested key " + a + " as number, but it was " + typeof b
          );
          return null;
        }
      };
      b.getString = function (a) {
        var b = this.getUnsafe(a);
        if (b == null || typeof b === "string") return b;
        else {
          this.$1.reportRecoverableError(
            "Requested key " + a + " as string, but it was " + typeof b
          );
          return null;
        }
      };
      b.getBoolean = function (a) {
        var b = this.getUnsafe(a);
        if (b == null || typeof b === "boolean") return b;
        else {
          this.$1.reportRecoverableError(
            "Requested key " + a + " as boolean, but it was " + typeof b
          );
          return null;
        }
      };
      b.getUnsafe = function (a) {
        return this.$2.get(a);
      };
      b.getClassInstance = function (a, b) {
        var c = this.getUnsafe(a);
        if (c == null || c instanceof b) return c;
        else {
          this.$1.reportRecoverableError(
            "Requested key " +
              a +
              " as " +
              String(b) +
              ", but it was something else"
          );
          return null;
        }
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadFBAssetContext",
  [
    "ErrorNormalizeUtils",
    "MediaUploadAssetContext",
    "MediaUploadExtrasStorage",
    "MediaUploadStageEvent",
    "MediaUploadTime",
    "getErrorSafe",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        d = a.call(this, b) || this;
        d.request = b.assetRequest;
        d.sessionContext = b.sessionContext;
        d.processing = {
          rawData: new (c("MediaUploadExtrasStorage"))(b.params),
        };
        return d;
      }
      var e = b.prototype;
      e.recordStageOutcome = function (a) {
        var b = a.stage,
          d = a.outcome,
          e = a.rawErrorCode,
          f = a.rawErrorObject,
          g = a.displayError,
          h = a.errorAttributes;
        a = a.networkRequestID;
        f =
          f == null
            ? void 0
            : c("ErrorNormalizeUtils").normalizeError(c("getErrorSafe")(f));
        this.$MediaUploadFBAssetContext1 = {
          stage: b,
          outcome: d,
          rawErrorCode: e,
          errorObject: f,
          displayError: g,
          errorAttributes: h,
          networkRequestID: a,
        };
      };
      e.emitStageEvent = function (b, d) {
        b === c("MediaUploadStageEvent").STAGE_STARTED &&
          (this.$MediaUploadFBAssetContext1 = null),
          a.prototype.emitStageEvent.call(this, b, d);
      };
      e.composeSnapshot = function () {
        var a = this.__composeBaseSnapshot();
        return babelHelpers["extends"]({}, a, {
          videoID: this.videoID,
          request: this.request,
          uploadServiceDomain: this.processing.uploadServiceDomain,
          hash:
            this.processing.pseudoHash == null
              ? null
              : {
                  hashValue: this.processing.pseudoHash.hashValue,
                  calculationTimeCostMs: d(
                    "MediaUploadTime"
                  ).timeToMilliseconds(
                    this.processing.pseudoHash.calculationTimeCost
                  ),
                },
          lastAction: this.$MediaUploadFBAssetContext1,
        });
      };
      b.castOrThrow = function (a, c) {
        c = c.createThrowableError;
        if (a instanceof b) return a;
        else {
          throw c(
            'Provided asset context has incorrect type of "' +
              ((c = a.constructor) == null ? void 0 : c.name) +
              '"'
          );
        }
      };
      return b;
    })(c("MediaUploadAssetContext"));
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadAssetRequest",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      var b = a.assetID,
        c = a.asset;
      a = a.extras;
      this.assetID = b;
      this.asset = c;
      this.extras = a;
    };
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadFBAssetRequest",
  ["MediaUploadAssetRequest"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c = b.assetID,
          d = b.asset,
          e = b.extras;
        b = b.attributes;
        c = a.call(this, { assetID: c, asset: d, extras: e }) || this;
        c.attributes = {
          targetID: b.targetID,
          actorID: b.actorID,
          hasFileBeenReplaced: b.hasFileBeenReplaced,
          composerDialogVersion: b.composerDialogVersion,
          publisherActionSource: b.publisherActionSource,
          creatorProduct: b.creatorProduct,
          composerSessionID: b.composerSessionID,
        };
        return c;
      }
      b.castOrThrow = function (a, c) {
        c = c.createThrowableError;
        if (a instanceof b) return a;
        else {
          throw c(
            'Provided asset request has incorrect type of "' +
              ((c = a.constructor) == null ? void 0 : c.name) +
              '"'
          );
        }
      };
      return b;
    })(c("MediaUploadAssetRequest"));
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadEntryPointID",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      this.key = a;
    };
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadFBEntryPointID",
  ["MediaUploadEntryPointID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this, b + "\\" + c) || this;
        d.sourceType = b;
        d.entryPointRef = c;
        return d;
      }
      b.castOrThrow = function (a, c) {
        c = c.createThrowableError;
        if (a instanceof b) return a;
        else {
          throw c(
            'Provided entry point ID has incorrect type of "' +
              ((c = a.constructor) == null ? void 0 : c.name) +
              '"'
          );
        }
      };
      return b;
    })(c("MediaUploadEntryPointID"));
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadSessionEvent",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "SESSION_CONFIRMED",
      "SESSION_SUCCEED",
      "SESSION_FAILED",
      "SESSION_CANCELED",
      "SESSION_FINISHED",
      "SESSION_PROGRESS",
      "PUBLISH_STARTED",
      "PUBLISH_SUCCEED",
      "PUBLISH_FAILED",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadSessionStatus",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "UNCONFIRMED",
      "CONFIRMED",
      "FAILED",
      "PUBLISHING",
      "COMPLETED",
      "CANCELED",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadSessionContext",
  [
    "MediaUploadExtrasStorage",
    "MediaUploadSessionEvent",
    "MediaUploadSessionStatus",
    "MediaUploadTime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set([
      c("MediaUploadSessionStatus").COMPLETED,
      c("MediaUploadSessionStatus").CANCELED,
      c("MediaUploadSessionStatus").FAILED,
    ]);
    a = (function () {
      function a(a) {
        var b = a.sessionID,
          d = a.emitter,
          e = a.progressCalculator;
        a = a.params;
        this.assetsByID = new Map();
        this.sessionID = b;
        this.$1 = d;
        this.$2 = e;
        this.extras = new (c("MediaUploadExtrasStorage"))(a);
        this.$4 = a.currentTimeProvider;
        this.$5 = a.randomStringProvider;
        this.$6 = c("MediaUploadSessionStatus").UNCONFIRMED;
        this.$3 = { createdAt: this.$4() };
        this.progress = {
          retryID: this.$5(),
          publishingExtrasProvided: !1,
          publishingDone: !1,
          percentageComplete: 0,
        };
        this.releaseOnFinish = [];
      }
      var b = a.prototype;
      b.emitSessionEvent = function (a) {
        this.$1.emitSessionEvent(a, this),
          a === c("MediaUploadSessionEvent").PUBLISH_SUCCEED &&
            ((this.progress.publishingDone = !0),
            this.recalculateProgressAndEmit()),
          a === c("MediaUploadSessionEvent").SESSION_FINISHED && this.$7();
      };
      b.renewRetryID = function () {
        this.progress.retryID = this.$5();
      };
      b.updateLastError = function (a) {
        this.__lastError = a;
      };
      b.recalculateProgressAndEmit = function () {
        this.$2.calculateSessionProgress(this) &&
          this.emitSessionEvent(c("MediaUploadSessionEvent").SESSION_PROGRESS);
      };
      b.$7 = function () {
        while (this.releaseOnFinish.length > 0) {
          var a = this.releaseOnFinish.pop();
          a.cancel();
        }
      };
      b.updateStatusAndEmit = function (a) {
        if (this.$6 === a) return;
        this.$6 = a;
        this.progress.terminalStatus == null &&
          h.has(a) &&
          ((this.progress.terminalStatus = a),
          this.emitSessionEvent(c("MediaUploadSessionEvent").SESSION_FINISHED));
        switch (a) {
          case c("MediaUploadSessionStatus").CONFIRMED:
            this.progress.terminalStatus = void 0;
            this.$3.confirmedAt = this.$4();
            this.emitSessionEvent(
              c("MediaUploadSessionEvent").SESSION_CONFIRMED
            );
            break;
          case c("MediaUploadSessionStatus").COMPLETED:
            this.emitSessionEvent(c("MediaUploadSessionEvent").SESSION_SUCCEED);
            break;
          case c("MediaUploadSessionStatus").CANCELED:
            this.emitSessionEvent(
              c("MediaUploadSessionEvent").SESSION_CANCELED
            );
            break;
          case c("MediaUploadSessionStatus").FAILED:
            this.emitSessionEvent(c("MediaUploadSessionEvent").SESSION_FAILED);
            break;
          case c("MediaUploadSessionStatus").PUBLISHING:
            this.emitSessionEvent(c("MediaUploadSessionEvent").PUBLISH_STARTED);
            break;
          default:
        }
      };
      b.getActiveAssets = function () {
        var a = [];
        for (
          var b = this.assetsByID.values(),
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          e.isRemoved() || a.push(e);
        }
        return a;
      };
      b.isCanceled = function () {
        return this.$6 === c("MediaUploadSessionStatus").CANCELED;
      };
      b.isPublished = function () {
        return this.$6 === c("MediaUploadSessionStatus").COMPLETED;
      };
      b.isPublishing = function () {
        return this.$6 === c("MediaUploadSessionStatus").PUBLISHING;
      };
      b.isConfirmed = function () {
        return this.$6 === c("MediaUploadSessionStatus").CONFIRMED;
      };
      b.isFailed = function () {
        return this.$6 === c("MediaUploadSessionStatus").FAILED;
      };
      b.__composeBaseSnapshot = function () {
        return {
          sessionID: this.sessionID,
          retryID: this.progress.retryID,
          status: this.$6,
          extras: this.extras,
          timing: {
            createdAtMs: d("MediaUploadTime").timeToMilliseconds(
              this.$3.createdAt
            ),
            confirmedAtMs: d("MediaUploadTime").maybeTimeToMilliseconds(
              this.$3.confirmedAt
            ),
          },
          terminalStatus: this.progress.terminalStatus,
          percentageComplete: this.progress.percentageComplete,
          publishingResponse: this.progress.publishingResponse,
          cancelReason: this.progress.cancelReason,
        };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBSessionContext",
  ["ErrorNormalizeUtils", "MediaUploadSessionContext", "getErrorSafe"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c =
          a.call(this, {
            sessionID: b.sessionID,
            emitter: b.emitter,
            progressCalculator: b.progressCalculator,
            params: b.params,
          }) || this;
        c.entryPoint = b.entryPoint;
        return c;
      }
      var d = b.prototype;
      d.composeSnapshot = function () {
        var a = this.__composeBaseSnapshot();
        return babelHelpers["extends"]({}, a, {
          entryPoint: this.entryPoint,
          lastError:
            this.__lastError == null
              ? null
              : {
                  errorObject:
                    this.__lastError.rawErrorObject == null
                      ? null
                      : c("ErrorNormalizeUtils").normalizeError(
                          c("getErrorSafe")(this.__lastError.rawErrorObject)
                        ),
                  rawErrorCode: this.__lastError.rawErrorCode,
                },
        });
      };
      b.castOrThrow = function (a, c) {
        c = c.createThrowableError;
        if (a instanceof b) return a;
        else {
          throw c(
            'Provided session context has incorrect type of "' +
              ((c = a.constructor) == null ? void 0 : c.name) +
              '"'
          );
        }
      };
      return b;
    })(c("MediaUploadSessionContext"));
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBStage",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "METADATA_EXTRACTION",
      "METADATA_VALIDATION",
      "HASHING",
      "START_REQUEST",
      "BYTES_UPLOAD",
      "RECEIVE_REQUEST",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadFBStageOutcome",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "SUCCESS",
      "CANCEL",
      "EXCEPTION",
      "INTERNAL_FAILURE",
      "UNSUPPORTED_FEATURE",
      "ASSET_IS_NOT_FILE",
      "ASSET_IS_NOT_SUPPORTED",
      "REQUEST_ERROR",
      "INVALID_SERVER_RESPONSE",
      "MISSING_MANDATORY_DATA",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadClientEventContext",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b) {
      (this.startedAt = a.currentTimeProvider()), (this.entryPoint = b);
    };
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadFBClientEventContext",
  [
    "ErrorNormalizeUtils",
    "MediaUploadClientEventContext",
    "MediaUploadFBAssetContext",
    "MediaUploadFBSessionContext",
    "MediaUploadTime",
    "getErrorSafe",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        d = a.call(this, b.envParams, b.entryPoint) || this;
        d.entryPoint = b.entryPoint;
        b.context != null &&
        b.context instanceof c("MediaUploadFBSessionContext")
          ? (d.sessionContext = b.context)
          : b.context != null &&
            b.context instanceof c("MediaUploadFBAssetContext") &&
            ((d.sessionContext = b.context.sessionContext),
            (d.assetContext = b.context));
        return d;
      }
      b.castOrThrow = function (a, c) {
        if (a instanceof b) return a;
        else {
          throw c.createThrowableError(
            'Provided client event context has incorrect type of "' +
              ((c = a.constructor) == null ? void 0 : c.name) +
              '"'
          );
        }
      };
      var e = b.prototype;
      e.composerSnapshot = function () {
        var a, b;
        a =
          ((a = this.errorInfo) == null ? void 0 : a.rawErrorObject) == null
            ? void 0
            : c("ErrorNormalizeUtils").normalizeError(
                c("getErrorSafe")(
                  (a = this.errorInfo) == null ? void 0 : a.rawErrorObject
                )
              );
        return {
          entryPoint: this.entryPoint,
          startedAtMs: d("MediaUploadTime").timeToMilliseconds(this.startedAt),
          sessionSnapshot:
            (b = this.sessionContext) == null ? void 0 : b.composeSnapshot(),
          assetSnapshot:
            (b = this.assetContext) == null ? void 0 : b.composeSnapshot(),
          errorObject: a,
        };
      };
      return b;
    })(c("MediaUploadClientEventContext"));
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadEventEmitterAdapter",
  [
    "EventEmitter",
    "MediaUploadFBAssetContext",
    "MediaUploadFBClientEventContext",
    "MediaUploadFBSessionContext",
    "MediaUploadFBStage",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
      return a;
    };
    a = (function () {
      function a(a) {
        (this.$2 = new (c("EventEmitter"))()),
          (this.$1 = a),
          (this.emitter = this.$3()),
          (this.subscriber = this.$4());
      }
      var b = a.prototype;
      b.$3 = function () {
        var a = this,
          b = function (b) {
            b = c("MediaUploadFBSessionContext").castOrThrow(b, a.$1);
            return b.composeSnapshot();
          },
          d = function (b) {
            b = c("MediaUploadFBAssetContext").castOrThrow(b, a.$1);
            return b.composeSnapshot();
          },
          e = this.$2,
          f = function (b) {
            try {
              for (
                var c = arguments.length,
                  d = new Array(c > 1 ? c - 1 : 0),
                  f = 1;
                f < c;
                f++
              )
                d[f - 1] = arguments[f];
              e.emit.apply(e, [h(b)].concat(d));
            } catch (c) {
              a.$1.reportRecoverableError(
                "Session pub/sub chain failed for event " + String(b),
                c
              );
            }
          };
        return {
          emitClientEvent: function (b, d) {
            f(
              b,
              c("MediaUploadFBClientEventContext")
                .castOrThrow(d, a.$1)
                .composerSnapshot()
            );
          },
          emitSessionEvent: function (a, c) {
            f(a, b(c));
          },
          emitAssetEvent: function (a, c) {
            f(a, b(c.sessionContext), d(c));
          },
          emitStageEvent: function (e, g, h) {
            h = c("MediaUploadFBStage").cast(String(h));
            if (h == null) {
              a.$1.reportRecoverableError(
                "Invalid stage value, it must be MediaUploadFBStage, ignoring"
              );
              return;
            }
            f(e, b(g.sessionContext), d(g), h);
          },
        };
      };
      b.$4 = function () {
        var a = this,
          b = function (b, c) {
            try {
              b();
            } catch (b) {
              a.$1.reportRecoverableError(
                "Stage pub/sub chain failed for event " + c(),
                b
              );
            }
          };
        return {
          addClientEventListener: function (c, d) {
            var e = a.$2.addListener(h(c), function (a) {
              return b(
                function () {
                  return d(a);
                },
                function () {
                  return String(c);
                }
              );
            });
            return {
              cancel: function () {
                return e.remove();
              },
            };
          },
          addSessionEventListener: function (c, d) {
            var e = a.$2.addListener(h(c), function (a) {
              return b(
                function () {
                  return d(a);
                },
                function () {
                  return String(c);
                }
              );
            });
            return {
              cancel: function () {
                return e.remove();
              },
            };
          },
          addAssetEventListener: function (c, d) {
            var e = a.$2.addListener(h(c), function (a, e) {
              return b(
                function () {
                  return d(a, e);
                },
                function () {
                  return String(c);
                }
              );
            });
            return {
              cancel: function () {
                return e.remove();
              },
            };
          },
          addStageEventListener: function (c, d, e) {
            var f = a.$2.addListener(h(c), function (a, f, g) {
              d === g &&
                b(
                  function () {
                    return e(a, f);
                  },
                  function () {
                    return String(c) + "  " + String(g);
                  }
                );
            });
            return {
              cancel: function () {
                return f.remove();
              },
            };
          },
        };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadClientEvent",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "CLIENT_CREATED",
      "CLIENT_CONFIG_REQUESTED",
      "CLIENT_CONFIG_RECEIVED",
      "CLIENT_CONFIG_FAILED",
      "CLIENT_CONFIG_CACHED",
      "CLIENT_INTERNET_ONLINE",
      "CLIENT_INTERNET_OFFLINE",
      "CLIENT_INTERNET_UNKNOWN",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadBanzaiLogger",
  [
    "Banzai",
    "CurrentUser",
    "MediaUploadAssetEvent",
    "MediaUploadClientEvent",
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadSessionEvent",
    "MediaUploadSessionStatus",
    "MediaUploadStageEvent",
    "MediaUploadTime",
    "cr:1840657",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map([
        [
          c("MediaUploadClientEvent").CLIENT_CONFIG_REQUESTED,
          "upload.client.started_client_config_fetch",
        ],
        [
          c("MediaUploadClientEvent").CLIENT_CONFIG_RECEIVED,
          "upload.client.finished_client_config_fetch",
        ],
        [
          c("MediaUploadClientEvent").CLIENT_CONFIG_FAILED,
          "upload.client.failed_client_config_fetch",
        ],
        [
          c("MediaUploadClientEvent").CLIENT_CONFIG_CACHED,
          "upload.client.cached_client_config_fetch",
        ],
      ]),
      i = new Map([
        [
          c("MediaUploadSessionEvent").SESSION_CONFIRMED,
          "upload.client.started_flow",
        ],
        [
          c("MediaUploadSessionEvent").PUBLISH_STARTED,
          "upload.client.started_sending_post_request",
        ],
        [
          c("MediaUploadSessionEvent").PUBLISH_SUCCEED,
          "upload.client.finished_sending_post_request",
        ],
        [
          c("MediaUploadSessionEvent").PUBLISH_FAILED,
          "upload.client.failed_sending_post_request",
        ],
      ]),
      j = new Map([
        [c("MediaUploadSessionStatus").FAILED, "upload.client.failed_flow"],
        [c("MediaUploadSessionStatus").CANCELED, "upload.client.canceled_flow"],
        [
          c("MediaUploadSessionStatus").COMPLETED,
          "upload.client.finished_flow",
        ],
      ]),
      k = new Map([
        [
          c("MediaUploadAssetEvent").ASSET_ADDED,
          "upload.client.requested_uploading",
        ],
        [
          c("MediaUploadAssetEvent").ASSET_STARTED,
          "upload.client.started_uploading",
        ],
        [
          c("MediaUploadAssetEvent").ASSET_FAILED,
          "upload.client.failed_uploading",
        ],
        [
          c("MediaUploadAssetEvent").ASSET_REMOVED,
          "upload.client.canceled_uploading",
        ],
        [
          c("MediaUploadAssetEvent").ASSET_SUCCEED,
          "upload.client.finished_uploading",
        ],
        [
          c("MediaUploadAssetEvent").ASSET_STALL,
          "upload.client.stall_detected",
        ],
      ]),
      l = new Map([
        [
          c("MediaUploadStageEvent").STAGE_STARTED,
          new Map([
            [
              c("MediaUploadFBStage").START_REQUEST,
              "upload.client.started_sending_start_request",
            ],
            [
              c("MediaUploadFBStage").BYTES_UPLOAD,
              "upload.client.started_sending_bytes",
            ],
            [
              c("MediaUploadFBStage").RECEIVE_REQUEST,
              "upload.client.started_sending_receive_request",
            ],
          ]),
        ],
        [
          c("MediaUploadStageEvent").STAGE_SUCCEED,
          new Map([
            [
              c("MediaUploadFBStage").START_REQUEST,
              "upload.client.finished_sending_start_request",
            ],
            [
              c("MediaUploadFBStage").BYTES_UPLOAD,
              "upload.client.finished_sending_bytes",
            ],
            [
              c("MediaUploadFBStage").RECEIVE_REQUEST,
              "upload.client.finished_sending_receive_request",
            ],
          ]),
        ],
        [
          c("MediaUploadStageEvent").STAGE_FAILED,
          new Map([
            [
              c("MediaUploadFBStage").START_REQUEST,
              "upload.client.failed_sending_start_request",
            ],
            [
              c("MediaUploadFBStage").RECEIVE_REQUEST,
              "upload.client.failed_sending_receive_request",
            ],
            [
              c("MediaUploadFBStage").BYTES_UPLOAD,
              "upload.client.failed_sending_bytes",
            ],
            [
              c("MediaUploadFBStage").METADATA_VALIDATION,
              "upload.client.invalidated_uploading",
            ],
          ]),
        ],
        [
          c("MediaUploadStageEvent").STAGE_CANCELED,
          new Map([
            [
              c("MediaUploadFBStage").START_REQUEST,
              "upload.client.canceled_sending_start_request",
            ],
            [
              c("MediaUploadFBStage").BYTES_UPLOAD,
              "upload.client.canceled_sending_bytes",
            ],
            [
              c("MediaUploadFBStage").RECEIVE_REQUEST,
              "upload.client.canceled_sending_receive_request",
            ],
          ]),
        ],
      ]);
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var e = a.prototype;
      e.subscribe = function (a, b) {
        var d = this;
        h.forEach(function (c, e) {
          a.addClientEventListener(e, function (a) {
            return d.$3(b, c, a);
          });
        });
        i.forEach(function (c, e) {
          a.addSessionEventListener(e, function (a) {
            return d.$4(b, c, a);
          });
        });
        j.forEach(function (e, f) {
          a.addSessionEventListener(
            c("MediaUploadSessionEvent").SESSION_FINISHED,
            function (a) {
              a.terminalStatus === f &&
                a.timing.confirmedAtMs != null &&
                d.$4(b, e, a);
            }
          );
        });
        k.forEach(function (c, e) {
          a.addAssetEventListener(e, function (a, e) {
            return d.$5(b, c, a, e);
          });
        });
        l.forEach(function (c, e) {
          c.forEach(function (c, f) {
            a.addStageEventListener(e, f, function (a, e) {
              d.$5(b, c, a, e);
            });
          });
        });
      };
      e.$6 = function (a) {
        return a == null
          ? null
          : d("MediaUploadTime").timeToMilliseconds(
              this.$1.currentTimeProvider()
            ) - a;
      };
      e.$7 = function (a, b) {
        return {
          event: a,
          application_state: "www_v2",
          is_chunked_upload: !0,
          file_can_read: this.$1.features.supportFileManipulation,
          network_status:
            (a = this.$2) == null
              ? void 0
              : (a = a.injectNetworkStatus) == null
              ? void 0
              : a.getNetworkStatus(),
          internet_status:
            (a = this.$2) == null
              ? void 0
              : (a = a.injectNetworkStatus) == null
              ? void 0
              : a.getInternetStatus(),
          trigger_time: this.$1.currentTimeProvider(),
          app_id: c("CurrentUser").getAppID(),
          source: b.sourceType,
          composer_entry_point_ref: b.entryPointRef,
        };
      };
      e.$8 = function (a) {
        var b =
            (a == null ? void 0 : a.rawErrorCode) != null &&
            typeof (a == null ? void 0 : a.rawErrorCode) === "string"
              ? a == null
                ? void 0
                : a.rawErrorCode
              : void 0,
          d =
            (a == null ? void 0 : a.rawErrorCode) != null &&
            typeof (a == null ? void 0 : a.rawErrorCode) === "number"
              ? a == null
                ? void 0
                : a.rawErrorCode
              : void 0;
        return {
          error:
            (b = b) != null
              ? b
              : a == null
              ? void 0
              : (b = a.displayError) == null
              ? void 0
              : b.summary,
          error_inner:
            (a == null ? void 0 : a.outcome) ===
            c("MediaUploadFBStageOutcome").SUCCESS
              ? void 0
              : a == null
              ? void 0
              : a.outcome,
          error_description:
            (b =
              a == null
                ? void 0
                : (b = a.errorObject) == null
                ? void 0
                : b.message) != null
              ? b
              : a == null
              ? void 0
              : (b = a.displayError) == null
              ? void 0
              : b.description,
          error_trace:
            a == null ? void 0 : (b = a.errorObject) == null ? void 0 : b.stack,
          error_code: d,
        };
      };
      e.$9 = function (a) {
        return {
          event_reason: a.cancelReason,
          elapsed_time: this.$6(a.timing.confirmedAtMs),
          waterfall_id: a.sessionID,
          retry_id: a.retryID,
        };
      };
      e.$10 = function (a) {
        var b;
        return {
          elapsed_time: this.$6(a.lastUploadStartedAtMs),
          asset_id: a.assetID,
          video_id: a.videoID,
          composer_session_id: a.request.attributes.composerSessionID,
          target_id: a.request.attributes.targetID,
          composer_dialog_version: a.request.attributes.composerDialogVersion,
          has_file_been_replaced: a.request.attributes.hasFileBeenReplaced,
          source_width: (b = a.metadata) == null ? void 0 : b.width,
          source_height: (b = a.metadata) == null ? void 0 : b.height,
          duration: (b = a.metadata) == null ? void 0 : b.durationMs,
          file_size: (b = a.asset.dataAsFile()) == null ? void 0 : b.size,
          video_original_file_path: a.asset.data.name,
          hash: (b = a.hash) == null ? void 0 : b.hashValue,
          hash_time: (b = a.hash) == null ? void 0 : b.calculationTimeCostMs,
          retries: a.retries.totalRetryAttempts,
          upload_domain: a.uploadServiceDomain,
          upload_speed: (b = a.uploadSummary) == null ? void 0 : b.speedBps,
          skip_upload: (b = a.uploadSummary) == null ? void 0 : b.skippedUpload,
        };
      };
      e.$11 = function (a) {
        var b;
        return ((b = this.$2) == null ? void 0 : b.injectExtraSessionFields) !=
          null
          ? (b = this.$2) == null
            ? void 0
            : b.injectExtraSessionFields(a)
          : null;
      };
      e.$12 = function (a, b) {
        var c;
        return ((c = this.$2) == null ? void 0 : c.injectExtraAssetFields) !=
          null
          ? (c = this.$2) == null
            ? void 0
            : c.injectExtraAssetFields(a, b)
          : null;
      };
      e.$13 = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        var d = b.map(function (a) {
          return (a = a) != null ? a : {};
        });
        return Object.assign.apply(Object, [{}].concat(d));
      };
      e.$3 = function (a, b, c) {
        var d = c.assetSnapshot,
          e = c.sessionSnapshot;
        b = this.$13(
          e == null ? null : this.$11(e),
          e == null || d == null ? null : this.$12(e, d),
          this.$7(b, a),
          e == null ? null : this.$9(e),
          e == null || d == null ? null : this.$10(d),
          this.$8(c),
          { elapsed_time: this.$6(c.startedAtMs) }
        );
        this.$14(b);
      };
      e.$4 = function (a, b, c) {
        b = this.$13(
          this.$11(c),
          this.$7(b, a),
          this.$9(c),
          this.$8(c.lastError)
        );
        this.$14(b);
      };
      e.$5 = function (a, b, c, d) {
        b = this.$13(
          this.$11(c),
          this.$12(c, d),
          this.$7(b, a),
          this.$9(c),
          this.$10(d),
          this.$8(d.lastAction)
        );
        this.$14(b);
      };
      e.$14 = function (a) {
        b("cr:1840657") != null
          ? b("cr:1840657")(a)
          : c("Banzai").post("video_waterfall", a, c("Banzai").VITAL);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "mediaUploadLogStackTrace",
  ["Banzai", "ErrorNormalizeUtils", "cr:1840657", "err", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (c("gkx")("1816889")) {
        var d = c("ErrorNormalizeUtils").normalizeError(c("err")("no-op"));
        d = d.stack;
        d = {
          event: "upload.client.media_debug_info",
          waterfall_id: a.waterfallID,
          source: a.sourceType,
          composer_entry_point_ref: a.composerEntryPointRef,
          error_trace: d,
          application_state: a.applicationState,
        };
        b("cr:1840657") != null
          ? b("cr:1840657")(d)
          : c("Banzai").post("video_waterfall", d, c("Banzai").VITAL);
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBFileHasher",
  [
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadOperationOutcome",
    "MediaUploadStageEvent",
    "Promise",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = c("MediaUploadFBStage").HASHING),
          (this.$2 = a.pseudoHasher),
          (this.$3 = a.fullHasher);
      }
      var d = a.prototype;
      d.process = function (a) {
        return b("regeneratorRuntime").async(
          function (d) {
            while (1)
              switch ((d.prev = d.next)) {
                case 0:
                  a.emitStageEvent(
                    c("MediaUploadStageEvent").STAGE_STARTED,
                    this.$1
                  );
                  d.prev = 1;
                  d.next = 4;
                  return b("regeneratorRuntime").awrap(this.$4(a));
                case 4:
                  d.next = 9;
                  break;
                case 6:
                  (d.prev = 6),
                    (d.t0 = d["catch"](1)),
                    a.recordStageOutcome({
                      stage: this.$1,
                      outcome: c("MediaUploadFBStageOutcome").EXCEPTION,
                      rawErrorObject: d.t0,
                    });
                case 9:
                  a.emitStageEvent(
                    c("MediaUploadStageEvent").STAGE_SUCCEED,
                    this.$1
                  );
                  return d.abrupt(
                    "return",
                    c("MediaUploadOperationOutcome").SUCCESS
                  );
                case 11:
                case "end":
                  return d.stop();
              }
          },
          null,
          this,
          [[1, 6]]
        );
      };
      d.$5 = function (a, c, d) {
        return c == null
          ? b("Promise").resolve()
          : c.hash(a.file).then(function (a) {
              a.outcome === "SUCCESS" && d(a.value);
              return a;
            });
      };
      d.$4 = function (a) {
        var d = this,
          e,
          f,
          g,
          h,
          i,
          j,
          k;
        return b("regeneratorRuntime").async(
          function (l) {
            while (1)
              switch ((l.prev = l.next)) {
                case 0:
                  e = a.asset.dataAsFile();
                  if (!(e == null)) {
                    l.next = 4;
                    break;
                  }
                  a.recordStageOutcome({
                    stage: this.$1,
                    outcome: c("MediaUploadFBStageOutcome")
                      .MISSING_MANDATORY_DATA,
                  });
                  return l.abrupt("return");
                case 4:
                  l.next = 6;
                  return b("regeneratorRuntime").awrap(
                    this.$5(e, this.$3, function (b) {
                      return (a.processing.fullHash = b);
                    }).then(function (c) {
                      return b("regeneratorRuntime").async(
                        function (f) {
                          while (1)
                            switch ((f.prev = f.next)) {
                              case 0:
                                if (
                                  !(
                                    (c == null ? void 0 : c.outcome) ===
                                    "SUCCESS"
                                  )
                                ) {
                                  f.next = 5;
                                  break;
                                }
                                a.processing.pseudoHash = a.processing.fullHash;
                                return f.abrupt("return", [c, c]);
                              case 5:
                                f.t0 = c;
                                f.next = 8;
                                return b("regeneratorRuntime").awrap(
                                  d.$5(e, d.$2, function (b) {
                                    return (a.processing.pseudoHash = b);
                                  })
                                );
                              case 8:
                                f.t1 = f.sent;
                                return f.abrupt("return", [f.t0, f.t1]);
                              case 10:
                              case "end":
                                return f.stop();
                            }
                        },
                        null,
                        this
                      );
                    })
                  );
                case 6:
                  (f = l.sent),
                    ((g = f),
                    (h = Array.isArray(g)),
                    (i = 0),
                    (g = h
                      ? g
                      : g[
                          typeof Symbol === "function"
                            ? Symbol.iterator
                            : "@@iterator"
                        ]()));
                case 8:
                  if (!h) {
                    l.next = 14;
                    break;
                  }
                  if (!(i >= g.length)) {
                    l.next = 11;
                    break;
                  }
                  return l.abrupt("break", 29);
                case 11:
                  j = g[i++];
                  l.next = 18;
                  break;
                case 14:
                  i = g.next();
                  if (!i.done) {
                    l.next = 17;
                    break;
                  }
                  return l.abrupt("break", 29);
                case 17:
                  j = i.value;
                case 18:
                  k = j;
                  if (
                    !((k == null ? void 0 : k.outcome) === "FILE_TOO_LARGE")
                  ) {
                    l.next = 24;
                    break;
                  }
                  a.recordStageOutcome({
                    stage: this.$1,
                    outcome: c("MediaUploadFBStageOutcome")
                      .ASSET_IS_NOT_SUPPORTED,
                  });
                  return l.abrupt("return");
                case 24:
                  if (!((k == null ? void 0 : k.outcome) === "FAILURE")) {
                    l.next = 27;
                    break;
                  }
                  a.recordStageOutcome({
                    stage: this.$1,
                    outcome: c("MediaUploadFBStageOutcome").INTERNAL_FAILURE,
                    rawErrorCode: k == null ? void 0 : k.rawErrorCode,
                    rawErrorObject: k == null ? void 0 : k.rawErrorObject,
                  });
                  return l.abrupt("return");
                case 27:
                  l.next = 8;
                  break;
                case 29:
                  a.recordStageOutcome({
                    stage: this.$1,
                    outcome: c("MediaUploadFBStageOutcome").SUCCESS,
                  });
                case 30:
                case "end":
                  return l.stop();
              }
          },
          null,
          this
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadCancelablePromise",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = { cancel: function () {} };
    a = (function () {
      function a(a) {
        var c = this;
        this.$1 = !1;
        this.promise = new (b("Promise"))(function (b, d) {
          (c.$2 = a(b, d)), c.$2 == null && (c.$2 = g), c.$1 && c.$2.cancel();
        });
      }
      a.resolve = function (b) {
        return new a(function (a) {
          a(b);
        });
      };
      var c = a.prototype;
      c.then = function (b) {
        var c = this;
        return new a(function (d, e) {
          var f = { cancelable: c };
          c.promise
            .then(function (d) {
              f.cancelable = g;
              if (c.$1) return d;
              else {
                d = b(d);
                if (d instanceof a) {
                  f.cancelable = d;
                  return d.promise;
                } else return d;
              }
            })
            .then(d)
            ["catch"](function () {
              (f.cancelable = g), e.apply(void 0, arguments);
            });
          return {
            cancel: function () {
              f.cancelable.cancel();
            },
          };
        });
      };
      c.isCanceled = function () {
        return this.$1;
      };
      c.cancel = function () {
        if (!this.$1) {
          var a;
          this.$1 = !0;
          (a = this.$2) == null ? void 0 : a.cancel();
        }
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadPipeline",
  ["MediaUploadCancelablePromise", "MediaUploadOperationOutcome"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      function a(a, b) {
        var d = this;
        this.$2 = [];
        this.$3 = null;
        this.$2 = a;
        this.$1 = b;
        this.cancelablePromise = new (c("MediaUploadCancelablePromise"))(
          function (a, b) {
            d.$4(a, b, [].concat(d.$2));
            return {
              cancel: function () {
                var b;
                (b = d.$3) == null ? void 0 : b.cancel();
                d.$3 = null;
                a(c("MediaUploadOperationOutcome").CANCELED);
              },
            };
          }
        );
      }
      var b = a.prototype;
      b.$4 = function (a, b, d) {
        var e = this;
        if (d.length === 0)
          (this.$3 = null), a(c("MediaUploadOperationOutcome").SUCCESS);
        else {
          var f = d.shift();
          f = f();
          this.$1.promiseTerminator(
            f.promise
              .then(function (f) {
                e.cancelablePromise.isCanceled()
                  ? a(c("MediaUploadOperationOutcome").CANCELED)
                  : f === c("MediaUploadOperationOutcome").SUCCESS
                  ? e.$4(a, b, d)
                  : a(f);
              })
              ["catch"](b)
          );
          this.$3 = f;
        }
      };
      return a;
    })();
    a = (function () {
      function a(a) {
        (this.$2 = []), (this.$1 = a);
      }
      var b = a.prototype;
      b.addCancelableStep = function (a) {
        this.$2.push(a);
      };
      b.addPlainStep = function (a) {
        this.$2.push(function () {
          return new (c("MediaUploadCancelablePromise"))(function (b) {
            b(a());
          });
        });
      };
      b.run = function () {
        var a = new h(this.$2, this.$1);
        return a.cancelablePromise;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBLocalAssetStrategy",
  ["MediaUploadPipeline"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = a.envParams),
          (this.metadataParser = a.metadataParser),
          (this.metadataValidator = a.metadataValidator),
          (this.fileHasher = a.fileHasher);
      }
      var b = a.prototype;
      b.run = function (a) {
        var b = this,
          d = new (c("MediaUploadPipeline"))(this.$1);
        d.addPlainStep(function () {
          return b.metadataParser.parse(a);
        });
        d.addPlainStep(function () {
          return b.metadataValidator.validate(
            a,
            b.metadataParser.retriveRawMetadata(a)
          );
        });
        var e = this.fileHasher;
        e != null &&
          d.addPlainStep(function () {
            return e.process(a);
          });
        return d.run();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ISOVideoBoxConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 8;
    b = [255, 204, 130, 99, 248, 85, 74, 147, 136, 20, 88, 122, 2, 82, 31, 221];
    c = [174, 36, 178, 77, 60, 143, 79, 24, 138, 123, 224, 9, 193, 56, 53, 193];
    f.BOX_BASE_SIZE = a;
    f.GSPHERICAL_UUID = b;
    f.FBSPHERICAL_UUID = c;
  },
  66
);
__d(
  "FBSphericalMetadataTags",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      SPHERICAL: "FBSpherical:Spherical",
      INITIAL_VERTICAL_FOV_DEGREES: "FBSpherical:InitialVerticalFOVDegrees",
      GUIDE: "FBSpherical:Guide",
      HOTSPOT: "FBSpherical:HotspotMetadata",
      USED_360_DIRECTOR: "FBSpherical:Used360Director",
    });
    f["default"] = a;
  },
  66
);
__d(
  "GSphericalMetadataTags",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      SPHERICAL: "GSpherical:Spherical",
      INITIAL_VIEW_HEADING_DEGREES: "GSpherical:InitialViewHeadingDegrees",
      INITIAL_VIEW_PITCH_DEGREES: "GSpherical:InitialViewPitchDegrees",
      PROJECTION_TYPE: "GSpherical:ProjectionType",
      STEREO_MODE: "GSpherical:StereoMode",
      STITCHED: "GSpherical:Stitched",
      STITCHING_SOFTWARE: "GSpherical:StitchingSoftware",
      CROPPED_AREA_IMAGE_WIDTH_PIXELS: "GSphercal:CroppedAreaImageWidthPixels",
      CROPPED_AREA_IMAGE_HEIGHT_PIXELS:
        "GSphercal:CroppedAreaImageHeightPixels",
      CROPPED_AREA_LEFT_PIXELS: "GSphercal:CroppedAreaLeftPixels",
      CROPPED_AREA_TOP_PIXELS: "GSphercal:CroppedAreaTopPixels",
      FULL_PANO_WIDTH_PIXELS: "GSphercal:FullPanoWidthPixels",
      FULL_PANO_HEIGHT_PIXELS: "GSphercal:FullPanoHeightPixels",
    });
    f["default"] = a;
  },
  66
);
__d(
  "SphericalVideoMetadataTags",
  ["FBSphericalMetadataTags", "GSphericalMetadataTags"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = Object.freeze({
      GSPHERICAL: c("GSphericalMetadataTags"),
      FBSPHERICAL: c("FBSphericalMetadataTags"),
    });
    g["default"] = a;
  },
  98
);
__d(
  "VideoStereoFormat",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      MONO: "mono",
      LEFT_RIGHT: "left-right",
      TOP_BOTTOM: "top-bottom",
    });
    f["default"] = a;
  },
  66
);
__d(
  "VideoSphericalMetadataUtil",
  ["SphericalVideoMetadataTags", "VideoProjection", "VideoStereoFormat"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (!a) return null;
      a = a.replace(/\0/g, "");
      if (window.DOMParser) {
        var b = new DOMParser();
        b = b.parseFromString(a, "text/xml");
      } else
        (b = new window.ActiveXObject("Microsoft.XMLDOM")),
          (b.async = "false"),
          b.loadXML(a);
      return b;
    }
    function b(a) {
      if (Object.values(c("VideoProjection")).includes(a)) return a;
      else return null;
    }
    function d(a) {
      if (Object.values(c("VideoStereoFormat")).includes(a)) return a;
      else return null;
    }
    function e(a) {
      a = a.getElementsByTagNameNS("*", "*");
      var b = null;
      for (var d = 0; d < a.length; d++) {
        var e = a[d],
          f = e.nodeName,
          g = e.parentElement;
        if (
          f !== "parsererror" &&
          g &&
          g.nodeName !== "parsererror" &&
          Object.values(c("SphericalVideoMetadataTags").GSPHERICAL).indexOf(f) <
            0 &&
          Object.values(c("SphericalVideoMetadataTags").GSPHERICAL).indexOf(
            g.nodeName
          ) < 0
        ) {
          b || (b = "");
          g = e.outerHTML;
          b += "<" + f + g.slice(f.length + 1, -(f.length + 1)) + f + ">";
        }
      }
      return b;
    }
    function f(a, b, c, d, e) {
      if (
        null !== b &&
        null !== c &&
        null !== d &&
        null !== e &&
        a.projectionType === "equirectangular" &&
        (a.stereoMode === "left-right" || a.stereoMode === "top-bottom")
      ) {
        a = parseInt(b, 10);
        b = parseInt(c, 10);
        c = parseInt(d, 10);
        d = parseInt(e, 10);
        if (Math.abs(a - c / 2) <= 1 && Math.abs(b - d) <= 1) return !0;
      }
      return !1;
    }
    function h(a, b, c) {
      return new File([a], b, { type: c });
    }
    function i(a) {
      var b = new ArrayBuffer(a.length),
        c = new DataView(b);
      for (var d = 0; d < a.length; d++) c.setUint8(d, a.charCodeAt(d));
      return b;
    }
    function j(a, b, c) {
      a = a.buffer;
      return this.arrayBufferToFile(a, b, c);
    }
    function k(a, b) {
      if (a.length !== b.length) return !1;
      for (var c = 0; c < a.length; c++) if (a[c] !== b[c]) return !1;
      return !0;
    }
    g.parseXMLToDocument = a;
    g.stringToProjectionType = b;
    g.stringToStereoMode = d;
    g.getUnsupportedGSphericalTagsXML = e;
    g.isGoogleVR180 = f;
    g.arrayBufferToFile = h;
    g.stringToArrayBuffer = i;
    g.bufferToFile = j;
    g.uuidArrayEquals = k;
  },
  98
);
__d(
  "VideoUploadMetadataParserErrorCode",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "FILE_READING_NOT_SUPPORTED",
      "UNKNOWN_FILE_EXTENSION",
      "INTERNAL_FAILURE",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "VideoUploadSphericalLogger",
  ["Banzai"],
  function (a, b, c, d, e, f, g) {
    var h = 3e3;
    a = (function () {
      function a() {
        (this.$1 = {}), (this.$2 = !1), (this.$3 = 0);
      }
      var b = a.prototype;
      b.log = function () {
        this.$2 ? this.$4() : this.$5();
      };
      b.$5 = function () {
        c("Banzai").post(
          "spherical_video_composer_upload",
          babelHelpers["extends"]({}, this.$1)
        );
      };
      b.$4 = function () {
        var a = Date.now();
        a - this.$3 > h && ((this.$3 = a), this.$5());
      };
      b.setDirectorsCutEnabled = function (a) {
        this.$1.directors_cut_enabled = a;
        return this;
      };
      b.setFieldOfView = function (a) {
        this.$1.field_of_view = a;
        return this;
      };
      b.setFileExtension = function (a) {
        this.$1.file_extension = a;
        return this;
      };
      b.setHasSphericalMetadata = function (a) {
        this.$1.has_spherical_metadata = a;
        return this;
      };
      b.setPitchDegrees = function (a) {
        this.$1.pitch_degrees = a;
        return this;
      };
      b.setTargetID = function (a) {
        this.$1.target_id = a;
        return this;
      };
      b.setVideoID = function (a) {
        this.$1.video_id = a;
        return this;
      };
      b.setUserAction = function (a) {
        this.$1.user_action = a;
        a === "drag_video_preview" || a === "scroll_video_preview"
          ? (this.$2 = !0)
          : (this.$2 = !1);
        return this;
      };
      b.setVideoPreviewPosition = function (a) {
        this.$1.video_preview_position = a;
        return this;
      };
      b.setYawDegrees = function (a) {
        this.$1.yaw_degrees = a;
        return this;
      };
      b.setIsRedesign = function (a) {
        this.$1.is_redesign = a;
        return this;
      };
      b.setFinalGuideEnabled = function (a) {
        this.$1.final_guide_enabled = a;
        return this;
      };
      b.setFinalNumGuidePoints = function (a) {
        this.$1.final_num_guide_points = a;
        return this;
      };
      b.setIsNuxTest = function (a) {
        this.$1.is_nux_test = a;
        return this;
      };
      return a;
    })();
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "checkForSphericalTag",
  ["VideoSphericalMetadataUtil"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = d("VideoSphericalMetadataUtil").parseXMLToDocument(a);
      if (!a) return !1;
      a = a.getElementsByTagNameNS("*", "Spherical");
      if (a.length === 0) return !1;
      a = a[0];
      a = a.childNodes[0].nodeValue;
      return a.toLowerCase() === "true";
    }
    g["default"] = a;
  },
  98
);
__d(
  "getVideo64BitAtomLength",
  ["Int64"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      var f = a.getUint32(b + e + d);
      a = a.getUint32(b + d + e + e);
      return new (c("Int64"))(a, f).toNumber();
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoUploadMetadataParser",
  [
    "Bootloader",
    "ErrorNormalizeUtils",
    "ISOVideoBoxConstants",
    "Promise",
    "VideoSphericalMetadataUtil",
    "VideoUploadFeatureDetector",
    "VideoUploadMetadataParserErrorCode",
    "VideoUploadSphericalLogger",
    "checkForSphericalTag",
    "fileSlice",
    "getErrorSafe",
    "getVideo64BitAtomLength",
    "gkx",
    "nullthrows",
    "promiseDone",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 4,
      i = 4,
      j = 5242880,
      k = 24,
      l = 88,
      m = 20,
      n = 16,
      o = 4,
      p = 84,
      q = 20,
      r = 62,
      s = 4,
      t = 12,
      u = 12,
      v = 16,
      w = 16,
      x = { 0: 36, 1: 52, 2: 72 },
      y = 1,
      z = 1,
      A = 4,
      B = 1,
      C = 1,
      D = 4,
      E = 4,
      F = 1e3,
      G = 16,
      H = 32,
      I = 34;
    e = (function () {
      function e(a, b, c, d) {
        (this.$1 = a),
          (this.$2 = b == null ? function () {} : b),
          (this.$4 = c),
          (this.$5 = !0),
          (this.$3 = d);
      }
      var f = e.prototype;
      f.getHandler = function () {
        return this.$2;
      };
      f.$6 = function (a) {
        this.$2(a), this.$3 != null && this.$3({ success: !0, metadata: a });
      };
      f.$7 = function (a, b) {
        this.$2(null);
        if (this.$3 != null) {
          b =
            b == null
              ? void 0
              : c("ErrorNormalizeUtils").normalizeError(c("getErrorSafe")(b));
          this.$3({ success: !1, errorCode: a, errorObject: b });
        }
      };
      f.parse = function () {
        if (!d("VideoUploadFeatureDetector").supportsFileReading()) {
          this.$7(
            c("VideoUploadMetadataParserErrorCode").FILE_READING_NOT_SUPPORTED
          );
          return null;
        }
        switch (this.$1.getExtension()) {
          case "mp4":
          case "mov":
          case "m4v":
          case "3gp":
          case "3g2":
            c("VideoUploadSphericalLogger").setFileExtension(
              this.$1.getExtension()
            );
            break;
          case "mkv":
            if (c("gkx")("816873")) {
              c("VideoUploadSphericalLogger").setFileExtension(
                this.$1.getExtension()
              );
              break;
            }
          default:
            this.$7(
              c("VideoUploadMetadataParserErrorCode").UNKNOWN_FILE_EXTENSION
            );
            return null;
        }
        return this.$8();
      };
      f.$8 = function () {
        var a = this,
          d,
          e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  d = this.$9();
                  e = this.$10();
                  return f.abrupt(
                    "return",
                    new (b("Promise"))(function (f, g) {
                      try {
                        c("promiseDone")(
                          b("Promise")
                            .all([d, e])
                            .then(
                              function (b) {
                                var c = b[0];
                                if (c.completed) {
                                  b = b[1];
                                  c.videoPlayerData = b;
                                  a.$6(c);
                                }
                                f(c);
                              },
                              function (b) {
                                a.$7(
                                  c("VideoUploadMetadataParserErrorCode")
                                    .INTERNAL_FAILURE,
                                  b
                                ),
                                  g(b);
                              }
                            )
                        );
                      } catch (b) {
                        a.$7(
                          c("VideoUploadMetadataParserErrorCode")
                            .INTERNAL_FAILURE,
                          b
                        ),
                          g(b);
                      }
                    })
                  );
                case 3:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      f.$9 = function () {
        var a = this,
          d;
        return b("regeneratorRuntime").async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  e.t0 = this.$1.getExtension();
                  e.next =
                    e.t0 === "mp4"
                      ? 3
                      : e.t0 === "mov"
                      ? 3
                      : e.t0 === "m4v"
                      ? 3
                      : e.t0 === "3gp"
                      ? 3
                      : e.t0 === "3g2"
                      ? 3
                      : e.t0 === "mkv"
                      ? 5
                      : 8;
                  break;
                case 3:
                  d = this.$11(0, Math.min(j, this.$1.getSize() || 0), null);
                  return e.abrupt("break", 9);
                case 5:
                  e.next = 7;
                  return b("regeneratorRuntime").awrap(
                    new (b("Promise"))(function (b, e) {
                      c("Bootloader").loadModules(
                        ["VideoUploadMetadataMKVParser"],
                        function (a) {
                          a = new a(this.$1);
                          d = a.parse();
                          b();
                        }.bind(a),
                        "VideoUploadMetadataParser"
                      );
                    })
                  );
                case 7:
                  return e.abrupt("break", 9);
                case 8:
                  throw new Error("Unrecognized file extension in _parseImpl");
                case 9:
                  return e.abrupt("return", c("nullthrows")(d));
                case 10:
                case "end":
                  return e.stop();
              }
          },
          null,
          this
        );
      };
      f.$11 = function (a, d, e) {
        var f = this,
          g = new FileReader(),
          h = new (b("Promise"))(function (h, i) {
            g.onload = function (c) {
              var k, l;
              return b("regeneratorRuntime").async(
                function (m) {
                  while (1)
                    switch ((m.prev = m.next)) {
                      case 0:
                        m.prev = 0;
                        if (g.result instanceof ArrayBuffer) {
                          m.next = 3;
                          break;
                        }
                        throw new Error(
                          "reader.result is something other than ArrayBuffer"
                        );
                      case 3:
                        k = f.$12(new DataView(g.result), 0, d - a, a, e);
                        if (!k.completed) {
                          m.next = 10;
                          break;
                        }
                        c = f.$13(k);
                        c.completed = !0;
                        h(c);
                        m.next = 14;
                        break;
                      case 10:
                        m.next = 12;
                        return b("regeneratorRuntime").awrap(
                          f.$11(
                            a + k.nextOffset,
                            Math.min(f.$1.getSize() || 0, a + k.nextOffset + j),
                            k
                          )
                        );
                      case 12:
                        (l = m.sent), h(l);
                      case 14:
                        m.next = 19;
                        break;
                      case 16:
                        (m.prev = 16), (m.t0 = m["catch"](0)), i(m.t0);
                      case 19:
                      case "end":
                        return m.stop();
                    }
                },
                null,
                this,
                [[0, 16]]
              );
            };
            var k = f.$1.getFile();
            g.readAsArrayBuffer(c("fileSlice").call(k, a, d));
          });
        return h;
      };
      f.$10 = function () {
        if (!this.$4 || !a.URL || !a.URL.createObjectURL) return null;
        var c = this.$1.getFile(),
          d = document.createElement("video"),
          e = new (b("Promise"))(function (a, b) {
            var c = window.setTimeout(function () {
              window.clearTimeout(c), b("Video onloadedmetadata timed out");
            }, F);
          }),
          f = new (b("Promise"))(function (b, e) {
            d.onloadedmetadata = function () {
              try {
                var a = { width: d.videoWidth, height: d.videoHeight };
                b(a);
              } catch (a) {
                e(a);
              }
            };
            try {
              d.src = a.URL.createObjectURL(c);
            } catch (a) {
              e(a);
            }
          });
        return b("Promise").race([f, e]);
      };
      f.$14 = function (a, b, c) {
        var d = [];
        for (var e = 0; e < c; e++)
          d.push(String.fromCharCode(a.getUint8(b + e)));
        return d.join("");
      };
      f.$15 = function (a, b, c) {
        var d = {
            version: null,
            ambisonic_type: null,
            ambisonic_order: null,
            ambisonic_channel_ordering: null,
            ambisonic_normalization: null,
            num_channels: null,
            channel_map: [],
          },
          e = 0;
        d.version = a.getUint8(b + e);
        e = y;
        d.ambisonic_type = a.getUint8(b + e);
        e += z;
        d.ambisonic_order = a.getUint32(b + e);
        e += A;
        d.ambisonic_channel_ordering = a.getUint8(b + e);
        e += B;
        d.ambisonic_normalization = a.getUint8(b + e);
        e += C;
        d.num_channels = a.getUint32(b + e);
        e += D;
        for (var f = 0; f < d.num_channels; f++) {
          d.channel_map.push(a.getUint32(b + e));
          e += E;
          if (e > c) return null;
        }
        return JSON.stringify(d);
      };
      f.$16 = function (a, b, e, f) {
        try {
          var g = i + h,
            j = d("ISOVideoBoxConstants").GSPHERICAL_UUID.length;
          if (g + j < e) {
            var k = [];
            for (var l = 0; l < j; l++) k.push(a.getUint8(b + g + l));
            l = d("VideoSphericalMetadataUtil").uuidArrayEquals(
              k,
              d("ISOVideoBoxConstants").GSPHERICAL_UUID
            );
            k = d("VideoSphericalMetadataUtil").uuidArrayEquals(
              k,
              d("ISOVideoBoxConstants").FBSPHERICAL_UUID
            );
            g += j;
            if (l || k) {
              j = this.$14(a, b + g, e - g);
              c("checkForSphericalTag")(j) &&
                ((f.sphericalMetadata.spherical = !0),
                k
                  ? (f.sphericalMetadata.FBSphericalMetadataXML = j)
                  : (f.sphericalMetadata.sphericalMetadataXml = j));
            }
          }
        } catch (a) {}
      };
      f.$12 = function (a, b, d, e, f) {
        f = f || {
          widths: [],
          heights: [],
          streamTypes: [],
          streamDurations: [],
          spherical: !1,
          sphericalMetadata: {
            sphericalMetadataXml: null,
            FBSphericalMetadataXML: null,
            fbSpatialAudioMetadataXml: null,
            ytSa3dMetadataJson: null,
          },
          isParsingInMediaInformationAtom: !1,
          endOfMediaInformationAtomOffset: null,
          streamSampleCounts: [],
          samples: [],
        };
        var g = null;
        while (b < d) {
          var j = a.getUint32(b),
            y = this.$14(a, b + h, i);
          j === 1 && (j = c("getVideo64BitAtomLength")(a, b, i, h));
          if (b + j > d) {
            f.completed = !1;
            f.nextOffset = b;
            j > d && (f.nextOffset += j);
            return f;
          }
          f.isParsingInMediaInformationAtom &&
            b >= Number(f.endOfMediaInformationAtomOffset) &&
            ((f.isParsingInMediaInformationAtom = !1),
            (f.endOfMediaInformationAtomOffset = null));
          if (b + e === 0 && y !== "ftyp") throw new Error("No ftyp atom");
          if (j === 0) throw new Error("len is 0");
          var z = function () {
            var c = a.getUint32(b + m),
              d = a.getUint32(b + k);
            return d / c;
          };
          switch (y) {
            case "moov":
            case "trak":
            case "mdia":
            case "stbl":
              b += h + i;
              break;
            case "mvhd":
              f.duration = z();
              b += j;
              break;
            case "tkhd":
              y = a.getUint16(b + p);
              var A = a.getUint16(b + l);
              f.widths.push(y);
              f.heights.push(A);
              f.samples.push({ descriptions: [] });
              g = a.getUint32(b + q);
              b += j;
              break;
            case "hdlr":
              if (!f.isParsingInMediaInformationAtom) {
                y = this.$14(a, b + n, o);
                switch (y) {
                  case "vide":
                    y = "video";
                    break;
                  case "soun":
                    y = "audio";
                    break;
                  case "subt":
                    y = "subtitle";
                    break;
                  default:
                    y = "data";
                }
                f.streamTypes.push(y);
              }
              b += j;
              break;
            case "mdhd":
              f.streamDurations.push(z());
              b += j;
              break;
            case "uuid":
              this.$16(a, b, j, f);
              b += j;
              break;
            case "meta":
              A = u + t + s;
              y = this.$14(a, b + A, 4);
              if (y !== "face") {
                b += j;
                break;
              }
              z = h + i + r;
              A = this.$14(a, b + z, j - z);
              A !== null &&
                ((f.sphericalMetadata.fbSpatialAudioMetadataXml === null ||
                  f.sphericalMetadata.fbSpatialAudioMetadataXml === void 0) &&
                  (f.sphericalMetadata.fbSpatialAudioMetadataXml =
                    "<fb360_spatial_audio>"),
                g
                  ? (f.sphericalMetadata.fbSpatialAudioMetadataXml +=
                      '\n                <track id="' +
                      g.toString() +
                      '">\n                  ' +
                      A +
                      "\n                </track>\n              ")
                  : (f.sphericalMetadata.fbSpatialAudioMetadataXml +=
                      "\n                <spatial_audio_formatting>\n                  " +
                      A +
                      "\n                </spatial_audio_formatting>\n              "));
              b += j;
              break;
            case "minf":
              y = this.$14(a, b + 2 * h + i, i);
              y === "smhd" || y === "vmhd"
                ? ((b += h + i),
                  (f.isParsingInMediaInformationAtom = !0),
                  (f.endOfMediaInformationAtomOffset = b + j))
                : (f.streamSampleCounts.push(null), (b += j));
              break;
            case "stsd":
              b += v;
              break;
            case "avc1":
              if (this.$5 && f.samples.length > 0) {
                z = f.samples[f.samples.length - 1];
                z.descriptions.push({
                  width: a.getUint16(b + H),
                  height: a.getUint16(b + I),
                });
              }
              b += j;
              break;
            case "mp4a":
            case "sowt":
            case "raw ":
            case "twos":
            case "fl32":
            case "fl64":
            case "in24":
            case "in32":
            case "ulaw":
            case "alaw":
            case "lpcm":
            case "Opus":
              A = a.getUint16(b + w).toString();
              Object.prototype.hasOwnProperty.call(x, A)
                ? (b += x[A])
                : (b += j);
              break;
            case "SA3D":
              y = this.$15(a, b + h + i, j);
              y !== null &&
                f.sphericalMetadata.ytSa3dMetadataJson === null &&
                (f.sphericalMetadata.ytSa3dMetadataJson = y);
              b += j;
              break;
            case "stsz":
            case "stz2":
              f.streamSampleCounts.push(a.getUint32(b + G));
              b += j;
              break;
            default:
              b += j;
          }
        }
        f.completed = !0;
        f.sphericalMetadata.fbSpatialAudioMetadataXml &&
          (f.sphericalMetadata.fbSpatialAudioMetadataXml +=
            "</fb360_spatial_audio>");
        return f;
      };
      f.$13 = function (a) {
        var b = { streams: { numAudioTracks: 0 }, format: {}, metadata: {} },
          d = a.widths.length,
          e = a.heights.length,
          f = a.streamTypes.length,
          g = a.streamDurations.length,
          h = a.streamSampleCounts.length,
          i = a.samples.length;
        if (d !== e || d !== f || d !== g || d !== h || d !== i)
          throw new Error(
            "Number of parsed widths, heights, durations or sample counts for video file are mismatched."
          );
        for (var e = 0; e < d; e++) {
          var j = {
            width: a.widths[e],
            height: a.heights[e],
            duration: a.streamDurations[e],
            type: a.streamTypes[e],
            sampleCount: a.streamSampleCounts[e],
          };
          if (j.type === "video") {
            this.$5 &&
              a.samples[e].descriptions.forEach(function (a) {
                a.width > j.width &&
                  a.height > j.height &&
                  ((j.width = a.width), (j.height = a.height));
              });
            f = j.width * j.height;
            g = b.streams.primaryVideo;
            (!g || g.width * g.height > f) && (b.streams.primaryVideo = j);
          } else if (j.type === "audio") {
            h = b.streams.primaryAudio;
            (!h || h.duration < j.duration) && (b.streams.primaryAudio = j);
            b.streams.numAudioTracks++;
          }
        }
        b.format.duration = a.duration;
        b.format.isSpherical = a.sphericalMetadata.spherical;
        a.sphericalMetadata.spherical &&
          ((b.metadata.sphericalMetadataXml =
            a.sphericalMetadata.sphericalMetadataXml),
          (b.metadata.FBSphericalMetadataXML =
            a.sphericalMetadata.FBSphericalMetadataXML),
          (b.metadata.fbSpatialAudioMetadataXml =
            a.sphericalMetadata.fbSpatialAudioMetadataXml),
          (b.metadata.ytSa3dMetadataJson =
            a.sphericalMetadata.ytSa3dMetadataJson));
        c("VideoUploadSphericalLogger").setHasSphericalMetadata(
          a.sphericalMetadata.spherical
        );
        return b;
      };
      return e;
    })();
    g["default"] = e;
  },
  98
);
__d(
  "MediaUploadFBMetadataParser",
  [
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadOperationOutcome",
    "MediaUploadStageEvent",
    "MediaUploadTime",
    "Promise",
    "VideoUploadFile",
    "VideoUploadMetadataParser",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "MediaUploadMetadataParser";
    a = (function () {
      function a() {
        this.$1 = c("MediaUploadFBStage").METADATA_EXTRACTION;
      }
      var e = a.prototype;
      e.parse = function (a) {
        return b("regeneratorRuntime").async(
          function (d) {
            while (1)
              switch ((d.prev = d.next)) {
                case 0:
                  a.emitStageEvent(
                    c("MediaUploadStageEvent").STAGE_STARTED,
                    this.$1
                  );
                  d.prev = 1;
                  d.next = 4;
                  return b("regeneratorRuntime").awrap(this.$2(a));
                case 4:
                  d.next = 9;
                  break;
                case 6:
                  (d.prev = 6),
                    (d.t0 = d["catch"](1)),
                    a.recordStageOutcome({
                      stage: this.$1,
                      outcome: c("MediaUploadFBStageOutcome").EXCEPTION,
                      rawErrorObject: d.t0,
                    });
                case 9:
                  a.emitStageEvent(
                    c("MediaUploadStageEvent").STAGE_SUCCEED,
                    this.$1
                  );
                  return d.abrupt(
                    "return",
                    c("MediaUploadOperationOutcome").SUCCESS
                  );
                case 11:
                case "end":
                  return d.stop();
              }
          },
          null,
          this,
          [[1, 6]]
        );
      };
      e.retriveRawMetadata = function (a) {
        return a.processing.rawData.getUnsafe(h);
      };
      e.$2 = function (a) {
        var d = this,
          e = a.asset;
        e = e.dataAsFile();
        if (e == null) {
          a.recordStageOutcome({
            stage: this.$1,
            outcome: c("MediaUploadFBStageOutcome").ASSET_IS_NOT_FILE,
          });
          return b("Promise").resolve();
        }
        var f = new (c("VideoUploadFile"))(null, e.file, e.size, e.extension);
        return new (b("Promise"))(function (b) {
          var e = new (c("VideoUploadMetadataParser"))(f, null, !1, function (
            e
          ) {
            e.success
              ? d.$3(a, e.metadata)
              : e.errorObject != null
              ? a.recordStageOutcome({
                  stage: d.$1,
                  outcome: c("MediaUploadFBStageOutcome").EXCEPTION,
                  rawErrorCode: String(e.errorCode),
                  rawErrorObject: e.errorObject,
                })
              : a.recordStageOutcome({
                  stage: d.$1,
                  outcome: c("MediaUploadFBStageOutcome").INTERNAL_FAILURE,
                  rawErrorCode: String(e.errorCode),
                }),
              b();
          });
          e.parse();
        });
      };
      e.$3 = function (a, b) {
        var c, e, f, g;
        a.processing.rawData.set(h, b);
        c = (c = b.format) == null ? void 0 : c.duration;
        c = c == null ? void 0 : d("MediaUploadTime").secondsToTime(c);
        e =
          (e = b.streams) == null
            ? void 0
            : (e = e.primaryVideo) == null
            ? void 0
            : e.width;
        f =
          (f = b.streams) == null
            ? void 0
            : (f = f.primaryVideo) == null
            ? void 0
            : f.height;
        b.videoPlayerData != null &&
          ((g = b.videoPlayerData) == null ? void 0 : g.width) > 0 &&
          ((g = b.videoPlayerData) == null ? void 0 : g.height) > 0 &&
          ((e = b.videoPlayerData.width), (f = b.videoPlayerData.height));
        b = (g = b.format) == null ? void 0 : g.isSpherical;
        a.metadata = { duration: c, width: e, height: f, isSpherical: b };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoUploadFileValidator",
  ["errorCode", "fbt", "cr:909496", "cr:909497", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i,
      j = i || b("react"),
      k = [
        1363019, 1363020, 1363021, 1363022, 1363023, 1363024, 1363025, 1363026,
        1363027, 1363030, 1363031, 1363032, 1363033, 1363038, 1363039, 1363040,
        1363048,
      ],
      l = ["VIDEO__INVALID_GUIDE_DATA"];
    a = (function () {
      "use strict";
      function a(a) {
        this.$1 = a;
      }
      var c = a.prototype;
      c.validate = function (a, b) {
        return (
          this.$2(a) && this.$3(a) && this.$4(a.getExtension() === "gif", b)
        );
      };
      c.getValidationErrorMessage = function (a, b) {
        return (
          this.$5(a) || this.$6(a) || this.$7(a.getExtension() === "gif", b)
        );
      };
      a.canReplaceVideoForError = function (a) {
        if (!a) return !0;
        if (l.indexOf(a) > -1) return !1;
        return k.indexOf(a) > -1 ? !0 : !1;
      };
      c.$2 = function (a) {
        a = this.$5(a);
        if (a) {
          b("cr:909496") !== null &&
            b("cr:909496").show(a.summary, a.description);
          return !1;
        } else return !0;
      };
      c.$5 = function (a) {
        if (
          this.$1.extensions[
            (a = a.getExtension()) == null ? void 0 : a.toLowerCase()
          ]
        )
          return;
        a =
          "http://www.facebook.com/help/?faq=218673814818907#What-formats-of-video-files-can-I-upload?";
        a = j.jsx(b("cr:909497"), {
          target: "_blank",
          href: a,
          children: h._("recommended formats"),
        });
        return {
          summary: h._("Unsupported File Format"),
          description: h._(
            "Sorry, the file you selected is in a format that we don't support. Please use one of our {link} for video files.",
            [h._param("link", a)]
          ),
        };
      };
      c.$3 = function (a) {
        a = this.$6(a);
        if (a) {
          b("cr:909496") !== null &&
            b("cr:909496").show(a.summary, a.description);
          return !1;
        } else return !0;
      };
      c.$6 = function (a) {
        var b;
        if (a.getSize() === null) return;
        a.getSize() < this.$1.minSize && (b = this.$8());
        a.getSize() > this.$1.maxSize && (b = this.$9());
        return b;
      };
      c.$8 = function () {
        var a = Math.round(this.$1.minSize / 1024);
        return {
          summary: h._("Video File Too Small"),
          description: h._(
            "The video file you tried to upload is too small. The minimum size for a video file is {min-size} KB. Please try again with a larger file.",
            [h._param("min-size", a)]
          ),
        };
      };
      c.$9 = function () {
        var a = Math.floor(this.$1.maxSize / 1024 / 1024);
        return {
          summary: h._("Video File Too Large"),
          description: h._(
            "The video file you tried to upload is too large. The maximum size for a video file is {max-size} MB. Please try again with a smaller file.",
            [h._param("max-size", a)]
          ),
        };
      };
      c.$4 = function (a, c) {
        a = this.$7(a, c);
        if (a) {
          b("cr:909496") !== null &&
            b("cr:909496").show(a.summary, a.description);
          return !1;
        } else return !0;
      };
      c.$7 = function (a, b) {
        var c;
        if (!b) return;
        var d = b.format.duration;
        d &&
          (d > this.$1.maxLength && (c = this.$10()),
          d < this.$1.minLength && !a && (c = this.$11()));
        if (!b.streams || !b.streams.primaryVideo) return;
        d = b.streams.primaryVideo.width;
        a = b.streams.primaryVideo.height;
        var e = 0,
          f = 0;
        b.videoPlayerData !== null &&
          ((e = b.videoPlayerData.height), (f = b.videoPlayerData.width));
        this.$1.acceptDimensionsFromPlayer &&
          f !== 0 &&
          e !== 0 &&
          ((d = f), (a = e));
        !b.streams.primaryVideo && b.streams.primaryAudio && (c = this.$12());
        d < this.$1.minWidth && (c = this.$13());
        a < this.$1.minHeight && (c = this.$14());
        f = d / a;
        this.$1.require16to9AspectRatio &&
          (f > 2 || f < 1.6) &&
          (c = this.$15());
        this.$1.minAspectRatio &&
          f < this.$1.minAspectRatio &&
          (c = this.$16());
        this.$1.maxAspectRatio &&
          f > this.$1.maxAspectRatio &&
          (c = this.$17());
        return c;
      };
      c.$10 = function () {
        if (this.$1.source === "profile_video")
          return {
            summary: h._("Profile Video Duration Too Long"),
            description: h._(
              "The maximum length is {max-length} seconds. Please upload a shorter video.",
              [h._param("max-length", this.$1.maxLength)]
            ),
          };
        else
          return {
            summary: h._("Video Duration Too Long"),
            description: h._(
              "The duration of the video you tried to upload is too long. The maximum duration for a video is {max-length} minutes. Please upload a shorter video.",
              [h._param("max-length", Math.round(this.$1.maxLength / 60))]
            ),
          };
      };
      c.$11 = function () {
        return {
          summary: h._("Video File Too Short"),
          description: h._(
            {
              second:
                "The duration of the video you tried to upload is too short. The minimum length for a video is {min-length} second. Please upload a longer video.",
              seconds:
                "The duration of the video you tried to upload is too short. The minimum length for a video is {min-length} seconds. Please upload a longer video.",
            },
            [
              h._param("min-length", this.$1.minLength),
              h._enum(this.$1.minLength === 1 ? "second" : "seconds", {
                second: "second",
                seconds: "seconds",
              }),
            ]
          ),
        };
      };
      c.$12 = function () {
        var a =
          "http://www.facebook.com/help/?faq=218673814818907#What-formats-of-video-files-can-I-upload?";
        a = j.jsx(b("cr:909497"), {
          href: a,
          children: h._("supported video format"),
        });
        return {
          summary: h._("No Video Detected"),
          description: h._(
            "It looks like you're trying to upload a file that isn't a video. Please try uploading a {supported-video-format link}",
            [h._param("supported-video-format link", a)]
          ),
        };
      };
      c.$13 = function () {
        return {
          summary: h._("Video Width Too Narrow"),
          description: h._(
            "The width of the video you tried to upload is too short. The minimum width for a video is {min-width}. Please upload a wider video.",
            [h._param("min-width", this.$1.minWidth)]
          ),
        };
      };
      c.$15 = function () {
        return {
          summary: h._("Problem Uploading Video"),
          description: h._(
            "Videos look best when they have a 16:9 aspect ratio. Please edit your video and upload again."
          ),
        };
      };
      c.$14 = function () {
        return {
          summary: h._("Video Height Too Short"),
          description: h._(
            "The height of the video you tried to upload is too short. The minimum height for a video is {min-height}. Please upload a taller video.",
            [h._param("min-height", this.$1.minHeight)]
          ),
        };
      };
      c.$17 = function () {
        return {
          summary: h._("Video Too Wide"),
          description: h._(
            "The video you selected is too wide. Aspect ratios for videos need to be between {max_aspect_ratio} and {min_aspect_ratio}. Please record and upload a taller video.",
            [
              h._param("max_aspect_ratio", this.$1.maxAspectRatio + ":1"),
              h._param("min_aspect_ratio", this.$1.minAspectRatio + ":1"),
            ]
          ),
        };
      };
      c.$16 = function () {
        return {
          summary: h._("Video Too Tall"),
          description: h._(
            "The video you selected is too tall. Aspect ratios for videos need to be between {max_aspect_ratio} and {min_aspect_ratio}. Please record and upload a narrower video.",
            [
              h._param("max_aspect_ratio", this.$1.maxAspectRatio + ":1"),
              h._param("min_aspect_ratio", this.$1.minAspectRatio + ":1"),
            ]
          ),
        };
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "MediaUploadFBMetadataValidator",
  [
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadOperationOutcome",
    "MediaUploadStageEvent",
    "MediaUploadTime",
    "Promise",
    "VideoUploadFile",
    "VideoUploadFileValidator",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = c("MediaUploadFBStage").METADATA_VALIDATION), (this.$2 = a);
      }
      var e = a.prototype;
      e.validate = function (a, d) {
        a.emitStageEvent(c("MediaUploadStageEvent").STAGE_STARTED, this.$1);
        try {
          d = this.$3(a, d);
        } catch (b) {
          a.recordStageOutcome({
            stage: this.$1,
            outcome: c("MediaUploadFBStageOutcome").EXCEPTION,
            rawErrorObject: b,
          }),
            (d = c("MediaUploadOperationOutcome").SUCCESS);
        }
        a.emitStageEventForOperationOutcome(d, this.$1);
        return b("Promise").resolve(d);
      };
      e.$4 = function (a) {
        var b = {};
        a.extensions.forEach(function (a) {
          return (b[a] = 1);
        });
        return {
          minSize: a.minSizeKB * 1024,
          maxSize: a.maxSizeKB * 1024,
          maxLength: d("MediaUploadTime").timeToSeconds(a.maxDuration),
          minLength: d("MediaUploadTime").timeToSeconds(a.minDuration),
          acceptDimensionsFromPlayer: a.acceptDimensionsFromPlayer,
          minWidth: a.minWidth,
          minHeight: a.minHeight,
          require16to9AspectRatio: !1,
          minAspectRatio: a.minAspectRatio,
          maxAspectRatio: a.maxAspectRatio,
          source: a.sourceType,
          extensions: b,
        };
      };
      e.$3 = function (a, b) {
        var d = a.asset.dataAsFile();
        if (d == null) {
          a.recordStageOutcome({
            stage: this.$1,
            outcome: c("MediaUploadFBStageOutcome").ASSET_IS_NOT_FILE,
          });
          return c("MediaUploadOperationOutcome").SUCCESS;
        }
        if (this.configuration == null)
          throw this.$2.createThrowableError(
            "Missing configuration in the MediaUploadFBMetadataValidator"
          );
        d = new (c("VideoUploadFile"))(null, d.file, d.size, d.extension);
        var e = this.$4(this.configuration);
        e = new (c("VideoUploadFileValidator"))(e);
        e = e.getValidationErrorMessage(d, b);
        if (e != null) {
          a.recordStageOutcome({
            stage: this.$1,
            outcome: c("MediaUploadFBStageOutcome").INTERNAL_FAILURE,
            displayError: e,
          });
          return c("MediaUploadOperationOutcome").FAILED_NON_TRANSIENT;
        } else {
          a.recordStageOutcome({
            stage: this.$1,
            outcome: c("MediaUploadFBStageOutcome").SUCCESS,
          });
          return c("MediaUploadOperationOutcome").SUCCESS;
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
/**
 * License: https://www.facebook.com/legal/license/BDuAztjQnAL/
 */
__d(
  "CryptoJS",
  [],
  function (a, b, c, d, e, f) {
    !(function (a, b) {
      "object" == typeof f
        ? (e.exports = f = b())
        : "function" == typeof define && define.amd
        ? define([], b)
        : (a.CryptoJS = b());
    })(this, function () {
      var a =
        a ||
        (function (a, b) {
          var c =
              Object.create ||
              (function () {
                function a() {}
                return function (b) {
                  return (
                    (a.prototype = b), (b = new a()), (a.prototype = null), b
                  );
                };
              })(),
            d = {},
            e = (d.lib = {}),
            f = (e.Base = (function () {
              return {
                extend: function (a) {
                  var b = c(this);
                  return (
                    a && b.mixIn(a),
                    (b.hasOwnProperty("init") && this.init !== b.init) ||
                      (b.init = function () {
                        b.$super.init.apply(this, arguments);
                      }),
                    (b.init.prototype = b),
                    (b.$super = this),
                    b
                  );
                },
                create: function () {
                  var a = this.extend();
                  return a.init.apply(a, arguments), a;
                },
                init: function () {},
                mixIn: function (a) {
                  for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
                  a.hasOwnProperty("toString") && (this.toString = a.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              };
            })()),
            g = (e.WordArray = f.extend({
              init: function (a, c) {
                (a = this.words = a || []),
                  c != b ? (this.sigBytes = c) : (this.sigBytes = 4 * a.length);
              },
              toString: function (a) {
                return (a || i).stringify(this);
              },
              concat: function (a) {
                var b = this.words,
                  c = a.words,
                  d = this.sigBytes;
                a = a.sigBytes;
                if ((this.clamp(), d % 4))
                  for (var e = 0; e < a; e++) {
                    var f = (c[e >>> 2] >>> (24 - (e % 4) * 8)) & 255;
                    b[(d + e) >>> 2] |= f << (24 - ((d + e) % 4) * 8);
                  }
                else
                  for (var e = 0; e < a; e += 4) b[(d + e) >>> 2] = c[e >>> 2];
                return (this.sigBytes += a), this;
              },
              clamp: function () {
                var b = this.words,
                  c = this.sigBytes;
                (b[c >>> 2] &= 4294967295 << (32 - (c % 4) * 8)),
                  (b.length = a.ceil(c / 4));
              },
              clone: function () {
                var a = f.clone.call(this);
                return (a.words = this.words.slice(0)), a;
              },
              random: function (b) {
                for (
                  var c,
                    d = [],
                    e = function (b) {
                      var b = b,
                        c = 987654321,
                        d = 4294967295;
                      return function () {
                        (c = (36969 * (65535 & c) + (c >> 16)) & d),
                          (b = (18e3 * (65535 & b) + (b >> 16)) & d);
                        var e = ((c << 16) + b) & d;
                        return (
                          (e /= 4294967296),
                          (e += 0.5),
                          e * (a.random() > 0.5 ? 1 : -1)
                        );
                      };
                    },
                    f = 0;
                  f < b;
                  f += 4
                ) {
                  var i = e(4294967296 * (c || a.random()));
                  (c = 987654071 * i()), d.push((4294967296 * i()) | 0);
                }
                return new g.init(d, b);
              },
            })),
            h = (d.enc = {}),
            i = (h.Hex = {
              stringify: function (a) {
                for (
                  var b = a.words, a = a.sigBytes, c = [], d = 0;
                  d < a;
                  d++
                ) {
                  var e = (b[d >>> 2] >>> (24 - (d % 4) * 8)) & 255;
                  c.push((e >>> 4).toString(16)), c.push((15 & e).toString(16));
                }
                return c.join("");
              },
              parse: function (a) {
                for (var b = a.length, c = [], d = 0; d < b; d += 2)
                  c[d >>> 3] |=
                    parseInt(a.substr(d, 2), 16) << (24 - (d % 8) * 4);
                return new g.init(c, b / 2);
              },
            }),
            j = (h.Latin1 = {
              stringify: function (a) {
                for (
                  var b = a.words, a = a.sigBytes, c = [], d = 0;
                  d < a;
                  d++
                ) {
                  var e = (b[d >>> 2] >>> (24 - (d % 4) * 8)) & 255;
                  c.push(String.fromCharCode(e));
                }
                return c.join("");
              },
              parse: function (a) {
                for (var b = a.length, c = [], d = 0; d < b; d++)
                  c[d >>> 2] |= (255 & a.charCodeAt(d)) << (24 - (d % 4) * 8);
                return new g.init(c, b);
              },
            }),
            k = (h.Utf8 = {
              stringify: function (a) {
                try {
                  return decodeURIComponent(escape(j.stringify(a)));
                } catch (a) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function (a) {
                return j.parse(unescape(encodeURIComponent(a)));
              },
            }),
            l = (e.BufferedBlockAlgorithm = f.extend({
              reset: function () {
                (this._data = new g.init()), (this._nDataBytes = 0);
              },
              _append: function (a) {
                "string" == typeof a && (a = k.parse(a)),
                  this._data.concat(a),
                  (this._nDataBytes += a.sigBytes);
              },
              _process: function (b) {
                var c = this._data,
                  d = c.words,
                  e = c.sigBytes,
                  f = this.blockSize,
                  i = 4 * f;
                i = e / i;
                i = b ? a.ceil(i) : a.max((0 | i) - this._minBufferSize, 0);
                b = i * f;
                i = a.min(4 * b, e);
                if (b) {
                  for (var e = 0; e < b; e += f) this._doProcessBlock(d, e);
                  var j = d.splice(0, b);
                  c.sigBytes -= i;
                }
                return new g.init(j, i);
              },
              clone: function () {
                var a = f.clone.call(this);
                return (a._data = this._data.clone()), a;
              },
              _minBufferSize: 0,
            })),
            m =
              ((e.Hasher = l.extend({
                cfg: f.extend(),
                init: function (a) {
                  (this.cfg = this.cfg.extend(a)), this.reset();
                },
                reset: function () {
                  l.reset.call(this), this._doReset();
                },
                update: function (a) {
                  return this._append(a), this._process(), this;
                },
                finalize: function (a) {
                  a && this._append(a);
                  a = this._doFinalize();
                  return a;
                },
                blockSize: 16,
                _createHelper: function (a) {
                  return function (b, c) {
                    return new a.init(c).finalize(b);
                  };
                },
                _createHmacHelper: function (a) {
                  return function (b, c) {
                    return new m.HMAC.init(a, c).finalize(b);
                  };
                },
              })),
              (d.algo = {}));
          return d;
        })(Math);
      return (
        (function () {
          function b(a, b, c) {
            for (var d = [], f = 0, g = 0; g < b; g++)
              if (g % 4) {
                var h = c[a.charCodeAt(g - 1)] << ((g % 4) * 2),
                  i = c[a.charCodeAt(g)] >>> (6 - (g % 4) * 2);
                (d[f >>> 2] |= (h | i) << (24 - (f % 4) * 8)), f++;
              }
            return e.create(d, f);
          }
          var c = a,
            d = c.lib,
            e = d.WordArray;
          d = c.enc;
          d.Base64 = {
            stringify: function (a) {
              var b = a.words,
                c = a.sigBytes,
                d = this._map;
              a.clamp();
              for (var a = [], e = 0; e < c; e += 3)
                for (
                  var f = (b[e >>> 2] >>> (24 - (e % 4) * 8)) & 255,
                    g = (b[(e + 1) >>> 2] >>> (24 - ((e + 1) % 4) * 8)) & 255,
                    h = (b[(e + 2) >>> 2] >>> (24 - ((e + 2) % 4) * 8)) & 255,
                    f = (f << 16) | (g << 8) | h,
                    g = 0;
                  g < 4 && e + 0.75 * g < c;
                  g++
                )
                  a.push(d.charAt((f >>> (6 * (3 - g))) & 63));
              h = d.charAt(64);
              if (h) for (; a.length % 4; ) a.push(h);
              return a.join("");
            },
            parse: function (a) {
              var c = a.length,
                d = this._map,
                e = this._reverseMap;
              if (!e) {
                e = this._reverseMap = [];
                for (var f = 0; f < d.length; f++) e[d.charCodeAt(f)] = f;
              }
              f = d.charAt(64);
              if (f) {
                d = a.indexOf(f);
                d !== -1 && (c = d);
              }
              return b(a, c, e);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          };
        })(),
        (function (b) {
          function c(a, b, c, d, e, f, h) {
            a = a + ((b & c) | (~b & d)) + e + h;
            return ((a << f) | (a >>> (32 - f))) + b;
          }
          function d(a, b, c, d, e, f, h) {
            a = a + ((b & d) | (c & ~d)) + e + h;
            return ((a << f) | (a >>> (32 - f))) + b;
          }
          function e(a, b, c, d, e, f, h) {
            a = a + (b ^ c ^ d) + e + h;
            return ((a << f) | (a >>> (32 - f))) + b;
          }
          function f(a, b, c, d, e, f, h) {
            a = a + (c ^ (b | ~d)) + e + h;
            return ((a << f) | (a >>> (32 - f))) + b;
          }
          var g = a,
            h = g.lib,
            i = h.WordArray,
            j = h.Hasher;
          h = g.algo;
          var k = [];
          !(function () {
            for (var a = 0; a < 64; a++)
              k[a] = (4294967296 * b.abs(b.sin(a + 1))) | 0;
          })();
          h = h.MD5 = j.extend({
            _doReset: function () {
              this._hash = new i.init([
                1732584193, 4023233417, 2562383102, 271733878,
              ]);
            },
            _doProcessBlock: function (a, b) {
              for (var j = 0; j < 16; j++) {
                var h = b + j,
                  i = a[h];
                a[h] =
                  (16711935 & ((i << 8) | (i >>> 24))) |
                  (4278255360 & ((i << 24) | (i >>> 8)));
              }
              h = this._hash.words;
              i = a[b + 0];
              j = a[b + 1];
              var l = a[b + 2],
                m = a[b + 3],
                n = a[b + 4],
                o = a[b + 5],
                p = a[b + 6],
                q = a[b + 7],
                r = a[b + 8],
                s = a[b + 9],
                t = a[b + 10],
                u = a[b + 11],
                v = a[b + 12],
                w = a[b + 13],
                x = a[b + 14];
              a = a[b + 15];
              b = h[0];
              var y = h[1],
                z = h[2],
                A = h[3];
              (b = c(b, y, z, A, i, 7, k[0])),
                (A = c(A, b, y, z, j, 12, k[1])),
                (z = c(z, A, b, y, l, 17, k[2])),
                (y = c(y, z, A, b, m, 22, k[3])),
                (b = c(b, y, z, A, n, 7, k[4])),
                (A = c(A, b, y, z, o, 12, k[5])),
                (z = c(z, A, b, y, p, 17, k[6])),
                (y = c(y, z, A, b, q, 22, k[7])),
                (b = c(b, y, z, A, r, 7, k[8])),
                (A = c(A, b, y, z, s, 12, k[9])),
                (z = c(z, A, b, y, t, 17, k[10])),
                (y = c(y, z, A, b, u, 22, k[11])),
                (b = c(b, y, z, A, v, 7, k[12])),
                (A = c(A, b, y, z, w, 12, k[13])),
                (z = c(z, A, b, y, x, 17, k[14])),
                (y = c(y, z, A, b, a, 22, k[15])),
                (b = d(b, y, z, A, j, 5, k[16])),
                (A = d(A, b, y, z, p, 9, k[17])),
                (z = d(z, A, b, y, u, 14, k[18])),
                (y = d(y, z, A, b, i, 20, k[19])),
                (b = d(b, y, z, A, o, 5, k[20])),
                (A = d(A, b, y, z, t, 9, k[21])),
                (z = d(z, A, b, y, a, 14, k[22])),
                (y = d(y, z, A, b, n, 20, k[23])),
                (b = d(b, y, z, A, s, 5, k[24])),
                (A = d(A, b, y, z, x, 9, k[25])),
                (z = d(z, A, b, y, m, 14, k[26])),
                (y = d(y, z, A, b, r, 20, k[27])),
                (b = d(b, y, z, A, w, 5, k[28])),
                (A = d(A, b, y, z, l, 9, k[29])),
                (z = d(z, A, b, y, q, 14, k[30])),
                (y = d(y, z, A, b, v, 20, k[31])),
                (b = e(b, y, z, A, o, 4, k[32])),
                (A = e(A, b, y, z, r, 11, k[33])),
                (z = e(z, A, b, y, u, 16, k[34])),
                (y = e(y, z, A, b, x, 23, k[35])),
                (b = e(b, y, z, A, j, 4, k[36])),
                (A = e(A, b, y, z, n, 11, k[37])),
                (z = e(z, A, b, y, q, 16, k[38])),
                (y = e(y, z, A, b, t, 23, k[39])),
                (b = e(b, y, z, A, w, 4, k[40])),
                (A = e(A, b, y, z, i, 11, k[41])),
                (z = e(z, A, b, y, m, 16, k[42])),
                (y = e(y, z, A, b, p, 23, k[43])),
                (b = e(b, y, z, A, s, 4, k[44])),
                (A = e(A, b, y, z, v, 11, k[45])),
                (z = e(z, A, b, y, a, 16, k[46])),
                (y = e(y, z, A, b, l, 23, k[47])),
                (b = f(b, y, z, A, i, 6, k[48])),
                (A = f(A, b, y, z, q, 10, k[49])),
                (z = f(z, A, b, y, x, 15, k[50])),
                (y = f(y, z, A, b, o, 21, k[51])),
                (b = f(b, y, z, A, v, 6, k[52])),
                (A = f(A, b, y, z, m, 10, k[53])),
                (z = f(z, A, b, y, t, 15, k[54])),
                (y = f(y, z, A, b, j, 21, k[55])),
                (b = f(b, y, z, A, r, 6, k[56])),
                (A = f(A, b, y, z, a, 10, k[57])),
                (z = f(z, A, b, y, p, 15, k[58])),
                (y = f(y, z, A, b, w, 21, k[59])),
                (b = f(b, y, z, A, n, 6, k[60])),
                (A = f(A, b, y, z, u, 10, k[61])),
                (z = f(z, A, b, y, l, 15, k[62])),
                (y = f(y, z, A, b, s, 21, k[63])),
                (h[0] = (h[0] + b) | 0),
                (h[1] = (h[1] + y) | 0),
                (h[2] = (h[2] + z) | 0),
                (h[3] = (h[3] + A) | 0);
            },
            _doFinalize: function () {
              var a = this._data,
                c = a.words,
                d = 8 * this._nDataBytes,
                e = 8 * a.sigBytes;
              c[e >>> 5] |= 128 << (24 - (e % 32));
              var f = b.floor(d / 4294967296);
              d = d;
              (c[(((e + 64) >>> 9) << 4) + 15] =
                (16711935 & ((f << 8) | (f >>> 24))) |
                (4278255360 & ((f << 24) | (f >>> 8)))),
                (c[(((e + 64) >>> 9) << 4) + 14] =
                  (16711935 & ((d << 8) | (d >>> 24))) |
                  (4278255360 & ((d << 24) | (d >>> 8)))),
                (a.sigBytes = 4 * (c.length + 1)),
                this._process();
              for (var f = this._hash, e = f.words, d = 0; d < 4; d++) {
                a = e[d];
                e[d] =
                  (16711935 & ((a << 8) | (a >>> 24))) |
                  (4278255360 & ((a << 24) | (a >>> 8)));
              }
              return f;
            },
            clone: function () {
              var a = j.clone.call(this);
              return (a._hash = this._hash.clone()), a;
            },
          });
          (g.MD5 = j._createHelper(h)), (g.HmacMD5 = j._createHmacHelper(h));
        })(Math),
        (function () {
          var b = a,
            c = b.lib,
            d = c.WordArray,
            e = c.Hasher;
          c = b.algo;
          var f = [];
          c = c.SHA1 = e.extend({
            _doReset: function () {
              this._hash = new d.init([
                1732584193, 4023233417, 2562383102, 271733878, 3285377520,
              ]);
            },
            _doProcessBlock: function (a, b) {
              for (
                var c = this._hash.words,
                  d = c[0],
                  e = c[1],
                  g = c[2],
                  h = c[3],
                  i = c[4],
                  j = 0;
                j < 80;
                j++
              ) {
                if (j < 16) f[j] = 0 | a[b + j];
                else {
                  var k = f[j - 3] ^ f[j - 8] ^ f[j - 14] ^ f[j - 16];
                  f[j] = (k << 1) | (k >>> 31);
                }
                k = ((d << 5) | (d >>> 27)) + i + f[j];
                (k +=
                  j < 20
                    ? ((e & g) | (~e & h)) + 1518500249
                    : j < 40
                    ? (e ^ g ^ h) + 1859775393
                    : j < 60
                    ? ((e & g) | (e & h) | (g & h)) - 1894007588
                    : (e ^ g ^ h) - 899497514),
                  (i = h),
                  (h = g),
                  (g = (e << 30) | (e >>> 2)),
                  (e = d),
                  (d = k);
              }
              (c[0] = (c[0] + d) | 0),
                (c[1] = (c[1] + e) | 0),
                (c[2] = (c[2] + g) | 0),
                (c[3] = (c[3] + h) | 0),
                (c[4] = (c[4] + i) | 0);
            },
            _doFinalize: function () {
              var a = this._data,
                b = a.words,
                c = 8 * this._nDataBytes,
                d = 8 * a.sigBytes;
              return (
                (b[d >>> 5] |= 128 << (24 - (d % 32))),
                (b[(((d + 64) >>> 9) << 4) + 14] = Math.floor(c / 4294967296)),
                (b[(((d + 64) >>> 9) << 4) + 15] = c),
                (a.sigBytes = 4 * b.length),
                this._process(),
                this._hash
              );
            },
            clone: function () {
              var a = e.clone.call(this);
              return (a._hash = this._hash.clone()), a;
            },
          });
          (b.SHA1 = e._createHelper(c)), (b.HmacSHA1 = e._createHmacHelper(c));
        })(),
        (function (b) {
          var c = a,
            d = c.lib,
            e = d.WordArray,
            f = d.Hasher;
          d = c.algo;
          var g = [],
            h = [];
          !(function () {
            function a(a) {
              for (var c = b.sqrt(a), d = 2; d <= c; d++)
                if (!(a % d)) return !1;
              return !0;
            }
            function c(a) {
              return (4294967296 * (a - (0 | a))) | 0;
            }
            for (var d = 2, e = 0; e < 64; )
              a(d) &&
                (e < 8 && (g[e] = c(b.pow(d, 0.5))),
                (h[e] = c(b.pow(d, 1 / 3))),
                e++),
                d++;
          })();
          var i = [];
          d = d.SHA256 = f.extend({
            _doReset: function () {
              this._hash = new e.init(g.slice(0));
            },
            _doProcessBlock: function (a, b) {
              for (
                var c = this._hash.words,
                  d = c[0],
                  e = c[1],
                  f = c[2],
                  j = c[3],
                  g = c[4],
                  k = c[5],
                  l = c[6],
                  m = c[7],
                  n = 0;
                n < 64;
                n++
              ) {
                if (n < 16) i[n] = 0 | a[b + n];
                else {
                  var o = i[n - 15];
                  o =
                    ((o << 25) | (o >>> 7)) ^
                    ((o << 14) | (o >>> 18)) ^
                    (o >>> 3);
                  var p = i[n - 2];
                  p =
                    ((p << 15) | (p >>> 17)) ^
                    ((p << 13) | (p >>> 19)) ^
                    (p >>> 10);
                  i[n] = o + i[n - 7] + p + i[n - 16];
                }
                o = (g & k) ^ (~g & l);
                p = (d & e) ^ (d & f) ^ (e & f);
                var q =
                    ((d << 30) | (d >>> 2)) ^
                    ((d << 19) | (d >>> 13)) ^
                    ((d << 10) | (d >>> 22)),
                  r =
                    ((g << 26) | (g >>> 6)) ^
                    ((g << 21) | (g >>> 11)) ^
                    ((g << 7) | (g >>> 25));
                r = m + r + o + h[n] + i[n];
                o = q + p;
                (m = l),
                  (l = k),
                  (k = g),
                  (g = (j + r) | 0),
                  (j = f),
                  (f = e),
                  (e = d),
                  (d = (r + o) | 0);
              }
              (c[0] = (c[0] + d) | 0),
                (c[1] = (c[1] + e) | 0),
                (c[2] = (c[2] + f) | 0),
                (c[3] = (c[3] + j) | 0),
                (c[4] = (c[4] + g) | 0),
                (c[5] = (c[5] + k) | 0),
                (c[6] = (c[6] + l) | 0),
                (c[7] = (c[7] + m) | 0);
            },
            _doFinalize: function () {
              var a = this._data,
                c = a.words,
                d = 8 * this._nDataBytes,
                e = 8 * a.sigBytes;
              return (
                (c[e >>> 5] |= 128 << (24 - (e % 32))),
                (c[(((e + 64) >>> 9) << 4) + 14] = b.floor(d / 4294967296)),
                (c[(((e + 64) >>> 9) << 4) + 15] = d),
                (a.sigBytes = 4 * c.length),
                this._process(),
                this._hash
              );
            },
            clone: function () {
              var a = f.clone.call(this);
              return (a._hash = this._hash.clone()), a;
            },
          });
          (c.SHA256 = f._createHelper(d)),
            (c.HmacSHA256 = f._createHmacHelper(d));
        })(Math),
        (function () {
          function b(a) {
            return ((a << 8) & 4278255360) | ((a >>> 8) & 16711935);
          }
          var c = a,
            d = c.lib,
            e = d.WordArray;
          d = c.enc;
          d.Utf16 = d.Utf16BE = {
            stringify: function (a) {
              for (
                var b = a.words, a = a.sigBytes, c = [], d = 0;
                d < a;
                d += 2
              ) {
                var e = (b[d >>> 2] >>> (16 - (d % 4) * 8)) & 65535;
                c.push(String.fromCharCode(e));
              }
              return c.join("");
            },
            parse: function (a) {
              for (var b = a.length, c = [], d = 0; d < b; d++)
                c[d >>> 1] |= a.charCodeAt(d) << (16 - (d % 2) * 16);
              return e.create(c, 2 * b);
            },
          };
          d.Utf16LE = {
            stringify: function (a) {
              for (
                var c = a.words, a = a.sigBytes, d = [], e = 0;
                e < a;
                e += 2
              ) {
                var f = b((c[e >>> 2] >>> (16 - (e % 4) * 8)) & 65535);
                d.push(String.fromCharCode(f));
              }
              return d.join("");
            },
            parse: function (a) {
              for (var c = a.length, d = [], f = 0; f < c; f++)
                d[f >>> 1] |= b(a.charCodeAt(f) << (16 - (f % 2) * 16));
              return e.create(d, 2 * c);
            },
          };
        })(),
        (function () {
          if ("function" == typeof ArrayBuffer) {
            var b = a;
            b = b.lib;
            b = b.WordArray;
            var c = b.init,
              d = (b.init = function (a) {
                if (
                  (a instanceof ArrayBuffer && (a = new Uint8Array(a)),
                  (a instanceof Int8Array ||
                    ("undefined" != typeof Uint8ClampedArray &&
                      a instanceof Uint8ClampedArray) ||
                    a instanceof Int16Array ||
                    a instanceof Uint16Array ||
                    a instanceof Int32Array ||
                    a instanceof Uint32Array ||
                    a instanceof Float32Array ||
                    a instanceof Float64Array) &&
                    (a = new Uint8Array(a.buffer, a.byteOffset, a.byteLength)),
                  a instanceof Uint8Array)
                ) {
                  for (var b = a.byteLength, d = [], e = 0; e < b; e++)
                    d[e >>> 2] |= a[e] << (24 - (e % 4) * 8);
                  c.call(this, d, b);
                } else c.apply(this, arguments);
              });
            d.prototype = b;
          }
        })(),
        (function (b) {
          function c(a, b, c) {
            return a ^ b ^ c;
          }
          function d(a, b, c) {
            return (a & b) | (~a & c);
          }
          function e(a, b, c) {
            return (a | ~b) ^ c;
          }
          function f(a, b, c) {
            return (a & c) | (b & ~c);
          }
          function g(a, b, c) {
            return a ^ (b | ~c);
          }
          function h(a, b) {
            return (a << b) | (a >>> (32 - b));
          }
          b = a;
          var i = b.lib,
            j = i.WordArray,
            k = i.Hasher;
          i = b.algo;
          var l = j.create([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1,
              10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8,
              1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7,
              15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15,
              13,
            ]),
            m = j.create([
              5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7,
              0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9,
              11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2,
              13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3,
              9, 11,
            ]),
            n = j.create([
              11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8,
              13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14,
              9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9,
              8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12,
              13, 14, 11, 8, 5, 6,
            ]),
            o = j.create([
              8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15,
              7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6,
              6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14,
              6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5,
              15, 13, 11, 11,
            ]),
            p = j.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
            q = j.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
          i = i.RIPEMD160 = k.extend({
            _doReset: function () {
              this._hash = j.create([
                1732584193, 4023233417, 2562383102, 271733878, 3285377520,
              ]);
            },
            _doProcessBlock: function (a, b) {
              for (var r = 0; r < 16; r++) {
                var i = b + r,
                  j = a[i];
                a[i] =
                  (16711935 & ((j << 8) | (j >>> 24))) |
                  (4278255360 & ((j << 24) | (j >>> 8)));
              }
              var k, s, t, u, v, w, x, y, z, A;
              i = this._hash.words;
              j = p.words;
              var B = q.words,
                C = l.words,
                D = m.words,
                E = n.words,
                F = o.words;
              (w = k = i[0]),
                (x = s = i[1]),
                (y = t = i[2]),
                (z = u = i[3]),
                (A = v = i[4]);
              for (var G, r = 0; r < 80; r += 1)
                (G = (k + a[b + C[r]]) | 0),
                  (G +=
                    r < 16
                      ? c(s, t, u) + j[0]
                      : r < 32
                      ? d(s, t, u) + j[1]
                      : r < 48
                      ? e(s, t, u) + j[2]
                      : r < 64
                      ? f(s, t, u) + j[3]
                      : g(s, t, u) + j[4]),
                  (G |= 0),
                  (G = h(G, E[r])),
                  (G = (G + v) | 0),
                  (k = v),
                  (v = u),
                  (u = h(t, 10)),
                  (t = s),
                  (s = G),
                  (G = (w + a[b + D[r]]) | 0),
                  (G +=
                    r < 16
                      ? g(x, y, z) + B[0]
                      : r < 32
                      ? f(x, y, z) + B[1]
                      : r < 48
                      ? e(x, y, z) + B[2]
                      : r < 64
                      ? d(x, y, z) + B[3]
                      : c(x, y, z) + B[4]),
                  (G |= 0),
                  (G = h(G, F[r])),
                  (G = (G + A) | 0),
                  (w = A),
                  (A = z),
                  (z = h(y, 10)),
                  (y = x),
                  (x = G);
              (G = (i[1] + t + z) | 0),
                (i[1] = (i[2] + u + A) | 0),
                (i[2] = (i[3] + v + w) | 0),
                (i[3] = (i[4] + k + x) | 0),
                (i[4] = (i[0] + s + y) | 0),
                (i[0] = G);
            },
            _doFinalize: function () {
              var a = this._data,
                b = a.words,
                c = 8 * this._nDataBytes,
                d = 8 * a.sigBytes;
              (b[d >>> 5] |= 128 << (24 - (d % 32))),
                (b[(((d + 64) >>> 9) << 4) + 14] =
                  (16711935 & ((c << 8) | (c >>> 24))) |
                  (4278255360 & ((c << 24) | (c >>> 8)))),
                (a.sigBytes = 4 * (b.length + 1)),
                this._process();
              for (var d = this._hash, c = d.words, a = 0; a < 5; a++) {
                b = c[a];
                c[a] =
                  (16711935 & ((b << 8) | (b >>> 24))) |
                  (4278255360 & ((b << 24) | (b >>> 8)));
              }
              return d;
            },
            clone: function () {
              var a = k.clone.call(this);
              return (a._hash = this._hash.clone()), a;
            },
          });
          (b.RIPEMD160 = k._createHelper(i)),
            (b.HmacRIPEMD160 = k._createHmacHelper(i));
        })(Math),
        (function () {
          var b = a,
            c = b.lib;
          c = c.Base;
          var d = b.enc,
            e = d.Utf8;
          d = b.algo;
          d.HMAC = c.extend({
            init: function (a, b) {
              (a = this._hasher = new a.init()),
                "string" == typeof b && (b = e.parse(b));
              var c = a.blockSize,
                d = 4 * c;
              b.sigBytes > d && (b = a.finalize(b)), b.clamp();
              for (
                var a = (this._oKey = b.clone()),
                  b = (this._iKey = b.clone()),
                  f = a.words,
                  g = b.words,
                  h = 0;
                h < c;
                h++
              )
                (f[h] ^= 1549556828), (g[h] ^= 909522486);
              (a.sigBytes = b.sigBytes = d), this.reset();
            },
            reset: function () {
              var a = this._hasher;
              a.reset(), a.update(this._iKey);
            },
            update: function (a) {
              return this._hasher.update(a), this;
            },
            finalize: function (a) {
              var b = this._hasher;
              a = b.finalize(a);
              b.reset();
              b = b.finalize(this._oKey.clone().concat(a));
              return b;
            },
          });
        })(),
        (function () {
          var b = a,
            c = b.lib,
            d = c.Base,
            e = c.WordArray;
          c = b.algo;
          var f = c.SHA1,
            g = c.HMAC,
            h = (c.PBKDF2 = d.extend({
              cfg: d.extend({ keySize: 4, hasher: f, iterations: 1 }),
              init: function (a) {
                this.cfg = this.cfg.extend(a);
              },
              compute: function (a, b) {
                for (
                  var c = this.cfg,
                    a = g.create(c.hasher, a),
                    i = e.create(),
                    d = e.create([1]),
                    f = i.words,
                    j = d.words,
                    k = c.keySize,
                    c = c.iterations;
                  f.length < k;

                ) {
                  var l = a.update(b).finalize(d);
                  a.reset();
                  for (
                    var m = l.words, n = m.length, o = l, p = 1;
                    p < c;
                    p++
                  ) {
                    (o = a.finalize(o)), a.reset();
                    for (var q = o.words, r = 0; r < n; r++) m[r] ^= q[r];
                  }
                  i.concat(l), j[0]++;
                }
                return (i.sigBytes = 4 * k), i;
              },
            }));
          b.PBKDF2 = function (a, b, c) {
            return h.create(c).compute(a, b);
          };
        })(),
        (function () {
          var b = a,
            c = b.lib,
            d = c.Base,
            e = c.WordArray;
          c = b.algo;
          var f = c.MD5,
            g = (c.EvpKDF = d.extend({
              cfg: d.extend({ keySize: 4, hasher: f, iterations: 1 }),
              init: function (a) {
                this.cfg = this.cfg.extend(a);
              },
              compute: function (a, b) {
                for (
                  var c = this.cfg,
                    d = c.hasher.create(),
                    h = e.create(),
                    f = h.words,
                    g = c.keySize,
                    c = c.iterations;
                  f.length < g;

                ) {
                  i && d.update(i);
                  var i = d.update(a).finalize(b);
                  d.reset();
                  for (var j = 1; j < c; j++) (i = d.finalize(i)), d.reset();
                  h.concat(i);
                }
                return (h.sigBytes = 4 * g), h;
              },
            }));
          b.EvpKDF = function (a, b, c) {
            return g.create(c).compute(a, b);
          };
        })(),
        (function () {
          var b = a,
            c = b.lib,
            d = c.WordArray;
          c = b.algo;
          var e = c.SHA256;
          c = c.SHA224 = e.extend({
            _doReset: function () {
              this._hash = new d.init([
                3238371032, 914150663, 812702999, 4144912697, 4290775857,
                1750603025, 1694076839, 3204075428,
              ]);
            },
            _doFinalize: function () {
              var a = e._doFinalize.call(this);
              return (a.sigBytes -= 4), a;
            },
          });
          (b.SHA224 = e._createHelper(c)),
            (b.HmacSHA224 = e._createHmacHelper(c));
        })(),
        (function (b) {
          var c = a,
            d = c.lib,
            e = d.Base,
            f = d.WordArray;
          d = c.x64 = {};
          (d.Word = e.extend({
            init: function (a, b) {
              (this.high = a), (this.low = b);
            },
          })),
            (d.WordArray = e.extend({
              init: function (a, c) {
                (a = this.words = a || []),
                  c != b ? (this.sigBytes = c) : (this.sigBytes = 8 * a.length);
              },
              toX32: function () {
                for (
                  var a = this.words, b = a.length, c = [], d = 0;
                  d < b;
                  d++
                ) {
                  var e = a[d];
                  c.push(e.high), c.push(e.low);
                }
                return f.create(c, this.sigBytes);
              },
              clone: function () {
                for (
                  var a = e.clone.call(this),
                    b = (a.words = this.words.slice(0)),
                    c = b.length,
                    d = 0;
                  d < c;
                  d++
                )
                  b[d] = b[d].clone();
                return a;
              },
            }));
        })(),
        (function (b) {
          var c = a,
            d = c.lib,
            e = d.WordArray,
            f = d.Hasher;
          d = c.x64;
          var g = d.Word;
          d = c.algo;
          var h = [],
            i = [],
            j = [];
          !(function () {
            for (var a = 1, b = 0, c = 0; c < 24; c++) {
              h[a + 5 * b] = (((c + 1) * (c + 2)) / 2) % 64;
              var d = b % 5,
                e = (2 * a + 3 * b) % 5;
              (a = d), (b = e);
            }
            for (var a = 0; a < 5; a++)
              for (var b = 0; b < 5; b++)
                i[a + 5 * b] = b + ((2 * a + 3 * b) % 5) * 5;
            for (var d = 1, e = 0; e < 24; e++) {
              for (var c = 0, b = 0, a = 0; a < 7; a++) {
                if (1 & d) {
                  var f = (1 << a) - 1;
                  f < 32 ? (b ^= 1 << f) : (c ^= 1 << (f - 32));
                }
                128 & d ? (d = (d << 1) ^ 113) : (d <<= 1);
              }
              j[e] = g.create(c, b);
            }
          })();
          var k = [];
          !(function () {
            for (var a = 0; a < 25; a++) k[a] = g.create();
          })();
          d = d.SHA3 = f.extend({
            cfg: f.cfg.extend({ outputLength: 512 }),
            _doReset: function () {
              for (var a = (this._state = []), b = 0; b < 25; b++)
                a[b] = new g.init();
              this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
            },
            _doProcessBlock: function (a, b) {
              for (
                var c = this._state, d = this.blockSize / 2, e = 0;
                e < d;
                e++
              ) {
                var f = a[b + 2 * e],
                  l = a[b + 2 * e + 1];
                (f =
                  (16711935 & ((f << 8) | (f >>> 24))) |
                  (4278255360 & ((f << 24) | (f >>> 8)))),
                  (l =
                    (16711935 & ((l << 8) | (l >>> 24))) |
                    (4278255360 & ((l << 24) | (l >>> 8))));
                var g = c[e];
                (g.high ^= l), (g.low ^= f);
              }
              for (var l = 0; l < 24; l++) {
                for (var f = 0; f < 5; f++) {
                  for (var d = 0, e = 0, b = 0; b < 5; b++) {
                    var g = c[f + 5 * b];
                    (d ^= g.high), (e ^= g.low);
                  }
                  a = k[f];
                  (a.high = d), (a.low = e);
                }
                for (var f = 0; f < 5; f++)
                  for (
                    var a = k[(f + 4) % 5],
                      m = k[(f + 1) % 5],
                      n = m.high,
                      m = m.low,
                      d = a.high ^ ((n << 1) | (m >>> 31)),
                      e = a.low ^ ((m << 1) | (n >>> 31)),
                      b = 0;
                    b < 5;
                    b++
                  ) {
                    var g = c[f + 5 * b];
                    (g.high ^= d), (g.low ^= e);
                  }
                for (var a = 1; a < 25; a++) {
                  var g = c[a];
                  m = g.high;
                  n = g.low;
                  var o = h[a];
                  if (o < 32)
                    var d = (m << o) | (n >>> (32 - o)),
                      e = (n << o) | (m >>> (32 - o));
                  else
                    var d = (n << (o - 32)) | (m >>> (64 - o)),
                      e = (m << (o - 32)) | (n >>> (64 - o));
                  m = k[i[a]];
                  (m.high = d), (m.low = e);
                }
                n = k[0];
                o = c[0];
                (n.high = o.high), (n.low = o.low);
                for (var f = 0; f < 5; f++)
                  for (var b = 0; b < 5; b++) {
                    a = f + 5 * b;
                    var g = c[a];
                    d = k[a];
                    m = k[((f + 1) % 5) + 5 * b];
                    e = k[((f + 2) % 5) + 5 * b];
                    (g.high = d.high ^ (~m.high & e.high)),
                      (g.low = d.low ^ (~m.low & e.low));
                  }
                var g = c[0];
                n = j[l];
                (g.high ^= n.high), (g.low ^= n.low);
              }
            },
            _doFinalize: function () {
              var a = this._data,
                c = a.words,
                d = (8 * this._nDataBytes, 8 * a.sigBytes),
                f = 32 * this.blockSize;
              (c[d >>> 5] |= 1 << (24 - (d % 32))),
                (c[((b.ceil((d + 1) / f) * f) >>> 5) - 1] |= 128),
                (a.sigBytes = 4 * c.length),
                this._process();
              for (
                var d = this._state,
                  f = this.cfg.outputLength / 8,
                  a = f / 8,
                  c = [],
                  g = 0;
                g < a;
                g++
              ) {
                var h = d[g],
                  k = h.high;
                h = h.low;
                (k =
                  (16711935 & ((k << 8) | (k >>> 24))) |
                  (4278255360 & ((k << 24) | (k >>> 8)))),
                  (h =
                    (16711935 & ((h << 8) | (h >>> 24))) |
                    (4278255360 & ((h << 24) | (h >>> 8)))),
                  c.push(h),
                  c.push(k);
              }
              return new e.init(c, f);
            },
            clone: function () {
              for (
                var a = f.clone.call(this),
                  b = (a._state = this._state.slice(0)),
                  c = 0;
                c < 25;
                c++
              )
                b[c] = b[c].clone();
              return a;
            },
          });
          (c.SHA3 = f._createHelper(d)), (c.HmacSHA3 = f._createHmacHelper(d));
        })(Math),
        (function () {
          function b() {
            return f.create.apply(f, arguments);
          }
          var c = a,
            d = c.lib,
            e = d.Hasher;
          d = c.x64;
          var f = d.Word,
            g = d.WordArray;
          d = c.algo;
          var h = [
              b(1116352408, 3609767458),
              b(1899447441, 602891725),
              b(3049323471, 3964484399),
              b(3921009573, 2173295548),
              b(961987163, 4081628472),
              b(1508970993, 3053834265),
              b(2453635748, 2937671579),
              b(2870763221, 3664609560),
              b(3624381080, 2734883394),
              b(310598401, 1164996542),
              b(607225278, 1323610764),
              b(1426881987, 3590304994),
              b(1925078388, 4068182383),
              b(2162078206, 991336113),
              b(2614888103, 633803317),
              b(3248222580, 3479774868),
              b(3835390401, 2666613458),
              b(4022224774, 944711139),
              b(264347078, 2341262773),
              b(604807628, 2007800933),
              b(770255983, 1495990901),
              b(1249150122, 1856431235),
              b(1555081692, 3175218132),
              b(1996064986, 2198950837),
              b(2554220882, 3999719339),
              b(2821834349, 766784016),
              b(2952996808, 2566594879),
              b(3210313671, 3203337956),
              b(3336571891, 1034457026),
              b(3584528711, 2466948901),
              b(113926993, 3758326383),
              b(338241895, 168717936),
              b(666307205, 1188179964),
              b(773529912, 1546045734),
              b(1294757372, 1522805485),
              b(1396182291, 2643833823),
              b(1695183700, 2343527390),
              b(1986661051, 1014477480),
              b(2177026350, 1206759142),
              b(2456956037, 344077627),
              b(2730485921, 1290863460),
              b(2820302411, 3158454273),
              b(3259730800, 3505952657),
              b(3345764771, 106217008),
              b(3516065817, 3606008344),
              b(3600352804, 1432725776),
              b(4094571909, 1467031594),
              b(275423344, 851169720),
              b(430227734, 3100823752),
              b(506948616, 1363258195),
              b(659060556, 3750685593),
              b(883997877, 3785050280),
              b(958139571, 3318307427),
              b(1322822218, 3812723403),
              b(1537002063, 2003034995),
              b(1747873779, 3602036899),
              b(1955562222, 1575990012),
              b(2024104815, 1125592928),
              b(2227730452, 2716904306),
              b(2361852424, 442776044),
              b(2428436474, 593698344),
              b(2756734187, 3733110249),
              b(3204031479, 2999351573),
              b(3329325298, 3815920427),
              b(3391569614, 3928383900),
              b(3515267271, 566280711),
              b(3940187606, 3454069534),
              b(4118630271, 4000239992),
              b(116418474, 1914138554),
              b(174292421, 2731055270),
              b(289380356, 3203993006),
              b(460393269, 320620315),
              b(685471733, 587496836),
              b(852142971, 1086792851),
              b(1017036298, 365543100),
              b(1126000580, 2618297676),
              b(1288033470, 3409855158),
              b(1501505948, 4234509866),
              b(1607167915, 987167468),
              b(1816402316, 1246189591),
            ],
            i = [];
          !(function () {
            for (var a = 0; a < 80; a++) i[a] = b();
          })();
          d = d.SHA512 = e.extend({
            _doReset: function () {
              this._hash = new g.init([
                new f.init(1779033703, 4089235720),
                new f.init(3144134277, 2227873595),
                new f.init(1013904242, 4271175723),
                new f.init(2773480762, 1595750129),
                new f.init(1359893119, 2917565137),
                new f.init(2600822924, 725511199),
                new f.init(528734635, 4215389547),
                new f.init(1541459225, 327033209),
              ]);
            },
            _doProcessBlock: function (a, b) {
              for (
                var c = this._hash.words,
                  d = c[0],
                  e = c[1],
                  j = c[2],
                  f = c[3],
                  g = c[4],
                  k = c[5],
                  l = c[6],
                  c = c[7],
                  m = d.high,
                  n = d.low,
                  o = e.high,
                  p = e.low,
                  q = j.high,
                  r = j.low,
                  s = f.high,
                  t = f.low,
                  u = g.high,
                  v = g.low,
                  w = k.high,
                  x = k.low,
                  y = l.high,
                  z = l.low,
                  A = c.high,
                  B = c.low,
                  C = m,
                  D = n,
                  E = o,
                  F = p,
                  G = q,
                  H = r,
                  I = s,
                  J = t,
                  K = u,
                  L = v,
                  M = w,
                  N = x,
                  O = y,
                  P = z,
                  aa = A,
                  Q = B,
                  R = 0;
                R < 80;
                R++
              ) {
                var S = i[R];
                if (R < 16)
                  var T = (S.high = 0 | a[b + 2 * R]),
                    U = (S.low = 0 | a[b + 2 * R + 1]);
                else {
                  var V = i[R - 15],
                    W = V.high;
                  V = V.low;
                  var X =
                    ((W >>> 1) | (V << 31)) ^
                    ((W >>> 8) | (V << 24)) ^
                    (W >>> 7);
                  V =
                    ((V >>> 1) | (W << 31)) ^
                    ((V >>> 8) | (W << 24)) ^
                    ((V >>> 7) | (W << 25));
                  W = i[R - 2];
                  var Y = W.high;
                  W = W.low;
                  var ba =
                    ((Y >>> 19) | (W << 13)) ^
                    ((Y << 3) | (W >>> 29)) ^
                    (Y >>> 6);
                  W =
                    ((W >>> 19) | (Y << 13)) ^
                    ((W << 3) | (Y >>> 29)) ^
                    ((W >>> 6) | (Y << 26));
                  Y = i[R - 7];
                  var ca = Y.high;
                  Y = Y.low;
                  var Z = i[R - 16],
                    $ = Z.high;
                  Z = Z.low;
                  var U = V + Y,
                    T = X + ca + (U >>> 0 < V >>> 0 ? 1 : 0),
                    U = U + W,
                    T = T + ba + (U >>> 0 < W >>> 0 ? 1 : 0),
                    U = U + Z,
                    T = T + $ + (U >>> 0 < Z >>> 0 ? 1 : 0);
                  (S.high = T), (S.low = U);
                }
                Y = (K & M) ^ (~K & O);
                X = (L & N) ^ (~L & P);
                ca = (C & E) ^ (C & G) ^ (E & G);
                V = (D & F) ^ (D & H) ^ (F & H);
                ba =
                  ((C >>> 28) | (D << 4)) ^
                  ((C << 30) | (D >>> 2)) ^
                  ((C << 25) | (D >>> 7));
                W =
                  ((D >>> 28) | (C << 4)) ^
                  ((D << 30) | (C >>> 2)) ^
                  ((D << 25) | (C >>> 7));
                $ =
                  ((K >>> 14) | (L << 18)) ^
                  ((K >>> 18) | (L << 14)) ^
                  ((K << 23) | (L >>> 9));
                Z =
                  ((L >>> 14) | (K << 18)) ^
                  ((L >>> 18) | (K << 14)) ^
                  ((L << 23) | (K >>> 9));
                S = h[R];
                var da = S.high;
                S = S.low;
                Z = Q + Z;
                $ = aa + $ + (Z >>> 0 < Q >>> 0 ? 1 : 0);
                Z = Z + X;
                $ = $ + Y + (Z >>> 0 < X >>> 0 ? 1 : 0);
                Z = Z + S;
                $ = $ + da + (Z >>> 0 < S >>> 0 ? 1 : 0);
                Z = Z + U;
                $ = $ + T + (Z >>> 0 < U >>> 0 ? 1 : 0);
                Y = W + V;
                X = ba + ca + (Y >>> 0 < W >>> 0 ? 1 : 0);
                (aa = O),
                  (Q = P),
                  (O = M),
                  (P = N),
                  (M = K),
                  (N = L),
                  (L = (J + Z) | 0),
                  (K = (I + $ + (L >>> 0 < J >>> 0 ? 1 : 0)) | 0),
                  (I = G),
                  (J = H),
                  (G = E),
                  (H = F),
                  (E = C),
                  (F = D),
                  (D = (Z + Y) | 0),
                  (C = ($ + X + (D >>> 0 < Z >>> 0 ? 1 : 0)) | 0);
              }
              (n = d.low = n + D),
                (d.high = m + C + (n >>> 0 < D >>> 0 ? 1 : 0)),
                (p = e.low = p + F),
                (e.high = o + E + (p >>> 0 < F >>> 0 ? 1 : 0)),
                (r = j.low = r + H),
                (j.high = q + G + (r >>> 0 < H >>> 0 ? 1 : 0)),
                (t = f.low = t + J),
                (f.high = s + I + (t >>> 0 < J >>> 0 ? 1 : 0)),
                (v = g.low = v + L),
                (g.high = u + K + (v >>> 0 < L >>> 0 ? 1 : 0)),
                (x = k.low = x + N),
                (k.high = w + M + (x >>> 0 < N >>> 0 ? 1 : 0)),
                (z = l.low = z + P),
                (l.high = y + O + (z >>> 0 < P >>> 0 ? 1 : 0)),
                (B = c.low = B + Q),
                (c.high = A + aa + (B >>> 0 < Q >>> 0 ? 1 : 0));
            },
            _doFinalize: function () {
              var a = this._data,
                b = a.words,
                c = 8 * this._nDataBytes,
                d = 8 * a.sigBytes;
              (b[d >>> 5] |= 128 << (24 - (d % 32))),
                (b[(((d + 128) >>> 10) << 5) + 30] = Math.floor(
                  c / 4294967296
                )),
                (b[(((d + 128) >>> 10) << 5) + 31] = c),
                (a.sigBytes = 4 * b.length),
                this._process();
              d = this._hash.toX32();
              return d;
            },
            clone: function () {
              var a = e.clone.call(this);
              return (a._hash = this._hash.clone()), a;
            },
            blockSize: 32,
          });
          (c.SHA512 = e._createHelper(d)),
            (c.HmacSHA512 = e._createHmacHelper(d));
        })(),
        (function () {
          var b = a,
            c = b.x64,
            d = c.Word,
            e = c.WordArray;
          c = b.algo;
          var f = c.SHA512;
          c = c.SHA384 = f.extend({
            _doReset: function () {
              this._hash = new e.init([
                new d.init(3418070365, 3238371032),
                new d.init(1654270250, 914150663),
                new d.init(2438529370, 812702999),
                new d.init(355462360, 4144912697),
                new d.init(1731405415, 4290775857),
                new d.init(2394180231, 1750603025),
                new d.init(3675008525, 1694076839),
                new d.init(1203062813, 3204075428),
              ]);
            },
            _doFinalize: function () {
              var a = f._doFinalize.call(this);
              return (a.sigBytes -= 16), a;
            },
          });
          (b.SHA384 = f._createHelper(c)),
            (b.HmacSHA384 = f._createHmacHelper(c));
        })(),
        a.lib.Cipher ||
          (function (b) {
            var c = a,
              d = c.lib,
              e = d.Base,
              f = d.WordArray,
              g = d.BufferedBlockAlgorithm,
              h = c.enc,
              i = (h.Utf8, h.Base64);
            h = c.algo;
            var j = h.EvpKDF,
              k = (d.Cipher = g.extend({
                cfg: e.extend(),
                createEncryptor: function (a, b) {
                  return this.create(this._ENC_XFORM_MODE, a, b);
                },
                createDecryptor: function (a, b) {
                  return this.create(this._DEC_XFORM_MODE, a, b);
                },
                init: function (a, b, c) {
                  (this.cfg = this.cfg.extend(c)),
                    (this._xformMode = a),
                    (this._key = b),
                    this.reset();
                },
                reset: function () {
                  g.reset.call(this), this._doReset();
                },
                process: function (a) {
                  return this._append(a), this._process();
                },
                finalize: function (a) {
                  a && this._append(a);
                  a = this._doFinalize();
                  return a;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: (function () {
                  function a(a) {
                    return "string" == typeof a ? p : o;
                  }
                  return function (b) {
                    return {
                      encrypt: function (c, d, e) {
                        return a(d).encrypt(b, c, d, e);
                      },
                      decrypt: function (c, d, e) {
                        return a(d).decrypt(b, c, d, e);
                      },
                    };
                  };
                })(),
              }));
            h =
              ((d.StreamCipher = k.extend({
                _doFinalize: function () {
                  var a = this._process(!0);
                  return a;
                },
                blockSize: 1,
              })),
              (c.mode = {}));
            var l = (d.BlockCipherMode = e.extend({
              createEncryptor: function (a, b) {
                return this.Encryptor.create(a, b);
              },
              createDecryptor: function (a, b) {
                return this.Decryptor.create(a, b);
              },
              init: function (a, b) {
                (this._cipher = a), (this._iv = b);
              },
            }));
            h = h.CBC = (function () {
              function a(a, c, d) {
                var e = this._iv;
                if (e) {
                  e = e;
                  this._iv = b;
                } else var e = this._prevBlock;
                for (var f = 0; f < d; f++) a[c + f] ^= e[f];
              }
              var c = l.extend();
              return (
                (c.Encryptor = c.extend({
                  processBlock: function (b, c) {
                    var d = this._cipher,
                      e = d.blockSize;
                    a.call(this, b, c, e),
                      d.encryptBlock(b, c),
                      (this._prevBlock = b.slice(c, c + e));
                  },
                })),
                (c.Decryptor = c.extend({
                  processBlock: function (b, c) {
                    var d = this._cipher,
                      e = d.blockSize,
                      f = b.slice(c, c + e);
                    d.decryptBlock(b, c),
                      a.call(this, b, c, e),
                      (this._prevBlock = f);
                  },
                })),
                c
              );
            })();
            var m = (c.pad = {});
            m = m.Pkcs7 = {
              pad: function (a, b) {
                for (
                  var b = 4 * b,
                    b = b - (a.sigBytes % b),
                    c = (b << 24) | (b << 16) | (b << 8) | b,
                    d = [],
                    e = 0;
                  e < b;
                  e += 4
                )
                  d.push(c);
                e = f.create(d, b);
                a.concat(e);
              },
              unpad: function (a) {
                var b = 255 & a.words[(a.sigBytes - 1) >>> 2];
                a.sigBytes -= b;
              },
            };
            var n =
              ((d.BlockCipher = k.extend({
                cfg: k.cfg.extend({ mode: h, padding: m }),
                reset: function () {
                  k.reset.call(this);
                  var a = this.cfg,
                    b = a.iv;
                  a = a.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE)
                    var c = a.createEncryptor;
                  else {
                    var c = a.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  this._mode && this._mode.__creator == c
                    ? this._mode.init(this, b && b.words)
                    : ((this._mode = c.call(a, this, b && b.words)),
                      (this._mode.__creator = c));
                },
                _doProcessBlock: function (a, b) {
                  this._mode.processBlock(a, b);
                },
                _doFinalize: function () {
                  var a = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    a.pad(this._data, this.blockSize);
                    var b = this._process(!0);
                  } else {
                    var b = this._process(!0);
                    a.unpad(b);
                  }
                  return b;
                },
                blockSize: 4,
              })),
              (d.CipherParams = e.extend({
                init: function (a) {
                  this.mixIn(a);
                },
                toString: function (a) {
                  return (a || this.formatter).stringify(this);
                },
              })));
            h = c.format = {};
            m = h.OpenSSL = {
              stringify: function (a) {
                var b = a.ciphertext;
                a = a.salt;
                if (a)
                  var a = f
                    .create([1398893684, 1701076831])
                    .concat(a)
                    .concat(b);
                else var a = b;
                return a.toString(i);
              },
              parse: function (a) {
                a = i.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                  var c = f.create(b.slice(2, 4));
                  b.splice(0, 4), (a.sigBytes -= 16);
                }
                return n.create({ ciphertext: a, salt: c });
              },
            };
            var o = (d.SerializableCipher = e.extend({
              cfg: e.extend({ format: m }),
              encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                var e = a.createEncryptor(c, d);
                b = e.finalize(b);
                e = e.cfg;
                return n.create({
                  ciphertext: b,
                  key: c,
                  iv: e.iv,
                  algorithm: a,
                  mode: e.mode,
                  padding: e.padding,
                  blockSize: a.blockSize,
                  formatter: d.format,
                });
              },
              decrypt: function (a, b, c, d) {
                (d = this.cfg.extend(d)), (b = this._parse(b, d.format));
                a = a.createDecryptor(c, d).finalize(b.ciphertext);
                return a;
              },
              _parse: function (a, b) {
                return "string" == typeof a ? b.parse(a, this) : a;
              },
            }));
            h = c.kdf = {};
            e = h.OpenSSL = {
              execute: function (a, b, c, d) {
                d || (d = f.random(8));
                a = j.create({ keySize: b + c }).compute(a, d);
                c = f.create(a.words.slice(b), 4 * c);
                return (
                  (a.sigBytes = 4 * b), n.create({ key: a, iv: c, salt: d })
                );
              },
            };
            var p = (d.PasswordBasedCipher = o.extend({
              cfg: o.cfg.extend({ kdf: e }),
              encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                c = d.kdf.execute(c, a.keySize, a.ivSize);
                d.iv = c.iv;
                a = o.encrypt.call(this, a, b, c.key, d);
                return a.mixIn(c), a;
              },
              decrypt: function (a, b, c, d) {
                (d = this.cfg.extend(d)), (b = this._parse(b, d.format));
                c = d.kdf.execute(c, a.keySize, a.ivSize, b.salt);
                d.iv = c.iv;
                a = o.decrypt.call(this, a, b, c.key, d);
                return a;
              },
            }));
          })(),
        (a.mode.CFB = (function () {
          function b(a, b, c, d) {
            var e = this._iv;
            if (e) {
              e = e.slice(0);
              this._iv = void 0;
            } else var e = this._prevBlock;
            d.encryptBlock(e, 0);
            for (var d = 0; d < c; d++) a[b + d] ^= e[d];
          }
          var c = a.lib.BlockCipherMode.extend();
          return (
            (c.Encryptor = c.extend({
              processBlock: function (a, c) {
                var d = this._cipher,
                  e = d.blockSize;
                b.call(this, a, c, e, d), (this._prevBlock = a.slice(c, c + e));
              },
            })),
            (c.Decryptor = c.extend({
              processBlock: function (a, c) {
                var d = this._cipher,
                  e = d.blockSize,
                  f = a.slice(c, c + e);
                b.call(this, a, c, e, d), (this._prevBlock = f);
              },
            })),
            c
          );
        })()),
        (a.mode.ECB = (function () {
          var b = a.lib.BlockCipherMode.extend();
          return (
            (b.Encryptor = b.extend({
              processBlock: function (a, b) {
                this._cipher.encryptBlock(a, b);
              },
            })),
            (b.Decryptor = b.extend({
              processBlock: function (a, b) {
                this._cipher.decryptBlock(a, b);
              },
            })),
            b
          );
        })()),
        (a.pad.AnsiX923 = {
          pad: function (a, b) {
            var c = a.sigBytes;
            b = 4 * b;
            b = b - (c % b);
            c = c + b - 1;
            a.clamp(),
              (a.words[c >>> 2] |= b << (24 - (c % 4) * 8)),
              (a.sigBytes += b);
          },
          unpad: function (a) {
            var b = 255 & a.words[(a.sigBytes - 1) >>> 2];
            a.sigBytes -= b;
          },
        }),
        (a.pad.Iso10126 = {
          pad: function (b, c) {
            c = 4 * c;
            c = c - (b.sigBytes % c);
            b.concat(a.lib.WordArray.random(c - 1)).concat(
              a.lib.WordArray.create([c << 24], 1)
            );
          },
          unpad: function (a) {
            var b = 255 & a.words[(a.sigBytes - 1) >>> 2];
            a.sigBytes -= b;
          },
        }),
        (a.pad.Iso97971 = {
          pad: function (b, c) {
            b.concat(a.lib.WordArray.create([2147483648], 1)),
              a.pad.ZeroPadding.pad(b, c);
          },
          unpad: function (b) {
            a.pad.ZeroPadding.unpad(b), b.sigBytes--;
          },
        }),
        (a.mode.OFB = (function () {
          var b = a.lib.BlockCipherMode.extend(),
            c = (b.Encryptor = b.extend({
              processBlock: function (a, b) {
                var c = this._cipher,
                  d = c.blockSize,
                  e = this._iv,
                  f = this._keystream;
                e && ((f = this._keystream = e.slice(0)), (this._iv = void 0)),
                  c.encryptBlock(f, 0);
                for (var e = 0; e < d; e++) a[b + e] ^= f[e];
              },
            }));
          return (b.Decryptor = c), b;
        })()),
        (a.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
        (function (b) {
          b = a;
          var c = b.lib,
            d = c.CipherParams;
          c = b.enc;
          var e = c.Hex;
          c = b.format;
          c.Hex = {
            stringify: function (a) {
              return a.ciphertext.toString(e);
            },
            parse: function (a) {
              a = e.parse(a);
              return d.create({ ciphertext: a });
            },
          };
        })(),
        (function () {
          var b = a,
            c = b.lib;
          c = c.BlockCipher;
          var d = b.algo,
            e = [],
            f = [],
            g = [],
            h = [],
            i = [],
            j = [],
            k = [],
            l = [],
            m = [],
            n = [];
          !(function () {
            for (var a = [], b = 0; b < 256; b++)
              b < 128 ? (a[b] = b << 1) : (a[b] = (b << 1) ^ 283);
            for (var c = 0, p = 0, b = 0; b < 256; b++) {
              var d = p ^ (p << 1) ^ (p << 2) ^ (p << 3) ^ (p << 4);
              (d = (d >>> 8) ^ (255 & d) ^ 99), (e[c] = d), (f[d] = c);
              var o = a[c],
                q = a[o],
                r = a[q],
                s = (257 * a[d]) ^ (16843008 * d);
              (g[c] = (s << 24) | (s >>> 8)),
                (h[c] = (s << 16) | (s >>> 16)),
                (i[c] = (s << 8) | (s >>> 24)),
                (j[c] = s);
              var s = (16843009 * r) ^ (65537 * q) ^ (257 * o) ^ (16843008 * c);
              (k[d] = (s << 24) | (s >>> 8)),
                (l[d] = (s << 16) | (s >>> 16)),
                (m[d] = (s << 8) | (s >>> 24)),
                (n[d] = s),
                c ? ((c = o ^ a[a[a[r ^ o]]]), (p ^= a[a[p]])) : (c = p = 1);
            }
          })();
          var o = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
          d = d.AES = c.extend({
            _doReset: function () {
              if (!this._nRounds || this._keyPriorReset !== this._key) {
                for (
                  var a = (this._keyPriorReset = this._key),
                    b = a.words,
                    a = a.sigBytes / 4,
                    i = (this._nRounds = a + 6),
                    i = 4 * (i + 1),
                    c = (this._keySchedule = []),
                    d = 0;
                  d < i;
                  d++
                )
                  if (d < a) c[d] = b[d];
                  else {
                    var f = c[d - 1];
                    d % a
                      ? a > 6 &&
                        d % a == 4 &&
                        (f =
                          (e[f >>> 24] << 24) |
                          (e[(f >>> 16) & 255] << 16) |
                          (e[(f >>> 8) & 255] << 8) |
                          e[255 & f])
                      : ((f = (f << 8) | (f >>> 24)),
                        (f =
                          (e[f >>> 24] << 24) |
                          (e[(f >>> 16) & 255] << 16) |
                          (e[(f >>> 8) & 255] << 8) |
                          e[255 & f]),
                        (f ^= o[(d / a) | 0] << 24)),
                      (c[d] = c[d - a] ^ f);
                  }
                for (var a = (this._invKeySchedule = []), b = 0; b < i; b++) {
                  var d = i - b;
                  if (b % 4) var f = c[d];
                  else var f = c[d - 4];
                  b < 4 || d <= 4
                    ? (a[b] = f)
                    : (a[b] =
                        k[e[f >>> 24]] ^
                        l[e[(f >>> 16) & 255]] ^
                        m[e[(f >>> 8) & 255]] ^
                        n[e[255 & f]]);
                }
              }
            },
            encryptBlock: function (a, b) {
              this._doCryptBlock(a, b, this._keySchedule, g, h, i, j, e);
            },
            decryptBlock: function (a, b) {
              var c = a[b + 1];
              (a[b + 1] = a[b + 3]),
                (a[b + 3] = c),
                this._doCryptBlock(a, b, this._invKeySchedule, k, l, m, n, f);
              var c = a[b + 1];
              (a[b + 1] = a[b + 3]), (a[b + 3] = c);
            },
            _doCryptBlock: function (a, b, c, p, d, e, f, g) {
              for (
                var h = this._nRounds,
                  i = a[b] ^ c[0],
                  j = a[b + 1] ^ c[1],
                  k = a[b + 2] ^ c[2],
                  l = a[b + 3] ^ c[3],
                  m = 4,
                  n = 1;
                n < h;
                n++
              ) {
                var o =
                    p[i >>> 24] ^
                    d[(j >>> 16) & 255] ^
                    e[(k >>> 8) & 255] ^
                    f[255 & l] ^
                    c[m++],
                  q =
                    p[j >>> 24] ^
                    d[(k >>> 16) & 255] ^
                    e[(l >>> 8) & 255] ^
                    f[255 & i] ^
                    c[m++],
                  r =
                    p[k >>> 24] ^
                    d[(l >>> 16) & 255] ^
                    e[(i >>> 8) & 255] ^
                    f[255 & j] ^
                    c[m++],
                  s =
                    p[l >>> 24] ^
                    d[(i >>> 16) & 255] ^
                    e[(j >>> 8) & 255] ^
                    f[255 & k] ^
                    c[m++];
                (i = o), (j = q), (k = r), (l = s);
              }
              var o =
                  ((g[i >>> 24] << 24) |
                    (g[(j >>> 16) & 255] << 16) |
                    (g[(k >>> 8) & 255] << 8) |
                    g[255 & l]) ^
                  c[m++],
                q =
                  ((g[j >>> 24] << 24) |
                    (g[(k >>> 16) & 255] << 16) |
                    (g[(l >>> 8) & 255] << 8) |
                    g[255 & i]) ^
                  c[m++],
                r =
                  ((g[k >>> 24] << 24) |
                    (g[(l >>> 16) & 255] << 16) |
                    (g[(i >>> 8) & 255] << 8) |
                    g[255 & j]) ^
                  c[m++],
                s =
                  ((g[l >>> 24] << 24) |
                    (g[(i >>> 16) & 255] << 16) |
                    (g[(j >>> 8) & 255] << 8) |
                    g[255 & k]) ^
                  c[m++];
              (a[b] = o), (a[b + 1] = q), (a[b + 2] = r), (a[b + 3] = s);
            },
            keySize: 8,
          });
          b.AES = c._createHelper(d);
        })(),
        (function () {
          function b(a, b) {
            b = ((this._lBlock >>> a) ^ this._rBlock) & b;
            (this._rBlock ^= b), (this._lBlock ^= b << a);
          }
          function c(a, b) {
            b = ((this._rBlock >>> a) ^ this._lBlock) & b;
            (this._lBlock ^= b), (this._rBlock ^= b << a);
          }
          var d = a,
            e = d.lib,
            f = e.WordArray;
          e = e.BlockCipher;
          var g = d.algo,
            h = [
              57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59,
              51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23,
              15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13,
              5, 28, 20, 12, 4,
            ],
            i = [
              14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8,
              16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33,
              48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
            ],
            j = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
            k = [
              {
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378,
              },
              {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672,
              },
              {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792,
              },
              {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464,
              },
              {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040,
              },
              {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656,
              },
              {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577,
              },
              {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848,
              },
            ],
            l = [
              4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
              2147483679,
            ],
            m = (g.DES = e.extend({
              _doReset: function () {
                for (
                  var a = this._key, a = a.words, b = [], c = 0;
                  c < 56;
                  c++
                ) {
                  var d = h[c] - 1;
                  b[c] = (a[d >>> 5] >>> (31 - (d % 32))) & 1;
                }
                for (var d = (this._subKeys = []), a = 0; a < 16; a++) {
                  for (var e = (d[a] = []), f = j[a], c = 0; c < 24; c++)
                    (e[(c / 6) | 0] |=
                      b[(i[c] - 1 + f) % 28] << (31 - (c % 6))),
                      (e[4 + ((c / 6) | 0)] |=
                        b[28 + ((i[c + 24] - 1 + f) % 28)] << (31 - (c % 6)));
                  e[0] = (e[0] << 1) | (e[0] >>> 31);
                  for (var c = 1; c < 7; c++) e[c] = e[c] >>> (4 * (c - 1) + 3);
                  e[7] = (e[7] << 5) | (e[7] >>> 27);
                }
                for (var f = (this._invSubKeys = []), c = 0; c < 16; c++)
                  f[c] = d[15 - c];
              },
              encryptBlock: function (a, b) {
                this._doCryptBlock(a, b, this._subKeys);
              },
              decryptBlock: function (a, b) {
                this._doCryptBlock(a, b, this._invSubKeys);
              },
              _doCryptBlock: function (a, d, e) {
                (this._lBlock = a[d]),
                  (this._rBlock = a[d + 1]),
                  b.call(this, 4, 252645135),
                  b.call(this, 16, 65535),
                  c.call(this, 2, 858993459),
                  c.call(this, 8, 16711935),
                  b.call(this, 1, 1431655765);
                for (var f = 0; f < 16; f++) {
                  for (
                    var n = e[f],
                      m = this._lBlock,
                      h = this._rBlock,
                      i = 0,
                      j = 0;
                    j < 8;
                    j++
                  )
                    i |= k[j][((h ^ n[j]) & l[j]) >>> 0];
                  (this._lBlock = h), (this._rBlock = m ^ i);
                }
                j = this._lBlock;
                (this._lBlock = this._rBlock),
                  (this._rBlock = j),
                  b.call(this, 1, 1431655765),
                  c.call(this, 8, 16711935),
                  c.call(this, 2, 858993459),
                  b.call(this, 16, 65535),
                  b.call(this, 4, 252645135),
                  (a[d] = this._lBlock),
                  (a[d + 1] = this._rBlock);
              },
              keySize: 2,
              ivSize: 2,
              blockSize: 2,
            }));
          d.DES = e._createHelper(m);
          g = g.TripleDES = e.extend({
            _doReset: function () {
              var a = this._key;
              a = a.words;
              (this._des1 = m.createEncryptor(f.create(a.slice(0, 2)))),
                (this._des2 = m.createEncryptor(f.create(a.slice(2, 4)))),
                (this._des3 = m.createEncryptor(f.create(a.slice(4, 6))));
            },
            encryptBlock: function (a, b) {
              this._des1.encryptBlock(a, b),
                this._des2.decryptBlock(a, b),
                this._des3.encryptBlock(a, b);
            },
            decryptBlock: function (a, b) {
              this._des3.decryptBlock(a, b),
                this._des2.encryptBlock(a, b),
                this._des1.decryptBlock(a, b);
            },
            keySize: 6,
            ivSize: 2,
            blockSize: 2,
          });
          d.TripleDES = e._createHelper(g);
        })(),
        (function () {
          function b() {
            for (
              var a = this._S, b = this._i, c = this._j, d = 0, f = 0;
              f < 4;
              f++
            ) {
              (b = (b + 1) % 256), (c = (c + a[b]) % 256);
              var e = a[b];
              (a[b] = a[c]),
                (a[c] = e),
                (d |= a[(a[b] + a[c]) % 256] << (24 - 8 * f));
            }
            return (this._i = b), (this._j = c), d;
          }
          var c = a,
            d = c.lib;
          d = d.StreamCipher;
          var e = c.algo,
            f = (e.RC4 = d.extend({
              _doReset: function () {
                for (
                  var a = this._key,
                    b = a.words,
                    a = a.sigBytes,
                    c = (this._S = []),
                    f = 0;
                  f < 256;
                  f++
                )
                  c[f] = f;
                for (var f = 0, d = 0; f < 256; f++) {
                  var e = f % a;
                  e = (b[e >>> 2] >>> (24 - (e % 4) * 8)) & 255;
                  d = (d + c[f] + e) % 256;
                  e = c[f];
                  (c[f] = c[d]), (c[d] = e);
                }
                this._i = this._j = 0;
              },
              _doProcessBlock: function (a, c) {
                a[c] ^= b.call(this);
              },
              keySize: 8,
              ivSize: 0,
            }));
          c.RC4 = d._createHelper(f);
          e = e.RC4Drop = f.extend({
            cfg: f.cfg.extend({ drop: 192 }),
            _doReset: function () {
              f._doReset.call(this);
              for (var a = this.cfg.drop; a > 0; a--) b.call(this);
            },
          });
          c.RC4Drop = d._createHelper(e);
        })(),
        (a.mode.CTRGladman = (function () {
          function b(a) {
            if (255 === ((a >> 24) & 255)) {
              var b = (a >> 16) & 255,
                c = (a >> 8) & 255,
                d = 255 & a;
              255 === b
                ? ((b = 0),
                  255 === c ? ((c = 0), 255 === d ? (d = 0) : ++d) : ++c)
                : ++b,
                (a = 0),
                (a += b << 16),
                (a += c << 8),
                (a += d);
            } else a += 1 << 24;
            return a;
          }
          function c(a) {
            return 0 === (a[0] = b(a[0])) && (a[1] = b(a[1])), a;
          }
          var d = a.lib.BlockCipherMode.extend(),
            e = (d.Encryptor = d.extend({
              processBlock: function (a, b) {
                var d = this._cipher,
                  e = d.blockSize,
                  f = this._iv,
                  g = this._counter;
                f && ((g = this._counter = f.slice(0)), (this._iv = void 0)),
                  c(g);
                f = g.slice(0);
                d.encryptBlock(f, 0);
                for (var g = 0; g < e; g++) a[b + g] ^= f[g];
              },
            }));
          return (d.Decryptor = e), d;
        })()),
        (function () {
          function b() {
            for (var a = this._X, b = this._C, c = 0; c < 8; c++) g[c] = b[c];
            (b[0] = (b[0] + 1295307597 + this._b) | 0),
              (b[1] =
                (b[1] + 3545052371 + (b[0] >>> 0 < g[0] >>> 0 ? 1 : 0)) | 0),
              (b[2] =
                (b[2] + 886263092 + (b[1] >>> 0 < g[1] >>> 0 ? 1 : 0)) | 0),
              (b[3] =
                (b[3] + 1295307597 + (b[2] >>> 0 < g[2] >>> 0 ? 1 : 0)) | 0),
              (b[4] =
                (b[4] + 3545052371 + (b[3] >>> 0 < g[3] >>> 0 ? 1 : 0)) | 0),
              (b[5] =
                (b[5] + 886263092 + (b[4] >>> 0 < g[4] >>> 0 ? 1 : 0)) | 0),
              (b[6] =
                (b[6] + 1295307597 + (b[5] >>> 0 < g[5] >>> 0 ? 1 : 0)) | 0),
              (b[7] =
                (b[7] + 3545052371 + (b[6] >>> 0 < g[6] >>> 0 ? 1 : 0)) | 0),
              (this._b = b[7] >>> 0 < g[7] >>> 0 ? 1 : 0);
            for (var c = 0; c < 8; c++) {
              var d = a[c] + b[c],
                f = 65535 & d,
                e = d >>> 16;
              f = ((((f * f) >>> 17) + f * e) >>> 15) + e * e;
              e = (((4294901760 & d) * d) | 0) + (((65535 & d) * d) | 0);
              h[c] = f ^ e;
            }
            (a[0] =
              (h[0] +
                ((h[7] << 16) | (h[7] >>> 16)) +
                ((h[6] << 16) | (h[6] >>> 16))) |
              0),
              (a[1] = (h[1] + ((h[0] << 8) | (h[0] >>> 24)) + h[7]) | 0),
              (a[2] =
                (h[2] +
                  ((h[1] << 16) | (h[1] >>> 16)) +
                  ((h[0] << 16) | (h[0] >>> 16))) |
                0),
              (a[3] = (h[3] + ((h[2] << 8) | (h[2] >>> 24)) + h[1]) | 0),
              (a[4] =
                (h[4] +
                  ((h[3] << 16) | (h[3] >>> 16)) +
                  ((h[2] << 16) | (h[2] >>> 16))) |
                0),
              (a[5] = (h[5] + ((h[4] << 8) | (h[4] >>> 24)) + h[3]) | 0),
              (a[6] =
                (h[6] +
                  ((h[5] << 16) | (h[5] >>> 16)) +
                  ((h[4] << 16) | (h[4] >>> 16))) |
                0),
              (a[7] = (h[7] + ((h[6] << 8) | (h[6] >>> 24)) + h[5]) | 0);
          }
          var c = a,
            d = c.lib;
          d = d.StreamCipher;
          var e = c.algo,
            f = [],
            g = [],
            h = [];
          e = e.Rabbit = d.extend({
            _doReset: function () {
              for (var a = this._key.words, c = this.cfg.iv, d = 0; d < 4; d++)
                a[d] =
                  (16711935 & ((a[d] << 8) | (a[d] >>> 24))) |
                  (4278255360 & ((a[d] << 24) | (a[d] >>> 8)));
              var e = (this._X = [
                a[0],
                (a[3] << 16) | (a[2] >>> 16),
                a[1],
                (a[0] << 16) | (a[3] >>> 16),
                a[2],
                (a[1] << 16) | (a[0] >>> 16),
                a[3],
                (a[2] << 16) | (a[1] >>> 16),
              ]);
              a = this._C = [
                (a[2] << 16) | (a[2] >>> 16),
                (4294901760 & a[0]) | (65535 & a[1]),
                (a[3] << 16) | (a[3] >>> 16),
                (4294901760 & a[1]) | (65535 & a[2]),
                (a[0] << 16) | (a[0] >>> 16),
                (4294901760 & a[2]) | (65535 & a[3]),
                (a[1] << 16) | (a[1] >>> 16),
                (4294901760 & a[3]) | (65535 & a[0]),
              ];
              this._b = 0;
              for (var d = 0; d < 4; d++) b.call(this);
              for (var d = 0; d < 8; d++) a[d] ^= e[(d + 4) & 7];
              if (c) {
                e = c.words;
                c = e[0];
                e = e[1];
                c =
                  (16711935 & ((c << 8) | (c >>> 24))) |
                  (4278255360 & ((c << 24) | (c >>> 8)));
                e =
                  (16711935 & ((e << 8) | (e >>> 24))) |
                  (4278255360 & ((e << 24) | (e >>> 8)));
                var f = (c >>> 16) | (4294901760 & e),
                  g = (e << 16) | (65535 & c);
                (a[0] ^= c),
                  (a[1] ^= f),
                  (a[2] ^= e),
                  (a[3] ^= g),
                  (a[4] ^= c),
                  (a[5] ^= f),
                  (a[6] ^= e),
                  (a[7] ^= g);
                for (var d = 0; d < 4; d++) b.call(this);
              }
            },
            _doProcessBlock: function (a, c) {
              var d = this._X;
              b.call(this),
                (f[0] = d[0] ^ (d[5] >>> 16) ^ (d[3] << 16)),
                (f[1] = d[2] ^ (d[7] >>> 16) ^ (d[5] << 16)),
                (f[2] = d[4] ^ (d[1] >>> 16) ^ (d[7] << 16)),
                (f[3] = d[6] ^ (d[3] >>> 16) ^ (d[1] << 16));
              for (var d = 0; d < 4; d++)
                (f[d] =
                  (16711935 & ((f[d] << 8) | (f[d] >>> 24))) |
                  (4278255360 & ((f[d] << 24) | (f[d] >>> 8)))),
                  (a[c + d] ^= f[d]);
            },
            blockSize: 4,
            ivSize: 2,
          });
          c.Rabbit = d._createHelper(e);
        })(),
        (a.mode.CTR = (function () {
          var b = a.lib.BlockCipherMode.extend(),
            c = (b.Encryptor = b.extend({
              processBlock: function (a, b) {
                var c = this._cipher,
                  d = c.blockSize,
                  e = this._iv,
                  f = this._counter;
                e && ((f = this._counter = e.slice(0)), (this._iv = void 0));
                e = f.slice(0);
                c.encryptBlock(e, 0), (f[d - 1] = (f[d - 1] + 1) | 0);
                for (var c = 0; c < d; c++) a[b + c] ^= e[c];
              },
            }));
          return (b.Decryptor = c), b;
        })()),
        (function () {
          function b() {
            for (var a = this._X, b = this._C, c = 0; c < 8; c++) g[c] = b[c];
            (b[0] = (b[0] + 1295307597 + this._b) | 0),
              (b[1] =
                (b[1] + 3545052371 + (b[0] >>> 0 < g[0] >>> 0 ? 1 : 0)) | 0),
              (b[2] =
                (b[2] + 886263092 + (b[1] >>> 0 < g[1] >>> 0 ? 1 : 0)) | 0),
              (b[3] =
                (b[3] + 1295307597 + (b[2] >>> 0 < g[2] >>> 0 ? 1 : 0)) | 0),
              (b[4] =
                (b[4] + 3545052371 + (b[3] >>> 0 < g[3] >>> 0 ? 1 : 0)) | 0),
              (b[5] =
                (b[5] + 886263092 + (b[4] >>> 0 < g[4] >>> 0 ? 1 : 0)) | 0),
              (b[6] =
                (b[6] + 1295307597 + (b[5] >>> 0 < g[5] >>> 0 ? 1 : 0)) | 0),
              (b[7] =
                (b[7] + 3545052371 + (b[6] >>> 0 < g[6] >>> 0 ? 1 : 0)) | 0),
              (this._b = b[7] >>> 0 < g[7] >>> 0 ? 1 : 0);
            for (var c = 0; c < 8; c++) {
              var d = a[c] + b[c],
                f = 65535 & d,
                e = d >>> 16;
              f = ((((f * f) >>> 17) + f * e) >>> 15) + e * e;
              e = (((4294901760 & d) * d) | 0) + (((65535 & d) * d) | 0);
              h[c] = f ^ e;
            }
            (a[0] =
              (h[0] +
                ((h[7] << 16) | (h[7] >>> 16)) +
                ((h[6] << 16) | (h[6] >>> 16))) |
              0),
              (a[1] = (h[1] + ((h[0] << 8) | (h[0] >>> 24)) + h[7]) | 0),
              (a[2] =
                (h[2] +
                  ((h[1] << 16) | (h[1] >>> 16)) +
                  ((h[0] << 16) | (h[0] >>> 16))) |
                0),
              (a[3] = (h[3] + ((h[2] << 8) | (h[2] >>> 24)) + h[1]) | 0),
              (a[4] =
                (h[4] +
                  ((h[3] << 16) | (h[3] >>> 16)) +
                  ((h[2] << 16) | (h[2] >>> 16))) |
                0),
              (a[5] = (h[5] + ((h[4] << 8) | (h[4] >>> 24)) + h[3]) | 0),
              (a[6] =
                (h[6] +
                  ((h[5] << 16) | (h[5] >>> 16)) +
                  ((h[4] << 16) | (h[4] >>> 16))) |
                0),
              (a[7] = (h[7] + ((h[6] << 8) | (h[6] >>> 24)) + h[5]) | 0);
          }
          var c = a,
            d = c.lib;
          d = d.StreamCipher;
          var e = c.algo,
            f = [],
            g = [],
            h = [];
          e = e.RabbitLegacy = d.extend({
            _doReset: function () {
              var a = this._key.words,
                c = this.cfg.iv,
                d = (this._X = [
                  a[0],
                  (a[3] << 16) | (a[2] >>> 16),
                  a[1],
                  (a[0] << 16) | (a[3] >>> 16),
                  a[2],
                  (a[1] << 16) | (a[0] >>> 16),
                  a[3],
                  (a[2] << 16) | (a[1] >>> 16),
                ]);
              a = this._C = [
                (a[2] << 16) | (a[2] >>> 16),
                (4294901760 & a[0]) | (65535 & a[1]),
                (a[3] << 16) | (a[3] >>> 16),
                (4294901760 & a[1]) | (65535 & a[2]),
                (a[0] << 16) | (a[0] >>> 16),
                (4294901760 & a[2]) | (65535 & a[3]),
                (a[1] << 16) | (a[1] >>> 16),
                (4294901760 & a[3]) | (65535 & a[0]),
              ];
              this._b = 0;
              for (var e = 0; e < 4; e++) b.call(this);
              for (var e = 0; e < 8; e++) a[e] ^= d[(e + 4) & 7];
              if (c) {
                d = c.words;
                c = d[0];
                d = d[1];
                c =
                  (16711935 & ((c << 8) | (c >>> 24))) |
                  (4278255360 & ((c << 24) | (c >>> 8)));
                d =
                  (16711935 & ((d << 8) | (d >>> 24))) |
                  (4278255360 & ((d << 24) | (d >>> 8)));
                var f = (c >>> 16) | (4294901760 & d),
                  g = (d << 16) | (65535 & c);
                (a[0] ^= c),
                  (a[1] ^= f),
                  (a[2] ^= d),
                  (a[3] ^= g),
                  (a[4] ^= c),
                  (a[5] ^= f),
                  (a[6] ^= d),
                  (a[7] ^= g);
                for (var e = 0; e < 4; e++) b.call(this);
              }
            },
            _doProcessBlock: function (a, c) {
              var d = this._X;
              b.call(this),
                (f[0] = d[0] ^ (d[5] >>> 16) ^ (d[3] << 16)),
                (f[1] = d[2] ^ (d[7] >>> 16) ^ (d[5] << 16)),
                (f[2] = d[4] ^ (d[1] >>> 16) ^ (d[7] << 16)),
                (f[3] = d[6] ^ (d[3] >>> 16) ^ (d[1] << 16));
              for (var d = 0; d < 4; d++)
                (f[d] =
                  (16711935 & ((f[d] << 8) | (f[d] >>> 24))) |
                  (4278255360 & ((f[d] << 24) | (f[d] >>> 8)))),
                  (a[c + d] ^= f[d]);
            },
            blockSize: 4,
            ivSize: 2,
          });
          c.RabbitLegacy = d._createHelper(e);
        })(),
        (a.pad.ZeroPadding = {
          pad: function (a, b) {
            b = 4 * b;
            a.clamp(), (a.sigBytes += b - (a.sigBytes % b || b));
          },
          unpad: function (a) {
            for (
              var b = a.words, c = a.sigBytes - 1;
              !((b[c >>> 2] >>> (24 - (c % 4) * 8)) & 255);

            )
              c--;
            a.sigBytes = c + 1;
          },
        }),
        a
      );
    });
  },
  null
);
__d(
  "MediaUploadFBCryptoJSHasher",
  ["CryptoJS", "MediaUploadTime", "Promise", "regeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        b = b.currentTimeProvider;
        this.$2 = a;
        this.$1 = b;
      }
      var e = a.prototype;
      e.$3 = function () {
        switch (this.$2.hashingAlgorithm) {
          case "sha256":
            return c("CryptoJS").algo.SHA256;
          case "md5":
            return c("CryptoJS").algo.MD5;
          default:
            return null;
        }
      };
      e.$4 = function () {
        switch (this.$2.outputEncoding) {
          case "base64":
            return c("CryptoJS").enc.Base64;
          case "hex":
            return c("CryptoJS").enc.Hex;
          default:
            return null;
        }
      };
      e.$5 = function (a, c, d) {
        return new (b("Promise"))(function (b) {
          var e = new FileReader();
          e.onload = function () {
            e.result instanceof ArrayBuffer
              ? b({ isSuccess: !0, data: e.result })
              : b({ isSuccess: !1, rawErrorCode: "INVALID_TYPE_FILE_READER" });
          };
          e.onerror = function () {
            b({ isSuccess: !1, rawErrorObject: e.error });
          };
          e.readAsArrayBuffer(a.slice(c, c + d));
        });
      };
      e.$6 = function (a, d) {
        var e, f, g, h;
        return b("regeneratorRuntime").async(
          function (i) {
            while (1)
              switch ((i.prev = i.next)) {
                case 0:
                  (e =
                    this.$2.takeFirstBytes == null
                      ? a.size
                      : Math.min(this.$2.takeFirstBytes, a.size)),
                    (f = 0);
                case 2:
                  if (!(f < e)) {
                    i.next = 15;
                    break;
                  }
                  g = Math.min(this.$2.maxChunkSize, e - f);
                  i.next = 6;
                  return b("regeneratorRuntime").awrap(this.$5(a, f, g));
                case 6:
                  h = i.sent;
                  if (!h.isSuccess) {
                    i.next = 11;
                    break;
                  }
                  d.update(c("CryptoJS").lib.WordArray.create(h.data));
                  i.next = 12;
                  break;
                case 11:
                  return i.abrupt("return", h);
                case 12:
                  f += g;
                  i.next = 2;
                  break;
                case 15:
                  return i.abrupt("return", null);
                case 16:
                case "end":
                  return i.stop();
              }
          },
          null,
          this
        );
      };
      e.hash = function (a) {
        var c, e, f, g, h, i;
        return b("regeneratorRuntime").async(
          function (j) {
            while (1)
              switch ((j.prev = j.next)) {
                case 0:
                  if (
                    !(
                      this.$2.maxFileSize != null &&
                      a.size > this.$2.maxFileSize
                    )
                  ) {
                    j.next = 2;
                    break;
                  }
                  return j.abrupt("return", { outcome: "FILE_TOO_LARGE" });
                case 2:
                  c = this.$3();
                  if (!(c == null)) {
                    j.next = 5;
                    break;
                  }
                  return j.abrupt("return", {
                    outcome: "FAILURE",
                    rawErrorCode: "INVALID_ALGORITHM",
                  });
                case 5:
                  e = this.$4();
                  if (!(e == null)) {
                    j.next = 8;
                    break;
                  }
                  return j.abrupt("return", {
                    outcome: "FAILURE",
                    rawErrorCode: "UNSUPPORTED_OUTPUT_ENCODING",
                  });
                case 8:
                  f = this.$1();
                  g = c.create();
                  j.prev = 10;
                  j.next = 13;
                  return b("regeneratorRuntime").awrap(this.$6(a, g));
                case 13:
                  h = j.sent;
                  if (!(h == null || h.isSuccess)) {
                    j.next = 18;
                    break;
                  }
                  return j.abrupt("return", {
                    outcome: "SUCCESS",
                    value: {
                      algorithm: this.$2.hashingAlgorithm,
                      hashValue: g.finalize().toString(e),
                      encoding: this.$2.outputEncoding,
                      calculationTimeCost: d("MediaUploadTime").subtractTime(
                        this.$1(),
                        f
                      ),
                    },
                  });
                case 18:
                  return j.abrupt("return", {
                    outcome: "FAILURE",
                    rawErrorCode:
                      (i = h == null ? void 0 : h.rawErrorCode) != null
                        ? i
                        : "INTERNAL_ERROR",
                    rawErrorObject: h == null ? void 0 : h.rawErrorObject,
                  });
                case 19:
                  j.next = 24;
                  break;
                case 21:
                  j.prev = 21;
                  j.t0 = j["catch"](10);
                  return j.abrupt("return", {
                    outcome: "FAILURE",
                    rawErrorCode: "INTERNAL_ERROR",
                    rawErrorObject: j.t0,
                  });
                case 24:
                case "end":
                  return j.stop();
              }
          },
          null,
          this,
          [[10, 21]]
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadOperationAttemptOutcome",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "SUCCESS",
      "CANCELED",
      "TRANSIENT_FAILURE",
      "TRANSIENT_FAILURE_IMMEDIATE_RETRY",
      "NON_TRANSIENT_FAILURE",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadFBEndpointRequest",
  [
    "AsyncRequest",
    "MediaUploadCancelablePromise",
    "MediaUploadOperationAttemptOutcome",
    "MediaUploadStageEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.send = function (a, b) {
        var d = this;
        return new (c("MediaUploadCancelablePromise"))(function (e) {
          b.emitStageEvent(c("MediaUploadStageEvent").STAGE_STARTED, a.stage);
          var f = a.createPayload();
          if (f == null) {
            b.emitStageEvent(c("MediaUploadStageEvent").STAGE_FAILED, a.stage);
            e(c("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE);
            return;
          }
          var g = new (c("AsyncRequest"))()
            .setAllowCrossOrigin(!0)
            .setURI(a.uri)
            .setData(f)
            .setRequestHeader(
              "X_FB_VIDEO_WATERFALL_ID",
              b.sessionContext.sessionID
            )
            .setProgressHandler(function () {
              a.networkNotifier.notifyOnProgress(b, a.stage);
            })
            .setHandler(function (c) {
              e(d.$1(a, b, c));
            })
            .setErrorHandler(function (c) {
              e(d.$2(a, b, c));
            });
          if (g.send()) {
            a.networkNotifier.notifyOnNewRequest(b, a.stage);
            return {
              cancel: function () {
                a.networkNotifier.notifyOnAbandon(b, a.stage), g.abort();
              },
            };
          } else e(c("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE);
        });
      };
      b.$1 = function (a, b, d) {
        var e;
        a.networkNotifier.notifyOnResponse(b, a.stage);
        (e = b.retryState) == null ? void 0 : e.resetBackoff();
        a.acceptSuccessfulResponse(d);
        b.emitStageEvent(c("MediaUploadStageEvent").STAGE_SUCCEED, a.stage);
        return c("MediaUploadOperationAttemptOutcome").SUCCESS;
      };
      b.$2 = function (a, b, d) {
        var e = d.error < 1e3,
          f = d.error > 9999;
        e || f
          ? a.networkNotifier.notifyOnResponse(b, a.stage)
          : a.networkNotifier.notifyOnTransportError(b, a.stage);
        a.acceptErrorResponse(d);
        b.emitStageEvent(c("MediaUploadStageEvent").STAGE_FAILED, a.stage);
        b = (e && d.error >= 400 && d.error < 500) || (f && !d.transientError);
        return b
          ? c("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE
          : c("MediaUploadOperationAttemptOutcome").TRANSIENT_FAILURE;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadNetworkStatus",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
      UNKNOWN: "Unknown",
      CONNECTED: "Connected",
      DISCONNECTED: "Disconnected",
      TIMEOUT: "TimedOut",
    });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadFBInternetProbe",
  [
    "AsyncRequest",
    "MediaUploadCancelablePromise",
    "MediaUploadNetworkStatus",
    "Promise",
    "regeneratorRuntime",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "https://rupload.facebook.com/fb_video/ping-";
    a = (function () {
      function a(a, b) {
        (this.$2 = a), (this.$1 = b), (this.$3 = ["" + h + c("uuid")()]);
      }
      var d = a.prototype;
      d.$4 = function (a) {
        return new (c("MediaUploadCancelablePromise"))(function (b) {
          var d = new (c("AsyncRequest"))()
            .setAllowCrossOrigin(!0)
            .setAllowCredentials(!0)
            .setMethod("GET")
            .setURI(a)
            .setReadOnly(!0)
            .setOption("suppressEvaluation", !0)
            .setHandler(function (a) {
              a =
                a == null
                  ? void 0
                  : (a = a.payload) == null
                  ? void 0
                  : a.status;
              b(
                a === 200
                  ? c("MediaUploadNetworkStatus").CONNECTED
                  : c("MediaUploadNetworkStatus").DISCONNECTED
              );
            })
            .setTransportErrorHandler(function () {
              b(c("MediaUploadNetworkStatus").DISCONNECTED);
            })
            .setErrorHandler(function () {
              b(c("MediaUploadNetworkStatus").DISCONNECTED);
            });
          d.send() || b(c("MediaUploadNetworkStatus").DISCONNECTED);
          return {
            cancel: function () {
              d.abort();
            },
          };
        });
      };
      d.$5 = function () {
        var a = this;
        return new (b("Promise"))(function (b) {
          a.$1.delayedExecutor(a.$2.timeout, function () {
            return b(c("MediaUploadNetworkStatus").TIMEOUT);
          });
        });
      };
      d.probe = function () {
        var a = this,
          c,
          d,
          e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  c = this.$3.map(function (b) {
                    return a.$4(b);
                  });
                  d = b("Promise").race(
                    [this.$5()].concat(
                      c.map(function (a) {
                        return a.promise;
                      })
                    )
                  );
                  f.next = 4;
                  return b("regeneratorRuntime").awrap(d);
                case 4:
                  e = f.sent;
                  c.forEach(function (a) {
                    return a.cancel();
                  });
                  return f.abrupt("return", e);
                case 7:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadRetryableOperation",
  [
    "MediaUploadCancelablePromise",
    "MediaUploadOperationAttemptOutcome",
    "MediaUploadOperationOutcome",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, d) {
        var e = this;
        this.$4 = null;
        this.$1 = a;
        this.$2 = b;
        this.$3 = d;
        this.cancelablePromise = new (c("MediaUploadCancelablePromise"))(
          function (a) {
            e.$5(a);
            return {
              cancel: function () {
                var b;
                (b = e.$4) == null ? void 0 : b.cancel();
                e.$4 = null;
                a(c("MediaUploadOperationOutcome").CANCELED);
              },
            };
          }
        );
      }
      a.createAsPromise = function (b, c, d) {
        b = new a(b, c, d);
        return b.cancelablePromise;
      };
      var b = a.prototype;
      b.$5 = function (a) {
        var b = this,
          d = this.$1();
        this.$4 = d;
        this.$3.promiseTerminator(
          d.promise.then(
            function (c) {
              (b.$4 = null), b.$6(a, c);
            },
            function (d) {
              b.$4 = null;
              b.$6(
                a,
                c("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE
              );
              throw d;
            }
          )
        );
      };
      b.$6 = function (a, b) {
        switch (b) {
          case c("MediaUploadOperationAttemptOutcome").CANCELED:
            a(c("MediaUploadOperationOutcome").CANCELED);
            break;
          case c("MediaUploadOperationAttemptOutcome").SUCCESS:
            a(c("MediaUploadOperationOutcome").SUCCESS);
            break;
          case c("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE:
            a(c("MediaUploadOperationOutcome").FAILED_NON_TRANSIENT);
            break;
          case c("MediaUploadOperationAttemptOutcome").TRANSIENT_FAILURE:
            this.$7(a, !1);
            break;
          case c("MediaUploadOperationAttemptOutcome")
            .TRANSIENT_FAILURE_IMMEDIATE_RETRY:
            this.$7(a, !0);
            break;
        }
      };
      b.$7 = function (a, b) {
        var d = this;
        this.$2.increaseRetryAttemptCounter();
        if (this.$2.exceedTotalDuration())
          a(c("MediaUploadOperationOutcome").FAILED_OUT_OF_TIME);
        else if (this.$2.exceedTotalRetries())
          a(c("MediaUploadOperationOutcome").FAILED_NO_MORE_RETRIES);
        else if (b) this.$5(a);
        else {
          b = this.$2.calculateBackoffDelay();
          this.$4 = this.$3.delayedExecutor(
            b,
            function () {
              return d.$5(a);
            },
            function () {
              return a(c("MediaUploadOperationOutcome").CANCELED);
            }
          );
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBNetworkAssetStrategy",
  ["MediaUploadPipeline", "MediaUploadRetryableOperation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, c, d) {
        (this.$1 = a),
          (this.startRequest = b),
          (this.uploadServiceRequest = c),
          (this.receiveRequest = d);
      }
      var b = a.prototype;
      b.run = function (a) {
        var b = this,
          d = a.asset.dataAsFile();
        if (d == null)
          throw this.$1.createThrowableError(
            "Browser is not compatible with current version of the SDK"
          );
        else {
          var e = new (c("MediaUploadPipeline"))(this.$1);
          e.addCancelableStep(function () {
            return c("MediaUploadRetryableOperation").createAsPromise(
              function () {
                return b.startRequest.send(a);
              },
              a.retryState,
              b.$1
            );
          });
          e.addCancelableStep(function () {
            return c("MediaUploadRetryableOperation").createAsPromise(
              function () {
                return b.uploadServiceRequest.send(
                  a,
                  d,
                  b.startRequest.retriveResponse(a)
                );
              },
              a.retryState,
              b.$1
            );
          });
          e.addCancelableStep(function () {
            return c("MediaUploadRetryableOperation").createAsPromise(
              function () {
                return b.receiveRequest.send(
                  a,
                  b.startRequest.retriveResponse(a),
                  b.uploadServiceRequest.retriveResponse(a)
                );
              },
              a.retryState,
              b.$1
            );
          });
          return e.run();
        }
      };
      b.cancel = function () {};
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBNetworkProbe",
  ["MediaUploadNetworkStatus", "Network"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.probe = function () {
        return c("Network").isOnline()
          ? c("MediaUploadNetworkStatus").CONNECTED
          : c("MediaUploadNetworkStatus").DISCONNECTED;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBReceiveRequest",
  [
    "ActorURI",
    "MediaUploadCancelablePromise",
    "MediaUploadFBEndpointRequest",
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadOperationAttemptOutcome",
    "MediaUploadStageEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "MediaUploadFBReceiveRequest";
    a = (function () {
      function a(a) {
        (this.$1 = c("MediaUploadFBStage").RECEIVE_REQUEST),
          (this.$2 = a.entryPoint),
          (this.$3 = a.payloadHook),
          (this.$4 = a.customHeadersHook),
          (this.$5 = a.envParams),
          (this.$6 = new (c("MediaUploadFBEndpointRequest"))()),
          (this.$7 = a.networkNotifier);
      }
      var b = a.prototype;
      b.send = function (a, b, e) {
        var f = this;
        if (this.configuration == null)
          throw this.$5.createThrowableError(
            "Missing configuration in the MediaUploadFBReceiveRequest"
          );
        if ((b == null ? void 0 : b.skip_upload) === !0) {
          a.recordStageOutcome({
            stage: this.$1,
            outcome: c("MediaUploadFBStageOutcome").SUCCESS,
          });
          a.emitStageEvent(c("MediaUploadStageEvent").STAGE_SUCCEED, this.$1);
          return c("MediaUploadCancelablePromise").resolve(
            c("MediaUploadOperationAttemptOutcome").SUCCESS
          );
        }
        return this.$6.send(
          {
            stage: this.$1,
            networkNotifier: this.$7,
            uri:
              a.request.attributes.actorID == null
                ? this.configuration.baseURI
                : d("ActorURI").create(
                    this.configuration.baseURI,
                    a.request.attributes.actorID
                  ),
            createPayload: function () {
              return f.$8(a, b, e);
            },
            createCustomHeaders: function () {
              return f.$9(a);
            },
            acceptSuccessfulResponse: function (b) {
              a.processing.rawData.set(h, b.payload),
                a.recordStageOutcome({
                  stage: f.$1,
                  outcome: c("MediaUploadFBStageOutcome").SUCCESS,
                });
            },
            acceptErrorResponse: function (b) {
              a.recordStageOutcome({
                stage: f.$1,
                outcome: c("MediaUploadFBStageOutcome").REQUEST_ERROR,
                rawErrorCode: b.error,
                displayError: {
                  summary: b.errorSummary,
                  description: b.errorDescription,
                },
                errorAttributes: {
                  silentError: b.silentError,
                  transientError: b.transientError,
                },
                networkRequestID:
                  (b = b.payload) == null ? void 0 : b.__www_request_id__,
              });
            },
          },
          a
        );
      };
      b.$9 = function (a) {
        var b = this.$4;
        if (b)
          return b({
            assetSnapshot: a.composeSnapshot(),
            sessionSnapshot: a.sessionContext.composeSnapshot(),
          });
        else return null;
      };
      b.$8 = function (a, b, d) {
        if (b == null) {
          a.recordStageOutcome({
            stage: this.$1,
            outcome: c("MediaUploadFBStageOutcome").MISSING_MANDATORY_DATA,
            rawErrorCode: "MISSING_START_CALL_RESPONSE",
          });
          return null;
        }
        if (d == null) {
          a.recordStageOutcome({
            stage: this.$1,
            outcome: c("MediaUploadFBStageOutcome").MISSING_MANDATORY_DATA,
            rawErrorCode: "MISSING_UPLOAD_SERVICE_RESPONSE",
          });
          return null;
        }
        var e = a.asset.dataAsFile();
        e = {
          waterfall_id: a.sessionContext.sessionID,
          target_id: a.request.attributes.targetID,
          video_id: b.video_id,
          source: this.$2.sourceType,
          composer_entry_point_ref: this.$2.entryPointRef,
          supports_chunking: !0,
          supports_upload_service: !0,
          partition_start_offset: 0,
          partition_end_offset: e == null ? void 0 : e.size,
          start_offset: 0,
          end_offset: e == null ? void 0 : e.size,
          upload_speed: a.uploadSummary.computeSpeedBps(),
          fbuploader_video_file_chunk: d.everstoreHandle,
          has_file_been_replaced: a.request.attributes.hasFileBeenReplaced,
          composer_dialog_version: a.request.attributes.composerDialogVersion,
          composer_work_shared_draft_mode:
            a.request.attributes.workSharedDraftMode,
        };
        d = this.$3;
        d != null &&
          d({
            assetSnapshot: a.composeSnapshot(),
            sessionSnapshot: a.sessionContext.composeSnapshot(),
            startCallResponse: b,
            payload: e,
          });
        return e;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBStartRequest",
  [
    "ActorURI",
    "MediaUploadFBEndpointRequest",
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "MediaUploadFBStartRequest";
    a = (function () {
      function a(a) {
        (this.$1 = c("MediaUploadFBStage").START_REQUEST),
          (this.$2 = a.entryPoint),
          (this.$3 = a.payloadHook),
          (this.$4 = a.customHeadersHook),
          (this.$5 = a.envParams),
          (this.$6 = new (c("MediaUploadFBEndpointRequest"))()),
          (this.$7 = a.networkNotifier);
      }
      var b = a.prototype;
      b.retriveResponse = function (a) {
        return a.processing.rawData.getUnsafe(h);
      };
      b.send = function (a) {
        var b = this;
        if (this.configuration == null)
          throw this.$5.createThrowableError(
            "Missing configuration in the MediaUploadFBStartRequest"
          );
        return this.$6.send(
          {
            stage: this.$1,
            networkNotifier: this.$7,
            uri:
              a.request.attributes.actorID == null
                ? this.configuration.baseURI
                : d("ActorURI").create(
                    this.configuration.baseURI,
                    a.request.attributes.actorID
                  ),
            createPayload: function () {
              return b.$8(a);
            },
            createCustomHeaders: function () {
              return b.$9(a);
            },
            acceptSuccessfulResponse: function (d) {
              var e = d.payload;
              if (e.video_id != null)
                a.processing.rawData.set(h, e),
                  (a.videoID = e.video_id),
                  a.recordStageOutcome({
                    stage: b.$1,
                    outcome: c("MediaUploadFBStageOutcome").SUCCESS,
                  });
              else {
                a.recordStageOutcome({
                  stage: b.$1,
                  outcome: c("MediaUploadFBStageOutcome")
                    .INVALID_SERVER_RESPONSE,
                  networkRequestID:
                    (e = d.payload) == null ? void 0 : e.__www_request_id__,
                });
              }
            },
            acceptErrorResponse: function (d) {
              a.recordStageOutcome({
                stage: b.$1,
                outcome: c("MediaUploadFBStageOutcome").REQUEST_ERROR,
                rawErrorCode: d.error,
                displayError: {
                  summary: d.errorSummary,
                  description: d.errorDescription,
                },
                errorAttributes: {
                  silentError: d.silentError,
                  transientError: d.transientError,
                },
                networkRequestID:
                  (d = d.payload) == null ? void 0 : d.__www_request_id__,
              });
            },
          },
          a
        );
      };
      b.$9 = function (a) {
        var b = this.$4;
        if (b != null)
          return b({
            assetSnapshot: a.composeSnapshot(),
            sessionSnapshot: a.sessionContext.composeSnapshot(),
          });
        else return null;
      };
      b.$8 = function (a) {
        var b,
          c = a.asset.dataAsFile();
        b = {
          waterfall_id: a.sessionContext.sessionID,
          target_id: a.request.attributes.targetID,
          source: this.$2.sourceType,
          composer_entry_point_ref: this.$2.entryPointRef,
          supports_chunking: c != null,
          supports_file_api: c != null,
          file_size: c == null ? 0 : c.size,
          file_extension: String(a.asset.data.extension),
          spherical: (b = a.metadata) == null ? void 0 : b.isSpherical,
          partition_start_offset: 0,
          partition_end_offset: c == null ? void 0 : c.size,
          has_file_been_replaced: a.request.attributes.hasFileBeenReplaced,
          composer_dialog_version: a.request.attributes.composerDialogVersion,
          video_publisher_action_source:
            a.request.attributes.publisherActionSource,
          composer_work_shared_draft_mode:
            a.request.attributes.workSharedDraftMode,
        };
        c = this.$3;
        c != null &&
          c({
            assetSnapshot: a.composeSnapshot(),
            sessionSnapshot: a.sessionContext.composeSnapshot(),
            payload: b,
          });
        return b;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBUploadServiceRequest",
  [
    "AsyncResponse",
    "MediaUploadCancelablePromise",
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadOperationAttemptOutcome",
    "MediaUploadStageEvent",
    "ResumableUploadService",
    "ResumableUploadServiceState.enum",
    "md5",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "MediaUploadFBUploadServiceRequest";
    a = (function () {
      function a(a) {
        (this.$1 = c("MediaUploadFBStage").BYTES_UPLOAD),
          (this.$2 = a.envParams),
          (this.$3 = a.networkNotifier);
      }
      var b = a.prototype;
      b.send = function (a, b, d) {
        var e = this;
        return new (c("MediaUploadCancelablePromise"))(function (f) {
          a.emitStageEvent(c("MediaUploadStageEvent").STAGE_STARTED, e.$1);
          var g = e.configuration;
          if (g == null)
            throw e.$2.createThrowableError(
              "Missing configuration in the MediaUploadFBUploadServiceRequest"
            );
          if (d == null) {
            a.recordStageOutcome({
              stage: e.$1,
              outcome: c("MediaUploadFBStageOutcome").MISSING_MANDATORY_DATA,
              rawErrorCode: "MISSING_START_CALL_RESPONSE",
            });
            a.emitStageEvent(c("MediaUploadStageEvent").STAGE_FAILED, e.$1);
            f(c("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE);
            return;
          }
          if (d.skip_upload) {
            a.uploadSummary.updateForUploadSkip(b.size);
            a.recordStageOutcome({
              stage: e.$1,
              outcome: c("MediaUploadFBStageOutcome").SUCCESS,
            });
            a.emitStageEvent(c("MediaUploadStageEvent").STAGE_SUCCEED, e.$1);
            f(c("MediaUploadOperationAttemptOutcome").SUCCESS);
            return;
          }
          a.uploadSummary.updateForUploadStart(b.size);
          a.recalculateProgressAndEmit();
          g = e.$4(a, b, g, d);
          var h = c("ResumableUploadService").create(g);
          a.processing.uploadServiceDomain = h.getServiceName();
          e.$5(a, h, f);
          h.resume(b.file);
          e.$3.notifyOnNewRequest(a, e.$1);
          return {
            cancel: function () {
              h.cancel();
            },
          };
        });
      };
      b.retriveResponse = function (a) {
        return a.processing.rawData.getUnsafe(h);
      };
      b.$6 = function (a, b, d) {
        this.$3.notifyOnResponse(a, this.$1),
          typeof d === "string"
            ? (a.processing.rawData.set(h, { everstoreHandle: d }),
              a.recordStageOutcome({
                stage: this.$1,
                outcome: c("MediaUploadFBStageOutcome").SUCCESS,
              }),
              a.emitStageEvent(
                c("MediaUploadStageEvent").STAGE_SUCCEED,
                this.$1
              ),
              b(c("MediaUploadOperationAttemptOutcome").SUCCESS))
            : (a.recordStageOutcome({
                stage: this.$1,
                outcome: c("MediaUploadFBStageOutcome").INVALID_SERVER_RESPONSE,
                rawErrorCode: "RECEIVED_HANDLE_IS_NOT_STRING",
              }),
              a.emitStageEvent(
                c("MediaUploadStageEvent").STAGE_FAILED,
                this.$1
              ),
              b(c("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE));
      };
      b.$7 = function (a, b, d) {
        d.error < 1e3
          ? this.$3.notifyOnResponse(a, this.$1)
          : this.$3.notifyOnTransportError(a, this.$1);
        a.recordStageOutcome({
          stage: this.$1,
          outcome: c("MediaUploadFBStageOutcome").REQUEST_ERROR,
          rawErrorCode: d.error,
          displayError: {
            summary: d.errorSummary,
            description: d.errorDescription,
          },
          errorAttributes: {
            silentError: d.silentError,
            transientError: d.transientError,
          },
        });
        a.emitStageEvent(c("MediaUploadStageEvent").STAGE_FAILED, this.$1);
        a = d.error >= 400 && d.error < 500;
        b(
          a
            ? c("MediaUploadOperationAttemptOutcome").NON_TRANSIENT_FAILURE
            : c("MediaUploadOperationAttemptOutcome").TRANSIENT_FAILURE
        );
      };
      b.$8 = function (a, b, d) {
        d instanceof c("AsyncResponse")
          ? this.$7(a, b, d)
          : (this.$3.notifyOnAbandon(a, this.$1),
            a.recordStageOutcome({
              stage: this.$1,
              outcome: c("MediaUploadFBStageOutcome").REQUEST_ERROR,
              rawErrorObject: d,
            }),
            a.emitStageEvent(c("MediaUploadStageEvent").STAGE_FAILED, this.$1),
            b(c("MediaUploadOperationAttemptOutcome").TRANSIENT_FAILURE));
      };
      b.$9 = function (a, b) {
        this.$3.notifyOnAbandon(a, this.$1),
          a.recordStageOutcome({
            stage: this.$1,
            outcome: c("MediaUploadFBStageOutcome").CANCEL,
          }),
          a.emitStageEvent(c("MediaUploadStageEvent").STAGE_CANCELED, this.$1),
          b(c("MediaUploadOperationAttemptOutcome").CANCELED);
      };
      b.$10 = function (a, b) {
        this.$3.notifyOnProgress(a, this.$1),
          (b == null ? void 0 : b.loaded) != null &&
            (a.uploadSummary.updateForProgress(b.loaded),
            a.emitStageEvent(
              c("MediaUploadStageEvent").STAGE_PROGRESS,
              this.$1
            ));
      };
      b.$5 = function (a, b, d) {
        var e = this;
        b.addListener(
          c("ResumableUploadServiceState.enum").SUCCESS,
          function (b) {
            return e.$6(a, d, b);
          }
        );
        b.addListener(
          c("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
          function (b) {
            return e.$7(a, d, b);
          }
        );
        b.addListener(c("ResumableUploadServiceState.enum").FAIL, function (b) {
          return e.$8(a, d, b);
        });
        b.addListener(
          c("ResumableUploadServiceState.enum").CANCEL,
          function () {
            return e.$9(a, d);
          }
        );
        b.addListener(
          c("ResumableUploadServiceState.enum").PROGRESS,
          function (b) {
            return e.$10(a, b);
          }
        );
      };
      b.$4 = function (a, b, d, e) {
        var f;
        b = b.file;
        f = [
          String(b.lastModified),
          b.name,
          b.type,
          String(b.size),
          (f = (f = a.processing.pseudoHash) == null ? void 0 : f.hashValue) !=
          null
            ? f
            : [a.sessionContext.sessionID, a.assetID].join("-"),
        ].join("-");
        f = [c("md5")(f), String(e.start_offset), String(e.end_offset)].join(
          "-"
        );
        var g =
            d.tracing.enabled && d.tracing.minFileSizeKB < b.size / 1024
              ? [
                  "video_upload_www",
                  [a.assetID, String(a.retryState.getRetryAttempts())].join(
                    "_"
                  ),
                  [String(a.sessionContext.sessionID), String(e.video_id)].join(
                    "_"
                  ),
                ].join(":")
              : null,
          h = d.defaultService,
          i = h.serviceName;
        h = h.serviceDomain;
        a.retryState.getRetryAttemptsSinceLastReset() < 10 &&
          d.targetedService != null &&
          ((i = d.targetedService.serviceName),
          (h = d.targetedService.serviceDomain));
        return {
          consumer: "fb_video",
          accessToken: "",
          sessionKey: f,
          serviceName: i,
          serviceDomain: h,
          tracingHeaderValue: g,
          receiveParameters: {
            start_offset: String(e.start_offset),
            end_offset: String(e.end_offset),
            composer_session_id: a.sessionContext.sessionID,
            upload_session_id: String(e.upload_session_id),
            product_media_id: e.video_id,
            xpv_asset_id: e.xpv_asset_id,
            is_xpv_single_prod: e.is_xpv_single_prod,
            fb_region: e.fb_region,
            total_file_size: String(b.size),
            target_id: a.request.attributes.targetID,
            video_waterfall_id: a.sessionContext.sessionID,
          },
        };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "GraphQLVideoPublisherInputDataHandlerBase",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.postData = a), (this.extraData = b);
      }
      var b = a.prototype;
      b.mapPostDataToGraphQLInputObject = function () {
        h(0, 85);
      };
      b.hasAPISupport = function () {
        return i(this.postData);
      };
      b.uploadables = function () {
        h(0, 85);
      };
      return a;
    })();
    function i(a) {
      return !0;
    }
    g.GraphQLVideoPublisherInputDataHandlerBase = a;
    g.hasAPISupport = i;
  },
  98
);
__d(
  "BrandedContentSharedToSponsorStatus",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ NOT_SHARED: 0, ALL_SHARED: 1 });
    f["default"] = a;
  },
  66
);
__d(
  "ExpirationType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      NONE: 0,
      DELETE: 1,
      HIDE: 2,
      ONLY_ME: 3,
      HIDE_LONG_DURATION: 4,
    });
    f["default"] = a;
  },
  66
);
__d(
  "VideoAssetMatureContentRating",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      UNSET: 0,
      SUITABLE_FOR_ALL: 1,
      FOURTEEN_PLUS: 2,
      EIGHTEEN_PLUS: 3,
    });
    f["default"] = a;
  },
  66
);
__d(
  "VideoCommentatingPermission",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ UNSET: "unset", ALLOW: "allow", DISALLOW: "disallow" });
    f["default"] = a;
  },
  66
);
__d(
  "VideoFundedContentFlagProgram",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      UNSET: 0,
      IS_FUNDED_CONTENT: 1,
      NOT_FUNDED_CONTENT: 2,
    });
    f["default"] = a;
  },
  66
);
__d(
  "GraphQLVideoPublisherVideoUploaderInputDataHandler",
  [
    "BrandedContentSharedToSponsorStatus",
    "BrandedContentSponsorRelationship",
    "CallToActionTypes",
    "ClientIDs",
    "ExpirationType",
    "GraphQLVideoPublisherInputDataHandlerBase",
    "VideoAssetMatureContentRating",
    "VideoCommentatingPermission",
    "VideoFundedContentFlagProgram",
    "VideoProjection",
    "VideoStereoFormat",
    "enumUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.mapPostDataToGraphQLInputObject = function () {
        var a = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler1(),
          b = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler2(),
          c = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler3(),
          e = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler4(),
          f = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler5(),
          g = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler6(),
          h = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler7(),
          i = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler8(),
          j = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler9(),
          k = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler10(),
          l = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler11(),
          m = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler12(),
          n = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler13(),
          o = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler14(),
          p = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler15(),
          q = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler16();
        return {
          actor_id: this.extraData.target_id,
          basic_data: a,
          client_mutation_id: d("ClientIDs").getNewClientID(),
          thumbnail_data: b,
          ad_break_data: e,
          vu_editor_data: i,
          post_status_data: c,
          main_composer_tab_data: f,
          distribution_data: g,
          stars_data: h,
          questions_data: j,
          polls_data: k,
          tracking_data: l,
          captions_data: m,
          spherical_data: n,
          live_premiere_data: o,
          video_editor_config_json: this.postData.video_editor_config_json,
          location_preset_data: p,
          video_abtesting_data: q,
        };
      };
      e.uploadables = function () {
        return babelHelpers["extends"](
          {},
          this.$GraphQLVideoPublisherVideoUploaderInputDataHandler17(),
          this.$GraphQLVideoPublisherVideoUploaderInputDataHandler18(),
          this.$GraphQLVideoPublisherVideoUploaderInputDataHandler19()
        );
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler1 = function () {
        var a;
        return {
          source: this.extraData.source,
          target_id: this.extraData.target_id,
          video_id: this.extraData.video_id,
          video_title: this.postData.video_title,
          waterfall_id: this.extraData.waterfall_id,
          xhpc_message: this.postData.xhpc_message,
          creator_product:
            (a = this.extraData.creator_product) == null
              ? void 0
              : a.toString(),
          composer_entry_point_ref: this.extraData.composer_entry_point_ref,
          composer_dialog_version: this.extraData.composer_dialog_version,
          has_file_been_replaced: this.extraData.has_file_been_replaced,
          supports_chunking: this.extraData.supports_chunking,
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler2 = function () {
        return { thumbnail_type: this.postData.thumbnail_type };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler18 = function () {
        return this.postData.thumbnail_uploadable;
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler19 = function () {
        var a = {},
          b = this.postData.schedule_custom_background_image,
          c = this.postData.schedule_custom_profile_image,
          d = this.postData.schedule_feed_background_image;
        b != null && (a.schedule_custom_background_image = b);
        c != null && (a.schedule_custom_profile_image = c);
        d != null && (a.schedule_feed_background_image = d);
        return a;
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler4 = function () {
        var a;
        a =
          (a = this.postData.ad_breaks) == null
            ? void 0
            : a.map(function (a) {
                return {
                  time_offset: parseInt(a.time_offset, 10),
                  status: a.status,
                };
              });
        return {
          ad_breaks: a,
          ad_break_prereview: this.postData.ad_break_prereview,
          ad_breaks_experiment_revenue_loss_threshold:
            this.postData.ad_breaks_experiment_revenue_loss_threshold,
          enable_ad_breaks_experiment:
            this.postData.enable_ad_breaks_experiment,
          ad_breaks_block_lists: this.postData.ad_breaks_block_lists,
          has_ad_breaks_block_lists: this.postData.has_ad_breaks_block_lists,
          is_in_stream_enabled: this.postData.is_in_stream_enabled,
          self_cert_answers: this.postData.self_cert_answers,
          self_cert_educational_form: this.postData.self_cert_educational_form,
          self_cert_selected_no_sensitive:
            this.postData.self_cert_selected_no_sensitive,
          self_cert_predicted_status: this.postData.self_cert_predicted_status,
          should_auto_adjust_manual_ad_breaks:
            this.postData.should_auto_adjust_manual_ad_breaks,
          should_auto_insert_ad_breaks:
            this.postData.should_auto_insert_ad_breaks,
          should_use_image_ads: this.postData.should_use_image_ads,
          monetization_pre_check_options:
            this.postData.monetization_pre_check_options,
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler3 = function () {
        return {
          dogfooding: this.postData.dogfooding,
          draft: this.postData.draft,
          is_reviewable_branded_content:
            this.postData.is_reviewable_branded_content,
          scheduled: this.postData.scheduled,
          future_date: this.postData.future_date,
          future_time: this.postData.future_time,
          expiring: this.postData.expiring,
          expire_type:
            this.postData.expire_type != null
              ? d("enumUtils").enumValueToKeyEnforcing(
                  this.postData.expire_type,
                  c("ExpirationType")
                )
              : null,
          expire_time: this.postData.expire_time,
          backdated_date: this.postData.backdated_date,
          hide_from_newsfeed: this.postData.hide_from_newsfeed,
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler20 = function () {
        var a = this.postData.branded_content_data;
        if (a == null) return null;
        var b = a.tagging_data;
        b != null &&
          (b = babelHelpers["extends"]({}, b, {
            shared_to_sponsor_status:
              b.shared_to_sponsor_status != null
                ? d("enumUtils").enumValueToKeyEnforcing(
                    b.shared_to_sponsor_status,
                    c("BrandedContentSharedToSponsorStatus")
                  )
                : null,
            sponsor_relationship:
              b.sponsor_relationship != null
                ? d("enumUtils").enumValueToKeyEnforcing(
                    b.sponsor_relationship,
                    c("BrandedContentSponsorRelationship")
                  )
                : null,
          }));
        return babelHelpers["extends"]({}, a, { tagging_data: b });
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler5 = function () {
        return {
          action_type_id: this.postData.action_type_id,
          branded_content_data:
            this.$GraphQLVideoPublisherVideoUploaderInputDataHandler20(),
          composertags_place_name: this.postData.composertags_place_name,
          composertags_place: this.postData.composertags_place,
          composertags_product_items: this.postData.composertags_product_items,
          composertags_sponsor: this.postData.composertags_sponsor,
          composertags_with: this.postData.composertags_with,
          content_tags: this.postData.content_tags,
          cta_type:
            this.postData.cta_type != null
              ? d("enumUtils").enumValueToKeyEnforcing(
                  this.postData.cta_type,
                  c("CallToActionTypes")
                )
              : null,
          deal_id: this.postData.deal_id,
          direct_share_status:
            this.postData.direct_share_status != null
              ? d("enumUtils").enumValueToKeyEnforcing(
                  this.postData.direct_share_status,
                  c("BrandedContentSharedToSponsorStatus")
                )
              : null,
          episode_data_json: this.postData.episode_data_json,
          external_movie_data: this.postData.external_movie_data,
          feed_targeted_data:
            this.$GraphQLVideoPublisherVideoUploaderInputDataHandler21(),
          fan_funding_promotion_metadata:
            this.postData.fan_funding_promotion_metadata,
          free_form_tags: this.postData.free_form_tags,
          funded_content_program: this.postData.funded_content_program
            ? d("enumUtils").enumValueToKeyEnforcing(
                this.postData.funded_content_program,
                c("VideoFundedContentFlagProgram")
              )
            : null,
          fundraiser_for_story_charity_id:
            this.postData.fundraiser_for_story_charity_id,
          fundraiser_for_story_charity_type:
            this.postData.fundraiser_for_story_charity_type,
          game_id: this.postData.game_id,
          icon_id: this.postData.icon_id,
          is_explicitly_tagged_as_gaming_video:
            this.postData.is_explicitly_tagged_as_gaming_video,
          is_rewards_enabled: this.postData.is_rewards_enabled,
          is_stars_enabled_for_post: this.postData.is_stars_enabled_for_post,
          multilingual_specified_lang:
            this.postData.multilingual_specified_lang,
          multilingual_status_langs: this.postData.multilingual_status_langs,
          multilingual_statuses: this.postData.multilingual_statuses,
          object_id: this.postData.object_id,
          object_str: this.postData.object_str,
          playlistIDs: this.postData.playlistIDs,
          share_to_parent_page_option_selected:
            this.postData.share_to_parent_page_option_selected,
          sponsor_relationship: this.postData.sponsor_relationship
            ? d("enumUtils").enumValueToKeyEnforcing(
                this.postData.sponsor_relationship,
                c("BrandedContentSponsorRelationship")
              )
            : null,
          targeted_privacy_data: JSON.stringify(
            this.postData.targeted_privacy_data
          ),
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler21 = function () {
        var a = babelHelpers["extends"]({}, this.postData.feed_targeted_data);
        this.postData.relevant_until_date != null &&
          (a["relevant-until-date"] = this.postData.relevant_until_date);
        this.postData.relevant_until_time != null &&
          (a["relevant-until-time"] = this.postData.relevant_until_time);
        Object.keys(a).length === 0 && (a = void 0);
        return JSON.stringify(a);
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler6 = function () {
        return {
          commentating_permission:
            this.postData.commentating_permission != null
              ? d("enumUtils").enumValueToKeyEnforcing(
                  this.postData.commentating_permission,
                  c("VideoCommentatingPermission")
                )
              : null,
          crossposting_config: this.postData.crossposting_config,
          disturbing: this.postData.disturbing,
          embeddable: this.postData.embeddable,
          enable_drm: this.postData.enable_drm,
          exclude_from_watch: this.postData.exclude_from_watch,
          mature_content_rating:
            this.postData.mature_content_rating != null
              ? d("enumUtils").enumValueToKeyEnforcing(
                  this.postData.mature_content_rating,
                  c("VideoAssetMatureContentRating")
                )
              : null,
          no_story: this.postData.no_story,
          secret: this.postData.secret,
          shows_v2_episode_data: this.postData.shows_v2_episode_data,
          social_actions: this.postData.social_actions,
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler7 = function () {
        return {
          is_receiving_stars_enabled: this.postData.is_receiving_stars_enabled,
          stars_goal_id: this.postData.stars_goal_id,
          stars_cue_trigger_timestamp:
            this.postData.stars_cue_trigger_timestamp,
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler11 = function () {
        return {
          custom_labels: this.postData.custom_labels,
          external_video_id: this.postData.external_video_id,
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler9 = function () {
        return { questions: this.postData.questions };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler10 = function () {
        return { polls: this.postData.polls };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler22 = function (a) {
        return a.getIsDefault() ? "captions_default" : "captions_file";
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler12 = function () {
        var a,
          b = this;
        a =
          (a = this.postData.captions) == null
            ? void 0
            : a.map(function (a, c) {
                return (
                  b.$GraphQLVideoPublisherVideoUploaderInputDataHandler22(a) + c
                );
              });
        return {
          autopublish_captions: this.postData.autopublish_captions,
          captions: a,
          should_review_all_captions: this.postData.should_review_all_captions,
          spoken_locale: this.postData.spoken_locale,
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler17 = function () {
        var a,
          b = this,
          c = {};
        (a = this.postData.captions) == null
          ? void 0
          : a.forEach(function (a, d) {
              c[
                b.$GraphQLVideoPublisherVideoUploaderInputDataHandler22(a) + d
              ] = a.getFile();
            });
        return c;
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler8 = function () {
        return {
          auto_reframe_aspect_ratios: this.postData.auto_reframe_aspect_ratios,
          auto_reframe_publish_mode: this.postData.auto_reframe_publish_mode,
          trailer_review_required: this.postData.trailer_review_required,
          trailer_generate_on: this.postData.trailer_generate_on,
          auto_reframe_mobile_only:
            this.postData.auto_reframe_mobile_only || !1,
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler13 = function () {
        return {
          initialHeading: this.postData.initialHeading,
          initialPitch: this.postData.initialPitch,
          fov: this.postData.fov,
          guide_enabled: this.postData.guide_enabled,
          guide_keyframes: this.postData.guide_keyframes,
          enable_omnistab: this.postData.enable_omnistab,
          spherical: this.postData.spherical,
          projection:
            this.postData.projection != null
              ? d("enumUtils").enumValueToKeyEnforcing(
                  this.postData.projection,
                  c("VideoProjection")
                )
              : null,
          stereoMode:
            this.postData.stereoMode != null
              ? d("enumUtils").enumValueToKeyEnforcing(
                  this.postData.stereoMode,
                  c("VideoStereoFormat")
                )
              : null,
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler14 = function () {
        return {
          premiere_time_ms: this.postData.premiere_time_ms,
          should_premiere: this.postData.should_premiere,
          premiere_in_living_room_video_ids:
            this.postData.premiere_in_living_room_video_ids,
          premiere_custom_profile_image_focus:
            this.postData.premiere_custom_profile_image_focus,
          feed_background_focus: this.postData.feed_background_focus,
          premiere_audience: this.postData.premiere_audience,
          premiere_is_loe: this.postData.premiere_is_loe,
          premiere_event_category_id: this.postData.premiere_event_category_id,
        };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler15 = function () {
        return { location_preset_id: this.postData.location_preset_id };
      };
      e.$GraphQLVideoPublisherVideoUploaderInputDataHandler16 = function () {
        return { is_abtesting: this.postData.is_abtesting };
      };
      return b;
    })(
      d("GraphQLVideoPublisherInputDataHandlerBase")
        .GraphQLVideoPublisherInputDataHandlerBase
    );
    g["default"] = a;
  },
  98
);
__d(
  "VideoComposerVideoPublishingMutation",
  [
    "RelayAPIConfig",
    "RelayRuntime",
    "VideoComposerVideoPublishingMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = 1e3 * 90,
      j =
        h !== void 0
          ? h
          : (h = b("VideoComposerVideoPublishingMutation.graphql"));
    function a(a, b, d, e, f) {
      var g = c("RelayAPIConfig").fetchTimeout;
      c("RelayAPIConfig").fetchTimeout = i;
      return c("RelayRuntime").commitMutation(b, {
        uploadables: d,
        mutation: j,
        variables: { input: a },
        onCompleted: function (a) {
          (c("RelayAPIConfig").fetchTimeout = g), e(a);
        },
        onError: function (a) {
          (c("RelayAPIConfig").fetchTimeout = g), f(a);
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "VideoComposerVideoPublisher",
  ["RelayFBEnvironmentFactory", "VideoComposerVideoPublishingMutation", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = a.mapPostDataToGraphQLInputObject()),
          (this.$3 = a.hasAPISupport()),
          (this.$2 = a.uploadables());
      }
      var b = a.prototype;
      b.publish = function (a, b) {
        if (!this.$3)
          throw c("err")("This api does not support your publishing use case");
        d("VideoComposerVideoPublishingMutation").commit(
          this.$1,
          c("RelayFBEnvironmentFactory").getForActorID(
            this.$1.basic_data.target_id
          ),
          this.$2,
          a,
          b
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoUploadGraphQLPostRequestManager",
  [
    "FBLogger",
    "GraphQLVideoPublisherInputDataHandlerBase",
    "GraphQLVideoPublisherVideoUploaderInputDataHandler",
    "VideoComposerVideoPublisher",
    "clearTimeout",
    "cr:909282",
    "err",
    "mixin",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e) {
        var f;
        f = a.call(this) || this;
        f.$VideoUploadGraphQLPostRequestManager1 = 0;
        f.$VideoUploadGraphQLPostRequestManager2 = 0;
        f.$VideoUploadGraphQLPostRequestManager3 = 0;
        f.$VideoUploadGraphQLPostRequestManager4 = 0;
        f.$VideoUploadGraphQLPostRequestManager5 = 0;
        f.$VideoUploadGraphQLPostRequestManager6 = 0;
        f.$VideoUploadGraphQLPostRequestManager7 = null;
        f.$VideoUploadGraphQLPostRequestManager8 = null;
        f.$VideoUploadGraphQLPostRequestManager9 = !1;
        f.$VideoUploadGraphQLPostRequestManager1 = b;
        f.$VideoUploadGraphQLPostRequestManager2 = c;
        f.$VideoUploadGraphQLPostRequestManager3 = 0;
        f.$VideoUploadGraphQLPostRequestManager4 = d;
        f.$VideoUploadGraphQLPostRequestManager5 = e;
        f.$VideoUploadGraphQLPostRequestManager6 = 0;
        return f;
      }
      var e = b.prototype;
      e.sendRequest = function (a) {
        this.$VideoUploadGraphQLPostRequestManager8 = a;
        if (this.$VideoUploadGraphQLPostRequestManager9) {
          c("FBLogger")("video_publish_graphql").info(
            "Sending publishing request again while processing another request"
          );
          return;
        }
        this.$VideoUploadGraphQLPostRequestManager10();
        this.inform("request-started");
      };
      e.clearRequest = function () {
        (this.$VideoUploadGraphQLPostRequestManager9 = !1),
          (this.$VideoUploadGraphQLPostRequestManager6 = 0),
          (this.$VideoUploadGraphQLPostRequestManager3 = 0);
      };
      e.$VideoUploadGraphQLPostRequestManager10 = function () {
        var a = this.$VideoUploadGraphQLPostRequestManager8;
        if (a == null) return;
        c("clearTimeout")(this.$VideoUploadGraphQLPostRequestManager7);
        this.$VideoUploadGraphQLPostRequestManager7 = null;
        var b = a.getMetadata();
        a = this.__createRequestData(a);
        b = new (c("GraphQLVideoPublisherVideoUploaderInputDataHandler"))(b, a);
        this.$VideoUploadGraphQLPostRequestManager9 = !0;
        a = new (c("VideoComposerVideoPublisher"))(b);
        a.publish(
          this.$VideoUploadGraphQLPostRequestManager11.bind(this),
          this.$VideoUploadGraphQLPostRequestManager12.bind(this)
        );
      };
      e.__createRequestData = function (a) {
        var b = a.getVideoID(),
          d = a.getTargetID();
        if (b == null) throw c("err")("Video id cannot be null");
        if (d == null) throw c("err")("Target id cannot be null");
        return {
          video_id: b,
          target_id: d,
          source: "COMPOSER",
          waterfall_id: a.getWaterfallID() || "",
          creator_product: a.getCreatorProduct(),
          composer_entry_point_ref:
            a.getComposerEntryPointRef && a.getComposerEntryPointRef(),
          composer_dialog_version: a.getComposerDialogVersion(),
          has_file_been_replaced: a.getHasFileBeenReplaced(),
          supports_chunking: a.getSupportsChunking(),
        };
      };
      e.$VideoUploadGraphQLPostRequestManager11 = function (a) {
        this.inform("request-finished", {
          video_asset_id:
            (a = a.video_publish) == null ? void 0 : a.video_asset_id,
        });
        this.clearRequest();
      };
      e.$VideoUploadGraphQLPostRequestManager13 = function (a) {
        this.inform("request-failed", {
          error_code: a.number,
          error_description: a.message,
          error_summary: a.name,
          error_object: a,
        }),
          this.clearRequest();
      };
      e.$VideoUploadGraphQLPostRequestManager12 = function (a) {
        this.$VideoUploadGraphQLPostRequestManager14(a) &&
        this.$VideoUploadGraphQLPostRequestManager6 <
          this.$VideoUploadGraphQLPostRequestManager4
          ? (c("FBLogger")("video_publish_graphql").info(
              "retry publishing for error: %s",
              a.stack
            ),
            this.$VideoUploadGraphQLPostRequestManager6++,
            this.$VideoUploadGraphQLPostRequestManager15(
              this.$VideoUploadGraphQLPostRequestManager16(
                this.$VideoUploadGraphQLPostRequestManager5,
                this.$VideoUploadGraphQLPostRequestManager6
              )
            ))
          : this.$VideoUploadGraphQLPostRequestManager13(a);
      };
      e.$VideoUploadGraphQLPostRequestManager16 = function (a, b) {
        return Math.pow(a, b) * 1e3;
      };
      e.$VideoUploadGraphQLPostRequestManager15 = function (a) {
        c("clearTimeout")(this.$VideoUploadGraphQLPostRequestManager7),
          (this.$VideoUploadGraphQLPostRequestManager7 = c("setTimeout")(
            this.$VideoUploadGraphQLPostRequestManager10.bind(this),
            a
          ));
      };
      e.$VideoUploadGraphQLPostRequestManager14 = function (a) {
        a = a.toString();
        return a.includes("NetworkTransportError") ||
          a.includes("NetworkTimeoutError") ||
          a.includes("NetworkRequestError")
          ? !0
          : !1;
      };
      e.hasAPISupport = function (a) {
        return d("GraphQLVideoPublisherInputDataHandlerBase").hasAPISupport(a);
      };
      return b;
    })(c("mixin")(b("cr:909282")));
    g["default"] = a;
  },
  98
);
__d(
  "submitForm",
  ["DOM"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.querySelector('input[type="submit"]');
      b != null
        ? b.click()
        : ((b = c("DOM").create("input", {
            type: "submit",
            className: "hidden_elem",
          })),
          c("DOM").appendContent(a, b),
          b.click(),
          c("DOM").remove(b));
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoUploadRequest",
  [
    "AsyncRequest",
    "DOM",
    "DTSG",
    "FileForm",
    "Form",
    "VideoUploadFeatureDetector",
    "emptyFunction",
    "flattenPHPQueryData",
    "submitForm",
  ],
  function (a, b, c, d, e, f) {
    var g = "video";
    a = (function () {
      "use strict";
      function a(a) {
        this.$1 = a;
        this.$2 = null;
        this.$3 = !1;
        this.$4 = null;
        this.$5 = null;
        this.$6 = null;
        this.$7 = null;
        this.$8 = a = b("emptyFunction");
        this.$9 = a;
        this.$10 = a;
        this.$11 = a;
        this.$12 = null;
      }
      var c = a.prototype;
      c.setAllowCrossOrigin = function (a) {
        this.$3 = a;
        return this;
      };
      c.setData = function (a) {
        this.$4 = a;
        return this;
      };
      c.setWaterfallID = function (a) {
        this.$6 = a;
        return this;
      };
      c.setSuccessHandler = function (a) {
        this.$8 = a;
        return this;
      };
      c.setErrorHandler = function (a) {
        this.$9 = a;
        return this;
      };
      c.setTransportErrorHandler = function (a) {
        this.$10 = a;
        return this;
      };
      c.setUploadProgressHandler = function (a) {
        this.$11 = a;
        return this;
      };
      c.setTimeoutHandler = function (a, b) {
        this.$7 = a;
        this.$12 = b;
        return this;
      };
      c.setThumbnail = function (a) {
        this.$13 = a;
        return this;
      };
      c.setCustomProfileImage = function (a) {
        this.$14 = a;
        return this;
      };
      c.setCustomBackgroundImage = function (a) {
        this.$15 = a;
        return this;
      };
      c.setFeedBackgroundImage = function (a) {
        this.$16 = a;
        return this;
      };
      c.setHandle = function (a) {
        this.$5 = a;
        return this;
      };
      c.setCaptions = function (a) {
        this.$17 = a;
        return this;
      };
      c.setPollOptionImages = function (a) {
        this.$18 = a;
        return this;
      };
      c.send = function () {
        if (this.$2)
          throw new Error("An upload request is already in progress.");
        if (b("VideoUploadFeatureDetector").supportsXHR()) {
          this.$2 = this.$19();
          if (
            this.$13 ||
            this.$17 ||
            this.$14 ||
            this.$15 ||
            this.$16 ||
            this.$18
          ) {
            var a = new FormData();
            this.$13 && a.append("thumb", this.$13);
            this.$14 && a.append("schedule_custom_profile_image", this.$14);
            this.$15 && a.append("schedule_custom_background_image", this.$15);
            this.$16 && a.append("schedule_feed_background_image", this.$16);
            this.$17 &&
              this.$17.forEach(function (b, c) {
                c = b.getIsDefault() ? "captions_default" : "captions_file" + c;
                a.append(c, b.getFile());
              });
            if (this.$18) {
              var c = this.$18;
              Object.keys(c).forEach(function (b) {
                a.append(b, c[b]);
              });
            }
            if (this.$4) {
              var d = b("flattenPHPQueryData")(this.$4);
              Object.keys(d).forEach(function (b) {
                a.append(b, d[b]);
              });
            }
            this.$2.setRawData(a);
          }
          this.$2.send();
        } else (this.$2 = this.$20()), this.$21(this.$2);
      };
      c.sendChunk = function (a) {
        if (this.$2)
          throw new Error("An upload request is already in progress.");
        var b = new FormData();
        this.$5
          ? b.append("fbuploader_video_file_chunk", this.$5)
          : b.append("video_file_chunk", a);
        this.$2 = this.$19();
        this.$2.setRawData(b);
        this.$2.send();
      };
      c.sendFile = function (a) {
        if (this.$2)
          throw new Error("An upload request is already in progress.");
        this.$2 = this.$20();
        var c = a.cloneNode(!1);
        a.name = g;
        b("DOM").replace(a, c);
        b("DOM").appendContent(this.$2.getRoot(), a);
        this.$21(this.$2);
        a.name = c.name;
        b("DOM").replace(c, a);
      };
      c.abort = function () {
        if (!this.$2) return;
        this.$2.abort();
        this.$2 = null;
      };
      c.$19 = function () {
        var a = this.__getAsyncRequest()
          .setAllowCrossOrigin(this.$3)
          .setURI(this.$1)
          .setData(this.$4)
          .setRequestHeader("X_FB_VIDEO_WATERFALL_ID", this.$6)
          .setHandler(this.$8)
          .setErrorHandler(this.$9)
          .setTransportErrorHandler(this.$10)
          .setUploadProgressHandler(this.$11);
        this.$12 && a.setTimeoutHandler(this.$7, this.$12);
        return a;
      };
      c.__getAsyncRequest = function () {
        return new (b("AsyncRequest"))();
      };
      c.$20 = function () {
        var a = b("DOM").create("form", { action: this.$1, method: "POST" });
        b("Form").createHiddenInputs(
          babelHelpers["extends"]({ fb_dtsg: b("DTSG").getToken() }, this.$4),
          a
        );
        a = new (b("FileForm"))(a, null, { allowCrossOrigin: this.$3 });
        a.subscribe("success", this.$22.bind(this));
        a.subscribe("failure", this.$23.bind(this));
        a.subscribe("progress", this.$24.bind(this));
        return a;
      };
      c.$21 = function (a) {
        b("DOM").appendContent(document.body, a.getRoot()),
          b("submitForm")(a.getRoot());
      };
      c.$22 = function (a, b) {
        this.$8(b.response);
      };
      c.$23 = function (a, b) {
        this.$9(b.response);
      };
      c.$24 = function (a, b) {
        this.$11(b.event);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoUploadPostRequestManager",
  [
    "VideoUploadLogger",
    "VideoUploadRequest",
    "clearTimeout",
    "cr:909282",
    "mixin",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f) {
        var g;
        g = a.call(this) || this;
        g.$VideoUploadPostRequestManager2 = b;
        g.$VideoUploadPostRequestManager3 = c;
        g.$VideoUploadPostRequestManager4 = d;
        g.$VideoUploadPostRequestManager5 = 0;
        g.$VideoUploadPostRequestManager6 = e;
        g.$VideoUploadPostRequestManager7 = f;
        g.$VideoUploadPostRequestManager8 = 0;
        return g;
      }
      var d = b.prototype;
      d.$VideoUploadPostRequestManager9 = function () {
        return this.$VideoUploadPostRequestManager1
          ? new (c("VideoUploadLogger"))({
              source: this.$VideoUploadPostRequestManager1.getSource(),
              waterfall_id:
                this.$VideoUploadPostRequestManager1.getWaterfallID(),
              target_id: this.$VideoUploadPostRequestManager1.getTargetID(),
              composer_entry_point_ref:
                this.$VideoUploadPostRequestManager1.getComposerEntryPointRef &&
                this.$VideoUploadPostRequestManager1.getComposerEntryPointRef(),
            })
          : null;
      };
      d.getRequest = function () {
        return this.$VideoUploadPostRequestManager10;
      };
      d.sendRequest = function (a) {
        this.$VideoUploadPostRequestManager1 = a;
        if (this.$VideoUploadPostRequestManager10) {
          var b = this.$VideoUploadPostRequestManager9();
          b && b.logEvent(c("VideoUploadLogger").EVENT_DUPLICATE_POST_REQUEST);
          return;
        }
        this.$VideoUploadPostRequestManager11 = babelHelpers["extends"](
          {},
          a.getMetadata(),
          this.__createRequestData(a)
        );
        this.$VideoUploadPostRequestManager12 =
          this.$VideoUploadPostRequestManager11.thumb;
        this.$VideoUploadPostRequestManager13 =
          this.$VideoUploadPostRequestManager11.schedule_custom_profile_image;
        this.$VideoUploadPostRequestManager14 =
          this.$VideoUploadPostRequestManager11.schedule_custom_background_image;
        this.$VideoUploadPostRequestManager15 =
          this.$VideoUploadPostRequestManager11.schedule_feed_background_image;
        delete this.$VideoUploadPostRequestManager11.thumb;
        this.$VideoUploadPostRequestManager16 =
          this.$VideoUploadPostRequestManager11.captions;
        delete this.$VideoUploadPostRequestManager11.captions;
        this.$VideoUploadPostRequestManager17 = a.getWaterfallID();
        this.$VideoUploadPostRequestManager18 =
          this.$VideoUploadPostRequestManager11.pollImages;
        this.$VideoUploadPostRequestManager19();
        this.inform("request-started");
      };
      d.$VideoUploadPostRequestManager19 = function () {
        c("clearTimeout")(this.$VideoUploadPostRequestManager20),
          (this.$VideoUploadPostRequestManager20 = null),
          (this.$VideoUploadPostRequestManager10 = this.__getVideoUploadRequest(
            this.$VideoUploadPostRequestManager2
          )
            .setAllowCrossOrigin(!0)
            .setData(this.$VideoUploadPostRequestManager11)
            .setThumbnail(this.$VideoUploadPostRequestManager12)
            .setCustomProfileImage(this.$VideoUploadPostRequestManager13)
            .setCustomBackgroundImage(this.$VideoUploadPostRequestManager14)
            .setFeedBackgroundImage(this.$VideoUploadPostRequestManager15)
            .setCaptions(this.$VideoUploadPostRequestManager16)
            .setWaterfallID(this.$VideoUploadPostRequestManager17)
            .setPollOptionImages(this.$VideoUploadPostRequestManager18)
            .setSuccessHandler(this.$VideoUploadPostRequestManager21.bind(this))
            .setErrorHandler(this.$VideoUploadPostRequestManager22.bind(this))
            .setTransportErrorHandler(
              this.$VideoUploadPostRequestManager23.bind(this)
            )),
          this.$VideoUploadPostRequestManager10.send();
      };
      d.__createRequestData = function (a) {
        return {
          video_id: a.getVideoID(),
          target_id: a.getTargetID(),
          source: a.getSource(),
          waterfall_id: a.getWaterfallID(),
          creator_product: a.getCreatorProduct(),
          composer_entry_point_ref:
            a.getComposerEntryPointRef && a.getComposerEntryPointRef(),
          composer_dialog_version: a.getComposerDialogVersion(),
          has_file_been_replaced: a.getHasFileBeenReplaced(),
          supports_chunking: a.getSupportsChunking(),
        };
      };
      d.__getVideoUploadRequest = function (a) {
        return new (c("VideoUploadRequest"))(a);
      };
      d.clearRequest = function () {
        (this.$VideoUploadPostRequestManager10 = null),
          (this.$VideoUploadPostRequestManager8 = 0),
          (this.$VideoUploadPostRequestManager5 = 0);
      };
      d.isInProgress = function () {
        return !!this.$VideoUploadPostRequestManager10;
      };
      d.$VideoUploadPostRequestManager24 = function (a) {
        c("clearTimeout")(this.$VideoUploadPostRequestManager20),
          (this.$VideoUploadPostRequestManager20 = c("setTimeout")(
            this.$VideoUploadPostRequestManager19.bind(this),
            a
          ));
      };
      d.$VideoUploadPostRequestManager25 = function (a, b) {
        return Math.pow(a, b) * 1e3;
      };
      d.$VideoUploadPostRequestManager21 = function (a) {
        a = a.getPayload();
        this.inform("request-finished", {
          video_id: a.video_id,
          video_asset_id: a.video_asset_id,
          container_type: a.container_type,
          transport_retries: this.$VideoUploadPostRequestManager5,
          server_retries: this.$VideoUploadPostRequestManager8,
          premiere_destination_video_id: a.premiere_destination_video_id,
        });
        this.clearRequest();
      };
      d.$VideoUploadPostRequestManager26 = function (a) {
        this.inform("request-failed", {
          error_code: a.getError(),
          error_description: a.getErrorDescription(),
          error_summary: a.getErrorSummary(),
          transport_retries: this.$VideoUploadPostRequestManager5,
          server_retries: this.$VideoUploadPostRequestManager8,
          error_is_silent: a.isSilent(),
          error_is_transient: a.isTransient(),
          www_request_id:
            (a = a.getPayload()) == null ? void 0 : a.__www_request_id__,
        });
        this.clearRequest();
      };
      d.$VideoUploadPostRequestManager22 = function (a) {
        this.$VideoUploadPostRequestManager10 = null;
        this.$VideoUploadPostRequestManager5 = 0;
        var b = this.$VideoUploadPostRequestManager9();
        if (b) {
          var d = {
            server_retries: this.$VideoUploadPostRequestManager8,
            extra_data: { failure_is_transient: a.isTransient() },
          };
          b.logEvent(
            c("VideoUploadLogger").EVENT_HANDLING_SERVER_FAILURE_RESPONSE,
            d
          );
        }
        a.isTransient() &&
        this.$VideoUploadPostRequestManager8 <
          this.$VideoUploadPostRequestManager6
          ? (this.$VideoUploadPostRequestManager8++,
            this.$VideoUploadPostRequestManager24(
              this.$VideoUploadPostRequestManager25(
                this.$VideoUploadPostRequestManager7,
                this.$VideoUploadPostRequestManager8
              )
            ))
          : this.$VideoUploadPostRequestManager26(a);
      };
      d.$VideoUploadPostRequestManager23 = function (a) {
        var b = this.$VideoUploadPostRequestManager9();
        if (b) {
          var d = {
            extra_data: {
              transport_retries: this.$VideoUploadPostRequestManager5,
            },
          };
          b.logEvent(
            c("VideoUploadLogger").EVENT_HANDLING_TRANSPORT_FAILURE_RESPONSE,
            d
          );
        }
        this.$VideoUploadPostRequestManager3 === 0 ||
        this.$VideoUploadPostRequestManager5 >=
          this.$VideoUploadPostRequestManager3
          ? this.$VideoUploadPostRequestManager26(a)
          : (this.$VideoUploadPostRequestManager5++,
            (this.$VideoUploadPostRequestManager10 = null),
            this.$VideoUploadPostRequestManager24(
              this.$VideoUploadPostRequestManager25(
                this.$VideoUploadPostRequestManager4,
                this.$VideoUploadPostRequestManager5
              )
            ));
      };
      return b;
    })(c("mixin")(b("cr:909282")));
    d = a;
    g["default"] = d;
  },
  98
);
__d(
  "VideoUploadRequestContext",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a() {
        var a = this;
        this.$14 = !1;
        this.$21 = 0;
        this.$22 = !1;
        this.$23 = !1;
        this.$26 = !1;
        this.getComposerEntryPointRef = function () {
          return a.$11;
        };
        this.reset();
      }
      var b = a.prototype;
      b.setFile = function (a) {
        this.$1 = a;
        return this;
      };
      b.getFile = function () {
        return this.$1;
      };
      b.setMetadata = function (a) {
        this.$24 = a;
        return this;
      };
      b.getMetadata = function () {
        return this.$24;
      };
      b.setVideoID = function (a) {
        this.$2 = a;
        return this;
      };
      b.getVideoID = function () {
        return this.$2;
      };
      b.setXPVAssetID = function (a) {
        this.$29 = a;
        return this;
      };
      b.getXPVAssetID = function () {
        return this.$29;
      };
      b.setIsXPVSingleProd = function (a) {
        this.$30 = a;
        return this;
      };
      b.getIsXPVSingleProd = function () {
        return this.$30;
      };
      b.setUploadSessionID = function (a) {
        this.$3 = a;
        return this;
      };
      b.getUploadSessionID = function () {
        return this.$3;
      };
      b.setFbRegion = function (a) {
        this.$4 = a;
        return this;
      };
      b.getFbRegion = function () {
        return this.$4;
      };
      b.setStartOffset = function (a) {
        this.$5 = a;
        return this;
      };
      b.getStartOffset = function () {
        return this.$5;
      };
      b.setEndOffset = function (a) {
        this.$6 = a;
        return this;
      };
      b.getEndOffset = function () {
        return this.$6;
      };
      b.setPartitionStartOffset = function (a) {
        this.$17 = a;
        return this;
      };
      b.getPartitionStartOffset = function () {
        return this.$17;
      };
      b.setPartitionEndOffset = function (a) {
        this.$18 = a;
        return this;
      };
      b.getPartitionEndOffset = function () {
        return this.$18;
      };
      b.setPartitionNo = function (a) {
        this.$19 = a;
        return this;
      };
      b.getPartitionNo = function () {
        return this.$19;
      };
      b.setTargetID = function (a) {
        this.$7 = a;
        return this;
      };
      b.getTargetID = function () {
        return this.$7;
      };
      b.setSource = function (a) {
        this.$8 = a;
        return this;
      };
      b.setComposerDialogVersion = function (a) {
        this.$9 = a;
        return this;
      };
      b.getComposerDialogVersion = function () {
        return this.$9;
      };
      b.getSource = function () {
        return this.$8;
      };
      b.setWaterfallID = function (a) {
        this.$10 = a;
        return this;
      };
      b.getWaterfallID = function () {
        return this.$10;
      };
      b.setComposerEntryPointRef = function (a) {
        this.$11 = a;
        return this;
      };
      b.setComposerWorkSharedDraftMode = function (a) {
        this.$12 = a;
        return this;
      };
      b.getComposerWorkSharedDraftMode = function () {
        return this.$12;
      };
      b.setHasFileBeenReplaced = function (a) {
        this.$14 = a;
        return this;
      };
      b.getHasFileBeenReplaced = function () {
        return this.$14;
      };
      b.setSupportsChunking = function (a) {
        this.$15 = a;
        return this;
      };
      b.getSupportsChunking = function () {
        return this.$15;
      };
      b.setSupportsFileAPI = function (a) {
        this.$16 = a;
        return this;
      };
      b.getSupportsFileAPI = function () {
        return this.$16;
      };
      b.setCreatorProduct = function (a) {
        this.$20 = a;
        return this;
      };
      b.getCreatorProduct = function () {
        return this.$20;
      };
      b.setLastKnownUploadSpeed = function (a) {
        this.$21 = a;
        return this;
      };
      b.getLastKnownUploadSpeed = function () {
        return this.$21 || 0;
      };
      b.setUseParallelChunks = function (a) {
        this.$22 = a;
        return this;
      };
      b.getUseParallelChunks = function () {
        return this.$22;
      };
      b.setIsSphericalVideo = function (a) {
        this.$23 = a;
        return this;
      };
      b.getIsSphericalVideo = function () {
        return this.$23;
      };
      b.setSphericalMetadata = function (a) {
        this.$25 = a;
        return this;
      };
      b.getSphericalMetadata = function () {
        return this.$25;
      };
      b.setEnableOmnistab = function (a) {
        this.$26 = a;
        return this;
      };
      b.getEnableOmnistab = function () {
        return this.$26;
      };
      b.setClientChunkSize = function (a) {
        this.$27 = a;
        return this;
      };
      b.getClientChunkSize = function () {
        return this.$27;
      };
      b.setVideoPublisherActionSource = function (a) {
        this.$28 = a;
        return this;
      };
      b.getVideoPublisherActionSource = function () {
        return this.$28;
      };
      b.setComposerSessionID = function (a) {
        this.$13 = a;
        return this;
      };
      b.getComposerSessionID = function () {
        return this.$13;
      };
      b.setRetryState = function (a) {
        this.$31 = a;
        return this;
      };
      b.getRetryState = function () {
        return this.$31;
      };
      b.setCreativeTools = function (a) {
        this.$32 = a;
        return this;
      };
      b.getCreativeTools = function () {
        return this.$32;
      };
      b.reset = function () {
        (this.$1 = null),
          (this.$2 = null),
          (this.$3 = null),
          (this.$4 = null),
          (this.$5 = null),
          (this.$6 = null),
          (this.$7 = null),
          (this.$8 = null),
          (this.$9 = null),
          (this.$10 = null),
          (this.$11 = null),
          (this.$12 = null),
          (this.$14 = !1),
          (this.$15 = null),
          (this.$16 = null),
          (this.$17 = null),
          (this.$18 = null),
          (this.$19 = null),
          (this.$20 = null),
          (this.$21 = 0),
          (this.$22 = !1),
          (this.$23 = !1),
          (this.$24 = {}),
          (this.$25 = {}),
          (this.$26 = !1),
          (this.$27 = null),
          (this.$28 = {}),
          (this.$13 = null),
          (this.$31 = null),
          (this.$32 = null);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadSingleAssetPublisher",
  [
    "Promise",
    "VideoUploadGraphQLPostRequestManager",
    "VideoUploadPostRequestManager",
    "VideoUploadRequestContext",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      a.publish = function (b) {
        a.$1 == null && (a.$1 = new a());
        return a.$1.publish(b);
      };
      var d = a.prototype;
      d.publish = function (a) {
        var c = this;
        return new (b("Promise"))(function (b) {
          var d = c.$2(a.sessionSnapshot, a.assetSnapshot, a.postData),
            e,
            f = c.$3(a.postRequestManagerParams);
          f.hasAPISupport(a.postData) && (e = f);
          e == null && (e = c.$4(a.postRequestManagerParams));
          c.$5(e, b);
          e.sendRequest(d);
        });
      };
      d.$4 = function (a) {
        return new (c("VideoUploadPostRequestManager"))(
          a == null ? void 0 : a.chunk_post_uri,
          a == null ? void 0 : a.post_max_transport_retries,
          a == null ? void 0 : a.post_transport_retry_interval_base,
          a == null ? void 0 : a.post_max_server_retries,
          a == null ? void 0 : a.post_server_retry_interval_base
        );
      };
      d.$3 = function (a) {
        var b;
        return new (c("VideoUploadGraphQLPostRequestManager"))(
          (b = a == null ? void 0 : a.post_max_transport_retries) != null
            ? b
            : 0,
          (b = a == null ? void 0 : a.post_transport_retry_interval_base) !=
          null
            ? b
            : 0,
          (b = a == null ? void 0 : a.post_max_server_retries) != null ? b : 0,
          (b = a == null ? void 0 : a.post_server_retry_interval_base) != null
            ? b
            : 0
        );
      };
      d.$5 = function (a, b) {
        a.subscribe("request-finished", function (a, c) {
          a = { event: a, payload: c };
          b({ isSuccessful: !0, rawResponse: a });
        }),
          a.subscribe("request-failed", function (a, c) {
            a = { event: a, payload: c };
            var d =
              (c == null ? void 0 : c.error_code) == null ||
              (c == null ? void 0 : c.error_code) == 0
                ? "PublishError"
                : c == null
                ? void 0
                : c.error_code;
            b({
              isSuccessful: !1,
              errorCode: d,
              rawErrorObject: c == null ? void 0 : c.error_object,
              rawResponse: a,
            });
          });
      };
      d.$2 = function (a, b, d) {
        return new (c("VideoUploadRequestContext"))()
          .setVideoID(b.videoID)
          .setTargetID(b.request.attributes.targetID)
          .setSource(a.entryPoint.sourceType)
          .setWaterfallID(a.sessionID)
          .setCreatorProduct(b.request.attributes.creatorProduct)
          .setComposerEntryPointRef(a.entryPoint.entryPointRef)
          .setComposerDialogVersion(b.request.attributes.composerDialogVersion)
          .setHasFileBeenReplaced(
            (a = b.request.attributes.hasFileBeenReplaced) != null ? a : !1
          )
          .setSupportsChunking(!0)
          .setMetadata(d);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadClientResult",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "ACCEPTED",
      "SESSION_NOT_FOUND",
      "ASSET_NOT_FOUND",
      "ASSET_ALREADY_EXISTS",
      "SESSION_ALREADY_CANCELED",
      "SESSION_ALREADY_PUBLISHING",
      "SESSION_ALREADY_PUBLISHED",
      "SESSION_NOT_FAILED",
      "INVALID_TYPE",
      "UNSUPPORTED_BROWSER",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadClient",
  ["MediaUploadClientResult"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$4 = new Map()),
          (this.$1 = a.implementation),
          (this.$2 = a.sessionStrategy),
          (this.$3 = a.envParams),
          this.$1.subscribeToHooks(),
          this.$3.isSupported() ||
            this.$3.reportRecoverableError(
              "This browser does not support this version of the Media Upload SDK"
            );
      }
      var b = a.prototype;
      b.cancelSession = function (a, b) {
        if (!this.$3.isSupported())
          return c("MediaUploadClientResult").UNSUPPORTED_BROWSER;
        a = this.$4.get(a);
        return a == null
          ? c("MediaUploadClientResult").SESSION_NOT_FOUND
          : this.$2.cancel(a, b);
      };
      b.cleanSession = function (a) {
        return !this.$3.isSupported()
          ? c("MediaUploadClientResult").UNSUPPORTED_BROWSER
          : this.$4["delete"](a)
          ? c("MediaUploadClientResult").ACCEPTED
          : c("MediaUploadClientResult").SESSION_NOT_FOUND;
      };
      b.retrySession = function (a) {
        if (!this.$3.isSupported())
          return c("MediaUploadClientResult").UNSUPPORTED_BROWSER;
        a = this.$4.get(a);
        return a == null
          ? c("MediaUploadClientResult").SESSION_NOT_FOUND
          : this.$2.retry(a);
      };
      b.$5 = function (a) {
        var b = this.$4.get(a);
        b == null && ((b = this.$1.createSessionContext(a)), this.$4.set(a, b));
        return b;
      };
      b.updateSessionExtras = function (a, b) {
        if (!this.$3.isSupported())
          return c("MediaUploadClientResult").UNSUPPORTED_BROWSER;
        a = this.$5(a);
        return this.$2.updateSessionExtras(a, b, !1);
      };
      b.confirmSession = function (a, b, d) {
        if (!this.$3.isSupported())
          return c("MediaUploadClientResult").UNSUPPORTED_BROWSER;
        a = this.$5(a);
        if (d != null) {
          d = this.$2.updateSessionExtras(a, d, !0);
          if (d !== c("MediaUploadClientResult").ACCEPTED) return d;
        }
        d = this.$2.syncAssetUploads(a, b);
        return d !== c("MediaUploadClientResult").ACCEPTED
          ? d
          : this.$2.confirm(a);
      };
      b.startUploads = function (a, b) {
        if (!this.$3.isSupported()) {
          var d = {};
          b.forEach(function (a) {
            return (d[a.assetID] = c(
              "MediaUploadClientResult"
            ).UNSUPPORTED_BROWSER);
          });
          return d;
        }
        a = this.$5(a);
        return this.$2.uploadAssets(a, b);
      };
      b.removeUpload = function (a, b) {
        if (!this.$3.isSupported())
          return c("MediaUploadClientResult").UNSUPPORTED_BROWSER;
        a = this.$4.get(a);
        return a == null
          ? c("MediaUploadClientResult").SESSION_NOT_FOUND
          : this.$2.removeAsset(a, b);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBClient",
  ["MediaUploadClient"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        return a.call(this, b) || this;
      }
      return b;
    })(c("MediaUploadClient"));
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadAsset",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.mediaType = a.mediaType), (this.data = a.data);
      }
      var b = a.prototype;
      b.dataAsFile = function () {
        var a = this.data;
        if (a.mode === "File") return a;
        else return null;
      };
      b.dataAsHTMLInput = function () {
        var a = this.data;
        if (a.mode === "HTMLInput") return a;
        else return null;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadMediaType",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored(["VIDEO"]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadAssetFactory",
  ["MediaUploadAsset", "MediaUploadMediaType", "MediaUploadTime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      if (a == null) return null;
      else {
        a = /\.([^.]+)$/.exec(a);
        if (a == null || a.length < 2) return null;
        else return a[1];
      }
    }
    a = (function () {
      function a(a) {
        a = a.features;
        this.$1 = a;
      }
      var b = a.prototype;
      b.$2 = function (a) {
        return {
          mode: "File",
          file: a,
          lastModified: d("MediaUploadTime").millisecondsToTime(a.lastModified),
          name: a.name,
          size: a.size,
          mimeType: a.type,
          extension: h(a.name),
        };
      };
      b.$3 = function (a) {
        return {
          mode: "HTMLInput",
          inputElement: a,
          name: a.value,
          extension: h(a.value),
        };
      };
      b.createFromFile = function (a, b) {
        b === void 0 && (b = c("MediaUploadMediaType").VIDEO);
        return new (c("MediaUploadAsset"))({ mediaType: b, data: this.$2(a) });
      };
      b.createFromHTMLInput = function (a, b) {
        var d;
        b === void 0 && (b = c("MediaUploadMediaType").VIDEO);
        if (
          this.$1.supportFileFromHTML &&
          ((d = a.files) == null ? void 0 : d.length) > 0
        ) {
          d = a.files[0];
          d = this.$2(d);
        } else d = this.$3(a);
        return new (c("MediaUploadAsset"))({ mediaType: b, data: d });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadSDK",
  ["MediaUploadAssetFactory"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.currentTimeProvider = a.currentTimeProvider),
          (this.randomNumberProvider = a.randomNumberProvider),
          (this.randomStringProvider = a.randomStringProvider),
          (this.retryPolicyProvider = a.retryPolicyProvider),
          (this.promiseTerminator = a.promiseTerminator),
          (this.delayedExecutor = a.delayedExecutor),
          (this.reportRecoverableError = a.reportRecoverableError),
          (this.createThrowableError = a.createThrowableError),
          (this.features = a.featureDetector()),
          (this.registerUnloadHook = a.registerUnloadHook),
          (this.factories = {
            assets: new (c("MediaUploadAssetFactory"))(this),
          });
      }
      var b = a.prototype;
      b.isSupported = function () {
        return (
          this.features.supportFileManipulation &&
          this.features.supportFileFromHTML
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "mediaUploadFBRetryPolicyProvider",
  ["MediaUploadTime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      backoff: {
        initial: d("MediaUploadTime").millisecondsToTime(400),
        jitter: d("MediaUploadTime").millisecondsToTime(100),
        expBase: d("MediaUploadTime").millisecondsToTime(100),
        expMultiplier: 1.5,
        max: d("MediaUploadTime").secondsToTime(8),
      },
      limits: {
        totalRetryCount: 3e3,
        totalTime: d("MediaUploadTime").hoursToTime(6),
      },
    };
    function a() {
      return h;
    }
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBSDK",
  [
    "Banzai",
    "FBLogger",
    "MediaUploadSDK",
    "MediaUploadTime",
    "Random",
    "SubscriptionsHandler",
    "WaterfallIDGenerator",
    "clearTimeout",
    "fileSlice",
    "getErrorSafe",
    "mediaUploadFBRetryPolicyProvider",
    "promiseDone",
    "recoverableViolation",
    "setTimeout",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "media_upload";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return (
          a.call(this, {
            currentTimeProvider: function () {
              return d("MediaUploadTime").millisecondsToTime(Date.now());
            },
            randomNumberProvider: function (a, b) {
              return (b - a) * c("Random").random() + a;
            },
            randomStringProvider: function () {
              return d("WaterfallIDGenerator").generate();
            },
            retryPolicyProvider: c("mediaUploadFBRetryPolicyProvider"),
            promiseTerminator: function (a) {
              return c("promiseDone")(a);
            },
            delayedExecutor: function (a, b, e) {
              var f = c("setTimeout")(
                b,
                d("MediaUploadTime").timeToMilliseconds(a)
              );
              return {
                cancel: function () {
                  e != null && e(), c("clearTimeout")(f);
                },
              };
            },
            reportRecoverableError: function (a, b) {
              b != null
                ? c("FBLogger")(h).catching(c("getErrorSafe")(b)).mustfix(a)
                : c("recoverableViolation")(a, h);
            },
            createThrowableError: function (a) {
              throw c("unrecoverableViolation")(a, h);
            },
            featureDetector: function () {
              return {
                supportFileFromHTML: "FileList" in window,
                supportFileManipulation:
                  "FileReader" in window &&
                  "DataView" in window &&
                  "FormData" in window &&
                  typeof c("fileSlice") === "function",
              };
            },
            registerUnloadHook: function (a) {
              var b = new (c("SubscriptionsHandler"))();
              a = c("Banzai").subscribe(c("Banzai").SHUTDOWN, a);
              a != null
                ? b.addSubscriptions()
                : c("recoverableViolation")(
                    "Banzai did not return handle for unsubscribing from the unload hook; logging quality will be bad",
                    h
                  );
              return {
                cancel: function () {
                  try {
                    b.release();
                  } catch (a) {
                    c("FBLogger")(h)
                      .catching(c("getErrorSafe")(a))
                      .mustfix("Failed to unsubscribe from the unload hook");
                  }
                },
              };
            },
          }) || this
        );
      }
      return b;
    })(c("MediaUploadSDK"));
    b = new a();
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "MediaUploadSurface",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$1 = b), (this.sdk = a);
      }
      var b = a.prototype;
      b.isClientSupported = function (a) {
        a = this.$1.get(a.key);
        return a != null;
      };
      b.getClient = function (a) {
        var b = this.$1.get(a.key);
        if (b == null)
          throw this.sdk.createThrowableError(
            "Client configuration was not provided for the entry point " + a.key
          );
        else return b();
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadFBSurface",
  [
    "MediaUploadExtrasStorage",
    "MediaUploadFBAssetRequest",
    "MediaUploadSurface",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        return a.call(this, b, c) || this;
      }
      var d = b.prototype;
      d.createAssetRequest = function (a, b, d, e) {
        a = a(this.sdk.factories.assets);
        var f;
        e != null &&
          ((f = new (c("MediaUploadExtrasStorage"))(this.sdk)), e(f));
        typeof d === "function" ? (e = d(a)) : (e = d);
        return new (c("MediaUploadFBAssetRequest"))({
          asset: a,
          assetID: b,
          attributes: e,
          extras: f,
        });
      };
      return b;
    })(c("MediaUploadSurface"));
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadAssetStrategy",
  [
    "MediaUploadAssetEvent",
    "MediaUploadAssetStatus",
    "MediaUploadOperationOutcome",
    "MediaUploadPipeline",
    "Promise",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = a.implementation),
          (this.$2 = a.executor),
          (this.$3 = a.params);
      }
      var d = a.prototype;
      d.removeAsset = function (a) {
        a.updateStatusAndEmit(c("MediaUploadAssetStatus").REMOVED);
        (a = a.inFlightUpload) == null ? void 0 : a.cancel();
      };
      d.addAsset = function (a) {
        a.sessionContext.assetsByID.set(a.assetID, a),
          a.emitAssetEvent(c("MediaUploadAssetEvent").ASSET_ADDED);
      };
      d.scheduleUpload = function (a) {
        var b = this;
        a.updateStatusAndEmit(c("MediaUploadAssetStatus").SCHEDULED);
        return this.$2.schedule(function () {
          return b.$4(a);
        });
      };
      d.$4 = function (a) {
        var d = this;
        if (a.isRemoved()) return b("Promise").resolve();
        a.updateStatusAndEmit(c("MediaUploadAssetStatus").PROCESSING);
        var e = new (c("MediaUploadPipeline"))(this.$3);
        e.addCancelableStep(function () {
          return d.$1.runClientLazyLoading(a);
        });
        e.addCancelableStep(function () {
          return d.$1.runLocalAssetStategy(a);
        });
        e.addCancelableStep(function () {
          a.updateStatusAndEmit(c("MediaUploadAssetStatus").UPLOADING);
          return d.$1.runNetworkAssetStategy(a);
        });
        e = e.run();
        a.inFlightUpload = e;
        return e.promise
          .then(function (b) {
            return d.$5(a, b);
          })
          ["catch"](function (b) {
            d.$3.reportRecoverableError(
              "Unexpected failure during asset pipeline execution",
              b
            ),
              a.updateStatusAndEmit(c("MediaUploadAssetStatus").FAILED);
          });
      };
      d.$5 = function (a, b) {
        if (a.isRemoved()) return;
        switch (b) {
          case c("MediaUploadOperationOutcome").SUCCESS:
            a.updateStatusAndEmit(c("MediaUploadAssetStatus").COMPLETED);
            break;
          case c("MediaUploadOperationOutcome").CANCELED:
            a.updateStatusAndEmit(c("MediaUploadAssetStatus").REMOVED);
            break;
          default:
            a.updateStatusAndEmit(c("MediaUploadAssetStatus").FAILED);
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadRetryState",
  ["MediaUploadTime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.retryPolicy = a),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$1 = b.currentTimeProvider),
          (this.$2 = b.randomNumberProvider),
          (this.$5 = this.$1());
      }
      var b = a.prototype;
      b.resetBackoff = function () {
        this.$3 = 0;
      };
      b.getRetryAttempts = function () {
        return this.$4;
      };
      b.getRetryAttemptsSinceLastReset = function () {
        return this.$3;
      };
      b.calculateBackoffDelay = function () {
        var a = this.retryPolicy.backoff,
          b = d("MediaUploadTime").timeToMilliseconds(a.initial),
          c = a.expBase,
          e = a.expMultiplier;
        this.$3 > 0 &&
          c != null &&
          e != null &&
          (b +=
            d("MediaUploadTime").timeToMilliseconds(c) *
            Math.pow(e, this.$3 - 1));
        a.max != null &&
          (b = Math.min(b, d("MediaUploadTime").timeToMilliseconds(a.max)));
        c =
          a.jitter == null
            ? 0
            : d("MediaUploadTime").timeToMilliseconds(a.jitter);
        c > 0 && (b += this.$2(-0.5 * c, 0.5 * c));
        return d("MediaUploadTime").millisecondsToTime(Math.round(b));
      };
      b.exceedTotalRetries = function () {
        var a;
        return (
          ((a = this.retryPolicy.limits) == null
            ? void 0
            : a.totalRetryCount) != null &&
          this.$4 > this.retryPolicy.limits.totalRetryCount
        );
      };
      b.exceedTotalDuration = function () {
        var a;
        return (
          ((a = this.retryPolicy.limits) == null ? void 0 : a.totalTime) !=
            null &&
          d("MediaUploadTime").compareTime(
            (a = this.retryPolicy.limits) == null ? void 0 : a.totalTime,
            d("MediaUploadTime").subtractTime(this.$1(), this.$5)
          ) <= 0
        );
      };
      b.increaseRetryAttemptCounter = function () {
        this.$3++, this.$4++;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadCancelReason",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "USER_REQUEST",
      "NAVIGATION_AWAY",
      "UNLOAD_HOOK",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "MediaUploadSessionStrategy",
  [
    "MediaUploadCancelReason",
    "MediaUploadClientResult",
    "MediaUploadSessionEvent",
    "MediaUploadSessionStatus",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = a.implementation),
          (this.$2 = a.assetStrategy),
          (this.$3 = a.params);
      }
      var b = a.prototype;
      b.$4 = function (a) {
        if (a.isConfirmed() && a.progress.publishingExtrasProvided) {
          var b = a.getActiveAssets();
          for (
            var d = b,
              e = Array.isArray(d),
              f = 0,
              d = e
                ? d
                : d[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var g;
            if (e) {
              if (f >= d.length) break;
              g = d[f++];
            } else {
              f = d.next();
              if (f.done) break;
              g = f.value;
            }
            g = g;
            if (g.isFailed()) {
              a.updateStatusAndEmit(c("MediaUploadSessionStatus").FAILED);
              return;
            }
          }
          b.every(function (a) {
            return a.isCompleted();
          }) && this.$5(a);
        }
      };
      b.$5 = function (a) {
        a.updateStatusAndEmit(c("MediaUploadSessionStatus").PUBLISHING);
        var b = [];
        for (
          var d = a.assetsByID.values(),
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          g.isCompleted() && b.push(g);
        }
        g = this.$1
          .publish(a, b)
          .then(function (b) {
            (a.progress.publishingResponse = b.rawResponse),
              b.isSuccessful
                ? (a.emitSessionEvent(
                    c("MediaUploadSessionEvent").PUBLISH_SUCCEED
                  ),
                  a.updateStatusAndEmit(
                    c("MediaUploadSessionStatus").COMPLETED
                  ))
                : (a.updateLastError({
                    rawErrorCode: b.errorCode,
                    rawErrorObject: b.rawErrorObject,
                  }),
                  a.emitSessionEvent(
                    c("MediaUploadSessionEvent").PUBLISH_FAILED
                  ),
                  a.updateStatusAndEmit(c("MediaUploadSessionStatus").FAILED),
                  a.updateLastError());
          })
          ["catch"](function (b) {
            a.updateLastError({ rawErrorObject: b }),
              a.emitSessionEvent(c("MediaUploadSessionEvent").PUBLISH_FAILED),
              a.updateStatusAndEmit(c("MediaUploadSessionStatus").FAILED),
              a.updateLastError();
          });
        this.$3.promiseTerminator(g);
      };
      b.$6 = function (a, b) {
        var c = this;
        this.$2.scheduleUpload(b)["finally"](function () {
          return c.$4(a);
        });
      };
      b.$7 = function (a) {
        if (a.isPublished())
          return c("MediaUploadClientResult").SESSION_ALREADY_PUBLISHED;
        else if (a.isPublishing())
          return c("MediaUploadClientResult").SESSION_ALREADY_PUBLISHING;
        else if (a.isCanceled())
          return c("MediaUploadClientResult").SESSION_ALREADY_CANCELED;
        else return c("MediaUploadClientResult").ACCEPTED;
      };
      b.$8 = function (a) {
        var b = this;
        a.releaseOnFinish.push(
          this.$3.registerUnloadHook(function () {
            b.cancel(a, c("MediaUploadCancelReason").UNLOAD_HOOK);
          })
        );
        a.updateStatusAndEmit(c("MediaUploadSessionStatus").CONFIRMED);
      };
      b.cancel = function (a, b) {
        var d = this.$7(a);
        if (d !== c("MediaUploadClientResult").ACCEPTED) return d;
        a.progress.cancelReason = b;
        a.updateStatusAndEmit(c("MediaUploadSessionStatus").CANCELED);
        for (
          var d = a.assetsByID.values(),
            b = Array.isArray(d),
            a = 0,
            d = b
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (b) {
            if (a >= d.length) break;
            e = d[a++];
          } else {
            a = d.next();
            if (a.done) break;
            e = a.value;
          }
          e = e;
          this.$2.removeAsset(e);
        }
        return c("MediaUploadClientResult").ACCEPTED;
      };
      b.removeAsset = function (a, b) {
        var d = this.$7(a);
        if (d !== c("MediaUploadClientResult").ACCEPTED) return d;
        d = a.assetsByID.get(b);
        if (d == null) return c("MediaUploadClientResult").ASSET_NOT_FOUND;
        this.$2.removeAsset(d);
        this.$4(a);
        return c("MediaUploadClientResult").ACCEPTED;
      };
      b.uploadAsset = function (a, b) {
        var d = this.$7(a);
        if (d !== c("MediaUploadClientResult").ACCEPTED) return d;
        d = a.assetsByID.get(b.assetID);
        if (d != null && !d.isRemoved())
          return c("MediaUploadClientResult").ASSET_ALREADY_EXISTS;
        d = this.$1.createAssetContext(a, b);
        this.$2.addAsset(d);
        this.$6(a, d);
        return c("MediaUploadClientResult").ACCEPTED;
      };
      b.syncAssetUploads = function (a, b) {
        var d = this.$7(a);
        if (d !== c("MediaUploadClientResult").ACCEPTED) return d;
        d = new Set(
          b.map(function (a) {
            return a.assetID;
          })
        );
        var e = new Set(a.assetsByID.keys());
        for (var f in e)
          if (!d.has(f)) {
            e = a.assetsByID.get(f);
            e != null && this.$2.removeAsset(e);
          }
        this.uploadAssets(a, b);
        return c("MediaUploadClientResult").ACCEPTED;
      };
      b.uploadAssets = function (a, b) {
        var c = this,
          d = {};
        b.forEach(function (b) {
          return (d[b.assetID] = c.uploadAsset(a, b));
        });
        return d;
      };
      b.updateSessionExtras = function (a, b, d) {
        var e = this.$7(a);
        if (e !== c("MediaUploadClientResult").ACCEPTED) return e;
        b(a.extras);
        d && (a.progress.publishingExtrasProvided = !0);
        return c("MediaUploadClientResult").ACCEPTED;
      };
      b.retry = function (a) {
        var b = this.$7(a);
        if (b !== c("MediaUploadClientResult").ACCEPTED) return b;
        else if (!a.isFailed())
          return c("MediaUploadClientResult").SESSION_NOT_FAILED;
        a.renewRetryID();
        this.$8(a);
        for (
          var b = a.assetsByID.values(),
            d = Array.isArray(b),
            e = 0,
            b = d
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
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
          f.isSchedulable() && this.$6(a, f);
        }
        this.$4(a);
        return c("MediaUploadClientResult").ACCEPTED;
      };
      b.confirm = function (a) {
        var b = this.$7(a);
        if (b !== c("MediaUploadClientResult").ACCEPTED) return b;
        else if (a.isFailed()) return this.retry(a);
        else if (a.isConfirmed()) {
          this.$4(a);
          return c("MediaUploadClientResult").ACCEPTED;
        }
        this.$8(a);
        this.$4(a);
        return c("MediaUploadClientResult").ACCEPTED;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadClientContext",
  [
    "MediaUploadAssetStrategy",
    "MediaUploadRetryState",
    "MediaUploadSessionStrategy",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.sdk = a.sdk),
          (this.emitter = a.emitter),
          (this.executor = a.executor),
          (this.progressCalculator = a.progressCalculator),
          (this.assetStrategy = new (c("MediaUploadAssetStrategy"))({
            implementation: this,
            executor: this.executor,
            params: this.sdk,
          })),
          (this.sessionStrategy = new (c("MediaUploadSessionStrategy"))({
            implementation: this,
            assetStrategy: this.assetStrategy,
            params: this.sdk,
          }));
      }
      var b = a.prototype;
      b.runLocalAssetStategy = function (a) {
        throw this.sdk.createThrowableError("Not implemented");
      };
      b.runNetworkAssetStategy = function (a) {
        throw this.sdk.createThrowableError("Not implemented");
      };
      b.runClientLazyLoading = function (a) {
        throw this.sdk.createThrowableError("Not implemented");
      };
      b.createSessionContext = function (a) {
        throw this.sdk.createThrowableError("Not implemented");
      };
      b.createAssetContext = function (a, b) {
        throw this.sdk.createThrowableError("Not implemented");
      };
      b.publish = function (a, b) {
        throw this.sdk.createThrowableError("Not implemented");
      };
      b.subscribeToHooks = function () {
        throw this.sdk.createThrowableError("Not implemented");
      };
      b.createRetryState = function () {
        return new (c("MediaUploadRetryState"))(
          this.sdk.retryPolicyProvider(),
          this.sdk
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadExecutor",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        a === void 0 && (a = 1), (this.$1 = []), (this.$3 = 0), (this.$2 = a);
      }
      var c = a.prototype;
      c.schedule = function (a) {
        var c = this;
        return new (b("Promise"))(function (b) {
          var d = function () {
            var c = a();
            c["finally"](b);
            return c;
          };
          c.$1.push(d);
          c.$4();
        });
      };
      c.$4 = function () {
        var a = this;
        if (this.$3 >= this.$2) return;
        var b = this.$1.shift();
        b()["finally"](function () {
          a.$3--, a.$4();
        });
        this.$3++;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadFBDefaultServerConfigurationRetriever",
  [
    "MediaUploadCancelablePromise",
    "MediaUploadClientEvent",
    "MediaUploadFBClientEventContext",
    "MediaUploadFBDefaultServerConfigurationRetrieverQuery.graphql",
    "MediaUploadOperationOutcome",
    "MediaUploadTime",
    "RelayFBEnvironment",
    "RelayHooks",
    "URI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              "MediaUploadFBDefaultServerConfigurationRetrieverQuery.graphql"
            )),
      j = {
        metadataValidation: {
          minSizeKB: 1,
          maxSizeKB: 10 * 1024 * 1024,
          minDuration: d("MediaUploadTime").secondsToTime(1),
          maxDuration: d("MediaUploadTime").hoursToTime(24),
          minWidth: 100,
          minHeight: 100,
          minAspectRatio: 0.5,
          maxAspectRatio: 4,
          extensions: new Set([
            "3g2",
            "3gp",
            "3gpp",
            "asf",
            "avi",
            "dat",
            "divx",
            "dv",
            "f4v",
            "flv",
            "gif",
            "m2ts",
            "m4v",
            "mkv",
            "mod",
            "mov",
            "mp4",
            "mpe",
            "mpeg",
            "mpeg4",
            "mpg",
            "mts",
            "nsv",
            "ogm",
            "ogv",
            "qt",
            "rmvb",
            "tmp",
            "tod",
            "ts",
            "vob",
            "webm",
            "wmv",
          ]),
          acceptDimensionsFromPlayer: !1,
        },
        startRequest: {
          baseURI: new (c("URI"))(
            "https://vupload-edge.facebook.com/ajax/video/upload/requests/start/"
          ),
        },
        receiveRequest: {
          baseURI: new (c("URI"))(
            "https://vupload-edge.facebook.com/ajax/video/upload/requests/receive/"
          ),
        },
        uploadService: {
          defaultService: {
            serviceName: "rupload",
            serviceDomain: "facebook.com",
          },
          targetedService: null,
          tracing: { enabled: !1, minFileSizeKB: 102400 },
        },
        networkMonitor: {
          networkProbe: { enabled: !0 },
          internetProbe: {
            enabled: !1,
            timeout: d("MediaUploadTime").secondsToTime(2),
            backoffPolicy: {
              backoff: {
                initial: d("MediaUploadTime").secondsToTime(10),
                jitter: d("MediaUploadTime").secondsToTime(0),
                expBase: d("MediaUploadTime").secondsToTime(1),
                expMultiplier: 2,
                max: d("MediaUploadTime").secondsToTime(60),
              },
              limits: {},
            },
          },
          stallDetector: {
            enabled: !1,
            timeout: d("MediaUploadTime").secondsToTime(30),
          },
        },
      };
    a = (function () {
      function a(a) {
        (this.$5 = !0),
          (this.$1 = a.entryPoint),
          (this.$3 = a.emitter),
          (this.$2 = a.setters),
          (this.$4 = a.envParams);
      }
      var b = a.prototype;
      b.$6 = function () {
        return d("RelayHooks").fetchQuery(c("RelayFBEnvironment"), i, {
          source_type: this.$1.sourceType,
        });
      };
      b.run = function (a) {
        var b = this,
          d = new (c("MediaUploadFBClientEventContext"))({
            entryPoint: this.$1,
            envParams: this.$4,
            context: a,
          });
        if (this.$5) {
          this.$3.emitClientEvent(
            c("MediaUploadClientEvent").CLIENT_CONFIG_REQUESTED,
            d
          );
          return new (c("MediaUploadCancelablePromise"))(function (a) {
            try {
              var e = b.$6().subscribe({
                error: (function (a) {
                  function b(b) {
                    return a.apply(this, arguments);
                  }
                  b.toString = function () {
                    return a.toString();
                  };
                  return b;
                })(function (e) {
                  b.$4.reportRecoverableError(
                    "Error getting client configuration",
                    e
                  ),
                    b.$3.emitClientEvent(
                      c("MediaUploadClientEvent").CLIENT_CONFIG_FAILED,
                      d
                    ),
                    b.$7(null),
                    a(c("MediaUploadOperationOutcome").SUCCESS);
                }),
                next: function (e) {
                  b.$3.emitClientEvent(
                    c("MediaUploadClientEvent").CLIENT_CONFIG_RECEIVED,
                    d
                  ),
                    b.$7(e),
                    (b.$5 = !1),
                    a(c("MediaUploadOperationOutcome").SUCCESS);
                },
              });
              return {
                cancel: function () {
                  e.unsubscribe();
                },
              };
            } catch (e) {
              b.$4.reportRecoverableError(
                "Error requesting client configuration",
                e
              ),
                b.$7(null),
                b.$3.emitClientEvent(
                  c("MediaUploadClientEvent").CLIENT_CONFIG_FAILED,
                  d
                ),
                a(c("MediaUploadOperationOutcome").SUCCESS);
            }
          });
        } else {
          this.$3.emitClientEvent(
            c("MediaUploadClientEvent").CLIENT_CONFIG_CACHED,
            d
          );
          return c("MediaUploadCancelablePromise").resolve(
            c("MediaUploadOperationOutcome").SUCCESS
          );
        }
      };
      b.$8 = function (a) {
        var b, c;
        if (
          (a == null
            ? void 0
            : (b = a["default"]) == null
            ? void 0
            : b.service_name) == null ||
          (a == null
            ? void 0
            : (b = a["default"]) == null
            ? void 0
            : b.service_domain) == null
        )
          this.$4.reportRecoverableError(
            "Invalid configuration for default endpoint of the Upload Service, falling back to default"
          ),
            (b = j.uploadService.defaultService);
        else {
          var d;
          b = {
            serviceName:
              a == null
                ? void 0
                : (d = a["default"]) == null
                ? void 0
                : d.service_name,
            serviceDomain:
              a == null
                ? void 0
                : (d = a["default"]) == null
                ? void 0
                : d.service_domain,
          };
        }
        if (
          (a == null
            ? void 0
            : (d = a.targeted) == null
            ? void 0
            : d.service_name) != null &&
          (a == null
            ? void 0
            : (d = a.targeted) == null
            ? void 0
            : d.service_domain) != null
        ) {
          d = {
            serviceName:
              a == null
                ? void 0
                : (d = a.targeted) == null
                ? void 0
                : d.service_name,
            serviceDomain:
              a == null
                ? void 0
                : (d = a.targeted) == null
                ? void 0
                : d.service_domain,
          };
        } else
          (a == null ? void 0 : a.targeted) == null
            ? (d = null)
            : (this.$4.reportRecoverableError(
                "Invalid configuration for target endpoint of the Upload Service, falling back to default"
              ),
              (d = j.uploadService.targetedService));
        if (
          (a == null ? void 0 : (c = a.tracing) == null ? void 0 : c.enabled) !=
            null &&
          (a == null
            ? void 0
            : (c = a.tracing) == null
            ? void 0
            : c.min_file_size_kb) != null
        ) {
          a = {
            enabled:
              a == null ? void 0 : (c = a.tracing) == null ? void 0 : c.enabled,
            minFileSizeKB:
              a == null
                ? void 0
                : (c = a.tracing) == null
                ? void 0
                : c.min_file_size_kb,
          };
        } else
          this.$4.reportRecoverableError(
            "Invalid configuration for tracing in the Upload Service, falling back to default"
          ),
            (a = j.uploadService.tracing);
        this.$2.uploadService({
          defaultService: b,
          targetedService: d,
          tracing: a,
        });
      };
      b.$9 = function (a) {
        var b;
        if (
          (a == null ? void 0 : a.min_size_kb) == null ||
          (a == null ? void 0 : a.max_size_kb) == null ||
          (a == null ? void 0 : a.min_width) == null ||
          (a == null ? void 0 : a.min_height) == null ||
          (a == null ? void 0 : a.min_duration_secs) == null ||
          (a == null ? void 0 : a.max_duration_secs) == null ||
          (a == null ? void 0 : a.min_aspect_ration) == null ||
          (a == null ? void 0 : a.max_aspect_ration) == null ||
          (a == null ? void 0 : a.allowed_extensions) == null ||
          (a == null ? void 0 : a.accept_dimensions_from_player) == null
        )
          this.$4.reportRecoverableError(
            "Invalid metadata validation, falling back to default"
          ),
            (b = babelHelpers["extends"](
              { sourceType: this.$1.sourceType },
              j.metadataValidation
            ));
        else {
          var c = a == null ? void 0 : a.max_duration_secs;
          b = {
            sourceType: this.$1.sourceType,
            minSizeKB: a == null ? void 0 : a.min_size_kb,
            maxSizeKB: a == null ? void 0 : a.max_size_kb,
            minWidth: a == null ? void 0 : a.min_width,
            minHeight: a == null ? void 0 : a.min_height,
            minAspectRatio: a == null ? void 0 : a.min_aspect_ration,
            maxAspectRatio: a == null ? void 0 : a.max_aspect_ration,
            extensions: new Set(a == null ? void 0 : a.allowed_extensions),
            acceptDimensionsFromPlayer:
              a == null ? void 0 : a.accept_dimensions_from_player,
            minDuration: d("MediaUploadTime").secondsToTime(
              a == null ? void 0 : a.min_duration_secs
            ),
            maxDuration: d("MediaUploadTime").secondsToTime(c),
          };
        }
        this.$2.metadataValidation(b);
      };
      b.$10 = function (a) {
        return (a == null ? void 0 : a.backoff_initial_ms) == null
          ? null
          : {
              backoff: {
                initial: d("MediaUploadTime").millisecondsToTime(
                  a == null ? void 0 : a.backoff_initial_ms
                ),
                jitter:
                  (a == null ? void 0 : a.backoff_jitter_ms) == null
                    ? null
                    : d("MediaUploadTime").millisecondsToTime(
                        a == null ? void 0 : a.backoff_jitter_ms
                      ),
                expBase:
                  (a == null ? void 0 : a.backoff_exp_base_ms) == null
                    ? null
                    : d("MediaUploadTime").millisecondsToTime(
                        a == null ? void 0 : a.backoff_exp_base_ms
                      ),
                expMultiplier: a == null ? void 0 : a.backoff_exp_multiplier,
                max:
                  (a == null ? void 0 : a.backoff_max_ms) == null
                    ? null
                    : d("MediaUploadTime").millisecondsToTime(
                        a == null ? void 0 : a.backoff_max_ms
                      ),
              },
              limits: {
                totalRetryCount:
                  a == null ? void 0 : a.limits_total_retry_count,
                totalTime:
                  (a == null ? void 0 : a.limits_total_time_ms) == null
                    ? null
                    : d("MediaUploadTime").millisecondsToTime(
                        a == null ? void 0 : a.limits_total_time_ms
                      ),
              },
            };
      };
      b.$11 = function (a) {
        var b,
          c = this.$10(a == null ? void 0 : a.internet_probe_backoff);
        if (
          (a == null ? void 0 : a.network_probe_enabled) == null ||
          (a == null ? void 0 : a.internet_probe_enabled) == null ||
          (a == null ? void 0 : a.internet_probe_timeout_ms) == null ||
          c == null ||
          (a == null ? void 0 : a.stall_detection_enabled) == null ||
          (a == null ? void 0 : a.stall_detection_timeout_ms) == null
        )
          this.$4.reportRecoverableError(
            "Invalid network monitor configuration, falling back to default"
          ),
            (b = j.networkMonitor);
        else {
          var e = a.network_probe_enabled,
            f = a.internet_probe_enabled,
            g = a.internet_probe_timeout_ms,
            h = a.stall_detection_enabled;
          a = a.stall_detection_timeout_ms;
          b = {
            networkProbe: { enabled: e },
            internetProbe: {
              enabled: f,
              timeout: d("MediaUploadTime").millisecondsToTime(g),
              backoffPolicy: c,
            },
            stallDetector: {
              enabled: h,
              timeout: d("MediaUploadTime").millisecondsToTime(a),
            },
          };
        }
        this.$2.networkMonitor(b);
      };
      b.$12 = function (a) {
        var b;
        (a == null ? void 0 : a.uri) == null
          ? (this.$4.reportRecoverableError(
              "Invalid metadata validation, falling back to default"
            ),
            (b = j.startRequest))
          : (b = { baseURI: new (c("URI"))(a == null ? void 0 : a.uri) });
        this.$2.startRequest(b);
      };
      b.$13 = function (a) {
        var b;
        (a == null ? void 0 : a.uri) == null
          ? (this.$4.reportRecoverableError(
              "Invalid metadata validation, falling back to default"
            ),
            (b = j.receiveRequest))
          : (b = { baseURI: new (c("URI"))(a == null ? void 0 : a.uri) });
        this.$2.receiveRequest(b);
      };
      b.$7 = function (a) {
        var b;
        this.$12(
          a == null
            ? void 0
            : (b = a.media_upload_config) == null
            ? void 0
            : b.network_start
        );
        this.$13(
          a == null
            ? void 0
            : (b = a.media_upload_config) == null
            ? void 0
            : b.network_receive
        );
        this.$8(
          a == null
            ? void 0
            : (b = a.media_upload_config) == null
            ? void 0
            : b.network_upload_service
        );
        this.$9(
          a == null
            ? void 0
            : (b = a.media_upload_config) == null
            ? void 0
            : b.video_metadata_validation
        );
        this.$11(
          a == null
            ? void 0
            : (b = a.media_upload_config) == null
            ? void 0
            : b.network_monitor
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadLinearProgressCalculator",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = a),
          (this.$2 = this.$4()),
          (this.$3 =
            this.$1.sessionWeights.assets + this.$1.sessionWeights.publishing);
      }
      var b = a.prototype;
      b.$4 = function () {
        var a = this.$1.assetWeights.uploadBytes;
        this.$1.assetWeights.singleOperations.forEach(function (b) {
          return (a += b);
        });
        return a;
      };
      b.$5 = function (a, b) {
        a =
          Math.floor((a * 100) / this.$1.percentagePrecision) *
          this.$1.percentagePrecision;
        b = Math.abs(a - b) >= this.$1.percentagePrecision;
        return { percentageProgress: a, isDifferent: b };
      };
      b.calculateAssetProgress = function (a) {
        var b = this.$1.assetWeights,
          c = 0;
        if (a.isCompleted()) c = 1;
        else {
          for (
            var d = a.progress.completedStages.values(),
              e = Array.isArray(d),
              f = 0,
              d = e
                ? d
                : d[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var g;
            if (e) {
              if (f >= d.length) break;
              g = d[f++];
            } else {
              f = d.next();
              if (f.done) break;
              g = f.value;
            }
            g = g;
            g = b.singleOperations.get(g);
            g != null && (c += g);
          }
          g = a.uploadSummary.computeUploadedPortion();
          g != null && (c += b.uploadBytes * g);
          c /= this.$2;
        }
        f = this.$5(c, a.progress.calculated.percentageComplete);
        a.progress.calculated.rawValue = c;
        a.progress.calculated.percentageComplete = f.percentageProgress;
        a.progress.calculated.rawValue = c;
        return f.isDifferent;
      };
      b.calculateSessionProgress = function (a) {
        var b = this.$1.sessionWeights,
          c = 0;
        a.progress.publishingDone && (c += b.publishing);
        var d = a.getActiveAssets();
        if (d.length > 0) {
          var e = b.assets / d.length;
          a.getActiveAssets().forEach(function (a) {
            c += e * a.progress.calculated.rawValue;
          });
        } else c += b.assets;
        c /= this.$3;
        d = this.$5(c, a.progress.percentageComplete);
        a.progress.percentageComplete = d.percentageProgress;
        return d.isDifferent;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadNetworkMonitor",
  [
    "MediaUploadAssetEvent",
    "MediaUploadClientEvent",
    "MediaUploadNetworkStatus",
    "MediaUploadRetryState",
    "Promise",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        probe: function () {
          return c("MediaUploadNetworkStatus").UNKNOWN;
        },
      },
      i = {
        probe: function () {
          return b("Promise").resolve(c("MediaUploadNetworkStatus").UNKNOWN);
        },
      };
    a = (function () {
      function a(a, b) {
        (this.$1 = a),
          (this.$3 = h),
          (this.$2 = i),
          (this.$4 = c("MediaUploadNetworkStatus").UNKNOWN),
          (this.$5 = new Map()),
          (this.$6 = null),
          (this.$8 = null),
          (this.$9 = b.emitClientEvent);
      }
      var b = a.prototype;
      b.updateConfiguration = function (a) {
        var b;
        this.$3 = (b = a.networkProbe) != null ? b : h;
        this.$2 = (b = a.internetProbe) != null ? b : i;
        this.$7 =
          a.internetProbeBackoffPolicy == null
            ? null
            : new (c("MediaUploadRetryState"))(
                a.internetProbeBackoffPolicy,
                this.$1
              );
        this.$8 = a.stallDetectorTimeout;
        this.$10();
      };
      b.getNetworkStatus = function () {
        return this.$3.probe();
      };
      b.getInternetStatus = function () {
        return this.$4;
      };
      b.$11 = function (a, b) {
        return a.sessionContext.sessionID + "/" + a.assetID + "/" + String(b);
      };
      b.$12 = function (a, b, d) {
        var e;
        this.$13(c("MediaUploadNetworkStatus").CONNECTED);
        (e = this.$7) == null ? void 0 : e.resetBackoff();
        (e = this.$6) == null ? void 0 : e.cancel();
        this.$6 = null;
        e = this.$11(a, b);
        d && this.$5.set(e, { assetContext: a });
        this.$10();
        this.$14(e);
      };
      b.$15 = function (a, b) {
        a = this.$11(a, b);
        b = this.$5.get(a);
        if (b != null) {
          var c;
          (c = b.stallDetector) == null ? void 0 : c.cancel();
          b.stallDetector = null;
        }
        this.$5["delete"](a);
      };
      b.$14 = function (a) {
        var b = this.$8;
        if (b == null) return;
        var d = this.$5.get(a);
        if (d == null) return;
        (a = d.stallDetector) == null ? void 0 : a.cancel();
        d.stallDetector = this.$1.delayedExecutor(b, function () {
          d.assetContext.emitAssetEvent(c("MediaUploadAssetEvent").ASSET_STALL),
            (d.stallDetector = null);
        });
      };
      b.$10 = function () {
        var a = this,
          b = this.$7;
        if (b == null) return;
        if (this.$5.size === 0) return;
        if (this.$6 != null) return;
        this.$6 = this.$1.delayedExecutor(
          b.calculateBackoffDelay(),
          function () {
            var b = a.$2
              .probe()
              .then(function (b) {
                return a.$13(b);
              })
              ["finally"](function () {
                (a.$6 = null), a.$10();
              });
            a.$1.promiseTerminator(b);
          }
        );
        b.increaseRetryAttemptCounter();
      };
      b.$13 = function (a) {
        if (this.$4 === a) return;
        this.$4 = a;
        switch (this.$4) {
          case c("MediaUploadNetworkStatus").CONNECTED:
            this.$9(c("MediaUploadClientEvent").CLIENT_INTERNET_ONLINE);
            break;
          case c("MediaUploadNetworkStatus").DISCONNECTED:
            this.$9(c("MediaUploadClientEvent").CLIENT_INTERNET_OFFLINE);
            break;
          case c("MediaUploadNetworkStatus").TIMEOUT:
            this.$9(c("MediaUploadClientEvent").CLIENT_INTERNET_UNKNOWN);
            break;
          case c("MediaUploadNetworkStatus").UNKNOWN:
        }
      };
      b.notifyOnNewRequest = function (a, b) {
        this.$12(a, b, !0);
      };
      b.notifyOnProgress = function (a, b) {
        this.$12(a, b, !1);
      };
      b.notifyOnAbandon = function (a, b) {
        this.$15(a, b);
      };
      b.notifyOnTransportError = function (a, b) {
        this.$15(a, b);
      };
      b.notifyOnResponse = function (a, b) {
        this.$15(a, b), this.$12(a, b, !1);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadFBDefaultClientContext",
  [
    "MediaUploadBanzaiLogger",
    "MediaUploadClientContext",
    "MediaUploadClientEvent",
    "MediaUploadEventEmitterAdapter",
    "MediaUploadExecutor",
    "MediaUploadFBAssetContext",
    "MediaUploadFBAssetRequest",
    "MediaUploadFBClient",
    "MediaUploadFBClientEventContext",
    "MediaUploadFBDefaultServerConfigurationRetriever",
    "MediaUploadFBFileHasher",
    "MediaUploadFBInternetProbe",
    "MediaUploadFBLocalAssetStrategy",
    "MediaUploadFBMetadataParser",
    "MediaUploadFBMetadataValidator",
    "MediaUploadFBNetworkAssetStrategy",
    "MediaUploadFBNetworkProbe",
    "MediaUploadFBReceiveRequest",
    "MediaUploadFBSessionContext",
    "MediaUploadFBStage",
    "MediaUploadFBStartRequest",
    "MediaUploadFBUploadServiceRequest",
    "MediaUploadLinearProgressCalculator",
    "MediaUploadNetworkMonitor",
    "cr:1856704",
    "mediaUploadLogStackTrace",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(d, a);
      function d(b, d, e) {
        var f,
          g = new (c("MediaUploadEventEmitterAdapter"))(b);
        f =
          a.call(this, {
            sdk: b,
            emitter: g.emitter,
            executor: new (c("MediaUploadExecutor"))(),
            progressCalculator: new (c("MediaUploadLinearProgressCalculator"))({
              assetWeights: {
                uploadBytes: 0.9,
                singleOperations: new Map([
                  [c("MediaUploadFBStage").START_REQUEST, 0.05],
                  [c("MediaUploadFBStage").RECEIVE_REQUEST, 0.05],
                ]),
              },
              sessionWeights: { publishing: 0.1, assets: 0.9 },
              percentagePrecision: 1,
            }),
          }) || this;
        f.entryPoint = d;
        f.eventAdapter = g;
        f.configuration = e;
        f.networkMonitor = new (c("MediaUploadNetworkMonitor"))(f.sdk, {
          emitClientEvent: function (a) {
            return g.emitter.emitClientEvent(
              a,
              new (c("MediaUploadFBClientEventContext"))({
                entryPoint: d,
                envParams: b,
              })
            );
          },
        });
        f.localAssetStategy = f.$MediaUploadFBDefaultClientContext1();
        f.networkAssetStategy = f.$MediaUploadFBDefaultClientContext2();
        f.serverConfigurationRetriever = new (c(
          "MediaUploadFBDefaultServerConfigurationRetriever"
        ))({
          entryPoint: d,
          emitter: f.emitter,
          setters: {
            metadataValidation: function (a) {
              f.localAssetStategy.metadataValidator.configuration = a;
            },
            startRequest: function (a) {
              f.networkAssetStategy.startRequest.configuration = a;
            },
            receiveRequest: function (a) {
              f.networkAssetStategy.receiveRequest.configuration = a;
            },
            uploadService: function (a) {
              f.networkAssetStategy.uploadServiceRequest.configuration = a;
            },
            networkMonitor: function (a) {
              f.networkMonitor.updateConfiguration({
                networkProbe: a.networkProbe.enabled
                  ? new (c("MediaUploadFBNetworkProbe"))()
                  : null,
                internetProbe: a.internetProbe.enabled
                  ? new (c("MediaUploadFBInternetProbe"))(
                      { timeout: a.internetProbe.timeout },
                      f.sdk
                    )
                  : null,
                internetProbeBackoffPolicy: a.internetProbe.backoffPolicy,
                stallDetectorTimeout: a.stallDetector.enabled
                  ? a.stallDetector.timeout
                  : null,
              });
            },
          },
          envParams: f.sdk,
        });
        f.client = new (c("MediaUploadFBClient"))({
          implementation: babelHelpers.assertThisInitialized(f),
          sessionStrategy: f.sessionStrategy,
          envParams: f.sdk,
        });
        f.emitter.emitClientEvent(
          c("MediaUploadClientEvent").CLIENT_CREATED,
          new (c("MediaUploadFBClientEventContext"))({
            entryPoint: d,
            envParams: f.sdk,
          })
        );
        return f;
      }
      var e = d.prototype;
      e.$MediaUploadFBDefaultClientContext1 = function () {
        return new (c("MediaUploadFBLocalAssetStrategy"))({
          envParams: this.sdk,
          metadataParser: new (c("MediaUploadFBMetadataParser"))(),
          metadataValidator: new (c("MediaUploadFBMetadataValidator"))(
            this.sdk
          ),
          fileHasher: new (c("MediaUploadFBFileHasher"))({
            pseudoHasher:
              b("cr:1856704") == null
                ? void 0
                : new (b("cr:1856704"))(
                    {
                      maxChunkSize: 1024 * 1024,
                      takeFirstBytes: 100 * 1024,
                      hashingAlgorithm: "sha256",
                      outputEncoding: "base64",
                    },
                    this.sdk
                  ),
          }),
        });
      };
      e.$MediaUploadFBDefaultClientContext2 = function () {
        var a, b;
        a = new (c("MediaUploadFBStartRequest"))({
          entryPoint: this.entryPoint,
          payloadHook:
            (a = this.configuration.networkHooks) == null
              ? void 0
              : a.startRequestPayload,
          customHeadersHook:
            (a = this.configuration.networkHooks) == null
              ? void 0
              : a.startRequestCustomHeaders,
          envParams: this.sdk,
          networkNotifier: this.networkMonitor,
        });
        var d = new (c("MediaUploadFBUploadServiceRequest"))({
          envParams: this.sdk,
          networkNotifier: this.networkMonitor,
        });
        b = new (c("MediaUploadFBReceiveRequest"))({
          entryPoint: this.entryPoint,
          payloadHook:
            (b = this.configuration.networkHooks) == null
              ? void 0
              : b.receiveRequestPayload,
          customHeadersHook:
            (b = this.configuration.networkHooks) == null
              ? void 0
              : b.receiveRequestCustomHeaders,
          envParams: this.sdk,
          networkNotifier: this.networkMonitor,
        });
        return new (c("MediaUploadFBNetworkAssetStrategy"))(this.sdk, a, d, b);
      };
      e.runClientLazyLoading = function (a) {
        return this.serverConfigurationRetriever.run(
          c("MediaUploadFBAssetContext").castOrThrow(a, this.sdk)
        );
      };
      e.runLocalAssetStategy = function (a) {
        return this.localAssetStategy.run(
          c("MediaUploadFBAssetContext").castOrThrow(a, this.sdk)
        );
      };
      e.runNetworkAssetStategy = function (a) {
        return this.networkAssetStategy.run(
          c("MediaUploadFBAssetContext").castOrThrow(a, this.sdk)
        );
      };
      e.createSessionContext = function (a) {
        c("mediaUploadLogStackTrace")({
          waterfallID: a,
          sourceType: this.entryPoint.sourceType,
          composerEntryPointRef: this.entryPoint.entryPointRef,
          applicationState: "www_v2",
        });
        return new (c("MediaUploadFBSessionContext"))({
          sessionID: a,
          entryPoint: this.entryPoint,
          emitter: this.emitter,
          progressCalculator: this.progressCalculator,
          params: this.sdk,
        });
      };
      e.createAssetContext = function (a, b) {
        return new (c("MediaUploadFBAssetContext"))({
          sessionContext: c("MediaUploadFBSessionContext").castOrThrow(
            a,
            this.sdk
          ),
          assetRequest: c("MediaUploadFBAssetRequest").castOrThrow(b, this.sdk),
          emitter: this.emitter,
          progressCalculator: this.progressCalculator,
          retryState: this.createRetryState(),
          params: this.sdk,
        });
      };
      e.publish = function (a, b) {
        var d = this;
        a = c("MediaUploadFBSessionContext")
          .castOrThrow(a, this.sdk)
          .composeSnapshot();
        b = b.map(function (a) {
          return c("MediaUploadFBAssetContext")
            .castOrThrow(a, d.sdk)
            .composeSnapshot();
        });
        return this.configuration.eventHooks.publishCallback(a, b);
      };
      e.subscribeToHooks = function () {
        var a = this,
          b = new (c("MediaUploadBanzaiLogger"))(this.sdk, {
            injectNetworkStatus: this.networkMonitor,
            injectExtraSessionFields: function () {
              return {
                composer_dialog_version: a.configuration.composerDialogVersion,
              };
            },
          });
        b.subscribe(this.eventAdapter.subscriber, this.entryPoint);
        this.configuration.eventHooks.eventSubscriber != null &&
          this.configuration.eventHooks.eventSubscriber(
            this.eventAdapter.subscriber
          );
      };
      return d;
    })(c("MediaUploadClientContext"));
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadSurfaceDefinition",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = a), (this.$2 = new Map()), (this.$3 = new Map());
      }
      var b = a.prototype;
      b.$4 = function (a, b) {
        var c = this;
        return function () {
          var d = c.$3.get(a.key);
          d == null && ((d = c.$1.client(a, b)), c.$3.set(a.key, d));
          return d;
        };
      };
      b.registerClientConfiguration = function (a) {
        var b = this;
        a.entryPoints.forEach(function (c) {
          b.$2.set(c.key, b.$4(c, a));
        });
        return this;
      };
      b.createSurface = function () {
        return this.$1.surface(this.$2);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadFBDefaultSurfaceDefinition",
  [
    "MediaUploadFBDefaultClientContext",
    "MediaUploadFBEntryPointID",
    "MediaUploadFBSurface",
    "MediaUploadSurfaceDefinition",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        return (
          a.call(this, {
            client: function (a, d) {
              a = new (c("MediaUploadFBDefaultClientContext"))(
                b,
                c("MediaUploadFBEntryPointID").castOrThrow(a, b),
                d
              );
              return a.client;
            },
            surface: function (a) {
              return new (c("MediaUploadFBSurface"))(b, a);
            },
          }) || this
        );
      }
      return b;
    })(c("MediaUploadSurfaceDefinition"));
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadVUShim",
  [
    "MediaUploadAssetEvent",
    "MediaUploadClientEvent",
    "MediaUploadFBEntryPointID",
    "MediaUploadFBSDK",
    "MediaUploadFBStage",
    "MediaUploadSessionEvent",
    "MediaUploadStageEvent",
    "MediaUploadVUShimSession",
    "MediaUploadVUShimSurface",
    "Promise",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = new Map();
      }
      var d = a.prototype;
      d.createSession = function (a) {
        if (!c("MediaUploadFBSDK").isSupported()) return null;
        var b = a.source,
          d = a.composer_entry_point_ref;
        if (b == null || d == null) return null;
        b = new (c("MediaUploadFBEntryPointID"))(b, d);
        if (!c("MediaUploadVUShimSurface").isClientSupported(b)) return null;
        if (!c("gkx")("74")) return null;
        d = c("MediaUploadVUShimSurface").getClient(b);
        b = new (c("MediaUploadVUShimSession"))(a, d);
        this.$1.set(b.sessionID, b);
        return b;
      };
      d.triggerPublish = function (a, c) {
        var d = this.$1.get(a.sessionID);
        return d == null
          ? b("Promise").resolve({
              isSuccessful: !1,
              errorCode: "MISSING_SESSION",
            })
          : d.triggerPublish(a, c);
      };
      d.setupEventSubscription = function (a) {
        var b = this,
          d = function () {
            if (f) {
              if (g >= e.length) return "break";
              h = e[g++];
            } else {
              g = e.next();
              if (g.done) return "break";
              h = g.value;
            }
            var c = h;
            a.addClientEventListener(c, function (a) {
              return b.emitClientEvents(c);
            });
          };
        for (
          var e = c("MediaUploadClientEvent").members(),
            f = Array.isArray(e),
            g = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var h,
            i = d();
          if (i === "break") break;
        }
        d = function () {
          if (k) {
            if (l >= j.length) return "break";
            i = j[l++];
          } else {
            l = j.next();
            if (l.done) return "break";
            i = l.value;
          }
          var c = i;
          a.addSessionEventListener(c, function (a) {
            var d;
            return (d = b.$1.get(a.sessionID)) == null
              ? void 0
              : d.sessionUpdated(c, a);
          });
        };
        for (
          var j = c("MediaUploadSessionEvent").members(),
            k = Array.isArray(j),
            l = 0,
            j = k
              ? j
              : j[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var m = d();
          if (m === "break") break;
        }
        d = function () {
          if (o) {
            if (p >= n.length) return "break";
            m = n[p++];
          } else {
            p = n.next();
            if (p.done) return "break";
            m = p.value;
          }
          var c = m;
          a.addAssetEventListener(c, function (a, d) {
            var e;
            (e = b.$1.get(a.sessionID)) == null
              ? void 0
              : e.assetUpdated(c, a, d);
          });
        };
        for (
          var n = c("MediaUploadAssetEvent").members(),
            o = Array.isArray(n),
            p = 0,
            n = o
              ? n
              : n[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var q = d();
          if (q === "break") break;
        }
        d = function () {
          if (s) {
            if (t >= r.length) return "break";
            q = r[t++];
          } else {
            t = r.next();
            if (t.done) return "break";
            q = t.value;
          }
          var d = q,
            e = function () {
              if (g) {
                if (h >= f.length) return "break";
                i = f[h++];
              } else {
                h = f.next();
                if (h.done) return "break";
                i = h.value;
              }
              var c = i;
              a.addStageEventListener(d, c, function (a, e) {
                var f;
                (f = b.$1.get(a.sessionID)) == null
                  ? void 0
                  : f.stageUpdated(d, c, a, e);
              });
            };
          for (
            var f = c("MediaUploadFBStage").members(),
              g = Array.isArray(f),
              h = 0,
              f = g
                ? f
                : f[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var i,
              j = e();
            if (j === "break") break;
          }
        };
        for (
          var r = c("MediaUploadStageEvent").members(),
            s = Array.isArray(r),
            t = 0,
            r = s
              ? r
              : r[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var u = d();
          if (u === "break") break;
        }
      };
      d.emitClientEvents = function (a) {
        var b;
        if (a === c("MediaUploadClientEvent").CLIENT_INTERNET_ONLINE)
          b = "online";
        else if (a === c("MediaUploadClientEvent").CLIENT_INTERNET_OFFLINE)
          b = "offline";
        else return;
        for (
          var a = this.$1.values(),
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
          f.inform(b);
        }
      };
      return a;
    })();
    d = new a();
    e = d;
    g["default"] = e;
  },
  98
);
__d(
  "MediaUploadVUShimLogger",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.logEvent = function (a, b) {};
      b.postOnShutdown = function (a) {
        return { remove: function () {} };
      };
      b.getWaterfallID = function () {
        return this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MediaUploadVUShimSession",
  [
    "MediaUploadAssetEvent",
    "MediaUploadAssetStatus",
    "MediaUploadCancelReason",
    "MediaUploadFBSDK",
    "MediaUploadFBStage",
    "MediaUploadSessionEvent",
    "MediaUploadSessionStatus",
    "MediaUploadSingleAssetPublisher",
    "MediaUploadStageEvent",
    "MediaUploadVUShimLogger",
    "MediaUploadVUShimSurface",
    "Promise",
    "WaterfallIDGenerator",
    "cr:909282",
    "mixin",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(b, e) {
        var f;
        f = a.call(this) || this;
        f.sessionID = d("WaterfallIDGenerator").generate();
        f.$MediaUploadVUShimSession1 = b;
        f.$MediaUploadVUShimSession3 =
          (b = b.waterfall_id) != null ? b : f.sessionID;
        f.$MediaUploadVUShimSession6 = e;
        f.$MediaUploadVUShimSession5 = new (c("MediaUploadVUShimLogger"))(
          f.$MediaUploadVUShimSession3
        );
        f.$MediaUploadVUShimSession10 =
          !f.$MediaUploadVUShimSession1.background_upload;
        return f;
      }
      var f = e.prototype;
      f.createTestLogger = function () {};
      f.getLogger = function () {
        return this.$MediaUploadVUShimSession5;
      };
      f.start = function (a) {
        var b = this;
        this.inform("set-waterfall-id", {
          waterfallID: this.$MediaUploadVUShimSession3,
        });
        var d = c("MediaUploadVUShimSurface").createAssetRequest(
          function (b) {
            var d = a.getFile(),
              e = a.getFileInput();
            if (d != null) return b.createFromFile(d);
            else if (e != null) {
              d = b.createFromHTMLInput(e);
              if (d.dataAsFile() == null)
                throw c("MediaUploadFBSDK").createThrowableError(
                  "Cannot get File from the HTML input element"
                );
              else return d;
            } else
              throw c("MediaUploadFBSDK").createThrowableError(
                "Invalid video upload file, it contains only null objects"
              );
          },
          a.getStableAssetID(),
          function (a) {
            var c;
            return {
              targetID:
                (c = b.$MediaUploadVUShimSession4) != null
                  ? c
                  : b.$MediaUploadVUShimSession1.target_id,
              composerSessionID: b.$MediaUploadVUShimSession2,
              actorID: b.$MediaUploadVUShimSession1.as_actor_id,
              composerDialogVersion: "V2",
              publisherActionSource:
                b.$MediaUploadVUShimSession1.video_publisher_action_source,
              creatorProduct:
                ((c = a.dataAsFile()) == null ? void 0 : c.extension) === "gif"
                  ? 4
                  : 2,
            };
          }
        );
        this.$MediaUploadVUShimSession9 = d;
        this.$MediaUploadVUShimSession6.startUploads(this.sessionID, [d]);
        this.$MediaUploadVUShimSession10 &&
          this.$MediaUploadVUShimSession6.confirmSession(
            this.sessionID,
            [d],
            function (a) {
              return a.set("dummyPublish", !0);
            }
          );
      };
      f.setTargetID = function (a) {
        this.$MediaUploadVUShimSession4 = a;
      };
      f.setComposerSessionID = function (a) {
        this.$MediaUploadVUShimSession2 = a;
      };
      f.post = function (a) {
        this.$MediaUploadVUShimSession10
          ? c("MediaUploadFBSDK").reportRecoverableError(
              "Video upload client configured for pessimistic upload and explicit publish calls are now allowed"
            )
          : this.$MediaUploadVUShimSession9 != null &&
            this.$MediaUploadVUShimSession6.confirmSession(
              this.sessionID,
              [this.$MediaUploadVUShimSession9],
              function (b) {
                return b.set("postData", a);
              }
            );
      };
      f.cancel = function (a) {
        this.$MediaUploadVUShimSession6.cancelSession(
          this.sessionID,
          c("MediaUploadCancelReason").USER_REQUEST
        );
      };
      f.abandon = function (a) {
        this.$MediaUploadVUShimSession6.cancelSession(
          this.sessionID,
          c("MediaUploadCancelReason").USER_REQUEST
        );
      };
      f.isPostInProgress = function () {
        var a;
        return (
          ((a = this.$MediaUploadVUShimSession7) == null
            ? void 0
            : a.status) === c("MediaUploadSessionStatus").PUBLISHING
        );
      };
      f.isInProgress = function () {
        var a;
        return (
          ((a = this.$MediaUploadVUShimSession8) == null
            ? void 0
            : a.status) === c("MediaUploadAssetStatus").PROCESSING ||
          ((a = this.$MediaUploadVUShimSession8) == null
            ? void 0
            : a.status) === c("MediaUploadAssetStatus").UPLOADING
        );
      };
      f.getHasUploadFinished = function () {
        var a;
        return (
          ((a = this.$MediaUploadVUShimSession8) == null
            ? void 0
            : a.status) === c("MediaUploadAssetStatus").COMPLETED
        );
      };
      f.getVideoID = function () {
        var a;
        return (a = this.$MediaUploadVUShimSession8) == null
          ? void 0
          : a.videoID;
      };
      f.getUploadTime = function () {
        var a, b;
        a =
          (a = this.$MediaUploadVUShimSession8) == null
            ? void 0
            : (a = a.uploadSummary) == null
            ? void 0
            : a.startedAtMs;
        b =
          (b = this.$MediaUploadVUShimSession8) == null
            ? void 0
            : (b = b.uploadSummary) == null
            ? void 0
            : b.finishedAtMs;
        return a != null && b != null ? b - a : null;
      };
      f.getExPartitionNumber = function (a) {
        return 0;
      };
      f.getIsSphericalVideo = function () {
        var a;
        return (a =
          (a = this.$MediaUploadVUShimSession8) == null
            ? void 0
            : (a = a.metadata) == null
            ? void 0
            : a.isSpherical) != null
          ? a
          : !1;
      };
      f.startFlow = function () {
        this.$MediaUploadVUShimSession10
          ? c("MediaUploadFBSDK").reportRecoverableError(
              "Video upload client configured for pessimistic upload and explicit publish calls are now allowed"
            )
          : this.$MediaUploadVUShimSession9 != null &&
            this.$MediaUploadVUShimSession6.confirmSession(this.sessionID, [
              this.$MediaUploadVUShimSession9,
            ]);
      };
      f.sessionUpdated = function (a, b) {
        this.$MediaUploadVUShimSession7 = b;
        var d = b.extras.getUnsafe("postData");
        if (d == null) return;
        b = b.publishingResponse;
        switch (a) {
          case c("MediaUploadSessionEvent").PUBLISH_STARTED:
            this.inform("post-started", d);
            break;
          case c("MediaUploadSessionEvent").PUBLISH_SUCCEED:
            this.inform(
              "post-finished",
              Object.assign(
                {},
                (a = b == null ? void 0 : b.payload) != null ? a : {},
                d
              )
            );
            break;
          case c("MediaUploadSessionEvent").PUBLISH_FAILED:
            this.inform(
              "post-failed",
              (a = b == null ? void 0 : b.payload) != null ? a : {}
            );
            break;
          default:
        }
      };
      f.assetUpdated = function (a, b, d) {
        var e;
        this.$MediaUploadVUShimSession7 = b;
        this.$MediaUploadVUShimSession8 = d;
        var f, g;
        b =
          (b = (b = d.asset.dataAsFile()) == null ? void 0 : b.size) != null
            ? b
            : 0;
        e =
          (e = (e = d.uploadSummary) == null ? void 0 : e.skippedUpload) != null
            ? e
            : !1;
        switch (a) {
          case c("MediaUploadAssetEvent").ASSET_ADDED:
            f = "upload-requested";
            break;
          case c("MediaUploadAssetEvent").ASSET_STARTED:
            f = "upload-started";
            break;
          case c("MediaUploadAssetEvent").ASSET_REMOVED:
            f = "upload-canceled";
            break;
          case c("MediaUploadAssetEvent").ASSET_PROGRESS:
            f = "upload-progressed";
            g = {
              start_offset: 0,
              end_offset: b,
              file_size: b,
              sent_bytes: e
                ? b
                : (a =
                    (a = d.uploadSummary) == null ? void 0 : a.uploadedBytes) !=
                  null
                ? a
                : 0,
              video_id: d.videoID,
              upload_domain: d.uploadServiceDomain,
              skip_upload: e,
              transport_retries: d.retries.totalRetryAttempts,
            };
            break;
          case c("MediaUploadAssetEvent").ASSET_SUCCEED:
            f = "upload-finished";
            g = {
              start_offset: 0,
              end_offset: b,
              video_id: d.videoID,
              is_spherical_video:
                (e =
                  d == null
                    ? void 0
                    : (a = d.metadata) == null
                    ? void 0
                    : a.isSpherical) != null
                  ? e
                  : !1,
            };
            break;
          case c("MediaUploadAssetEvent").ASSET_FAILED:
            f = "upload-failed";
            g = {
              error_code: (b = d.lastAction) == null ? void 0 : b.rawErrorCode,
              error_summary:
                (a = d.lastAction) == null
                  ? void 0
                  : (e = a.displayError) == null
                  ? void 0
                  : e.summary,
              error_description:
                (b = d.lastAction) == null
                  ? void 0
                  : (a = b.displayError) == null
                  ? void 0
                  : a.description,
              error_is_transient:
                (e = d.lastAction) == null
                  ? void 0
                  : (b = e.errorAttributes) == null
                  ? void 0
                  : b.transientError,
              upload_domain: d.uploadServiceDomain,
              www_request_id:
                (a = d.lastAction) == null ? void 0 : a.networkRequestID,
            };
            break;
          default:
        }
        f != null && this.inform(f, g);
      };
      f.stageUpdated = function (a, b, d, e) {
        this.$MediaUploadVUShimSession7 = d;
        this.$MediaUploadVUShimSession8 = e;
        if (
          a === c("MediaUploadStageEvent").STAGE_SUCCEED &&
          b === c("MediaUploadFBStage").METADATA_EXTRACTION
        ) {
          if (e.metadata != null) {
            d = e.metadata;
            a = d.durationMs == null ? void 0 : d.durationMs / 1e3;
            e = {
              format: {
                duration: a,
                isSpherical: (b = d.isSpherical) != null ? b : !1,
              },
              metadata: {},
              streams: {
                numAudioTracks: 1,
                primaryVideo: {
                  type: "video",
                  width: d.width,
                  height: d.height,
                  duration: a,
                },
                primaryAudio: { type: "audio", duration: a },
              },
            };
          } else e = null;
          this.inform("metadata-parsed", e);
        }
      };
      f.triggerPublish = function (a, d) {
        var e;
        this.$MediaUploadVUShimSession7 = a;
        this.$MediaUploadVUShimSession8 = d[0];
        e = (e = a.extras.getBoolean("dummyPublish")) != null ? e : !1;
        var f = a.extras.getUnsafe("postData");
        if (e) return b("Promise").resolve({ isSuccessful: !0 });
        else if (f == null)
          return b("Promise").resolve({
            isSuccessful: !1,
            errorCode: "MISSING_POST_DATA",
          });
        else
          return c("MediaUploadSingleAssetPublisher").publish({
            sessionSnapshot: a,
            assetSnapshot: d[0],
            postData: f,
            postRequestManagerParams: this.$MediaUploadVUShimSession1,
          });
      };
      return e;
    })(c("mixin")(b("cr:909282")));
    g["default"] = a;
  },
  98
);
__d(
  "MediaUploadVUShimSurface",
  [
    "MediaUploadFBDefaultSurfaceDefinition",
    "MediaUploadFBEntryPointID",
    "MediaUploadFBSDK",
    "MediaUploadVUShim",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = new (c("MediaUploadFBDefaultSurfaceDefinition"))(c("MediaUploadFBSDK"));
    a.registerClientConfiguration({
      entryPoints: [
        new (c("MediaUploadFBEntryPointID"))("composer", "pages_feed"),
        new (c("MediaUploadFBEntryPointID"))(
          "composer",
          "pages_feed_video_composer"
        ),
        new (c("MediaUploadFBEntryPointID"))("newsfeed_composer", "feed"),
        new (c("MediaUploadFBEntryPointID"))("composer", "timeline"),
      ],
      eventHooks: {
        publishCallback: function (a, b) {
          return c("MediaUploadVUShim").triggerPublish(a, b);
        },
        eventSubscriber: function (a) {
          c("MediaUploadVUShim").setupEventSubscription(a);
        },
      },
    });
    b = a.createSurface();
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "ResumableUploadAsyncService",
  [
    "AsyncRequest",
    "EventEmitter",
    "Promise",
    "ResumableUploadServiceState.enum",
    "URI",
    "gkx",
    "regeneratorRuntime",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "rupload",
      i = "facebook.com";
    a = (function (a) {
      babelHelpers.inheritsLoose(d, a);
      function d(b, d, e, f, g, j, k, l, m, n) {
        var o;
        o = a.call(this) || this;
        o.consumer = b;
        o.accessToken = d;
        o.sessionKey = e || c("uuid")();
        o.contentKey = f || "";
        o.contentValue = g || "";
        o.serviceName = j && j != "" ? j : h;
        o.serviceDomain = k && k != "" ? k : i;
        o.receiveParameters = l;
        o.flowCaptureHeaderValue = m;
        o.tracingHeaderValue = n;
        return o;
      }
      d.create = function (a) {
        return new d(
          a.consumer,
          a.accessToken,
          a.sessionKey || "",
          a.contentKey,
          a.contentValue,
          a.serviceName,
          a.serviceDomain,
          a.receiveParameters,
          a.flowCaptureHeaderValue,
          a.tracingHeaderValue
        );
      };
      var e = d.prototype;
      e.$ResumableUploadService1 = function (a) {
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
      };
      e.resume = function (a) {
        var d, e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  f.prev = 0;
                  f.next = 3;
                  return b("regeneratorRuntime").awrap(
                    this.sendOffsetRequest()
                  );
                case 3:
                  d = f.sent;
                  this.emit(c("ResumableUploadServiceState.enum").START, {
                    offset: d.offset,
                  });
                  f.next = 7;
                  return b("regeneratorRuntime").awrap(
                    this.sendUploadRequest(a, d)
                  );
                case 7:
                  e = f.sent;
                  this.emit(c("ResumableUploadServiceState.enum").SUCCESS, e.h);
                  f.next = 14;
                  break;
                case 11:
                  (f.prev = 11),
                    (f.t0 = f["catch"](0)),
                    this.emit(c("ResumableUploadServiceState.enum").FAIL, f.t0);
                case 14:
                  this.abortUpload = void 0;
                case 15:
                case "end":
                  return f.stop();
              }
          },
          null,
          this,
          [[0, 11]]
        );
      };
      e.cancel = function () {
        this.abortUpload && this.abortUpload(),
          this.emit(c("ResumableUploadServiceState.enum").CANCEL);
      };
      e.decorateRequestFlowCaptureHeader = function (a) {
        this.flowCaptureHeaderValue &&
          a.setRequestHeader(
            "X-Fb-Flow-Capture",
            String(this.flowCaptureHeaderValue)
          );
      };
      e.sendOffsetRequest = function () {
        var a = this;
        return new (b("Promise"))(function (b, d) {
          var e = new (c("AsyncRequest"))()
            .setAllowCrossOrigin(!0)
            .setAllowCredentials(!0)
            .setMethod("GET")
            .setURI(a.getUploadUri())
            .setReadOnly(!0)
            .setRequestHeader("Authorization", "OAuth " + a.accessToken)
            .setHandler(function (a) {
              return b(JSON.parse(a.payload.response));
            })
            .setErrorHandler(d)
            .setOption("suppressEvaluation", !0)
            .setTransportErrorHandler(function (b) {
              a.emit(
                c("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
                b
              );
            });
          a.$ResumableUploadService1(e);
          a.decorateRequestFlowCaptureHeader(e);
          a.abortUpload = function () {
            return e.abort();
          };
          e.send();
        });
      };
      e.sendUploadRequest = function (a, d) {
        var e = this;
        d = d || {};
        var f = d.offset;
        d = d.duplicate;
        var g = d ? "" : a.slice(f);
        return new (b("Promise"))(function (b, d) {
          var h = new (c("AsyncRequest"))()
            .setAllowCrossOrigin(!0)
            .setAllowCredentials(!0)
            .setURI(e.getUploadUri())
            .setRawData(g)
            .setHandler(function (a) {
              return b(JSON.parse(a.payload.response));
            })
            .setErrorHandler(d)
            .setRequestHeader("Authorization", "OAuth " + e.accessToken)
            .setRequestHeader("X-Entity-Name", encodeURIComponent(a.name))
            .setRequestHeader("X-Entity-Type", a.type)
            .setRequestHeader("X-Entity-Length", String(a.size))
            .setRequestHeader("Offset", String(f))
            .setOption("suppressEvaluation", !0)
            .setUploadProgressHandler(function (b) {
              b = new ProgressEvent("upload-service", {
                total: a.size,
                loaded: b.loaded + Number(f),
              });
              e.emit(c("ResumableUploadServiceState.enum").PROGRESS, b);
            })
            .setTransportErrorHandler(function (a) {
              e.emit(
                c("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
                a
              );
            });
          e.$ResumableUploadService1(h);
          e.decorateRequestFlowCaptureHeader(h);
          e.abortUpload = function () {
            return h.abort();
          };
          d = e.receiveParameters;
          d &&
            (h
              .setRequestHeader("start_offset", String(d.start_offset))
              .setRequestHeader("end_offset", String(d.end_offset))
              .setRequestHeader(
                "composer_session_id",
                String(d.composer_session_id)
              )
              .setRequestHeader("id", String(d.upload_session_id)),
            d.fb_region &&
              h.setRequestHeader("X-FB-Region", String(d.fb_region)));
          e.tracingHeaderValue &&
            h.setRequestHeader("x-fb-product-log", e.tracingHeaderValue);
          h.send();
        });
      };
      e.getUploadUri = function () {
        var a = this.getServiceName();
        a = new (c("URI"))(
          "https://" + a + "/" + this.consumer + "/" + this.sessionKey
        );
        this.contentKey &&
          this.contentValue &&
          (a = a.addQueryData(this.contentKey, this.contentValue));
        return a;
      };
      e.getServiceName = function () {
        return this.serviceName + "." + this.serviceDomain;
      };
      return d;
    })(c("EventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "GraphQLVideoPublishUtils",
  ["gkx", "immutable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      if (d && !c("gkx")("1827276")) return !1;
      d = c("immutable").List([
        "cs_ab_testing_video_upload",
        "cs_content_library",
        "cs_content_library_bulk_upload",
        "cs_content_library_upload_videos",
        "cs_content_show_episode_upload",
        "cs_global_basic_post",
        "cs_global_bulk_upload",
        "cs_global_multipost",
        "cs_global_upload_video",
        "cs_home_basic_post",
        "cs_home_bulk_video",
        "cs_home_upload_video",
        "cs_home_multipost",
        "cs_instagram_content_library",
        "media_manager",
        "pages_feed_video_composer",
        "pages_composer_bulk_upload_upsell",
        "page_content_tab_drafts",
        "page_content_tab_published_posts_opted_out",
        "page_content_tab_scheduled_posts_opted_out",
        "page_content_tab_video_library",
        "page_content_tab_video_library_premiere",
        "pages_posts",
        "pages_video_tab",
        "timeline",
        "video_page_video_list",
      ]);
      d = d.contains(b);
      return (
        (a === "composer" || a === "media_manager_instagram_video_composer") &&
        d
      );
    }
    g.isGraphQLPublish = a;
  },
  98
);
__d(
  "VideoUploadCallbacksMixin",
  ["orEmptyArray"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return Array.isArray(a) ? a : [a];
    }
    a = {
      inform: function (a, b) {
        var c = this.__callbacksByType;
        if (c == null) return;
        a = h(a);
        a.forEach(function (a) {
          var d = c[a];
          if (d == null) return;
          d.forEach(function (c) {
            try {
              c(a, b);
            } catch (a) {}
          });
        });
      },
      subscribe: function (a, b) {
        var d,
          e = (this.__callbacksByType =
            (d = this.__callbacksByType) != null ? d : {}),
          f = h(a);
        f.forEach(function (a) {
          a = e[a] = c("orEmptyArray")(e[a]);
          a.push(b);
        });
        var g = !1;
        return {
          remove: function () {
            if (g === !0) return;
            g = !0;
            f.forEach(function (a) {
              var c = e[a];
              if (c == null) return;
              var d = c.indexOf(b);
              d !== -1 && c.splice(d, 1);
              c.length === 0 && delete e[a];
            });
          },
        };
      },
    };
    f.exports = a;
  },
  34
);
__d(
  "VideoUploadCrashMonitor",
  ["Bandicoot", "VideoUploadLogger"],
  function (a, b, c, d, e, f) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(b, c, d, e, f, g, h, i) {
        var j;
        j = a.call(this, "VideoUploadSession") || this;
        j.$VideoUploadCrashMonitor1 = {
          waterfallID: b,
          actorID: c,
          source: d,
          targetID: e,
          loggingDelay: f,
          supportsChunking: g,
          composerEntryPointRef: h,
          flowStarted: i,
        };
        return j;
      }
      var d = c.prototype;
      d.flowStarted = function () {
        this.$VideoUploadCrashMonitor1.flowStarted = !0;
      };
      d.getCrashTimeData = function () {
        return this.$VideoUploadCrashMonitor1;
      };
      d.logCrash = function (a, c, d) {
        if (!c.waterfallID) return;
        a = new (b("VideoUploadLogger"))({
          actor_id: c.actorID,
          source: c.source,
          waterfall_id: c.waterfallID,
          target_id: c.targetID,
          delay: c.loggingDelay,
          is_chunked_upload: c.supportsChunking,
          composer_entry_point_ref: c.composerEntryPointRef,
        });
        d = {
          error: "Crash Detected",
          error_description:
            "Detected video upload did not complete due to a crash",
        };
        a.logEvent(b("VideoUploadLogger").EVENT_FAILED_UPLOADING, d);
        c.flowStarted &&
          a.logEvent(b("VideoUploadLogger").EVENT_RESIGNED_FLOW, {});
      };
      return c;
    })(b("Bandicoot"));
    e.exports = a;
  },
  null
);
__d(
  "VideoUploadConnectionMonitor",
  [
    "Network",
    "VideoUploadFeatureDetector",
    "cr:909282",
    "debounce",
    "mixin",
    "setTimeout",
  ],
  function (a, b, c, d, e, f) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        var c;
        c = a.call(this) || this;
        c.$VideoUploadConnectionMonitor1 = !1;
        c.$VideoUploadConnectionMonitor2 = [];
        c.$VideoUploadConnectionMonitor3 = !1;
        c.$VideoUploadConnectionMonitor4 = !0;
        c.$VideoUploadConnectionMonitor5 = b("debounce")(
          function () {
            this.$VideoUploadConnectionMonitor6(!1);
          }.bind(babelHelpers.assertThisInitialized(c)),
          2e3
        );
        return c;
      }
      var d = c.prototype;
      d.notifyStart = function () {
        if (this.$VideoUploadConnectionMonitor3) return;
        this.$VideoUploadConnectionMonitor2.length === 0 &&
          (this.$VideoUploadConnectionMonitor2.push(
            b("Network").addListener(
              "online",
              function () {
                this.$VideoUploadConnectionMonitor6(!0);
              }.bind(this)
            )
          ),
          this.$VideoUploadConnectionMonitor2.push(
            b("Network").addListener(
              "offline",
              function () {
                this.$VideoUploadConnectionMonitor1
                  ? this.$VideoUploadConnectionMonitor5()
                  : (this.$VideoUploadConnectionMonitor5.reset(),
                    b("setTimeout")(this.$VideoUploadConnectionMonitor5, 2e3));
              }.bind(this)
            )
          ));
        this.$VideoUploadConnectionMonitor3 = !0;
      };
      d.notifyProgress = function (a) {
        if (!this.$VideoUploadConnectionMonitor3) return;
        if (!a) return;
        b("VideoUploadFeatureDetector").supportsFullProgress() &&
          ((this.$VideoUploadConnectionMonitor1 = !0),
          a.total && a.loaded === a.total
            ? this.$VideoUploadConnectionMonitor5.reset()
            : this.$VideoUploadConnectionMonitor5());
      };
      d.notifySuccess = function () {
        if (!this.$VideoUploadConnectionMonitor3) return;
        this.reset();
        this.$VideoUploadConnectionMonitor6(!0);
      };
      d.notifyTransportError = function () {
        if (!this.$VideoUploadConnectionMonitor3) return;
        this.$VideoUploadConnectionMonitor3 = !1;
        this.$VideoUploadConnectionMonitor6(!1);
      };
      d.notifyError = function () {
        if (!this.$VideoUploadConnectionMonitor3) return;
        this.reset();
        this.$VideoUploadConnectionMonitor6(!0);
      };
      d.isOnline = function () {
        return this.$VideoUploadConnectionMonitor4;
      };
      d.reset = function () {
        while (this.$VideoUploadConnectionMonitor2.length)
          this.$VideoUploadConnectionMonitor2.pop().remove();
        this.$VideoUploadConnectionMonitor5.reset();
        this.$VideoUploadConnectionMonitor3 = !1;
      };
      d.$VideoUploadConnectionMonitor6 = function (a) {
        this.$VideoUploadConnectionMonitor5.reset(),
          this.$VideoUploadConnectionMonitor4 !== a &&
            ((this.$VideoUploadConnectionMonitor4 = a),
            this.$VideoUploadConnectionMonitor4
              ? this.inform("online")
              : this.inform("offline"));
      };
      return c;
    })(b("mixin")(b("cr:909282")));
    e.exports = a;
  },
  null
);
__d(
  "VideoUploadReceiveRequestManager",
  [
    "fbt",
    "ODS",
    "ResumableUploadAsyncService",
    "ResumableUploadService",
    "ResumableUploadServiceState.enum",
    "VideoUploadConnectionMonitor",
    "VideoUploadRequest",
    "clearTimeout",
    "cr:909282",
    "gkx",
    "md5",
    "mixin",
    "setTimeout",
    "uuid",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = 1363037,
      j = {
        INITIAL: "initial",
        NEXT_CHUNK: "next chunk",
        INVALID_OFFSET_RETRY: "invalid offset retry",
        SERVER_FAILURE_RETRY: "server failure retry",
        TRANSPORT_FAILURE_RETRY: "transport failure retry",
        TIMEOUT_RETRY: "timeout retry",
        BACK_ONLINE: "back online",
      };
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(
        b,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z
      ) {
        var A;
        m === void 0 && (m = "");
        n === void 0 && (n = !1);
        o === void 0 && (o = !1);
        p === void 0 && (p = null);
        q === void 0 && (q = null);
        r === void 0 && (r = null);
        s === void 0 && (s = 0);
        t === void 0 && (t = !1);
        u === void 0 && (u = !1);
        v === void 0 && (v = !1);
        w === void 0 && (w = !1);
        x === void 0 && (x = !1);
        y === void 0 && (y = !1);
        z === void 0 && (z = 0);
        A = a.call(this) || this;
        A.$VideoUploadReceiveRequestManager1 = b;
        A.$VideoUploadReceiveRequestManager2 = d;
        A.$VideoUploadReceiveRequestManager3 = e != null ? e : 0;
        A.$VideoUploadReceiveRequestManager4 = f;
        A.$VideoUploadReceiveRequestManager5 = g;
        A.$VideoUploadReceiveRequestManager6 = h;
        A.$VideoUploadReceiveRequestManager7 = i;
        A.$VideoUploadReceiveRequestManager8 = j;
        A.$VideoUploadReceiveRequestManager9 = k;
        A.$VideoUploadReceiveRequestManager10 = l;
        A.$VideoUploadReceiveRequestManager11 = 0;
        A.$VideoUploadReceiveRequestManager14 = 0;
        A.$VideoUploadReceiveRequestManager15 = 0;
        A.$VideoUploadReceiveRequestManager16 = null;
        A.$VideoUploadReceiveRequestManager17 = null;
        A.$VideoUploadReceiveRequestManager18 = 0;
        A.$VideoUploadReceiveRequestManager19 = "constructed";
        A.$VideoUploadReceiveRequestManager13 = null;
        A.$VideoUploadReceiveRequestManager20 = null;
        A.$VideoUploadReceiveRequestManager21 = null;
        A.$VideoUploadReceiveRequestManager22 = m;
        A.$VideoUploadReceiveRequestManager24 = o;
        A.$VideoUploadReceiveRequestManager23 = n;
        A.$VideoUploadReceiveRequestManager25 = p;
        A.$VideoUploadReceiveRequestManager26 = !1;
        A.$VideoUploadReceiveRequestManager27 = q;
        A.$VideoUploadReceiveRequestManager30 = t;
        A.$VideoUploadReceiveRequestManager31 = u;
        A.$VideoUploadReceiveRequestManager32 = v;
        A.$VideoUploadReceiveRequestManager29 = s;
        A.$VideoUploadReceiveRequestManager33 = w;
        A.$VideoUploadReceiveRequestManager28 = r;
        A.$VideoUploadReceiveRequestManager34 = x;
        A.$VideoUploadReceiveRequestManager12 = c("uuid")();
        A.$VideoUploadReceiveRequestManager35 = y;
        A.$VideoUploadReceiveRequestManager36 = z;
        A.$VideoUploadReceiveRequestManager41 = null;
        A.$VideoUploadReceiveRequestManager42 = null;
        A.$VideoUploadReceiveRequestManager40 = !1;
        A.$VideoUploadReceiveRequestManager39 = null;
        A.$VideoUploadReceiveRequestManager37 = new (c(
          "VideoUploadConnectionMonitor"
        ))();
        A.$VideoUploadReceiveRequestManager37.subscribe(
          "online",
          A.$VideoUploadReceiveRequestManager50.bind(
            babelHelpers.assertThisInitialized(A)
          )
        );
        A.$VideoUploadReceiveRequestManager37.subscribe(
          "offline",
          A.$VideoUploadReceiveRequestManager51.bind(
            babelHelpers.assertThisInitialized(A)
          )
        );
        return A;
      }
      var e = b.prototype;
      e.updateVideoID = function (a) {
        if (this.$VideoUploadReceiveRequestManager38.getVideoID()) return;
        this.$VideoUploadReceiveRequestManager38.setVideoID(a);
        this.$VideoUploadReceiveRequestManager45 &&
          this.$VideoUploadReceiveRequestManager45.setData(
            this.__createRequestData(this.$VideoUploadReceiveRequestManager38)
          );
        this.$VideoUploadReceiveRequestManager52();
      };
      e.isResumabilityEnabled = function () {
        return this.$VideoUploadReceiveRequestManager23;
      };
      e.isResumableServiceProxyReceiveEnabled = function () {
        return this.$VideoUploadReceiveRequestManager30;
      };
      e.sendRequest = function (a) {
        this.$VideoUploadReceiveRequestManager19 = "sending request";
        if (this.$VideoUploadReceiveRequestManager45) {
          this.$VideoUploadReceiveRequestManager19 =
            "request already in progress";
          return;
        }
        this.$VideoUploadReceiveRequestManager18 =
          a.getEndOffset() - a.getStartOffset();
        this.$VideoUploadReceiveRequestManager38 = a;
        this.$VideoUploadReceiveRequestManager53(j.INITIAL);
      };
      e.cancelRequest = function () {
        if (!this.$VideoUploadReceiveRequestManager45) return;
        this.$VideoUploadReceiveRequestManager45.abort();
        this.$VideoUploadReceiveRequestManager21 !== void 0 &&
          this.$VideoUploadReceiveRequestManager21 !== null &&
          this.$VideoUploadReceiveRequestManager21.cancel();
        this.$VideoUploadReceiveRequestManager54();
        this.inform("request-canceled");
      };
      e.appendStateLogData = function (a, b) {
        (a[b + "request_manager_state"] =
          this.$VideoUploadReceiveRequestManager19),
          (a[b + "upload_speed"] = this.$VideoUploadReceiveRequestManager17),
          (a[b + "transport_retries"] =
            this.$VideoUploadReceiveRequestManager11),
          (a[b + "server_retries"] = this.$VideoUploadReceiveRequestManager14),
          (a[b + "timeout_retries"] = this.$VideoUploadReceiveRequestManager15),
          (a[b + "last_timeout_value"] =
            this.$VideoUploadReceiveRequestManager43),
          (a[b + "last_request_start_time"] =
            this.$VideoUploadReceiveRequestManager16),
          (a[b + "pending_request"] =
            this.$VideoUploadReceiveRequestManager45 != null),
          (a[b + "pending_timer"] =
            this.$VideoUploadReceiveRequestManager46 != null),
          (a[b + "cached_chunk"] =
            this.$VideoUploadReceiveRequestManager44 != null),
          (a[b + "early_receive_start"] =
            this.$VideoUploadReceiveRequestManager40),
          this.$VideoUploadReceiveRequestManager38 != null &&
            ((a[b + "start_offset"] =
              this.$VideoUploadReceiveRequestManager38.getStartOffset()),
            (a[b + "end_offset"] =
              this.$VideoUploadReceiveRequestManager38.getEndOffset()),
            (a[b + "partition_start_offset"] =
              this.$VideoUploadReceiveRequestManager38.getPartitionStartOffset()),
            (a[b + "partition_end_offset"] =
              this.$VideoUploadReceiveRequestManager38.getPartitionEndOffset())),
          this.$VideoUploadReceiveRequestManager37 != null &&
            (a[b + "connection_monitor_online"] =
              this.$VideoUploadReceiveRequestManager37.isOnline());
      };
      e.getHostName = function (a) {
        try {
          return new URL(a).hostname;
        } catch (a) {
          return null;
        }
      };
      e.$VideoUploadReceiveRequestManager54 = function () {
        (this.$VideoUploadReceiveRequestManager45 = null),
          (this.$VideoUploadReceiveRequestManager44 = null),
          (this.$VideoUploadReceiveRequestManager11 = 0),
          (this.$VideoUploadReceiveRequestManager14 = 0),
          (this.$VideoUploadReceiveRequestManager12 = c("uuid")()),
          (this.$VideoUploadReceiveRequestManager15 = 0),
          (this.$VideoUploadReceiveRequestManager16 = null),
          (this.$VideoUploadReceiveRequestManager17 = null),
          (this.$VideoUploadReceiveRequestManager18 = 0),
          (this.$VideoUploadReceiveRequestManager41 = null),
          (this.$VideoUploadReceiveRequestManager42 = null),
          (this.$VideoUploadReceiveRequestManager40 = !1),
          (this.$VideoUploadReceiveRequestManager26 = !1),
          (this.$VideoUploadReceiveRequestManager39 = null),
          this.$VideoUploadReceiveRequestManager38.reset(),
          this.$VideoUploadReceiveRequestManager37.reset(),
          c("clearTimeout")(this.$VideoUploadReceiveRequestManager46),
          (this.$VideoUploadReceiveRequestManager46 = null);
      };
      e.$VideoUploadReceiveRequestManager53 = function (a, b) {
        c("clearTimeout")(this.$VideoUploadReceiveRequestManager46);
        this.$VideoUploadReceiveRequestManager46 = null;
        this.$VideoUploadReceiveRequestManager20 = a;
        this.$VideoUploadReceiveRequestManager13 = c("uuid")();
        if (
          this.$VideoUploadReceiveRequestManager38.getSupportsChunking() &&
          this.$VideoUploadReceiveRequestManager38.getStartOffset() >=
            this.$VideoUploadReceiveRequestManager38.getPartitionEndOffset()
        ) {
          !b
            ? (this.inform("request-finished", {
                start_offset:
                  this.$VideoUploadReceiveRequestManager38.getEndOffset() - 1,
                end_offset:
                  this.$VideoUploadReceiveRequestManager38.getEndOffset(),
                transport_retries: this.$VideoUploadReceiveRequestManager11,
                server_retries: this.$VideoUploadReceiveRequestManager14,
                upload_speed: this.$VideoUploadReceiveRequestManager17,
                request_manager_state: this.$VideoUploadReceiveRequestManager19,
                upload_domain: this.$VideoUploadReceiveRequestManager39,
                debug: {
                  request_reason: this.$VideoUploadReceiveRequestManager20,
                  single_request_id: this.$VideoUploadReceiveRequestManager13,
                },
              }),
              (this.$VideoUploadReceiveRequestManager19 =
                "request finished - notified"))
            : (this.$VideoUploadReceiveRequestManager19 =
                "request finished - not notified");
          return;
        }
        this.$VideoUploadReceiveRequestManager45 = this.__getVideoUploadRequest(
          this.$VideoUploadReceiveRequestManager1
        )
          .setAllowCrossOrigin(!0)
          .setData(
            this.__createRequestData(this.$VideoUploadReceiveRequestManager38)
          )
          .setWaterfallID(
            this.$VideoUploadReceiveRequestManager38.getWaterfallID()
          )
          .setSuccessHandler(this.__handleSuccessResponse.bind(this))
          .setErrorHandler(this.__handleServerFailureResponse.bind(this))
          .setTransportErrorHandler(
            this.$VideoUploadReceiveRequestManager55.bind(this)
          );
        this.$VideoUploadReceiveRequestManager23 ||
          this.$VideoUploadReceiveRequestManager45.setUploadProgressHandler(
            this.$VideoUploadReceiveRequestManager56.bind(this)
          );
        this.$VideoUploadReceiveRequestManager16 = Date.now();
        this.$VideoUploadReceiveRequestManager39 = this.getHostName(
          this.$VideoUploadReceiveRequestManager1
        );
        a = !1;
        if (this.$VideoUploadReceiveRequestManager38.getSupportsChunking()) {
          if (this.$VideoUploadReceiveRequestManager5) {
            b = this.$VideoUploadReceiveRequestManager57(
              this.$VideoUploadReceiveRequestManager38.getEndOffset() -
                this.$VideoUploadReceiveRequestManager38.getStartOffset(),
              this.$VideoUploadReceiveRequestManager17
            );
            this.$VideoUploadReceiveRequestManager45.setTimeoutHandler(
              b,
              this.__handleResponseTimeout.bind(this)
            );
            this.$VideoUploadReceiveRequestManager19 =
              "sending chunk with timeout = " + b;
            this.$VideoUploadReceiveRequestManager43 = b;
          } else
            this.$VideoUploadReceiveRequestManager19 =
              "sending chunk without timeout";
          b = this.$VideoUploadReceiveRequestManager58();
          if (b === null || b === void 0) {
            this.$VideoUploadReceiveRequestManager59({
              error_description: "Provided chunk is null.",
              error_is_transient: !1,
            });
            return;
          } else
            this.$VideoUploadReceiveRequestManager23 &&
            this.$VideoUploadReceiveRequestManager29 <
              this.$VideoUploadReceiveRequestManager38.getFile().getSize()
              ? ((a = !0), this.$VideoUploadReceiveRequestManager60(b))
              : this.$VideoUploadReceiveRequestManager45.sendChunk(b);
        } else
          (this.$VideoUploadReceiveRequestManager19 = "sending file"),
            this.$VideoUploadReceiveRequestManager45.sendFile(
              this.$VideoUploadReceiveRequestManager38.getFile().getFileInput()
            );
        this.$VideoUploadReceiveRequestManager61(a);
        this.$VideoUploadReceiveRequestManager37.notifyStart();
        this.inform("request-started", {
          start_offset:
            this.$VideoUploadReceiveRequestManager38.getStartOffset(),
          end_offset: this.$VideoUploadReceiveRequestManager38.getEndOffset(),
          transport_retries: this.$VideoUploadReceiveRequestManager11,
          server_retries: this.$VideoUploadReceiveRequestManager14,
          upload_speed: this.$VideoUploadReceiveRequestManager17,
          request_manager_state: this.$VideoUploadReceiveRequestManager19,
          upload_domain: this.$VideoUploadReceiveRequestManager39,
          debug: {
            request_reason: this.$VideoUploadReceiveRequestManager20,
            single_request_id: this.$VideoUploadReceiveRequestManager13,
          },
        });
      };
      e.$VideoUploadReceiveRequestManager61 = function (a) {
        (this.$VideoUploadReceiveRequestManager38.getSource() ===
          "create_flow" ||
          this.$VideoUploadReceiveRequestManager38.getSource() ===
            "ads_interfaces") &&
          d("ODS").bumpEntityKey(
            2966,
            "video_ads_upload",
            a ? "upload_service" : "graph_api"
          );
      };
      e.$VideoUploadReceiveRequestManager62 = function (a, b, c) {
        !this.$VideoUploadReceiveRequestManager38.getVideoID()
          ? ((this.$VideoUploadReceiveRequestManager41 = a),
            (this.$VideoUploadReceiveRequestManager42 = b))
          : a(b, c);
      };
      e.$VideoUploadReceiveRequestManager52 = function () {
        this.$VideoUploadReceiveRequestManager41 &&
          (this.$VideoUploadReceiveRequestManager41(
            this.$VideoUploadReceiveRequestManager42
          ),
          (this.$VideoUploadReceiveRequestManager41 = null),
          (this.$VideoUploadReceiveRequestManager42 = null));
      };
      e.$VideoUploadReceiveRequestManager60 = function (a) {
        var b,
          d = this.$VideoUploadReceiveRequestManager38.getFile(),
          e =
            d.getFile().lastModified +
            d.getFile().name +
            d.getFile().type +
            this.$VideoUploadReceiveRequestManager63();
        e =
          String(c("md5")(e)) +
          "-" +
          this.$VideoUploadReceiveRequestManager38.getStartOffset() +
          "-" +
          this.$VideoUploadReceiveRequestManager38.getEndOffset();
        b =
          ((b = this.$VideoUploadReceiveRequestManager38) == null
            ? void 0
            : b.getRetryState()) == null
            ? this.$VideoUploadReceiveRequestManager14 +
              this.$VideoUploadReceiveRequestManager11 +
              this.$VideoUploadReceiveRequestManager15
            : this.$VideoUploadReceiveRequestManager38
                .getRetryState()
                .getTotalRetryCount();
        d =
          this.$VideoUploadReceiveRequestManager35 &&
          this.$VideoUploadReceiveRequestManager36 < d.getSize()
            ? [
                "video_upload_www",
                [this.$VideoUploadReceiveRequestManager12, String(b)].join("_"),
                [
                  String(
                    this.$VideoUploadReceiveRequestManager38.getWaterfallID()
                  ),
                  String(this.$VideoUploadReceiveRequestManager38.getVideoID()),
                ].join("_"),
              ].join(":")
            : null;
        this.isResumabilityEnabled() &&
          this.$VideoUploadReceiveRequestManager25 &&
          this.$VideoUploadReceiveRequestManager11 >
            this.$VideoUploadReceiveRequestManager2 / 3 &&
          (this.$VideoUploadReceiveRequestManager26 = !0);
        b = "fb_video";
        this.$VideoUploadReceiveRequestManager30 && (b = "fb_video2");
        var f = null;
        if (
          this.$VideoUploadReceiveRequestManager30 ||
          this.$VideoUploadReceiveRequestManager31
        ) {
          var g = {};
          g.start_offset =
            this.$VideoUploadReceiveRequestManager38.getStartOffset();
          g.end_offset =
            this.$VideoUploadReceiveRequestManager38.getEndOffset();
          g.composer_session_id =
            this.$VideoUploadReceiveRequestManager38.getWaterfallID();
          g.upload_session_id =
            this.$VideoUploadReceiveRequestManager38.getUploadSessionID();
          g.product_media_id =
            this.$VideoUploadReceiveRequestManager38.getVideoID();
          g.xpv_asset_id =
            this.$VideoUploadReceiveRequestManager38.getXPVAssetID();
          g.is_xpv_single_prod =
            this.$VideoUploadReceiveRequestManager38.getIsXPVSingleProd();
          g.fb_region = this.$VideoUploadReceiveRequestManager38.getFbRegion();
          this.$VideoUploadReceiveRequestManager32 &&
            (g.total_file_size = this.$VideoUploadReceiveRequestManager38
              .getFile()
              .getSize());
          c("gkx")("1765373") &&
            ((g.video_waterfall_id =
              this.$VideoUploadReceiveRequestManager38.getWaterfallID()),
            (g.target_id =
              this.$VideoUploadReceiveRequestManager38.getTargetID()));
          f = g;
        }
        g = {};
        g.consumer = b;
        g.sessionKey = e;
        g.serviceName = this.$VideoUploadReceiveRequestManager26
          ? null
          : this.$VideoUploadReceiveRequestManager25;
        g.serviceDomain = this.$VideoUploadReceiveRequestManager27;
        g.receiveParameters = f;
        g.flowCaptureHeaderValue = this.$VideoUploadReceiveRequestManager34
          ? this.$VideoUploadReceiveRequestManager38.getWaterfallID()
          : null;
        g.tracingHeaderValue = d;
        this.$VideoUploadReceiveRequestManager24
          ? (b = c("ResumableUploadAsyncService").create(g))
          : (b = c("ResumableUploadService").create(g));
        this.$VideoUploadReceiveRequestManager21 = b;
        this.$VideoUploadReceiveRequestManager39 = b.getServiceName();
        this.$VideoUploadReceiveRequestManager64();
        b.resume(a);
        this.inform("resumable-called", {
          debug: {
            single_request_id: this.$VideoUploadReceiveRequestManager13,
            authority: this.$VideoUploadReceiveRequestManager39,
          },
        });
      };
      e.$VideoUploadReceiveRequestManager64 = function () {
        var a = this;
        this.$VideoUploadReceiveRequestManager38.getVideoID() ||
          (this.$VideoUploadReceiveRequestManager40 = !0);
        var b = this.$VideoUploadReceiveRequestManager21;
        if (b === null || b === void 0) return;
        b.addListener(
          c("ResumableUploadServiceState.enum").START,
          function (b) {
            a.inform("resumable-started", {
              resume_from_offset: b.offset,
              debug: {
                single_request_id: a.$VideoUploadReceiveRequestManager13,
                partition:
                  a.$VideoUploadReceiveRequestManager38.getPartitionNo(),
                authority: a.$VideoUploadReceiveRequestManager39,
              },
            });
          }
        );
        this.$VideoUploadReceiveRequestManager47 = function (b) {
          a.inform("resumable-failed", {
            error_code: b.getError(),
            error_description: b.getErrorDescription(),
            error_summary: b.getErrorSummary(),
            error_is_transient: b.isTransient(),
            debug: {
              error_source: "service",
              single_request_id: a.$VideoUploadReceiveRequestManager13,
              partition: a.$VideoUploadReceiveRequestManager38.getPartitionNo(),
              authority: a.$VideoUploadReceiveRequestManager39,
            },
          }),
            a.__handleServerFailureResponse(b);
        };
        b.addListener(c("ResumableUploadServiceState.enum").FAIL, function (b) {
          a.$VideoUploadReceiveRequestManager62(
            a.$VideoUploadReceiveRequestManager47,
            b
          );
        });
        this.$VideoUploadReceiveRequestManager48 = function (b) {
          !a.$VideoUploadReceiveRequestManager30
            ? (a.$VideoUploadReceiveRequestManager45.setHandle(b),
              a.$VideoUploadReceiveRequestManager45.sendChunk(null))
            : a.__handleSuccessResponsePayload({
                start_offset:
                  a.$VideoUploadReceiveRequestManager38.getEndOffset(),
                end_offset:
                  a.$VideoUploadReceiveRequestManager38.getPartitionEndOffset(),
              }),
            a.inform("resumable-success", {
              everstore_handle: b,
              debug: {
                single_request_id: a.$VideoUploadReceiveRequestManager13,
                partition:
                  a.$VideoUploadReceiveRequestManager38.getPartitionNo(),
                authority: a.$VideoUploadReceiveRequestManager39,
              },
            });
        };
        b.addListener(
          c("ResumableUploadServiceState.enum").SUCCESS,
          function (b) {
            a.$VideoUploadReceiveRequestManager62(
              a.$VideoUploadReceiveRequestManager48,
              b
            );
          }
        );
        this.$VideoUploadReceiveRequestManager49 = function (b, c) {
          a.inform("resumable-failed", {
            error_code: b.getError(),
            error_description: b.getErrorDescription(),
            error_summary: b.getErrorSummary(),
            error_is_transient: b.isTransient(),
            resume_from_offset: c.offset,
            debug: {
              error_source: "transport",
              single_request_id: a.$VideoUploadReceiveRequestManager13,
              partition: a.$VideoUploadReceiveRequestManager38.getPartitionNo(),
              method: c.method,
              authority: a.$VideoUploadReceiveRequestManager39,
            },
          }),
            a.$VideoUploadReceiveRequestManager55(b);
        };
        b.addListener(
          c("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
          function (b, c) {
            a.$VideoUploadReceiveRequestManager62(
              a.$VideoUploadReceiveRequestManager49,
              b,
              c
            );
          }
        );
        b.addListener(
          c("ResumableUploadServiceState.enum").PROGRESS,
          function (b) {
            a.$VideoUploadReceiveRequestManager33 &&
              (a.$VideoUploadReceiveRequestManager11 = 0),
              a.$VideoUploadReceiveRequestManager56(b);
          }
        );
      };
      e.__getVideoUploadRequest = function (a) {
        return new (c("VideoUploadRequest"))(a);
      };
      e.$VideoUploadReceiveRequestManager65 = function (a, b) {
        (this.$VideoUploadReceiveRequestManager19 =
          "setting request to send after" + b),
          c("clearTimeout")(this.$VideoUploadReceiveRequestManager46),
          (this.$VideoUploadReceiveRequestManager46 = c("setTimeout")(
            this.$VideoUploadReceiveRequestManager53.bind(this, a),
            b
          ));
      };
      e.$VideoUploadReceiveRequestManager58 = function () {
        if (this.$VideoUploadReceiveRequestManager44)
          return this.$VideoUploadReceiveRequestManager44;
        var a = this.$VideoUploadReceiveRequestManager38.getFile();
        if (this.$VideoUploadReceiveRequestManager23) {
          var b = a.getFile();
          this.$VideoUploadReceiveRequestManager44 = b
            ? b.slice(
                this.$VideoUploadReceiveRequestManager38.getStartOffset(),
                this.$VideoUploadReceiveRequestManager38.getEndOffset(),
                "application/octet-stream"
              )
            : null;
        } else
          this.$VideoUploadReceiveRequestManager44 = a.getChunk(
            this.$VideoUploadReceiveRequestManager38.getStartOffset(),
            this.$VideoUploadReceiveRequestManager38.getEndOffset()
          );
        return this.$VideoUploadReceiveRequestManager44;
      };
      e.__createRequestData = function (a) {
        return {
          composer_session_id: a.getComposerSessionID(),
          video_id: a.getVideoID(),
          start_offset: a.getStartOffset(),
          end_offset: a.getEndOffset(),
          source: a.getSource(),
          target_id: a.getTargetID(),
          waterfall_id: a.getWaterfallID(),
          composer_entry_point_ref:
            a.getComposerEntryPointRef && a.getComposerEntryPointRef(),
          composer_work_shared_draft_mode: a.getComposerWorkSharedDraftMode(),
          composer_dialog_version: a.getComposerDialogVersion(),
          has_file_been_replaced: a.getHasFileBeenReplaced(),
          supports_chunking: a.getSupportsChunking(),
          upload_speed: this.$VideoUploadReceiveRequestManager17,
          partition_start_offset: a.getPartitionStartOffset(),
          partition_end_offset: a.getPartitionEndOffset(),
        };
      };
      e.__handleSuccessResponse = function (a) {
        a = a.getPayload();
        this.__handleSuccessResponsePayload(a);
      };
      e.__handleSuccessResponsePayload = function (a) {
        this.$VideoUploadReceiveRequestManager19 = "success response received";
        var b = Date.now() - (this.$VideoUploadReceiveRequestManager16 || 0);
        b = b === 0 ? 1 : b;
        if (
          a.start_offset ===
          this.$VideoUploadReceiveRequestManager38.getEndOffset()
        ) {
          var d =
            this.$VideoUploadReceiveRequestManager38.getEndOffset() -
            this.$VideoUploadReceiveRequestManager38.getStartOffset();
          this.$VideoUploadReceiveRequestManager17 = Math.floor(d / b);
        } else this.$VideoUploadReceiveRequestManager17 = null;
        this.$VideoUploadReceiveRequestManager37.notifySuccess();
        this.inform("request-finished", {
          start_offset:
            this.$VideoUploadReceiveRequestManager38.getStartOffset(),
          end_offset: this.$VideoUploadReceiveRequestManager38.getEndOffset(),
          transport_retries: this.$VideoUploadReceiveRequestManager11,
          server_retries: this.$VideoUploadReceiveRequestManager14,
          upload_speed: this.$VideoUploadReceiveRequestManager17,
          request_manager_state: this.$VideoUploadReceiveRequestManager19,
          upload_domain: this.$VideoUploadReceiveRequestManager39,
          debug: {
            request_reason: this.$VideoUploadReceiveRequestManager20,
            single_request_id: this.$VideoUploadReceiveRequestManager13,
          },
        });
        this.$VideoUploadReceiveRequestManager38.setStartOffset(a.start_offset);
        d = a.end_offset;
        this.$VideoUploadReceiveRequestManager38.getClientChunkSize() &&
          (d =
            a.start_offset +
            Math.min(
              this.$VideoUploadReceiveRequestManager38.getPartitionEndOffset() -
                a.start_offset,
              this.$VideoUploadReceiveRequestManager38.getClientChunkSize()
            ));
        this.$VideoUploadReceiveRequestManager38.setEndOffset(d);
        this.$VideoUploadReceiveRequestManager38.setLastKnownUploadSpeed(
          this.$VideoUploadReceiveRequestManager17
        );
        this.$VideoUploadReceiveRequestManager45 = null;
        this.$VideoUploadReceiveRequestManager44 = null;
        this.$VideoUploadReceiveRequestManager11 = 0;
        this.$VideoUploadReceiveRequestManager14 = 0;
        this.$VideoUploadReceiveRequestManager12 = c("uuid")();
        this.$VideoUploadReceiveRequestManager15 = 0;
        this.$VideoUploadReceiveRequestManager38.getSupportsChunking() &&
          this.$VideoUploadReceiveRequestManager53(j.NEXT_CHUNK, !0);
      };
      e.$VideoUploadReceiveRequestManager66 = function (a) {
        var b = this,
          c = a.getPayload();
        this.$VideoUploadReceiveRequestManager19 =
          "invalid offset response received start=" +
          c.start_offset +
          " end=" +
          c.end_offset;
        (this.$VideoUploadReceiveRequestManager38.getStartOffset() !=
          c.start_offset ||
          this.$VideoUploadReceiveRequestManager38.getEndOffset() !=
            c.end_offset) &&
          (this.$VideoUploadReceiveRequestManager38.setStartOffset(
            c.start_offset
          ),
          this.$VideoUploadReceiveRequestManager38.setEndOffset(c.end_offset),
          (this.$VideoUploadReceiveRequestManager44 = null));
        ((c = this.$VideoUploadReceiveRequestManager38) == null
          ? void 0
          : c.getRetryState()) == null
          ? (this.$VideoUploadReceiveRequestManager14++,
            this.$VideoUploadReceiveRequestManager53(j.INVALID_OFFSET_RETRY))
          : this.$VideoUploadReceiveRequestManager38
              .getRetryState()
              .handleRetry({
                context: { location: "receive-invalid_offset" },
                retryHandler: function (a) {
                  return b.$VideoUploadReceiveRequestManager65(
                    j.INVALID_OFFSET_RETRY,
                    a
                  );
                },
                failureHandler: function () {
                  return b.$VideoUploadReceiveRequestManager67(a);
                },
              });
      };
      e.__handleServerFailureResponse = function (a) {
        var b = this;
        this.$VideoUploadReceiveRequestManager19 = "failure response received";
        this.$VideoUploadReceiveRequestManager45 = null;
        this.$VideoUploadReceiveRequestManager11 = 0;
        this.$VideoUploadReceiveRequestManager17 = null;
        this.$VideoUploadReceiveRequestManager15 = 0;
        this.$VideoUploadReceiveRequestManager37.notifyError();
        if (this.__hasInvalidStartOffsetAndHasRetries(a.getError()))
          this.$VideoUploadReceiveRequestManager66(a);
        else {
          var c;
          ((c = this.$VideoUploadReceiveRequestManager38) == null
            ? void 0
            : c.getRetryState()) == null
            ? (a.isTransient() || this.$VideoUploadReceiveRequestManager10) &&
              this.$VideoUploadReceiveRequestManager14 <
                this.$VideoUploadReceiveRequestManager4
              ? ((this.$VideoUploadReceiveRequestManager19 =
                  "transient server error"),
                this.$VideoUploadReceiveRequestManager14++,
                this.$VideoUploadReceiveRequestManager65(
                  j.SERVER_FAILURE_RETRY,
                  this.$VideoUploadReceiveRequestManager68(
                    this.$VideoUploadReceiveRequestManager9,
                    this.$VideoUploadReceiveRequestManager14,
                    0
                  )
                ))
              : this.$VideoUploadReceiveRequestManager67(a)
            : this.$VideoUploadReceiveRequestManager38
                .getRetryState()
                .handleRetry({
                  context: {
                    location: "receive-server_issue",
                    error_code: a.getError(),
                  },
                  predicate: function () {
                    return a.isTransient();
                  },
                  retryHandler: function (a) {
                    (b.$VideoUploadReceiveRequestManager19 =
                      "transient server error"),
                      b.$VideoUploadReceiveRequestManager65(
                        j.SERVER_FAILURE_RETRY,
                        a
                      );
                  },
                  failureHandler: function () {
                    return b.$VideoUploadReceiveRequestManager67(a);
                  },
                });
        }
      };
      e.__handleResponseTimeout = function (a) {
        var b = this;
        this.inform("request-timeout", {
          start_offset:
            this.$VideoUploadReceiveRequestManager38.getStartOffset(),
          end_offset: this.$VideoUploadReceiveRequestManager38.getEndOffset(),
          transport_retries: this.$VideoUploadReceiveRequestManager11,
          server_retries: this.$VideoUploadReceiveRequestManager14,
          timeout_retries: this.$VideoUploadReceiveRequestManager15,
          upload_speed: this.$VideoUploadReceiveRequestManager17,
          request_manager_state: this.$VideoUploadReceiveRequestManager19,
          debug: {
            upload_domain: this.$VideoUploadReceiveRequestManager39,
            single_request_id: this.$VideoUploadReceiveRequestManager13,
          },
        });
        this.$VideoUploadReceiveRequestManager45.abort();
        this.$VideoUploadReceiveRequestManager45 = null;
        this.$VideoUploadReceiveRequestManager17 = null;
        this.$VideoUploadReceiveRequestManager37.notifyTransportError();
        var c = function () {
            var a =
              b.$VideoUploadReceiveRequestManager38.getEndOffset() -
              b.$VideoUploadReceiveRequestManager38.getStartOffset();
            a = Math.floor(a / 2);
            a = Math.max(a, b.$VideoUploadReceiveRequestManager18);
            var c = b.$VideoUploadReceiveRequestManager38.getEndOffset();
            c = Math.min(
              c,
              b.$VideoUploadReceiveRequestManager38.getStartOffset() + a
            );
            b.$VideoUploadReceiveRequestManager38.setEndOffset(c);
            b.$VideoUploadReceiveRequestManager44 = null;
            b.$VideoUploadReceiveRequestManager19 =
              "resending after timeout with chunksize=" + a;
            b.$VideoUploadReceiveRequestManager53(j.TIMEOUT_RETRY);
          },
          d = function () {
            b.$VideoUploadReceiveRequestManager59({
              error_code: 1006,
              error_description: h._(
                "Your browser appears to be offline. Please check your internet connection and try again."
              ),
              error_summary: h._("No Network Connection"),
              error_is_transient: !0,
            });
          };
        ((a = this.$VideoUploadReceiveRequestManager38) == null
          ? void 0
          : a.getRetryState()) == null
          ? ++this.$VideoUploadReceiveRequestManager15 <=
            this.$VideoUploadReceiveRequestManager6
            ? c()
            : d()
          : this.$VideoUploadReceiveRequestManager38
              .getRetryState()
              .handleRetry({
                context: { location: "receive-timeout", error_code: 1006 },
                retryHandler: function (a) {
                  return c();
                },
                failureHandler: function () {
                  return d();
                },
              });
      };
      e.__hasInvalidStartOffsetAndHasRetries = function (a) {
        return (
          a === i &&
          this.$VideoUploadReceiveRequestManager14 <
            this.$VideoUploadReceiveRequestManager4
        );
      };
      e.$VideoUploadReceiveRequestManager55 = function (a) {
        var b,
          c = this;
        this.$VideoUploadReceiveRequestManager37.notifyTransportError();
        this.$VideoUploadReceiveRequestManager17 = null;
        ((b = this.$VideoUploadReceiveRequestManager38) == null
          ? void 0
          : b.getRetryState()) == null
          ? ((this.$VideoUploadReceiveRequestManager15 = 0),
            this.$VideoUploadReceiveRequestManager11 <
            this.$VideoUploadReceiveRequestManager2
              ? ((this.$VideoUploadReceiveRequestManager19 =
                  "resending after transport failure"),
                this.$VideoUploadReceiveRequestManager11++,
                (this.$VideoUploadReceiveRequestManager45 = null),
                this.$VideoUploadReceiveRequestManager65(
                  j.TRANSPORT_FAILURE_RETRY,
                  this.$VideoUploadReceiveRequestManager68(
                    this.$VideoUploadReceiveRequestManager8,
                    this.$VideoUploadReceiveRequestManager11,
                    this.$VideoUploadReceiveRequestManager3
                  )
                ))
              : this.$VideoUploadReceiveRequestManager67(a))
          : this.$VideoUploadReceiveRequestManager38
              .getRetryState()
              .handleRetry({
                context: {
                  location: "receive-transport_issue",
                  error_code: a.getError(),
                },
                retryHandler: function (a) {
                  (c.$VideoUploadReceiveRequestManager45 = null),
                    (c.$VideoUploadReceiveRequestManager19 =
                      "resending after transport failure"),
                    c.$VideoUploadReceiveRequestManager65(
                      j.TRANSPORT_FAILURE_RETRY,
                      a
                    );
                },
                failureHandler: function () {
                  return c.$VideoUploadReceiveRequestManager67(a);
                },
              });
      };
      e.$VideoUploadReceiveRequestManager67 = function (a) {
        this.$VideoUploadReceiveRequestManager59({
          error_code: a.getError(),
          error_description: a.getErrorDescription(),
          error_summary: a.getErrorSummary(),
          error_is_transient: a.isTransient(),
          upload_domain: this.uploadDomain,
          www_request_id:
            (a = a.getPayload()) == null ? void 0 : a.__www_request_id__,
        });
      };
      e.$VideoUploadReceiveRequestManager59 = function (a) {
        (this.$VideoUploadReceiveRequestManager19 = "handling failure error"),
          (a.debug = babelHelpers["extends"]({}, a.debug, {
            single_request_id: this.$VideoUploadReceiveRequestManager13,
          })),
          this.inform("request-failed", a),
          this.$VideoUploadReceiveRequestManager54();
      };
      e.$VideoUploadReceiveRequestManager56 = function (a) {
        this.$VideoUploadReceiveRequestManager37.notifyProgress(a),
          this.$VideoUploadReceiveRequestManager38 &&
            this.$VideoUploadReceiveRequestManager38.getFile() &&
            this.inform("request-progressed", {
              file_size: this.$VideoUploadReceiveRequestManager38
                .getFile()
                .getSize(),
              start_offset:
                this.$VideoUploadReceiveRequestManager38.getStartOffset(),
              sent_bytes: a.loaded,
              transport_retries: this.$VideoUploadReceiveRequestManager11,
              upload_domain: this.$VideoUploadReceiveRequestManager39,
              debug: {
                single_request_id: this.$VideoUploadReceiveRequestManager13,
              },
            });
      };
      e.$VideoUploadReceiveRequestManager50 = function () {
        var a;
        this.inform("online");
        this.$VideoUploadReceiveRequestManager11 = 0;
        this.$VideoUploadReceiveRequestManager15 = 0;
        (a = this.$VideoUploadReceiveRequestManager38) == null
          ? void 0
          : (a = a.getRetryState()) == null
          ? void 0
          : a.resetDelay();
        this.$VideoUploadReceiveRequestManager46 &&
          this.$VideoUploadReceiveRequestManager53(j.BACK_ONLINE);
      };
      e.$VideoUploadReceiveRequestManager51 = function () {
        this.inform("offline");
      };
      e.$VideoUploadReceiveRequestManager68 = function (a, b, c) {
        var d;
        this.$VideoUploadReceiveRequestManager23
          ? (d = Math.min(Math.pow(a, b), 8) * 1e3)
          : (d = Math.pow(a, b) * 1e3);
        c > 0 && (d = Math.min(d, c));
        return d;
      };
      e.$VideoUploadReceiveRequestManager57 = function (a, b) {
        b !== void 0 && b !== null && b > 0 ? (b = b) : (b = 10);
        a = Math.floor(
          ((a / b) * this.$VideoUploadReceiveRequestManager7) / 100
        );
        return Math.max(a, 3e4);
      };
      e.$VideoUploadReceiveRequestManager63 = function () {
        return this.$VideoUploadReceiveRequestManager28
          ? this.$VideoUploadReceiveRequestManager28
          : this.$VideoUploadReceiveRequestManager38.getWaterfallID();
      };
      return b;
    })(c("mixin")(b("cr:909282")));
    g["default"] = a;
  },
  98
);
__d(
  "VideoUploadStartRequestManager",
  [
    "Assert",
    "FileHasher",
    "VideoUploadRequest",
    "clearTimeout",
    "cr:909282",
    "mixin",
    "performanceNow",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i) {
        var j;
        j = a.call(this) || this;
        j.$VideoUploadStartRequestManager1 = b;
        j.$VideoUploadStartRequestManager2 = c;
        j.$VideoUploadStartRequestManager3 = d;
        j.$VideoUploadStartRequestManager4 = e;
        j.$VideoUploadStartRequestManager5 = 0;
        j.$VideoUploadStartRequestManager6 = f;
        j.$VideoUploadStartRequestManager7 = g;
        j.$VideoUploadStartRequestManager8 = h;
        j.$VideoUploadStartRequestManager9 = i;
        j.$VideoUploadStartRequestManager10 = 0;
        return j;
      }
      var d = b.prototype;
      d.getRequest = function () {
        return this.$VideoUploadStartRequestManager11;
      };
      d.sendRequest = function (a) {
        var b = this;
        if (
          this.$VideoUploadStartRequestManager12 ||
          this.$VideoUploadStartRequestManager11
        )
          return;
        this.$VideoUploadStartRequestManager13 = a;
        this.$VideoUploadStartRequestManager6 &&
        this.$VideoUploadStartRequestManager13.getFile().getFile() &&
        this.$VideoUploadStartRequestManager13.getFile().getFile().size <
          this.$VideoUploadStartRequestManager7 &&
        c("FileHasher").isSupported()
          ? ((this.$VideoUploadStartRequestManager14 = c("performanceNow")()),
            (this.$VideoUploadStartRequestManager12 = new (c("FileHasher"))()),
            this.$VideoUploadStartRequestManager12.hash(
              this.$VideoUploadStartRequestManager13.getFile().getFile(),
              function (a) {
                (b.$VideoUploadStartRequestManager14 =
                  c("performanceNow")() - b.$VideoUploadStartRequestManager14),
                  (b.$VideoUploadStartRequestManager15 = a.hash),
                  b.$VideoUploadStartRequestManager12.destroy(),
                  (b.$VideoUploadStartRequestManager12 = null),
                  a.hash || (b.$VideoUploadStartRequestManager16 = a.exception),
                  b.$VideoUploadStartRequestManager17();
              }
            ))
          : this.$VideoUploadStartRequestManager17();
      };
      d.$VideoUploadStartRequestManager17 = function () {
        this.$VideoUploadStartRequestManager18(),
          this.inform("request-started", {
            hash_time: this.$VideoUploadStartRequestManager14,
            hash_exception: this.$VideoUploadStartRequestManager16,
          });
      };
      d.$VideoUploadStartRequestManager18 = function () {
        c("clearTimeout")(this.$VideoUploadStartRequestManager19),
          (this.$VideoUploadStartRequestManager19 = null),
          (this.$VideoUploadStartRequestManager11 =
            this.__getVideoUploadRequest(this.$VideoUploadStartRequestManager1)
              .setAllowCrossOrigin(!0)
              .setData(
                this.__getDataToSend(
                  this.$VideoUploadStartRequestManager13,
                  this.$VideoUploadStartRequestManager15
                )
              )
              .setWaterfallID(
                this.$VideoUploadStartRequestManager13.getWaterfallID()
              )
              .setSuccessHandler(
                this.$VideoUploadStartRequestManager20.bind(this)
              )
              .setErrorHandler(
                this.$VideoUploadStartRequestManager21.bind(this)
              )
              .setTransportErrorHandler(
                this.$VideoUploadStartRequestManager22.bind(this)
              )),
          this.$VideoUploadStartRequestManager11.send();
      };
      d.__getVideoUploadRequest = function (a) {
        return new (c("VideoUploadRequest"))(a);
      };
      d.__getDataToSend = function (a, b) {
        b = {
          file_size: a.getFile().getSize(),
          file_extension: a.getFile().getExtension(),
          target_id: a.getTargetID(),
          source: a.getSource(),
          composer_dialog_version: a.getComposerDialogVersion(),
          waterfall_id: a.getWaterfallID(),
          composer_session_id: a.getComposerSessionID(),
          composer_entry_point_ref:
            a.getComposerEntryPointRef && a.getComposerEntryPointRef(),
          composer_work_shared_draft_mode: a.getComposerWorkSharedDraftMode(),
          has_file_been_replaced: a.getHasFileBeenReplaced(),
          supports_chunking: a.getSupportsChunking(),
          supports_file_api: a.getSupportsFileAPI(),
          partition_start_offset: a.getPartitionStartOffset(),
          partition_end_offset: a.getPartitionEndOffset(),
          creator_product: a.getCreatorProduct(),
          original_file_hash: b,
          spherical: a.getIsSphericalVideo(),
          spherical_metadata: a.getSphericalMetadata(),
          video_publisher_action_source: a.getVideoPublisherActionSource(),
        };
        a.getCreativeTools() != null &&
          (b.creative_tools = a.getCreativeTools());
        return b;
      };
      d.cancelRequest = function () {
        this.$VideoUploadStartRequestManager23(),
          this.inform("request-canceled");
      };
      d.$VideoUploadStartRequestManager24 = function (a) {
        c("clearTimeout")(this.$VideoUploadStartRequestManager19),
          (this.$VideoUploadStartRequestManager19 = c("setTimeout")(
            this.$VideoUploadStartRequestManager18.bind(this),
            a
          ));
      };
      d.$VideoUploadStartRequestManager23 = function () {
        this.$VideoUploadStartRequestManager12 &&
          (this.$VideoUploadStartRequestManager12.destroy(),
          (this.$VideoUploadStartRequestManager12 = null)),
          this.$VideoUploadStartRequestManager11 &&
            (this.$VideoUploadStartRequestManager11.abort(),
            (this.$VideoUploadStartRequestManager11 = null)),
          (this.$VideoUploadStartRequestManager10 = 0),
          (this.$VideoUploadStartRequestManager5 = 0),
          (this.$VideoUploadStartRequestManager13 = null),
          c("clearTimeout")(this.$VideoUploadStartRequestManager19),
          (this.$VideoUploadStartRequestManager19 = null);
      };
      d.$VideoUploadStartRequestManager25 = function (a, b, c) {
        a = Math.pow(a, b) * 1e3;
        c > 0 && (a = Math.min(a, c));
        return a;
      };
      d.$VideoUploadStartRequestManager20 = function (a) {
        var b;
        (b = this.$VideoUploadStartRequestManager13) == null
          ? void 0
          : (b = b.getRetryState()) == null
          ? void 0
          : b.resetDelay();
        b = a.getPayload();
        this.inform("request-finished", this.__getSuccessInformData(b));
        this.$VideoUploadStartRequestManager11 = null;
        c("Assert").isTrue(
          this.$VideoUploadStartRequestManager12 == null,
          "Unexpected: if file hasher is not null, clean up is required."
        );
      };
      d.__getSuccessInformData = function (a) {
        return {
          video_id: a.video_id,
          xpv_asset_id: a.xpv_asset_id,
          is_xpv_single_prod: a.is_xpv_single_prod,
          upload_session_id: a.upload_session_id,
          fb_region: a.region_hint,
          start_offset: a.start_offset,
          end_offset: a.end_offset,
          transport_retries: this.$VideoUploadStartRequestManager5,
          server_retries: this.$VideoUploadStartRequestManager10,
          skip_upload: a.skip_upload,
          hash_time: this.$VideoUploadStartRequestManager14,
        };
      };
      d.$VideoUploadStartRequestManager26 = function (a) {
        this.inform(
          "request-failed",
          this.$VideoUploadStartRequestManager27(a)
        ),
          (this.$VideoUploadStartRequestManager11 = null),
          c("Assert").isTrue(
            this.$VideoUploadStartRequestManager12 == null,
            "Unexpected: if file hasher is not null, clean up is required."
          );
      };
      d.$VideoUploadStartRequestManager21 = function (a) {
        var b,
          c = this;
        this.$VideoUploadStartRequestManager11 = null;
        var d =
          (b = this.$VideoUploadStartRequestManager13) == null
            ? void 0
            : b.getRetryState();
        d == null
          ? ((this.$VideoUploadStartRequestManager5 = 0),
            a.isTransient() &&
            this.$VideoUploadStartRequestManager10 <
              this.$VideoUploadStartRequestManager8
              ? (this.$VideoUploadStartRequestManager10++,
                this.$VideoUploadStartRequestManager24(
                  this.$VideoUploadStartRequestManager25(
                    this.$VideoUploadStartRequestManager9,
                    this.$VideoUploadStartRequestManager10
                  )
                ))
              : this.$VideoUploadStartRequestManager26(a))
          : d.handleRetry({
              context: {
                location: "start-server_issue",
                error_code: a.getError(),
              },
              predicate: function () {
                return a.isTransient();
              },
              retryHandler: function (a) {
                (c.$VideoUploadStartRequestManager10 = d.getTotalRetryCount()),
                  c.$VideoUploadStartRequestManager24(a);
              },
              failureHandler: function () {
                return c.$VideoUploadStartRequestManager26(a);
              },
            });
      };
      d.$VideoUploadStartRequestManager22 = function (a) {
        var b,
          c = this;
        ((b = this.$VideoUploadStartRequestManager13) == null
          ? void 0
          : b.getRetryState()) == null
          ? this.$VideoUploadStartRequestManager2 === 0 ||
            this.$VideoUploadStartRequestManager5 >=
              this.$VideoUploadStartRequestManager2
            ? this.$VideoUploadStartRequestManager26(a)
            : (this.$VideoUploadStartRequestManager5++,
              (this.$VideoUploadStartRequestManager11 = null),
              this.$VideoUploadStartRequestManager24(
                this.$VideoUploadStartRequestManager25(
                  this.$VideoUploadStartRequestManager3,
                  this.$VideoUploadStartRequestManager5,
                  this.$VideoUploadStartRequestManager4
                )
              ))
          : this.$VideoUploadStartRequestManager13.getRetryState().handleRetry({
              context: {
                location: "start-transport_issue",
                error_code: a.getError(),
              },
              retryHandler: function (a) {
                (c.$VideoUploadStartRequestManager11 = null),
                  c.$VideoUploadStartRequestManager24(a);
              },
              failureHandler: function () {
                return c.$VideoUploadStartRequestManager26(a);
              },
            });
      };
      d.$VideoUploadStartRequestManager27 = function (a) {
        return {
          error_code: a.getError(),
          error_description: a.getErrorDescription(),
          error_summary: a.getErrorSummary(),
          transport_retries: this.$VideoUploadStartRequestManager5,
          server_retries: this.$VideoUploadStartRequestManager10,
          error_is_transient: a.isTransient(),
          www_request_id:
            (a = a.getPayload()) == null ? void 0 : a.__www_request_id__,
        };
      };
      return b;
    })(c("mixin")(b("cr:909282")));
    d = a;
    g["default"] = d;
  },
  98
);
__d(
  "VideoUploadSession",
  [
    "AsyncRequest",
    "GraphQLVideoPublishUtils",
    "SubscriptionsHandler",
    "VideoUploadCrashMonitor",
    "VideoUploadFeatureDetector",
    "VideoUploadFileValidator",
    "VideoUploadGraphQLPostRequestManager",
    "VideoUploadLogger",
    "VideoUploadMetadataParser",
    "VideoUploadPostRequestManager",
    "VideoUploadReceiveRequestManager",
    "VideoUploadRequestContext",
    "VideoUploadStartRequestManager",
    "WaterfallIDGenerator",
    "cr:1661398",
    "cr:909282",
    "getByPath",
    "mediaUploadLogStackTrace",
    "mixin",
  ],
  function (a, b, c, d, e, f) {
    var g = {
      CANCELED: "canceled",
      ABANDONED: "abandoned",
      SHUTDOWN: "shutdown",
    };
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        var d;
        d = a.call(this) || this;
        d.$VideoUploadSession1 = c.source;
        d.$VideoUploadSession2 = c.composer_dialog_version;
        d.$VideoUploadSession3 = c.target_id;
        d.$VideoUploadSession4 = c.logging_delay;
        d.$VideoUploadSession5 = c.silent_file_validation;
        d.$VideoUploadSession6 = c.background_upload;
        d.$VideoUploadSession7 = c.actor_id;
        d.$VideoUploadSession8 = c.composer_entry_point_ref;
        d.$VideoUploadSession9 = c.composer_work_shared_draft_mode;
        d.$VideoUploadSession10 = c.video_publisher_action_source;
        d.$VideoUploadSession11 = c.monitor_crashes;
        d.$VideoUploadSession12 = c.isMultiMediaPost;
        d.$VideoUploadSession13 = c.container_type;
        d.$VideoUploadSession14 = c.number_of_partitions;
        d.$VideoUploadSession15 = c.multi_partitioning_enabled;
        d.$VideoUploadSession16 = c.change_default_chunk_size;
        d.$VideoUploadSession17 = c.has_file_been_replaced
          ? c.has_file_been_replaced
          : !1;
        d.$VideoUploadSession16 &&
          (d.$VideoUploadSession18 = c.client_chunk_size);
        d.$VideoUploadSession19 = c.early_receive;
        d.$VideoUploadSession20 = !1;
        d.$VideoUploadSession21 = c.accept_dimensions_from_player;
        d.$VideoUploadSession22 = c.ad_account_id;
        d.$VideoUploadSession23 = c.waterfall_id;
        d.$VideoUploadSession24 = new (b("VideoUploadFileValidator"))({
          minSize: c.min_size,
          maxSize: c.max_size,
          minLength: c.min_length,
          maxLength: c.max_length,
          minWidth: c.min_width,
          minHeight: c.min_height,
          extensions: c.extensions,
          source: c.source,
          require16to9AspectRatio: c.require_16to9_aspect_ratio,
          minAspectRatio: c.min_aspect_ratio,
          maxAspectRatio: c.max_aspect_ratio,
          acceptDimensionsFromPlayer: c.accept_dimensions_from_player,
        });
        d.$VideoUploadSession25 = b(
          "VideoUploadFeatureDetector"
        ).supportsChunking();
        d.$VideoUploadSession26 = b(
          "VideoUploadFeatureDetector"
        ).supportsFileAPI();
        d.$VideoUploadSession25
          ? ((d.$VideoUploadSession27 = c.parallel_chunk_uploads),
            d.$VideoUploadSession27 &&
              ((d.$VideoUploadSession28 = c.parallel_chunk_upload_filesize),
              (d.$VideoUploadSession29 = c.default_chunk_size)))
          : (d.$VideoUploadSession27 = !1);
        d.$VideoUploadSession30 = c.shutdown_logging_enabled;
        d.$VideoUploadSession31 = d.$VideoUploadSession32(c);
        d.$VideoUploadSession33 = d.$VideoUploadSession34(c);
        if (d.$VideoUploadSession27)
          if (d.$VideoUploadSession15) {
            var e = 0;
            d.$VideoUploadSession35 = [];
            for (e = 0; e < d.$VideoUploadSession14 - 1; e++)
              d.$VideoUploadSession35[e] = d.$VideoUploadSession34(c);
          } else d.$VideoUploadSession35 = d.$VideoUploadSession34(c);
        d.$VideoUploadSession36 = d.$VideoUploadSession37(c);
        d.$VideoUploadSession38 = d.$VideoUploadSession39(c);
        d.$VideoUploadSession40 = c.log_free_local_storage;
        d.$VideoUploadSession41 = null;
        return d;
      }
      var d = c.prototype;
      d.$VideoUploadSession42 = function () {
        this.$VideoUploadSession43 = [];
        this.$VideoUploadSession44 = [];
        this.$VideoUploadSession45 = [];
        this.$VideoUploadSession46 = [];
        this.$VideoUploadSession47 = [];
        var a = 0;
        for (a = 0; a < this.$VideoUploadSession48 - 1; a++)
          this.$VideoUploadSession43.push(!1);
      };
      d.$VideoUploadSession49 = function () {
        var a;
        this.$VideoUploadSession23 == null &&
          (this.$VideoUploadSession23 = b("WaterfallIDGenerator").generate());
        this.$VideoUploadSession50 = new (b("VideoUploadLogger"))({
          actor_id: this.$VideoUploadSession7,
          ad_account_id: this.$VideoUploadSession22,
          source: this.$VideoUploadSession1,
          composer_dialog_version: this.$VideoUploadSession2,
          waterfall_id: this.$VideoUploadSession23,
          target_id: this.$VideoUploadSession3,
          delay: this.$VideoUploadSession4,
          is_chunked_upload: this.$VideoUploadSession25,
          composer_entry_point_ref: this.$VideoUploadSession8,
          composer_work_shared_draft_mode: this.$VideoUploadSession9,
          container_type: this.$VideoUploadSession13,
          has_file_been_replaced: this.$VideoUploadSession17,
          composer_session_id: this.$VideoUploadSession51,
          asset_id:
            (a = this.$VideoUploadSession52) == null
              ? void 0
              : a.getStableAssetID(),
          creative_tools: this.$VideoUploadSession53,
        });
        this.inform("set-waterfall-id", {
          waterfallID: this.$VideoUploadSession23,
        });
      };
      d.createTestLogger = function () {
        this.$VideoUploadSession49();
      };
      d.$VideoUploadSession54 = function () {
        this.$VideoUploadSession50 || this.$VideoUploadSession49();
        return this.$VideoUploadSession50;
      };
      d.getLogger = function () {
        return !this.$VideoUploadSession50 ? null : this.$VideoUploadSession50;
      };
      d.$VideoUploadSession55 = function () {
        var a,
          c = this;
        a =
          b("cr:1661398") == null
            ? void 0
            : (a = b("cr:1661398").VideoUploadRetries) == null
            ? void 0
            : a.createState();
        a != null &&
          (a.addListener("retry-attempted", function (a) {
            var d = a.delay_retry_count,
              e = a.total_retry_count,
              f = a.since_started_ms,
              g = a.retry_context;
            a = a.backoff_ms;
            c.__logEvent(b("VideoUploadLogger").EVENT_RETRY_ATTEMPT, {
              retries: e,
              elapsed_time: f,
              error_trace: g == null ? void 0 : g.location,
              error_code: g == null ? void 0 : g.error_code,
              debug: { delay_retry_count: d, backoff_ms: a },
            });
          }),
          a.addListener("retries-abandoned", function (a) {
            var d = a.delay_retry_count,
              e = a.total_retry_count,
              f = a.since_started_ms,
              g = a.retry_context;
            a = a.abandon_reason;
            c.__logEvent(b("VideoUploadLogger").EVENT_RETRY_ATTEMPT, {
              retries: e,
              elapsed_time: f,
              error: a,
              error_trace: g == null ? void 0 : g.location,
              error_code: g == null ? void 0 : g.error_code,
              debug: { delay_retry_count: d },
            });
          }));
        return a;
      };
      d.start = function (a) {
        var c = this;
        this.$VideoUploadSession56 = null;
        this.$VideoUploadSession57 = null;
        this.$VideoUploadSession58 = null;
        this.$VideoUploadSession59 = !1;
        this.$VideoUploadSession60 = !1;
        this.$VideoUploadSession61 = null;
        this.$VideoUploadSession52 = a;
        this.$VideoUploadSession62 = 0;
        this.$VideoUploadSession63 = !1;
        this.$VideoUploadSession64 = {
          sphericalMetadataXml: null,
          fbSpatialAudioMetadataXml: null,
          ytSa3dMetadataJson: null,
        };
        this.$VideoUploadSession65 = !1;
        this.$VideoUploadSession41 = this.$VideoUploadSession55();
        this.$VideoUploadSession49();
        b("mediaUploadLogStackTrace")({
          waterfallID: this.$VideoUploadSession23,
          sourceType: this.$VideoUploadSession1,
          composerEntryPointRef: this.$VideoUploadSession8,
        });
        this.$VideoUploadSession15 &&
          (this.$VideoUploadSession48 = Math.min(
            this.$VideoUploadSession14,
            Math.ceil(
              this.$VideoUploadSession52.getSize() / this.$VideoUploadSession28
            )
          ));
        this.__logEvent(b("VideoUploadLogger").EVENT_REQUESTED_UPLOADING);
        this.inform("upload-requested");
        a = new (b("VideoUploadMetadataParser"))(
          this.$VideoUploadSession52,
          this.$VideoUploadSession66.bind(this),
          this.$VideoUploadSession21
        );
        a.parse();
        this.$VideoUploadSession40 &&
          navigator.webkitTemporaryStorage &&
          navigator.webkitTemporaryStorage.queryUsageAndQuota(function (a, d) {
            c.__logEvent(
              b("VideoUploadLogger").EVENT_MEASURE_FREE_LOCAL_STORAGE,
              { free_space_in_device: d }
            );
          });
      };
      d.setTargetID = function (a) {
        this.$VideoUploadSession3 = a;
      };
      d.setComposerSessionID = function (a) {
        this.$VideoUploadSession51 = a;
      };
      d.setCreativeTools = function (a) {
        this.$VideoUploadSession53 = a;
      };
      d.post = function (a) {
        var c;
        this.__logEvent(
          b("VideoUploadLogger").EVENT_STARTED_POST_REQUEST,
          this.$VideoUploadSession67
        );
        this.inform("post-started", a);
        var d = this.__createPostRequestContext(a);
        if (
          b("GraphQLVideoPublishUtils").isGraphQLPublish(
            this.$VideoUploadSession1,
            this.$VideoUploadSession8,
            (c = a == null ? void 0 : a.shouldPremiere) != null ? c : !1
          ) &&
          this.$VideoUploadSession38.hasAPISupport(a)
        ) {
          this.$VideoUploadSession38.sendRequest(d);
          this.$VideoUploadSession68 = a;
          return;
        }
        this.$VideoUploadSession36.sendRequest(d);
        this.$VideoUploadSession68 = a;
      };
      d.__createPostRequestContext = function (a) {
        var c = new (b("VideoUploadRequestContext"))();
        this.__setupPostRequestContext(c, a);
        return c;
      };
      d.__setupPostRequestContext = function (a, b) {
        a
          .setMetadata(b)
          .setVideoID(this.$VideoUploadSession56)
          .setTargetID(this.$VideoUploadSession3)
          .setSource(this.$VideoUploadSession1)
          .setComposerDialogVersion(this.$VideoUploadSession2)
          .setComposerWorkSharedDraftMode(this.$VideoUploadSession9)
          .setWaterfallID(this.$VideoUploadSession23)
          .setComposerSessionID(this.$VideoUploadSession51)
          .setSupportsChunking(this.$VideoUploadSession25)
          .setCreatorProduct(this.$VideoUploadSession52.getCreatorProduct())
          .setFile(this.$VideoUploadSession52)
          .setHasFileBeenReplaced(this.$VideoUploadSession17),
          b &&
            (b.spherical &&
              ((this.$VideoUploadSession63 = !0),
              a.setIsSphericalVideo(this.$VideoUploadSession63)),
            b.enable_omnistab &&
              ((this.$VideoUploadSession65 = !0),
              a.setEnableOmnistab(this.$VideoUploadSession65))),
          a.setComposerEntryPointRef &&
            a.setComposerEntryPointRef(this.$VideoUploadSession8);
      };
      d.$VideoUploadSession69 = function (a, d) {
        if (this.$VideoUploadSession59) {
          var e = {
            event_reason: d,
            debug: babelHelpers["extends"](
              {},
              this.__fetchReceiveRequestManagerStateLogData(),
              { is_background_upload: this.$VideoUploadSession6 }
            ),
          };
          d =
            d === g.CANCELED
              ? b("VideoUploadLogger").EVENT_CANCELED_UPLOADING
              : b("VideoUploadLogger").EVENT_ABANDONED_UPLOADING;
          this.$VideoUploadSession70();
          this.$VideoUploadSession6
            ? (this.$VideoUploadSession60 || this.__logEvent(d),
              this.$VideoUploadSession71 &&
                (this.__logEvent(b("VideoUploadLogger").EVENT_CANCELED_FLOW, e),
                (this.$VideoUploadSession71 = !1)))
            : (this.__logEvent(d),
              this.__logEvent(b("VideoUploadLogger").EVENT_CANCELED_FLOW, e));
          this.inform("upload-canceled");
        } else
          a &&
            this.$VideoUploadSession56 &&
            c.deleteVideo(this.$VideoUploadSession56);
      };
      d.cancel = function (a) {
        a === void 0 && (a = !1), this.$VideoUploadSession69(a, g.CANCELED);
      };
      d.abandon = function (a) {
        a === void 0 && (a = !1), this.$VideoUploadSession69(a, g.ABANDONED);
      };
      d.isPostInProgress = function () {
        return this.$VideoUploadSession36.isInProgress();
      };
      d.isInProgress = function () {
        return this.$VideoUploadSession59;
      };
      d.getHasUploadFinished = function () {
        return this.$VideoUploadSession60;
      };
      d.getVideoID = function () {
        return this.$VideoUploadSession56;
      };
      d.getUploadTime = function () {
        return this.$VideoUploadSession72;
      };
      d.getExPartitionNumber = function (a) {
        var b;
        for (b = 0; b < this.$VideoUploadSession48 - 1; b++)
          if (
            a >= this.$VideoUploadSession44[b] &&
            a < this.$VideoUploadSession45[b]
          )
            break;
        return b === this.$VideoUploadSession48 ? -1 : b;
      };
      d.getIsSphericalVideo = function () {
        return this.$VideoUploadSession63 || !1;
      };
      d.startFlow = function () {
        if (!this.$VideoUploadSession6 || this.$VideoUploadSession71) return;
        this.__logEvent(b("VideoUploadLogger").EVENT_STARTED_FLOW, {
          is_spherical: this.getIsSphericalVideo() ? "true" : null,
        });
        this.$VideoUploadSession71 = !0;
        this.$VideoUploadSession73 && this.$VideoUploadSession73.flowStarted();
      };
      d.__extractVideoMetadata = function (a) {
        var c;
        a = (c = b("getByPath"))(a, ["streams", "primaryVideo"]);
        c = {
          source_height: c(a, ["height"]),
          source_width: c(a, ["width"]),
          duration: c(a, ["duration"]) * 1e3,
        };
        c.original_video_duration = c.duration;
        return c;
      };
      d.$VideoUploadSession66 = function (a) {
        var c;
        if (this.$VideoUploadSession5) {
          var d = this.$VideoUploadSession24.getValidationErrorMessage(
            this.$VideoUploadSession52,
            a
          );
          d
            ? ((c = {
                error_summary: d.summary,
                error_description: d.description,
              }),
              (d = !1))
            : (d = !0);
        } else
          d = this.$VideoUploadSession24.validate(
            this.$VideoUploadSession52,
            a
          );
        if (!d) {
          this.__logEvent(b("VideoUploadLogger").EVENT_INVALIDATED_UPLOADING);
          this.inform("upload-failed", c);
          return;
        }
        this.$VideoUploadSession67 = this.__extractVideoMetadata(a);
        a &&
          a.format &&
          ((this.$VideoUploadSession63 = a.format.isSpherical),
          a.metadata &&
            ((this.$VideoUploadSession64.sphericalMetadataXml =
              a.metadata.sphericalMetadataXml),
            (this.$VideoUploadSession64.fbSpatialAudioMetadataXml =
              a.metadata.fbSpatialAudioMetadataXml),
            (this.$VideoUploadSession64.ytSa3dMetadataJson =
              a.metadata.ytSa3dMetadataJson)));
        this.$VideoUploadSession6 ||
          this.__logEvent(b("VideoUploadLogger").EVENT_STARTED_FLOW, {
            is_spherical: this.getIsSphericalVideo() ? "true" : null,
          });
        this.$VideoUploadSession74 =
          this.$VideoUploadSession27 &&
          this.$VideoUploadSession52.getSize() >= this.$VideoUploadSession28;
        this.$VideoUploadSession75 = !1;
        this.$VideoUploadSession76 = 0;
        this.$VideoUploadSession77 = this.$VideoUploadSession76;
        this.$VideoUploadSession78 = 0;
        this.$VideoUploadSession15
          ? this.$VideoUploadSession42()
          : (this.$VideoUploadSession43 = !1);
        if (this.$VideoUploadSession74)
          if (this.$VideoUploadSession15) {
            d = 0;
            this.$VideoUploadSession79 = Math.ceil(
              this.$VideoUploadSession52.getSize() / this.$VideoUploadSession48
            );
            var e = this.$VideoUploadSession79,
              f = this.$VideoUploadSession79;
            for (d = 0; d < this.$VideoUploadSession48 - 1; d++)
              (this.$VideoUploadSession44[d] = e),
                (e = Math.min(
                  this.$VideoUploadSession44[d] + f,
                  this.$VideoUploadSession52.getSize()
                )),
                (this.$VideoUploadSession45[d] = e),
                (this.$VideoUploadSession46[d] = this.$VideoUploadSession44[d]),
                (this.$VideoUploadSession47[d] = 0);
          } else
            (this.$VideoUploadSession79 = Math.floor(
              this.$VideoUploadSession52.getSize() / 2
            )),
              (this.$VideoUploadSession44 = this.$VideoUploadSession79),
              (this.$VideoUploadSession46 = this.$VideoUploadSession44),
              (this.$VideoUploadSession47 = 0),
              (this.$VideoUploadSession45 =
                this.$VideoUploadSession52.getSize());
        else this.$VideoUploadSession79 = this.$VideoUploadSession52.getSize();
        d = new (b("VideoUploadRequestContext"))()
          .setFile(this.$VideoUploadSession52)
          .setTargetID(this.$VideoUploadSession3)
          .setSource(this.$VideoUploadSession1)
          .setComposerDialogVersion(this.$VideoUploadSession2)
          .setComposerWorkSharedDraftMode(this.$VideoUploadSession9)
          .setWaterfallID(this.$VideoUploadSession23)
          .setComposerSessionID(this.$VideoUploadSession51)
          .setHasFileBeenReplaced(this.$VideoUploadSession17)
          .setSupportsChunking(this.$VideoUploadSession25)
          .setSupportsFileAPI(this.$VideoUploadSession26)
          .setCreatorProduct(this.$VideoUploadSession52.getCreatorProduct())
          .setPartitionStartOffset(this.$VideoUploadSession76)
          .setPartitionEndOffset(this.$VideoUploadSession79)
          .setRetryState(this.$VideoUploadSession41)
          .setCreativeTools(this.$VideoUploadSession53);
        this.$VideoUploadSession27 &&
          d.setUseParallelChunks(this.$VideoUploadSession27);
        this.$VideoUploadSession63 &&
          (d.setIsSphericalVideo(this.$VideoUploadSession63),
          d.setSphericalMetadata(this.$VideoUploadSession64));
        d.setComposerEntryPointRef &&
          d.setComposerEntryPointRef(this.$VideoUploadSession8);
        d.setVideoPublisherActionSource(this.$VideoUploadSession10);
        this.$VideoUploadSession80();
        this.$VideoUploadSession31.sendRequest(d);
        this.$VideoUploadSession19 &&
          this.$VideoUploadSession16 &&
          this.$VideoUploadSession33.isResumabilityEnabled() &&
          !this.$VideoUploadSession33.isResumableServiceProxyReceiveEnabled() &&
          this.$VideoUploadSession81();
        this.inform("metadata-parsed", a);
      };
      d.$VideoUploadSession32 = function (a) {
        var b = this.$VideoUploadSession25 ? a.chunk_start_uri : a.start_uri;
        b = this.__getVideoUploadStartRequestManager(
          b,
          a.start_max_transport_retries,
          a.start_transport_retry_interval_base,
          a.start_max_transport_retry_timeout,
          a.skip_upload_enabled,
          a.skip_upload_file_size_limit,
          a.start_max_server_retries,
          a.start_server_retry_interval_base
        );
        b.subscribe("request-started", this.$VideoUploadSession82.bind(this));
        b.subscribe("request-finished", this.$VideoUploadSession83.bind(this));
        b.subscribe("request-failed", this.$VideoUploadSession84.bind(this));
        b.subscribe("request-canceled", this.$VideoUploadSession85.bind(this));
        return b;
      };
      d.$VideoUploadSession34 = function (a) {
        var b = this.$VideoUploadSession25
          ? a.chunk_receive_uri
          : a.receive_uri;
        b = this.__getVideoUploadReceiveRequestManager(b, a);
        b.subscribe("request-started", this.$VideoUploadSession86.bind(this));
        b.subscribe(
          "request-progressed",
          this.$VideoUploadSession87.bind(this)
        );
        b.subscribe("request-finished", this.$VideoUploadSession88.bind(this));
        b.subscribe("request-failed", this.$VideoUploadSession89.bind(this));
        b.subscribe("request-canceled", this.$VideoUploadSession90.bind(this));
        b.subscribe("request-timeout", this.$VideoUploadSession91.bind(this));
        b.subscribe("online", this.$VideoUploadSession92.bind(this));
        b.subscribe("offline", this.$VideoUploadSession93.bind(this));
        b.subscribe("resumable-called", this.$VideoUploadSession94.bind(this));
        b.subscribe("resumable-started", this.$VideoUploadSession95.bind(this));
        b.subscribe("resumable-success", this.$VideoUploadSession96.bind(this));
        b.subscribe("resumable-failed", this.$VideoUploadSession97.bind(this));
        return b;
      };
      d.$VideoUploadSession37 = function (a) {
        var b = this.$VideoUploadSession25 ? a.chunk_post_uri : a.post_uri;
        b = this.__getVideoUploadPostRequestManager(b, a);
        b.subscribe(
          "request-finished",
          this.__handlePostRequestFinished.bind(this)
        );
        b.subscribe("request-failed", this.$VideoUploadSession98.bind(this));
        return b;
      };
      d.$VideoUploadSession39 = function (a) {
        a = new (b("VideoUploadGraphQLPostRequestManager"))(
          isNaN(a.post_max_transport_retries)
            ? 0
            : a.post_max_transport_retries,
          isNaN(a.post_transport_retry_interval_base)
            ? 0
            : a.post_transport_retry_interval_base,
          isNaN(a.post_max_server_retries) ? 0 : a.post_max_server_retries,
          isNaN(a.post_server_retry_interval_base)
            ? 0
            : a.post_server_retry_interval_base
        );
        a.subscribe(
          "request-finished",
          this.__handlePostRequestFinished.bind(this)
        );
        a.subscribe("request-failed", this.$VideoUploadSession98.bind(this));
        return a;
      };
      d.$VideoUploadSession82 = function (a, c) {
        this.__logEvent(
          b("VideoUploadLogger").EVENT_STARTED_UPLOADING,
          babelHelpers["extends"](
            { hash_time: c.hash_time, hash_exception: c.hash_exception },
            this.$VideoUploadSession67
          )
        ),
          this.__logEvent(
            b("VideoUploadLogger").EVENT_STARTED_START_REQUEST,
            this.$VideoUploadSession67
          ),
          (this.$VideoUploadSession99 = Date.now()),
          this.inform("upload-started");
      };
      d.$VideoUploadSession81 = function (a) {
        if (!this.$VideoUploadSession20) {
          this.$VideoUploadSession20 = !0;
          a || (a = { video_id: null });
          var b;
          b = this.__createReceiveRequestContext(a, !1);
          this.$VideoUploadSession33.sendRequest(b);
          if (this.$VideoUploadSession74)
            if (this.$VideoUploadSession15) {
              var c = 0;
              for (c = 0; c < this.$VideoUploadSession48 - 1; c++)
                (b = this.__createReceiveRequestContext(a, !0, c)),
                  this.$VideoUploadSession35[c].sendRequest(b);
            } else
              (b = this.__createReceiveRequestContext(a, !0)),
                this.$VideoUploadSession35.sendRequest(b);
        } else this.$VideoUploadSession100();
      };
      d.$VideoUploadSession100 = function () {
        this.$VideoUploadSession33.updateVideoID(this.$VideoUploadSession56);
        if (this.$VideoUploadSession74)
          if (this.$VideoUploadSession15) {
            var a = 0;
            for (a = 0; a < this.$VideoUploadSession48 - 1; a++)
              this.$VideoUploadSession35[a].updateVideoID(
                this.$VideoUploadSession56
              );
          } else
            this.$VideoUploadSession35.updateVideoID(
              this.$VideoUploadSession56
            );
      };
      d.$VideoUploadSession101 = function (a) {
        if (this.$VideoUploadSession41 == null)
          return (
            ((a == null ? void 0 : a.transport_retries) || 0) +
            ((a == null ? void 0 : a.server_retries) || 0) +
            ((a == null ? void 0 : a.timeout_retries) || 0)
          );
        else return this.$VideoUploadSession41.getTotalRetryCount();
      };
      d.$VideoUploadSession83 = function (a, c) {
        this.__logEvent(
          b("VideoUploadLogger").EVENT_PROGRESS_UPLOADING_START_REQUEST,
          {
            retries: this.$VideoUploadSession101(c),
            transport_retries: c.transport_retries,
            hash_time: c.hash_time,
            skip_upload: c.skip_upload ? 1 : null,
          }
        ),
          this.__logEvent(
            b("VideoUploadLogger").EVENT_FINISHED_START_REQUEST,
            babelHelpers["extends"](
              { video_id: c.video_id },
              this.$VideoUploadSession67
            )
          ),
          (this.$VideoUploadSession56 = c.video_id),
          (this.$VideoUploadSession57 = c.upload_session_id),
          (this.$VideoUploadSession58 = c.fb_region),
          (this.$VideoUploadSession102 = c.skip_upload),
          !c.skip_upload
            ? this.$VideoUploadSession81(c)
            : (this.$VideoUploadSession103(),
              this.inform("upload-progressed", {
                start_offset: 0,
                end_offset: this.$VideoUploadSession52.getSize(),
                file_size: this.$VideoUploadSession52.getSize(),
                sent_bytes: this.$VideoUploadSession52.getSize(),
                video_id: c.video_id,
                skip_upload: c.skip_upload,
              }),
              this.$VideoUploadSession6 && this.__logFinishedUploading(),
              this.inform("upload-finished", {
                start_offset: 0,
                end_offset: this.$VideoUploadSession52.getSize(),
                video_id: c.video_id,
                is_spherical_video: this.$VideoUploadSession63,
              }));
      };
      d.__fetchReceiveRequestManagerStateLogData = function () {
        var a = {};
        this.$VideoUploadSession33 != null &&
          (this.$VideoUploadSession33.appendStateLogData(a, "requestManager_"),
          (a.request_manager_state = a.requestManager_last_log_state));
        if (this.$VideoUploadSession15) {
          var b = 0;
          for (b = 0; b < this.$VideoUploadSession48 - 1; b++)
            this.$VideoUploadSession35[b] != null &&
              this.$VideoUploadSession35[b].appendStateLogData(
                a,
                "requestManagerEx_" + b.toString()
              );
        } else
          this.$VideoUploadSession35 != null &&
            this.$VideoUploadSession35.appendStateLogData(
              a,
              "requestManagerEx_"
            );
        return a;
      };
      d.__createReceiveRequestContext = function (a, c, d) {
        c || (c = !1);
        var e = new (b("VideoUploadRequestContext"))();
        this.$VideoUploadSession15
          ? this.__setupReceiveRequestContext(e, a, c, d)
          : this.__setupReceiveRequestContext(e, a, c);
        return e;
      };
      d.__setupReceiveRequestContext = function (a, b, c, d) {
        var e, f, g;
        !c
          ? ((c = this.$VideoUploadSession76),
            (e = this.$VideoUploadSession79),
            this.$VideoUploadSession16
              ? ((f = this.$VideoUploadSession76),
                (g = this.$VideoUploadSession18
                  ? Math.min(
                      this.$VideoUploadSession18,
                      this.$VideoUploadSession79
                    )
                  : this.$VideoUploadSession79))
              : ((f = b.start_offset), (g = b.end_offset)))
          : this.$VideoUploadSession15
          ? (this.$VideoUploadSession16 &&
              ((this.$VideoUploadSession29 =
                this.$VideoUploadSession45[d] - this.$VideoUploadSession44[d]),
              (this.$VideoUploadSession29 = this.$VideoUploadSession18
                ? Math.min(
                    this.$VideoUploadSession18,
                    this.$VideoUploadSession29
                  )
                : this.$VideoUploadSession29)),
            (c = this.$VideoUploadSession44[d]),
            (e = this.$VideoUploadSession45[d]),
            (f = this.$VideoUploadSession44[d]),
            (g =
              this.$VideoUploadSession44[d] + this.$VideoUploadSession29 >=
              this.$VideoUploadSession45[d]
                ? this.$VideoUploadSession45[d]
                : this.$VideoUploadSession44[d] + this.$VideoUploadSession29))
          : (this.$VideoUploadSession16 &&
              ((this.$VideoUploadSession29 =
                this.$VideoUploadSession45 - this.$VideoUploadSession44),
              (this.$VideoUploadSession29 = this.$VideoUploadSession18
                ? Math.min(
                    this.$VideoUploadSession18,
                    this.$VideoUploadSession29
                  )
                : this.$VideoUploadSession29)),
            (c = this.$VideoUploadSession44),
            (e = this.$VideoUploadSession45),
            (f = this.$VideoUploadSession44),
            (g =
              this.$VideoUploadSession44 + this.$VideoUploadSession29 >=
              this.$VideoUploadSession45
                ? this.$VideoUploadSession45
                : this.$VideoUploadSession44 + this.$VideoUploadSession29));
        a.setFile(this.$VideoUploadSession52)
          .setVideoID(b.video_id)
          .setXPVAssetID(b.xpv_asset_id)
          .setIsXPVSingleProd(b.is_xpv_single_prod)
          .setUploadSessionID(b.upload_session_id)
          .setFbRegion(b.fb_region)
          .setStartOffset(f)
          .setEndOffset(g)
          .setPartitionStartOffset(c)
          .setPartitionEndOffset(e)
          .setPartitionNo(d)
          .setTargetID(this.$VideoUploadSession3)
          .setSource(this.$VideoUploadSession1)
          .setComposerDialogVersion(this.$VideoUploadSession2)
          .setComposerWorkSharedDraftMode(this.$VideoUploadSession9)
          .setWaterfallID(this.$VideoUploadSession23)
          .setComposerSessionID(this.$VideoUploadSession51)
          .setSupportsChunking(this.$VideoUploadSession25)
          .setHasFileBeenReplaced(this.$VideoUploadSession17)
          .setRetryState(this.$VideoUploadSession41);
        this.$VideoUploadSession27 &&
          a.setUseParallelChunks(this.$VideoUploadSession27);
        a.setComposerEntryPointRef &&
          a.setComposerEntryPointRef(this.$VideoUploadSession8);
        this.$VideoUploadSession18 &&
          a.setClientChunkSize(this.$VideoUploadSession18);
      };
      d.$VideoUploadSession84 = function (a, c) {
        a = this.__getLogErrorData(c);
        this.__logEvent(b("VideoUploadLogger").EVENT_FAILED_START_REQUEST, a);
        this.__logEvent(b("VideoUploadLogger").EVENT_FAILED_UPLOADING, a);
        a = c.error_is_transient
          ? b("VideoUploadLogger").EVENT_RESIGNED_FLOW
          : b("VideoUploadLogger").EVENT_FAILED_FLOW;
        this.$VideoUploadSession6
          ? this.$VideoUploadSession71 &&
            (this.__logEvent(a), (this.$VideoUploadSession71 = !1))
          : this.__logEvent(a);
        this.$VideoUploadSession103();
        this.$VideoUploadSession104();
        this.inform("upload-failed", c);
      };
      d.$VideoUploadSession85 = function (a) {
        this.__logEvent(b("VideoUploadLogger").EVENT_CANCELED_START_REQUEST);
      };
      d.$VideoUploadSession86 = function (a, c) {
        this.__logEvent(b("VideoUploadLogger").EVENT_STARTED_RECEIVE_REQUEST, {
          debug: c.debug,
        }),
          !c.start_offset &&
            !c.transport_retries &&
            !c.server_retries &&
            this.__logEvent(
              b("VideoUploadLogger").EVENT_STARTED_SENDING_BYTES,
              {
                total_bytes: this.$VideoUploadSession52.getSize(),
                upload_domain: c.upload_domain,
                debug: c.debug,
              }
            ),
          this.$VideoUploadSession25 &&
            this.__logEvent(
              b("VideoUploadLogger").EVENT_STARTED_SENDING_CHUNK_BYTES,
              {
                start_offset: c.start_offset,
                total_bytes: c.end_offset - c.start_offset,
                retries: this.$VideoUploadSession101(c),
                transport_retries: c.transport_retries,
                server_retries: c.server_retries,
                upload_speed: c.upload_speed,
                request_manager_state: c.request_manager_state,
                upload_domain: c.upload_domain,
                debug: c.debug,
              }
            );
      };
      d.$VideoUploadSession87 = function (a, b) {
        if (b.start_offset < this.$VideoUploadSession79)
          (this.$VideoUploadSession77 = b.start_offset),
            (this.$VideoUploadSession78 = b.sent_bytes);
        else if (this.$VideoUploadSession15) {
          a = this.getExPartitionNumber(b.start_offset);
          a > -1 &&
            ((this.$VideoUploadSession46[a] = b.start_offset),
            (this.$VideoUploadSession47[a] = b.sent_bytes));
        } else
          (this.$VideoUploadSession46 = b.start_offset),
            (this.$VideoUploadSession47 = b.sent_bytes);
        b.start_offset = this.$VideoUploadSession77;
        b.sent_bytes = this.$VideoUploadSession78;
        if (this.$VideoUploadSession74)
          if (this.$VideoUploadSession15)
            for (a = 0; a < this.$VideoUploadSession48 - 1; a++)
              (b.start_offset +=
                this.$VideoUploadSession46[a] - this.$VideoUploadSession44[a]),
                (b.sent_bytes += this.$VideoUploadSession47[a]);
          else
            (b.start_offset +=
              this.$VideoUploadSession46 - this.$VideoUploadSession44),
              (b.sent_bytes += this.$VideoUploadSession47);
        a = Math.min(b.start_offset + b.sent_bytes, b.file_size);
        a > this.$VideoUploadSession62 &&
          ((this.$VideoUploadSession62 = a),
          this.inform("upload-progressed", b));
      };
      d.$VideoUploadSession88 = function (a, c) {
        this.__logEvent(b("VideoUploadLogger").EVENT_FINISHED_RECEIVE_REQUEST, {
          debug: c.debug,
        });
        this.$VideoUploadSession25 &&
          this.__logEvent(
            b("VideoUploadLogger").EVENT_FINISHED_SENDING_CHUNK_BYTES,
            {
              start_offset: c.start_offset,
              sent_bytes: c.end_offset - c.start_offset,
              retries: this.$VideoUploadSession101(c),
              transport_retries: c.transport_retries,
              server_retries: c.server_retries,
              upload_speed: c.upload_speed,
              request_manager_state: c.request_manager_state,
              upload_domain: c.upload_domain,
              debug: c.debug,
            }
          );
        a = !1;
        if (c.start_offset < this.$VideoUploadSession79)
          this.$VideoUploadSession75 =
            c.end_offset >= this.$VideoUploadSession79;
        else if (this.$VideoUploadSession15) {
          var d;
          d = this.getExPartitionNumber(c.start_offset);
          if (d === -1) {
            var e = {
              error_summary: "Invalid offset",
              error_description:
                "Offset doesn't fall in any exPartition range.",
            };
            this.__logEvent(b("VideoUploadLogger").EVENT_FAILED_UPLOADING);
            this.inform("upload-failed", e);
            return;
          }
          this.$VideoUploadSession43[d] =
            c.end_offset >= this.$VideoUploadSession45[d];
        } else
          this.$VideoUploadSession43 =
            c.end_offset >= this.$VideoUploadSession45;
        if (this.$VideoUploadSession15)
          for (d = 0; d < this.$VideoUploadSession48 - 1; d++)
            if (this.$VideoUploadSession43[d] === !1) {
              a = !1;
              break;
            } else a = !0;
        else a = this.$VideoUploadSession43;
        (!this.$VideoUploadSession26 ||
          (this.$VideoUploadSession75 && (!this.$VideoUploadSession74 || a))) &&
          (this.__logEvent(
            b("VideoUploadLogger").EVENT_FINISHED_SENDING_BYTES,
            {
              sent_bytes: this.$VideoUploadSession52.getSize(),
              upload_domain: c.upload_domain,
              debug: c.debug,
            }
          ),
          (this.$VideoUploadSession72 =
            Date.now() - this.$VideoUploadSession99),
          this.$VideoUploadSession6 && this.__logFinishedUploading(),
          (c.video_id = this.$VideoUploadSession56),
          (c.is_spherical_video = this.$VideoUploadSession63),
          this.inform("upload-finished", c),
          this.$VideoUploadSession12 &&
            (this.$VideoUploadSession6 || this.__logFinishedUploading(),
            this.__logEvent(b("VideoUploadLogger").EVENT_FINISHED_FLOW, c),
            (this.$VideoUploadSession71 = !1),
            this.$VideoUploadSession104(),
            this.inform("multimedia-upload-finished", c)));
      };
      d.$VideoUploadSession89 = function (a, c) {
        a = this.__getLogErrorData(c);
        this.__logEvent(b("VideoUploadLogger").EVENT_FAILED_RECEIVE_REQUEST, a);
        this.$VideoUploadSession25 &&
          this.__logEvent(
            b("VideoUploadLogger").EVENT_FAILED_SENDING_CHUNK_BYTES,
            a
          );
        if (this.$VideoUploadSession59) {
          this.__logEvent(b("VideoUploadLogger").EVENT_FAILED_SENDING_BYTES, a);
          this.__logEvent(b("VideoUploadLogger").EVENT_FAILED_UPLOADING, a);
          var d = c.error_is_transient
            ? b("VideoUploadLogger").EVENT_RESIGNED_FLOW
            : b("VideoUploadLogger").EVENT_FAILED_FLOW;
          this.$VideoUploadSession6
            ? this.$VideoUploadSession71 &&
              (this.__logEvent(d, a), (this.$VideoUploadSession71 = !1))
            : this.__logEvent(d, a);
        }
        this.$VideoUploadSession104();
        this.inform("upload-failed", c);
      };
      d.$VideoUploadSession90 = function (a) {
        this.$VideoUploadSession25
          ? this.__logEvent(
              b("VideoUploadLogger").EVENT_CANCELED_SENDING_CHUNK_BYTES
            )
          : this.__logEvent(
              b("VideoUploadLogger").EVENT_CANCELED_SENDING_BYTES
            );
      };
      d.$VideoUploadSession91 = function (a, c) {
        a = {
          start_offset: c.start_offset,
          sent_bytes: c.end_offset - c.start_offset,
          retries: this.$VideoUploadSession101(c),
          transport_retries: c.transport_retries,
          server_retries: c.server_retries,
          timeout_retries: c.timeout_retries,
          upload_speed: c.upload_speed,
          request_manager_state: c.request_manager_state,
          debug: c.debug,
        };
        this.__logEvent(
          b("VideoUploadLogger").EVENT_TIMEOUT_SENDING_CHUNK_BYTES,
          a
        );
      };
      d.$VideoUploadSession92 = function (a, b) {
        this.inform("online", b);
      };
      d.$VideoUploadSession93 = function (a, b) {
        this.inform("offline", b);
      };
      d.$VideoUploadSession94 = function (a, c) {
        this.__logEvent(b("VideoUploadLogger").EVENT_RESUMABLE_CALLED, c);
      };
      d.$VideoUploadSession95 = function (a, c) {
        this.__logEvent(b("VideoUploadLogger").EVENT_RESUMABLE_STARTED, c);
      };
      d.$VideoUploadSession96 = function (a, c) {
        this.__logEvent(b("VideoUploadLogger").EVENT_RESUMABLE_SUCCESS, c);
      };
      d.$VideoUploadSession97 = function (a, c) {
        this.__logEvent(b("VideoUploadLogger").EVENT_RESUMABLE_FAILED, c);
      };
      d.__handlePostRequestFinished = function (a, c) {
        this.__logEvent(
          b("VideoUploadLogger").EVENT_FINISHED_POST_REQUEST,
          babelHelpers["extends"](
            { video_id: this.$VideoUploadSession56 },
            this.$VideoUploadSession67
          )
        );
        c.video_id || (c.video_id = this.$VideoUploadSession56);
        this.$VideoUploadSession6 || this.__logFinishedUploading();
        this.__logEvent(b("VideoUploadLogger").EVENT_FINISHED_FLOW);
        this.$VideoUploadSession71 = !1;
        this.$VideoUploadSession104();
        a = babelHelpers["extends"]({}, c, this.$VideoUploadSession68);
        this.inform("post-finished", a);
      };
      d.__logFinishedUploading = function () {
        this.__logEvent(
          b("VideoUploadLogger").EVENT_FINISHED_UPLOADING,
          babelHelpers["extends"](
            {
              elapsed_time: this.$VideoUploadSession72,
              skip_upload: this.$VideoUploadSession102 ? 1 : null,
              video_id: this.$VideoUploadSession56,
            },
            this.$VideoUploadSession67
          )
        ),
          (this.$VideoUploadSession60 = !0);
      };
      d.$VideoUploadSession98 = function (a, c) {
        a = this.__getLogErrorData(c);
        this.__logEvent(b("VideoUploadLogger").EVENT_FAILED_POST_REQUEST, a);
        if (this.$VideoUploadSession59) {
          this.__logEvent(b("VideoUploadLogger").EVENT_FAILED_UPLOADING, a);
          var d = c.error_is_transient
            ? b("VideoUploadLogger").EVENT_RESIGNED_FLOW
            : b("VideoUploadLogger").EVENT_FAILED_FLOW;
          this.__logEvent(d, a);
        }
        this.$VideoUploadSession104();
        this.inform("post-failed", c);
      };
      d.$VideoUploadSession103 = function () {
        this.$VideoUploadSession33.cancelRequest();
        if (this.$VideoUploadSession74)
          if (this.$VideoUploadSession15) {
            var a = 0;
            for (a = 0; a < this.$VideoUploadSession48 - 1; a++)
              this.$VideoUploadSession35[a].cancelRequest();
          } else this.$VideoUploadSession35.cancelRequest();
        this.$VideoUploadSession20 = !1;
      };
      d.$VideoUploadSession70 = function () {
        this.$VideoUploadSession31.cancelRequest(),
          this.$VideoUploadSession103(),
          this.$VideoUploadSession104(),
          this.$VideoUploadSession56 &&
            (c.deleteVideo(this.$VideoUploadSession56),
            (this.$VideoUploadSession56 = null),
            (this.$VideoUploadSession57 = null),
            (this.$VideoUploadSession58 = null));
      };
      d.$VideoUploadSession80 = function () {
        var a = this;
        this.$VideoUploadSession59 = !0;
        this.$VideoUploadSession30 &&
          ((this.$VideoUploadSession61 = new (b("SubscriptionsHandler"))()),
          this.$VideoUploadSession61.addSubscriptions(
            this.$VideoUploadSession54().postOnShutdown(function () {
              if (a.$VideoUploadSession59) {
                var c = {
                  event_reason: g.SHUTDOWN,
                  debug: babelHelpers["extends"](
                    {},
                    a.__fetchReceiveRequestManagerStateLogData(),
                    { is_background_upload: a.$VideoUploadSession6 }
                  ),
                };
                a.$VideoUploadSession6
                  ? a.$VideoUploadSession71 &&
                    a.__logEvent(b("VideoUploadLogger").EVENT_CANCELED_FLOW, c)
                  : a.__logEvent(b("VideoUploadLogger").EVENT_CANCELED_FLOW, c);
                a.inform("upload-canceled");
              }
            })
          ));
        this.$VideoUploadSession11 &&
          ((this.$VideoUploadSession73 = new (b("VideoUploadCrashMonitor"))(
            this.$VideoUploadSession23,
            this.$VideoUploadSession7,
            this.$VideoUploadSession1,
            this.$VideoUploadSession3,
            this.$VideoUploadSession4,
            this.$VideoUploadSession25,
            this.$VideoUploadSession8,
            !this.$VideoUploadSession6 || this.$VideoUploadSession71
          )),
          this.$VideoUploadSession73.startSession());
      };
      d.$VideoUploadSession104 = function () {
        (this.$VideoUploadSession59 = !1),
          this.$VideoUploadSession61 &&
            (this.$VideoUploadSession61.release(),
            (this.$VideoUploadSession61 = null)),
          this.$VideoUploadSession73 &&
            (this.$VideoUploadSession73.endSession(),
            (this.$VideoUploadSession73 = null));
      };
      d.__getLogErrorData = function (a) {
        return {
          error: a.error_summary,
          error_code: a.error_code,
          error_description: a.error_description,
          retries: this.$VideoUploadSession101(a),
          transport_retries: a.transport_retries,
          server_retries: a.server_retries,
          request_manager_state: a.request_manager_state,
          debug: a.debug,
        };
      };
      d.__logEvent = function (a, b) {
        (b = b || {}),
          this.$VideoUploadSession52 &&
            ((b.file_size = this.$VideoUploadSession52.getSize()),
            (b.file_extension = this.$VideoUploadSession52.getExtension()),
            (b.sent_bytes = this.$VideoUploadSession62)),
          this.$VideoUploadSession54().logEvent(a, b);
      };
      d.__getVideoUploadStartRequestManager = function (
        a,
        c,
        d,
        e,
        f,
        g,
        h,
        i
      ) {
        return new (b("VideoUploadStartRequestManager"))(
          a,
          c,
          d,
          e,
          f,
          g,
          h,
          i
        );
      };
      d.__getVideoUploadReceiveRequestManager = function (a, c) {
        return new (b("VideoUploadReceiveRequestManager"))(
          a,
          c.max_transport_retries,
          c.max_transport_retry_timeout,
          c.max_server_retries,
          c.response_timeout_enabled,
          c.max_response_timeout_retries,
          c.response_timeout_speed_variation_factor_ppt,
          c.transport_retry_interval_base,
          c.server_retry_interval_base,
          c.receive_errors_force_retry,
          c.access_token,
          c.resumability_enabled,
          c.resumability_async_enabled,
          c.resumable_service_name,
          c.resumable_service_domain,
          c.datr,
          c.resumability_min_file_size,
          c.resumable_service_proxy_receive,
          c.resumable_service_send_media_info,
          c.resumable_service_send_file_size,
          c.resumable_reset_transport_retries_on_progress,
          c.add_flow_capture_header,
          c.traffic_tracing_enabled,
          c.traffic_tracing_min_file_size
        );
      };
      d.__getVideoUploadPostRequestManager = function (a, c) {
        return new (b("VideoUploadPostRequestManager"))(
          a,
          c.post_max_transport_retries,
          c.post_transport_retry_interval_base,
          c.post_max_server_retries,
          c.post_server_retry_interval_base
        );
      };
      c.deleteVideo = function (a) {
        a = new (b("AsyncRequest"))("/ajax/video/actions/delete").setData({
          fbid: a,
          redirect: !1,
        });
        a.setErrorHandler(function () {});
        a.send();
      };
      return c;
    })(b("mixin")(b("cr:909282")));
    e.exports = a;
  },
  null
);
__d(
  "VideoUploader",
  [
    "FBLogger",
    "MediaUploadVUShim",
    "VideoUploadCrashMonitor",
    "VideoUploadSession",
    "cr:909282",
    "mixin",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        d = a.call(this) || this;
        d.abandon = function (a) {
          a === void 0 && (a = !1);
          var b = d.getVideoID();
          d.$VideoUploader2
            ? d.$VideoUploader2.abandon(a)
            : a && b && c("VideoUploadSession").deleteVideo(b);
          d.reset();
        };
        d.$VideoUploader1 = b;
        d.$VideoUploader2 = null;
        d.$VideoUploader3 = null;
        d.$VideoUploader4 = b.waterfall_id == null ? null : b.waterfall_id;
        d.$VideoUploader5 = d.$VideoUploader1.ad_account_id;
        b.monitor_crashes &&
          ((d.$VideoUploader6 = new (c("VideoUploadCrashMonitor"))()),
          d.$VideoUploader6.logKnownCrashes());
        return d;
      }
      var d = b.prototype;
      d.setComposerSessionID = function (a) {
        (this.$VideoUploader7 = a),
          this.$VideoUploader2 && this.$VideoUploader2.setComposerSessionID(a);
      };
      d.getLogger = function () {
        if (!this.$VideoUploader2) return;
        if (this.$VideoUploader2.getLogger)
          return this.$VideoUploader2.getLogger();
      };
      d.upload = function (a, b) {
        var c = this;
        if (this.$VideoUploader2) return;
        var d = this.__getVideoUploadSession(this.$VideoUploader1);
        d.setComposerSessionID(this.$VideoUploader7);
        (b == null ? void 0 : b.creativeTools) != null &&
          d.setCreativeTools(
            JSON.stringify(b == null ? void 0 : b.creativeTools)
          );
        d.subscribe(
          this.__getEventsWhichShouldListenFromSession(),
          function (a, b) {
            return c.$VideoUploader8(a, b);
          }
        );
        this.$VideoUploader2 = d;
        d.start(a);
      };
      d.__getVideoUploadSession = function (a) {
        try {
          var b = c("MediaUploadVUShim").createSession(a);
          if (b == null) return new (c("VideoUploadSession"))(a);
          else return b;
        } catch (b) {
          c("FBLogger")("media_upload")
            .catching(b)
            .warn("Failed to create shim video upload session");
          return new (c("VideoUploadSession"))(a);
        }
      };
      d.__getEventsWhichShouldListenFromSession = function () {
        return [
          "upload-requested",
          "upload-started",
          "upload-progressed",
          "upload-finished",
          "upload-failed",
          "upload-canceled",
          "post-started",
          "post-finished",
          "post-failed",
          "online",
          "offline",
          "metadata-parsed",
          "set-waterfall-id",
        ];
      };
      d.postUserRequest = function () {
        if (!this.$VideoUploader2) return;
        this.$VideoUploader2.startFlow && this.$VideoUploader2.startFlow();
      };
      d.setTargetID = function (a) {
        if (this.$VideoUploader2 == null) return;
        this.$VideoUploader2.setTargetID(a);
      };
      d.setHasFileBeenReplaced = function (a) {
        this.$VideoUploader1.has_file_been_replaced = a;
      };
      d.post = function (a) {
        if (!this.$VideoUploader2) return;
        this.$VideoUploader2.post(a);
      };
      d.getVideoID = function () {
        this.$VideoUploader2 &&
          (this.$VideoUploader3 = this.$VideoUploader2.getVideoID());
        return this.$VideoUploader3;
      };
      d.cancel = function (a) {
        a === void 0 && (a = !1);
        var b = this.getVideoID();
        this.$VideoUploader2
          ? this.$VideoUploader2.cancel(a)
          : a && b && c("VideoUploadSession").deleteVideo(b);
        this.reset();
      };
      d.reset = function () {
        this.$VideoUploader2 && (this.$VideoUploader3 = this.getVideoID()),
          (this.$VideoUploader2 = null);
      };
      d.getUploadSession = function () {
        return this.$VideoUploader2;
      };
      d.getLoggerData = function () {
        return {
          waterfall_id: this.$VideoUploader2
            ? this.$VideoUploader2.$VideoUploader4
            : null,
          actor_id: this.$VideoUploader1.actor_id,
          target_id: this.$VideoUploader1.target_id,
          target_type: this.$VideoUploader1.target_type,
          composer_entry_point_ref:
            this.$VideoUploader1.composer_entry_point_ref,
        };
      };
      d.isPostInProgress = function () {
        return (
          !!this.$VideoUploader2 && this.$VideoUploader2.isPostInProgress()
        );
      };
      d.isSessionInProgress = function () {
        return !!this.$VideoUploader2 && this.$VideoUploader2.isInProgress();
      };
      d.isSessionExist = function () {
        return !!this.$VideoUploader2;
      };
      d.getUploadParameters = function () {
        return this.$VideoUploader1;
      };
      d.__getSession = function () {
        return this.$VideoUploader2;
      };
      d.__getEventsForWhichSessionShouldBeSetToNull = function () {
        return ["upload-failed", "post-finished", "multimedia-upload-finished"];
      };
      d.$VideoUploader8 = function (a, b) {
        this.__getEventsForWhichSessionShouldBeSetToNull().includes(a) &&
          this.reset(),
          this.__delegateEvent(a, b);
      };
      d.__delegateEvent = function (a, b) {
        this.inform(a, b);
      };
      return b;
    })(c("mixin")(b("cr:909282")));
    g["default"] = a;
  },
  98
);
