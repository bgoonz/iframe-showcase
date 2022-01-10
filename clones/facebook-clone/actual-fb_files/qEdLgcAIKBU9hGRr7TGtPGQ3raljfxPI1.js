if (self.CavalryLogger) {
  CavalryLogger.start_js(["ernpjCm"]);
}

__d(
  "PagesCometAdminEditingChainRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6154829841201493",
        metadata: {},
        name: "PagesCometAdminEditingChainRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "useListCellToggleOpenState",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useState;
    function a(a) {
      a = i((a = a) != null ? a : !1);
      var b = a[0],
        c = a[1];
      a = h(function () {
        c(function (a) {
          return !a;
        });
      }, []);
      return { open: b, toggleOpen: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useFxIdentityProductFalcoEventLogger",
  ["Actor", "FXUtils", "FxIdentityProductFalcoEvent", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a() {
      var a = d("Actor").useActor(),
        b = a[0];
      return h(
        function (a) {
          return c("FxIdentityProductFalcoEvent").log(function () {
            return babelHelpers["extends"]({}, a, {
              initiator_account_id: b,
              initiator_account_type:
                d("FXUtils").getFXClientActorAccountType(),
            });
          });
        },
        [b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometAdminCompletionMeterConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "page_surface";
    b = "page_admin_completion_meter";
    c = ["establish_identity", "info_and_prefs", "introduce_page"];
    d = 10;
    f.PAGE_COMPLETION_METER_ADMIN_EDIT_ENDPOINT = a;
    f.PAGE_COMPLETION_METER_ADMIN_EDIT_ENTRYPOINT = b;
    f.PAGE_COMPLETION_METER_SECTIONS = c;
    f.MIN_INVITED_FRIENDS_FOR_COMPLETION = d;
  },
  66
);
__d(
  "PagesCometAdminEditingChainRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "PagesCometAdminEditingChainRootQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.routeProps;
        var b = a.endPoint,
          d = a.entryPoint;
        a = a.pageID;
        return {
          queries: {
            queryRef: {
              parameters: c("PagesCometAdminEditingChainRootQuery$Parameters"),
              variables: { endPoint: b, entryPoint: d, pageID: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PagesCometAdminEditingChainRoot.react"
      ).__setRef("PagesCometAdminEditingChainRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PageEditField",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ABOUT_ME: "about_me",
      ADD_MENU_TAB: "add_menu_tab",
      ACTIVITIES: "activities",
      AFFILIATION: "affiliation",
      ANCHOR_DATE: "anchor_date",
      ANCHOR_DATE_FIELD: "anchor_date_field",
      AREA: "area",
      ARTISTS_WE_LIKE: "artists_we_like",
      ATTIRE: "attire",
      AWARDS: "awards",
      BAND_INTERESTS: "band_interests",
      BAND_MEMBERS: "band_members",
      BIO: "bio",
      BIRTHDAY: "birthday",
      BLURB: "blurb",
      BOOKING_AGENT: "booking_agent",
      BOOKS: "books",
      BUILT: "built",
      BUSINESS_FYI_LINK: "business_fyi_link",
      BUSINESS_FYI_MESSAGE_TYPE: "business_fyi_message_type",
      BUSINESS_TYPE: "business_type",
      CAPITAL: "capital",
      CELL: "cell",
      CITIES: "cities",
      CITY: "city",
      COMPANY_OVERVIEW: "company_overview",
      COMPLETED_FLOW: "completed_flow",
      COORDINATES: "coordinates",
      CREATOR_URL: "creator_url",
      CUISINE: "cuisine",
      CULINARY_TEAM: "culinary_team",
      CURRENT_LOCATION: "current_location",
      DELIVERY_INFOS: "delivery_infos",
      DELIVERY_POLICY: "delivery_policy",
      DELIVERY_AND_PICKUP_OPTIONS: "delivery_and_pickup_options",
      DESCRIPTION: "description",
      DIRECTED_BY: "directed_by",
      DUPLICATE_PAGE: "duplicate_page",
      EDUCATION_HISTORY: "education_history",
      EMAIL: "email",
      ENTRANCE_COORDINATES: "entrance_coordinates",
      EVENT_TIMES: "event_times",
      FEATURES: "features",
      FOUNDED: "founded",
      FULL_HOURS: "full_hours",
      GENDER: "gender",
      GENERAL_INFO: "general_info",
      GENERAL_MANAGER: "general_manager",
      GENRE: "genre",
      GOOD_FOR: "good_for",
      GOVERNMENT: "government",
      HANDLE: "handle",
      HAS_SERVICE_AREA: "has_service_area",
      HIDE_MAP: "hide_map",
      HISTORY: "history",
      HOLIDAY_HOURS: "holiday_hours",
      HOLIDAY_NOTE: "holiday_note",
      HOMETOWN: "hometown",
      HOME_COUNTRY: "home_country",
      HOME_OFFICE: "home_office",
      HOURS: "hours",
      IMPRESSUM: "impressum",
      INFLUENCES: "influences",
      INTERESTS: "interests",
      ISBN: "isbn",
      LANGUAGE: "language",
      LOCATED_IN: "located_in",
      LOCATION: "location",
      MATCHED_PAGE_URLS: "matched_page_urls",
      MEMBERS: "members",
      MINIMUM_AGE: "minimum_age",
      MISSION: "mission",
      MOVIES: "movies",
      MPG: "mpg",
      MUSIC: "music",
      NAME: "name",
      NETWORK: "network",
      NEW_HOURS: "new_hours",
      NEWS: "news",
      OTHER_ACCOUNTS: "other_accounts",
      OUR_STORY: "our_story",
      PARKING: "parking",
      PAYMENT_METHOD: "payment_method",
      PAYMENT_OPTIONS: "payment_options",
      PERSONAL_INFO: "personal_info",
      PERSONAL_INTERESTS: "personal_interests",
      PHARMA_SAFETY_INFO: "pharma_safety_info",
      PHONE: "phone",
      PHONE_VERIFICATION: "phone_verification",
      PICKUP_OPTIONS: "pickup_options",
      PLACE_TYPE: "place_type",
      PLACE_TYPES_FREE_RESPONSE: "place_types_free_response",
      PLOT_OUTLINE: "plot_outline",
      POLITICAL: "political",
      POPULATION: "population",
      POST: "post",
      PRESS_CONTACT: "press_contact",
      PRICE_RANGE: "price_range",
      PRIVACY_POLICY: "privacy_policy",
      PRODUCED_BY: "produced_by",
      PRODUCTS: "products",
      PROFILE_COVER_PHOTO: "profile_cover_photo",
      PUBLIC_TRANSIT: "public_transit",
      PUBLISHER: "publisher",
      QR_CODE: "qr_code",
      QUOTE: "quote",
      QUOTE_REQUEST: "quote_request",
      RECORD_LABEL: "record_label",
      RELATIONSHIP: "relationship",
      RELEASE_DATE: "release_date",
      RELIGION: "religion",
      RESTAURANT_GOOD_FOR: "restaurant_good_for",
      RESTAURANT_OTHER_INFO: "restaurant_other_info",
      RETURN_POLICY: "return_policy",
      RETURN_POLICY_LINK: "return_policy_link",
      RUN_OFFICE: "run_office",
      SAVE_MENU_QR: "save_menu_qr",
      SCHEDULE: "schedule",
      SCREENNAME: "screenname",
      SCREENPLAY_BY: "screenplay_by",
      SEASON: "season",
      SERVES: "serves",
      SERVICES: "services",
      SERVICE_AREA_GEO: "service_area_geo",
      SERVICE_AREA_RADIUS: "service_area_radius",
      SERVICE_AREA_REPRESENTATION: "service_area_representation",
      SHIPPING_ORIGIN: "shipping_origin",
      SHORT_NAME: "short_name",
      SIZE_CHART_LINK: "size_chart_link",
      SPECIAL_HOURS: "special_hours",
      STARRING: "starring",
      START_DATE: "start_date",
      START_DATE_LABEL: "start_date_label",
      STREET: "street",
      STUDIO: "studio",
      TEMPORARY_HOURS_STATUS: "temporary_hours_status",
      TEMPORARY_SERVICE_CHANGES: "temporary_service_changes",
      TOPIC: "topic",
      TRANSLATED_NAMES: "translated_names",
      TV: "tv",
      WHATSAPP_PHONE: "whatsapp_phone",
      WEBSITE: "website",
      WIFI_NAME: "wifi_name",
      WIFI_NETWORK_ACCESS: "wifi_network_access",
      WORK_HISTORY: "work_history",
      WRITTEN_BY: "written_by",
      YOUTUBE_HANDLE: "youtube_handle",
      ZIP: "zip",
      PLACE_HAS_OUTDOOR_SEATING: "place_has_outdoor_seating",
      OUTDOOR_HEATING: "outdoor_heating",
      INDOOR_DINING: "indoor_dining",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PageEditSection",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BUSINESS: "business",
      BUSINESS_FYI: "business_fyi",
      CONTACT: "contact",
      CONTACT_WITH_QUOTE_REQUEST: "contact_with_quote_request",
      ECOMMERCE: "ecommerce",
      EVENT_TIMES: "event_times",
      GENERAL: "general",
      HOURS: "hours",
      LOCATION: "location",
      LOCATION_WITH_SERVICE_AREA: "location_with_service_area",
      MORE: "more",
      REPORT_DUPLICATE: "report_duplicate",
    });
    f["default"] = a;
  },
  66
);
__d(
  "XCometMenuCollateralsControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/{vanity}/menu/collaterals/",
      Object.freeze({ ref: "" }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "EncryptedImgUtils",
  [],
  function (a, b, c, d, e, f) {
    var g = "ek",
      h = /^data\:/,
      i = /\?(ek\=|.*&ek\=)/;
    function a(a) {
      var b = a.getQueryData(),
        c = b[g];
      delete b[g];
      a.setQueryData(b);
      return c;
    }
    function b(a) {
      return !h.test(a) && i.test(a);
    }
    f.extractKey = a;
    f.isEncrypted = b;
  },
  66
);
__d(
  "getImageSourceURLFromImageish",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (typeof a === "string") return a;
      return a != null &&
        typeof a === "object" &&
        !a.sprited &&
        a.uri &&
        typeof a.uri === "string"
        ? a.uri
        : "";
    }
    f["default"] = a;
  },
  66
);
__d(
  "validateImageSrcPropType",
  ["URI", "coerceImageishSprited", "getImageSourceURLFromImageish"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      a = a[b];
      return a == null ||
        c("coerceImageishSprited")(a) ||
        c("getImageSourceURLFromImageish")(a) !== "" ||
        a instanceof c("URI")
        ? null
        : new Error(
            "Provided `" +
              b +
              "` to `" +
              d +
              "`. Must be `null`, `undefined`, a string, a `URI` or an `ix` call."
          );
    }
    g["default"] = a;
  },
  98
);
__d(
  "warnUnsupportedProp",
  ["warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      c("warning")(
        !1,
        "%s component does not support prop `%s`.%s",
        a,
        b,
        d ? " " + d : ""
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "ImageCore.react",
  [
    "Bootloader",
    "CometVisualCompletionAttributes",
    "EncryptedImgUtils",
    "FBLogger",
    "SubscriptionsHandler",
    "URI",
    "coerceImageishSprited",
    "coerceImageishURL",
    "createCancelableFunction",
    "getImageSourceURLFromImageish",
    "ifRequired",
    "joinClasses",
    "react",
    "validateImageSrcPropType",
    "warnUnsupportedProp",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = { alt: "" };
    function i(a) {
      return a instanceof c("URI") ? a.toString() : a;
    }
    var j = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a() {
        var a, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((a = d = b.call.apply(b, [this].concat(f)) || this),
          (d.$1 = !1),
          (d.$2 = null),
          (d.$3 = new (c("SubscriptionsHandler"))()),
          (d.state = { decryptedSrc: null }),
          a) || babelHelpers.assertThisInitialized(d)
        );
      }
      var e = a.prototype;
      e.$4 = function (a) {
        var b = this;
        this.$2 && this.$2.cancel();
        var d = c("getImageSourceURLFromImageish")(this.props.encryptedSrc),
          e = c("createCancelableFunction")(function (a) {
            d === c("getImageSourceURLFromImageish")(b.props.encryptedSrc) &&
              b.setState({ decryptedSrc: a });
          });
        a.load(d, e);
        this.$3.addSubscriptions({
          remove: function () {
            e.cancel();
          },
        });
        this.$2 = e;
      };
      e.$5 = function () {
        var a = this;
        c("ifRequired")(
          "EncryptedImg",
          function (b) {
            a.$4(b);
          },
          function () {
            if (a.$1) return;
            a.$1 = !0;
            a.$3.addSubscriptions(
              c("Bootloader").loadModules(
                ["EncryptedImg"],
                function (b) {
                  return a.$4(b);
                },
                "ImageCore.react"
              )
            );
          }
        );
      };
      e.componentDidMount = function () {
        this.$5();
      };
      e.componentDidUpdate = function (a) {
        a.encryptedSrc !== this.props.encryptedSrc && this.$5();
      };
      e.componentWillUnmount = function () {
        this.$3.release();
      };
      e.render = function () {
        var a = this.props,
          b = a.encryptedSrc,
          e = a.forwardedRef;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "encryptedSrc",
          "forwardedRef",
        ]);
        var f = this.state.decryptedSrc;
        d("EncryptedImgUtils").isEncrypted(b) === !1 &&
          (c("FBLogger")("image").mustfix(
            "The `EncryptedImage` component was rendered with a non-encrypted image (%s). Only images that meet the encrypted image test (see `EncryptedImgUtils.isEncrypted()`) should be rendered with this component. Falling back to `ImageishRenderer`.",
            JSON.stringify(b)
          ),
          (f = b));
        return h.jsx(
          k,
          babelHelpers["extends"]({}, a, { forwardedRef: e, src: f })
        );
      };
      return a;
    })(h.Component);
    j.defaultProps = b;
    j.propTypes = { encryptedSrc: c("validateImageSrcPropType") };
    function k(a) {
      var b = a.forwardedRef;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["forwardedRef"]);
      var d = c("joinClasses")(a.className, "img"),
        e = i(a.src);
      if (e == null)
        return h.jsx(
          "img",
          babelHelpers["extends"]({}, a, { className: d, ref: b })
        );
      var f = c("coerceImageishSprited")(e),
        g =
          !!f && a.alt != null && String(a.alt) !== ""
            ? h.jsx("u", { children: a.alt })
            : null;
      if (typeof e === "string")
        return h.jsx(
          "img",
          babelHelpers["extends"]({}, a, {
            className: d,
            ref: b,
            src: e,
            children: g,
          })
        );
      if (f) {
        a.src;
        var j = a.style,
          k = babelHelpers.objectWithoutPropertiesLoose(a, ["src", "style"]);
        return h.jsx(
          "i",
          babelHelpers["extends"](
            {},
            k,
            c("CometVisualCompletionAttributes").CSS_IMG,
            {
              className: c("joinClasses")(
                d,
                f.type === "css" ? f.className : void 0
              ),
              ref: b,
              style:
                f.type === "cssless"
                  ? babelHelpers["extends"]({}, j, f.style)
                  : j,
              children: g,
            }
          )
        );
      }
      k = c("getImageSourceURLFromImageish")(e);
      f = c("coerceImageishURL")(e);
      return a.width === void 0 && a.height === void 0 && f
        ? h.jsx(
            "img",
            babelHelpers["extends"]({}, a, {
              className: d,
              height: f.height,
              src: k,
              ref: b,
              width: f.width,
              children: g,
            })
          )
        : h.jsx(
            "img",
            babelHelpers["extends"]({}, a, {
              className: d,
              ref: b,
              src: k,
              children: g,
            })
          );
    }
    k.displayName = k.name + " [from " + f.id + "]";
    k.defaultProps = b;
    k.propTypes = { src: c("validateImageSrcPropType") };
    function a(a, b) {
      Object.prototype.hasOwnProperty.call(a, "source") &&
        c("warnUnsupportedProp")("ImageCore", "source", "Did you mean `src`?");
      var e = i(a.src);
      e = c("getImageSourceURLFromImageish")(e);
      if (d("EncryptedImgUtils").isEncrypted(e)) {
        a.src;
        var f = babelHelpers.objectWithoutPropertiesLoose(a, ["src"]);
        return h.jsx(
          j,
          babelHelpers["extends"]({}, f, { encryptedSrc: e, forwardedRef: b })
        );
      } else
        return h.jsx(k, babelHelpers["extends"]({}, a, { forwardedRef: b }));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "ImageCore";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "Image.react",
  ["ImageCore.react"],
  function (a, b, c, d, e, f, g) {
    g["default"] = c("ImageCore.react");
  },
  98
);
__d(
  "isTruthy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a != null && Boolean(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "WaitTimeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { waitTimeAreaName: void 0, waitTimeAreaOwner: void 0 };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "LoadingMarker.react",
  [
    "CometHeroHoldTrigger.react",
    "LoadingMarkerGated",
    "WaitTimeContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      return a.children;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      return function (b) {
        var d = i(c("WaitTimeContext"));
        return h.jsxs(h.Fragment, {
          children: [
            h.jsx(c("CometHeroHoldTrigger.react"), {
              hold: !0,
              description:
                "LoadingMarker(" +
                ((d = d.waitTimeAreaName) != null ? d : "unnamed") +
                ")",
            }),
            h.jsx(a, babelHelpers["extends"]({}, b)),
          ],
        });
      };
    }
    e = b(c("LoadingMarkerGated").component || a);
    d = e;
    g["default"] = d;
  },
  98
);
__d(
  "XUISpinner.react",
  [
    "cx",
    "fbt",
    "BrowserSupport",
    "LoadingMarker.react",
    "UserAgent",
    "joinClasses",
    "prop-types",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = d("react"),
      k =
        d("BrowserSupport").hasCSSAnimations() &&
        !(
          c("UserAgent").isEngine("Trident < 6") ||
          c("UserAgent").isEngine("Gecko < 39") ||
          c("UserAgent").isBrowser("Safari < 6")
        );
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = j.createRef()),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props,
          b = a.showOnAsync,
          d = a.background,
          e = a.paused;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "showOnAsync",
          "background",
          "paused",
        ]);
        d =
          "img _55ym" +
          (this.props.size == "small" ? " _55yn" : "") +
          (this.props.size == "large" ? " _55yq" : "") +
          (d == "light" ? " _55yo" : "") +
          (d == "dark" ? " _55yp" : "") +
          (b ? " _5tqs" : "") +
          (k ? "" : " _5d9-") +
          (k && e ? " _2y32" : "");
        return j.jsx(c("LoadingMarker.react"), {
          nodeRef: this.$1,
          children: j.jsx(
            "span",
            babelHelpers["extends"]({}, a, {
              className: c("joinClasses")(this.props.className, d),
              ref: this.$1,
              role: "progressbar",
              "aria-valuetext": i._("Loading..."),
              "aria-busy": "true",
              "aria-valuemin": "0",
              "aria-valuemax": "100",
            })
          ),
        });
      };
      return b;
    })(j.Component);
    a.propTypes = {
      paused: c("prop-types").bool,
      showOnAsync: c("prop-types").bool,
      size: c("prop-types").oneOf(["small", "large"]),
      background: c("prop-types").oneOf(["light", "dark"]),
    };
    a.defaultProps = { showOnAsync: !1, size: "small", background: "light" };
    g["default"] = a;
  },
  98
);
__d(
  "isAsyncScrollQuery",
  ["UserAgent"],
  function (a, b, c, d, e, f, g) {
    var h = null;
    function a() {
      h === null &&
        (h =
          c("UserAgent").isPlatform("Mac OS X >= 10.8") &&
          c("UserAgent").isBrowser("Safari >= 6.0"));
      return h;
    }
    g["default"] = a;
  },
  98
);
__d(
  "debounceAcrossTransitions",
  ["debounce"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      return c("debounce")(a, b, d, !0);
    }
    g["default"] = a;
  },
  98
);
__d(
  "compactArray",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = [];
      for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        d != null && b.push(d);
      }
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "objectKeys",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return Object.keys(a);
    }
    e.exports = a;
  },
  null
);
__d(
  "abstractMethod",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b) {
      h(0, 1537, a, b);
    }
    g["default"] = a;
  },
  98
);
