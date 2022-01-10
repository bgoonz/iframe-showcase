if (self.CavalryLogger) {
  CavalryLogger.start_js(["C5Zd3cK"]);
}

__d(
  "CometMoreContentButton.react",
  ["CometPressable.react", "TetraText.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        bottom: { bottom: "h0ek22jz" },
        container: {
          display: "j83agx80",
          justifyContent: "taijpn5t",
          position: "pmk7jnqg",
          start: "kfkz5moi",
        },
        deemphasized: { backgroundColor: "ovq5dppa" },
        default: {
          alignItems: "bp9cbjyn",
          borderTop: "gcieejh5",
          borderEnd: "bn081pho",
          borderBottom: "humdl8nn",
          borderStart: "izx4hr6d",
          borderTopStartRadius: "p0p8w163",
          borderTopEndRadius: "kip1xq3a",
          borderBottomEndRadius: "alrr0afh",
          borderBottomStartRadius: "be9qi1ea",
          boxShadow: "eu4i7hue",
          cursor: "nhd2j8a9",
          display: "j83agx80",
          height: "idiwt2bm",
          justifyContent: "taijpn5t",
          paddingTop: "discj3wi",
          paddingEnd: "d1544ag0",
          paddingBottom: "ihqw7lf3",
          paddingStart: "tw6a2znq",
          position: "pmk7jnqg",
        },
        emphasized: { backgroundColor: "s1i5eluu" },
        top: { top: "kr520xx4" },
      };
    function a(a) {
      var b = a["aria-hidden"],
        d = a.children,
        e = a.deemphasized;
      e = e === void 0 ? !1 : e;
      var f = a.disabled,
        g = a.linkProps,
        j = a.onPress,
        k = a.position;
      k = k === void 0 ? "top" : k;
      a = a.xstyle;
      return h.jsx("div", {
        className: c("stylex")([i.container, i[k], a]),
        children: h.jsx("div", {
          className: c("stylex")([
            i["default"],
            e ? i.deemphasized : i.emphasized,
          ]),
          children: h.jsx(c("CometPressable.react"), {
            "aria-hidden": b,
            disabled: f,
            display: "inline",
            linkProps: g,
            onPress: j,
            overlayDisabled: !0,
            children: h.jsx(c("TetraText.react"), {
              color: e ? "primary" : "white",
              numberOfLines: 1,
              type: "button2",
              children: d,
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
  "logCometBookmarkListItemPressed",
  ["CometHomeProductBadgedNavigationLogger", "logCometWatchTabSelectedEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e, f) {
      e != null &&
        f &&
        d(
          "CometHomeProductBadgedNavigationLogger"
        ).markerStartAndAnnotateWithProductID(e);
      if (a === "FACEBOOK_APP" && b.includes("/watch/")) {
        c("logCometWatchTabSelectedEvent")("bookmark", f, "bookmark");
        return;
      }
      return;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeContentMoreContentButton.react",
  [
    "fbt",
    "CometMoreContentButton.react",
    "CometOnRefresh.react",
    "CometProgressRingIndeterminate.react",
    "CometVisualCompletionAttributes",
    "HiddenSubtreeContext",
    "clearTimeout",
    "qex",
    "react",
    "setTimeout",
    "stylex",
    "useCurrentRouteBuilder",
    "useThrottled",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useContext,
      l = b.useEffect,
      m = b.useRef,
      n = b.useState,
      o = 200,
      p = {
        button: { paddingTop: "pybr56ya" },
        container: {
          opacity: "pedkr2u6",
          position: "lpgh02oy",
          top: "t4zy2t7z",
          transform: "agkhgkm8",
          transitionDuration: "kmdw4o4n",
          transitionProperty: "pnx7fd3z",
          transitionTimingFunction: "msbwk0y7",
          zIndex: "tkr6xdv7",
          "@media(max-width: 900px)": { top: "qzwx5pty" },
        },
        hidden: {
          opacity: "b5wmifdl",
          pointerEvents: "hzruof5a",
          transform: "hltw3bd0",
        },
        spinner: { height: "k7cz35w2" },
      },
      q = 8e3;
    function a(a) {
      a = a.isLoading;
      var b = k(c("HiddenSubtreeContext")).hidden,
        e = m(Date.now()),
        f = n(!1),
        g = f[0],
        r = f[1];
      f = n(null);
      var s = f[0],
        t = f[1];
      l(
        function () {
          b === !1 &&
            Date.now() - e.current > 18e4 &&
            c("qex")._("1157091") &&
            r(!0);
        },
        [b]
      );
      var u = m(null);
      f = j(function () {
        u.current == null && (u.current = window.scrollY),
          Math.abs(u.current - window.scrollY) > q &&
            ((u.current = null), (e.current = Date.now()), r(!1));
      }, []);
      var v = c("useThrottled")(f, 100);
      f = j(function () {
        (u.current = null), (e.current = Date.now()), r(!1);
      }, []);
      d("CometOnRefresh.react").useOnRefresh(f);
      l(
        function () {
          if (!g || b) return;
          window.addEventListener("scroll", v, { passive: !0 });
          return function () {
            window.removeEventListener("scroll", v, { passive: !0 });
          };
        },
        [g, b, v]
      );
      g
        ? s !== "NEW STORIES" && t("NEW STORIES")
        : a && s !== "LOADING" && t("LOADING");
      var w = g || a;
      l(
        function () {
          if (w === !1) {
            var a = c("setTimeout")(function () {
              return t(null);
            }, o + 50);
            return function () {
              return c("clearTimeout")(a);
            };
          }
        },
        [w]
      );
      f = c("useCurrentRouteBuilder")();
      if (f == null) return null;
      f = f.buildURL({});
      return i.jsx(
        "div",
        babelHelpers["extends"](
          {
            "aria-hidden": !w,
            className: c("stylex")(p.container, !w && p.hidden),
          },
          c("CometVisualCompletionAttributes").IGNORE,
          {
            children: i.jsxs(c("CometMoreContentButton.react"), {
              deemphasized: !0,
              disabled: a,
              linkProps: { url: f },
              xstyle: p.button,
              children: [
                s === "LOADING"
                  ? i.jsx("div", {
                      className: c("stylex")(p.spinner),
                      children: i.jsx(
                        c("CometProgressRingIndeterminate.react"),
                        { color: "blue", size: 32 }
                      ),
                    })
                  : null,
                s === "NEW STORIES" ? h._("New Posts") : null,
              ],
            }),
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "DirectMessagingTypedLogger",
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
          "logger:DirectMessagingLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:DirectMessagingLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:DirectMessagingLoggerConfig",
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
      c.setAccountstatus = function (a) {
        this.$1.accountstatus = a;
        return this;
      };
      c.setActionSource = function (a) {
        this.$1.action_source = a;
        return this;
      };
      c.setAdGap = function (a) {
        this.$1.ad_gap = a;
        return this;
      };
      c.setAdID = function (a) {
        this.$1.ad_id = a;
        return this;
      };
      c.setAdRequestEndTs = function (a) {
        this.$1.ad_request_end_ts = a;
        return this;
      };
      c.setAdRequestStartTs = function (a) {
        this.$1.ad_request_start_ts = a;
        return this;
      };
      c.setAdsFetchFailed = function (a) {
        this.$1.ads_fetch_failed = a;
        return this;
      };
      c.setAdsInsertionPositionsString = function (a) {
        this.$1.ads_insertion_positions_string = a;
        return this;
      };
      c.setAdsReturnedCurrentPosition = function (a) {
        this.$1.ads_returned_current_position = a;
        return this;
      };
      c.setAllowsMentionStoryReshare = function (a) {
        this.$1.allows_mention_story_reshare = a;
        return this;
      };
      c.setAppSessionID = function (a) {
        this.$1.app_session_id = a;
        return this;
      };
      c.setAppID = function (a) {
        this.$1.appid = a;
        return this;
      };
      c.setAppversion = function (a) {
        this.$1.appversion = a;
        return this;
      };
      c.setAttributionLinkType = function (a) {
        this.$1.attribution_link_type = a;
        return this;
      };
      c.setBadgingNumber = function (a) {
        this.$1.badging_number = a;
        return this;
      };
      c.setBlacklistedIds = function (a) {
        this.$1.blacklisted_ids = b("GeneratedLoggerUtils").serializeVector(a);
        return this;
      };
      c.setBlacklistedStoriesUsersCount = function (a) {
        this.$1.blacklisted_stories_users_count = a;
        return this;
      };
      c.setBucketOwnerID = function (a) {
        this.$1.bucket_owner_id = a;
        return this;
      };
      c.setCameraPostType = function (a) {
        this.$1.camera_post_type = a;
        return this;
      };
      c.setCameraStoryPromotionID = function (a) {
        this.$1.camera_story_promotion_id = a;
        return this;
      };
      c.setCaptionNumLinesShown = function (a) {
        this.$1.caption_num_lines_shown = a;
        return this;
      };
      c.setCaptionToCarouselTriggered = function (a) {
        this.$1.caption_to_carousel_triggered = a;
        return this;
      };
      c.setCardID = function (a) {
        this.$1.card_id = a;
        return this;
      };
      c.setCardIDStr = function (a) {
        this.$1.card_id_str = a;
        return this;
      };
      c.setClientCameraPostTrackingKey = function (a) {
        this.$1.client_camera_post_tracking_key = a;
        return this;
      };
      c.setClientMediaContentID = function (a) {
        this.$1.client_media_content_id = a;
        return this;
      };
      c.setClientMediaID = function (a) {
        this.$1.client_media_id = a;
        return this;
      };
      c.setClientMediaIdsStrings = function (a) {
        this.$1.client_media_ids_strings = b(
          "GeneratedLoggerUtils"
        ).serializeVector(a);
        return this;
      };
      c.setClientPreviewType = function (a) {
        this.$1.client_preview_type = a;
        return this;
      };
      c.setClientSessionID = function (a) {
        this.$1.client_session_id = a;
        return this;
      };
      c.setClientSessionTime = function (a) {
        this.$1.client_session_time = a;
        return this;
      };
      c.setClientShareSheetID = function (a) {
        this.$1.client_share_sheet_id = a;
        return this;
      };
      c.setClientStoryThreadIds = function (a) {
        this.$1.client_story_thread_ids = b(
          "GeneratedLoggerUtils"
        ).serializeMap(a);
        return this;
      };
      c.setClientStoryViewerSessionEntrypoint = function (a) {
        this.$1.client_story_viewer_session_entrypoint = a;
        return this;
      };
      c.setClientViewerSessionID = function (a) {
        this.$1.client_viewer_session_id = a;
        return this;
      };
      c.setClienttime = function (a) {
        this.$1.clienttime = a;
        return this;
      };
      c.setContainermodule = function (a) {
        this.$1.containermodule = a;
        return this;
      };
      c.setCount = function (a) {
        this.$1.count = a;
        return this;
      };
      c.setCountry = function (a) {
        this.$1.country = a;
        return this;
      };
      c.setDeviceid = function (a) {
        this.$1.deviceid = a;
        return this;
      };
      c.setDirectDataSessionID = function (a) {
        this.$1.direct_data_session_id = a;
        return this;
      };
      c.setDirectRecipients = function (a) {
        this.$1.direct_recipients = b("GeneratedLoggerUtils").serializeVector(
          a
        );
        return this;
      };
      c.setDirectRecipientsSize = function (a) {
        this.$1.direct_recipients_size = a;
        return this;
      };
      c.setDirectSessionID = function (a) {
        this.$1.direct_session_id = a;
        return this;
      };
      c.setEventStoriesInTray = function (a) {
        this.$1.event_stories_in_tray = a;
        return this;
      };
      c.setEventname = function (a) {
        this.$1.eventname = a;
        return this;
      };
      c.setExtraClientData = function (a) {
        this.$1.extra_client_data = a;
        return this;
      };
      c.setFbStoryViewerTrayType = function (a) {
        this.$1.fb_story_viewer_tray_type = a;
        return this;
      };
      c.setFirstOpenBucketIndex = function (a) {
        this.$1.first_open_bucket_index = a;
        return this;
      };
      c.setFirstView = function (a) {
        this.$1.first_view = a;
        return this;
      };
      c.setFolloweeStoriesInTray = function (a) {
        this.$1.followee_stories_in_tray = a;
        return this;
      };
      c.setFriendStoriesInTray = function (a) {
        this.$1.friend_stories_in_tray = a;
        return this;
      };
      c.setGesture = function (a) {
        this.$1.gesture = a;
        return this;
      };
      c.setGridLayoutColumnSize = function (a) {
        this.$1.grid_layout_column_size = a;
        return this;
      };
      c.setGridLayoutRowSize = function (a) {
        this.$1.grid_layout_row_size = a;
        return this;
      };
      c.setGridPageIndex = function (a) {
        this.$1.grid_page_index = a;
        return this;
      };
      c.setGridStoryIndexColumn = function (a) {
        this.$1.grid_story_index_column = a;
        return this;
      };
      c.setGridStoryIndexRow = function (a) {
        this.$1.grid_story_index_row = a;
        return this;
      };
      c.setGroupStoriesInTray = function (a) {
        this.$1.group_stories_in_tray = a;
        return this;
      };
      c.setHasMyStory = function (a) {
        this.$1.has_my_story = a;
        return this;
      };
      c.setHasNewContent = function (a) {
        this.$1.has_new_content = a;
        return this;
      };
      c.setHasNewViews = function (a) {
        this.$1.has_new_views = a;
        return this;
      };
      c.setHasNuxStory = function (a) {
        this.$1.has_nux_story = a;
        return this;
      };
      c.setHashid = function (a) {
        this.$1.hashid = a;
        return this;
      };
      c.setInspirationGroupSession = function (a) {
        this.$1.inspiration_group_session = a;
        return this;
      };
      c.setInstagramMediaID = function (a) {
        this.$1.instagram_media_id = a;
        return this;
      };
      c.setInstagramUserID = function (a) {
        this.$1.instagram_user_id = a;
        return this;
      };
      c.setInterface = function (a) {
        this.$1["interface"] = a;
        return this;
      };
      c.setInvalidReason = function (a) {
        this.$1.invalid_reason = a;
        return this;
      };
      c.setIsAudioStory = function (a) {
        this.$1.is_audio_story = a;
        return this;
      };
      c.setIsAutoPlay = function (a) {
        this.$1.is_auto_play = a;
        return this;
      };
      c.setIsCachedBucketFragment = function (a) {
        this.$1.is_cached_bucket_fragment = a;
        return this;
      };
      c.setIsCamera = function (a) {
        this.$1.is_camera = a;
        return this;
      };
      c.setIsFirstStoryMyStory = function (a) {
        this.$1.is_first_story_my_story = a;
        return this;
      };
      c.setIsFromStory = function (a) {
        this.$1.is_from_story = a;
        return this;
      };
      c.setIsReshare = function (a) {
        this.$1.is_reshare = a;
        return this;
      };
      c.setIsSifNuxCompleted = function (a) {
        this.$1.is_sif_nux_completed = a;
        return this;
      };
      c.setIsStory = function (a) {
        this.$1.is_story = a;
        return this;
      };
      c.setIsVideoPreviewTile = function (a) {
        this.$1.is_video_preview_tile = a;
        return this;
      };
      c.setIsemployee = function (a) {
        this.$1.isemployee = a;
        return this;
      };
      c.setLiveStoriesInTray = function (a) {
        this.$1.live_stories_in_tray = a;
        return this;
      };
      c.setLiveVideoID = function (a) {
        this.$1.live_video_id = a;
        return this;
      };
      c.setMediaIndex = function (a) {
        this.$1.media_index = a;
        return this;
      };
      c.setMediaOwner = function (a) {
        this.$1.media_owner = a;
        return this;
      };
      c.setMediaOwnerTypeString = function (a) {
        this.$1.media_owner_type_string = a;
        return this;
      };
      c.setMediaType = function (a) {
        this.$1.media_type = a;
        return this;
      };
      c.setMessageLength = function (a) {
        this.$1.message_length = a;
        return this;
      };
      c.setMobileNetworkType = function (a) {
        this.$1.mobile_network_type = a;
        return this;
      };
      c.setMontageMessageID = function (a) {
        this.$1.montage_message_id = a;
        return this;
      };
      c.setMutationID = function (a) {
        this.$1.mutation_id = a;
        return this;
      };
      c.setName = function (a) {
        this.$1.name = a;
        return this;
      };
      c.setNewBirthdayStoryPostingMode = function (a) {
        this.$1.new_birthday_story_posting_mode = a;
        return this;
      };
      c.setNewContentLength = function (a) {
        this.$1.new_content_length = a;
        return this;
      };
      c.setNotifTracking = function (a) {
        this.$1.notif_tracking = a;
        return this;
      };
      c.setNumOfAdsReturned = function (a) {
        this.$1.num_of_ads_returned = a;
        return this;
      };
      c.setNumOfStoryBuckets = function (a) {
        this.$1.num_of_story_buckets = a;
        return this;
      };
      c.setNumOfValidAdsReturned = function (a) {
        this.$1.num_of_valid_ads_returned = a;
        return this;
      };
      c.setNumberBadges = function (a) {
        this.$1.number_badges = a;
        return this;
      };
      c.setNumberImbeStories = function (a) {
        this.$1.number_imbe_stories = a;
        return this;
      };
      c.setNumberLiveStories = function (a) {
        this.$1.number_live_stories = a;
        return this;
      };
      c.setNumberMedia = function (a) {
        this.$1.number_media = a;
        return this;
      };
      c.setNumberNewStories = function (a) {
        this.$1.number_new_stories = a;
        return this;
      };
      c.setNumberReactions = function (a) {
        this.$1.number_reactions = a;
        return this;
      };
      c.setNumberStories = function (a) {
        this.$1.number_stories = a;
        return this;
      };
      c.setNumberViewers = function (a) {
        this.$1.number_viewers = a;
        return this;
      };
      c.setOldBirthdayStoryPostingMode = function (a) {
        this.$1.old_birthday_story_posting_mode = a;
        return this;
      };
      c.setOrganicTracking = function (a) {
        this.$1.organic_tracking = a;
        return this;
      };
      c.setOriginalStoryThreadID = function (a) {
        this.$1.original_story_thread_id = a;
        return this;
      };
      c.setOriginalStoryType = function (a) {
        this.$1.original_story_type = a;
        return this;
      };
      c.setOriginalVideoFileSize = function (a) {
        this.$1.original_video_file_size = a;
        return this;
      };
      c.setOverlayTypesUsed = function (a) {
        this.$1.overlay_types_used = b("GeneratedLoggerUtils").serializeVector(
          a
        );
        return this;
      };
      c.setPageStoriesInTray = function (a) {
        this.$1.page_stories_in_tray = a;
        return this;
      };
      c.setPrivacyMode = function (a) {
        this.$1.privacy_mode = a;
        return this;
      };
      c.setProductMediaType = function (a) {
        this.$1.product_media_type = a;
        return this;
      };
      c.setProductSurface = function (a) {
        this.$1.product_surface = a;
        return this;
      };
      c.setPromotionID = function (a) {
        this.$1.promotion_id = a;
        return this;
      };
      c.setPromotionMediaID = function (a) {
        this.$1.promotion_media_id = a;
        return this;
      };
      c.setPromotionStoriesInTray = function (a) {
        this.$1.promotion_stories_in_tray = a;
        return this;
      };
      c.setRawclienttime = function (a) {
        this.$1.rawclienttime = a;
        return this;
      };
      c.setReactionID = function (a) {
        this.$1.reaction_id = a;
        return this;
      };
      c.setReactionType = function (a) {
        this.$1.reaction_type = a;
        return this;
      };
      c.setReadStories = function (a) {
        this.$1.read_stories = a;
        return this;
      };
      c.setReason = function (a) {
        this.$1.reason = a;
        return this;
      };
      c.setRepliedStoryThreadID = function (a) {
        this.$1.replied_story_thread_id = a;
        return this;
      };
      c.setReplyCount = function (a) {
        this.$1.reply_count = a;
        return this;
      };
      c.setReplyType = function (a) {
        this.$1.reply_type = a;
        return this;
      };
      c.setSeenStateDataConsistency = function (a) {
        this.$1.seen_state_data_consistency = a;
        return this;
      };
      c.setSendKey = function (a) {
        this.$1.send_key = a;
        return this;
      };
      c.setServerPostSource = function (a) {
        this.$1.server_post_source = a;
        return this;
      };
      c.setServertime = function (a) {
        this.$1.servertime = a;
        return this;
      };
      c.setSessionid = function (a) {
        this.$1.sessionid = a;
        return this;
      };
      c.setSnapshotID = function (a) {
        this.$1.snapshot_id = a;
        return this;
      };
      c.setSoftDeletedStoryThreadIds = function (a) {
        this.$1.soft_deleted_story_thread_ids = b(
          "GeneratedLoggerUtils"
        ).serializeVector(a);
        return this;
      };
      c.setSource = function (a) {
        this.$1.source = a;
        return this;
      };
      c.setSourceThreadID = function (a) {
        this.$1.source_thread_id = a;
        return this;
      };
      c.setStoriesSurfaceSectionType = function (a) {
        this.$1.stories_surface_section_type = a;
        return this;
      };
      c.setStoriesSurfaceSectionViewstateKey = function (a) {
        this.$1.stories_surface_section_viewstate_key = a;
        return this;
      };
      c.setStoriesSurfaceSessionID = function (a) {
        this.$1.stories_surface_session_id = a;
        return this;
      };
      c.setStoriesTrayFeedUnitTrackingString = function (a) {
        this.$1.stories_tray_feed_unit_tracking_string = a;
        return this;
      };
      c.setStoryCardSharedMessage = function (a) {
        this.$1.story_card_shared_message = a;
        return this;
      };
      c.setStoryCardShareeID = function (a) {
        this.$1.story_card_sharee_id = a;
        return this;
      };
      c.setStoryCardSharerID = function (a) {
        this.$1.story_card_sharer_id = a;
        return this;
      };
      c.setStoryCreationTs = function (a) {
        this.$1.story_creation_ts = a;
        return this;
      };
      c.setStoryIndex = function (a) {
        this.$1.story_index = a;
        return this;
      };
      c.setStoryMediaIds = function (a) {
        this.$1.story_media_ids = b("GeneratedLoggerUtils").serializeMap(a);
        return this;
      };
      c.setStoryOwner = function (a) {
        this.$1.story_owner = a;
        return this;
      };
      c.setStoryOwnerFbids = function (a) {
        this.$1.story_owner_fbids = b("GeneratedLoggerUtils").serializeVector(
          a
        );
        return this;
      };
      c.setStoryOwnerType = function (a) {
        this.$1.story_owner_type = a;
        return this;
      };
      c.setStoryPermalinkLoadFailReason = function (a) {
        this.$1.story_permalink_load_fail_reason = a;
        return this;
      };
      c.setStoryPostFeedUnitTrackingString = function (a) {
        this.$1.story_post_feed_unit_tracking_string = a;
        return this;
      };
      c.setStoryRankingScores = function (a) {
        this.$1.story_ranking_scores = b("GeneratedLoggerUtils").serializeMap(
          a
        );
        return this;
      };
      c.setStoryTargetCount = function (a) {
        this.$1.story_target_count = a;
        return this;
      };
      c.setTargetID = function (a) {
        this.$1.target_id = a;
        return this;
      };
      c.setThreadCount = function (a) {
        this.$1.thread_count = a;
        return this;
      };
      c.setThreadViewIdentifier = function (a) {
        this.$1.thread_view_identifier = a;
        return this;
      };
      c.setTimespent = function (a) {
        this.$1.timespent = a;
        return this;
      };
      c.setTofuTraySessionID = function (a) {
        this.$1.tofu_tray_session_id = a;
        return this;
      };
      c.setTopAdGap = function (a) {
        this.$1.top_ad_gap = a;
        return this;
      };
      c.setTracking = function (a) {
        this.$1.tracking = b("GeneratedLoggerUtils").serializeVector(a);
        return this;
      };
      c.setTrackingString = function (a) {
        this.$1.tracking_string = a;
        return this;
      };
      c.setTraySessionID = function (a) {
        this.$1.tray_session_id = a;
        return this;
      };
      c.setTriggerSource = function (a) {
        this.$1.trigger_source = a;
        return this;
      };
      c.setTruePromptID = function (a) {
        this.$1.true_prompt_id = a;
        return this;
      };
      c.setUIElements = function (a) {
        this.$1.ui_elements = b("GeneratedLoggerUtils").serializeVector(a);
        return this;
      };
      c.setUnifiedPrivacyMode = function (a) {
        this.$1.unified_privacy_mode = a;
        return this;
      };
      c.setUnifiedStoriesMediaSource = function (a) {
        this.$1.unified_stories_media_source = a;
        return this;
      };
      c.setUnreadStories = function (a) {
        this.$1.unread_stories = a;
        return this;
      };
      c.setVideoExtraDuration = function (a) {
        this.$1.video_extra_duration = a;
        return this;
      };
      c.setVideoLength = function (a) {
        this.$1.video_length = a;
        return this;
      };
      c.setViewerSessionStoryBucketRelativePosition = function (a) {
        this.$1.viewer_session_story_bucket_relative_position = a;
        return this;
      };
      c.setViewerSessionStoryBucketType = function (a) {
        this.$1.viewer_session_story_bucket_type = a;
        return this;
      };
      c.setViewerSessionStoryConsumedMediaCountSinceLastAd = function (a) {
        this.$1.viewer_session_story_consumed_media_count_since_last_ad = a;
        return this;
      };
      c.setViewerSessionStoryConsumedMediaViewCountSinceLastAd = function (a) {
        this.$1.viewer_session_story_consumed_media_view_count_since_last_ad =
          a;
        return this;
      };
      c.setViewerSessionStoryConsumedPogCountSinceLastAd = function (a) {
        this.$1.viewer_session_story_consumed_pog_count_since_last_ad = a;
        return this;
      };
      c.setViewerSessionStoryPogConsumptionIndex = function (a) {
        this.$1.viewer_session_story_pog_consumption_index = a;
        return this;
      };
      c.setWhitelistedIds = function (a) {
        this.$1.whitelisted_ids = b("GeneratedLoggerUtils").serializeVector(a);
        return this;
      };
      c.setWhitelistedStoriesUsersCount = function (a) {
        this.$1.whitelisted_stories_users_count = a;
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
      accountstatus: !0,
      action_source: !0,
      ad_gap: !0,
      ad_id: !0,
      ad_request_end_ts: !0,
      ad_request_start_ts: !0,
      ads_fetch_failed: !0,
      ads_insertion_positions_string: !0,
      ads_returned_current_position: !0,
      allows_mention_story_reshare: !0,
      app_session_id: !0,
      appid: !0,
      appversion: !0,
      attribution_link_type: !0,
      badging_number: !0,
      blacklisted_ids: !0,
      blacklisted_stories_users_count: !0,
      bucket_owner_id: !0,
      camera_post_type: !0,
      camera_story_promotion_id: !0,
      caption_num_lines_shown: !0,
      caption_to_carousel_triggered: !0,
      card_id: !0,
      card_id_str: !0,
      client_camera_post_tracking_key: !0,
      client_media_content_id: !0,
      client_media_id: !0,
      client_media_ids_strings: !0,
      client_preview_type: !0,
      client_session_id: !0,
      client_session_time: !0,
      client_share_sheet_id: !0,
      client_story_thread_ids: !0,
      client_story_viewer_session_entrypoint: !0,
      client_viewer_session_id: !0,
      clienttime: !0,
      containermodule: !0,
      count: !0,
      country: !0,
      deviceid: !0,
      direct_data_session_id: !0,
      direct_recipients: !0,
      direct_recipients_size: !0,
      direct_session_id: !0,
      event_stories_in_tray: !0,
      eventname: !0,
      extra_client_data: !0,
      fb_story_viewer_tray_type: !0,
      first_open_bucket_index: !0,
      first_view: !0,
      followee_stories_in_tray: !0,
      friend_stories_in_tray: !0,
      gesture: !0,
      grid_layout_column_size: !0,
      grid_layout_row_size: !0,
      grid_page_index: !0,
      grid_story_index_column: !0,
      grid_story_index_row: !0,
      group_stories_in_tray: !0,
      has_my_story: !0,
      has_new_content: !0,
      has_new_views: !0,
      has_nux_story: !0,
      hashid: !0,
      inspiration_group_session: !0,
      instagram_media_id: !0,
      instagram_user_id: !0,
      interface: !0,
      invalid_reason: !0,
      is_audio_story: !0,
      is_auto_play: !0,
      is_cached_bucket_fragment: !0,
      is_camera: !0,
      is_first_story_my_story: !0,
      is_from_story: !0,
      is_reshare: !0,
      is_sif_nux_completed: !0,
      is_story: !0,
      is_video_preview_tile: !0,
      isemployee: !0,
      live_stories_in_tray: !0,
      live_video_id: !0,
      media_index: !0,
      media_owner: !0,
      media_owner_type_string: !0,
      media_type: !0,
      message_length: !0,
      mobile_network_type: !0,
      montage_message_id: !0,
      mutation_id: !0,
      name: !0,
      new_birthday_story_posting_mode: !0,
      new_content_length: !0,
      notif_tracking: !0,
      num_of_ads_returned: !0,
      num_of_story_buckets: !0,
      num_of_valid_ads_returned: !0,
      number_badges: !0,
      number_imbe_stories: !0,
      number_live_stories: !0,
      number_media: !0,
      number_new_stories: !0,
      number_reactions: !0,
      number_stories: !0,
      number_viewers: !0,
      old_birthday_story_posting_mode: !0,
      organic_tracking: !0,
      original_story_thread_id: !0,
      original_story_type: !0,
      original_video_file_size: !0,
      overlay_types_used: !0,
      page_stories_in_tray: !0,
      privacy_mode: !0,
      product_media_type: !0,
      product_surface: !0,
      promotion_id: !0,
      promotion_media_id: !0,
      promotion_stories_in_tray: !0,
      rawclienttime: !0,
      reaction_id: !0,
      reaction_type: !0,
      read_stories: !0,
      reason: !0,
      replied_story_thread_id: !0,
      reply_count: !0,
      reply_type: !0,
      seen_state_data_consistency: !0,
      send_key: !0,
      server_post_source: !0,
      servertime: !0,
      sessionid: !0,
      snapshot_id: !0,
      soft_deleted_story_thread_ids: !0,
      source: !0,
      source_thread_id: !0,
      stories_surface_section_type: !0,
      stories_surface_section_viewstate_key: !0,
      stories_surface_session_id: !0,
      stories_tray_feed_unit_tracking_string: !0,
      story_card_shared_message: !0,
      story_card_sharee_id: !0,
      story_card_sharer_id: !0,
      story_creation_ts: !0,
      story_index: !0,
      story_media_ids: !0,
      story_owner: !0,
      story_owner_fbids: !0,
      story_owner_type: !0,
      story_permalink_load_fail_reason: !0,
      story_post_feed_unit_tracking_string: !0,
      story_ranking_scores: !0,
      story_target_count: !0,
      target_id: !0,
      thread_count: !0,
      thread_view_identifier: !0,
      timespent: !0,
      tofu_tray_session_id: !0,
      top_ad_gap: !0,
      tracking: !0,
      tracking_string: !0,
      tray_session_id: !0,
      trigger_source: !0,
      true_prompt_id: !0,
      ui_elements: !0,
      unified_privacy_mode: !0,
      unified_stories_media_source: !0,
      unread_stories: !0,
      video_extra_duration: !0,
      video_length: !0,
      viewer_session_story_bucket_relative_position: !0,
      viewer_session_story_bucket_type: !0,
      viewer_session_story_consumed_media_count_since_last_ad: !0,
      viewer_session_story_consumed_media_view_count_since_last_ad: !0,
      viewer_session_story_consumed_pog_count_since_last_ad: !0,
      viewer_session_story_pog_consumption_index: !0,
      whitelisted_ids: !0,
      whitelisted_stories_users_count: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesTrayLogger",
  ["DirectMessagingTypedLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      var c = {
        eventStories: 0,
        followeeStories: 0,
        friendStories: 0,
        groupStories: 0,
        hasSelfStory: !1,
        liveStories: 0,
        newNonSelfStories: 0,
        pageStories: 0,
        storyPromos: 0,
        storyThreadIDs: new Map(),
        totalNoneSelfStories: 0,
      };
      if (a == null) return c;
      c = a.reduce(function (a, c) {
        var d, e, f;
        c = c;
        if (c == null) return a;
        var g = c.story_bucket_type;
        d =
          ((d = c.story_bucket_owner) == null ? void 0 : d.is_viewer_friend) ||
          !1;
        var h = c.is_bucket_seen_by_viewer || !1;
        e =
          ((e = c.unified_stories) == null ? void 0 : e.is_empty) === !1
            ? 1
            : 0;
        f = (f = c.story_bucket_owner) == null ? void 0 : f.id;
        c = (c = c.unified_stories) == null ? void 0 : c.nodes;
        c =
          c != null
            ? c.map(function (a) {
                return a.id;
              })
            : null;
        (g === "LIVE_STORY" || e > 0) &&
          (b === f
            ? (a.hasSelfStory = !0)
            : (a.totalNoneSelfStories++, h && a.newNonSelfStories++),
          g === "LIVE_STORY"
            ? a.liveStories++
            : g === "PAGE_STORY"
            ? a.pageStories++
            : g === "EVENT_STORY"
            ? a.eventStories++
            : g === "GROUP_STORY"
            ? a.groupStories++
            : g === "PROMOTION_STORY"
            ? a.storyPromos++
            : !d
            ? a.followeeStories++
            : a.friendStories++);
        f != null && c != null && a.storyThreadIDs.set(f, c);
        return a;
      }, c);
      return c;
    }
    function a(a) {
      var b = a.actorID,
        d = a.buckets,
        e = a.feedUnitTrackingString,
        f = a.sessionID;
      a = a.source;
      if (d == null) return;
      d = h(d, b);
      b = new (c("DirectMessagingTypedLogger"))();
      b.setHasMyStory(d.hasSelfStory)
        .setNumberStories(d.totalNoneSelfStories)
        .setNumberNewStories(d.newNonSelfStories)
        .setNumberLiveStories(d.liveStories)
        .setLiveStoriesInTray(d.liveStories)
        .setPageStoriesInTray(d.pageStories)
        .setEventStoriesInTray(d.eventStories)
        .setGroupStoriesInTray(d.groupStories)
        .setFolloweeStoriesInTray(d.followeeStories)
        .setFriendStoriesInTray(d.friendStories)
        .setPromotionStoriesInTray(d.storyPromos)
        .setClientStoryThreadIds(d.storyThreadIDs)
        .setName("story_tray_load")
        .setSource(a)
        .setTraySessionID(f)
        .setStoriesTrayFeedUnitTrackingString(e)
        .log();
    }
    g._getLoggingData = h;
    g.logStoryTrayLoad = a;
  },
  98
);
__d(
  "CometNewsFeedEofFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743385");
    c = b("FalcoLoggerInternal").create("comet_news_feed_eof", a);
    e.exports = c;
  },
  null
);
__d(
  "CometNewsFeedEofUnmountedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743386");
    c = b("FalcoLoggerInternal").create("comet_news_feed_eof_unmounted", a);
    e.exports = c;
  },
  null
);
__d(
  "StoryProfileImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744412");
    c = b("FalcoLoggerInternal").create("story_profile_impression", a);
    e.exports = c;
  },
  null
);
__d(
  "WebBookmarkClickFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1868428");
    c = b("FalcoLoggerInternal").create("web_bookmark_click", a);
    e.exports = c;
  },
  null
);
__d(
  "WebBookmarkImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1868429");
    c = b("FalcoLoggerInternal").create("web_bookmark_impression", a);
    e.exports = c;
  },
  null
);
__d(
  "CometFeedGapRuleViolationTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:CometFeedGapRuleViolationLoggerConfig"
    );
  },
  null
);
