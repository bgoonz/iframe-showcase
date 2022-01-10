if (self.CavalryLogger) {
  CavalryLogger.start_js(["TBd4oQb"]);
}

__d(
  "MWListCell.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {};
    function a(a) {
      return a;
    }
    function b(a) {
      return a;
    }
    function c(a) {
      return a;
    }
    function d(a) {
      return a;
    }
    function e(a) {
      return a;
    }
    function h(a) {
      return a;
    }
    function i(a) {
      return a;
    }
    a = {
      body: a,
      $$switch: b,
      checkbox: c,
      expander: d,
      icon: e,
      disclosure: h,
      secondaryButton: i,
    };
    f.PrimaryAddOn = g;
    f.SecondaryAddOn = a;
  },
  null
);
__d(
  "MWInboxInfoBlockMessages.bs",
  [
    "fbt",
    "CometLazyDialogTrigger.react",
    "FBID.bs",
    "JSResourceForInteraction",
    "LSContactBlockedByViewerStatus.bs",
    "LsMessengerThreadDamagingActionsSourceOwner",
    "ReQL.bs",
    "ReQLSubscription.bs",
    "ReStore.bs",
    "SkytaleDB",
    "bs_caml",
    "bs_curry",
    "bs_int64",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || b("react");
    function a(a) {
      var c = a.thread,
        d = a.contactId,
        e = a.children,
        f = a.loggingEntryPoint;
      a = a.loggingSource;
      var h = b("ReStore.bs").useHook(void 0),
        j = b("ReQLSubscription.bs").useFirst(
          i.useMemo(
            function () {
              return b("ReQL.bs").getKeyRange(
                b("SkytaleDB").table(h, "contacts").asc,
                { hd: d, tl: 0 }
              );
            },
            [h, JSON.stringify(d)]
          )
        ),
        k =
          j !== void 0
            ? b("bs_caml").i64_eq(
                j.n,
                b("LSContactBlockedByViewerStatus.bs").messageBlocked
              )
            : !1,
        l =
          j !== void 0
            ? b("bs_caml").i64_eq(
                j.n,
                b("LSContactBlockedByViewerStatus.bs").fullyBlocked
              )
            : !1,
        m = k || l ? g._("Unblock") : g._("Block");
      if (j !== void 0)
        return i.jsx(b("CometLazyDialogTrigger.react"), {
          dialogResource: b("JSResourceForInteraction")(
            "MWChatBlockActionDialog",
            { name: "MWChatBlockActionDialog", class: "fluid" }
          ).__setRef("MWInboxInfoBlockMessages.bs"),
          dialogProps: {
            targetFBID: b("FBID.bs").ofStringExn(b("bs_int64").to_string(d)),
            threadFBID: c.a,
            onClose: function (a) {},
            loggingData: {
              entryPoint: f,
              requestId: void 0,
              source: a,
              sourceOwner: b("LsMessengerThreadDamagingActionsSourceOwner").MCI,
            },
          },
          children: function (a, c) {
            return b("bs_curry")._3(e, a, c, m);
          },
        });
      else return null;
    }
    c = a;
    f.make = c;
  },
  null
);
__d(
  "MWChatTabContentNew.bs",
  [
    "MWChatComposerMediaDropTarget.bs",
    "MWChatComposerMessageRequestInfoText.bs",
    "MWChatTabContent.bs",
    "MWChatThreadCommon.bs",
    "MWChatUserComposer.bs",
    "MWLSThreadIsMessageRequest.bs",
    "MWTheme.bs",
    "MWUIThreadEmoji.bs",
    "bs_caml_option",
    "bs_curry",
    "cr:814",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = g || b("react"),
      j = b("cr:814").make;
    c = b("cr:814").$MWChatAudioRecorderStreamSetup$Deferred;
    d = b("cr:814").MWChatComposer;
    e = {
      $MWChatAudioRecorderStreamSetup$Deferred: c,
      MWChatComposer: d,
      make: j,
    };
    function k(a) {
      var c = a.id,
        d = a.items,
        e = a.dispatch,
        f = a.closeTab,
        g = a.otherUserFbid,
        k = a.customLikeEmoji,
        l = a.isTabFocused,
        m = a.hasContent,
        n = a.repliedToMessage,
        o = a.buildSharedMediaViewerURL,
        p = a.closeReplyPreview,
        q = a.onSendMessage,
        r = a.isOptimisticThread;
      a = a.isLoading;
      var s = r !== void 0 ? r : !1;
      r = a !== void 0 ? a : !1;
      var t = b("MWTheme.bs").useTheme(void 0);
      a = i.useRef(0);
      var u = i.useState(function () {
          return !1;
        }),
        v = u[1],
        w = u[0];
      u = i.useRef(null);
      var x = i.useRef(null),
        y = i.useRef(null),
        z = b("MWLSThreadIsMessageRequest.bs").useHook(void 0),
        A;
      A =
        t.TAG === 0
          ? void 0
          : {
              backgroundImage: b("MWTheme.bs").gradient(
                void 0,
                void 0,
                t._0.colors
              ),
            };
      return i.jsx(i.Fragment, {
        children: i.jsx("div", {
          className: (h || (h = b("stylex")))(
            b("MWChatTabContent.bs").styles.main
          ),
          children: i.jsxs(b("MWChatComposerMediaDropTarget.bs").make, {
            children: [
              i.jsx("div", {
                className: h(b("MWChatTabContent.bs").styles.thread),
                style: A,
                children: i.jsx(b("MWChatThreadCommon.bs").make, {
                  id: c,
                  items: d,
                  hasMoreMessages: !1,
                  scrollPositionRef: a,
                  dispatch: e,
                  spacerRef: x,
                  scrollerRef: u,
                  buildSharedMediaViewerURL: o,
                  forceContextBanner: !r,
                }),
              }),
              i.jsx("div", {
                className: h(b("MWChatTabContent.bs").styles.composer),
                children: i.jsx(b("MWChatUserComposer.bs").make, {
                  threadId: c,
                  chatComposer: function (a) {
                    return i.jsx(j, {
                      color: b("MWTheme.bs").bottom(t),
                      otherUserFbid: g,
                      isPreviewThread: !0,
                      isOptimisticThread: s,
                      customLikeEmoji: k,
                      isTabFocused: l,
                      shouldShowMenu: !1,
                      hasContent: m,
                      repliedToMessage: n,
                      actionTrayOpen: w,
                      closeActionTray: function (a) {
                        return b("bs_curry")._1(v, function (a) {
                          return !1;
                        });
                      },
                      openActionTray: function (a) {
                        return b("bs_curry")._1(v, function (a) {
                          return !0;
                        });
                      },
                      fileUploadHandlerRef: y,
                      messageRequestInfoText: i.jsx(
                        b("MWChatComposerMessageRequestInfoText.bs").make,
                        {
                          closeTab: function (a) {},
                          size: "large",
                          shouldShowMessageRequestInfoText: z,
                        }
                      ),
                      closeReplyPreview: p,
                      openTabFromPreview: function (a) {
                        return e("OpenTabFromPreview");
                      },
                      closeTab: f,
                      onSendMessage: q,
                    });
                  },
                }),
              }),
            ],
            disabled: !1,
            fileUploadHandlerRef: y,
            xstyle: b("MWChatTabContent.bs").styles.dropTarget,
          }),
        }),
      });
    }
    c = { make: k };
    function a(a) {
      var c = a.id,
        d = a.isTabFocused,
        e = a.dispatch,
        f = a.closeTab,
        g = a.messages,
        h = a.hasContent,
        j = a.changeRepliedToMessage,
        l = a.repliedToMessage,
        m = a.buildSharedMediaViewerURL,
        n = a.closeReplyPreview,
        o = a.onSendMessage,
        p = a.isOptimisticThread;
      a = a.isLoading;
      p = p !== void 0 ? p : !1;
      a = a !== void 0 ? a : !1;
      if (typeof c === "object") {
        var q = c.NAME;
        q =
          q === "User" || q === "Page"
            ? b("bs_caml_option").some(c.VAL)
            : void 0;
      } else q = void 0;
      var r = b("bs_curry")._1(b("MWUIThreadEmoji.bs").useEmoji, void 0),
        s = function (a) {
          if (typeof a === "object" && a.NAME === "ClickReplyTo")
            return b("bs_curry")._1(j, a.VAL);
          else return e(a);
        };
      return i.jsx(k, {
        id: c,
        items: g,
        dispatch: s,
        closeTab: f,
        otherUserFbid: q,
        customLikeEmoji: r,
        isTabFocused: d,
        hasContent: h,
        repliedToMessage: l,
        buildSharedMediaViewerURL: m,
        closeReplyPreview: n,
        onSendMessage: o,
        isOptimisticThread: p,
        isLoading: a,
      });
    }
    d = b("MWChatTabContent.bs").styles;
    a = a;
    f.styles = d;
    f.$MWChatComposer$OR$WorkChatComposer$requireCond = b("cr:814");
    f.Composer = e;
    f.Inner = c;
    f.make = a;
  },
  null
);
__d(
  "MWChatTabNew.bs",
  [
    "CometPlaceholder.react",
    "LSMailboxMessagesRangeQueryDirection.bs",
    "MWChatComposer.bs",
    "MWChatComposerMediaDropTarget.bs",
    "MWChatConnectionStatusCard.bs",
    "MWChatLoadMoreItemsIncrementally.bs",
    "MWChatTabContentNew.bs",
    "MWChatTabContentStyles.bs",
    "MWLSChatThreadHook.bs",
    "MWLSFetchMessagesPage.bs",
    "MWLSRepliedToMessage.bs",
    "MWLSTheme.bs",
    "MWLSThreadHasMoreMessages.bs",
    "MWTheme.bs",
    "MWThreadKey.bs",
    "MWThread_DEPRECATED.bs",
    "MWUIChatTabState.bs",
    "XCometMessengerMediaControllerRouteBuilder",
    "XCometMessengerPhotoControllerRouteBuilder",
    "bs_belt_Option",
    "bs_caml_obj",
    "bs_caml_option",
    "bs_curry",
    "cr:272",
    "qex",
    "react",
    "recoverableViolation",
    "stylex",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = g || b("react");
    d = [];
    function a(a) {}
    var j = [d, a, !1],
      k =
        b("cr:272") == null
          ? function (a, b, c) {
              return [];
            }
          : b("cr:272").useMessageItems;
    function l(a) {
      var c = a.hasContent,
        d = a.isTabFocused,
        e = a.openTabForGroup;
      a = function (a) {
        if (typeof a === "object" && a.NAME === "Group") return e(a.VAL, !1);
        else {
          b("recoverableViolation")("expected group", "messenger_web_product");
          return;
        }
      };
      var f = i.useRef(null);
      return i.jsx("div", {
        className: (h || (h = b("stylex")))(
          b("MWChatTabContentStyles.bs").styles.main
        ),
        children: i.jsxs(b("MWChatComposerMediaDropTarget.bs").make, {
          children: [
            i.jsx("div", {
              className: h(b("MWChatTabContentStyles.bs").styles.thread),
            }),
            i.jsx("div", {
              className: h(b("MWChatTabContentStyles.bs").styles.composer),
              children: i.jsx(b("MWChatComposer.bs").make, {
                color: b("MWTheme.bs").bottom(b("MWTheme.bs").$$default),
                otherUserFbid: void 0,
                isPreviewThread: !0,
                customLikeEmoji: void 0,
                isTabFocused: d,
                shouldShowMenu: !1,
                hasContent: c,
                repliedToMessage: void 0,
                actionTrayOpen: !1,
                closeActionTray: function (a) {},
                openActionTray: function (a) {},
                fileUploadHandlerRef: f,
                closeReplyPreview: function (a) {},
                openTabFromPreview: function (a) {},
                closeTab: function (a) {},
                onSendMessage: a,
              }),
            }),
          ],
          disabled: !1,
          fileUploadHandlerRef: f,
          xstyle: b("MWChatTabContentStyles.bs").styles.dropTarget,
        }),
      });
    }
    e = { make: l };
    function m(a) {
      var c = a.threadId;
      a = a.children;
      b("MWLSChatThreadHook.bs").useThread(c);
      return a;
    }
    d = { make: m };
    function n(a) {
      var c = a.isTabFocused,
        d = a.hasContent,
        e = a.openTabForGroup,
        f = a.openTabForUser,
        g = a.openTabForPage;
      a = a.isOptimisticThread;
      a = a !== void 0 ? a : !1;
      var h = b("MWThread_DEPRECATED.bs").useIdExn(void 0),
        l = b("MWThreadKey.bs").useIdMemoizedExn(void 0),
        m = b("MWLSRepliedToMessage.bs").useCurrentlyRepliedToMessage(void 0),
        n = m[2],
        o = function (a) {
          var c = a.NAME;
          if (c === "Group") return e(a.VAL, !1);
          else if (c === "Page") return g(a.VAL, !1);
          else if (c === "User") return f(a.VAL, !1);
          else
            return b("unrecoverableViolation")(
              "Not supported",
              "messenger_web_product"
            );
        },
        p = function (a, c) {
          if (c)
            return b("XCometMessengerPhotoControllerRouteBuilder").buildURL({
              photo_ids: a.photo_ids,
              fbid: a.fbid,
              message_id: a.message_id,
            });
          else
            return b("XCometMessengerMediaControllerRouteBuilder").buildURL({
              thread_id: h.VAL,
              attachment_id: a.fbid,
              message_id: a.message_id,
            });
        },
        q = i.useState(function () {}),
        r = q[1];
      q = b("bs_caml_obj").caml_equal(
        b("bs_caml_option").nullable_to_opt(b("qex")._("414")),
        "V2"
      )
        ? j
        : b("MWChatLoadMoreItemsIncrementally.bs").useLoadMore(
            void 0,
            void 0,
            void 0,
            b("bs_curry")._3(k, void 0, 0, void 0),
            b("MWLSFetchMessagesPage.bs").useFetchMessagesPage(void 0),
            b("MWLSThreadHasMoreMessages.bs").useThreadHasMoreMessages(void 0)
          );
      var s = q[2],
        t = q[1];
      q = q[0];
      var u = [{ NAME: "Messages", VAL: q }],
        v = q.length;
      q = s && v < 10;
      l = b("MWLSTheme.bs").useTheme(l);
      i.useEffect(
        function () {
          s &&
            v < 10 &&
            b("bs_curry")._1(
              t,
              b("LSMailboxMessagesRangeQueryDirection.bs").before
            );
        },
        [v, s, t]
      );
      return i.jsx(b("CometPlaceholder.react"), {
        children: i.jsx(b("MWTheme.bs").provider, {
          theme: l,
          children: i.jsx(b("MWChatTabContentNew.bs").make, {
            id: h,
            isTabFocused: c,
            dispatch: function (a) {
              if (typeof a === "object") return;
              else if (a === "OpenTabFromPreview") return o(h);
              else if (a === "CloseReplyPreview")
                return b("bs_curry")._1(n, void 0);
              else return;
            },
            closeTab: function (a) {},
            messages: u,
            hasContent: d,
            changeRepliedToMessage: m[1],
            repliedToMessage: m[0],
            buildSharedMediaViewerURL: p,
            closeReplyPreview: function (a) {
              return b("bs_curry")._1(r, function (a) {});
            },
            onSendMessage: o,
            isOptimisticThread: a,
            isLoading: q,
          }),
        }),
        fallback: null,
      });
    }
    a = { make: n };
    function c(a) {
      var c = a.previewThreadID,
        d = a.isTabFocused,
        e = a.isFetching,
        f = a.hasContent,
        g = a.tokens,
        h = a.openTabForUser,
        j = a.openTabForGroup,
        k = a.openTabForPage;
      a = a.empty;
      a = a !== void 0 ? b("bs_caml_option").valFromOption(a) : null;
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(b("MWChatConnectionStatusCard.bs").make, {}),
          e
            ? null
            : c !== void 0
            ? i.jsx(b("MWThread_DEPRECATED.bs").make, {
                id: c,
                children: i.jsx(b("MWThreadKey.bs").make, {
                  id: b("MWThread_DEPRECATED.bs").toThreadKey(c),
                  children: i.jsx(b("MWUIChatTabState.bs").Provider.make, {
                    tab: { _0: c },
                    children: i.jsx(m, {
                      children: i.jsx(n, {
                        isTabFocused: d,
                        hasContent: f,
                        openTabForGroup: j,
                        openTabForUser: h,
                        openTabForPage: k,
                      }),
                      threadId: c,
                    }),
                  }),
                }),
              })
            : g.length !== 0
            ? i.jsx(b("MWUIChatTabState.bs").Provider.make, {
                tab: 0,
                tokenProvider: function (a) {
                  return g.map(function (a) {
                    return a.getRawData().id;
                  });
                },
                children: i.jsx(l, {
                  tokens: g,
                  hasContent: f,
                  isTabFocused: d,
                  openTabForGroup: j,
                }),
              })
            : a,
        ],
      });
    }
    var o = b("bs_belt_Option").getWithDefault,
      p = b("MWChatTabContentStyles.bs").styles,
      q = 10;
    c = c;
    f.$pipe$question = o;
    f.contentStyles = p;
    f.defaultUseLoadMoreValue = j;
    f.$Many$default$MWLSLoadOpenThreadMessages$$V2$null$requireCond =
      b("cr:272");
    f.ComposerToCreateNewThread = e;
    f.ExistingThreadPreviewContainer = d;
    f.maxMessageCountForPreview = q;
    f.ExistingThreadPreview = a;
    f.make = c;
  },
  null
);
__d(
  "BaseSubscriptionTokenizer.react",
  [
    "CometInternalTypeaheadStateProvider",
    "CometInternalTypeaheadSubscriptionProvider",
    "CometTokenizerInternal.react",
    "emptyFunction",
    "react",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = [];
    function a(a, b) {
      var d = a.dataSource,
        e = a.dataSourceFetchConfigParams,
        f = a.decorators,
        g = f === void 0 ? [] : f;
      f = a.emptyEntries_DO_NOT_USE;
      var j = a.onAddToken;
      j = j === void 0 ? c("emptyFunction") : j;
      var k = a.onBlur;
      k = k === void 0 ? c("emptyFunction") : k;
      var l = a.onChangeTokens,
        m = a.onClose,
        n = a.onEscape;
      n = n === void 0 ? c("emptyFunction") : n;
      var o = a.onFocus;
      o = o === void 0 ? c("emptyFunction") : o;
      var p = a.onOpen,
        q = a.onRemoveToken;
      q = q === void 0 ? c("emptyFunction") : q;
      var r = a.onSearchCompletion;
      r = r === void 0 ? c("emptyFunction") : r;
      var s = a.viewRole;
      s = s === void 0 ? "listbox" : s;
      var t = a.tokensStrategyRenderer,
        u = a.tokens,
        v = a.loggingContext;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "dataSource",
        "dataSourceFetchConfigParams",
        "decorators",
        "emptyEntries_DO_NOT_USE",
        "onAddToken",
        "onBlur",
        "onChangeTokens",
        "onClose",
        "onEscape",
        "onFocus",
        "onOpen",
        "onRemoveToken",
        "onSearchCompletion",
        "viewRole",
        "tokensStrategyRenderer",
        "tokens",
        "loggingContext",
      ]);
      var w = c("useStable")(function () {
        var a = c("CometTokenizerInternal.react");
        g.forEach(function (b) {
          var c = b.decorate;
          b = b.params;
          a = c(a, b);
        });
        return a;
      });
      return h.jsx(c("CometInternalTypeaheadStateProvider"), {
        emptyEntries_DO_NOT_USE: f,
        onClose: m,
        onOpen: p,
        children: h.jsx(c("CometInternalTypeaheadSubscriptionProvider"), {
          dataSource: d,
          dataSourceFetchConfigParams: e,
          loggingContext: v,
          children: h.jsx(
            w,
            babelHelpers["extends"]({}, a, {
              commandConfigs: i,
              onBackspace: c("emptyFunction"),
              onBlur: k,
              onChangeEntries: l,
              onDownArrow: c("emptyFunction"),
              onEnter: c("emptyFunction"),
              onEscape: n,
              onFocus: o,
              onHighlightEntry: c("emptyFunction"),
              onPressEntry: j,
              onRemoveEntry: q,
              onSearchCompletion: r,
              onShiftTab: c("emptyFunction"),
              onTab: c("emptyFunction"),
              onUpArrow: c("emptyFunction"),
              ref: b,
              selectedEntries: u,
              tokensStrategyRenderer: t,
              viewRole: s,
            })
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometTokenizerInputStrategy.react",
  [
    "BaseTextInput_DEPRECATED.react",
    "CometTokenizerInputWidthResolver.react",
    "cometTypeaheadInputWebkitStyles",
    "react",
    "stylex",
    "useCometTypeaheadInputStrategyOnChangeHandler",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        disabled: { cursor: "rj84mg9z" },
        input: {
          backgroundColor: "g5ia77u1",
          borderTop: "gcieejh5",
          borderEnd: "bn081pho",
          borderBottom: "humdl8nn",
          borderStart: "izx4hr6d",
          boxSizing: "rq0escxv",
          color: "oo9gr5id",
          display: "nc684nl6",
          fontSize: "jagab5yi",
          fontWeight: "knj5qynh",
          lineHeight: "fo6rh5oj",
          marginTop: "aov4n071",
          marginEnd: "oi9244e8",
          marginBottom: "bi6gxh9e",
          marginStart: "h676nmdw",
          maxWidth: "d2edcug0",
          outline: "lzcic4wl",
          resize: "ieid39z1",
        },
        root: {
          cursor: "o6r2urh6",
          maxWidth: "d2edcug0",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
      };
    function a(a, b) {
      var d = a.ariaProps;
      a.description;
      a.errorMessage;
      var e = a.id,
        f = a.inputEndContent,
        g = a.inputStartContent,
        j = a.inputExtraProps;
      j = j === void 0 ? {} : j;
      var k = j.xstyle,
        l = a.isDisabled;
      a.label;
      j = a.onChange;
      var m = a.placeholder,
        n = a.queryString,
        o = a.testid,
        p = babelHelpers.objectWithoutPropertiesLoose(a, [
          "ariaProps",
          "description",
          "errorMessage",
          "id",
          "inputEndContent",
          "inputStartContent",
          "inputExtraProps",
          "isDisabled",
          "label",
          "onChange",
          "placeholder",
          "queryString",
          "testid",
        ]),
        q = (o = e) != null ? o : c("useCometUniqueID")(),
        r = c("useCometTypeaheadInputStrategyOnChangeHandler")({ onChange: j });
      return h.jsxs("div", {
        className: c("stylex")(i.root, l === !0 && i.disabled),
        children: [
          g,
          h.jsx(c("CometTokenizerInputWidthResolver.react"), {
            placeholder: m,
            queryString: n,
            children: function (a) {
              var e;
              return h.jsx(
                c("BaseTextInput_DEPRECATED.react"),
                babelHelpers["extends"]({}, d, p, {
                  autoComplete: "off",
                  className: c("stylex")(
                    i.input,
                    k,
                    c("cometTypeaheadInputWebkitStyles")["default"]
                  ),
                  "data-testid": void 0,
                  disabled: l,
                  id: q,
                  onChange: r,
                  placeholder: (e = m) != null ? e : "",
                  ref: b,
                  spellCheck: !1,
                  style: { width: a },
                  type: "search",
                  value: n,
                })
              );
            },
          }),
          f,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "MWChatSearchInputStrategy.react",
  [
    "fbt",
    "CometScreenReaderText.react",
    "CometTokenizerInputStrategy.react",
    "react",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo,
      k = { inputXStyle: { paddingBottom: "osnr6wyh" } };
    function a(a, b) {
      var d = j(function () {
          return { xstyle: k.inputXStyle };
        }, []),
        e = c("useCometUniqueID")();
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(
            c("CometTokenizerInputStrategy.react"),
            babelHelpers["extends"]({}, a, {
              ariaProps: babelHelpers["extends"]({}, a.ariaProps, {
                "aria-describedby": e,
              }),
              inputExtraProps: d,
              ref: b,
            })
          ),
          i.jsx(c("CometScreenReaderText.react"), {
            "aria-hidden": !0,
            id: e,
            text: h._("Search by name or group"),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "MWChatSearchTypeaheadViewStrategy.react",
  [
    "CometTypeaheadProgressGlimmer.react",
    "MWChatSearchLightspeedTypeaheadViewList.react",
    "MWJewelSearchTypeaheadViewItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.ariaProps,
        d = a.entries,
        e = a.extraViewProps,
        f = a.highlightedEntry,
        g = a.isLoading;
      a.onAbandonTypeahead_DO_NOT_USE;
      var j = babelHelpers.objectWithoutPropertiesLoose(a, [
          "ariaProps",
          "entries",
          "extraViewProps",
          "highlightedEntry",
          "isLoading",
          "onAbandonTypeahead_DO_NOT_USE",
        ]),
        k = e == null ? void 0 : e.getIsViewItemDisabled,
        l = i(
          function (a) {
            return k ? k(a) : !1;
          },
          [k]
        );
      return h.jsxs(h.Fragment, {
        children: [
          g && h.jsx(c("CometTypeaheadProgressGlimmer.react"), {}),
          h.jsx(c("MWChatSearchLightspeedTypeaheadViewList.react"), {
            ariaProps: b,
            entries: d,
            highlightedEntry: f,
            children: function (a) {
              var b = a.entry,
                d = a.isActive;
              a = a.itemRole;
              return h.createElement(
                c("MWJewelSearchTypeaheadViewItem.react"),
                babelHelpers["extends"]({}, j, {
                  entry: b,
                  isActive: d,
                  isDisabled: l(b),
                  key: b.getKey(),
                  role: a,
                })
              );
            },
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
  "ReStore.re",
  ["ReStore.bs"],
  function (a, b, c, d, e, f) {
    a = b("ReStore.bs").Provider.make;
    f.Provider_make = a;
    c = b("ReStore.bs").useHook;
    f.useHook = c;
    d = b("ReStore.bs").Provider;
    f.Provider = d;
  },
  null
);
__d(
  "withMWChatEscapeDecorator",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a, b) {
      var c = b.onSearchAbandon;
      return h.forwardRef(function (b, d) {
        var e = b.onChange,
          f = b.onEscape,
          g = b.queryString,
          j = b.selectedEntries;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "onChange",
          "onEscape",
          "queryString",
          "selectedEntries",
        ]);
        var k = i(
          function () {
            g !== "" ? e("") : j.length === 0 && c && c(), f && f();
          },
          [g, j.length, f, e]
        );
        return h.jsx(
          a,
          babelHelpers["extends"]({}, b, {
            onChange: e,
            onEscape: k,
            queryString: g,
            ref: d,
            selectedEntries: j,
          })
        );
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "withMWChatSearchTokenManagementDecorator",
  ["MWChatSearchResultType", "orEmptyArray", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect;
    function a(a, b) {
      var d = b.dataSource;
      return h.forwardRef(function (b, e) {
        var f = b.onChangeEntries,
          g = b.onPressEntry,
          k = b.onRemoveEntry,
          l = b.onSearchCompletion,
          m = b.selectedEntries;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "onChangeEntries",
          "onPressEntry",
          "onRemoveEntry",
          "onSearchCompletion",
          "selectedEntries",
        ]);
        j(function () {
          return d.setTokens(m);
        }, []);
        var n = i(
            function (a) {
              var b = a.getRawData();
              b = b.resultType;
              if (b === c("MWChatSearchResultType").USER) {
                b = [].concat(m, [a]);
                d.setTokens(b);
                f(b);
              }
              g && g(a);
            },
            [f, g, m]
          ),
          o = i(
            function (a) {
              var b = c("orEmptyArray")(m).filter(function (b) {
                return b.getKey() !== a.getKey();
              });
              f(b);
              d != null && d.setTokens(b);
              k && k(a);
            },
            [f, k, m]
          ),
          p = i(
            function () {
              d.setTokens([]), l && l();
            },
            [l]
          );
        return h.jsx(
          a,
          babelHelpers["extends"]({}, b, {
            onChangeEntries: f,
            onPressEntry: n,
            onRemoveEntry: o,
            onSearchCompletion: p,
            ref: e,
            selectedEntries: m,
          })
        );
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "MWChatLightSpeedSearchTypeahead.react",
  [
    "BaseSubscriptionTokenizer.react",
    "MAWGating.re",
    "MWChatSearchInputStrategy.react",
    "MWChatSearchIssueLightspeedQuery.re",
    "MWChatSearchTypeaheadLightspeedSubscriptionDataSource",
    "MWChatSearchTypeaheadViewStrategy.react",
    "ReStore.re",
    "react",
    "useBaseTokenizerDecorators",
    "useCometTokenizerListTokenStrategy",
    "useStable",
    "withMWChatEscapeDecorator",
    "withMWChatSearchTokenManagementDecorator",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = b.useState;
    function a(a) {
      var b = a.excludedIDs,
        e = a.getIsViewItemDisabled,
        f = a.includeRecommendations,
        g = f === void 0 ? !0 : f;
      f = a.isDisabled;
      var m = a.layoutStategyRenderer,
        n = a.onAddToken,
        o = a.onChangeTokens,
        p = a.onSearchAbandon,
        q = a.onSearchCompletion,
        r = a.tokenItemRenderer,
        s = a.tokens;
      a = a.xstyles;
      var t = l(""),
        u = t[0];
      t = t[1];
      var v = d("ReStore.re").useHook(),
        w = c("useStable")(function () {
          return new (c(
            "MWChatSearchTypeaheadLightspeedSubscriptionDataSource"
          ))({
            database: v,
            excludedIDs: b,
            includeRecommendations: g,
            lightspeedSupportedTypes: c("MWChatSearchIssueLightspeedQuery.re")
              .allSupportedTypes,
            source: c("MWChatSearchIssueLightspeedQuery.re").Surfaces.universal,
          });
        });
      p = c("useBaseTokenizerDecorators")({
        escapeDecorator: {
          decorate: c("withMWChatEscapeDecorator"),
          params: { onSearchAbandon: p },
        },
        tokenManagementDecorator: {
          decorate: c("withMWChatSearchTokenManagementDecorator"),
          params: { dataSource: w },
        },
      });
      var x = k(null),
        y = x.current;
      i(
        function () {
          y && y.focus();
        },
        [y, s]
      );
      i(
        function () {
          w.setTokens(s);
        },
        [w, s]
      );
      r = c("useCometTokenizerListTokenStrategy")({ tokenItemRenderer: r });
      var z = j(
        function () {
          return { getIsViewItemDisabled: e };
        },
        [e]
      );
      return h.jsx(c("BaseSubscriptionTokenizer.react"), {
        autoFocus: !0,
        dataSource: w,
        dataSourceFetchConfigParams: d("MAWGating.re").isArmadillo()
          ? { requestFlow: "network-upon-approve" }
          : {},
        decorators: p,
        extraViewProps: z,
        inputStrategyRenderer: c("MWChatSearchInputStrategy.react"),
        isDisabled: f,
        layoutStrategyRenderer: m,
        loggingContext: "messenger_chat",
        onAddToken: n,
        onChange: t,
        onChangeTokens: o,
        onSearchCompletion: q,
        queryString: u,
        ref: x,
        testid: void 0,
        tokens: s,
        tokensStrategyRenderer: r,
        viewStrategyRenderer: c("MWChatSearchTypeaheadViewStrategy.react"),
        xstyles: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWChatLightSpeedSearchTypeahead.bs",
  ["MWChatLightSpeedSearchTypeahead.react"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("MWChatLightSpeedSearchTypeahead.react");
    f.make = a;
  },
  null
);
__d(
  "LSWhatsAppConnectStatus.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    f.whatsappNotAddressable = a;
    f.whatsappAddressable = c;
  },
  null
);
__d(
  "MWLSGroupMembershipMemberCell.bs",
  [
    "fbt",
    "ix",
    "CometLazyPopoverTrigger.react",
    "CometMiddot.react",
    "FBID.bs",
    "JSResource",
    "LSContactBlockedByViewerStatus.bs",
    "LSWhatsAppConnectStatus.bs",
    "MWInboxRouteBuilder.bs",
    "MWListCell.bs",
    "TetraListCell.react",
    "bs_caml",
    "bs_caml_option",
    "bs_curry",
    "bs_int64",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || b("react");
    function a(a) {
      var c = a.thread,
        d = a.participant,
        e = a.contact,
        f = a.showAdminIndicator,
        i = a.isMAWParticipantSuperAdmin,
        k = a.isSecure,
        l = a.cellRef,
        m = b("bs_curry")._1(b("MWInboxRouteBuilder.bs").buildURL, {
          thread_key: b("FBID.bs").ofStringExn(b("bs_int64").to_string(e.a)),
        });
      a = d.f;
      a = a !== void 0 ? a : !1;
      var n = b("bs_caml").i64_neq(
          e.n,
          b("LSContactBlockedByViewerStatus.bs").unblocked
        ),
        o = b("bs_caml").i64_eq(
          e.P,
          b("LSWhatsAppConnectStatus.bs").whatsappNotAddressable
        );
      if (k && o) k = g._("Pending").toString();
      else if (f && !i) k = a ? g._("Admin") : null;
      else {
        o = d.g;
        k = o !== void 0 ? o : null;
      }
      var p = [
          n ? g._("Blocked") : null,
          n && (f ? a : d.g !== void 0)
            ? j.jsx(b("CometMiddot.react"), {}, "middot")
            : null,
          k,
        ],
        q = p.some(function (a) {
          return a !== null;
        });
      return j.jsx(b("CometLazyPopoverTrigger.react"), {
        popoverResource: b("JSResource")(
          "MWLSGroupMembershipMenu.react"
        ).__setRef("MWLSGroupMembershipMemberCell.bs"),
        popoverProps: {
          onClose: function (a) {},
          thread: c,
          participant: d,
          contact: e,
          isMAWParticipantSuperAdmin: i,
        },
        popoverType: "menu",
        align: "end",
        preloadTrigger: "button",
        children: function (a, c, f, i, k, n, o) {
          f = {
            headline: e.h,
            addOnPrimary: {
              addOn: void 0,
              shape: "circle",
              size: 36,
              source: { uri: e.b },
              alt: e.h,
              linkProps: { url: m },
              type: "profile-photo",
            },
            addOnSecondaryRef: a,
            addOnSecondary: b("MWListCell.bs").SecondaryAddOn.icon({
              "aria-label": g._("Card dropdown menu"),
              color: "secondary",
              icon: b("fbicon")._(h("484388"), 24),
              onHoverOut: function (a) {
                return b("bs_curry")._1(k, void 0);
              },
              onHoverIn: b("bs_curry").__1(i),
              onPress: function (a) {
                return b("bs_curry")._1(c, void 0);
              },
              onPressIn: b("bs_curry").__1(n),
              type: "icon",
              testid:
                "mw_participant_list_dropdown_menu_button_" +
                b("bs_int64").to_string(d.b),
            }),
            level: 4,
          };
          o = q
            ? b("bs_caml_option").some(j.jsx(j.Fragment, { children: p }))
            : void 0;
          o !== void 0 && (f.body = b("bs_caml_option").valFromOption(o));
          l !== void 0 && (f.ref = b("bs_caml_option").valFromOption(l));
          return j.jsx(b("TetraListCell.react"), f);
        },
      });
    }
    c = a;
    f.make = c;
  },
  null
);
__d(
  "MWLSGroupMembershipMemberList.bs",
  [
    "LSMessagingThreadTypeUtil.bs",
    "MAWThreadId.bs",
    "MWLSGroupMembershipMemberCell.bs",
    "Promise",
    "ReQL.bs",
    "ReQLSubscription.bs",
    "ReStore.bs",
    "SkytaleDB",
    "bs_curry",
    "bs_int64",
    "cr:9864",
    "react",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var c = a.thread,
        d = a.showAdminsOnly,
        e = a.showAdminIndicator,
        f = b("ReStore.bs").useHook(void 0);
      a = h.useState(function () {});
      var g = a[1],
        i = a[0];
      a = b("ReQLSubscription.bs").useArray(
        h.useMemo(
          function () {
            return b("ReQL.bs").mergeJoin(
              b("ReQL.bs").getKeyRange(
                b("SkytaleDB").table(f, "participants").asc,
                { hd: c.a, tl: 0 }
              ),
              b("SkytaleDB").table(f, "contacts").asc
            );
          },
          [f, JSON.stringify(c.a)]
        )
      );
      a = a.slice(0).sort(function (a, b) {
        return b[1].o - a[1].o;
      });
      d = d
        ? a.filter(function (a) {
            a = a[0].f;
            if (a !== void 0) return a;
            else return !1;
          })
        : a;
      var j = b("LSMessagingThreadTypeUtil.bs").isSecure(c.c);
      h.useEffect(
        function () {
          if (!(b("cr:9864") == null) && j) {
            var a = b("MAWThreadId.bs").ofThreadKey(c.a);
            a &&
              b("bs_curry")
                ._1(
                  b("bs_curry")._1(b("cr:9864").getGroupSuperAdmin, {
                    threadId: a._0,
                  }).sendAndReceive,
                  void 0
                )
                .then(function (a) {
                  b("bs_curry")._1(g, function (b) {
                    return a;
                  });
                  return b("Promise").resolve(void 0);
                });
          }
        },
        [JSON.stringify(c.a)]
      );
      return d.map(function (a) {
        var d = a[1];
        return h.jsx(
          b("MWLSGroupMembershipMemberCell.bs").make,
          {
            thread: c,
            participant: a[0],
            contact: d,
            showAdminIndicator: e,
            isMAWParticipantSuperAdmin:
              j && i !== void 0 ? i === b("bs_int64").to_string(d.a) : !1,
            isSecure: j,
          },
          b("bs_int64").to_string(d.a)
        );
      });
    }
    c = a;
    f.$MAWBackendBridge$requireCond = b("cr:9864");
    f.make = c;
  },
  null
);
__d(
  "MWInboxInfoNotifications.bs",
  [
    "fbt",
    "CometLazyDialogTrigger.react",
    "JSResource",
    "MWChatCalculateIsMutedFromExpireTime.bs",
    "MWChatUnmuteThread.bs",
    "MessengerMuteUtils.bs",
    "bs_curry",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || b("react");
    function a(a) {
      var c = a.thread,
        d = a.children;
      a = b("MessengerMuteUtils.bs").calcMuteUntilMs(c);
      var e = b("MWChatCalculateIsMutedFromExpireTime.bs").useHook(a),
        f = b("MWChatUnmuteThread.bs").useHook(void 0),
        h = e ? g._("Unmute Conversation") : g._("Mute Conversation");
      a = b("MessengerMuteUtils.bs").mutedUntilLabel(a / 1e3);
      var j = a !== void 0 ? a : void 0;
      return i.jsx(b("CometLazyDialogTrigger.react"), {
        dialogResource: b("JSResource")(
          "LSMuteThreadDialogForJSResource.react"
        ).__setRef("MWInboxInfoNotifications.bs"),
        dialogProps: { thread: c },
        children: function (a, g) {
          return b("bs_curry")._5(
            d,
            function (d) {
              if (e) return b("bs_curry")._1(f, c);
              else return b("bs_curry")._1(a, void 0);
            },
            g,
            h,
            j,
            e
          );
        },
      });
    }
    c = a;
    f.make = c;
  },
  null
);
__d(
  "MWSearchTypeaheadViewItemDisabledHook.bs",
  ["react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var b = h.useMemo(
          function () {
            return [
              a.some(function (a) {
                return a.getIsInstagramAccount();
              }),
              a.some(function (a) {
                return a.getIsGroupsXacIneligible();
              }),
            ];
          },
          [a]
        ),
        c = b[1],
        d = b[0];
      return h.useCallback(
        function (a) {
          var b = a.getIsInstagramAccount(),
            e = a.getIsGroupsXacIneligible();
          a = a.getIsInteropIneligible();
          if ((c && b) || (d && e)) return !0;
          else return a;
        },
        [d, c]
      );
    }
    f.useIsDisabled = a;
  },
  null
);
__d(
  "CometTokenizerLayoutContextualStrategy.react",
  [
    "CometTokenizerInternalLayoutContextualStrategy.react",
    "CometTypeaheadHelperText.react",
    "react",
    "useCometInternalTypeaheadFetch",
    "useCometInternalTypeaheadState",
    "useCometTokenizerInternalLayoutContextualStrategyHandlers",
    "useCometTypeaheadInputRefs",
    "useCometTypeaheadLayoutContextualStrategyARIAProps",
    "useCometTypeaheadLayoutStrategyStyles",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        view: {
          backgroundColor: "cwj9ozl2",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
          maxHeight: "nu4hu5il",
          minHeight: "e9s0xebz",
        },
      };
    function a(a, b) {
      var d = a.extraLayoutProps;
      d = d === void 0 ? {} : d;
      var e = d.afterViewContent;
      d = d.beforeViewContent;
      var f = a.helperText,
        g = a.isDisabled,
        j = a.label,
        k = a.onAbandonTypeahead_DO_NOT_USE,
        l = a.onBackspace,
        m = a.onBlur,
        n = a.onChange,
        o = a.onClick,
        p = a.onDownArrow,
        q = a.onEnter,
        r = a.onEscape,
        s = a.onHighlightEntry,
        t = a.onOutsideClick,
        u = a.onPressEntry,
        v = a.onRemoveEntry,
        w = a.onShiftTab,
        x = a.onTab,
        y = a.onUpArrow,
        z = a.queryString,
        A = a.viewRole,
        B = a.selectedEntries,
        C = a.xstyles;
      C = C === void 0 ? {} : C;
      var D = C.viewXStyle_DO_NOT_USE;
      C = babelHelpers.objectWithoutPropertiesLoose(C, [
        "viewXStyle_DO_NOT_USE",
      ]);
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "extraLayoutProps",
        "helperText",
        "isDisabled",
        "label",
        "onAbandonTypeahead_DO_NOT_USE",
        "onBackspace",
        "onBlur",
        "onChange",
        "onClick",
        "onDownArrow",
        "onEnter",
        "onEscape",
        "onHighlightEntry",
        "onOutsideClick",
        "onPressEntry",
        "onRemoveEntry",
        "onShiftTab",
        "onTab",
        "onUpArrow",
        "queryString",
        "viewRole",
        "selectedEntries",
        "xstyles",
      ]);
      b = c("useCometTypeaheadInputRefs")(b);
      var E = b.composedRef;
      b = b.inputRef;
      var F = c("useCometInternalTypeaheadState")(),
        G = F.activeEntries,
        H = F.highlightedEntry;
      F = F.isOpened;
      var I = c("useCometInternalTypeaheadFetch")();
      I = I.isLoading;
      b = c("useCometTokenizerInternalLayoutContextualStrategyHandlers")({
        inputRef: b,
        isDisabled: g,
        onAbandonTypeahead_DO_NOT_USE: k,
        onBackspace: l,
        onBlur: m,
        onChange: n,
        onClick: o,
        onDownArrow: p,
        onEnter: q,
        onEscape: r,
        onHighlightEntry: s,
        onOutsideClick: t,
        onPressEntry: u,
        onRemoveEntry: v,
        onShiftTab: w,
        onTab: x,
        onUpArrow: y,
        queryString: z,
        selectedEntries: B,
      });
      k = c("useCometTypeaheadLayoutContextualStrategyARIAProps")({
        activeEntries: G,
        helperText: f,
        highlightedEntry: H,
        inputLabel: j,
        isOpened: F,
        viewRole: A,
      });
      l = c("useCometTypeaheadLayoutStrategyStyles")({
        xstyles: babelHelpers["extends"]({}, C, {
          viewXStyle_DO_NOT_USE: [i.view, D],
        }),
      });
      return h.jsx(
        c("CometTokenizerInternalLayoutContextualStrategy.react"),
        babelHelpers["extends"]({}, a, b, {
          extraLayoutProps: {
            afterViewContent: e,
            ariaProps: k,
            beforeViewContent: d,
            helperTextComponent:
              f != null
                ? h.jsx(c("CometTypeaheadHelperText.react"), { text: f })
                : null,
            isLoading: I,
            isOpened: F,
          },
          helperText: f,
          isDisabled: g,
          label: j,
          queryString: z,
          ref: E,
          selectedEntries: B,
          viewRole: A,
          xstyles: l,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "MWChatTokenizerLayoutContextualStrategy.react",
  [
    "fbt",
    "CometTokenizerLayoutContextualStrategy.react",
    "CurrentUser",
    "gkx",
    "react",
    "stylex",
    "useCometInternalTypeaheadStateDispatcher",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
      k = b.useMemo,
      l = {
        layout: { height: "datstx6m", width: "k3oul89m" },
        root: { display: "j83agx80" },
        to: {
          color: "oo9gr5id",
          fontSize: "jq4qci2q",
          fontWeight: "knj5qynh",
          lineHeight: "a3bd9o3v",
          marginStart: "dhix69tm",
          marginTop: "aov4n071",
          position: "pmk7jnqg",
        },
        typeaheadInput: {
          backgroundColor: "nred35xi",
          boxSizing: "rq0escxv",
          display: "a8c37x1j",
          paddingEnd: "dflh9lhu",
          paddingStart: "jxo0map8",
        },
        view: {
          backgroundColor: "nred35xi",
          borderTop: "opwvks06",
          flexShrink: "g5gj957u",
          maxHeight: "nyzjzqfi",
          minHeight: "b8v32qnc",
          overflowY: "eg9m0zos",
          width: "jbcpqwzg",
          "@media (min-height: 1280px)": {
            maxHeight: "gbk4by2p",
            minHeight: "a3d5bthu",
          },
        },
      };
    function a(a, b) {
      a === void 0 && (a = !1);
      b === void 0 && (b = "root");
      function d(d, e) {
        var f = d.xstyles;
        f = f === void 0 ? {} : f;
        var g = f.viewXStyle_DO_NOT_USE;
        f = babelHelpers.objectWithoutPropertiesLoose(d, ["xstyles"]);
        d = c("useCometInternalTypeaheadStateDispatcher")();
        var m = d.dispatchIsOpened;
        j(function () {
          (a || !c("gkx")("1526694") || c("CurrentUser").isWorkUser()) && m(!0);
        }, []);
        d = k(
          function () {
            return {
              inputXStyle: [l.typeaheadInput],
              layoutXStyle: [l.layout],
              viewXStyle_DO_NOT_USE: [l.view, g],
            };
          },
          [g]
        );
        return i.jsxs("div", {
          className: c("stylex")(l.root),
          children: [
            i.jsx("div", {
              "aria-hidden": "true",
              className: c("stylex")(l.to),
              children: h._("To:"),
            }),
            i.jsx(
              c("CometTokenizerLayoutContextualStrategy.react"),
              babelHelpers["extends"]({}, f, {
                contextualProps: { align: "start", disableAutoFlip: !0 },
                label: h._("Send message to"),
                layerContext: b,
                ref: e,
                xstyles: d,
              })
            ),
          ],
        });
      }
      d.displayName = d.name + " [from " + f.id + "]";
      return i.forwardRef(d);
    }
    g.createMWChatTokenizerLayoutContextualStrategy = a;
  },
  98
);
__d(
  "MWChatTokenizerTokenStrategy.react",
  ["CometTokenizerTokenStrategy.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        "data-testid": void 0,
        children: h.jsx(
          c("CometTokenizerTokenStrategy.react"),
          babelHelpers["extends"]({}, a, { level: 4 })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useMWChatSearchTypeaheadCallbacks",
  ["MessengerWebEventsFalcoEvent", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    a = function (a, b) {
      var d = h(
          function (b) {
            var d = b.some(function (a) {
              return a.getIsInstagramAccount();
            });
            (!d || c("gkx")("2605")) && a(b);
          },
          [a]
        ),
        e = h(
          function (a) {
            var d = a.getResultType(),
              e = a.getRawData(),
              f = e.id;
            switch (d) {
              case "user":
                c("MessengerWebEventsFalcoEvent").log(function () {
                  return {
                    event_name: "search_click_result",
                    other_user_fbid: f,
                  };
                });
                a.getIsInstagramAccount() && !c("gkx")("2605") && b(f, !1);
                return;
              case "group":
                c("MessengerWebEventsFalcoEvent").log(function () {
                  return { event_name: "search_click_result", thread_fbid: f };
                });
                return b(f, !1);
              case "page":
                c("MessengerWebEventsFalcoEvent").log(function () {
                  return {
                    event_name: "search_click_result",
                    other_user_fbid: f,
                  };
                });
                return b(f, !1);
            }
          },
          [b]
        );
      return [d, e];
    };
    g.useMWChatSearchTypeaheadCallbacks = a;
  },
  98
);
__d(
  "MWV2OnAuthoritativeThreadInsert.bs",
  [
    "LSAuthorityLevel.bs",
    "ReQL.bs",
    "SkytaleDB",
    "SortedAsyncIterable.bs",
    "bs_caml",
    "bs_curry",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
      c = b("SkytaleDB").table(c, "threads").index("clientThreadKey");
      c = c.asc;
      a = a[0];
      var e = { contents: function (a) {} };
      e.contents = b("SortedAsyncIterable.bs").subscribe(
        b("ReQL.bs").getKeyRange(c, { hd: a, tl: 0 }),
        function (a, c) {
          if (typeof c === "number") return;
          a = c._0;
          if (
            b("bs_caml").i64_eq(a.Z, b("LSAuthorityLevel.bs").authoritative)
          ) {
            b("bs_curry")._1(d, a);
            return b("bs_curry")._1(e.contents, void 0);
          }
        }
      );
    }
    f.onAuthoritativeThreadInsert = a;
  },
  null
);
__d(
  "MWThreadPreview.bs",
  [
    "CometProgressRingIndeterminate.react",
    "FBID.bs",
    "LS.bs",
    "LSAuthorityLevel.bs",
    "LSContactGender.bs",
    "LSContactIdType.bs",
    "LSContactType.bs",
    "LSContactVerifyContactRowExistsStoredProcedure",
    "LSContactViewerRelationship.bs",
    "LSContactWorkForeignEntityType.bs",
    "LSInt64.bs",
    "LSMailboxLocalCreateOptimisticGroupThreadStoredProcedure",
    "LSMailboxVerifyThreadRowExistsStoredProcedure",
    "LSMessagingThreadTypeUtil.bs",
    "LSTransaction.bs",
    "LSVec.bs",
    "MWChatConnectionStatusCard.bs",
    "MWChatTabNew.bs",
    "MWLSActor.bs",
    "MWThreadKey.bs",
    "MWThread_DEPRECATED.bs",
    "MWUIChatTabState.bs",
    "MWV2OnAuthoritativeThreadInsert.bs",
    "MessengerWebEvent",
    "MessengerWebEventsFalcoEvent.bs",
    "Promise",
    "ReQL.bs",
    "ReQLSubscription.bs",
    "ReQLSuspense.bs",
    "ReStore.bs",
    "SkytaleDB",
    "bs_caml_format",
    "bs_caml_option",
    "bs_curry",
    "bs_int64",
    "promiseDone",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = g || b("react"),
      j = {
        spinner: {
          display: "j83agx80",
          alignItems: "bp9cbjyn",
          justifyContent: "taijpn5t",
          flexGrow: "buofh1pr",
        },
        threadPreviewContainer: {
          display: "j83agx80",
          flexBasis: "rj1gh0hx",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
          fontSize: "jq4qci2q",
          zIndex: "du4w35lb",
        },
      };
    function a(a, b) {}
    var k = i.createContext({
      hasContent: { contents: !1 },
      isTabFocused: !1,
      onBeforeOpenTabForGroup: function (a) {},
      openTabForUser: a,
      openTabForGroup: a,
      openTabForPage: a,
      submitted: !1,
    });
    function l(a) {
      var c = a.children,
        d = a.hasContent,
        e = a.isTabFocused,
        f = a.onBeforeOpenTabForGroup,
        g = a.openTabForUser,
        h = a.openTabForGroup;
      a = a.openTabForPage;
      var j = i.useState(function () {
          return !1;
        }),
        l = j[1],
        m = i.useCallback(
          function (a) {
            b("bs_curry")._1(l, function (a) {
              return !0;
            });
            return b("bs_curry")._1(f, void 0);
          },
          [l, f]
        );
      j = j[0];
      d = {
        hasContent: d,
        isTabFocused: e,
        onBeforeOpenTabForGroup: m,
        openTabForUser: g,
        openTabForGroup: h,
        openTabForPage: a,
        submitted: j,
      };
      return i.createElement(k.Provider, { value: d, children: c });
    }
    d = { make: l };
    function m(a) {
      var c = a.thread;
      a = c.a;
      var d = c.O,
        e =
          d !== void 0
            ? b("LSInt64.bs").string(d) === b("LSInt64.bs").string(a)
            : !1;
      d =
        b("LSMessagingThreadTypeUtil.bs").isGroup(a) || e
          ? {
              NAME: "Group",
              VAL: b("FBID.bs").ofStringExn(b("bs_int64").to_string(a)),
            }
          : {
              NAME: "User",
              VAL: b("FBID.bs").ofStringExn(b("bs_int64").to_string(a)),
            };
      var f = i.useContext(k),
        g = f.submitted,
        l = f.openTabForGroup,
        m = f.onBeforeOpenTabForGroup,
        n = i.useMemo(
          function () {
            return function (a, c) {
              b("bs_curry")._1(m, void 0);
              if (!e) return l(a, c);
            };
          },
          [l, e, m]
        );
      i.useEffect(
        function () {
          var a = c.O;
          a !== void 0 &&
            g &&
            b("bs_int64").to_string(a) !== b("bs_int64").to_string(c.a) &&
            l(b("FBID.bs").ofStringExn(b("bs_int64").to_string(c.a)), !1);
        },
        [c, l, g]
      );
      return i.jsx("div", {
        className: (h || (h = b("stylex")))(j.threadPreviewContainer),
        children: i.jsx(b("MWThread_DEPRECATED.bs").make, {
          id: d,
          children: i.jsx(b("MWThreadKey.bs").make, {
            id: a,
            children: i.jsx(b("MWUIChatTabState.bs").Provider.make, {
              tab: { _0: d },
              children: i.jsx(b("MWChatTabNew.bs").ExistingThreadPreview.make, {
                isTabFocused: f.isTabFocused,
                hasContent: f.hasContent,
                openTabForGroup: n,
                openTabForUser: f.openTabForUser,
                openTabForPage: f.openTabForPage,
                isOptimisticThread: e,
              }),
            }),
          }),
        }),
      });
    }
    e = { make: m };
    function n(a) {
      var c = a.threadKey,
        d = a.threadType,
        e = b("ReStore.bs").useHook(void 0);
      i.useEffect(
        function () {
          b("promiseDone")(
            b("LSTransaction.bs").run(
              e,
              function (a) {
                return b("LSMailboxVerifyThreadRowExistsStoredProcedure")(
                  b("bs_caml_format").caml_int64_of_string(c),
                  d,
                  b("LS.bs").make(a)
                );
              },
              "readWrite"
            ),
            void 0,
            void 0
          );
        },
        [e, c, d]
      );
      a = b("ReQLSubscription.bs").useFirst(
        i.useMemo(
          function () {
            return b("ReQL.bs").getKeyRange(
              b("SkytaleDB").table(e, "threads").asc,
              { hd: b("bs_caml_format").caml_int64_of_string(c), tl: 0 }
            );
          },
          [e, c]
        )
      );
      if (a !== void 0) return i.jsx(m, { thread: a });
      else
        return i.jsx("div", {
          className: (h || (h = b("stylex")))(j.spinner),
          children: i.jsx(b("CometProgressRingIndeterminate.react"), {
            color: "disabled",
            size: 24,
          }),
        });
    }
    var o = { make: n };
    function p(a) {
      var c = a.tokens,
        d = a.tokenContactIds,
        e = b("ReStore.bs").useHook(void 0),
        f = b("bs_int64").to_string(b("MWLSActor.bs").useActor(void 0)),
        g = b("ReQLSubscription.bs").useArray(
          i.useMemo(
            function () {
              return b("ReQL.bs").map(
                b("ReQL.bs").filter(
                  b("SkytaleDB").table(e, "participants").asc,
                  function (a) {
                    return d.has(b("bs_int64").to_string(a.b));
                  }
                ),
                function (a) {
                  return b("bs_int64").to_string(a.a);
                }
              );
            },
            [e, d]
          )
        ),
        k = b("ReQLSubscription.bs").useFirst(
          i.useMemo(
            function () {
              var a = new Set(g);
              return b("ReQL.bs").filter(
                b("ReQL.bs").filter(
                  b("ReQL.bs").filter(
                    b("SkytaleDB").table(e, "threads").asc,
                    function (a) {
                      return a.d === void 0;
                    }
                  ),
                  function (c) {
                    c = c.O;
                    if (c !== void 0) return a.has(b("bs_int64").to_string(c));
                    else return !1;
                  }
                ),
                function (a) {
                  a = a.O;
                  if (a === void 0) return !1;
                  a = b("ReQLSuspense.bs").toArray(
                    b("ReQL.bs").filter(
                      b("ReQL.bs").map(
                        b("ReQL.bs").getKeyRange(
                          b("SkytaleDB")
                            .table(e, "participants")
                            .index("threadKeyReadWatermarkTimestampMs").desc,
                          { hd: a, tl: 0 }
                        ),
                        function (a) {
                          return b("bs_int64").to_string(a.b);
                        }
                      ),
                      function (a) {
                        return a !== f;
                      }
                    )
                  );
                  if (
                    a.every(function (a) {
                      return d.has(a);
                    })
                  )
                    return a.length === d.size;
                  else return !1;
                }
              );
            },
            [e, g, d, f]
          )
        ),
        l = i.useCallback(
          function (a) {
            return b("LSTransaction.bs").run(
              e,
              function (c) {
                return b(
                  "LSMailboxLocalCreateOptimisticGroupThreadStoredProcedure"
                )(b("LSVec.bs").make(a), void 0, b("LS.bs").make(c));
              },
              "readWrite"
            );
          },
          [e]
        ),
        n = function (a) {
          return b("MessengerWebEventsFalcoEvent.bs").log(function () {
            return { event_name: b("MessengerWebEvent").CREATE_THREAD };
          });
        };
      i.useEffect(
        function () {
          if (k === void 0) {
            var a = b("bs_curry")._1(
              l,
              c.map(function (a) {
                return b("bs_caml_format").caml_int64_of_string(a.b);
              })
            );
            a.then(function (a) {
              b(
                "MWV2OnAuthoritativeThreadInsert.bs"
              ).onAuthoritativeThreadInsert(a, e, n);
              return b("Promise").resolve(void 0);
            });
          }
        },
        [e, c, k]
      );
      if (k !== void 0) return i.jsx(m, { thread: k });
      else
        return i.jsx("div", {
          className: (h || (h = b("stylex")))(j.spinner),
          children: i.jsx(b("CometProgressRingIndeterminate.react"), {
            color: "disabled",
            size: 24,
          }),
        });
    }
    var q = { make: p };
    function r(a) {
      var c = a.tokens,
        d = b("ReStore.bs").useHook(void 0),
        e = b("bs_int64").to_string(b("MWLSActor.bs").useActor(void 0)),
        f = i.useMemo(
          function () {
            return new Set(
              c.map(function (a) {
                return a.b;
              })
            );
          },
          [c]
        ),
        g = b("ReQLSubscription.bs").useArray(
          i.useMemo(
            function () {
              return b("ReQL.bs").map(
                b("ReQL.bs").filter(
                  b("SkytaleDB").table(d, "participants").asc,
                  function (a) {
                    return f.has(b("bs_int64").to_string(a.b));
                  }
                ),
                function (a) {
                  return b("bs_int64").to_string(a.a);
                }
              );
            },
            [d, f]
          )
        );
      a = b("ReQLSubscription.bs").useFirst(
        i.useMemo(
          function () {
            var a = new Set(g);
            return b("ReQL.bs").filter(
              b("ReQL.bs").filter(
                b("ReQL.bs").filter(
                  b("SkytaleDB").table(d, "threads").asc,
                  function (a) {
                    return a.d === void 0;
                  }
                ),
                function (c) {
                  return a.has(b("bs_int64").to_string(c.a));
                }
              ),
              function (a) {
                a = b("ReQLSuspense.bs").toArray(
                  b("ReQL.bs").map(
                    b("ReQL.bs").getKeyRange(
                      b("SkytaleDB")
                        .table(d, "participants")
                        .index("threadKeyReadWatermarkTimestampMs").desc,
                      { hd: a.a, tl: 0 }
                    ),
                    function (a) {
                      return b("bs_int64").to_string(a.b);
                    }
                  )
                );
                var c = a.filter(function (a) {
                  return a !== e;
                });
                if (a.length === c.length || c.length !== f.size) return !1;
                else
                  return c.every(function (a) {
                    return f.has(a);
                  });
              }
            );
          },
          [d, g, f, e]
        )
      );
      i.useEffect(
        function () {
          c.forEach(function (a) {
            b("LSTransaction.bs").run(
              d,
              function (c) {
                return b("LSContactVerifyContactRowExistsStoredProcedure")(
                  b("bs_caml_format").caml_int64_of_string(a.b),
                  b("LSContactIdType.bs").fbid,
                  a.g,
                  a.f,
                  b("LSContactType.bs").user,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  !1,
                  !1,
                  a.l,
                  void 0,
                  !1,
                  b("LSAuthorityLevel.bs").clientPartial,
                  void 0,
                  b("LSContactWorkForeignEntityType.bs").unknown,
                  b("LSContactGender.bs").unknown,
                  b("LSContactViewerRelationship.bs").unknown,
                  void 0,
                  b("LS.bs").make(c)
                );
              },
              "readWrite"
            );
          });
        },
        [d, f]
      );
      if (a !== void 0) return i.jsx(m, { thread: a });
      else return i.jsx(p, { tokens: c, tokenContactIds: f });
    }
    var s = { make: r };
    function c(a) {
      var c = a.tokens,
        d = a.hasContent,
        e = a.isTabFocused,
        f = a.onBeforeOpenTabForGroup,
        g = a.openTabForUser,
        h = a.openTabForGroup,
        j = a.openTabForPage;
      a = a.empty;
      d = d !== void 0 ? d : { contents: !0 };
      e = e !== void 0 ? e : !0;
      f = f !== void 0 ? f : function (a) {};
      a = a !== void 0 ? b("bs_caml_option").valFromOption(a) : null;
      var k = b("bs_int64").to_string(b("MWLSActor.bs").useActor(void 0)),
        m = i.useMemo(
          function () {
            var a = [];
            c.forEach(function (b) {
              b = b.getServerSearchResult();
              if (!(b == null)) {
                a.push(b);
                return;
              }
            });
            return a;
          },
          [c]
        ),
        o,
        p = 0,
        q = m.length;
      if (q >= 3) p = 1;
      else
        switch (q) {
          case 0:
            o = a;
            break;
          case 1:
            q = m[0];
            o = i.jsx(n, { threadKey: q.b, threadType: q.e });
            break;
          case 2:
            a = m[0];
            q = m[1];
            a.b === k
              ? (o = i.jsx(n, { threadKey: q.b, threadType: q.e }))
              : q.b === k
              ? (o = i.jsx(n, { threadKey: a.b, threadType: a.e }))
              : (p = 1);
            break;
        }
      p === 1 &&
        (o = i.jsx(r, {
          tokens: m.filter(function (a) {
            return a.b !== k;
          }),
        }));
      return i.jsxs(l, {
        children: [i.jsx(b("MWChatConnectionStatusCard.bs").make, {}), o],
        hasContent: d,
        isTabFocused: e,
        onBeforeOpenTabForGroup: f,
        openTabForUser: g,
        openTabForGroup: h,
        openTabForPage: j,
      });
    }
    c = c;
    f.styles = j;
    f.noOp = a;
    f.context = k;
    f.MWThreadPreviewContextProvider = d;
    f.ThreadPreview = e;
    f.OneOnOnePreview = o;
    f.GroupPreviewOptimistic = q;
    f.GroupPreview = s;
    f.make = c;
  },
  null
);
__d(
  "MercuryFilters.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "unread";
    function a(a) {
      return [g];
    }
    function b(a) {
      return a === g;
    }
    c = "all";
    d = "groups";
    e = "named";
    var h = "unnamed",
      i = "WORK_UNSYNCED_CHAT";
    f.all = c;
    f.unread = g;
    f.groups = d;
    f.named = e;
    f.unnamed = h;
    f.unsyncedChat = i;
    f.getSupportedFilters = a;
    f.isSupportedFilter = b;
  },
  null
);
__d(
  "CometToken.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "CometProfilePhoto.react",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        default: { backgroundColor: "oo1teu6h" },
        pressable: {
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
        },
        readonly: {
          paddingTop: "cxgpxx05",
          paddingEnd: "dflh9lhu",
          paddingBottom: "sj5x9vvc",
          paddingStart: "scb9dxdr",
        },
        root: {
          alignItems: "bp9cbjyn",
          borderTopStartRadius: "beltcj47",
          borderTopEndRadius: "p86d2i9g",
          borderBottomEndRadius: "aot14ch1",
          borderBottomStartRadius: "kzx2olss",
          display: "pq6dq46d",
          paddingTop: "jktsbyx5",
          paddingEnd: "rv4hoivh",
          paddingBottom: "osnr6wyh",
          paddingStart: "h4z51re5",
        },
        shrinkVerticalPadding: {
          paddingBottom: "iuny7tx3",
          paddingTop: "ipjc6fyt",
        },
        shrinkVerticalPaddingLevel4: {
          paddingBottom: "e5nlhep0",
          paddingTop: "ecm0bbzt",
        },
        spacing: { marginEnd: "oi9244e8" },
        suggested: { backgroundColor: "tdjehn4e" },
      };
    function a(a) {
      var b = a.addOn,
        e = a.addOnSecondary,
        f = a.disabled,
        g = a.level;
      g = g === void 0 ? 3 : g;
      var l = a.onPress,
        m = a.text;
      a = a.type;
      var n = a === "add" || a === "readonly" ? "primary" : "highlight",
        o = null,
        p = null,
        q = !1,
        r = !1,
        s = g === 3 ? "body3" : "body4";
      if (b) {
        switch (b.type) {
          case "text":
            o = j.jsx(c("TetraText.react"), {
              color: n,
              type: s,
              children: b.value,
            });
            break;
          case "profile-photo":
            g === 4 ? (r = !0) : (q = !0);
            o = j.jsx(c("CometProfilePhoto.react"), {
              shape: "circle",
              size: g === 3 ? 24 : 20,
              source: { uri: b.source },
            });
            break;
          case "icon":
            g === 4 ? (r = !0) : (q = !0);
            o = j.jsx(c("TetraIcon.react"), { color: n, icon: b.icon });
            break;
        }
        o = j.jsx("div", {
          "aria-hidden": a === "remove",
          className: c("stylex")(k.spacing),
          children: o,
        });
      }
      if (e) {
        switch (e.type) {
          case "text":
            p = j.jsx(c("TetraText.react"), {
              color: n,
              type: s,
              children: e.value,
            });
            break;
        }
        p = j.jsx("div", {
          "aria-hidden": a === "remove",
          className: c("stylex")(k.spacing),
          children: p,
        });
      }
      s = j.jsx("div", {
        "aria-hidden": a === "remove",
        className: c("stylex")(a !== "readonly" && k.spacing),
        children: j.jsx(c("TetraText.react"), {
          color: n,
          type: g === 3 ? "bodyLink3" : "bodyLink4",
          children: m,
        }),
      });
      n = (b == null ? void 0 : b.type) === "text" ? b.value : null;
      g = (e == null ? void 0 : e.type) === "text" ? e.value : null;
      b = j.jsxs("div", {
        className: c("stylex")(
          k.root,
          a !== "add" && a !== "readonly" && k["default"],
          a === "readonly" && k.readonly,
          (a === "add" || a === "readonly") && k.suggested,
          r && k.shrinkVerticalPaddingLevel4,
          q && k.shrinkVerticalPadding
        ),
        children: [
          o,
          s,
          p,
          a === "add"
            ? j.jsx(c("TetraIcon.react"), {
                alt: h._("Add"),
                icon: d("fbicon")._(i("483767"), 12),
              })
            : a !== "readonly"
            ? j.jsx(c("TetraIcon.react"), {
                "aria-label": h._(
                  "{prefix} {token_text} {add_on_secondary} Remove",
                  [
                    h._param("prefix", n),
                    h._param("token_text", m),
                    h._param("add_on_secondary", g),
                  ]
                ),
                color: "highlight",
                disabled: f,
                hideHoverOverlay: r,
                icon: d("fbicon")._(i("478231"), 12),
                onPress: l,
                testid: void 0,
              })
            : null,
        ],
      });
      return a === "add"
        ? j.jsx(c("CometPressable.react"), {
            disabled: f,
            display: "inline",
            onPress: l,
            xstyle: k.pressable,
            children: b,
          })
        : b;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometInternalTypeaheadOnBlurLoggingHandler",
  ["react", "useCometInternalTypeaheadState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.loggingProvider,
        d = a.onBlur,
        e = a.queryString;
      a = c("useCometInternalTypeaheadState")();
      var f = a.activeEntries;
      return h(
        function () {
          b != null &&
            b.isSessionActive() &&
            (b.addEvent(
              { action: "abandon", entries: f, queryString: e },
              "useCometInternalTypeaheadOnBlurLoggingHandler"
            ),
            b.endSession()),
            d && d();
        },
        [f, b, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTokenizerInternal.react",
  [
    "emptyFunction",
    "react",
    "useCometInternalTypeaheadFetchHandler",
    "useCometInternalTypeaheadOnAbandonLoggingHandler",
    "useCometInternalTypeaheadOnBlurLoggingHandler",
    "useCometInternalTypeaheadOnEnterLoggingHandler",
    "useCometInternalTypeaheadOnFocusLoggingHandler",
    "useCometInternalTypeaheadOnPressEntryLoggingHandler",
    "useCometInternalTypeaheadState",
    "useCometInternalTypeaheadStateDispatcher",
    "useCometTypeaheadInputRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a, b) {
      var d = a.layoutStrategyRenderer,
        e = a.loggingProvider,
        f = a.onBlur,
        g = a.onChange,
        j = a.onEnter,
        k = a.onFocus,
        l = a.onPressEntry,
        m = a.onSearchCompletion,
        n = a.onSelectFreeformQuery,
        o = a.onShiftTab,
        p = a.onTab,
        q = a.queryString,
        r = a.traceProvider;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "layoutStrategyRenderer",
        "loggingProvider",
        "onBlur",
        "onChange",
        "onEnter",
        "onFocus",
        "onPressEntry",
        "onSearchCompletion",
        "onSelectFreeformQuery",
        "onShiftTab",
        "onTab",
        "queryString",
        "traceProvider",
      ]);
      b = c("useCometTypeaheadInputRefs")(b);
      var s = b.composedRef,
        t = b.inputRef;
      b = c("useCometInternalTypeaheadState")();
      var u = b.highlightedEntry,
        v = b.highlightedEntrySource;
      b = c("useCometInternalTypeaheadStateDispatcher")();
      var w = b.dispatchHighlightedEntry,
        x = b.dispatchIsOpened;
      c("useCometInternalTypeaheadFetchHandler")({
        loggingProvider: e,
        queryString: q,
        traceProvider: r,
      });
      b = c("useCometInternalTypeaheadOnBlurLoggingHandler")({
        loggingProvider: e,
        onBlur: f,
        queryString: q,
      });
      r = c("useCometInternalTypeaheadOnFocusLoggingHandler")({
        loggingProvider: e,
        onFocus: k,
        queryString: q,
      });
      f = c("useCometInternalTypeaheadOnEnterLoggingHandler")({
        loggingProvider: e,
        onEnter: i(
          function () {
            if (u != null && v === "keyboard")
              t.current && t.current.focus(), l && l(u);
            else {
              var a;
              a = (a = t.current) == null ? void 0 : a.value;
              if (a === "") m && m();
              else {
                n && n((a = a) != null ? a : "");
              }
            }
            w({ entry: null, source: null });
            g("");
            j && j();
          },
          [u, v, w, g, j, t, l, m, n]
        ),
        queryString: q,
      });
      k = c("useCometInternalTypeaheadOnPressEntryLoggingHandler")({
        loggingProvider: e,
        onPressEntry: l,
        queryString: q,
      });
      var y = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
          callback: i(
            function () {
              x(!1), o && o();
            },
            [x, o]
          ),
          loggingProvider: e,
          queryString: q,
        }),
        z = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
          callback: i(
            function () {
              x(!1), p && p();
            },
            [x, p]
          ),
          loggingProvider: e,
          queryString: q,
        }),
        A = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
          callback: c("emptyFunction"),
          loggingProvider: e,
          queryString: q,
        });
      e = c("useCometInternalTypeaheadOnAbandonLoggingHandler")({
        callback: c("emptyFunction"),
        loggingProvider: e,
        queryString: q,
      });
      return h.jsx(
        d,
        babelHelpers["extends"]({}, a, {
          onAbandonTypeahead_DO_NOT_USE: e,
          onBlur: b,
          onChange: g,
          onClick: c("emptyFunction"),
          onEnter: f,
          onFocus: r,
          onOutsideClick: A,
          onPressEntry: k,
          onShiftTab: y,
          onTab: z,
          queryString: q,
          ref: s,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "BaseTokenizer.react",
  [
    "CometInternalTypeaheadFetchProvider",
    "CometInternalTypeaheadStateProvider",
    "CometTokenizerInternal.react",
    "emptyFunction",
    "react",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = [];
    function a(a, b) {
      var d = a.dataSource,
        e = a.dataSourceFetchConfigParams,
        f = a.decorators,
        g = f === void 0 ? [] : f;
      f = a.emptyEntries_DO_NOT_USE;
      var j = a.loggingContext,
        k = a.onAddToken;
      k = k === void 0 ? c("emptyFunction") : k;
      var l = a.onBlur;
      l = l === void 0 ? c("emptyFunction") : l;
      var m = a.onChangeTokens,
        n = a.onClose,
        o = a.onEscape;
      o = o === void 0 ? c("emptyFunction") : o;
      var p = a.onFocus;
      p = p === void 0 ? c("emptyFunction") : p;
      var q = a.onOpen,
        r = a.onRemoveToken;
      r = r === void 0 ? c("emptyFunction") : r;
      var s = a.onSearchCompletion;
      s = s === void 0 ? c("emptyFunction") : s;
      var t = a.tokensStrategyRenderer,
        u = a.tokens,
        v = a.viewRole;
      v = v === void 0 ? "listbox" : v;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "dataSource",
        "dataSourceFetchConfigParams",
        "decorators",
        "emptyEntries_DO_NOT_USE",
        "loggingContext",
        "onAddToken",
        "onBlur",
        "onChangeTokens",
        "onClose",
        "onEscape",
        "onFocus",
        "onOpen",
        "onRemoveToken",
        "onSearchCompletion",
        "tokensStrategyRenderer",
        "tokens",
        "viewRole",
      ]);
      var w = c("useStable")(function () {
        var a = c("CometTokenizerInternal.react");
        g.forEach(function (b) {
          var c = b.decorate;
          b = b.params;
          a = c(a, b);
        });
        return a;
      });
      return h.jsx(c("CometInternalTypeaheadStateProvider"), {
        emptyEntries_DO_NOT_USE: f,
        onClose: n,
        onOpen: q,
        children: h.jsx(c("CometInternalTypeaheadFetchProvider"), {
          dataSource: d,
          dataSourceFetchConfigParams: e,
          loggingContext: j,
          children: h.jsx(
            w,
            babelHelpers["extends"]({}, a, {
              commandConfigs: i,
              onBackspace: c("emptyFunction"),
              onBlur: l,
              onChangeEntries: m,
              onDownArrow: c("emptyFunction"),
              onEnter: c("emptyFunction"),
              onEscape: o,
              onFocus: p,
              onHighlightEntry: c("emptyFunction"),
              onPressEntry: k,
              onRemoveEntry: r,
              onSearchCompletion: s,
              onShiftTab: c("emptyFunction"),
              onTab: c("emptyFunction"),
              onUpArrow: c("emptyFunction"),
              ref: b,
              selectedEntries: u,
              tokensStrategyRenderer: t,
              viewRole: v,
            })
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "useBaseTokenizerDecorators",
  ["useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.escapeDecorator,
        d = a.limitDecorator,
        e = a.refetchDecorator,
        f = a.tokenManagementDecorator;
      return c("useStable")(function () {
        return [d, b, f, e].filter(Boolean);
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTokenizerInputStrategyEventListener.react",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "KeyCommandHandler.react",
    "react",
    "useCometInternalTypeaheadState",
    "useCometTypeaheadInputHandlers",
    "useCometTypeaheadInputRefs",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useMemo,
      l = { root: { width: "k4urcfbm" } };
    function a(a, b) {
      var d = a.children,
        e = a.commandConfigs,
        f = a.isInline,
        g = a.onBackspace,
        m = a.onDownArrow,
        n = a.onEnter,
        o = a.onEscape,
        p = a.onShiftTab,
        q = a.onTab,
        r = a.onUpArrow;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "commandConfigs",
        "isInline",
        "onBackspace",
        "onDownArrow",
        "onEnter",
        "onEscape",
        "onShiftTab",
        "onTab",
        "onUpArrow",
      ]);
      var s = c("useCometInternalTypeaheadState")(),
        t = s.isOpened;
      s = k(
        function () {
          return [].concat(
            e,
            [
              {
                command: { key: c("CometKeys").DELETE },
                description: h._("Remove previous token"),
                handler: function () {
                  return g && g();
                },
                isHiddenCommand: !0,
                shouldPreventDefault: !1,
                triggerFromInputs: !0,
              },
              {
                command: { key: c("CometKeys").DOWN },
                description: h._("Next suggestion"),
                handler: function () {
                  return m && m();
                },
                triggerFromInputs: !0,
              },
              {
                command: { key: c("CometKeys").UP },
                description: h._("Previous suggestion"),
                handler: function () {
                  return r && r();
                },
                triggerFromInputs: !0,
              },
            ],
            t
              ? [
                  {
                    command: { key: c("CometKeys").ESCAPE },
                    description: h._("Close suggestions"),
                    handler: function () {
                      return o && o();
                    },
                    triggerFromInputs: !0,
                  },
                ]
              : [],
            [
              {
                command: { key: c("CometKeys").ENTER },
                description: h._("Select suggestion"),
                handler: function () {
                  return n && n();
                },
                triggerFromInputs: !0,
              },
              {
                command: { key: c("CometKeys").TAB },
                description: h._("Leave input"),
                handler: function () {
                  return q && q();
                },
                isHiddenCommand: !0,
                shouldPreventDefault: !1,
                shouldStopPropagation: !1,
                triggerFromInputs: !0,
              },
              {
                command: { key: c("CometKeys").TAB, shift: !0 },
                description: h._("Leave input"),
                handler: function () {
                  return p && p();
                },
                isHiddenCommand: !0,
                shouldPreventDefault: !1,
                shouldStopPropagation: !1,
                triggerFromInputs: !0,
              },
            ]
          );
        },
        [e, t, g, m, n, o, p, q, r]
      );
      b = c("useCometTypeaheadInputRefs")(b);
      var u = b.composedRef;
      b = b.inputRef;
      b = c("useCometTypeaheadInputHandlers")(
        babelHelpers["extends"]({ inputRef: b }, a)
      );
      a = j(
        function (a) {
          a.key === "Tab" && (!a.shiftKey ? q && q() : p && p());
        },
        [q, p]
      );
      return i.jsx(c("CometComponentWithKeyCommands.react"), {
        commandConfigs: s,
        elementType: f === !0 ? "span" : "div",
        xstyle: l.root,
        children: i.jsx(c("KeyCommandHandler.react"), {
          onKeyDown: a,
          children: d(u, b),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometTokenizerInputWidthResolver.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
      j = b.useRef,
      k = b.useState;
    function a(a) {
      var b = a.children,
        c = a.placeholder;
      c = c === void 0 ? "" : c;
      a = a.queryString;
      var d = k(0),
        e = d[0],
        f = d[1],
        g = j(null);
      d = a !== "" ? a : c;
      i(
        function () {
          g.current && f(g.current.offsetWidth);
        },
        [d]
      );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("span", {
            "aria-hidden": "true",
            className:
              "g0qnabr5 kr9hpln1 kr520xx4 j9ispegn pmk7jnqg r0usavy5 n5sx5to1 jagab5yi",
            ref: g,
            children: d,
          }),
          b(e),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometTokenizerLayoutStrategyOnBackspaceHandler",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.inputRef,
        c = a.onBackspace,
        d = a.onRemoveEntry,
        e = a.selectedEntries;
      return h(
        function () {
          var a = b.current;
          if (a != null && a.selectionStart === 0 && a.selectionEnd === 0) {
            a = e.length - 1;
            a >= 0 && d(e[a]);
          }
          c && c();
        },
        [b, c, e, d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTokenizerLayoutStrategyOnEnterHandler",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.onEnter;
      return h(
        function () {
          b && b();
        },
        [b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTokenizerLayoutStrategyOnPressEntryHandler",
  ["react", "useCometInternalTypeaheadStateDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.inputRef,
        d = a.onChange,
        e = a.onPressEntry;
      a = c("useCometInternalTypeaheadStateDispatcher")();
      var f = a.dispatchHighlightedEntry,
        g = b.current;
      return h(
        function (a, b) {
          g != null && ((g.value = ""), g.focus()),
            f({ entry: null, source: null }),
            d(""),
            e && e(a, b);
        },
        [g, f, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTokenizerInternalLayoutContextualStrategy.react",
  [
    "CometContextualLayer.react",
    "CometHeroHoldTrigger.react",
    "CometTokenizerInputStrategyEventListener.react",
    "CometTypeaheadViewStrategyEventListener.react",
    "FocusRegion.react",
    "cometHandleHighlightDropOnMouseLeave",
    "emptyFunction",
    "focusScopeQueries",
    "react",
    "stylex",
    "useCometInternalTypeaheadState",
    "useCometTypeaheadInputRefs",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef,
      j = {
        helperText: { marginTop: "aov4n071" },
        view: {
          backgroundColor: "cwj9ozl2",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          boxShadow: "o55z2nyb",
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
          marginTop: "rs0gx3tq",
          width: "k4urcfbm",
        },
      },
      k = "ChatTypeahead";
    function a(a, b) {
      var e = a.contextualProps;
      e = e === void 0 ? {} : e;
      var f = e.align;
      f = f === void 0 ? "stretch" : f;
      var g = e.position;
      g = g === void 0 ? "below" : g;
      var l = babelHelpers.objectWithoutPropertiesLoose(e, [
        "align",
        "position",
      ]);
      e = a.extraLayoutProps;
      var m = e.ariaProps,
        n = m.ariaDescribedByProps,
        o = m.ariaInputProps,
        p = m.ariaViewProps;
      m = e.helperTextComponent;
      var q = e.isLoading;
      e = e.isOpened;
      var r = a.commandConfigs,
        s = a.selectedEntries,
        t = a.inputStrategyRenderer,
        u = a.isDisabled,
        v = a.label,
        w = a.layerContext;
      w = w === void 0 ? "root" : w;
      var x = a.onBackspace,
        y = a.onBlur,
        z = a.onChange,
        A = a.onClick,
        B = a.onDownArrow,
        C = a.onEnter,
        D = a.onEscape,
        E = a.onFocus,
        F = a.onShiftTab,
        G = a.onTab,
        H = a.onUpArrow,
        I = a.queryString,
        J = a.tokensStrategyRenderer,
        K = a.viewStrategyRenderer,
        L = a.xstyles,
        M = babelHelpers.objectWithoutPropertiesLoose(a, [
          "contextualProps",
          "extraLayoutProps",
          "commandConfigs",
          "selectedEntries",
          "inputStrategyRenderer",
          "isDisabled",
          "label",
          "layerContext",
          "onBackspace",
          "onBlur",
          "onChange",
          "onClick",
          "onDownArrow",
          "onEnter",
          "onEscape",
          "onFocus",
          "onShiftTab",
          "onTab",
          "onUpArrow",
          "queryString",
          "tokensStrategyRenderer",
          "viewStrategyRenderer",
          "xstyles",
        ]);
      a = c("useCometTypeaheadInputRefs")(b);
      b = a.composedRef;
      a = a.inputRef;
      var N = i(null),
        O = i(null),
        P = c("useResizeObserver")(function () {
          O.current != null &&
            O.current.reposition({ autoflip: !l.disableAutoFlip });
        }),
        Q = c("useCometInternalTypeaheadState")(),
        R = Q.activeEntries,
        S = Q.highlightedEntry;
      Q = w === "input" ? a.current : N.current;
      var T = c("cometHandleHighlightDropOnMouseLeave")(M.onHighlightEntry);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            className: c("stylex")(L == null ? void 0 : L.layoutXStyle),
            ref: N,
            children: h.jsx("div", {
              className: c("stylex")(L == null ? void 0 : L.inputXStyle),
              onClick: A,
              ref: P,
              role: "presentation",
              children: h.jsx(d("FocusRegion.react").FocusRegion, {
                recoverFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
                children: h.jsx(
                  c("CometTokenizerInputStrategyEventListener.react"),
                  {
                    commandConfigs: r,
                    onBackspace: x,
                    onBlur: y,
                    onChange: z,
                    onClick: c("emptyFunction"),
                    onDownArrow: B,
                    onEnter: C,
                    onEscape: D,
                    onFocus: E,
                    onShiftTab: F,
                    onTab: G,
                    onUpArrow: H,
                    ref: b,
                    children: function (a, b) {
                      return h.jsx(
                        t,
                        babelHelpers["extends"]({}, b, {
                          ariaProps: o,
                          autoFocus: M.autoFocus,
                          id: M.id,
                          inputEndContent: M.inputEndContent,
                          inputExtraProps: M.inputExtraProps,
                          inputStartContent:
                            s.length > 0
                              ? h.jsx(J, {
                                  isDisabled: u,
                                  onPress: M.onRemoveEntry,
                                  tokens: s,
                                })
                              : null,
                          isDisabled: u,
                          label: v,
                          placeholder: M.placeholder,
                          queryString: I,
                          ref: a,
                          testid: void 0,
                        })
                      );
                    },
                  }
                ),
              }),
            }),
          }),
          m != null &&
            h.jsx(
              "div",
              babelHelpers["extends"](
                { className: c("stylex")(j.helperText) },
                n,
                { children: m }
              )
            ),
          h.jsx(c("CometHeroHoldTrigger.react"), {
            description: k,
            hold:
              !(Q != null && e !== !1) ||
              (Q != null && e !== !1 && R.length === 0),
          }),
          Q &&
            e &&
            h.jsx(
              c("CometContextualLayer.react"),
              babelHelpers["extends"]({}, l, {
                align: f,
                context_DEPRECATED: Q,
                position: g,
                ref: O,
                children: h.jsx(
                  c("CometTypeaheadViewStrategyEventListener.react"),
                  {
                    onOutsideClick: M.onOutsideClick,
                    children: function (a) {
                      return h.jsxs("div", {
                        className: c("stylex")([
                          j.view,
                          L == null ? void 0 : L.viewXStyle_DO_NOT_USE,
                        ]),
                        onMouseLeave: T,
                        ref: a,
                        children: [
                          h.jsx(K, {
                            ariaProps: p,
                            entries: R,
                            extraViewProps: M.extraViewProps,
                            highlightedEntry: S,
                            isLoading: q,
                            onHighlightEntry: M.onHighlightEntry,
                            onPressEntry: M.onPressEntry,
                            queryString: I,
                          }),
                          h.jsx(c("CometHeroHoldTrigger.react"), {
                            description: k,
                            hold: q && R.length === 0,
                          }),
                        ],
                      });
                    },
                  }
                ),
              })
            ),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "useCometTokenizerInternalLayoutInlineStrategyHandlers",
  [
    "react",
    "useCometTokenizerLayoutStrategyOnBackspaceHandler",
    "useCometTokenizerLayoutStrategyOnEnterHandler",
    "useCometTokenizerLayoutStrategyOnPressEntryHandler",
    "useCometTypeaheadLayoutStrategyOnBlurHandler",
    "useCometTypeaheadLayoutStrategyOnChangeHandler",
    "useCometTypeaheadLayoutStrategyOnDownArrowHandler",
    "useCometTypeaheadLayoutStrategyOnHighlightEntryHandler",
    "useCometTypeaheadLayoutStrategyOnOutsideClickHandler",
    "useCometTypeaheadLayoutStrategyOnUpArrowHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.inputRef,
        d = a.onBackspace,
        e = a.onBlur,
        f = a.onChange,
        g = a.onDownArrow,
        i = a.onEnter,
        j = a.onEscape,
        k = a.onHighlightEntry,
        l = a.onOutsideClick,
        m = a.onPressEntry,
        n = a.onRemoveEntry,
        o = a.onUpArrow;
      a = a.selectedEntries;
      k = c("useCometTypeaheadLayoutStrategyOnHighlightEntryHandler")({
        onHighlightEntry: k,
      });
      d = c("useCometTokenizerLayoutStrategyOnBackspaceHandler")({
        inputRef: b,
        onBackspace: d,
        onRemoveEntry: n,
        selectedEntries: a,
      });
      a = c("useCometTypeaheadLayoutStrategyOnBlurHandler")({ onBlur: e });
      var p = c("useCometTypeaheadLayoutStrategyOnChangeHandler")({
        onChange: f,
        onHighlightEntry: k,
      });
      e = c("useCometTypeaheadLayoutStrategyOnDownArrowHandler")({
        onDownArrow: g,
        onHighlightEntry: k,
      });
      g = c("useCometTokenizerLayoutStrategyOnEnterHandler")({ onEnter: i });
      i = h(
        function () {
          p(""), j && j();
        },
        [p, j]
      );
      f = c("useCometTokenizerLayoutStrategyOnPressEntryHandler")({
        inputRef: b,
        onChange: f,
        onPressEntry: m,
      });
      m = c("useCometTypeaheadLayoutStrategyOnOutsideClickHandler")({
        inputRef: b,
        onOutsideClick: l,
      });
      b = c("useCometTypeaheadLayoutStrategyOnUpArrowHandler")({
        onHighlightEntry: k,
        onUpArrow: o,
      });
      return {
        onBackspace: d,
        onBlur: a,
        onChange: p,
        onDownArrow: e,
        onEnter: g,
        onEscape: i,
        onHighlightEntry: k,
        onOutsideClick: m,
        onPressEntry: f,
        onRemoveEntry: n,
        onUpArrow: b,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTokenizerInternalLayoutContextualStrategyHandlers",
  [
    "react",
    "useCometInternalTypeaheadState",
    "useCometInternalTypeaheadStateDispatcher",
    "useCometTokenizerInternalLayoutInlineStrategyHandlers",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.inputRef,
        d = a.isDisabled,
        e = a.onAbandonTypeahead_DO_NOT_USE,
        f = a.onClick,
        g = a.onOutsideClick,
        i = a.onShiftTab,
        j = a.onTab,
        k = a.queryString,
        l = a.selectedEntries;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "inputRef",
        "isDisabled",
        "onAbandonTypeahead_DO_NOT_USE",
        "onClick",
        "onOutsideClick",
        "onShiftTab",
        "onTab",
        "queryString",
        "selectedEntries",
      ]);
      var m = c("useCometInternalTypeaheadState")(),
        n = m.isOpened;
      m = c("useCometInternalTypeaheadStateDispatcher")();
      var o = m.dispatchActiveEntries,
        p = m.dispatchHighlightedEntry,
        q = m.dispatchIsOpened;
      m = h(
        function () {
          q(!1), g && g();
        },
        [q, g]
      );
      m = c("useCometTokenizerInternalLayoutInlineStrategyHandlers")(
        babelHelpers["extends"](
          { inputRef: b, onOutsideClick: m, selectedEntries: l },
          a
        )
      );
      var r = m.onBackspace;
      l = m.onBlur;
      var s = m.onChange,
        t = m.onDownArrow,
        u = m.onEnter,
        v = m.onEscape;
      a = m.onHighlightEntry;
      var w = m.onOutsideClick,
        x = m.onPressEntry,
        y = m.onRemoveEntry,
        z = m.onUpArrow;
      m = h(
        function () {
          q(!1), e && e();
        },
        [q, e]
      );
      var A = h(
          function () {
            k.length === 0 && q(!1), r && r();
          },
          [q, r, k.length]
        ),
        B = h(
          function (a) {
            q(!0), s && s(a);
          },
          [q, s]
        ),
        C = h(
          function () {
            !n && !Boolean(d) && q(!0),
              b.current && b.current.focus(),
              f && f();
          },
          [n, d, b, f, q]
        ),
        D = h(
          function () {
            q(!1), p({ entry: null, source: null }), o([]), u && u();
          },
          [o, p, q, u]
        ),
        E = h(
          function () {
            q(!1), v && v();
          },
          [q, v]
        ),
        F = h(
          function () {
            n ? t && t() : q(!0);
          },
          [q, n, t]
        ),
        G = h(
          function (a, b) {
            q(!1), o([]), x && x(a, b);
          },
          [o, q, x]
        ),
        H = h(
          function (a) {
            q(!1), y && y(a);
          },
          [q, y]
        ),
        I = h(
          function () {
            q(!1), i && i();
          },
          [q, i]
        ),
        J = h(
          function () {
            q(!1), j && j();
          },
          [q, j]
        ),
        K = h(
          function () {
            !n ? q(!0) : z && z();
          },
          [q, n, z]
        );
      return {
        onAbandonTypeahead_DO_NOT_USE: m,
        onBackspace: A,
        onBlur: l,
        onChange: B,
        onClick: C,
        onDownArrow: F,
        onEnter: D,
        onEscape: E,
        onHighlightEntry: a,
        onOutsideClick: w,
        onPressEntry: G,
        onRemoveEntry: H,
        onShiftTab: I,
        onTab: J,
        onUpArrow: K,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTokenizerTokenListStrategy.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.isDisabled,
        c = a.onPress,
        d = a.tokens,
        e = a.tokenStrategyRenderer;
      return h.jsx(h.Fragment, {
        children: d.map(function (a, d) {
          return h.jsx(
            "div",
            {
              className: "kkf49tns tvmbv18p cgat1ltu aahdfvyu q9uorilb",
              children: h.jsx(e, { isDisabled: b, onPress: c, token: a }),
            },
            d
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
  "CometTokenizerTokenStrategy.react",
  ["CometToken.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.addOn,
        d = a.addOnSecondary,
        e = a.isDisabled,
        f = a.level,
        g = a.onPress,
        j = a.token;
      a = i(
        function (a) {
          a.preventDefault(), g(j);
        },
        [g, j]
      );
      return h.jsx(c("CometToken.react"), {
        addOn: b,
        addOnSecondary: d,
        disabled: e,
        level: f,
        onPress: a,
        text: j.getLabel(),
        type: "remove",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometTokenizerListTokenStrategy",
  ["CometTokenizerTokenListStrategy.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.tokenItemRenderer;
      a = a.tokenListRenderer;
      var d = a === void 0 ? c("CometTokenizerTokenListStrategy.react") : a;
      return i(
        function (a) {
          a = babelHelpers["extends"]({}, a);
          return h.jsx(
            d,
            babelHelpers["extends"]({ tokenStrategyRenderer: b }, a)
          );
        },
        [b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometSearchTypeaheadPayloadDecoratorRemoveDuplicates",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function (b) {
        var c = new Set(
            a.map(function (a) {
              return a.getKey();
            })
          ),
          d = b.entries;
        d = d.filter(function (a) {
          return !c.has(a.getKey());
        });
        return babelHelpers["extends"]({}, b, { entries: d });
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "useCometTokenizerBridgeForTypeaheadDataSource",
  [
    "cometSearchTypeaheadPayloadDecoratorAddLimit",
    "cometSearchTypeaheadPayloadDecoratorRemoveDuplicates",
    "cometTypeaheadFetchPayloadDecorate",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useMemo,
      i = b.useRef;
    function a(a) {
      var b = a.shouldAllowDuplicates,
        d = b === void 0 ? !1 : b,
        e = a.limit,
        f = a.dataSource;
      b = a.tokens;
      a = b === void 0 ? [] : b;
      var g = i(a),
        j = h(
          function () {
            return function (a) {
              return c("cometTypeaheadFetchPayloadDecorate")(
                a,
                [
                  d
                    ? null
                    : c("cometSearchTypeaheadPayloadDecoratorRemoveDuplicates")(
                        g.current
                      ),
                  c("cometSearchTypeaheadPayloadDecoratorAddLimit")(e),
                ].filter(Boolean)
              );
            };
          },
          [e, d]
        );
      return h(
        function () {
          return {
            fetchCache: function (a) {
              return j(f.fetchCache(a));
            },
            fetchNetwork: function (a) {
              return f.fetchNetwork(a).then(function (a) {
                return j(a);
              });
            },
            setTokens: function (a) {
              g.current = a;
            },
          };
        },
        [j, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTokenizerDataSource",
  [
    "cometSearchTypeaheadPayloadDecoratorAddLimit",
    "cometSearchTypeaheadPayloadDecoratorRemoveDuplicates",
    "cometTypeaheadFetchPayloadDecorate",
    "react",
    "useCometTypeaheadGraphQLDataSource",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useMemo,
      i = b.useRef;
    function a(a) {
      var b = a.shouldAllowDuplicates,
        d = b === void 0 ? !1 : b;
      b = a.decorators;
      b = b === void 0 ? {} : b;
      var e = b.duplicateDecorator,
        f =
          e === void 0
            ? c("cometSearchTypeaheadPayloadDecoratorRemoveDuplicates")
            : e,
        g = b.filterDecorator,
        j = a.limit;
      e = a.tokens;
      b = e === void 0 ? [] : e;
      e = babelHelpers.objectWithoutPropertiesLoose(a, [
        "shouldAllowDuplicates",
        "decorators",
        "limit",
        "tokens",
      ]);
      var k = i(b),
        l = c("useCometTypeaheadGraphQLDataSource")(
          babelHelpers["extends"]({}, e, { limit: j + k.current.length })
        ),
        m = h(
          function () {
            return function (a) {
              return c("cometTypeaheadFetchPayloadDecorate")(
                a,
                [
                  d ? null : f(k.current),
                  g,
                  c("cometSearchTypeaheadPayloadDecoratorAddLimit")(j),
                ].filter(Boolean)
              );
            };
          },
          [d, f, g, j]
        );
      return h(
        function () {
          return {
            fetchCache: function (a) {
              return m(l.fetchCache(a));
            },
            fetchNetwork: function (a) {
              return l.fetchNetwork(a).then(function (a) {
                return m(a);
              });
            },
            setTokens: function (a) {
              k.current = a;
            },
          };
        },
        [l, m]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "MWChatForwardDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "2899042490196372",
        metadata: {},
        name: "MWChatForwardDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "MWChatForwardDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "MWChatForwardDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            forwardQueryReference: {
              parameters: b("MWChatForwardDialogQuery$Parameters"),
              variables: { scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")("MWChatForwardDialog.react").__setRef(
        "MWChatForwardDialog.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "MWChatInteractionLog.bs",
  ["QPLUserFlow"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new Map();
    function a(a, c) {
      var d = Date.now() | 0;
      g.set(c, d);
      b("QPLUserFlow").start(a, {
        cancelOnUnload: !0,
        timeoutInMs: 6e4,
        instanceKey: d,
      });
    }
    function c(a, c, d) {
      c = g.get(c);
      if (!(c == null)) {
        b("QPLUserFlow").endFailure(a, d, { instanceKey: c });
        return;
      }
    }
    function d(a, c) {
      c = g.get(c);
      if (!(c == null)) {
        b("QPLUserFlow").endSuccess(a, { instanceKey: c });
        return;
      }
    }
    function e(a, c, d) {
      c = g.get(c);
      if (!(c == null)) {
        b("QPLUserFlow").addPoint(a, d, { instanceKey: c });
        return;
      }
    }
    f.logStartUserFlow = a;
    f.logFailUserFlow = c;
    f.logSuccessUserFlow = d;
    f.logPointUserFlow = e;
  },
  null
);
__d(
  "MWChatInteractionLog.re",
  ["MWChatInteractionLog.bs", "bs_curry"],
  function (a, b, c, d, e, f) {
    a = function (a, c) {
      a = b("bs_curry")._2(b("MWChatInteractionLog.bs").logStartUserFlow, a, c);
      return a;
    };
    f.logStartUserFlow = a;
  },
  null
);
__d(
  "MWChatMessageId.bs",
  ["bs_caml_format", "bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (typeof a === "number" || a.TAG === 0) return;
      else return a._0.messageId;
    }
    function c(a) {
      if (typeof a === "number" || a.TAG === 0) return;
      else return a._0.threadId;
    }
    function d(a) {
      if (typeof a === "number" || a.TAG === 0) return;
      else return a._0.timestamp;
    }
    function e(a, c, d) {
      return {
        TAG: 1,
        _0: {
          threadId: b("bs_caml_format").caml_int64_of_string(a),
          messageId: c,
          timestamp: b("bs_caml_format").caml_int64_of_string(d),
        },
      };
    }
    function g(a) {
      return {
        TAG: 1,
        _0: {
          threadId: b("bs_caml_int64").zero,
          messageId: a,
          timestamp: b("bs_caml_int64").zero,
        },
      };
    }
    var h = {
      TAG: 1,
      _0: {
        threadId: b("bs_caml_int64").zero,
        messageId: "",
        timestamp: b("bs_caml_int64").zero,
      },
    };
    f.getMessageId = a;
    f.getThreadId = c;
    f.getTimestamp = d;
    f.makeSent = e;
    f.emptyForExamples = h;
    f.emptyForExamplesWithId = g;
  },
  null
);
__d(
  "MWChatMessageId.re",
  ["MWChatMessageId.bs", "bs_curry"],
  function (a, b, c, d, e, f) {
    a = b("MWChatMessageId.bs").getMessageId;
    f.getMessageId = a;
    c = b("MWChatMessageId.bs").getThreadId;
    f.getThreadId = c;
    d = b("MWChatMessageId.bs").getTimestamp;
    f.getTimestamp = d;
    e = function (a, c, d) {
      a = b("bs_curry")._3(b("MWChatMessageId.bs").makeSent, a, c, d);
      return a;
    };
    f.makeSent = e;
  },
  null
);
__d(
  "MessengerWebModuleForwardInteractionQPLEvent",
  ["cr:11217"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:11217");
  },
  98
);
__d(
  "useMWChatForward",
  [
    "MWChatForwardDialog.entrypoint",
    "MWChatInteractionLog.re",
    "MWChatMessageId.re",
    "MessengerWebModuleForwardInteractionQPLEvent",
    "react",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = a.messageID,
        e = a.onClose,
        f = a.onSend;
      a = c("useCometEntryPointDialog")(
        c("MWChatForwardDialog.entrypoint"),
        {}
      );
      var g = a[0];
      a = a[1];
      var i = h(
        function () {
          var a = d("MWChatMessageId.re").getMessageId(b);
          a != null &&
            d("MWChatInteractionLog.re").logStartUserFlow(
              c("MessengerWebModuleForwardInteractionQPLEvent"),
              a
            );
          g({ messageID: b, onSend: f }, e);
        },
        [f, g, b, e]
      );
      return { onClick: i, triggerRef: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "FocusTable.bs",
  ["FocusTable.react"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = b("FocusTable.react").createFocusTable(a.query);
      var c = a[2],
        d = a[1];
      a = a[0];
      var e = { make: a },
        f = { make: d },
        g = { make: c };
      return { table: a, row: d, cell: c, Table: e, Row: f, Cell: g };
    }
    f.Make = a;
  },
  null
);
__d(
  "MWChatMessageTableFocusTable.bs",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "FocusTable.bs",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || b("react"),
      j = "messages_table";
    function a(a, b, c) {
      return c.dataset.scope === j;
    }
    d = b("FocusTable.bs").Make({ query: a });
    e = { key: b("CometKeys").UP };
    var k = { key: b("CometKeys").DOWN },
      l = { key: b("CometKeys").LEFT },
      m = { key: b("CometKeys").RIGHT },
      n = [
        {
          command: e,
          description: g._("Previous item"),
          handler: function (a) {},
        },
        { command: k, description: g._("Next item"), handler: function (a) {} },
        { command: l, description: g._("Next item"), handler: function (a) {} },
        {
          command: m,
          description: g._("Previous item"),
          handler: function (a) {},
        },
      ];
    function c(a) {
      a = a.children;
      return i.jsx(b("CometComponentWithKeyCommands.react"), {
        commandConfigs: n,
        xstyle: !1,
        children: a,
      });
    }
    var o, p, q;
    g = c;
    f.scopeID = j;
    f.scopeQuery = a;
    f.Table_ = d;
    f.Table = o;
    f.Row = p;
    f.Cell = q;
    f.keyUp = e;
    f.keyDown = k;
    f.keyLeft = l;
    f.keyRight = m;
    f.commandConfigs = n;
    f.keyCommands = g;
  },
  null
);
__d(
  "MWChatMessageCellFocusTable.bs",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "FocusTable.bs",
    "MWChatMessageTableFocusTable.bs",
    "focusScopeQueries",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || b("react");
    c = b("focusScopeQueries").tabbableScopeQuery;
    d = b("FocusTable.bs").Make({ query: c });
    var j = { key: b("CometKeys").ESCAPE },
      k = { key: b("CometKeys").ENTER },
      l = { key: b("CometKeys").SPACE },
      m = g._("Exit focus region"),
      n = g._("Enter focus region");
    function a(a) {
      var c = a.onEscape,
        d = a.onEnter,
        e = a.onSpace;
      a = a.children;
      var f = [];
      c !== void 0 && f.push({ command: j, description: m, handler: c });
      d !== void 0 && f.push({ command: k, description: n, handler: d });
      e !== void 0 && f.push({ command: l, description: n, handler: e });
      return i.jsx(b("CometComponentWithKeyCommands.react"), {
        commandConfigs: b(
          "MWChatMessageTableFocusTable.bs"
        ).commandConfigs.concat(f),
        xstyle: !1,
        children: a,
      });
    }
    var o, p, q;
    e = a;
    f.Table_ = d;
    f.Table = o;
    f.Row = p;
    f.Cell = q;
    f.$$escape = j;
    f.enter = k;
    f.space = l;
    f.exitFbt = m;
    f.enterFbt = n;
    f.keyCommands = e;
  },
  null
);
__d(
  "ScotchConstants",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (b = b("$InternalEnum"))({
        OFFER: "offer",
        ANSWER: "answer",
        ICE_CANDIDATE: "ice_candidate",
        OK: "ok",
        PING: "ping",
        PING_ACK: "ping_ack",
        HANGUP: "hang_up",
        OTHER_DISMISS: "other_dismiss",
        MSG_ACK: "msg_ack",
        PRANSWER: "pranswer",
        ICERESTART_OFFER: "icerestart_offer",
        ICERESTART_ANSWER: "icerestart_answer",
        PCRESTART_OFFER: "pcrestart_offer",
        PCRESTART_ANSWER: "pcrestart_answer",
        SDP_UPDATE: "sdp_update",
        OFFER_ACK: "offer_ack",
        OFFER_NACK: "offer_nack",
        ANSWER_ACK: "answer_ack",
        SET_VIDEO: "set_video",
        VIDEO_REQUEST: "video_request",
        ACK: "ack",
        SWITCH_TO_MULTIWAY: "switch_to_multiway",
        CLIENT_REPORTED_EVENT: "client_reported_event",
      }),
      h = b({
        CHILD_WINDOW_READY: "rtc_child_window_ready",
        CHILD_WINDOW_START_CALL: "rtc_child_window_start_call",
        CHILD_WINDOW_MESSAGE: "rtc_child_window_message",
      }),
      i = b({
        DIRECT_VIDEO: "direct_video",
        ESCALATED: "escalated",
        ESCALATION_DECLINED: "escalation_declined",
        VOIP: "voip",
      }),
      j = b.Mirrored(["SCREEN", "CAMERA"]),
      k = b({
        AUDIO_ONLY: "audio_only",
        AUDIO_VIDEO: "audio_video",
        SCREEN_CONTENT: "screen",
      }),
      l = b.Mirrored([
        "CUSTOM_VIDEO_STREAM_SIZE",
        "CUSTOM_VIDEO",
        "FHD_VIDEO",
        "HD_VIDEO",
        "LQ_VIDEO",
        "SD_VIDEO",
        "HD_IDEAL_LQ_REQUIRED_VIDEO",
        "FHD_IDEAL_LQ_REQUIRED_VIDEO",
      ]),
      m = {
        height: { fhd: 1080, hd: 720, sd: 480, lq: 180 },
        width: { fhd: 1920, hd: 1280, sd: 848, lq: 320 },
        frameRate: { sd: 30, lq: 15, vlq: 5 },
      },
      n = Object.freeze({
        UNKNOWN: -1,
        IGNORE_CALL: 0,
        HANGUP_CALL: 1,
        IN_ANOTHER_CALL: 2,
        ACCEPT_AFTER_HANGUP: 3,
        NO_ANSWER_TIMEOUT: 4,
        INCOMING_TIMEOUT: 5,
        OTHER_INSTANCE_HANDLED: 6,
        SIGNALING_MESSAGE_FAILED: 7,
        CONNECTION_DROPPED: 8,
        CLIENT_INTERRUPTED: 9,
        WEBRTC_ERROR: 10,
        CLIENT_ERROR: 11,
        NO_PERMISSION: 12,
        OTHER_NOT_CAPABLE: 13,
        NO_UI_ERROR: 14,
        UNSUPPORTED_VERSION: 15,
        CALLER_NOT_VISIBLE: 16,
        CARRIER_BLOCKED: 17,
        OTHER_CARRIER_BLOCKED: 18,
        CLIENT_ENCRYPTION_ERROR: 19,
        INACTIVE_TIMEOUT: 20,
        KILLED: 21,
        TX_ACK_TIMEOUT: 22,
      }),
      o = b({
        CALL_INITIALIZATION_FAILED: "CollabCallInitializationFailed",
        CLOSED_AS_STALE: "CollabClosedAsStale",
        CLOSED_BY_MCU: "CollabClosedByMcu",
        INVALID_MEETING_ID: "CollabInvalidMeetingId",
        LOST_MCU_CONNECTION: "CollabLostMcuConnection",
        LOST_MCU_THRIFT_CONNECTION: "CollabLostMcuThriftConnection",
        LOST_SIP_ADAPTER_CONNECTION: "CollabLostSipAdapterConnection",
        MCU_INVALID_STREAM_CONFIGURATION: "CollabMcuInvalidStreamConfiguration",
        MCU_NO_AUDIO_STREAM: "CollabMcuNoAudioStream",
        REMOTE_PEER_HANGUP: "CollabRemotePeerHangup",
        REMOTE_PEER_REJECT: "CollabRemotePeerReject",
        SIP_CONNECTION_INITIALIZATION_FAILED:
          "CollabSipConnectionInitializationFailed",
        AUDIO_ONLY_DISALLOWED: "CollabAudioOnlyDisallowed",
        UNKNOWN: "CollabUnknown",
        KILLED_VIA_THRIFT_API: "CollabKilledViaThriftApi",
      });
    b = b({ ONE_HOUR: "1hour", UNTIL_EIGHT_AM: "8am", ALWAYS: "always" });
    var p = Object.freeze({
        CUSTOM: "custom",
        MULTIWAY: "multiway",
        P2P: "p2p",
      }),
      q = Object.freeze({ DOMINANT_SPEAKER: "DOMINANT_SPEAKER", GRID: "GRID" }),
      r = Object.freeze({ LANDSCAPE: "LANDSCAPE", PORTRAIT: "PORTRAIT" }),
      s = Object.freeze({ UNKNOWN: 0, MEDIA_CONNECTED: 1 }),
      t = Object.freeze({ PLAN_B: "plan-b", UNIFIED_PLAN: "unified-plan" }),
      u = Object.freeze({
        LL_NIL: 0,
        LL_BASIC: 1,
        LL_DEBUG: 2,
        LL_WARNING: 3,
        LL_INFO: 4,
        LL_VERBOSE: 5,
      });
    function a(a) {
      switch (a) {
        case u.LL_DEBUG:
          return "d";
        case u.LL_BASIC:
          return "b";
        case u.LL_WARNING:
          return "w";
        case u.LL_INFO:
          return "i";
        case u.LL_VERBOSE:
          return "v";
        case u.LL_NIL:
        default:
          return null;
      }
    }
    function c(a) {
      switch (a) {
        case "d":
          return u.LL_DEBUG;
        case "b":
          return u.LL_BASIC;
        case "w":
          return u.LL_WARNING;
        case "i":
          return u.LL_INFO;
        case "v":
          return u.LL_VERBOSE;
        default:
          return u.LL_NIL;
      }
    }
    function d(a) {
      switch (a) {
        case u.LL_BASIC:
          return "basic";
        case u.LL_DEBUG:
          return "debug";
        case u.LL_WARNING:
          return "warning";
        case u.LL_INFO:
          return "info";
        case u.LL_VERBOSE:
          return "verbose";
        default:
          return "";
      }
    }
    var v = [
      "IgnoreCall",
      "HangupCall",
      "InAnotherCall",
      "CallEndAcceptAfterHangUp",
      "NoAnswerTimeout",
      "IncomingTimeout",
      "OtherInstanceHandled",
      "SignalingMessageFailed",
      "ConnectionDropped",
      "ClientInterrupted",
      "WebRTCError",
      "ClientError",
      "NoPermission",
      "OtherNotCapable",
      "NoUIShown",
      "VersionUnsupported",
      "CallerNotVisible",
      "CarrierBlocked",
      "OtherCarrierBlocked",
      "ClientEncryptionError",
      "InactiveTimeout",
      "Killed",
      "TxAckTimeout",
    ];
    function e(a) {
      return v.indexOf(a);
    }
    function w(a) {
      a = v[a];
      return !a ? "Unknown" : a;
    }
    function x(a, b) {
      return this.callEndReasonString(a) + "_" + (b ? "remote" : "local");
    }
    f.PayloadType = g;
    f.ChildWindowMessageType = h;
    f.CallType = i;
    f.MediaContentTypes = j;
    f.StreamType = k;
    f.VideoQuality = l;
    f.RTCConstraints = m;
    f.CallEndReason = n;
    f.CollabCallEndSubreason = o;
    f.CallBlockingConstants = b;
    f.SignalingProtocol = p;
    f.GroupVideoViewLayout = q;
    f.Orientation = r;
    f.ClientReportedEventType = s;
    f.SDPSemantics = t;
    f.UploadLogLevel = u;
    f.convertFromUploadLogLevel = a;
    f.convertToUploadLogLevel = c;
    f.uploadLogLevelString = d;
    f.endCallReasonFromString = e;
    f.callEndReasonString = w;
    f.fullCallEndReasonString = x;
  },
  66
);
__d(
  "KeyCommandHandler.react",
  ["ReactKeyboardEvent.react", "react"],
  function (a, b, c, d, e, f, g) {
    var h = d("react"),
      i = d("react").useRef,
      j = h.unstable_Scope;
    function a(a) {
      var b = a.children,
        c = a.onKeyDown;
      a = a.onKeyUp;
      var e = i(null);
      d("ReactKeyboardEvent.react").useKeyboard(e, {
        onKeyDown: c,
        onKeyUp: a,
      });
      return h.jsx(j, { ref: e, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FBRTCConfig",
  ["CurrentUser"],
  function (a, b, c, d, e, f, g) {
    var h = !1,
      i = null,
      j = null,
      k = 0,
      l = null,
      m = "https://www.facebook.com/help/211644178877843",
      n = "https://www.facebook.com/help/work/919532078125908",
      o = "https://www.facebook.com/help/232232800134371",
      p = "https://www.facebook.com/help/work/180714775754632";
    function a(a) {
      var b = a.isVCEndpointCall,
        c = a.meetingID,
        d = a.meetingPassword,
        e = a.peerID;
      a = a.serverConfig;
      h = b;
      i = c;
      j = d;
      k = e;
      l = a;
    }
    function b() {
      return h;
    }
    function d() {
      return i;
    }
    function e() {
      return j;
    }
    function f() {
      return k;
    }
    function q() {
      return {
        bad_score_count: 3,
        frr_weight: 800,
        plr_weight: 500,
        rtt_weight: 2,
        score_threshold: 1e3,
      };
    }
    function r() {
      var a;
      return (
        (a =
          (a = l) == null
            ? void 0
            : (a = a.troubleshooting_urls) == null
            ? void 0
            : a.unsupported_browser) != null
          ? a
          : c("CurrentUser").isWorkUser()
      )
        ? n
        : m;
    }
    function s() {
      var a;
      return (
        (a =
          (a = l) == null
            ? void 0
            : (a = a.troubleshooting_urls) == null
            ? void 0
            : a.user_media_error) != null
          ? a
          : c("CurrentUser").isWorkUser()
      )
        ? p
        : o;
    }
    function t() {
      var a;
      return (
        (a =
          (a = l) == null
            ? void 0
            : (a = a.troubleshooting_urls) == null
            ? void 0
            : a.user_media_permission_error) != null
          ? a
          : c("CurrentUser").isWorkUser()
      )
        ? p
        : o;
    }
    function u() {
      var a;
      return ((a = l) == null ? void 0 : a.is_messenger_dot_com) === !0;
    }
    function v() {
      var a;
      return ((a = l) == null ? void 0 : a.messenger_call_ui) === !0;
    }
    function w() {
      var a;
      return ((a = l) == null ? void 0 : a.use_hd_video_quality) === !0;
    }
    function x() {
      var a;
      return ((a = l) == null ? void 0 : a.data_channel) === !0;
    }
    function y() {
      var a;
      return ((a = l) == null ? void 0 : a.disable_url_manager) === !0;
    }
    g.setConfig = a;
    g.isVCEndpointCall = b;
    g.getMeetingID = d;
    g.getMeetingPassword = e;
    g.getPeerID = f;
    g.statsInterpreterConfig = q;
    g.unsupportedBrowserUrl = r;
    g.userMediaErrorUrl = s;
    g.userMediaPermissionErrorUrl = t;
    g.isMessengerDotCom = u;
    g.useMessengerCallUI = v;
    g.shouldUseHDVideoQuality = w;
    g.shouldCreateDataChannel = x;
    g.disableURLManager = y;
  },
  98
);
__d(
  "FBRTCExperiment",
  ["FBRTCExperimentsConfig", "QE2Logger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      a.gen = function (b) {
        var d = { params: {}, auto_exposure: !1, in_experiment: !1 };
        d = c("FBRTCExperimentsConfig")[b] || d;
        b = new a(b, d);
        return b;
      };
      a.getIncomingCallExperiments = function () {
        return a.gen("rtweb_incoming_call_experiments");
      };
      a.getMediaQualityExperiments = function () {
        return a.gen("rtc_www_media_quality_h2_2018");
      };
      a.getUpsellMessengerDesktopUnsupportedBrowser = function () {
        return a.gen("upsell_messenger_desktop_unsupported_browser_universe");
      };
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.$3 = function () {
        this.$2.auto_exposure && this.logExposure();
      };
      b.logExposure = function () {
        this.$2.in_experiment && d("QE2Logger").logExposureForUser(this.$1);
      };
      b.getParam = function (a, b) {
        if (this.$2.in_experiment) {
          this.$3();
          a = this.$2.params[a];
          if (a !== void 0) return String(a);
        }
        return b;
      };
      b.getInt = function (a, b) {
        if (this.$2.in_experiment) {
          this.$3();
          if (this.$2.params[a] !== void 0)
            return parseInt(this.$2.params[a], 10);
        }
        return b;
      };
      b.getBool = function (a, b, c) {
        c === void 0 && (c = !0);
        var d = this.$2.params;
        if (this.$2.in_experiment) {
          c && this.$3();
          if (d[a] !== void 0)
            return d[a] === "1" || d[a] === 1 || d[a] === "true" || d[a] === !0;
        }
        return b;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "FBRTCSupport",
  ["UserAgent", "gkx"],
  function (a, b, c, d, e, f, g) {
    function h() {
      return (
        c("UserAgent").isBrowser("Chrome >= 28") ||
        c("UserAgent").isBrowser("Firefox >= 25") ||
        (c("UserAgent").isBrowser("Edge >= 15.15042") &&
          c("gkx")("1341692") &&
          !c("gkx")("1680228")) ||
        c("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1") ||
        c("UserAgent").isBrowser("Opera >= 20") ||
        (j() && c("gkx")("875718")) ||
        (c("UserAgent").isBrowser("Oculus Browser >= 6") &&
          c("gkx")("1188589")) ||
        i()
      );
    }
    function a() {
      return (
        c("UserAgent").isBrowser("Chrome >= 28") ||
        c("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1") ||
        c("UserAgent").isBrowser("Opera >= 20") ||
        (j() && c("gkx")("875718")) ||
        i()
      );
    }
    function i() {
      return !1;
    }
    function b() {
      return (
        h() &&
        (!!c("gkx")("1738376") || c("UserAgent").isBrowser("Chrome >= " + 65))
      );
    }
    function d(a) {
      var b =
        c("UserAgent").isBrowser("Chrome >= 73") ||
        c("UserAgent").isBrowser("Safari >= 12.2");
      if (a) return b;
      a = c("gkx")("919244") && b;
      return a || c("UserAgent").isBrowser("Mobile Safari >= 12.1.1");
    }
    function j() {
      return (
        c("UserAgent").isBrowser("Safari >= 12.1") ||
        c("UserAgent").isBrowser("Mobile Safari >= 12.1")
      );
    }
    function k() {
      return (
        c("UserAgent").isPlatform("Android") || c("UserAgent").isPlatform("iOS")
      );
    }
    function e() {
      return (
        !k() &&
        (c("UserAgent").isBrowser("Chrome >= 51") ||
          c("UserAgent").isBrowser("Opera >= 36"))
      );
    }
    function f() {
      return (
        c("UserAgent").isBrowser("Firefox < 60") ||
        c("UserAgent").isBrowser("Edge")
      );
    }
    function l() {
      return (
        c("UserAgent").isBrowser("Chrome") ||
        c("UserAgent").isBrowser("Opera") ||
        c("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1")
      );
    }
    g.isWebrtcSupported = h;
    g.isGroupCallWebtrcSupported = a;
    g.isUnifiedEnabledForCallsExperimentation = i;
    g.isCollabSupported = b;
    g.canUseUnifiedPlan = d;
    g.isSupportedSafariVersion = j;
    g.isMobileDevice = k;
    g.isVideoFilterEffectSupported = e;
    g.videoEscalationByUnmuteWorkaround = f;
    g.isChromiumBased = l;
  },
  98
);
__d(
  "RTWebClientFeatureGating",
  ["CurrentUser", "FBRTCConfig", "FBRTCExperiment", "FBRTCSupport", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return (
        d("FBRTCConfig").isVCEndpointCall() || c("CurrentUser").isWorkUser()
      );
    }
    function b() {
      return c("gkx")("867914");
    }
    function e() {
      return !1;
    }
    function f() {
      return c("FBRTCExperiment")
        .gen("rtc_www_larger_self_view")
        .getBool("draggable_self_view", !1);
    }
    function h() {
      return !this.isVCCallOrWorkUser();
    }
    function i() {
      return (
        !c("CurrentUser").isWorkUser() &&
        d("FBRTCSupport").isVideoFilterEffectSupported()
      );
    }
    function j() {
      if (d("FBRTCConfig").isVCEndpointCall()) return !1;
      return c("CurrentUser").isWorkUser() && !c("gkx")("1020560") ? !1 : !0;
    }
    function k() {
      return !1;
    }
    function l() {
      return c("FBRTCExperiment")
        .getIncomingCallExperiments()
        .getBool("use_new_incoming_call_dialog", !1);
    }
    function m() {
      return c("FBRTCExperiment")
        .getIncomingCallExperiments()
        .getBool("use_three_buttons", !1);
    }
    function n() {
      return c("FBRTCExperiment")
        .gen("rtc_www_call_unification")
        .getBool("in_call_background_updated", !1);
    }
    function o() {
      return c("gkx")("678350");
    }
    function p() {
      if (d("FBRTCConfig").isVCEndpointCall()) return !1;
      var a = c("FBRTCExperiment").gen("turnoff_camera_when_facemute");
      return a.getBool("camera_off", !1);
    }
    function q() {
      var a = c("FBRTCExperiment").gen("turnoff_camera_when_facemute");
      return a.getBool("track_api", !1);
    }
    function r() {
      return !this.isVCCallOrWorkUser();
    }
    function s() {
      return c("gkx")("678351");
    }
    function t() {
      return c("gkx")("700608");
    }
    function u() {
      return c("gkx")("724606");
    }
    function v() {
      return navigator.userAgent.indexOf("Intel Mac OS X 10_14") !== -1;
    }
    function w() {
      return c("FBRTCExperiment")
        .gen("rt_web_fb_profile_rtc_buttons")
        .getBool("open_chat_tab", !1);
    }
    function x() {
      return this.isVCCallOrWorkUser()
        ? !1
        : c("FBRTCExperiment")
            .getMediaQualityExperiments()
            .getBool("show_network_indicator", !1);
    }
    function y() {
      return this.isVCCallOrWorkUser()
        ? !1
        : c("FBRTCExperiment")
            .getMediaQualityExperiments()
            .getBool("monitor_network_quality", !1);
    }
    function z() {
      return !d("FBRTCConfig").isVCEndpointCall();
    }
    g.isVCCallOrWorkUser = a;
    g.shouldShowEndCallQPs = b;
    g.shouldShowCreateVCLButton = e;
    g.draggableSelfView = f;
    g.endCallSurveyDropdownOptions = h;
    g.canUseMWVideoFilters = i;
    g.isChatEnabled = j;
    g.isGroupChatEnabled = k;
    g.useNewIncomingCallDialog = l;
    g.answerCallWithThreeButtons = m;
    g.callUnification = n;
    g.canUseMultiwaySandbox = o;
    g.stopVideoWhenMute = p;
    g.restartVideoWithTrackAPI = q;
    g.shouldAlwaysShowRedial = r;
    g.disableOpusStereo = s;
    g.shouldApplySdpMidTranslation = t;
    g.preserveFirefoxInactiveDataChannelBlock = u;
    g.showMojavePermissionsWarning = v;
    g.alwaysOpenChatTab = w;
    g.shouldShowNetworkQualityIndicator = x;
    g.shouldMonitorNetworkQuality = y;
    g.preferIsacForGroupCalls = z;
  },
  98
);
__d(
  "assignMediaStream",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = window.URL || window.webkitURL,
      i = "srcObject" in window.HTMLMediaElement.prototype,
      j = "mozSrcObject" in window.HTMLMediaElement.prototype;
    function a(a, b) {
      if (i)
        try {
          l(a), (a.srcObject = b);
        } catch (a) {
          c("FBLogger")("rt_web")
            .catching(a)
            .warn(
              "Failed to assign media stream. Stream object is: " + String(b)
            );
          throw a;
        }
      else j ? (a.mozSrcObject = b) : k(a, b);
    }
    function k(a, b) {
      l(a), (a.src = b != null ? h.createObjectURL(b) : "");
    }
    function l(a) {
      try {
        typeof a.src === "string" && h.revokeObjectURL(a.src);
      } catch (a) {
        c("FBLogger")("rt_web").catching(a).warn("error revoking object URL");
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "MWChatHasSearchTabContent.bs",
  ["MWChatMultitabStateHook.bs", "react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var c = b("MWChatMultitabStateHook.bs").useHook_DEPRECATED(void 0);
      return h.useCallback(
        function (a) {
          a = c.openTabsState.find(function (a) {
            return a.threadID === 0;
          });
          if (a !== void 0) return a.hasContent.contents;
          else return !1;
        },
        [c]
      );
    }
    f.useHook = a;
  },
  null
);
__d(
  "MWChatBlurNewTab.bs",
  ["MWChatMultitabContext.bs", "MWChatMultitabDispatcher.bs", "react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var c = h.useContext(b("MWChatMultitabContext.bs").context);
      return h.useCallback(
        function (a) {
          if (c !== void 0)
            return b("MWChatMultitabDispatcher.bs").dispatch(void 0, c, 4);
        },
        [c]
      );
    }
    f.useHook = a;
  },
  null
);
__d(
  "MWChatFocusNewTab.bs",
  ["MWChatMultitabContext.bs", "MWChatMultitabDispatcher.bs", "react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var c = h.useContext(b("MWChatMultitabContext.bs").context);
      return h.useCallback(
        function (a) {
          if (c !== void 0)
            return b("MWChatMultitabDispatcher.bs").dispatch(void 0, c, 5);
        },
        [c]
      );
    }
    f.useHook = a;
  },
  null
);
__d(
  "MWChatHeaderNew.bs",
  [
    "cssVar",
    "fbt",
    "CometPressable.react",
    "MWTheme.bs",
    "bs_curry",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = i || b("react"),
      l = {
        root: {
          position: "l9j0dhe7",
          display: "j83agx80",
          flexShrink: "pfnyh3mw",
          justifyContent: "i1fnvgqd",
          alignItems: "bp9cbjyn",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          paddingTop: "cxgpxx05",
          paddingBottom: "sj5x9vvc",
          paddingStart: "dati1w0a",
          paddingEnd: "hv4rvrfc",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          boxShadow: "pcdcaq2l",
          backgroundColor: "nred35xi",
          height: "k7cz35w2",
          zIndex: "kavbgo14",
        },
        title: {
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          whiteSpace: "g0qnabr5",
          textOverflow: "ltmttdrg",
          fontWeight: "ekzkrbhg",
          color: "oo9gr5id",
        },
      };
    function a(a) {
      var c = a.isTabFocused,
        d = a.closeChatTab;
      a = a.title;
      c = c ? b("MWTheme.bs").top(b("MWTheme.bs").$$default) : "#bec2c9";
      c = k.jsxs("svg", {
        width: "30px",
        height: "30px",
        viewBox: "0 0 24 24",
        children: [
          k.jsx("line", {
            x1: "6",
            x2: "18",
            y1: "6",
            y2: "18",
            strokeLinecap: "round",
            strokeWidth: "2",
            stroke: c,
          }),
          k.jsx("line", {
            x1: "6",
            x2: "18",
            y1: "18",
            y2: "6",
            strokeLinecap: "round",
            strokeWidth: "2",
            stroke: c,
          }),
        ],
      });
      return k.jsxs("div", {
        className: (j || (j = b("stylex")))(l.root),
        children: [
          k.jsx("div", { className: j(l.title), children: a }),
          k.jsx(b("CometPressable.react"), {
            "aria-label": h._("Minimize tab"),
            onPress: function (a) {
              return b("bs_curry")._1(d, void 0);
            },
            overlayRadius: "50%",
            children: c,
          }),
        ],
      });
    }
    c = a;
    f.styles = l;
    f.make = c;
  },
  null
);
__d(
  "MWChatTabTokenizerInternalLayoutInlineStrategy.react",
  [
    "CometScrollableArea.react",
    "CometTokenizerInputStrategyEventListener.react",
    "CometTypeaheadViewStrategyEventListener.react",
    "cometHandleHighlightDropOnMouseLeave",
    "emptyFunction",
    "react",
    "stylex",
    "useCometInternalTypeaheadState",
    "useCometTypeaheadKeyboardForScrollableArea",
    "useCometTypeaheadLayoutStrategyStyles",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        view: {
          backgroundColor: "cwj9ozl2",
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
        },
        viewHidden: { pointerEvents: "hzruof5a", visibility: "kr9hpln1" },
      };
    function a(a, b) {
      var d = a.commandConfigs,
        e = a.extraLayoutProps,
        f = e.afterViewContent,
        g = e.ariaProps,
        j = g.ariaDescribedByProps,
        k = g.ariaInputProps,
        l = g.ariaViewProps;
      g = e.beforeViewContent;
      var m = e.helperTextComponent,
        n = e.isLoading;
      e = e.isOpened;
      var o = a.inputStrategyRenderer,
        p = a.isDisabled,
        q = a.label,
        r = a.onBackspace,
        s = a.onBlur,
        t = a.onChange,
        u = a.onDownArrow,
        v = a.onEnter,
        w = a.onEscape,
        x = a.onFocus,
        y = a.onShiftTab,
        z = a.onTab,
        A = a.onUpArrow,
        B = a.queryString,
        C = a.selectedEntries,
        D = a.tokensStrategyRenderer,
        E = a.viewStrategyRenderer,
        F = a.xstyles;
      F = F === void 0 ? {} : F;
      var G = a.extraViewProps,
        H = babelHelpers.objectWithoutPropertiesLoose(a, [
          "commandConfigs",
          "extraLayoutProps",
          "inputStrategyRenderer",
          "isDisabled",
          "label",
          "onBackspace",
          "onBlur",
          "onChange",
          "onDownArrow",
          "onEnter",
          "onEscape",
          "onFocus",
          "onShiftTab",
          "onTab",
          "onUpArrow",
          "queryString",
          "selectedEntries",
          "tokensStrategyRenderer",
          "viewStrategyRenderer",
          "xstyles",
          "extraViewProps",
        ]);
      a = c("useCometInternalTypeaheadState")();
      var I = a.activeEntries,
        J = a.highlightedEntry;
      a = c("useCometTypeaheadLayoutStrategyStyles")({
        isOpened: e,
        xstyles: F,
      });
      F = a.inputXStyle;
      var K = a.layoutXStyle,
        L = a.viewXStyle_DO_NOT_USE,
        M = c("useCometTypeaheadKeyboardForScrollableArea")(J),
        N = c("cometHandleHighlightDropOnMouseLeave")(H.onHighlightEntry);
      return h.jsxs("div", {
        className: c("stylex")(K),
        children: [
          h.jsx("div", {
            className: c("stylex")(F),
            onClick: H.onClick,
            role: "presentation",
            children: h.jsx(
              c("CometTokenizerInputStrategyEventListener.react"),
              {
                commandConfigs: d,
                onBackspace: r,
                onBlur: s,
                onChange: t,
                onClick: c("emptyFunction"),
                onDownArrow: u,
                onEnter: v,
                onEscape: w,
                onFocus: x,
                onShiftTab: y,
                onTab: z,
                onUpArrow: A,
                ref: b,
                children: function (a, b) {
                  return h.jsx(
                    o,
                    babelHelpers["extends"]({}, b, {
                      ariaProps: k,
                      autoFocus: H.autoFocus,
                      id: H.id,
                      inputEndContent: H.inputEndContent,
                      inputExtraProps: H.inputExtraProps,
                      inputStartContent: h.jsx(D, {
                        isDisabled: p,
                        onPress: H.onRemoveEntry,
                        tokens: C,
                      }),
                      isDisabled: p,
                      label: q,
                      placeholder: C.length > 0 ? null : H.placeholder,
                      queryString: B,
                      ref: a,
                      testid: void 0,
                    })
                  );
                },
              }
            ),
          }),
          m != null &&
            h.jsx("div", babelHelpers["extends"]({}, j, { children: m })),
          g,
          e &&
            h.jsx(c("CometTypeaheadViewStrategyEventListener.react"), {
              onOutsideClick: H.onOutsideClick,
              children: function (a) {
                return h.jsx("div", {
                  className: c("stylex")([
                    i.view,
                    L,
                    I.length === 0 && !n && i.viewHidden,
                  ]),
                  onMouseLeave: N,
                  ref: a,
                  children: h.jsx(c("CometScrollableArea.react"), {
                    horizontal: !1,
                    ref: M,
                    children: h.jsx(E, {
                      ariaProps: l,
                      entries: I,
                      extraViewProps: G,
                      highlightedEntry: J,
                      isLoading: n,
                      onHighlightEntry: H.onHighlightEntry,
                      onPressEntry: H.onPressEntry,
                      queryString: B,
                    }),
                  }),
                });
              },
            }),
          f,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "MWChatTabTokenizerBaseLayoutInlineStrategy.react",
  [
    "CometTypeaheadHelperText.react",
    "MWChatTabTokenizerInternalLayoutInlineStrategy.react",
    "react",
    "useCometInternalTypeaheadFetch",
    "useCometInternalTypeaheadState",
    "useCometInternalTypeaheadStateDispatcher",
    "useCometTokenizerInternalLayoutInlineStrategyHandlers",
    "useCometTypeaheadInputRefs",
    "useCometTypeaheadLayoutContextualStrategyARIAProps",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a, b) {
      var d = a.extraLayoutProps;
      d = d === void 0 ? {} : d;
      var e = d.afterViewContent;
      d = d.beforeViewContent;
      var f = a.helperText,
        g = a.label,
        j = a.onBackspace,
        k = a.onBlur,
        l = a.onChange,
        m = a.onDownArrow,
        n = a.onEnter,
        o = a.onEscape,
        p = a.onHighlightEntry,
        q = a.onOutsideClick,
        r = a.onPressEntry,
        s = a.onRemoveEntry,
        t = a.onUpArrow,
        u = a.viewRole,
        v = a.selectedEntries;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "extraLayoutProps",
        "helperText",
        "label",
        "onBackspace",
        "onBlur",
        "onChange",
        "onDownArrow",
        "onEnter",
        "onEscape",
        "onHighlightEntry",
        "onOutsideClick",
        "onPressEntry",
        "onRemoveEntry",
        "onUpArrow",
        "viewRole",
        "selectedEntries",
      ]);
      var w = c("useCometInternalTypeaheadFetch")();
      w = w.isLoading;
      var x = c("useCometInternalTypeaheadState")(),
        y = x.activeEntries;
      x = x.highlightedEntry;
      var z = c("useCometInternalTypeaheadStateDispatcher")(),
        A = z.dispatchIsOpened;
      i(
        function () {
          A(!0);
        },
        [A]
      );
      z = c("useCometTypeaheadInputRefs")(b);
      b = z.composedRef;
      z = z.inputRef;
      z = c("useCometTokenizerInternalLayoutInlineStrategyHandlers")({
        inputRef: z,
        onBackspace: j,
        onBlur: k,
        onChange: l,
        onDownArrow: m,
        onEnter: n,
        onEscape: o,
        onHighlightEntry: p,
        onOutsideClick: q,
        onPressEntry: r,
        onRemoveEntry: s,
        onUpArrow: t,
        selectedEntries: v,
      });
      j = c("useCometTypeaheadLayoutContextualStrategyARIAProps")({
        activeEntries: y,
        helperText: f,
        highlightedEntry: x,
        inputLabel: g,
        isOpened: !0,
        viewRole: u,
      });
      return h.jsx(
        c("MWChatTabTokenizerInternalLayoutInlineStrategy.react"),
        babelHelpers["extends"]({}, a, z, {
          extraLayoutProps: {
            afterViewContent: e,
            ariaProps: j,
            beforeViewContent: d,
            helperTextComponent:
              f != null
                ? h.jsx(c("CometTypeaheadHelperText.react"), { text: f })
                : null,
            isLoading: w,
            isOpened: !0,
          },
          label: g,
          ref: b,
          selectedEntries: v,
          viewRole: u,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "MWChatTabsTokenizerLayoutInlineStrategy.react",
  [
    "fbt",
    "MWChatTabTokenizerBaseLayoutInlineStrategy.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo,
      k = {
        layout: { position: "l9j0dhe7", width: "jbcpqwzg" },
        offsetView: {
          height: "btdsrvhy",
          maxHeight: "f7dnaohx",
          "@media (min-height: 1280px)": { height: "pv6a5gh5" },
        },
        root: { display: "j83agx80" },
        to: {
          color: "oo9gr5id",
          fontSize: "jq4qci2q",
          fontWeight: "knj5qynh",
          lineHeight: "a3bd9o3v",
          marginStart: "dhix69tm",
          marginTop: "aov4n071",
          zIndex: "s90hwng2",
        },
        typeaheadInput: {
          backgroundColor: "nred35xi",
          boxSizing: "rq0escxv",
          display: "a8c37x1j",
          paddingEnd: "dflh9lhu",
          paddingStart: "scb9dxdr",
        },
        view: {
          backgroundColor: "nred35xi",
          borderTop: "opwvks06",
          height: "mbhqdu15",
          maxHeight: "oxtv4ib6",
          position: "pmk7jnqg",
          start: "feeahcbg",
          top: "i42f9fw1",
          width: "jbcpqwzg",
          "@media (min-height: 1280px)": { height: "h4lgqe89" },
        },
      };
    function a(a) {
      a === void 0 && (a = !1);
      function b(b, d) {
        var e = b.xstyles;
        e = e === void 0 ? {} : e;
        var f = e.viewXStyle_DO_NOT_USE;
        e = babelHelpers.objectWithoutPropertiesLoose(b, ["xstyles"]);
        b = j(
          function () {
            var b;
            return {
              inputXStyle: [k.typeaheadInput],
              layoutXStyle: [k.layout],
              viewXStyle_DO_NOT_USE: [
                k.view,
                f,
                (b = a) != null ? b : k.offsetView,
              ],
            };
          },
          [f]
        );
        return i.jsxs("div", {
          className: c("stylex")(k.root),
          children: [
            i.jsx("div", {
              "aria-hidden": "true",
              className: c("stylex")(k.to),
              children: h._("To:"),
            }),
            i.jsx(
              c("MWChatTabTokenizerBaseLayoutInlineStrategy.react"),
              babelHelpers["extends"]({}, e, {
                contextualProps: { align: "start", disableAutoFlip: !0 },
                label: h._("Send message to"),
                layerContext: "root",
                ref: d,
                xstyles: b,
              })
            ),
          ],
        });
      }
      b.displayName = b.name + " [from " + f.id + "]";
      return i.forwardRef(b);
    }
    g.createMWChatTabsTokenizerLayoutInlineStrategy = a;
  },
  98
);
__d(
  "UseMWLightSpeedChatSearchSuggestedContacts.bs",
  ["useMWLightSpeedChatSearchSuggestedContacts"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return b("useMWLightSpeedChatSearchSuggestedContacts")();
    }
    f.useHook = a;
  },
  null
);
__d(
  "MWNewChatTabContainer.bs",
  [
    "fbt",
    "BootloaderResource",
    "CometPlaceholder.react",
    "CometProgressRingIndeterminate.react",
    "JSResource",
    "LSDatabaseType.bs",
    "LSThreadAttributionStore.bs",
    "LsSystemFolder.bs",
    "MWChatBlurNewTab.bs",
    "MWChatCloseNewTab.bs",
    "MWChatConfirmTabCloseDialog.bs",
    "MWChatFocusComposerContext.bs",
    "MWChatFocusNewTab.bs",
    "MWChatHasSearchTabContent.bs",
    "MWChatHeaderNew.bs",
    "MWChatLightSpeedSearchTypeahead.bs",
    "MWChatOpenTabForGroup.bs",
    "MWChatOpenTabForPage.bs",
    "MWChatOpenTabForUser.bs",
    "MWChatSearchClearSearchResults.bs",
    "MWChatTabContainerShared.bs",
    "MWChatTabFocusHandler.bs",
    "MWChatTabsTokenizerLayoutInlineStrategy.react",
    "MWChatTokenizerTokenStrategy.react",
    "MWLSDatabaseLazySync.bs",
    "MWLSJewelLoadMoreThreads.bs",
    "MWSearchTypeaheadViewItemDisabledHook.bs",
    "MessengerWebEntryPoint",
    "UseMWLightSpeedChatSearchSuggestedContacts.bs",
    "bs_caml_option",
    "bs_curry",
    "gkx",
    "qex",
    "react",
    "stylex",
    "useCometConfirmationDialog",
    "useMWChatSearchTypeaheadCallbacks",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = h || b("react"),
      k = b("JSResource")("MWThreadPreview.bs").__setRef(
        "MWNewChatTabContainer.bs"
      );
    function l(a, c, d, e, f, g, h, i, j) {
      j = {
        tokens: a,
        openTabForUser: f,
        openTabForGroup: g,
        openTabForPage: h,
      };
      c !== void 0 && (j.hasContent = b("bs_caml_option").valFromOption(c));
      d !== void 0 && (j.isTabFocused = b("bs_caml_option").valFromOption(d));
      e !== void 0 &&
        (j.onBeforeOpenTabForGroup = b("bs_caml_option").valFromOption(e));
      i !== void 0 && (j.empty = b("bs_caml_option").valFromOption(i));
      return j;
    }
    function m(a) {
      return j.createElement(b("BootloaderResource").read(k).make, a);
    }
    d = { reasonResource: k, makeProps: l, make: m };
    var n = b("JSResource")("MWLightSpeedChatTabContactsContainer.bs").__setRef(
      "MWNewChatTabContainer.bs"
    );
    function a(a, b, c) {
      return { isSearchView: a, setTokens: b };
    }
    function o(a) {
      return j.createElement(b("BootloaderResource").read(n).make, a);
    }
    e = { reasonResource: n, makeProps: a, make: o };
    var p = {
        container: {
          height: "datstx6m",
          display: "j83agx80",
          position: "l9j0dhe7",
          flexDirection: "cbu4d94t",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          isolation: "fbhpx0h9",
        },
        searchInput: {
          flexShrink: "pfnyh3mw",
          minHeight: "tgvbjcpo",
          position: "l9j0dhe7",
          zIndex: "tkr6xdv7",
          backgroundColor: "nred35xi",
          maxHeight: "nwf6jgls",
          boxShadow: "flhsghwj",
        },
        searchInputForContactsList: {
          borderBottom: "s1tcr66n",
          boxShadow: "mvk8q8v6",
        },
        searchView: { boxShadow: "mvk8q8v6" },
        spinner: {
          display: "j83agx80",
          alignItems: "bp9cbjyn",
          justifyContent: "taijpn5t",
          flexGrow: "buofh1pr",
        },
      },
      q = b("JSResource")("MWChatRHCSearchTypeahead.bs").__setRef(
        "MWNewChatTabContainer.bs"
      );
    function r(a, c, d, e) {
      e = {};
      a !== void 0 &&
        (e.emptyEntries_DO_NOT_USE = b("bs_caml_option").valFromOption(a));
      c !== void 0 && (e.onEscape = b("bs_caml_option").valFromOption(c));
      d !== void 0 && (e.entryPoint = b("bs_caml_option").valFromOption(d));
      return e;
    }
    function s(a) {
      return j.createElement(b("BootloaderResource").read(q).make, a);
    }
    a = { reasonResource: q, makeProps: r, make: s };
    function c(a) {
      var c = a.hasContent,
        d = a.isMultitab,
        e = a.isSearchView,
        f = a.isTabFocused,
        h = a.useSidebarChatStyles,
        k = a.searchInitialParticipant;
      a = d !== void 0 ? d : !1;
      d = h !== void 0 ? h : !1;
      h = b("qex")._("1586110");
      h = h == null ? {} : { fontSize: String(h) + "px" };
      var n = b("MWChatHasSearchTabContent.bs").useHook(void 0),
        q = b("MWChatSearchClearSearchResults.bs").useHook(void 0),
        t = b("MWChatCloseNewTab.bs").useHook(
          b("MessengerWebEntryPoint").UNKNOWN
        ),
        u = b("MWChatFocusNewTab.bs").useHook(
          b("MessengerWebEntryPoint").UNKNOWN
        ),
        v = b("MWChatBlurNewTab.bs").useHook(
          b("MessengerWebEntryPoint").UNKNOWN
        ),
        w = b("useCometConfirmationDialog")(),
        x = w[0];
      w = j.useState(function () {
        if (k !== void 0) return [b("bs_caml_option").valFromOption(k)];
        else return [];
      });
      var y = w[1];
      w = w[0];
      var z = j.useCallback(
          function (a) {
            if (b("bs_curry")._1(n, void 0))
              return b("bs_curry")._3(
                x,
                b("MWChatConfirmTabCloseDialog.bs").content,
                function (a) {
                  b("bs_curry")._1(t, void 0);
                  return b("bs_curry")._1(q, void 0);
                },
                function (a) {}
              );
            else {
              b("bs_curry")._1(t, void 0);
              return b("bs_curry")._1(q, void 0);
            }
          },
          [x, t, q, n]
        ),
        A = b("LSThreadAttributionStore.bs").getSourceForNewThread(void 0),
        B = b("bs_curry")._3(
          b("MWChatOpenTabForUser.bs").useHook,
          void 0,
          A,
          b("MessengerWebEntryPoint").SEARCH
        ),
        C = b("bs_curry")._3(
          b("MWChatOpenTabForPage.bs").useHook,
          void 0,
          A,
          b("MessengerWebEntryPoint").SEARCH
        ),
        D = b("bs_curry")._3(
          b("MWChatOpenTabForGroup.bs").useHook,
          void 0,
          A,
          b("MessengerWebEntryPoint").SEARCH
        ),
        E = b("MWLSDatabaseLazySync.bs").useSync(
          b("LSDatabaseType.bs").ranking
        );
      b("MWLSJewelLoadMoreThreads.bs").useTryInitialising0x0Snapshot(
        b("LsSystemFolder.bs").inbox
      );
      j.useEffect(
        function () {
          b("bs_curry")._1(E, void 0);
        },
        [E]
      );
      var F = j.useState(function () {
          return !1;
        }),
        G = F[1],
        H = b(
          "useMWChatSearchTypeaheadCallbacks"
        ).useMWChatSearchTypeaheadCallbacks(y, C),
        I = j.useCallback(
          function (a) {
            return b("bs_curry")._1(G, function (a) {
              return !0;
            });
          },
          [G]
        ),
        J = b("UseMWLightSpeedChatSearchSuggestedContacts.bs").useHook(void 0),
        K = j.useMemo(function () {
          return b(
            "MWChatTabsTokenizerLayoutInlineStrategy.react"
          ).createMWChatTabsTokenizerLayoutInlineStrategy(!1);
        }, []),
        L = b("MWSearchTypeaheadViewItemDisabledHook.bs").useIsDisabled(w);
      return j.jsx(
        "div",
        {
          className: (i || (i = b("stylex")))(
            b("MWChatTabContainerShared.bs").styles.chatTab,
            a
              ? b("MWChatTabContainerShared.bs").styles.chatTabNoBottomRadius
              : !1,
            d
              ? b("MWChatTabContainerShared.bs").styles.sidebarChatOverrides
              : !1,
            b("qex")._("1586109") === !0
              ? b("MWChatTabContainerShared.bs").styles.chatTabThin
              : !1
          ),
          style: h,
          children: j.jsx(b("MWChatFocusComposerContext.bs").provider, {
            children: j.jsx(b("MWChatTabFocusHandler.bs").make, {
              onEscape: function (a) {
                return b("bs_curry")._1(z, void 0);
              },
              onFocus: function (a) {
                return b("bs_curry")._1(u, void 0);
              },
              onBlur: function (a) {
                if (f) return b("bs_curry")._1(v, void 0);
              },
              children: j.jsxs("div", {
                className: i(p.container),
                children: [
                  j.jsx(b("MWChatHeaderNew.bs").make, {
                    isTabFocused: f,
                    closeChatTab: z,
                    title: e ? g._("Search Messenger") : g._("New Message"),
                  }),
                  j.jsx("div", {
                    className: i(
                      p.searchInput,
                      e ? p.searchView : !1,
                      b("gkx")("1526694") && w.length === 0
                        ? p.searchInputForContactsList
                        : !1
                    ),
                    children: e
                      ? j.jsx(
                          s,
                          r(
                            J,
                            function (a) {
                              return b("bs_curry")._1(z, void 0);
                            },
                            A,
                            void 0
                          )
                        )
                      : j.jsx(b("MWChatLightSpeedSearchTypeahead.bs").make, {
                          isDisabled: F[0],
                          getIsViewItemDisabled: L,
                          onAddToken: H[1],
                          onChangeTokens: H[0],
                          onSearchAbandon: z,
                          onSearchCompletion: function (a) {},
                          tokens: w,
                          includeRecommendations: !1,
                          tokenItemRenderer: b(
                            "MWChatTokenizerTokenStrategy.react"
                          ),
                          layoutStategyRenderer: K,
                        }),
                  }),
                  j.jsx(b("CometPlaceholder.react"), {
                    children: e
                      ? null
                      : j.jsx(
                          m,
                          l(
                            w,
                            c,
                            f,
                            I,
                            B[0],
                            D[0],
                            C,
                            b("bs_caml_option").some(
                              j.jsx(o, { isSearchView: e, setTokens: y })
                            ),
                            void 0
                          )
                        ),
                    fallback: b("gkx")("1526694")
                      ? j.jsx("div", {
                          className: (i || (i = b("stylex")))(p.spinner),
                          children: j.jsx(
                            b("CometProgressRingIndeterminate.react"),
                            { color: "disabled", size: 24 }
                          ),
                        })
                      : null,
                  }),
                ],
              }),
            }),
          }),
        },
        "local"
      );
    }
    var t = b("MWChatTabContainerShared.bs").styles;
    c = c;
    f.shareStyles = t;
    f.LazyMWThreadPreview = d;
    f.LazyMWChatTabContactsContainer = e;
    f.styles = p;
    f.LazyMWChatRHCSearchTypeahead = a;
    f.make = c;
  },
  null
);
__d(
  "CometUnitFooter.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.addOn;
      return h.jsx("div", {
        className:
          "ofv0k9yr" + (a != null ? " aodizinl dati1w0a hv4rvrfc" : ""),
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFormInputValidationStateIcon",
  [
    "ix",
    "CometProgressRingIndeterminate.react",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = d("react");
    b = {
      CORRECT: a.jsx(c("TetraIcon.react"), {
        color: "positive",
        icon: d("fbicon")._(h("498146"), 20),
        testid: void 0,
      }),
      ERROR: a.jsx(c("TetraIcon.react"), {
        color: "negative",
        icon: d("fbicon")._(h("502062"), 20),
        testid: void 0,
      }),
      LOADING: a.jsx(c("CometProgressRingIndeterminate.react"), {
        color: "disabled",
        size: 20,
      }),
      WARN: a.jsx(c("TetraIcon.react"), {
        color: "warning",
        icon: d("fbicon")._(h("502062"), 20),
        testid: void 0,
      }),
    };
    g["default"] = b;
  },
  98
);
__d(
  "CometFormInputWrapperHelperText.react",
  ["TetraTextPairing.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.validationState;
      a = a.value;
      return h.jsx(c("TetraTextPairing.react"), {
        level: 4,
        meta: a,
        metaColor: b === "ERROR" ? "negative" : "secondary",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFormInputWrapper.react",
  [
    "BaseFocusRing.react",
    "CometFormInputValidationStateIcon",
    "CometFormInputWrapperHelperText.react",
    "FocusWithinHandler.react",
    "react",
    "stylex",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useRef,
      k = b.useState,
      l = {
        disabled: {
          backgroundColor: "qsy8amke",
          borderTopColor: "qbxu24ho",
          borderEndColor: "bxzzcbxg",
          borderBottomColor: "lxuwth05",
          borderStartColor: "h2mp5456",
          boxShadow: "mvk8q8v6",
          cursor: "rj84mg9z",
          ":active": { backgroundColor: "mqpsvyrg" },
        },
        error: {
          borderTopColor: "jw3uvs1e",
          borderEndColor: "hmw3o7ox",
          borderBottomColor: "ku5f423u",
          borderStartColor: "a64ryyup",
          ":active": { backgroundColor: "fitdx2wt" },
        },
        errorFocused: { boxShadow: "d7fyn1kr" },
        errorHovered: { backgroundColor: "h6vcs4m2" },
        headerMask: {
          backgroundColor: "cwj9ozl2",
          end: "cypi58rs",
          height: "gl3lb2sf",
          position: "pmk7jnqg",
          start: "re5koujm",
          top: "plgsh5y4",
        },
        helperText: { marginTop: "aov4n071" },
        hiddenHelperText: {
          clip: "q45zohi1",
          clipPath: "ema1e40h",
          height: "ay7djpcl",
          overflow: "pfx3uekm",
          position: "pmk7jnqg",
          width: "rfua0xdk",
        },
        hovered: {
          borderTopColor: "np24d88i",
          borderEndColor: "p9mcbvme",
          borderBottomColor: "krxe8813",
          borderStartColor: "ph5sz0o6",
        },
        input: {
          backgroundColor: "g5ia77u1",
          flexGrow: "buofh1pr",
          maxWidth: "d2edcug0",
          minWidth: "hpfvmrgz",
          position: "l9j0dhe7",
        },
        inputRow: { display: "j83agx80", width: "k4urcfbm" },
        label: {
          color: "m9osqain",
          cursor: "t5a262vz",
          display: "a8c37x1j",
          end: "b5fwa0m2",
          fontSize: "jagab5yi",
          fontWeight: "knj5qynh",
          lineHeight: "fo6rh5oj",
          maxWidth: "d2edcug0",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          pointerEvents: "hzruof5a",
          position: "pmk7jnqg",
          start: "re5koujm",
          textOverflow: "ltmttdrg",
          top: "fgv6swy9",
          transformOrigin: "dd2scrzq",
          transitionDuration: "ms05siws",
          transitionProperty: "flx89l3n",
          transitionTimingFunction: "b7h9ocf4",
          whiteSpace: "g0qnabr5",
        },
        labelDisabled: { color: "erlsw9ld" },
        labelError: { color: "jdix4yx3" },
        labelHighlighted: { color: "q66pz984" },
        labelShrunk: { end: "qeu253yp", transform: "benu5kxt" },
        root: {
          backgroundColor: "cwj9ozl2",
          borderTopColor: "qbxu24ho",
          borderEndColor: "bxzzcbxg",
          borderBottomColor: "lxuwth05",
          borderStartColor: "h2mp5456",
          borderTopStartRadius: "beltcj47",
          borderTopEndRadius: "p86d2i9g",
          borderBottomEndRadius: "aot14ch1",
          borderBottomStartRadius: "kzx2olss",
          borderTopStyle: "goun2846",
          borderEndStyle: "ccm00jje",
          borderBottomStyle: "s44p3ltw",
          borderStartStyle: "mk2mc5f4",
          borderTopWidth: "frvqaej8",
          borderEndWidth: "ed0hlay0",
          borderBottomWidth: "afxsp9o4",
          borderStartWidth: "jcgfde61",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
          zIndex: "du4w35lb",
          ":active": { backgroundColor: "hw4tbnyy" },
        },
        secondary: { display: "j83agx80" },
        shake: {
          animationDuration: "snb1aq0c",
          animationFillMode: "ev399l9o",
          animationName: "bdkv5917",
          animationTimingFunction: "r2dqequf",
        },
        validationIcon: { paddingEnd: "hv4rvrfc", paddingTop: "eluhq753" },
        validationIconHideLabel: { paddingTop: "pybr56ya" },
        warn: {
          borderTopColor: "o9os1wxa",
          borderEndColor: "mkmln09k",
          borderBottomColor: "sx6p85o9",
          borderStartColor: "au5c3ovr",
          ":active": { backgroundColor: "qfsyapuy" },
        },
        warnFocused: { boxShadow: "hcyst5jg" },
        warnHovered: { backgroundColor: "q7skrjnd" },
      },
      m = { pointer: { cursor: "nhd2j8a9" }, text: { cursor: "o6r2urh6" } };
    function n(a) {
      if (Array.isArray(a)) return a.length === 0;
      else if (typeof a === "object") {
        if (a) for (var b in a) return !1;
        return !0;
      } else return a == null || a === "";
    }
    function a(a) {
      var b = a.addOnBottom,
        d = a.addOnPrimary,
        e = a.alwaysShrinkLabel,
        f = e === void 0 ? !1 : e,
        g = a.ariaLabel,
        o = a.auxContent,
        p = a.children,
        q = a.cursor;
      e = a.disabled;
      var r = e === void 0 ? !1 : e,
        s = a.helperText;
      e = a.helperTextIsHidden;
      e = e === void 0 ? !1 : e;
      var t = a.hideLabel,
        u = t === void 0 ? !1 : t,
        v = a.label,
        w = a.labelRef;
      t = a.onFocusChange;
      var x = a.onPress,
        y = a.shrinkLabelOnFocus,
        z = y === void 0 ? !0 : y,
        A = a.suppressFocusRing,
        B = a.validationState;
      y = a.value;
      a = a.withHeaderMask;
      var C = a === void 0 ? !1 : a,
        D = c("useCometUniqueID")(),
        E = c("useCometUniqueID")();
      a = k(!1);
      var F = a[0],
        G = a[1];
      a = k(!1);
      var H = a[0],
        I = a[1],
        J = !n(y),
        K = i(
          function () {
            H || I(!0);
          },
          [H]
        ),
        L = i(
          function () {
            H && I(!1);
          },
          [H]
        ),
        M = j(null);
      a = k(!1);
      var N = a[0],
        O = a[1];
      return h.jsxs("div", {
        children: [
          h.jsx(c("FocusWithinHandler.react"), {
            onFocusChange: t,
            children: function (a) {
              return h.jsx(c("BaseFocusRing.react"), {
                suppressFocusRing: !N || A,
                children: function (e) {
                  var i;
                  return h.jsxs("label", {
                    "aria-label": (i = g) != null ? i : v,
                    className: c("stylex")(
                      l.root,
                      m[q],
                      H && l.hovered,
                      a && c("BaseFocusRing.react").focusRingXStyle,
                      B === "WARN" && [
                        l.warn,
                        H && l.warnHovered,
                        a && l.warnFocused,
                      ],
                      B === "ERROR" && [
                        l.error,
                        H && l.errorHovered,
                        a && l.errorFocused,
                      ],
                      r && l.disabled,
                      F && l.shake,
                      e
                    ),
                    htmlFor: D,
                    onAnimationEnd: function () {
                      G(!1);
                    },
                    onClick: function (a) {
                      r ? G(!0) : x && x(a);
                    },
                    onMouseEnter: K,
                    onMouseLeave: L,
                    ref: M,
                    role: x != null ? "button" : void 0,
                    tabIndex: x != null ? 0 : void 0,
                    children: [
                      h.jsxs("div", {
                        className: c("stylex")(l.inputRow),
                        children: [
                          d,
                          h.jsxs("div", {
                            className: c("stylex")(l.input),
                            children: [
                              C &&
                                !r &&
                                (J || a) &&
                                h.jsx("span", {
                                  className: c("stylex")(l.headerMask),
                                }),
                              !u &&
                                h.jsx("span", {
                                  className: c("stylex")(
                                    l.label,
                                    B === "ERROR" && l.labelError,
                                    B == null && a && l.labelHighlighted,
                                    (J || f || (a && z)) && l.labelShrunk,
                                    r && l.labelDisabled
                                  ),
                                  ref: w,
                                  children: v,
                                }),
                              h.jsx(c("FocusWithinHandler.react"), {
                                onFocusChange: O,
                                children: p({
                                  filled: J,
                                  focused: a,
                                  helperTextID:
                                    s != null && B != null ? E : void 0,
                                  id: D,
                                  rootRef: M,
                                }),
                              }),
                            ],
                          }),
                          (o != null || B != null) &&
                            h.jsxs("div", {
                              className: c("stylex")(l.secondary),
                              children: [
                                B != null &&
                                  h.jsx("div", {
                                    className: c("stylex")(
                                      l.validationIcon,
                                      u && l.validationIconHideLabel
                                    ),
                                    children: c(
                                      "CometFormInputValidationStateIcon"
                                    )[B],
                                  }),
                                o,
                              ],
                            }),
                        ],
                      }),
                      b,
                    ],
                  });
                },
              });
            },
          }),
          s != null &&
            (e
              ? h.jsx("div", {
                  className: c("stylex")(l.hiddenHelperText),
                  id: E,
                  children: s,
                })
              : h.jsx("div", {
                  className: c("stylex")(l.helperText),
                  id: E,
                  children: h.jsx(c("CometFormInputWrapperHelperText.react"), {
                    validationState: B,
                    value: s,
                  }),
                })),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFormTextArea.react",
  [
    "BaseTextArea.react",
    "CometFormInputWrapper.react",
    "react",
    "useBaseInputValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        disabled: { color: "erlsw9ld", cursor: "rj84mg9z" },
        hideLabel: { marginTop: "ku2m03ct" },
        textArea: {
          backgroundColor: "g5ia77u1",
          borderTop: "gcieejh5",
          borderEnd: "bn081pho",
          borderBottom: "humdl8nn",
          borderStart: "izx4hr6d",
          boxSizing: "rq0escxv",
          color: "oo9gr5id",
          display: "j83agx80",
          fontSize: "jagab5yi",
          fontWeight: "knj5qynh",
          lineHeight: "fo6rh5oj",
          marginBottom: "oud54xpy",
          marginTop: "l9qdfxac",
          outline: "lzcic4wl",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          paddingEnd: "hv4rvrfc",
          paddingStart: "dati1w0a",
          resize: "ieid39z1",
          width: "k4urcfbm",
        },
      };
    function a(a, b) {
      var d = a.addOnBottom,
        e = a.autoComplete,
        f = a.auxContent,
        g = a.disabled,
        j = g === void 0 ? !1 : g;
      g = a.helperText;
      var k = a.hideLabel,
        l = k === void 0 ? !1 : k;
      k = a.label;
      var m = a.maxLength,
        n = a.maxRows,
        o = a.minRows,
        p = a.onBlur,
        q = a.onFocus,
        r = a.onValueChange,
        s = a.placeholder,
        t = a.suppressFocusRing,
        u = a.testid;
      u = a.validationState;
      var v = a.validator,
        w = a.value;
      v = c("useBaseInputValidators")({
        validator: v,
        value: (a = w) != null ? a : "",
      });
      a = v.topResultReason;
      v = v.topResultType;
      var x = v !== "CORRECT" ? v : u;
      return h.jsx(c("CometFormInputWrapper.react"), {
        addOnBottom: d,
        auxContent: f,
        cursor: "text",
        disabled: j,
        helperText: a != null ? a : g,
        hideLabel: l,
        label: k,
        suppressFocusRing: t,
        validationState: x,
        value: w,
        withHeaderMask: !l,
        children: function (a) {
          var d = a.focused,
            f = a.helperTextID;
          a = a.id;
          return h.jsx(c("BaseTextArea.react"), {
            "aria-describedby": f,
            "aria-invalid": x === "ERROR",
            autoComplete: e,
            disabled: j,
            id: a,
            maxLength: m,
            maxRows: n,
            minRows: o,
            onBlur: p,
            onFocus: q,
            onValueChange: r,
            placeholder: d ? s : null,
            ref: b,
            suppressFocusRing: !0,
            testid: void 0,
            value: w,
            xstyle: [i.textArea, j && i.disabled, l && i.hideLabel],
          });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometFormTextInput.react",
  [
    "BaseTextInput.react",
    "CometFormInputWrapper.react",
    "TetraIcon.react",
    "react",
    "stylex",
    "useBaseInputValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        disabled: {
          backgroundColor: "qsy8amke",
          color: "erlsw9ld",
          cursor: "rj84mg9z",
        },
        emoji: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          paddingStart: "tw6a2znq",
          pointerEvents: "hzruof5a",
        },
        icon: {
          paddingStart: "dati1w0a",
          paddingTop: "eluhq753",
          pointerEvents: "hzruof5a",
        },
        input: {
          backgroundColor: "g5ia77u1",
          borderTop: "gcieejh5",
          borderEnd: "bn081pho",
          borderBottom: "humdl8nn",
          borderStart: "izx4hr6d",
          boxSizing: "rq0escxv",
          color: "oo9gr5id",
          fontSize: "qc3s4z1d",
          fontWeight: "knj5qynh",
          lineHeight: "fo6rh5oj",
          paddingBottom: "osnr6wyh",
          paddingEnd: "hv4rvrfc",
          paddingStart: "dati1w0a",
          paddingTop: "p0x8y401",
          width: "k4urcfbm",
          "::-ms-clear": { display: "iu8raji3" },
        },
      };
    function a(a, b) {
      var d = a.autoComplete,
        e = a.autoFocus,
        f = a.auxContent,
        g = a.disabled,
        j = g === void 0 ? !1 : g;
      g = a.emojiSkittle;
      var k = a.helperText,
        l = a.helperTextIsHidden;
      l = l === void 0 ? !1 : l;
      var m = a.icon,
        n = a.inputMode,
        o = a.label,
        p = a.labelRef,
        q = a.maxLength,
        r = a.onBlur,
        s = a.onClick,
        t = a.onFocus,
        u = a.onValueChange,
        v = a.placeholder,
        w = a.suppressFocusRing,
        x = a.testid;
      x = a.type;
      var y = x === void 0 ? "text" : x;
      x = a.validationState;
      var z = a.validator,
        A = a.value,
        B = a.xstyle,
        C = babelHelpers.objectWithoutPropertiesLoose(a, [
          "autoComplete",
          "autoFocus",
          "auxContent",
          "disabled",
          "emojiSkittle",
          "helperText",
          "helperTextIsHidden",
          "icon",
          "inputMode",
          "label",
          "labelRef",
          "maxLength",
          "onBlur",
          "onClick",
          "onFocus",
          "onValueChange",
          "placeholder",
          "suppressFocusRing",
          "testid",
          "type",
          "validationState",
          "validator",
          "value",
          "xstyle",
        ]);
      z = c("useBaseInputValidators")({
        validator: z,
        value: (a = A) != null ? a : "",
      });
      a = z.topResultReason;
      z = z.topResultType;
      var D = z !== "CORRECT" ? z : x;
      return h.jsx(c("CometFormInputWrapper.react"), {
        addOnPrimary:
          (m != null &&
            h.jsx("div", {
              className: c("stylex")(i.icon),
              children: h.jsx(c("TetraIcon.react"), {
                color: "secondary",
                icon: m,
              }),
            })) ||
          (g != null &&
            h.jsx("div", { className: c("stylex")(i.emoji), children: g })),
        auxContent: f,
        cursor: "text",
        disabled: j,
        helperText: a != null ? a : k,
        helperTextIsHidden: l,
        label: o,
        labelRef: p,
        suppressFocusRing: w,
        validationState: D,
        value: A,
        children: function (a) {
          var f = a.focused,
            g = a.helperTextID;
          a = a.id;
          return h.jsx(
            c("BaseTextInput.react"),
            babelHelpers["extends"](
              {
                "aria-describedby": g,
                "aria-invalid": D === "ERROR",
                autoComplete: d,
                autoFocus: e,
                disabled: j,
                id: a,
                inputMode: n,
                maxLength: q,
                onBlur: r,
                onClick: s,
                onFocus: t,
                onValueChange: u,
                placeholder: f ? v : null,
                ref: b,
                suppressFocusRing: !0,
                testid: void 0,
                type: y,
                value: A,
                xstyle: [i.input, j && i.disabled, B],
              },
              C
            )
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "findCometScrollableLayoutActiveNode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      if (a == null) return null;
      if (a.tagName === "LI")
        return a.getAttribute("aria-selected") === "true" ? a : null;
      return a.children == null
        ? null
        : Array.from(a.children).reduce(function (a, b) {
            return (a = a) != null ? a : g(b);
          }, null);
    }
    f["default"] = g;
  },
  66
);
__d(
  "useCometTypeaheadKeyboardForScrollableArea",
  ["findCometScrollableLayoutActiveNode", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = i(null);
      h(
        function () {
          var a;
          (a = c("findCometScrollableLayoutActiveNode")(
            (a = b.current) == null ? void 0 : a.getDOMNode()
          )) == null
            ? void 0
            : a.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
  "CometLocalDate",
  ["DateConsts", "formatDate"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e3;
    a = (function () {
      function a(a, b, c) {
        a = new Date(a, b, c);
        this.year = a.getFullYear();
        this.month = a.getMonth();
        this.date = a.getDate();
      }
      a.fromDate = function (b) {
        b === void 0 && (b = new Date());
        return new a(b.getFullYear(), b.getMonth(), b.getDate());
      };
      a.fromTimestamp = function (a) {
        return this.fromDate(new Date(a * h));
      };
      var b = a.prototype;
      b.getYear = function () {
        return this.year;
      };
      b.getMonth = function () {
        return this.month;
      };
      b.getDate = function () {
        return this.date;
      };
      b.getDayOfWeekFromMonday = function () {
        return (
          (this.getJSDate().getDay() - 1 + d("DateConsts").DAYS_PER_WEEK) %
          d("DateConsts").DAYS_PER_WEEK
        );
      };
      b.getNumDaysInThisMonth = function () {
        return new Date(this.year, this.month + 1, 0).getDate();
      };
      b.getNumDaysInPrevMonth = function () {
        return new Date(this.year, this.month, 0).getDate();
      };
      b.getWithDaysAdded = function (b) {
        return new a(this.year, this.month, this.date + b);
      };
      b.getWithWeeksAdded = function (a) {
        return this.getWithDaysAdded(a * d("DateConsts").DAYS_PER_WEEK);
      };
      b.getWithMonthsAdded = function (b) {
        return new a(this.year, this.month + b, this.date);
      };
      b.getWithYearsAdded = function (b) {
        return new a(this.year + b, this.month, this.date);
      };
      b.getJSDate = function () {
        return new Date(this.year, this.month, this.date);
      };
      b.format = function (a, b) {
        return c("formatDate")(this.getJSDate(), a, b);
      };
      b.getHash = function () {
        return this.year * 372 + this.month * 31 + this.date;
      };
      b.getNumDaysInThisYear = function () {
        return this.isLeapYear() ? 366 : 365;
      };
      b.isLeapYear = function () {
        return (
          (this.year % 4 === 0 && this.year % 100 !== 0) ||
          this.year % 400 === 0
        );
      };
      b.isValid = function () {
        return !isNaN(this.getJSDate().getTime());
      };
      b.isEqual = function (a) {
        return this.compareTo(a) === 0;
      };
      b.daysBetween = function (a) {
        a = a.getJSDate() - this.getJSDate();
        return Math.round(Math.abs(a / d("DateConsts").MS_PER_DAY));
      };
      b.compareTo = function (a) {
        var b = this.getJSDate();
        a = a.getJSDate();
        return b > a ? 1 : b < a ? -1 : 0;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadSubscriptionDataSource",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = new Set();
      }
      var b = a.prototype;
      b.subscribe = function (a) {
        return this.$2(a);
      };
      b.fetchNetwork = function (a, b) {};
      b.publish = function (a) {
        Array.from(this.$1).forEach(function (b) {
          b(a);
        });
      };
      b.$2 = function (a) {
        var b = this;
        this.$1.add(a);
        return function () {
          b.$1["delete"](a);
        };
      };
      b.unsubscribe = function () {
        this.$1.clear();
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "mwStaticSearchEntries",
  ["fbt", "MWChatSearchTypeaheadDataEntry"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = h._("More Results");
    function a() {
      return new (c("MWChatSearchTypeaheadDataEntry"))({
        displayName: "Expand Search for query",
        id: "expand_search",
        imageUrl: "",
        isContact: !1,
        resultType: "expand_search",
        secondaryImageUrl: "",
        section: i.toString(),
        subtext: "",
      });
    }
    function b(a) {
      return new (c("MWChatSearchTypeaheadDataEntry"))({
        displayName: 'Search messages for "' + a + '"',
        id: a,
        imageUrl: "",
        isContact: !1,
        resultType: "messages",
        secondaryImageUrl: "",
        subtext: "",
      });
    }
    g.createExpandSearchEntry = a;
    g.createMessageSearchEntry = b;
  },
  98
);
__d(
  "MWChatSearchTypeaheadLightspeedSubscriptionDataSource",
  [
    "CometTypeaheadSubscriptionDataSource",
    "FBLogger",
    "MWChatSearchIssueLightspeedQuery.re",
    "MWChatSearchTypeaheadDataEntry",
    "cr:10864",
    "mwChatSearchPayloadDecoratorRemoveDuplicates",
    "mwChatSearchPayloadDecoratorRemoveExcluded",
    "mwStaticSearchEntries",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(b) {
        var d,
          e = b.database,
          f = b.excludedIDs;
        f = f === void 0 ? [] : f;
        var g = b.lightspeedSupportedTypes;
        g =
          g === void 0
            ? c("MWChatSearchIssueLightspeedQuery.re").allSupportedTypes
            : g;
        var h = b.source;
        h =
          h === void 0
            ? c("MWChatSearchIssueLightspeedQuery.re").Surfaces.universal
            : h;
        var i = b.includeRecommendations;
        i = i === void 0 ? !0 : i;
        b = b.includeThreadSearch;
        b = b === void 0 ? !1 : b;
        d = a.call(this) || this;
        d.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource1 = [];
        d.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource2 = [];
        d.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource6 =
          function () {};
        d.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource2 = f;
        d.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource3 = g;
        d.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource4 = h;
        d.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource5 = e;
        d.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource7 = i;
        d.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource8 = b;
        return d;
      }
      var f = e.prototype;
      f.unsubscribe = function () {
        a.prototype.unsubscribe.call(this),
          this.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource6();
      };
      f.fetchNetwork = function (a, d) {
        var e = this,
          f;
        return b("regeneratorRuntime").async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  this.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource6();
                  if (
                    !(
                      a.query.length === 0 &&
                      !this
                        .$MWChatSearchTypeaheadLightspeedSubscriptionDataSource7
                    )
                  ) {
                    g.next = 3;
                    break;
                  }
                  return g.abrupt(
                    "return",
                    this.publish({ entries: [], params: a })
                  );
                case 3:
                  d(!0);
                  if (!(a.query.length === 0)) {
                    g.next = 7;
                    break;
                  }
                  this.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource6 =
                    c(
                      "MWChatSearchIssueLightspeedQuery.re"
                    ).requestRecommendations(
                      this
                        .$MWChatSearchTypeaheadLightspeedSubscriptionDataSource5,
                      this
                        .$MWChatSearchTypeaheadLightspeedSubscriptionDataSource3,
                      this
                        .$MWChatSearchTypeaheadLightspeedSubscriptionDataSource4,
                      a,
                      function (b) {
                        e.onData(a, b), d(!1);
                      }
                    );
                  return g.abrupt("return");
                case 7:
                  f = [];
                  if (!b("cr:10864")) {
                    g.next = 19;
                    break;
                  }
                  g.prev = 9;
                  g.next = 12;
                  return b("regeneratorRuntime").awrap(
                    b("cr:10864").fetchResults(
                      this
                        .$MWChatSearchTypeaheadLightspeedSubscriptionDataSource3,
                      this
                        .$MWChatSearchTypeaheadLightspeedSubscriptionDataSource4,
                      a
                    )
                  );
                case 12:
                  f = g.sent;
                  g.next = 18;
                  break;
                case 15:
                  (g.prev = 15),
                    (g.t0 = g["catch"](9)),
                    c("FBLogger")("messenger_search")
                      .catching(g.t0)
                      .mustfix(
                        "Error performing MWChatSearchIssueMAWFTSQuery.fetchResults"
                      );
                case 18:
                  this.onData(a, f);
                case 19:
                  this.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource6 =
                    c("MWChatSearchIssueLightspeedQuery.re").requestResults(
                      this
                        .$MWChatSearchTypeaheadLightspeedSubscriptionDataSource5,
                      this
                        .$MWChatSearchTypeaheadLightspeedSubscriptionDataSource3,
                      this
                        .$MWChatSearchTypeaheadLightspeedSubscriptionDataSource4,
                      a,
                      function (b) {
                        e.onData(a, f.concat(b)), d(!1);
                      }
                    );
                case 20:
                case "end":
                  return g.stop();
              }
          },
          null,
          this,
          [[9, 15]]
        );
      };
      f.onData = function (a, b) {
        b = b.map(c("MWChatSearchTypeaheadDataEntry").fromSearchResult);
        b = [].concat(
          this.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource8 &&
            a.query.length
            ? [d("mwStaticSearchEntries").createMessageSearchEntry(a.query)]
            : [],
          b
        );
        var e = [],
          f = new Set();
        for (
          var b = b,
            g = Array.isArray(b),
            h = 0,
            b = g
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var i;
          if (g) {
            if (h >= b.length) break;
            i = b[h++];
          } else {
            h = b.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          f.has(i.getKey()) || (e.push(i), f.add(i.getKey()));
        }
        i = { entries: e, params: a };
        h = c("mwChatSearchPayloadDecoratorRemoveDuplicates")(
          this.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource1
        );
        g = c("mwChatSearchPayloadDecoratorRemoveExcluded")(
          this.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource2
        );
        this.publish(g(h(i)));
      };
      f.setTokens = function (a) {
        this.$MWChatSearchTypeaheadLightspeedSubscriptionDataSource1 = a;
      };
      return e;
    })(c("CometTypeaheadSubscriptionDataSource"));
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadSubscriptionDataSourceFetchResolverNetwork",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useState;
    function a(a) {
      var b = a.dataSource;
      a = i(!1);
      var c = a[0],
        d = a[1];
      a = h(
        function (a) {
          a = a.requestParams;
          b.fetchNetwork(a, d);
        },
        [b]
      );
      return [{ isLoading: c }, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadSubscriptionDataSourceFetchResolver",
  [
    "cometTypeaheadODSLogFetchNetworkEvent",
    "cr:1846070",
    "debounce",
    "react",
    "recoverableViolation",
    "useCometTypeaheadSubscriptionDataSourceFetchResolverNetwork",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useRef;
    function a(a, d) {
      var e = a.dataSource,
        f = a.dataSourceFetchConfigParams;
      f = f === void 0 ? {} : f;
      var g = f.requestFlow;
      f = f.shouldDebounceNetwork;
      var k = f === void 0 ? !0 : f,
        l = a.onResolvePayload,
        m = j(
          c("debounce")(function (a) {
            return a();
          })
        );
      f = c("useCometTypeaheadSubscriptionDataSourceFetchResolverNetwork")({
        dataSource: e,
      });
      a = f[0].isLoading;
      var n = f[1],
        o = h(
          function (a, b) {
            var d = b.isTraceComplete;
            b = b.source;
            try {
              l(a, { isTraceComplete: d, source: b });
            } catch (a) {
              c("recoverableViolation")(
                "Failed to resolve fetched payload",
                "search"
              );
            }
            return b;
          },
          [l]
        ),
        p = j(g);
      i(
        function () {
          function a(a) {
            var b = a.requestParams;
            a = b.requestFlow;
            a != null && (p.current = a);
            var c = function () {
              return n({
                requestParams: babelHelpers["extends"]({}, b, {
                  requestFlow: p.current,
                }),
              });
            };
            Boolean(k)
              ? m.current(function () {
                  return c();
                })
              : c();
          }
          d != null && a(d);
          var b = m.current;
          return function () {
            b.reset();
          };
        },
        [d, n, k, o]
      );
      i(
        function () {
          var a = e.subscribe(function (a) {
            o(a, {
              isTraceComplete: !0,
              source: a.entries.length > 0 ? "network" : "network-no-results",
            }),
              c("cometTypeaheadODSLogFetchNetworkEvent") &&
                c("cometTypeaheadODSLogFetchNetworkEvent")(
                  "comet.ta.fetch",
                  !0,
                  1
                ),
              b("cr:1846070") && b("cr:1846070")(["all"], a);
          });
          return a;
        },
        [e, o]
      );
      return [{ isLoading: a }];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadSubscriptionDataSourceFetch",
  [
    "react",
    "recoverableViolation",
    "useCometTypeaheadSubscriptionDataSourceFetchResolver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useState;
    function a(a) {
      var b = j(null),
        d = b[0],
        e = b[1];
      b = c("useCometTypeaheadSubscriptionDataSourceFetchResolver")(a, d);
      b = b[0].isLoading;
      var f = h(function (a, b) {
          b === void 0 && (b = "all"), e({ requestParams: a, source: b });
        }, []),
        g = h(
          function (a) {
            a = a || {};
            var b = a.requestFlow;
            a = a.source;
            if (d == null) {
              c("recoverableViolation")(
                "Refetch cannot be called with undefined `fetchParams`",
                "search"
              );
              return;
            }
            var e = d.requestParams,
              g = e.loggingEventTrace;
            e = babelHelpers.objectWithoutPropertiesLoose(e, [
              "loggingEventTrace",
            ]);
            g = babelHelpers["extends"](
              {
                loggingEventTrace: babelHelpers["extends"]({}, g, {
                  sequenceID: String(Date.now()),
                }),
                requestFlow: b,
              },
              e
            );
            f(g, a);
          },
          [f, d]
        ),
        k = a.dataSource;
      i(
        function () {
          return function () {
            k.unsubscribe();
          };
        },
        [k]
      );
      return [
        {
          isLoading: b,
          source: (a = d == null ? void 0 : d.source) != null ? a : "all",
        },
        f,
        g,
      ];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometInternalTypeaheadSubscriptionProvider",
  [
    "CometInternalTypeaheadFetchContext",
    "orEmptyArray",
    "react",
    "useCometInternalTypeaheadStateDispatcher",
    "useCometTypeaheadSubscriptionDataSourceFetch",
    "useCometTypeaheadVolumeLoggingProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.dataSource,
        e = a.dataSourceFetchConfigParams,
        f = a.loggingContext,
        g = a.onFetchEntries_DO_NOT_USE,
        k = a.traceProvider;
      a = c("useCometInternalTypeaheadStateDispatcher")();
      var l = a.dispatchActiveEntries,
        m = c("useCometTypeaheadVolumeLoggingProvider")(f);
      a = c("useCometTypeaheadSubscriptionDataSourceFetch")({
        dataSource: d,
        dataSourceFetchConfigParams: e,
        onResolvePayload: i(
          function (a, b) {
            a = a.entries;
            var d = b.isTraceComplete;
            b = b.source;
            l(c("orEmptyArray")(a));
            m.logRequest(o);
            g && g(a);
            k &&
              !k.isResolved() &&
              d &&
              (b === "cache" && a.length >= k.getEntriesCountForVisualComplete()
                ? k.setEndReason("max_suggestions_reached")
                : b === "network"
                ? k.setEndReason("all_queries_completed")
                : b === "network-no-results" &&
                  k.setEndReason("all_queries_completed_no_network_results"),
              k.resolve());
          },
          [l, g, k]
        ),
      });
      f = a[0];
      var n = f.isLoading,
        o = f.source,
        p = a[1],
        q = a[2];
      d = j(
        function () {
          return { fetch: p, isLoading: n, refetch: q, source: o };
        },
        [p, n, q, o]
      );
      return h.jsx(c("CometInternalTypeaheadFetchContext").Provider, {
        value: d,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWChatMultitabHasTabContent.bs",
  ["bs_caml_obj"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
      return a.openTabsState.some(function (a) {
        var d = a.threadID;
        if (d && b("bs_caml_obj").caml_equal(d._0, c))
          return a.hasContent.contents;
        else return !1;
      });
    }
    f.get = a;
  },
  null
);
__d(
  "MWChatConfirmTabCloseDialog.bs",
  ["fbt"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      body: g._("Are you sure you want to close this chat window?"),
      confirm: g._("OK"),
      title: g._("You haven't sent your message."),
    };
    f.content = a;
  },
  null
);
__d(
  "MWLSLoadThreadPicture.bs",
  [
    "MWLSActor.bs",
    "MWLSCurrentThreadParticipants.bs",
    "MWLSThreadImageUrls.bs",
    "MWThreadKey.bs",
    "ReQL.bs",
    "ReQLSubscription.bs",
    "ReStore.bs",
    "SkytaleDB",
    "react",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var c = b("ReStore.bs").useHook(void 0),
        d = b("MWThreadKey.bs").useIdMemoizedExn(void 0);
      a = b("MWLSActor.bs").useActor(void 0);
      var e = b("ReQLSubscription.bs").useFirst(
          h.useMemo(
            function () {
              return b("ReQL.bs").getKeyRange(
                b("SkytaleDB").table(c, "threads").asc,
                { hd: d, tl: 0 }
              );
            },
            [c, JSON.stringify(d)]
          )
        ),
        f = b("MWLSCurrentThreadParticipants.bs").useMWLSParticipants(void 0);
      if (e !== void 0) return b("MWLSThreadImageUrls.bs").make(f, a, e.f);
      else return [];
    }
    f.useHook = a;
  },
  null
);
__d(
  "MWLSLoadThreadTitle.bs",
  [
    "MWLSActor.bs",
    "MWLSCurrentThreadParticipants.bs",
    "MWLSThreadTitle.bs",
    "MWThreadKey.bs",
    "ReQL.bs",
    "ReQLSubscription.bs",
    "ReStore.bs",
    "SkytaleDB",
    "react",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function i(a, b) {}
    function a(a) {
      var c = b("ReStore.bs").useHook(void 0),
        d = b("MWThreadKey.bs").useIdMemoizedExn(void 0);
      a = b("MWLSActor.bs").useActor(void 0);
      var e = b("ReQLSubscription.bs").useFirst(
          h.useMemo(
            function () {
              return b("ReQL.bs").getKeyRange(
                b("SkytaleDB").table(c, "threads").asc,
                { hd: d, tl: 0 }
              );
            },
            [c, JSON.stringify(d)]
          )
        ),
        f = b("MWLSCurrentThreadParticipants.bs").useMWLSParticipants(void 0);
      a = e !== void 0 ? b("MWLSThreadTitle.bs").make(e.d, a, f, e.c) : void 0;
      return [a, i];
    }
    f.useHook = a;
  },
  null
);
__d(
  "MWLSThreadUnreadMessageCount.bs",
  [
    "MWLSActor.bs",
    "MWThreadKey.bs",
    "ReQL.bs",
    "ReQLSubscription.bs",
    "ReQLSuspense.bs",
    "ReStore.bs",
    "SkytaleDB",
    "bs_caml",
    "react",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var c = b("ReStore.bs").useHook(void 0),
        d = b("MWThreadKey.bs").useIdMemoizedExn(void 0),
        e = b("MWLSActor.bs").useActor(void 0);
      a = b("ReQLSubscription.bs").useFirst(
        h.useMemo(
          function () {
            return b("ReQL.bs").map(
              b("ReQL.bs").getKeyRange(b("SkytaleDB").table(c, "threads").asc, {
                hd: d,
                tl: 0,
              }),
              function (a) {
                var f;
                return b("ReQLSuspense.bs").toArray(
                  (f = b("ReQL.bs")).filter(
                    f.bounds(
                      f.take(
                        f.getKeyRange(
                          b("SkytaleDB").table(c, "messages").desc,
                          { hd: d, tl: 0 }
                        ),
                        20
                      ),
                      { NAME: "greaterThan", VAL: { hd: a.j, tl: 0 } }
                    ),
                    function (a) {
                      return b("bs_caml").i64_neq(a.h, e);
                    }
                  )
                ).length;
              }
            );
          },
          [c, JSON.stringify(e), d]
        )
      );
      if (a !== void 0) return a;
      else return 0;
    }
    f.useHook = a;
  },
  null
);
__d(
  "MWChatTypingIndicator.bs",
  ["react", "stylex"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = g || b("react");
    c = "rqt66bd7-B";
    var j = {
      root: { alignItems: "bp9cbjyn", display: "j83agx80", height: "kmzbrmfl" },
      dot: {
        animationName: "d75kxgp9",
        animationDuration: "kv069q7b",
        animationIterationCount: "ee40wjg4",
        animationTimingFunction: "rr7aif1o",
        borderTopStartRadius: "s8bnoagg",
        borderTopEndRadius: "bn9qtmzc",
        borderBottomEndRadius: "hp05c5td",
        borderBottomStartRadius: "b6jg2yqc",
        display: "q9uorilb",
        height: "mw227v9j",
        marginEnd: "ditlmg2l",
        marginStart: "nvdbi5me",
        width: "loos5mxf",
        backgroundColor: "aph9nnby",
      },
      dot1: { animationDelay: "tv4077gy" },
      dot2: { animationDelay: "oeefd0zo" },
      dot3: { animationDelay: "dg03pwpq" },
    };
    function a(a) {
      return i.jsxs("div", {
        className: (h || (h = b("stylex")))(j.root),
        children: [
          i.jsx("div", { className: h(j.dot, j.dot1) }),
          i.jsx("div", { className: h(j.dot, j.dot2) }),
          i.jsx("div", { className: h(j.dot, j.dot3) }),
        ],
      });
    }
    d = a;
    f.dotAnimation = c;
    f.styles = j;
    f.make = d;
  },
  null
);
__d(
  "MWLSLoadTypingParticipants.bs",
  [
    "MWLSParticipant.bs",
    "MWThreadKey.bs",
    "ReQL.bs",
    "ReQLSubscription.bs",
    "ReQLSuspense.bs",
    "ReStore.bs",
    "SkytaleDB",
    "bs_int64",
    "react",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var c = b("ReStore.bs").useHook(void 0),
        d = b("MWThreadKey.bs").useIdMemoizedExn(void 0),
        e = b("ReQLSubscription.bs").useArray(
          h.useMemo(
            function () {
              var e = b("SkytaleDB").table(c, "contacts").asc,
                a = b("MWLSParticipant.bs").getAllInOpenThread(c, e, d);
              return b("ReQL.bs").map(
                b("ReQL.bs").getKeyRange(
                  b("SkytaleDB").table(c, "typing_indicator").asc,
                  { hd: d, tl: 0 }
                ),
                function (c) {
                  var d = c.b,
                    e = b("ReQLSuspense.bs").first(
                      b("ReQL.bs").getKeyRange(a, { hd: d, tl: 0 })
                    );
                  if (e !== void 0)
                    return {
                      participantId: b("bs_int64").to_string(d),
                      profileImage: e.profile_picture_url,
                      name: e.name,
                      expirationTimestampMs: c.c,
                    };
                }
              );
            },
            [c, d]
          )
        );
      return h.useMemo(
        function () {
          var a = [];
          e.forEach(function (b) {
            if (b !== void 0) {
              a.push(b);
              return;
            }
          });
          return a;
        },
        [e]
      );
    }
    f.useHook = a;
  },
  null
);
__d(
  "MWUILoadTypingParticipants.bs",
  ["cr:622"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("cr:622").useHook;
    f.$MWLSLoadTypingParticipants$OR$WorkplaceMSLoadTypingParticipants$requireCond =
      b("cr:622");
    f.useHook = a;
  },
  null
);
__d(
  "WIGActorHovercard.react",
  ["ActorHovercard.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("ActorHovercard.react"), babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
