if (self.CavalryLogger) {
  CavalryLogger.start_js(["XXYYgnP"]);
}

__d(
  "InstreamVideoAdBreaksPlayer_adBreaks$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "index",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "instream_placement",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "InstreamVideoAdBreaksPlayer_adBreaks$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "InstreamVideoAdBreak",
            kind: "LinkedField",
            name: "mid_rolls",
            plural: !0,
            selections: [
              a,
              b,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "time_offset_in_ms",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "InstreamVideoAdBreak",
            kind: "LinkedField",
            name: "pre_roll",
            plural: !1,
            selections: [a, b],
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
  "useVideoPlayerShakaPerformanceLoggerRelayImpl_init$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "useVideoPlayerShakaPerformanceLoggerRelayImpl_init$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "InstreamVideoAdBreaksPlayerDeferred.react",
  ["deferredLoadComponent", "react", "requireDeferred"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("deferredLoadComponent")(
      c("requireDeferred")("InstreamVideoAdBreaksPlayer.react").__setRef(
        "InstreamVideoAdBreaksPlayerDeferred.react"
      )
    );
    g["default"] = a;
  },
  98
);
__d(
  "ShakaConstants",
  [],
  function (a, b, c, d, e, f) {
    a = {
      abort_loading_delay: 2e4,
      abr_abort_on_zero_stream_progress_below_threshold: -1,
      abr_abort_when_fetch_estimate_exceeds_buffer_factor: 0,
      abr_abort_when_fetch_estimate_exceeds_time: 0,
      append_window_end_fudge_factor: 0,
      audio_request_pipeline_max_concurrent_requests: 1,
      audio_request_pipeline_soothing_factor: 1,
      audio_video_buffer_diff_threshold: 14400,
      autoplay_start_video_interval: 200,
      back_off_buffering_overflow_max: 5,
      back_off_buffering_overflow_time_factor: 2,
      back_off_buffering_overflow_time_window: 2e3,
      bandwidth_downgrade_target: 0.9,
      bandwidth_penalty_decay_per_video: 1,
      bandwidth_standard_deviation_penalty_factor: 0.1,
      buffer_downgrade_threshold: 10,
      buffer_replacement_ahead_threshold: 15,
      buffer_replacement_behind_threshold: 5,
      buffer_target: -1,
      buffer_target_overflow_upgrade_aggressiveness: 1,
      buffer_target_underflow_upgrade_aggressiveness: 1,
      buffer_velocity_time_in_past_to_consider: 0,
      buffering_count_threshold: 5,
      buffering_spinner_delay_ms: 0,
      buffering_underflow_threshold: 0.05,
      clear_buffer_on_constraint_change_offset: 5,
      clear_buffer_on_constraint_change_paused_offset: 5,
      clear_buffer_on_seek_back_delta: 0,
      decouple_stream_on_update_loop_from_request_loop_int: 0,
      fast_moving_average_half_life: 3,
      frame_drop_penalty_factor: 0,
      frame_drop_penalty_minimum_frame_count: 0,
      global_scheduler_priority_downgrade_bufferahead_threshold: 0,
      global_scheduler_priority_threshold: 6,
      hvq_inline_upgrade_aggressiveness: 1,
      hvq_upgrade_aggressiveness: 1,
      initial_stream_buffer_size_for_blocked_autoplay: 5.9335983320607,
      initial_stream_buffer_size_for_video_stream: 0,
      jump_to_live_threshold: 0.5,
      live_bandwidth_downgrade_target: 1,
      live_bitrate_estimates_half_life: 1,
      live_bitrate_estimates_large_sample_weight_factor: 10,
      live_bitrate_estimates_minimum_sample_count: 1,
      live_buffering_underflow_threshold: 0.5,
      live_data_fetch_max_retries: 0,
      live_dynamic_stream_buffer_size: 12,
      live_hvq_inline_upgrade_aggressiveness: 1,
      live_hvq_upgrade_aggressiveness: 1,
      live_interruption_consecutive_updates_with_change: 3,
      live_interruption_consecutive_updates_without_change: 5,
      live_max_manifest_fetches_with_push: 1,
      live_max_segments_to_push: 1,
      live_playhead_idle_all_stream_threshold: 4,
      live_playhead_idle_single_stream_threshold: 5,
      live_pre_hvq_inline_upgrade_aggressiveness: 1,
      live_pre_hvq_upgrade_aggressiveness: 1,
      live_predictive_abr_down_buffer: 5e3,
      live_predictive_abr_floor_swich_lanes: -2,
      live_predictive_abr_floor_ttfb_ratio: 5,
      live_predictive_abr_ttfb_ratio: 1.8,
      live_predictive_abr_up_buffer: 9e3,
      live_predictive_abr_up_retry_interval: 3e4,
      live_rewind_templated_last_x_segments_only: 0,
      live_source_buffer_clear_max_retries: 0,
      live_stream_end_slack: 0.5,
      live_stream_end_timeout: 6e4,
      living_room_play_x_milliseconds_before_seek: 0,
      living_room_playhead_catchup_interval: 0,
      local_bitrate_segments_ahead: 10,
      logging_log_event_limit: 1e3,
      low_buffer_velocity_abr_interval: 500,
      low_buffer_velocity_abr_interval_buffer_threshold: 10,
      low_buffer_velocity_threshold: 0,
      low_pri_task_min_bytes_to_yield: 0,
      low_pri_task_yield_check_interval: 0,
      low_pri_task_yields_per_task: 0,
      max_bandwidth_update_interval: 0,
      max_network_interrupted_time_before_seek: 1e4,
      max_prefetch_request_num: 0,
      max_prefetch_videos_num: 2,
      max_recent_bandwidth_samples: 25,
      maximum_bandwidth_bitrate_ratio: 1.5,
      maximum_mos_to_decrease: 3,
      min_mpd_refresh_interval: 1e3,
      min_sample_count: 1e4,
      minimum_sample_count_to_use_deviation_penalty: 2,
      minimum_sample_count_to_use_new_estimator: 0,
      minimum_samples_to_use_neural_estimate: 1,
      minimum_weight_to_trust_local_bandwidth_estimate: 0.5,
      multiple_videos_queue_penalty_start_count: 2,
      neural_estimate_weight: 0,
      new_estimator_half_life: 5,
      new_estimator_standard_deviation_exclusion_factor: 2,
      pending_seek_while_playing_delay: 2e3,
      pending_seek_while_playing_offset_from_livehead: 4e3,
      playhead_fragmented_gap_diff_allowance: 0.1,
      pre_hvq_inline_upgrade_aggressiveness: 1,
      pre_hvq_upgrade_aggressiveness: 1,
      priority_precision: 1,
      recursive_native_settimeout_delay: -1,
      recursive_ric_timeout: 17,
      request_bounded_animation_frame_bound: 50,
      request_pipeline_max_concurrent_requests: 2,
      request_pipeline_soothing_factor: 2,
      request_pipeline_timeout_ms: 0,
      resolution_constraint_max_height: 0,
      resolution_constraint_max_width: 0,
      ric_autoplay_bound: 50,
      rl_bandwidth_scale: 1e6,
      rl_bitrate_reward: 1,
      rl_buffer_scale: 10,
      rl_max_number_of_bitrates: 10,
      rl_model_id: 0,
      rl_playback_scale: 2e5,
      rl_request_timeout: 1e3,
      rl_stall_count_penalty: 30,
      rl_stall_time_penalty: 0,
      rl_watch_time_reward: 0,
      scheduled_videos_start_stream_buffer_size_threshold: 0,
      scheduler_priority_update_interval: 1e3,
      settimeout_polling_delay: 17,
      shaka_default_ajax_request_timeout_ms: 0,
      shaka_default_request_timeout_timescale: 1e3,
      skip_manifest_gap_boundary_precision_ms: 1e3,
      slow_moving_average_half_life: 10,
      stream_maximum_onpause_buffer_size_multiplier: 0,
      stream_onupdate_sampling: 0,
      streaming_append_per_segment: 3,
      templated_adjust_stream_limits_start_offset: 0,
      templated_adjust_stream_limits_start_offset_int: 10,
      templated_chunked_segment_update_limit_int: 10,
      templated_ingest_throttle: 0,
      templated_jump_to_live_sidx_end_offset: 0,
      templated_quarantine_idle_references_threshold: 0,
      templated_use_perf_test_segment_index_base_int: 0,
      video_dash_prefetch_cache_retention_duration_ms: 5e3,
    };
    b = {
      block_play_request_http_status_list: "410",
      defer_which_video_to_abort_loading_decisioning_logic: "live",
      feature_param: "",
      live_abr_audio_push_representation: "live-md-a",
      live_abr_initial_push_representation: "live-md-v",
      rl_smc_tier: "repomen_1",
      segment_update_helper_splice_path_entity_key: "",
      templated_perf_test_methods_under_test_csv_string: "all",
    };
    c = { numbers: a, strings: b };
    f["default"] = c;
  },
  66
);
__d(
  "VideoPlayerMainThreadAvailability",
  ["ShakaConstants", "Visibility", "performanceNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = window.__fbNativeSetTimeout,
      i = a.__fbNativeClearTimeout,
      j = window.requestIdleCallback,
      k = window.cancelIdleCallback,
      l = function (a, b) {
        var c = function c() {
          a(c, b);
        };
        return c;
      };
    b = (function () {
      function a() {
        (this.$1 = !1), (this.$2 = null), (this.$3 = null), (this.$4 = null);
      }
      var b = a.prototype;
      b.enable = function () {
        if (this.$1 || !this.$5()) return;
        this.$6();
        this.$7();
        this.$1 = !0;
      };
      b.getTimeSinceMainThreadAvailable = function () {
        return this.$2 != null ? c("performanceNow")() - Number(this.$2) : null;
      };
      b.$8 = function () {
        this.$2 = c("Visibility").isHidden() ? null : c("performanceNow")();
      };
      b.$9 = function () {
        (this.$2 = null),
          typeof this.$4 === "number" && (k(this.$4), (this.$4 = null)),
          typeof this.$3 === "number" && (i(this.$3), (this.$3 = null));
      };
      b.$7 = function () {
        this.$10();
      };
      b.$6 = function () {
        var a = this;
        c("Visibility").addListener(c("Visibility").VISIBLE, function () {
          a.$9(), a.$7();
        });
        c("Visibility").addListener(c("Visibility").HIDDEN, function () {
          a.$9();
        });
      };
      b.$10 = function () {
        var a = this,
          b = c("ShakaConstants").numbers.settimeout_polling_delay;
        if (b > -1) {
          var d = function c() {
            a.$8(), (a.$3 = h(c, b));
          };
          h(d, b);
        }
      };
      b.$5 = function () {
        return (
          c("Visibility").isSupported() &&
          typeof j === "function" &&
          typeof k === "function" &&
          typeof h === "function" &&
          typeof i === "function"
        );
      };
      b.maybeEnablePerformanceTest = function () {
        var a,
          b = c("ShakaConstants").numbers.recursive_ric_timeout;
        b > -1 && { timeout: b };
        b = c("ShakaConstants").numbers.recursive_native_settimeout_delay;
        b > -1 && typeof h === "function" && (a = l(h, b));
        a && a();
      };
      return a;
    })();
    d = new b();
    g["default"] = d;
  },
  98
);
__d(
  "VideoPlayerDashPerformanceLoggerEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1962341");
    c = b("FalcoLoggerInternal").create(
      "video_player_dash_performance_logger_event",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "VideoPlayerDashPerformanceLoggerPayloadBuilder",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      access_token: void 0,
      additional_buffered_ranges: void 0,
      append_target: void 0,
      appended_buffer_ms: void 0,
      bandwidth_estimate: void 0,
      client_time_begin: void 0,
      client_time_duration: void 0,
      client_time_end: void 0,
      code: void 0,
      concluder: void 0,
      connection_quality_level: void 0,
      content_length_header: void 0,
      device_pixel_ratio_float: void 0,
      dropped_frames: void 0,
      dynamic_bitrate: void 0,
      edge_hit_header: void 0,
      ended: void 0,
      error: void 0,
      event: void 0,
      expected_length: void 0,
      fbls_to_ply_dis_ms: void 0,
      initiator: void 0,
      is_drm: void 0,
      is_live: void 0,
      is_muted: void 0,
      is_online: void 0,
      is_p2p_playback: void 0,
      is_page_visible: void 0,
      is_ring_buffer_sample: void 0,
      is_servable_via_fbms: void 0,
      is_templated_manifest: void 0,
      last_buffered_end: void 0,
      last_buffered_start: void 0,
      last_buffering_event_end_time: void 0,
      last_buffering_event_start_time: void 0,
      last_playing_event_time: void 0,
      length: void 0,
      livehead_delta: void 0,
      livehead_seq_num_header: void 0,
      livehead_seq_num_mpd: void 0,
      logical_cpu_count: void 0,
      lowest_quality_representation_id: void 0,
      manifest_type: void 0,
      mediastream_event_count: void 0,
      one_observed: void 0,
      one_req_wave: void 0,
      one_res_wave: void 0,
      origin_hit_header: void 0,
      parent_id: void 0,
      playback_fbms_param: void 0,
      playback_rate: void 0,
      player_height: void 0,
      player_instance_count: void 0,
      player_origin_caller_specified: void 0,
      player_suborigin: void 0,
      player_version: void 0,
      player_width: void 0,
      playhead: void 0,
      preload_time: void 0,
      previous_representation_id: void 0,
      priority_float: void 0,
      proxy_status_header: void 0,
      pushed: void 0,
      reason: void 0,
      representation_id: void 0,
      reschedule_count: void 0,
      resource: void 0,
      response_time_ms_header: void 0,
      result: void 0,
      script_path: void 0,
      segment_count: void 0,
      segment_end_time: void 0,
      segment_start_time: void 0,
      segment_time_gap: void 0,
      sequential_id: void 0,
      session: void 0,
      state: void 0,
      stream_switch_reason: void 0,
      time_between_bytes_max: void 0,
      time_since_main_thread_available: void 0,
      time_to_first_byte: void 0,
      time_to_last_byte: void 0,
      time_to_request_sent: void 0,
      time_to_request_start: void 0,
      total_frames: void 0,
      type: void 0,
      update_period: void 0,
      user_info: void 0,
      video_duration: void 0,
      video_id: void 0,
      video_playback_experience_issue: void 0,
      was_delayed: void 0,
    };
    function h(a) {
      var b = a;
      typeof b === "string" && (b = Number(a));
      return b != null && isFinite(b) ? String(Math.floor(b)) : null;
    }
    a = (function () {
      function a() {
        this.$1 = babelHelpers["extends"]({}, g);
      }
      var b = a.prototype;
      b.clear = function () {
        this.$1 = babelHelpers["extends"]({}, g);
        return this;
      };
      b.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      b.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      b.setAccessToken = function (a) {
        this.$1.access_token = a;
        return this;
      };
      b.setAdditionalBufferedRanges = function (a) {
        this.$1.additional_buffered_ranges = a;
        return this;
      };
      b.setAppendTarget = function (a) {
        this.$1.append_target = h(a);
        return this;
      };
      b.setAppendedBufferMs = function (a) {
        this.$1.appended_buffer_ms = h(a);
        return this;
      };
      b.setBandwidthEstimate = function (a) {
        this.$1.bandwidth_estimate = h(a);
        return this;
      };
      b.setClientTimeBegin = function (a) {
        this.$1.client_time_begin = h(a);
        return this;
      };
      b.setClientTimeDuration = function (a) {
        this.$1.client_time_duration = h(a);
        return this;
      };
      b.setClientTimeEnd = function (a) {
        this.$1.client_time_end = h(a);
        return this;
      };
      b.setCode = function (a) {
        this.$1.code = h(a);
        return this;
      };
      b.setConcluder = function (a) {
        this.$1.concluder = a;
        return this;
      };
      b.setConnectionQualityLevel = function (a) {
        this.$1.connection_quality_level = a;
        return this;
      };
      b.setContentLengthHeader = function (a) {
        this.$1.content_length_header = h(a);
        return this;
      };
      b.setDevicePixelRatioFloat = function (a) {
        this.$1.device_pixel_ratio_float = a;
        return this;
      };
      b.setDroppedFrames = function (a) {
        this.$1.dropped_frames = h(a);
        return this;
      };
      b.setDynamicBitrate = function (a) {
        this.$1.dynamic_bitrate = h(a);
        return this;
      };
      b.setEdgeHitHeader = function (a) {
        this.$1.edge_hit_header = a;
        return this;
      };
      b.setEnded = function (a) {
        this.$1.ended = a;
        return this;
      };
      b.setError = function (a) {
        this.$1.error = a;
        return this;
      };
      b.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      b.setExpectedLength = function (a) {
        this.$1.expected_length = h(a);
        return this;
      };
      b.setFblsToPlyDisMs = function (a) {
        this.$1.fbls_to_ply_dis_ms = h(a);
        return this;
      };
      b.setInitiator = function (a) {
        this.$1.initiator = a;
        return this;
      };
      b.setIsDrm = function (a) {
        this.$1.is_drm = a;
        return this;
      };
      b.setIsLive = function (a) {
        this.$1.is_live = a;
        return this;
      };
      b.setIsMuted = function (a) {
        this.$1.is_muted = a;
        return this;
      };
      b.setIsOnline = function (a) {
        this.$1.is_online = a;
        return this;
      };
      b.setIsP2pPlayback = function (a) {
        this.$1.is_p2p_playback = a;
        return this;
      };
      b.setIsPageVisible = function (a) {
        this.$1.is_page_visible = a;
        return this;
      };
      b.setIsRingBufferSample = function (a) {
        this.$1.is_ring_buffer_sample = a;
        return this;
      };
      b.setIsServableViaFbms = function (a) {
        this.$1.is_servable_via_fbms = a;
        return this;
      };
      b.setIsTemplatedManifest = function (a) {
        this.$1.is_templated_manifest = a;
        return this;
      };
      b.setLastBufferedEnd = function (a) {
        this.$1.last_buffered_end = h(a);
        return this;
      };
      b.setLastBufferedStart = function (a) {
        this.$1.last_buffered_start = h(a);
        return this;
      };
      b.setLastBufferingEventEndTime = function (a) {
        this.$1.last_buffering_event_end_time = h(a);
        return this;
      };
      b.setLastBufferingEventStartTime = function (a) {
        this.$1.last_buffering_event_start_time = h(a);
        return this;
      };
      b.setLastPlayingEventTime = function (a) {
        this.$1.last_playing_event_time = h(a);
        return this;
      };
      b.setLength = function (a) {
        this.$1.length = h(a);
        return this;
      };
      b.setLiveheadDelta = function (a) {
        this.$1.livehead_delta = h(a);
        return this;
      };
      b.setLiveheadSeqNumHeader = function (a) {
        this.$1.livehead_seq_num_header = h(a);
        return this;
      };
      b.setLiveheadSeqNumMpd = function (a) {
        this.$1.livehead_seq_num_mpd = h(a);
        return this;
      };
      b.setLogicalCpuCount = function (a) {
        this.$1.logical_cpu_count = h(a);
        return this;
      };
      b.setLowestQualityRepresentationID = function (a) {
        this.$1.lowest_quality_representation_id = a;
        return this;
      };
      b.setManifestType = function (a) {
        this.$1.manifest_type = a;
        return this;
      };
      b.setMediastreamEventCount = function (a) {
        this.$1.mediastream_event_count = h(a);
        return this;
      };
      b.setOneObserved = function (a) {
        this.$1.one_observed = a;
        return this;
      };
      b.setOneReqWave = function (a) {
        this.$1.one_req_wave = h(a);
        return this;
      };
      b.setOneResWave = function (a) {
        this.$1.one_res_wave = h(a);
        return this;
      };
      b.setOriginHitHeader = function (a) {
        this.$1.origin_hit_header = a;
        return this;
      };
      b.setParentID = function (a) {
        this.$1.parent_id = h(a);
        return this;
      };
      b.setPlaybackFbmsParam = function (a) {
        this.$1.playback_fbms_param = a;
        return this;
      };
      b.setPlaybackRate = function (a) {
        this.$1.playback_rate = a;
        return this;
      };
      b.setPlayerHeight = function (a) {
        this.$1.player_height = h(a);
        return this;
      };
      b.setPlayerInstanceCount = function (a) {
        this.$1.player_instance_count = h(a);
        return this;
      };
      b.setPlayerOriginCallerSpecified = function (a) {
        this.$1.player_origin_caller_specified = a;
        return this;
      };
      b.setPlayerSuborigin = function (a) {
        this.$1.player_suborigin = a;
        return this;
      };
      b.setPlayerVersion = function (a) {
        this.$1.player_version = a;
        return this;
      };
      b.setPlayerWidth = function (a) {
        this.$1.player_width = h(a);
        return this;
      };
      b.setPlayhead = function (a) {
        this.$1.playhead = h(a);
        return this;
      };
      b.setPreloadTime = function (a) {
        this.$1.preload_time = h(a);
        return this;
      };
      b.setPreviousRepresentationID = function (a) {
        this.$1.previous_representation_id = a;
        return this;
      };
      b.setPriorityFloat = function (a) {
        this.$1.priority_float = a;
        return this;
      };
      b.setProxyStatusHeader = function (a) {
        this.$1.proxy_status_header = a;
        return this;
      };
      b.setPushed = function (a) {
        this.$1.pushed = h(a);
        return this;
      };
      b.setReason = function (a) {
        this.$1.reason = a;
        return this;
      };
      b.setRepresentationID = function (a) {
        this.$1.representation_id = a;
        return this;
      };
      b.setRescheduleCount = function (a) {
        this.$1.reschedule_count = h(a);
        return this;
      };
      b.setResource = function (a) {
        this.$1.resource = a;
        return this;
      };
      b.setResponseTimeMsHeader = function (a) {
        this.$1.response_time_ms_header = h(a);
        return this;
      };
      b.setResult = function (a) {
        this.$1.result = a;
        return this;
      };
      b.setScriptPath = function (a) {
        this.$1.script_path = a;
        return this;
      };
      b.setSegmentCount = function (a) {
        this.$1.segment_count = h(a);
        return this;
      };
      b.setSegmentEndTime = function (a) {
        this.$1.segment_end_time = h(a);
        return this;
      };
      b.setSegmentStartTime = function (a) {
        this.$1.segment_start_time = h(a);
        return this;
      };
      b.setSegmentTimeGap = function (a) {
        this.$1.segment_time_gap = h(a);
        return this;
      };
      b.setSequentialID = function (a) {
        this.$1.sequential_id = h(a);
        return this;
      };
      b.setSession = function (a) {
        this.$1.session = a;
        return this;
      };
      b.setState = function (a) {
        this.$1.state = a;
        return this;
      };
      b.setStreamSwitchReason = function (a) {
        this.$1.stream_switch_reason = a;
        return this;
      };
      b.setTimeBetweenBytesMax = function (a) {
        this.$1.time_between_bytes_max = h(a);
        return this;
      };
      b.setTimeSinceMainThreadAvailable = function (a) {
        this.$1.time_since_main_thread_available = h(a);
        return this;
      };
      b.setTimeToFirstByte = function (a) {
        this.$1.time_to_first_byte = h(a);
        return this;
      };
      b.setTimeToLastByte = function (a) {
        this.$1.time_to_last_byte = h(a);
        return this;
      };
      b.setTimeToRequestSent = function (a) {
        this.$1.time_to_request_sent = h(a);
        return this;
      };
      b.setTimeToRequestStart = function (a) {
        this.$1.time_to_request_start = h(a);
        return this;
      };
      b.setTotalFrames = function (a) {
        this.$1.total_frames = h(a);
        return this;
      };
      b.setType = function (a) {
        this.$1.type = a;
        return this;
      };
      b.setUpdatePeriod = function (a) {
        this.$1.update_period = h(a);
        return this;
      };
      b.setUserInfo = function (a) {
        this.$1.user_info = a;
        return this;
      };
      b.setVideoDuration = function (a) {
        this.$1.video_duration = h(a);
        return this;
      };
      b.setVideoID = function (a) {
        this.$1.video_id = a;
        return this;
      };
      b.setVideoPlaybackExperienceIssue = function (a) {
        this.$1.video_playback_experience_issue = a;
        return this;
      };
      b.setWasDelayed = function (a) {
        this.$1.was_delayed = a;
        return this;
      };
      b.setDynamicStatusHeader = function (a) {
        this.$1.dynamic_status_header = a;
        return this;
      };
      return a;
    })();
    f.convertToInt64 = h;
    f.VideoPlayerDashPerformanceLoggerPayloadBuilder = a;
  },
  66
);
__d(
  "ExtendableVideoPlayerShakaPerformanceTypedLogger",
  [
    "VideoPlayerDashPerformanceLoggerEventFalcoEvent",
    "VideoPlayerDashPerformanceLoggerPayloadBuilder",
    "VideoPlayerShakaPerformanceLoggerConfig",
    "clearTimeout",
    "gkx",
    "qex",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (a = c("qex")._("2008744")) != null ? a : 999,
      i = (b = c("qex")._("2008745")) != null ? b : 12e4,
      j = [],
      k = 0,
      l = !1,
      m = !1,
      n = null;
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      b.isEnabled = function () {
        return (
          b.$ExtendableVideoPlayerShakaPerformanceTypedLogger4() ||
          b.$ExtendableVideoPlayerShakaPerformanceTypedLogger5()
        );
      };
      b.disable = function () {
        l = !1;
      };
      b.enable = function () {
        l = !0;
      };
      b.$ExtendableVideoPlayerShakaPerformanceTypedLogger6 = function (a) {
        a = j[a];
        if (a != null) {
          var c = new b();
          c.updateData(a).log();
        }
      };
      b.flushQueuedLogs = function () {
        k = k > h ? 0 : k;
        if (!b.isEnabled()) {
          m = !0;
          b.enable();
          for (var a = k; a <= h; ++a)
            b.$ExtendableVideoPlayerShakaPerformanceTypedLogger6(a);
          for (var a = 0; a < k; ++a)
            b.$ExtendableVideoPlayerShakaPerformanceTypedLogger6(a);
          j = [];
          k = 0;
        }
        m &&
          (n != null && c("clearTimeout")(n),
          (n = c("setTimeout")(function () {
            (n = null), (m = !1), b.disable();
          }, i)));
      };
      b.$ExtendableVideoPlayerShakaPerformanceTypedLogger4 = function () {
        return d("VideoPlayerShakaPerformanceLoggerConfig").isSampled;
      };
      b.$ExtendableVideoPlayerShakaPerformanceTypedLogger5 = function () {
        return l;
      };
      var e = b.prototype;
      e.$ExtendableVideoPlayerShakaPerformanceTypedLogger7 = function () {
        m && this.setIsRingBufferSample(!0),
          this.$ExtendableVideoPlayerShakaPerformanceTypedLogger8();
      };
      e.log = function () {
        b.isEnabled()
          ? this.$ExtendableVideoPlayerShakaPerformanceTypedLogger7()
          : c("gkx")("2007884") &&
            ((k = k > h ? 0 : k), (j[k++] = this.getData()));
      };
      e.setState = function (b) {
        this.$ExtendableVideoPlayerShakaPerformanceTypedLogger1 = b;
        return a.prototype.setState.call(this, b);
      };
      e.getState = function () {
        return this.$ExtendableVideoPlayerShakaPerformanceTypedLogger1;
      };
      e.setType = function (b) {
        this.$ExtendableVideoPlayerShakaPerformanceTypedLogger3 = b;
        return a.prototype.setType.call(this, b);
      };
      e.getType = function () {
        return this.$ExtendableVideoPlayerShakaPerformanceTypedLogger3;
      };
      e.setIsRingBufferSample = function (b) {
        a.prototype.setIsRingBufferSample.call(this, b);
        return this;
      };
      e.setSequentialID = function (b) {
        this.$ExtendableVideoPlayerShakaPerformanceTypedLogger2 = b;
        a.prototype.setSequentialID.call(this, b);
        return this;
      };
      e.setParentLogger = function (a) {
        this.setParentID(a.$ExtendableVideoPlayerShakaPerformanceTypedLogger2);
        return this;
      };
      e.$ExtendableVideoPlayerShakaPerformanceTypedLogger8 = function () {
        var a = this;
        c("VideoPlayerDashPerformanceLoggerEventFalcoEvent").log(function () {
          return a.getData();
        });
      };
      return b;
    })(
      d("VideoPlayerDashPerformanceLoggerPayloadBuilder")
        .VideoPlayerDashPerformanceLoggerPayloadBuilder
    );
    g["default"] = e;
  },
  98
);
__d(
  "VideoPlayerShakaPerformanceLogger",
  [
    "ExtendableVideoPlayerShakaPerformanceTypedLogger",
    "ScriptPath",
    "VideoPlaybackQuality",
    "VideoPlayerMainThreadAvailability",
    "VideoPlayerShakaGlobalConfig",
    "VideoPlayerShakaPerformanceLoggerConfig",
    "Visibility",
    "clearTimeout",
    "gkx",
    "oz-player/loggings/OzPerfLoggerProviderBase",
    "oz-player/utils/OzError",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 9e4,
      i = 200;
    c("VideoPlayerMainThreadAvailability").maybeEnablePerformanceTest();
    var j = !1;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      b.forceShouldSample = function () {
        (j = !0),
          c("ExtendableVideoPlayerShakaPerformanceTypedLogger").enable();
      };
      b.shouldInitialize = function () {
        return (
          j ||
          Boolean(d("VideoPlayerShakaPerformanceLoggerConfig").isSampled) ||
          c("gkx")("2007884")
        );
      };
      b.flushQueuedLogs = function () {
        c("ExtendableVideoPlayerShakaPerformanceTypedLogger").flushQueuedLogs();
      };
      b.setVideoPlaybackExperienceIssue = function (a) {
        b.$VideoPlayerShakaPerformanceLogger27 = a;
      };
      b.isEnabled = function () {
        return c(
          "ExtendableVideoPlayerShakaPerformanceTypedLogger"
        ).isEnabled();
      };
      function b(c) {
        var d, e;
        e = a.call(this) || this;
        e.$VideoPlayerShakaPerformanceLogger13 = !1;
        e.$VideoPlayerShakaPerformanceLogger23 = 0;
        e.$VideoPlayerShakaPerformanceLogger24 = 0;
        e.$VideoPlayerShakaPerformanceLogger22 = c;
        e.$VideoPlayerShakaPerformanceLogger2 = c.videoID;
        e.$VideoPlayerShakaPerformanceLogger4 = c.video;
        e.$VideoPlayerShakaPerformanceLogger1 = c.uniqueID;
        e.$VideoPlayerShakaPerformanceLogger3 = 0;
        e.$VideoPlayerShakaPerformanceLogger11 = c.isLive;
        e.$VideoPlayerShakaPerformanceLogger12 = c.isServableViaFbms;
        e.$VideoPlayerShakaPerformanceLogger9 = null;
        e.$VideoPlayerShakaPerformanceLogger14 = c.accessToken;
        e.$VideoPlayerShakaPerformanceLogger15 = c.playerOrigin;
        e.$VideoPlayerShakaPerformanceLogger16 = c.playerSuborigin;
        e.$VideoPlayerShakaPerformanceLogger17 = c.playerVersion;
        e.$VideoPlayerShakaPerformanceLogger25 = c.getBandwidthEstimate;
        e.$VideoPlayerShakaPerformanceLogger26 =
          (d = c.getPlayerDimensions) != null ? d : null;
        e.setRepresentationID(c.representationId);
        e.$VideoPlayerShakaPerformanceLogger28 = c.isDrm;
        e.$VideoPlayerShakaPerformanceLogger29 = {};
        e.$VideoPlayerShakaPerformanceLogger30 =
          (d = c.playerInstanceCount) != null ? d : null;
        b.maybeEnableMainThreadAvailabilityLogging();
        return e;
      }
      b.maybeEnableMainThreadAvailabilityLogging = function () {
        d("VideoPlayerShakaGlobalConfig").getBool(
          "enable_main_thread_availability_logging",
          !1
        ) &&
          c("ExtendableVideoPlayerShakaPerformanceTypedLogger").isEnabled() &&
          c("VideoPlayerMainThreadAvailability").enable();
      };
      var e = b.prototype;
      e.$VideoPlayerShakaPerformanceLogger32 = function (a) {
        a = a;
        var b = this.$VideoPlayerShakaPerformanceLogger4.buffered;
        if (b.length > 0) {
          var c = b.length - 1;
          a = a
            .setLastBufferedStart(Math.round(b.start(c) * 1e3))
            .setLastBufferedEnd(Math.round(b.end(c) * 1e3));
        }
        c = [];
        for (var d = 0; d < b.length - 1; d++) {
          var e = Math.round(
              this.$VideoPlayerShakaPerformanceLogger4.buffered.start(d) * 1e3
            ),
            f = Math.round(
              this.$VideoPlayerShakaPerformanceLogger4.buffered.end(d) * 1e3
            );
          c.push([e, f]);
        }
        c && c.length && (a = a.setAdditionalBufferedRanges(JSON.stringify(c)));
        return a;
      };
      e.setType = function (a) {
        this.$VideoPlayerShakaPerformanceLogger21 = a;
        return this;
      };
      e.createLoggerProvider = function () {
        return new self(this.$VideoPlayerShakaPerformanceLogger22);
      };
      e.getLiveheadDelta = function () {
        return this.$VideoPlayerShakaPerformanceLogger9
          ? Math.round(
              (this.$VideoPlayerShakaPerformanceLogger9 -
                this.$VideoPlayerShakaPerformanceLogger4.currentTime) *
                1e3
            )
          : null;
      };
      e.getVideoID = function () {
        return this.$VideoPlayerShakaPerformanceLogger2;
      };
      e.setIsTemplatedManifest = function (a) {
        this.$VideoPlayerShakaPerformanceLogger13 = a;
      };
      e.getEventLogger = function (a) {
        var e = this,
          f = Date.now(),
          g = new (c("ExtendableVideoPlayerShakaPerformanceTypedLogger"))(),
          h = this.$VideoPlayerShakaPerformanceLogger4.currentTime,
          i = this.$VideoPlayerShakaPerformanceLogger4.duration,
          j = this.$VideoPlayerShakaPerformanceLogger25(
            this.$VideoPlayerShakaPerformanceLogger11
          ),
          k =
            this.$VideoPlayerShakaPerformanceLogger22.getApproximateFBLSToPlayerDisplayLatency(),
          l = this.$VideoPlayerShakaPerformanceLogger26
            ? this.$VideoPlayerShakaPerformanceLogger26()
            : null;
        this.$VideoPlayerShakaPerformanceLogger32(g)
          .setEvent(a)
          .setVideoID(this.$VideoPlayerShakaPerformanceLogger2)
          .setDroppedFrames(
            d("VideoPlaybackQuality").getDroppedFrames(
              this.$VideoPlayerShakaPerformanceLogger4
            )
          )
          .setTotalFrames(
            d("VideoPlaybackQuality").getTotalFrames(
              this.$VideoPlayerShakaPerformanceLogger4
            )
          )
          .setEnded(this.$VideoPlayerShakaPerformanceLogger4.ended)
          .setIsMuted(this.$VideoPlayerShakaPerformanceLogger4.muted)
          .setPlaybackRate(
            this.$VideoPlayerShakaPerformanceLogger4.playbackRate
          )
          .setDynamicBitrate(this.$VideoPlayerShakaPerformanceLogger20)
          .setPlayhead(Math.round(h * 1e3))
          .setVideoDuration(Math.round(i * 1e3))
          .setLogicalCpuCount(navigator && navigator.hardwareConcurrency)
          .setPlayerOriginCallerSpecified(
            this.$VideoPlayerShakaPerformanceLogger15
          )
          .setScriptPath(d("ScriptPath").getScriptPath())
          .setPlayerHeight(l ? l.height : null)
          .setPlayerWidth(l ? l.width : null)
          .setPlayerSuborigin(this.$VideoPlayerShakaPerformanceLogger16)
          .setPlayerVersion(this.$VideoPlayerShakaPerformanceLogger17)
          .setBandwidthEstimate(j == null ? null : Math.round(j))
          .setRepresentationID(this.getRepresentationID())
          .setLowestQualityRepresentationID(
            this.$VideoPlayerShakaPerformanceLogger19
          )
          .setIsLive(this.$VideoPlayerShakaPerformanceLogger11)
          .setIsServableViaFbms(this.$VideoPlayerShakaPerformanceLogger12)
          .setPlaybackFbmsParam(this.$VideoPlayerShakaPerformanceLogger31)
          .setIsPageVisible(!c("Visibility").isHidden())
          .setIsTemplatedManifest(this.$VideoPlayerShakaPerformanceLogger13)
          .setSession(this.$VideoPlayerShakaPerformanceLogger1)
          .setDevicePixelRatioFloat(window.devicePixelRatio || 1)
          .setManifestType(this.$VideoPlayerShakaPerformanceLogger18)
          .setLiveheadSeqNumMpd(this.$VideoPlayerShakaPerformanceLogger10)
          .setSequentialID(this.$VideoPlayerShakaPerformanceLogger3++)
          .setState(this.$VideoPlayerShakaPerformanceLogger5)
          .setLastBufferingEventStartTime(
            this.$VideoPlayerShakaPerformanceLogger8
          )
          .setLastBufferingEventEndTime(
            this.$VideoPlayerShakaPerformanceLogger7
          )
          .setLastPlayingEventTime(this.$VideoPlayerShakaPerformanceLogger6)
          .setLiveheadDelta(this.getLiveheadDelta())
          .setPushed(0)
          .setResult("success")
          .setAccessToken(this.$VideoPlayerShakaPerformanceLogger14)
          .setVideoPlaybackExperienceIssue(
            b.$VideoPlayerShakaPerformanceLogger27
          )
          .setClientTimeBegin(f)
          .setClientTimeDuration(0)
          .setClientTimeEnd(f)
          .setIsDrm(this.$VideoPlayerShakaPerformanceLogger28)
          .setPlayerInstanceCount(this.$VideoPlayerShakaPerformanceLogger30)
          .setFblsToPlyDisMs(
            (k == null ? void 0 : k.latencyFromMpdUpdate) != null
              ? Math.round(k.latencyFromMpdUpdate * 1e3)
              : null
          );
        var m = this,
          n = g.setState;
        g.setState = function (a) {
          a !== this.$VideoPlayerShakaPerformanceLogger5 && a === "playing"
            ? (m.$VideoPlayerShakaPerformanceLogger6 = Date.now())
            : a !== "playing" && (m.$VideoPlayerShakaPerformanceLogger6 = null);
          m.$VideoPlayerShakaPerformanceLogger5 = a;
          return n.call(this, a);
        };
        g.updateState = function (a) {
          return this.getState() == m.$VideoPlayerShakaPerformanceLogger5
            ? this.setState(a)
            : this;
        };
        var o = g.setError;
        g.setError = function (a) {
          if (typeof a === "object" && a != null)
            if (a instanceof c("oz-player/utils/OzError"))
              this.setResult("failed"),
                this.setCode(a.getExtra().code),
                o.call(this, a.getType());
            else {
              if (a.type === "aborted" || a.type === "delay")
                this.setResult("aborted");
              else if (a.type === "paused") this.setResult("paused");
              else {
                this.setResult("failed");
                if (c("gkx")("648"))
                  if (a.type != null && a.type !== "") o.call(this, a.type);
                  else {
                    var b = function (a) {
                      a = a.replace(/([0-9]{2,})/g, function (a) {
                        var b = "";
                        while (b.length < a.length) b += "#";
                        return b;
                      });
                      return a;
                    };
                    o.call(this, b(a.name + ": " + a.message));
                  }
                else o.call(this, a.type);
              }
              this.setCode(a.status || a.errorRawTransportStatus);
            }
          else o.call(this, a);
          return this;
        };
        var p = g.setManifestType;
        g.setManifestType = function (a) {
          e.$VideoPlayerShakaPerformanceLogger18 = a;
          return p.call(g, a);
        };
        var q = g.setPlaybackFbmsParam;
        g.setPlaybackFbmsParam = function (a) {
          e.$VideoPlayerShakaPerformanceLogger31 = a;
          return q.call(g, a);
        };
        g.setLiveheadPosition = function (a) {
          e.$VideoPlayerShakaPerformanceLogger9 = a;
          g.setLiveheadDelta(e.getLiveheadDelta());
          return g;
        };
        var r = g.setLiveheadSeqNumMpd;
        g.setLiveheadSeqNumMpd = function (a) {
          e.$VideoPlayerShakaPerformanceLogger10 = a;
          return r.call(g, a);
        };
        var s = g.setIsTemplatedManifest;
        g.setIsTemplatedManifest = function (a) {
          var b;
          e.$VideoPlayerShakaPerformanceLogger13 = (b = a) != null ? b : !1;
          return s.call(g, a);
        };
        var t = g.setDynamicBitrate;
        g.setDynamicBitrate = function (a) {
          a = Number(a) || null;
          e.setDynamicBitrate(a);
          return t.call(g, a);
        };
        var u = g.setLowestQualityRepresentationID;
        g.setLowestQualityRepresentationID = function (a) {
          e.$VideoPlayerShakaPerformanceLogger19 = a;
          return u.call(g, a);
        };
        g.setWasPrefetchCacheHit = function (a) {
          return g;
        };
        return g;
      };
      e.getOperationLogger = function (a) {
        a = this.createOperationLogger(a);
        this.setOperationContext(a);
        return a;
      };
      e.createOperationLogger = function (a) {
        var b = this.getEventLogger(a);
        b.setClientTimeEnd(null);
        b.setClientTimeDuration(null);
        var d = b.setResource;
        b.setResource = function (a) {
          return d.call(b, a);
        };
        var e = b.log,
          f = this,
          g = !1,
          i = null;
        b.log = function () {
          var b = this;
          if (g) return;
          c("clearTimeout")(i);
          var d = Date.now(),
            h = b.getData().client_time_begin,
            j = b.getData().client_time_end;
          h = h != null ? Number(h) : null;
          j = j != null ? Number(j) : null;
          (h == null || h === 0) && ((h = d), b.setClientTimeBegin(h));
          (j == null || j === 0) && ((j = d), b.setClientTimeEnd(j));
          b.setClientTimeDuration(j - h);
          h = c(
            "VideoPlayerMainThreadAvailability"
          ).getTimeSinceMainThreadAvailable();
          b.setTimeSinceMainThreadAvailable(h != null ? Math.round(h) : null);
          f.$VideoPlayerShakaPerformanceLogger33(h);
          f.$VideoPlayerShakaPerformanceLogger23 = d;
          a === "buffering" && (f.$VideoPlayerShakaPerformanceLogger7 = j);
          g = !0;
          h = b.getType();
          h &&
            ((f.$VideoPlayerShakaPerformanceLogger29[h + a] =
              (f.$VideoPlayerShakaPerformanceLogger29[h + a] || 0) + 1),
            b.setMediastreamEventCount(
              f.$VideoPlayerShakaPerformanceLogger29[h + a]
            ));
          return e.call(b);
        };
        b.start = function () {
          var d = Date.now();
          this.setClientTimeBegin(d);
          this.setClientTimeDuration(null);
          this.setClientTimeEnd(null);
          c("clearTimeout")(i);
          i = null;
          i = c("setTimeoutAcrossTransitions")(function () {
            c("clearTimeout")(i), (i = null), b.setResult("timeout"), b.log();
          }, h);
          a === "buffering" &&
            (f.$VideoPlayerShakaPerformanceLogger8 = Date.now());
          return b;
        };
        return b;
      };
      e.$VideoPlayerShakaPerformanceLogger33 = function (a) {
        if (
          a == null ||
          i === 0 ||
          this.$VideoPlayerShakaPerformanceLogger23 === 0 ||
          a < i ||
          this.$VideoPlayerShakaPerformanceLogger24 < a
        ) {
          this.$VideoPlayerShakaPerformanceLogger24 = Number(a);
          return;
        }
        var b = this.$VideoPlayerShakaPerformanceLogger23,
          c = Math.round(b - this.$VideoPlayerShakaPerformanceLogger24);
        this.getEventLogger("main_thread_blocked")
          .setClientTimeBegin(c)
          .setClientTimeDuration(b - c)
          .setClientTimeEnd(b)
          .log();
        this.$VideoPlayerShakaPerformanceLogger24 = Number(a);
      };
      e.setDynamicBitrate = function (a) {
        this.$VideoPlayerShakaPerformanceLogger20 =
          a != null ? Math.round(a) : null;
      };
      return b;
    })(c("oz-player/loggings/OzPerfLoggerProviderBase"));
    a.$VideoPlayerShakaPerformanceLogger27 = null;
    g["default"] = a;
  },
  98
);
