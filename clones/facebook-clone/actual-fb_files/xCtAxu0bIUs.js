if (self.CavalryLogger) {
  CavalryLogger.start_js(["P2gK/KP"]);
}

__d(
  "ProfileTabConst",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      AD_CENTER: "ad_center",
      ALBUM: "album",
      ALBUMS: "albums",
      ALL_ACTIVITY: "allactivity",
      APPROVAL: "approve",
      APPS: "apps",
      BOXES: "box_3",
      COMMERCE: "shop",
      DEALS: "deals",
      DRAFT_NOTES: "notes_drafts",
      EVENTS: "events",
      EXCLUSIVE_CONTENT: "exclusive_content",
      FAVORITES: "favorites",
      FUNDRAISERS: "fundraisers",
      FOLLOWERS: "followers",
      FOLLOWING: "following",
      FRIENDS: "friends",
      FRIENDS_MUTUAL: "friends_mutual",
      FUN_FACTS: "did_you_know",
      GROUPS: "groups",
      GROUPS_MUTUAL: "groups_mutual",
      GROUPS_ADMINED: "groups_admined",
      GUIDES: "guides",
      INFO: "info",
      INSIGHTS: "new_insights",
      LIKES: "likes",
      LINEAR_CHANNELS: "linear_channels",
      LIVE_VIDEOS: "live_videos",
      LOCATIONS: "locations",
      MAP: "map",
      MEMORIAL_CONTACT: "legacy_contact",
      MENTIONS: "mentions",
      MY_NOTES: "notes_my_notes",
      NEARBY: "nearby",
      NOTES: "notes",
      OVERVIEW: "about",
      PAST_EVENTS: "pe",
      PAST_HOSTED_EVENTS: "phe",
      PERSONALITY_QUESTIONS: "personality_questions",
      PHOTOS: "photos",
      PHOTOS_ALBUM: "media_set",
      PHOTOS_ALBUMS: "photos_albums",
      PHOTOS_BY: "photos_by",
      PHOTOS_BY_OTHERS: "photos_by_others",
      PHOTOS_STREAM: "photos_stream",
      PHOTOS_SYNCED: "photos_synced",
      POSTS: "posts",
      POSTS_OTHERS: "posts_to_page",
      PROFESSIONAL_DASHBOARD: "professional_dashboard",
      RESUME: "resume",
      REVIEWS: "reviews",
      REVIEWS_GIVEN: "reviews_given",
      SAVE_LISTS: "lists",
      SAVED_FOR_LATER: "saved",
      SHOP_TAB: "shop_tab",
      SPACES: "post_sets",
      STORIES_ARCHIVE: "archive",
      SPORTS: "sports",
      SUPPORTERS: "supporters",
      TAGGED_NOTES: "notes_tagged",
      TASKS: "tasks",
      TIMELINE: "timeline",
      TRIBUTES: "tributes",
      TIMELINE_OVERVIEW: "grid",
      UPCOMING_HOSTED_EVENTS: "uhe",
      VEHICLES: "vehicles_tab",
      VIDEOS: "videos",
      WALL: "wall",
      WALL_ADMIN: "wall_admin",
      WIKIPEDIA: "wiki",
      PAGE_GETTING_STARTED: "page_getting_started",
      PAGE_MAP: "page_map",
      PAGE_MENU: "menu",
      PAGE_FOOD_DRINK_MENU: "food_drink_menu",
      PAGE_BOOK_PREVIEW: "book_preview",
      PAGE_PRODUCTS: "products",
      PAGE_SERVICES: "services",
      PAGES_CONTENT_TAB: "content_tab",
      PAGE_FAN_QUESTIONS: "questions",
      PAGES_REACTION_SANDBOX: "reaction_sandbox",
      PAGE_OFFERS: "offers",
      PAGE_JOB_PERMALINK: "page_job_permalink",
      HOME: "home",
      PAGE_JOBS: "jobs",
      PAGE_LIVE_VIDEOS: "page_live_videos",
      PAGE_EPISODES: "episodes",
      PAGE_SHOP_NT: "shop_nt",
      PAGE_SHOW: "show",
      PAGE_PLAYLISTS: "playlists",
      PAGE_SHOW_VIDEOS: "show_videos",
      PAGE_COLLECTIONS: "collections",
      PAGE_SERIES: "series",
      PAGE_CHANNEL: "channel",
      PAGE_VEHICLES: "vehicles",
      CAST_AND_CREW: "cast_and_crew",
      COMMUNITY: "community",
      COMMUNITY_PERMALINK: "community_permalink",
      FEATURING: "featuring",
      FREQUENTLY_ASKED_QUESTIONS: "frequently_asked_questions",
      INSTAGRAM: "instagram",
      LOYALTY: "loyalty",
      MOVIE_PROVIDER: "movie_provider",
      PODCASTS: "podcasts",
      PROFILE_OVERLAYS: "profile_overlays",
      STORY: "story",
      CUSTOM: "custom",
      OG_APP_URL_PREFIX: "app_",
      OG_APPID_PREFIX: "og_app_",
      OG_NAMESPACE_PREFIX: "og_ns_",
      OG_BOOKS: "books",
      OG_GAMES: "games",
      OG_MOVIES: "movies",
      OG_MUSIC: "music",
      OG_NEWS: "news",
      OG_TV_SHOWS: "tv",
      OG_VIDEO: "video",
      OG_APP_INSTAGRAM: "app_instapp",
      OG_APP_POKEDEX: "app_fbpokedex",
      API: "API",
      BIRTHDAY: "Birthday",
      POST: "Post",
      GENERIC: "Generic",
      PAGE_DONATE: "Page",
      EVENT: "Event",
    };
  },
  null
);
__d(
  "CometSettingsRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3824409074355545",
        metadata: {},
        name: "CometSettingsRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "buildCometSettingsRoute.entrypoint",
  [
    "CometSettingsRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "createContentAreaCompoundEntryPointBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("CometSettingsRoot.react").__setRef(
        "buildCometSettingsRoute.entrypoint"
      ),
      function (a) {
        a = a.routeProps.tab;
        return {
          cometSettingsRootQueryReference: {
            parameters: b("CometSettingsRootQuery$Parameters"),
            variables: { scale: d("WebPixelRatio").get(), tab: a },
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "CometSettingsFullPageEntryPointCompatRoot.entrypoint",
  ["JSResourceForInteraction", "buildCometSettingsRoute.entrypoint"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometSettingsRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "CometFullPageEntryPointCompatRoot.react"
      ).__setRef("CometSettingsFullPageEntryPointCompatRoot.entrypoint"),
      function (a) {
        a = a.routeProps.maintainKey;
        return { extraProps: { routeProps: { maintainKey: a } } };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesBucketsConnectionArguments",
  ["StoriesQueryArgumentsContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("StoriesQueryArgumentsContext")),
        b = a.hideSelfBucket;
      a = a.initialBucketID;
      a = { front_pin_buckets: [a], hide_self_bucket: b };
      b = "useStoriesViewerBuckets_unified_stories_buckets";
      return { connectionArguments: a, connectionName: b };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesUtils",
  ["ExecutionEnvironment", "UserAgent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    b = function (a) {
      h[a] == null && (h[a] = window.atob(a).split(":")[2]);
      return h[a];
    };
    function a() {
      var a = { format: "image/jpeg", quality: 0.92 };
      return !c("UserAgent").isBrowser("Chrome")
        ? a
        : { format: "image/webp", quality: 0.86 };
    }
    var i = 500;
    e = function (a) {
      return !d("ExecutionEnvironment").canUseDOM ? !1 : a < i;
    };
    g.cardID2ThreadID = b;
    g.getBlobImageParams = a;
    g.shouldResizeToViewStories = e;
  },
  98
);
