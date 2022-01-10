if (self.CavalryLogger) {
  CavalryLogger.start_js(["FWE7Hr1"]);
}

__d(
  "VideoComposerDialogUITypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:VideoComposerDialogUILoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:VideoComposerDialogUILoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:VideoComposerDialogUILoggerConfig",
          this.$1,
          { signal: !0 },
          a
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.setActorID = function (a) {
        this.$1.actor_id = a;
        return this;
      };
      c.setCaptionsNumSelectedFiles = function (a) {
        this.$1.captions_num_selected_files = a;
        return this;
      };
      c.setComposerDialogVersion = function (a) {
        this.$1.composer_dialog_version = a;
        return this;
      };
      c.setComposerEntryPoint = function (a) {
        this.$1.composer_entry_point = a;
        return this;
      };
      c.setCurrentTab = function (a) {
        this.$1.current_tab = a;
        return this;
      };
      c.setDialogMode = function (a) {
        this.$1.dialog_mode = a;
        return this;
      };
      c.setEditSource = function (a) {
        this.$1.edit_source = a;
        return this;
      };
      c.setErrorMessage = function (a) {
        this.$1.error_message = a;
        return this;
      };
      c.setErrorTab = function (a) {
        this.$1.error_tab = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setException = function (a) {
        this.$1.exception = a;
        return this;
      };
      c.setHasBeenReset = function (a) {
        this.$1.has_been_reset = a;
        return this;
      };
      c.setHasUploadFinished = function (a) {
        this.$1.has_upload_finished = a;
        return this;
      };
      c.setInvalidationReasons = function (a) {
        this.$1.invalidation_reasons = b(
          "GeneratedLoggerUtils"
        ).serializeVector(a);
        return this;
      };
      c.setIsComposerPostScheduleRedesign = function (a) {
        this.$1.is_composer_post_schedule_redesign = a;
        return this;
      };
      c.setIsPremiere = function (a) {
        this.$1.is_premiere = a;
        return this;
      };
      c.setIsPremiereUnderScheduleInTwoStep = function (a) {
        this.$1.is_premiere_under_schedule_in_two_step = a;
        return this;
      };
      c.setIsShowPage = function (a) {
        this.$1.is_show_page = a;
        return this;
      };
      c.setIsTwoStepPublish = function (a) {
        this.$1.is_two_step_publish = a;
        return this;
      };
      c.setNextTab = function (a) {
        this.$1.next_tab = a;
        return this;
      };
      c.setOriginalShowVideoType = function (a) {
        this.$1.original_show_video_type = a;
        return this;
      };
      c.setPostAttemptCount = function (a) {
        this.$1.post_attempt_count = a;
        return this;
      };
      c.setPremiereContentStrategyCondition = function (a) {
        this.$1.premiere_content_strategy_condition = a;
        return this;
      };
      c.setPremiereNowCondition = function (a) {
        this.$1.premiere_now_condition = a;
        return this;
      };
      c.setSessionID = function (a) {
        this.$1.session_id = a;
        return this;
      };
      c.setShowVideoType = function (a) {
        this.$1.show_video_type = a;
        return this;
      };
      c.setUploadAttemptCount = function (a) {
        this.$1.upload_attempt_count = a;
        return this;
      };
      c.setVideoAssetID = function (a) {
        this.$1.video_asset_id = a;
        return this;
      };
      c.setVideoAssetWaterfallSource = function (a) {
        this.$1.video_asset_waterfall_source = a;
        return this;
      };
      c.setVideoID = function (a) {
        this.$1.video_id = a;
        return this;
      };
      c.setWaterfallID = function (a) {
        this.$1.waterfall_id = a;
        return this;
      };
      c.setWebFramework = function (a) {
        this.$1.web_framework = a;
        return this;
      };
      c.updateExtraData = function (a) {
        a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
        b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.addToExtraData = function (a, b) {
        var c = {};
        c[a] = b;
        return this.updateExtraData(c);
      };
      return a;
    })();
    var g = {
      actor_id: !0,
      captions_num_selected_files: !0,
      composer_dialog_version: !0,
      composer_entry_point: !0,
      current_tab: !0,
      dialog_mode: !0,
      edit_source: !0,
      error_message: !0,
      error_tab: !0,
      event: !0,
      exception: !0,
      has_been_reset: !0,
      has_upload_finished: !0,
      invalidation_reasons: !0,
      is_composer_post_schedule_redesign: !0,
      is_premiere: !0,
      is_premiere_under_schedule_in_two_step: !0,
      is_show_page: !0,
      is_two_step_publish: !0,
      next_tab: !0,
      original_show_video_type: !0,
      post_attempt_count: !0,
      premiere_content_strategy_condition: !0,
      premiere_now_condition: !0,
      session_id: !0,
      show_video_type: !0,
      upload_attempt_count: !0,
      video_asset_id: !0,
      video_asset_waterfall_source: !0,
      video_id: !0,
      waterfall_id: !0,
      web_framework: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  "FeedInlineComposerMediaSprout_sprout.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "FeedInlineComposerMediaSprout_sprout",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CometComposerUploadMediaSprout",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "FeedInlineComposerMediaSprout.react",
  [
    "fbt",
    "ix",
    "CometComposerMediaAttachmentAreaResource",
    "CometFeedInlineComposerSprout.react",
    "CometFileSelector.react",
    "FeedInlineComposerMediaSprout_sprout.graphql",
    "cometIsMimeTypeForMedia",
    "cometUniqueID",
    "fileInputAcceptValues",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useCallback;
    j !== void 0 ? j : (j = b("FeedInlineComposerMediaSprout_sprout.graphql"));
    function a(a) {
      var b = a.isViewingSelf,
        e = a.launchBlueVideoComposer,
        f = a.onHoverIn,
        g = a.onHoverOut,
        j = a.onPressIn,
        m = a.showComposerDialog,
        n = a.triggerRef;
      a = l(
        function (a) {
          if (a == null) return;
          var f = Array.from(a);
          if (
            f.length === 1 &&
            d("cometIsMimeTypeForMedia").isMimeTypeForVideo(f[0].type) &&
            e != null &&
            b === !0 &&
            !c("gkx")("1584413")
          ) {
            e(f[0]);
            return;
          }
          f =
            a == null
              ? void 0
              : Array.from(a)
                  .map(function (a) {
                    var b = c("cometUniqueID")();
                    a.uploadID = b;
                    if (d("cometIsMimeTypeForMedia").isMimeTypeForPhoto(a.type))
                      return {
                        data: { id: b },
                        file: a,
                        fileObjectURL: URL.createObjectURL(a),
                        fileType: "PHOTO",
                        state: "NEW",
                      };
                    if (d("cometIsMimeTypeForMedia").isMimeTypeForVideo(a.type))
                      return {
                        data: { id: b },
                        file: a,
                        fileObjectURL: URL.createObjectURL(a),
                        fileType: "VIDEO",
                        state: "NEW",
                      };
                  })
                  .filter(Boolean);
          m({ additionalMediaAttachmentItems: f });
        },
        [b, e, m]
      );
      var o = function (a) {
        c("CometComposerMediaAttachmentAreaResource").load(), a();
      };
      return k.jsx(c("CometFileSelector.react"), {
        accept: d("fileInputAcceptValues").PHOTO_AND_VIDEO,
        multiple: !0,
        onFilesSelected: a,
        children: function (a) {
          return k.jsx(c("CometFeedInlineComposerSprout.react"), {
            imageSrc: i("1260669"),
            label: h._("Photo/Video"),
            onHoverIn: f,
            onHoverOut: g,
            onPress: function () {
              o(a);
            },
            onPressIn: j,
            testid: void 0,
            triggerRef: n,
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
  "XVideoComposerFetchDialogControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/video/composer/fetch_dialog/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useVideoComposerDialog",
  [
    "CometCompatModalDialogResource",
    "VideoComposerDialogUITypedLogger",
    "XVideoComposerFetchDialogControllerRouteBuilder",
    "react",
    "useCometLazyDialog",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = function (a) {
        var b = a.composerEntryPointRef,
          d = a.sessionID;
        a = a.targetID;
        new (c("VideoComposerDialogUITypedLogger"))()
          .setEvent("dialog_requested")
          .setActorID(a)
          .setComposerDialogVersion("V2")
          .setComposerEntryPoint(b)
          .setDialogMode("video_upload")
          .setWebFramework("BLUE_ON_COMET")
          .setSessionID(d)
          .log();
      };
    function a(a) {
      var b = a.composerEntryPointRef,
        d = a.targetID;
      a = c("useCometLazyDialog")(c("CometCompatModalDialogResource"));
      var e = a[0];
      return h(
        function (a) {
          var f = c("uuid")();
          i({ composerEntryPointRef: b, sessionID: f, targetID: d });
          f = c("XVideoComposerFetchDialogControllerRouteBuilder").buildURL({
            entry_point_ref: b,
            session_id: f,
            target_id: d,
          });
          f = { disableClosingWithMask: !0, rel: "dialog-post", uri: f };
          var g = function (b) {
            b.addListener("video-composer-bootloader-ready", function (c) {
              b.sendChildFrameMessage({
                compatAction: "video-composer-file",
                file: a,
              });
            });
            return function () {
              return b.removeAllListeners("video-composer-bootloader-ready");
            };
          };
          e({ customCompatEventHandler: g, params: f });
        },
        [b, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
