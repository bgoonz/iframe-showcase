if (self.CavalryLogger) {
  CavalryLogger.start_js(["vaYurIt"]);
}

__d(
  "useOzImplementationData_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useOzImplementationData_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useProgressiveImplementationData_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useProgressiveImplementationData_video",
      selections: [
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
          kind: "ScalarField",
          name: "is_spherical",
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useShakaImplementationData_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useShakaImplementationData_video",
      selections: [
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerShakaPerformanceLoggerRelayImpl_init.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerShakaPerformanceLoggerRelayImpl_init",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "VideoPlayerShakaPerformanceLoggerInit",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerShakaPerformanceLoggerRelayImpl_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerShakaPerformanceLoggerRelayImpl_video",
      selections: [
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometRelayExpiredVideoUrlRefreshHandlerQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "expiredURL" },
        b = { defaultValue: null, kind: "LocalArgument", name: "videoID" },
        c = [{ kind: "Variable", name: "id", variableName: "videoID" }],
        d = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "expired_url",
              variableName: "expiredURL",
            },
          ],
          concreteType: "RMDRefreshedUrl",
          kind: "LinkedField",
          name: "rmd_refreshed_url",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "new_url",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "useCometRelayExpiredVideoUrlRefreshHandlerQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [d],
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
          name: "useCometRelayExpiredVideoUrlRefreshHandlerQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                d,
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
        },
        params: {
          id: "4268667373184908",
          metadata: {},
          name: "useCometRelayExpiredVideoUrlRefreshHandlerQuery",
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
  "useVideoImplementationsImpl_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoImplementationsImpl_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useOzImplementationData_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useShakaImplementationData_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useProgressiveImplementationData_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerShakaConfig_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerShakaConfig_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
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
          name: "is_live_streaming",
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useSEOLoggedOutWebCrawler",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("gkx")("1779508");
    }
    g["default"] = a;
  },
  98
);
__d(
  "OzOneSemanticHandlerUtils",
  ["ConstUriUtils", "qex", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, c) {
      b != null && b.indexOf("+RE") >= 0 && a.retry(), c != null && c();
    }
    function a(a, b) {
      var d = b.error;
      d = d.getExtra();
      var e = d.code;
      d = d.headers;
      var f = null;
      e == null &&
        c("recoverableViolation")(
          "A ONE Semantic error response must have an error code.",
          "comet_video_player"
        );
      d == null &&
        c("recoverableViolation")(
          "A ONE Semantic error response must contain response Headers.",
          "comet_video_player"
        );
      if (d != null) {
        d = d.get("x-fb-one-variant");
        f = (d = d) != null ? d : null;
      }
      d = JSON.parse(a.getString("network_retry_intervals_json", "{}"));
      a = d[e];
      switch (e) {
        case "410":
          b.endStream();
          break;
        case "404":
          h(b, f, function () {
            var a = c("qex")._("560") || !1;
            a && b.retry({ behavior: "recover_failed_request" });
          });
          break;
        case "429":
          b.retry(a);
          break;
        case "403":
        default:
      }
    }
    function i(a) {
      if (a != null) {
        a = parseInt(a, 10);
        var b = c("qex")._("2048866");
        if (b != null && b > 0) return !isNaN(a) && a > 0 && a <= b;
      }
      return !1;
    }
    function j(a, b) {
      if (a != null && b != null) {
        a = parseInt(a, 10);
        b = parseInt(b, 10);
        return !isNaN(a) && !isNaN(b) && a > 0 && a <= b;
      }
      return !1;
    }
    function k(a) {
      if (a != null) {
        a = d("ConstUriUtils").getUri(a);
        if (a) {
          a = a.getQueryParam("os_param");
          return a ? String(a).toString() : null;
        }
      }
      return null;
    }
    function l(a, b) {
      var d = a != null;
      return i(b) || ((d || !!c("qex")._("1959789")) && j(b, a));
    }
    function b(a) {
      var b = a.getExtra();
      b = b.headers;
      b = m(b);
      a = a.getExtra();
      var d = a.code;
      a = a.url;
      if (b != null && d == null) {
        c("recoverableViolation")(
          "A ONE Semantic error response must have an error code.",
          "comet_video_player"
        );
        return !1;
      }
      d = k(a);
      return l(d, b);
    }
    function m(a) {
      if (a) {
        a = a.get("x-fb-one");
        if (a != null) return parseInt(a, 10) > 0 ? a : null;
      }
      return null;
    }
    function e(a, b, c) {
      var d = null,
        e = null;
      b != null && ((d = k(b)), d != null && a.setOneReqWave(parseInt(d, 10)));
      b = c == null ? void 0 : c.headers;
      b && ((e = m(b)), e != null && a.setOneResWave(parseInt(e, 10)));
      a.setOneObserved(l(d, e));
    }
    g.maybeRetryForVariant = h;
    g.evaluateOneSemanticsResponse = a;
    g.isOneSemanticsForcedForResponseWave = i;
    g.isOneSemanticsEnabledForWave = j;
    g.getOneSemanticRequestWave = k;
    g.shouldRespondWithOneSemantics = b;
    g.getOneSemanticResponseWave = m;
    g.setOneSemanticFetchStreamLoggingAttributes = e;
  },
  98
);
__d(
  "handleOzManifestFetchErrorEvent",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = a.getNumber("initial_manifest_request_retry_count", 0),
        d = JSON.parse(a.getString("network_retry_intervals_json", "{}")),
        e = a.getNumber("live_max_try_attempts_on_404", 1),
        f = ["404", "503"];
      a.getBool("live_gracefully_handle_no_network", !1) && f.push("0");
      a.getBool("live_gracefully_handle_410", !1) && f.push("410");
      a.getBool("live_gracefully_handle_502", !1) && f.push("502");
      a.getBool("live_gracefully_handle_429", !1) && f.push("429");
      a.getBool("live_gracefully_handle_504", !1) && f.push("504");
      var g = b.error.getExtra().code;
      a.getBool("handle_mpd_null_error_codes", !1) &&
        (g = g != null ? g : null);
      d = d[g];
      if (b.isInitialRequest)
        typeof d === "number" &&
          d > 0 &&
          b.retryAttemptCount < c &&
          b.retry({ waitMs: d });
      else if (g != null && f.indexOf(g) > -1)
        switch (g) {
          case "410":
            b.endStream();
            break;
          case "404":
            e < b.consecutiveFailuresForErrorCode && b.retry();
            break;
          case "504":
          case "502":
          case "503":
          case "0":
            b.retry();
            break;
          case "429":
            typeof d === "number" && d > 0 && b.retry({ waitMs: d });
            break;
          default:
            break;
        }
      else
        g === null && a.getBool("handle_mpd_null_error_codes", !1) && b.retry();
    }
    f["default"] = a;
  },
  66
);
__d(
  "handleOzStreamErrorEvent",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    function a(a, b) {
      var c = b.error.getExtra().code;
      if (a.getBool("retry_null_error_code_in_stream", !1) && c == null) {
        b.retry();
        return;
      }
      var d = JSON.parse(a.getString("network_end_broadcasts_json", "[]"));
      if (d.includes(c)) {
        b.endStream();
        return;
      }
      d = JSON.parse(a.getString("network_skip_json", "[]"));
      if (d.includes(c)) {
        b.retry();
        return;
      }
      d = a.getBool("back_off_pdash_504_retry", !0)
        ? g[b.retryAttemptCount]
        : 0;
      var e = JSON.parse(a.getString("network_reload_mpd_json", "[]")),
        f = a.getBool("fix_reload_manifest_retry", !1);
      if (
        a.getBool("back_off_pdash_504_retry", !0) &&
        d == null &&
        (!f || e.includes(c))
      )
        return;
      if (d != null && e.includes(c)) {
        a.getBool("network_reload_mpd_json_retry", !1)
          ? b.retry({ behavior: "recover_failed_request", waitMs: d * 1e3 })
          : b.retry({ waitMs: d * 1e3 });
        return;
      }
      f = JSON.parse(
        a.getString(
          "network_retry_intervals_json",
          '{"0": 1000, "404": 2000, "502": 1000, "503": 1000, "504": 1000}'
        )
      );
      e = c != null ? f[c] : null;
      if (e != null) {
        a.getBool("network_retry_intervals_json_retry", !1)
          ? b.retry({ behavior: "retry_failed_request", waitMs: e })
          : b.retry({ waitMs: e });
        return;
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "OzOneSemanticHandler",
  [
    "OzOneSemanticHandlerUtils",
    "handleOzManifestFetchErrorEvent",
    "handleOzStreamErrorEvent",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = b.error;
      !!c("qex")._("1959788") &&
      d("OzOneSemanticHandlerUtils").shouldRespondWithOneSemantics(e)
        ? d("OzOneSemanticHandlerUtils").evaluateOneSemanticsResponse(a, b)
        : c("handleOzManifestFetchErrorEvent")(a, b);
    }
    function b(a, b) {
      var e = b.error;
      !!c("qex")._("1959788") &&
      d("OzOneSemanticHandlerUtils").shouldRespondWithOneSemantics(e)
        ? d("OzOneSemanticHandlerUtils").evaluateOneSemanticsResponse(a, b)
        : c("handleOzStreamErrorEvent")(a, b);
    }
    g.handleManifestFetchErrorEvent = a;
    g.handleStreamErrorEvent = b;
  },
  98
);
__d(
  "OzCDNSignedQueryParams",
  ["ConstUriUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var b = a.prototype;
      b.$2 = function (a, b, c) {
        this.$1[a] == null && (this.$1[a] = {}), (this.$1[a][b] = c);
      };
      b.get = function (a) {
        a = this.$1[a];
        return a == null ? null : a;
      };
      b.update = function (a) {
        a = d("ConstUriUtils").getUri(a);
        if (a != null) {
          var b = a.getQueryParams();
          a = a.getDomain() + a.getPath();
          var c = b.get("oe");
          c != null && this.$2(a, "oe", String(b.get("oe")));
          b.get("oh") != null && this.$2(a, "oh", String(b.get("oh")));
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWwwFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1914651");
    c = b("FalcoLoggerInternal").create("video_player_www", a);
    e.exports = c;
  },
  null
);
__d(
  "VideoPlayerWwwLogger",
  ["VideoPlayerWwwFalcoEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return {
        access_token: a.logData.access_token,
        ad_client_token: a.logData.ad_client_token,
        attribution_id: a.logData.attribution_id,
        attribution_id_v2: a.logData.attribution_id_v2,
        attribution_id_v2_root: a.logData.attribution_id_v2_root,
        audio_only: a.logData.audio_only,
        audio_representation_id: a.logData.audio_representation_id,
        autoplay_eligible: a.logData.autoplay_eligible,
        autoplay_failure_reasons: a.logData.autoplay_failure_reasons,
        autoplay_setting: a.logData.autoplay_setting,
        available_qualities: a.logData.available_qualities,
        broadcaster_origin: a.logData.broadcaster_origin,
        browser_tab_id: a.logData.browser_tab_id,
        caption_state: a.logData.caption_state,
        cast_client_app_id: a.logData.cast_client_app_id,
        current_playback_speed: a.logData.current_playback_speed,
        current_viewability_percentage: Number(
          a.logData.current_viewability_percentage
        ),
        current_volume: a.logData.current_volume,
        dash_perf_logging_enabled: a.logData.dash_perf_logging_enabled,
        data_connection_quality: a.logData.data_connection_quality,
        debug_reason: a.logData.debug_reason,
        device_id: a.logData.device_id,
        dropped_frame_count: Number(a.logData.dropped_frame_count),
        error: a.logData.error,
        error_code: a.logData.error_code,
        error_description: a.logData.error_description,
        error_domain: a.logData.error_domain,
        error_user_info: a.logData.error_user_info,
        event_name: a.eventType,
        event_seq_num: a.logData.event_seq_num,
        external_log_id: a.logData.external_log_id,
        external_log_type: a.logData.external_log_id,
        feed_aggregation_type: a.logData.feed_aggregation_type,
        feed_position: a.logData.feed_position,
        frame_events: a.logData.frame_events,
        ft: a.logData.ft,
        interrupt_count:
          a.logData.interrupt_count !== null
            ? Number(a.logData.interrupt_count)
            : null,
        interrupt_time: Number(a.logData.interrupt_time),
        is_abr_enabled: a.logData.is_abr_enabled,
        is_fbms: a.logData.is_fbms,
        is_live_video_rewound: a.logData.is_live_video_rewound,
        is_p2p_playback: a.logData.is_p2p_playback,
        is_predictive_playback: a.logData.is_predictive_playback,
        is_sound_on: a.logData.is_sound_on,
        is_templated_manifest: a.logData.is_templated_manifest,
        last_viewability_percentage: Number(
          a.logData.last_viewability_percentage
        ),
        live_trace_source_id: a.logData.live_trace_source_id,
        live_trace_stream_id: a.logData.live_trace_stream_id,
        live_trace_stream_type: a.logData.live_trace_stream_type,
        next_representation_id: a.logData.next_representation_id,
        notification_id: a.logData.notification_id,
        notification_medium: a.logData.notification_medium,
        permalink_share_id: a.logData.permalink_share_id,
        playback_duration: a.logData.playback_duration,
        playback_is_broadcast: a.logData.playback_is_broadcast,
        playback_is_drm: a.logData.playback_is_drm,
        playback_is_live_streaming: a.logData.playback_is_live_streaming,
        player_format: a.logData.player_format,
        player_instance_key: a.logData.player_instance_key,
        player_origin: a.logData.player_origin,
        player_state: a.logData.player_state,
        player_suborigin: a.logData.player_suborigin,
        player_version: a.logData.player_version,
        reaction_video_channel_type: a.logData.reaction_video_channel_type,
        representation_id: a.logData.representation_id,
        resource_url: a.logData.resource_url,
        routeTracePolicy: a.routeTracePolicy,
        seq_num: a.logData.seq_num,
        source: a.source_VPL_LOGGING_HACK,
        source_VPL_LOGGING_HACK: a.logData.source_VPL_LOGGING_HACK,
        stall_count: Number(a.logData.stall_count),
        stall_count_200_ms: Number(a.logData.stall_count_200_ms),
        stall_time: Number(a.logData.stall_time),
        state: a.logData.state,
        streaming_format: a.logData.streaming_format,
        time_ms: a.logData.time_ms,
        total_frame_count: Number(a.logData.total_frame_count),
        tracking_data_encrypted: a.logData.tracking_data_encrypted,
        tracking_nodes: a.logData.tracking_nodes,
        tv_session_id: a.logData.tv_session_id,
        v2_heart_beat: a.logData.v2_heart_beat,
        video_bandwidth: a.logData.video_bandwidth,
        video_chaining_depth_level: a.logData.video_chaining_depth_level,
        video_chaining_parent_video_id:
          a.logData.video_chaining_parent_video_id,
        video_chaining_session_id: a.logData.video_chaining_session_id,
        video_channel_id: a.logData.video_channel_id,
        video_id: a.logData.video_id,
        video_last_start_time_position:
          a.logData.video_last_start_time_position,
        video_play_reason: a.logData.video_play_reason,
        video_player_height: Number(a.logData.video_player_height),
        video_player_width: Number(a.logData.video_player_width),
        video_time_position: a.logData.video_time_position,
        web_client_revision: a.logData.web_client_revision,
      };
    }
    a = {
      logComet: function (a) {
        c("VideoPlayerWwwFalcoEvent").log(function () {
          return h(a);
        });
      },
      logCometImmediately: function (a) {
        c("VideoPlayerWwwFalcoEvent").logImmediately(function () {
          return h(a);
        });
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerCaptionsDisplay.react",
  ["qex", "react", "recoverableViolation", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        captionsCenterAlign: {
          justifyContent: "taijpn5t",
          textAlign: "oqcyycmt",
        },
        captionsContainer: {
          bottom: "lhzng9rx",
          boxSizing: "rq0escxv",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          paddingLeft: "k2nzzd71",
          paddingRight: "cnyvn6ex",
          position: "pmk7jnqg",
          textAlign: "oqcyycmt",
          transitionDuration: "pc15xi3s",
          transitionProperty: "flx89l3n",
          transitionTimingFunction: "eloblzlw",
          width: "k4urcfbm",
        },
        captionsDefault: {
          backgroundColor: "d6rk862h",
          color: "ljqsnud1",
          fontSize: "a5q79mjw",
          fontWeight: "ekzkrbhg",
          lineHeight: "j8p27hm0",
          marginTop: "kvgmc6g5",
          marginEnd: "nw5zvenu",
          marginBottom: "oygrvhab",
          marginStart: "pbhxczp3",
          paddingTop: "debrwdc1",
          paddingEnd: "m4n6deaq",
          paddingBottom: "pwvavz3a",
          paddingStart: "n1w2zk5c",
        },
        captionsLeftAlign: {
          justifyContent: "jifvfom9",
          textAlign: "hzawbc8m",
        },
        captionsRightAlign: {
          justifyContent: "bkfpd7mw",
          textAlign: "ftzlm3b6",
        },
      },
      j = {
        BIG: "25px",
        BIGGER: "30px",
        BIGGEST: "34px",
        DEFAULT: "17px",
        MEDIUM: "21px",
        SMALL: "13px",
        SMALLEST: "8px",
      },
      k = { DARK: 0.75, DEFAULT: 0.45, LIGHT: 0.25, OPAQUE: 1, TRANSPARENT: 0 },
      l = {
        BLACK: "20, 22, 26",
        BLUE: "0, 0, 255",
        CYAN: "0, 255, 255",
        GREEN: "0, 255, 0",
        MAGENTA: "255, 0, 255",
        RED: "255, 0, 0",
        WHITE: "255, 255, 255",
        YELLOW: "255, 255, 0",
      };
    function m(a) {
      switch (a) {
        case "center":
          return i.captionsCenterAlign;
        case "left":
          return i.captionsLeftAlign;
        case "right":
          return i.captionsRightAlign;
        default:
          c("recoverableViolation")(
            "Unsupported captions text alignment: " + a,
            "comet_video_player"
          );
      }
    }
    function n(a) {
      var b = {},
        c = a.captionsBackgroundColor,
        d = a.captionsBackgroundOpacity,
        e = a.captionsTextColor;
      a = a.captionsTextSize;
      if (c !== null) {
        d = d !== null ? k[d] : 1;
        b.backgroundColor = "rgba(" + l[c] + "," + d + ")";
      }
      e !== null && (b.color = "rgba(" + l[e] + ")");
      a !== null && (b.fontSize = j[a]);
      return b;
    }
    function a(a) {
      var b,
        d = a.activeCaptions,
        e = a.adjustments;
      a = a.captionDisplayStyle;
      var f = d == null ? void 0 : d.rows;
      b = (b = c("qex")._("835")) != null ? b : !1;
      var g = {};
      b && a && (g = n(a));
      if (f != null && f.length > 0) {
        b = f
          .map(function (a) {
            return a.trim();
          })
          .filter(function (a) {
            return !!a;
          });
        return b.length > 0
          ? h.jsx("div", {
              className: c("stylex")(
                i.captionsContainer,
                m(
                  (f =
                    d == null
                      ? void 0
                      : (a = d.styles) == null
                      ? void 0
                      : a.textAlignment) != null
                    ? f
                    : "center"
                )
              ),
              style: {
                paddingLeft: e.left,
                paddingRight: e.right,
                transform: "translateY(" + -e.bottom + "px)",
              },
              children: h.jsx("div", {
                className: c("stylex")(i.captionsDefault),
                style: g,
                children: b.map(function (a, b) {
                  return h.jsxs("span", { children: [a, h.jsx("br", {})] }, b);
                }),
              }),
            })
          : null;
      }
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "useVideoPlayerCaptionsDisplayAdjustments",
  ["VideoPlayerHooks", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a() {
      var a = d("VideoPlayerHooks").useVideoPlayerCaptionsReservations(),
        b = h(
          function () {
            var b = { bottom: 0, left: 0, right: 0, top: 0 };
            a.length > 0 &&
              a.forEach(function (a) {
                b[a.location] += a.size;
              });
            return b;
          },
          [a]
        );
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCaptions.react",
  [
    "VideoPlayerCaptionsDisplay.react",
    "VideoPlayerHooks",
    "react",
    "useVideoPlayerCaptionsDisplayAdjustments",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      var a = d("VideoPlayerHooks").useActiveCaptions(),
        b = c("useVideoPlayerCaptionsDisplayAdjustments")(),
        e = d("VideoPlayerHooks").useCaptionDisplayStyle();
      return h.jsx(c("VideoPlayerCaptionsDisplay.react"), {
        activeCaptions: a,
        adjustments: b,
        captionDisplayStyle: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsArea.react",
  [
    "VideoPlayerCaptions.react",
    "VideoPlayerContexts",
    "VideoPlayerHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useReducer,
      j = b.useState;
    function k(a, b) {
      switch (b.type) {
        case "reserve":
          return a.concat(b.reservation);
        case "release":
          return a.filter(function (a) {
            return a !== b.reservation;
          });
        default:
          return a;
      }
    }
    function a(a) {
      a = a.children;
      var b = i(k, []),
        e = b[0],
        f = b[1];
      b = j({
        release: function (a) {
          f({ reservation: a, type: "release" });
        },
        reserve: function (a) {
          f({ reservation: a, type: "reserve" });
          return a;
        },
      });
      b = b[0];
      var g = d("VideoPlayerHooks").useCaptionsVisible();
      return h.jsx(
        d("VideoPlayerContexts").VideoPlayerCaptionsReservationActionsContext
          .Provider,
        {
          value: b,
          children: h.jsxs(
            d("VideoPlayerContexts").VideoPlayerCaptionsReservationsContext
              .Provider,
            {
              value: e,
              children: [
                g ? h.jsx(c("VideoPlayerCaptions.react"), {}) : null,
                a,
              ],
            }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsController",
  ["JSResourceForInteraction", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
        "VideoPlayerHTML5ApiCea608State"
      ).__setRef("VideoPlayerCaptionsController"),
      i = c("JSResourceForInteraction")(
        "VideoPlayerHTML5ApiWebVttState"
      ).__setRef("VideoPlayerCaptionsController");
    function a(a) {
      var b = a.captionsUrl,
        d = a.inbandCaptionsExpected,
        e = a.onCaptionsLoaded,
        f = null,
        g = null,
        j = null,
        k = null;
      function l(a) {
        var b = i
          .load()
          .then(function (c) {
            if (b !== j) return;
            f = new c({
              captionsDisplay: null,
              onCaptionsLoaded: e,
              onReady: function (b) {
                b.loadFromUrl(a);
              },
            });
          })
          ["catch"](function (a) {
            if (b !== j) return;
            c("recoverableViolation")(
              "Failed to load the VideoPlayerHTML5ApiWebVttState module: " +
                a.message,
              "comet_video_player"
            );
          });
        return b;
      }
      function m() {
        var a = h
          .load()
          .then(function (b) {
            if (a !== k) return;
            g = new b({
              captionsDisplay: null,
              onCaptionsLoaded: e,
              onReady: function (a) {
                a.processQueue();
              },
            });
          })
          ["catch"](function (b) {
            if (a !== k) return;
            c("recoverableViolation")(
              "Failed to load the VideoPlayerHTML5ApiCea608State module: " +
                b.message,
              "comet_video_player"
            );
          });
        return a;
      }
      b != null ? (j = l(b)) : d === !0 && (k = m());
      return {
        destroy: function () {
          f && (f.destroy(), (f = null)),
            g && (g.destroy(), (g = null)),
            j && (j = null),
            k && (k = null);
        },
        handleCea608BytesReceived: function (a) {
          g && g.enqueueBytes(a);
        },
        handleTimeUpdate: function (a) {
          if (f) {
            f.source && f.source.handleTimeUpdate(a);
            return f.getCurrentScreenRepresentation();
          } else if (g) {
            g.source && g.source.handleTimeUpdate(a);
            return g.getCurrentScreenRepresentation();
          }
          return null;
        },
        updateCaptionsUrl: function (a) {
          f && (f.destroy(), (f = null)), a != null && (j = l(a));
        },
        updateInbandCaptionsExpected: function (a) {
          g && (g.destroy(), (g = null)), a && (k = m());
        },
      };
    }
    g.createCaptionsController = a;
  },
  98
);
__d(
  "VideoPlayerFallbackLearnMoreLink.react",
  ["fbt", "CometLink.react", "TetraText.react", "gkx", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = c("gkx")("1224637")
        ? "/help/work/1876956335887765/i-cant-view-or-play-videos-on-workplace"
        : "https://www.facebook.com/help/396404120401278/list";
      return i.jsx(c("TetraText.react"), {
        color: "white",
        type: "headlineEmphasized3",
        children: i.jsx(c("CometLink.react"), {
          href: a,
          children: h._("Learn More"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerFallbackCoverImplWithoutRetry.react",
  [
    "TetraText.react",
    "VideoPlayerFallbackLearnMoreLink.react",
    "cr:1672302",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var d = a.debugError,
        e = a.message;
      a.onRetry;
      return h.jsx("div", {
        className:
          "stjgntxs ni8dbmo4 taijpn5t j83agx80 ora8z2hr bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
        children: h.jsxs("div", {
          className: "ij9ysmuz cbu4d94t j83agx80 bp9cbjyn",
          children: [
            h.jsx("div", {
              className: "d2edcug0 cbu4d94t j83agx80 bp9cbjyn",
              children: h.jsx(c("TetraText.react"), {
                align: "center",
                color: "white",
                type: "bodyLink3",
                children: e,
              }),
            }),
            h.jsx("div", {
              className: "d2edcug0 tr9rh885 cbu4d94t j83agx80 bp9cbjyn",
              children: h.jsx(c("VideoPlayerFallbackLearnMoreLink.react"), {}),
            }),
            b("cr:1672302") ? h.jsx(b("cr:1672302"), { error: d }) : null,
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
  "VideoPlayerSpinner.react",
  ["CometLoadingAnimation.react", "react", "stylex", "useDebouncedValue"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 36;
    function a(a) {
      a = a.isVisible;
      var b = c("useDebouncedValue")(a, a ? 200 : 500);
      return h.jsx("div", {
        className: c("stylex").dedupe(
          {
            "height-1": "tv7at329",
            "opacity-1": "pedkr2u6",
            "position-1": "pmk7jnqg",
            "start-1": "kfkz5moi",
            "top-1": "rk01pc8j",
            "transform-0.1": "py2didcb",
            "transition-delay-1": "chkx7lpg",
            "transition-duration-1": "kmdw4o4n",
            "transition-property-1": "art1omkt",
            "transition-timing-function-1": "e4zzj2sf",
            "width-1": "thwo4zme",
          },
          a
            ? null
            : {
                "opacity-1": "b5wmifdl",
                "transition-delay-1": "hwaazqwg",
                "transition-duration-1": "kmdw4o4n",
                "transition-property-1": "l23jz15m",
                "transition-timing-function-1": "e4zzj2sf",
                "visibility-1": "kr9hpln1",
              }
        ),
        children: h.jsx(c("CometLoadingAnimation.react"), {
          animationPaused: !b,
          size: i,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerClickToPlayInteraction",
  ["fbt", "VideoPlayerHooks", "react", "useFeedClickEventHandler"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useCallback;
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.shouldUnmute;
      a = d("VideoPlayerHooks").usePaused();
      var e = d("VideoPlayerHooks").useController(),
        f = d("VideoPlayerHooks").useLastMuteReason(),
        g = i(
          function () {
            e.play("user_initiated"),
              b === !0 &&
                f !== "user_initiated" &&
                e.setMuted(!1, "product_initiated");
          },
          [e, f, b]
        );
      g = c("useFeedClickEventHandler")(g);
      a = a;
      return a
        ? { ariaLabel: h._("Play video"), handler: g, overlayLabel: "" }
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "MosUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
      if (a === 0 || b === 0) return 0;
      if (a < b) {
        var c = a;
        a = b;
        b = c;
      }
      c = a / b;
      return c > 16 / 9 ? Math.round(a / (16 / 9)) : b;
    }
    function h(a, b) {
      var c = null,
        d = null,
        e = null,
        f = null;
      for (var g = 0; g < a.length; g++) {
        var h = a[g].qualityLabel;
        if (h <= b) (e = a[g].mosValue), (c = h);
        else {
          f = a[g].mosValue;
          d = h;
          break;
        }
      }
      if (c === null && d === null) return 0;
      else if (c === null && f !== null) return f;
      else if (d === null && e !== null) return e;
      else if (f !== null && e !== null && c !== null && d !== null) {
        h = e + ((b - c) * (f - e)) / (d - c);
        return h < 0 ? 0 : h > 100 ? 100 : h;
      }
      return 0;
    }
    function a(a) {
      a = a.split(",");
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c].split(":");
        if (d.length !== 2) return null;
        var e = Number(d[0]);
        d = Number(d[1]);
        if (isNaN(e) || isNaN(d)) return null;
        b.push({ qualityLabel: e, mosValue: d });
      }
      return b;
    }
    function b(a, b, c, d, e, f) {
      if (a.length < 2) return a;
      var i = a.map(function (a) {
          return {
            track: a,
            mosValue: a.playbackResolutionMos
              ? h(a.playbackResolutionMos, g(b, c))
              : -1,
          };
        }),
        j = [],
        k = e;
      for (var l = i.length - 1; l > 0; l--) {
        if (i[l].mosValue === -1 || i[l - 1].mosValue === -1) return a;
        var m = i[l].track.bandwidth || -1,
          n = i[l - 1].track.bandwidth || -1;
        if (m === -1 || n === -1) return a;
        if (i[l].mosValue < i[l - 1].mosValue && m >= n) continue;
        m =
          i[l - 1].track.bandwidth !== null
            ? i[l].mosValue - i[l - 1].mosValue
            : Infinity;
        if (m <= k && i[l].track.bandwidth && d / i[l].track.bandwidth <= f) {
          k -= m;
          continue;
        } else k = e;
        j.push(i[l].track);
      }
      j.push(i[0].track);
      j.reverse();
      return j;
    }
    f.getQualityLabel = g;
    f.getMosValue = h;
    f.parsePlaybackMos = a;
    f.filterTracksWithExpensiveMos = b;
  },
  66
);
__d(
  "oz-player/utils/OzAbrUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b, c, d) {
      var e = a.getNumber("resolution_constraint_factor");
      if (e === 0) return b;
      a = b.filter(function (a) {
        return (
          a.getWidth() <= c.width * d * e || a.getHeight() <= c.height * d * e
        );
      });
      return !a.length ? [b[0]] : a;
    };
    b = function (a, b, c, d, e, f) {
      b = b
        ? a.getNumber("min_switch_interval")
        : a.getNumber("initial_switch_interval");
      d = d >= a.getNumber("abr_min_bandwidth_samples");
      var g = a.getNumber("abr_eval_buffer_threshold");
      c = !g || c >= g;
      g = null;
      e + a.getNumber("min_eval_interval") > Date.now()
        ? (g = "min_eval_interval")
        : f + b > Date.now()
        ? (g = "min_switch_interval")
        : !d
        ? (g = "min_bandwidth_samples")
        : c || (g = "buffer_threshold_not_satisfied");
      return g;
    };
    f.excludeLargeRepresentations = a;
    f.getReasonToPreventEvaluation = b;
  },
  66
);
__d(
  "oz-player/utils/OzBufferingUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    e = 0.1;
    var g = 1,
      h = 0.2;
    function a(a, b, c) {
      if (i(a, c)) return !0;
      c = a.currentTime;
      var d = 0;
      for (var e = 0; e < a.buffered.length; e++) {
        var f = a.buffered.start(e),
          g = a.buffered.end(e);
        if (f <= c && g >= c) {
          d = g;
          break;
        }
      }
      return d - c > b;
    }
    function i(a, b) {
      var c = a.currentTime,
        d = 0;
      for (var e = 0; e < a.buffered.length; e++) {
        var f = a.buffered.start(e),
          g = a.buffered.end(e);
        if (f <= c && g >= c) {
          d = g;
          break;
        }
      }
      return Math.abs(d - b) <= h || Math.abs(c - b) <= h;
    }
    function b(a, b) {
      a = a ? a.getSourceBufferState() : null;
      if (!a) return 0;
      b = b.getCurrentTime();
      return j(b, a.getBufferedRanges());
    }
    function j(a, b) {
      var c = null;
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        e.startTime <= a && e.endTime > a && (c = e);
      }
      return !c ? 0 : c.endTime - a;
    }
    function c(a) {
      var b = [];
      for (var c = 0; c < a.buffered.length; c++)
        b.push({
          rangeStart: a.buffered.start(c),
          rangeEnd: a.buffered.end(c),
        });
      return b;
    }
    function d(a, b, c, d) {
      if (c.length === 0 || b.size === 0) return !1;
      var e = null;
      for (var f = 0; f < c.length; f++) {
        var g = c[f],
          h = b.get(g);
        if (l(a, 0, h)) {
          e = g;
          break;
        }
      }
      if (e == null) return !1;
      var i = !0;
      b.forEach(function (c, b) {
        if (e === b) return;
        b = c.getBufferedRanges();
        b.forEach(function (b) {
          i = k(a, b, d, i);
        });
      });
      return !i;
    }
    function k(a, b, c, d) {
      return a >= b.startTime && a < b.endTime + c ? !1 : d;
    }
    function l(a, b, c) {
      b === void 0 && (b = 0);
      if (c) {
        c = c.getBufferedRanges();
        for (var d = 0; d < c.length; d++)
          if (c[d].startTime <= a && c[d].endTime > a && c[d].endTime - a > b)
            return !0;
      }
      return !1;
    }
    f.BUFFER_UNDERFLOW_THRESHOLD = e;
    f.BUFFER_OVERFLOW_THRESHOLD = g;
    f.BUFFER_FUDGE_FACTOR = h;
    f.hasEnoughBuffer = a;
    f.hasBufferedToOrReachedEnd = i;
    f.getBufferAheadFromPlaybackStates = b;
    f.getBufferAheadFromCurrentTime = j;
    f.getNumericalRangesFromSourceBuffer = c;
    f.hasEnoughPartialBuffer = d;
    f.hasBuffer = l;
  },
  66
);
__d(
  "oz-player/utils/OzPlaybackRestrictionsUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = function (a, b) {
      return a.getBandwidth() - b.getBandwidth();
    };
    a = function (a, b, c, d, e) {
      if (d.length === 0) return [];
      d.sort(g);
      b = b.reduce(function (a, b) {
        return b.applyRestriction(a, c);
      }, d);
      if (e != null && e.length > 0) {
        var f = d.filter(function (a) {
          return e.indexOf(a.getID()) > -1;
        });
        b = b.concat(f).sort(g);
      }
      return a.getBool(
        "ignore_restrictions_when_all_representations_restricted"
      )
        ? b.length > 0
          ? b
          : d
        : b;
    };
    f.applyVideoPlaybackRestrictions = a;
  },
  66
);
__d(
  "OzSystemicRiskABRManager",
  [
    "MosUtils",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/networks/OzBandwidthUtils",
    "oz-player/utils/OzAbrUtils",
    "oz-player/utils/OzBufferingUtils",
    "oz-player/utils/OzPlaybackRestrictionsUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4,
      i = 2e3,
      j = 50,
      k = {
        BANDWIDTH: "br",
        BUFFER: "vb",
        ENCODING: "er",
        LOW_MOS: "lm",
        MULTIPLIER: "m",
        PREVIOUS_MOS: "pm",
        PREVIOUS_RESOLUTION: "pr",
      };
    a = (function () {
      function a(a, b, c, d, e, f, g, h) {
        (this.$11 = !1),
          (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e),
          (this.$7 = f),
          (this.$8 = g),
          (this.$9 = h);
      }
      var b = a.prototype;
      b.setSourceBuffer = function (a) {
        this.$6 = a;
      };
      b.updateRepresentations = function (a) {
        var b = this;
        this.$3 = a;
        a = this.$3.find(function (a) {
          return a.getQualityLabel() === b.$2.getQualityLabel();
        });
        this.$2 = (a = a) != null ? a : this.$3[0];
      };
      b.getBestRepresentation = function (a) {
        var b = this.$1.getLegacyConfig(),
          e = d(
            "oz-player/utils/OzBufferingUtils"
          ).getBufferAheadFromPlaybackStates(this.$6, this.$5),
          f = this.$5.getDuration();
        f = isNaN(f) ? h : f;
        if (this.$3.length === 0) {
          this.$10 = "no available representations";
          return this.$2;
        }
        var g = this.$5.getCurrentTime();
        f = this.$9 === "static" ? (f - g) * 1e3 : h;
        g = this.$8();
        a = b.getBool("systemic_risk_use_fetch_range_duration", !1)
          ? this.$12(a)
          : i;
        var j = b.getBool("use_bandwidth_estimate_from_headers_in_abr", !1)
          ? c(
              "oz-player/networks/OzBandwidthEstimator"
            ).getBandwidthDiagnosticsFromHeaders(b)
          : c(
              "oz-player/networks/OzBandwidthEstimator"
            ).getBandwidthDiagnostics(b);
        if (j == null) {
          this.$10 = "missing bandwidth diagnostics";
          return this.$2;
        }
        var k = this.$13(this.$3).sort(function (a, b) {
            return a.getBandwidth() - b.getBandwidth();
          }),
          l = null,
          m = null,
          n = null;
        for (var o = 0; o < k.length; o++) {
          m = this.$14(k[o], k[Math.max(o - 1, 0)], j, g, a, e, f);
          var p = m;
          p = p.multiplier;
          if (isNaN(p)) {
            n = m;
            l = this.$2;
            break;
          }
          p = this.$15(k[o], m.multiplier, a, j);
          if (p) (n = m), (l = k[o]);
          else break;
        }
        l == null
          ? (this.$2 =
              b.getBool("respect_playback_restrictions_in_abr_fallback", !1) &&
              k.length > 0
                ? k[0]
                : this.$3[0])
          : (this.$2 = l);
        this.$16((p = n) != null ? p : m, {
          isSystemicRiskABREnabled: b.getBool("use_systemic_risk_abr", !1),
          noRepresentationSelected: l == null,
          representationCount: k.length,
        });
        this.$11 || (this.$11 = !0);
        return this.$2;
      };
      b.$15 = function (a, b, c, d) {
        a = a.getBandwidth() * b;
        b = (a * c) / 8e3;
        c = this.$17(d, b, j);
        return a < c;
      };
      b.$17 = function (a, b, c) {
        a = d(
          "oz-player/networks/OzBandwidthUtils"
        ).getEstimatedRequestTimeToLastByteMs(a, b, c);
        return (b / a) * 8e3;
      };
      b.$12 = function (a) {
        var b = i;
        if (a != null && a.length > 0) {
          var c = a[0].getTimeRange().startTime;
          a = a[a.length - 1].getTimeRange().endTime;
          a - c > 0 && (b = (a - c) * 1e3);
        }
        return b;
      };
      b.$14 = function (a, b, c, d, e, f, g) {
        var h = this.$1.getLegacyConfig();
        a = a.getBandwidth();
        a = (a * e) / 8e3;
        e = this.$17(
          c,
          a,
          h.getNumber("systemic_risk_abr_high_estimate_confidence", 75)
        );
        c = this.$17(c, a, j);
        a = this.$18(b, d);
        d = Math.min(b.getHeight(), b.getWidth());
        b = this.$19(a, d);
        var i = 1;
        b || (i = c / e);
        c = b
          ? h.getNumber("systemic_risk_abr_low_mos_risk_factor", 1)
          : h.getNumber("systemic_risk_abr_risk_factor", 1);
        e =
          this.$11 || b
            ? 1
            : h.getNumber("systemic_risk_abr_initial_risk_factor", 1);
        c *= e;
        h = (g - f * 1e3) / g;
        e = c * i;
        f = e * h;
        g = Math.max(f, 1);
        return {
          bandwidth: i,
          buffer: h,
          encoding: c,
          lowMos: b,
          multiplier: g,
          previousMos: a,
          previousResolution: d,
        };
      };
      b.$19 = function (a, b) {
        var c = this.$1.getLegacyConfig(),
          d = c.getNumber("systemic_risk_abr_low_mos_resolution", 0);
        if (d > 0)
          return b <= c.getNumber("systemic_risk_abr_low_mos_resolution", 0);
        return a != null && a > 0
          ? a <= c.getNumber("systemic_risk_abr_min_watchable_mos", 0)
          : !1;
      };
      b.$18 = function (a, b) {
        a = a.getCustomField("playbackResolutionMos");
        a = d("MosUtils").parsePlaybackMos(String(a));
        return a != null
          ? d("MosUtils").getMosValue(
              a,
              d("MosUtils").getQualityLabel(b.width, b.height)
            )
          : null;
      };
      b.$13 = function (a) {
        if (
          !this.$1
            .getLegacyConfig()
            .getBool("systemic_risk_abr_apply_representation_restrictions", !1)
        )
          return a;
        a = d("oz-player/utils/OzAbrUtils").excludeLargeRepresentations(
          this.$1,
          a,
          this.$8(),
          this.$7
        );
        a = d(
          "oz-player/utils/OzPlaybackRestrictionsUtils"
        ).applyVideoPlaybackRestrictions(this.$1, this.$4, this.$8(), a);
        return a;
      };
      b.$16 = function (a, b) {
        if (a == null) return;
        var c = b.isSystemicRiskABREnabled,
          d = b.noRepresentationSelected;
        b = b.representationCount;
        this.$10 = [
          [k.LOW_MOS, a.lowMos],
          [k.ENCODING, a.encoding],
          [k.BANDWIDTH, a.bandwidth],
          [k.MULTIPLIER, a.multiplier],
          [k.BUFFER, a.buffer],
          [k.PREVIOUS_MOS, a.previousMos],
          [k.PREVIOUS_RESOLUTION, a.previousResolution],
        ].reduce(function (a, b) {
          var c = b[1],
            d = "";
          switch (typeof c) {
            case "number":
              d = c.toFixed(1);
              break;
            case "boolean":
              d = c ? "1" : "0";
              break;
            default:
              d = "null";
          }
          return a + (b[0] + ": " + d + ";");
        }, "");
        c || (this.$10 += "disabled;");
        d && (this.$10 += "none-selected-of-" + b + ";");
      };
      b.getLastEvaluationReason = function () {
        return this.$10;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerBanzaiLogFlusher",
  ["VideoPlayerWwwLogger", "emptyFunction", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("emptyFunction");
    b = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.flushLogs = function () {
        var a = this.$1.consumeLoggerEvents();
        a.forEach(function (a) {
          var b = {
            event: a.eventType,
            logData: a.logData,
            routeTracePolicy: a.routeTracePolicy,
            source: a.source_VPL_LOGGING_HACK,
          };
          if (
            a.source_VPL_LOGGING_HACK === "animated_image_share" &&
            c("gkx")("1710047")
          )
            return;
          b = (b = a.logData) == null ? void 0 : b.ad_client_token;
          b != null
            ? c("VideoPlayerWwwLogger").logCometImmediately(a)
            : c("VideoPlayerWwwLogger").logComet(a);
        });
      };
      b.discardLogsWithoutFlushing = function () {
        var a = this.$1.consumeLoggerEvents();
      };
      return a;
    })();
    g["default"] = b;
  },
  98
);
__d(
  "getErrorMessageFromMediaErrorCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (a) {
        case 1:
          return "The fetching process for the media resource was aborted by the user agent at the users request.";
        case 2:
          return "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";
        case 3:
          return "An error of some description occurred while decoding the media resource, after the resource was established to be usable.";
        case 4:
          return "The media resource indicated by the src attribute was not suitable.";
      }
      return null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "getErrorNameFromMediaErrorCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (a) {
        case 1:
          return "MEDIA_ERR_ABORTED";
        case 2:
          return "MEDIA_ERR_NETWORK";
        case 3:
          return "MEDIA_ERR_DECODE";
        case 4:
          return "MEDIA_ERR_SRC_NOT_SUPPORTED";
        default:
          return "MEDIA_ERR_UNKNOWN_" + ((a = a) != null ? a : "UNDEFINED");
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerImplementationErrors",
  ["getErrorMessageFromMediaErrorCode", "getErrorNameFromMediaErrorCode"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.errorLocation,
        d = a.hostCallError,
        e = a.videoElementError,
        f = a.videoElementNetworkState;
      a = a.videoElementReadyState;
      var g = e == null ? void 0 : e.code,
        h = d != null && typeof d.message === "string" ? d.message : null;
      h == null && (h = e == null ? void 0 : e.message);
      h == null && g != null && (h = c("getErrorMessageFromMediaErrorCode")(g));
      e = {
        createdTimestamp: Date.now(),
        errorDescription:
          ((e = h) != null ? e : "Empty error") +
          ("; code: " + ((h = g) != null ? h : "undefined")) +
          ("; readyState: " + a) +
          ("; networkState: " + f),
        errorLocation: b,
        errorName: c("getErrorNameFromMediaErrorCode")(g),
        originalError: d,
      };
      return e;
    }
    function b(a, b) {
      if (a == null) {
        var c = {
          createdTimestamp: Date.now(),
          errorDescription: "Empty rejection reason from video play()",
          errorLocation: b,
          errorName: "PlayRejectedError",
        };
        return c;
      }
      c = {
        createdTimestamp: Date.now(),
        errorCode:
          typeof a.code === "string"
            ? a.code
            : typeof a.code === "number"
            ? String(a.code)
            : void 0,
        errorDescription: typeof a.message === "string" ? a.message : String(a),
        errorLocation: b,
        errorName: typeof a.name === "string" ? a.name : "PlayRejectedError",
      };
      return c;
    }
    function d(a, b, c) {
      var d;
      d = {
        message: (d = b == null ? void 0 : b.message) != null ? d : "",
        name: (d = b == null ? void 0 : b.name) != null ? d : "UnknownError",
        stack: (b == null ? void 0 : b.stack) || new Error().stack,
      };
      b = {
        createdTimestamp: Date.now(),
        errorCode: null,
        errorDescription: d.name + " " + d.message,
        errorLocation: c,
        errorName: a,
        stack: d.stack,
        url: null,
      };
      return b;
    }
    g.createVideoPlayerErrorFromHTMLVideoElementError = a;
    g.createVideoPlayerErrorFromVideoElementPlayPromiseRejectionReason = b;
    g.createVideoPlayerErrorFromGenericError = d;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachine",
  [
    "VideoPlayerImplementationErrors",
    "gkx",
    "orEmptyArray",
    "recoverableViolation",
    "shallowArrayEqual",
    "shallowEqual",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = a.bufferingDetected,
        c = a.seeking;
      a = a.waitingForDomPlaying;
      return !b && !c && !a;
    }
    function i(a) {
      var b = a.bufferingDetected,
        d = a.prevPlaybackState,
        e = a.seeking;
      a = a.waitingForDomPlaying;
      b = h({ bufferingDetected: b, seeking: e, waitingForDomPlaying: a });
      e = d;
      switch (d) {
        case "stalling":
          e = b ? "playing" : "stalling";
          break;
        case "ended":
        case "paused":
        case "playing":
          break;
        default:
          d;
          c("recoverableViolation")(
            "unexpected playbackState: " + d,
            "comet_video_player"
          );
          break;
      }
      return e;
    }
    function j(a) {
      return (
        (a.loopCount > 0 && a.loopCurrent < a.loopCount) || a.loopCount === -1
      );
    }
    function k(a, b) {
      var c = b.videoElementPlayheadPosition;
      return c == null
        ? []
        : a.emsgBoxes.filter(function (a) {
            a = a.box;
            var b = a.getDuration() || 0;
            a = a.getStartTime();
            return a != null && c >= a && c < a + b;
          });
    }
    function l(a, b, e) {
      switch (e.type) {
        case "host_call_pause":
        case "host_call_play":
        case "host_call_set_current_time":
        case "host_call_set_volume":
        case "host_call_set_muted":
        case "host_call_set_playback_rate":
        case "host_call_set_video_quality":
        case "host_call_set_latency_level":
          return babelHelpers["extends"]({}, a, {
            hostCallQueue: a.hostCallQueue.concat([e]),
          });
        case "controller_set_latency_level_requested":
        case "implementation_set_latency_level_requested":
          return babelHelpers["extends"]({}, a, {
            latencyLevel: e.payload.latencyLevel,
          });
        case "dom_event_ended":
          return babelHelpers["extends"]({}, a, {
            playbackState: "ended",
            waitingForDomPlaying: !1,
          });
        case "dom_event_pause":
          if (a.playbackState === "ended") return a;
          if (b.videoElementEnded === !0)
            return babelHelpers["extends"]({}, a, {
              playbackState: "ended",
              waitingForDomPlaying: !1,
            });
          return a.playbackState === "paused"
            ? a
            : babelHelpers["extends"]({}, a, {
                playbackState: "paused",
                waitingForDomPlaying: !1,
              });
        case "dom_event_play":
          var f = a.playbackState,
            g = f;
          switch (f) {
            case "playing":
            case "stalling":
            case "ended":
            case "paused":
              g = "stalling";
              break;
            default:
              f;
              c("recoverableViolation")(
                "unexpected playbackState: " + f,
                "comet_video_player"
              );
              break;
          }
          f = !0;
          return babelHelpers["extends"]({}, a, {
            playbackState: g,
            waitingForDomPlaying: f,
          });
        case "dom_event_playing":
          g = a.bufferingDetected;
          f = a.seeking;
          var h = !1,
            l = a.playbackState;
          return babelHelpers["extends"]({}, a, {
            playbackState: i({
              bufferingDetected: g,
              prevPlaybackState: l,
              seeking: f,
              waitingForDomPlaying: h,
            }),
            waitingForDomPlaying: h,
          });
        case "dom_event_timeupdate":
          g = a.activeEmsgBoxes;
          l = k(a, b);
          f = c("shallowArrayEqual")(g, l) ? g : l;
          if (a.waitingForDomTimeUpdateAfterSeeked) {
            h = a.bufferingDetected;
            g = a.seeking;
            l = !1;
            var m = a.playbackState;
            return babelHelpers["extends"]({}, a, {
              activeEmsgBoxes: f,
              playbackState: i({
                bufferingDetected: h,
                prevPlaybackState: m,
                seeking: g,
                waitingForDomPlaying: l,
              }),
              waitingForDomPlaying: l,
              waitingForDomTimeUpdateAfterSeeked: !1,
            });
          }
          return babelHelpers["extends"]({}, a, { activeEmsgBoxes: f });
        case "dom_event_seeking":
          h = a.playbackState;
          m = h;
          switch (h) {
            case "paused":
            case "ended":
              break;
            case "stalling":
            case "playing":
              m = "stalling";
              break;
            default:
              h,
                c("recoverableViolation")(
                  "unexpected playbackState: " + h,
                  "comet_video_player"
                );
          }
          return babelHelpers["extends"]({}, a, {
            playbackState: m,
            seeking: !0,
            waitingForDomPlaying: !0,
          });
        case "dom_event_seeked":
          g = a.bufferingDetected;
          l = a.waitingForDomPlaying;
          f = !1;
          h = a.playbackState;
          return babelHelpers["extends"]({}, a, {
            implementationSeekSourcePosition: null,
            playbackState: i({
              bufferingDetected: g,
              prevPlaybackState: h,
              seeking: f,
              waitingForDomPlaying: l,
            }),
            seeking: f,
            waitingForDomTimeUpdateAfterSeeked: !0,
          });
        case "dom_event_error":
          m = d(
            "VideoPlayerImplementationErrors"
          ).createVideoPlayerErrorFromHTMLVideoElementError({
            errorLocation: "dom_event_error",
            hostCallError: null,
            videoElementError: e.payload.videoElementError,
            videoElementNetworkState: e.payload.videoElementNetworkState,
            videoElementReadyState: e.payload.videoElementReadyState,
          });
          return babelHelpers["extends"]({}, a, {
            error: c("gkx")("2011") ? a.error : m,
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        case "dom_event_play_promise_created":
          return babelHelpers["extends"]({}, a, {
            hostCallPlayIDLast: e.payload.hostCallPlayID,
          });
        case "dom_event_play_promise_resolved":
          return a.hostCallPlayIDLast !== e.payload.hostCallPlayID
            ? a
            : babelHelpers["extends"]({}, a, { hostCallPlayIDLast: null });
        case "dom_event_play_promise_rejected":
          return a.hostCallPlayIDLast !== e.payload.hostCallPlayID
            ? a
            : babelHelpers["extends"]({}, a, {
                hostCallPlayIDLast: null,
                playbackState:
                  a.playbackState === "stalling" ? "paused" : a.playbackState,
                waitingForDomPlaying: !1,
              });
        case "implementation_host_call_queue_flushed":
          return babelHelpers["extends"]({}, a, { hostCallQueue: [] });
        case "implementation_host_call_failed":
          g = d(
            "VideoPlayerImplementationErrors"
          ).createVideoPlayerErrorFromHTMLVideoElementError({
            errorLocation: e.payload.errorLocation,
            hostCallError: e.payload.hostCallError,
            videoElementError: e.payload.videoElementError,
            videoElementNetworkState: e.payload.videoElementNetworkState,
            videoElementReadyState: e.payload.videoElementReadyState,
          });
          return babelHelpers["extends"]({}, a, {
            error: g,
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        case "implementation_video_node_unmounted":
          return a;
        case "implementation_engine_initialized":
          l = (h = e.payload.streamingFormat) != null ? h : a.streamingFormat;
          return babelHelpers["extends"]({}, a, {
            availableQualities: e.payload.availableQualities,
            selectedVideoQuality: e.payload.selectedVideoQuality,
            streamingFormat: l,
            targetVideoQuality: e.payload.targetVideoQuality,
            videoProjection: e.payload.videoProjection,
          });
        case "implementation_engine_destroyed":
          return a;
        case "implementation_fatal_error":
          return babelHelpers["extends"]({}, a, {
            error: e.payload.fatalError,
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        case "implementation_seek_requested":
          return babelHelpers["extends"]({}, a, {
            implementationSeekSourcePosition: e.payload.seekSourcePosition,
          });
        case "representation_changed":
          return babelHelpers["extends"]({}, a, {
            targetVideoQuality: e.payload.targetVideoQuality,
          });
        case "controller_pause_requested":
          return a.playbackState === "ended"
            ? a
            : babelHelpers["extends"]({}, a, {
                lastPauseReason: e.payload.reason,
                lastPausedTimeMs: Date.now(),
                lastPlayedTimeMs: 0,
                playbackState: "paused",
                waitingForDomPlaying: !1,
                watchTimeMs:
                  a.lastPlayedTimeMs > 0
                    ? a.watchTimeMs + (Date.now() - a.lastPlayedTimeMs)
                    : a.watchTimeMs,
              });
        case "controller_play_requested":
          return a.playbackState !== "paused" && a.playbackState !== "ended"
            ? a
            : babelHelpers["extends"]({}, a, {
                hasPlayEverBeenRequested: !0,
                lastPlayReason: e.payload.reason,
                lastPlayedTimeMs:
                  a.lastPlayedTimeMs === 0 ? Date.now() : a.lastPlayedTimeMs,
                loopCurrent: j(a)
                  ? e.payload.reason === "loop_initiated"
                    ? a.loopCurrent + 1
                    : a.loopCurrent
                  : 0,
                playbackState: "stalling",
                waitingForDomPlaying: !0,
              });
        case "controller_seek_requested":
          return babelHelpers["extends"]({}, a, {
            implementationSeekSourcePosition:
              (f = b.videoElementPlayheadPosition) != null
                ? f
                : a.implementationSeekSourcePosition,
            seekTargetPosition: e.payload.seekTargetPosition,
            seeking: !0,
          });
        case "controller_quality_requested":
          return babelHelpers["extends"]({}, a, {
            selectedVideoQuality: e.payload.selectedVideoQuality,
          });
        case "controller_set_playback_rate":
          return babelHelpers["extends"]({}, a, {
            targetPlaybackRate: e.payload.playbackRate,
          });
        case "controller_muted_requested":
          return babelHelpers["extends"]({}, a, {
            lastMuteReason: e.payload.reason,
            muted: e.payload.muted,
          });
        case "controller_volume_requested":
          return babelHelpers["extends"]({}, a, { volume: e.payload.volume });
        case "controller_scrub_begin_requested":
          return a.scrubbing
            ? a
            : babelHelpers["extends"]({}, a, {
                scrubbing: !0,
                seekTargetPosition: null,
              });
        case "controller_scrub_end_requested":
          return !a.scrubbing
            ? a
            : babelHelpers["extends"]({}, a, {
                implementationSeekSourcePosition:
                  (m = b.videoElementPlayheadPosition) != null
                    ? m
                    : a.implementationSeekSourcePosition,
                scrubbing: !1,
                seekTargetPosition: e.payload.seekTargetPosition,
                seeking: e.payload.seekTargetPosition != null,
              });
        case "buffering_begin_requested":
          g = a.playbackState;
          h = g;
          switch (g) {
            case "paused":
            case "ended":
              break;
            case "playing":
            case "stalling":
              h = "stalling";
              break;
            default:
              g;
              c("recoverableViolation")(
                "unexpected playbackState: " + g,
                "comet_video_player"
              );
              break;
          }
          l = e.payload.bufferingType;
          return babelHelpers["extends"]({}, a, {
            bufferingDetected: !0,
            lastBufferingType: l,
            playbackState: h,
          });
        case "buffering_end_requested":
          f = a.seeking;
          b = a.waitingForDomPlaying;
          m = !1;
          g = a.playbackState;
          return babelHelpers["extends"]({}, a, {
            bufferingDetected: m,
            playbackState: i({
              bufferingDetected: m,
              prevPlaybackState: g,
              seeking: f,
              waitingForDomPlaying: b,
            }),
          });
        case "controller_set_captions_visible_requested":
          l = e.payload.captionsVisible;
          return a.captionsVisible === l
            ? a
            : babelHelpers["extends"]({}, a, {
                activeCaptions: l ? a.activeCaptions : null,
                captionsVisible: l,
              });
        case "controller_set_active_captions_requested":
          h = e.payload.activeCaptions;
          m = c("orEmptyArray")(h == null ? void 0 : h.rows);
          g = a.activeCaptions;
          var n = c("orEmptyArray")(g == null ? void 0 : g.rows);
          return n.length === m.length &&
            m.every(function (a, b) {
              return n[b] === a;
            })
            ? a
            : babelHelpers["extends"]({}, a, { activeCaptions: h });
        case "captions_loaded":
          return babelHelpers["extends"]({}, a, {
            activeCaptions: a.activeCaptions,
            captionsLoaded: !0,
          });
        case "captions_unloaded":
          return babelHelpers["extends"]({}, a, {
            activeCaptions: null,
            captionsLoaded: !1,
          });
        case "inband_captions_autogenerated_changed":
          f = e.payload.inbandCaptionsAutogenerated;
          return a.inbandCaptionsAutogenerated === f
            ? a
            : babelHelpers["extends"]({}, a, {
                inbandCaptionsAutogenerated: f,
              });
        case "stream_ended":
          return babelHelpers["extends"]({}, a, { streamEnded: !0 });
        case "stream_interrupted":
          return babelHelpers["extends"]({}, a, { streamInterrupted: !0 });
        case "stream_resumed":
          return babelHelpers["extends"]({}, a, { streamInterrupted: !1 });
        case "seekable_ranges_changed":
          b = e.payload.seekableRanges;
          return babelHelpers["extends"]({}, a, { seekableRanges: b });
        case "controller_set_is_live_rewind_active_requested":
          l = e.payload.isLiveRewindActive;
          return babelHelpers["extends"]({}, a, { isLiveRewindActive: l });
        case "loop_count_change_requested":
          g = e.payload.loopCount;
          return g === a.loopCount
            ? a
            : babelHelpers["extends"]({}, a, { loopCount: g, loopCurrent: 0 });
        case "player_dimensions_changed":
          m = e.payload.dimensions;
          h = m.height;
          f = m.width;
          return f === a.dimensions.width && h === a.dimensions.height
            ? a
            : babelHelpers["extends"]({}, a, {
                dimensions: { height: h, width: f },
              });
        case "emsg_box_received":
          b = e.payload.emsgBox;
          return babelHelpers["extends"]({}, a, {
            emsgBoxes: [].concat(a.emsgBoxes, [b]),
          });
        case "register_emsg_observer":
          l = new Set(a.emsgObserverTokens);
          l.add(e.payload.token);
          return babelHelpers["extends"]({}, a, { emsgObserverTokens: l });
        case "unregister_emsg_observer":
          g = new Set(a.emsgObserverTokens);
          g["delete"](e.payload.token);
          return babelHelpers["extends"]({}, a, { emsgObserverTokens: g });
        default:
          return a;
      }
    }
    function m(a, b, d) {
      var e = b.type !== "dom_seeking";
      e = e ? d : a.uncontrolledState;
      d = !c("shallowEqual")(e, a.uncontrolledState);
      b = l(a.controlledState, e, b);
      var f = !c("shallowEqual")(b, a.controlledState);
      return d || f
        ? babelHelpers["extends"]({}, a, {
            controlledState: f ? b : a.controlledState,
            uncontrolledState: d ? e : a.uncontrolledState,
          })
        : a;
    }
    var n, o;
    function p(a) {
      var b = a.collectUncontrolledState,
        d = a.debugLogId;
      d = a.initialState;
      var e = a.onDispatched,
        f = a.onFatalError,
        g = d,
        h = g,
        i = 0,
        j = !1,
        k = !1,
        l = !0,
        n = !0;
      return {
        dispatch: function (a) {
          if (!n) return;
          var d = null,
            g = null;
          try {
            ++i;
            if (i >= 10)
              if (!j) {
                j = !0;
                throw c("unrecoverableViolation")(
                  "Video player state machine loop detected",
                  "comet_video_player"
                );
              } else return;
            var o = h.uncontrolledState;
            if (l)
              try {
                o = b();
              } catch (a) {
                (l = !1), (g = a);
              }
            var p = h;
            o = m(p, a, o);
            h = o;
            e(p, o, a);
          } catch (a) {
            (n = !1), (d = a);
          } finally {
            if (!k && (d != null || g != null)) {
              k = !0;
              try {
                f((p = d) != null ? p : g);
              } catch (a) {}
            }
            --i;
          }
        },
        getCurrentState: function () {
          return h;
        },
        getInitialState: function () {
          return g;
        },
      };
    }
    var q, r;
    function a(a) {
      var b = a.collectUncontrolledState,
        c = a.debugLogId,
        d = a.initialState,
        e = a.onFatalError,
        f = a.stateTransitionHandlers;
      function g(a, b, c) {
        try {
          var d = !0,
            e = 0;
          while (d && e < f.length) {
            var g = f[e];
            d = g(a, b, c);
            ++e;
          }
        } finally {
        }
      }
      return p({
        collectUncontrolledState: b,
        debugLogId: c,
        initialState: d,
        onDispatched: g,
        onFatalError: e,
      });
    }
    function b(a, b) {
      function c() {}
      function d(a) {
        return a;
      }
      function e(c) {
        return function (e) {
          var f = d(e.currentTarget);
          b(f, ["reactEvent(" + e.type + ")"]);
          a.dispatch(c);
        };
      }
      return {
        onAbort: c,
        onCanPlay: c,
        onCanPlayThrough: c,
        onDurationChange: e({ type: "dom_event_durationchange" }),
        onEmptied: c,
        onEncrypted: c,
        onEnded: e({ type: "dom_event_ended" }),
        onError: function (c) {
          var e = d(c.currentTarget);
          b(e, ["reactEvent(" + c.type + ")"]);
          a.dispatch({
            payload: {
              videoElementError: e.error,
              videoElementNetworkState: e.networkState,
              videoElementReadyState: e.readyState,
            },
            type: "dom_event_error",
          });
        },
        onLoadStart: c,
        onLoadedData: c,
        onLoadedMetadata: c,
        onPause: e({ type: "dom_event_pause" }),
        onPlay: e({ type: "dom_event_play" }),
        onPlaying: e({ type: "dom_event_playing" }),
        onProgress: e({ type: "dom_event_progress" }),
        onRateChange: e({ type: "dom_event_ratechange" }),
        onSeeked: e({ type: "dom_event_seeked" }),
        onSeeking: e({ type: "dom_event_seeking" }),
        onStalled: c,
        onSuspend: c,
        onTimeUpdate: e({ type: "dom_event_timeupdate" }),
        onVolumeChange: e({ type: "dom_event_volumechange" }),
        onWaiting: e({ type: "dom_event_waiting" }),
      };
    }
    g.createVideoPlayerImplementationStateMachine = p;
    g.createVideoPlayerImplementationStateMachineWithStateTransitionHandlers =
      a;
    g.createReactVideoElementCallbacksForStateMachine = b;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachineHostCallQueue",
  ["cometUniqueID", "emptyFunction", "gkx", "promiseDone"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = c("emptyFunction");
    function h() {
      return "id-vpdom-" + c("cometUniqueID")();
    }
    function i(a) {
      var b = a.engineExtrasAPI,
        d = a.hostCall,
        e = a.machine;
      a = a.videoElementAPI;
      switch (d.type) {
        case "host_call_play":
          var f = a.play();
          f &&
            (e.dispatch({
              payload: { hostCallPlayID: d.payload.hostCallID },
              type: "dom_event_play_promise_created",
            }),
            c("promiseDone")(
              f.then(
                function () {
                  e.dispatch({
                    payload: { hostCallPlayID: d.payload.hostCallID },
                    type: "dom_event_play_promise_resolved",
                  });
                },
                function (a) {
                  e.dispatch({
                    payload: {
                      hostCallPlayID: d.payload.hostCallID,
                      playPromiseRejectionReason: a,
                    },
                    type: "dom_event_play_promise_rejected",
                  });
                }
              )
            ));
          break;
        case "host_call_pause":
          a.pause();
          break;
        case "host_call_set_playback_rate":
          a.setPlaybackRate(d.payload.playbackRate);
          break;
        case "host_call_set_muted":
          a.setMuted(d.payload.muted);
          break;
        case "host_call_set_volume":
          a.setVolume(d.payload.volume);
          break;
        case "host_call_set_current_time":
          a.setPlayheadPosition(d.payload.currentTime);
          break;
        case "host_call_set_video_quality":
          b.setUserSelectedVideoQuality(d.payload.selectedVideoQuality);
          break;
        case "host_call_set_latency_level":
          b.setLatencyLevel(d.payload.latencyLevel);
          break;
        default:
          d.type;
          return !1;
      }
      return !0;
    }
    function j(a) {
      var b = a.engineExtrasAPI,
        c = a.hostCall,
        d = a.machine;
      a = a.videoElementAPI;
      if (!a || !b) d.dispatch(c);
      else {
        var e = !1;
        try {
          e = i({
            engineExtrasAPI: b,
            hostCall: c,
            machine: d,
            videoElementAPI: a,
          });
        } catch (b) {
          d.dispatch({
            payload: {
              errorLocation: "apply_host_call_catch",
              hostCall: c,
              hostCallError: b,
              videoElementError: a.getError(),
              videoElementNetworkState: a.getNetworkState(),
              videoElementReadyState: a.getReadyState(),
            },
            type: "implementation_host_call_failed",
          });
        }
        e &&
          d.dispatch({
            payload: { hostCall: c },
            type: "implementation_host_call_applied",
          });
      }
    }
    function k(a) {
      var b = [];
      function c() {
        b = b.filter(function (a) {
          return a.type !== "host_call_play" && a.type !== "host_call_pause";
        });
      }
      function d(a) {
        b = b.filter(function (b) {
          return b.type !== a;
        });
      }
      a.forEach(function (a) {
        switch (a.type) {
          case "host_call_play":
            c();
            break;
          case "host_call_pause":
            c();
            break;
          case "host_call_set_playback_rate":
            d(a.type);
            break;
          case "host_call_set_muted":
            d(a.type);
            break;
          case "host_call_set_volume":
            d(a.type);
            break;
          case "host_call_set_current_time":
            d(a.type);
            break;
          case "host_call_set_video_quality":
            d(a.type);
            break;
          case "host_call_set_latency_level":
            d(a.type);
            break;
          default:
            a.type;
        }
        b = b.concat([a]);
      });
      return b;
    }
    function a(a) {
      var b = a.engineExtrasAPI,
        c = a.machine,
        d = a.reason,
        e = a.state,
        f = a.videoElementAPI;
      a = [
        {
          payload: {
            hostCallID: h(),
            reason: d,
            volume: e.controlledState.volume,
          },
          type: "host_call_set_volume",
        },
        {
          payload: {
            hostCallID: h(),
            muted: e.controlledState.muted,
            reason: d,
          },
          type: "host_call_set_muted",
        },
        {
          payload: {
            hostCallID: h(),
            reason: d,
            selectedVideoQuality: e.controlledState.selectedVideoQuality,
          },
          type: "host_call_set_video_quality",
        },
      ];
      d = k(e.controlledState.hostCallQueue.concat(a));
      d.forEach(function (a) {
        j({ engineExtrasAPI: b, hostCall: a, machine: c, videoElementAPI: f });
      });
      c.dispatch({
        payload: { hostCallsFlushed: d },
        type: "implementation_host_call_queue_flushed",
      });
    }
    g.makeHostCallID = h;
    g.applyOrQueueHostCall = j;
    g.flushHostCallQueue = a;
  },
  98
);
__d(
  "VideoMimeTypes",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      return a + '; codecs="' + b + ", " + c + '"';
    }
    e = "mp4a.40.2";
    function b(a) {
      return "avc1.42E0" + a.toString(16).toUpperCase();
    }
    function c(a) {
      return "avc1.4D40" + a.toString(16).toUpperCase();
    }
    function d(a) {
      return "avc1.6400" + a.toString(16).toUpperCase();
    }
    var g = "video/mp4";
    b = a(g, b(30), e);
    var h = a(g, c(30), e);
    c = a(g, c(31), e);
    var i = a(g, d(50), e);
    a = a(g, d(51), e);
    g = {
      h264baseline: b,
      h264main30avc: h,
      h264main31avc: c,
      h264high50avc: i,
      h264high51avc: a,
    };
    f["default"] = g;
  },
  66
);
__d(
  "VideoPlayerLoggerPlayerStates",
  [],
  function (a, b, c, d, e, f) {
    a = "started";
    b = "unpaused";
    c = { STARTED: a, UNPAUSED: b };
    f["default"] = c;
  },
  66
);
__d(
  "VideoPlayerMutedStateChange",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.currMuted,
        c = a.currVolume,
        d = a.prevMuted;
      a = a.prevVolume;
      b = b || c === 0;
      c = d || a === 0;
      if (c === b) return null;
      return b ? "muted" : "unmuted";
    }
    f.getVideoPlayerMutedStateChange = a;
  },
  66
);
__d(
  "getVideoBrowserTabId",
  ["guid"],
  function (a, b, c, d, e, f, g) {
    var h = c("guid")().slice(-8);
    function a() {
      return h;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachineLogger",
  [
    "CometProductAttribution",
    "PlaybackSpeedExperiments",
    "SiteData",
    "VideoMimeTypes",
    "VideoPlayerConnectionQuality",
    "VideoPlayerLoggerPlayerStates",
    "VideoPlayerMutedStateChange",
    "VideoPlayerStateBasedLoggingEvents",
    "emptyFunction",
    "getPlayerFormatForLogData",
    "getVideoBrowserTabId",
    "gkx",
    "mapObject",
    "recoverableViolation",
    "removeFromArray",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4,
      i = 0.5,
      j = null,
      k = function (a) {
        var b;
        j = (b = j) != null ? b : document.createElement("video");
        return !("canPlayType" in j) ? "" : j.canPlayType(a);
      };
    b = c("emptyFunction");
    e = c("emptyFunction");
    f = c("emptyFunction");
    b = c("emptyFunction");
    var l =
      (e = d("PlaybackSpeedExperiments").enablePlaybackSpeedLogging()) != null
        ? e
        : !1;
    function m() {
      return {
        canLogPausedOrFinishedPlaying: !1,
        canLogPlayingEvent: !0,
        debugSubscribers: [],
        dontLogPauseOnUnpausedSeeking: !1,
        hasLoggedStallData: !1,
        hasLoggedStartedPlaying: !1,
        hasPausedOnce: !1,
        hasPendingRequestedPlaying: !1,
        initialSuborigin: void 0,
        interruptCount: 0,
        interruptDuration: 0,
        interruptEndTimestamp: 0,
        interruptStartTimestamp: 0,
        isLoggingScrubbingSequence: !1,
        lastLoggedError: null,
        lastLoggedFullscreenState: !1,
        lastLoggedPlaybackSpeed: null,
        lastLoggedViewabilityPercentage: void 0,
        lastStartTimePosition: null,
        lastTrackedRepresentation: null,
        nextHeartbeatTime: null,
        nextPlayedThreeSecondsPlayheadPosition: null,
        sequenceNumber: 0,
        shouldIgnoreDomPause: !1,
        shouldIgnoreDomPlay: !1,
        shouldLogRequestedPlayingForScrub: !1,
        stallCount: 0,
        stallCount200ms: 0,
        stallDuration: 0,
        stallStartTimestamp: 0,
        stallCountTotal: 0,
        stallDurationTotal: 0,
        startStallCountTotal: 0,
        startStallDurationTotal: 0,
        vplEventSequenceNumber: 0,
      };
    }
    function n(a, b) {
      return b === "muted" ||
        b === "unmuted" ||
        b === "started_playing" ||
        b === "caption_change" ||
        b === "unpaused"
        ? a.controlledState.captionsVisible
          ? "on"
          : "off"
        : void 0;
    }
    function a(a) {
      var b = new Map(),
        e = a.initialLoggingMetaData,
        f = e,
        g = [],
        j = m(),
        o = new Set(
          c("VideoPlayerStateBasedLoggingEvents").StateBasedLoggingEventNames
        );
      function p(a) {
        j.debugSubscribers.push(a);
        return function () {
          c("removeFromArray")(j.debugSubscribers, a);
        };
      }
      function q(a) {
        j.debugSubscribers.forEach(function (b) {
          return b(a);
        });
      }
      function r(a) {
        var b = j.stallStartTimestamp;
        if (b > 0) {
          j.stallCount += 1;
          j.stallCountTotal += 1;
          j.hasPendingRequestedPlaying && (j.startStallCountTotal += 1);
          a = a - b;
          j.stallDurationTotal += a;
          j.stallDuration += a;
          j.stallCount200ms += a > 200 ? 1 : 0;
          j.hasPendingRequestedPlaying && (j.startStallDurationTotal += a);
        }
      }
      function s(a, b) {
        a =
          a.uncontrolledState.videoElementPlayheadPosition == null
            ? null
            : a.uncontrolledState.videoElementPlayheadPosition;
        var c = null;
        switch (b) {
          case "paused":
          case "cancelled_requested_playing":
          case "finished_playing":
          case "heart_beat":
          case "playback_speed_changed":
          case "representation_ended":
            c = j.lastStartTimePosition;
            break;
          case "scrubbed":
            c = a;
            break;
          default:
            break;
        }
        switch (b) {
          case "paused":
          case "cancelled_requested_playing":
          case "finished_playing":
          case "scrubbed":
            j.lastStartTimePosition = null;
            break;
          case "started_playing":
          case "unpaused":
          case "heart_beat":
          case "playback_speed_changed":
          case "representation_ended":
            j.lastStartTimePosition = a;
            break;
          default:
            break;
        }
        return { video_last_start_time_position: c };
      }
      function t(a, b) {
        var c = b.uncontrolledState.clockTimestamp;
        a = a.controlledState.streamInterrupted;
        b = b.controlledState.streamInterrupted;
        !a && b
          ? (j.interruptStartTimestamp = c)
          : a &&
            !b &&
            j.interruptStartTimestamp > 0 &&
            ((j.interruptEndTimestamp = c),
            (j.interruptCount += 1),
            (j.interruptDuration +=
              j.interruptEndTimestamp - j.interruptStartTimestamp));
      }
      function u(a, b) {
        var c = b.uncontrolledState.clockTimestamp;
        a = a.controlledState.playbackState;
        var d = b.controlledState.playbackState;
        a !== "stalling" &&
          d === "stalling" &&
          (q("stall_start"), (j.stallStartTimestamp = c));
        a === "stalling" &&
          d !== "stalling" &&
          (r(b.uncontrolledState.clockTimestamp),
          (j.stallStartTimestamp = 0),
          q("stall_end"));
      }
      function v(a, b, c) {
        a = b.uncontrolledState;
        b = a.videoElementPlayheadPosition;
        switch (c) {
          case "unpaused":
          case "started_playing":
            j.nextPlayedThreeSecondsPlayheadPosition =
              ((a = b) != null ? a : 0) + 3;
            break;
          case "paused":
          case "finished_playing":
            j.nextPlayedThreeSecondsPlayheadPosition = null;
            break;
          default:
            break;
        }
      }
      function w(a, b, c) {
        if (j.interruptCount > 0 && j.interruptDuration > 0) {
          a = {
            interrupt_count: j.interruptCount,
            interrupt_time: j.interruptDuration,
          };
          j.interruptCount = 0;
          j.interruptDuration = 0;
          j.interruptStartTimestamp = 0;
          j.interruptEndTimestamp = 0;
          return a;
        }
        return { interrupt_count: null, interrupt_time: null };
      }
      function x(a, b, c) {
        var d = {
            stall_count: null,
            stall_count_200_ms: null,
            stall_time: null,
          },
          e = b.uncontrolledState.clockTimestamp,
          f = function () {
            var a = {
              stall_count: j.stallCount,
              stall_count_200_ms: j.stallCount200ms,
              stall_time: j.stallDuration,
            };
            j.stallCount = 0;
            j.stallCount200ms = 0;
            j.stallDuration = 0;
            j.stallStartTimestamp = 0;
            return a;
          };
        a = a.controlledState.playbackState;
        var g = b.controlledState.playbackState;
        a !== "stalling" && g === "stalling" && (j.stallStartTimestamp = e);
        switch (c) {
          case "started_playing":
          case "unpaused":
          case "finished_playing":
          case "paused":
          case "cancelled_requested_playing":
          case "playback_speed_changed":
          case "representation_ended":
            r(b.uncontrolledState.clockTimestamp);
            d = f();
            break;
          case "heart_beat":
            b.controlledState.playbackState !== "stalling" &&
              (r(b.uncontrolledState.clockTimestamp), (d = f()));
            break;
          default:
            break;
        }
        return d;
      }
      function y(a, b) {
        a = a.current;
        var c = null;
        switch (b) {
          case "finished_playing":
          case "paused":
          case "heart_beat":
            a && (c = a.getAndFlushTracedFrames());
            return c != null ? JSON.stringify(c) : null;
          default:
            return null;
        }
      }
      function z(a) {
        a = a.controlledState.playbackState;
        switch (a) {
          case "playing":
          case "stalling":
            return "playing";
          case "paused":
            return "paused";
          case "ended":
            return "finished";
          default:
            a;
            return "unknown";
        }
      }
      function A() {
        return {
          state: j.hasLoggedStartedPlaying
            ? c("VideoPlayerLoggerPlayerStates").UNPAUSED
            : c("VideoPlayerLoggerPlayerStates").STARTED,
        };
      }
      function B(a) {
        return (a =
          a == null
            ? void 0
            : (a = a.v2) == null
            ? void 0
            : a
                .map(function (a) {
                  return [a["class"], a.module]
                    .map(d("CometProductAttribution").filterEntryValue)
                    .join(":");
                })
                .join(";")) != null
          ? a
          : "";
      }
      function C(f) {
        var h = f.eventType,
          i = f.logDataOverrides,
          k = f.prevState,
          m = f.state;
        f = s(m, h);
        f = f.video_last_start_time_position;
        var p = x(k, m, h),
          q = p.stall_count,
          r = p.stall_count_200_ms;
        p = p.stall_time;
        var t = w(k, m, h),
          u = t.interrupt_count;
        t = t.interrupt_time;
        var A = y(a.initialLoggingMetaData.videoLiveTraceRef, h),
          C = [],
          D =
            a.initialLoggingMetaData.coreVideoPlayerMetaData
              .autoplayGatingResult;
        D && C.push(D);
        D =
          h === "entered_fs"
            ? !0
            : h === "exited_fs"
            ? !1
            : j.lastLoggedFullscreenState;
        var E = c("getPlayerFormatForLogData")(
            D,
            e.coreVideoPlayerMetaData.playerFormat
          ),
          F = m.uncontrolledState.viewabilityPercentage,
          G = Boolean(m.uncontrolledState.isFBIsLiveTemplated),
          H = Boolean(m.uncontrolledState.isFBWasLive),
          I = m.uncontrolledState.videoElementPlaybackRate;
        I = I == null || I === 0 ? j.lastLoggedPlaybackSpeed : I;
        var J = a.initialLoggingMetaData.productAttribution,
          K = null,
          L = null;
        c("gkx")("3013") &&
          ((K =
            J != null
              ? d("CometProductAttribution").minifyProductAttributionV2(J)
              : null),
          (L = J != null ? B(J) : null));
        L = {
          access_token: a.initialLoggingMetaData.accessToken,
          ad_client_token: e.coreVideoPlayerMetaData.adClientToken,
          attribution_id:
            J != null && Object.prototype.hasOwnProperty.call(J, "0")
              ? JSON.stringify({ 0: J["0"] })
              : null,
          attribution_id_v2: K,
          attribution_id_v2_root: L,
          audio_only: e.coreVideoPlayerMetaData.audioOnly,
          audio_representation_id: m.uncontrolledState.audioRepresentationID,
          autoplay_eligible:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.canAutoplay ===
            "allow",
          autoplay_failure_reasons: JSON.stringify(C),
          autoplay_setting:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.autoplaySetting,
          available_qualities: m.controlledState.availableQualities.length,
          broadcaster_origin:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.broadcasterOrigin,
          browser_tab_id: c("getVideoBrowserTabId")(),
          caption_state: n(m, h),
          current_playback_speed: l ? I : null,
          current_viewability_percentage: F,
          dash_perf_logging_enabled:
            e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass !=
              null &&
            e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass.isEnabled(),
          data_connection_quality: d("VideoPlayerConnectionQuality").evaluate(
            function () {
              return m.uncontrolledState.estimatedBandwidth;
            }
          ),
          dropped_frame_count:
            m.uncontrolledState.videoElementDroppedFrameCount,
          external_log_id: e.coreVideoPlayerMetaData.externalLogID,
          external_log_type: e.coreVideoPlayerMetaData.externalLogType,
          frame_events: A,
          interrupt_count: u,
          interrupt_time: t,
          is_abr_enabled: m.isAbrEnabled,
          is_fbms: m.uncontrolledState.isFBMS,
          is_predictive_playback: m.uncontrolledState.isPredictiveDash,
          is_sound_on: !m.controlledState.muted,
          is_live_video_rewound: m.controlledState.isLiveRewindActive,
          is_templated_manifest: G || H,
          last_viewability_percentage: j.lastLoggedViewabilityPercentage,
          playback_is_drm: Boolean(
            a.initialLoggingMetaData.coreVideoPlayerMetaData.graphQLVideoDRMInfo
          ),
          playback_duration: m.uncontrolledState.videoElementDuration,
          playback_is_broadcast:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.isVideoBroadcast,
          playback_is_live_streaming:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.isLiveStreaming,
          player_format: E,
          player_instance_key: e.instanceKey,
          player_origin: e.coreVideoPlayerMetaData.playerOriginOverride,
          player_state: z(m),
          player_suborigin: e.coreVideoPlayerMetaData.subOrigin,
          player_version: m.playerVersion,
          representation_id: m.uncontrolledState.videoRepresentationID,
          source_VPL_LOGGING_HACK:
            e.coreVideoPlayerMetaData.source_VPL_LOGGING_HACK,
          stall_count: q,
          stall_count_200_ms: r,
          stall_time: p,
          streaming_format: m.controlledState.streamingFormat,
          total_frame_count: m.uncontrolledState.videoElementTotalFrameCount,
          tracking_data_encrypted:
            a.initialLoggingMetaData.trackingDataEncrypted,
          tracking_nodes: a.initialLoggingMetaData.trackingNodes,
          v2_heart_beat: c("gkx")("1434599") && h === "heart_beat" ? !0 : null,
          video_bandwidth: m.uncontrolledState.estimatedBandwidth,
          video_id: e.coreVideoPlayerMetaData.videoFBID,
          video_last_start_time_position: f,
          video_play_reason: m.controlledState.lastPlayReason,
          video_player_height: (J = e.dimensions) == null ? void 0 : J.height,
          video_player_width: (K = e.dimensions) == null ? void 0 : K.width,
          video_time_position: m.uncontrolledState.videoElementPlayheadPosition,
          web_client_revision: c("SiteData").client_revision,
        };
        C = {
          event_seq_num: ++j.vplEventSequenceNumber,
          seq_num: o.has(h) ? ++j.sequenceNumber : null,
          time_ms: Date.now(),
        };
        var M = {};
        b.forEach(function (a, b) {
          M[b] = a;
        });
        A = babelHelpers["extends"]({}, M, L, i, C);
        t =
          (u = j.initialSuborigin) != null
            ? u
            : e.coreVideoPlayerMetaData.subOrigin;
        H = (G = A.source_VPL_LOGGING_HACK) != null ? G : t;
        q =
          (E = e.coreVideoPlayerMetaData.initialTracePolicy) != null
            ? E
            : e.coreVideoPlayerMetaData.routeTracePolicy;
        r = {
          eventType: h,
          logData: A,
          routeTracePolicy: q,
          source_VPL_LOGGING_HACK: H,
        };
        g.push(r);
        v(k, m, h);
        j.initialSuborigin == null && t != null && (j.initialSuborigin = t);
        j.lastLoggedFullscreenState = D;
        j.lastLoggedPlaybackSpeed = I;
        h === "viewability_changed" && (j.lastLoggedViewabilityPercentage = F);
      }
      var D = {};
      function E(a, b, c) {
        C({
          eventType: "requested_playing",
          logDataOverrides: babelHelpers["extends"]({}, c, A()),
          prevState: a,
          state: b,
        });
        j.hasPendingRequestedPlaying = !0;
        j.canLogPausedOrFinishedPlaying = !0;
        return D;
      }
      function F(a, b, c) {
        if (!j.canLogPausedOrFinishedPlaying) return D;
        else if (j.hasPendingRequestedPlaying) {
          G(a, b, c);
          j.canLogPausedOrFinishedPlaying = !1;
          j.hasPendingRequestedPlaying = !1;
          return D;
        } else {
          C({
            eventType: "paused",
            logDataOverrides: c,
            prevState: a,
            state: b,
          });
          j.canLogPausedOrFinishedPlaying = !1;
          j.hasPendingRequestedPlaying = !1;
          return D;
        }
      }
      function G(a, b, c) {
        C({
          eventType: "cancelled_requested_playing",
          logDataOverrides: babelHelpers["extends"]({}, c, A()),
          prevState: a,
          state: b,
        });
        return D;
      }
      function H(a, b, c) {
        if (
          c.type === "dom_event_play_promise_rejected" &&
          j.hasPendingRequestedPlaying
        ) {
          c = c.payload.playPromiseRejectionReason;
          if (c != null && c.name === "NotAllowedError") {
            G(a, b, { debug_reason: "not_allowed" });
            return D;
          } else return D;
        } else return D;
      }
      function I(a, b, c) {
        if (
          (c.type === "controller_play_requested" ||
            (c.type === "dom_event_play" && !j.shouldIgnoreDomPlay)) &&
          a.controlledState.playbackState !== b.controlledState.playbackState
        ) {
          c = b.uncontrolledState.liveTraceContext;
          c = c
            ? {
                live_trace_source_id: c.sourceId,
                live_trace_stream_id: c.streamId,
                live_trace_stream_type: c.streamType,
              }
            : null;
          E(a, b, c);
          return D;
        } else return D;
      }
      function J(a, b, c) {
        if (
          a.controlledState.playbackState === "stalling" &&
          b.controlledState.playbackState === "playing" &&
          j.canLogPlayingEvent
        ) {
          C({
            eventType: j.hasLoggedStartedPlaying
              ? "unpaused"
              : "started_playing",
            prevState: a,
            state: b,
          });
          j.hasLoggedStartedPlaying = !0;
          j.canLogPlayingEvent = !1;
          j.hasPendingRequestedPlaying = !1;
          return D;
        } else return D;
      }
      function K(a, b, d) {
        var e = b.controlledState.playbackState,
          f = a.controlledState.playbackState;
        if (
          d.type === "controller_scrub_begin_requested" &&
          !a.controlledState.scrubbing &&
          e !== "paused" &&
          e !== "ended"
        ) {
          F(a, b);
          j.isLoggingScrubbingSequence = !0;
          return D;
        } else if (
          !a.controlledState.seeking &&
          b.controlledState.seeking &&
          !j.isLoggingScrubbingSequence &&
          e !== "paused" &&
          e !== "ended" &&
          !j.hasPendingRequestedPlaying
        ) {
          F(a, b);
          j.shouldLogRequestedPlayingForScrub = !0;
          return D;
        } else if (
          d.type === "controller_scrub_end_requested" &&
          a.controlledState.scrubbing &&
          e !== "paused" &&
          e !== "ended"
        ) {
          E(a, b, { video_time_position: d.payload.seekTargetPosition });
          return D;
        } else if (a.controlledState.seeking && !b.controlledState.seeking) {
          d = b.uncontrolledState.videoElementPlayheadPosition;
          var g = a.controlledState.implementationSeekSourcePosition;
          (!c("gkx")("1482680") ||
            (g != null && d != null && Math.abs(g - d) > i)) &&
            (j.shouldLogRequestedPlayingForScrub &&
              e !== "paused" &&
              e !== "ended" &&
              E(a, b),
            C({ eventType: "scrubbed", prevState: a, state: b }),
            (j.isLoggingScrubbingSequence = !1),
            (j.shouldLogRequestedPlayingForScrub = !1),
            f !== "paused" && f !== "ended" && (j.canLogPlayingEvent = !0));
          return D;
        } else return D;
      }
      function L(a, b, c) {
        if (
          a.controlledState.playbackState !== b.controlledState.playbackState &&
          b.controlledState.playbackState === "ended" &&
          j.canLogPausedOrFinishedPlaying
        ) {
          C({ eventType: "finished_playing", prevState: a, state: b });
          j.canLogPausedOrFinishedPlaying = !1;
          return D;
        } else return D;
      }
      function M(a, b, c) {
        if (
          (c.type === "controller_pause_requested" ||
            (c.type === "dom_event_pause" && !j.shouldIgnoreDomPause)) &&
          a.controlledState.playbackState !== b.controlledState.playbackState
        ) {
          F(a, b);
          return D;
        } else return D;
      }
      function N(a, b, d) {
        var e = b.controlledState.playbackState;
        if (e !== "paused" && e !== "ended") {
          c("gkx")("1469813") &&
          d.type === "implementation_video_node_unmounted"
            ? F(a, a, { debug_reason: "unloaded" })
            : (d.type === "implementation_unmounted" ||
                d.type === "implementation_engine_destroy_requested") &&
              F(a, b, { debug_reason: "unloaded" });
          return D;
        } else return D;
      }
      function O(a, b, e) {
        e = b.controlledState.muted;
        var f = b.controlledState.volume,
          g = a.controlledState.muted,
          h = a.controlledState.volume;
        e = d("VideoPlayerMutedStateChange").getVideoPlayerMutedStateChange({
          currMuted: e,
          currVolume: f,
          prevMuted: g,
          prevVolume: h,
        });
        g = { current_volume: Math.round(f * 100) };
        switch (e) {
          case "muted":
            C({
              eventType: "muted",
              logDataOverrides: g,
              prevState: a,
              state: b,
            });
            return D;
          case "unmuted":
            C({
              eventType: "unmuted",
              logDataOverrides: g,
              prevState: a,
              state: b,
            });
            return D;
          case null:
            if (h < f) {
              C({
                eventType: "volume_increase",
                logDataOverrides: g,
                prevState: a,
                state: b,
              });
              return D;
            } else if (h > f) {
              C({
                eventType: "volume_decrease",
                logDataOverrides: g,
                prevState: a,
                state: b,
              });
              return D;
            } else return D;
          default:
            e;
            c("recoverableViolation")(
              'Unexpected mutedStateChange "' + e + '"',
              "comet_video_player"
            );
            return D;
        }
      }
      function P(a, b, c) {
        c = b.uncontrolledState.videoRepresentationID;
        var d = j.lastTrackedRepresentation,
          e = b.controlledState.playbackState,
          f = b.controlledState.seeking;
        if (!f && e !== "paused" && e !== "ended" && d != null && d !== c) {
          C({
            eventType: "representation_ended",
            logDataOverrides: {
              next_representation_id: c,
              representation_id: d,
            },
            prevState: a,
            state: b,
          });
          j.lastTrackedRepresentation = c;
          q("quality_change");
          return D;
        } else if (d == null && d !== c) {
          j.lastTrackedRepresentation = c;
          return D;
        } else return D;
      }
      function Q(a, b) {
        var d = a.controlledState.error;
        return {
          currentVideo: {
            audioStreamId: a.uncontrolledState.audioRepresentationID,
            dashAudioFormat: void 0,
            hasHD: void 0,
            hasRateLimit: void 0,
            hasSubtitles: a.controlledState.captionsLoaded,
            isDrm: Boolean(e.coreVideoPlayerMetaData.graphQLVideoDRMInfo),
            isHD: void 0,
            isLiveStream: e.coreVideoPlayerMetaData.isLiveStreaming,
            isRateLimited: void 0,
            liveManifestUrl: void 0,
            projection: void 0,
            resourceUrl: void 0,
            streamId: a.uncontrolledState.videoRepresentationID,
            streamType: a.controlledState.streamingFormat,
            tagHD: void 0,
            tagSD: void 0,
            videoID: e.coreVideoPlayerMetaData.videoFBID,
          },
          player: {
            canPlayType: c("mapObject")(c("VideoMimeTypes"), k),
            dimensions: e.dimensions
              ? { height: e.dimensions.height, width: e.dimensions.width }
              : null,
            droppedFrames: a.uncontrolledState.videoElementDroppedFrameCount,
            inPlayStallCount: void 0,
            inPlayStallTime: void 0,
            initializationTime: void 0,
            initializationTimestamp: void 0,
            interruptCount: void 0,
            interruptTime: void 0,
            lastError: d,
            loggedError: j.lastLoggedError,
            stack: d == null ? void 0 : d.stack,
            stallCount: j.stallCount,
            stallTime: j.stallDuration,
            state: z(a),
            totalFrames: a.uncontrolledState.videoElementTotalFrameCount,
            version: a.playerVersion,
            videoSource: void 0,
            viewabilityPercentage: a.uncontrolledState.viewabilityPercentage,
          },
          playerStateMachine: { action: b, state: a },
        };
      }
      function R(a, b, d) {
        var e = b.controlledState.error;
        if (e != null && e !== j.lastLoggedError && e.errorCode !== "410") {
          var f = e.errorDescription,
            g = e.errorName,
            h = e.url,
            i = e.errorCode == null || e.errorCode === "" ? g : e.errorCode;
          d = Q(b, d);
          C({
            eventType: "error",
            logDataOverrides: babelHelpers["extends"](
              {},
              c("gkx")("1565232") ? A() : null,
              {
                error: g,
                error_code: i,
                error_description: f,
                error_domain: g,
                error_user_info: JSON.stringify(d),
                resource_url: h,
              }
            ),
            prevState: a,
            state: b,
          });
          j.lastLoggedError = e;
        }
        return D;
      }
      function S(a, b, c) {
        if (!l) return D;
        var d = b.uncontrolledState.videoElementPlaybackRate;
        c.type === "dom_event_ratechange" &&
          j.lastLoggedPlaybackSpeed != null &&
          d !== 0 &&
          d !== j.lastLoggedPlaybackSpeed &&
          C({ eventType: "playback_speed_changed", prevState: a, state: b });
        return D;
      }
      function T(a, b, c) {
        c = b.controlledState.playbackState;
        c === "paused" || c === "ended"
          ? (j.nextHeartbeatTime = null)
          : c !== "stalling" &&
            j.nextHeartbeatTime == null &&
            (j.nextHeartbeatTime = Date.now() + h);
        var d = j.nextHeartbeatTime;
        if (d != null) {
          var e = Date.now();
          e >= d &&
            (c !== "stalling" &&
              C({ eventType: "heart_beat", prevState: a, state: b }),
            (j.nextHeartbeatTime = e + h));
        }
        return D;
      }
      function U(a, b, c) {
        if (c.type === "implementation_mounted") {
          C({ eventType: "player_loaded", prevState: a, state: b });
          return D;
        } else return D;
      }
      function V(a, b, c) {
        C({
          eventType: c ? "entered_fs" : "exited_fs",
          prevState: a,
          state: b,
        });
      }
      function W(a, b, c) {
        c = e.coreVideoPlayerMetaData.playerFormat;
        f.coreVideoPlayerMetaData.playerFormat !== c &&
          C({ eventType: "player_format_changed", prevState: a, state: b });
        return D;
      }
      function X(a, b, c) {
        if (c.type === "dom_event_timeupdate") {
          c = j.nextPlayedThreeSecondsPlayheadPosition;
          if (c != null) {
            var d = b.uncontrolledState;
            d = d.videoElementPlayheadPosition;
            d != null &&
              c <= d &&
              (C({
                eventType: "played_for_three_seconds",
                prevState: a,
                state: b,
              }),
              (j.nextPlayedThreeSecondsPlayheadPosition = null));
          }
        }
        return D;
      }
      function Y(a, b, c) {
        if (c.type !== "notify_fullscreen_changed") return D;
        c = j.lastLoggedFullscreenState;
        var d = b.uncontrolledState.isFullscreen;
        if (c !== !0 && d === !0) {
          V(a, b, d);
          return D;
        } else if (c === !0 && d === !1) {
          V(a, b, d);
          return D;
        } else return D;
      }
      function Z(a, b, d) {
        d = e.coreVideoPlayerMetaData.adClientToken;
        if ((d == null || d === "") && c("gkx")("1401747")) return D;
        d = b.controlledState.playbackState;
        var f = j.lastLoggedViewabilityPercentage,
          g = b.uncontrolledState.viewabilityPercentage;
        if (d !== "paused" && d !== "ended" && f != null && f !== g) {
          C({ eventType: "viewability_changed", prevState: a, state: b });
          return D;
        } else return D;
      }
      function $(a, b, c) {
        if (c.type === "controller_set_captions_visible_requested") {
          C({ eventType: "caption_change", prevState: a, state: b });
          return D;
        } else return D;
      }
      function aa(a) {
        f = e;
        if (a.type === "notify_logging_metadata_change") {
          a = a.payload.loggingMetaData;
          e = a;
        }
      }
      return {
        addDebugSubscriber: function (a) {
          return p(a);
        },
        consumeLoggerEvents: function () {
          var a = g.splice(0);
          return a;
        },
        getLoggerState: function () {
          return j;
        },
        handleStateMachine: function (a, b, c) {
          aa(c);
          var d = b.controlledState.playbackState;
          u(a, b);
          t(a, b);
          var e = [W, Y, Z, H, I, K, J, L, M, O, N, U, $, P, R, T, S, X];
          e.forEach(function (d) {
            d(a, b, c);
          });
          (d === "paused" || d === "ended") && (j.canLogPlayingEvent = !0);
          c.type === "controller_pause_requested" &&
            ((j.hasPausedOnce = !0), (j.shouldIgnoreDomPause = !0));
          c.type === "controller_play_requested" &&
            ((j.hasPausedOnce = !0), (j.shouldIgnoreDomPlay = !0));
          c.type === "dom_event_pause" && (j.shouldIgnoreDomPause = !1);
          c.type === "dom_event_play" &&
            ((j.shouldIgnoreDomPlay = !1),
            (j.lastLoggedViewabilityPercentage =
              b.uncontrolledState.viewabilityPercentage));
        },
        logVPLEvent: function (a) {
          var b = a.eventType,
            c = a.logDataOverrides;
          a = a.state;
          C({ eventType: b, logDataOverrides: c, prevState: a, state: a });
        },
        setAdditionalLogData: function (a, c) {
          b.set(a, c);
        },
      };
    }
    g.HEARTBEAT_INTERVAL = h;
    g.createVideoPlayerImplementationStateMachineLogger = a;
  },
  98
);
__d(
  "convertToViewabilityPercentage",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a >= 0.99) return 100;
      else if (a >= 0.75) return 75;
      else if (a >= 0.5) return 50;
      else if (a >= 0.25) return 25;
      else if (a >= 0) return 0;
      else return -2;
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerImplementationStateMachineStateUncontrolledState",
  ["convertToViewabilityPercentage", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.engineExtrasAPI,
        d = a.fullscreenControllerRef,
        e = a.videoElementAPI,
        f = a.videoLiveTraceRef;
      a = a.videoPlayerPassiveViewabilityInfoRef;
      f = f.current;
      if (e == null) {
        var g = {
          audioRepresentationID: void 0,
          clockTimestamp: Date.now(),
          currentPlayingVideoQuality: void 0,
          estimatedBandwidth: void 0,
          isFBIsLiveTemplated: void 0,
          isFBMS: void 0,
          isFBWasLive: void 0,
          isFullscreen: d.current ? d.current.getIsFullscreen() : void 0,
          isPredictiveDash: void 0,
          liveTraceContext: f ? f.getLiveTraceContext() : void 0,
          videoElementDebugCurrentSrc: void 0,
          videoElementDebugSrc: void 0,
          videoElementDroppedFrameCount: void 0,
          videoElementDuration: void 0,
          videoElementEnded: void 0,
          videoElementError: void 0,
          videoElementLastBufferEndPosition: void 0,
          videoElementMuted: void 0,
          videoElementNetworkState: void 0,
          videoElementPaused: void 0,
          videoElementPlaybackRate: void 0,
          videoElementPlayheadPosition: void 0,
          videoElementReadyState: void 0,
          videoElementTotalFrameCount: void 0,
          videoElementVolume: void 0,
          videoRepresentationID: void 0,
          viewabilityPercentage: void 0,
        };
        return g;
      }
      g = e.getPlayheadPosition();
      a = a && a.current;
      a = a && a.getCurrent();
      d = {
        audioRepresentationID: b ? b.getAudioRepresentationIDAtTime(g) : void 0,
        clockTimestamp: Date.now(),
        currentPlayingVideoQuality: b
          ? b.getCurrentPlayingVideoQuality()
          : void 0,
        estimatedBandwidth: b ? b.getEstimatedBandwidth() : void 0,
        isFBIsLiveTemplated: b ? b.isFBIsLiveTemplated() : void 0,
        isFBMS: b ? b.isFBMS() : void 0,
        isFBWasLive: b ? b.isFBWasLive() : void 0,
        isFullscreen: d.current ? d.current.getIsFullscreen() : void 0,
        isPredictiveDash: b ? b.isPredictiveDash() : void 0,
        liveTraceContext: f ? f.getLiveTraceContext() : void 0,
        videoElementDebugCurrentSrc: c("gkx")("1526990")
          ? (d = e.getUnderlyingVideoElement()) == null
            ? void 0
            : d.currentSrc
          : void 0,
        videoElementDebugSrc: c("gkx")("1526990")
          ? (f = e.getUnderlyingVideoElement()) == null
            ? void 0
            : f.src
          : void 0,
        videoElementDroppedFrameCount: e.getDroppedFrameCount(),
        videoElementDuration: e.getDuration(),
        videoElementEnded: e.getEnded(),
        videoElementError: e.getError(),
        videoElementLastBufferEndPosition: e.getLastBufferEndPosition(),
        videoElementMuted: e.getMuted(),
        videoElementNetworkState: e.getNetworkState(),
        videoElementPaused: e.getPaused(),
        videoElementPlaybackRate: e.getPlaybackRate(),
        videoElementPlayheadPosition: g,
        videoElementReadyState: e.getReadyState(),
        videoElementTotalFrameCount: e.getTotalFrameCount(),
        videoElementVolume: e.getVolume(),
        videoRepresentationID: b ? b.getVideoRepresentationIDAtTime(g) : void 0,
        viewabilityPercentage: a
          ? c("convertToViewabilityPercentage")(a.visiblePercentage)
          : void 0,
      };
      return d;
    }
    g.createVideoPlayerImplementationStateMachineStateUncontrolledState = a;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachineState",
  ["VideoPlayerImplementationStateMachineStateUncontrolledState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.alwaysShowCaptions,
        c = a.areCaptionsAutogenerated,
        e = a.captionDisplayStyle,
        f = a.dimensions,
        g = a.isAbrEnabled,
        h = a.playerImplementationName,
        i = a.playerVersion;
      a = a.streamingFormat;
      var j = !0,
        k = 1,
        l = d(
          "VideoPlayerImplementationStateMachineStateUncontrolledState"
        ).createVideoPlayerImplementationStateMachineStateUncontrolledState({
          engineExtrasAPI: null,
          fullscreenControllerRef: { current: null },
          videoElementAPI: null,
          videoLiveTraceRef: { current: null },
          videoPlayerPassiveViewabilityInfoRef: { current: null },
        });
      return {
        controlledState: {
          activeCaptions: null,
          activeEmsgBoxes: [],
          availableQualities: [],
          bufferingDetected: !1,
          captionDisplayStyle: e,
          captionsLoaded: !1,
          captionsVisible: b,
          dimensions: f,
          emsgBoxes: [],
          emsgObserverTokens: new Set(),
          error: null,
          hasPlayEverBeenRequested: !1,
          hostCallPlayIDLast: null,
          hostCallQueue: [],
          implementationSeekSourcePosition: null,
          inbandCaptionsAutogenerated: c,
          isLiveRewindActive: !1,
          lastBufferingType: null,
          lastMuteReason: null,
          lastPauseReason: null,
          lastPausedTimeMs: 0,
          lastPlayReason: null,
          lastPlayedTimeMs: 0,
          latencyLevel: "normal",
          loopCount: 0,
          loopCurrent: 0,
          muted: j,
          playbackState: "paused",
          scrubbing: !1,
          seekTargetPosition: null,
          seekableRanges: null,
          seeking: !1,
          selectedVideoQuality: "notselected",
          streamEnded: !1,
          streamInterrupted: !1,
          streamingFormat: a,
          targetAudioQuality: "",
          targetPlaybackRate: 1,
          targetVideoQuality: "",
          videoProjection: null,
          volume: k,
          waitingForDomPlaying: !1,
          waitingForDomTimeUpdateAfterSeeked: !1,
          watchTimeMs: 0,
        },
        isAbrEnabled: g,
        playerImplementationName: h,
        playerVersion: i,
        uncontrolledState: l,
      };
    }
    g.createVideoPlayerImplementationStateMachineInitialState = a;
  },
  98
);
__d(
  "VideoPlayerODS",
  ["ODS", "Random"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a, b, c) {
      d("Random").coinflip(c) && d("ODS").bumpEntityKey(2079, a, b, c);
    };
    g.bumpEntityKey = a;
  },
  98
);
__d(
  "VideoPlayerImplementationEngineAPI",
  [
    "ErrorMetadata",
    "FBLogger",
    "NetworkStatus",
    "PlaybackSpeedExperiments",
    "RunComet",
    "SubscriptionsHandler",
    "VideoPlayerBanzaiLogFlusher",
    "VideoPlayerCaptionsController",
    "VideoPlayerImplementationErrors",
    "VideoPlayerImplementationStateMachine",
    "VideoPlayerImplementationStateMachineHostCallQueue",
    "VideoPlayerImplementationStateMachineLogger",
    "VideoPlayerImplementationStateMachineState",
    "VideoPlayerImplementationStateMachineStateUncontrolledState",
    "VideoPlayerODS",
    "clearTimeout",
    "cr:683059",
    "deepEquals",
    "err",
    "gkx",
    "killswitch",
    "orEmptyArray",
    "qex",
    "react",
    "recoverableViolation",
    "removeFromArray",
    "setTimeout",
    "unrecoverableViolation",
    "useConcurrentAutoplayManagementAPI",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f = d("react");
    var h = f.useEffect,
      i = f.useRef,
      j = f.useState,
      k = (f = c("qex")._("233")) != null ? f : 6e4,
      l = (function () {
        function a(a) {
          var b = a.pauseRequestCallbacks,
            c = a.playRequestCallbacks,
            d = a.scrubBeginRequestCallbacks;
          a = a.scrubEndRequestCallbacks;
          this.$1 = c;
          this.$2 = b;
          this.$3 = d;
          this.$4 = a;
        }
        var b = a.prototype;
        b.playRequest = function (a) {
          var b = this;
          this.$1.push(a);
          return function () {
            c("removeFromArray")(b.$1, a);
          };
        };
        b.pauseRequest = function (a) {
          var b = this;
          this.$2.push(a);
          return function () {
            c("removeFromArray")(b.$2, a);
          };
        };
        b.scrubBeginRequest = function (a) {
          var b = this;
          this.$3.push(a);
          return function () {
            c("removeFromArray")(b.$3, a);
          };
        };
        b.scrubEndRequest = function (a) {
          var b = this;
          this.$4.push(a);
          return function () {
            c("removeFromArray")(b.$4, a);
          };
        };
        return a;
      })();
    function m(a) {
      var b = a.concurrentAutoplayManagementAPI,
        d = a.debugAPI,
        e = a.fullscreenControllerRef,
        f = a.getCurrentExposedState,
        g = a.getCurrentIsFullscreen,
        h = a.getCurrentLiveRewindPlayheadPosition,
        i = a.getCurrentPlayheadPosition,
        j = a.loggerAPI,
        k = a.pauseImpl,
        m = a.playImpl,
        n = a.registerEmsgObserverImpl,
        o = a.scrubBeginImpl,
        p = a.scrubEndImpl,
        q = a.seekImpl,
        r = a.selectVideoQualityImpl,
        s = a.setCaptionsVisibleImpl,
        t = a.setIsLiveRewindActiveImpl,
        u = a.setLatencyLevelImpl,
        v = a.setMutedImpl,
        w = a.setPlaybackRateImpl,
        x = a.setVolumeImpl,
        y = a.subscribers,
        z = a.unregisterEmsgObserverImpl,
        A = a.videoElementAPIRef,
        B = new Set(),
        C = !1,
        D = null,
        E = [],
        F = [],
        G = [],
        H = [],
        I = new l({
          pauseRequestCallbacks: F,
          playRequestCallbacks: E,
          scrubBeginRequestCallbacks: G,
          scrubEndRequestCallbacks: H,
        }),
        J = {
          freeze: function () {
            if (!f().paused)
              throw c("unrecoverableViolation")(
                "Video player must be paused before the controller freeze",
                "comet_video_player"
              );
            var a = {};
            try {
              var b = !1;
              B.size === 0 &&
                ((b = !0),
                (D = {
                  exposedState: f(),
                  isFullscreen: g(),
                  liveRewindPlayheadPosition: h(),
                  playheadPosition: i(),
                }));
              B.add(a);
              b &&
                ((C = !0),
                y.forEach(function (a) {
                  a();
                }));
            } finally {
              C = !1;
            }
            return a;
          },
          isFrozen: function () {
            return D != null;
          },
          unfreeze: function (a) {
            if (!B.has(a))
              throw c("unrecoverableViolation")(
                "Video player controller unfreeze token not found",
                "comet_video_player"
              );
            B["delete"](a);
            B.size === 0 &&
              ((D = null),
              y.forEach(function (a) {
                a();
              }));
          },
        },
        K = babelHelpers["extends"]({}, b, J, j, {
          debugAPI: d,
          getCurrentState: function () {
            return D != null ? D.exposedState : f();
          },
          getIsFullscreen: function () {
            return D != null ? D.isFullscreen : g();
          },
          getLiveRewindPlayheadPosition: function () {
            return D != null ? D.liveRewindPlayheadPosition : h();
          },
          getPlayheadPosition: function () {
            return D != null ? D.playheadPosition : i();
          },
          internal_getVideoElement: function () {
            var a = A.current;
            if (a != null) {
              a = a.getUnderlyingVideoElement();
              return a;
            }
            return null;
          },
          observeOn: function () {
            return I;
          },
          pause: function (a) {
            if (J.isFrozen()) return;
            F.forEach(function (b) {
              return b(a);
            });
            k(a);
          },
          play: function (a) {
            if (J.isFrozen()) return;
            E.forEach(function (b) {
              return b(a);
            });
            m(a);
          },
          registerEmsgObserver: function () {
            var a = {};
            n(a);
            return a;
          },
          requestSetIsFullscreen: function (a) {
            if (J.isFrozen()) return;
            var b = e.current;
            b && b.requestSetIsFullscreen(a);
          },
          scrollIntoView: function (a) {
            var b = K.internal_getVideoElement();
            b && b.scrollIntoView(a);
          },
          scrubBegin: function () {
            if (J.isFrozen()) return;
            G.forEach(function (a) {
              return a();
            });
            o();
          },
          scrubEnd: function (a) {
            if (J.isFrozen()) return;
            H.forEach(function (b) {
              return b(a);
            });
            p(a);
          },
          seek: function (a) {
            if (J.isFrozen()) return;
            q(a);
          },
          selectVideoQuality: function (a) {
            if (J.isFrozen()) return;
            r(a);
          },
          setCaptionsVisible: function (a) {
            if (J.isFrozen()) return;
            s(a);
          },
          setIsLiveRewindActive: function (a) {
            if (J.isFrozen()) return;
            t(a);
          },
          setLatencyLevel: function (a) {
            if (J.isFrozen()) return;
            u(a);
          },
          setMuted: function (a, b) {
            if (J.isFrozen()) return;
            v(a, b);
          },
          setPlaybackRate: function (a) {
            if (J.isFrozen()) return;
            w(a);
          },
          setVolume: function (a) {
            if (J.isFrozen()) return;
            x(a);
          },
          subscribe: function (a) {
            var b = function () {
                if (J.isFrozen() && !C) return;
                a();
              },
              d = e.current,
              f = d ? d.subscribe(b) : null;
            y.push(b);
            return {
              remove: function () {
                f && f.remove(), c("removeFromArray")(y, b);
              },
            };
          },
          unregisterEmsgObserver: function (a) {
            z(a);
          },
          videoElementAPIRef: A,
        });
      return K;
    }
    function n(a) {
      var b = a.concurrentAutoplayManagementAPI,
        c = a.createExposedState,
        d = a.debugAPI,
        e = a.fullscreenControllerRef,
        f = a.logger,
        g = a.machine,
        h = a.subscribers;
      a = a.videoElementAPIRef;
      var i = {
        setAdditionalLogData: function (a, b) {
          f.setAdditionalLogData(a, b);
        },
      };
      return m({
        concurrentAutoplayManagementAPI: b,
        debugAPI: d,
        fullscreenControllerRef: e,
        getCurrentExposedState: function () {
          return c(g.getCurrentState());
        },
        getCurrentIsFullscreen: function () {
          var a = e.current;
          return a ? a.getIsFullscreen() : !1;
        },
        getCurrentLiveRewindPlayheadPosition: function () {
          var a = g.getCurrentState();
          a = a.controlledState;
          var b = a.isLiveRewindActive,
            c = a.seekableRanges;
          a = a.seekTargetPosition;
          if (!b || a == null) return null;
          c = (b = c == null ? void 0 : c.end(0)) != null ? b : 0;
          return a - c;
        },
        getCurrentPlayheadPosition: function () {
          var a,
            b = 0;
          return (a =
            g.getCurrentState().uncontrolledState
              .videoElementPlayheadPosition) != null
            ? a
            : b;
        },
        loggerAPI: i,
        pauseImpl: function (a) {
          g.dispatch({
            payload: { reason: a },
            type: "controller_pause_requested",
          });
        },
        playImpl: function (a) {
          g.dispatch({
            payload: { reason: a },
            type: "controller_play_requested",
          });
        },
        registerEmsgObserverImpl: function (a) {
          g.dispatch({ payload: { token: a }, type: "register_emsg_observer" });
        },
        scrubBeginImpl: function () {
          g.dispatch({ type: "controller_scrub_begin_requested" });
        },
        scrubEndImpl: function (a) {
          g.dispatch({
            payload: { seekTargetPosition: a },
            type: "controller_scrub_end_requested",
          });
        },
        seekImpl: function (a) {
          g.dispatch({
            payload: { seekTargetPosition: a },
            type: "controller_seek_requested",
          });
        },
        selectVideoQualityImpl: function (a) {
          g.dispatch({
            payload: { selectedVideoQuality: a },
            type: "controller_quality_requested",
          });
        },
        setCaptionsVisibleImpl: function (a) {
          g.dispatch({
            payload: { captionsVisible: a },
            type: "controller_set_captions_visible_requested",
          });
        },
        setIsLiveRewindActiveImpl: function (a) {
          g.dispatch({
            payload: { isLiveRewindActive: a },
            type: "controller_set_is_live_rewind_active_requested",
          });
        },
        setLatencyLevelImpl: function (a) {
          g.dispatch({
            payload: { latencyLevel: a },
            type: "controller_set_latency_level_requested",
          });
        },
        setMutedImpl: function (a, b) {
          g.dispatch({
            payload: { muted: a, reason: b },
            type: "controller_muted_requested",
          });
        },
        setPlaybackRateImpl: function (a) {
          g.dispatch({
            payload: { playbackRate: a },
            type: "controller_set_playback_rate",
          });
        },
        setVolumeImpl: function (a) {
          g.dispatch({
            payload: { volume: a },
            type: "controller_volume_requested",
          });
        },
        subscribers: h,
        unregisterEmsgObserverImpl: function (a) {
          g.dispatch({
            payload: { token: a },
            type: "unregister_emsg_observer",
          });
        },
        videoElementAPIRef: a,
      });
    }
    function o(a) {
      a = a.current;
      if (a == null)
        throw c("unrecoverableViolation")(
          "Attempted to access VideoElementAPI while it is not available.",
          "comet_video_player"
        );
      return a;
    }
    function p(a) {
      var e = a.alwaysShowCaptions,
        f = a.areCaptionsAutogenerated,
        g = a.captionDisplayStyle,
        h = a.captionsControllerRef,
        i = a.debugLogId,
        j = a.dimensions,
        l = a.engineExtrasAPI,
        m = a.engineMetadata,
        n = a.fullscreenControllerRef,
        p = a.handleFatalError,
        r = a.handleStateMachine,
        s = a.videoElementAPIRef,
        t = a.videoLiveTraceRef,
        u = a.videoPlayerPassiveViewabilityInfoRef;
      function v(a) {
        d(
          "VideoPlayerImplementationStateMachineHostCallQueue"
        ).applyOrQueueHostCall({
          engineExtrasAPI: l,
          hostCall: a,
          machine: y,
          videoElementAPI: s.current,
        });
      }
      var w = null,
        x = null;
      a = [
        function (a, c, d) {
          b("cr:683059") &&
          d.type === "implementation_host_call_applied" &&
          d.payload.hostCall.type === "host_call_play" &&
          c.controlledState.lastPlayReason === "autoplay_initiated"
            ? b("cr:683059").addFirstMarkerPoint("firstVideoAutoplayStalling")
            : b("cr:683059") &&
              c.controlledState.playbackState !==
                a.controlledState.playbackState &&
              c.controlledState.playbackState === "playing" &&
              c.controlledState.lastPlayReason === "autoplay_initiated" &&
              b("cr:683059").addFirstMarkerPoint("firstVideoAutoplayPlaying");
          return !0;
        },
        function (a, b, c) {
          r(a, b, c);
          return !0;
        },
        function (a, b, e) {
          if (
            c("gkx")("1633455") &&
            ((a.controlledState.streamInterrupted === !1 &&
              b.controlledState.streamInterrupted === !0) ||
              (a.controlledState.streamInterrupted === !0 &&
                b.controlledState.streamInterrupted === !1))
          ) {
            a = b.controlledState;
            b = a.bufferingDetected;
            var f = a.lastBufferingType,
              g = a.streamInterrupted;
            a = a.targetPlaybackRate;
            g
              ? (b && y.dispatch({ type: "buffering_end_requested" }),
                v({
                  payload: {
                    hostCallID: d(
                      "VideoPlayerImplementationStateMachineHostCallQueue"
                    ).makeHostCallID(),
                    playbackRate: 0,
                    reason: e.type,
                  },
                  type: "host_call_set_playback_rate",
                }))
              : (v({
                  payload: {
                    hostCallID: d(
                      "VideoPlayerImplementationStateMachineHostCallQueue"
                    ).makeHostCallID(),
                    playbackRate: a,
                    reason: e.type,
                  },
                  type: "host_call_set_playback_rate",
                }),
                b &&
                  y.dispatch({
                    payload: { bufferingType: f || "in_play" },
                    type: "buffering_begin_requested",
                  }));
          }
          return !0;
        },
        function (a, b, e) {
          if (
            (a.controlledState.bufferingDetected === !1 &&
              b.controlledState.bufferingDetected === !0) ||
            (a.controlledState.bufferingDetected === !0 &&
              b.controlledState.bufferingDetected === !1)
          ) {
            w !== null && (c("clearTimeout")(w), (w = null));
            if (
              b.controlledState.bufferingDetected &&
              (!c("gkx")("1633455") || !b.controlledState.streamInterrupted)
            ) {
              e = function a() {
                w = null;
                if (c("gkx")("1849507") && !c("NetworkStatus").isOnline())
                  w = c("setTimeout")(a, g);
                else {
                  var b = d(
                    "VideoPlayerImplementationErrors"
                  ).createVideoPlayerErrorFromGenericError(
                    "BUFFERING_TIMEOUT",
                    c("err")(
                      "The video has been in a buffering state for over " +
                        g +
                        " ms."
                    ),
                    "buffering_timeout"
                  );
                  x && (x.log(), (x = null));
                  y.dispatch({
                    payload: { fatalError: b },
                    type: "implementation_fatal_error",
                  });
                  b = l.getPerfLoggerProvider();
                  b == null
                    ? void 0
                    : b
                        .getOperationLogger("buffering_timeout")
                        .setType(f)
                        .log();
                }
              };
              var f = b.controlledState.lastBufferingType || "in_play";
              a = (a = c("qex")._("241")) != null ? a : k;
              var g = f === "in_play" ? a : k;
              w = c("setTimeout")(e, g);
              a = l.getPerfLoggerProvider();
              x = a
                ? a.getOperationLogger("buffering").setType(f).start()
                : null;
            } else
              !b.controlledState.bufferingDetected &&
                x != null &&
                (x.log(), (x = null));
          }
          return !0;
        },
        function (a, b, d) {
          if (!(d.type === "implementation_engine_destroy_requested"))
            return !0;
          w !== null && c("clearTimeout")(w);
          w = null;
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "implementation_engine_initialized")) return !0;
          a = o(s);
          c = c.type;
          d(
            "VideoPlayerImplementationStateMachineHostCallQueue"
          ).flushHostCallQueue({
            engineExtrasAPI: l,
            machine: y,
            reason: c,
            state: b,
            videoElementAPI: a,
          });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "dom_event_ended")) return !0;
          a = b.controlledState;
          ((a.loopCount > 0 && a.loopCurrent < a.loopCount) ||
            a.loopCount === -1) &&
            y.dispatch({
              payload: { reason: "loop_initiated" },
              type: "controller_play_requested",
            });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "controller_pause_requested")) return !0;
          a = b.controlledState.playbackState;
          if (!(a === "paused")) return !1;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
            },
            type: "host_call_pause",
          });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "controller_play_requested")) return !0;
          a = b.controlledState.playbackState;
          if (!(a === "stalling")) return !1;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
            },
            type: "host_call_play",
          });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "controller_seek_requested")) return !0;
          a = b.controlledState;
          b = a.seeking;
          a = a.seekTargetPosition;
          b &&
            a != null &&
            v({
              payload: {
                currentTime: a,
                hostCallID: d(
                  "VideoPlayerImplementationStateMachineHostCallQueue"
                ).makeHostCallID(),
                reason: c.type,
              },
              type: "host_call_set_current_time",
            });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "controller_muted_requested")) return !0;
          a = b.controlledState.muted;
          if (!(a === c.payload.muted)) return !1;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              muted: a,
              reason: c.type,
            },
            type: "host_call_set_muted",
          });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "controller_scrub_begin_requested")) return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: 0,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "controller_scrub_end_requested")) return !0;
          a = b.controlledState;
          b = a.seeking;
          var e = a.seekTargetPosition;
          a = a.targetPlaybackRate;
          b && e != null
            ? (v({
                payload: {
                  hostCallID: d(
                    "VideoPlayerImplementationStateMachineHostCallQueue"
                  ).makeHostCallID(),
                  playbackRate: a,
                  reason: c.type + ":seek",
                },
                type: "host_call_set_playback_rate",
              }),
              v({
                payload: {
                  currentTime: e,
                  hostCallID: d(
                    "VideoPlayerImplementationStateMachineHostCallQueue"
                  ).makeHostCallID(),
                  reason: c.type + ":seek",
                },
                type: "host_call_set_current_time",
              }))
            : v({
                payload: {
                  hostCallID: d(
                    "VideoPlayerImplementationStateMachineHostCallQueue"
                  ).makeHostCallID(),
                  playbackRate: a,
                  reason: c.type + ":cancel",
                },
                type: "host_call_set_playback_rate",
              });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "buffering_begin_requested")) return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: 0,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "controller_set_playback_rate")) return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: c.payload.playbackRate,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "buffering_end_requested")) return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: b.controlledState.targetPlaybackRate,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "controller_volume_requested")) return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
              volume: b.controlledState.volume,
            },
            type: "host_call_set_volume",
          });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "controller_quality_requested")) return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
              selectedVideoQuality: b.controlledState.selectedVideoQuality,
            },
            type: "host_call_set_video_quality",
          });
          return !1;
        },
        function (a, b, c) {
          if (
            !(
              c.type === "controller_set_latency_level_requested" ||
              c.type === "implementation_set_latency_level_requested"
            )
          )
            return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              latencyLevel: c.payload.latencyLevel,
              reason: c.type,
            },
            type: "host_call_set_latency_level",
          });
          return !1;
        },
        function (a, b, c) {
          if (
            !(c.type === "dom_event_timeupdate" || c.type === "captions_loaded")
          )
            return !0;
          c = h.current;
          var e = b.controlledState.captionsVisible,
            f = s.current;
          f = f ? f.getPlayheadPosition() : 0;
          if (
            d("PlaybackSpeedExperiments").enableCometPlaybackSpeedControl() &&
            b.controlledState.isLiveRewindActive
          ) {
            var g = b.controlledState.seekableRanges;
            g = g != null ? ((g = g.end(g.length() - 1)) != null ? g : 0) : 0;
            f >= g &&
              y.dispatch({
                payload: { isLiveRewindActive: !1 },
                type: "controller_set_is_live_rewind_active_requested",
              });
          }
          if (c && e && b.controlledState.captionsLoaded) {
            g = c.handleTimeUpdate(f);
            e = a.controlledState.activeCaptions;
            q(e, g) &&
              y.dispatch({
                payload: { activeCaptions: g },
                type: "controller_set_active_captions_requested",
              });
          }
          b = t.current;
          b != null && b.onUpdateStatus({ position: f });
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "cea608_bytes_received")) return !0;
          a = h.current;
          if (a) {
            b = c.payload;
            c = b.timescale;
            b = b.videoBytes;
            a.handleCea608BytesReceived({ timescale: c, videoBytes: b });
          }
          return !1;
        },
        function (a, b, c) {
          if (!(c.type === "controller_set_is_live_rewind_active_requested"))
            return !0;
          l.setEnableLiveheadCatchup(!c.payload.isLiveRewindActive);
          !!d("PlaybackSpeedExperiments").enableCometPlaybackSpeedControl() &&
            !c.payload.isLiveRewindActive &&
            y.dispatch({
              payload: { playbackRate: 1 },
              type: "controller_set_playback_rate",
            });
          return !1;
        },
      ];
      var y = d(
        "VideoPlayerImplementationStateMachine"
      ).createVideoPlayerImplementationStateMachineWithStateTransitionHandlers({
        collectUncontrolledState: function () {
          var a = s.current;
          return d(
            "VideoPlayerImplementationStateMachineStateUncontrolledState"
          ).createVideoPlayerImplementationStateMachineStateUncontrolledState({
            engineExtrasAPI: l,
            fullscreenControllerRef: n,
            videoElementAPI: a,
            videoLiveTraceRef: t,
            videoPlayerPassiveViewabilityInfoRef: u,
          });
        },
        debugLogId: i,
        initialState: d(
          "VideoPlayerImplementationStateMachineState"
        ).createVideoPlayerImplementationStateMachineInitialState({
          alwaysShowCaptions: e,
          areCaptionsAutogenerated: f,
          captionDisplayStyle: g,
          dimensions: j,
          isAbrEnabled: m.isAbrEnabled,
          playerImplementationName: m.playerImplementationName,
          playerVersion: m.playerVersion,
          streamingFormat: m.streamingFormat,
        }),
        onFatalError: p,
        stateTransitionHandlers: a,
      });
      return y;
    }
    function q(a, b) {
      if (a === null && b === null) return !1;
      if (a === null || b === null) return !0;
      var d = c("orEmptyArray")(b.rows);
      b = c("orEmptyArray")(a.rows);
      return (
        b.length !== d.length ||
        b.some(function (a, b) {
          return a !== d[b];
        })
      );
    }
    function r(a, b, c, d) {
      a !== b.current &&
        (c.current && (c.current.remove(), (c.current = null)),
        (b.current = a)),
        b.current &&
          !c.current &&
          (c.current = b.current.subscribe(function () {
            d.dispatch({ type: "notify_fullscreen_changed" });
          }));
    }
    function s(a, b, c, d) {
      a !== b.current &&
        (c.current && (c.current.remove(), (c.current = null)),
        (b.current = a)),
        b.current &&
          !c.current &&
          (c.current = b.current.subscribe(function () {
            d.dispatch({ type: "notify_viewability_changed" });
          }));
    }
    function t(a) {
      var b = a.engineMetadata;
      a = a.state;
      var c = a.controlledState,
        d = c.activeCaptions,
        e = c.activeEmsgBoxes,
        f = c.availableQualities,
        g = c.captionDisplayStyle,
        h = c.captionsLoaded,
        i = c.captionsVisible,
        j = c.error,
        k = c.hasPlayEverBeenRequested,
        l = c.inbandCaptionsAutogenerated,
        m = c.isLiveRewindActive,
        n = c.lastMuteReason,
        o = c.lastPauseReason,
        p = c.lastPlayedTimeMs,
        q = c.lastPlayReason,
        r = c.latencyLevel,
        s = c.loopCount,
        t = c.loopCurrent,
        u = c.muted,
        v = c.playbackState,
        w = c.seekableRanges,
        x = c.seeking,
        y = c.seekTargetPosition,
        z = c.selectedVideoQuality,
        A = c.streamInterrupted,
        B = c.targetAudioQuality,
        C = c.targetPlaybackRate,
        D = c.targetVideoQuality,
        E = c.videoProjection,
        F = c.volume;
      c = c.watchTimeMs;
      var G = a.uncontrolledState,
        H = G.currentPlayingVideoQuality,
        I = G.videoElementDuration;
      G = G.videoElementLastBufferEndPosition;
      var J = v === "ended",
        K = v === "paused" || J,
        L = v === "playing",
        M = v === "inPlayStalling";
      v = v === "stalling" || M;
      G = {
        activeCaptions: d,
        activeEmsgBoxes: e,
        availableVideoQualities: f,
        bufferEnd: (d = G) != null ? d : 0,
        captionDisplayStyle: g,
        captionsLoaded: h,
        captionsVisible: i,
        currentVideoQuality: (e = H) != null ? e : "",
        duration: (f = I) != null ? f : 0,
        ended: J,
        error: j,
        hasPlayEverBeenRequested: k,
        inPlayStalling: M,
        inbandCaptionsAutogenerated: l,
        isAbrEnabled: b.isAbrEnabled,
        isExternalMedia: b.isExternalMedia,
        isLiveRewindActive: m,
        lastMuteReason: n,
        lastPauseReason: o,
        lastPlayReason: q,
        lastPlayedTimeMs: p,
        latencyLevel: r,
        loopCount: s,
        loopCurrent: t,
        muted: u,
        paused: K,
        playerImplementationName: a.playerImplementationName,
        playerVersion: a.playerVersion,
        playing: L,
        seekTargetPosition: y,
        seekableRanges: w,
        seeking: x,
        selectedVideoQuality: z,
        stalling: v,
        streamInterrupted: A,
        targetAudioQuality: B,
        targetPlaybackRate: C,
        targetVideoQuality: D,
        videoProjection: E,
        volume: F,
        watchTimeMs: c,
      };
      return G;
    }
    function a(a) {
      var b,
        e = a.createDebugAPI,
        f = a.createVideoPlayerError,
        g = a.debugLog;
      g = a.debugLogId;
      var h = a.destroyEngineParts,
        i = a.engineExtrasAPI,
        j = a.engineMetadata,
        k = a.handleFatalError,
        l = a.handleVideoElementMounted,
        m = a.handleVideoElementUnmounted,
        o = a.handleVideoInfoChange,
        q = a.initialProps,
        u = a.setExposedStateInReact,
        v = d(
          "VideoPlayerImplementationStateMachineLogger"
        ).createVideoPlayerImplementationStateMachineLogger({
          debugLogId: g,
          initialLoggingMetaData: q.loggingMetaData,
        }),
        w = new (c("VideoPlayerBanzaiLogFlusher"))(v),
        x = {
          current: (a = q.videoPlayerPassiveViewabilityInfo) != null ? a : null,
        },
        y = { current: (a = q.fullscreenController) != null ? a : null },
        z = { current: null },
        A = q.videoLiveTraceRef;
      a = d(
        "useConcurrentAutoplayManagementAPI"
      ).createConcurrentAutoplayManagementAPI();
      var B = [],
        C = function () {
          B.forEach(function (a) {
            a();
          }),
            q.disableLogging ? w.discardLogsWithoutFlushing() : w.flushLogs();
        },
        D = { current: null },
        E = {
          current: {
            inbandCaptionsAutogeneratedFromManifest: !1,
            inbandCaptionsExpectedFromManifest: !1,
            inbandCaptionsExpectedFromProps: q.inbandCaptionsExpected,
            sideLoadCaptionsExpectedFromProps: q.sideLoadCaptionsExpected,
            sideLoadCaptionsUrlFromProps:
              (b = q.captionsUrl) != null ? b : null,
          },
        },
        F = { current: null },
        G = { current: null },
        H = new (c("SubscriptionsHandler"))(),
        I = "before_mounted";
      function J() {
        return I === "mounted";
      }
      var K = { current: null },
        L = function (a) {
          a = t({ engineMetadata: j, state: a });
          return a;
        },
        M = { current: null },
        N = { current: null },
        O = function (a) {
          if (J()) {
            if (a === M.current) return;
            var b = L(a);
            if (N.current != null && c("deepEquals")(N.current, b)) return;
            M.current = a;
            N.current = b;
            u(b);
          }
        };
      b = function (a, b, c) {
        v.handleStateMachine(a, b, c), O(b), C();
      };
      var P = function (a, b) {},
        Q = function (a) {
          P(a, "state_machine_fatal_error");
        },
        R = p({
          alwaysShowCaptions: Boolean(q.alwaysShowCaptions),
          areCaptionsAutogenerated: Boolean(q.areCaptionsAutogenerated),
          captionDisplayStyle: q.captionDisplayStyle,
          captionsControllerRef: z,
          debugLogId: g,
          dimensions: q.dimensions,
          engineExtrasAPI: i,
          engineMetadata: j,
          fullscreenControllerRef: y,
          handleFatalError: Q,
          handleStateMachine: b,
          videoElementAPIRef: K,
          videoLiveTraceRef: A,
          videoPlayerPassiveViewabilityInfoRef: x,
        }),
        S = !1,
        T = function (a) {
          var b = D.current != null,
            d = K.current != null;
          H.release();
          R.dispatch({
            payload: {
              reason: a,
              videoElementAPIExisted: d,
              videoElementExisted: b,
            },
            type: "implementation_engine_destroy_requested",
          });
          try {
            c("gkx")("1494163")
              ? h(["destroyEngine(" + a + ")"])
              : S || ((S = !0), h(["destroyEngine(" + a + ")"]));
          } catch (e) {
            if (c("gkx")("1494163"))
              try {
                c("FBLogger")("comet_video_player")
                  .catching(e)
                  .warn(
                    "Error thrown by destroyEngineParts: %s %s",
                    e.message,
                    JSON.stringify({
                      playerImplementationName: j.playerImplementationName,
                      reason: a,
                      videoElementAPIExisted: d,
                      videoElementExisted: b,
                    })
                  );
              } catch (a) {}
          }
          var e = z.current;
          e != null &&
            (R.getCurrentState().controlledState.captionsLoaded &&
              R.dispatch({ type: "captions_unloaded" }),
            (z.current = null),
            e.destroy());
          r(null, y, F, R);
          s(null, x, G, R);
          R.dispatch({
            payload: {
              reason: a,
              videoElementAPIExisted: d,
              videoElementExisted: b,
            },
            type: "implementation_engine_destroyed",
          });
        };
      P = function (a, b) {
        a = f(a, b);
        R.dispatch({
          payload: { fatalError: a },
          type: "implementation_fatal_error",
        });
        T("implementation_fatal_error");
        k(a);
      };
      function U(a) {
        return (
          a.sideLoadCaptionsExpectedFromProps &&
          a.sideLoadCaptionsUrlFromProps !== null
        );
      }
      function V(a) {
        return (
          a.inbandCaptionsExpectedFromProps &&
          ((a = a.inbandCaptionsExpectedFromManifest) != null ? a : !1)
        );
      }
      function W(a) {
        return (a = a.inbandCaptionsAutogeneratedFromManifest) != null ? a : !1;
      }
      var X = function (a) {
          var b = U(a),
            c = V(a),
            e = W(a),
            f = z.current;
          e !== W(E.current) &&
            R.dispatch({
              payload: { inbandCaptionsAutogenerated: e },
              type: "inband_captions_autogenerated_changed",
            });
          f != null
            ? c !== V(E.current) &&
              (f.updateInbandCaptionsExpected(c),
              !c &&
                R.getCurrentState().controlledState.captionsLoaded &&
                R.dispatch({ type: "captions_unloaded" }))
            : (b || c) &&
              f == null &&
              (z.current = d(
                "VideoPlayerCaptionsController"
              ).createCaptionsController({
                captionsUrl: b ? a.sideLoadCaptionsUrlFromProps : null,
                inbandCaptionsExpected: c,
                onCaptionsLoaded: function () {
                  R.getCurrentState().controlledState.captionsLoaded ||
                    R.dispatch({ type: "captions_loaded" });
                },
              }));
          E.current = a;
        },
        Y = function (a) {
          i != null &&
            a &&
            a.width > 0 &&
            a.height > 0 &&
            (i.setDimensions(a),
            R.dispatch({
              payload: { dimensions: { height: a.height, width: a.width } },
              type: "player_dimensions_changed",
            }));
        },
        Z = function (a) {
          a !== R.getCurrentState().controlledState.loopCount &&
            R.dispatch({
              payload: { loopCount: a },
              type: "loop_count_change_requested",
            });
        },
        aa = function (a) {
          "srcObject" in a && (a.srcObject = null);
        },
        $ = function (a, b) {
          if (D.current === a) return;
          if (!J() && c("gkx")("1405244")) return;
          if (!J()) {
            var e = (function (a) {
              switch (a) {
                case "unmounted":
                  return "EngineAPI.handleVideoElement.unmounted";
                case "before_mounted":
                  return "EngineAPI.handleVideoElement.before_mounted";
                case "mounted":
                  return null;
                default:
                  a;
                  return null;
              }
            })(I);
            e && d("VideoPlayerODS").bumpEntityKey("comet_video_player", e, 1);
          }
          a != null &&
            D.current != null &&
            D.current !== a &&
            c("recoverableViolation")(
              "The video element was recreated",
              "comet_video_player"
            );
          e = D.current;
          e && aa(e);
          D.current = a;
          c("gkx")("1494163") && a == null && (K.current = null);
          D.current != null
            ? (R.dispatch({ type: "implementation_video_node_mounted" }),
              l([].concat(b, ["handleVideoElement(non-null)"])))
            : (R.dispatch({ type: "implementation_video_node_unmounted" }),
              m([].concat(b, ["handleVideoElement(null)"])));
        };
      g = q.loggingMetaData.instanceKey;
      Q = function (a) {
        var b;
        if (!J()) return;
        r((b = a.fullscreenController) != null ? b : null, y, F, R);
        s(
          (b = a.videoPlayerPassiveViewabilityInfo) != null ? b : null,
          x,
          G,
          R
        );
        if (!o(a)) {
          b = {
            inbandCaptionsAutogeneratedFromManifest:
              E.current.inbandCaptionsAutogeneratedFromManifest,
            inbandCaptionsExpectedFromManifest:
              E.current.inbandCaptionsExpectedFromManifest,
            inbandCaptionsExpectedFromProps: a.inbandCaptionsExpected,
            sideLoadCaptionsExpectedFromProps: a.sideLoadCaptionsExpected,
            sideLoadCaptionsUrlFromProps:
              (b = a.captionsUrl) != null ? b : null,
          };
          X(b);
          Y(a.dimensions);
          Z((b = a.loopCount) != null ? b : 0);
        }
        R.dispatch({
          payload: { loggingMetaData: a.loggingMetaData },
          type: "notify_logging_metadata_change",
        });
      };
      b = function () {
        if (I !== "before_mounted") {
          var a = (function (a) {
            switch (a) {
              case "before_mounted":
                return null;
              case "unmounted":
                return "EngineAPI.handleReactMount.unmounted";
              case "mounted":
                return "EngineAPI.handleReactMount.mounted";
              default:
                a;
                return null;
            }
          })(I);
          a && d("VideoPlayerODS").bumpEntityKey("comet_video_player", a, 1);
        }
        J() ||
          ((I = "mounted"),
          H.addSubscriptions(
            d("RunComet").onUnload(function () {
              T("page_unload");
            })
          ),
          R.dispatch({ type: "implementation_mounted" }),
          l(["handleReactMount"]));
      };
      g = function () {
        if (!J()) {
          var a = (function (a) {
            switch (a) {
              case "unmounted":
                return "EngineAPI.handleReactUnmount.unmounted";
              case "before_mounted":
                return "EngineAPI.handleReactUnmount.before_mounted";
              case "mounted":
                return null;
              default:
                a;
                return null;
            }
          })(I);
          a && d("VideoPlayerODS").bumpEntityKey("comet_video_player", a, 1);
        }
        J() &&
          ((I = "unmounted"),
          R.dispatch({
            payload: { reason: "react_effect_cleanup" },
            type: "implementation_unmounted",
          }),
          T("implementation_unmounted:react_effect_cleanup"));
      };
      a = n({
        concurrentAutoplayManagementAPI: a,
        createExposedState: L,
        debugAPI: e({
          getVideoElementAPI: function () {
            return K.current;
          },
          logger: v,
        }),
        fullscreenControllerRef: y,
        logger: v,
        machine: R,
        subscribers: B,
        videoElementAPIRef: K,
      });
      e = d(
        "VideoPlayerImplementationStateMachine"
      ).createReactVideoElementCallbacksForStateMachine(R, $);
      var ba = L(R.getInitialState());
      b = {
        destroy: T,
        handleReactMount: b,
        handleReactPropsChanged: Q,
        handleReactUnmount: g,
        implementationController: a,
        initialExposedState: ba,
        logFlusher: w,
        machine: R,
        notifySubscribers: C,
        videoElementCallbacks: e,
        videoElementRefCallback: function (a) {
          $(a, ["videoElementRefCallback"]);
        },
      };
      return {
        engine: b,
        getCaptionsInfo: function () {
          return E.current;
        },
        getVideoElement: function () {
          return D.current;
        },
        getVideoLiveTrace: function () {
          return A.current;
        },
        handleCaptionsInfoChange: X,
        handleFatalImplementationError: P,
        logger: v,
        machine: R,
        videoElementAPIRef: K,
      };
    }
    function u(a, b) {
      var d,
        e = new Error(a.errorDescription);
      e.errorName = a.errorName;
      e.type = "error";
      a.stack != null && a.stack !== "" && (e.stack = a.stack);
      var f = new (c("ErrorMetadata"))();
      f.addEntries(
        ["COMET_VIDEO", "ERROR_LOCATION", a.errorLocation],
        ["COMET_VIDEO", "ERROR_CODE", (d = a.errorCode) != null ? d : ""],
        ["COMET_VIDEO", "ERROR_URL", (d = a.url) != null ? d : ""]
      );
      b != null && f.addEntry("COMET_VIDEO", "VIDEO_ID", b);
      d = a.originalError;
      d != null &&
        (typeof d === "string"
          ? f.addEntry("COMET_VIDEO", "ORIGINAL_ERROR", d)
          : d instanceof Error &&
            d.message != null &&
            f.addEntry("COMET_VIDEO", "ORIGINAL_ERROR", d.message));
      e.metadata = f;
      return e;
    }
    function e(a, b) {
      var d = j(null),
        e = d[0],
        f = d[1],
        g = i(!1),
        k = i(null);
      d = j(null);
      var l = d[0],
        m = d[1];
      h(
        function () {
          l || (k.current = null);
        },
        [l]
      );
      var n = i(a),
        o = i(b),
        p = c("useStable")(function () {
          return o.current({
            debugLogId: String(n.current.loggingMetaData.instanceKey),
            handleFatalError: function (a) {
              if (g.current && c("gkx")("1722590")) return;
              c("gkx")("1444664") ? k.current || ((k.current = a), m(a)) : m(a);
            },
            initialProps: n.current,
            setExposedStateInReact: f,
          });
        });
      b = (d = e) != null ? d : p.initialExposedState;
      d = (e = b.error) != null ? e : l;
      if (d != null) {
        if (c("killswitch")("COMET_VIDEO_ERROR_DEAGGREGATION"))
          throw c("unrecoverableViolation")(
            d.errorName + ": " + d.errorDescription,
            "comet_video_player",
            {
              error:
                d.originalError instanceof Error ? d.originalError : void 0,
            }
          );
        e = a.VideoPlayerShakaPerformanceLoggerClass;
        e && (c("gkx")("2007883") || c("qex")._("185")) && e.flushQueuedLogs();
        throw u(d, n.current.videoFBID);
      }
      h(
        function () {
          p.handleReactMount();
          return function () {
            (g.current = !0), p.handleReactUnmount();
          };
        },
        [p]
      );
      var q = i(null);
      h(function () {
        a !== q.current && p.handleReactPropsChanged(a), (q.current = a);
      });
      return [b, p];
    }
    g.internal_createVideoPlayerImplementationControllerImpl = m;
    g.internal_createVideoPlayerImplementationEngineStateMachineWithEffects = p;
    g.internal_createVideoPlayerImplementationExposedStateFromStateMachineState =
      t;
    g.createVideoPlayerImplementationEngine = a;
    g.useVideoPlayerImplementationEngine = e;
  },
  98
);
__d(
  "VideoPlayerImplementationEngineVideoElementAPI",
  ["Promise", "VideoPlaybackQuality", "VideoPlayerOzWWWGlobalConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return isNaN(a) ? 0 : a;
    }
    function i(a) {
      return h(a.duration);
    }
    function j(a) {
      a = a.buffered;
      return a.length > 0 ? a.end(a.length - 1) : 0;
    }
    function k(a) {
      return h(a.currentTime);
    }
    function l(a) {
      return a.buffered.length === 0 ? 0 : a.buffered.start(0);
    }
    function a(a, e) {
      var f = e !== !0,
        g = null,
        h = function (b) {
          f
            ? b == null || b === ""
              ? a.removeAttribute("src")
              : a.setAttribute("src", b)
            : (g = b);
        };
      return {
        getCanPlayPromise: function () {
          return new (b("Promise"))(function (b, c) {
            a.readyState === 4
              ? b()
              : a.addEventListener("canplay", function () {
                  return b();
                });
          });
        },
        getDOMLoadedMetadataPromise: function () {
          return new (b("Promise"))(function (b, c) {
            a.addEventListener("loadedmetadata", function () {
              return b();
            });
          });
        },
        getDroppedFrameCount: function () {
          return d("VideoPlaybackQuality").getDroppedFrames(a);
        },
        getDuration: function () {
          return i(a);
        },
        getEnded: function () {
          return a.ended;
        },
        getError: function () {
          return a.error;
        },
        getLastBufferEndPosition: function () {
          return j(a);
        },
        getMuted: function () {
          return a.muted;
        },
        getNetworkState: function () {
          return a.networkState;
        },
        getPaused: function () {
          return a.paused;
        },
        getPlaybackRate: function () {
          return a.playbackRate;
        },
        getPlayheadPosition: function () {
          return k(a);
        },
        getReadyState: function () {
          return a.readyState;
        },
        getTotalFrameCount: function () {
          return d("VideoPlaybackQuality").getTotalFrames(a);
        },
        getUnderlyingVideoElement: function () {
          return a;
        },
        getVolume: function () {
          return a.volume;
        },
        pause: function () {
          a.pause();
        },
        play: function () {
          f || ((f = !0), h(g), (g = null));
          var c = a.play();
          c =
            c && typeof c.then === "function" ? b("Promise").resolve(c) : null;
          return c;
        },
        setDuration: function (b) {
          a.duration = b;
        },
        setMuted: function (b) {
          a.muted = b;
        },
        setPlaybackRate: function (b) {
          a.playbackRate = b;
        },
        setPlayheadPosition: function (b) {
          var d = b;
          if (b === 0) {
            b = c("VideoPlayerOzWWWGlobalConfig").getNumber(
              "clamp_seek_to_first_buffer_range_epsilon",
              0
            );
            if (b > 0) {
              var e = l(a);
              e > 0 && e <= b && (d = e);
            }
          }
          a.currentTime = d;
        },
        setSrc: h,
        setVolume: function (b) {
          a.volume = b;
        },
      };
    }
    g.getDurationFromVideoElement = i;
    g.getLastBufferEndPositionFromVideoElement = j;
    g.getPlayheadPositionFromVideoElement = k;
    g.createVideoPlayerImplementationEngineVideoElementAPI = a;
  },
  98
);
__d(
  "VideoPlayerImplementationLoadSequenceManager",
  ["setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = []), (this.$2 = []);
      }
      var b = a.prototype;
      b.schedule = function (a, b, d) {
        var e = this,
          f = {
            load: d,
            maximumBlockTimeMs: a.getNumber("load_sequence_max_delay_ms", 0),
            sequence: b,
          },
          g = a.getNumber("load_sequence_only_prioritize_first_count", 0);
        g > 0
          ? (d = !this.$2.find(function (a) {
              return a.sequence < g;
            }))
          : (d = !this.$2.find(function (a) {
              return a.sequence < b;
            }));
        d
          ? this.$3(f)
          : (this.$1.push(f),
            c("setTimeout")(function () {
              return e.$4(f);
            }, f.maximumBlockTimeMs));
        return function () {
          return e.$5(f);
        };
      };
      b.$4 = function (a) {
        var b = this.$1.find(function (b) {
          return b === a;
        });
        b &&
          ((this.$1 = this.$1.filter(function (b) {
            return b !== a;
          })),
          this.$3(b));
      };
      b.$3 = function (a) {
        var b = this;
        this.$2.push(a);
        a.load()
          .then(function () {
            return b.$6(a);
          })
          ["catch"](function (c) {
            b.$6(a);
            throw c;
          });
        c("setTimeout")(function () {
          return b.$6(a);
        }, a.maximumBlockTimeMs);
      };
      b.$7 = function () {
        var a = this,
          b = Math.min.apply(
            Math,
            this.$1.map(function (a) {
              return a.sequence;
            })
          ),
          c = this.$1.filter(function (a) {
            return a.sequence === b;
          });
        c.forEach(function (b) {
          return a.$4(b);
        });
      };
      b.$5 = function (a) {
        this.$1 = this.$1.filter(function (b) {
          return b !== a;
        });
      };
      b.$6 = function (a) {
        if (
          !this.$2.find(function (b) {
            return b === a;
          })
        )
          return;
        this.$2 = this.$2.filter(function (b) {
          return b !== a;
        });
        var b = !!this.$2.find(function (b) {
          return b.sequence === a.sequence;
        });
        b && this.$7();
      };
      return a;
    })();
    b = new a();
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "VideoPlayerImplementationReactVideoElement.react",
  ["gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.alt,
        d = a.implementationController,
        e = a.implementationExposedState,
        f = a.renderWithVideoImplementationStates,
        g = a.src,
        i = a.videoElementCallbacks;
      a = a.videoElementRefCallback;
      var j = e.hasPlayEverBeenRequested,
        k = e.isExternalMedia;
      j = k && !j ? null : g;
      g =
        k && c("gkx")("2449")
          ? babelHelpers["extends"]({ crossOrigin: "anonymous" }, i)
          : babelHelpers["extends"]({}, i);
      i = h.jsxs(h.Fragment, {
        children: [
          h.jsx(
            "video",
            babelHelpers["extends"](
              {
                "aria-label": (k = b) != null ? k : void 0,
                className: "k4urcfbm datstx6m a8c37x1j",
                controls: !1,
                muted: !0,
                playsInline: !0,
              },
              g,
              { ref: a, src: j }
            )
          ),
          f({ implementationController: d, videoState: e }),
        ],
      });
      return i;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.canUseOz,
        c = a.dashManifest,
        d = a.dashUrl,
        e = a.experimentationConfig,
        f = a.minQualityPreference,
        g = a.ozQuickStarterData;
      a = a.videoFBID;
      if (b !== !0 || a == null) return null;
      b = c == null || c === "" ? null : c;
      a = d == null || d === "" ? null : d;
      if (b == null && a == null) return null;
      return e == null
        ? null
        : {
            experimentationConfig: e,
            manifest: b,
            manifestUrl: a,
            minQualityPreference: (c = f) != null ? c : null,
            ozQuickStarterData: (d = g) != null ? d : null,
          };
    }
    f.makeOzImplementationData = a;
  },
  66
);
__d(
  "handleVideoPlayerLatencyLevelChange",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d) {
      if (a && b && c) {
        var e = a.getAllContexts().latency_level;
        c = [];
        try {
          c = JSON.parse(
            a.getString("seek_on_latency_level_change_allowed", "[]")
          );
        } catch (a) {}
        c = c.some(function (a) {
          return a.length === 2 && a[0] === e && a[1] === d;
        });
        a.setContext("latency_level", d);
        if (!c) return;
        c = b.getDuration();
        c =
          c != null
            ? c + a.getNumber("live_initial_playback_position", 0)
            : null;
        c != null && b.setPlayheadPosition(c);
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerOzImplementationEngineExtrasAPI",
  [
    "VideoPlayerOzWWWGlobalConfig",
    "emptyFunction",
    "gkx",
    "handleVideoPlayerLatencyLevelChange",
    "orEmptyArray",
    "oz-player/networks/OzBandwidthEstimator",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = c("emptyFunction");
    function h(a) {
      return a.getSelectedVideoQuality();
    }
    function i(a) {
      a = a.getCurrentVideoRepresentation();
      return a == null ? "" : a.getQualityLabel();
    }
    function j(a) {
      a = a.getIsVideoQualityAdaptationEnabled()
        ? "auto"
        : a.getSelectedVideoQuality();
      return a;
    }
    function k(a) {
      return (a =
        (a = a.getMpd()) == null ? void 0 : a.getCustomField("fbProjection")) !=
        null
        ? a
        : null;
    }
    function l(a, b) {
      var c = j(a);
      if (b === "notselected" || b === c) return !1;
      else if (b === "auto") {
        a.enableVideoQualityAdaptation();
        return !0;
      } else if (b !== a.getSelectedVideoQuality()) {
        c = b;
        a.switchToVideoQuality(c);
        return !0;
      } else return !1;
    }
    function a(a) {
      var b = a.getConfig,
        d = a.getOzPlayer,
        e = a.getOzQuickStarter,
        f = a.getVideoElementAPI;
      a = {
        getApproximateFBLSToPlayerDisplayLatency: function () {
          var a;
          return (a =
            (a = d()) == null
              ? void 0
              : a.getApproximateFBLSToPlayerDisplayLatency()) != null
            ? a
            : null;
        },
        getAudioRepresentationIDAtTime: function (a) {
          var b, c;
          b = (b = d()) == null ? void 0 : b.getAudioRepresentationIDAtTime(a);
          c = (c = e()) == null ? void 0 : c.getAudioRepresentationIDAtTime(a);
          return (b = (a = b) != null ? a : c) != null ? b : null;
        },
        getAvailableVideoQualities: function () {
          var a;
          return c("orEmptyArray")(
            (a = d()) == null ? void 0 : a.getVideoQualities()
          );
        },
        getCurrentAudioRepresentation: function () {
          var a;
          return (a =
            (a = d()) == null ? void 0 : a.getCurrentAudioRepresentation()) !=
            null
            ? a
            : null;
        },
        getCurrentPlayingVideoQuality: function () {
          var a = d();
          return a ? i(a) : "";
        },
        getCurrentTargetVideoQuality: function () {
          var a = d();
          return a ? h(a) : "";
        },
        getCurrentVideoRepresentation: function () {
          var a;
          return (a =
            (a = d()) == null ? void 0 : a.getCurrentVideoRepresentation()) !=
            null
            ? a
            : null;
        },
        getEstimatedBandwidth: function () {
          return c("oz-player/networks/OzBandwidthEstimator").getBandwidth(
            c("VideoPlayerOzWWWGlobalConfig")
          );
        },
        getInbandCaptionsAutogeneratedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null
              ? void 0
              : a.getCustomField("hasInbandCaptionsFromUsingASRCaptions")
          );
        },
        getInbandCaptionsExpectedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return (
            Boolean(
              a == null
                ? void 0
                : a.getCustomField("hasInbandCaptionsFromUsingASRCaptions")
            ) ||
            Boolean(
              a == null
                ? void 0
                : a.getCustomField("hasInbandCaptionsFromAccessibility")
            )
          );
        },
        getPerfLoggerProvider: function () {
          var a = d();
          return a ? a.getPerfLoggerProvider() : null;
        },
        getStreamType: function () {
          return "dash";
        },
        getUserSelectedVideoQuality: function () {
          var a = d();
          return a ? j(a) : "";
        },
        getVideoProjectionType: function () {
          var a = d();
          return a != null ? k(a) : null;
        },
        getVideoRepresentationIDAtTime: function (a) {
          var b, c;
          b = (b = d()) == null ? void 0 : b.getVideoRepresentationIDAtTime(a);
          c = (c = e()) == null ? void 0 : c.getVideoRepresentationIDAtTime(a);
          return (b = (a = b) != null ? a : c) != null ? b : null;
        },
        getVideoRepresentations: function () {
          var a;
          return (a =
            (a = d()) == null
              ? void 0
              : (a = a.getMpd()) == null
              ? void 0
              : a.getVideoRepresentations()) != null
            ? a
            : null;
        },
        isDrm: function () {
          var a;
          return Boolean((a = d()) == null ? void 0 : a.isDrm());
        },
        isFBIsLiveTemplated: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null ? void 0 : a.getCustomField("isLiveTemplated")
          );
        },
        isFBMS: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(a == null ? void 0 : a.getCustomField("isFBMS"));
        },
        isFBWasLive: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(a == null ? void 0 : a.getCustomField("isFBWasLive"));
        },
        isPredictiveDash: function () {
          var a;
          a =
            (a =
              (a = d()) == null
                ? void 0
                : (a = a.getMpd()) == null
                ? void 0
                : a.getVideoRepresentations()[0]) != null
              ? a
              : null;
          return a !== null && a.canPredict();
        },
        setDimensions: function (a) {},
        setEnableLiveheadCatchup: function (a) {
          var b = d();
          b != null && b.setEnableLiveheadCatchup(a);
        },
        setLatencyLevel: function (a) {
          c("handleVideoPlayerLatencyLevelChange")(b(), f(), d(), a);
        },
        setUserSelectedVideoQuality: function (a) {
          var b = d();
          b != null && l(b, a);
        },
      };
      return a;
    }
    g.createVideoPlayerOzImplementationEngineExtrasAPI = a;
  },
  98
);
__d(
  "OzActiveActiveFailoverNetworkRequestStreamHandler",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.onResponse = function (a, b) {
        var c = a.headers;
        c && c.has("x-fb-video-replica") && this.$1(a, b);
        return null;
      };
      b.onError = function (a, b) {
        return null;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "OzCustomParsers",
  [],
  function (a, b, c, d, e, f) {
    function a() {
      return new Map([
        [
          "fbProjection",
          function (a) {
            try {
              return a.Period[0].AdaptationSet[0].$.FBProjection || null;
            } catch (a) {
              return null;
            }
          },
        ],
        [
          "hasInbandCaptionsFromAccessibility",
          function (a) {
            a = a.Period[0];
            a = a && a.AdaptationSet[0].Accessibility;
            return a && a[0]
              ? a[0].$.schemeIdUri === "urn:scte:dash:cc:cea-608:2015"
              : !1;
          },
        ],
        [
          "hasInbandCaptionsFromUsingASRCaptions",
          function (a) {
            a = Number.parseInt(a.$.usingASRCaptions, 0);
            return !isNaN(a) && a != 0;
          },
        ],
        [
          "hasInbandCaptionsFromIsUsingAsrCaptionsEmployeeDogfooding",
          function (a) {
            a = Number.parseInt(a.$.isUsingAsrCaptionsEmployeeDogfooding, 0);
            return !isNaN(a) && a != 0;
          },
        ],
        [
          "isLiveTemplated",
          function (a) {
            return a.$.FBIsLiveTemplated === "true";
          },
        ],
        [
          "isFBMS",
          function (a) {
            return a.$.FBMS === "true";
          },
        ],
        [
          "isFBWasLive",
          function (a) {
            return a.$.FBWasLive === "true";
          },
        ],
        [
          "loapStreamType",
          function (a) {
            return a.$.loapStreamType ? parseInt(a.$.loapStreamType, 10) : 0;
          },
        ],
        [
          "fbManifestIdentifier",
          function (a) {
            return (a = a.$.FBManifestIdentifier) != null ? a : "";
          },
        ],
        [
          "lastVideoFrameTs",
          function (a) {
            return a.$.lastVideoFrameTs
              ? Number.parseInt(a.$.lastVideoFrameTs, 10)
              : null;
          },
        ],
        [
          "currentServerTimeMs",
          function (a) {
            return a.$.currentServerTimeMs
              ? Number.parseInt(a.$.currentServerTimeMs, 10)
              : null;
          },
        ],
      ]);
    }
    f.createOzCustomParser = a;
  },
  66
);
__d(
  "oz-player/shims/www/OzURIWWW",
  ["URI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = new (c("URI"))(a);
      }
      var b = a.prototype;
      b.addQueryData = function (a, b) {
        this.$1.addQueryData(a, b);
      };
      b.getQueryData = function () {
        return this.$1.getQueryData();
      };
      b.getDomain = function () {
        return this.$1.getDomain();
      };
      b.toString = function () {
        return this.$1.toString();
      };
      b.getPath = function () {
        return this.$1.getPath();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/shims/OzURI",
  ["oz-player/shims/www/OzURIWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzURIWWW");
  },
  98
);
__d(
  "oz-player/utils/ozConcatUint8Arrays",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = 0;
      for (var c = 0; c < a.length; ++c) b += a[c].byteLength;
      c = new ArrayBuffer(b);
      b = new Uint8Array(c);
      var d = 0;
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        b.set(f, d);
        d += f.byteLength;
      }
      return { buffer: c, view: b };
    }
    f["default"] = a;
  },
  66
);
__d(
  "oz-player/utils/OzReadableStreamUtils",
  ["oz-player/utils/ozConcatUint8Arrays"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h =
      typeof TextDecoder !== "undefined"
        ? function (a) {
            return new TextDecoder("utf-8").decode(new Uint8Array(a));
          }
        : function (a) {
            return String.fromCharCode.apply(null, a);
          };
    function i(a) {
      var b = [],
        d = function c() {
          return a.read().then(function (a) {
            var d = a.value;
            a = a.done;
            if (a) return null;
            if (!d) return null;
            b.push(d);
            return c();
          });
        };
      return d().then(function () {
        var a = c("oz-player/utils/ozConcatUint8Arrays")(b);
        a = a.view;
        return a;
      });
    }
    function a(a) {
      return i(a).then(function (a) {
        return h(a);
      });
    }
    function b(a) {
      var b = new Uint8Array(a.length);
      return b.map(function (b, c) {
        return a.charCodeAt(c);
      });
    }
    g.pumpAllData = i;
    g.pumpString = a;
    g.stringToUint8Array = b;
  },
  98
);
__d(
  "OzCustomRepresentationParsers",
  ["oz-player/shims/OzURI", "oz-player/utils/OzReadableStreamUtils"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = a.ozConfig,
        e = a.startTimestamp;
      a = {
        timescale: function (a) {
          a = a.SegmentTemplate;
          if (a && a.length > 0) {
            a = a[0].$;
            if (a) return Number.parseInt(a.timescale, 0) || null;
          }
          return null;
        },
      };
      b.getBool("parse_initialization_binary", !1) &&
        (a.initializationBinary = function (a) {
          try {
            a = window.atob(a.FBInitializationBinary[0]._);
            return d(
              "oz-player/utils/OzReadableStreamUtils"
            ).stringToUint8Array(a);
          } catch (a) {
            return null;
          }
        });
      a.playbackResolutionMos = function (a) {
        try {
          return a.$.FBPlaybackResolutionMos;
        } catch (a) {
          return null;
        }
      };
      a.qualityLabel = function (a) {
        try {
          return a.$.FBQualityLabel;
        } catch (a) {
          return null;
        }
      };
      b.getBool("parse_first_segment", !1) &&
        (a.firstSegmentParser = function (a) {
          if (e != null && e > 0) return null;
          try {
            var b =
                a.SegmentBase[0].$.FBFirstSegmentRange.split("-").map(Number),
              d = { startByte: b[0], endByte: b[1] },
              f = new (c("oz-player/shims/OzURI"))(a.BaseURL[0]._);
            return {
              getData: function () {
                return null;
              },
              getURI: function () {
                return f;
              },
              getByteRange: function () {
                return d;
              },
              getTimeRange: function () {
                return { startTime: 0, endTime: 2 };
              },
              getSequenceNumber: function () {
                return null;
              },
              setOptions: function () {
                return void 0;
              },
            };
          } catch (a) {
            return null;
          }
        });
      return a;
    }
    g.createOzCustomRepresentationParsers = a;
  },
  98
);
__d(
  "OzDashPrefetchCache",
  ["VideoDashPrefetchCache"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.hasCacheValue = function (a) {
        return c("VideoDashPrefetchCache").hasCacheValue(a);
      };
      b.getCacheValue = function (a) {
        return c("VideoDashPrefetchCache").getCacheValue(a);
      };
      b.getCachedRepresentations = function () {
        return null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/shims/www/ozvariantWWW",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    a = h;
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/shims/ozvariant",
  ["oz-player/shims/www/ozvariantWWW"],
  function (a, b, c, d, e, f, g) {
    g["default"] = c("oz-player/shims/www/ozvariantWWW");
  },
  98
);
__d(
  "oz-player/utils/OzNumericalHelper",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1e-5;
    function h(a, b, c) {
      c === void 0 && (c = g);
      return Math.abs(b - a) <= c;
    }
    function i(a, b, c) {
      c === void 0 && (c = g);
      return a > b && !h(a, b, c);
    }
    function j(a, b, c) {
      c === void 0 && (c = g);
      return a < b && !h(a, b, c);
    }
    function a(a, b, c) {
      c === void 0 && (c = g);
      return j(a, b, c) || h(a, b, c);
    }
    function b(a, b, c) {
      c === void 0 && (c = g);
      return i(a, b, c) || h(a, b, c);
    }
    f.equalTo = h;
    f.greaterThan = i;
    f.lessThan = j;
    f.lessThanOrEqual = a;
    f.greaterThanOrEqual = b;
  },
  66
);
__d(
  "oz-player/utils/OzNumericalRangeUtil",
  ["oz-player/utils/OzNumericalHelper"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 0.01;
    function i(a, b) {
      b = b.rangeEnd;
      return b === null || b === void 0
        ? !1
        : Math.abs(a.rangeStart - b) > h && a.rangeStart > b;
    }
    function j(a, b) {
      a = a.rangeEnd;
      b = b.rangeEnd;
      if (a === null || a === void 0) return !0;
      return b === null || b === void 0 ? !1 : Math.abs(a - b) > h && a > b;
    }
    function k(a, b, c, d) {
      b = b.rangeEnd;
      return b === null || b === void 0
        ? !1
        : (c.getBool("numerical_range_utils_is_after_range_exclusive") &&
            a === b) ||
            (Math.abs(a - b) > ((c = d) != null ? c : h) && a > b);
    }
    function l(a, b) {
      return a > b - h;
    }
    a = (function () {
      function a(a) {
        a = a.config;
        this.$1 = a;
      }
      var b = a.prototype;
      b.mergeSortedRanges = function (a) {
        if (!a.length) return [];
        var b = [],
          c = a[0];
        b.push(c);
        for (var d = 1; d < a.length; d++) {
          var e = a[d];
          if (!j(e, c)) continue;
          else
            i(e, c)
              ? ((c = { rangeStart: e.rangeStart, rangeEnd: e.rangeEnd }),
                b.push(c))
              : (c.rangeEnd = e.rangeEnd);
        }
        return b;
      };
      b.diffSortedRanges = function (a, b) {
        var c = this;
        return a
          .reduceRight(function (a, d) {
            k(d.rangeStart, b, c.$1) || k(b.rangeStart, d, c.$1)
              ? a.push(d)
              : (b.rangeEnd != null &&
                  (d.rangeEnd == null || k(d.rangeEnd, b, c.$1)) &&
                  a.push({ rangeStart: b.rangeEnd, rangeEnd: d.rangeEnd }),
                l(b.rangeStart, d.rangeStart) &&
                  a.push({ rangeStart: d.rangeStart, rangeEnd: b.rangeStart }));
            return a;
          }, [])
          .filter(function (a) {
            return a.rangeEnd == null || a.rangeStart < a.rangeEnd;
          })
          .reverse();
      };
      b.findCurrentRangeIndex = function (a, b, c) {
        c === void 0 && (c = h);
        for (var d = 0; d < b.length; d++) {
          var e = b[d],
            f = e.rangeStart;
          if (l(a, f) && !k(a, e, this.$1, c)) return d;
        }
        return -1;
      };
      b.findNextRangeIndex = function (a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          d = d.rangeStart;
          if (!l(a, d)) return c;
        }
        return -1;
      };
      b.findDiffCoveredByRanges = function (a, b, c) {
        return a >= b
          ? 0
          : c.reduceRight(function (c, d) {
              var e = d.rangeStart;
              d = d.rangeEnd;
              if (b < e || (d != null && a > d)) return c;
              else if (d == null || b <= d) return Math.min(b - e, b - a) + c;
              else if (a >= e) return Math.min(d - a, b - a) + c;
              else return d - e + c;
            }, 0);
      };
      b.firstAddedInSortedRanges = function (a, b) {
        var c;
        c = a.length == 0 ? ((c = b[b.length - 1]) != null ? c : null) : null;
        for (var e = 0; e < a.length; e++) {
          var f = a[e];
          for (var g = e; g < b.length; g++) {
            var h = b[g];
            if (
              d("oz-player/utils/OzNumericalHelper").equalTo(
                f.rangeStart,
                h.rangeStart
              ) &&
              f.rangeEnd != null &&
              h.rangeEnd != null &&
              d("oz-player/utils/OzNumericalHelper").equalTo(
                f.rangeEnd,
                h.rangeEnd
              )
            )
              break;
            else if (
              h.rangeEnd != null &&
              f.rangeEnd != null &&
              !d("oz-player/utils/OzNumericalHelper").equalTo(
                f.rangeStart,
                h.rangeStart
              )
            ) {
              c = { rangeStart: h.rangeStart, rangeEnd: h.rangeEnd };
              break;
            } else if (
              h.rangeEnd != null &&
              f.rangeEnd != null &&
              d("oz-player/utils/OzNumericalHelper").equalTo(
                f.rangeStart,
                h.rangeStart
              ) &&
              !d("oz-player/utils/OzNumericalHelper").equalTo(
                f.rangeEnd,
                h.rangeEnd
              )
            ) {
              c = { rangeStart: f.rangeEnd, rangeEnd: h.rangeEnd };
              break;
            }
          }
          if (c !== null) break;
        }
        return c;
      };
      b.convertFromTimeRanges = function (a) {
        var b = [];
        for (var c = 0; c < a.length; c++)
          b.push({ rangeStart: a[c].startTime, rangeEnd: a[c].endTime });
        return b;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/manifests/SegmentTemplateSegmentsContainer",
  [
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzURI",
    "oz-player/shims/ozvariant",
    "oz-player/utils/OzError",
    "oz-player/utils/OzNumericalHelper",
    "oz-player/utils/OzNumericalRangeUtil",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e-4;
    a = (function () {
      function a(a, b, d, e, f, g) {
        g === void 0 && (g = !1),
          (this.$7 = new (c("oz-player/shims/OzEventEmitter"))()),
          (this.$10 = null),
          (this.$8 = a),
          (this.$2 = b),
          (this.$3 = d),
          (this.$1 = f),
          (this.$4 = e),
          (this.$5 = this.$11(this.$4)),
          (this.$6 = g),
          (this.$9 = this.$8.getNumber("live_numerical_error_epsilon"));
      }
      var b = a.prototype;
      b.getSegmentByTime = function (a) {
        a = this.$8.getBool("live_query_time_in_range") ? this.$12(a) : a;
        a = a * this.$3;
        var b = null;
        for (var c = this.$4.length - 1; c >= 0; c--) {
          var e = this.$4[c];
          if (
            d("oz-player/utils/OzNumericalHelper").lessThanOrEqual(
              e.t + e.d * (e.r + 1),
              a,
              this.$9
            )
          )
            break;
          b = e;
        }
        if (b === null) return null;
        if (
          this.$8.getBool(
            "live_no_segment_when_playhead_is_before_first_segment"
          ) &&
          d("oz-player/utils/OzNumericalHelper").greaterThan(b.t, a, this.$9)
        )
          return null;
        e = Math.max(0, Math.floor((a - b.t + this.$9) / b.d));
        return this.$13(b, e);
      };
      b.getSegment = function (a) {
        var b = 0;
        a = a;
        while (a >= 0 && b < this.$4.length) {
          var c = this.$4[b];
          c = c.r;
          c = c + 1;
          if (a >= c) {
            a -= c;
            b++;
            continue;
          }
          break;
        }
        c = this.$4[b];
        return !c ? null : this.$13(c, a);
      };
      b.getSegmentAfter = function (a) {
        a = a.getTimeRange().endTime;
        return this.getSegmentByTime(a);
      };
      b.getPredictedSegmentAfter = function (a) {
        return null;
      };
      b.canPredict = function () {
        return !1;
      };
      b.canApproximateId = function () {
        return !1;
      };
      b.isEndingSegment = function (a) {
        if (!this.$4 || !this.$4.length || !this.$6) return !1;
        var b = this.$4[this.$4.length - 1],
          c = b.r;
        b = this.$13(b, c);
        return (
          Math.abs(b.getTimeRange().startTime - a.getTimeRange().startTime) +
            Math.abs(b.getTimeRange().endTime - a.getTimeRange().endTime) <
          h
        );
      };
      b.updateWith = function (b) {
        b instanceof a || c("oz-player/shims/ozvariant")(0, 646),
          (this.$6 = b.$6),
          this.$14(b.$4),
          this.$15(b.$4),
          this.$7.emit("segment_updated");
      };
      b.getTimeRanges = function () {
        return this.$10 ? this.$16(this.$5, this.$10) : this.$5;
      };
      b.blockTimeRange = function (a) {
        this.$10 = a;
      };
      b.$16 = function (a, b) {
        return new (c("oz-player/utils/OzNumericalRangeUtil"))({
          config: this.$8,
        })
          .diffSortedRanges(
            a.map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            }),
            { rangeStart: b.startTime, rangeEnd: b.endTime }
          )
          .map(function (a) {
            return {
              startTime: a.rangeStart,
              endTime:
                a.rangeEnd === null || a.rangeEnd === void 0
                  ? Infinity
                  : a.rangeEnd,
            };
          });
      };
      b.addUpdateListener = function (a) {
        return this.$7.addListener("segment_updated", a);
      };
      b.$12 = function (a) {
        var b = a,
          d = new (c("oz-player/utils/OzNumericalRangeUtil"))({
            config: this.$8,
          }).findCurrentRangeIndex(
            a,
            this.getTimeRanges().map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
          );
        if (d === -1) {
          d = new (c("oz-player/utils/OzNumericalRangeUtil"))({
            config: this.$8,
          }).findNextRangeIndex(
            a,
            this.getTimeRanges().map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
          );
          d !== -1 && (b = this.getTimeRanges()[d].startTime);
        }
        return b;
      };
      b.$17 = function (a, b) {
        if (a.d !== b.d) return !1;
        var c = a.t + a.d * a.r,
          e = b.t + b.d * b.r;
        return d("oz-player/utils/OzNumericalHelper").greaterThanOrEqual(
          a.t,
          e,
          this.$9
        ) ||
          d("oz-player/utils/OzNumericalHelper").greaterThanOrEqual(
            b.t,
            c,
            this.$9
          )
          ? !1
          : Number.isInteger((a.t - b.t) / a.d);
      };
      b.$14 = function (a) {
        if (this.$8.getBool("copy_new_manifest")) {
          var b;
          (b = this.$4).splice.apply(b, [0, this.$4.length].concat(a));
          return;
        }
        if (this.$8.getBool("use_loose_manifest_updates")) {
          (b = this.$4).splice.apply(b, [this.$4.length, 0].concat(a));
          this.$4.sort(function (a, b) {
            if (a.t < b.t) return -1;
            else if (a.t > b.t) return 1;
            return a.d === b.d ? a.r - b.r : 0;
          });
          b = [];
          for (var e = 0, f = e + 1; f < this.$4.length; ) {
            var g = this.$4[e],
              h = this.$4[f];
            if (g.t === h.t) {
              if (g.d > h.d)
                throw new (c("oz-player/utils/OzError"))({
                  type: "OZ_REPRESENTATION_PARSER",
                  description:
                    "Previous segment group duration greater than new.",
                  extra: { code: "OZ_RP-1" },
                });
              g.d = h.d;
              g.r = Math.max(g.r, h.r);
              g.id = h.id;
              f++;
              continue;
            } else b.push(this.$4[e]), (e = f), f++;
          }
          this.$4.length > 0 && b.push(this.$4[this.$4.length - 1]);
          (g = this.$4).splice.apply(g, [0, this.$4.length].concat(b));
          return;
        }
        h = this.$4.length - 1;
        e = a.length - 1;
        f = h;
        g = e;
        b = JSON.stringify(this.$4);
        while (h >= 0 && e >= 0) {
          var i = this.$4[h],
            j = a[e];
          if (
            d("oz-player/utils/OzNumericalHelper").equalTo(i.t, j.t, this.$9)
          ) {
            var k = h === f || e === g,
              l = k && ((h !== f && j.r > i.r) || (e !== g && i.r > j.r));
            k = (!k && i.r !== j.r) || l;
            if (k)
              throw new (c("oz-player/utils/OzError"))({
                type: "OZ_REPRESENTATION_PARSER",
                description:
                  'Segment group "R" field mismatch. Old groups: ' +
                  b +
                  "\n            , new groups: " +
                  JSON.stringify(a),
                extra: { code: "OZ_RP-2" },
              });
            if (
              this.$8.getBool("throw_on_non_zero_r_d_mismatch") &&
              i.r > 0 &&
              i.d !== j.d
            )
              throw new (c("oz-player/utils/OzError"))({
                type: "OZ_REPRESENTATION_PARSER",
                description:
                  "Duration mismatch between non-zero repeat tag and new.",
                extra: { code: "OZ_RP-3" },
              });
            i.r = Math.max(i.r, j.r);
            i.id != null && j.id != null && (i.id = Math.max(i.id, j.id));
            if (this.$8.getBool("fix_template_duration_artifact_in_manifest")) {
              if (i.d > j.d)
                throw new (c("oz-player/utils/OzError"))({
                  type: "OZ_REPRESENTATION_PARSER",
                  description:
                    "Previous segment group duration greater than new.",
                  extra: { code: "OZ_RP-4" },
                });
              i.d = j.d;
            }
            h--;
            e--;
          } else if (
            d("oz-player/utils/OzNumericalHelper").greaterThan(
              j.t,
              i.t,
              this.$9
            )
          )
            this.$4.splice(h + 1, 0, j), e--;
          else {
            if (this.$17(i, j))
              throw new (c("oz-player/utils/OzError"))({
                type: "OZ_REPRESENTATION_PARSER",
                description: "Segment group misalinged",
                extra: { code: "OZ_RP-5" },
              });
            h--;
          }
        }
        if (e >= 0) {
          (l = this.$4).unshift.apply(l, a.slice(0, e + 1));
        }
      };
      b.$15 = function (a) {
        a = this.$11(a);
        a = new (c("oz-player/utils/OzNumericalRangeUtil"))({
          config: this.$8,
        }).mergeSortedRanges(
          this.$5
            .map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
            .concat(
              a.map(function (a) {
                return { rangeStart: a.startTime, rangeEnd: a.endTime };
              })
            )
        );
        this.$5 = a.map(function (a) {
          return {
            startTime: a.rangeStart,
            endTime:
              a.rangeEnd === null || a.rangeEnd === void 0
                ? Infinity
                : a.rangeEnd,
          };
        });
      };
      b.$11 = function (a) {
        var b = this;
        a = new (c("oz-player/utils/OzNumericalRangeUtil"))({
          config: this.$8,
        });
        a = a.mergeSortedRanges(
          this.$4.map(function (a) {
            var c = b.$13(a, 0).getTimeRange().startTime;
            a = b.$13(a, a.r).getTimeRange().endTime;
            return { rangeStart: c, rangeEnd: a };
          })
        );
        return a.map(function (a) {
          var b = a.rangeStart;
          a = a.rangeEnd;
          a = a === null || a === void 0 ? Infinity : a;
          return { startTime: b, endTime: a };
        });
      };
      b.$13 = function (a, b) {
        var d = this;
        b === void 0 && (b = 0);
        var e = a.t,
          f = a.d,
          g = a.r;
        a = a.id;
        var h = e + f * b,
          i = this.$8.getBool("use_sc_timebased_segments"),
          j = this.$8.getBool("use_scf_timebased_segments"),
          k = this.$8.getBool("touch_cb_key"),
          l = a != null ? a - (g - b) : null;
        return {
          getData: function () {
            return null;
          },
          getURI: function () {
            var a =
              d.$8.getBool("use_templated_pdash_segments") &&
              d.$1 != null &&
              l != null
                ? d.$1.replace("$Number$", l.toString())
                : d.$2.replace("$Time$", h.toString());
            a = new (c("oz-player/shims/OzURI"))(a);
            i && a.addQueryData("_nc_sc", 1);
            j && a.addQueryData("_nc_scf", 1);
            var b = a.getQueryData().cb;
            k && b != null && a.addQueryData("cb", b + "_oz");
            return a;
          },
          getTimeRange: function () {
            return { startTime: h / d.$3, endTime: (h + f) / d.$3 };
          },
          getByteRange: function () {
            return null;
          },
          getSequenceNumber: function () {
            return null;
          },
          setOptions: function (a) {},
        };
      };
      b.getSegmentGroups = function () {
        return this.$4;
      };
      b.getEndingSegment = function () {
        if (this.$4.length == 0) return null;
        var a = this.$4[this.$4.length - 1],
          b = a.r;
        return this.$13(a, b);
      };
      b.forceParseIfNotParsed = function () {};
      b.getMaxGopSec = function () {
        return null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/utils/OzUrlHelper",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a;
      var b = a.indexOf("://"),
        c = a.indexOf("/", b + 3);
      c > b && (a = a.substring(c));
      return a;
    }
    function g(a) {
      a = a;
      var b = a.lastIndexOf("/"),
        c = a.lastIndexOf("://");
      b > c + 2 && (a = a.substring(0, b + 1));
      return a;
    }
    function h(a) {
      a = a;
      a = g(a);
      return a.endsWith("/") ? g(a.substring(0, a.length - 1)) : a;
    }
    function i(a, b) {
      a = g(a);
      b = b;
      while (b.length)
        if (b.startsWith("./")) b = b.substring(2);
        else if (b.startsWith("../"))
          (b = b.substring(3)),
            (a = h(a)),
            a.endsWith("/") && (a = a.substring(0, a.length - 1));
        else if (b.startsWith("..")) (b = b.substring(2)), (a = h(a));
        else if (b.startsWith(".")) b = b.substring(1);
        else break;
      b && b.length && (a.endsWith("/") || (a += "/"), (a += b));
      return a;
    }
    function j() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      if (!b || !b.length) return "";
      if (b.length === 1) return b[0];
      var d = b.shift();
      while (b.length > 0) d = i(d, b.shift());
      return d;
    }
    function b(a, b) {
      return k(b) ? b : j(a, b);
    }
    function k(a) {
      var b = /^https?:\/\//i;
      return b.test(a);
    }
    f.stripToPathAndQueryOnly = a;
    f.joinRelativeUrlPaths = j;
    f.joinUrlPaths = b;
  },
  66
);
__d(
  "PredictedSegmentTemplateSegmentsContainer",
  [
    "oz-player/manifests/SegmentTemplateSegmentsContainer",
    "oz-player/shims/OzURI",
    "oz-player/shims/ozvariant",
    "oz-player/utils/OzNumericalHelper",
    "oz-player/utils/OzNumericalRangeUtil",
    "oz-player/utils/OzUrlHelper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i, j, k) {
        k === void 0 && (k = !1);
        c = a.call(this, b, c, e, f, null, k) || this;
        c.$PredictedSegmentTemplateSegmentsContainer9 = 0;
        c.$PredictedSegmentTemplateSegmentsContainer11 = null;
        c.$PredictedSegmentTemplateSegmentsContainer10 = d;
        c.$PredictedSegmentTemplateSegmentsContainer8 = k;
        c.$PredictedSegmentTemplateSegmentsContainer12 = f;
        c.$PredictedSegmentTemplateSegmentsContainer7 = b;
        c.$PredictedSegmentTemplateSegmentsContainer5 = e;
        c.$PredictedSegmentTemplateSegmentsContainer1 = g;
        c.$PredictedSegmentTemplateSegmentsContainer3 = i;
        c.$PredictedSegmentTemplateSegmentsContainer2 = h;
        c.$PredictedSegmentTemplateSegmentsContainer4 = j;
        c.$PredictedSegmentTemplateSegmentsContainer6 = b.getNumber(
          "live_numerical_error_epsilon"
        );
        for (
          var d = 0;
          d < c.$PredictedSegmentTemplateSegmentsContainer12.length;
          d++
        )
          c.$PredictedSegmentTemplateSegmentsContainer9 = Math.max(
            c.$PredictedSegmentTemplateSegmentsContainer12[d].d,
            c.$PredictedSegmentTemplateSegmentsContainer9
          );
        return c;
      }
      var e = b.prototype;
      e.$PredictedSegmentTemplateSegmentsContainer13 = function () {
        if (
          this.$PredictedSegmentTemplateSegmentsContainer2 != null &&
          this.$PredictedSegmentTemplateSegmentsContainer4 != null
        )
          return {
            predictedAverageDuration:
              this.$PredictedSegmentTemplateSegmentsContainer4,
            predictedMediaStartNumber:
              this.$PredictedSegmentTemplateSegmentsContainer2,
          };
        else return null;
      };
      e.$PredictedSegmentTemplateSegmentsContainer14 = function (a, b, e) {
        var f = this,
          g = this.$PredictedSegmentTemplateSegmentsContainer1.replace(
            "$Number$",
            e.toString()
          ),
          h =
            this.$PredictedSegmentTemplateSegmentsContainer7.getBool(
              "touch_cb_key"
            ),
          i = this.$PredictedSegmentTemplateSegmentsContainer7
            .getLegacyConfig()
            .getString("cdn_experiment_id", ""),
          j = this.$PredictedSegmentTemplateSegmentsContainer7
            .getLegacyConfig()
            .getNumber("use_dvl_with_timeout_ms", 0),
          k = null;
        return {
          getByteRange: function () {
            return null;
          },
          getData: function () {
            return null;
          },
          getSequenceNumber: function () {
            return e;
          },
          getTimeRange: function () {
            return { endTime: b, startTime: a };
          },
          getURI: function () {
            var a = new (c("oz-player/shims/OzURI"))(g),
              b = a.getQueryData().cb;
            h && b != null && a.addQueryData("cb", b + "_oz");
            i.length !== 0 && a.addQueryData("_nc_expid", i);
            ((b = k) == null ? void 0 : b.enableDvl) &&
              j > 0 &&
              f.$PredictedSegmentTemplateSegmentsContainer10 != null &&
              (a.addQueryData(
                "_nc_dinfo-manifest-url",
                d("oz-player/utils/OzUrlHelper").stripToPathAndQueryOnly(
                  f.$PredictedSegmentTemplateSegmentsContainer10
                )
              ),
              a.addQueryData("_nc_dinfo-timeout", j));
            return a;
          },
          setOptions: function (a) {
            k = a;
          },
        };
      };
      e.updateWith = function (d) {
        d instanceof b || c("oz-player/shims/ozvariant")(0, 646);
        this.$PredictedSegmentTemplateSegmentsContainer3 =
          d.$PredictedSegmentTemplateSegmentsContainer3;
        this.$PredictedSegmentTemplateSegmentsContainer1 =
          d.$PredictedSegmentTemplateSegmentsContainer1;
        a.prototype.updateWith.call(this, d);
        this.$PredictedSegmentTemplateSegmentsContainer12 =
          d.$PredictedSegmentTemplateSegmentsContainer12;
        this.$PredictedSegmentTemplateSegmentsContainer8 =
          d.$PredictedSegmentTemplateSegmentsContainer8;
        for (
          var d = 0;
          d < this.$PredictedSegmentTemplateSegmentsContainer12.length;
          d++
        )
          this.$PredictedSegmentTemplateSegmentsContainer9 = Math.max(
            this.$PredictedSegmentTemplateSegmentsContainer12[d].d,
            this.$PredictedSegmentTemplateSegmentsContainer9
          );
      };
      e.getSegmentByTime = function (a) {
        return this.canApproximateId()
          ? this.$PredictedSegmentTemplateSegmentsContainer15(a)
          : this.$PredictedSegmentTemplateSegmentsContainer16(a);
      };
      e.getPredictedSegmentAfter = function (a) {
        return a != null && a.getSequenceNumber() != null && this.canPredict()
          ? this.$PredictedSegmentTemplateSegmentsContainer14(
              0,
              0,
              a.getSequenceNumber() + 1
            )
          : null;
      };
      e.blockTimeRange = function (b) {
        (this.$PredictedSegmentTemplateSegmentsContainer11 = b),
          a.prototype.blockTimeRange.call(this, b);
      };
      e.getTimeRanges = function () {
        var b = this.$PredictedSegmentTemplateSegmentsContainer13();
        if (b) {
          b = [
            {
              endTime:
                (this.$PredictedSegmentTemplateSegmentsContainer12[
                  this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                ].t +
                  this.$PredictedSegmentTemplateSegmentsContainer12[
                    this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                  ].d) /
                this.$PredictedSegmentTemplateSegmentsContainer5,
              startTime:
                (this.$PredictedSegmentTemplateSegmentsContainer12[0].t -
                  b.predictedAverageDuration -
                  (this.$PredictedSegmentTemplateSegmentsContainer3 -
                    this.$PredictedSegmentTemplateSegmentsContainer12.length -
                    Number(this.$PredictedSegmentTemplateSegmentsContainer2)) *
                    Number(b.predictedAverageDuration)) /
                this.$PredictedSegmentTemplateSegmentsContainer5,
            },
          ];
          var d = this.$PredictedSegmentTemplateSegmentsContainer11;
          return d == null
            ? b
            : new (c("oz-player/utils/OzNumericalRangeUtil"))({
                config: this.$PredictedSegmentTemplateSegmentsContainer7,
              })
                .diffSortedRanges(
                  b.map(function (a) {
                    return { rangeEnd: a.endTime, rangeStart: a.startTime };
                  }),
                  { rangeEnd: d.endTime, rangeStart: d.startTime }
                )
                .map(function (a) {
                  return {
                    endTime:
                      a.rangeEnd === null || a.rangeEnd === void 0
                        ? Infinity
                        : a.rangeEnd,
                    startTime: a.rangeStart,
                  };
                });
        } else return a.prototype.getTimeRanges.call(this);
      };
      e.canPredict = function () {
        var a = this.$PredictedSegmentTemplateSegmentsContainer7
          .getLegacyConfig()
          .getNumber("num_predictive_segments", 0);
        return a > 0;
      };
      e.canApproximateId = function () {
        var a = this.$PredictedSegmentTemplateSegmentsContainer13();
        return a != null;
      };
      e.$PredictedSegmentTemplateSegmentsContainer16 = function (a) {
        var b = null;
        a = a * this.$PredictedSegmentTemplateSegmentsContainer5;
        var e =
            this.$PredictedSegmentTemplateSegmentsContainer12.length > 0
              ? this.$PredictedSegmentTemplateSegmentsContainer12[
                  this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                ].t +
                this.$PredictedSegmentTemplateSegmentsContainer12[
                  this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                ].d
              : null,
          f = this.$PredictedSegmentTemplateSegmentsContainer7
            .getLegacyConfig()
            .getNumber("pdash_future_edgelatency_gops", 0);
        if (
          e != null &&
          e <= a &&
          f !== 0 &&
          a < e + this.$PredictedSegmentTemplateSegmentsContainer9 * f
        ) {
          e =
            a -
            (this.$PredictedSegmentTemplateSegmentsContainer12[
              this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
            ].t +
              this.$PredictedSegmentTemplateSegmentsContainer12[
                this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
              ].d);
          e = this.$PredictedSegmentTemplateSegmentsContainer9
            ? 0
            : Math.floor(e / this.$PredictedSegmentTemplateSegmentsContainer9);
          return this.$PredictedSegmentTemplateSegmentsContainer14(
            0,
            0,
            this.$PredictedSegmentTemplateSegmentsContainer3 + 1 + e
          );
        }
        e = 0;
        for (
          var g = 0;
          this.$PredictedSegmentTemplateSegmentsContainer12.length - 1 - g >= 0;
          g++
        ) {
          var h =
            this.$PredictedSegmentTemplateSegmentsContainer12[
              this.$PredictedSegmentTemplateSegmentsContainer12.length - 1 - g
            ];
          h.r === 0 || c("oz-player/shims/ozvariant")(0, 18769);
          if (
            d("oz-player/utils/OzNumericalHelper").lessThanOrEqual(
              h.t + h.d * (h.r + 1),
              a,
              this.$PredictedSegmentTemplateSegmentsContainer6
            )
          )
            break;
          b = h;
          e = g;
        }
        if (b === null || (f > 0 && a < b.t)) return null;
        else
          return this.$PredictedSegmentTemplateSegmentsContainer14(
            b.t / this.$PredictedSegmentTemplateSegmentsContainer5,
            (b.t + b.d) / this.$PredictedSegmentTemplateSegmentsContainer5,
            this.$PredictedSegmentTemplateSegmentsContainer3 - e
          );
      };
      e.$PredictedSegmentTemplateSegmentsContainer15 = function (a) {
        var b = a * this.$PredictedSegmentTemplateSegmentsContainer5,
          c = this.getTimeRanges();
        if (
          d("oz-player/utils/OzNumericalHelper").greaterThan(c[0].startTime, a)
        )
          return null;
        else if (
          d("oz-player/utils/OzNumericalHelper").lessThanOrEqual(
            this.$PredictedSegmentTemplateSegmentsContainer12[0].t,
            b
          )
        )
          return this.$PredictedSegmentTemplateSegmentsContainer16(a);
        else {
          c = Math.ceil(
            (this.$PredictedSegmentTemplateSegmentsContainer12[0].t - b) /
              Number(this.$PredictedSegmentTemplateSegmentsContainer4)
          );
          b = Math.max(
            Number(this.$PredictedSegmentTemplateSegmentsContainer2),
            this.$PredictedSegmentTemplateSegmentsContainer3 -
              this.$PredictedSegmentTemplateSegmentsContainer12.length +
              1 -
              c
          );
          return this.$PredictedSegmentTemplateSegmentsContainer14(
            a,
            a +
              Number(this.$PredictedSegmentTemplateSegmentsContainer4) /
                this.$PredictedSegmentTemplateSegmentsContainer5,
            b
          );
        }
      };
      e.isEndingSegment = function (b) {
        if (!this.$PredictedSegmentTemplateSegmentsContainer8) return !1;
        var c = b.getSequenceNumber();
        return c != null
          ? c >= this.$PredictedSegmentTemplateSegmentsContainer3
          : a.prototype.isEndingSegment.call(this, b);
      };
      e.getEndingSegment = function () {
        if (this.$PredictedSegmentTemplateSegmentsContainer12.length === 0)
          return null;
        var a =
          this.$PredictedSegmentTemplateSegmentsContainer12[
            this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
          ];
        return this.$PredictedSegmentTemplateSegmentsContainer14(
          a.t / this.$PredictedSegmentTemplateSegmentsContainer5,
          (a.t + a.d) / this.$PredictedSegmentTemplateSegmentsContainer5,
          this.$PredictedSegmentTemplateSegmentsContainer3
        );
      };
      e.getMaxGopSec = function () {
        return (
          this.$PredictedSegmentTemplateSegmentsContainer9 /
          this.$PredictedSegmentTemplateSegmentsContainer5
        );
      };
      return b;
    })(c("oz-player/manifests/SegmentTemplateSegmentsContainer"));
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/parsers/OzDefaultSegmentTimelineParser",
  [
    "oz-player/manifests/SegmentTemplateSegmentsContainer",
    "oz-player/utils/OzUrlHelper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      a.parseSegments = function (a, b) {
        a = [];
        b.SegmentTimeline[0].S &&
          (a = b.SegmentTimeline[0].S.map(function (a) {
            return {
              t: Number.parseInt(a.$.t, 10),
              d: Number.parseInt(a.$.d, 10),
              r: Number.parseInt(a.$.r || "0", 10),
              id: a.$.id ? Number.parseInt(a.$.id, 10) : void 0,
            };
          }));
        return a;
      };
      var b = a.prototype;
      b.parseSegmentsContainer = function (b, e, f) {
        return new (c("oz-player/manifests/SegmentTemplateSegmentsContainer"))(
          b,
          d("oz-player/utils/OzUrlHelper").joinUrlPaths(e.baseUrl, f.$.media),
          Number.parseInt(f.$.timescale, 10),
          a.parseSegments(b, f),
          null,
          e.isStaticMpd
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "OzPredictedSegmentTimelineParser",
  [
    "PredictedSegmentTemplateSegmentsContainer",
    "oz-player/manifests/SegmentTemplateSegmentsContainer",
    "oz-player/parsers/OzDefaultSegmentTimelineParser",
    "oz-player/shims/OzURI",
    "oz-player/utils/OzUrlHelper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.parseSegmentsContainer = function (a, b, e) {
        var f;
        if (e.SegmentTimeline[0].$.FBPredictedMedia) {
          f = d("oz-player/utils/OzUrlHelper").joinUrlPaths(
            b.baseUrl,
            e.SegmentTimeline[0].$.FBPredictedMedia
          );
          var g = new (c("oz-player/shims/OzURI"))(f);
          g.addQueryData("_nc_sc", 1);
          f = g.toString();
        }
        var h;
        e.SegmentTimeline[0].$.FBPredictedMediaStartNumber &&
          (h = Number.parseInt(
            e.SegmentTimeline[0].$.FBPredictedMediaStartNumber,
            0
          ));
        var i;
        e.SegmentTimeline[0].$.FBPredictedMediaEndNumber &&
          (i = Number.parseInt(
            e.SegmentTimeline[0].$.FBPredictedMediaEndNumber,
            0
          ));
        var j;
        e.SegmentTimeline[0].$.FBAverageDuration &&
          (j = Number.parseInt(e.SegmentTimeline[0].$.FBAverageDuration, 0));
        g = c("oz-player/parsers/OzDefaultSegmentTimelineParser").parseSegments(
          a,
          e
        );
        return ((b.isTemplatedMpd && h != null && j != null) ||
          !b.isTemplatedMpd) &&
          f != null &&
          i != null
          ? new (c("PredictedSegmentTemplateSegmentsContainer"))(
              a,
              d("oz-player/utils/OzUrlHelper").joinUrlPaths(
                b.baseUrl,
                e.$.media
              ),
              b.mpdUrl,
              Number.parseInt(e.$.timescale, 10),
              g,
              f,
              h,
              i,
              j,
              b.isStaticMpd
            )
          : new (c("oz-player/manifests/SegmentTemplateSegmentsContainer"))(
              a,
              d("oz-player/utils/OzUrlHelper").joinUrlPaths(
                b.baseUrl,
                e.$.media
              ),
              Number.parseInt(e.$.timescale, 10),
              g,
              f,
              b.isStaticMpd
            );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "OzVideoLiveTraceNetworkRequestStreamHandler",
  [
    "oz-player/networks/OzTransformStream",
    "oz-player/utils/OzResourceTimingUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        b === void 0 && (b = !1), (this.$2 = !1), (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.onResponse = function (a, b) {
        var e = this,
          f = a.headers,
          g = null;
        if (!this.$1) return null;
        a = new (c("oz-player/networks/OzTransformStream"))();
        a.addListener("writableClose", function () {
          var a = {},
            c = d(
              "oz-player/utils/OzResourceTimingUtils"
            ).getLatestResourceTimingEntry(b);
          c &&
            (a.lat = Math.round(c.responseStart - c.requestStart).toString());
          e.$1 && f && e.$1(f, g, a);
        });
        this.$2 &&
          a.addListener("writableWrite", function (a) {
            g === null ? (g = [a]) : g.push(a);
          });
        return a;
      };
      b.onError = function (a, b) {
        return null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "TimeRanges",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a) {
        (this.$1 = []), (this.$1 = a);
      }
      var b = a.prototype;
      b.start = function (a) {
        this.$1[a] || h(0, 2205);
        return this.$1[a].startTime;
      };
      b.end = function (a) {
        this.$1[a] || h(0, 2205);
        return this.$1[a].endTime;
      };
      b.length = function () {
        return this.$1.length;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/drm/OzDrmUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      return Uint8Array.from(window.atob(a), function (a) {
        return a.charCodeAt(0);
      });
    };
    b = function (a) {
      return window.btoa(String.fromCharCode.apply(null, new Uint8Array(a)));
    };
    f.base64ToUint8Array = a;
    f.arrayBufferToBase64 = b;
  },
  66
);
__d(
  "OzWidevineDrmProvider",
  ["URI", "oz-player/drm/OzDrmUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, e, f, g) {
        this.$2 = [];
        this.$4 = !0;
        this.$5 = !1;
        g !== void 0 &&
          g !== null &&
          g !== "" &&
          (this.$1 = d("oz-player/drm/OzDrmUtils").base64ToUint8Array(g));
        if (b !== null && b !== void 0 && f !== null && f !== void 0) {
          g = new (c("URI"))(b);
          g.addQueryData("access_token", f);
          this.$3 = g.toString();
          this.$5 = !0;
          this.$4 = !1;
        } else {
          b = e["0"];
          if (b === void 0 || b === null) {
            b = "/video/drm/getlicense";
            f = new (c("URI"))(b);
            f.addQueryData("video_id", a);
            this.$3 = f.toString();
          } else this.$3 = b;
        }
      }
      var b = a.prototype;
      b.getKeySystem = function () {
        return "com.widevine.alpha";
      };
      b.getSchemeId = function () {
        return "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
      };
      b.getInitDatas = function () {
        return this.$2;
      };
      b.setInitDatas = function (a) {
        this.$2 = a;
      };
      b.getRequireDistinctiveIdentifier = function () {
        return "optional";
      };
      b.getRequirePersistentState = function () {
        return "optional";
      };
      b.getInitDataTypes = function () {
        return;
      };
      b.getDrmSessionTypes = function () {
        return ["temporary"];
      };
      b.getAudioRobustness = function () {
        return "";
      };
      b.getVideoRobustness = function () {
        return "";
      };
      b.getServerCertificate = function () {
        return this.$1;
      };
      b.getLicenseRequestInfo = function (a) {
        var b = { url: this.$3, method: "POST", body: "", headers: {} };
        this.$4 && (b.credentials = "include");
        a = d("oz-player/drm/OzDrmUtils").arrayBufferToBase64(a);
        if (this.$5) {
          var c = { request: a };
          b.body = JSON.stringify(c);
          b.headers["Content-Type"] = "application/json";
        } else (b.body = a), (b.headers["Content-Type"] = "application/text");
        return b;
      };
      b.parseLicenseResponse = function (a) {
        a = String.fromCharCode.apply(null, a);
        var b;
        try {
          b = JSON.parse(a);
        } catch (a) {
          b = void 0;
        }
        var c;
        if (b !== void 0 && b.data !== void 0 && b.data.length === 1) {
          b = b.data[0];
          (b.error !== null && b.error !== void 0) || (c = b.license);
        } else c = a;
        return c !== void 0 && c !== null && c !== ""
          ? d("oz-player/drm/OzDrmUtils").base64ToUint8Array(c)
          : null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "OzDOMEventListenerImpl",
  ["cr:1351686"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      listenDOMEvent: b("cr:1351686").listen,
      captureDOMEvent: b("cr:1351686").capture,
      suppressDOMEvent: b("cr:1351686").suppress,
    };
    c = a;
    g["default"] = c;
  },
  98
);
__d(
  "oz-player/shims/www/OzDOMEventListenerWWW",
  ["OzDOMEventListenerImpl"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("OzDOMEventListenerImpl");
    f["default"] = a;
  },
  66
);
__d(
  "oz-player/shims/OzDOMEventListener",
  ["oz-player/shims/www/OzDOMEventListenerWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzDOMEventListenerWWW");
  },
  98
);
__d(
  "oz-player/shims/www/OzSubscriptionsHandlerWWW",
  ["SubscriptionsHandler"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("SubscriptionsHandler");
  },
  98
);
__d(
  "oz-player/shims/OzSubscriptionsHandler",
  ["oz-player/shims/www/OzSubscriptionsHandlerWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzSubscriptionsHandlerWWW");
  },
  98
);
__d(
  "oz-player/shims/www/ozThrottleWWW",
  ["throttle"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("throttle");
  },
  98
);
__d(
  "oz-player/shims/ozThrottle",
  ["oz-player/shims/www/ozThrottleWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/ozThrottleWWW");
  },
  98
);
__d(
  "oz-player/strategies/OzBufferingDetectorStates",
  ["oz-player/utils/OzBufferingUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
        function a(a, b, c) {
          (this.$1 = a), (this.$2 = b), (this.$3 = c);
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c) {
          if (a.type === "pause" || b.paused) return new i(this.$1, this.$2);
          a =
            this.$3 instanceof j
              ? this.$1.getInPlayBufferOverflowTarget()
              : this.$1.getStartBufferUnderflowTarget();
          return d("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(b, a, c)
            ? new j(this.$1, this.$2)
            : this;
        };
        return a;
      })(),
      i = (function () {
        function a(a, b) {
          (this.$1 = a), (this.$2 = b);
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c) {
          return a.type === "play" || a.type === "playing" || !b.paused
            ? d("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(
                b,
                this.$1.getStartBufferUnderflowTarget(),
                c
              )
              ? new j(this.$1, this.$2)
              : new h(this.$1, this.$2, this)
            : this;
        };
        return a;
      })(),
      j = (function () {
        function a(a, b) {
          (this.$1 = a),
            (this.$2 = b),
            (this.$3 = b
              .getString("stream_types_eligible_for_partial_playback", "")
              .split(","));
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c, e) {
          e === void 0 && (e = new Map());
          if (a.type === "pause" || b.paused) return new i(this.$1, this.$2);
          return (this.$2.getBool("buffer_when_waiting", !1) &&
            a.type === "waiting") ||
            (!d("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(
              b,
              this.$1.getInPlayBufferUnderflowTarget(),
              c
            ) &&
              !this.$4(a, b.currentTime, e))
            ? new h(this.$1, this.$2, this)
            : this;
        };
        b.$4 = function (a, b, c) {
          return this.$2.getBool("buffer_when_waiting_in_partial_buffer", !1) &&
            a.type === "waiting"
            ? !1
            : d("oz-player/utils/OzBufferingUtils").hasEnoughPartialBuffer(
                b,
                c,
                this.$3,
                this.$2.getNumber("partial_playback_buffer_overflow", 0)
              );
        };
        return a;
      })();
    g.OzVideoBufferingState = h;
    g.OzVideoPausedState = i;
    g.OzVideoPlayingState = j;
  },
  98
);
__d(
  "oz-player/strategies/OzBufferingStateThresholdManager",
  ["oz-player/shims/OzPerformance", "oz-player/utils/OzBufferingUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$2 = !1),
          (this.$3 = -Infinity),
          (this.$4 = -Infinity),
          (this.$1 = a);
      }
      var b = a.prototype;
      b.getInPlayBufferUnderflowTarget = function () {
        return this.$1.getNumber(
          "in_play_buffer_underflow_target",
          d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD
        );
      };
      b.getInPlayBufferOverflowTarget = function () {
        if (this.$5())
          return this.$1.getNumber(
            "stream_interrupt_in_play_buffer_overflow_target",
            d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD
          );
        return c("oz-player/shims/OzPerformance").now() - this.$4 <
          this.$1.getNumber("recent_buffer_timeout_ms", 0)
          ? this.$1.getNumber(
              "recent_buffer_in_play_buffer_overflow_target",
              d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD
            )
          : this.$1.getNumber(
              "in_play_buffer_overflow_target",
              d("oz-player/utils/OzBufferingUtils").BUFFER_OVERFLOW_THRESHOLD
            );
      };
      b.getStartBufferUnderflowTarget = function () {
        return this.$1.getNumber(
          "start_buffer_underflow_target",
          d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD
        );
      };
      b.notifyBufferingEnd = function () {
        this.$4 = c("oz-player/shims/OzPerformance").now();
      };
      b.notifyStreamInterrupted = function () {
        this.$2 = !0;
      };
      b.notifyStreamResumed = function () {
        (this.$2 = !1), (this.$3 = c("oz-player/shims/OzPerformance").now());
      };
      b.$5 = function () {
        var a = this.$1.getNumber(
          "stream_interrupt_buffer_target_timeout_ms",
          0
        );
        return a === 0
          ? !1
          : this.$2 || c("oz-player/shims/OzPerformance").now() - this.$3 < a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/utils/OzDomEventCapturer",
  ["oz-player/shims/OzDOMEventListener"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$2 = new Map()), (this.$1 = a);
      }
      var b = a.prototype;
      b.capture = function (a, b) {
        var d = this,
          e = this.$1.parentNode;
        return !e
          ? { remove: function () {} }
          : c("oz-player/shims/OzDOMEventListener").captureDOMEvent(
              e,
              a,
              function (a) {
                if (a.target !== d.$1) return;
                var c = b(a);
                c && d.$3(a);
              }
            );
      };
      b.dispatchIfSuppressed = function (a) {
        var b = this.$2.get(a);
        b && this.$1.dispatchEvent(b);
        this.$2["delete"](a);
      };
      b.$3 = function (a) {
        c("oz-player/shims/OzDOMEventListener").suppressDOMEvent(a),
          this.$2.set(a.type, a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/strategies/OzBufferingDetector",
  [
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/ozThrottle",
    "oz-player/strategies/OzBufferingDetectorStates",
    "oz-player/strategies/OzBufferingStateThresholdManager",
    "oz-player/utils/OzBufferingUtils",
    "oz-player/utils/OzDomEventCapturer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 150;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f) {
        var g;
        g = a.call(this) || this;
        g.$OzBufferingDetector3 = new (c(
          "oz-player/shims/OzSubscriptionsHandler"
        ))();
        g.$OzBufferingDetector7 = new Map();
        g.$OzBufferingDetector9 = null;
        g.$OzBufferingDetector10 = function (a) {
          g.$OzBufferingDetector13(a);
        };
        g.$OzBufferingDetector11 = function (a) {
          a =
            g.$OzBufferingDetector13(a) instanceof
            d("oz-player/strategies/OzBufferingDetectorStates")
              .OzVideoBufferingState;
          return g.$OzBufferingDetector5.getBool(
            "suppress_playing_event_while_buffering",
            !1
          )
            ? a
            : !1;
        };
        g.$OzBufferingDetector2 = b;
        g.$OzBufferingDetector5 = e;
        g.$OzBufferingDetector6 = f;
        g.$OzBufferingDetector8 = new (c(
          "oz-player/strategies/OzBufferingStateThresholdManager"
        ))(e);
        g.$OzBufferingDetector2.paused
          ? (g.$OzBufferingDetector1 = new (d(
              "oz-player/strategies/OzBufferingDetectorStates"
            ).OzVideoPausedState)(
              g.$OzBufferingDetector8,
              g.$OzBufferingDetector5
            ))
          : (g.$OzBufferingDetector1 = d(
              "oz-player/utils/OzBufferingUtils"
            ).hasEnoughBuffer(
              g.$OzBufferingDetector2,
              g.$OzBufferingDetector8.getInPlayBufferUnderflowTarget(),
              g.$OzBufferingDetector6()
            )
              ? new (d(
                  "oz-player/strategies/OzBufferingDetectorStates"
                ).OzVideoPlayingState)(
                  g.$OzBufferingDetector8,
                  g.$OzBufferingDetector5
                )
              : new (d(
                  "oz-player/strategies/OzBufferingDetectorStates"
                ).OzVideoBufferingState)(
                  g.$OzBufferingDetector8,
                  g.$OzBufferingDetector5,
                  null
                ));
        g.$OzBufferingDetector4 = new (c("oz-player/utils/OzDomEventCapturer"))(
          g.$OzBufferingDetector2
        );
        g.$OzBufferingDetector3.addSubscriptions(
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "pause",
            g.$OzBufferingDetector10
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "play",
            g.$OzBufferingDetector10
          ),
          g.$OzBufferingDetector4.capture("playing", g.$OzBufferingDetector11),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "progress",
            c("oz-player/shims/ozThrottle")(g.$OzBufferingDetector10, h)
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "timeupdate",
            c("oz-player/shims/ozThrottle")(g.$OzBufferingDetector10, h)
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "seeked",
            g.$OzBufferingDetector10
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "seeking",
            g.$OzBufferingDetector10
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "waiting",
            g.$OzBufferingDetector10
          )
        );
        g.$OzBufferingDetector5.getBool(
          "listen_for_canplay_in_buffering_detector",
          !1
        ) &&
          g.$OzBufferingDetector3.addSubscriptions(
            c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              g.$OzBufferingDetector2,
              "canplay",
              g.$OzBufferingDetector10
            ),
            c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              g.$OzBufferingDetector2,
              "canplaythrough",
              g.$OzBufferingDetector10
            )
          );
        return g;
      }
      var e = b.prototype;
      e.$OzBufferingDetector12 = function () {
        var a = this,
          b = "unavailable",
          c = this.$OzBufferingDetector8.getInPlayBufferUnderflowTarget();
        this.$OzBufferingDetector7.forEach(function (e, f) {
          var g = a.$OzBufferingDetector2.currentTime;
          d("oz-player/utils/OzBufferingUtils").hasBuffer(g, c, e) ||
            (b = b === "unavailable" ? f : "audio/video");
        });
        return b;
      };
      e.setSourceBufferState = function (a, b) {
        this.$OzBufferingDetector7.set(a, b);
      };
      e.$OzBufferingDetector13 = function (a) {
        var b = this.$OzBufferingDetector1.handleEvent(
            a,
            this.$OzBufferingDetector2,
            this.$OzBufferingDetector6(),
            this.$OzBufferingDetector7
          ),
          c = this.$OzBufferingDetector1;
        this.$OzBufferingDetector1 = b;
        var e =
            b instanceof
            d("oz-player/strategies/OzBufferingDetectorStates")
              .OzVideoBufferingState,
          f =
            c instanceof
            d("oz-player/strategies/OzBufferingDetectorStates")
              .OzVideoBufferingState;
        if (b === c) {
          e &&
            this.$OzBufferingDetector9 &&
            this.$OzBufferingDetector9
              .cloneContext()
              .getOperationLogger("buffering_handle_event")
              .setInitiator(a.type)
              .log();
          return b;
        }
        if (e) {
          e =
            c instanceof
            d("oz-player/strategies/OzBufferingDetectorStates")
              .OzVideoPlayingState
              ? "in_play"
              : "start/unpause";
          this.$OzBufferingDetector9 &&
            this.$OzBufferingDetector9
              .cloneContext()
              .getOperationLogger("enter_buffering")
              .setType(e)
              .setReason(this.$OzBufferingDetector12())
              .setInitiator(a.type)
              .log();
          this.emit("enterBuffering", e);
        } else
          f &&
            (this.$OzBufferingDetector9 &&
              this.$OzBufferingDetector9
                .cloneContext()
                .getOperationLogger("leave_buffering")
                .setInitiator(a.type)
                .log(),
            this.$OzBufferingDetector8.notifyBufferingEnd(),
            this.emit("leaveBuffering"));
        b instanceof
          d("oz-player/strategies/OzBufferingDetectorStates")
            .OzVideoPlayingState &&
          this.$OzBufferingDetector4.dispatchIfSuppressed("playing");
        return b;
      };
      e.notifyStreamInterrupted = function () {
        this.$OzBufferingDetector8.notifyStreamInterrupted();
      };
      e.notifyStreamResumed = function () {
        this.$OzBufferingDetector8.notifyStreamResumed();
      };
      e.attachPerfLoggerProvider = function (a) {
        this.$OzBufferingDetector9 = a;
      };
      e.destroy = function () {
        this.$OzBufferingDetector3.release();
      };
      return b;
    })(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationEnginePartsImplUtils",
  [
    "OzSystemicRiskABRManager",
    "OzWidevineDrmProvider",
    "gkx",
    "guid",
    "oz-player/strategies/OzBufferingDetector",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /(livestream-)?lookaside\.(facebook|workplace)\.com$/,
      i = c("qex")._("1959790"),
      j = c("qex")._("207"),
      k = c("qex")._("208"),
      l = c("qex")._("21");
    function a(a) {
      return i !== null && i !== void 0 && i !== "" ? i : null;
    }
    function b(a) {
      return h.test(a.getDomain());
    }
    function d(a, b, d, e, f) {
      if (f.current != null) return;
      var g = !0,
        h = function () {
          if (g) return !1;
          var a = f.current !== i;
          return a && c("gkx")("1508440") ? !0 : !1;
        },
        i = new (c("oz-player/strategies/OzBufferingDetector"))(
          a,
          d,
          function () {
            var a = e.getCurrentState();
            a = a.controlledState;
            return a.streamEnded ? b.getDuration() : Infinity;
          }
        );
      f.current = i;
      g = !1;
      a = function (a) {
        if (h()) return;
        if (c("gkx")("1235655")) return;
        e.dispatch({
          payload: { bufferingType: a },
          type: "buffering_begin_requested",
        });
      };
      d = function () {
        if (h()) return;
        e.dispatch({ type: "buffering_end_requested" });
      };
      i.addListener("enterBuffering", a);
      i.addListener("leaveBuffering", d);
    }
    function e(a) {
      var b = a.accessToken,
        d = a.graphQLVideoDRMInfo;
      a = a.videoFBID;
      var e = [];
      d &&
        a != null &&
        e.push(
          new (c("OzWidevineDrmProvider"))(
            a,
            d.graphApiVideoLicenseUri,
            d.videoLicenseUriMap,
            b,
            null
          )
        );
      return e;
    }
    function f(a) {
      var b = a.VideoPlayerShakaPerformanceLoggerClass,
        c = a.accessToken,
        d = a.disableLogging,
        e = a.getApproximateFBLSToPlayerDisplayLatency,
        f = a.getBandwidthEstimate,
        g = a.getPlayerDimensions,
        h = a.playbackIsLiveStreaming,
        i = a.playerInstanceCount,
        j = a.playerInstanceKey,
        k = a.playerSuborigin,
        l = a.playerVersion,
        m = a.videoElement;
      a = a.videoFBID;
      if (d || !b || !b.shouldInitialize()) return [];
      c = {
        accessToken: c,
        getApproximateFBLSToPlayerDisplayLatency: e,
        getBandwidthEstimate: f,
        getPlayerDimensions: g,
        isLive: h,
        isServableViaFbms: !1,
        playerInstanceCount: i,
        playerOrigin: null,
        playerSuborigin: k,
        playerVersion: l,
        representationId: null,
        uniqueID: j,
        video: m,
        videoID: (d = a) != null ? d : "",
      };
      return [new b(c)];
    }
    function m(a, b) {
      return b > 0
        ? (b / 1e3) * -1
        : a.getNumber("live_initial_playback_position", 0);
    }
    function n(a, b, c) {
      return b > 0 && c > 0
        ? (b + c) / 1e3
        : a.getNumber("livehead_fall_behind_block_threshold", 0);
    }
    function o(a, b) {
      return b > 0
        ? b / 2 / 1e3
        : a.getNumber("live_time_range_block_margin", 0);
    }
    function p() {
      return function (a, b, d, e, f, g, h, i) {
        return a.getLegacyConfig().getBool("use_systemic_risk_abr", !1)
          ? new (c("OzSystemicRiskABRManager"))(a, b, d, e, f, g, h, i)
          : null;
      };
    }
    function q(a) {
      return j !== null &&
        j !== void 0 &&
        j !== "" &&
        k !== null &&
        k !== void 0 &&
        k !== ""
        ? { paramName: j, paramValue: k }
        : null;
    }
    function r(a) {
      return l !== null && l !== void 0 && l !== "" ? l + c("guid")() : null;
    }
    g.getOsParamValue = a;
    g.checkShouldIncludeCredentials = b;
    g.createOzBufferingDetector = d;
    g.createOzDrmProviders = e;
    g.createOzPerfLoggerProviders = f;
    g.calculateInitialPlaybackPositionForDynamicMpd = m;
    g.calculateLiveheadFallBehindBlockThreshold = n;
    g.calculateLiveheadFallBehindBlockMargin = o;
    g.getVideoAbrManagerFactory = p;
    g.getTestQueryParam = q;
    g.getTestRndQueryParamValue = r;
  },
  98
);
__d(
  "OzMinimumSmallestDimensionRestriction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.applyRestriction = function (a, b) {
        var c = this;
        if (a.length === 0) return [];
        b = a.filter(function (a) {
          var b = a.getWidth();
          a = a.getHeight();
          b = b < a ? b : a;
          return b >= c.$1;
        });
        return b.length > 0 ? b : [a[a.length - 1]];
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "OzMosThresholdRestriction",
  ["MosUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$3 = new Map()),
          (this.$4 = a),
          (this.$1 = a.getNumber("mos_upper_threshold", 0)),
          (this.$2 = a.getNumber("mos_lower_threshold", 0));
      }
      var b = a.prototype;
      b.$5 = function () {
        return this.$4.getBool("cache_mos_threshold", !1)
          ? { mosUpperThreshold: this.$1, mosLowerThreshold: this.$2 }
          : {
              mosUpperThreshold: this.$4.getNumber("mos_upper_threshold", 0),
              mosLowerThreshold: this.$4.getNumber("mos_lower_threshold", 0),
            };
      };
      b.$6 = function (a, b) {
        var c = null;
        if (this.$3.get(a)) c = this.$3.get(a);
        else {
          var e = a.getCustomField("playbackResolutionMos");
          e != null &&
            ((c = d("MosUtils").parsePlaybackMos(String(e))),
            c && this.$3.set(a, c));
        }
        return c != null
          ? d("MosUtils").getMosValue(
              c,
              d("MosUtils").getQualityLabel(b.width, b.height)
            )
          : null;
      };
      b.$7 = function (a, b) {
        var c = this,
          d = null,
          e = this.$5(),
          f = e.mosUpperThreshold;
        a.forEach(function (a) {
          a = c.$6(a, b);
          a != null && a > f && (d == null || d > a) && (d = a);
        });
        return d == null
          ? a
          : a.filter(function (a) {
              a = c.$6(a, b);
              return a == null ? !0 : a <= f || a === d;
            });
      };
      b.$8 = function (a, b) {
        var c = this,
          d = [],
          e = this.$5(),
          f = e.mosLowerThreshold;
        a.forEach(function (a) {
          var e = c.$6(a, b);
          e != null && e > f && d.push(a);
        });
        d.length === 0 && d.push(a[a.length - 1]);
        return d;
      };
      b.applyRestriction = function (a, b) {
        if (a.length === 0) return [];
        a = a;
        var c = this.$5(),
          d = c.mosLowerThreshold;
        c = c.mosUpperThreshold;
        c > 0 && (a = this.$7(a, b));
        d > 0 && (a = this.$8(a, b));
        return a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "getOzPlaybackRestrictions",
  ["OzMinimumSmallestDimensionRestriction", "OzMosThresholdRestriction", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 720,
      i = 2160;
    function a(a, b) {
      var d = [];
      switch (a) {
        case "HD":
          d.push(new (c("OzMinimumSmallestDimensionRestriction"))(h));
          break;
        case "UHD":
          c("gkx")("1488288") &&
            d.push(new (c("OzMinimumSmallestDimensionRestriction"))(i));
          break;
        default:
          break;
      }
      a = b.getNumber("mos_upper_threshold", 0);
      var e = b.getNumber("mos_lower_threshold", 0);
      (a > 0 || e > 0) && d.push(new (c("OzMosThresholdRestriction"))(b));
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/configs/OzPlayerConfigDefaults",
  [],
  function (a, b, c, d, e, f) {
    a = {
      abort_clear_video_node_on_detach: !1,
      abr_use_download_time: !1,
      accept_external_buffering_detector: !0,
      allow_queueing_end_of_stream_when_update: !1,
      always_use_current_time_in_playback_state: !0,
      append_retry_quota_exceeded_error: !0,
      async_clear_on_quality_upgrade: !1,
      bandwidth_ignore_on_stream_write_samples: !1,
      bandwidth_use_chunk_response_size: !1,
      bandwidth_use_response_time_adjustment: !1,
      buffer_when_waiting: !1,
      buffer_when_waiting_in_partial_buffer: !0,
      call_end_of_stream_in_quick_starter: !0,
      catchup_use_timeline_range_end_time_as_end: !1,
      check_buffer_range_once_for_playhead_update: !1,
      check_mediasource_readystate_before_end_of_stream: !0,
      cleanup_video_node_on_destroy: !0,
      clear_buffer_on_quota_exceeded_error: !0,
      clear_buffer_on_seek_into_unbuffered_range: !0,
      clear_sbm_buffer_on_byte_threshold: !1,
      convert_dom_exception_to_oz_error: !0,
      copy_new_manifest: !0,
      create_new_media_source_on_node_reset: !1,
      debug_live_replay: !1,
      delay_stream_end_for_sourceended: !0,
      detach_media_source_manager: !0,
      disable_audio_scheduler: !1,
      download_cursor_1st_run_set_skipped_segment_on: !0,
      download_cursor_disable_buffer_ahead_rule_on: !0,
      dvl_update_interval_reset_on_err: !0,
      emit_destroyed_after_media_keys_clear: !1,
      enable_abr_for_first_request: !1,
      enable_adaptation: !0,
      enable_appends_on_wait_update_end_failure: !1,
      enable_dvl: !0,
      enable_immediate_down_switch: !1,
      enable_network_manager_error: !1,
      estimate_video_bandwidth_only: !0,
      exclude_prefetch_bandwidth_samples: !0,
      fallback_on_append_error: !1,
      fix_buffer_ahead_priority_strategy: !0,
      fix_initial_segment_non_zero_start_time: !0,
      fix_operation_deferred_promise_lifecycle: !1,
      fix_quick_starter_overhead: !0,
      fix_seek_performance: !1,
      fix_segment_updated_subscription_leak: !1,
      fix_setup_video_duration_on_representation_switch: !0,
      fix_template_duration_artifact_in_manifest: !0,
      generate_mos_segment_buffer_diff: !1,
      get_fetch_body_text_when_response_not_ok: !0,
      get_mpd_least_last_time_range: !0,
      handle_buffered_timerange_update_on_ratechange: !1,
      handle_invalid_webm_duration: !1,
      handle_mpd_retries_outside_oz_mpd_updater: !0,
      ignore_reset_after_seek_if_bufferahead: !1,
      ignore_reset_after_seek_if_bufferahead_liverewind: !1,
      ignore_restrictions_when_all_representations_restricted: !1,
      ignore_time_to_response_start: !1,
      latencymanager_stalempd_edgelatency_sec_on: !1,
      latencymanager_stalled_edgelatency_sec_on: !1,
      lazy_parse_sidx: !1,
      listen_for_canplay_in_buffering_detector: !0,
      live_audio_ibr: !0,
      live_catch_up_only_when_paused: !1,
      live_disable_mpd_updates_when_paused: !0,
      live_gracefully_handle_410: !0,
      live_gracefully_handle_mpd_errors: !0,
      live_gracefully_handle_no_network: !0,
      live_no_segment_when_playhead_is_before_first_segment: !0,
      live_playhead_catch_up: !1,
      live_query_time_in_range: !0,
      load_video_node_on_unload: !0,
      log_appended_segment_info: !1,
      log_extra_events: !1,
      mpd_update_cancel_current_request_tracker: !0,
      ms_promise_for_null: !1,
      no_representation_error_detailed_message: !1,
      null_segment_for_no_buffer_target: !0,
      numerical_range_utils_is_after_range_exclusive: !0,
      overwrite_video_current_time_property: !0,
      pausable_stream_throws_error_when_aborted: !0,
      pdash_download_cursor_catchup_skip_totalbufer: !0,
      pdash_download_cursor_s233348_gate: !0,
      pdash_use_pdash_segmentlocator: !1,
      pdash_wait_on_mpd_refresh_when_error: !0,
      playback_speed_latency_adjustment_user_rate_disable: !0,
      player_emit_mpdparsed_early: !1,
      playhead_manager_buffered_timerange_update_on_timeupdate: !1,
      playhead_manager_buffer_gaps_skip_reverse: !1,
      playhead_manager_clamp_initial_playback_position: !1,
      playhead_manager_handle_buffered_timerange_update_on_timeupdate: !0,
      playhead_manager_handle_timerange_update_on_timeupdate: !0,
      playhead_manager_initial_playback_position_lat_mgr: !1,
      prevent_multiple_successive_representation_switch: !0,
      prevent_unnecessary_seek_stream_anchor_reset: !1,
      remove_src_attr_on_unload: !0,
      reset_catchup_timeout_after_play_sec_on_overwrite: !0,
      respect_initial_representation_on_setup: !1,
      restart_media_streams_on_stream_resumed: !1,
      retry_fetch_on_prefetch_error: !1,
      retry_video_element_error: !0,
      revoke_object_url_on_detach: !1,
      sbm_abort_on_append_new_readable_stream: !1,
      sbm_recursively_waits_for_update_end: !1,
      sbm_wait_for_abort_on_reject: !1,
      sbm_waits_for_update_end: !0,
      seek_ahead_use_native_current_time: !0,
      seek_to_start_quick_starter: !0,
      segment_end_410_response: !0,
      set_source_buffer_append_window_end: !1,
      sidx_parser_memory_optimization: !1,
      skip_playhead_adjustment_before_initial_playback_position: !1,
      skip_timerange_gaps: !0,
      skip_videobuffer_gaps: !1,
      skip_videobuffer_gaps_on_buffer_updated: !0,
      stable_buffered_timeranges_in_observedsourcebufferstate: !0,
      stop_manifest_update_when_static: !0,
      streaming_task_reject_current_stream_deferred: !0,
      stream_interrupted_fuzzy_equals: !1,
      stub_safari_source_buffer_abort: !1,
      suppress_playing_event_while_buffering: !1,
      throw_cancel_operation_abort_failed: !1,
      throw_error_on_clear_buffer_on_seek_failed: !0,
      throw_network_error_during_stream: !1,
      throw_on_non_zero_r_d_mismatch: !0,
      touch_cb_key: !1,
      treat_inline_mpd_xml_empty_string_as_null: !1,
      update_bandwidth_cache_on_sample: !1,
      update_duration_when_init_appended: !0,
      update_live_video_config_on_representation_switch: !0,
      update_media_source_duration: !0,
      use_abr_for_missing_default_representation: !0,
      use_buffering_detector_for_playhead_interruption: !0,
      use_ending_duration_for_gop_multiplier: !0,
      use_live_latency_manager: !1,
      use_loose_manifest_updates: !1,
      use_performance_entry_on_stream_close: !1,
      use_scf_timebased_segments: !1,
      use_scheduler: !0,
      use_sc_timebased_segments: !1,
      use_segment_request_cache: !1,
      use_simple_moving_average_estimator: !1,
      use_stream_end_time_in_segment_locator: !1,
      use_templated_pdash_segments: !0,
      use_ttfb_from_headers: !1,
      xmlparser_use_domparser: !1,
    };
    b = {
      abr_confidence_threshold: 0.9,
      abr_eval_buffer_threshold: 0,
      abr_min_bandwidth_samples: 0,
      abr_prevent_down_switch_buffer_threshold: 11,
      abr_restrict_from_index: 0,
      abr_restrict_to_index: 0,
      append_byte_target_without_range: 1e5,
      appends_per_segment: 6,
      audio_byte_threshold_to_clear_buffer: 0,
      auto_seek_playhead_slack: 0.5,
      bandwidth_boundary_standard_deviation_factor: 1,
      bandwidth_estimator_half_life: 6,
      bandwidth_estimator_outlier_exclusion_factor: 50,
      bandwidth_estimator_std_dev_penalty_factor: 0,
      bandwidth_estimator_variance_penalty_down_factor: 0,
      bandwidth_estimator_variance_penalty_half_life: 0,
      bandwidth_estimator_variance_penalty_up_factor: 0,
      bandwidth_penalty_additional_video_start: 0,
      bandwidth_penalty_per_additional_video: 0,
      bandwidth_response_time_handicap: 0,
      bandwidth_ttfb_samples_to_save: 5,
      buffer_ahead_target: 22,
      buffer_target_constraint_append_succeeded_reward: 0.2,
      buffer_target_constraint_minimum_sec: 2,
      buffer_target_constraint_quota_exceeded_penalty: 0.3,
      byte_count_per_sample: 2e5,
      catchup_timeout_after_buffering_sec: 0,
      catchup_timeout_after_play_sec: 0,
      clear_buffer_on_seek_epsilon_s: 0.33,
      clear_buffer_on_seek_nudge_s: 0,
      default_bandwidth_estimate: 1e6,
      download_time_buffer_delta_penalty_factor: 0,
      dvl_initial_segment_ignore_count: 1,
      dvl_update_interval_ms: 0,
      dynamic_mpd_initial_playback_position_offset_modifier: 4,
      initial_manifest_request_retry_count: 3,
      initial_switch_interval: 0,
      in_play_buffer_overflow_target: 1,
      in_play_buffer_underflow_target: 0.1,
      latencymanager_stalempd_edgelatency_sec: 0,
      latencymanager_stalled_edgelatency_sec: 0,
      live_audio_ibr_bandwidth_percentage: 0.05,
      live_catch_up_fall_behind_threshold: 20,
      live_catch_up_live_head_delta: 6,
      live_max_try_attempts_on_404: 2,
      live_numerical_error_epsilon: 1e-4,
      loop_body_handle_error_interval_ms: 1,
      low_buffer_bandwidth_target_increase_factor: 0,
      low_buffer_bandwidth_target_threshold: 10,
      low_segment_stream_playhead_threshold: 0,
      manifest_update_frequency_ms: 0,
      max_bandwidth_sample_count: 30,
      maximum_bandwidth_sample_bandwidth: 1e8,
      max_start_eme_attempts: 3,
      min_buffer_behind_playhead: 10,
      min_eval_interval: 100,
      minimum_bandwidth_sample_duration: 10,
      minimum_bytes_to_sample_on_close: 25e3,
      minimum_download_additional_buffer_ms: 0,
      min_switch_interval: 100,
      mpd_updater_network_request_timeout_ms: 2e4,
      ms_promise_for_null_ms: 0,
      network_seg_timeout_ms: 0,
      overwrite_livehead_fall_behind_block_threshold: 0,
      overwrite_live_time_range_block_margin: 0,
      partial_playback_buffer_overflow: 0.75,
      paused_stream_segments_count: 2,
      pdash_download_cursor_between_catchups_seg: 0,
      pdash_download_cursor_catchup_threshold_gop_multiplier: 0,
      pdash_download_cursor_catchup_threshold_sec: 0,
      pdash_download_cursor_catchup_tolerance_sec: 0,
      per_stream_duration_target: 0,
      pixels_above_viewport_to_observe: 0,
      pixels_below_viewport_to_observe: 0,
      playback_speed_enabled_delay_sec: 4,
      playback_speed_latency_adjustment_rate: 0,
      playback_speed_latency_slowdown_adjustment_rate: 0,
      playback_speed_latency_speedup_adjustment_rate: 0,
      playback_speed_min_buffer_sec: 1,
      playback_speed_min_duration_sec: 2,
      playback_speed_min_sharpness_factor: 3,
      playback_speed_restore_min_duration_sec: 1,
      playhead_manager_buffered_auto_seek_playhead_slack: 0.5,
      playhead_manager_buffered_is_near_gap_threshold: 1.5,
      playhead_manager_buffered_numerical_error: 0.01,
      playhead_manager_timeupdate_throttle_ms: 1e3,
      playhead_nudge_slack: 0.1,
      pre_start_buffer_ahead_target: 16.924449682236,
      prioritize_by_viewport_static_penalty: 0,
      recent_buffer_in_play_buffer_overflow_target: 3,
      recent_buffer_timeout_ms: 1e4,
      resolution_constraint_factor: 2,
      sbm_read_timeout_ms: 0,
      seconds_to_stream: 10,
      seconds_to_stream_near_bandwidth_boundary: 10,
      seek_ahead_epsilon: 0.05,
      segments_to_stream: 5,
      segments_to_stream_near_bandwidth_boundary: 5,
      segments_to_stream_under_playhead_threshold: 0,
      skip_videobuffer_gaps_max_gap_size_sec: 0,
      stale_mpd_buffer_ahead_target: 0,
      start_buffer_underflow_target: 0.1,
      stream_interrupt_buffer_target_timeout_ms: 1e4,
      stream_interrupt_check_mpd_stale_count_threshold: 3,
      stream_interrupt_in_play_buffer_overflow_target: 1,
      tagged_time_range_per_append_throttle: 0,
      timeline_offset_threshold: 10,
      time_to_first_byte_estimate_half_life_ms: 500,
      time_to_first_byte_ignore_above_threshold_ms: 0,
      video_byte_threshold_to_clear_buffer: 0,
    };
    c = {
      block_representation_status_codes_json: "[]",
      cdn_experiment_id: "",
      stream_types_eligible_for_partial_playback: "",
    };
    e.exports = { defaultBools: a, defaultNumbers: b, defaultStrings: c };
  },
  null
);
__d(
  "oz-player/configs/OzPlayerConfig",
  ["oz-player/configs/OzPlayerConfigDefaults"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        a === void 0 && (a = {}), (this.$1 = a);
      }
      var b = a.prototype;
      b.getBool = function (a) {
        return typeof this.$1[a] === "boolean"
          ? this.$1[a]
          : d("oz-player/configs/OzPlayerConfigDefaults").defaultBools[a];
      };
      b.getNumber = function (a) {
        return typeof this.$1[a] === "number"
          ? this.$1[a]
          : d("oz-player/configs/OzPlayerConfigDefaults").defaultNumbers[a];
      };
      b.getString = function (a) {
        return typeof this.$1[a] === "string"
          ? this.$1[a]
          : d("oz-player/configs/OzPlayerConfigDefaults").defaultStrings[a];
      };
      b.getLegacyConfig = function () {
        var a = this;
        return {
          getBool: function (b, c) {
            return typeof a.$1[b] === "boolean"
              ? a.$1[b]
              : (b = d("oz-player/configs/OzPlayerConfigDefaults").defaultBools[
                  b
                ]) != null
              ? b
              : c;
          },
          getNumber: function (b, c) {
            return typeof a.$1[b] === "number"
              ? a.$1[b]
              : (b = d("oz-player/configs/OzPlayerConfigDefaults")
                  .defaultNumbers[b]) != null
              ? b
              : c;
          },
          getString: function (b, c) {
            return typeof a.$1[b] === "string"
              ? a.$1[b]
              : (b = d("oz-player/configs/OzPlayerConfigDefaults")
                  .defaultStrings[b]) != null
              ? b
              : c;
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
  "oz-player/configs/OzConfigUtils",
  ["oz-player/configs/OzPlayerConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new (c("oz-player/configs/OzPlayerConfig"))();
    a = function (a) {
      return {
        getBool: function (b) {
          return a.getBool(b, h.getBool(b));
        },
        getNumber: function (b) {
          return a.getNumber(b, h.getNumber(b));
        },
        getString: function (b) {
          return a.getString(b, h.getString(b));
        },
        getLegacyConfig: function () {
          return a;
        },
      };
    };
    g.provideConfigWithDefaults = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationEnginePartsImplFunction",
  [
    "CometThrottle",
    "ConstUriUtils",
    "NetworkStatus",
    "OzActiveActiveFailoverNetworkRequestStreamHandler",
    "OzCDNSignedQueryParams",
    "OzCustomParsers",
    "OzCustomRepresentationParsers",
    "OzDashPrefetchCache",
    "OzOneSemanticHandler",
    "OzOneSemanticHandlerUtils",
    "OzPredictedSegmentTimelineParser",
    "OzVideoLiveTraceNetworkRequestStreamHandler",
    "Promise",
    "TimeRanges",
    "VideoPlayerConnectionQuality",
    "VideoPlayerOzImplementationEnginePartsImplUtils",
    "cr:1836099",
    "cr:1871597",
    "cr:1947728",
    "cr:1993377",
    "cr:72",
    "cr:9958",
    "getOzPlaybackRestrictions",
    "gkx",
    "orEmptyArray",
    "oz-player/configs/OzConfigUtils",
    "oz-player/networks/OzBandwidthEstimator",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = null;
    b("cr:1836099") &&
      ((h = b("cr:1836099").getHiveConfig()), (i = b("cr:1836099").HiveOz));
    function a(a) {
      var e = a.OzPlayerClass,
        f = a.callChain,
        g = a.destroyOzPlayerPartsRef,
        j = a.engineDebugAPI,
        k = a.engineExtrasAPI,
        l = a.getCaptionsInfo,
        m = a.getLatencyLevelManager,
        n = a.getOzQuickStarter,
        o = a.getVideoLiveTrace,
        p = a.handleCaptionsInfoChange,
        q = a.handleFatalImplementationError,
        r = a.hivePluginRef,
        s = a.initialProps,
        t = a.logger,
        u = a.machine,
        v = a.overrideOzRequestImplementationRef,
        w = a.ozBufferingDetectorRef,
        x = a.ozPlayerRef,
        y = a.p2pSessionLoggerRef,
        z = a.playerVersion,
        A = a.resolvedVideoInfo,
        B = a.videoElement;
      a = a.videoElementAPI;
      var C = { current: !1 },
        D = { current: null },
        E = { current: null };
      g.current = function (a) {
        var b = w.current;
        b && ((w.current = null), b.destroy());
        b = x.current;
        b &&
          (j && j.handleOzPlayerChanged(null),
          (x.current = null),
          b.destroy([].concat(a, ["destroyOzPlayerParts"]).join(":")));
        b = D.current;
        b && ((D.current = null), b());
        E.current && (E.current = null);
        $();
        r.current && (r.current = null);
        y.current && (y.current = null);
        v.current && (v.current = null);
      };
      g = A.accessToken;
      var F = A.audioOnly,
        G = A.experimentationConfig,
        H = A.graphQLVideoDRMInfo,
        I = A.graphQLVideoP2PSettings,
        J = A.manifestUrl,
        K = A.manifestXmlStringResolved,
        L = A.minQualityPreference,
        M = A.videoFBID,
        N = s.disableLogging ? null : A.VideoPlayerShakaPerformanceLoggerClass;
      A = n();
      var O = Boolean(
          s.loggingMetaData.coreVideoPlayerMetaData.isLiveStreaming
        ),
        P = function (a) {
          return k.getEstimatedBandwidth();
        };
      n = function () {
        return k.getApproximateFBLSToPlayerDisplayLatency();
      };
      var Q = function () {
          G.setContext(
            "connection_quality",
            d("VideoPlayerConnectionQuality").evaluate(function () {
              return P(O);
            })
          );
        },
        R = function () {
          var a = G.getNumber(
            "connection_quality_context_throttle_frequency",
            0
          );
          if (a === 0) return null;
          var b = c("CometThrottle")(Q, a),
            d = c("oz-player/networks/OzBandwidthEstimator").addListener(
              "bandwidth_sampled",
              b
            );
          return function () {
            d.remove(), b.cancel();
          };
        };
      D.current = R();
      R = d(
        "VideoPlayerOzImplementationEnginePartsImplUtils"
      ).createOzDrmProviders({
        accessToken: g,
        graphQLVideoDRMInfo: H,
        videoFBID: M,
      });
      H = function () {
        return u.getCurrentState().controlledState.dimensions;
      };
      g = d(
        "VideoPlayerOzImplementationEnginePartsImplUtils"
      ).createOzPerfLoggerProviders({
        VideoPlayerShakaPerformanceLoggerClass: N,
        accessToken: g,
        disableLogging: s.disableLogging,
        getApproximateFBLSToPlayerDisplayLatency: n,
        getBandwidthEstimate: P,
        getPlayerDimensions: H,
        playbackIsLiveStreaming: O,
        playerInstanceCount:
          s.loggingMetaData.playerImplementationInstanceCountRef.current,
        playerInstanceKey: s.loggingMetaData.instanceKey,
        playerSuborigin: s.loggingMetaData.coreVideoPlayerMetaData.subOrigin,
        playerVersion: z,
        videoElement: B,
        videoFBID: M,
      });
      E.current == null && (E.current = new (c("OzCDNSignedQueryParams"))());
      if (I && M != null) {
        var S;
        n = I.config;
        z = I.hive_initialization_options;
        S = y.current =
          (S = y.current) != null
            ? S
            : b("cr:1871597")
            ? new (b("cr:1871597"))(M)
            : null;
        try {
          if (!r.current) {
            S && S.logEnableP2P();
            M = function (a) {
              y.current && y.current.logHiveError(a);
            };
            var T = function (b) {
                var a = x.current;
                a && a.injectExternalDebugEvent("P2PTech", b.tech);
                y.current && y.current.logSessionActive(b.tech);
              },
              U = function (b) {
                var a = x.current;
                a && a.injectExternalDebugEvent("P2PStats", b);
                y.current && y.current.setCurrentHiveStats(b);
              },
              V = function (a) {
                a = a.state;
                var b = u.getCurrentState();
                b = b.controlledState;
                b = b.playbackState;
                r.current &&
                  a === "CLOSED" &&
                  ($(),
                  Z &&
                    b !== "ended" &&
                    (C.current && J != null
                      ? Z.updatePlayerRunTimeConfig({ manifestUrl: J })
                      : Z.load(J)));
              };
            U = {
              HiveJS: {
                maximumTrimming: { dash: void 0, hls: void 0 },
                renderStatsCallback: U,
              },
              HiveJava: {},
              debugLevel: "off",
              hiveTechOrder: ["HiveJS", "StatsJS", "HiveJava"],
              onActiveSession: T,
              onError: M,
              onSessionStateChange: V,
              telemetryId: S ? S.getSessionID() : 0,
            };
            T = G.getNumber("hive_maximum_trimming_seconds", 0);
            T > 0 && (U.HiveJS.maximumTrimming = { dash: T, hls: T });
            if (z) {
              M = z.HiveJava;
              V = z.debugLevel;
              T = z.hiveTechOrder;
              U.hiveTechOrder = T.slice();
              U.HiveJava = M ? { minVersion: M.minVersion } : {};
              U.debugLevel = (z = V) != null ? z : U.debugLevel;
            }
            c("gkx")("2047688") &&
              (U = babelHelpers["extends"]({}, U, {
                testId: "fb_video_player_p2p_jest_e2e",
              }));
            if (
              n.disable_hivejava_for_livevc === !0 &&
              J != null &&
              J.startsWith("https://livestream-lookaside")
            ) {
              T = U.hiveTechOrder.indexOf("HiveJava");
              T >= 0 && U.hiveTechOrder.splice(T, 1);
            }
            if (h) h.SensitiveInfo.restrictedConnectivityInfo = !0;
            else
              throw c("unrecoverableViolation")(
                "HiveConfig does not exist",
                "comet_video_player"
              );
            if (i) r.current = new i(U);
            else
              throw c("unrecoverableViolation")(
                "HiveOz does not exist",
                "comet_video_player"
              );
            if (r.current) {
              if (!b("cr:1947728"))
                throw c("unrecoverableViolation")(
                  "OzConfigurableRequestImplementation does not exist",
                  "comet_video_player"
                );
              v.current = b("cr:1947728")(r.current.getRequestImplementation());
            }
          }
        } catch (a) {
          S && S.logError(a), $();
        }
      }
      M = [
        new (c("OzVideoLiveTraceNetworkRequestStreamHandler"))(function (
          a,
          b,
          c
        ) {
          var d = o();
          d != null && d.handleHeadersAndBody(a, b, c);
        },
        G.getBool("live_trace_parse_emsg", !1)),
      ];
      c("OzActiveActiveFailoverNetworkRequestStreamHandler") &&
        M.push(
          new (c("OzActiveActiveFailoverNetworkRequestStreamHandler"))(
            function (a, b) {
              if (c("gkx")("1664503")) {
                var e = x.current,
                  f = a.headers;
                if (e && f) {
                  f = parseInt(f.get("x-fb-video-replica"), 10);
                  t.logVPLEvent({
                    eventType: "replica_switch",
                    logDataOverrides: {
                      error_code: a.status.toString(),
                      error_user_info: JSON.stringify({
                        failover_response_code: a.status.toString(),
                        replica: f,
                        url: b,
                      }),
                    },
                    state: u.getCurrentState(),
                  });
                  a = e.getMpdUrl();
                  if (a != null) {
                    b = d("ConstUriUtils").getUri(a);
                    if (b) {
                      a = b.addQueryParam("replica", f);
                      a &&
                        ($(),
                        e.updatePlayerRunTimeConfig({
                          manifestUrl: a.toString(),
                        }));
                    }
                  }
                }
              }
            }
          )
        );
      var W = s.expiredVideoUrlRefreshHandler,
        X = s.loggingMetaData.instanceKey;
      V = c("gkx")("221");
      z = c("gkx")("1836350") || c("gkx")("1993562");
      var Y = O ? V : z;
      z = {
        audioOnly: F,
        bufferEndLimit: s.bufferEndLimit != null ? s.bufferEndLimit : null,
        bufferingDetector: w.current,
        config: d("oz-player/configs/OzConfigUtils").provideConfigWithDefaults(
          G
        ),
        customParsers: d("OzCustomParsers").createOzCustomParser(),
        customRepresentationParsers: d(
          "OzCustomRepresentationParsers"
        ).createOzCustomRepresentationParsers({ ozConfig: G }),
        customSegmentTimelineParser: G.getBool("enable_predictive_dash", !1)
          ? new (c("OzPredictedSegmentTimelineParser"))()
          : void 0,
        debugCreateInitiator: []
          .concat(f, ["proceedWithOzPlayerCreation"])
          .join(":"),
        drmProviders: R,
        getCustomRequestParametersForURI: function (a) {
          var b = a.getQueryData(),
            e;
          if (O) {
            e = {};
            var f = d(
              "VideoPlayerOzImplementationEnginePartsImplUtils"
            ).getOsParamValue(a);
            f !== null &&
              f !== "" &&
              (e = babelHelpers["extends"]({}, e, { os_param: f }));
            if (a.getPath().includes(".m4v")) {
              f = d(
                "VideoPlayerOzImplementationEnginePartsImplUtils"
              ).getTestQueryParam(a);
              if (
                f !== null &&
                f &&
                f.paramName !== "" &&
                f.paramValue !== ""
              ) {
                var g;
                e = babelHelpers["extends"](
                  {},
                  e,
                  ((g = {}), (g[f.paramName] = f.paramValue), g)
                );
              }
              f = d(
                "VideoPlayerOzImplementationEnginePartsImplUtils"
              ).getTestRndQueryParamValue(a);
              f !== null &&
                f !== "" &&
                (e = babelHelpers["extends"]({}, e, { _nc_rnd: f }));
              G.getBool("live_video_send_player_id_in_requests", !1) &&
                (e = babelHelpers["extends"]({}, e, { _nc_psid: X }));
              if (G.getBool("server_side_abr_send_client_estimates", !1)) {
                g = c(
                  "oz-player/networks/OzBandwidthEstimator"
                ).getBandwidthDiagnostics(G);
                g &&
                  (e = babelHelpers["extends"]({}, e, {
                    _nc_bwe: g.bandwidthEstimate,
                    _nc_bwe_std: g.bandwidthStandardDeviation,
                    _nc_ttfb: g.timeToFirstByteMsEstimate,
                    _nc_ttfb_std: g.timeToFirstByteMsStandardDeviation,
                  }));
                f = x.current;
                g = f == null ? void 0 : f.getCurrentVideoRepresentation();
                g &&
                  (e = babelHelpers["extends"]({}, e, {
                    _nc_abr_bitrate: g.getBandwidth(),
                    _nc_abr_qlabel: g.getQualityLabel(),
                  }));
              }
            }
            c("gkx")("2047") &&
              (e = babelHelpers["extends"]({}, e, { _nc_wclk_ms: Date.now() }));
          }
          O &&
            c("gkx")("1998922") &&
            (e = babelHelpers["extends"]({}, e, { _nc_nc: "1" }));
          c("gkx")("1836350") &&
            b.uss != null &&
            b.odm != null &&
            (e = babelHelpers["extends"]({}, e, { manual_redirect: "1" }));
          if (Y) {
            f = E.current;
            if (f != null) {
              g = a.getDomain() + a.getPath();
              b = f.get(g);
              if (b != null)
                for (var h in b) {
                  e = babelHelpers["extends"](
                    {},
                    e,
                    ((a = {}), (a[h] = b[h]), a)
                  );
                }
            }
          }
          return e;
        },
        getOverrideOzRequestImplementation: function () {
          return v.current;
        },
        getShouldIncludeCredentials: G.getBool(
          "use_oz_credentials_provider",
          !1
        )
          ? d("VideoPlayerOzImplementationEnginePartsImplUtils")
              .checkShouldIncludeCredentials
          : null,
        getVideoDimensions: H,
        initialPlaybackPositionForDynamicMpd: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).calculateInitialPlaybackPositionForDynamicMpd(
          G,
          (n = s.initialDesiredLatencyMs) != null ? n : 0
        ),
        initialRepresentationIDs: c("orEmptyArray")(s.initialRepresentationIds),
        liveheadFallBehindBlockMargin: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).calculateLiveheadFallBehindBlockMargin(
          G,
          (T = s.initialDesiredLatencyMs) != null ? T : 0
        ),
        liveheadFallBehindBlockThreshold: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).calculateLiveheadFallBehindBlockThreshold(
          G,
          (U = s.initialDesiredLatencyMs) != null ? U : 0,
          (S = s.initialLatencyToleranceMs) != null ? S : 0
        ),
        loggerConfig: {
          isOzDevConsoleEnabled: c("gkx")("722076"),
          observedOperationLoggers:
            A && N && N.shouldInitialize()
              ? A.getObservedOperationLoggers()
              : [],
          perfLoggerProviders: g,
        },
        mpdUrl: J,
        networkRequestStreamHandlers: M,
        networkRequestStreamRetryHandler: Y
          ? function (a, d, e) {
              var f = a.headers,
                g = f == null ? void 0 : f.get("x-fb-url-refresh"),
                h = E.current;
              if (a.status === 403 && h != null) {
                t.logVPLEvent({
                  eventType: "video_cdn_url_expired",
                  logDataOverrides: {
                    error_user_info: JSON.stringify({ expired_url: e }),
                  },
                  state: u.getCurrentState(),
                });
                f = null;
                g != null && b("cr:1993377") != null
                  ? (f = b("cr:1993377")(g))
                  : W != null && (f = W(e));
                if (f != null)
                  return f
                    .then(function (a) {
                      var b;
                      b = (b = a.refreshedUrl) != null ? b : null;
                      a = (a = a.reason) != null ? a : null;
                      if (b != null) {
                        t.logVPLEvent({
                          eventType: "video_cdn_url_refreshed",
                          logDataOverrides: {
                            error_user_info: JSON.stringify({
                              refreshed_url: b,
                            }),
                          },
                          state: u.getCurrentState(),
                        });
                        h.update(b);
                        return d();
                      } else {
                        throw c("unrecoverableViolation")(
                          "expiredVideoUrlRefreshHandler refreshed url should not be " +
                            ((b == null ? void 0 : b.length) === 0
                              ? "an empty string"
                              : "null") +
                            ", reason: " +
                            ((b = a) != null ? b : "null"),
                          "comet_video_player"
                        );
                      }
                    })
                    ["catch"](function (a) {
                      t.logVPLEvent({
                        eventType: "video_cdn_url_refresh_error",
                        logDataOverrides: {
                          error_description: a.message,
                          error_user_info: JSON.stringify({
                            expired_url: e,
                            refresh_url: g,
                          }),
                        },
                        state: u.getCurrentState(),
                      });
                      throw a;
                    });
              }
              return b("Promise").resolve(a);
            }
          : null,
        prefetchCache: G.getBool("use_prefetch_cache", !1)
          ? new (c("OzDashPrefetchCache"))()
          : null,
        rawMpdXml: r.current ? void 0 : K,
        seekHandler: c("gkx")("1482680")
          ? function (a) {
              var b = B.currentTime;
              u.dispatch({
                payload: { seekSourcePosition: b },
                type: "implementation_seek_requested",
              });
              B.currentTime = a;
            }
          : null,
        setCustomFetchStreamLoggingAttributes: function (a, b, e) {
          a.setIsOnline(c("NetworkStatus").isOnline());
          if (c("gkx")("951")) {
            var f = e == null ? void 0 : e.headers;
            if (f)
              try {
                a.setProxyStatusHeader(f.get("proxy-status")),
                  a.setDynamicStatusHeader(f.get("x-fb-dynamic-status"));
              } catch (a) {}
          }
          d(
            "OzOneSemanticHandlerUtils"
          ).setOneSemanticFetchStreamLoggingAttributes(a, b, e);
        },
        startTimeStamp: G.getBool("fix_start_timestamp", !1)
          ? s.startTimestamp
          : 0,
        videoAbrManagerFactory: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).getVideoAbrManagerFactory(),
        videoNodeOrQuickStarter: (V = A) != null ? V : B,
        videoPlaybackRestrictions: c("getOzPlaybackRestrictions")(L, G),
      };
      var Z = new e(z);
      x.current = Z;
      w.current &&
        w.current.attachPerfLoggerProvider(Z.getPerfLoggerProvider());
      F = s.loggingMetaData.playerImplementationInstanceCountRef;
      F.current++;
      Z.onError(function (a) {
        N && N.flushQueuedLogs(), q(a, "oz_player_error");
      });
      Z.addListener("switchVideoRepresentation", function () {
        u.dispatch({
          payload: { targetVideoQuality: k.getCurrentTargetVideoQuality() },
          type: "representation_changed",
        });
      });
      Z.addListener("manifestFetchError", function (a) {
        d("OzOneSemanticHandler").handleManifestFetchErrorEvent(G, a);
      });
      Z.addListener("streamError", function (a) {
        return d("OzOneSemanticHandler").handleStreamErrorEvent(G, a);
      });
      Z.addListener("streamInterruptAt", function () {
        u.dispatch({ type: "stream_interrupted" });
      });
      Z.addListener("streamResumedAt", function () {
        u.dispatch({ type: "stream_resumed" });
      });
      Z.addListener("streamEnd", function () {
        $(), u.dispatch({ type: "stream_ended" });
      });
      A == null
        ? (Z.addListener("enterBuffering", function (a) {
            if (c("gkx")("1235655")) return;
            u.dispatch({
              payload: { bufferingType: a },
              type: "buffering_begin_requested",
            });
          }),
          Z.addListener("leaveBuffering", function () {
            u.dispatch({ type: "buffering_end_requested" });
          }))
        : d(
            "VideoPlayerOzImplementationEnginePartsImplUtils"
          ).createOzBufferingDetector(B, a, G, u, w);
      j && j.handleOzPlayerChanged(Z);
      var aa = function () {
          var a = l();
          a = {
            inbandCaptionsAutogeneratedFromManifest:
              k.getInbandCaptionsAutogeneratedFromManifest(),
            inbandCaptionsExpectedFromManifest:
              k.getInbandCaptionsExpectedFromManifest(),
            inbandCaptionsExpectedFromProps:
              a == null ? void 0 : a.inbandCaptionsExpectedFromProps,
            sideLoadCaptionsExpectedFromProps:
              a == null ? void 0 : a.sideLoadCaptionsExpectedFromProps,
            sideLoadCaptionsUrlFromProps:
              a == null ? void 0 : a.sideLoadCaptionsUrlFromProps,
          };
          var b = u.getCurrentState();
          b = b.controlledState;
          (a.inbandCaptionsExpectedFromManifest !== b.captionsLoaded ||
            a.inbandCaptionsAutogeneratedFromManifest !==
              b.inbandCaptionsAutogenerated) &&
            p(a);
        },
        ba = function (a, b) {
          a = a.getCustomField("timescale") || 0;
          u.dispatch({
            payload: { timescale: a, videoBytes: b },
            type: "cea608_bytes_received",
          });
        },
        ca = function () {
          var a = k.getVideoRepresentations();
          if (a != null && a.length > 0) {
            a = a[0].getTimeRanges();
            if (a != null && a.length > 0) {
              var b = a[0].startTime;
              a = Math.max(
                a[a.length - 1].endTime -
                  G.getNumber("live_rewind_seek_to_live_delta", 8),
                b
              );
              u.dispatch({
                payload: {
                  seekableRanges: new (c("TimeRanges"))([
                    { endTime: a, startTime: b },
                  ]),
                },
                type: "seekable_ranges_changed",
              });
            }
          }
        },
        da = function () {
          var a = Z.getMpd();
          if (!a) return;
          a = a.getCustomField("loapStreamType");
          var b = o();
          typeof a === "number" && b != null && b.setStreamType(a);
        },
        ea = function (a) {
          var d = function () {
            ca(), aa(), da();
          };
          a.addListener("updated", d);
          c("gkx")("1656434") && d();
          a = b("cr:9958") != null ? b("cr:9958")(u) : null;
          Z.updatePlayerRunTimeConfig({
            audioStreamDataHandler: a,
            videoStreamDataHandler: ba,
          });
          if (k.isPredictiveDash()) {
            G.setContext("streaming_implementation", "pdash");
            d = m();
            d && d.maybeUpdateLatencyLevel();
          }
          a = l();
          p({
            inbandCaptionsAutogeneratedFromManifest:
              k.getInbandCaptionsAutogeneratedFromManifest(),
            inbandCaptionsExpectedFromManifest:
              k.getInbandCaptionsExpectedFromManifest(),
            inbandCaptionsExpectedFromProps:
              a == null ? void 0 : a.inbandCaptionsExpectedFromProps,
            sideLoadCaptionsExpectedFromProps:
              a == null ? void 0 : a.sideLoadCaptionsExpectedFromProps,
            sideLoadCaptionsUrlFromProps:
              a == null ? void 0 : a.sideLoadCaptionsUrlFromProps,
          });
        };
      Z.addListener("mpdParsed", function (a) {
        k.isPredictiveDash() &&
          G.setContext("streaming_implementation", "pdash");
      });
      Z.addListener("mpdReady", function (a) {
        C.current = !0;
        ea(a);
        u.dispatch({
          payload: {
            availableQualities: k.getAvailableVideoQualities(),
            selectedVideoQuality: k.getUserSelectedVideoQuality(),
            targetVideoQuality: k.getCurrentTargetVideoQuality(),
            videoProjection:
              (a = k.getVideoProjectionType()) != null ? a : null,
          },
          type: "implementation_engine_initialized",
        });
      });
      function $() {
        var a = r.current,
          b = y.current;
        if (a != null) {
          r.current = null;
          y.current = null;
          v.current = null;
          try {
            a && a.closeHiveSession(), b && b.logEndSession();
          } catch (a) {
            b && b.logHiveError(a);
          }
        }
      }
      f = r.current;
      R = I == null ? void 0 : I.ticket;
      if (J != null && I && f && R != null) {
        H = Z.getPerfLoggerProvider();
        H && H.setIsP2pPlayback(!0);
        n = J.substring(J.indexOf("?"));
        T = f.initSession(R + n, Z, B);
        T.then(function (a) {
          var b = a.manifest;
          a = a.tech;
          var c = y.current;
          b !== J && c && c.logManifestMismatch(b, J);
          c && c.logSessionInit(a, b);
          t.setAdditionalLogData("is_p2p_playback", !0);
          Z.load(b);
        })["catch"](function (a) {
          var b = y.current;
          b && b.logError(a);
          $();
          Z.load(J);
        });
      } else t.setAdditionalLogData("is_p2p_playback", !1), Z.load(J);
    }
    g.proceedWithOzPlayerCreation = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationLatencyLevelManager",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$2 = "normal"), (this.$4 = null), (this.$1 = a), (this.$3 = b);
      }
      var b = a.prototype;
      b.updatePlayerFormat = function (a) {
        this.$4 !== a && ((this.$4 = a), this.maybeUpdateLatencyLevel());
      };
      b.maybeUpdateLatencyLevel = function () {
        var a = this.$5();
        a !== this.$2 &&
          ((this.$2 = a),
          this.$3.dispatch({
            payload: { latencyLevel: a },
            type: "implementation_set_latency_level_requested",
          }));
      };
      b.$5 = function () {
        var a = [];
        try {
          a = JSON.parse(
            this.$1.getString("player_formats_for_low_latency", "[]")
          );
        } catch (a) {}
        return a.includes(this.$4) ? "low" : "normal";
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerOzQuickStarterUtils",
  ["VideoDashPrefetchCache"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, d) {
      b = c("VideoDashPrefetchCache").createQueryStringURL(b);
      b = c("VideoDashPrefetchCache").getCacheValue(b);
      if (!b) {
        a.push(d);
        return null;
      }
      return b;
    }
    function i(a, b) {
      return a.find(function (a) {
        return a.segmentType === b;
      });
    }
    function a(a, b, c) {
      var d = i(b, "init");
      b = i(b, "data");
      if (d) {
        var e = h(a, d, c + " init");
        if (!e) return null;
        var f;
        b && (f = h(a, b, c + " data"));
        return {
          initializationPromise: e,
          mimeCodec: d.mimeCodec,
          representationID: d.representationID,
          segmentPromise: f,
        };
      }
      return null;
    }
    g.createPrefetchDataForTrack = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationEngine",
  [
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "VideoPlayerImplementationErrors",
    "VideoPlayerImplementationLoadSequenceManager",
    "VideoPlayerODS",
    "VideoPlayerOzImplementationEngineExtrasAPI",
    "VideoPlayerOzImplementationEnginePartsImplFunction",
    "VideoPlayerOzImplementationEnginePartsImplUtils",
    "VideoPlayerOzImplementationLatencyLevelManager",
    "VideoPlayerOzQuickStarterUtils",
    "cr:10753",
    "cr:1473549",
    "cr:1494460",
    "cr:1534629",
    "cr:72",
    "emptyFunction",
    "gkx",
    "oz-player/utils/OzError",
    "promiseDone",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = !1;
    var h = c("emptyFunction");
    function i(a, b) {
      if (a instanceof c("oz-player/utils/OzError")) {
        var e = a,
          f = e.getExtra();
        e = {
          createdTimestamp: Date.now(),
          errorCode: f.code,
          errorDescription: e.getDescription(),
          errorLocation: b,
          errorName: e.getType(),
          stack: e.stack,
          url: f.url,
        };
        return e;
      } else
        return d(
          "VideoPlayerImplementationErrors"
        ).createVideoPlayerErrorFromGenericError("OZ_JAVASCRIPT_NATIVE", a, b);
    }
    function a(a) {
      var e = a.debugLogId,
        f = a.handleFatalError,
        g = a.initialProps;
      a = a.setExposedStateInReact;
      var j = { current: null },
        k = { current: null },
        l = { current: null },
        m = { current: null },
        n = { current: null },
        o = { current: null },
        p = { current: null },
        q = { current: null },
        r = { current: null },
        s = { current: null },
        t = { current: null },
        u = { current: null },
        v = { current: null },
        w = { current: null };
      function x() {
        var a;
        return (a = q.current) != null ? a : null;
      }
      function y() {
        var a;
        return (a = p.current) != null ? a : null;
      }
      function z() {
        return o.current;
      }
      function A() {
        var a;
        return (a =
          (a = k.current) == null ? void 0 : a.experimentationConfig) != null
          ? a
          : null;
      }
      function B() {
        var a;
        return (a = Z.current) != null ? a : null;
      }
      function C() {
        var a;
        return (a = w.current) != null ? a : null;
      }
      var D;
      b("cr:1473549") && (D = new (b("cr:1473549"))());
      var E = "comet_oz",
        F = function (a, b) {
          return b.manifestXmlStringInitial !== null
            ? a.manifestXmlStringInitial !== b.manifestXmlStringInitial
            : a.manifestUrl !== b.manifestUrl;
        },
        G = function (a, b) {
          return a.videoFBID !== b.videoFBID;
        },
        H = function (a) {
          return a.getBool("use_full_player_if_cached", !1) && b("cr:1534629")
            ? b("cr:1534629")().getModuleIfRequireable()
            : null;
        },
        I = function (a, b, c) {
          b != null
            ? (k.current = babelHelpers["extends"]({}, a, {
                manifestXmlStringResolved: b,
              }))
            : (k.current = a),
            Y.dispatch({
              type: "implementation_engine_oz_manifest_downloading",
            }),
            (n.current = H(a.experimentationConfig)),
            M(n.current, [].concat(c, ["proceedWithOzManifestDownloading"]));
        },
        J = function (a) {
          var b,
            e = a.manifestUrl,
            f = a.manifest;
          b = {
            VideoPlayerShakaPerformanceLoggerClass:
              a.VideoPlayerShakaPerformanceLoggerClass,
            accessToken: a.loggingMetaData.accessToken,
            audioOnly: a.audioOnly,
            experimentationConfig: a.experimentationConfig,
            graphQLVideoDRMInfo: a.graphQLVideoDRMInfo,
            graphQLVideoP2PSettings: a.graphQLVideoP2PSettings,
            manifestUrl: (b = e) != null ? b : null,
            manifestXmlStringInitial: (b = f) != null ? b : null,
            minQualityPreference: a.minQualityPreference,
            ozQuickStarterData: a.ozQuickStarterData,
            videoFBID: a.videoFBID,
          };
          var g = j.current;
          w.current == null &&
            (w.current = new (c(
              "VideoPlayerOzImplementationLatencyLevelManager"
            ))(a.experimentationConfig, Y));
          w.current.updatePlayerFormat(
            (a = a.loggingMetaData.coreVideoPlayerMetaData.playerFormat) != null
              ? a
              : null
          );
          a = !1;
          if (g == null) a = !0;
          else if (g != null && !G(b, g) && F(b, g)) {
            var h = 14;
            d("VideoPlayerODS").bumpEntityKey(
              "OzImplementation",
              "manifest_reloaded",
              h
            );
            a = !1;
          } else if (g != null && G(b, g))
            throw c("unrecoverableViolation")(
              "videoFBID changed after player initialization",
              "comet_video_player"
            );
          if (!a) return !1;
          e = b.manifestUrl;
          f = b.manifestXmlStringInitial;
          if (f == null && e == null)
            throw c("unrecoverableViolation")(
              "Empty manifestXmlStringInitial and manifestUrl",
              "comet_video_player"
            );
          j.current = b;
          I(b, f, [
            "handleVideoInfoChangeForOzImplementation",
            "downloadManifestInOz",
          ]);
          return !0;
        },
        K = function (a, b, e, f, g) {
          var h = function (b) {
              if (m.current !== a) return;
              n.current = b;
              M(b, [].concat(g, ["handleOzPlayerModuleLoadSuccess"]));
            },
            i = function (b) {
              if (m.current !== a) return;
              W(b, "oz_player_module_load_failed");
            };
          m.current = a;
          var j = f.experimentationConfig,
            k = f.ozQuickStarterData;
          if (
            o.current == null &&
            b != null &&
            f != null &&
            (!j.getBool("prevent_unnecessary_quickstarter_instance", !1) ||
              k != null)
          ) {
            j = new b(e, f.experimentationConfig);
            c("gkx")("1494163") && (o.current = j);
            if (k != null) {
              b = [];
              e = d(
                "VideoPlayerOzQuickStarterUtils"
              ).createPrefetchDataForTrack(b, k.video, "video");
              if (e) {
                j.addPrefetchTrack(e);
                f = d(
                  "VideoPlayerOzQuickStarterUtils"
                ).createPrefetchDataForTrack(b, k.audio, "audio");
                f && j.addPrefetchTrack(f);
              }
            }
            j.addListener("streamEnd", function () {
              Y.dispatch({ type: "stream_ended" });
            });
            c("gkx")("1494163") || (o.current = j);
          }
          c("promiseDone")(a, h, i);
        },
        L = function (a) {
          a = d(
            "VideoPlayerImplementationEngineVideoElementAPI"
          ).createVideoPlayerImplementationEngineVideoElementAPI(a);
          Z.current = a;
          return a;
        },
        M = function (a, c) {
          var e = T(),
            f = k.current;
          if (e == null || f == null) return;
          var g = L(e),
            h = f.experimentationConfig;
          a
            ? N(
                a,
                e,
                g,
                f,
                [].concat(c, [
                  "proceedWithResolvedVideoInfo",
                  "OzPlayerModuleFromRef",
                ])
              )
            : b("cr:1494460")
            ? N(
                b("cr:1494460")(),
                e,
                g,
                f,
                [].concat(c, [
                  "proceedWithResolvedVideoInfo",
                  "VideoPlayerOzPlayerModuleLoaderSync",
                ])
              )
            : b("cr:1534629")
            ? (h.getBool(
                "instantiate_buffering_detector_before_quick_starter",
                !1
              ) &&
                d(
                  "VideoPlayerOzImplementationEnginePartsImplUtils"
                ).createOzBufferingDetector(
                  e,
                  g,
                  f.experimentationConfig,
                  Y,
                  q
                ),
              K(
                b("cr:1534629")().load(),
                b("cr:10753"),
                e,
                f,
                [].concat(c, [
                  "proceedWithResolvedVideoInfo",
                  "VideoPlayerOzPlayerModuleLoaderAsync",
                ])
              ))
            : W(
                new Error("Neither of OzPlayerModuleLoader is available."),
                "oz_player_module_loaders_missing"
              );
        },
        N = function (a, b, e, f, h) {
          try {
            var i = {
              OzPlayerClass: a,
              callChain: [].concat(h, [
                "proceedWithResolvedVideoInfoAndOzPlayerModuleSync",
              ]),
              destroyOzPlayerPartsRef: v,
              engineDebugAPI: D,
              engineExtrasAPI: R,
              getCaptionsInfo: S,
              getLatencyLevelManager: C,
              getOzQuickStarter: z,
              getVideoLiveTrace: U,
              handleCaptionsInfoChange: V,
              handleFatalImplementationError: W,
              initialProps: g,
              logger: X,
              machine: Y,
              ozBufferingDetectorRef: q,
              playerVersion: E,
              resolvedVideoInfo: f,
              videoElement: b,
              videoElementAPI: e,
            };
            a = A();
            h = g.loadSequence;
            a && a.getNumber("load_sequence_max_delay_ms", 0) > 0 && h != null
              ? (u.current = c(
                  "VideoPlayerImplementationLoadSequenceManager"
                ).schedule(a, h, function () {
                  d(
                    "VideoPlayerOzImplementationEnginePartsImplFunction"
                  ).proceedWithOzPlayerCreation(
                    babelHelpers["extends"]({}, i, {
                      hivePluginRef: r,
                      overrideOzRequestImplementationRef: t,
                      ozPlayerRef: p,
                      p2pSessionLoggerRef: s,
                    })
                  );
                  return e.getCanPlayPromise();
                }))
              : d(
                  "VideoPlayerOzImplementationEnginePartsImplFunction"
                ).proceedWithOzPlayerCreation(
                  babelHelpers["extends"]({}, i, {
                    hivePluginRef: r,
                    overrideOzRequestImplementationRef: t,
                    ozPlayerRef: p,
                    p2pSessionLoggerRef: s,
                  })
                );
            l.current = f;
          } catch (a) {
            W(a, "oz_player_create_exception");
          }
        };
      function O(a) {
        c("gkx")("1494163") && (l.current = null);
        var b = v.current;
        b != null && ((v.current = null), b(a));
        u.current != null && (u.current(), (u.current = null));
        b = o.current;
        b && (o.current = null);
        c("gkx")("1494163") && (o.current = null);
      }
      function P() {
        if (c("gkx")("1494163"))
          (j.current = null), (k.current = null), (l.current = null);
        else return;
      }
      function Q() {
        (m.current = null), (n.current = null);
      }
      var R = d(
        "VideoPlayerOzImplementationEngineExtrasAPI"
      ).createVideoPlayerOzImplementationEngineExtrasAPI({
        getConfig: A,
        getOzPlayer: y,
        getOzQuickStarter: z,
        getVideoElementAPI: B,
      });
      B = d(
        "VideoPlayerImplementationEngineAPI"
      ).createVideoPlayerImplementationEngine({
        createDebugAPI: function (b) {
          var a = b.getVideoElementAPI;
          b = b.logger;
          return D
            ? D.createDebugAPI({
                engineExtrasAPI: R,
                getConfig: function () {
                  var a;
                  return (a =
                    (a = l.current) == null
                      ? void 0
                      : a.experimentationConfig) != null
                    ? a
                    : null;
                },
                getManifest: function () {
                  var a;
                  return (a =
                    (a = l.current) == null
                      ? void 0
                      : a.manifestXmlStringResolved) != null
                    ? a
                    : null;
                },
                getManifestUrl: function () {
                  var a;
                  return (a =
                    (a = l.current) == null ? void 0 : a.manifestUrl) != null
                    ? a
                    : null;
                },
                getOzBufferingDetector: x,
                getOzPlayer: y,
                getVideoElementAPI: a,
                logger: b,
              })
            : null;
        },
        createVideoPlayerError: i,
        debugLog: h,
        debugLogId: e,
        destroyEngineParts: function (a) {
          O([].concat(a, ["destroyEngineParts"])), P(), Q();
        },
        engineExtrasAPI: R,
        engineMetadata: {
          isAbrEnabled: !0,
          isExternalMedia: !1,
          playerImplementationName: "oz_v2",
          playerVersion: E,
          streamingFormat: "dash",
        },
        handleFatalError: f,
        handleVideoElementMounted: function (a) {
          var b = T();
          M(n.current, [].concat(a, ["handleVideoElementMounted"]));
        },
        handleVideoElementUnmounted: function (a) {
          (c("gkx")("1494163") || c("gkx")("1380112")) &&
            O([].concat(a, ["handleVideoElementUnmounted"]));
        },
        handleVideoInfoChange: J,
        initialProps: g,
        setExposedStateInReact: a,
      });
      e = B.engine;
      var S = B.getCaptionsInfo,
        T = B.getVideoElement,
        U = B.getVideoLiveTrace,
        V = B.handleCaptionsInfoChange,
        W = B.handleFatalImplementationError,
        X = B.logger,
        Y = B.machine,
        Z = B.videoElementAPIRef;
      return e;
    }
    g.createVideoPlayerOzImplementationEngine = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationV2.react",
  [
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationReactVideoElement.react",
    "VideoPlayerOzImplementationEngine",
    "react",
    "useSEOLoggedOutWebCrawler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = d(
          "VideoPlayerImplementationEngineAPI"
        ).useVideoPlayerImplementationEngine(
          a,
          d("VideoPlayerOzImplementationEngine")
            .createVideoPlayerOzImplementationEngine
        ),
        e = b[0];
      b = b[1];
      var f = c("useSEOLoggedOutWebCrawler")(),
        g = {
          src: null,
          videoElementCallbacks: b.videoElementCallbacks,
          videoElementRefCallback: b.videoElementRefCallback,
        };
      f &&
        (g = {
          src: a.manifestUrl,
          videoElementCallbacks: null,
          videoElementRefCallback: null,
        });
      return h.jsx(c("VideoPlayerImplementationReactVideoElement.react"), {
        alt: a.alt,
        implementationController: b.implementationController,
        implementationExposedState: e,
        renderWithVideoImplementationStates:
          a.renderWithVideoImplementationStates,
        src: g.src,
        videoElementCallbacks: g.videoElementCallbacks,
        videoElementRefCallback: g.videoElementRefCallback,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay",
  ["requireDeferredForDisplay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferredForDisplay")("oz-player").__setRef(
      "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay"
    );
    function a() {
      return {
        getModuleIfRequireable: function () {
          return h.getModuleIfRequireable() || null;
        },
        load: function () {
          return h.load();
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerProgressiveImplementationData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.hdSrc,
        c = a.hdSrcPreferred,
        d = a.isExternalMedia;
      a = a.sdSrc;
      return a == null
        ? null
        : { hdSrc: b, hdSrcPreferred: c, isExternalMedia: d, sdSrc: a };
    }
    f.makeProgressiveImplementationData = a;
  },
  66
);
__d(
  "VideoPlayerProgressiveImplementationEngineExtrasAPI",
  ["orEmptyArray"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return a !== null && a.indexOf(".m3u8") !== -1;
    }
    function a(a) {
      var b = a.getPlayingVideoInfo;
      a = a.setUserSelectedVideoQuality;
      a = {
        getApproximateFBLSToPlayerDisplayLatency: function () {
          return null;
        },
        getAudioRepresentationIDAtTime: function (a) {
          return null;
        },
        getAvailableVideoQualities: function () {
          var a;
          return c("orEmptyArray")(
            (a = b()) == null ? void 0 : a.availableQualities
          );
        },
        getCurrentAudioRepresentation: function () {
          return null;
        },
        getCurrentPlayingVideoQuality: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.targetQuality) != null
            ? a
            : "";
        },
        getCurrentTargetVideoQuality: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.targetQuality) != null
            ? a
            : "";
        },
        getCurrentVideoRepresentation: function () {
          return null;
        },
        getEstimatedBandwidth: function () {
          return null;
        },
        getInbandCaptionsAutogeneratedFromManifest: function () {
          return !1;
        },
        getInbandCaptionsExpectedFromManifest: function () {
          return !1;
        },
        getPerfLoggerProvider: function () {
          return null;
        },
        getStreamType: function () {
          var a = b();
          a =
            a == null
              ? "progressive"
              : h(a.hdSrc) || h(a.sdSrc)
              ? "hls"
              : "progressive";
          return a;
        },
        getUserSelectedVideoQuality: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.selectedQuality) != null
            ? a
            : "notselected";
        },
        getVideoProjectionType: function () {
          return "cubemap";
        },
        getVideoRepresentationIDAtTime: function (a) {
          return "oep_hd";
        },
        getVideoRepresentations: function () {
          return null;
        },
        isDrm: function () {
          var a;
          return ((a = b()) == null ? void 0 : a.graphQLVideoDRMInfo) != null;
        },
        isFBIsLiveTemplated: function () {
          return !1;
        },
        isFBMS: function () {
          return !1;
        },
        isFBWasLive: function () {
          return !1;
        },
        isPredictiveDash: function () {
          return !1;
        },
        setDimensions: function (a) {},
        setEnableLiveheadCatchup: function () {},
        setLatencyLevel: function () {},
        setUserSelectedVideoQuality: a,
      };
      return a;
    }
    g.createVideoPlayerProgressiveImplementationEngineExtrasAPI = a;
  },
  98
);
__d(
  "VideoPlayerProgressiveImplementationEngineUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "hd",
      h = "sd";
    function a(a) {
      var b = [];
      a.sdSrc != null && b.push(h);
      a.hdSrc != null && b.push(g);
      var c = a.hdSrcPreferred && a.hdSrc != null ? g : h;
      return babelHelpers["extends"]({}, a, {
        availableQualities: b,
        playingQuality: null,
        playingSrc: null,
        selectedQuality: c,
        targetQuality: c,
        targetSrc: null,
      });
    }
    function b(a, b) {
      var c = a.hdSrc,
        d = a.sdSrc,
        e,
        f;
      b === "notselected" || b === "auto"
        ? ((e = d != null ? h : c != null ? g : h),
          (f = d != null ? d : c != null ? c : null))
        : b === g && c != null
        ? ((e = g), (f = c))
        : b === h && d != null
        ? ((e = h), (f = d))
        : ((e = h), (f = null));
      f === "" && (f = null);
      return babelHelpers["extends"]({}, a, {
        selectedQuality: b,
        targetQuality: e,
        targetSrc: f,
      });
    }
    function c(a, b, c) {
      return babelHelpers["extends"]({}, a, {
        playingQuality: b,
        playingSrc: c,
      });
    }
    f.createResolvedVideoInfoProgressive = a;
    f.updatePlayingVideoInfoProgressiveWithUserSelectedQuality = b;
    f.updatePlayingVideoInfoProgressiveWithCurrentPlayingQuality = c;
  },
  66
);
__d(
  "VideoPlayerProgressiveImplementationEngine",
  [
    "FBLogger",
    "UserAgent",
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "VideoPlayerImplementationErrors",
    "VideoPlayerODS",
    "VideoPlayerProgressiveImplementationEngineExtrasAPI",
    "VideoPlayerProgressiveImplementationEngineUtils",
    "cr:1473550",
    "cr:1512856",
    "cr:1680308",
    "emptyFunction",
    "gkx",
    "promiseDone",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("emptyFunction");
    function i(a, b) {
      return d(
        "VideoPlayerImplementationErrors"
      ).createVideoPlayerErrorFromGenericError(
        "PROGRESSIVE_JAVASCRIPT_NATIVE",
        a,
        b
      );
    }
    function a(a) {
      var e = a.debugLogId,
        f = a.handleFatalError,
        g = a.initialProps;
      a = a.setExposedStateInReact;
      var j = { current: null },
        k = { current: null },
        l = { current: null },
        m = { current: null },
        n = function () {
          var a = m.current;
          a != null && ((m.current = null), a());
        },
        o = function (a) {
          n();
          var e = w();
          if (e == null)
            throw c("unrecoverableViolation")(
              "Need videoElement in startSwitchingSource",
              "comet_video_player"
            );
          if (b("cr:1512856") == null)
            throw c("unrecoverableViolation")(
              "Need SourceSwitcher in startSwitchingSource",
              "comet_video_player"
            );
          m.current = b("cr:1512856").startSwitchingVideoElementSource({
            getShouldBePlaying: function () {
              return (
                z.getCurrentState().controlledState.playbackState ===
                  "playing" ||
                z.getCurrentState().controlledState.playbackState === "stalling"
              );
            },
            onSourceSwitchCancelled: function () {
              z.dispatch({ type: "buffering_end_requested" });
            },
            onSourceSwitchFailed: function (a) {
              c("FBLogger")("comet_video_player")
                .catching(a)
                .warn("Progressive source switch failed: %s", String(a)),
                z.dispatch({ type: "buffering_end_requested" });
            },
            onSourceSwitchStarted: function () {
              z.dispatch({
                payload: { bufferingType: "in_play" },
                type: "buffering_begin_requested",
              });
            },
            onSourceSwitchSucceeded: function () {
              var a = l.current;
              a != null &&
                a.targetQuality != null &&
                (l.current = d(
                  "VideoPlayerProgressiveImplementationEngineUtils"
                ).updatePlayingVideoInfoProgressiveWithCurrentPlayingQuality(
                  a,
                  a.targetQuality,
                  a.targetSrc
                ));
              z.dispatch({ type: "buffering_end_requested" });
            },
            targetSrc: a,
            videoElement: e,
          });
        },
        p = { current: null },
        q = function () {
          var a = w(),
            e = k.current;
          if (a == null || e == null) return;
          try {
            var f,
              h = e.graphQLVideoDRMInfo,
              i = e.videoFBID;
            f = h ? ((f = h.fairplayCert) != null ? f : null) : null;
            b("cr:1680308") &&
              (p.current =
                h && f != null && i != null
                  ? new (b("cr:1680308"))(f, a, i, h.videoLicenseUriMap)
                  : null);
            var j = d(
              "VideoPlayerImplementationEngineVideoElementAPI"
            ).createVideoPlayerImplementationEngineVideoElementAPI(
              a,
              g.isExternalMedia
            );
            A.current = j;
            l.current = e;
            f = v();
            x({
              inbandCaptionsAutogeneratedFromManifest:
                t.getInbandCaptionsAutogeneratedFromManifest(),
              inbandCaptionsExpectedFromManifest:
                t.getInbandCaptionsExpectedFromManifest(),
              inbandCaptionsExpectedFromProps:
                f == null ? void 0 : f.inbandCaptionsExpectedFromProps,
              sideLoadCaptionsExpectedFromProps:
                f == null ? void 0 : f.sideLoadCaptionsExpectedFromProps,
              sideLoadCaptionsUrlFromProps:
                f == null ? void 0 : f.sideLoadCaptionsUrlFromProps,
            });
            z.dispatch({
              payload: {
                availableQualities: t.getAvailableVideoQualities(),
                selectedVideoQuality: t.getUserSelectedVideoQuality(),
                streamingFormat: t.getStreamType(),
                targetVideoQuality: t.getCurrentTargetVideoQuality(),
                videoProjection: t.getVideoProjectionType(),
              },
              type: "implementation_engine_initialized",
            });
            i = function () {
              j.setPlayheadPosition(g.startTimestamp);
            };
            c("UserAgent").isBrowser("IE11")
              ? c("promiseDone")(j.getDOMLoadedMetadataPromise().then(i))
              : i();
          } catch (a) {
            y(a, "progressive_player_create_exception");
          }
        },
        r = function (a, b) {
          if (b == null) return !0;
          else if (a.videoFBID !== b.videoFBID) {
            var c = 14;
            d("VideoPlayerODS").bumpEntityKey(
              "comet_video_player",
              "ProgressiveImplementation.video_fbid_changed",
              c
            );
            return !1;
          } else if (a.hdSrc !== b.hdSrc || a.sdSrc !== b.sdSrc) {
            c = 14;
            d("VideoPlayerODS").bumpEntityKey(
              "comet_video_player",
              "ProgressiveImplementation.src_changed",
              c
            );
            return !1;
          } else return !1;
        },
        s = function (a) {
          var b;
          b = {
            graphQLVideoDRMInfo: (b = a.graphQLVideoDRMInfo) != null ? b : null,
            hdSrc: a.hdSrc === "" ? null : (b = a.hdSrc) != null ? b : null,
            hdSrcPreferred: a.hdSrcPreferred,
            sdSrc: a.sdSrc === "" ? null : (b = a.sdSrc) != null ? b : null,
            videoFBID: a.videoFBID,
          };
          if (!r(b, j.current)) return !1;
          if (b.hdSrc == null && b.sdSrc == null)
            throw c("unrecoverableViolation")(
              "Empty hdSrc and sdSrc",
              "comet_video_player"
            );
          j.current = b;
          k.current = d(
            "VideoPlayerProgressiveImplementationEngineUtils"
          ).createResolvedVideoInfoProgressive(b);
          q();
          return !0;
        },
        t = d(
          "VideoPlayerProgressiveImplementationEngineExtrasAPI"
        ).createVideoPlayerProgressiveImplementationEngineExtrasAPI({
          getPlayingVideoInfo: function () {
            return l.current;
          },
          setUserSelectedVideoQuality: function (a) {
            var b = l.current;
            if (!b)
              throw c("unrecoverableViolation")(
                "Attempt to switch quality when playingVideoInfo does not exist",
                "comet_video_player"
              );
            var e = A.current;
            if (!e)
              throw c("unrecoverableViolation")(
                "Attempt to switch quality when videoElementAPI does not exist",
                "comet_video_player"
              );
            var f = b.targetQuality,
              g = b.targetSrc;
            l.current = d(
              "VideoPlayerProgressiveImplementationEngineUtils"
            ).updatePlayingVideoInfoProgressiveWithUserSelectedQuality(b, a);
            b = l.current;
            a = b.targetQuality;
            b = b.targetSrc;
            if (c("gkx")("1467411"))
              b !== g && (b == null ? (n(), e.setSrc(null)) : o(b)),
                f != null &&
                  a !== f &&
                  a != null &&
                  z.dispatch({
                    payload: { targetVideoQuality: a },
                    type: "representation_changed",
                  });
            else {
              e.setSrc(b);
              if (b != null) {
                f =
                  (g =
                    z.getCurrentState().uncontrolledState
                      .videoElementPlayheadPosition) != null
                    ? g
                    : 0;
                f > 0 && e.setPlayheadPosition(f);
                z.getCurrentState().controlledState.playbackState ===
                  "playing" && e.play();
                z.dispatch({
                  payload: {
                    targetVideoQuality: t.getCurrentTargetVideoQuality(),
                  },
                  type: "representation_changed",
                });
              }
            }
          },
        }),
        u = function () {
          p.current && (p.current.destroy(), (p.current = null));
        };
      e = d(
        "VideoPlayerImplementationEngineAPI"
      ).createVideoPlayerImplementationEngine({
        createDebugAPI: function (a) {
          var c = a.getVideoElementAPI;
          a = a.logger;
          return b("cr:1473550")
            ? b("cr:1473550").createVideoPlayerImplementationDebugAPI({
                engineExtrasAPI: t,
                getVideoElementAPI: c,
                logger: a,
              })
            : null;
        },
        createVideoPlayerError: i,
        debugLog: h,
        debugLogId: e,
        destroyEngineParts: function () {
          if (c("gkx")("1467411")) {
            n();
            var a = A.current;
            a && a.setSrc(null);
            l.current = null;
          }
          u();
        },
        engineExtrasAPI: t,
        engineMetadata: {
          isAbrEnabled: !1,
          isExternalMedia: g.isExternalMedia,
          playerImplementationName: "progressive_v2",
          playerVersion: "comet_progressive",
          streamingFormat: "progressive",
        },
        handleFatalError: f,
        handleVideoElementMounted: q,
        handleVideoElementUnmounted: function () {
          c("gkx")("1467411") && n();
        },
        handleVideoInfoChange: s,
        initialProps: g,
        setExposedStateInReact: a,
      });
      f = e.engine;
      var v = e.getCaptionsInfo,
        w = e.getVideoElement,
        x = e.handleCaptionsInfoChange,
        y = e.handleFatalImplementationError,
        z = e.machine,
        A = e.videoElementAPIRef;
      return f;
    }
    g.createVideoPlayerProgressiveImplementationEngine = a;
  },
  98
);
__d(
  "VideoPlayerProgressiveImplementationV2.react",
  [
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationReactVideoElement.react",
    "VideoPlayerProgressiveImplementationEngine",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = d(
          "VideoPlayerImplementationEngineAPI"
        ).useVideoPlayerImplementationEngine(
          a,
          d("VideoPlayerProgressiveImplementationEngine")
            .createVideoPlayerProgressiveImplementationEngine
        ),
        e = b[0];
      b = b[1];
      return h.jsx(c("VideoPlayerImplementationReactVideoElement.react"), {
        alt: a.alt,
        implementationController: b.implementationController,
        implementationExposedState: e,
        renderWithVideoImplementationStates:
          a.renderWithVideoImplementationStates,
        videoElementCallbacks: b.videoElementCallbacks,
        videoElementRefCallback: b.videoElementRefCallback,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerShakaImplementationData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.videoData;
      a = a.videoPlayerShakaConfig;
      return b == null ? null : { videoData: b, videoPlayerShakaConfig: a };
    }
    f.makeShakaImplementationData = a;
  },
  66
);
__d(
  "VideoPlayerOzWWWConfig",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "oz_www_";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.getBool = function (a, b) {
        return this.$1.getBool(g + a, b);
      };
      b.getNumber = function (a, b) {
        return this.$1.getNumber(g + a, b);
      };
      b.getString = function (a, b) {
        return this.$1.getString(g + a, b);
      };
      b.setContext = function (a, b) {
        this.$1.setContext(a, b);
      };
      b.getAllContexts = function () {
        return this.$1.getAllContexts();
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "useOzImplementationData",
  [
    "CometRelay",
    "VideoPlayerOzImplementationData",
    "VideoPlayerOzWWWConfig",
    "react",
    "useOzImplementationData_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useMemo;
    function a(a, e) {
      var f = e.manifestURL_DO_NOT_USE,
        g = e.ozQuickStarterData,
        j = e.videoPlayerShakaConfig,
        k = i(
          function () {
            return j == null ? null : new (c("VideoPlayerOzWWWConfig"))(j);
          },
          [j]
        ),
        l = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("useOzImplementationData_video.graphql")),
          a
        );
      return i(
        function () {
          return d("VideoPlayerOzImplementationData").makeOzImplementationData({
            canUseOz: l.can_use_oz,
            dashManifest: f != null ? null : l.dash_manifest,
            dashUrl: f != null ? f : l.playable_url_dash,
            experimentationConfig: k,
            minQualityPreference: l.min_quality_preference,
            ozQuickStarterData: f != null ? null : g,
            videoFBID: l.id,
          });
        },
        [l, f, k, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useProgressiveImplementationData",
  [
    "CometRelay",
    "VideoPlayerProgressiveImplementationData",
    "useProgressiveImplementationData_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, c) {
      var e, f;
      c = c.initialForceHD;
      c = c === void 0 ? !1 : c;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useProgressiveImplementationData_video.graphql")),
        a
      );
      e =
        a.is_spherical === !0
          ? (e =
              (e = a.spherical_video_fallback_urls) == null ? void 0 : e.hd) !=
            null
            ? e
            : a.playable_url_quality_hd
          : a.playable_url_quality_hd;
      f =
        a.is_spherical === !0
          ? (f =
              (f = a.spherical_video_fallback_urls) == null ? void 0 : f.sd) !=
            null
            ? f
            : a.playable_url
          : a.playable_url;
      var g = a.is_rss_podcast_video === !0;
      return d(
        "VideoPlayerProgressiveImplementationData"
      ).makeProgressiveImplementationData({
        hdSrc: e,
        hdSrcPreferred:
          c === !0 ||
          a.min_quality_preference === "HD" ||
          a.min_quality_preference === "UHD",
        isExternalMedia: g,
        sdSrc: f,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useShakaImplementationData",
  [
    "CometRelay",
    "VideoPlayerShakaImplementationData",
    "cr:1604324",
    "react",
    "recoverableViolation",
    "useShakaImplementationData_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useMemo;
    function a(a, e) {
      var f = e.videoPlayerShakaConfig,
        g = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("useShakaImplementationData_video.graphql")),
          a
        );
      return i(
        function () {
          var a;
          if (g.is_rss_podcast_video === !0) return null;
          a =
            (a = g.video_player_shaka_live_p2p_init) == null
              ? void 0
              : a.json_encoded_video_data;
          if (a == null) return null;
          if (b("cr:1604324") == null)
            return c("recoverableViolation")(
              "VideoData is not supported",
              "comet_video_player"
            );
          var e = null;
          try {
            e = new (b("cr:1604324"))(JSON.parse(a));
          } catch (a) {
            c("recoverableViolation")(
              "VideoData JSON is broken",
              "comet_video_player"
            );
          }
          return d(
            "VideoPlayerShakaImplementationData"
          ).makeShakaImplementationData({
            videoData: e,
            videoPlayerShakaConfig: f,
          });
        },
        [g, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerShakaPerformanceLoggerRelayImpl",
  [
    "CometRelay",
    "useVideoPlayerShakaPerformanceLoggerRelayImpl_init.graphql",
    "useVideoPlayerShakaPerformanceLoggerRelayImpl_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0
      ? h
      : (h = b("useVideoPlayerShakaPerformanceLoggerRelayImpl_init.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "useVideoPlayerShakaPerformanceLoggerRelayImpl_video.graphql"
            )),
        a
      );
      var c = a.video_player_shaka_performance_logger_init
        ? d("CometRelay").ModuleResource.read(
            a.video_player_shaka_performance_logger_init
          )
        : null;
      c != null &&
        a.video_player_shaka_performance_logger_should_sample === !0 &&
        c.forceShouldSample();
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerShakaPerformanceLoggerRelay",
  ["useVideoPlayerShakaPerformanceLoggerRelayImpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("useVideoPlayerShakaPerformanceLoggerRelayImpl");
  },
  98
);
__d(
  "useCometRelayExpiredVideoUrlRefreshHandler",
  [
    "CometRelay",
    "react",
    "unrecoverableViolation",
    "useCometRelayExpiredVideoUrlRefreshHandlerQuery.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback;
    function a(a) {
      var e = d("CometRelay").useRelayEnvironment();
      if (a == null || a.length === 0)
        throw c("unrecoverableViolation")(
          "refreshCometRelayVideoPlayerExpiredUrl videoFBID cannot be " +
            ((a == null ? void 0 : a.length) === 0
              ? "an empty string"
              : "null"),
          "comet_video_player"
        );
      var f = i(
        function (c) {
          var f =
            h !== void 0
              ? h
              : (h = b(
                  "useCometRelayExpiredVideoUrlRefreshHandlerQuery.graphql"
                ));
          return d("CometRelay")
            .fetchQuery(e, f, { expiredURL: btoa(c), videoID: a })
            .toPromise()
            .then(function (a) {
              var b;
              b =
                (b =
                  a == null
                    ? void 0
                    : (b = a.video) == null
                    ? void 0
                    : (b = b.rmd_refreshed_url) == null
                    ? void 0
                    : b.new_url) != null
                  ? b
                  : null;
              a =
                (a =
                  a == null
                    ? void 0
                    : (a = a.video) == null
                    ? void 0
                    : (a = a.rmd_refreshed_url) == null
                    ? void 0
                    : a.reason) != null
                  ? a
                  : null;
              return { reason: a, refreshedUrl: b };
            });
        },
        [e, a]
      );
      return f;
    }
    g["default"] = a;
  },
  98
);
__d(
  "manifestHasUnsupportedCodecs",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (
        !c("gkx")("1917833") ||
        window.MediaSource == null ||
        a == null ||
        typeof a !== "string"
      )
        return !1;
      var b = /mimeType=\"([^\"]*)\"\s*codecs=\"([^\"]*)\"/g,
        d;
      while ((d = b.exec(a))) {
        d = d[1] + '; codecs="' + d[2] + '"';
        if (!window.MediaSource.isTypeSupported(d)) return !0;
      }
      return !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoImplementationsImpl",
  [
    "CometRelay",
    "ErrorMetadata",
    "VideoPlayerOzImplementationV2.react",
    "VideoPlayerProgressiveImplementationV2.react",
    "cr:1604325",
    "err",
    "gkx",
    "manifestHasUnsupportedCodecs",
    "recoverableViolation",
    "useOzImplementationData",
    "useProgressiveImplementationData",
    "useShakaImplementationData",
    "useVideoImplementationsImpl_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, e) {
      var f = [],
        g = e.forceProgressiveImpl;
      g = g === void 0 ? !1 : g;
      var i = e.initialForceHD;
      i = i === void 0 ? !1 : i;
      var j = e.manifestURL_DO_NOT_USE,
        k = e.ozQuickStarterData,
        l = e.videoFBID;
      e = e.videoPlayerShakaConfig;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useVideoImplementationsImpl_video.graphql")),
        a
      );
      var m = c("useShakaImplementationData")(a, { videoPlayerShakaConfig: e });
      m != null &&
        (b("cr:1604325") == null
          ? c("recoverableViolation")(
              "VideoPlayerShakaImplementation is not supported",
              "comet_video_player"
            )
          : f.push({
              Component: b("cr:1604325"),
              data: m,
              typename: "VideoPlayerShakaImplementation",
            }));
      m = c("useOzImplementationData")(a, {
        manifestURL_DO_NOT_USE: j,
        ozQuickStarterData: k,
        videoPlayerShakaConfig: e,
      });
      j = m != null && c("manifestHasUnsupportedCodecs")(m.manifest);
      !g &&
        m != null &&
        ((m.manifest != null && !j) || m.manifestUrl != null) &&
        f.push({
          Component: c("VideoPlayerOzImplementationV2.react"),
          data: m,
          typename: "VideoPlayerOzImplementation",
        });
      k = c("useProgressiveImplementationData")(a, { initialForceHD: i });
      c("VideoPlayerProgressiveImplementationV2.react") != null &&
        k != null &&
        f.push({
          Component: c("VideoPlayerProgressiveImplementationV2.react"),
          data: k,
          typename: "VideoPlayerProgressiveImplementation",
        });
      if (f.length === 0 && c("gkx")("1611172")) {
        e = c("err")(
          "Cannot play video: No matching video player implementations"
        );
        a = {
          forced_progressive: g,
          has_oz_data: m != null,
          has_oz_manifest: (m == null ? void 0 : m.manifest) != null,
          has_oz_manifest_url: (m == null ? void 0 : m.manifestUrl) != null,
          has_oz_unsupported_codecs: j,
          has_progressive_data: k != null,
        };
        e.metadata = new (c("ErrorMetadata"))();
        e.metadata.addEntries(
          ["COMET_VIDEO", "VIDEO_ID", String(l)],
          ["COMET_VIDEO", "VIDEO_IMPLEMENTATION_DEBUG_DATA", JSON.stringify(a)]
        );
        c("recoverableViolation")(
          "useVideoImplementations: No matching video player implementations",
          "comet_video_player",
          { error: e }
        );
      }
      return f;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoImplementations",
  ["useVideoImplementationsImpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("useVideoImplementationsImpl");
  },
  98
);
__d(
  "VideoPlayerShakaBandwidthEstimator",
  ["CacheStorage", "Run", "requireWeak"],
  function (a, b, c, d, e, f, g) {
    var h;
    c("requireWeak")("Shaka", function (a) {
      h = a.util.EWMACacheBandwidthEstimator;
    });
    var i = null,
      j = !1,
      k = 30,
      l = 2e6,
      m = 25e4,
      n = 123034;
    a = (function () {
      function a() {
        var a = this,
          b = new (c("CacheStorage"))("localstorage", "_video_"),
          e = b.get("bandwidthEstimate");
        this.$1 = {
          isMockObject: !0,
          getBandwidth: function (a) {
            return e;
          },
          getFastMovingBandwidth: function () {
            return e;
          },
        };
        h &&
          ((this.$1 = new h(k, l, function () {}, e)),
          (this.$1.isMockObject = !1));
        d("Run").onUnload(function () {
          b.set("bandwidthEstimate", a.$1.getBandwidth());
        });
      }
      var b = a.prototype;
      b.getEstimator = function () {
        return this.$1;
      };
      a.getInstance = function () {
        (i === null || (i.getEstimator().isMockObject && h)) && (i = new a());
        return i;
      };
      a.getEstimator = function () {
        return a.getInstance().getEstimator();
      };
      a.getBandwidth = function (b) {
        var c = a.getEstimator();
        return c.getBandwidth(b);
      };
      a.getBandwidthByVideoType = function (b) {
        return a.getBandwidth(a.getBandwidthModel(b));
      };
      a.getBandwidthModel = function (a) {
        return a ? "aggressive" : "conservative";
      };
      a.isAutoplayBandwidthRestrained = function (b) {
        var c = a.getEstimator(),
          d;
        j ? (d = c.getFastMovingBandwidth()) : (d = c.getBandwidth());
        c = b ? m : n;
        d === null || d >= c ? (j = !1) : (j = !0);
        return j;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerShakaConfigContextProvider",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var b = a.prototype;
      b.setContext = function (a, b) {
        if (this.$1[a] !== b) {
          var c;
          this.$1 = Object.assign({}, this.$1, ((c = {}), (c[a] = b), c));
        }
      };
      b.setAllContexts = function (a) {
        this.$1 = a;
      };
      b.getAllContexts = function () {
        return this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerShakaConfig",
  [
    "VideoPlayerContextSensitiveConfigResolver",
    "VideoPlayerShakaConfigContextProvider",
  ],
  function (a, b, c, d, e, f, g) {
    var h = {};
    a = (function () {
      function a(a, b, d) {
        (this.$1 = new (c("VideoPlayerShakaConfigContextProvider"))()),
          (this.$2 = b || null),
          (this.$3 = new (c("VideoPlayerContextSensitiveConfigResolver"))(d)),
          this.$3.setContexts(a || {}),
          a && this.$1.setAllContexts(a);
      }
      a.setGlobalOverrideConfig = function (a) {
        h = a;
      };
      var b = a.prototype;
      b.setContext = function (a, b) {
        var c = this.$1.getAllContexts();
        this.$1.setContext(a, b);
        a = this.$1.getAllContexts();
        c !== a && this.$3.setContexts(a);
      };
      b.setOverrideConfig = function (a) {
        this.$2 = a;
      };
      b.getBool = function (a, b) {
        a = this.$4(a, b);
        return typeof a === "boolean" ? a : b;
      };
      b.getNumber = function (a, b) {
        a = this.$4(a, b);
        return typeof a === "number" ? a : b;
      };
      b.getString = function (a, b) {
        a = this.$4(a, b);
        return typeof a === "string" ? a : b;
      };
      b.getAllContexts = function () {
        return this.$1.getAllContexts();
      };
      b.$4 = function (a, b) {
        if (!!h && typeof h[a] === typeof b) return h[a];
        if (typeof this.$3.getValue(a) === typeof b) return this.$3.getValue(a);
        return !!this.$2 && typeof this.$2[a] === typeof b ? this.$2[a] : null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerShakaConfig",
  [
    "CometRelay",
    "VideoPlayerConnectionQuality",
    "VideoPlayerOzWWWGlobalConfig",
    "VideoPlayerShakaBandwidthEstimator",
    "VideoPlayerShakaConfig",
    "cr:1990345",
    "react",
    "useSelectedLatencySetting",
    "useVideoPlayerShakaConfig_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useEffect,
      j = e.useState;
    function a(a, e) {
      e = e.adClientToken;
      var f = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("useVideoPlayerShakaConfig_video.graphql")),
          a
        ),
        g = e != null,
        k = f.is_spherical === !0,
        l = f.is_gaming_video === !0;
      e = c("useSelectedLatencySetting")(
        (a = f.id) != null ? a : "null",
        f.selected_latency_setting
      );
      var m = e[0];
      a = j(function () {
        var a;
        return new (c("VideoPlayerShakaConfig"))({
          connection_quality: d("VideoPlayerConnectionQuality").evaluate(
            b("cr:1990345") != null
              ? function () {
                  return b("cr:1990345").getBandwidth(
                    c("VideoPlayerOzWWWGlobalConfig")
                  );
                }
              : c("VideoPlayerShakaBandwidthEstimator").getBandwidth
          ),
          content_category: l ? "gaming" : "general",
          fbls_tier: ((a = f.fbls_tier) == null ? void 0 : a.startsWith("user"))
            ? "user"
            : "general",
          is_ad: g,
          is_latency_sensitive_broadcast:
            f.is_latency_sensitive_broadcast === !0,
          is_live: f.is_live_streaming === !0,
          is_spherical: k,
          latency_level: f.is_latency_menu_enabled === !0 ? m : "normal",
          player_format: "inline",
          servable_via_fmbs: !1,
          streaming_implementation: "default",
        });
      });
      var n = a[0];
      i(
        function () {
          n.setContext("is_ad", g);
        },
        [n, g]
      );
      i(
        function () {
          n.setContext("is_spherical", k);
        },
        [n, k]
      );
      return n;
    }
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/loggings/OzLoggingUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      a = a.getOperationLogger(b).start();
      try {
        b = c(a);
        return b;
      } catch (b) {
        a.setError(b);
        throw b;
      } finally {
        a.log();
      }
    }
    function b(a, b, c, d, e) {
      d === void 0 && (d = function () {});
      e === void 0 && (e = function () {});
      var f = b.getOperationLogger(c).start();
      d(f);
      return a
        .then(function (a) {
          e(f);
          f.log();
          return a;
        })
        ["catch"](function (a) {
          e(f);
          f.setError(a);
          f.log();
          throw a;
        });
    }
    f.executeOperationAndLog = a;
    f.monitorPromiseAndLogOperation = b;
  },
  66
);
__d(
  "oz-player/loggings/OzOperationLoggerBase",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.start = function () {
        var a = Date.now();
        this.setClientTimeBegin(a);
        this.setClientTimeEnd(null);
        this.setClientTimeDuration(null);
        return this;
      };
      b.log = function () {
        var a = Date.now(),
          b = this.getClientTimeBegin(),
          c = this.getClientTimeEnd();
        (b == null || b === 0) && ((b = a), this.setClientTimeBegin(b));
        (c == null || c === 0) && ((c = a), this.setClientTimeEnd(c));
        this.setClientTimeDuration(c - b);
      };
      b.setError = function (a) {
        this.$2 = a;
        return this;
      };
      b.setAppendTarget = function (a) {
        this.$41 = a;
        return this;
      };
      b.setOneObserved = function (a) {
        this.$38 = a;
        return this;
      };
      b.setOneReqWave = function (a) {
        this.$39 = a;
        return this;
      };
      b.setOneResWave = function (a) {
        this.$40 = a;
        return this;
      };
      b.setIsP2pPlayback = function (a) {
        this.$37 = a;
        return this;
      };
      b.setResult = function (a) {
        this.$3 = a;
        return this;
      };
      b.setType = function (a) {
        this.$4 = a;
        return this;
      };
      b.setClientTimeBegin = function (a) {
        this.$5 = a;
        return this;
      };
      b.setClientTimeDuration = function (a) {
        this.$6 = a;
        return this;
      };
      b.setClientTimeEnd = function (a) {
        this.$7 = a;
        return this;
      };
      b.setSegmentCount = function (a) {
        this.$14 = a;
        return this;
      };
      b.setTimeToFirstByte = function (a) {
        this.$8 = a;
        return this;
      };
      b.setTimeToLastByte = function (a) {
        this.$9 = a;
        return this;
      };
      b.setTimeToRequestStart = function (a) {
        this.$10 = a;
        return this;
      };
      b.setTimeToRequestSent = function (a) {
        this.$11 = a;
        return this;
      };
      b.setReason = function (a) {
        this.$12 = a;
        return this;
      };
      b.setResource = function (a) {
        this.$13 = a;
        return this;
      };
      b.setSegmentStartTime = function (a) {
        this.$15 = a;
        return this;
      };
      b.setSegmentEndTime = function (a) {
        this.$16 = a;
        return this;
      };
      b.setLength = function (a) {
        this.$17 = a;
        return this;
      };
      b.setLiveheadPosition = function (a) {
        this.$18 = a;
        return this;
      };
      b.setLiveheadSeqNumHeader = function (a) {
        this.$19 = a;
        return this;
      };
      b.setLiveheadSeqNumMpd = function (a) {
        this.$20 = a;
        return this;
      };
      b.setManifestType = function (a) {
        this.$21 = a;
        return this;
      };
      b.setPriorityFloat = function (a) {
        this.$22 = a;
        return this;
      };
      b.setAppendedBufferMs = function (a) {
        this.$23 = a;
        return this;
      };
      b.setInitiator = function (a) {
        this.$24 = a;
        return this;
      };
      b.setPreloadTime = function (a) {
        this.$25 = a;
        return this;
      };
      b.setConcluder = function (a) {
        this.$26 = a;
        return this;
      };
      b.setPreviousRepresentationID = function (a) {
        this.$27 = a;
        return this;
      };
      b.setRepresentationID = function (a) {
        this.$28 = a;
        return this;
      };
      b.setStreamSwitchReason = function (a) {
        this.$29 = a;
        return this;
      };
      b.setState = function (a) {
        this.$30 = a;
        return this;
      };
      b.setContentLengthHeader = function (a) {
        this.$31 = a;
        return this;
      };
      b.setOriginHitHeader = function (a) {
        this.$33 = a;
        return this;
      };
      b.setEdgeHitHeader = function (a) {
        this.$34 = a;
        return this;
      };
      b.setCode = function (a) {
        this.$32 = a;
        return this;
      };
      b.setResponseTimeMsHeader = function (a) {
        this.$35 = a;
        return this;
      };
      b.setIsTemplatedManifest = function (a) {
        this.$36 = a;
        return this;
      };
      b.setIsRingBufferSample = function (a) {
        this.$42 = a;
        return this;
      };
      b.setIsOnline = function (a) {
        this.$43 = a;
        return this;
      };
      b.setProxyStatusHeader = function (a) {
        this.$44 = a;
        return this;
      };
      b.setPlaybackFbmsParam = function (a) {
        return this;
      };
      b.setUserInfo = function (a) {
        return this;
      };
      b.setDynamicStatusHeader = function (a) {
        return this;
      };
      b.getError = function () {
        return this.$2;
      };
      b.getResult = function () {
        return this.$3;
      };
      b.getType = function () {
        return this.$4;
      };
      b.getClientTimeBegin = function () {
        return this.$5;
      };
      b.getClientTimeEnd = function () {
        return this.$6 != null
          ? this.$5 != null
            ? this.$5 + this.$6
            : null
          : this.$7;
      };
      b.getTimeToRequestStart = function () {
        return this.$10;
      };
      b.getTimeToRequestSent = function () {
        return this.$11;
      };
      b.getReason = function () {
        return this.$12;
      };
      b.getResource = function () {
        return this.$13;
      };
      b.getOperationName = function () {
        return this.$1;
      };
      b.getSegmentStartTime = function () {
        return this.$15;
      };
      b.getSegmentEndTime = function () {
        return this.$16;
      };
      b.getLength = function () {
        return this.$17;
      };
      b.getLiveheadPosition = function () {
        return this.$18;
      };
      b.getManifestType = function () {
        return this.$21;
      };
      b.getPriorityFloat = function () {
        return this.$22;
      };
      b.getAppendedBufferMs = function () {
        return this.$23;
      };
      b.getInitiator = function () {
        return this.$24;
      };
      b.getPreloadTime = function () {
        return this.$25;
      };
      b.getConcluder = function () {
        return this.$26;
      };
      b.getContentLengthHeader = function () {
        return this.$31;
      };
      b.getOriginHitHeader = function () {
        return this.$33;
      };
      b.getEdgeHitHeader = function () {
        return this.$34;
      };
      b.getCode = function () {
        return this.$32;
      };
      b.getResponseTimeMsHeader = function () {
        return this.$35;
      };
      b.getIsTemplatedManifest = function () {
        return this.$36;
      };
      b.getOneObserved = function () {
        return this.$38;
      };
      b.getOneReqWave = function () {
        return this.$39;
      };
      b.getOneResWave = function () {
        return this.$40;
      };
      b.getAppendTarget = function () {
        return this.$41;
      };
      b.getIsRingBufferSample = function () {
        return this.$42;
      };
      b.getIsOnline = function () {
        return this.$43;
      };
      b.getProxyStatusHeader = function () {
        return this.$44;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player/loggings/OzMultiDestinationPerfLogger",
  [
    "oz-player/loggings/OzOperationLoggerBase",
    "oz-player/loggings/OzPerfLoggerProviderBase",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.$OzMultiDestinationPerfLoggerProvider1 = b;
        return c;
      }
      var c = b.prototype;
      c.createOperationLogger = function (a) {
        var b = new h(
          a,
          this.$OzMultiDestinationPerfLoggerProvider1.map(function (b) {
            return b.getOperationLogger(a);
          })
        );
        return b;
      };
      c.createLoggerProvider = function () {
        return new b(this.$OzMultiDestinationPerfLoggerProvider1);
      };
      return b;
    })(c("oz-player/loggings/OzPerfLoggerProviderBase"));
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a, c) {
        a = b.call(this, a) || this;
        a.$OzMultiDestinationOperationLogger1 = c;
        return a;
      }
      var c = a.prototype;
      c.start = function () {
        b.prototype.start.call(this);
        this.$OzMultiDestinationOperationLogger1.forEach(function (a) {
          return a.start();
        });
        return this;
      };
      c.setResult = function (a) {
        b.prototype.setResult.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setResult(a);
        });
        return this;
      };
      c.setError = function (a) {
        b.prototype.setError.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setError(a);
        });
        return this;
      };
      c.setType = function (a) {
        b.prototype.setType.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setType(a);
        });
        return this;
      };
      c.setClientTimeBegin = function (a) {
        b.prototype.setClientTimeBegin.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setClientTimeBegin(a);
        });
        return this;
      };
      c.setClientTimeDuration = function (a) {
        b.prototype.setClientTimeDuration.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setClientTimeDuration(a);
        });
        return this;
      };
      c.setClientTimeEnd = function (a) {
        b.prototype.setClientTimeEnd.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setClientTimeEnd(a);
        });
        return this;
      };
      c.setSegmentCount = function (a) {
        b.prototype.setSegmentCount.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setSegmentCount(a);
        });
        return this;
      };
      c.setTimeToFirstByte = function (a) {
        b.prototype.setTimeToFirstByte.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToFirstByte(a);
        });
        return this;
      };
      c.setTimeToLastByte = function (a) {
        b.prototype.setTimeToLastByte.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToLastByte(a);
        });
        return this;
      };
      c.setTimeToRequestStart = function (a) {
        b.prototype.setTimeToRequestStart.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToRequestStart(a);
        });
        return this;
      };
      c.setTimeToRequestSent = function (a) {
        b.prototype.setTimeToRequestSent.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToRequestSent(a);
        });
        return this;
      };
      c.setReason = function (a) {
        b.prototype.setReason.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setReason(a);
        });
        return this;
      };
      c.setResource = function (a) {
        b.prototype.setResource.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setResource(a);
        });
        return this;
      };
      c.setSegmentStartTime = function (a) {
        b.prototype.setSegmentStartTime.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setSegmentStartTime(a);
        });
        return this;
      };
      c.setSegmentEndTime = function (a) {
        b.prototype.setSegmentEndTime.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setSegmentEndTime(a);
        });
        return this;
      };
      c.setAppendedBufferMs = function (a) {
        b.prototype.setAppendedBufferMs.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setAppendedBufferMs(a);
        });
        return this;
      };
      c.setLength = function (a) {
        b.prototype.setLength.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLength(a);
        });
        return this;
      };
      c.setLiveheadPosition = function (a) {
        b.prototype.setLiveheadPosition.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLiveheadPosition(a);
        });
        return this;
      };
      c.setLiveheadSeqNumHeader = function (a) {
        b.prototype.setLiveheadSeqNumHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLiveheadSeqNumHeader(a);
        });
        return this;
      };
      c.setLiveheadSeqNumMpd = function (a) {
        b.prototype.setLiveheadSeqNumMpd.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLiveheadSeqNumMpd(a);
        });
        return this;
      };
      c.setManifestType = function (a) {
        b.prototype.setManifestType.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setManifestType(a);
        });
        return this;
      };
      c.setPriorityFloat = function (a) {
        b.prototype.setPriorityFloat.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPriorityFloat(a);
        });
        return this;
      };
      c.setInitiator = function (a) {
        b.prototype.setInitiator.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setInitiator(a);
        });
        return this;
      };
      c.setPreloadTime = function (a) {
        b.prototype.setPreloadTime.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPreloadTime(a);
        });
        return this;
      };
      c.setConcluder = function (a) {
        b.prototype.setConcluder.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setConcluder(a);
        });
        return this;
      };
      c.setPreviousRepresentationID = function (a) {
        b.prototype.setPreviousRepresentationID.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPreviousRepresentationID(a);
        });
        return this;
      };
      c.setRepresentationID = function (a) {
        b.prototype.setRepresentationID.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setRepresentationID(a);
        });
        return this;
      };
      c.setState = function (a) {
        b.prototype.setState.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setState(a);
        });
        return this;
      };
      c.setContentLengthHeader = function (a) {
        b.prototype.setContentLengthHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setContentLengthHeader(a);
        });
        return this;
      };
      c.setEdgeHitHeader = function (a) {
        b.prototype.setEdgeHitHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setEdgeHitHeader(a);
        });
        return this;
      };
      c.setOriginHitHeader = function (a) {
        b.prototype.setOriginHitHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setOriginHitHeader(a);
        });
        return this;
      };
      c.setCode = function (a) {
        b.prototype.setCode.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setCode(a);
        });
        return this;
      };
      c.setResponseTimeMsHeader = function (a) {
        b.prototype.setResponseTimeMsHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setResponseTimeMsHeader(a);
        });
        return this;
      };
      c.setIsTemplatedManifest = function (a) {
        b.prototype.setIsTemplatedManifest.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setIsTemplatedManifest(a);
        });
        return this;
      };
      c.setIsP2pPlayback = function (a) {
        b.prototype.setIsP2pPlayback.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setIsP2pPlayback(a);
        });
        return this;
      };
      c.setOneObserved = function (a) {
        b.prototype.setOneObserved.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setOneObserved(a);
        });
        return this;
      };
      c.setOneReqWave = function (a) {
        b.prototype.setOneReqWave.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setOneReqWave(a);
        });
        return this;
      };
      c.setOneResWave = function (a) {
        b.prototype.setOneResWave.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setOneResWave(a);
        });
        return this;
      };
      c.setAppendTarget = function (a) {
        b.prototype.setAppendTarget.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setAppendTarget(a);
        });
        return this;
      };
      c.setIsRingBufferSample = function (a) {
        b.prototype.setIsRingBufferSample.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setIsRingBufferSample(a);
        });
        return this;
      };
      c.setIsOnline = function (a) {
        b.prototype.setIsOnline.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setIsOnline(a);
        });
        return this;
      };
      c.setProxyStatusHeader = function (a) {
        b.prototype.setProxyStatusHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setProxyStatusHeader(a);
        });
        return this;
      };
      c.setPlaybackFbmsParam = function (a) {
        b.prototype.setPlaybackFbmsParam.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPlaybackFbmsParam(a);
        });
        return this;
      };
      c.setUserInfo = function (a) {
        b.prototype.setUserInfo.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setUserInfo(a);
        });
        return this;
      };
      c.setDynamicStatusHeader = function (a) {
        b.prototype.setDynamicStatusHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setDynamicStatusHeader(a);
        });
        return this;
      };
      c.log = function () {
        b.prototype.log.call(this),
          this.$OzMultiDestinationOperationLogger1.forEach(function (a) {
            return a.log();
          });
      };
      return a;
    })(c("oz-player/loggings/OzOperationLoggerBase"));
    g.OzMultiDestinationPerfLoggerProvider = a;
  },
  98
);
__d(
  "oz-player/loggings/OzPreInitLogger",
  [
    "oz-player/loggings/OzOperationLoggerBase",
    "oz-player/loggings/OzPerfLoggerProviderBase",
    "oz-player/shims/OzEventEmitter",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a, c) {
        a = b.call(this, a) || this;
        a.$OzPreInitOperationLogger1 = c;
        return a;
      }
      var c = a.prototype;
      c.log = function () {
        b.prototype.log.call(this), this.$OzPreInitOperationLogger1(this);
      };
      return a;
    })(c("oz-player/loggings/OzOperationLoggerBase"));
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.$OzPreInitLoggerProvider1 = !1),
          (d.$OzPreInitLoggerProvider2 = []),
          (d.$OzPreInitLoggerProvider3 = new (c(
            "oz-player/shims/OzEventEmitter"
          ))()),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.deactivate = function () {
        this.$OzPreInitLoggerProvider1 = !1;
      };
      d.activate = function () {
        var a = this;
        this.$OzPreInitLoggerProvider1 = !0;
        this.$OzPreInitLoggerProvider2.forEach(function (b) {
          a.$OzPreInitLoggerProvider3.emit("operation_logged", b);
        });
        this.$OzPreInitLoggerProvider2 = [];
      };
      d.setOperationLoggedListener = function (a) {
        return this.$OzPreInitLoggerProvider3.addListener(
          "operation_logged",
          function (b) {
            a(b);
          }
        );
      };
      d.createOperationLogger = function (a) {
        var b = this;
        a = new h(a, function (a) {
          b.$OzPreInitLoggerProvider1
            ? b.$OzPreInitLoggerProvider3.emit("operation_logged", a)
            : b.$OzPreInitLoggerProvider2.push(a);
        });
        return a;
      };
      d.createLoggerProvider = function () {
        return new b();
      };
      return b;
    })(c("oz-player/loggings/OzPerfLoggerProviderBase"));
    g.OzPreInitLoggerProvider = a;
  },
  98
);
__d(
  "oz-player/media_source/OzMediaErrorProvider",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.hasError = function () {
        return this.$1.error !== null;
      };
      b.getMediaErrorName = function () {
        var a = this.$1.error;
        return a && a.message ? this.$2(a.message) : null;
      };
      b.getErrorCode = function () {
        var a = this.$1.error;
        return a && a.code ? a.code : null;
      };
      b.getVideoNode = function () {
        return this.$1;
      };
      b.$2 = function (a) {
        a = a.replace(/([0-9]{2,})/g, function (a) {
          var b = "";
          while (b.length < a.length) b += "#";
          return b;
        });
        return a;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player/utils/OzSourceBufferUtil",
  ["oz-player/utils/OzNumericalRangeUtil"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = 0;
      for (var c = 0; c < a.buffered.length; c++)
        b += a.buffered.end(c) - a.buffered.start(c);
      return b;
    }
    function b(a) {
      return a.buffered.length == 0 ? 0 : a.buffered.start(0);
    }
    function d(a) {
      var b = null;
      try {
        b = a.buffered;
      } catch (a) {
        return 0;
      }
      return b.length == 0 ? 0 : b.end(b.length - 1);
    }
    function e(a) {
      var b = [];
      for (var c = 0; c < a.length; c++)
        b.push({ startTime: a.start(c), endTime: a.end(c) });
      return b;
    }
    function f(a, b, d) {
      d = new (c("oz-player/utils/OzNumericalRangeUtil"))({
        config: d,
      }).findCurrentRangeIndex(
        b,
        a.map(function (a) {
          return { rangeStart: a.startTime, rangeEnd: a.endTime };
        })
      );
      b = d >= 0 ? parseFloat((a[d].endTime - b).toFixed(3)) : 0;
      a = d >= 0 ? a.length - 1 - d : -1;
      return { bufferAheadSec: b, bufferedOffset: a };
    }
    g.getTotalBufferedTime = a;
    g.getStartBufferedTime = b;
    g.getEndBufferedTime = d;
    g.convertToBufferedTimeRangeArray = e;
    g.getBufferAheadInBufferedRanges = f;
  },
  98
);
__d(
  "oz-player/media_source/SourceBufferManagerUtils",
  [
    "oz-player/utils/OzNumericalRangeUtil",
    "oz-player/utils/OzSourceBufferUtil",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      if (a.getBool("generate_mos_segment_buffer_diff")) {
        var f = new (c("oz-player/utils/OzNumericalRangeUtil"))({
            config: a,
          }).convertFromTimeRanges(e.getBufferedRanges()),
          g = function () {
            var b = new (c("oz-player/utils/OzNumericalRangeUtil"))({
              config: a,
            }).firstAddedInSortedRanges(
              f,
              new (c("oz-player/utils/OzNumericalRangeUtil"))({
                config: a,
              }).convertFromTimeRanges(e.getBufferedRanges())
            );
            return {
              startTime: (b == null ? void 0 : b.rangeStart) || 0,
              endTime: (b == null ? void 0 : b.rangeEnd) || 0,
            };
          };
        return g;
      } else {
        var h = d("oz-player/utils/OzSourceBufferUtil").getEndBufferedTime(b);
        g = function () {
          var a = d("oz-player/utils/OzSourceBufferUtil").getEndBufferedTime(b);
          return { startTime: h, endTime: a };
        };
        return g;
      }
    }
    g.startMeasuringAppendedBuffer = a;
  },
  98
);
__d(
  "oz-player/shims/www/ozClearTimeoutWWW",
  ["clearTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("clearTimeout");
  },
  98
);
__d(
  "oz-player/shims/ozClearTimeout",
  ["oz-player/shims/www/ozClearTimeoutWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/ozClearTimeoutWWW");
  },
  98
);
__d(
  "oz-player/states/OzObservedSourceBufferState",
  [
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzSubscriptionsHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        var d = this;
        this.$2 = new (c("oz-player/shims/OzSubscriptionsHandler"))();
        this.$3 = [];
        this.$5 = new Set();
        this.$7 = function () {
          if (
            d.$4.getBool(
              "stable_buffered_timeranges_in_observedsourcebufferstate"
            )
          ) {
            var a;
            try {
              a = d.$1.buffered;
            } catch (a) {
              if (a.name === "InvalidStateError") {
                d.$3 = [];
                return;
              } else throw a;
            }
            var b = [];
            for (var c = 0; c < a.length; c++)
              b.push({ startTime: a.start(c), endTime: a.end(c) });
            d.$3 = b;
          } else {
            a = [];
            for (var c = 0; c < d.$1.buffered.length; c++)
              a.push({
                startTime: d.$1.buffered.start(c),
                endTime: d.$1.buffered.end(c),
              });
            d.$3 = a;
          }
        };
        this.$1 = a;
        this.$4 = b;
        this.$6();
      }
      var b = a.prototype;
      b.$6 = function () {
        var a = this;
        this.$2.release();
        this.$2 = new (c("oz-player/shims/OzSubscriptionsHandler"))();
        this.$2.addSubscriptions(
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "updateend",
            function () {
              a.$7();
              for (
                var b = a.$5.values(),
                  c = Array.isArray(b),
                  d = 0,
                  b = c
                    ? b
                    : b[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
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
                e();
              }
            }
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "error",
            this.$7
          )
        );
      };
      b.setSourceBuffer = function (a) {
        (this.$1 = a), this.$6(), this.$7();
      };
      b.getBufferedRanges = function () {
        return this.$3;
      };
      b.addEventListener = function (a, b) {
        var c = this;
        this.$5.add(b);
        return {
          remove: function () {
            c.$5["delete"](b);
          },
        };
      };
      b.destroy = function () {
        this.$5.clear(), this.$2.release(), this.$2.engage();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/utils/OzCustomErrorCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      APPEND_BUFFER_UNKNOWN_ERROR: "21539",
      APPEND_BUFFER_INVALID_STATE_ERROR_SOURCE_BUFFER_HAS_BEEN_REMOVED: "21540",
      APPEND_BUFFER_MEDIA_ERROR_ATTRIBUTE_NOT_NULL: "21541",
      APPEND_BUFFER_SOURCE_BUFFER_UPDATING_ATTRIBUTE_IS_TRUE: "21542",
      SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR: "21543",
      SOURCE_BUFFER_MANAGER_CREATE_ERROR: "21544",
      SETUP_STREAMS_PROMISE_REJECTION: "21545",
      APPEND_BUFFER_QUOTA_EXCEEDED_ERROR: "21546",
      APPEND_BUFFER_INVALID_STATE_ERROR: "21547",
      SOURCE_BUFFER_MANAGER_UPDATEEND_UNKNOWN_ERROR: "21548",
      NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR: "21549",
      STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR: "21550",
      SOURCE_BUFFER_MANAGER_CLEAR_RANGE_FAILED: "21551",
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "oz-player/media_source/SourceBufferManager",
  [
    "oz-player/loggings/OzLoggingUtils",
    "oz-player/media_source/SourceBufferManagerUtils",
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzDeferred",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/shims/OzStreams",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/ozClearTimeout",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
    "oz-player/states/OzObservedSourceBufferState",
    "oz-player/utils/OzCustomErrorCode",
    "oz-player/utils/OzError",
    "oz-player/utils/OzSourceBufferUtil",
    "oz-player/utils/ozConcatUint8Arrays",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, d, e, f) {
        var g = this;
        f === void 0 && (f = null);
        this.$3 = null;
        this.$4 = new (c("oz-player/shims/OzSubscriptionsHandler"))();
        this.$7 = !1;
        this.$8 = [];
        this.$12 = !1;
        this.$13 = !1;
        this.$15 = 0;
        this.$26 = function () {
          if (g.$10.hasError()) {
            g.$13 = !1;
            g.$12 = !1;
            var a = g.$10.getMediaErrorName();
            a =
              a !== null && a !== void 0
                ? a
                : "An unknown source buffer error occurred.";
            var b = g.$10.getErrorCode();
            b =
              b !== null && b !== void 0
                ? String(b)
                : c("oz-player/utils/OzCustomErrorCode")
                    .SOURCE_BUFFER_MANAGER_UPDATEEND_UNKNOWN_ERROR;
            a = new (c("oz-player/utils/OzError"))({
              type: "OZ_SOURCE_BUFFER",
              description: a,
              extra: { code: b },
            });
            if (g.$11.getBool("fix_operation_deferred_promise_lifecycle")) {
              b = g.$3;
              b && ((g.$3 = null), b.reject(a));
            } else g.$3 && g.$3.reject(a), (g.$3 = null);
            g.cancelOperationAndCleanQueue();
          } else
            g.$13 ||
              ((g.$13 = !0),
              g.$4.addSubscriptions(
                c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                  g.$10.getVideoNode(),
                  "error",
                  g.$26
                )
              ));
        };
        this.$17 = function () {
          var a = g.$1;
          if (a != null) {
            a.getOperationLogger("source_buffer_updateend")
              .setError((a = g.$10.getMediaErrorName()) != null ? a : void 0)
              .setCode(g.$10.getErrorCode())
              .setResult(g.$12 ? "failed" : "success")
              .log();
          }
          a = g.$3;
          a &&
            (g.$12
              ? g.$26()
              : g.$11.getBool("fix_operation_deferred_promise_lifecycle")
              ? ((g.$3 = null), a.resolve())
              : (a.resolve(), g.$3 && (g.$3 = null)));
        };
        this.$18 = function () {
          var a = g.$1;
          if (a != null) {
            a.getOperationLogger("source_buffer_error")
              .setError((a = g.$10.getMediaErrorName()) != null ? a : void 0)
              .setCode(g.$10.getErrorCode())
              .setResult("failed")
              .log();
          }
          g.$12 = !0;
        };
        this.$1 = f;
        this.$2 = a;
        this.$11 = b;
        this.$16();
        this.$9 = new (c("oz-player/states/OzObservedSourceBufferState"))(
          this.$2,
          this.$11
        );
        this.$10 = d;
        this.$14 = e;
      }
      var b = a.prototype;
      b.$16 = function () {
        this.$4.release(),
          (this.$4 = new (c("oz-player/shims/OzSubscriptionsHandler"))()),
          this.$4.addSubscriptions(
            c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$2,
              "updateend",
              this.$17
            ),
            c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$2,
              "error",
              this.$18
            )
          );
      };
      b.setSourceBuffer = function (a) {
        var b = this;
        return this.cancelOperationAndCleanQueue()
          ["catch"](function () {})
          .then(function () {
            (b.$2 = a), b.$16(), b.$9.setSourceBuffer(a);
          });
      };
      b.queueData = function (a, b, d, e) {
        b === void 0 && (b = null);
        d === void 0 && (d = 0);
        e === void 0 && (e = null);
        var f = new (c("oz-player/shims/OzDeferred"))(
          c("oz-player/shims/OzMaybeNativePromise")
        );
        this.$8.push({
          data: a,
          deferred: f,
          loggerProvider: b,
          appendTarget: d,
          onDataAppend: e,
        });
        a = f.getPromise();
        this.$7 || this.$19();
        return a;
      };
      b.cancelOperationAndCleanQueue = function (a) {
        a === void 0 && (a = null);
        var b = this.$20();
        this.$8.forEach(function (a) {
          a = a.deferred;
          a.reject(b);
        });
        this.$8 = [];
        try {
          this.$14() && (this.$10.hasError() || this.$2.abort());
        } catch (b) {
          var d = b;
          a &&
            a
              .cloneContext()
              .getOperationLogger("cancel_operation_abort_failed")
              .setError(d)
              .log();
          if (this.$11.getBool("throw_cancel_operation_abort_failed")) throw d;
        }
        a = c("oz-player/shims/OzMaybeNativePromise").resolve();
        d = this.$3;
        d &&
          (this.$11.getBool("fix_operation_deferred_promise_lifecycle") &&
            (this.$3 = null),
          d.reject(b),
          (a = d.getPromise()["catch"](function () {})));
        this.$5 && (this.$5.reject(b), (this.$5 = null));
        return a;
      };
      b.getSourceBufferState = function () {
        return this.$9;
      };
      b.clearRange = function (a, b) {
        if (this.$11.getBool("clear_sbm_buffer_on_byte_threshold")) {
          var c = this.getTotalTimeInBuffer(),
            d = this.getTotalTimeInBufferForRange(a, b);
          this.$15 *= c > 0 ? 1 - d / c : 0;
        }
        d = this.$11.getBool("throw_error_on_clear_buffer_on_seek_failed")
          ? Math.max(a, 0)
          : a;
        b > 0 && b > d && this.$2.remove(d, b);
      };
      b.$21 = function (a, b) {
        a = this.$11.getBool("throw_error_on_clear_buffer_on_seek_failed")
          ? Math.max(a, 0)
          : a;
        if (b > 0 && b > a) {
          var d = this.$22();
          this.clearRange(a, b);
          return d;
        }
        return c("oz-player/shims/OzMaybeNativePromise").resolve();
      };
      b.clearRangeWithWait = function (a, b) {
        var c = this,
          d = this.cancelOperationAndCleanQueue();
        d = d.then(function () {
          return c.$21(a, b);
        });
        return d;
      };
      b.clear = function () {
        if (this.$2.buffered.length > 0) {
          var a = d("oz-player/utils/OzSourceBufferUtil").getStartBufferedTime(
              this.$2
            ),
            b = d("oz-player/utils/OzSourceBufferUtil").getEndBufferedTime(
              this.$2
            );
          if (b > 0) return this.$21(a, b);
        }
        return this.cancelOperationAndCleanQueue();
      };
      b.$22 = function (a) {
        if (this.$11.getBool("fix_operation_deferred_promise_lifecycle")) {
          var b = null;
          if (this.$3)
            (b = this.$3.getPromise()),
              a &&
                d(
                  "oz-player/loggings/OzLoggingUtils"
                ).monitorPromiseAndLogOperation(b, a, "wait_for_source_buffer");
          else if (this.$2.updating) {
            var e = (this.$3 = new (c("oz-player/shims/OzDeferred"))(
              c("oz-player/shims/OzMaybeNativePromise")
            ));
            b = e.getPromise();
            a &&
              d(
                "oz-player/loggings/OzLoggingUtils"
              ).monitorPromiseAndLogOperation(b, a, "wait_for_source_buffer");
          } else return c("oz-player/shims/OzMaybeNativePromise").resolve();
        }
        e = this.$3 = new (c("oz-player/shims/OzDeferred"))(
          c("oz-player/shims/OzMaybeNativePromise")
        );
        b = e.getPromise();
        a &&
          d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(
            b,
            a,
            "wait_for_source_buffer"
          );
        return b;
      };
      b.$23 = function (a, b, e, f) {
        var g = this;
        if (this.$3 !== null)
          return c("oz-player/shims/OzMaybeNativePromise").reject(
            this.$24("cannot have concurrent appends")
          );
        var h = function h() {
          if (
            g.$11.getBool("sbm_recursively_waits_for_update_end") &&
            g.$2.updating
          )
            return g
              .$22(b)
              .then(h)
              ["catch"](function (a) {
                if (g.$11.getBool("enable_appends_on_wait_update_end_failure"))
                  return h();
                throw a;
              });
          if (
            g.$11.getBool("fix_operation_deferred_promise_lifecycle") &&
            g.$3 !== null
          )
            return c("oz-player/shims/OzMaybeNativePromise").reject(
              g.$24("cannot have concurrent appends (inner)")
            );
          var i = (g.$3 = new (c("oz-player/shims/OzDeferred"))(
              c("oz-player/shims/OzMaybeNativePromise")
            )),
            j = !1;
          try {
            (j = g.$2.updating), g.$2.appendBuffer(a);
          } catch (a) {
            var k = a,
              l = c(
                "oz-player/utils/OzCustomErrorCode"
              ).APPEND_BUFFER_UNKNOWN_ERROR,
              m = k.name,
              n = k.message;
            m === "QuotaExceededError"
              ? (l = c(
                  "oz-player/utils/OzCustomErrorCode"
                ).APPEND_BUFFER_QUOTA_EXCEEDED_ERROR)
              : g.$10.hasError()
              ? (l = c(
                  "oz-player/utils/OzCustomErrorCode"
                ).APPEND_BUFFER_MEDIA_ERROR_ATTRIBUTE_NOT_NULL)
              : j
              ? (l = c(
                  "oz-player/utils/OzCustomErrorCode"
                ).APPEND_BUFFER_SOURCE_BUFFER_UPDATING_ATTRIBUTE_IS_TRUE)
              : m === "InvalidStateError" &&
                typeof n === "string" &&
                /SourceBuffer has been removed/.test(n)
              ? (l = c(
                  "oz-player/utils/OzCustomErrorCode"
                ).APPEND_BUFFER_INVALID_STATE_ERROR_SOURCE_BUFFER_HAS_BEEN_REMOVED)
              : m === "InvalidStateError" &&
                (l = c(
                  "oz-player/utils/OzCustomErrorCode"
                ).APPEND_BUFFER_INVALID_STATE_ERROR);
            j = new (c("oz-player/utils/OzError"))({
              type:
                m === "QuotaExceededError" &&
                g.$11.getBool("append_retry_quota_exceeded_error")
                  ? "OZ_SOURCE_BUFFER_QUOTA_EXCEEDED"
                  : "OZ_SOURCE_BUFFER",
              description: String(n),
              extra: { originalError: k, code: l },
            });
            g.$3 = null;
            i.reject(j);
          }
          m = i.getPromise();
          b &&
            d(
              "oz-player/loggings/OzLoggingUtils"
            ).monitorPromiseAndLogOperation(m, b, "append", function (b) {
              var c;
              b.setLength(a.byteLength);
              c = (c = e == null ? void 0 : e.appendTarget) != null ? c : null;
              b.setAppendTarget(c);
            });
          return m.then(function () {
            f && f();
          });
        };
        if (!this.$11.getBool("sbm_waits_for_update_end")) return h();
        if (
          !this.$11.getBool("sbm_recursively_waits_for_update_end") &&
          this.$2.updating
        )
          return this.$22(b)
            .then(h)
            ["catch"](function (a) {
              if (g.$11.getBool("enable_appends_on_wait_update_end_failure"))
                return h();
              throw a;
            });
        this.$15 += a.byteLength;
        return h();
      };
      b.$19 = function () {
        var a = this;
        if (this.$7)
          return c("oz-player/shims/OzMaybeNativePromise").reject(
            this.$24("Another unit of queued data is being appended.")
          );
        var b = this.$8.shift();
        if (!b) {
          this.$7 = !1;
          return c("oz-player/shims/OzMaybeNativePromise").resolve();
        }
        var e = b.data,
          f = b.deferred,
          g = b.loggerProvider,
          h = b.appendTarget;
        b = b.onDataAppend;
        this.$7 = !0;
        e =
          e instanceof d("oz-player/shims/OzStreams").OzReadableStream
            ? this.$25(e, g, h, b)
            : this.$23(e, g, { appendTarget: h }, b);
        var i = d(
          "oz-player/media_source/SourceBufferManagerUtils"
        ).startMeasuringAppendedBuffer(this.$11, this.$2, this.$9);
        return e["catch"](function (a) {
          f.reject(a);
        }).then(function () {
          var b = i(),
            c = b.startTime;
          b = b.endTime;
          f.resolve({
            startTime_UNSAFE: c,
            endTime_UNSAFE: b,
            appendedSec: b - c,
          });
          a.$7 = !1;
          a.$19();
        });
      };
      b.$25 = function (a, b, d, e) {
        var f = this;
        this.$11.getBool("sbm_abort_on_append_new_readable_stream") &&
          this.$2.abort();
        var g = [],
          h = 0,
          i = a.getReader();
        a = function a() {
          var j = new (c("oz-player/shims/OzDeferred"))(
            c("oz-player/shims/OzMaybeNativePromise")
          );
          f.$5 = j;
          var k = null;
          f.$11.getNumber("sbm_read_timeout_ms") > 0 &&
            (k = c("oz-player/shims/ozSetTimeoutAcrossTransitions")(
              function () {
                var a = new (c("oz-player/utils/OzError"))({
                  type: "OZ_SOURCE_BUFFER",
                  description: "ReadableStreamReader.read() timed out.",
                  extra: {},
                });
                j.reject(a);
                f.$5 = null;
                f.$6 = k = null;
              },
              f.$11.getNumber("sbm_read_timeout_ms")
            ));
          i.read()
            .then(function (a) {
              j.resolve(a),
                (f.$5 = null),
                k &&
                  (c("oz-player/shims/ozClearTimeout")(k), (f.$6 = k = null));
            })
            ["catch"](function (a) {
              j.reject(a),
                (f.$5 = null),
                k &&
                  (c("oz-player/shims/ozClearTimeout")(k), (f.$6 = k = null));
            });
          return j.getPromise().then(
            function (i) {
              if (i.done) {
                var j = c("oz-player/utils/ozConcatUint8Arrays")(g);
                j = j.buffer;
                g.length = 0;
                h = 0;
                j = j;
                return j.byteLength > 0
                  ? f.$23(j, b, { appendTarget: d }, e)
                  : c("oz-player/shims/OzMaybeNativePromise").resolve();
              }
              j = i.value;
              i = null;
              var k = j;
              if (d > 0) {
                j = j instanceof Uint8Array ? j : new Uint8Array(j);
                g.push(j);
                h += j.byteLength;
                if (h >= d) {
                  j = c("oz-player/utils/ozConcatUint8Arrays")(g);
                  j = j.buffer;
                  g.length = 0;
                  h = 0;
                  k = j;
                }
              }
              k && k.byteLength >= d && (i = k);
              return i
                ? f.$23(i, b, { appendTarget: d }, e).then(function () {
                    return a();
                  })
                : a();
            },
            function (a) {
              if (f.$11.getBool("sbm_wait_for_abort_on_reject")) {
                var b = new (c("oz-player/shims/OzDeferred"))(
                    c("oz-player/shims/OzMaybeNativePromise")
                  ),
                  d = f.$3
                    ? f.$3.getPromise()
                    : c("oz-player/shims/OzMaybeNativePromise").resolve();
                d["catch"](function () {}).then(function () {
                  var c = f.$22();
                  f.$2.abort();
                  c.then(function () {
                    b.reject(a);
                  })["catch"](function () {
                    b.reject(a);
                  });
                });
                return b.getPromise();
              } else {
                f.$2.abort();
                return c("oz-player/shims/OzMaybeNativePromise").reject(a);
              }
            }
          );
        };
        return a();
      };
      b.$24 = function (a) {
        a = new Error(a);
        a.name = "invariant_violation";
        return a;
      };
      b.$20 = function () {
        var a = new Error("operation is cancelled");
        a.name = "cancelled";
        return a;
      };
      b.destroy = function () {
        var a = this;
        this.$6 && c("oz-player/shims/ozClearTimeout")(this.$6);
        this.$6 = null;
        var b = this.$3;
        if (b)
          if (this.$11.getBool("fix_operation_deferred_promise_lifecycle")) {
            var d = function () {
              (a.$3 = null),
                a.$4.release(),
                (a.$4 = new (c("oz-player/shims/OzSubscriptionsHandler"))());
            };
            this.$13
              ? b
                  .getPromise()
                  .then(
                    function () {
                      d();
                    },
                    function () {
                      d();
                    }
                  )
                  ["catch"](function () {})
              : (d(), b.reject(this.$20()));
          } else
            !this.$13
              ? (b.reject(this.$20()),
                (this.$3 = null),
                this.$4.release(),
                (this.$4 = new (c("oz-player/shims/OzSubscriptionsHandler"))()))
              : b.getPromise()["catch"](function () {
                  (a.$3 = null),
                    a.$4.release(),
                    (a.$4 = new (c(
                      "oz-player/shims/OzSubscriptionsHandler"
                    ))());
                });
        this.$9.destroy();
      };
      b.getTotalTimeInBufferForRange = function (a, b) {
        var c = this.$2.buffered,
          d = 0;
        for (var e = 0; e < c.length; ++e)
          a < c.end(e) &&
            b >= c.start(e) &&
            (d += Math.min(c.end(e), b) - Math.max(c.start(e), a));
        return d;
      };
      b.getTotalTimeInBuffer = function () {
        var a = this.$2.buffered,
          b = 0;
        for (var c = 0; c < a.length; ++c) b += a.end(c) - a.start(c);
        return b;
      };
      b.getTotalAppendedBytes = function () {
        return this.$15;
      };
      b.getDebug = function () {
        return { SourceBuffer: this.$2 };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/utils/OzErrorEmitter",
  ["oz-player/shims/OzEventEmitter", "oz-player/shims/ozvariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        b === void 0 && (b = !1);
        d = a.call(this) || this;
        d.$OzErrorEmitter1 = !1;
        d.$OzErrorEmitter2 = !1;
        d.$OzErrorEmitter3 = [];
        d.emitError = function (a) {
          !d.$OzErrorEmitter1
            ? d.$OzErrorEmitter2
              ? d.$OzErrorEmitter3.push(a)
              : d.$OzErrorEmitter1 || c("oz-player/shims/ozvariant")(0, 14038)
            : d.emit("error", a);
        };
        d.$OzErrorEmitter2 = b;
        return d;
      }
      var d = b.prototype;
      d.onError = function (a) {
        this.$OzErrorEmitter1 = !0;
        a = this.addListener("error", a);
        this.$OzErrorEmitter2 &&
          this.$OzErrorEmitter3.length > 0 &&
          this.$OzErrorEmitter3.forEach(this.emitError);
        return a;
      };
      return b;
    })(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/utils/OzMimeUtil",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return (a.split("/")[0] || "").trim();
    }
    f.getMimeType = a;
  },
  66
);
__d(
  "oz-player/utils/ozGetErrorNameFromMediaErrorCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (a) {
        case 1:
          return "MEDIA_ERR_ABORTED";
        case 2:
          return "MEDIA_ERR_NETWORK";
        case 3:
          return "MEDIA_ERR_DECODE";
        case 4:
          return "MEDIA_ERR_SRC_NOT_SUPPORTED";
        default:
      }
      return "MEDIA_ERR_UNKNOWN";
    }
    f["default"] = a;
  },
  66
);
__d(
  "oz-player/media_source/MediaSourceManager",
  [
    "oz-player/loggings/OzLoggingUtils",
    "oz-player/loggings/OzMultiDestinationPerfLogger",
    "oz-player/media_source/OzMediaErrorProvider",
    "oz-player/media_source/SourceBufferManager",
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzDeferred",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/ozClearTimeout",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
    "oz-player/utils/OzCustomErrorCode",
    "oz-player/utils/OzError",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/OzMimeUtil",
    "oz-player/utils/ozGetErrorNameFromMediaErrorCode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, e) {
        var f = this;
        e === void 0 &&
          (e = new (d(
            "oz-player/loggings/OzMultiDestinationPerfLogger"
          ).OzMultiDestinationPerfLoggerProvider)([]));
        this.$3 = new (c("oz-player/shims/OzSubscriptionsHandler"))();
        this.$4 = new (c("oz-player/shims/OzSubscriptionsHandler"))();
        this.$6 = [];
        this.$7 = new Map();
        this.$8 = [];
        this.$10 = !1;
        this.$12 = !1;
        this.$13 = !1;
        this.$14 = !1;
        this.$15 = !1;
        this.$17 = null;
        this.$18 = null;
        this.$19 = new (c("oz-player/utils/OzErrorEmitter"))();
        this.$24 = function () {
          f.$27() || (f.$10 = !1);
          if (!f.$28()) return;
          var a = f.$8.shift();
          a && (a(f.$2), (f.$10 = !0));
        };
        this.$5 = e;
        this.$11 = b;
        this.$1 = a;
        this.$9 = new (c("oz-player/media_source/OzMediaErrorProvider"))(
          this.$1
        );
        this.$3.addSubscriptions(
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "error",
            function () {
              var a;
              f.$5
                .getOperationLogger("media_element_error")
                .setError((a = f.$9.getMediaErrorName()) != null ? a : void 0)
                .setCode(f.$9.getErrorCode())
                .setResult("failed")
                .log();
              f.$8 = [];
              f.$6 = [];
              f.$4.release();
              f.$4 = new (c("oz-player/shims/OzSubscriptionsHandler"))();
              f.$15 = f.$15 || f.$14 || f.$13;
              if (f.$18 != null) {
                a = f.$1.error;
                var b = new Error(a == null ? void 0 : a.message);
                b.name = c("oz-player/utils/ozGetErrorNameFromMediaErrorCode")(
                  (a == null ? void 0 : a.code) || 0
                );
                f.$19.emitError(b);
                return;
              }
              f.$18 = f.$1.currentTime;
              f.$17 == null &&
                (f.$17 = c("oz-player/shims/ozSetTimeoutAcrossTransitions")(
                  function () {
                    (f.$17 = null),
                      f.$11.getBool("retry_video_element_error") && f.$20();
                  },
                  0
                ));
            }
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "play",
            function () {
              f.$14 = !0;
            }
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "playing",
            function () {
              (f.$14 = !1), (f.$15 = !1), (f.$18 = null), (f.$13 = !0);
            }
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "pause",
            function () {
              (f.$14 = !1), (f.$13 = !1), (f.$15 = !!f.$1.error);
            }
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "ended",
            function () {
              (f.$14 = !1), (f.$13 = !1);
            }
          )
        );
        this.$2 = new MediaSource();
        this.$1.src = window.URL.createObjectURL(this.$2);
        d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(
          this.$21(),
          this.$5,
          "media_source_open"
        );
      }
      var b = a.prototype;
      b.$20 = function () {
        var a = this,
          b = [];
        this.$7.forEach(function (a) {
          b.push(a.cancelOperationAndCleanQueue());
        });
        var d = c("oz-player/shims/OzMaybeNativePromise").all(b);
        d = d.then(function () {
          if (a.$11.getBool("abort_clear_video_node_on_detach") && a.$12)
            return;
          var b = a.$1.src;
          a.$11.getBool("create_new_media_source_on_node_reset") &&
            (a.$2 = new MediaSource());
          a.$1.src = window.URL.createObjectURL(a.$2);
          window.URL.revokeObjectURL(b);
          return a.$21().then(function () {
            var b = [];
            a.$7.forEach(function (d, e) {
              var f = a.$22(e),
                c = d.setSourceBuffer(f).then(function () {
                  a.$23(f, d, e);
                });
              b.push(c);
            });
            return c("oz-player/shims/OzMaybeNativePromise").all(b);
          });
        });
        d.then(function () {
          if (a.$11.getBool("abort_clear_video_node_on_detach") && a.$12)
            return;
          a.$16 && a.$16();
          a.$18 != null && (a.$1.currentTime = a.$18);
          if (a.$15) return a.$1.play()["catch"](function () {});
        })["catch"](function (b) {
          if (a.$11.getBool("abort_clear_video_node_on_detach") && a.$12)
            return;
          a.$19.emitError(b);
        });
      };
      b.$21 = function () {
        var a = this;
        if (this.$2.readyState === "open")
          return c("oz-player/shims/OzMaybeNativePromise").resolve();
        var b = new (c("oz-player/shims/OzDeferred"))(
          c("oz-player/shims/OzMaybeNativePromise")
        );
        this.$3.addSubscriptions(
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$2,
            "sourceopen",
            function () {
              b.resolve(), a.$24();
            }
          )
        );
        return b.getPromise();
      };
      b.$22 = function (a, b) {
        var d = this;
        b === void 0 && (b = !1);
        var e;
        try {
          e = this.$2.addSourceBuffer(a);
          if (this.$11.getBool("stub_safari_source_buffer_abort"))
            try {
              var f = e.abort,
                g = function () {
                  d.$13 && f.call(e);
                };
              e.abort = function () {
                g();
              };
            } catch (a) {}
        } catch (b) {
          a = new (c("oz-player/utils/OzError"))({
            type: "OZ_SOURCE_BUFFER",
            description:
              'Failed to addSourceBuffer("' +
              a +
              '"): ' +
              (b.message || String(b)),
            extra: {
              originalError: b,
              code: c(
                "oz-player/utils/OzCustomErrorCode"
              ).SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR.toString(),
            },
          });
          throw a;
        }
        b && !isNaN(this.$2.duration) && (e.appendWindowEnd = this.$2.duration);
        this.$6.push(e);
        return e;
      };
      b.$23 = function (a, b, e) {
        var f = this,
          g = d("oz-player/utils/OzMimeUtil").getMimeType(e);
        this.$4.addSubscriptions(
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            a,
            "updateend",
            function () {
              var a = b.getTotalAppendedBytes(),
                c = f.$25(g);
              if (
                c > 0 &&
                a >= c &&
                f.$11.getBool("clear_sbm_buffer_on_byte_threshold")
              ) {
                a = Math.max(0, f.$1.currentTime - f.$26());
                a > 0 && b.clearRangeWithWait(0, a);
              }
              f.$24();
            }
          )
        );
      };
      b.createSourceBufferManager = function (a, b) {
        var e = this;
        b === void 0 && (b = !1);
        return this.$21()
          .then(function () {
            var f = e.$22(a, b),
              g = new (c("oz-player/media_source/SourceBufferManager"))(
                f,
                e.$11,
                e.$9,
                function () {
                  return e.$2.readyState !== "closed";
                },
                e.$5
                  .cloneContext()
                  .setType(d("oz-player/utils/OzMimeUtil").getMimeType(a))
              );
            e.$23(f, g, a);
            e.$7.set(a, g);
            return g;
          })
          ["catch"](function (a) {
            if (a instanceof c("oz-player/utils/OzError")) throw a;
            else {
              a = new (c("oz-player/utils/OzError"))({
                type: "OZ_SOURCE_BUFFER",
                description:
                  "Failed to create SBM: " + (a.message || String(a)),
                extra: {
                  originalError: a,
                  code: c(
                    "oz-player/utils/OzCustomErrorCode"
                  ).SOURCE_BUFFER_MANAGER_CREATE_ERROR.toString(),
                },
              });
              throw a;
            }
          });
      };
      b.setOnClearVideoNodeError = function (a) {
        this.$16 = a;
      };
      b.getMediaSource = function () {
        return this.$2;
      };
      b.notifyEndOfStream = function (a) {
        var b = this,
          d = new (c("oz-player/shims/OzDeferred"))(
            c("oz-player/shims/OzMaybeNativePromise")
          );
        this.$3.addSubscriptions(
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$2,
            "sourceended",
            function () {
              d.resolve();
            }
          )
        );
        this.$8.push(function (c) {
          b.$11.getBool("check_mediasource_readystate_before_end_of_stream")
            ? c.readyState === "open" &&
              (a(b.$5.getOperationLogger("end_of_stream")).log(),
              c.endOfStream())
            : (a(b.$5.getOperationLogger("end_of_stream")).log(),
              c.endOfStream());
        });
        this.$24();
        return d.getPromise();
      };
      b.updateDuration = function (a) {
        this.$8.push(function (b) {
          b.duration = a;
        }),
          this.$24();
      };
      b.detach = function () {
        this.$17 &&
          (c("oz-player/shims/ozClearTimeout")(this.$17), (this.$17 = null));
        var a = this.$1.src;
        this.$1.removeAttribute("src");
        for (var b = 0; b < this.$2.sourceBuffers.length; b++) {
          var d = this.$2.sourceBuffers[b];
          this.$2.removeSourceBuffer(d);
        }
        this.$11.getBool("revoke_object_url_on_detach") &&
          window.URL.revokeObjectURL(a);
        this.$3.release();
        this.$3.engage();
        this.$4.release();
        this.$4.engage();
        this.$8 = [];
        this.$10 = !1;
        this.$12 = !0;
      };
      b.$28 = function () {
        return (
          !this.$27() && this.$2.readyState === "open" && !this.$10 && !this.$12
        );
      };
      b.$27 = function () {
        return this.$6.some(function (a) {
          return a.updating;
        });
      };
      b.$26 = function () {
        return this.$11.getNumber("min_buffer_behind_playhead");
      };
      b.$25 = function (a) {
        var b = {
          audio: this.$11.getNumber("audio_byte_threshold_to_clear_buffer"),
          video: this.$11.getNumber("video_byte_threshold_to_clear_buffer"),
        };
        return (b = b[a]) != null ? b : 0;
      };
      b.onError = function (a) {
        return this.$19.onError(a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/utils/maybeConvertReadableStreamToOzReadableStream",
  ["oz-player/shims/OzStreams", "regeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (!d("oz-player/shims/OzStreams").OzReadableStreamIsPolyfilled)
        return a;
      var c = a.getReader();
      return new (d("oz-player/shims/OzStreams").OzReadableStream)({
        start: function (a) {
          var d;
          return b("regeneratorRuntime").async(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(c.read());
                  case 3:
                    d = e.sent;
                    if (!d.done) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("break", 9);
                  case 6:
                    a.enqueue(d.value);
                    e.next = 0;
                    break;
                  case 9:
                    a.close();
                  case 10:
                  case "end":
                    return e.stop();
                }
            },
            null,
            this
          );
        },
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/utils/convertPrefetchCacheEntryToReadableStream",
  [
    "oz-player/shims/OzStreams",
    "oz-player/utils/OzError",
    "oz-player/utils/maybeConvertReadableStreamToOzReadableStream",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = new (d("oz-player/shims/OzStreams").OzReadableStream)({
        start: function (b) {
          a.then(function (a) {
            switch (a.initiator) {
              case "XHR_REQUEST":
                var d = new Uint8Array(a.response);
                b.enqueue(d);
                b.close();
                break;
              case "FETCH":
                d = a.response.body;
                if (d != null) {
                  var e = function a() {
                      f.read()
                        .then(function (c) {
                          if (c.done) {
                            b.close();
                            return;
                          }
                          b.enqueue(c.value);
                          a();
                        })
                        ["catch"](function (a) {
                          b.err(a);
                        });
                    },
                    f = c(
                      "oz-player/utils/maybeConvertReadableStreamToOzReadableStream"
                    )(d).getReader();
                  e();
                } else
                  a.response
                    .arrayBuffer()
                    .then(function (a) {
                      a = new Uint8Array(a);
                      b.enqueue(a);
                      b.close();
                    })
                    ["catch"](function (a) {
                      b.err(a);
                    });
                break;
              default:
                a.initiator,
                  b.error(
                    new (c("oz-player/utils/OzError"))({
                      type: "OZ_UNEXPECTED_CACHE_INITIATOR",
                      description:
                        "Unable to handle request initiator: " + a.initiator,
                    })
                  );
            }
          })["catch"](function (a) {
            b.error(a);
          });
        },
      });
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/media_source/OzQuickStarter",
  [
    "oz-player/configs/OzConfigUtils",
    "oz-player/loggings/OzLoggingUtils",
    "oz-player/loggings/OzPreInitLogger",
    "oz-player/media_source/MediaSourceManager",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/ozvariant",
    "oz-player/utils/OzError",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/convertPrefetchCacheEntryToReadableStream",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 0.1;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f) {
        var g;
        f === void 0 && (f = []);
        g = a.call(this) || this;
        g.$OzQuickStarter5 = new Map();
        g.$OzQuickStarter6 = [];
        g.$OzQuickStarter8 = new Map();
        g.$OzQuickStarter9 = new Map();
        g.$OzQuickStarter10 = new (c("oz-player/utils/OzErrorEmitter"))(!0);
        g.$OzQuickStarter13 = function (a) {
          a = a;
          a instanceof c("oz-player/utils/OzError") ||
            (a = new (c("oz-player/utils/OzError"))({
              type: "OZ_QUICKSTARTER",
              description: a.message,
              extra: { originalError: a },
            }));
          g.$OzQuickStarter10.emitError(a);
        };
        g.$OzQuickStarter3 = b;
        g.$OzQuickStarter1 = d(
          "oz-player/configs/OzConfigUtils"
        ).provideConfigWithDefaults(e);
        g.$OzQuickStarter7 = new (d(
          "oz-player/loggings/OzPreInitLogger"
        ).OzPreInitLoggerProvider)();
        g.$OzQuickStarter7.setInitiator("quick_starter");
        g.$OzQuickStarter6.push(g.$OzQuickStarter7);
        g.$OzQuickStarter2 = new (c(
          "oz-player/media_source/MediaSourceManager"
        ))(g.$OzQuickStarter3, g.$OzQuickStarter1, g.$OzQuickStarter7);
        g.$OzQuickStarter4 = new Map();
        f.forEach(function (a) {
          return g.addPrefetchTrack(a);
        });
        return g;
      }
      var e = b.prototype;
      e.addPrefetchTrack = function (a) {
        var b = this,
          e = a.mimeCodec,
          f = this.$OzQuickStarter11(e);
        if (!f) return;
        var g = this.$OzQuickStarter11(e),
          h = this.$OzQuickStarter12(this.$OzQuickStarter7).setType(g),
          i = this.$OzQuickStarter12(this.$OzQuickStarter7).setType(
            g + ";init"
          );
        h.setRepresentationID(a.representationID);
        i.setRepresentationID(a.representationID);
        this.$OzQuickStarter5.set(f, a.segmentPromise ? 1 : 0);
        g = this.$OzQuickStarter2
          .createSourceBufferManager(e)
          .then(function (e) {
            var g = c(
              "oz-player/utils/convertPrefetchCacheEntryToReadableStream"
            )(a.initializationPromise);
            d(
              "oz-player/loggings/OzLoggingUtils"
            ).monitorPromiseAndLogOperation(
              a.initializationPromise,
              i,
              "fetch_stream"
            );
            e.queueData(g, i)["catch"](b.$OzQuickStarter13);
            g = a.segmentPromise;
            if (g) {
              var j = c(
                "oz-player/utils/convertPrefetchCacheEntryToReadableStream"
              )(g);
              d(
                "oz-player/loggings/OzLoggingUtils"
              ).monitorPromiseAndLogOperation(g, h, "fetch_stream");
              e.queueData(j, h)
                .then(function (a) {
                  b.$OzQuickStarter8.set(f, a.appendedSec),
                    b.$OzQuickStarter1.getBool(
                      "call_end_of_stream_in_quick_starter"
                    ) &&
                      b.$OzQuickStarter8.size === b.$OzQuickStarter4.size &&
                      b.$OzQuickStarter14() &&
                      (b.$OzQuickStarter2.notifyEndOfStream(function (a) {
                        return a
                          .setInitiator("quick_starter")
                          .setReason("every_end_near_duration");
                      }),
                      b.emit("streamEnd")),
                    b.$OzQuickStarter1.getBool("seek_to_start_quick_starter") &&
                      b.$OzQuickStarter8.size === b.$OzQuickStarter4.size &&
                      b.$OzQuickStarter15();
                })
                ["catch"](b.$OzQuickStarter13);
            }
            return e;
          });
        this.$OzQuickStarter4.set(f, g);
        a.representationID && this.$OzQuickStarter9.set(f, a.representationID);
      };
      e.onError = function (a) {
        return this.$OzQuickStarter10.onError(a);
      };
      e.$OzQuickStarter15 = function () {
        var a =
          this.$OzQuickStarter3.buffered.length > 0
            ? this.$OzQuickStarter3.buffered.start(0)
            : null;
        a !== null &&
          this.$OzQuickStarter3.currentTime < a &&
          (this.$OzQuickStarter3.currentTime = a + h);
      };
      e.$OzQuickStarter14 = function () {
        var a = this;
        if (Number.isNaN(this.$OzQuickStarter3.duration)) return !1;
        var b = !0;
        this.$OzQuickStarter8.forEach(function (c) {
          Math.abs(c - a.$OzQuickStarter3.duration) > h && (b = !1);
        });
        return b;
      };
      e.getSourceBufferManagerPromise = function (a) {
        a = this.$OzQuickStarter11(a);
        return this.$OzQuickStarter4.get(a);
      };
      e.getPrependedSegmentsCount = function (a) {
        var b = this.$OzQuickStarter11(a);
        if (!b) return 0;
        b = this.$OzQuickStarter5.get(b) || 0;
        return this.getSourceBufferManagerPromise(a) ? b : 0;
      };
      e.getRepresentationId = function (a) {
        a = this.$OzQuickStarter11(a);
        return !a ? null : this.$OzQuickStarter9.get(a) || null;
      };
      e.getAudioRepresentationIDAtTime = function (a) {
        return this.$OzQuickStarter16("audio", a);
      };
      e.getVideoRepresentationIDAtTime = function (a) {
        return this.$OzQuickStarter16("video", a);
      };
      e.getVideoNode = function () {
        return this.$OzQuickStarter3;
      };
      e.getMediaSourceManager = function () {
        return this.$OzQuickStarter2;
      };
      e.getObservedOperationLoggers = function () {
        return this.$OzQuickStarter6;
      };
      e.$OzQuickStarter16 = function (a, b) {
        var c = this.$OzQuickStarter8.get(a);
        return c != null && b <= c ? this.$OzQuickStarter9.get(a) : null;
      };
      e.$OzQuickStarter12 = function (a) {
        a = a.cloneContext();
        a instanceof
          d("oz-player/loggings/OzPreInitLogger").OzPreInitLoggerProvider ||
          c("oz-player/shims/ozvariant")(0, 5677);
        this.$OzQuickStarter6.push(a);
        return a;
      };
      e.$OzQuickStarter11 = function (a) {
        return (a.split("/")[0] || "").trim();
      };
      return b;
    })(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a;
  },
  98
);
