if (self.CavalryLogger) {
  CavalryLogger.start_js(["HZPWF6y"]);
}

__d(
  "CometComposerMagicUploadsAttachmentArea_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometComposerMagicUploadsAttachmentArea_profile",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "can_use_magic_uploads",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_professional_features_for_watch",
              storageKey: null,
            },
          ],
          type: "User",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: "page_id",
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
          ],
          type: "Page",
          abstractKey: null,
        },
      ],
      type: "Profile",
      abstractKey: "__isProfile",
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometMagicUploadsSendNotificationMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            kind: "ScalarField",
            name: "comet_magic_uploads_send_notification",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useCometMagicUploadsSendNotificationMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useCometMagicUploadsSendNotificationMutation",
          selections: b,
        },
        params: {
          id: "4473862719291287",
          metadata: {},
          name: "useCometMagicUploadsSendNotificationMutation",
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
  "CometMagicUploadsProgressRingIcon.react",
  [
    "ix",
    "CometProgressRingIndeterminate.react",
    "CometSkittleIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.state;
      return i.jsx("div", {
        className: "tmrshh9y m7zwrmfr",
        children:
          a === "indeterminate"
            ? i.jsxs(i.Fragment, {
                children: [
                  i.jsx("div", {
                    className: "bzsjyuwj",
                    children: i.jsx(c("CometProgressRingIndeterminate.react"), {
                      color: "disabled",
                      size: 48,
                    }),
                  }),
                  i.jsx("div", {
                    className: "pmk7jnqg aahdfvyu kkf49tns",
                    children: i.jsx(c("CometSkittleIcon.react"), {
                      color: "blue",
                      icon: d("fbicon")._(h("514772"), 20),
                      size: 40,
                    }),
                  }),
                ],
              })
            : i.jsx("div", {
                className: "ecm0bbzt b3onmgus",
                children: i.jsx(c("CometSkittleIcon.react"), {
                  color: a === "idle" ? "blue" : "gray",
                  icon: d("fbicon")._(h("514772"), 20),
                  size: 40,
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
  "CometMagicUploadsComboAreaStatuses.react",
  [
    "fbt",
    "CometMagicUploadsProgressRingIcon.react",
    "CometRow.react",
    "CometRowItem.react",
    "TetraButton.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.onPress;
      return i.jsxs(c("CometRow.react"), {
        align: "start",
        paddingHorizontal: 8,
        paddingVertical: 8,
        spacing: 8,
        verticalAlign: "center",
        children: [
          i.jsx(c("CometRowItem.react"), {
            children: i.jsx(c("CometMagicUploadsProgressRingIcon.react"), {
              state: "empty",
            }),
          }),
          i.jsx(c("CometRowItem.react"), {
            expanding: !0,
            verticalAlign: "center",
            children: i.jsx(c("TetraText.react"), {
              type: "body4",
              children: h._("Add photos directly from your mobile device."),
            }),
          }),
          i.jsx(c("CometRowItem.react"), {
            children: i.jsx(c("TetraButton.react"), {
              label: h._("Add"),
              onPress: a,
              type: "secondary",
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      a = a.onPress;
      return i.jsxs(c("CometRow.react"), {
        align: "start",
        paddingHorizontal: 8,
        paddingVertical: 8,
        spacing: 8,
        verticalAlign: "center",
        children: [
          i.jsx(c("CometRowItem.react"), {
            children: i.jsx(c("CometMagicUploadsProgressRingIcon.react"), {
              state: "indeterminate",
            }),
          }),
          i.jsx(c("CometRowItem.react"), {
            expanding: !0,
            verticalAlign: "center",
            children: i.jsx(c("TetraText.react"), {
              type: "body4",
              children: h._(
                "{=Tap the Facebook app notification} on your mobile device to add photos.",
                [
                  h._param(
                    "=Tap the Facebook app notification",
                    i.jsx("strong", {
                      children: h._("Tap the Facebook app notification"),
                    })
                  ),
                ]
              ),
            }),
          }),
          i.jsx(c("CometRowItem.react"), {
            children: i.jsx(c("TetraButton.react"), {
              label: h._("Cancel"),
              onPress: a,
              type: "secondary",
            }),
          }),
        ],
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function e() {
      return i.jsxs(c("CometRow.react"), {
        align: "start",
        paddingHorizontal: 8,
        paddingVertical: 8,
        spacing: 8,
        verticalAlign: "center",
        children: [
          i.jsx(c("CometRowItem.react"), {
            children: i.jsx(c("CometMagicUploadsProgressRingIcon.react"), {
              state: "idle",
            }),
          }),
          i.jsx(c("CometRowItem.react"), {
            expanding: !0,
            verticalAlign: "center",
            children: i.jsx(c("TetraText.react"), {
              type: "body4",
              children: h._(
                "You can finish by sharing this post or you can add more photos from your mobile device."
              ),
            }),
          }),
        ],
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.CometMagicUploadsComboAreaInitialStatus = a;
    g.CometMagicUploadsComboAreaWaitingStatus = b;
    g.CometMagicUploadsComboAreaSubscribedIdleStatus = e;
  },
  98
);
__d(
  "CometMagicUploadsContext",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      DEFAULT: "default",
      MARKETPLACE: "marketplace",
      NEWS_FEED_COMPOSER: "news_feed_composer",
      UIDOCS: "uidocs",
    });
    f["default"] = a;
  },
  66
);
__d(
  "XFBCometMagicUploadsContextUtils.facebook",
  ["$InternalEnumUtils", "CometMagicUploadsContext"],
  function (a, b, c, d, e, f, g) {
    a = d("$InternalEnumUtils").createToJSEnum(c("CometMagicUploadsContext"));
    b = d("$InternalEnumUtils").createFromJSEnum(c("CometMagicUploadsContext"));
    g.toJSEnum = a;
    g.fromJSEnum = b;
  },
  98
);
__d(
  "useCometMagicUploadsSendNotification",
  [
    "CometRelay",
    "XFBCometMagicUploadsContextUtils.facebook",
    "react",
    "useCometMagicUploadsSendNotificationMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback;
    function a(a) {
      var c = d("CometRelay").useMutation(
          h !== void 0
            ? h
            : (h = b("useCometMagicUploadsSendNotificationMutation.graphql"))
        ),
        e = c[0],
        f =
          d("XFBCometMagicUploadsContextUtils.facebook").fromJSEnum(a) ||
          "DEFAULT";
      return i(
        function () {
          e({ variables: { input: { context: f } } });
        },
        [e, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometMagicUploads",
  [
    "Actor",
    "CometRelay",
    "MarketplaceComposerPhotoSyncSubscription",
    "getTopMostRoute",
    "react",
    "requireDeferred",
    "useCometMagicUploadsSendNotification",
    "useCometRouterState",
    "useMarketplacePhotosyncCommandSubscription",
    "useMarketplaceSendPhotosyncCommand",
    "useMarketplaceSendPhotosyncNotification",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = b.useState,
      l = c("requireDeferred")("CometMagicUploadsFalcoEvent").__setRef(
        "useCometMagicUploads"
      );
    function a(a) {
      var b = a.additionalLogger,
        e = a.context,
        f = a.extraMetadata,
        g = a.onPhotoReceived;
      a = d("Actor").useActor();
      var m = a[0],
        n = d("CometRelay").useRelayEnvironment();
      a = c("useCometRouterState")();
      var o =
          a != null
            ? (a = c("getTopMostRoute")(a)) == null
              ? void 0
              : a.tracePolicy
            : null,
        p = c("useCometMagicUploadsSendNotification")(e),
        q = c("useMarketplaceSendPhotosyncNotification")(),
        r = c("useMarketplaceSendPhotosyncCommand")();
      a = k(!1);
      var s = a[0],
        t = a[1],
        u = j([]),
        v = h(
          function (a) {
            b != null && b(a);
            return l.load().then(function (b) {
              b.log(function () {
                return {
                  context: e,
                  event: a,
                  extra_metadata: f,
                  trace_policy: o,
                };
              });
            });
          },
          [e, f, b, o]
        );
      c("useMarketplacePhotosyncCommandSubscription")(
        h(
          function (a) {
            (a == null
              ? void 0
              : (a = a.marketplace_photo_sync_command_subscribe) == null
              ? void 0
              : a.command) === "END_SESSION" && t(!1);
          },
          [t]
        )
      );
      i(
        function () {
          if (!s) return;
          var a = d("CometRelay").requestSubscription(n, {
            onNext: function (a) {
              var b =
                a == null
                  ? void 0
                  : (a = a.marketplace_photo_sync_subscribe) == null
                  ? void 0
                  : a.photo;
              a = b == null ? void 0 : b.best_effort_image;
              if (
                (b == null ? void 0 : b.id) == null ||
                u.current.some(function (a) {
                  return a === (b == null ? void 0 : b.id);
                })
              )
                return;
              u.current.push(b.id);
              (b == null ? void 0 : b.id) != null &&
                (a == null ? void 0 : a.uri) != null &&
                (a == null ? void 0 : a.height) != null &&
                (a == null ? void 0 : a.width) != null &&
                (g({ height: a.height, id: b.id, url: a.uri, width: a.width }),
                v("photo_add"));
            },
            subscription: c("MarketplaceComposerPhotoSyncSubscription"),
            variables: { input: { uploader_id: m } },
          });
          return function () {
            return a.dispose();
          };
        },
        [m, n, s, v, g]
      );
      a = h(
        function () {
          e === "marketplace" ? q() : p(),
            r("START_SESSION"),
            t(!0),
            v("session_start");
        },
        [e, r, v, q, p]
      );
      var w = h(
        function () {
          r("END_SESSION"), t(!1), v("session_end");
        },
        [v, r]
      );
      return [a, w, s];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometMagicUploadsComboArea.react",
  [
    "fbt",
    "ix",
    "CometCard.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometFileSelector.react",
    "CometMagicUploadsComboAreaStatuses.react",
    "CometPressable.react",
    "CometSkittleIcon.react",
    "TetraText.react",
    "fbicon",
    "fileInputAcceptValues",
    "react",
    "useCometMagicUploads",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useEffect,
      m = b.useState,
      n = {
        dropTargetCard: { minHeight: "pqaqsazf" },
        fullHeight: { height: "datstx6m" },
      };
    function a(a) {
      var b = a.context,
        e = a.enableMagicUploads,
        f = a.mediaContent,
        g = a.onFilesSelected,
        o = a.onPhotoReceived;
      a = m("initial");
      var p = a[0],
        q = a[1];
      a = k(
        function (a) {
          q("subscribed-idle"), o(a);
        },
        [o]
      );
      b = c("useCometMagicUploads")({ context: b, onPhotoReceived: a });
      var r = b[0];
      a = b[1];
      var s = b[2];
      l(
        function () {
          s === !1 && q("initial");
        },
        [s]
      );
      b = function () {
        q("subscribed-waiting"), r();
      };
      f =
        f != null
          ? f
          : j.jsx(c("CometFileSelector.react"), {
              accept: d("fileInputAcceptValues").PHOTO_AND_VIDEO,
              multiple: !0,
              onFilesSelected: g,
              children: function (a) {
                return j.jsx(c("CometPressable.react"), {
                  onPress: function () {
                    return a();
                  },
                  children: j.jsx(c("CometCard.react"), {
                    background: "card-flat",
                    xstyle: n.dropTargetCard,
                    children: j.jsxs(c("CometColumn.react"), {
                      align: "center",
                      spacing: 8,
                      verticalAlign: "center",
                      xstyle: n.fullHeight,
                      children: [
                        j.jsx(c("CometColumnItem.react"), {
                          children: j.jsx(c("CometSkittleIcon.react"), {
                            color: "gray",
                            icon: d("fbicon")._(i("481775"), 20),
                            size: 40,
                          }),
                        }),
                        j.jsx(c("CometColumnItem.react"), {
                          children: j.jsx(c("TetraText.react"), {
                            type: "headline3",
                            children: h._("Add Photos/Videos"),
                          }),
                        }),
                        j.jsx(c("CometColumnItem.react"), {
                          children: j.jsx(c("TetraText.react"), {
                            align: "center",
                            type: "meta4",
                            children: h._("or drag and drop"),
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
            });
      var t;
      switch (p) {
        case "subscribed-waiting":
          t = j.jsx(
            d("CometMagicUploadsComboAreaStatuses.react")
              .CometMagicUploadsComboAreaWaitingStatus,
            { onPress: a }
          );
          break;
        case "subscribed-idle":
          t = j.jsx(
            d("CometMagicUploadsComboAreaStatuses.react")
              .CometMagicUploadsComboAreaSubscribedIdleStatus,
            {}
          );
          break;
        case "initial":
          t = j.jsx(
            d("CometMagicUploadsComboAreaStatuses.react")
              .CometMagicUploadsComboAreaInitialStatus,
            { onPress: b }
          );
      }
      return j.jsxs(c("CometColumn.react"), {
        expanding: !0,
        paddingHorizontal: 8,
        paddingVertical: 8,
        spacing: 8,
        children: [
          j.jsx(c("CometColumnItem.react"), { children: f }),
          e
            ? j.jsx(c("CometColumnItem.react"), {
                children: j.jsx(c("CometCard.react"), {
                  background: "card-flat",
                  children: t,
                }),
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
  "CometComposerMagicUploadsAttachmentArea.react",
  [
    "CometComposerMagicUploadsAttachmentArea_profile.graphql",
    "CometMagicUploadsComboArea.react",
    "CometRelay",
    "ComposerCometMediaAttachmentCollage.react",
    "ComposerCometSelectedPhotoLayoutContext",
    "MediaEditorViewStateContext",
    "composerMediaAttachmentReducer",
    "cr:1864053",
    "gkx",
    "killswitch",
    "makeMediaAttachmentReadyForPreview",
    "react",
    "requireDeferred",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "useMediaUploaderHandlers",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useMemo;
    c("requireDeferred")("mediaAttachmentAreaTransform").__setRef(
      "CometComposerMagicUploadsAttachmentArea.react"
    );
    function a(a) {
      var e,
        f = a.disableVideo;
      f = f === void 0 ? !1 : f;
      var g = a.isEditingPreExistingStory,
        n = g === void 0 ? !1 : g;
      g = a.mediaAttachments;
      var o = a.mediaUploadLoggingMetadata,
        p = a.profile$key,
        q = a.selectedPhotoLayout,
        r = a.videoComposerData,
        s = a.videoLiteComposerEligible;
      a = a.width;
      c("useComposerViewStateReducer")(c("composerMediaAttachmentReducer"));
      var t = c("useComposerViewStateDispatcher")(),
        u = b("cr:1864053")();
      p = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometComposerMagicUploadsAttachmentArea_profile.graphql")),
        p
      );
      e =
        (e = p == null ? void 0 : p.has_professional_features_for_watch) != null
          ? e
          : !1;
      var v = (p == null ? void 0 : p.page_id) !== void 0;
      e =
        (c("gkx")("1584413") && !n && e) ||
        (c("gkx")("1915661") && n && (e || v));
      var w = k(c("MediaEditorViewStateContext"));
      v = m(
        function () {
          return babelHelpers["extends"]({}, w, {
            isEditingPreExistingStory: n,
          });
        },
        [w, n]
      );
      l(
        function () {
          if (
            c("killswitch")(
              "WWW_COMPOSER_MEDIA_ATTACHMENT_AREA_REMOVAL_ACTION_DISPATCH"
            )
          )
            return function () {
              t({ type: "REMOVE_ALL_MEDIA_ATTACHMENT_ITEMS" });
            };
        },
        [t]
      );
      var x = m(
        function () {
          return { layout: q };
        },
        [q]
      );
      r = c("useMediaUploaderHandlers")(r);
      r = r.onFilesSelected;
      var y = j(
        function (a) {
          t({ photo: a, type: "ADD_PREEXISTING_PHOTO" });
        },
        [t]
      );
      f =
        g != null && g.length > 0
          ? i.jsx(c("MediaEditorViewStateContext").Provider, {
              value: v,
              children: i.jsx(
                c("ComposerCometSelectedPhotoLayoutContext").Provider,
                {
                  value: x,
                  children: i.jsx(
                    c("ComposerCometMediaAttachmentCollage.react"),
                    {
                      disableVideoUploads: f,
                      inComposer: !0,
                      mediaAttachments: g
                        .map(function (a) {
                          switch (a.state) {
                            case "PREEXISTING":
                              return a;
                            default:
                              return a.file && a.fileType !== "UNKNOWN"
                                ? a
                                : null;
                          }
                        })
                        .filter(Boolean)
                        .map(c("makeMediaAttachmentReadyForPreview")),
                      mediaUploadLoggingMetadata: o,
                      selectedPhotoLayout: q,
                      videoLiteComposerEligible: (v = s) != null ? v : e,
                      width:
                        (x = a) != null
                          ? x
                          : u == null
                          ? void 0
                          : u.composerWidth,
                    }
                  ),
                }
              ),
            })
          : null;
      return i.jsx(c("CometMagicUploadsComboArea.react"), {
        context: "news_feed_composer",
        enableMagicUploads:
          (p == null ? void 0 : p.can_use_magic_uploads) === !0,
        mediaContent: f,
        onFilesSelected: r,
        onPhotoReceived: y,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      return {
        isEditingPreExistingStory: a.isEditingPreExistingStory,
        mediaAttachments: a.mediaAttachments,
        selectedPhotoLayout: a.photoLayout,
        videoComposerData: a.videoComposerData,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "MarketplaceComposerPhotoSyncButtonWithHook.react",
  [
    "fbt",
    "ix",
    "CometCard.react",
    "CometLazyDialogTrigger.react",
    "CometLink.react",
    "CometProgressRingIndeterminate.react",
    "CometRow.react",
    "CometRowItem.react",
    "CometTintedIcon.react",
    "JSResourceForInteraction",
    "MarketplaceComposerSellerField",
    "TetraButton.react",
    "TetraText.react",
    "emptyFunction",
    "fbicon",
    "marketplaceComposerDispatchers.hybrid",
    "react",
    "requireDeferred",
    "useCometLazyDialog",
    "useCometMagicUploads",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback,
      l = c("JSResourceForInteraction")(
        "MarketplaceComposerPhotoSyncLearnMoreDialog.react"
      ).__setRef("MarketplaceComposerPhotoSyncButtonWithHook.react"),
      m = c("JSResourceForInteraction")(
        "MarketplaceComposerPhotoSyncEnableNotificationsDialog.react"
      ).__setRef("MarketplaceComposerPhotoSyncButtonWithHook.react"),
      n = c("requireDeferred")("MarketplacePhotoSyncFalcoEvent").__setRef(
        "MarketplaceComposerPhotoSyncButtonWithHook.react"
      );
    function a(a) {
      var b = a.listingType,
        e = a.onPhotoReceived;
      a = d(
        "marketplaceComposerDispatchers.hybrid"
      ).useMarketplaceComposerCommonViewState();
      var f = a.seller;
      a = c("useCometLazyDialog")(m);
      var g = a[0];
      a = d(
        "marketplaceComposerDispatchers.hybrid"
      ).useMarketplaceComposerDispatcher();
      var p = a.dispatch,
        q = k(
          function (a) {
            n.load()
              .then(function (c) {
                c.log(function () {
                  return { event: a, vertical: o(b) };
                });
              })
              ["catch"](c("emptyFunction"));
          },
          [b]
        );
      a = c("useCometMagicUploads")({
        additionalLogger: q,
        context: "marketplace",
        extraMetadata: o(b),
        onPhotoReceived: k(
          function (a) {
            e(a);
          },
          [e]
        ),
      });
      var r = a[0],
        s = a[1],
        t = a[2];
      a = t
        ? j.jsx(c("CometProgressRingIndeterminate.react"), {
            color: "blue",
            size: 24,
          })
        : j.jsx(c("CometTintedIcon.react"), {
            color: "fds-gray-70",
            icon: d("fbicon")._(i("514773"), 24),
          });
      var u = t ? h._("Done") : h._("Try It"),
        v = t
          ? j.jsx(c("TetraText.react"), {
              type: "body4",
              children: h._(
                "Tap the notification on your phone to upload photos."
              ),
            })
          : j.jsxs(c("TetraText.react"), {
              type: "body4",
              children: [
                j.jsx("strong", { children: h._("New!") }),
                " ",
                h._("Upload photos directly from your phone."),
                " ",
                j.jsx(c("CometLazyDialogTrigger.react"), {
                  dialogProps: { onPressStart: w },
                  dialogResource: l,
                  children: function (a) {
                    return j.jsx(c("CometLink.react"), {
                      onClick: a,
                      children: j.jsx(c("TetraText.react"), {
                        color: "highlight",
                        type: "bodyLink4",
                        children: h._("Learn More"),
                      }),
                    });
                  },
                }),
              ],
            });
      function w(a) {
        if (!t) {
          if (a !== !0 && !f.value.jewelNotifsEnabled) {
            q("prompt_enable_jewel_notifications");
            g({
              onPressEnable: function () {
                q("enable_jewel_notifications"),
                  p(
                    d("MarketplaceComposerSellerField").setJewelNotifsEnabled()
                  ),
                  w(!0);
              },
            });
            return;
          }
          r();
        } else s();
      }
      return j.jsx(c("CometRow.react"), {
        paddingHorizontal: 0,
        children: j.jsx(c("CometRowItem.react"), {
          expanding: !0,
          children: j.jsx(c("CometCard.react"), {
            background: "light-wash",
            children: j.jsxs(c("CometRow.react"), {
              paddingVertical: 12,
              verticalAlign: "center",
              children: [
                j.jsx(c("CometRowItem.react"), { children: a }),
                j.jsx(c("CometRowItem.react"), { expanding: !0, children: v }),
                j.jsx(c("CometRowItem.react"), {
                  children: j.jsx(c("TetraButton.react"), {
                    label: u,
                    onPress: function () {
                      return w();
                    },
                    size: "medium",
                    type: "secondary",
                  }),
                }),
              ],
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function o(a) {
      if (a != null)
        switch (a) {
          case "item":
            return "c2c";
          case "vehicle":
            return "motors";
          case "rental":
            return "real_estate";
          case "live_shopping":
            break;
          default:
            a;
        }
    }
    g["default"] = a;
  },
  98
);
__d(
  "useNUXHelpers_nux.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useNUXHelpers_nux",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
          path: "id",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "nux_id",
            storageKey: null,
          },
          action: "THROW",
          path: "nux_id",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_show",
            storageKey: null,
          },
          action: "THROW",
          path: "should_show",
        },
      ],
      type: "DefaultNUX",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useMWChatMessageActor_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useMWChatMessageActor_actor",
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
          name: "__typename",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_message",
          storageKey: null,
        },
      ],
      type: "Actor",
      abstractKey: "__isActor",
    };
    e.exports = a;
  },
  null
);
__d(
  "useNUXHelpers",
  ["CometRelay", "react", "useNUX", "useNUXHelpers_nux.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useCallback,
      j = e.useEffect;
    function a(a) {
      var e = d("CometRelay").useRelayEnvironment();
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useNUXHelpers_nux.graphql")),
        a
      );
      var f = a.id,
        g = a.nux_id,
        k = c("useNUX")(g, Boolean(a == null ? void 0 : a.should_show)),
        l = k[0],
        m = k[1],
        n = a.should_show === !0 && l;
      k = i(
        function () {
          m == null ? void 0 : m.onDismiss(),
            d("CometRelay").commitLocalUpdate(e, function (a) {
              a = a.get(f);
              a == null ? void 0 : a.setValue(!1, "should_show");
            });
        },
        [m, e, f]
      );
      j(
        function () {
          n && (m == null ? void 0 : m.onVisible());
        },
        [g, n, m]
      );
      return [n, k];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometDeferredDialogTrigger.react",
  ["react", "useCometDeferredDialog"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useCallback;
    function a(a) {
      var b = a.children,
        d = a.dialogProps,
        e = a.dialogResource,
        f = a.fallback,
        g = a.onHide;
      a = a.onShow;
      var i = a === void 0 ? function () {} : a;
      a = c("useCometDeferredDialog")(e, f);
      var j = a[0];
      e = h(
        function () {
          j(d, g), i();
        },
        [j, d, g, i]
      );
      return b(e);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useMediaCollage",
  [
    "CometComposerStylingConstants",
    "CometFeedStoryMediaLayoutConstants",
    "ReactComposerCollageLayoutSelection",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 6,
      i = 2;
    function a(a, b, c) {
      var e = d("CometFeedStoryMediaLayoutConstants").DEFAULT_MIN_ASPECT_RATIO,
        f = b.reduce(function (a, c, d) {
          c.width != null && c.height != null
            ? (b.length === 1 && (e = Math.max(c.width / c.height, e)),
              a.set(d, [c.width, c.height]))
            : a.set(d, [0, 0]);
          return a;
        }, new Map()),
        g = new Map();
      f.size > 0 &&
        (g = d("ReactComposerCollageLayoutSelection").getBestUserCollageLayout(
          f
        ));
      f = Array.from(g.entries()).map(function (a) {
        a = a[1];
        return {
          columnSpan: a.getWidth(),
          columnStart: a.getLeft(),
          rowSpan: a.getHeight(),
          rowStart: a.getTop(),
        };
      });
      var j = f.reduce(function (a, b) {
          return Math.max(a, b.columnStart + b.columnSpan);
        }, 0),
        k = f.reduce(function (a, b) {
          return Math.max(a, b.rowStart + b.rowSpan);
        }, 0);
      g =
        c != null
          ? c -
            d("CometComposerStylingConstants").COMPOSER_PADDING_SIDE * 2 -
            d("CometComposerStylingConstants").COMPOSER_ATTACHMENT_AREA_BORDER *
              2
          : a;
      c = g * (k / h);
      b.length === 1 && (c = g / e);
      a = f.map(function (a) {
        var b = a.columnSpan,
          c = a.columnStart,
          d = a.rowSpan;
        a = a.rowStart;
        var e = i / 2 + 0.01;
        return {
          bottom:
            "calc((" +
            (k - (a + d)) * 100 +
            "% / " +
            k +
            ") + " +
            (a + d < k ? e : 0) +
            "px)",
          left:
            "calc((" + c * 100 + "% / " + j + ") + " + (c > 0 ? e : 0) + "px)",
          right:
            "calc((" +
            (j - (c + b)) * 100 +
            "% / " +
            j +
            ") + " +
            (c + b < j ? e : 0) +
            "px)",
          top:
            "calc((" + a * 100 + "% / " + k + ") + " + (a > 0 ? e : 0) + "px)",
        };
      });
      g = (b || []).length - f.length;
      return { height: c, itemStyleInfos: a, numItemsNotShown: g };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometDateTimeFormatUtils",
  ["fbt", "DateConsts", "formatDate"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b) {
      return i(a.getJSDate(), b != null ? b.getJSDate() : null);
    }
    function i(a, b) {
      if (b == null || b.getTime() === a.getTime())
        if (a.getFullYear() === new Date().getFullYear())
          return c("formatDate")(a, "M j");
        else return c("formatDate")(a, "M j, Y");
      else {
        var d, e;
        a.getFullYear() === b.getFullYear()
          ? (a.getFullYear() === new Date().getFullYear()
              ? (e = c("formatDate")(b, "M j"))
              : (e = c("formatDate")(b, "M j, Y")),
            (d = c("formatDate")(a, "M j")))
          : ((d = c("formatDate")(a, "M j, Y")),
            (e = c("formatDate")(b, "M j, Y")));
        return h._("{start-date} - {end-date}", [
          h._param("start-date", d),
          h._param("end-date", e),
        ]);
      }
    }
    function b(a) {
      return a == null ? null : new Date(a * d("DateConsts").MS_PER_SEC);
    }
    g.formatLocalDateRange = a;
    g.formatDateRange = i;
    g.getDateFromTimestamp = b;
  },
  98
);
__d(
  "EventCometMutatePaidEventOnboardingPromptDialogResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "EventCometMutatePaidEventOnboardingPromptDialog.react"
    ).__setRef("EventCometMutatePaidEventOnboardingPromptDialogResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "InsightsCometGroupLegend.react",
  ["InsightsCometAxisUtils", "TetraText.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        badgeContainer: { marginEnd: "tvfksri0" },
        container: {
          alignItems: "gs1a9yip",
          display: "j83agx80",
          flexWrap: "lhclo0ds",
          justifyContent: "i1fnvgqd",
        },
        horizontal: { flexDirection: "btwxx1t3" },
        item: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
        },
        itemHorizontalSpacing: { marginEnd: "tvfksri0" },
        itemVerticalSpacing: { marginBottom: "n851cfcs" },
        vertical: { flexDirection: "cbu4d94t" },
      };
    function a(a) {
      var b = a.badgeSize,
        e = b === void 0 ? 12 : b,
        f = a.group;
      b = a.orientation;
      var g = b === void 0 ? "horizontal" : b;
      b = a.formatter;
      var j = b === void 0 ? d("InsightsCometAxisUtils").defaultFormatter : b;
      b = a.renderValue;
      var k = b === void 0 ? !0 : b,
        l = a.textColor;
      b = a.textType;
      var m = b === void 0 ? "body1" : b;
      b = a.xstyle;
      return h.jsx("div", {
        className: c("stylex")(
          i.container,
          g === "horizontal" && i.horizontal,
          g === "vertical" && i.vertical,
          b
        ),
        children: f.data.map(function (a, b) {
          return h.jsxs(
            "div",
            {
              className: c("stylex")(
                i.item,
                g === "horizontal" &&
                  b !== f.data.length - 1 &&
                  i.itemHorizontalSpacing,
                (g === "horizontal" || b !== f.data.length - 1) &&
                  i.itemVerticalSpacing
              ),
              children: [
                h.jsx("svg", {
                  className: c("stylex")(i.badgeContainer),
                  style: { height: e, width: e },
                  children: h.jsx("circle", {
                    className: c("stylex")(a.xstyle),
                    cx: e / 2,
                    cy: e / 2,
                    r: e / 2,
                  }),
                }),
                h.jsxs(c("TetraText.react"), {
                  color: l,
                  type: m,
                  children: [k ? j(a.value) : null, " ", a.label],
                }),
              ],
            },
            a.label
          );
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useMWChatMessageActor",
  [
    "CometRelay",
    "react",
    "recoverableViolation",
    "useMWChatMessageActor_actor.graphql",
    "useMWChatOpenTabForGroup",
    "useMWChatOpenTabForPage",
    "useMWChatOpenTabForUser",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useMemo,
      j = h !== void 0 ? h : (h = b("useMWChatMessageActor_actor.graphql"));
    function a(a, b) {
      var e = d("CometRelay").useFragment(j, a);
      a = c("useMWChatOpenTabForUser")(b);
      var f = a[0];
      a[1];
      a = c("useMWChatOpenTabForGroup")(b);
      var g = a[0];
      a[1];
      var h = c("useMWChatOpenTabForPage")(b);
      return i(
        function () {
          if (
            e == null ||
            e.id == null ||
            e.__typename == null ||
            e.can_viewer_message !== !0
          )
            return null;
          var a = e.id;
          return function () {
            switch (e.__typename) {
              case "Page":
                h(a);
                break;
              case "Group":
                g(a);
                break;
              case "User":
                f(a);
                break;
              default:
                c("recoverableViolation")(
                  "Unknown __typename for getDispatchAction messenger dispatch",
                  "messenger_web_product"
                );
                break;
            }
          };
        },
        [e, h, g, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "XCometEventEditControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/events/edit/{event_id}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometPaidOnlineEventsOnboardingControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/events/poe/onboarding/{?owner_id}/",
      Object.freeze({ disable_deferred_payouts: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useMaybeNUX_nux.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useMaybeNUX_nux",
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
          name: "nux_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show",
          storageKey: null,
        },
      ],
      type: "DefaultNUX",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useMaybeNUX",
  ["CometRelay", "emptyFunction", "react", "useMaybeNUX_nux.graphql", "useNUX"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useCallback,
      j = e.useEffect;
    function a(a) {
      var e = d("CometRelay").useRelayEnvironment();
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useMaybeNUX_nux.graphql")),
        a
      );
      var f = a == null ? void 0 : a.id,
        g = a == null ? void 0 : a.nux_id,
        k = c("useNUX")(g, Boolean(a == null ? void 0 : a.should_show)),
        l = k[0],
        m = k[1],
        n = l && (a == null ? void 0 : a.should_show) === !0 && g != null;
      k = i(
        function () {
          m == null ? void 0 : m.onDismiss();
          if (f == null) return;
          d("CometRelay").commitLocalUpdate(e, function (a) {
            a = a.get(f);
            a == null ? void 0 : a.setValue(!1, "should_show");
          });
        },
        [m, f, e]
      );
      j(
        function () {
          g != null && n && (m == null ? void 0 : m.onVisible());
        },
        [g, n, m]
      );
      return a != null ? [n, k] : [null, c("emptyFunction")];
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProgressiveDateUtil",
  ["DateConsts"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = a.day,
        c = a.month;
      a = a.year;
      if (a == null) return Object.freeze({});
      if (c == null) return { year: a };
      if (b == null) return { month: c, year: a };
      var e = d("DateConsts").getDaysInMonth(a, c);
      return b > e
        ? { day: e, month: c, year: a }
        : { day: b, month: c, year: a };
    }
    function a(a) {
      if (a == null) return {};
      a = a.split("-").map(function (a) {
        return parseInt(a, 10);
      });
      var b = a[0],
        c = a[1];
      a = a[2];
      return h({ day: a, month: c, year: b });
    }
    function b(a) {
      var b = null;
      a.day != null && (b = a.day);
      var c = null;
      a.month != null && (c = a.month);
      var d = null;
      a.year != null && (d = a.year);
      return { day: b, month: c, year: d };
    }
    function c(a) {
      var b = null;
      a.day != null && a.month != null && a.year != null
        ? (b = new Date(a.year, a.month - 1, a.day + 1))
        : a.month != null && a.year != null
        ? (b = new Date(a.year, a.month, 1))
        : a.year != null && (b = new Date(a.year + 1, 0, 1));
      return b != null ? b.setSeconds(-1) / 1e3 : null;
    }
    g.makeValidDate = h;
    g.parseDate = a;
    g.toMaybeDate = b;
    g.toLatestTimestamp = c;
  },
  98
);
__d(
  "ProfileCometTimelineEmptyState.react",
  ["fbt", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx("div", {
        className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
        children: i.jsx(c("TetraText.react"), {
          align: "center",
          color: "secondary",
          type: "headlineEmphasized2",
          children: h._("No posts available"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometPostFiltersDialogReducer",
  ["ProgressiveDateUtil"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a) {
      return {
        date: d("ProgressiveDateUtil").parseDate(null),
        postedBy: a ? "YOU" : "ANYONE",
        privacy: "ALL",
        taggedPosts: "ALL",
      };
    };
    b = function (a, b) {
      switch (b.type) {
        case "SET_FILTERS":
          return babelHelpers["extends"]({}, a, {
            date: b.date,
            postedBy: b.postedBy,
            privacy: b.privacy,
            taggedPosts: b.taggedPosts,
          });
        default:
          return babelHelpers["extends"]({}, a);
      }
    };
    g.getInitialState = a;
    g.reducer = b;
  },
  98
);
__d(
  "ProfileCometPostFiltersDialogContext",
  ["ProfileCometPostFiltersDialogReducer", "react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      dispatchAction: function (a) {
        c("recoverableViolation")(
          "ProfileCometPostFiltersDialogContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometPostFiltersDialogContext.Provider value={context} />",
          "profile_comet"
        );
      },
      state: d("ProfileCometPostFiltersDialogReducer").getInitialState(!1),
    });
    g["default"] = b;
  },
  98
);
__d(
  "ProfileCometTimelineFilterReducer",
  ["ProgressiveDateUtil"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function () {
      return {
        date: {},
        postedBy: "ANYONE",
        privacy: "ALL",
        taggedPosts: "ALL",
      };
    };
    b = function (a, b) {
      switch (b.type) {
        case "SET_FILTERS":
          var c = d("ProgressiveDateUtil").makeValidDate(
            d("ProgressiveDateUtil").toMaybeDate(b.date)
          );
          return babelHelpers["extends"]({}, a, {
            date: c,
            postedBy: b.postedBy,
            privacy: b.privacy,
            taggedPosts: b.taggedPosts,
          });
        default:
          return babelHelpers["extends"]({}, a);
      }
    };
    g.getInitialState = a;
    g.reducer = b;
  },
  98
);
__d(
  "ProfileCometTimelineFilterContext",
  ["FBLogger", "ProfileCometTimelineFilterReducer", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      dispatchAction: function (a) {
        c("FBLogger")("comet_profile").mustfix(
          "ProfileCometTimelineFilterContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometTimelineFilterContext.Provider value={context} />"
        );
      },
      state: d("ProfileCometTimelineFilterReducer").getInitialState(),
    });
    g["default"] = b;
  },
  98
);
__d(
  "useProfileCometTimelineFeedQueryRefetcherForFilters",
  ["ProfileCometTimelineFilterContext", "ProgressiveDateUtil", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef,
      k = b.useState;
    function a(a) {
      var b = a.fetchCount,
        e = a.refetch;
      a = a.variables;
      var f = a.userID;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["userID"]);
      var g = j(a);
      a = k(!1);
      var l = a[0],
        m = a[1],
        n = j(!0),
        o = j(e),
        p = j(b),
        q = j(f);
      o.current = e;
      p.current = b;
      q.current = f;
      a = h(c("ProfileCometTimelineFilterContext"));
      var r = a.state,
        s = d("ProgressiveDateUtil").toLatestTimestamp(r.date),
        t = j({ dispose: function () {} });
      i(
        function () {
          if (n.current) {
            n.current = !1;
            return;
          }
          var a;
          switch (r.postedBy) {
            case "ANYONE":
              a = null;
              break;
            case "OTHERS":
              a = { group: "NON_OWNER" };
              break;
            case "YOU":
              a = { group: "OWNER" };
              break;
          }
          var b;
          switch (r.privacy) {
            case "PUBLIC":
              b = { exclusivity: "EXCLUSIVE", filter: "PUBLIC" };
              break;
            case "FRIENDS":
              b = { exclusivity: "EXCLUSIVE", filter: "FRIENDS" };
              break;
            case "ONLY_ME":
              b = { exclusivity: "EXCLUSIVE", filter: "SELF" };
              break;
            case "ALL":
              b = { exclusivity: "INCLUSIVE", filter: "ALL" };
              break;
          }
          var c = r.taggedPosts === "TAGGED";
          m(!0);
          t.current.dispose();
          t.current = o.current(
            babelHelpers["extends"]({}, g.current, {
              beforeTime: s,
              count: p.current,
              id: q.current,
              postedBy: a,
              privacy: b,
              taggedInOnly: c,
            }),
            {
              fetchPolicy: "store-and-network",
              onComplete: function () {
                m(!1);
              },
            }
          );
        },
        [s, r.postedBy, r.privacy, r.taggedPosts]
      );
      return l;
    }
    g["default"] = a;
  },
  98
);
__d(
  "XCometProfileVanityControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/{vanity}/",
      Object.freeze({
        show_switched_toast: !1,
        show_switched_tooltip: !1,
        show_podcast_settings: !1,
      }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometProfileVanityTributesControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/{vanity}/tributes/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometVanityTabControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/{vanity}/{sk}/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometVanityTimelineControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/{vanity}/timeline/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometVanityWoodhengeSupportersURLControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/{vanity}/supporters/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ProfileCometURIUtils",
  [
    "ProfileCometContext",
    "XCometProfileControllerRouteBuilder",
    "XCometProfileVanityControllerRouteBuilder",
    "XCometProfileVanityTributesControllerRouteBuilder",
    "XCometVanityTabControllerRouteBuilder",
    "XCometVanityTimelineControllerRouteBuilder",
    "XCometVanityWoodhengeSupportersURLControllerRouteBuilder",
    "react",
    "unrecoverableViolation",
    "useCurrentRouteEntityKey",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a(a) {
      var b = h(c("ProfileCometContext"));
      b = b.profileID;
      var d = c("useCurrentRouteEntityKey")();
      b =
        d != null &&
        d.entity_type === "profile" &&
        d.entity_id === b &&
        d.section === a;
      return b;
    }
    function b() {
      var a = h(c("ProfileCometContext")),
        b = a.profileID;
      a = a.profileVanity;
      if (a != null && a !== "")
        return c("XCometProfileVanityControllerRouteBuilder").buildURL({
          vanity: a,
        });
      if (b != null)
        return c("XCometProfileControllerRouteBuilder").buildURL({ id: b });
      throw new (c("unrecoverableViolation"))(
        "Cannot generate URI for profile when id and vanity are both null",
        "profile_comet"
      );
    }
    function e(a) {
      var b = h(c("ProfileCometContext")),
        d = b.profileID;
      b = b.profileVanity;
      if (b != null && b !== "") {
        if (a === "timeline")
          return c("XCometVanityTimelineControllerRouteBuilder").buildURL({
            vanity: b,
          });
        if (a === "tributes")
          return c(
            "XCometProfileVanityTributesControllerRouteBuilder"
          ).buildURL({ vanity: b });
        return a === "supporters"
          ? c(
              "XCometVanityWoodhengeSupportersURLControllerRouteBuilder"
            ).buildURL({ vanity: b })
          : c("XCometVanityTabControllerRouteBuilder").buildURL({
              sk: a,
              vanity: b,
            });
      }
      if (d != null)
        return c("XCometProfileControllerRouteBuilder").buildURL({
          id: d,
          sk: a,
        });
      throw new (c("unrecoverableViolation"))(
        "Cannot generate URI for profile section when id and vanity are both null",
        "profile_comet"
      );
    }
    g.useIsProfileSectionActive = a;
    g.useURIForProfile = b;
    g.useURIForProfileSection = e;
  },
  98
);
__d(
  "MarketplaceComposerNumericQuantityField_listing.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "MarketplaceComposerNumericQuantityField_listing",
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplaceComposerPhotoSyncSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "MarketplacePhotoSyncSubscribeResponsePayload",
            kind: "LinkedField",
            name: "marketplace_photo_sync_subscribe",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Photo",
                kind: "LinkedField",
                name: "photo",
                plural: !1,
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
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "best_effort_image",
                    plural: !1,
                    selections: [
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
                    ],
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
          name: "MarketplaceComposerPhotoSyncSubscription",
          selections: b,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "MarketplaceComposerPhotoSyncSubscription",
          selections: b,
        },
        params: {
          id: "5489692641055824",
          metadata: { subscriptionName: "marketplace_photo_sync_subscribe" },
          name: "MarketplaceComposerPhotoSyncSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useMarketplacePhotosyncCommandSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "MarketplacePhotoSyncCommandSubscribeResponsePayload",
            kind: "LinkedField",
            name: "marketplace_photo_sync_command_subscribe",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "command",
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
          name: "useMarketplacePhotosyncCommandSubscription",
          selections: b,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useMarketplacePhotosyncCommandSubscription",
          selections: b,
        },
        params: {
          id: "3308718192524494",
          metadata: {
            subscriptionName: "marketplace_photo_sync_command_subscribe",
          },
          name: "useMarketplacePhotosyncCommandSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useMarketplaceSendPhotosyncCommandMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "MarketplacePhotoSyncCommandResponsePayload",
            kind: "LinkedField",
            name: "marketplace_photo_sync_command",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "useMarketplaceSendPhotosyncCommandMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useMarketplaceSendPhotosyncCommandMutation",
          selections: b,
        },
        params: {
          id: "2951559778286209",
          metadata: {},
          name: "useMarketplaceSendPhotosyncCommandMutation",
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
  "useMarketplaceSendPhotosyncNotificationMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "marketplace_photo_sync_send_notification",
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "useMarketplaceSendPhotosyncNotificationMutation",
          selections: a,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "useMarketplaceSendPhotosyncNotificationMutation",
          selections: a,
        },
        params: {
          id: "2995497147239082",
          metadata: {},
          name: "useMarketplaceSendPhotosyncNotificationMutation",
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
  "MarketplaceComposerNumericQuantityField",
  [
    "fbt",
    "CometRelay",
    "MarketplaceComposerNumericQuantityField_listing.graphql",
    "cometMarketplaceComposerUtils.hybrid",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    c = 3;
    function a(a) {
      return { type: "set_numeric_quantity", value: a };
    }
    function j(a) {
      return isNaN(a) ? null : a;
    }
    var k = [
      d("cometMarketplaceComposerUtils.hybrid").buildValidator(
        h._("Enter a quantity greater than 0 to continue."),
        function (a) {
          a = j(a.c2c.numericQuantity.value);
          return a != null && a > 0;
        },
        ["item"]
      ),
    ];
    e = function (a) {
      a = d("CometRelay").readInlineData(
        i !== void 0
          ? i
          : (i = b("MarketplaceComposerNumericQuantityField_listing.graphql")),
        a
      );
      return d("cometMarketplaceComposerUtils.hybrid").buildViewStateField(
        (a == null ? void 0 : a.inventory_count) == null ||
          (a == null ? void 0 : a.inventory_count) === -1
          ? 1
          : a == null
          ? void 0
          : a.inventory_count,
        k
      );
    };
    g.MAX_QUANTITY_LENGTH = c;
    g.setNumericQuantity = a;
    g.initialize = e;
  },
  98
);
__d(
  "MarketplaceComposerPreviewFields",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return { type: "set_preview_ids", value: a };
    }
    function b(a) {
      return { type: "set_highlight_field", value: a };
    }
    function c(a) {
      return { type: "set_is_updating_preview", value: a };
    }
    f.setPreviewIDs = a;
    f.setHighlightField = b;
    f.setIsUpdatingPreview = c;
  },
  66
);
__d(
  "MarketplaceComposerPhotoSyncSubscription",
  ["MarketplaceComposerPhotoSyncSubscription.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a =
      h !== void 0
        ? h
        : (h = b("MarketplaceComposerPhotoSyncSubscription.graphql"));
    c = a;
    g["default"] = c;
  },
  98
);
__d(
  "MarketplaceComposerHighlightPreviewWrapper.react",
  [
    "MarketplaceComposerPreviewFields",
    "marketplaceComposerDispatchers.hybrid",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.children,
        c = a.field,
        e = a.hidden,
        f = a.onDragEnd,
        g = a.onDragOver;
      a = a.onDragStart;
      var j = d(
          "marketplaceComposerDispatchers.hybrid"
        ).useMarketplaceComposerDispatcher(),
        k = j.dispatch;
      j = i(
        function () {
          k(
            d("MarketplaceComposerPreviewFields").setHighlightField(c.uniqueID)
          );
        },
        [k, c.uniqueID]
      );
      var l = i(
        function () {
          k(d("MarketplaceComposerPreviewFields").setHighlightField(null));
        },
        [k]
      );
      return h.jsx("div", {
        className:
          "l9j0dhe7" +
          (e === !0 ? " b5wmifdl" : "") +
          (a != null ? " a7woen2v" : ""),
        onBlur: l,
        onDragEnd: f,
        onDragOver: g,
        onDragStart: a,
        onFocus: j,
        onMouseEnter: j,
        onMouseLeave: l,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useMarketplaceNumericQuantityChangeHandler",
  ["InputSelection", "parseNumber", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useState,
      j = 999;
    function k(a) {
      return a != null && a > 0 && a <= j;
    }
    function l(a) {
      return a != null && a >= 0 && a <= j;
    }
    function a(a, b, e) {
      var f = i({ end: 0, start: 0 }),
        g = f[0],
        j = f[1];
      return h(
        function (f) {
          f = c("parseNumber")(f);
          var h = String(f);
          if (f == null || g.start == null) {
            e("");
            return;
          } else
            ((b === "composer" && k(f)) || (b === "updater" && l(f))) &&
              (e(h),
              a.current != null && j(d("InputSelection").get(a.current)));
        },
        [g.start, a, b, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useMarketplacePhotosyncCommandSubscription",
  [
    "CometRelay",
    "CurrentUser",
    "react",
    "useMarketplacePhotosyncCommandSubscription.graphql",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useMemo;
    e =
      h !== void 0
        ? h
        : (h = b("useMarketplacePhotosyncCommandSubscription.graphql"));
    var j = {
      subscription: e,
      variables: {
        input: {
          client_subscription_id: c("uuid")(),
          user_id: d("CurrentUser").getID(),
        },
      },
    };
    function a(a) {
      d("CometRelay").useSubscription(
        i(
          function () {
            return babelHelpers["extends"]({ onNext: a }, j);
          },
          [a]
        )
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useMarketplaceSendPhotosyncCommand",
  ["CometRelay", "react", "useMarketplaceSendPhotosyncCommandMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback;
    function a() {
      var a = d("CometRelay").useMutation(
          h !== void 0
            ? h
            : (h = b("useMarketplaceSendPhotosyncCommandMutation.graphql"))
        ),
        c = a[0];
      return i(
        function (a) {
          c({ variables: { input: { command: a } } });
        },
        [c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useMarketplaceSendPhotosyncNotification",
  [
    "CometRelay",
    "react",
    "useMarketplaceSendPhotosyncNotificationMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback;
    function a() {
      var a = d("CometRelay").useMutation(
          h !== void 0
            ? h
            : (h = b("useMarketplaceSendPhotosyncNotificationMutation.graphql"))
        ),
        c = a[0];
      return i(
        function () {
          c({ variables: {} });
        },
        [c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "FBPayConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "/help/pay";
    b = "/payments_terms";
    c = "/facebook_pay";
    d = "https://help.instagram.com/357872324807367";
    e = c + "/settings";
    var g = c + "/security",
      h = 2078111,
      i = 2078082;
    f.LINK_FBPAY_HELP_CENTER = a;
    f.LINK_FBPAY_TERMS = b;
    f.LINK_FBPAY_HUB = c;
    f.LINK_FBPAY_IG_HELP_CENTER = d;
    f.LINK_FBPAY_HUB_SETTINGS = e;
    f.LINK_FBPAY_HUB_SECURITY = g;
    f.ALT_PAY_FLOW_CANCELLED_ERROR_CODE = h;
    f.IDV_REQUIRED_ERROR_CODE = i;
  },
  66
);
__d(
  "PaymentsCometSpinner.react",
  [
    "ix",
    "CometProgressRingIndeterminate.react",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.type;
      a = j(a);
      return i.jsxs("div", {
        className: "l9j0dhe7",
        children: [
          i.jsx(c("CometProgressRingIndeterminate.react"), {
            color: "blue",
            size: 60,
          }),
          i.jsx("div", {
            className: "z3yf0l87 h5g66v2i pmk7jnqg",
            children:
              a && i.jsx(c("TetraIcon.react"), { color: "highlight", icon: a }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      switch (a) {
        case "ecp_secure":
          return d("fbicon")._(h("497245"), 20);
        case "empty":
          return null;
        case "checkmark":
          return d("fbicon")._(h("477820"), 20);
        case "secure":
        default:
          return d("fbicon")._(h("497248"), 20);
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "PaymentsCometOverlayLoadingSpinner.react",
  ["PaymentsCometSpinner.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.shouldShowOverlay;
      a = a === void 0 ? !0 : a;
      return h.jsx("div", {
        className:
          (a ? "ms7hmo2b" : "") +
          " tghn160j k4urcfbm kr520xx4 j9ispegn pmk7jnqg datstx6m n7fi1qx3 i09qtzwb",
        children: h.jsx("div", {
          className: "taijpn5t datstx6m cbu4d94t j83agx80 bp9cbjyn",
          children: h.jsx(c("PaymentsCometSpinner.react"), {}),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FeedCometComposerFooterWithSinglePostButton_footer$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "FeedCometComposerFooterWithSinglePostButton_footer$normalization",
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
  "FeedCometComposerFooterWithSinglePostButton_footer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "FeedCometComposerFooterWithSinglePostButton_footer",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "FeedCometComposerFooterWithSinglePostButton",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "FeedCometComposerFooterWithSinglePostButton.react",
  [
    "fbt",
    "CometComposerOnSubmitContext",
    "CometComposerSubmitButton.react",
    "CometRelay",
    "FeedCometComposerFooterWithSinglePostButton_footer.graphql",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useContext;
    function a(a) {
      var e = a.footer;
      a = a.onPressPost;
      e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "FeedCometComposerFooterWithSinglePostButton_footer.graphql"
            )),
        e
      );
      if (e == null)
        throw c("unrecoverableViolation")(
          "Renderer cannot be null in feed composer footer",
          "comet_composer"
        );
      e = k(c("CometComposerOnSubmitContext"));
      e = e.isSaving;
      return j.jsx("div", {
        className:
          "k4urcfbm discj3wi dati1w0a hv4rvrfc i1fnvgqd j83agx80 rq0escxv bp9cbjyn",
        children: j.jsx(c("CometComposerSubmitButton.react"), {
          disabled: e,
          label: h._("Post"),
          onPress: a,
          testid: void 0,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useMediaUploaderHandlers",
  [
    "CometComposerMediaAttachmentAreaResource",
    "cometIsMimeTypeForMedia",
    "cr:1772245",
    "gkx",
    "react",
    "setTimeout",
    "useCometVideoComposerLog",
    "useComposerViewStateDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var e = c("useComposerViewStateDispatcher")(),
        f = c("useCometVideoComposerLog")(),
        g = h(
          function (g) {
            g = Array.from(g);
            if (!g.length) return;
            var h = a == null ? void 0 : a.launchBlueVideoComposer,
              i = a == null ? void 0 : a.isActorAdmin,
              j = a == null ? void 0 : a.closeCometComposer,
              k = a == null ? void 0 : a.shouldOpenVideoSpecificComposer;
            if (
              g.length === 1 &&
              d("cometIsMimeTypeForMedia").isMimeTypeForVideo(g[0].type) &&
              i === !0 &&
              h != null &&
              k === !0
            )
              if (c("gkx")("1584413")) {
                if (f != null && b("cr:1772245") != null) {
                  i = f.logEvent;
                  i(b("cr:1772245").DIALOG_REQUESTED);
                }
              } else {
                var l = g[0];
                j && j();
                c("setTimeout")(function () {
                  return h(l);
                }, 50);
                return;
              }
            e({ attachmentType: "MEDIA", type: "ACTIVATE_ATTACHMENT_TYPE" });
            e({ files: g, type: "ADD_MEDIA_ATTACHMENT_ITEMS" });
          },
          [
            f,
            e,
            a == null ? void 0 : a.closeCometComposer,
            a == null ? void 0 : a.isActorAdmin,
            a == null ? void 0 : a.launchBlueVideoComposer,
            a == null ? void 0 : a.shouldOpenVideoSpecificComposer,
          ]
        ),
        i = function (a) {
          c("CometComposerMediaAttachmentAreaResource").load(), a();
        };
      return { onFilesSelected: g, onPress: i };
    }
    g["default"] = a;
  },
  98
);
