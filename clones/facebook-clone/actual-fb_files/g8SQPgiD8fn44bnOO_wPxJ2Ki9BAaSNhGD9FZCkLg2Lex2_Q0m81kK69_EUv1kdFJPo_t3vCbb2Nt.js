if (self.CavalryLogger) {
  CavalryLogger.start_js(["UaDerao"]);
}

__d(
  "CometUFICommentAnimatedImageAttachmentAttribution_attachment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "animated_image_attribution",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentAnimatedImageAttachmentAttribution_attachment",
        selections: [
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
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "source",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "media",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: a,
                type: "GenericAttachmentMedia",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: a,
                type: "Video",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryAttachment",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Literal", name: "height", value: 396 },
        b = { kind: "Variable", name: "scale", variableName: "scale" },
        c = { kind: "Literal", name: "width", value: 396 },
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "height",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "width",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment",
        selections: [
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
            concreteType: null,
            kind: "LinkedField",
            name: "media",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  a,
                  b,
                  { kind: "Literal", name: "sizing", value: "contain-fit" },
                  c,
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "image",
                plural: !1,
                selections: d,
                storageKey: null,
              },
              {
                alias: null,
                args: [a, b, c],
                concreteType: "Image",
                kind: "LinkedField",
                name: "animated_image",
                plural: !1,
                selections: d,
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "animated_image_caption",
                    storageKey: null,
                  },
                ],
                type: "GenericAttachmentMedia",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedVideoWithGifOverlay_attachment",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentAnimatedImageAttachmentAttribution_attachment",
          },
        ],
        type: "StoryAttachment",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentAnimatedImageAttachmentAttribution_attachment",
        },
      ],
      type: "StoryAttachment",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentAnimatedImageAttachmentVideoRenderer_media$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = [
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
        kind: "SplitOperation",
        metadata: {},
        name: "CometUFICommentAnimatedImageAttachmentVideoRenderer_media$normalization",
        selections: [
          {
            alias: "fallbackImage",
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: [
              a,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "height",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "width",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          b,
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
            selections: [c, b],
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
                selections: d,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "VideoPrefetchResource",
                kind: "LinkedField",
                name: "video",
                plural: !0,
                selections: d,
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
              c,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "useRelay3DVideoImplementations_video",
                    fragmentName: "useRelay3DOzImplementation_implementation",
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
              b,
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
              b,
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
                documentName: "VideoPlayerRelay_video_spherical_video_renderer",
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
                selections: [a],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "image_preview_payload",
                storageKey: null,
              },
              b,
            ],
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
  "CometUFICommentAnimatedImageAttachmentVideoRenderer_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentAnimatedImageAttachmentVideoRenderer_media",
      selections: [
        {
          alias: "fallbackImage",
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "height",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "width",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        { args: null, kind: "FragmentSpread", name: "VideoPlayerRelay_video" },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentAnimatedImageAttachment_attachment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentAnimatedImageAttachment_attachment",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "media",
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
                  args: null,
                  documentName:
                    "CometUFICommentAnimatedImageAttachment_attachment",
                  fragmentName:
                    "CometUFICommentAnimatedImageAttachmentVideoRenderer_media",
                  fragmentPropName: "media",
                  kind: "ModuleImport",
                },
              ],
              type: "Video",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "ThirdPartyMediaAttachmentInfo",
          kind: "LinkedField",
          name: "third_party_media_info",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "CometUFICommentAnimatedImageAttachment_attachment__thirdPartyMediaInfo",
              fragmentName:
                "CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo",
              fragmentPropName: "thirdPartyMediaInfo",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentThirdPartyStickerRenderer_attachment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment",
        },
      ],
      type: "StoryAttachment",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "animated_image_attribution",
          storageKey: null,
        },
        d = [b],
        e = { kind: "Variable", name: "scale", variableName: "scale" },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        g = { kind: "Literal", name: "height", value: 396 },
        h = { kind: "Literal", name: "width", value: 396 },
        i = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "height",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "width",
            storageKey: null,
          },
          f,
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer$normalization",
        selections: [
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
                concreteType: null,
                kind: "LinkedField",
                name: "media",
                plural: !1,
                selections: [
                  a,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometUFICommentAnimatedImageAttachment_attachment",
                        fragmentName:
                          "CometUFICommentAnimatedImageAttachmentVideoRenderer_media",
                        fragmentPropName: "media",
                        kind: "ModuleImport",
                      },
                      b,
                      c,
                      {
                        alias: null,
                        args: [
                          {
                            kind: "Literal",
                            name: "supported",
                            value: ["CometProductTagFeedOverlayRenderer"],
                          },
                        ],
                        concreteType: null,
                        kind: "LinkedField",
                        name: "comet_product_tag_feed_overlay_renderer",
                        plural: !1,
                        selections: [
                          a,
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                args: null,
                                documentName:
                                  "CometFeedVideoWithGifOverlay_attachment",
                                fragmentName:
                                  "CometProductTagFeedOverlayRenderer_renderer",
                                fragmentPropName: "renderer",
                                kind: "ModuleImport",
                              },
                            ],
                            type: "CometProductTagFeedOverlayRenderer",
                            abstractKey: null,
                          },
                        ],
                        storageKey:
                          'comet_product_tag_feed_overlay_renderer(supported:["CometProductTagFeedOverlayRenderer"])',
                      },
                    ],
                    type: "Video",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: d,
                    type: "Node",
                    abstractKey: "__isNode",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      b,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "animated_image_caption",
                        storageKey: null,
                      },
                      c,
                    ],
                    type: "GenericAttachmentMedia",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: d,
                    type: "MontageImage",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: d,
                    type: "MontageVideo",
                    abstractKey: null,
                  },
                  {
                    alias: "sticker_image",
                    args: [
                      { kind: "Literal", name: "height", value: 80 },
                      e,
                      { kind: "Literal", name: "width", value: 80 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "animated_image",
                    plural: !1,
                    selections: [f],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [
                      g,
                      e,
                      { kind: "Literal", name: "sizing", value: "contain-fit" },
                      h,
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "image",
                    plural: !1,
                    selections: i,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [g, e, h],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "animated_image",
                    plural: !1,
                    selections: i,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "ThirdPartyMediaAttachmentInfo",
                kind: "LinkedField",
                name: "third_party_media_info",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometUFICommentAnimatedImageAttachment_attachment__thirdPartyMediaInfo",
                    fragmentName:
                      "CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo",
                    fragmentPropName: "thirdPartyMediaInfo",
                    kind: "ModuleImport",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "url",
                storageKey: null,
              },
              {
                alias: "story_url",
                args: [{ kind: "Literal", name: "site", value: "www" }],
                kind: "ScalarField",
                name: "url",
                storageKey: 'url(site:"www")',
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Literal",
                    name: "supported",
                    value: [
                      "StoryAttachmentLeadGenLinkRenderer",
                      "StoryAttachmentGenericLinkRenderer",
                      "StoryAttachmentBlueOnCometModalLinkRenderer",
                      "StoryAttachmentClickToMessengerRenderer",
                      "StoryAttachmentFundraiserLinkRenderer",
                      "StoryAttachmentOnsiteDonateLinkRenderer",
                      "StoryAttachmentClickToGetOfferRenderer",
                    ],
                  },
                ],
                concreteType: null,
                kind: "LinkedField",
                name: "story_attachment_link_renderer",
                plural: !1,
                selections: [
                  a,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryLink_attachment",
                        fragmentName: "CometFeedStoryLeadGenLink_story",
                        fragmentPropName: "story",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "StoryAttachmentLeadGenLinkRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryLink_attachment",
                        fragmentName: "CometFeedStoryGenericLink_story",
                        fragmentPropName: "story",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "StoryAttachmentGenericLinkRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryLink_attachment",
                        fragmentName:
                          "CometFeedStoryBlueOnCometModalLink_story",
                        fragmentPropName: "story",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "StoryAttachmentBlueOnCometModalLinkRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryLink_attachment",
                        fragmentName: "CometFeedStoryClickToMessenger_story",
                        fragmentPropName: "story",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "StoryAttachmentClickToMessengerRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryLink_attachment",
                        fragmentName: "CometFeedStoryFundraiserLink_story",
                        fragmentPropName: "story",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "StoryAttachmentFundraiserLinkRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryLink_attachment",
                        fragmentName: "CometFeedStoryOnsiteDonateLink_story",
                        fragmentPropName: "story",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "StoryAttachmentOnsiteDonateLinkRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometFeedStoryLink_attachment",
                        fragmentName: "CometFeedStoryClickToGetOffer_story",
                        fragmentPropName: "story",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "StoryAttachmentClickToGetOfferRenderer",
                    abstractKey: null,
                  },
                ],
                storageKey:
                  'story_attachment_link_renderer(supported:["StoryAttachmentLeadGenLinkRenderer","StoryAttachmentGenericLinkRenderer","StoryAttachmentBlueOnCometModalLinkRenderer","StoryAttachmentClickToMessengerRenderer","StoryAttachmentFundraiserLinkRenderer","StoryAttachmentOnsiteDonateLinkRenderer","StoryAttachmentClickToGetOfferRenderer"])',
              },
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "source",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "text",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
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
  "CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "attachment",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometUFICommentAnimatedImageAttachment_attachment",
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryAttachmentAnimatedImageShareStyleRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentThirdPartyStickerRenderer_attachment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentThirdPartyStickerRenderer_attachment",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "media",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: "sticker_image",
                  args: [
                    { kind: "Literal", name: "height", value: 80 },
                    { kind: "Variable", name: "scale", variableName: "scale" },
                    { kind: "Literal", name: "width", value: 80 },
                  ],
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "animated_image",
                  plural: !1,
                  selections: [
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "uri",
                        storageKey: null,
                      },
                      action: "THROW",
                      path: "media.sticker_image.uri",
                    },
                  ],
                  storageKey: null,
                },
                action: "THROW",
                path: "media.sticker_image",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "media",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null,
          },
          action: "THROW",
          path: "url",
        },
      ],
      type: "StoryAttachment",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "provider",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "provider",
            storageKey: null,
          },
          action: "THROW",
          path: "provider",
        },
      ],
      type: "ThirdPartyMediaAttachmentInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedGifOverlay.react",
  [
    "fbt",
    "ix",
    "BaseAccessibleElement_DEPRECATED.react",
    "CometImage.react",
    "CometPressable.react",
    "react",
    "stylex",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        gifButton: {
          appearance: "dwo3fsh8",
          backgroundColor: "g5ia77u1",
          borderStyle: "ow4ym5g4",
          borderWidth: "auili1gw",
          boxSizing: "rq0escxv",
          cursor: "nhd2j8a9",
          marginBottom: "oygrvhab",
          marginEnd: "cxmmr5t8",
          marginStart: "hcukyx3x",
          marginTop: "kvgmc6g5",
          paddingBottom: "qt6c0cv9",
          paddingEnd: "rz4wbd8a",
          paddingStart: "a8nywdso",
          paddingTop: "jb3vyjys",
          position: "l9j0dhe7",
          textAlign: "i1ao9s8h",
          zIndex: "du4w35lb",
          color: "lkb5bm1b",
          display: "a8c37x1j",
          height: "datstx6m",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "k4urcfbm",
        },
        gifIcon: {
          boxSizing: "rq0escxv",
          left: "pzli0o6b",
          position: "pmk7jnqg",
          top: "rk01pc8j",
          transform: "py2didcb",
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          cursor: "nhd2j8a9",
          height: "rdkrh8wx",
          width: "orwu60u2",
        },
        gifIconImage: {
          boxSizing: "rq0escxv",
          left: "pzli0o6b",
          position: "pmk7jnqg",
          top: "rk01pc8j",
          transform: "k8ui9dzl",
        },
        gifIconImageHidden: {
          transform: "izhqzi6j",
          transitionProperty: "flx89l3n",
          transitionTimingFunction: "heur4gxb",
        },
        hideTransition1: { transitionDuration: "kmdw4o4n" },
        hideTransition2: { transitionDuration: "dpja2al7" },
        hideTransition3: { transitionDuration: "qgmjvhk0" },
      };
    function a(a) {
      var b = a.isPaused,
        d = a.isPlayable,
        e = a.label,
        f = a.linkProps;
      a = a.onPress;
      if (d) {
        if (b == null || a == null)
          throw c("unrecoverableViolation")(
            "isPaused and onPress cannot be nullish if the component is playable in CometFeedGifOverlay",
            "comet_feed"
          );
      } else if (f == null || e == null)
        throw c("unrecoverableViolation")(
          "linkProps or label cannot be nullish if the component is not playable in CometFeedGifOverlay",
          "comet_feed"
        );
      return j.jsxs(c("CometPressable.react"), {
        display: "inline",
        label: e,
        linkProps: f,
        onPress: a,
        overlayDisabled: !0,
        xstyle: k.gifButton,
        children: [
          j.jsxs("i", {
            className: c("stylex")(k.gifIcon),
            children: [
              j.jsx("span", {
                className: c("stylex")(
                  k.gifIconImage,
                  d && b === !1 && k.gifIconImageHidden,
                  d && b === !1 && k.hideTransition3
                ),
                children: j.jsx(c("CometImage.react"), { src: i("99378") }),
              }),
              j.jsx("span", {
                className: c("stylex")(
                  k.gifIconImage,
                  d && b === !1 && k.gifIconImageHidden,
                  d && b === !1 && k.hideTransition2
                ),
                children: j.jsx(c("CometImage.react"), { src: i("99379") }),
              }),
              j.jsx("span", {
                className: c("stylex")(
                  k.gifIconImage,
                  d && b === !1 && k.gifIconImageHidden,
                  d && b === !1 && k.hideTransition1
                ),
                children: j.jsx(c("CometImage.react"), { src: i("99380") }),
              }),
            ],
          }),
          d
            ? j.jsx(c("BaseAccessibleElement_DEPRECATED.react"), {
                children: b === !0 ? h._("Play GIF") : h._("Pause GIF"),
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIAnimatedImageAttachmentGIFOverlay.react",
  [
    "CometFeedGifOverlay.react",
    "VideoPlayerHooks",
    "react",
    "useDebouncedValue",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = d("VideoPlayerHooks").useController();
      a = d("VideoPlayerHooks").usePaused();
      var e = d("VideoPlayerHooks").usePlaying();
      e = c("useDebouncedValue")(e, 5);
      var f = a && !e;
      a = i(
        function () {
          f ? b.play("user_initiated") : b.pause("user_initiated");
        },
        [f, b]
      );
      return h.jsx(c("CometFeedGifOverlay.react"), {
        isPaused: f,
        isPlayable: !0,
        onPress: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentAnimatedImageAttachmentAttribution.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometUFICommentAnimatedImageAttachmentAttribution_attachment.graphql",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = {
        footer: {
          backgroundImage: "sg6hv7x6",
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          opacity: "pedkr2u6",
          position: "pmk7jnqg",
          start: "j9ispegn",
          transitionProperty: "pnx7fd3z",
          transitionTimingFunction: "heur4gxb",
        },
        hidden: {
          opacity: "b5wmifdl",
          pointerEvents: "hzruof5a",
          transform: "c6mbcsjx",
          transitionDuration: "ms05siws",
        },
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b(
                "CometUFICommentAnimatedImageAttachmentAttribution_attachment.graphql"
              )),
          a.attachment
        ),
        f = e.media;
      return k.jsx(c("CometPressable.react"), {
        "aria-label": h._("Click to view attachment"),
        hideHoverOverlay: !0,
        linkProps: { url: e.url },
        xstyle: [l.footer, a.isHidden && l.hidden],
        children: k.jsxs(c("CometRow.react"), {
          align: "justify",
          paddingVertical: 16,
          spacingVertical: 8,
          verticalAlign: "center",
          children: [
            k.jsx(c("CometRowItem.react"), {
              children: k.jsx(c("TetraText.react"), {
                color: "white",
                type: "meta2",
                children:
                  (f == null ? void 0 : f.animated_image_attribution) ||
                  (e == null
                    ? void 0
                    : (a = e.source) == null
                    ? void 0
                    : a.text),
              }),
            }),
            k.jsx(c("CometRowItem.react"), {
              children: k.jsx(c("TetraIcon.react"), {
                color: "white",
                icon: d("fbicon")._(i("570405"), 24),
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
  "CometUFICommentAnimatedImageAttachmentFallbackRenderer.react",
  [
    "CometFeedGifOverlay.react",
    "CometImage.react",
    "CometPressable.react",
    "CometRelay",
    "CometUFICommentAnimatedImageAttachmentAttribution.react",
    "CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment.graphql",
    "CometUFICommentAttachmentContainer.react",
    "react",
    "stylex",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useState,
      l = {
        image: {
          display: "a8c37x1j",
          height: "idiwt2bm",
          maxWidth: "d2edcug0",
        },
        maximize: {
          display: "a8c37x1j",
          height: "datstx6m",
          width: "k4urcfbm",
        },
        overlayContainer: {
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
      };
    function a(a) {
      var e, f, g;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometUFICommentAnimatedImageAttachmentFallbackRenderer_attachment.graphql"
            )),
        a.attachment
      );
      var m = a.media,
        n = k(!1),
        o = n[0],
        p = n[1];
      n = m == null ? void 0 : (n = m.animated_image) == null ? void 0 : n.uri;
      var q = Boolean(n);
      e =
        (e =
          m == null
            ? void 0
            : (e = m.animated_image) == null
            ? void 0
            : e.height) != null
          ? e
          : m == null
          ? void 0
          : (e = m.image) == null
          ? void 0
          : e.height;
      f =
        (f =
          m == null
            ? void 0
            : (f = m.animated_image) == null
            ? void 0
            : f.width) != null
          ? f
          : m == null
          ? void 0
          : (f = m.image) == null
          ? void 0
          : f.height;
      g = m == null ? void 0 : (g = m.image) == null ? void 0 : g.uri;
      var r = a == null ? void 0 : a.url;
      if (e == null || f == null || g == null || r == null)
        throw c("unrecoverableViolation")(
          "unable to play gif as either animatedURI, staticURI, height or width is missing",
          "ufi2"
        );
      var s = j(function () {
        p(function (a) {
          return !a;
        });
      }, []);
      return i.jsxs(c("CometUFICommentAttachmentContainer.react"), {
        children: [
          i.jsx("div", {
            className: c("stylex")(l.overlayContainer),
            children:
              n != null
                ? i.jsx(c("CometFeedGifOverlay.react"), {
                    isPaused: o,
                    isPlayable: !0,
                    onPress: s,
                  })
                : i.jsx(c("CometPressable.react"), {
                    "aria-label": r,
                    linkProps: {
                      rel: ["noopener", "noreferrer"],
                      target: "_blank",
                      url: r,
                    },
                    xstyle: l.maximize,
                  }),
          }),
          i.jsx(c("CometImage.react"), {
            alt:
              (s = m == null ? void 0 : m.animated_image_caption) != null
                ? s
                : "GIF",
            height: e,
            src: !o && n != null ? n : g,
            width: f,
            xstyle: l.image,
          }),
          i.jsx(c("CometUFICommentAnimatedImageAttachmentAttribution.react"), {
            attachment: a,
            isHidden: !o && q,
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
  "CometUFICommentAnimatedImageAttachment.react",
  [
    "CometRelay",
    "CometUFICommentAnimatedImageAttachmentFallbackRenderer.react",
    "CometUFICommentAnimatedImageAttachment_attachment.graphql",
    "gkx",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.attachment;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometUFICommentAnimatedImageAttachment_attachment.graphql"
            )),
        a
      );
      var e = a.media;
      if (e == null)
        throw c("unrecoverableViolation")(
          "Unable to render a gif with no associated media",
          "ufi2"
        );
      return e.__typename === "Video"
        ? c("gkx")("1859164") && a.third_party_media_info
          ? i.jsx(d("CometRelay").MatchContainer, {
              match: a.third_party_media_info,
              props: { attachment$key: a },
            })
          : i.jsx(d("CometRelay").MatchContainer, {
              match: e,
              props: { attachment: a },
            })
        : i.jsx(
            c("CometUFICommentAnimatedImageAttachmentFallbackRenderer.react"),
            { attachment: a }
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentAnimatedImageAttachmentVideoRenderer.react",
  [
    "CometDOMOnlyBoundary.react",
    "CometImage.react",
    "CometRelay",
    "CometUFIAnimatedImageAttachmentGIFOverlay.react",
    "CometUFICommentAnimatedImageAttachmentAttribution.react",
    "CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment.graphql",
    "CometUFICommentAnimatedImageAttachmentVideoRenderer_media.graphql",
    "CometUFICommentAttachmentContainer.react",
    "CometVisualCompletionAttributes",
    "VideoAutoplayLocalScopeProvider.react",
    "VideoPlayerAutoplayRulesProvider",
    "VideoPlayerHooks",
    "VideoPlayerRelay.react",
    "VideoPlayerSurface.react",
    "gkx",
    "react",
    "stylex",
    "useDebouncedValue",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = {
        image: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          height: "datstx6m",
          width: "k4urcfbm",
          zIndex: "du4w35lb",
        },
        root: {
          backgroundColor: "tqsryivl",
          height: "datstx6m",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
      },
      l = d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("gif");
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometUFICommentAnimatedImageAttachmentVideoRenderer_attachment.graphql"
            )),
        a.attachment
      );
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "CometUFICommentAnimatedImageAttachmentVideoRenderer_media.graphql"
            )),
        a.media
      );
      e = j.jsx(c("VideoAutoplayLocalScopeProvider.react"), {
        autoplayLocalRules: l,
        children: j.jsx(c("VideoPlayerRelay.react"), {
          portalingEnabled: !1,
          subOrigin: "animated_image_share",
          video: a,
          children: j.jsxs(c("VideoPlayerSurface.react"), {
            children: [
              j.jsx(c("CometUFIAnimatedImageAttachmentGIFOverlay.react"), {}),
              j.jsx(m, { attachment: e }),
            ],
          }),
        }),
      });
      if (c("gkx")("1886")) {
        a = (a = a.fallbackImage) != null ? a : {};
        var f = a.height,
          g = a.uri;
        a = a.width;
        g != null &&
          f != null &&
          a != null &&
          (e = j.jsxs(
            "div",
            babelHelpers["extends"](
              {
                className: c("stylex")(k.root),
                style: { height: f, width: a },
              },
              c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
              {
                children: [
                  j.jsx(c("CometImage.react"), { src: g, xstyle: k.image }),
                  j.jsx(c("CometDOMOnlyBoundary.react"), {
                    fallback: null,
                    children: e,
                  }),
                ],
              }
            )
          ));
      }
      return j.jsx(c("CometUFICommentAttachmentContainer.react"), {
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function m(a) {
      a = a.attachment;
      var b = d("VideoPlayerHooks").usePaused(),
        e = d("VideoPlayerHooks").usePlaying();
      e = c("useDebouncedValue")(e, 5);
      b = b && !e;
      return j.jsx(
        c("CometUFICommentAnimatedImageAttachmentAttribution.react"),
        { attachment: a, isHidden: !b }
      );
    }
    m.displayName = m.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentAnimatedImageShareAttachmentStyle.react",
  [
    "CometRelay",
    "CometUFICommentAnimatedImageAttachment.react",
    "CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer.graphql",
    "FBLogger",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.styleTypeRenderer;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometUFICommentAnimatedImageShareAttachmentStyle_styleTypeRenderer.graphql"
            )),
        a
      );
      a = a.attachment;
      if (a == null) {
        c("FBLogger")("CometFeed").mustfix(
          "CometUFICommentAnimatedImageShareAttachmentStyle: Tried to render an animated image, but attachment information is null."
        );
        return null;
      }
      return i.jsx(c("CometUFICommentAnimatedImageAttachment.react"), {
        attachment: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentThirdPartyStickerRenderer.react",
  [
    "fbt",
    "ix",
    "CometImageFromIXValue.react",
    "CometPressable.react",
    "CometRelay",
    "CometSpriteBase.react",
    "CometUFICommentThirdPartyStickerRenderer_attachment.graphql",
    "CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo.graphql",
    "TetraText.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l = d("react"),
      m = {
        providerIcon: { display: "j83agx80", paddingEnd: "ph5uu5jm" },
        root: {
          alignItems: "bp9cbjyn",
          backgroundColor: "hybvsw6c",
          borderTopStartRadius: "lit7pgxp",
          borderTopEndRadius: "o3c63hce",
          borderBottomEndRadius: "hqlzco19",
          borderBottomStartRadius: "lsl2245n",
          bottom: "i09qtzwb",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          paddingEnd: "ph5uu5jm",
          paddingStart: "b3onmgus",
          paddingTop: "ecm0bbzt",
          paddingBottom: "e5nlhep0",
          position: "pmk7jnqg",
          start: "j9ispegn",
        },
        stickerContainer: { height: "pioscnbf", width: "etr7akla" },
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b(
              "CometUFICommentThirdPartyStickerRenderer_thirdPartyMediaInfo.graphql"
            )),
        a.thirdPartyMediaInfo
      );
      a = d("CometRelay").useFragment(
        k !== void 0
          ? k
          : (k = b(
              "CometUFICommentThirdPartyStickerRenderer_attachment.graphql"
            )),
        a.attachment$key
      );
      e = e.provider;
      var f = a.media.sticker_image.uri;
      a = a.url;
      return l.jsxs("div", {
        className: c("stylex")(m.stickerContainer),
        children: [
          l.jsx(c("CometSpriteBase.react"), {
            accessibilityCaption: h._("Click to view attachment"),
            cursorEnabled: !0,
            linkProps: { url: a },
            src: f,
            xstyle: m.stickerContainer,
          }),
          l.jsxs(c("CometPressable.react"), {
            "aria-label": h._("Click to view attachment"),
            linkProps: { url: a },
            xstyle: m.root,
            children: [
              l.jsx("div", {
                className: c("stylex")(m.providerIcon),
                children: l.jsx(c("CometImageFromIXValue.react"), {
                  source: i("1877536"),
                }),
              }),
              l.jsx(c("TetraText.react"), { type: "meta2", children: e }),
            ],
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
  "TahoeTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:TahoeLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:TahoeLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:TahoeLoggerConfig",
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
      c.setChainDepth = function (a) {
        this.$1.chain_depth = a;
        return this;
      };
      c.setChainingContextIdentifier = function (a) {
        this.$1.chaining_context_identifier = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setIsAutoplaying = function (a) {
        this.$1.is_autoplaying = a;
        return this;
      };
      c.setMediaID = function (a) {
        this.$1.media_id = a;
        return this;
      };
      c.setUpNextMediaID = function (a) {
        this.$1.up_next_media_id = a;
        return this;
      };
      c.setUpNextPosition = function (a) {
        this.$1.up_next_position = a;
        return this;
      };
      return a;
    })();
    c = {
      chain_depth: !0,
      chaining_context_identifier: !0,
      event: !0,
      is_autoplaying: !0,
      media_id: !0,
      up_next_media_id: !0,
      up_next_position: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  "LiveVideoCometBadge_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "LiveVideoCometBadge_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "breaking_status",
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
          name: "is_premiere",
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
  "CometVideoViewCount_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometVideoViewCount_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "play_count",
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
  "CometGamingFollowLifecycleStrings",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("All Videos");
    b = h._("All Live Notifications");
    c = h._("Highlights");
    d = h._("Suggested Live Notifications");
    e = h._("None");
    f = h._("No Live Notifications");
    var i = h._("Receive all video notifications from this Page."),
      j = h._("You'll get notified when this Page goes live."),
      k = h._("Receive suggested video notifications from this Page."),
      l = h._("You'll get suggested notifications from this Page."),
      m = h._("Turn off notifications from this Page."),
      n = h._("You won't get notified when this Page goes live."),
      o = h._("Video Notifications"),
      p = h._("You'll stop seeing posts in your News Feed."),
      q = h._("You won't see posts from this Page in News Feed."),
      r = h._("Unfollow");
    h = h._("Follow");
    g.NOTIF_ALL_VIDEOS = a;
    g.NOTIF_ALL_VIDEOS_TAHOE = b;
    g.NOTIF_HIGHLIGHTS = c;
    g.NOTIF_HIGHLIGHTS_TAHOE = d;
    g.NOTIF_NONE = e;
    g.NOTIF_NONE_TAHOE = f;
    g.NOTIF_ALL_VIDEOS_DESC = i;
    g.NOTIF_ALL_VIDEOS_DESC_TAHOE = j;
    g.NOTIF_HIGHLIGHTS_DESC = k;
    g.NOTIF_HIGHLIGHTS_DESC_TAHOE = l;
    g.NOTIF_NONE_DESC = m;
    g.NOTIF_NONE_DESC_TAHOE = n;
    g.NOTIF_MENU_TITLE = o;
    g.UNFOLLOW_DESC = p;
    g.UNFOLLOW_DESC_TAHOE = q;
    g.UNFOLLOW = r;
    g.FOLLOW = h;
  },
  98
);
__d(
  "CometGamingCvcBadge.react",
  [
    "ix",
    "BaseRow.react",
    "BaseRowItem.react",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "intlSummarizeNumber",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        iconWithLabel: { marginEnd: "fv0vnmcu" },
        root: {
          alignItems: "bp9cbjyn",
          backgroundColor: "ora8z2hr",
          borderTop: "gcieejh5",
          borderEnd: "bn081pho",
          borderBottom: "humdl8nn",
          borderStart: "izx4hr6d",
          borderTopStartRadius: "jk6sbkaj",
          borderTopEndRadius: "kdgqqoy6",
          borderBottomEndRadius: "ihh4hy1g",
          borderBottomStartRadius: "qttc61fc",
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          height: "datstx6m",
          justifyContent: "taijpn5t",
          marginTop: "rs0gx3tq",
          marginEnd: "kady6ibp",
          marginBottom: "dicw6rsg",
          marginStart: "dwxx2s2f",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          paddingTop: "ipjc6fyt",
          paddingEnd: "p8fzw8mz",
          paddingBottom: "iuny7tx3",
          paddingStart: "pcp91wgn",
          position: "l9j0dhe7",
          textDecoration: "esuyzwwr",
        },
      };
    function a(a) {
      a = a.initialViewerCount;
      return i.jsx("div", {
        className: c("stylex")(j.root),
        children: i.jsxs(c("BaseRow.react"), {
          align: "center",
          verticalAlign: "center",
          children: [
            i.jsx(c("BaseRowItem.react"), {
              xstyle: j.iconWithLabel,
              children: i.jsx(c("TetraIcon.react"), {
                color: "white",
                icon: d("fbicon")._(h("491228"), 20),
              }),
            }),
            i.jsx(c("BaseRowItem.react"), {
              children: i.jsx(c("TetraText.react"), {
                color: "white",
                numberOfLines: 1,
                type: "body4",
                children: c("intlSummarizeNumber")(a),
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
  "GamingVideoDestinationLoggingContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { external_entrypoint: "unknown", surface: "unknown" };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "GamingDestinationTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:GamingDestinationLoggerConfig"
    );
  },
  null
);
__d(
  "useGamingVideoDestinationEventLogger",
  [
    "GamingDestinationTypedLoggerLite",
    "GamingVideoDestinationLoggingContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a() {
      var a = i(c("GamingVideoDestinationLoggingContext")),
        b = h(
          function (b, d) {
            c("GamingDestinationTypedLoggerLite").log(
              babelHelpers["extends"]({ event: b }, a, d)
            );
          },
          [a]
        ),
        d = h(
          function (a) {
            b("click", a);
          },
          [b]
        ),
        e = h(
          function (a) {
            b("impression", a);
          },
          [b]
        );
      return { logClick: d, logEvent: b, logImpression: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "LiveVideoCometBadge.react",
  [
    "fbt",
    "BaseRow.react",
    "BaseRowItem.react",
    "CometRelay",
    "LiveVideoCometBadge_video.graphql",
    "TetraText.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = function (a, b, c) {
        if (a) return h._("LIVE BREAKING");
        return c ? h._("PREMIERE") : b ? h._("LIVE") : null;
      };
    function a(a) {
      var e = a.pulse;
      e = e === void 0 ? !1 : e;
      var f = a.size;
      f = f === void 0 ? "small" : f;
      a = a.video;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("LiveVideoCometBadge_video.graphql")),
        a
      );
      var g = !!a.breaking_status,
        h = !!a.is_live_streaming;
      a = !!a.is_premiere;
      return j.jsx("div", {
        className: c("stylex").dedupe(
          {
            "background-color-1": "l44iypv3",
            "border-top-start-radius-1": "jk6sbkaj",
            "border-top-end-radius-1": "kdgqqoy6",
            "border-bottom-end-radius-1": "ihh4hy1g",
            "border-bottom-start-radius-1": "qttc61fc",
            "box-sizing-1": "rq0escxv",
            "display-1": "pq6dq46d",
            "height-1": "datstx6m",
            "margin-top-1": "rs0gx3tq",
            "margin-end-1": "kady6ibp",
            "margin-bottom-1": "dicw6rsg",
            "margin-start-1": "dwxx2s2f",
          },
          f === "large"
            ? {
                "padding-top-1": "l29c1vbm",
                "padding-end-1": "dflh9lhu",
                "padding-bottom-1": "j7796vcc",
                "padding-start-1": "scb9dxdr",
              }
            : null,
          f === "small"
            ? {
                "padding-top-1": "ipjc6fyt",
                "padding-end-1": "ph5uu5jm",
                "padding-bottom-1": "iuny7tx3",
                "padding-start-1": "b3onmgus",
              }
            : null,
          e
            ? {
                "animation-direction-1": "afxn4irw",
                "animation-duration-1": "m8weaby5",
                "animation-iteration-count-1": "ee40wjg4",
                "animation-name-1": "q1gqmpn5",
                "animation-timing-function-1": "jbu8tgem",
              }
            : null
        ),
        children: j.jsx(c("BaseRow.react"), {
          align: "center",
          verticalAlign: "center",
          children: j.jsx(c("BaseRowItem.react"), {
            children: j.jsx(c("TetraText.react"), {
              color: "white",
              numberOfLines: 1,
              type: f === "large" ? "bodyLink3" : "bodyLink4",
              children: k(g, h, a),
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
  "useCometSearchScopedTypeaheadDataSource",
  [
    "CometRelay",
    "CometSearchKeywordDataSource",
    "CometTypeaheadDataEntryWithMetaData",
    "Promise",
    "cometSearchTypeaheadDecorateMixedPayload",
    "cometSearchTypeaheadDecorateRecentPayload",
    "react",
    "searchCometTypeaheadPushErrorToast",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useMemo;
    function a(a) {
      var e = a.config,
        f = e.dataSources.keywordDataSourceParams,
        g = e.logging.sessionContext,
        j = e.view.renderLimit,
        k = a.recentDataSource,
        l = a.searchScopeEntityID,
        m = d("CometRelay").useRelayEnvironment(),
        n = i(
          function () {
            return new (c("CometSearchKeywordDataSource"))(
              babelHelpers["extends"]({}, f, {
                limit: j,
                onError: function () {
                  return c("searchCometTypeaheadPushErrorToast")();
                },
                relayEnvironment: m,
              })
            );
          },
          [f, j, m]
        ),
        o = h(
          function (a) {
            var b = a.entries;
            a = a.params;
            return c("cometSearchTypeaheadDecorateMixedPayload")(
              { entries: b, params: a },
              { limit: j }
            );
          },
          [j]
        ),
        p = h(
          function (a, b) {
            if (k != null) {
              var d = {
                logging: { searchScopeEntityID: l },
                markers: a.getMetaData().markers,
              };
              d = new (c("CometTypeaheadDataEntryWithMetaData"))({
                key: a.getKey(),
                label: a.getLabel(),
                metaData: d,
                rawData: a.getRawData(),
              });
              k.add(d, g, b);
            }
          },
          [g, k, l]
        ),
        q = h(
          function (a) {
            var b = a.query;
            if (b === "" && k != null) {
              var d = k.fetchCache(a);
              return c("cometSearchTypeaheadDecorateRecentPayload")(d, {
                limit: j,
              });
            }
            if (b === "") return { entries: [], params: a };
            d = n.fetchCache(a);
            return o(d);
          },
          [o, n, j, k]
        ),
        r = h(
          function (a) {
            var d = a.query;
            if (d === "" && k != null)
              return k.fetchNetwork(a).then(function (a) {
                return c("cometSearchTypeaheadDecorateRecentPayload")(a, {
                  limit: j,
                });
              });
            return d === ""
              ? b("Promise").resolve({ entries: [], params: a })
              : n.fetchNetwork(a).then(o);
          },
          [o, n, j, k]
        ),
        s = h(
          function (a, b) {
            k != null && k.remove(a, b);
          },
          [k]
        );
      return i(
        function () {
          return {
            addRecentEntry: p,
            fetchCache: q,
            fetchNetwork: r,
            removeRecentEntry: s,
          };
        },
        [p, q, r, s]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometSearchScopedTypeaheadPressEntryHandler",
  ["react", "useCometTypeaheadNavigate"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.callback,
        d = a.loggingProvider,
        e = a.urlBuilder,
        f = c("useCometTypeaheadNavigate")();
      return h(
        function (a) {
          var c = a.getRawData();
          c =
            c.type === "your_group_activity"
              ? c.url
              : e({
                  entryPointAction: "SEARCH_BOX",
                  query: a.getLabel(),
                  typeaheadSessionID: d.getSessionID(),
                });
          f(c);
          b && b();
        },
        [e, d, f, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometSearchScopedTypeaheadSelectFreeformQueryHandler",
  ["react", "useCometTypeaheadNavigate"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.callback,
        d = a.loggingProvider,
        e = a.urlBuilder,
        f = c("useCometTypeaheadNavigate")();
      return h(
        function (a) {
          a = e({
            entryPointAction: "SEARCH_BOX",
            query: a,
            typeaheadSessionID: d.getSessionID(),
          });
          f(a);
          b && b();
        },
        [e, d, f, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerCometTahoeMouseInteractions",
  [
    "VideoPlayerHooks",
    "useVideoPlayerClickToPauseInteraction",
    "useVideoPlayerClickToPlayInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = a === void 0 ? {} : a;
      a = a.shouldUnmuteOnPlay;
      var b = d("VideoPlayerHooks").useEnded(),
        e = d("VideoPlayerHooks").usePlaying();
      a = c("useVideoPlayerClickToPlayInteraction")({ shouldUnmute: a });
      var f = c("useVideoPlayerClickToPauseInteraction")();
      e = e ? f : a;
      return b ? null : e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "validatePlayerSuborigin",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return typeof a === "string" ? a : null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometTahoeSidepaneContext.react",
  ["$InternalEnum", "emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react").createContext;
    e = b("$InternalEnum")({ GENERIC: "generic", WOODHENGE: "woodhenge" });
    f = a({
      activeSidepane: e.GENERIC,
      setActiveSidepane: function (a) {
        return c("emptyFunction")();
      },
    });
    g.CometTahoeSidepaneType = e;
    g.context = f;
  },
  98
);
__d(
  "CometTahoeUpNextVideoContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react").createContext;
    b = a({
      setUpNextChainingCursor: function () {},
      setUpNextTrackingCode: function () {},
      setUpNextVideoID: null,
      upNextChainingCursor: null,
      upNextTrackingCode: null,
      upNextVideoID: null,
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometTahoeWoodhengeContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react").createContext;
    b = a({ paymentSucceeded: !1, setPaymentSucceeded: function (a) {} });
    g["default"] = b;
  },
  98
);
__d(
  "CometVideoHomeInjectionPortalingProvider.react",
  [
    "CometVideoHomeInjectionPortalingContext",
    "GlobalVideoPortsID",
    "react",
    "useRoutePassthroughProps",
    "validatePlayerSuborigin",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = a.children,
        e = a.injectedVideoID;
      a = c("useRoutePassthroughProps")();
      var f = d("GlobalVideoPortsID").ensureVideoID(
          a == null ? void 0 : a.portableVideoID
        ),
        g =
          (a == null ? void 0 : a.portalingRouteTracePolicy) != null
            ? String(a == null ? void 0 : a.portalingRouteTracePolicy)
            : null,
        j = c("validatePlayerSuborigin")(
          a == null ? void 0 : a.portalingSubOrigin
        );
      a = i(
        function () {
          return {
            initialTracePolicy: g,
            injectedVideoID: e,
            portableVideoID: f,
            subOrigin: j,
          };
        },
        [g, e, f, j]
      );
      return h.jsx(c("CometVideoHomeInjectionPortalingContext").Provider, {
        value: a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoCommentComposerGlimmer.react",
  ["BaseGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.index;
      return h.jsx("div", {
        className:
          "j9ispegn pmk7jnqg dhix69tm bi6gxh9e wkznzc2l kvgmc6g5 n7fi1qx3 i09qtzwb",
        children: h.jsxs("div", {
          className: "j83agx80 bp9cbjyn",
          children: [
            h.jsx(c("BaseGlimmer.react"), {
              className:
                "q676j6op oi9244e8 qypqp5cg pfnyh3mw spb7xbtv bkmhp75w emlxlaya s45kfl79",
              index: a,
            }),
            h.jsx(c("BaseGlimmer.react"), {
              className:
                "l5sxq0ai tv7at329 buofh1pr gob819ct ols5edhi gmcszhul emml16de",
              index: a,
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
  "CometVideoProfileInfoGlimmer.react",
  ["BaseGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.index;
      a = a.showVideoInfo;
      a = a === void 0 ? !0 : a;
      return h.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          h.jsxs("div", {
            className: "j83agx80",
            children: [
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "go5t5npl oi9244e8 hxdsxuhi spb7xbtv bkmhp75w emlxlaya s45kfl79",
                index: b,
              }),
              h.jsxs("div", {
                className: "taijpn5t cbu4d94t j83agx80",
                children: [
                  h.jsx(c("BaseGlimmer.react"), {
                    className:
                      "elpiyq4v bi6gxh9e cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",
                    index: b,
                  }),
                  h.jsx(c("BaseGlimmer.react"), {
                    className:
                      "i7o4yfgj cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",
                    index: b,
                  }),
                ],
              }),
            ],
          }),
          a &&
            h.jsx(c("BaseGlimmer.react"), {
              className:
                "f4c7eilb n1l5q3vz jnigpg78 ns4ygwem fykbt5ly hgaippwi fni8adji",
              index: b,
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
  "CometVideoViewCount.react",
  [
    "fbt",
    "CometRelay",
    "CometVideoViewCount_video.graphql",
    "TetraTextPairing.react",
    "intlSummarizeNumber",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.color;
      a = a.video;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometVideoViewCount_video.graphql")),
        a
      );
      a = (a = +a.play_count) != null ? a : 0;
      return j.jsx(c("TetraTextPairing.react"), {
        body: j.jsx("div", {
          className: "bnpdmtie",
          children: h._(
            { "*": "{view_count} Views", _1: "{view_count} View" },
            [h._param("view_count", c("intlSummarizeNumber")(a)), h._plural(a)]
          ),
        }),
        bodyColor: (a = e) != null ? a : "tertiary",
        level: 4,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTahoeUpNextItemGlimmer.react",
  ["BaseGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        className: "tr9rh885 j83agx80",
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className:
              "m7fg4r8v tvfksri0 ic2jb53e qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",
            index: 0,
          }),
          h.jsxs("div", {
            children: [
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "bow6oqyw gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                index: 0,
              }),
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "nx96mzau ku2m03ct cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",
                index: 0,
              }),
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "lelwyktv ku2m03ct cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",
                index: 0,
              }),
            ],
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
  "CometTahoeUpNextGlimmer.react",
  ["BaseGlimmer.react", "CometTahoeUpNextItemGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 3;
    function a() {
      return h.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className: "bow6oqyw gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
            index: 0,
          }),
          Array(i)
            .fill()
            .map(function (a, b) {
              return h.jsx(c("CometTahoeUpNextItemGlimmer.react"), {}, b);
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
  "CometTahoeSidePaneGlimmer.react",
  [
    "CometTahoeUpNextGlimmer.react",
    "CometVideoCommentComposerGlimmer.react",
    "CometVideoProfileInfoGlimmer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        className: "dhix69tm sjgh65i0 wkznzc2l tr9rh885 cbu4d94t j83agx80",
        children: [
          h.jsx("div", {
            className: "tfnaxnde",
            children: h.jsx(c("CometVideoProfileInfoGlimmer.react"), {
              index: 0,
            }),
          }),
          h.jsx(c("CometTahoeUpNextGlimmer.react"), {}),
          h.jsx("div", {
            className: "pmk7jnqg lfi1tu6t",
            children: h.jsx(c("CometVideoCommentComposerGlimmer.react"), {
              index: 0,
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
  "VideoSharingOptionClickedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744466");
    c = b("FalcoLoggerInternal").create("video_sharing_option_clicked", a);
    e.exports = c;
  },
  null
);
__d(
  "VideoSharingOptionImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744467");
    c = b("FalcoLoggerInternal").create("video_sharing_option_impression", a);
    e.exports = c;
  },
  null
);
__d(
  "VideoHomeShareUtils",
  [
    "VideoSharingOptionClickedFalcoEvent",
    "VideoSharingOptionImpressionFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a) {
      var b = a.player_origin,
        d = a.reaction_video_channel_type,
        e = a.video_player_format,
        f = babelHelpers["extends"]({}, a, {
          player_origin: b == null ? void 0 : b.toString(),
          reaction_video_channel_type: d == null ? void 0 : d.toString(),
          video_player_format: e == null ? void 0 : e.toString(),
        });
      c("VideoSharingOptionImpressionFalcoEvent").log(function () {
        return f;
      });
    };
    b = function (a) {
      var b = a.player_origin,
        d = a.reaction_video_channel_type,
        e = a.video_player_format,
        f = babelHelpers["extends"]({}, a, {
          player_origin: b == null ? void 0 : b.toString(),
          reaction_video_channel_type: d == null ? void 0 : d.toString(),
          video_player_format: e == null ? void 0 : e.toString(),
        });
      c("VideoSharingOptionClickedFalcoEvent").log(function () {
        return f;
      });
    };
    g.logExternalShareOptionImpression = a;
    g.logExternalShareOptionClick = b;
  },
  98
);
__d(
  "VideoSharingPermalinkLandingFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744468");
    c = b("FalcoLoggerInternal").create("video_sharing_permalink_landing", a);
    e.exports = c;
  },
  null
);
__d(
  "CometVideoHomeShareUtils",
  [
    "ConstUriUtils",
    "VideoHomeShareUtils",
    "VideoSharingPermalinkLandingFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "extid";
    a = function (a) {
      var b = d("ConstUriUtils").getUri(window.location.href),
        c = (b == null ? void 0 : b.getQueryParam(h)) != null;
      b != null &&
        c &&
        i(babelHelpers["extends"]({}, a, { url: b.toString() }));
    };
    var i = function (a) {
      c("VideoSharingPermalinkLandingFalcoEvent").log(function () {
        return a;
      });
    };
    f.exports = {
      logExternalShareOptionClick: d("VideoHomeShareUtils")
        .logExternalShareOptionClick,
      logExternalShareOptionImpression: d("VideoHomeShareUtils")
        .logExternalShareOptionImpression,
      logPermalinkLandingFromSharing: i,
      logPermalinkLandingFromSharingIfQueryParamExists: a,
      sharingTrackingParam: h,
    };
  },
  34
);
__d(
  "WebApiApplication",
  ["invariant", "ApiClient"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(b, d, a, e, g) {
      c("ApiClient").setAccessToken(b),
        c("ApiClient").setClientID(d),
        c("ApiClient").setDefaultParams({ pretty: !1 }),
        a && (typeof a[e] === "function" || h(0, 5200, e), a[e].apply(a, g));
    }
    function b() {
      return c("ApiClient").getAccessToken();
    }
    function d() {
      return c("ApiClient").getClientID();
    }
    g.init = a;
    g.getAccessToken = b;
    g.getClientID = d;
  },
  98
);
__d(
  "AdsSpeedConfig",
  ["URI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = new (c("URI"))(window.location.href).getQueryData();
    var h = e.browserlab_test,
      i = e.scenario,
      j = { editor_l1_dd: "edit_l1", change_level_dd: "change_level" };
    function a() {
      return !!h || !!i;
    }
    function b() {
      return h || j[i];
    }
    function d() {
      return !1;
    }
    g.hasBrowserLabTest = a;
    g.getBrowserLabTest = b;
    g.isDevToolsTimingEnabled = d;
  },
  98
);
__d(
  "AdsApplicationIDs",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      ADS_AD_BUILDER: "4613280245667390",
      ADS_AND_PAGES_MANAGER__DEPRECATED: "6802152230",
      ADS_CAMPAIGN_MANAGER: "624541620938530",
      ADS_CAMPAIGN_PLANNER: "1902171089916558",
      ADS_CREATIVE_STUDIO: "814871115284314",
      ADS_CREATOR: "209787012415271",
      ADS_EVENTS_MANAGER: "2094176354154603",
      ADS_MANAGER: "484843564880080",
      ADS_PAYMENT: "123097351040126",
      ADS_POWER_EDITOR: "119211728144504",
      BOOSTED_POST: "205000946197077",
      BUSINESS_ACCOUNTS: "436761779744620",
      FBADDINS_EXCEL: "1103203559767608",
      LIFT_STUDY_CREATION: "367378623468359",
      MOBILE_ADS_MANAGER_FOR_ANDROID: "438142079694454",
      MOBILE_ADS_MANAGER_FOR_IOS: "1479723375646806",
      PAGE_ADMIN_APP_FOR_ANDROID: "121876164619130",
      PAGE_ADMIN_APP_FOR_IOS: "165907476854626",
      PRODUCTS: "515496645328243",
    });
  },
  null
);
__d(
  "AdsApplicationUtils",
  ["AdsApplicationIDs", "ApiClient", "WebApiApplication"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("WebApiApplication").getClientID();
      return a === c("AdsApplicationIDs").ADS_POWER_EDITOR;
    }
    function b() {
      var a = d("WebApiApplication").getClientID();
      return a === c("AdsApplicationIDs").PRODUCTS;
    }
    function e() {
      var a = d("WebApiApplication").getClientID();
      return a === c("AdsApplicationIDs").ADS_CAMPAIGN_MANAGER;
    }
    function f() {
      var a = d("WebApiApplication").getClientID();
      return a === c("AdsApplicationIDs").ADS_CREATIVE_STUDIO;
    }
    function h() {
      var a = d("WebApiApplication").getClientID();
      return a === "1520381111604620";
    }
    function i() {
      var a = d("WebApiApplication").getClientID();
      return a === c("AdsApplicationIDs").FBADDINS_EXCEL;
    }
    function j() {
      var a = d("WebApiApplication").getClientID();
      return a === c("AdsApplicationIDs").BOOSTED_POST;
    }
    function k() {
      var a = c("ApiClient").getClientID();
      return a === c("AdsApplicationIDs").ADS_AD_BUILDER;
    }
    function l() {
      var a = d("WebApiApplication").getClientID();
      return a === c("AdsApplicationIDs").LIFT_STUDY_CREATION;
    }
    g.isPowerEditor = a;
    g.isProducts = b;
    g.isCampaignManager = e;
    g.isCreativeStudio = f;
    g.isDynamicInstantAds = h;
    g.isFAME = i;
    g.isBoostedPost = j;
    g.isAdBuilder = k;
    g.isLiftStudyCreation = l;
  },
  98
);
__d(
  "LoadObjectOperations",
  ["keyMirror"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({
      CREATING: null,
      DELETING: null,
      LOADING: null,
      UPDATING: null,
    });
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "LoadObject",
  [
    "invariant",
    "LoadObjectOperations",
    "gkx",
    "immutable",
    "nullthrows",
    "shallowEqual",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = [void 0, null, !1, !0, 0, ""];
    var i = function (a, b) {
        return Object.is(a, b) || c("immutable").is(a, b);
      },
      j = "SECRET_" + Math.random(),
      k = new Map(
        new Map(
          a.map(function (a) {
            return [
              a,
              new Map([
                [!0, new Map()],
                [!1, new Map()],
              ]),
            ];
          })
        )
      ),
      l = c("gkx")("163");
    b = c("immutable").Record({
      operation: void 0,
      value: void 0,
      error: void 0,
      internalHasValue: !1,
    });
    d = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f) {
        b === j || h(0, 2084);
        return (
          a.call(this, {
            operation: c,
            value: d,
            error: e,
            internalHasValue: f,
          }) || this
        );
      }
      b.$LoadObject1 = function (a, c, d, e) {
        var f = b.$LoadObject2(a, c, d, e);
        return f || new b(j, a, c, d, e);
      };
      b.$LoadObject2 = function (a, d, e, f) {
        if (e !== void 0 || !k.has(d)) return null;
        var g = c("nullthrows")(k.get(d));
        g = c("nullthrows")(g.get(f));
        if (!g.has(a)) {
          d = new b(j, a, d, e, f);
          g.set(a, d);
        }
        return c("nullthrows")(g.get(a));
      };
      var d = b.prototype;
      d.getOperation = function () {
        return this.get("operation");
      };
      d.getValue = function () {
        return this.get("value");
      };
      d.getValueEnforcing = function () {
        this.hasValue() || h(0, 2085);
        var a = this.getValue();
        return a;
      };
      d.getError = function () {
        return this.get("error");
      };
      d.getErrorEnforcing = function () {
        this.hasError() || h(0, 2086);
        return this.get("error");
      };
      d.hasValue = function () {
        return !!this.get("internalHasValue");
      };
      d.hasOperation = function () {
        return this.getOperation() !== void 0;
      };
      d.hasError = function () {
        return this.getError() !== void 0;
      };
      d.isEmpty = function () {
        return !this.hasValue() && !this.hasOperation() && !this.hasError();
      };
      d.setOperation = function (a) {
        var c = b.$LoadObject2(
          a,
          this.getValue(),
          this.getError(),
          this.hasValue()
        );
        return c || this.set("operation", a);
      };
      d.setValue = function (a) {
        var c = b.$LoadObject2(this.getOperation(), a, this.getError(), !0);
        return c || this.set("value", a).set("internalHasValue", !0);
      };
      d.setError = function (a) {
        var c = b.$LoadObject2(
          this.getOperation(),
          this.getValue(),
          a,
          this.hasValue()
        );
        return c || this.set("error", a);
      };
      d.removeOperation = function () {
        var a = this.remove("operation"),
          c = b.$LoadObject2(
            a.getOperation(),
            a.getValue(),
            a.getError(),
            a.hasValue()
          );
        return c || a;
      };
      d.removeValue = function () {
        var a = this.remove("value").remove("internalHasValue"),
          c = b.$LoadObject2(
            a.getOperation(),
            a.getValue(),
            a.getError(),
            a.hasValue()
          );
        return c || a;
      };
      d.removeError = function () {
        var a = this.remove("error"),
          c = b.$LoadObject2(
            a.getOperation(),
            a.getValue(),
            a.getError(),
            a.hasValue()
          );
        return c || a;
      };
      d.isCreating = function () {
        return this.getOperation() === c("LoadObjectOperations").CREATING;
      };
      d.isDeleting = function () {
        return this.getOperation() === c("LoadObjectOperations").DELETING;
      };
      d.isDone = function () {
        return !this.hasOperation();
      };
      d.hasValueWithoutError = function () {
        return this.isDone() && this.hasValue() && !this.hasError();
      };
      d.isLoading = function () {
        return this.getOperation() === c("LoadObjectOperations").LOADING;
      };
      d.isLoadingOrEmpty = function () {
        return this.isLoading() || this.isEmpty();
      };
      d.isUpdating = function () {
        return this.getOperation() === c("LoadObjectOperations").UPDATING;
      };
      d.creating = function () {
        return this.setOperation(c("LoadObjectOperations").CREATING);
      };
      d.deleting = function () {
        return this.setOperation(c("LoadObjectOperations").DELETING);
      };
      d.done = function () {
        return this.removeOperation();
      };
      d.loading = function () {
        return this.setOperation(c("LoadObjectOperations").LOADING);
      };
      d.updating = function () {
        return this.setOperation(c("LoadObjectOperations").UPDATING);
      };
      d.map = function (a) {
        if (!this.hasValue()) return this;
        var c = this.getValueEnforcing();
        a = a(c);
        return a instanceof b ? a : this.setValue(a);
      };
      d.mapValue = function (a) {
        if (!this.hasValue()) return this;
        var c = this.getValueEnforcing();
        a = a(c);
        if (a instanceof b) {
          !a.hasError() &&
            this.hasError() &&
            (a = a.setError(this.getErrorEnforcing()));
          !a.hasOperation() &&
            this.hasOperation() &&
            (a = a.setOperation(this.getOperation()));
          return a;
        } else return this.setValue(a);
      };
      d.mapError = function (a) {
        if (!this.hasError()) return this;
        var c = this.getErrorEnforcing();
        a = a(c);
        return a instanceof b ? a : this.setError(a);
      };
      d.match = function (a, b) {
        if (this.hasOperation()) {
          var d = a.loading;
          this.isCreating() && a.creating
            ? (d = a.creating)
            : this.isUpdating() && a.updating
            ? (d = a.updating)
            : this.isDeleting() && a.deleting && (d = a.deleting);
          return d(this.value, this.error, b);
        }
        if (this.hasError())
          return this.hasValue() && a.loadedWithError
            ? c("nullthrows")(a.loadedWithError)(
                this.getValueEnforcing(),
                this.getErrorEnforcing(),
                b
              )
            : a.error(this.getErrorEnforcing(), b);
        return this.hasValue()
          ? a.loaded(this.getValueEnforcing(), b)
          : a.empty
          ? a.empty(b)
          : a.error(new Error("No value"), b);
      };
      d.equals = function (a, c) {
        return b.equals(this, a, c);
      };
      d.shallowEquals = function (a) {
        return b.equals(this, a, c("shallowEqual"));
      };
      b.equals = function (a, b, c) {
        var d = a === b;
        if (!a || !b || d) return d;
        if (
          a.getOperation() !== b.getOperation() ||
          a.hasError() !== b.hasError() ||
          a.hasValue() !== b.hasValue()
        )
          return !1;
        if (a.hasError() && b.hasError() && a.getError() === b.getError())
          return !0;
        d = a.getValue();
        a = b.getValue();
        if (!d || !a) return d === a;
        c = (b = c) != null ? b : i;
        return c(d, a);
      };
      b.shallowEquals = function (a, d) {
        return b.equals(a, d, c("shallowEqual"));
      };
      b.creating = function () {
        return b.$LoadObject1(
          c("LoadObjectOperations").CREATING,
          void 0,
          void 0,
          !1
        );
      };
      b.deleting = function () {
        return b.$LoadObject1(
          c("LoadObjectOperations").DELETING,
          void 0,
          void 0,
          !1
        );
      };
      b.empty = function () {
        return b.$LoadObject1(void 0, void 0, void 0, !1);
      };
      b.loading = function () {
        return b.$LoadObject1(
          c("LoadObjectOperations").LOADING,
          void 0,
          void 0,
          !1
        );
      };
      b.updating = function () {
        return b.$LoadObject1(
          c("LoadObjectOperations").UPDATING,
          void 0,
          void 0,
          !1
        );
      };
      b.withError = function (a) {
        l && a.stack;
        return b.$LoadObject1(void 0, void 0, a, !1);
      };
      b.withValue = function (a) {
        return b.$LoadObject1(void 0, a, void 0, !0);
      };
      return b;
    })(b);
    g["default"] = d;
  },
  98
);
__d(
  "LoadObjectMapBatchingQueueNames",
  ["keyMirror"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({
      MAIN: null,
      POST_FETCH: null,
      DEFAULT: null,
      DYNAMIC: null,
      CHEAP: null,
    });
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "LoadObjectMap",
  [
    "invariant",
    "LoadObject",
    "LoadObjectMapBatchingQueueNames",
    "immutable",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "long_secret_string_do_not_use",
      j = function (a, b) {
        return a.isEmpty();
      },
      k = Number.POSITIVE_INFINITY;
    a = (function () {
      a.create = function (b, c, d, e) {
        c === void 0 && (c = j);
        d === void 0 && (d = k);
        e === void 0 && (e = !1);
        return new a(
          i,
          b,
          function (a) {
            return a;
          },
          c,
          d,
          e
        );
      };
      a.createKeyed = function (b, c, d, e, f) {
        d === void 0 && (d = j);
        e === void 0 && (e = k);
        f === void 0 && (f = !1);
        return new a(i, b, c, d, e, f);
      };
      function a(a, b, d, e, f, g) {
        (this.$1 = c("immutable").Map()),
          (this.$4 = e),
          (this.$5 = d),
          (this.$3 = b),
          (this.$8 = c("immutable").OrderedSet().asMutable()),
          (this.$9 = null),
          (this.$6 = f),
          (this.$10 = g),
          (this.$11 = c("immutable").Set()),
          (this.$7 = new Map());
      }
      var d = a.prototype;
      d.get = function (a, b) {
        var d = this;
        b === void 0 && (b = c("LoadObjectMapBatchingQueueNames").DEFAULT);
        var e = this.getCached(a),
          f = this.$5(a);
        if (!this.$8.has(f) && (this.$4(e, a) || this.$11.has(f))) {
          this.$7.has(b) ||
            this.$7.set(b, c("immutable").OrderedSet().asMutable());
          b = this.$7.get(b);
          b != null || h(0, 21818);
          b.add(a);
          this.$8.add(f);
          if (this.$10) {
            b = this.$7.get(c("LoadObjectMapBatchingQueueNames").MAIN);
            if (b != null) {
              a = this.__getChunkSize(
                b,
                c("LoadObjectMapBatchingQueueNames").MAIN
              );
              if (b.size >= a) {
                this.$12(b, c("LoadObjectMapBatchingQueueNames").MAIN);
                return e;
              }
            } else
              this.$7.forEach(function (a, b) {
                var c = d.__getChunkSize(a, b);
                if (a.size >= c) {
                  d.$12(a, b);
                  return e;
                }
              });
          }
          this.$9 === null &&
            (this.$9 = window.setTimeout(function () {
              d.$7.forEach(function (a, b) {
                a.size > 0 && d.$12(a, b);
              }),
                d.$10 || d.$8.clear(),
                (d.$9 = null);
            }, 0));
          this.$11 = this.$11["delete"](f);
        }
        return e;
      };
      d.getCached = function (a) {
        a = this.$5(a);
        return this.$1.has(a) ? this.$1.get(a) : c("LoadObject").empty();
      };
      d.getAll = function (a) {
        var b = this,
          d = c("immutable")
            .Map()
            .withMutations(function (c) {
              for (
                var d = a,
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
                c.set(g, b.get(g));
              }
            });
        return d;
      };
      d.setKeyStale = function (b) {
        b = this.$5(b);
        var c = new a(i, this.$3, this.$5, this.$4, this.$6, this.$10);
        c.$1 = this.$1;
        c.$11 = this.$11.add(b);
        return c;
      };
      d.setAllExistingKeysStale = function () {
        var b = new a(i, this.$3, this.$5, this.$4, this.$6, this.$10);
        b.$1 = this.$1;
        b.$11 = this.$11.union(Array.from(this.$1.keys()));
        return b;
      };
      d.setAllKeysStale = function (b) {
        var d = this;
        b = c("immutable")
          .Set(b)
          .map(function (a) {
            return d.$5(a);
          });
        var e = new a(i, this.$3, this.$5, this.$4, this.$6, this.$10);
        e.$1 = this.$1;
        e.$11 = this.$11.union(b);
        return e;
      };
      d.__clearFrame = function (a) {
        (a = this.$7.get(a)) == null ? void 0 : a.clear();
      };
      d.$13 = function (a, b) {
        var c = [],
          d = new Set();
        b = this.__getChunkSize(a, b);
        for (
          var a = a,
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          d.add(g);
          d.size >= b && (c.push(d), (d = new Set()));
        }
        d.size > 0 && c.push(d);
        return c;
      };
      d.$12 = function (a, b) {
        for (
          var a = this.$13(a, b),
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          this.__doLoadChunk(e);
        }
        this.__clearFrame(b);
      };
      d.__doLoadChunk = function (a) {
        this.$3(a);
      };
      d.__getChunkSize = function (a, b) {
        return this.$6;
      };
      d.getData = function () {
        return this.$1;
      };
      d.__setData = function (a) {
        this.$1 = a;
      };
      d.getLoadedMap = function () {
        if (!this.$2) {
          var a = [];
          for (
            var b = this.$1,
              d = Array.isArray(b),
              e = 0,
              b = d
                ? b
                : b[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
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
            var g = f[0];
            f = f[1];
            f.hasValue() && a.push([g, f.getValueEnforcing()]);
          }
          this.$2 = c("immutable").Map(a);
        }
        return this.$2;
      };
      d.getLoadedValue = function (a) {
        return this.getLoadedMap().get(this.$5(a));
      };
      d.setDeleting = function (a) {
        var b = this;
        return this.__mutate(function () {
          return b.$1.withMutations(function (c) {
            for (
              var d = a,
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
              var h = b.$5(g);
              g = b.getCached(g);
              c.set(h, g.deleting());
            }
          });
        });
      };
      d.setLoading = function (a) {
        var b = this;
        return this.__mutate(function () {
          return b.$1.withMutations(function (c) {
            for (
              var d = a,
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
              var h = b.$5(g);
              g = b.getCached(g);
              c.set(h, g.loading());
            }
          });
        });
      };
      d.setUpdating = function (a) {
        var b = this;
        return this.__mutate(function () {
          return b.$1.withMutations(function (c) {
            for (
              var d = a,
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
              var h = b.$5(g);
              g = b.getCached(g);
              c.set(h, g.updating());
            }
          });
        });
      };
      d.setSingleValueOrError = function (a, b) {
        var c = this.getCached(a);
        if (b instanceof Error) return this.set(a, c.setError(b).done());
        else return this.set(a, c.setValue(b).done());
      };
      d.setMultipleValueOrError = function (a) {
        var b = this;
        return this.__mutate(function () {
          return b.$1.withMutations(function (c) {
            for (
              var d = a,
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
              var h = g[0];
              g = g[1];
              var i = b.$5(h);
              h = b.getCached(h);
              g instanceof Error
                ? c.set(i, h.setError(g).done())
                : c.set(i, h.setValue(g).done());
            }
          });
        });
      };
      d.setMultipleErrors = function (a) {
        var b = this;
        return this.__mutate(function () {
          return b.$1.withMutations(function (c) {
            for (
              var d = a,
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
              var h = g[0];
              g = g[1];
              var i = b.$5(h);
              h = b.getCached(h);
              c.set(i, h.setError(g).done());
            }
          });
        });
      };
      d.deleteMultipleValueOrError = function (a) {
        var b = this;
        return this.__mutate(function () {
          return b.$1.withMutations(function (c) {
            for (
              var d = a,
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
              g = b.$5(g);
              c["delete"](g);
            }
          });
        });
      };
      d.deleteMultipleErrors = function (a) {
        var b = this;
        return this.__mutate(function () {
          return b.$1.withMutations(function (c) {
            for (
              var d = a,
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
              g = b.$5(g);
              var h = b.$1.get(g);
              h.hasError() && c["delete"](g);
            }
          });
        });
      };
      d.deleteAllErrors = function () {
        var a = this;
        return this.__mutate(function () {
          return a.$1.withMutations(function (a) {
            a.forEach(function (b, c) {
              b.hasError() && a["delete"](c);
            });
          });
        });
      };
      d.has = function (a) {
        return this.$1.has(this.$5(a));
      };
      d.set = function (a, b) {
        var c = this;
        return this.__mutate(function () {
          return c.$1.set(c.$5(a), b);
        });
      };
      d.update = function (a, b) {
        return this.set(a, b(this.get(a)));
      };
      d["delete"] = function (a) {
        var b = this;
        return this.__mutate(function () {
          return b.$1["delete"](b.$5(a));
        });
      };
      d.merge = function (a) {
        var b = this;
        return this.__mutate(function () {
          return b.$1.merge(b.$14(a));
        });
      };
      d.withMutations = function (a) {
        var b = this;
        return this.__mutate(function () {
          return b.$1.withMutations(a);
        });
      };
      d.clear = function () {
        var a = this;
        return this.__mutate(function () {
          return a.$1.clear();
        });
      };
      d.$14 = b("regeneratorRuntime").mark(function a(c) {
        var d, e, f, g, h;
        return b("regeneratorRuntime").wrap(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  (d = c),
                    (e = Array.isArray(d)),
                    (f = 0),
                    (d = e
                      ? d
                      : d[
                          typeof Symbol === "function"
                            ? Symbol.iterator
                            : "@@iterator"
                        ]());
                case 1:
                  if (!e) {
                    a.next = 7;
                    break;
                  }
                  if (!(f >= d.length)) {
                    a.next = 4;
                    break;
                  }
                  return a.abrupt("break", 16);
                case 4:
                  g = d[f++];
                  a.next = 11;
                  break;
                case 7:
                  f = d.next();
                  if (!f.done) {
                    a.next = 10;
                    break;
                  }
                  return a.abrupt("break", 16);
                case 10:
                  g = f.value;
                case 11:
                  h = g;
                  a.next = 14;
                  return [this.$5(h[0]), h[1]];
                case 14:
                  a.next = 1;
                  break;
                case 16:
                case "end":
                  return a.stop();
              }
          },
          a,
          this
        );
      });
      d.__mutate = function (b) {
        b = b();
        if (b === this.$1) return this;
        var c = new a(i, this.$3, this.$5, this.$4, this.$6, this.$10);
        c.$1 = b;
        c.$11 = this.$11;
        return c;
      };
      d.__getPreventLoadsForThisFrame = function (a) {
        a === void 0 && (a = c("LoadObjectMapBatchingQueueNames").DEFAULT);
        return (a = this.$7.get(a)) != null ? a : c("immutable").OrderedSet();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "KnowledgeNotesReadPermalinkGeminiRootQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "noteID" }],
        b = {
          alias: "commentsLocation",
          args: null,
          kind: "ScalarField",
          name: "comments_location",
          storageKey: null,
        },
        c = [{ kind: "Variable", name: "id", variableName: "noteID" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        g = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        h = {
          alias: "profilePicture",
          args: [
            { kind: "Literal", name: "height", value: 24 },
            { kind: "Literal", name: "width", value: 24 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: g,
          storageKey: "profile_picture(height:24,width:24)",
        },
        i = [f, d, h],
        j = {
          alias: "userCount",
          args: null,
          kind: "ScalarField",
          name: "user_count",
          storageKey: null,
        },
        k = {
          alias: "count",
          args: null,
          kind: "ScalarField",
          name: "approximate_member_count",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "KnowledgeNotesReadPermalinkGeminiRootQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: "preferences",
                  args: null,
                  concreteType: "XFBKnowledgeNotePreferences",
                  kind: "LinkedField",
                  name: "knowledge_note_preferences",
                  plural: !1,
                  selections: [b],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: c,
                concreteType: null,
                kind: "LinkedField",
                name: "node",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "KnowledgeNoteReadOnlyView_note",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "node",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "KnowledgeNotesReadPermalinkGeminiRootQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: "preferences",
                  args: null,
                  concreteType: "XFBKnowledgeNotePreferences",
                  kind: "LinkedField",
                  name: "knowledge_note_preferences",
                  plural: !1,
                  selections: [b, d],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                e,
                d,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: "title",
                      args: null,
                      kind: "ScalarField",
                      name: "note_title",
                      storageKey: null,
                    },
                    {
                      alias: "coverPhotoMetadata",
                      args: null,
                      concreteType: "KnowledgeNoteCoverPhotoMetadata",
                      kind: "LinkedField",
                      name: "cover_photo_metadata",
                      plural: !1,
                      selections: [
                        d,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "src",
                          storageKey: null,
                        },
                        {
                          alias: "yOffset",
                          args: null,
                          kind: "ScalarField",
                          name: "y_offset",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "latestXML",
                      args: null,
                      kind: "ScalarField",
                      name: "latest_xml",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "url",
                      storageKey: null,
                    },
                    {
                      alias: "estimatedReadingTime",
                      args: null,
                      kind: "ScalarField",
                      name: "estimated_reading_time",
                      storageKey: null,
                    },
                    {
                      alias: "modifiedTime",
                      args: null,
                      kind: "ScalarField",
                      name: "modified_time",
                      storageKey: null,
                    },
                    {
                      alias: "canEdit",
                      args: null,
                      kind: "ScalarField",
                      name: "can_edit",
                      storageKey: null,
                    },
                    {
                      alias: "canDelete",
                      args: null,
                      kind: "ScalarField",
                      name: "can_delete",
                      storageKey: null,
                    },
                    {
                      alias: "viewCount",
                      args: null,
                      kind: "ScalarField",
                      name: "view_count",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Feedback",
                      kind: "LinkedField",
                      name: "feedback_target",
                      plural: !1,
                      selections: [
                        d,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "have_comments_been_disabled",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_viewer_subscribed",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "owner",
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "note_owner",
                      plural: !1,
                      selections: i,
                      storageKey: null,
                    },
                    {
                      alias: "pageOwner",
                      args: null,
                      concreteType: "Page",
                      kind: "LinkedField",
                      name: "note_owner_page",
                      plural: !1,
                      selections: i,
                      storageKey: null,
                    },
                    {
                      alias: "readAudience",
                      args: null,
                      concreteType: "WorkKnowledgeAudience",
                      kind: "LinkedField",
                      name: "read_audience",
                      plural: !1,
                      selections: [
                        j,
                        {
                          alias: "userSet",
                          args: null,
                          concreteType: "ScimCompanyGroup",
                          kind: "LinkedField",
                          name: "audience_static_user_set",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "ScimCompanyGroupToScimUsersConnection",
                              kind: "LinkedField",
                              name: "scim_users",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "ScimCompanyUser",
                                  kind: "LinkedField",
                                  name: "nodes",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "User",
                                      kind: "LinkedField",
                                      name: "work_user",
                                      plural: !1,
                                      selections: [d, f],
                                      storageKey: null,
                                    },
                                    d,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            d,
                          ],
                          storageKey: null,
                        },
                        {
                          alias: "audienceGroups",
                          args: null,
                          concreteType:
                            "WorkKnowledgeAudienceAudienceGroupsConnection",
                          kind: "LinkedField",
                          name: "audience_groups",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "WorkKnowledgeAudienceAudienceGroupsEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Group",
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    d,
                                    f,
                                    k,
                                    {
                                      alias: "members",
                                      args: null,
                                      concreteType:
                                        "GroupMemberProfilesConnection",
                                      kind: "LinkedField",
                                      name: "group_member_profiles",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "nodes",
                                          plural: !0,
                                          selections: [e, f, d],
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
                          storageKey: null,
                        },
                        d,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "editAudience",
                      args: null,
                      concreteType: "WorkKnowledgeAudience",
                      kind: "LinkedField",
                      name: "edit_audience",
                      plural: !1,
                      selections: [
                        j,
                        {
                          alias: "userSet",
                          args: null,
                          concreteType: "ScimCompanyGroup",
                          kind: "LinkedField",
                          name: "audience_static_user_set",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "ScimCompanyGroupToScimUsersConnection",
                              kind: "LinkedField",
                              name: "scim_users",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "ScimCompanyUser",
                                  kind: "LinkedField",
                                  name: "nodes",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "User",
                                      kind: "LinkedField",
                                      name: "work_user",
                                      plural: !1,
                                      selections: [h, d, f],
                                      storageKey: null,
                                    },
                                    d,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            d,
                          ],
                          storageKey: null,
                        },
                        {
                          alias: "audienceGroups",
                          args: null,
                          concreteType:
                            "WorkKnowledgeAudienceAudienceGroupsConnection",
                          kind: "LinkedField",
                          name: "audience_groups",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "WorkKnowledgeAudienceAudienceGroupsEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Group",
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    d,
                                    f,
                                    k,
                                    {
                                      alias: "members",
                                      args: null,
                                      concreteType:
                                        "GroupMemberProfilesConnection",
                                      kind: "LinkedField",
                                      name: "group_member_profiles",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "nodes",
                                          plural: !0,
                                          selections: [e, h, f, d],
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
                          storageKey: null,
                        },
                        {
                          alias: "callLink",
                          args: null,
                          concreteType: "MessengerCallInviteLink",
                          kind: "LinkedField",
                          name: "call_link",
                          plural: !1,
                          selections: [
                            f,
                            {
                              alias: "roomImage",
                              args: null,
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "room_image",
                              plural: !1,
                              selections: g,
                              storageKey: null,
                            },
                            d,
                          ],
                          storageKey: null,
                        },
                        d,
                      ],
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "live_components",
                          plural: !0,
                          selections: [
                            e,
                            {
                              kind: "InlineFragment",
                              selections: [
                                d,
                                {
                                  args: null,
                                  documentName:
                                    "WorkKnowledgeGeminiXMLRenderer_components",
                                  fragmentName:
                                    "WorkKnowledgeEmbeddedImage_image",
                                  fragmentPropName: "image",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "WorkKnowledgeEmbeddedImage",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                d,
                                {
                                  args: null,
                                  documentName:
                                    "WorkKnowledgeGeminiXMLRenderer_components",
                                  fragmentName:
                                    "WorkKnowledgeLiveEmbeddedMedia_media",
                                  fragmentPropName: "media",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "WorkKnowledgeEmbeddedMedia",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "mention",
                                  plural: !1,
                                  selections: [e, d],
                                  storageKey: null,
                                },
                                {
                                  args: null,
                                  documentName:
                                    "WorkKnowledgeGeminiXMLRenderer_components",
                                  fragmentName:
                                    "WorkKnowledgeEmbeddedMention_mention",
                                  fragmentPropName: "mention",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "WorkKnowledgeEmbeddedMention",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Video",
                                  kind: "LinkedField",
                                  name: "video",
                                  plural: !1,
                                  selections: [d],
                                  storageKey: null,
                                },
                                {
                                  args: null,
                                  documentName:
                                    "WorkKnowledgeGeminiXMLRenderer_components",
                                  fragmentName:
                                    "WorkKnowledgeEmbeddedVideo_video",
                                  fragmentPropName: "video",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "WorkKnowledgeEmbeddedVideo",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                d,
                                {
                                  args: null,
                                  documentName:
                                    "WorkKnowledgeGeminiXMLRenderer_components",
                                  fragmentName:
                                    "WorkKnowledgeEmbeddedUnidashWidget_widget",
                                  fragmentPropName: "widget",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "WorkKnowledgeDataWidget",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "number",
                                  storageKey: null,
                                },
                                {
                                  args: null,
                                  documentName:
                                    "WorkKnowledgeGeminiXMLRenderer_components",
                                  fragmentName: "WorkKnowledgeTask_task",
                                  fragmentPropName: "task",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "WorkKnowledgeTask",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      type: "KnowledgeDocument",
                      abstractKey: "__isKnowledgeDocument",
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "viewer_saved_state",
                          storageKey: null,
                        },
                      ],
                      type: "Savable",
                      abstractKey: "__isSavable",
                    },
                  ],
                  type: "KnowledgeNote",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4423924050963204",
          metadata: {},
          name: "KnowledgeNotesReadPermalinkGeminiRootQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "WIGCard.react",
  ["CometCard.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(
        c("CometCard.react"),
        babelHelpers["extends"]({}, a, { ref: b })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "WIGCircleButton.react",
  ["TetraCircleButton.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(
        c("TetraCircleButton.react"),
        babelHelpers["extends"]({ ref: b }, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "KnowledgeNoteHeaderStructure.react",
  [
    "fbt",
    "ix",
    "WIGCard.react",
    "WIGCircleButton.react",
    "WIGRow.react",
    "WIGRowItem.react",
    "fbicon",
    "gkx",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.buttons,
        e = a.hideCloseButton,
        f = a.metadataContent,
        g = a.onClose;
      a = a.testid;
      return j.jsx("div", {
        className: "mg4g778l pfnyh3mw kb5gq1qc j83agx80",
        "data-testid": void 0,
        children: j.jsx(c("WIGCard.react"), {
          children: j.jsx("div", {
            className:
              "tw6a2znq f10w8fjw d1544ag0 pybr56ya oqcyycmt s1tcr66n cwj9ozl2",
            children: j.jsxs(c("WIGRow.react"), {
              paddingHorizontal: 0,
              paddingVertical: 0,
              verticalAlign: "center",
              children: [
                j.jsx(c("WIGRowItem.react"), {
                  expanding: !0,
                  children: j.jsxs(c("WIGRow.react"), {
                    align: "start",
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    verticalAlign: "center",
                    children: [
                      j.jsx(c("WIGRowItem.react"), {
                        children:
                          e === !0
                            ? j.jsx("div", {
                                className: c("stylex").dedupe(
                                  c("gkx")("1775054")
                                    ? {
                                        "margin-start-1": "a1wfp9kf",
                                        "margin-top-1": "rwvkw9s7",
                                      }
                                    : {
                                        "margin-start-1": "sf74r906",
                                        "margin-top-1": "rwvkw9s7",
                                      }
                                ),
                              })
                            : j.jsx(c("WIGCircleButton.react"), {
                                icon: d("fbicon")._(i("478233"), 20),
                                label: h._("Close"),
                                onPress: g,
                                size: 36,
                                testid: void 0,
                              }),
                      }),
                      j.jsx(c("WIGRowItem.react"), {
                        expanding: !0,
                        children: j.jsx("div", {
                          className: "r2yhi87u",
                          "data-testid": void 0,
                          children: f,
                        }),
                      }),
                    ],
                  }),
                }),
                j.jsx(c("WIGRowItem.react"), { children: b }),
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
  "WIGTextPairing.react",
  ["TetraTextPairing.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("TetraTextPairing.react"), babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "KnowledgeNoteHeaderGlimmer.react",
  [
    "BaseGlimmer.react",
    "KnowledgeNoteHeaderStructure.react",
    "WIGTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        button: {
          width: "k6hq67h2",
          height: "tv7at329",
          marginEnd: "wkznzc2l",
          borderTopStartRadius: "dwerhba3",
          borderTopEndRadius: "kgjeooe1",
          borderBottomEndRadius: "kxcb68kb",
          borderBottomStartRadius: "mwvzfrdb",
        },
        body: {
          width: "k6hq67h2",
          height: "kmzbrmfl",
          borderTopStartRadius: "dwerhba3",
          borderTopEndRadius: "kgjeooe1",
          borderBottomEndRadius: "kxcb68kb",
          borderBottomStartRadius: "mwvzfrdb",
          marginTop: "hk9dxy2p",
          marginBottom: "px9k8yfb",
        },
        meta: {
          width: "cs7azdtd",
          height: "ed3p1gfi",
          borderTopStartRadius: "dwerhba3",
          borderTopEndRadius: "kgjeooe1",
          borderBottomEndRadius: "kxcb68kb",
          borderBottomStartRadius: "mwvzfrdb",
        },
      };
    function a() {
      return h.jsx(c("KnowledgeNoteHeaderStructure.react"), {
        buttons: h.jsx(c("BaseGlimmer.react"), { index: 0, xstyle: i.button }),
        hideCloseButton: !0,
        metadataContent: h.jsx(c("WIGTextPairing.react"), {
          body: h.jsx(c("BaseGlimmer.react"), { index: 0, xstyle: i.body }),
          level: 3,
          meta: h.jsx(c("BaseGlimmer.react"), { index: 0, xstyle: i.meta }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "KnowledgeNoteGlimmer.react",
  ["KnowledgeNoteHeaderGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        className: "k4urcfbm sq4ovgn3 cbu4d94t j83agx80 b3i9ofy5",
        children: [
          h.jsx(c("KnowledgeNoteHeaderGlimmer.react"), {}),
          h.jsx("div", {
            className: "tgvbjcpo g5gj957u buofh1pr j83agx80",
            children: h.jsx("div", {
              className: "taijpn5t j83agx80 buofh1pr k4urcfbm",
              children: h.jsx("div", {
                className:
                  "dhix69tm sjgh65i0 wkznzc2l tr9rh885 hpfvmrgz buofh1pr g5gj957u cbu4d94t j83agx80",
                children: h.jsx("div", {
                  className:
                    "stjgntxs ni8dbmo4 cbu4d94t o8rfisnq buofh1pr k4urcfbm cjxzsqrr qqep6wtg sjgh65i0 tr9rh885 j83agx80 sbcfpzgs tfzoqjvc sfcisb4t t28du0na axx3y1d9 cwj9ozl2",
                }),
              }),
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
  "KnowledgeNotesReadPermalinkGeminiRoot.react",
  [
    "CometPlaceholder.react",
    "KnowledgeNoteGlimmer.react",
    "KnowledgeNotesReadPermalinkGeminiRootQuery.graphql",
    "RelayHooks",
    "XCometNotesPermalinkControllerRouteBuilder",
    "deferredLoadComponent",
    "emptyFunction",
    "react",
    "requireDeferredForDisplay",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback,
      k = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "KnowledgeNoteReadOnlyView.react"
        ).__setRef("KnowledgeNotesReadPermalinkGeminiRoot.react")
      );
    function a(a) {
      var e = a.props;
      a = a.queries;
      a = d("RelayHooks").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("KnowledgeNotesReadPermalinkGeminiRootQuery.graphql")),
        a.knowledgeNotesReadPermalinkGeminiRootQueryReference
      );
      var f = a.node;
      a = a.viewer;
      a =
        a == null
          ? void 0
          : (a = a.preferences) == null
          ? void 0
          : a.commentsLocation;
      var g = c("useCometRouterDispatcher")(),
        l = j(
          function () {
            g != null &&
              g.go(
                c("XCometNotesPermalinkControllerRouteBuilder").buildURL({
                  note_id: e.routeProps.noteID,
                  mode: "edit",
                }),
                { replace: !0, target: "self" }
              );
          },
          [g, e.routeProps.noteID]
        );
      return i.jsx(c("CometPlaceholder.react"), {
        fallback: i.jsx(c("KnowledgeNoteGlimmer.react"), {}),
        children: i.jsx("div", {
          className: "b3i9ofy5",
          children: i.jsx(k, {
            commentsOnBottom: a === "BELOW",
            focusCommentID: e.routeProps.focusCommentID,
            isPushView: !0,
            noteRef: f,
            onClose: c("emptyFunction"),
            onEdit: l,
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
  "FundraiserForStorySprout_sprout$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "FundraiserForStorySprout_sprout$normalization",
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
  "FundraiserForStorySprout_sprout.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "FundraiserForStorySprout_sprout",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "CometComposerFundraiserForStorySprout",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "mergeDeepInto",
  ["invariant", "mergeHelpers"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (c = b("mergeHelpers")).ArrayStrategies,
      i = c.checkArrayStrategy,
      j = c.checkMergeArrayArgs,
      k = c.checkMergeLevel,
      l = c.checkMergeObjectArgs,
      m = c.isTerminal,
      n = c.normalizeMergeArg,
      o = function (a, b, c, d) {
        l(a, b);
        k(d);
        var e = b ? Object.keys(b) : [];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          q(a, b, g, c, d);
        }
      },
      p = function (a, b, c, d) {
        j(a, b);
        k(d);
        if (c === h.Concat) a.push.apply(a, b);
        else {
          var e = Math.max(a.length, b.length);
          for (var f = 0; f < e; f++) q(a, b, f, c, d);
        }
      },
      q = function (a, b, c, d, e) {
        var f = b[c];
        b = Object.prototype.hasOwnProperty.call(b, c);
        var i = b && m(f),
          j = b && Array.isArray(f),
          k = b && !j && !j,
          l = a[c],
          n = Object.prototype.hasOwnProperty.call(a, c),
          q = n && m(l),
          r = n && Array.isArray(l),
          s = n && !r && !r;
        q
          ? i
            ? (a[c] = f)
            : j
            ? ((a[c] = []), p(a[c], f, d, e + 1))
            : k
            ? ((a[c] = {}), o(a[c], f, d, e + 1))
            : b || (a[c] = l)
          : r
          ? i
            ? (a[c] = f)
            : j
            ? ((d && h[d]) || g(0, 5117),
              d === h.Clobber && (l.length = 0),
              p(l, f, d, e + 1))
            : k
            ? ((a[c] = {}), o(a[c], f, d, e + 1))
            : !b
          : s
          ? i
            ? (a[c] = f)
            : j
            ? ((a[c] = []), p(a[c], f, d, e + 1))
            : k
            ? o(l, f, d, e + 1)
            : !b
          : n ||
            (i
              ? (a[c] = f)
              : j
              ? ((a[c] = []), p(a[c], f, d, e + 1))
              : k
              ? ((a[c] = {}), o(a[c], f, d, e + 1))
              : !b);
      };
    function a(a, b, c) {
      b = n(b);
      i(c);
      o(a, b, c, 0);
    }
    f["default"] = a;
  },
  66
);
__d(
  "mergeDeep",
  ["mergeDeepInto", "mergeHelpers"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      a = c("mergeHelpers").normalizeMergeArg(a);
      b = c("mergeHelpers").normalizeMergeArg(b);
      c("mergeHelpers").checkMergeObjectArgs(a, b);
      c("mergeHelpers").checkArrayStrategy(d);
      var e = {};
      c("mergeDeepInto")(e, a, d);
      c("mergeDeepInto")(e, b, d);
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "FundraiserCometLogging",
  ["mergeDeep", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    f = e.createContext;
    var i = e.useCallback,
      j = e.useContext,
      k = e.useMemo,
      l = f();
    function a() {
      var a = j(l),
        b = i(
          function (b, d) {
            d === void 0 && (d = {});
            var e = c("mergeDeep")(a, d);
            e != null &&
              b.log(function () {
                return e;
              });
          },
          [a]
        );
      return { logEvent: b };
    }
    function b(a, b) {
      return function (d) {
        var e = j(l),
          f = b && b(d),
          g = k(
            function () {
              return c("mergeDeep")(e, f);
            },
            [e, f]
          );
        return h.jsx(l.Provider, {
          value: g,
          children: h.jsx(a, babelHelpers["extends"]({}, d)),
        });
      };
    }
    g.FundraiserLoggingDataContext = l;
    g.useFundraiserLogging = a;
    g.withFundraiserLoggingProvider = b;
  },
  98
);
__d(
  "FundraiserForStoryPopoverButton.react",
  [
    "fbt",
    "ix",
    "CometComposerAttachmentPluginTypes",
    "CometComposerSproutButton.react",
    "CometLazyPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "JSResourceForInteraction",
    "LiveProducerContext",
    "LiveProducerLoggerContext",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useContext,
      l = b.useEffect,
      m = b.useRef,
      n = c("JSResourceForInteraction")(
        "FundraiserForStoryNonprofitSearchContainer.react"
      ).__setRef("FundraiserForStoryPopoverButton.react"),
      o = { popoverFallback: { minWidth: "s282zdxb" } };
    function a(a) {
      var b = a.isActive,
        d = a.layoutStyle,
        e = a.typeaheadInputStyle;
      a = a.visibleOnLoad;
      a = a === void 0 ? !1 : a;
      var f = k(c("LiveProducerContext")),
        g = f.videoData.id;
      f = k(c("LiveProducerLoggerContext"));
      f = f.logger;
      var p = m(f);
      l(
        function () {
          g != null && p.current != null && p.current.logDonationSproutShown();
        },
        [g]
      );
      return j.jsx(c("CometLazyPopoverTrigger.react"), {
        align: "middle",
        fallback: j.jsx(c("CometPopoverLoadingState.react"), {
          withArrow: !0,
          xstyle: o.popoverFallback,
        }),
        popoverProps: {
          layoutStyle: d,
          showFundraiserTab: !0,
          typeaheadInputStyle: e,
          withPopover: !0,
        },
        popoverResource: n,
        position: "above",
        preloadTrigger: "button",
        visibleOnLoad: a,
        children: function (a, d, e, f, g, k) {
          return j.jsx(c("CometComposerSproutButton.react"), {
            activeColor: "var(--fds-spectrum-cherry-tint-70)",
            disabledIcon: i("661213"),
            icon: i("1270592"),
            isActive: b,
            label: h._("Raise Money"),
            loggingName: "fundraiser_sprout",
            onClick: d,
            onHoverIn: f,
            onHoverOut: g,
            onPressIn: k,
            pluginName: c("CometComposerAttachmentPluginTypes").NONPROFIT,
            ref: a,
            sproutName: "FUNDRAISER",
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
  "FundraiserForStoryButton.react",
  [
    "fbt",
    "ix",
    "CometComposerAttachmentPluginTypes",
    "CometComposerSproutButton.react",
    "FundraiserCometLogging",
    "FundraiserForStoryPopoverButton.react",
    "JSResourceForInteraction",
    "composerAttachmentAreaChecker",
    "composerAttachmentAreaReducer",
    "lazyLoadComponent",
    "react",
    "requireDeferred",
    "useCometComposerPushPage",
    "useComposerViewStateReducer",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback,
      l = c("requireDeferred")("CreateFundraiserBeginFalcoEvent").__setRef(
        "FundraiserForStoryButton.react"
      ),
      m = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "FundraiserForStoryNonprofitSearchContainer.react"
        ).__setRef("FundraiserForStoryButton.react")
      );
    function a(a) {
      c("useComposerViewStateReducer")(
        d("composerAttachmentAreaReducer").composerAttachmentAreaReducer,
        c("composerAttachmentAreaChecker")
      );
      var b = c("useCometComposerPushPage")(),
        e = a.nonprofit != null,
        f = a.composerType === "edit",
        g = d("FundraiserCometLogging").useFundraiserLogging(),
        n = g.logEvent;
      g = k(
        function () {
          b != null &&
            (b(h._("Select Nonprofit"), function (a) {
              a = a.onReturn;
              return j.jsx(m, { onClose: a, withPopover: !1 });
            }),
            l.onReady(function (a) {
              n(a, { parent_event_type: "create" });
            }));
        },
        [n, b]
      );
      return a.albumID != null
        ? null
        : b == null
        ? j.jsx(c("FundraiserForStoryPopoverButton.react"), { isActive: e })
        : j.jsx(c("CometComposerSproutButton.react"), {
            activeColor: "var(--fds-spectrum-cherry-tint-70)",
            disabled: f,
            disabledIcon: i("661213"),
            disabledTooltip: f ? h._("You cannot edit this content") : void 0,
            icon: i("1270592"),
            isActive: e,
            label: h._("Raise Money"),
            loggingName: "fundraiser_sprout",
            onClick: g,
            pluginName: c("CometComposerAttachmentPluginTypes").NONPROFIT,
            sproutName: "FUNDRAISER",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = d("FundraiserCometLogging").withFundraiserLoggingProvider(
      a,
      function () {
        return {
          campaign_type: 8,
          source: "composer",
          source_attributes: { source_name: "composer" },
        };
      }
    );
    e = c("withComposerViewStatePart")(b, function (a) {
      var b;
      return {
        albumID:
          a == null ? void 0 : (b = a.audience) == null ? void 0 : b.to_id,
        nonprofit: a.nonprofit,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "FundraiserForStorySprout.react",
  [
    "FundraiserForStoryButton.react",
    "FundraiserForStorySprout_sprout.graphql",
    "RelayHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.composerType;
      a = a.sprout;
      d("RelayHooks").useFragment(
        h !== void 0 ? h : (h = b("FundraiserForStorySprout_sprout.graphql")),
        a
      );
      return i.jsx(c("FundraiserForStoryButton.react"), { composerType: e });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "NotificationBeeperConst",
  ["keyMirror"],
  function (a, b, c, d, e, f, g) {
    a = 1e4;
    b = 4e3;
    d = 1500;
    e = c("keyMirror")({
      PENDING: !0,
      RENDERED: !0,
      READY_TO_HIDE: !0,
      FADING_OUT: !0,
    });
    g.IDLE_DELAY = a;
    g.ACTIVE_DELAY_LONG = b;
    g.FADE_OUT_LENGTH = d;
    g.BeepStates = e;
  },
  98
);
__d(
  "NotificationSound",
  ["Sound"],
  function (a, b, c, d, e, f, g) {
    var h = 5e3;
    d("Sound").init(["audio/mpeg"]);
    function a(a) {
      (this._soundPath = a), (this._lastPlayed = 0);
    }
    Object.assign(a.prototype, {
      play: function (a) {
        if (!this._soundPath) return !1;
        var b = Date.now();
        if (b - this._lastPlayed < h) return !1;
        this._lastPlayed = b;
        d("Sound").playOnlyIfImmediate(this._soundPath, a, !1);
        return !0;
      },
    });
    g["default"] = a;
  },
  98
);
__d(
  "WorkGalahadBeeperDispatcher",
  ["ExplicitRegistrationDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.dispatch = c.dispatch.bind(babelHelpers.assertThisInitialized(c))),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      return b;
    })(c("ExplicitRegistrationDispatcher"));
    b = new a({ strict: !0 });
    g["default"] = b;
  },
  98
);
__d(
  "WorkGalahadBeeperStore",
  [
    "FluxReduceStore",
    "NotificationBeeperConst",
    "WorkGalahadBeeperDispatcher",
    "filterObject",
    "mapObject",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.reduce = function (a, b) {
            var f;
            switch (b.type) {
              case "galahad/beeper_hide":
                return e.$WorkGalahadBeeperStore3(a);
              case "galahad/beeper_add":
                var g = a.fading
                  ? d("NotificationBeeperConst").BeepStates.PENDING
                  : d("NotificationBeeperConst").BeepStates.READY_TO_HIDE;
                return babelHelpers["extends"]({}, a, {
                  beeps: babelHelpers["extends"](
                    {},
                    a.beeps,
                    ((f = {}),
                    (f[b.beep.id] = e.$WorkGalahadBeeperStore1(b.beep, g)),
                    f)
                  ),
                });
              case "galahad/beeper_xout":
                g = a.beeps[b.beeperID];
                return g == null
                  ? a
                  : babelHelpers["extends"]({}, a, {
                      beeps: babelHelpers["extends"](
                        {},
                        a.beeps,
                        ((f = {}),
                        (f[b.beeperID] = e.$WorkGalahadBeeperStore2(g)),
                        f)
                      ),
                    });
              case "galahad/beeper_finish_hide":
                return e.$WorkGalahadBeeperStore5(
                  e.$WorkGalahadBeeperStore4(a)
                );
              case "galahad/beeper_mouse_enter":
                return babelHelpers["extends"](
                  {},
                  e.$WorkGalahadBeeperStore5(a),
                  { hovering: !0, fading: !1 }
                );
              case "galahad/beeper_mouse_leave":
                return babelHelpers["extends"]({}, a, { hovering: !1 });
              case "galahad/beepers_clear":
                return babelHelpers["extends"]({}, a, {
                  beeps: c("filterObject")(a.beeps, function (a) {
                    return a.type !== "default";
                  }),
                });
              case "galahad/chat_beepers_clear":
                return babelHelpers["extends"]({}, a, {
                  beeps: c("filterObject")(a.beeps, function (a) {
                    return a.type !== "chat";
                  }),
                });
              case "galahad/all_beepers_clear":
                return babelHelpers["extends"]({}, a, { beeps: {} });
              default:
                return a;
            }
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.getInitialState = function () {
        return { beeps: {}, fading: !1, hovering: !1 };
      };
      e.$WorkGalahadBeeperStore1 = function (a, b) {
        return a.type === "default"
          ? babelHelpers["extends"]({}, a, { state: b })
          : babelHelpers["extends"]({}, a, { state: b });
      };
      e.$WorkGalahadBeeperStore2 = function (a) {
        return a.type === "default"
          ? babelHelpers["extends"]({}, a, { xouted: !0 })
          : babelHelpers["extends"]({}, a, { xouted: !0 });
      };
      e.$WorkGalahadBeeperStore3 = function (a) {
        var b = this;
        return babelHelpers["extends"]({}, a, {
          beeps: c("mapObject")(a.beeps, function (a) {
            return a.state ===
              d("NotificationBeeperConst").BeepStates.READY_TO_HIDE
              ? b.$WorkGalahadBeeperStore1(
                  a,
                  d("NotificationBeeperConst").BeepStates.FADING_OUT
                )
              : a;
          }),
          fading: !0,
        });
      };
      e.$WorkGalahadBeeperStore4 = function (a) {
        return !a.fading
          ? a
          : babelHelpers["extends"]({}, a, {
              beeps: c("filterObject")(a.beeps, function (a) {
                return (
                  a.state !== d("NotificationBeeperConst").BeepStates.FADING_OUT
                );
              }),
              fading: !1,
            });
      };
      e.$WorkGalahadBeeperStore5 = function (a) {
        var b = this;
        return babelHelpers["extends"]({}, a, {
          beeps: c("mapObject")(a.beeps, function (a) {
            return a.state === d("NotificationBeeperConst").BeepStates.PENDING
              ? b.$WorkGalahadBeeperStore1(
                  a,
                  d("NotificationBeeperConst").BeepStates.READY_TO_HIDE
                )
              : a;
          }),
        });
      };
      e.getRenderedBeeps = function () {
        return c("filterObject")(this.getState().beeps, function (a) {
          return (
            a.state === d("NotificationBeeperConst").BeepStates.READY_TO_HIDE
          );
        });
      };
      e.getChatBeeps = function () {
        return c("filterObject")(
          c("mapObject")(this.getState().beeps, function (a) {
            return a.type === "chat" && a.xouted !== !0 ? a : null;
          }),
          Boolean
        );
      };
      e.getBeeps = function () {
        return c("filterObject")(
          c("mapObject")(this.getState().beeps, function (a) {
            return a.type === "default" && a.xouted !== !0 ? a : null;
          }),
          Boolean
        );
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("WorkGalahadBeeperDispatcher"));
    g["default"] = b;
  },
  98
);
__d(
  "WorkGalahadBeeperActions",
  [
    "NotificationBeeperConst",
    "NotificationSound",
    "WorkGalahadBeeperDispatcher",
    "WorkGalahadBeeperStore",
    "clearTimeout",
    "forEachObject",
    "setImmediateAcrossTransitions",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = null,
      j = !1;
    a = function (a) {
      a.shouldPlaySound &&
        c("setImmediateAcrossTransitions")(function () {
          p(a.id);
        }),
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/beeper_add",
          beep: a,
        });
    };
    b = function (a) {
      c("WorkGalahadBeeperDispatcher").dispatch({
        type: "galahad/beeper_xout",
        beeperID: a,
      });
    };
    var k = function () {
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/beeper_finish_hide",
        });
      },
      l = function () {
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/beeper_hide",
        }),
          c("setTimeoutAcrossTransitions")(
            k,
            d("NotificationBeeperConst").FADE_OUT_LENGTH
          );
      },
      m = function (a) {
        h && c("clearTimeout")(h),
          (h = c("setTimeoutAcrossTransitions")(
            l,
            a != null ? a : d("NotificationBeeperConst").IDLE_DELAY
          ));
      };
    e = function () {
      h && c("clearTimeout")(h),
        c("setImmediateAcrossTransitions")(function () {
          c("WorkGalahadBeeperDispatcher").dispatch({
            type: "galahad/beeper_mouse_enter",
          });
          var a = c("WorkGalahadBeeperStore").getRenderedBeeps();
          c("forEachObject")(a, function (a) {
            return a.onSeen && a.onSeen();
          });
        });
    };
    f = function () {
      m(d("NotificationBeeperConst").ACTIVE_DELAY_LONG),
        c("setImmediateAcrossTransitions")(function () {
          c("WorkGalahadBeeperDispatcher").dispatch({
            type: "galahad/beeper_mouse_leave",
          });
        });
    };
    var n = function (a) {
        j = a;
      },
      o = function (a) {
        i = new (c("NotificationSound"))(a);
      },
      p = function (a) {
        return j && i != null ? i.play(a) : !1;
      },
      q = function () {
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/beepers_clear",
        });
      },
      r = function () {
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/chat_beepers_clear",
        });
      },
      s = function () {
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/all_beepers_clear",
        });
      },
      t = function (a) {
        a === "notifications" ? q() : a === "chats" && r();
      };
    g.addBeeper = a;
    g.xoutBeeper = b;
    g.waitHide = m;
    g.onMouseEnter = e;
    g.onMouseLeave = f;
    g.setSoundEnabled = n;
    g.setSoundPath = o;
    g.playSound = p;
    g.clearAllNotificationBeeps = q;
    g.clearAllChatBeeps = r;
    g.clearAllBeeps = s;
    g.clearBeepsForTabID = t;
  },
  98
);
__d(
  "AdCenterAdvertisingSummaryMetricDefinition_cms.graphql",
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
        name: "AdCenterAdvertisingSummaryMetricDefinition_cms",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
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
            name: "help_link",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "tags",
            plural: !1,
            selections: a,
            storageKey: null,
          },
        ],
        type: "MetricCMSObject",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "AdCenterAdRowReachDefinitionPopoverQuery.graphql",
  [
    "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "scale" }],
        c = [{ kind: "Literal", name: "insights_field", value: "reach" }],
        d = [
          {
            args: null,
            fragment: b(
              "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
            ),
            kind: "FragmentSpread",
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "AdCenterAdRowReachDefinitionPopoverQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "LWIAPI",
              kind: "LinkedField",
              name: "lwi",
              plural: !1,
              selections: [
                {
                  alias: "reach",
                  args: c,
                  concreteType: "MetricCMSObject",
                  kind: "LinkedField",
                  name: "metric_cms_object",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "AdCenterAdvertisingSummaryMetricDefinition_cms",
                    },
                  ],
                  storageKey: 'metric_cms_object(insights_field:"reach")',
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
          name: "AdCenterAdRowReachDefinitionPopoverQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "LWIAPI",
              kind: "LinkedField",
              name: "lwi",
              plural: !1,
              selections: [
                {
                  alias: "reach",
                  args: c,
                  concreteType: "MetricCMSObject",
                  kind: "LinkedField",
                  name: "metric_cms_object",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "description",
                      plural: !1,
                      selections: d,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "help_link",
                      plural: !1,
                      selections: d,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "tags",
                      plural: !1,
                      selections: d,
                      storageKey: null,
                    },
                  ],
                  storageKey: 'metric_cms_object(insights_field:"reach")',
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "6744672502225234",
          metadata: {},
          name: "AdCenterAdRowReachDefinitionPopoverQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "AdCenterAdvertisingSummaryMetricDefinition.react",
  [
    "AdCenterAdvertisingSummaryMetricDefinition_cms.graphql",
    "CometExternalLinkedEntityRenderer",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "TetraListCell.react",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.cms;
      var e = { ExternalUrl: [c("CometExternalLinkedEntityRenderer")] };
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("AdCenterAdvertisingSummaryMetricDefinition_cms.graphql")),
        a
      );
      var f = a.description,
        g = a.help_link,
        j = a.name;
      a = a.tags;
      if (j == null || f == null || g == null) {
        c("recoverableViolation")("Missing cms object!", "pages_lwi");
        return null;
      }
      f = i.jsx(c("CometTextWithEntitiesRelay.react"), {
        renderers: e,
        textWithEntities: f,
      });
      g = i.jsxs(i.Fragment, {
        children: [
          i.jsx("br", {}),
          i.jsx("br", {}),
          i.jsx(c("CometTextWithEntitiesRelay.react"), {
            renderers: e,
            textWithEntities: g,
          }),
        ],
      });
      e =
        a &&
        i.jsxs(i.Fragment, {
          children: [
            i.jsx("br", {}),
            i.jsx("br", {}),
            i.jsx(c("CometTextWithEntitiesRelay.react"), {
              renderers: e,
              textWithEntities: a,
            }),
          ],
        });
      a = i.jsxs(i.Fragment, { children: [f, e, g] });
      return i.jsx(c("TetraListCell.react"), {
        body: a,
        headline: j,
        level: 3,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "AdCenterAdRowReachDefinitionPopover.react",
  [
    "AdCenterAdRowReachDefinitionPopoverQuery.graphql",
    "AdCenterAdvertisingSummaryMetricDefinition.react",
    "CometPopover.react",
    "CometRelay",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.queries;
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("AdCenterAdRowReachDefinitionPopoverQuery.graphql")),
        a.reachQueryReference
      );
      a = a == null ? void 0 : (a = a.lwi) == null ? void 0 : a.reach;
      if (a == null)
        throw c("unrecoverableViolation")(
          "Missing cms content for metrics in ad row!",
          "pages_lwi"
        );
      return i.jsx(c("CometPopover.react"), {
        children: i.jsx("div", {
          className: "nqmqzb3c",
          children: i.jsx(
            c("AdCenterAdvertisingSummaryMetricDefinition.react"),
            { cms: a }
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MercuryFilters.re",
  ["MercuryFilters.bs"],
  function (a, b, c, d, e, f) {
    c = (a = b("MercuryFilters.bs")).all;
    f.all = c;
    d = a.unread;
    f.unread = d;
    e = a.groups;
    f.groups = e;
    b = a.named;
    f.named = b;
    c = a.unnamed;
    f.unnamed = c;
    d = a.unsyncedChat;
    f.unsyncedChat = d;
    e = a.getSupportedFilters;
    f.getSupportedFilters = e;
    b = a.isSupportedFilter;
    f.isSupportedFilter = b;
  },
  null
);
__d(
  "WorkGalahadDispatcher",
  ["ExplicitRegistrationDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.dispatch = c.dispatch.bind(babelHelpers.assertThisInitialized(c))),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      return b;
    })(c("ExplicitRegistrationDispatcher"));
    b = new a({ strict: !0 });
    g["default"] = b;
  },
  98
);
