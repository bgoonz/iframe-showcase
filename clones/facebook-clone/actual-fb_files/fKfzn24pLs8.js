if (self.CavalryLogger) {
  CavalryLogger.start_js(["JWNv4+Q"]);
}

__d(
  "logPfcExpressionsEvent_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { kind: "InlineDataFragment", name: "logPfcExpressionsEvent_event" };
    e.exports = a;
  },
  null
);
__d(
  "useLogPMVBumperEvent_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { kind: "InlineDataFragment", name: "useLogPMVBumperEvent_event" };
    e.exports = a;
  },
  null
);
__d(
  "useLogPrayerUpdatePostPromoBumperEvent_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "useLogPrayerUpdatePostPromoBumperEvent_event",
    };
    e.exports = a;
  },
  null
);
__d(
  "EventsLoggerActionMechanism",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      UNKNOWN: "unknown",
      MECHANISM_NULL: "null",
      SURFACE: "surface",
      MAIN_LIST: "main_list",
      PREVIEW_UNIT: "preview_unit",
      PREVIEW_UNIT_NULL_STATE: "preview_unit_null_state",
      LIST_VIEW: "list_view",
      PERMALINK: "permalink",
      PERMALINK_ACTION_BAR: "permalink_action_bar",
      PERMALINK_COMPOSER: "permalink_composer",
      PERMALINK_NATIVE_TEMPLATE_SHARE_CARD:
        "permalink_native_template_share_card",
      PERMALINK_HOST_TOOLS_CARD: "permalink_host_tools_card",
      PERMALINK_MEET_YOUR_HOSTS_CARD: "permalink_meet_your_hosts_card",
      PERMALINK_ADD_TO_CALENDAR_BUMPER: "permalink_add_to_calendar_bumper",
      PERMALINK_INVITES_BUMPER: "permalink_invites_bumper",
      PERMALINK_ADD_TO_CALENDAR_BS_CARD: "permalink_add_to_calendar_bs_card",
      FEED_STORY: "feed_story",
      POST_FEED_STORY: "post_feed_story",
      TOUR_FEED_STORY: "tour_feed_story",
      COVER_PHOTO_UNIT: "cover_photo_unit",
      BOOKMARKS: "bookmarks",
      NOTIFICATIONS: "notifications",
      NOTIFICATION_SETTINGS: "notification_settings",
      EXTERNAL_SEARCH_ENGINE: "external_search_engine",
      EXTERNAL_REFERRER: "external_referrer",
      EXTERNAL_NO_REFERRER: "external_no_referrer",
      DASH_FILTER: "dashboard_filter",
      SEARCH_BAR: "search_bar",
      SEARCH_RESULTS: "search_results",
      SEARCH_NO_RESULTS: "search_no_results",
      REMINDERS: "reminders",
      SUGGESTION_EGO: "suggestion_ego",
      INVITES_EGO: "invites_ego",
      RHC: "RHC",
      EGO_STORY: "ego_story",
      MESSAGE_BUTTON: "message_button",
      RESCHEDULE_POST_DIALOG: "reschedule_post_dialog",
      SEND_BUTTON: "send_button",
      CANCEL_BUTTON: "cancel_button",
      LOCATION_PICKER: "location_picker",
      TIME_PICKER: "time_picker",
      HEADER: "header",
      CONTEXT_ROW: "context_row",
      ATTACHMENT: "attachment",
      RELATED_EVENTS_PIVOT: "related_events_pivot",
      WALL: "wall",
      HOST_EVENTS_CARD: "host_events_card",
      RELATIONSHIP_BAR: "relationship_bar",
      DRAFT_BANNER: "draft_banner",
      SCHEDULED_BANNER: "scheduled_banner",
      SUGGEST_EDIT_BAR: "suggest_edit_bar",
      MEGAPHONE: "megaphone",
      SOCIAL_PLUGIN: "social_plugin",
      CITY_PAGE_EVENTS_UNIT: "city_page_events_unit",
      PAGE_CREATE_DIALOG: "page_create_dialog",
      PAGES_COMPOSER: "pages_composer",
      PAGE_ADMIN_BAR: "page_admin_bar",
      PAGE_ADMIN_CONSOLIDATED_ENTRY_BUTTONS_ROW:
        "page_admin_consolidated_entry_buttons_row",
      PAGE_ADMIN_CONSOLIDATED_ENTRY_BUTTONS_POPOVER:
        "page_admin_consolidated_entry_buttons_popover",
      USER_CREATE_DIALOG: "user_create_dialog",
      GROUP_CREATE_DIALOG: "group_create_dialog",
      COPY_CREATE_DIALOG: "copy_create_dialog",
      COPY_EVENT_INVITES: "copy_event_invites",
      HOVERCARD: "hovercard",
      COMPARISON_CARDS: "comparison_cards",
      SUBSCRIBED_EVENT_DIALOG: "subscribed_dialog",
      GUEST_LIST: "guest_list",
      ALBUM_BUTTON: "album_button",
      RELATED_EVENT_BUTTON: "related_event_button",
      INVITE_THROUGH_MESSENGER: "invite_through_messenger",
      EVENT_YOU_MAY_JOIN_EMAIL: "event_you_may_join_email",
      SEND_TO_GROUP: "send_to_group",
      GUEST_LIST_EMAIL_BUTTON: "guest_list_email_button",
      GUEST_LIST_EMAIL_DRAFT_BUTTON: "guest_list_draft_button",
      GUEST_LIST_EMAIL_CANCEL_BUTTON: "guest_list_email_cancel_button",
      GUEST_LIST_EMAIL_SEND_BUTTON: "guest_list_email_send_button",
      REACTION_UNIT: "reaction_unit",
      ACTION_BAR: "action_bar",
      CHECKIN_COMPOSER: "checkin_composer",
      CONTEXT_ROW_UBER_BUTTON: "context_row_uber_button",
      TICKET_INFO: "ticket_info",
      UNIT_TEST: "unit_test",
      INLINE_COMPOSER_PHOTO_PROMPT: "inline_composer_photo_prompt",
      PHOTOS_PAGE: "photos_page",
      NO_LOCATION: "no_location",
      LOCATION_STALE: "location_stale",
      LOCATION_INACCURATE: "location_inaccurate",
      LOCATION_CONTEXT_ROW: "location_context_row",
      NO_RESULTS: "no_results",
      INSIGHTS_TAB: "insights_tab",
      INSIGHTS_MODULE: "insights_module",
      PAGE_INSIGHTS_DASHBOAD: "page_insights_dashboard",
      INSIGHTS_TAB_REACH: "insights_tab_reach",
      INSIGHTS_TAB_PAGE_VIEWS: "insights_tab_page_views",
      INSIGHTS_TAB_CONNECTIONS: "insights_tab_connections",
      INSIGHTS_TAB_ACTIONS: "insights_tab_actions",
      INSIGHTS_TAB_TICKET_CLICKS: "insights_tab_ticket_clicks",
      INSIGHTS_TAB_TICKET_DEVICES: "insights_tab_ticket_devices",
      INSIGHTS_TAB_DEMOGRAPHICS: "insights_tab_demographics",
      INSIGHTS_TAB_AUDIENCE_DEVICES: "insights_tab_audience_devices",
      TIP: "tip",
      REMINDER: "reminder",
      REMINDER_WORD: "reminder_word",
      REMINDER_ACTION_SHEET: "reminder_action_sheet",
      REMINDER_LOCATION_MAP: "reminder_location_map",
      REMINDER_CHANGE_NAME_ALERT: "reminder_change_name_alert",
      REMINDER_NONE_ACTIVE_ALERT: "reminder_none_active_alert",
      REMINDER_CUSTOMIZATION: "reminder_customization",
      REMINDER_BANNER: "reminder_banner",
      EVENT_REMINDER_SETTINGS: "event_reminder_settings",
      REMINDER_ADMIN_TEXT: "reminder_admin_text",
      TRIGGER_WORD: "trigger_word",
      TRIGGER_CTA: "trigger_cta",
      TRIGGER_AGENT: "trigger_agent",
      REMINDER_XMA: "reminder_xma",
      MESSENGER_COMPOSER: "messenger_composer",
      MESSENGER_THREAD_SETTINGS: "messenger_thread_settings",
      MESSENGER_REMINDER_NUX: "messenger_reminder_nux",
      MESSENGER_NT_XMA: "messenger_nt_xma",
      EDIT_REMINDER: "edit_reminder",
      CREATE_EVENT_BUTTON: "create_event_button",
      EDIT_EVENT_BUTTON: "edit_event_button",
      DUPLICATE_EVENT_BUTTON: "duplicate_event_button",
      CREATE_PROMPT: "create_prompt",
      EVENT_DISCOVER_FRIENDS_EVENTS_HSCROLL: "friends_events_hscroll",
      EVENT_DISCOVER_SUGGESTED_EVENTS_HSCROLL: "suggested_events_hscroll",
      EVENT_DISCOVER_TIME_SELECTOR: "top_time_selector",
      EVENTS_DISCOVER_CATEGORIES: "event_discover_categories",
      EVENTS_DISCOVER_TOP_TIME_FILTER: "event_discover_top_time_filter",
      EVENTS_DISCOVER_SET_SEARCH_LANDING: "event_discover_set_search_landing",
      TICKET_PURCHASE_DIALOG: "ticket_purchase_dialog",
      ADD_TICKETING_FLOW: "add_ticketing_flow",
      POWEREDBY_TICKET_ORDER_LIST: "poweredby_ticket_order_list",
      POWEREDBY_NOTICE: "poweredby_notice",
      GROUPS_COMPOSER: "groups_composer",
      UPCOMING_CLASSES_BY_CREATOR: "upcoming_classes_by_creator",
      UPCOMING_CLASSES_FOR_GROUP: "upcoming_classes_for_group",
      UPCOMING_CLASSES_FOR_PAGE: "upcoming_classes_for_page",
      UPCOMING_EVENTS_IN_CITY: "upcoming_events_in_city",
      UPCOMING_EVENTS_AT_VENUE: "upcoming_events_at_venue",
      UPCOMING_EVENTS_WITH_PRIMARY_ROLE: "upcoming_events_with_primary_role",
      UPCOMING_EVENTS_FOR_GROUP: "upcoming_events_for_group",
      UPCOMING_EVENTS_FOR_TOUR: "upcoming_events_for_tour",
      LOCAL_UPCOMING_EVENTS_IN_CITY: "local_upcoming_events_in_city",
      INVITE_OFF_FB_INFO_BAR: "invite_off_fb_permalink_info_bar",
      INVITE_OFF_FB_PERMALINK_LINK: "invite_off_fb_permalink_link",
      INVITE_OFF_FB_INVITE_BUTTON_DROPDOWN:
        "invite_off_fb_invite_button_dropdown",
      WARM_START: "warm_start",
      COLD_START: "cold_start",
      SEARCH_BUTTON: "search_button",
      CALL_REMINDER_CALL_LOG: "call_reminder_call_log",
      CALL_REMINDER_NEW_SCHEDULE: "call_reminder_new_schedule",
      CALL_REMINDER_XMA_SCHEDULE_CALL: "call_reminder_xma_schedule_call",
      CALL_REMINDER_ACTION_SHEET: "call_reminder_action_sheet",
      CALL_REMINDER_EVENT_EXIST_ALERT:
        "call_reminder_event_exist_conflict_alert",
      CALL_REMINDER_UPDATE_ALERT: "call_reminder_update_alert",
      PAGE_UPCOMING_EVENTS_CARD: "page_upcoming_events_card",
      PAGE_PAST_EVENTS_CARD: "page_past_events_card",
      BUY_TICKETS_CTA: "buy_tickets_cta",
      BUY_TICKETS_PRICE_LABEL: "buy_tickets_price_label",
      TICKETING_ONSITE_FLOW: "onsite_flow",
      BUY_TICKETS_ONSITE_PIVOT: "buy_onsite_tickets_pivot",
      TICKETING_STICKY_BAR: "ticketing_sticky_bar",
      CONTEXTUAL_RECOMMENDATIONS: "contextual_recommendations",
      EVENT_DISCOVER_SEE_MORE_PHOTO: "event_discover_see_more_photo",
      SUGGESTION_FEED_UNIT: "suggestion_feed_unit",
      AUCTION_QP_UNIT: "auction_qp_unit",
      CURATED_EVENTS_QP_UNIT: "curated_events_qp_unit",
      EVENTS_YOU_MAY_LIKE_AUCTION_QP_UNIT:
        "events_you_may_like_auction_qp_unit",
      PAID_ONLINE_EVENTS_HAPPENING_SOON_QP_UNIT:
        "paid_online_events_happening_soon_qp_unit",
      PAID_ONLINE_EVENTS_PAST_LIVE_EVENT_QP_UNIT:
        "paid_online_events_past_live_event_qp_unit",
      PAID_ONLINE_EVENTS_RSVP_CONVERSION_QP_UNIT:
        "paid_online_events_rsvp_conversion_qp_unit",
      PAID_ONLINE_EVENTS_RECONVERSION_QP_UNIT:
        "paid_online_events_reconversion_qp_unit",
      PAID_ONLINE_EVENTS_HIGH_MPS_QP_UNIT:
        "paid_online_events_high_mps_qp_unit",
      PAID_ONLINE_EVENTS_HIGH_PERMALINK_DROPOFF_QP_UNIT:
        "paid_online_events_permalink_dropoff_qp_unit",
      PAID_ONLINE_EVENTS_VIDEO_PAYWALL_CTA:
        "paid_online_events_video_paywall_cta",
      PAID_ONLINE_EVENTS_VIDEO_PAYWALL: "paid_online_events_video_paywall",
      SUBSCRIPTION_QP_UNIT: "subscription_qp_unit",
      SUBSCRIPTION_TOP_SUGGESTED_EVENTS: "subscription_top_suggested_events",
      DATE_BUCKETS: "date_buckets",
      FUTURE_SUGGESTED_EVENTS: "future_suggested_events",
      AUCTION_QP_FREE_UNIT: "auction_qp_free_unit",
      NETEGO_SUGGESTION: "netego_suggestion",
      POPULAR_NEARBY: "popular_nearby",
      EVENTS_TAB: "events_tab",
      CALENDAR_TAB: "calendar_tab",
      HOSTING_TAB: "hosting_tab",
      POPULAR_SOCIAL: "popular_social",
      RELATED_HISTORY: "related_history",
      FRIENDS_ONLY: "friends_only",
      NON_FRIENDS: "non_friends",
      ADMIN_BANNER: "admin_banner",
      COHOST_ACCEPTANCE_UNIT: "cohost_acceptance_unit",
      HOME_TAB_SEE_SUGGESTED_EVENTS_TODAY:
        "home_tab_see_suggested_events_today",
      HOME_TAB_SEE_SUGGESTED_EVENTS_TOMORROW:
        "home_tab_see_suggested_events_tomorrow",
      HOME_TAB_SEE_SUGGESTED_EVENTS_FUTURE:
        "home_tab_see_suggested_events_future",
      HOME_TAB_SEE_ALL_UPCOMING_EVENTS_TAP:
        "home_tab_see_all_upcoming_events_tap",
      CALENDAR_TAB_EVENT: "calendar_tab_event",
      CALENDAR_TAB_INVITATION: "calendar_tab_invitation",
      CALENDAR_TAB_SUGGESTION: "calendar_tab_suggestion",
      HOME_TAB_UPCOMING_EVENT: "home_tab_upcoming_event",
      HOME_TAB_NEXT_EVENT: "home_tab_next_event",
      HOME_TAB_TRENDING_EVENTS: "home_tab_trending_events",
      HOME_TAB_PAGE_AND_GROUP_EVENTS: "home_tab_page_and_group_events",
      HOME_TAB_TODAY_EVENTS: "home_tab_today_events",
      HOME_TAB_THIS_WEEK_EVENTS: "home_tab_this_week_events",
      HOME_TAB_FUTURE_EVENTS: "home_tab_future_events",
      HOME_TAB_FRIENDS_EVENTS: "home_tab_friends_events",
      HOME_TAB_HERO_EVENTS: "home_tab_hero_events",
      HOSTING_TAB_UPCOMING_EVENT: "hosting_tab_upcoming_event",
      HOSTING_TAB_DRAFT_EVENT: "hosting_tab_draft_event",
      HOSTING_TAB_PAST_EVENT: "hosting_tab_past_event",
      LOCATION_SETTINGS: "location_settings",
      TOURS: "tours",
      TOUR_MAP: "tour_map",
      SHARE_BUTTON_DROPDOWN: "share_button_dropdown",
      SHARE_LINK: "share_link",
      SECONDARY_SHARE_BUTTON_DROPDOWN: "secondary_share_button_dropdown",
      FEED_ATTACHMENT: "feed_attachment",
      FEED_ATTACHMENT_SIBLING_HSCROLL: "feed_attachment_sibling_hscroll",
      CHECKIN_EVENTS_AT_PLACE_CHAINING_PIVOT:
        "checkin_events_at_place_chaining_pivot",
      OTHER_EVENTS_IN_TOUR_CARD: "other_events_in_tour_card",
      PAGE_UPCOMING_TOUR_EVENTS_CARD: "page_upcoming_tour_events_card",
      PERMALINK_EVENT_INFORMATION: "event_information",
      PERMALINK_TAB_BAR: "event_tab_bar",
      SOCIAL_CONTEXT: "social_context",
      MEDIA_EFFECTS: "media_effects",
      DASHBOARD_INVITES_TAB: "dashboard_invites_tab",
      MESSENGER_POLL_CALENDAR: "messenger_poll_calendar",
      MESSENGER_POLL_POLL_TYPE_SELECTOR: "messenger_poll_poll_type_selector",
      CAMERA_FRAMES_PAGELET: "camera_frames_pagelet",
      DASHBOARD_HOME_DISCOVERY_CATEGORIES:
        "dashboard_home_discovery_categories",
      DASHBOARD_HOME_DISCOVERY_FILTER: "dashboard_home_discovery_filter",
      DASHBOARD_HOME_THREE_UP: "dashboard_home_three_up",
      DASHBOARD_PROMOTION_UNIT: "dashboard_promotion_unit",
      PERMALINK_SHARE_CTA: "permalink_share_cta",
      PERMALINK_SHARE_SNACKBAR: "permalink_share_snackbar",
      PERMALINK_SCREENSHOT: "permalink_screenshot",
      SNACKBAR_ACTION_BUTTON: "snackbar_action_button",
      STORIES_VIEWER: "stories_viewer",
      HEADER_CTA_BUTTON: "header_cta_button",
      PIVOT_TO_INVITE: "pivot_to_invite",
      COMBINED_SHARESHEET: "combined_sharesheet",
      SUGGEST_FRIENDS_FOOTER_CTA: "suggest_friends_footer_cta",
      BOTTOM_ACTION_SHEET: "bottom_action_sheet",
      STICKY_FOOTER_CTA: "sticky_footer_cta",
      EVENT_MICROATTACHMENT: "event_microattachment",
      EVENT_ATTACHMENT_COVER_VIDEO: "event_attachment_cover_video",
      FOOTER_INSIGHT_DIALOG: "footer_insight_dialog",
      EVENT_EXTESION: "event_extension",
      BUTTON_BAR: "button_bar",
      SUGGESTED_EVENTS: "suggested_events",
      TICKETING_INLINE_SINGLE_STEP: "ticketing_inline_single_step",
      AVOCADO_TOAST: "avocado_toast",
      LOCAL_LISTS_QUADRUPLE_UNIT: "local_lists_quadruple_unit",
      NEWSFEED_HSCROLL_RECURRING_EVENTS: "newsfeed_hscroll_recurring_events",
      ENTITY_PREVIEW_MORE_MENU: "entity_preview_more_menu",
      STORY_COMMENT: "story_comment",
      TAG_EVENT_FEED_UPSELL: "tag_event_feed_upsell",
      SHARE_EVENT_FEED_PIVOT: "share_event_feed_pivot",
      PAGE_CALENDAR_ALL_RECURRING_EVENTS: "page_calendar_all_recurring_events",
      PAGE_ACTION_BAR: "page_action_bar",
      MANAGE_EVENT_TICKETS_PROMPT: "manage_event_tickets_prompt",
      GOING: "going",
      INVITED: "invited",
      MAYBE: "maybe",
      NOT_GOING: "not_going",
      EYML_HERO_UNIT: "eyml_hero_unit",
      EYML_HSCROLL: "eyml_hscroll",
      VIDEO_LIST: "video_list",
      EVENT_HOST_ONBOARDING_CARD: "event_host_onboarding_card",
      LINKED_GROUP_CARD: "linked_group_card",
      EVENT_TO_GROUP_LINK_GROUP_BOTTOM_SHEET:
        "event_to_group_link_group_bottom_sheet",
      ATTEND_FUTURE_EVENTS_CARD: "attend_future_events_card",
      BOOKMARK_BIRTHDAYS: "friends_birthdays",
      CURATED_EVENTS_HSCROLL: "curated_events_hscroll",
      COMING_SOON_UNIT: "coming_soon_unit",
      DISCOVERY_UNIT: "discovery_unit",
      DISCOVERY_TOP_TAB: "discovery_top_tab",
      DISCOVERY_THIS_WEEK_TAB: "discovery_this_week_tab",
      DISCOVERY_ONLINE_TAB: "discovery_online_tab",
      DISCOVERY_PAID_TAB: "discovery_paid_tab",
      DISCOVERY_NOW_TAB: "discovery_now_tab",
      DISCOVERY_LIVE_NOW_TAB: "discovery_live_now_tab",
      DISCOVERY_POPULAR_NOW_TAB: "discovery_popular_now_tab",
      DISCOVERY_EVENTS_CATEGORY_TAB: "discovery_events_category_tab",
      DISCOVERY_FRIENDS_TAB: "discovery_friends_tab",
      DISCOVERY_FOLLOWING_TAB: "discovery_following_tab",
      DISCOVERY_FITNESS_TAB: "discovery_fitness_tab",
      DISCOVERY_ARTS_CULTURE_TAB: "discovery_arts_culture_tab",
      DISCOVERY_CAUSES_TAB: "discovery_causes_tab",
      DISCOVERY_FILM_TAB: "discovery_film_tab",
      DISCOVERY_FOOD_DRINK_TAB: "discovery_food_drink_tab",
      DISCOVERY_HEALTH_TAB: "discovery_health_tab",
      DISCOVERY_KID_FRIENDLY_TAB: "discovery_kid_friendly_tab",
      DISCOVERY_LEARNING_CLASS_TAB: "discovery_learning_class_tab",
      DISCOVERY_MUSIC_TAB: "discovery_music_tab",
      DISCOVERY_NETWORKING_TAB: "discovery_networking_tab",
      DISCOVERY_NIGHTLIFE_TAB: "discovery_nightlife_tab",
      DISCOVERY_RELIGION_TAB: "discovery_religion_tab",
      DISCOVERY_SHOPPING_TAB: "discovery_shopping_tab",
      EVENT_LIST_CELL: "event_list_cell",
      YOUR_UPCOMING_EVENTS_UNIT: "your_upcoming_events_unit",
      CARD_MORE_MENU: "card_more_menu",
      FEATURED_UNIT: "featured_unit",
      FEATURED_UNIT_THEMED: "featured_unit_themed",
      FEATURED_UNIT_ARTS_AND_CRAFTS: "featured_unit_arts_and_crafts",
      FEATURED_UNIT_AUDIO_ROOM: "featured_unit_audio_room",
      FEATURED_UNIT_FAMILY_FRIENDLY: "featured_unit_family_friendly",
      FEATURED_UNIT_FITNESS: "featured_unit_fitness",
      FEATURED_UNIT_FOOD_AND_DRINK: "featured_unit_food_and_drink",
      FEATURED_UNIT_HISTORY_AND_CULTURAL: "featured_unit_history_and_cultural",
      FEATURED_UNIT_LEARNING: "featured_unit_learning",
      FEATURED_UNIT_MUSIC: "featured_unit_music",
      HOIST_NOTIFICATION: "hoist_notification",
      LOV_FEED: "lov_feed",
      CALENDAR_GOING_EVENTS_UNIT: "calendar_going_events_unit",
      CALENDAR_INVITES_EVENTS_UNIT: "calendar_invites_events_unit",
      CALENDAR_INTERESTED_EVENTS_UNIT: "calendar_interested_events_unit",
      CALENDAR_HOSTING_DRAFT_EVENTS_UNIT: "calendar_hosting_draft_events_unit",
      CALENDAR_HOSTING_EVENTS_UNIT: "calendar_hosting_events_unit",
      CALENDAR_HOSTING_PAST_EVENTS_UNIT: "calendar_hosting_past_events_unit",
      CALENDAR_PAST_EVENTS_UNIT: "calendar_past_events_unit",
      CALENDAR_TICKET_EVENTS_UNIT: "calendar_ticket_events_unit",
      MAP_LOCATION_SELECTOR: "map_location_selector",
      EVENT_CREATION_DETAILS_STEP: "event_creation_details_step",
      ATTRACTIONS_UNIT: "attractions_unit",
      FRIENDS_BEEN_AT_PLACE_UNIT: "friends_been_at_place_unit",
      NEIGHBORHOODS_UNIT: "neighborhoods_unit",
      RECENTLY_STARRED_UNIT: "recently_starred_unit",
      RECOMMENDED_BY_FRIENDS_UNIT: "recommended_by_friends_unit",
      RECOMMENDED_FOR_FRIENDS_UNIT: "recommended_for_friends_unit",
      LISTS_FROM_FRIENDS_UNIT: "lists_from_friends_unit",
      MAKE_PLAN_UNIT: "make_plan_unit",
      PHOTOS_FROM_FRIENDS_UNIT: "photos_from_friends_unit",
      SIMILAR_DESTINATIONS_UNIT: "similar_destinations_unit",
      POPULAR_HIGHLIGHTS_UNIT: "popular_highlights_unit",
      DESTINATIONS_NEARBY_UNIT: "destinations_nearby_unit",
      CITY_INFORMATION_UNIT: "city_information_unit",
      RECOMMENDED_LISTS_UNIT: "recommended_lists_unit",
      EVENTS_FROM_FOLLOWING_PAGES_UNIT: "events_from_places_and_groups_unit",
      EVENTS_FROM_CONNECTED_GROUPS_UNIT: "events_from_connected_groups_unit",
      ONLINE_HAPPENING_NOW_UNIT: "online_happening_now",
      ONLINE_DISCOVER_BY_RELEVANCE: "online_discover_by_relevance",
      ONLINE_DISCOVER_BY_POPULARITY: "online_discover_by_popularity",
      ONLINE_DISCOVER_WITH_FRIENDS: "online_discover_with_friends",
      ONLINE_DISCOVER_EYML: "online_discover_eyml",
      ONLINE_DISCOVER_BY_RELEVANCE_NO_LOCATION:
        "online_discover_by_relevance_no_location",
      ONLINE_DISCOVER_BY_POPULARITY_NO_LOCATION:
        "online_discover_by_popularity_no_location",
      EVENT_INFO_BAR: "event_info_bar",
      PERSONAL_EVENT_STORY: "personal_event_story",
      STORY_VIEWER_SHEET: "story_viewer_sheet",
      EVENT_STICKER: "event_sticker",
      SNACKBAR: "snackbar",
      SEND_AS_GROUP: "send_as_group",
      SEND_SEPARATELY: "send_separately",
      MESSAGE: "message",
      EVENT_MESSAGE_DIALOG: "event_message_dialog",
      CALENDAR_LIST: "calendar_list",
      CALENDAR_LIST_PAGING: "calendar_list_paging",
      BIRTHDAY_LIST_PAGING: "birthdays_list_paging",
      HOSTING_LIST_PAGING: "hosting_list_paging",
      UPCOMING_EVENTS_CARD: "upcoming_events_card",
      MESSAGE_FRIENDS_CARD: "message_friends_card",
      HOME_TAB_FEED_UNITS: "home_tab_feed_units",
      HOME_TAB_SEE_ALL_UPCOMING_EVENTS: "home_tab_see_all_upcoming_events",
      HOME_TAB_CATEGORIES: "home_tab_categories",
      HOME_EVENTS_NEARBY_MAP_VIEW: "home_events_nearby_map_view",
      RECENT_POSTS_CARD: "recent_posts_card",
      ALL_EVENTS_BY_HOST_UPCOMING: "all_events_by_host_upcoming",
      ALL_EVENTS_BY_HOST_PAST: "all_events_by_host_past",
      UPCOMING_TIMES_CARD: "upcoming_times_card",
      INTERCEPT_PAGE_COMPOSER: "intercept_page_composer",
      PAGE_COMPOSER_INTERCEPTION: "page_composer_interception",
      PAGE_POST_CTA_INTERCEPTION: "page_post_cta_interception",
      GROUP_POST_CTA_INTERCEPTION: "group_post_cta_interception",
      EVENT_REGISTRATION_PAGELET: "event_registration_pagelet",
      TICKETS_INFO_CARD: "tickets_info_card",
      TICKETS_PURCHASE_CARD: "tickets_purchase_card",
      ORDER_DETAILS_DIALOG: "order_details_dialog",
      ORDER_FOOD_CARD: "order_food_card",
      PEOPLE_FACEPILE_CARD: "people_facepile_card",
      PEOPLE_HSCROLL_CARD: "people_hscroll_card",
      PEOPLE_LIST_CARD: "people_list_card",
      MIGHT_BE_INTERESTED_CARD: "might_be_interested_card",
      GUEST_LIST_CARD: "guest_list_card",
      PHOTOS_OF_VENUE_CARD: "photos_of_venue_card",
      PHOTOS_OF_ROLES_CARD: "photos_of_roles_card",
      PHOTOS_GALLERY_CARD: "photos_gallery_card",
      MUSIC_CARD: "music_card",
      ABOUT_ROLES_CARD: "about_roles_card",
      ABOUT_VENUE_CARD: "about_venue_card",
      CROWDSOURCING_QUESTION_CARD: "crowdsourcing_question_card",
      DETAILS_CARD: "details_card",
      SURVEY_CARD: "survey_card",
      SELF_SERVE_ADMIN: "self_serve_admin",
      SELF_SERVE_MESSAGE_ROW: "self_serve_message_row",
      SELF_SERVE_TICKETING_ROW: "self_serve_ticketing_row",
      MARKETPLACE_TICKETS_LIST_ROW: "marketplace_tickets_list_row",
      GUEST_LIST_DIALOG: "guest_list_dialog",
      REGISTERED_GUEST_CARD: "registered_guest_card",
      LINE_UP: "line_up",
      PUBLISHING_TOOLS: "publishing_tools",
      PUBLISHING_TOOLS_UPSELL: "publishing_tools_upsell",
      ROW_PIVOT: "row_pivot",
      POST_TO_EVENT_REVIEW: "post_to_event_review",
      POST_TO_EVENT_POST: "post_to_event_post",
      POST_TO_EVENT_CLOSE: "post_to_event_close",
      EVENT_REVIEW: "event_review",
      CHILD_EVENT_HEADER: "child_event_header",
      CHILD_EVENT_FOOTER: "child_event_footer",
      POPULAR_DATES_WITH_FRIENDS: "popular_dates_with_friends",
      UPCOMING_CHILD_TIMES: "upcoming_child_times",
      CHILD_DATES_VIEW: "child_dates_view",
      CHILD_TIME_SERIES: "child_time_series",
      SIBLING_TIME_SERIES: "sibling_time_series",
      PRIVACY_TOAST: "privacy_toast",
      PRIVACY_SELECTOR: "privacy_selector",
      PRIVACY_BOTTOM_SHEET: "privacy_bottom_sheet",
      PRIVACY_STORIES_TOOLTIP: "privacy_stories_tooltip",
      PERMALINK_PRIVACY_ROW: "permalink_privacy_row",
      TRANSPARENCY_EVENT_HISTORY: "transparency_event_history",
      TRANSPARENCY_LEARN_MORE: "transparency_learn_more",
      CLASSES_INCLUDED_CARD: "classes_included_card",
      PART_OF_COURSE_CARD: "part_of_course_card",
      COURSE_AVAILABILITY_CARD: "course_availability_card",
      TOUR_ABOUT_CARD: "tour_about_card",
      TOUR_UPCOMING_EVENT_LIST_CARD: "tour_upcoming_event_list_card",
      TOUR_PAST_EVENT_LIST_CARD: "tour_past_event_list_card",
      TOUR_FEATURED_PAGES_CARD: "tour_featured_pages_card",
      TOUR_RECOMMENDED_EVENT_LIST_CARD: "tour_recommended_event_list_card",
      TOUR_ADMIN_ACTION_BAR: "tour_admin_action_bar",
      TOUR_NO_UPCOMING_EVENTS_CARD: "tour_no_upcoming_events_card",
      TOUR_EVENTS_VIDEO_PLUGIN: "tour_events_video_plugin",
      EVENT_TAP_ON_TOUR_PERMALINK_EVENT: "event_tap_on_tour_permalink_event",
      PAGE_COVER_AREA: "page_cover_area",
      SOCAL_QUICK_SEARCH_PIVOT_GRID: "socal_quick_search_pivot_grid",
      SOCAL_FEED_PIVOT_DAY_GUIDES: "socal_feed_pivot_day_guides",
      SOCAL_FEED_PIVOT_ACTIVITY_GUIDES: "socal_feed_pivot_activity_guides",
      SELF_SERVE_CHILD_ADMIN_HEADER_DROPDOWN:
        "self_serve_child_admin_header_dropdown",
      SELF_SERVE_CHILD_ADMIN_HEADER_BACK_LINK:
        "self_serve_child_admin_header_back_link",
      SELF_SERVE_ADMIN_CARD_PERMALINK: "self_serve_admin_card_permalink",
      SELF_SERVE_ADMIN_CHILD_LIST_TABLE: "self_serve_admin_child_list_table",
      SELF_SERVE_ICE_BREAKER_DIALOG: "self_serve_ice_breaker_dialog",
      SELF_SERVE_MESSAGE_LINK: "self_serve_message_link",
      SELF_SERVE_REQUEST_TICKETS_BUTTON: "self_serve_request_tickets_button",
      SOCIAL_ASSISTANT: "social_assistant",
      GROUP_POST: "group_post",
      MEETUP_ATTACHMENT: "meetup_attachment",
      UNIVERSAL_CREATION_HUB: "universal_creation_hub",
      REACH: "REACH",
      RESPONSES: "RESPONSES",
      TICKET_CLICKS: "TICKET_CLICKS",
      TICKET_BUYERS: "TICKET_BUYERS",
      SIGN_UPS: "SIGN_UPS",
      INVITATION_RECEIPT: "invitation_receipt",
      INVITATION_BOTTOM_ACTION_BAR: "invitation_bottom_action_bar",
      MESSAGE_BAR: "message_bar",
      NAVIGATION_BAR: "navigation_bar",
      ADD_LOCATION: "ADD_LOCATION",
      ADD_DESCRIPTION: "ADD_DESCRIPTION",
      SHORTEN_NAME: "SHORTEN_NAME",
      ADD_COVER_VIDEO: "ADD_COVER_VIDEO",
      ADD_POST: "ADD_POST",
      ADD_TICKETS: "ADD_TICKETS",
      ADD_FIRST_PARTY_TICKETS: "ADD_FIRST_PARTY_TICKETS",
      SHARE_EVENT: "SHARE_EVENT",
      SHARE_EVENT_ON_PAGE: "SHARE_EVENT_ON_PAGE",
      SHARE_EVENT_ON_GROUP: "SHARE_EVENT_ON_GROUP",
      ADD_COHOSTS: "ADD_COHOSTS",
      ADD_ASSOCIATED_COHOSTS: "ADD_ASSOCIATED_COHOSTS",
      ADD_POST_BEFORE_EVENT: "ADD_POST_BEFORE_EVENT",
      SHARE_BEFORE_EVENT: "SHARE_BEFORE_EVENT",
      ADD_POST_ALWAYS: "ADD_POST_ALWAYS",
      BOOST_EVENT: "BOOST_EVENT",
      ADD_COVER_PHOTO: "ADD_COVER_PHOTO",
      REPLY_TO_COMMENT: "REPLY_TO_COMMENT",
      SCHEDULE_POST: "SCHEDULE_POST",
      ADD_EXCLUSIVE_POST: "ADD_EXCLUSIVE_POST",
      SEND_FREE_ACCESS: "SEND_FREE_ACCESS",
      HEALTH_BLOOD_DONATION_OPPORTUNITIES_LIST:
        "health_blood_donation_opportunities_list",
      HEALTH_BLOOD_DONATION_OPPORTUNITY_DETAIL_SHEET:
        "health_blood_donation_opportunity_detail_sheet",
      HEALTH_BLOOD_DONATION_SOCIAL_PLAN_FLOW:
        "health_blood_donation_socail_plan_flow",
      HEALTH_BLOOD_DONATION_SOCIAL_PLAN_MENU:
        "health_blood_donation_social_plan_menu",
      GROUPS_GET_TOGETHER: "groups_get_together",
      EVENTS_ADMIN_TOOL: "events_admin_tool",
      EVENT_CAMPAIGN_COMPARISON_CARDS: "event_campaign_comparison_cards",
      SUGGESTED_EVENTS_HSCROLL: "SUGGESTED_EVENTS_HSCROLL",
      FRIENDS_EVENTS_HSCROLL: "FRIENDS_EVENTS_HSCROLL",
      PAGE_AND_GROUP_EVENTS_HSCROLL: "PAGE_AND_GROUP_EVENTS_HSCROLL",
      TICKETS_AVAILABLE_HSCROLL: "TICKETS_AVAILABLE_HSCROLL",
      RELATED_EVENTS_HSCROLL: "RELATED_EVENTS_HSCROLL",
      IN_FEED_RECOMMENDATION_EVENTS_HSCROLL:
        "IN_FEED_RECOMMENDATION_EVENTS_HSCROLL",
      EYML_CF_EVENTS_HSCROLL: "EYML_CF_EVENTS_HSCROLL",
      GENERAL_SUGGESTED_EVENTS_HSCROLL: "GENERAL_SUGGESTED_EVENTS_HSCROLL",
      TOP_CATEGORY_SUGGESTED_EVENTS_HSCROLL:
        "TOP_CATEGORY_SUGGESTED_EVENTS_HSCROLL",
      GAMES_SCHEDULE_EVENTS_HSCROLL: "GAMES_SCHEDULE_EVENTS_HSCROLL",
      GAMES_SCHEDULE_EVENTS_WWW: "GAMES_SCHEDULE_EVENTS_WWW",
      RELATED_PLACES_HSCROLL: "RELATED_PLACES_HSCROLL",
      UPCOMING_ONLINE_EVENTS_HSCROLL: "UPCOMING_ONLINE_EVENTS_HSCROLL",
      HAPPENING_ONLINE_NOW_HSCROLL: "HAPPENING_ONLINE_NOW_HSCROLL",
      SOCAL_TOPIC_ACTIVE: "socal_topic_active",
      SOCAL_TOPIC_EXHIBITS: "socal_topic_exhibits",
      SOCAL_TOPIC_FOLLOWING: "socal_topic_following",
      SOCAL_TOPIC_FOOD: "socal_topic_food",
      SOCAL_TOPIC_VDAY: "socal_topic_vday",
      SOCAL_TOPIC_FRIENDS: "socal_topic_friends",
      SOCAL_TOPIC_KIDS: "socal_topic_kids",
      SOCAL_TOPIC_LISTS: "socal_topic_lists",
      SOCAL_TOPIC_MOVIES: "socal_topic_movies",
      SOCAL_TOPIC_MUSIC: "socal_topic_music",
      SOCAL_TOPIC_NIGHTLIFE: "socal_topic_nightlife",
      SOCAL_TOPIC_PERFORMANCES: "socal_topic_performances",
      SOCAL_TOPIC_POPULAR: "socal_topic_popular",
      SOCAL_TOPIC_TIMEFRAME: "socal_topic_timeframe",
      SOCAL_TOPIC_THINGS_TO_DO: "socal_topic_things_to_do",
      SOCAL_TOPIC_BOOSTED_EVENT: "socal_topic_boosted_event",
      NT_EXAMPLE: "nt_example",
      EVENTS_ADMIN_TOOL_UPSELL_BAR: "events_admin_tool_upsell_bar",
      ACTIVE_POSTS: "active_posts",
      RECOMMENDED_ACTIONS: "recommended_actions",
      SCHEDULE_ROW: "schedule_row",
      EVENT_TICKET_SELECTION_DIALOG: "event_ticket_selection_dialog",
      EVENT_TICKET_SEAT_DETAILS_DIALOG: "event_ticket_seat_details_dialog",
      VALUE_PROP_DIALOG: "value_prop_dialog",
      TOWNHALL_HSCROLL: "townhall_hscroll",
      ADMIN_GUEST_LIST: "admin_guest_list",
      RESERVE_A_SPOT_DIALOG: "reserve_a_spot_dialog",
      RESERVE_A_SPOT_BOTTOM_SHEET: "reserve_a_spot_bottom_sheet",
      VIEW_CONFIRMATION_DIALOG: "view_confirmation_dialog",
      VIEW_CONFIRMATION_BOTTOM_SHEET: "view_confirmation_bottom_sheet",
      UPCOMING_EVENTS_CABOOSE_ITEM: "UPCOMING_EVENTS_CABOOSE_ITEM",
      MP_TICKETING_EVENT_SECTION_ITEM: "mp_ticketing_event_section_item",
      MP_TICKETING_EVENT_UPSELL_ITEM: "mp_ticketing_event_upsell_item",
      VOLUNTEERING_PAGE_EVENT_UPSELL: "volunteering_page_event_upsell",
      FAMILY_FRIENDLY_ROW: "family_friendly_row",
      AGES_18_PLUS_ROW: "ages_18_plus_row",
      AGES_21_PLUS_ROW: "ages_21_plus_row",
      PROFILE_PLUS_EVENTS_PIVOT_PERMALINK:
        "profile_plus_events_pivot_permalink",
      PROFILE_PLUS_PROFESSIONAL_HOME: "profile_plus_professional_home",
      PROFILE_PLUS_PINNED_FEATURE_EVENTS_PREVIEW_CARD:
        "profile_plus_pinned_feature_events_preview_card",
      COLLEGES_GYSJ: "colleges_gysj",
      CAMPUS_LEFT_RAIL: "campus_left_rail",
      VIRTUAL_JOB_FAIR_CARD: "virtual_job_fair_card",
      POSTS_FROM_PAGE: "posts_from_page",
      PLACE_REVIEWS: "place_reviews",
      VISIT_DELIVERY_LINK: "visit_delivery_link",
      VIEW_DELIVERY_SECTION: "view_delivery_section",
      ACELA_INSIGHTS: "acela_insights",
      LIVE_PRODUCER_ONLINE_EVENT_CREATE: "live_producer_online_event_create",
      LIVE_PRODUCER_ONLINE_EVENT_EDIT: "live_producer_online_event_edit",
      LIVE_FULLSCREEN_EVENT_CONTEXT: "live_fullscreen_event_context",
      LIVE_BROADCASTER_END_SCREEN: "live_broadcaster_end_screen",
      LIVE_BROADCASTER_COMPOSER: "live_broadcaster_composer",
      LIVE_BROADCASTER_NOTIFICATION: "live_broadcaster_notification",
      PAY_TO_ACCESS_PURCHASE_FLOW: "pay_to_access_purchase_flow",
      PAY_TO_ACCESS_PURCHASE_FLOW_WWW: "pay_to_access_purchase_flow_www",
      PAY_TO_ACCESS_NONPAID_LIVE_PREVIEW: "pay_to_access_nonpaid_live_preview",
      PAY_TO_ACCESS_REDEEM_FLOW: "pay_to_access_redeem_flow",
      PAY_TO_ACCESS_REDEEM_FLOW_WWW: "pay_to_access_redeem_flow_www",
      PAY_TO_ACCESS_GIFTING_CARD: "pay_to_access_gifting_card",
      PAY_TO_ACCESS_GIFTING_SEARCH_FRIEND_BOTTOM_SHEET:
        "pay_to_access_gifting_search_friend_bottom_sheet",
      PAY_TO_ACCESS_GIFTING_PURCHASE_FLOW:
        "pay_to_access_gifting_purchase_flow",
      PAY_TO_ACCESS_GROUP_PURCHASE_SEARCH_BOTTOM_SHEET:
        "pay_to_access_group_purchase_search_bottom_sheet",
      PAY_TO_ACCESS_ENABLE_PAID_ACCESS: "pay_to_access_enable_paid_access",
      PAY_TO_ACCESS_INTERNAL_TOOL_DRILLDOWN:
        "pay_to_access_internal_tool_drilldown",
      POE_PRICE_DROP_DOWN: "poe_price_drop_down",
      POE_EVENT_CREATION_DISCOUNTS: "poe_event_creation_discounts",
      POE_MANAGE_DISCOUNTS_DIALOG: "poe_manage_discounts_dialog",
      POE_EVENT_CREATION_ONBOARDING_UPSELL_DIALOG:
        "poe_event_creation_onboarding_upsell_dialog",
      POE_EVENT_CREATION_DEFERRED_PAYOUTS_DIALOG:
        "poe_event_creation_deferred_payouts_dialog",
      POE_EVENT_CREATION_DEFERRED_PAYOUTS_ONBOARDING_DIALOG:
        "poe_event_creation_deferred_payouts_onboarding_dialog",
      POE_EVENT_CREATION_NEW_DEFERRED_PAYOUTS_ONBOARDING_DIALOG:
        "poe_event_creation_new_deferred_payouts_onboarding_dialog",
      POE_EVENT_CREATION_INTERCEPT_DIALOG:
        "poe_event_creation_intercept_dialog",
      POE_DEFERRED_PAYOUTS_ONBOARDING_SCREEN:
        "poe_deferred_payouts_onboarding_screen",
      POE_ONBOARDING_SCREEN: "poe_onboarding_screen",
      POE_EVENT_CREATION_DEFERRED_PAYOUTS_EDIT_PERSONAL_INFO_DIALOG:
        "poe_event_creation_deferred_payouts_edit_personal_info_onboarding_dialog",
      POE_STANDALONE_ONBOARDING: "poe_standalone_onboarding",
      POE_DEFERRED_PAYOUTS_ONBOARDING: "poe_deferred_payouts",
      POE_FULL_ONBOARDING: "poe_full_onboarding",
      POE_ANNOUNCEMENT_CARD: "poe_announcement_card",
      POE_NOTIFICATION_BANNER: "poe_notification_banner",
      POE_INSPIRATION_UNIT: "poe_inspiration_unit",
      POE_TAB_NUX_MESSAGE: "poe_tab_nux_message",
      POE_TEST_EVENT: "poe_test_event",
      POE_TEST_EVENT_PRESELECTED: "poe_test_event_preselected",
      POE_TEST_EVENT_HIGHLIGHTED: "poe_test_event_highlighted",
      POE_TAB_VPVD_VIEW: "poe_tab_vpvd_view",
      POE_STORY_BUMPER: "poe_story_bumper",
      POE_FAQS_CARD: "poe_faqs_card",
      POE_FAQS_EDITOR_DIALOG: "poe_faqs_editor_dialog",
      POE_FAQS_EDITOR_CONFIRM_DELETE_DIALOG:
        "poe_faqs_editor_confirm_delete_dialog",
      POE_FAQS_EDITOR_ITEM_MENU: "poe_faqs_editor_item_menu",
      POE_FAQS_EDITOR_DISCARD_CHANGES_DIALOG:
        "poe_faqs_editor_discard_changes_dialog",
      POE_FAQS_SEARCH_DIALOG: "poe_faqs_search_dialog",
      EVENTS_ADMIN_TOOL_OVERVIEW_TAB: "events_admin_tool_overview_tab",
      EVENTS_ADMIN_TOOL_POE_TAB: "events_admin_tool_poe_tab",
      EVENT_MESSENGER_ROOM_PAGE_CONSENT_DIALOG:
        "event_messenger_room_page_consent_dialog",
      EVENT_MESSENGER_ROOM_PAGE_CONSENT_COHOST_DIALOG:
        "event_messenger_room_page_consent_cohost_dialog",
      STARS_QUICK_ONBOARDING_DIALOG: "stars_quick_onboarding_dialog",
      EVENT_OFFLINE_TO_ONLINE_REGEX_INTERCEPTION:
        "event_offline_to_online_interception",
      EVENT_OFFLINE_TO_ONLINE_REGEX_AUTO_CONVERSION:
        "event_offline_to_online_auto_conversion",
      EVENT_OFFLINE_TO_ONLINE_ML_NOTIFICATION_PROMPT:
        "event_offline_to_online_ml_notification_prompt",
      EVENT_GROUPED_LIST_ONLINE_SELECTOR: "event_grouped_list_online_selector",
      EVENT_SCHEDULE_ROOM_TO_EVENT: "event_schedule_room_to_event",
      CATEGORIZED_GYSJ: "categorized_gysj",
      GROUPS_TAB_EVENTS_ENGAGEMENT_UNIT: "groups_tab_events_engagement_unit",
      GROUPS_YOU_SHOULD_JOIN_UNIT: "groups_you_should_join_unit",
      OCULUS_GYSJ: "oculus_gysj",
      DISCOVERY_HUB_EVENTS_HSCROLL: "discovery_hub_events_hscroll",
      EVENTS_HAPPENING_NOW_UNIT: "events_happening_now_unit",
      MORE_OPTIONS_BUTTON: "more_options_button",
    });
    f["default"] = a;
  },
  66
);
__d(
  "EventsLoggerActionSurface",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      UNKNOWN: "unknown",
      CAMERA: "camera",
      PERMALINK: "permalink",
      TOUR_PERMALINK: "tour_permalink",
      DASHBOARD: "dashboard",
      DASHBOARD_NEARBY: "dashboard_nearby",
      TARGETED_TAB: "targeted_tab",
      BOOKMARKS_MENU: "bookmarks_menu",
      BOOKMARK_NOTIFICATIONS: "bookmark_notifications",
      NEWSFEED: "newsfeed",
      NEWS_FEED: "news_feed",
      NETEGO_SUGGESTION: "netego_suggestion",
      SURFACE_NULL: "null",
      NOTIFICATIONS: "notifications_tab",
      PUSH_NOTIFICATIONS: "push_notifications",
      SEARCH: "search",
      VIDEO_HOME_SEARCH: "video_home_search",
      CREATE_DIALOG: "create_dialog",
      EDIT_DIALOG: "edit_dialog",
      CANCEL_DIALOG: "cancel_dialog",
      INVITE_DIALOG: "invite_dialog",
      INVITE_FREE_MEMBERS_DIALOG: "invite_free_members_dialog",
      COMBINED_SHARE_DIALOG: "combined_share_dialog",
      EVENT_POST_REACH_FOOTER: "event_post_reach_footer",
      PAGE: "page",
      PAGE_RECOMMENDED_ACTIONS: "page_recommended_actions",
      PAGE_SETTING: "page_setting",
      TIMELINE: "timeline",
      USER_TIMELINE: "user_timeline",
      GROUP: "group",
      GROUPS_COMPOSER: "groups_composer",
      GROUPS_LANDING: "groups_landing",
      GROUP_TAB_FEED: "group_tab_feed",
      GROUP_ROOMS: "group_rooms",
      MESSAGE_DIALOG: "message_dialog",
      EVENT_MESSAGE_COMPOSER: "event_message_composer",
      ACTIVITY_LOG: "activity_log",
      MESSAGING: "messaging",
      THREAD_SETTINGS: "thread_settings",
      EMAIL: "email",
      EXTERNAL: "external",
      EXTERNAL_INFRASTRUCTURE: "external_infrastructure",
      EXTERNAL_SEARCH_ENGINE: "external_search_engine",
      SNOWFLAKE: "snowflake",
      IN_APP_BROWSER: "in_app_browser",
      SIDEBAR: "sidebar",
      COMPOSER: "composer",
      ENTITY_CARD: "entity_card",
      TODAY_CARD: "today_card",
      ERROR_DIALOG: "error_dialog",
      GUEST_LIST: "guest_list",
      PHOTO_VIEWER: "photo_viewer",
      STORY_FLYOUT: "story_flyout",
      MICROSITE: "microsite",
      BOOKMARKS_SEE_ALL: "bookmarks_see_all",
      PAGES_COMPOSER: "pages_composer",
      PAGES_COMPOSER_EVENT_INTERCEPT: "pages_composer_event_intercept",
      PAGES_POST: "pages_post",
      POST_PAGE: "post_page",
      INGESTION: "ingestion",
      PROFILE_BROWSER: "profile_browser",
      PROFILE_DISCOVERY: "profile_discovery",
      FRIENDSHIP_PAGES: "friendship_pages",
      UNIT_TEST: "unit_test",
      E2E_TEST: "e2e_test",
      HOVERCARD: "hovercard",
      REPORT_FLOW: "report_flow",
      FRIENDS_ACTIVITIES: "friend_activities",
      INTERN_EVENT_PAGE: "intern_event_page",
      ADD_TO_PAGE_DIALOG: "add_to_page_dialog",
      HOME: "home",
      EMAIL_COMPOSER: "email_composer",
      EMAIL_PERMALINK: "email_permalink",
      ASYNC_JOB: "async_job",
      TICKER: "ticker",
      SETTINGS: "settings",
      LOGIN: "login",
      GAMETIME: "gametime",
      DISCOVER_FILTER_LIST: "discover_filter_list",
      INSIGHTS_TAB: "insights_tab",
      INSIGHTS_DASHBOARD: "insights_dashboard",
      INSIGHTS_DRILLDOWN: "insights_drilldown",
      INSIGHTS_REC_ACTIONS_CARD: "insights_rec_actions_card",
      ME_TAB: "me_tab",
      EVENT_DISCOVER_QUERY: "event_discover_query",
      BIRTHDAY_DASHBOARD: "birthday_dashboard",
      LOCAL_PAGE: "local_serp",
      LOCAL_SURFACE: "local_surface",
      SHARE_LINK: "share_link",
      MOVIE_PERMALINK: "movie_permalink",
      SOCAL: "socal",
      SOCAL_PROFILE: "socal_profile",
      SOCAL_HOME: "socal_home",
      SOCAL_GUIDE: "socal_guide",
      SOCAL_HOME_DEFAULT_TAB: "socal_home_default_feed_tab",
      SOCAL_HOME_EVENTS_FEED_TAB: "socal_home_events_feed_tab",
      SOCAL_HOME_GUIDES_FEED_TAB: "socal_home_guides_feed_tab",
      SOCAL_HOME_PLACES_FEED_TAB: "socal_home_places_feed_tab",
      SOCAL_YOUR_PLACES_TAB: "socal_your_places_tab",
      SOCAL_YOUR_LISTS_TAB: "socal_your_lists_tab",
      SOCAL_SEE_ALL_LISTS: "socal_see_all_lists",
      SOCAL_LOCAL_LIST_CREATION: "socal_local_list_creation",
      SOCAL_SMART_EVENTS_LIST: "socal_smart_events_list",
      SOCAL_SMART_PLACES_LIST: "socal_smart_places_list",
      SOCAL_CONTAINED_IN_LIST: "socal_contained_in_list",
      SOCAL_FEED_DAY_GUIDE: "socal_feed_pivot_day_guides",
      SOCAL_FEED_ACTIVITY_GUIDE: "socal_feed_pivot_activity_guides",
      SOCAL_PUSH_NOTIFICATIONS: "socal_push_notifications",
      SOCAL_SEARCH: "socal_search",
      SOCAL_SEARCH_KEYWORD_RESULTS: "socal_search_keyword_results",
      SOCAL_SEARCH_KEYWORD_RESULTS_MAP: "socal_search_keyword_results_map",
      SOCAL_PLACES_SERP_LIST: "socal_places_serp_list",
      SOCAL_PLACES_SERP_MAP: "socal_places_serp_map",
      SOCAL_EVENTS_FEED: "socal_events_feed",
      SOCAL_CALENDAR: "socal_calendar",
      SOCAL_DISCOVERY: "socal_discovery",
      SOCAL_EVENTS_SERP_LIST: "socal_events_serp_list",
      SOCAL_EVENTS_SERP_MAP: "socal_events_serp_map",
      SOCAL_ENTITY_PREVIEW_EVENT: "socal_entity_preview_event",
      SOCAL_ENTITY_PREVIEW_PLACE: "socal_entity_preview_place",
      SOCAL_ENTITY_PREVIEW_MOVIE: "socal_entity_preview_movie",
      SOCAL_SETTINGS: "socal_settings",
      SOCAL_PLACE_PERMALINK: "socal_place_permalink",
      SOCAL_LANDING_PAGE: "socal_landing_page",
      SOCAL_LANDING_PAGE_MTOUCH: "socal_landing_page_mtouch",
      SOCAL_EVENTS_PENDING_INVITES: "socal_events_pending_invites",
      SOCAL_MAP: "socal_map",
      SOCAL_UNIFIED_EVENTS_SERP_LIST: "socal_unified_events_serp_list",
      SOCAL_UNIFIED_PLACES_SERP_LIST: "socal_unified_places_serp_list",
      CAMPUS_FEED: "campus_feed",
      PERMALINK_CARD_ALL_EVENTS_BY_HOST: "permalink_card_all_events_by_host",
      PERMALINK_CARD_ATTEND_FUTURE_EVENTS:
        "permalink_card_attend_future_events",
      PERMALINK_CARD_MEET_YOUR_HOSTS: "permalink_card_meet_your_hosts",
      POE_ONBOARDING: "poe_onboarding",
      NEWS_FEED_RSVP_BOTTOM_SHEET: "news_feed_rsvp_bottom_sheet",
      PERMALINK_RSVP_BOTTOM_SHEET: "permalink_rsvp_bottom_sheet",
      NEWS_FEED_TRIGGERED_CTA: "news_feed_triggered_cta",
      NEWS_FEED_GET_ACCESS_CTA: "news_feed_get_access_cta",
      POE_NEWS_FEED_PROMOTIONAL_POST_CTA: "poe_story_bumper_promotional_post",
      POE_EXCLUSIVE_POSTS_TAB: "poe_exclusive_posts_tab",
      POE_PAYWALL: "poe_paywall",
      POE_RSVP_CONVERSION_QP: "poe_rsvp_conversion_qp",
      POE_RECONVERSION_QP: "poe_reconversion_qp",
      POE_PAST_LIVE_EVENT_QP: "poe_past_live_event_qp",
      POE_PERMALINK_DROPOFF_QP: "poe_permalink_dropoff_qp",
      POE_HIGH_MPS_QP: "poe_high_mps_qp",
      PAY_TO_ACCESS_INTERNAL_TOOL: "pay_to_access_internal_tool",
      EXIT_EVENT_CREATION_CONFIRMATION_DIALOG:
        "exit_event_creation_confirmation_dialog",
      POE_INCENTIVE_PROGRAM_DESTINATION_CARD:
        "poe_incentive_program_destination_card",
      POE_INCENTIVE_PROGRAM_PERMALINK_CARD:
        "poe_incentive_program_permalink_card",
      POE_FAQS_CARD: "poe_faqs_card",
      POE_FAQS_EDITOR_DIALOG: "poe_faqs_editor_dialog",
      POE_FAQS_EDITOR_CONFIRM_DELETE_DIALOG:
        "poe_faqs_editor_confirm_delete_dialog",
      POE_FAQS_EDITOR_ITEM_MENU: "poe_faqs_editor_item_menu",
      POE_FAQS_EDITOR_DISCARD_CHANGES_DIALOG:
        "poe_faqs_editor_discard_changes_dialog",
      POE_FAQS_SEARCH_DIALOG: "poe_faqs_search_dialog",
      CREATOR_STUDIO_MONETIZATION_HOME: "creator_studio_monetization_home",
      TRANSPARENCY_HOME: "transparency_home",
      TRANSPARENCY_DETAILS_BOTTOM_SHEET: "transparency_details_bottom_sheet",
      SOCAL_CITY_GUIDE: "socal_city_guide",
      SOCAL_CITY_GUIDE_RECOMMENDED: "socal_city_guide_recommended",
      SOCAL_CITY_GUIDE_MY_PROFILE: "socal_city_guide_my_profile",
      SOCAL_CITY_GUIDE_FRIENDS: "socal_city_guide_friends",
      SOCAL_CITY_GUIDE_EVENTS: "socal_city_guide_events",
      BUY_TICKETS: "buy_tickets",
      SMS_PERMALINK: "sms_permalink",
      AYMT_TIP: "aymt_tip",
      ANDROID_COPY_LINK: "android_copy_link",
      ANDROID_ACTION_SHEET: "android_action_sheet",
      IOS_COPY_LINK: "ios_copy_link",
      IOS_ACTION_SHEET: "ios_action_sheet",
      WHATSAPP_SHARE_LINK: "whatsapp_share_link",
      EVENT_COLLECTIONS: "events_collection",
      CALL_TAB: "call_tab",
      CONTEXTUAL_RECOMMENDATIONS: "contextual_recommendations",
      MESSENGER_CHAT_TAB: "messenger_chat_tab",
      SCHEDULED_QUEUE: "scheduled_queue",
      PAGES_BROWSER: "pages_browser",
      AYMT_HOMEPAGE_PANEL: "aymt_homepage_panel",
      CITY_GUIDES: "city_guides",
      EVENTS_GUIDE: "events_guide",
      FACEBOOK_STORY: "facebook_story",
      MESSENGER_STORY: "messenger_story",
      EVENT_STORY_LANDING: "event_story_landing",
      EVENT_STORY_EDITING: "event_story_editing",
      EVENT_MESSAGE_DIALOG: "event_message_dialog",
      FACEBOOK_DIRECT: "facebook_direct",
      HOLIDAY: "holiday",
      HOLIDAY_NEW_YEAR: "holiday_new_year",
      EVENTS_CAMPAIGN: "events_campaign",
      REACTIONS_NOTIF_LANDING: "reactions_notif_landing",
      EVENT_CREATE_NOTIF_LANDING: "event_create_notif_landing",
      SUBSRIPTIONS: "subscriptions",
      EVENTS_TICKETING_CAMPAIGN: "events_ticketing_campaign",
      MULTI_JOIN_NEARBY: "multi_join_nearby",
      POST_EVENT_NOTIF_LANDING: "post_event_notif_landing",
      EVENTS_AGGREGATE_LANDING: "events_aggregate_landing",
      EVENTS_CALENDAR_CREATE_LANDING: "events_calendar_create_landing",
      MARKETPLACE: "marketplace",
      TICKETS_REGISTRATION_SETTINGS: "tickets_registration_settings",
      SELF_SERVE_ADMIN: "self_serve_admin",
      SELF_SERVE_ADMIN_STATS_CARD: "self_serve_admin_stats_card",
      SELF_SERVE_ADMIN_STATS_NAV: "self_serve_admin_stats_nav",
      SELF_SERVE_REGISTRATION_TAB: "self_serve_registration_tab",
      SELF_SERVE_ICE_BREAKER_DIALOG: "self_serve_ice_breaker_dialog",
      TOP_TOOLBAR: "top_toolbar",
      MESSENGER_COM: "messenger_com",
      LIGHTWEIGHT_EVENT_SETTINGS: "lightweight_event_settings",
      REGISTRATION_IN_GUESTLIST_DIALOG: "registration_in_guestlist_dialog",
      MARKETPLACE_TICKETS: "marketplace_tickets",
      EVENTS_STORIES_AVATAR: "events_stories_avatar",
      LOCAL_GUIDES: "local_guides",
      APP_INTEGRATION_IMPORTER: "app_integration_importer",
      REGISTRATION_IN_CARD: "registration_management_link_in_card",
      EVENT_PERMALINK_REGISTRATION_TAB: "event_permalink_registration_tab",
      FACEPILE_IN_GUEST_LIST: "facepile_in_guest_list",
      FACEPILE_IN_SOCIAL_CONTEXT_ROW: "facepile_in_social_context_row",
      SOCIAL_CONTEXT_ROW_TITLE: "social_context_row_title",
      INVITE_FLOW: "invite_flow",
      MAKE_PLANS_FLOW: "make_plans_flow",
      PUBLISHING_TOOLS: "publishing_tools",
      CIVIC_ENGAGEMENT: "civic_engagement",
      MIGHT_BE_INTERESTED_LIST: "might_be_interested_list",
      INSTANT_ARTICLE: "instant_article",
      LOCAL_BOOKMARK: "local_bookmark",
      COMPARISON_CARDS: "comparison_cards",
      EVENTS_INSTANCES: "events_instances",
      COVER_PHOTO_PICKER_DIALOG: "cover_photo_picker_dialog",
      VOYAGER: "voyager",
      VOYAGER_TRENDING: "voyager_trending",
      RECURRENT_EVENT_DATES: "recurrent_event_dates",
      RSVP_PREFERENCES_SHEET: "rsvp_preferences_sheet",
      EXPORT_UPCOMING_MIGRATION: "export_upcoming_migration",
      CHECKIN_POST: "checkin_post",
      FACEBAR_SERP: "facebar_serp",
      EVENT_ONLINE_DIGEST: "event_online_digest",
      MARKETPLACE_LIVE_SHOPPING: "marketplace_live_shopping",
      EVENTS_ONLINE_TEST: "events_online_test",
      BOOKMARK: "bookmark",
      BOOKMARK_SEARCH: "bookmark_search",
      BOOKMARK_CALENDAR: "bookmark_calendar",
      CALENDAR: "calendar",
      OUTLOOK_CALENDAR: "outlook_calendar",
      SEARCH_RESULTS: "search_results",
      BOOKMARK_CALENDAR_HOSTING: "bookmark_calendar_hosting",
      BOOKMARK_CALENDAR_HOSTING_PAST: "bookmark_calendar_hosting_past",
      BOOKMARK_CALENDAR_GOING: "bookmark_calendar_going",
      BOOKMARK_CALENDAR_INVITES: "bookmark_calendar_invites",
      BOOKMARK_CALENDAR_INTERESTED: "bookmark_calendar_interested",
      BOOKMARK_CALENDAR_PAST: "bookmark_calendar_past",
      BOOKMARK_FEATURED: "bookmark_featured",
      BOOKMARK_BIRTHDAYS: "bookmark_birthdays",
      PUBLISHED_EVENTS_TAB: "published_events_tab",
      DRAFT_EVENTS_TAB: "draft_events_tab",
      SCHEDULED_EVENTS_TAB: "scheduled_events_tab",
      ARCHIVED_EVENTS_TAB: "archived_events_tab",
      TOUR_EVENTS_TAB: "tour_events_tab",
      TOURS_TAB: "tours_tab",
      TICKET_ORDER: "ticket_order",
      MAKE_PLAN_DIALOG: "make_plan_dialog",
      ASSISTANT_MESSENGER: "assistant_messenger",
      SOCIAL_VIDEO_PLAYER: "social_video_player",
      AGORA_SURFACE: "agora_surface",
      AGORA_DAILY_DIGEST: "agora_daily_digest",
      ATHENS_SURFACE: "athens_surface",
      PREDICTED_MEETUP: "predicted_meetup",
      NOVEL_INTERN_ONLY: "novel_intern_only",
      SOCIAL_ASSISTANT: "social_assistant",
      SAVED_DASHBOARD: "saved_dashboard",
      PAGE_INLINE_COMPOSER_MOBILE: "page_inline_composer_mobile",
      CLASS_FEEDBACK_INSIGHTS: "class_feedback_insights",
      COURSE_DETAILS: "course_details",
      CLASS_DETAILS: "class_details",
      ANDROID_PAGE_HOME: "ANDROID_PAGE_HOME",
      IOS_PAGE_HOME: "IOS_PAGE_HOME",
      UNIVERSAL_CREATION_HUB_DROPDOWN: "universal_creation_hub_dropdown",
      ADD_TICKETS_AUTH_CARD: "add_tickets_auth_card",
      ADD_TICKETS_MANAGEMENT_CARD: "add_tickets_management_card",
      REACH_TAB: "reach_tab",
      RESPONSE_TAB: "response_tab",
      TICKET_TAB: "ticket_tab",
      POWEREDBY_TICKET_ORDER_LIST: "poweredby_ticket_order_list",
      HEALTH_BLOOD_DONATION_HUB: "health_blood_donation_hub",
      GROUPS_GET_TOGETHER: "groups_get_together",
      EVENTS_ADMIN_TOOL: "events_admin_tool",
      EVENTS_MOBILE_ADMIN_TOOL: "events_mobile_admin_tool",
      EVENTS_COMET_ADMIN_TOOL: "events_comet_admin_tool",
      SEARCH_VOYAGER: "search_voyager",
      EVENTS_MANAGE_HUB: "events_manage_hub",
      GAMES_FEED: "games_feed",
      GAMES_VIDEO_HOME: "games_video_home",
      GAMING_ARENA: "gaming_arena",
      NT_EXAMPLE: "nt_example",
      MESSENGER_LIGHTSPEED_XMA: "messenger_lightspeed_xma",
      MESSENGER_NT_XMA: "messenger_nt_xma",
      EVENT: "event",
      VALUE_PROP_DIALOG: "value_prop_dialog",
      EVENT_TICKET_SELECTION_DIALOG: "event_ticket_selection_dialog",
      EVENT_TICKET_SEAT_DETAILS_DIALOG: "event_ticket_seat_details_dialog",
      TOWNHALL: "townhall",
      AFTER_CREATE_PERMALINK_UPSELL: "after_create_permalink_upsell",
      PERMALINK_UPSELL_REENGAGEMENT: "permalink_upsell_reengagement",
      ADMIN_GUEST_LIST: "admin_guest_list",
      GROUPS_TARGETED_TAB: "groups_targeted_tab",
      VR_OCULUS_COMPANION_APP: "vr_oculus_companion_app",
      VR_OCULUS_MOBILE_3D: "vr_oculus_mobile_3d",
      VR_OCULUS_PC_2D: "vr_oculus_pc_2d",
      VR_OCULUS_PC_3D: "vr_oculus_pc_3d",
      VR_TOGETHER: "vr_together",
      VR_OCULUS_WEB: "vr_oculus_web",
      WHY_AM_I_SEEING_THIS_AD: "why_am_i_seeing_this_ad",
      MP_TICKETING_CATEGORY_FEED: "mp_ticketing_category_feed",
      MP_TICKETING_BROWSE_FEED: "mp_ticketing_browse_feed",
      MP_TICKETING_SEARCH_FEED: "mp_ticketing_search_feed",
      MP_TICKETING_L1_CATEGORY_FEED: "mp_ticketing_l1_category_feed",
      MP_TICKETING_PDP: "mp_ticketing_pdp",
      COHOST_REQUEST_LIST: "cohost_request_list",
      LIVE_VIDEO_EVENT_PROMOTION: "live_video_event_promotion",
      LIVE_VIDEO_MOBILE_COMPOSER: "live_video_mobile_composer",
      LIVE_VIDEO_FULLSCREEN: "live_video_fullscreen",
      LIVE_PRODUCER: "live_producer",
      LIVE_PRODUCER_UPCOMING_EVENTS: "live_producer_upcoming_events",
      WWW_URL_DEEP_LINK: "www_url_deep_link",
      FB_URL_DEEP_LINK: "fb_url_deep_link",
      TRAVELX_CHECKIN_TRIGGERED_CTA: "travelx_checkin_triggered_cta",
      PROFILE_PLUS_EVENTS_PIVOT_PERMALINK:
        "profile_plus_events_pivot_permalink",
      PROFILE_PLUS_EVENTS_PROFILE_TILE: "profile_plus_events_profile_tile",
      PROFILE_PLUS_PROFESSIONAL_HOME: "profile_plus_professional_home",
      PROFILE_PLUS_PINNED_FEATURE_EVENTS_PREVIEW_CARD:
        "profile_plus_pinned_feature_events_preview_card",
      TIMELY_SUGGESTIONS: "timely_suggestions",
      CORONAVIRUS_HUB: "coronavirus_hub",
      ACELA: "acela",
      NEWS_TAB: "news_tab",
      OCULUS_HUB: "oculus_hub",
      PFBNY: "pfbny",
      PAYCHECK_PROTECTION_PROGRAM: "paycheck_protection_program",
      CONSUMER_SURFACE: "consumer_surface",
      RACIAL_JUSTICE_HUB: "racial_justice_hub",
      SONG_OBJECT: "song_object",
      HASHTAG_DEEP_DIVE: "hashtag_deep_dive",
      LOCO_HSCROLL_FEED_UNIT: "loco_hscroll_feed_unit",
      NBA_HUB: "nba_hub",
      DISCOVERY_HUB: "discovery_hub",
      OLYMPICS_HUB: "olympics_hub",
      BIZ_DISCO: "biz_disco",
      FUNDRAISER_HUB: "fundraiser_hub",
      VIDEO_FEED: "video_feed",
      FUNDRAISER_YEAR_REVIEW: "fundraiser_year_review",
      GRATITUDE_LIBRARY: "gratitude_library",
      HUDDLE_ROOM: "huddle_room",
      GROUPS_YOU_SHOULD_JOIN_SEE_ALL: "groups_you_should_join_see_all",
      GROUPS_HIGHLIGHT_UNITS: "groups_highlight_units",
      SUPPORT_FOR_PERSONALIZED_ADS: "support_for_personalized_ads",
      TRIGGER_LAST_ADMIN_DELETED: "trigger_last_admin_deleted",
      EVENT_CREATION_DETAILS_STEP: "event_creation_details_step",
    });
    f["default"] = a;
  },
  66
);
__d(
  "EventCometActionLogger",
  [
    "EventsLoggerActionMechanism",
    "EventsLoggerActionSurface",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("EventsActionsSrCoreFalcoEvent").__setRef(
        "EventCometActionLogger"
      ),
      i = { mechanism: "unknown", surface: "unknown" },
      j = 3;
    function a(a, b) {
      var c = [].concat(a.event_action_history || []);
      c.length >= j && (c = c.slice(c.length - j + 1));
      var d = k(a);
      c.push({
        event_tracking: d.event_tracking,
        extra_data: d.extra_data,
        mechanism: b.mechanism,
        surface: b.surface,
      });
      return babelHelpers["extends"]({}, a, { event_action_history: c });
    }
    function k(a) {
      a = a.event_action_history;
      if (a == null || a[a.length - 1] == null) return i;
      return a.length >= 2 ? a[a.length - 2] : a[a.length - 1];
    }
    function b(a, b, d) {
      var e = k(b.acontext),
        f = "unknown";
      e.mechanism != null &&
        (e.mechanism === "null"
          ? (f = "null")
          : (f = c("EventsLoggerActionMechanism")[e.mechanism.toUpperCase()]));
      var g = "unknown";
      e.surface != null &&
        (g = c("EventsLoggerActionSurface")[e.surface.toUpperCase()]);
      h.onReady(function (c) {
        return c.log(function () {
          return {
            action_target: b.target,
            action_type: b.type,
            callsite_identifier: "297102331577706",
            event_id: a,
            extras: d,
            mechanism: b.mechanism != null ? b.mechanism : "unknown",
            ref_mechanism: f,
            ref_surface: g,
            surface: b.surface != null ? b.surface : "unknown",
          };
        });
      });
    }
    g.createForNewSurface = a;
    g.log = b;
  },
  98
);
__d(
  "PFCExpressionsLoggerEvent",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ADMIN_IN_HOLDOUT: "Admin manages a PF in team holdout",
      ADMIN_MANAGES_MULTI_AP:
        "Admin manages other AP besides the PF in locked set",
      ADMIN_MANAGES_MULTI_PF: "Admin manages multiple PF in locked set",
      ADMIN_NOT_VALID: "Admin does not manage a PF in locked set",
      ADMIN_VALID: "Admin is eligible",
      ALREADY_POSTED: "Content was posted by viewer",
      ALREADY_SHARED: "Already shared by viewer",
      AUTHOR_NOT_VALID: "Author is not P+/Page for admin viewers",
      CLICK: "Click",
      CONTENT_IS_SPONSORED: "Content is sponsored",
      FAIL_INTEGRITY: "Fail Integrity",
      FAIL_RANDOM_THRESHOLD: "Fail Random Threshold",
      FAIL_SCORE_THRESHOLD: "Fail Score Threshold",
      FAIL_TARGETING_CHECK: "Fail Targeting Check",
      FORCE_TRIGGERED: "Force Triggered: share by admin or reaction by viewer",
      IMPRESSION: "Impression",
      NULL_RESHARE_SCORE: "Null Reshare Score",
      PASS_ELIG_CHECK_FOR_DEV:
        "Pass eligibility check for admins who are developer",
      PASS_RANDOM_THRESHOLD: "Pass Random Threshold",
      PASS_SCORE_THRESHOLD: "Pass Score Threshold",
      RESHARE_CARD_CANCEL: "Reshare Card Cancel",
      RESHARE_CARD_POST: "Reshare Card Post",
      SCORE: "Score",
      VIDEO_CUE_CANCEL: "Video Cue Cancel",
      VIDEO_CUE_PASS_ELIGIBILITY_CHECK: " Video cue pass eligibility check",
      VIDEO_CUE_POST: "Video Cue Post",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PFCExpressionsLoggerProduct",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      RESHARE_CARD: "Reshare Card",
      TOOLTIP: "Tooltip",
      VIDEO_CUE: "Video Cue",
    });
    f["default"] = a;
  },
  66
);
__d(
  "logPfcExpressionsEvent",
  [
    "CometRelay",
    "PFCExpressionsLoggerEvent",
    "PFCExpressionsLoggerProduct",
    "StoryRenderLocation",
    "castToEnum",
    "getJSEnumSafe",
    "logPfcExpressionsEvent_event.graphql",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = c("requireDeferred")("PfcExpressionsFalcoEvent").__setRef(
        "logPfcExpressionsEvent"
      );
    function a(a) {
      var e = d("CometRelay").readInlineData(
        h !== void 0 ? h : (h = b("logPfcExpressionsEvent_event.graphql")),
        a
      );
      i.onReadyImmediately(function (a) {
        return a.log(function () {
          return {
            event: c("castToEnum")(
              e.event_name,
              c("PFCExpressionsLoggerEvent")
            ),
            post_id: e.post_id,
            product: c("getJSEnumSafe")(
              c("PFCExpressionsLoggerProduct"),
              e.product
            ),
            story_render_location: c("castToEnum")(
              e.story_render_location,
              c("StoryRenderLocation")
            ),
          };
        });
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "PMVBumperEvent",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ CLICK: "CLICK", IMPRESSION: "IMPRESSION" });
    f["default"] = a;
  },
  66
);
__d(
  "PMVBumperName",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ YOUTUBE_BUMPER: "YOUTUBE_BUMPER" });
    f["default"] = a;
  },
  66
);
__d(
  "useLogPMVBumperEvent",
  [
    "CometRelay",
    "PMVBumperEvent",
    "PMVBumperName",
    "castToEnum",
    "requireDeferred",
    "useLogPMVBumperEvent_event.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = c("requireDeferred")("PmvBumperEventsFalcoEvent").__setRef(
        "useLogPMVBumperEvent"
      );
    function a(a) {
      a = d("CometRelay").readInlineData(
        h !== void 0 ? h : (h = b("useLogPMVBumperEvent_event.graphql")),
        a
      );
      var e = a.post_id,
        f = c("castToEnum")(a.bumper_name, c("PMVBumperName")),
        g = c("castToEnum")(a.event_name, c("PMVBumperEvent"));
      if (e == null || g == null || f == null) return;
      i.onReadyImmediately(function (a) {
        a.log(function () {
          return { bumper_name: f, event: g, post_id: e };
        });
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "PrayerPostUpdateEventType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      PRAYER_POST_UPDATE_BUMPER_IMPRESSION:
        "prayer_post_update_bumper_impression",
      PRAYER_POST_UPDATE_BUMPER_CLICK: "prayer_post_update_bumper_click",
      PRAYER_POST_UPDATE_POST_CREATE: "prayer_post_update_post_create",
    });
    f["default"] = a;
  },
  66
);
__d(
  "useLogPrayerUpdatePostPromoBumperEvent",
  [
    "CometRelay",
    "PrayerPostUpdateEventType",
    "castToEnum",
    "requireDeferred",
    "useLogPrayerUpdatePostPromoBumperEvent_event.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = c("requireDeferred")("PrayerPostUpdateFalcoEvent").__setRef(
        "useLogPrayerUpdatePostPromoBumperEvent"
      );
    function a(a) {
      var e = d("CometRelay").readInlineData(
          h !== void 0
            ? h
            : (h = b("useLogPrayerUpdatePostPromoBumperEvent_event.graphql")),
          a
        ),
        f = e.post_id,
        g = c("castToEnum")(e.event_name, c("PrayerPostUpdateEventType"));
      if (f == null || g == null) return;
      i.onReadyImmediately(function (a) {
        return a.log(function () {
          var a;
          return {
            event_type: g,
            group_id: e.group_id,
            post_id: f,
            time_since_post_created:
              (a = e.time_since_post_created) == null ? void 0 : a.toString(),
          };
        });
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "EventsActionsSrCoreFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1845787");
    c = b("FalcoLoggerInternal").create("events_actions_sr_core", a);
    e.exports = c;
  },
  null
);
__d(
  "FeedReshareMoodFilterCtaImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1967164");
    c = b("FalcoLoggerInternal").create(
      "feed_reshare_mood_filter_cta_impression",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "FeedReshareMoodFilterProductionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1960979");
    c = b("FalcoLoggerInternal").create(
      "feed_reshare_mood_filter_production",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "PfcExpressionsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("146");
    c = b("FalcoLoggerInternal").create("pfc_expressions", a);
    e.exports = c;
  },
  null
);
__d(
  "PmvBumperEventsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("655");
    c = b("FalcoLoggerInternal").create("pmv_bumper_events", a);
    e.exports = c;
  },
  null
);
__d(
  "PrayerPostUpdateFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("510");
    c = b("FalcoLoggerInternal").create("prayer_post_update", a);
    e.exports = c;
  },
  null
);
__d(
  "QuiltTryItCtaFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1800280");
    c = b("FalcoLoggerInternal").create("quilt_try_it_cta", a);
    e.exports = c;
  },
  null
);
__d(
  "WhatsappDeeplinkClickedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("2");
    c = b("FalcoLoggerInternal").create("whatsapp_deeplink_clicked", a);
    e.exports = c;
  },
  null
);
__d(
  "WhatsappDeeplinkRenderedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("20");
    c = b("FalcoLoggerInternal").create("whatsapp_deeplink_rendered", a);
    e.exports = c;
  },
  null
);
