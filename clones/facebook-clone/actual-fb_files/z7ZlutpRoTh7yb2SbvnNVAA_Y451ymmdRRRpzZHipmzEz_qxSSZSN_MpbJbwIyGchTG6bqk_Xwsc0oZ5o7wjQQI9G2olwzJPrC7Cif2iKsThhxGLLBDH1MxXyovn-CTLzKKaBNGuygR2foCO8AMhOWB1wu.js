if (self.CavalryLogger) {
  CavalryLogger.start_js(["QJHMbew"]);
}

__d(
  "MWV2ChatBubbleSolid.bs",
  ["bs_belt_Option", "react", "stylex"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = g || b("react"),
      j = {
        bubble: {
          paddingTop: "l60d2q6s",
          paddingEnd: "d1544ag0",
          paddingBottom: "sj5x9vvc",
          paddingStart: "tw6a2znq",
          position: "l9j0dhe7",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          borderTopStartRadius: "e72ty7fz",
          borderTopEndRadius: "qlfml3jp",
          borderBottomEndRadius: "inkptoze",
          borderBottomStartRadius: "qmr60zad",
          overflowWrap: "jm1wdb64",
          wordBreak: "qv66sw1b",
          color: "ljqsnud1",
          maxWidth: "odn2s2vf",
          zIndex: "tkr6xdv7",
        },
        incoming_connect_top: { borderTopStartRadius: "jk6sbkaj" },
        incoming_connect_bot: { borderBottomStartRadius: "qttc61fc" },
        outgoing_connect_top: { borderTopEndRadius: "kdgqqoy6" },
        outgoing_connect_bot: { borderBottomEndRadius: "ihh4hy1g" },
        precedes_xma: {
          boxSizing: "rq0escxv",
          maxWidth: "nqmqzb3c",
          width: "k4urcfbm",
          borderBottomEndRadius: "jinzq4gt",
          borderBottomStartRadius: "mrjvor2e",
        },
      };
    function a(a) {
      var c = a.children,
        d = a.style,
        e = a.connectTop,
        f = a.connectBottom,
        g = a.precedesXMA,
        k = a.outgoing;
      a = a.xstyle;
      g = g !== void 0 ? g : !1;
      return i.jsx("div", {
        role: "none",
        className: (h || (h = b("stylex")))(
          j.bubble,
          e ? (k ? j.outgoing_connect_top : j.incoming_connect_top) : !1,
          !g && f ? (k ? j.outgoing_connect_bot : j.incoming_connect_bot) : !1,
          g ? j.precedes_xma : !1,
          b("bs_belt_Option").getWithDefault(a, !1)
        ),
        style: d,
        children: c,
      });
    }
    c = a;
    f.styles = j;
    f.make = c;
  },
  null
);
__d(
  "MWV2ChatEphemeralButton.bs",
  [
    "fbt",
    "ix",
    "BaseImage_DEPRECATED.react",
    "CometPressable.react",
    "FBID.bs",
    "MDSTextCommon.react",
    "MWChatEphemeralMediaTemporarySeenState.bs",
    "MWV2ChatBubbleSolid.bs",
    "MessagingAttachmentType.bs",
    "RavenMessagingState.bs",
    "TetraIcon.react",
    "UseCurrentDisplayMode.bs",
    "XCometMessengerEphemeralMediaControllerRouteBuilder",
    "bs_caml",
    "bs_caml_option",
    "bs_int64",
    "fbicon",
    "react",
    "stylex",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = i || b("react"),
      l = { image: { verticalAlign: "hu5pjgll" } };
    function m(a) {
      var c = a.filter;
      a = a.icon;
      return k.jsx(b("BaseImage_DEPRECATED.react"), {
        className: (j || (j = b("stylex")))(l.image),
        style: { filter: c },
        src: a.src,
      });
    }
    c = { styles: l, make: m };
    function n(a) {
      var c = a.attachment,
        d = a.children,
        e = a.ariaLabel;
      a = a.initiallyUnread;
      var f = b("XCometMessengerEphemeralMediaControllerRouteBuilder").buildURL(
        {
          thread_id: b("FBID.bs").ofStringExn(b("bs_int64").to_string(c.a)),
          attachment_id: b("FBID.bs").ofStringExn(c.e),
          message_id: c.c,
        }
      );
      c = c.bV;
      if (c === void 0) return d;
      if (
        !(
          b("bs_caml").i64_eq(c, b("RavenMessagingState.bs").unseen) ||
          (b("bs_caml").i64_eq(c, b("RavenMessagingState.bs").seen) && a)
        )
      )
        return d;
      c = {
        linkProps: { url: f },
        testid: "view-ephemeral-media",
        overlayRadius: 50,
        children: d,
      };
      e !== void 0 && (c["aria-label"] = b("bs_caml_option").valFromOption(e));
      return k.jsx(b("CometPressable.react"), c);
    }
    d = { make: n };
    var o = g._("View Photo"),
      p = g._("View Video"),
      q = b("fbicon")._(h("656360"), 20),
      r = {
        wrapper: {
          marginTop: "aahdfvyu",
          marginEnd: "cxmmr5t8",
          marginBottom: "tvmbv18p",
          marginStart: "hcukyx3x",
        },
        text: { marginStart: "h676nmdw" },
      };
    function a(a) {
      var c = a.attachment,
        d = a.connectTop,
        e = a.connectBottom;
      a = a.outgoing;
      var f = c.f;
      f = b("bs_caml").i64_eq(f, b("MessagingAttachmentType.bs").ephemeralImage)
        ? o
        : b("bs_caml").i64_eq(f, b("MessagingAttachmentType.bs").ephemeralVideo)
        ? p
        : void 0;
      var g = b("useCurrentDisplayMode")(),
        h = b("MWChatEphemeralMediaTemporarySeenState.bs").isSeenThisSession(
          b("bs_int64").to_string(c.a),
          c.e
        ),
        i = c.bV,
        l = c.bV,
        s,
        t = 0;
      l !== void 0 && b("bs_caml").i64_eq(l, b("RavenMessagingState.bs").unseen)
        ? (s = k.jsx(m, {
            filter:
              g === b("UseCurrentDisplayMode.bs").darkTheme
                ? "invert(41%) sepia(25%) saturate(7193%) hue-rotate(202deg) brightness(106%) contrast(106%)"
                : "invert(44%) sepia(95%) saturate(2777%) hue-rotate(182deg) brightness(102%) contrast(103%)",
            icon: q,
          }))
        : (t = 1);
      t === 1 &&
        (s = k.jsx(b("TetraIcon.react"), {
          icon: q,
          color:
            l !== void 0 &&
            b("bs_caml").i64_eq(l, b("RavenMessagingState.bs").seen) &&
            h
              ? "primary-icon"
              : "disabled",
        }));
      return k.jsx(n, {
        attachment: c,
        children: k.jsx(b("MWV2ChatBubbleSolid.bs").make, {
          children: k.jsx("div", {
            className: (j || (j = b("stylex")))(r.wrapper),
            children: k.jsxs(b("MDSTextCommon.react"), {
              color:
                i !== void 0 &&
                (b("bs_caml").i64_eq(i, b("RavenMessagingState.bs").unseen) ||
                  (b("bs_caml").i64_eq(i, b("RavenMessagingState.bs").seen) &&
                    h))
                  ? "primary"
                  : "disabled",
              type: "bodyLink3",
              children: [
                s,
                k.jsx("span", {
                  className: j(r.text),
                  children: f !== void 0 ? f : null,
                }),
              ],
            }),
          }),
          style: { backgroundColor: "var(--wash)" },
          connectTop: d,
          connectBottom: e,
          outgoing: a,
        }),
        ariaLabel: f,
        initiallyUnread: h,
      });
    }
    e = a;
    f.CustomColorIcon = c;
    f.OpenMediaViewerAction = d;
    f.styles = r;
    f.make = e;
  },
  null
);
__d(
  "MWChatOpenTabByThreadKey.bs",
  [
    "FBID.bs",
    "LS.bs",
    "LSAuthorityLevel.bs",
    "LSContactType.bs",
    "LSMailboxVerifyThreadRowExistsStoredProcedure",
    "LSTransaction.bs",
    "MWChatOpenTabForPage.bs",
    "MWChatOpenTabForUser.bs",
    "MWLSActor.bs",
    "MessagingThreadType.bs",
    "Promise",
    "ReQL.bs",
    "ReStore.bs",
    "SkytaleDB",
    "SortedAsyncIterable.bs",
    "bs_caml",
    "bs_curry",
    "bs_int64",
    "promiseDone",
    "react",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a, c, d) {
      var e = b("ReStore.bs").useHook(void 0),
        f = b("bs_curry")._3(
          b("MWChatOpenTabForUser.bs").useHook,
          void 0,
          c,
          d
        ),
        g = f[0],
        i = b("bs_curry")._3(
          b("MWChatOpenTabForPage.bs").useHook,
          void 0,
          c,
          d
        ),
        j = b("MWLSActor.bs").useActor(void 0),
        k = h.useMemo(
          function () {
            return new (b("Promise"))(function (c, d) {
              var f = (d = b("ReQL.bs")).mergeJoin(
                  d.filter(
                    d.getKeyRange(b("SkytaleDB").table(e, "participants").asc, {
                      hd: a,
                      tl: 0,
                    }),
                    function (a) {
                      return b("bs_caml").i64_neq(a.b, j);
                    }
                  ),
                  b("SkytaleDB").table(e, "contacts").asc
                ),
                g = { contents: function (a) {} };
              g.contents = b("SortedAsyncIterable.bs").subscribe(
                f,
                function (a, d) {
                  if (typeof d === "number") return;
                  a = d._0[1];
                  if (
                    b("bs_caml").i64_ge(
                      a.J,
                      b("LSAuthorityLevel.bs").authoritative
                    )
                  ) {
                    b("bs_curry")._1(g.contents, void 0);
                    return c(a);
                  }
                }
              );
              b("promiseDone")(d.first(f), function (d) {
                if (d !== void 0) {
                  d = d[1];
                  if (
                    b("bs_caml").i64_ge(
                      d.J,
                      b("LSAuthorityLevel.bs").authoritative
                    )
                  ) {
                    b("bs_curry")._1(g.contents, void 0);
                    return c(d);
                  } else return;
                }
                b("promiseDone")(
                  b("LSTransaction.bs").run(
                    e,
                    function (c) {
                      return b("LSMailboxVerifyThreadRowExistsStoredProcedure")(
                        a,
                        b("MessagingThreadType.bs").oneToOne,
                        b("LS.bs").make(c)
                      );
                    },
                    "readWrite"
                  ),
                  void 0,
                  void 0
                );
              });
            });
          },
          [a, e]
        );
      return h.useCallback(
        function (c) {
          b("promiseDone")(k, function (c) {
            var d = b("FBID.bs").ofStringExn(b("bs_int64").to_string(a));
            c = c.q;
            if (b("bs_caml").i64_eq(c, b("LSContactType.bs").page))
              return i(d, !1);
            else return g(d, !1);
          });
        },
        [k, g, i, a]
      );
    }
    f.useHook = a;
  },
  null
);
__d(
  "MWV2ChatBubbleTransparent.bs",
  ["react", "stylex"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = g || b("react");
    c = 36;
    d = (c + 6) | 0;
    e = (d + 14) | 0;
    var j = {
      bubble: {
        maxWidth: "odn2s2vf",
        paddingTop: "l60d2q6s",
        paddingEnd: "d1544ag0",
        paddingBottom: "sj5x9vvc",
        paddingStart: "tw6a2znq",
        position: "l9j0dhe7",
        overflowX: "ni8dbmo4",
        overflowY: "stjgntxs",
        overflowWrap: "jm1wdb64",
        wordBreak: "qv66sw1b",
        ":after": {
          content: "i6jr3soi",
          display: "k4aqvg2j",
          position: "g8e0jvg7",
          top: "geli4699",
          bottom: "fkq5d175",
          start: "oskkt2ky",
          end: "i4sm7uox",
          borderTopStyle: "fin0ypmt",
          borderEndStyle: "j10cs0yc",
          borderBottomStyle: "aw4oqepz",
          borderStartStyle: "fgzft9zi",
          borderTopWidth: "dzm1kfb5",
          borderEndWidth: "oc4jhviy",
          borderBottomWidth: "h624itt5",
          borderStartWidth: "reaovrpu",
          borderTopColor: "hwba8txa",
          borderEndColor: "dzgn2jm7",
          borderBottomColor: "n4g4bzxc",
          borderStartColor: "sdxs9vve",
          borderTopStartRadius: "cur584us",
          borderTopEndRadius: "gt092ec4",
          borderBottomEndRadius: "t02hhl22",
          borderBottomStartRadius: "lm2lsiji",
          pointerEvents: "yfudjqg5",
        },
      },
      incoming_connect_top: { ":after": { borderTopStartRadius: "efeyjaql" } },
      incoming_connect_bot: {
        ":after": { borderBottomStartRadius: "dcchegku" },
      },
      outgoing_connect_top: { ":after": { borderTopEndRadius: "qyep8gqv" } },
      outgoing_connect_bot: { ":after": { borderBottomEndRadius: "af2nlw56" } },
      precedes_xma: {
        boxSizing: "rq0escxv",
        maxWidth: "nqmqzb3c",
        width: "k4urcfbm",
        ":after": {
          borderBottomEndRadius: "iep0m7mp",
          borderBottomStartRadius: "pgkcj7gb",
        },
      },
    };
    function a(a) {
      var c = a.children,
        d = a.connectTop,
        e = a.connectBottom,
        f = a.precedesXMA;
      a = a.outgoing;
      return i.jsx("div", {
        role: "none",
        className: (h || (h = b("stylex")))(
          j.bubble,
          d ? (a ? j.outgoing_connect_top : j.incoming_connect_top) : !1,
          !f && e ? (a ? j.outgoing_connect_bot : j.incoming_connect_bot) : !1,
          f ? j.precedes_xma : !1
        ),
        children: c,
      });
    }
    var k = 18;
    a = a;
    f.baseSize = k;
    f.borderWidth = c;
    f.smallRadius = d;
    f.largeRadius = e;
    f.styles = j;
    f.make = a;
  },
  null
);
__d(
  "MWV2ChatBubble.bs",
  [
    "MWLSThreadDisplayContext.bs",
    "MWV2ChatBubbleSolid.bs",
    "MWV2ChatBubbleTransparent.bs",
    "MWV2ColorUtils.bs",
    "MWV2MessageHasReply.bs",
    "MWV2Theme.bs",
    "bs_caml_obj",
    "bs_caml_splice_call",
    "react",
    "stylex",
    "useMatchMedia",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = g || b("react"),
      j = {
        emphasis_ring: {
          borderTop: "dmyp13bq",
          borderEnd: "ndhlz62r",
          borderBottom: "ncbqlf8d",
          borderStart: "s0vq2i2w",
          position: "l9j0dhe7",
          backgroundColor: "g5ia77u1",
          ":before": {
            content: "g25sr70m",
            display: "jdo7v6z6",
            position: "lzm9zonv",
            top: "hlthg0ru",
            bottom: "bukg358c",
            start: "nsmdno57",
            end: "p8m4tlpt",
            borderTopStyle: "fboblok7",
            borderEndStyle: "hooc0cby",
            borderBottomStyle: "bblsj9ze",
            borderStartStyle: "sj46kbig",
            borderTopWidth: "ek0ugbdb",
            borderEndWidth: "dpj2ryut",
            borderBottomWidth: "rq41jfz2",
            borderStartWidth: "t1qoqrst",
            borderTopColor: "ctd5sy3o",
            borderEndColor: "t7740pma",
            borderBottomColor: "h01b6lxl",
            borderStartColor: "is8i6zgj",
            opacity: "f9zxapb0",
            borderTopStartRadius: "o5g7ym2r",
            borderTopEndRadius: "swnt2q8t",
            borderBottomEndRadius: "egy40mqu",
            borderBottomStartRadius: "m3lz4j07",
            pointerEvents: "szx2nxjd",
            zIndex: "c4u49bkg",
          },
          ":after": {
            content: "i6jr3soi",
            display: "k4aqvg2j",
            position: "g8e0jvg7",
            top: "e15w2yfi",
            bottom: "jdr4sxky",
            start: "opatuxy4",
            end: "jj6iul7h",
            borderTopStyle: "fin0ypmt",
            borderEndStyle: "j10cs0yc",
            borderBottomStyle: "aw4oqepz",
            borderStartStyle: "fgzft9zi",
            borderTopWidth: "avvvbj8i",
            borderEndWidth: "qc19tv0c",
            borderBottomWidth: "seh407zj",
            borderStartWidth: "mgkhc2l0",
            borderTopColor: "qu1lfhdz",
            borderEndColor: "h2zxmtvk",
            borderBottomColor: "r13p1xmt",
            borderStartColor: "thnup18q",
            borderTopStartRadius: "tdsjupxz",
            borderTopEndRadius: "o6z0k5ic",
            borderBottomEndRadius: "m0ai3fox",
            borderBottomStartRadius: "t06v70oj",
            pointerEvents: "yfudjqg5",
            zIndex: "sebibeov",
          },
        },
        emphasis_ring_before_xma: {
          borderBottom: "humdl8nn",
          ":before": {
            borderBottom: "dwjjxrjg",
            borderBottomStartRadius: "vha61xgp",
            borderBottomEndRadius: "cninlv0n",
          },
          ":after": {
            borderBottom: "h4hm3dj4",
            borderBottomStartRadius: "pgkcj7gb",
            borderBottomEndRadius: "iep0m7mp",
          },
        },
        emphasis_ring_xma: {
          width: "gaoewp0a",
          borderTop: "gcieejh5",
          ":before": {
            borderTop: "bsyhajyn",
            borderTopStartRadius: "rlntl7br",
            borderTopEndRadius: "rgkwebxj",
          },
          ":after": {
            borderTop: "q22nnh5l",
            borderTopStartRadius: "lm7vadms",
            borderTopEndRadius: "s6fxew23",
          },
        },
        emphasis_ring_connect_top_outgoing: {
          ":before": { borderTopEndRadius: "m2bnzw1h" },
          ":after": { borderTopEndRadius: "mk1s9yjy" },
        },
        emphasis_ring_connect_top_incoming: {
          ":before": { borderTopStartRadius: "izwkhwj2" },
          ":after": { borderTopStartRadius: "i7jao9op" },
        },
        emphasis_ring_connect_bottom_outgoing: {
          ":before": { borderBottomEndRadius: "aultcim1" },
          ":after": { borderBottomEndRadius: "lgl5u3oa" },
        },
        emphasis_ring_connect_bottom_incoming: {
          ":before": { borderBottomStartRadius: "mfjs0nqm" },
          ":after": { borderBottomStartRadius: "qrw7h0bf" },
        },
      };
    function k(a, c) {
      if (c) return { backgroundColor: b("MWV2ColorUtils.bs").int64ToHex(a.c) };
      else return { backgroundColor: "var(--wash)" };
    }
    function l(a) {
      var c = a.children,
        d = a.connectTop,
        e = a.connectBottom,
        f = a.precedesXMA,
        g = a.outgoing;
      a = a.threadTheme;
      a = k(a, g);
      return i.jsx(b("MWV2ChatBubbleSolid.bs").make, {
        children: c,
        style: a,
        connectTop: d,
        connectBottom: e,
        precedesXMA: f,
        outgoing: g,
      });
    }
    c = { useInlineStyles: k, make: l };
    function m(a, c, d) {
      var e = b("MWLSThreadDisplayContext.bs").useHook(void 0),
        f = b("useMatchMedia")("(min-height: " + String(1280) + "px)");
      return i.useMemo(
        function () {
          if (d && c.length > 1)
            return {
              backgroundAttachment: "fixed",
              backgroundColor: b("MWV2ColorUtils.bs").int64ToHex(a.c),
              backgroundImage: b("MWV2ColorUtils.bs").gradient(
                c,
                b("bs_caml_obj").caml_notequal(e, 1),
                f,
                void 0
              ),
            };
          else if (d)
            return { backgroundColor: b("MWV2ColorUtils.bs").int64ToHex(a.c) };
          else return { backgroundColor: "var(--wash)" };
        },
        [a, c, d, e, f]
      );
    }
    function n(a) {
      var c = a.children,
        d = a.connectTop,
        e = a.connectBottom,
        f = a.precedesXMA,
        g = a.outgoing,
        h = a.threadTheme;
      a = a.gradientColors;
      h = m(h, a, g);
      return i.jsx(b("MWV2ChatBubbleSolid.bs").make, {
        children: c,
        style: h,
        connectTop: d,
        connectBottom: e,
        precedesXMA: f,
        outgoing: g,
      });
    }
    d = { useInlineStyles: m, make: n };
    function o(a) {
      var c = a.children,
        d = a.connectTop,
        e = a.connectBottom,
        f = a.precedesXMA;
      a = a.outgoing;
      return i.jsx(b("MWV2ChatBubbleTransparent.bs").make, {
        children: c,
        connectTop: d,
        connectBottom: e,
        precedesXMA: f,
        outgoing: a,
      });
    }
    e = { make: o };
    function p(a) {
      var c = a.children,
        d = a.shouldConnectTop,
        e = a.shouldConnectBottom,
        f = a.isBeforeXMA,
        g = a.hasXMA;
      a = a.isOutgoing;
      f = [
        j.emphasis_ring,
        f
          ? j.emphasis_ring_before_xma
          : e
          ? a
            ? j.emphasis_ring_connect_bottom_outgoing
            : j.emphasis_ring_connect_bottom_incoming
          : !1,
        g
          ? d
            ? j.emphasis_ring_xma
            : !1
          : d
          ? a
            ? j.emphasis_ring_connect_top_outgoing
            : j.emphasis_ring_connect_top_incoming
          : !1,
      ];
      return i.jsx("div", {
        className: b("bs_caml_splice_call").spliceApply(
          h || (h = b("stylex")),
          [f]
        ),
        children: c,
      });
    }
    var q = { make: p };
    function a(a) {
      var c = a.children,
        d = a.connectTop,
        e = a.connectBottom,
        f = a.precedesXMA,
        g = a.outgoing,
        h = a.message;
      a = a.hasEmphasisRing;
      a = a !== void 0 ? a : !1;
      var j = b("MWV2Theme.bs").useHook(void 0),
        k = j.gradientColors;
      j = j.threadTheme;
      h = b("MWV2MessageHasReply.bs").make(h);
      h = h
        ? i.jsx(n, {
            children: c,
            connectTop: d,
            connectBottom: e,
            precedesXMA: f,
            outgoing: g,
            threadTheme: j,
            gradientColors: k,
          })
        : g && k.length > 1
        ? i.jsx(o, {
            children: c,
            connectTop: d,
            connectBottom: e,
            precedesXMA: f,
            outgoing: g,
          })
        : i.jsx(l, {
            children: c,
            connectTop: d,
            connectBottom: e,
            precedesXMA: f,
            outgoing: g,
            threadTheme: j,
          });
      if (a)
        return i.jsx(p, {
          children: h,
          shouldConnectTop: d,
          shouldConnectBottom: e,
          isBeforeXMA: f,
          hasXMA: !1,
          isOutgoing: g,
        });
      else return h;
    }
    a = a;
    f.styles = j;
    f.Solid = c;
    f.Reply = d;
    f.Transparent = e;
    f.EmphasisRing = q;
    f.make = a;
  },
  null
);
__d(
  "MWV2ChatMessageListColumn.bs",
  ["react", "stylex"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = g || b("react"),
      j = {
        root: {
          alignSelf: "ns4p8fja",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          alignItems: "a6sixzi8",
          justifyContent: "bkfpd7mw",
          maxWidth: "d2edcug0",
        },
        shrinkwrap: { flexGrow: "kb5gq1qc" },
        grow: { flexGrow: "buofh1pr" },
        paint: { backgroundColor: "nred35xi" },
        profile: { paddingStart: "pcp91wgn", paddingEnd: "dflh9lhu" },
        withGutters: { paddingEnd: "akiltmtj", paddingStart: "ox664e6k" },
        makeSpaceForActions: { maxWidth: "jit8km0v" },
        centered: { alignItems: "bp9cbjyn" },
      };
    function k(a) {
      var c = a.children,
        d = a.grow,
        e = a.shrinkwrap,
        f = a.paint,
        g = a.profile,
        k = a.withGutters,
        l = a.makeSpaceForActions;
      a = a.centered;
      d = d !== void 0 ? d : !1;
      e = e !== void 0 ? e : !1;
      f = f !== void 0 ? f : !1;
      g = g !== void 0 ? g : !1;
      k = k !== void 0 ? k : !1;
      l = l !== void 0 ? l : !1;
      a = a !== void 0 ? a : !1;
      return i.jsx("div", {
        role: "none",
        className: (h || (h = b("stylex")))(
          j.root,
          d ? j.grow : !1,
          e ? j.shrinkwrap : !1,
          f ? j.paint : !1,
          g ? j.profile : !1,
          k ? j.withGutters : !1,
          l ? j.makeSpaceForActions : !1,
          a ? j.centered : !1
        ),
        children: c,
      });
    }
    var l = { styles: j, make: k };
    function a(a) {
      var b = a.children,
        c = a.shrinkwrap;
      a = a.grow;
      c = c !== void 0 ? c : !1;
      a = a !== void 0 ? a : !1;
      return i.jsx(k, {
        children: b,
        grow: a,
        shrinkwrap: c,
        paint: !0,
        withGutters: !0,
      });
    }
    a = { make: a };
    function c(a) {
      a = a.children;
      return i.jsx(k, { children: a, shrinkwrap: !0, paint: !0, profile: !0 });
    }
    c = { make: c };
    function d(a) {
      var b = a.children,
        c = a.paint;
      a = a.centered;
      c = c !== void 0 ? c : !0;
      a = a !== void 0 ? a : !1;
      return i.jsx(k, { children: b, shrinkwrap: !0, paint: c, centered: a });
    }
    d = { make: d };
    function e(a) {
      a = a.children;
      return i.jsx(k, { children: a, grow: !0, paint: !0 });
    }
    e = { make: e };
    function m(a) {
      var b = a.children,
        c = a.paint;
      a = a.makeSpaceForActions;
      return i.jsx(k, { children: b, paint: c, makeSpaceForActions: a });
    }
    m = { make: m };
    var n = { spacer: { flexGrow: "buofh1pr", flexBasis: "rj1gh0hx" } };
    function o(a) {
      return i.jsx("div", {
        role: "none",
        className: (h || (h = b("stylex")))(n.spacer),
      });
    }
    o = { styles: n, make: o };
    var p = { vr: { backgroundColor: "nred35xi", width: "k4urcfbm" } };
    function q(a) {
      a = a.height;
      return i.jsx("div", {
        role: "none",
        className: (h || (h = b("stylex")))(p.vr),
        style: { height: "" + a + "px" },
      });
    }
    q = { styles: p, make: q };
    f.BaseColumn = l;
    f.WithGutters = a;
    f.Profile = c;
    f.Shrinkwrap = d;
    f.Grow = e;
    f.Bubble = m;
    f.HorizontalSpacer = o;
    f.VerticalRhythm = q;
  },
  null
);
__d(
  "MWV2MessageRowIsRowFocusedContext.bs",
  ["react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {}
    function c(a) {}
    e = { setFocused: a, setIsDialogOpened: c, isDialogOpened: !1 };
    var i = h.createContext(e);
    function d(a) {
      var b = a.children;
      a = a.value;
      return h.createElement(i.Provider, { value: a, children: b });
    }
    b = { make: d };
    f.emptyValue = e;
    f.context = i;
    f.Provider = b;
  },
  null
);
__d(
  "FBEmojiAliases",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {};
  },
  null
);
__d(
  "MessengerEmojiConfig",
  [],
  function (a, b, c, d, e, f) {
    e.exports = { emoji_colors: [0, 127995, 127996, 127997, 127998, 127999] };
  },
  null
);
__d(
  "EmojiLikeConstants",
  ["EmojiStaticConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = Object.freeze({
      XSMALL: "xsmall",
      SMALL: "small",
      MEDIUM: "medium",
      LARGE: "large",
    });
    b = {
      dp16: "xsmall",
      dp32: "small",
      dp64: "medium",
      db64: "medium",
      dp128: "large",
    };
    d = Object.freeze({ PICKER: "picker", HOT_LIKE: "hot_like" });
    e = [983040];
    f = "hot_emoji_source";
    var h = "hot_emoji_size",
      i = "emoji_like",
      j = "\ud83d\udc4d",
      k = [128077];
    g.sizeMap = c("EmojiStaticConfig").sizeMap;
    g.size = a;
    g.sizeMapTransfer = b;
    g.source = d;
    g.FB_THUMBS_UP_EMOJI = e;
    g.SOURCE_TAG_PREFIX = f;
    g.TAG_PREFIX_NEW = h;
    g.TAG_PREFIX_OLD = i;
    g.THUMBS_UP_EMOJI = j;
    g.THUMBS_UP_EMOJI_CODES = k;
  },
  98
);
__d(
  "EmoticonEmojiList",
  [],
  function (a, b, c, d, e, f) {
    a = {
      ":)": "slightsmile",
      ":-)": "slightsmile",
      ":]": "slightsmile",
      "=)": "smile",
      "(:": "slightsmile",
      "(=": "smile",
      ":(": "frown",
      ":-(": "frown",
      ":[": "frown",
      "=(": "frown",
      ")=": "frown",
      ";-P": "winktongue",
      ";P": "winktongue",
      ";-p": "winktongue",
      ";p": "winktongue",
      ":dog:": "dog",
      ":poop:": "poop",
      ":trans:": "transflag",
      ":P": "tongue",
      ":-P": "tongue",
      ":-p": "tongue",
      ":p": "tongue",
      "=P": "tongue",
      "=p": "tongue",
      "=D": "grin",
      ":-D": "slightgrin",
      ":D": "slightgrin",
      ":o": "gasp",
      ":-O": "gasp",
      ":O": "gasp",
      ":-o": "gasp",
      ";)": "wink",
      ";-)": "wink",
      "8-)": "glasses",
      "8)": "glasses",
      "B-)": "glasses",
      "B)": "glasses",
      ">:(": "grumpy",
      ">:-(": "grumpy",
      ":/": "unsure",
      ":-/": "unsure",
      ":\\": "unsure",
      ":-\\": "unsure",
      "=/": "unsure",
      "=\\": "unsure",
      ":'(": "cry",
      ":'-(": "cry",
      ":\u2019(": "cry",
      ":\u2019-(": "cry",
      "3:)": "devil",
      "3:-)": "devil",
      "O:)": "angel",
      "O:-)": "angel",
      "0:)": "angel",
      "0:-)": "angel",
      ":*": "kiss",
      ":-*": "kiss",
      ";-*": "winkkiss",
      ";*": "winkkiss",
      "<3": "heart",
      "&lt;3": "heart",
      "\u2665": "heart",
      "^_^": "kiki",
      "^~^": "kiki",
      "-_-": "expressionless",
      ":-|": "squint",
      ":|": "squint",
      ">:o": "upset",
      ">:O": "upset",
      ">:-O": "upset",
      ">:-o": "upset",
      ">_<": "persevere",
      ">.<": "persevere",
      '<(")': "penguin",
      O_O: "flushface",
      o_o: "flushface",
      "0_0": "flushface",
      T_T: "crying",
      "T-T": "crying",
      ToT: "crying",
      "T.T": "crying",
      "-3-": "flushkiss",
      "'-_-": "sweating",
      "\u2019-_-": "sweating",
      "(y)": "like",
      ":like:": "like",
      "(Y)": "like",
      ":+1:": "thumbsup",
      "(n)": "dislike",
      "(N)": "dislike",
    };
    b = {
      slightsmile: "1f642",
      smile: "1f60a",
      frown: "1f61e",
      winktongue: "1f61c",
      dog: "1f436",
      poop: "1f4a9",
      transflag: "1f3f3_200d_26a7",
      tongue: "1f61b",
      slightgrin: "1f600",
      grin: "1f603",
      gasp: "1f62e",
      wink: "1f609",
      glasses: "1f60e",
      grumpy: "1f620",
      unsure: "1f615",
      cry: "1f622",
      devil: "1f608",
      angel: "1f607",
      kiss: "1f617",
      winkkiss: "1f618",
      heart: "2764",
      kiki: "1f60a",
      expressionless: "1f611",
      squint: "1f610",
      upset: "1f620",
      persevere: "1f623",
      penguin: "1f427",
      flushface: "1f633",
      crying: "1f62d",
      flushkiss: "1f61a",
      sweating: "1f613",
      like: "f0000",
      thumbsup: "1f44d",
      dislike: "1f44e",
    };
    c = {
      slightsmile: ":)",
      smile: "=)",
      frown: ":(",
      winktongue: ";-P",
      dog: ":dog:",
      poop: ":poop:",
      transflag: ":trans:",
      tongue: ":P",
      slightgrin: ":D",
      grin: "=D",
      gasp: ":o",
      wink: ";)",
      glasses: "8-)",
      grumpy: ">:(",
      unsure: ":/",
      cry: ":'(",
      devil: "3:)",
      angel: "O:)",
      kiss: ":*",
      winkkiss: ";*",
      heart: "<3",
      kiki: "^_^",
      expressionless: "-_-",
      squint: ":-|",
      upset: ">:o",
      persevere: ">_<",
      penguin: '<(")',
      flushface: "O_O",
      crying: "T_T",
      flushkiss: "-3-",
      sweating: "'-_-",
      like: "(y)",
      thumbsup: ":+1:",
      dislike: "(n)",
    };
    d =
      /(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:dog:|:poop:|:trans:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|:\+1:(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/;
    e =
      /(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:dog:|:poop:|:trans:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|:\+1:(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/;
    f.names = a;
    f.emote2emojis = b;
    f.symbols = c;
    f.regexp = d;
    f.noncapturingRegexp = e;
  },
  66
);
__d(
  "EmojiFormat.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      return a.split("_").map(function (a) {
        return parseInt(a, 16);
      });
    }
    function a(a) {
      return a
        .map(function (a) {
          return a.toString(16);
        })
        .join("_");
    }
    function h(a) {
      return a
        .map(function (a) {
          return String.fromCodePoint(a);
        })
        .join("");
    }
    function b(a) {
      return h(g(a));
    }
    f.codeStringToCodeArray = g;
    f.codeArrayToCodeString = a;
    f.codeArrayToUnicode = h;
    f.codeStringToUnicode = b;
  },
  null
);
__d(
  "SkinToneEmoji.bs",
  ["EmojiFormat.bs", "MessengerEmojiConfig", "bs_caml_array"],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      switch (a) {
        case "1f385":
        case "1f3c3":
        case "1f3c4":
        case "1f3ca":
        case "1f3cb":
        case "1f442":
        case "1f443":
        case "1f446":
        case "1f447":
        case "1f448":
        case "1f449":
        case "1f44a":
        case "1f44b":
        case "1f44c":
        case "1f44d":
        case "1f44e":
        case "1f44f":
        case "1f450":
        case "1f466":
        case "1f467":
        case "1f468":
        case "1f469":
        case "1f46e":
        case "1f470":
        case "1f471":
        case "1f472":
        case "1f473":
        case "1f474":
        case "1f475":
        case "1f476":
        case "1f477":
        case "1f478":
        case "1f47c":
        case "1f481":
        case "1f482":
        case "1f483":
        case "1f485":
        case "1f486":
        case "1f487":
        case "1f4aa":
        case "1f575":
        case "1f590":
        case "1f595":
        case "1f596":
        case "1f645":
        case "1f646":
        case "1f647":
        case "1f64b":
        case "1f64c":
        case "1f64d":
        case "1f64e":
        case "1f64f":
        case "1f6a3":
        case "1f6b4":
        case "1f6b5":
        case "1f6b6":
        case "1f6c0":
        case "1f918":
        case "261d":
        case "26f9":
        case "270a":
        case "270b":
        case "270c":
        case "270d":
          return !0;
        default:
          return !1;
      }
    }
    function h(a) {
      if (b("bs_caml_array").get(a, (a.length - 1) | 0) === 65039)
        return b("bs_caml_array").get(a, (a.length - 1) | 0);
      else return 0;
    }
    function i(a) {
      if (b("bs_caml_array").get(a, (a.length - 1) | 0) === 65039) return a;
      a = a.slice(0);
      return a.concat([65039]);
    }
    function j(a) {
      if (h(a) === 0) return a;
      else return a.slice(0, (a.length - 1) | 0);
    }
    function k(a) {
      var c = b("MessengerEmojiConfig").emoji_colors;
      c = c.filter(function (b) {
        return b === a;
      });
      return c.length !== 0;
    }
    function l(a) {
      a = j(a);
      if (a.length <= 1 || !k(b("bs_caml_array").get(a, (a.length - 1) | 0)))
        return 0;
      else return b("bs_caml_array").get(a, (a.length - 1) | 0);
    }
    function m(a) {
      var b = h(a),
        c = b === 0 ? l(a) : l(a.slice(0, (a.length - 1) | 0));
      if (c !== 0)
        if (b === 0) return a.slice(0, (a.length - 1) | 0);
        else return i(a.slice(0, (a.length - 2) | 0));
      else return a;
    }
    function a(a, b) {
      if (b === 0) return a;
      var c = h(a),
        d = c === 0 ? a.slice(0) : a.slice(0, (a.length - 1) | 0),
        e = l(d);
      if (e !== 0) return a;
      e = d.concat([b]);
      if (c === 0) return e;
      else return e.concat([c]);
    }
    function c(a) {
      return m(j(a));
    }
    function d(a) {
      return g(b("EmojiFormat.bs").codeArrayToCodeString(m(j(a))));
    }
    e = 65039;
    f.emoji_modifier_code = e;
    f.emoji = g;
    f.getEmojiModifier = h;
    f.addEmojiModifier = i;
    f.removeEmojiModifier = j;
    f.isToneModifier = k;
    f.getTone = l;
    f.removeTone = m;
    f.applyTone = a;
    f.removeAllModifiers = c;
    f.hasVariations = d;
  },
  null
);
__d(
  "MessengerEmojiTransitionMapping.bs",
  ["EmojiFormat.bs", "SkinToneEmoji.bs", "bs_caml_array"],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      switch (a) {
        case "1f3c3":
        case "1f3c4":
        case "1f3ca":
        case "1f3cb":
        case "1f3cc":
        case "1f46e":
        case "1f46f":
        case "1f471":
        case "1f473":
        case "1f477":
        case "1f481":
        case "1f482":
        case "1f486":
        case "1f487":
        case "1f575":
        case "1f645":
        case "1f646":
        case "1f647":
        case "1f64b":
        case "1f64d":
        case "1f64e":
        case "1f6a3":
        case "1f6b4":
        case "1f6b5":
        case "1f6b6":
        case "26f9":
          return !0;
        default:
          return !1;
      }
    }
    function h(a) {
      if (b("bs_caml_array").get(a, (a.length - 1) | 0) === 65039)
        return b("bs_caml_array").get(a, (a.length - 1) | 0);
      else return 0;
    }
    function i(a) {
      if (b("bs_caml_array").get(a, (a.length - 1) | 0) === 65039) return a;
      a = a.slice(0);
      return a.concat([65039]);
    }
    function j(a) {
      if (h(a) === 0) return a;
      else return a.slice(0, (a.length - 1) | 0);
    }
    function k(a) {
      if (a === 9792) return !0;
      else return a === 9794;
    }
    function l(a) {
      a = j(a);
      if (a.length <= 1 || !k(b("bs_caml_array").get(a, (a.length - 1) | 0)))
        return 0;
      else return b("bs_caml_array").get(a, (a.length - 1) | 0);
    }
    function m(a) {
      var b = h(a),
        c = b === 0 ? l(a) : l(a.slice(0, (a.length - 1) | 0));
      if (c !== 0)
        if (b === 0) return a.slice(0, (a.length - 2) | 0);
        else return i(a.slice(0, (a.length - 3) | 0));
      else return a;
    }
    function n(a, b) {
      if (b === 0) return a;
      var c = h(a),
        d = c === 0 ? a.slice(0) : a.slice(0, (a.length - 1) | 0),
        e = l(d);
      if (e !== 0) return a;
      e = d.concat([8205, b]);
      if (c === 0) return e;
      else return e.concat([c]);
    }
    function a(a) {
      return n(a, 9792);
    }
    function c(a) {
      return m(b("SkinToneEmoji.bs").removeTone(a));
    }
    function d(a) {
      return g(
        b("EmojiFormat.bs").codeArrayToCodeString(
          m(b("SkinToneEmoji.bs").removeTone(a))
        )
      );
    }
    function e(a) {
      a = b("EmojiFormat.bs").codeArrayToCodeString(
        m(b("SkinToneEmoji.bs").removeTone(a))
      );
      switch (a) {
        case "1f46a":
        case "1f48f":
        case "1f491":
          return !0;
        default:
          return !1;
      }
    }
    var o = 65039,
      p = 9792,
      q = 9794,
      r = 8205;
    f.emoji_modifier_code = o;
    f.gender_female = p;
    f.gender_male = q;
    f.zero_join = r;
    f.emoji = g;
    f.getEmojiModifier = h;
    f.addEmojiModifier = i;
    f.removeEmojiModifier = j;
    f.isGenderModifier = k;
    f.getGender = l;
    f.removeGender = m;
    f.applyGender = n;
    f.makeFemale = a;
    f.removeAllModifiers = c;
    f.hasGender = d;
    f.isBlacklisted = e;
  },
  null
);
__d(
  "MessengerHotlikeEmoji.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "f0000";
    function a(a) {
      return a === g;
    }
    f.hotlike_key = g;
    f.isMessengerHotlike = a;
  },
  null
);
__d(
  "Utf16",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      switch (a.length) {
        case 1:
          return a.charCodeAt(0);
        case 2:
          return (
            65536 |
            ((a.charCodeAt(0) - 55296) * 1024) |
            (a.charCodeAt(1) - 56320)
          );
        default:
          return null;
      }
    }
    function b(a) {
      if (a < 65536) return String.fromCharCode(a);
      else
        return (
          String.fromCharCode(55296 + ((a - 65536) >> 10)) +
          String.fromCharCode(56320 + (a % 1024))
        );
    }
    f.decode = a;
    f.encode = b;
  },
  66
);
__d(
  "MessengerSupportedEmojiUtils",
  [
    "cx",
    "EmojiImageURL",
    "EmojiLikeConstants",
    "EmojiRenderer",
    "EmoticonEmojiList",
    "FBEmojiAliases",
    "FBEmojiResource",
    "Image.react",
    "MessengerEmojiTransitionMapping.bs",
    "MessengerHotlikeEmoji.bs",
    "MessengerSupportedEmoji",
    "SupportedEmoji3",
    "SupportedFacebookEmoji",
    "Utf16",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = /_fe0f/g,
      k = new RegExp("(\r\n|[ \r\n]|\\s)");
    function a(a) {
      if (!a) return null;
      var b = null,
        e = this.parse(a);
      if (e.length === 1 && e[0].length === a.length) {
        a = e[0].emoji.map(function (a) {
          return d("Utf16").decode(a);
        });
        b = a
          .map(function (a) {
            return a.toString(16);
          })
          .join("_")
          .replace(j, "");
      }
      if (b) {
        e = c("FBEmojiAliases")[b];
        e && (b = e.replace(j, ""));
      }
      return this.isSupportedEmojiKey(b) ? b : null;
    }
    function b(a) {
      return !!this.getSupportedEmojiKey(a);
    }
    function e(a) {
      if (!a) return !1;
      if (!d("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)) {
        var b = (function (a) {
          var b = c("FBEmojiAliases")[a];
          return b ? b.replace(j, "") : a;
        })(a);
        return !!c("SupportedFacebookEmoji")[b] || !!c("SupportedEmoji3")[b];
      }
      return !!d("MessengerSupportedEmoji").emoji[a];
    }
    function f(a) {
      return !!(a && d("MessengerSupportedEmoji").emoji[a]);
    }
    function h(a) {
      if (!a) return null;
      var b = this.parse(a);
      if (b.length === 1 && b[0].length === a.length) {
        a = b[0].emoji.map(function (a) {
          return d("Utf16").decode(a);
        });
        b = a
          .map(function (a) {
            return a.toString(16);
          })
          .join("_")
          .replace(j, "");
        if (this.isSupportedEmojiKey(b)) return a;
      }
      return null;
    }
    function l(a) {
      a = a
        .map(function (a) {
          return a.toString(16);
        })
        .join("_")
        .replace(j, "");
      var b = c("FBEmojiAliases")[a];
      return b ? b.replace(j, "") : a;
    }
    function m() {
      var a,
        b = d("EmojiLikeConstants").size;
      return (
        (a = {}),
        (a[b.XSMALL] = "_2560"),
        (a[b.SMALL] = "_1ifu"),
        (a[b.MEDIUM] = "_19_r"),
        (a[b.LARGE] = "_19_s"),
        a
      );
    }
    function n(a) {
      a = this.parse(a, 1);
      if (a.length !== 1) return null;
      var b = a[0].emoji,
        c = a[0].emoji.map(function (a) {
          return d("Utf16").decode(a);
        });
      d("MessengerEmojiTransitionMapping.bs").hasGender(c) &&
        !d("MessengerEmojiTransitionMapping.bs").getGender(c) &&
        (c = d("MessengerEmojiTransitionMapping.bs").makeFemale(c));
      c = c
        .map(function (a) {
          return a.toString(16);
        })
        .join("_")
        .replace(j, "");
      return {
        emoji_key: c,
        emoji_str: b.join(""),
        is_supported: this.isSupportedEmojiKey(c),
        offset: a[0].offset,
        length: a[0].length,
      };
    }
    function o(a, b) {
      if (!a) return null;
      a = this.getSupportedEmojiKey(a);
      if (!a) return null;
      var e = this.getClassSizeMap();
      b = this.transferSize(b);
      d("EmojiLikeConstants").sizeMap[b] ||
        (b = d("EmojiLikeConstants").size.XSMALL);
      e = c("joinClasses")(e[b], "_1ift");
      b = d("EmojiLikeConstants").sizeMap[b];
      b = d("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)
        ? d("EmojiImageURL").getMessengerURL(a, b)
        : new (c("FBEmojiResource"))(a).getImageURL(b);
      return b == null
        ? null
        : {
            emoji: i.jsx(c("Image.react"), { className: e, src: b }),
            emoji_key: a,
            url: b,
          };
    }
    function p(a, b) {
      if (!a) return null;
      a = this.getSupportedEmojiKey(a, !0);
      if (!a) return null;
      var e = this.getClassSizeMap();
      b = this.transferSize(b);
      var f =
        b === d("EmojiLikeConstants").size.MEDIUM
          ? d("EmojiLikeConstants").size.LARGE
          : b;
      d("EmojiLikeConstants").sizeMap[b] ||
        (b = d("EmojiLikeConstants").size.XSMALL);
      e = c("joinClasses")(e[b], "_1ift");
      b = d("EmojiLikeConstants").sizeMap[f];
      f = d("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)
        ? d("EmojiImageURL").getMessengerURL(a, b)
        : new (c("FBEmojiResource"))(a).getImageURL(b);
      return f == null
        ? null
        : {
            emoji: i.jsx(c("Image.react"), { className: e, src: f }),
            emoji_key: a,
            url: f,
          };
    }
    function q(a, b) {
      if (!a) return null;
      a = this.getSupportedEmojiKey(a);
      if (!a) return null;
      var e = this.getClassSizeMap();
      b = this.transferSize(b);
      var f =
        b === d("EmojiLikeConstants").size.MEDIUM
          ? d("EmojiLikeConstants").size.LARGE
          : b;
      d("EmojiLikeConstants").sizeMap[b] ||
        (b = d("EmojiLikeConstants").size.XSMALL);
      e = c("joinClasses")(e[b], "_1ift");
      b = d("EmojiLikeConstants").sizeMap[f];
      f = d("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)
        ? d("EmojiImageURL").getMessengerURL(a, b)
        : new (c("FBEmojiResource"))(a).getImageURL(b);
      return f == null
        ? null
        : {
            emoji: i.jsx(c("Image.react"), { className: e, src: f }),
            emoji_key: a,
            url: f,
          };
    }
    function r(a) {
      a = a || "";
      var b = [],
        c = function (a) {
          var c = k.exec(a),
            d = "";
          while (c && c.length && c.index === 0)
            (d += c[0]), (a = a.replace(k, "")), (c = k.exec(a));
          d.length > 0 && b.push({ text: d });
          return a;
        };
      while (!0) {
        a = c(a);
        var e = d("EmoticonEmojiList").noncapturingRegexp.exec(a);
        if (e && e.index === 0) {
          var f = d("EmoticonEmojiList").names[e[1]];
          f = d("EmoticonEmojiList").emote2emojis[f];
          b.push({ emojiKey: f, text: e[1] });
          a = a.replace(e[1], "");
        } else break;
      }
      while (a.length > 0 && a.trim().length > 0) {
        a = c(a);
        f = this.getEmojiMatchObj(a);
        if (f && f.is_supported)
          b.push({ emojiKey: f.emoji_key, text: f.emoji_str }),
            (a = a.replace(f.emoji_str, ""));
        else return null;
      }
      return b;
    }
    function s(a, b) {
      a = a.replace(j, "");
      b = this.transferSize(b);
      if (!d("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)) {
        var e = c("FBEmojiAliases")[a];
        e && (a = e.replace(j, ""));
        return !this.isSupportedEmojiKey(a)
          ? null
          : new (c("FBEmojiResource"))(a).getImageURL(
              d("EmojiLikeConstants").sizeMap[b]
            );
      }
      return !d("MessengerSupportedEmoji").emoji[a]
        ? null
        : d("EmojiImageURL").getMessengerURL(
            a,
            d("EmojiLikeConstants").sizeMap[b]
          );
    }
    function t(a) {
      return this.parse(a, 1).length === 1;
    }
    function u(a, b) {
      return d("EmojiRenderer").parse(a, b);
    }
    function v(a) {
      return d("EmojiLikeConstants").sizeMapTransfer[a] || a;
    }
    g.getSupportedEmojiKey = a;
    g.isSupportedEmoji = b;
    g.isSupportedEmojiKey = e;
    g.isMessengerSupportedEmojiKey = f;
    g.getSupportedEmojiCodesArray = h;
    g.getEmojiKeyFromCodes = l;
    g.getClassSizeMap = m;
    g.getEmojiMatchObj = n;
    g.getNewEmojiData = o;
    g.getHotLikeEmojiDataTransition = p;
    g.getHotLikeEmojiData = q;
    g.getEmojiOnlyContents = r;
    g.getUrl = s;
    g.containsEmoji = t;
    g.parse = u;
    g.transferSize = v;
  },
  98
);
__d(
  "insertMessengerEmojiIntoContentState",
  ["DraftModifier", "EmojiFormat.bs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c, e) {
      var f = b.createEntity("EMOJI", "IMMUTABLE", { type: a });
      f = f.getLastCreatedEntityKey();
      var g = c.isCollapsed();
      if (g)
        return d("DraftModifier").insertText(
          b,
          c,
          d("EmojiFormat.bs").codeStringToUnicode(a),
          e,
          f
        );
      else
        return d("DraftModifier").replaceText(
          b,
          c,
          d("EmojiFormat.bs").codeStringToUnicode(a),
          e,
          f
        );
    }
    g["default"] = a;
  },
  98
);
__d(
  "handleBeforeInputForMessengerEmoji",
  [
    "EditorState",
    "MessengerSupportedEmojiUtils",
    "insertMessengerEmojiIntoContentState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = a.getSelection();
      if (!e.isCollapsed() || !b) return a;
      b = d("MessengerSupportedEmojiUtils").getEmojiMatchObj(b);
      if (!b || !b.is_supported) return a;
      b = c("insertMessengerEmojiIntoContentState")(
        b.emoji_key,
        a.getCurrentContent(),
        e,
        a.getCurrentInlineStyle()
      );
      return c("EditorState").push(a, b, "insert-characters");
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometComposerEmojiPickerTrigger",
  [
    "EmojiRenderer",
    "EmojiSpan.react",
    "handleBeforeInputForMessengerEmoji",
    "react",
    "useCometComposerDecorator",
    "useCometComposerHandler",
    "useComposerViewStateDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo,
      i = {
        component: c("EmojiSpan.react"),
        priority: 0,
        props: { size: 16 },
        strategy: function (a, b) {
          d("EmojiRenderer")
            .parse(a.getText())
            .forEach(function (a) {
              var c = a.length;
              a = a.offset;
              b(a, a + c);
            });
        },
      };
    function j(a) {
      return {
        handleBeforeInput: function (b, d) {
          b = c("handleBeforeInputForMessengerEmoji")(d, b);
          if (b !== d) {
            a({ draftEditorState: b, type: "update_draft_editor_state" });
            return "handled";
          }
          return "not-handled";
        },
        priority: 0,
      };
    }
    function a() {
      c("useCometComposerDecorator")(i);
      var a = c("useComposerViewStateDispatcher")(),
        b = h(
          function () {
            return j(a);
          },
          [a]
        );
      c("useCometComposerHandler")(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerEmojiPickerTrigger.react",
  [
    "CometLazyPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "JSResourceForInteraction",
    "cr:2000169",
    "cr:2001020",
    "emptyFunction",
    "react",
    "useCometComposerEmojiPickerTrigger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
        "CometEmojiPickerCard.react"
      ).__setRef("CometComposerEmojiPickerTrigger.react"),
      i = d("react"),
      j = { popoverFallback: { minWidth: "p01isnhg" } };
    function a(a) {
      var d = a.align;
      d = d === void 0 ? "middle" : d;
      var e = a.children,
        f = a.onVisibilityChange;
      f = f === void 0 ? c("emptyFunction") : f;
      var g = a.position;
      g = g === void 0 ? "above" : g;
      var k = a.testid;
      a = a.withArrow;
      a = a === void 0 ? !0 : a;
      c("useCometComposerEmojiPickerTrigger")();
      return b("cr:2000169") && b("cr:2001020")
        ? i.jsx(b("cr:2001020"), {
            align: d,
            entryPointParams: {},
            fallback: i.jsx(c("CometPopoverLoadingState.react"), {
              withArrow: a,
              xstyle: j.popoverFallback,
            }),
            onVisibilityChange: f,
            otherProps: { testid: k, withArrow: a },
            popoverEntryPoint: b("cr:2000169"),
            position: g,
            children: e,
          })
        : i.jsx(c("CometLazyPopoverTrigger.react"), {
            align: d,
            fallback: i.jsx(c("CometPopoverLoadingState.react"), {
              withArrow: a,
              xstyle: j.popoverFallback,
            }),
            onVisibilityChange: f,
            popoverProps: { testid: k, withArrow: a },
            popoverResource: h,
            position: g,
            children: e,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MessengerSupportedEmoji",
  ["EmojiRenderer", "EmoticonEmojiList", "Utf16"],
  function (a, b, c, d, e, f) {
    var g = {
        "1f004": 1,
        "1f0cf": 1,
        "1f170": 1,
        "1f171": 1,
        "1f17e": 1,
        "1f17f": 1,
        "1f18e": 1,
        "1f191": 1,
        "1f192": 1,
        "1f193": 1,
        "1f194": 1,
        "1f195": 1,
        "1f196": 1,
        "1f197": 1,
        "1f198": 1,
        "1f199": 1,
        "1f19a": 1,
        "1f1e6_1f1e8": 1,
        "1f1e6_1f1e9": 1,
        "1f1e6_1f1ea": 1,
        "1f1e6_1f1eb": 1,
        "1f1e6_1f1ec": 1,
        "1f1e6_1f1ee": 1,
        "1f1e6_1f1f1": 1,
        "1f1e6_1f1f2": 1,
        "1f1e6_1f1f4": 1,
        "1f1e6_1f1f6": 1,
        "1f1e6_1f1f7": 1,
        "1f1e6_1f1f8": 1,
        "1f1e6_1f1f9": 1,
        "1f1e6_1f1fa": 1,
        "1f1e6_1f1fc": 1,
        "1f1e6_1f1fd": 1,
        "1f1e6_1f1ff": 1,
        "1f1e7_1f1e6": 1,
        "1f1e7_1f1e7": 1,
        "1f1e7_1f1e9": 1,
        "1f1e7_1f1ea": 1,
        "1f1e7_1f1eb": 1,
        "1f1e7_1f1ec": 1,
        "1f1e7_1f1ed": 1,
        "1f1e7_1f1ee": 1,
        "1f1e7_1f1ef": 1,
        "1f1e7_1f1f1": 1,
        "1f1e7_1f1f2": 1,
        "1f1e7_1f1f4": 1,
        "1f1e7_1f1f6": 1,
        "1f1e7_1f1f7": 1,
        "1f1e7_1f1f8": 1,
        "1f1e7_1f1f9": 1,
        "1f1e7_1f1fb": 1,
        "1f1e7_1f1fc": 1,
        "1f1e7_1f1fe": 1,
        "1f1e7_1f1ff": 1,
        "1f1e8_1f1e6": 1,
        "1f1e8_1f1e8": 1,
        "1f1e8_1f1e9": 1,
        "1f1e8_1f1eb": 1,
        "1f1e8_1f1ec": 1,
        "1f1e8_1f1ed": 1,
        "1f1e8_1f1ee": 1,
        "1f1e8_1f1f0": 1,
        "1f1e8_1f1f1": 1,
        "1f1e8_1f1f2": 1,
        "1f1e8_1f1f3": 1,
        "1f1e8_1f1f4": 1,
        "1f1e8_1f1f7": 1,
        "1f1e8_1f1fa": 1,
        "1f1e8_1f1fb": 1,
        "1f1e8_1f1fc": 1,
        "1f1e8_1f1fd": 1,
        "1f1e8_1f1fe": 1,
        "1f1e8_1f1ff": 1,
        "1f1e9_1f1ea": 1,
        "1f1e9_1f1ec": 1,
        "1f1e9_1f1ef": 1,
        "1f1e9_1f1f0": 1,
        "1f1e9_1f1f2": 1,
        "1f1e9_1f1f4": 1,
        "1f1e9_1f1ff": 1,
        "1f1ea_1f1e6": 1,
        "1f1ea_1f1e8": 1,
        "1f1ea_1f1ea": 1,
        "1f1ea_1f1ec": 1,
        "1f1ea_1f1ed": 1,
        "1f1ea_1f1f7": 1,
        "1f1ea_1f1f8": 1,
        "1f1ea_1f1f9": 1,
        "1f1ea_1f1fa": 1,
        "1f1eb_1f1ee": 1,
        "1f1eb_1f1ef": 1,
        "1f1eb_1f1f0": 1,
        "1f1eb_1f1f2": 1,
        "1f1eb_1f1f4": 1,
        "1f1eb_1f1f7": 1,
        "1f1ec_1f1e6": 1,
        "1f1ec_1f1e7": 1,
        "1f1ec_1f1e9": 1,
        "1f1ec_1f1ea": 1,
        "1f1ec_1f1eb": 1,
        "1f1ec_1f1ec": 1,
        "1f1ec_1f1ed": 1,
        "1f1ec_1f1ee": 1,
        "1f1ec_1f1f1": 1,
        "1f1ec_1f1f2": 1,
        "1f1ec_1f1f3": 1,
        "1f1ec_1f1f5": 1,
        "1f1ec_1f1f6": 1,
        "1f1ec_1f1f7": 1,
        "1f1ec_1f1f8": 1,
        "1f1ec_1f1f9": 1,
        "1f1ec_1f1fa": 1,
        "1f1ec_1f1fc": 1,
        "1f1ec_1f1fe": 1,
        "1f1ed_1f1f0": 1,
        "1f1ed_1f1f2": 1,
        "1f1ed_1f1f3": 1,
        "1f1ed_1f1f7": 1,
        "1f1ed_1f1f9": 1,
        "1f1ed_1f1fa": 1,
        "1f1ee_1f1e8": 1,
        "1f1ee_1f1e9": 1,
        "1f1ee_1f1ea": 1,
        "1f1ee_1f1f1": 1,
        "1f1ee_1f1f2": 1,
        "1f1ee_1f1f3": 1,
        "1f1ee_1f1f4": 1,
        "1f1ee_1f1f6": 1,
        "1f1ee_1f1f7": 1,
        "1f1ee_1f1f8": 1,
        "1f1ee_1f1f9": 1,
        "1f1ef_1f1ea": 1,
        "1f1ef_1f1f2": 1,
        "1f1ef_1f1f4": 1,
        "1f1ef_1f1f5": 1,
        "1f1f0_1f1ea": 1,
        "1f1f0_1f1ec": 1,
        "1f1f0_1f1ed": 1,
        "1f1f0_1f1ee": 1,
        "1f1f0_1f1f2": 1,
        "1f1f0_1f1f3": 1,
        "1f1f0_1f1f5": 1,
        "1f1f0_1f1f7": 1,
        "1f1f0_1f1fc": 1,
        "1f1f0_1f1fe": 1,
        "1f1f0_1f1ff": 1,
        "1f1f1_1f1e6": 1,
        "1f1f1_1f1e7": 1,
        "1f1f1_1f1e8": 1,
        "1f1f1_1f1ee": 1,
        "1f1f1_1f1f0": 1,
        "1f1f1_1f1f7": 1,
        "1f1f1_1f1f8": 1,
        "1f1f1_1f1f9": 1,
        "1f1f1_1f1fa": 1,
        "1f1f1_1f1fb": 1,
        "1f1f1_1f1fe": 1,
        "1f1f2_1f1e6": 1,
        "1f1f2_1f1e8": 1,
        "1f1f2_1f1e9": 1,
        "1f1f2_1f1ea": 1,
        "1f1f2_1f1eb": 1,
        "1f1f2_1f1ec": 1,
        "1f1f2_1f1ed": 1,
        "1f1f2_1f1f0": 1,
        "1f1f2_1f1f1": 1,
        "1f1f2_1f1f2": 1,
        "1f1f2_1f1f3": 1,
        "1f1f2_1f1f4": 1,
        "1f1f2_1f1f5": 1,
        "1f1f2_1f1f6": 1,
        "1f1f2_1f1f7": 1,
        "1f1f2_1f1f8": 1,
        "1f1f2_1f1f9": 1,
        "1f1f2_1f1fa": 1,
        "1f1f2_1f1fb": 1,
        "1f1f2_1f1fc": 1,
        "1f1f2_1f1fd": 1,
        "1f1f2_1f1fe": 1,
        "1f1f2_1f1ff": 1,
        "1f1f3_1f1e6": 1,
        "1f1f3_1f1e8": 1,
        "1f1f3_1f1ea": 1,
        "1f1f3_1f1eb": 1,
        "1f1f3_1f1ec": 1,
        "1f1f3_1f1ee": 1,
        "1f1f3_1f1f1": 1,
        "1f1f3_1f1f4": 1,
        "1f1f3_1f1f5": 1,
        "1f1f3_1f1f7": 1,
        "1f1f3_1f1fa": 1,
        "1f1f3_1f1ff": 1,
        "1f1f4_1f1f2": 1,
        "1f1f5_1f1e6": 1,
        "1f1f5_1f1ea": 1,
        "1f1f5_1f1eb": 1,
        "1f1f5_1f1ec": 1,
        "1f1f5_1f1ed": 1,
        "1f1f5_1f1f0": 1,
        "1f1f5_1f1f1": 1,
        "1f1f5_1f1f2": 1,
        "1f1f5_1f1f3": 1,
        "1f1f5_1f1f7": 1,
        "1f1f5_1f1f8": 1,
        "1f1f5_1f1f9": 1,
        "1f1f5_1f1fc": 1,
        "1f1f5_1f1fe": 1,
        "1f1f6_1f1e6": 1,
        "1f1f7_1f1ea": 1,
        "1f1f7_1f1f4": 1,
        "1f1f7_1f1f8": 1,
        "1f1f7_1f1fa": 1,
        "1f1f7_1f1fc": 1,
        "1f1f8_1f1e6": 1,
        "1f1f8_1f1e7": 1,
        "1f1f8_1f1e8": 1,
        "1f1f8_1f1e9": 1,
        "1f1f8_1f1ea": 1,
        "1f1f8_1f1ec": 1,
        "1f1f8_1f1ed": 1,
        "1f1f8_1f1ee": 1,
        "1f1f8_1f1ef": 1,
        "1f1f8_1f1f0": 1,
        "1f1f8_1f1f1": 1,
        "1f1f8_1f1f2": 1,
        "1f1f8_1f1f3": 1,
        "1f1f8_1f1f4": 1,
        "1f1f8_1f1f7": 1,
        "1f1f8_1f1f8": 1,
        "1f1f8_1f1f9": 1,
        "1f1f8_1f1fb": 1,
        "1f1f8_1f1fd": 1,
        "1f1f8_1f1fe": 1,
        "1f1f8_1f1ff": 1,
        "1f1f9_1f1e6": 1,
        "1f1f9_1f1e8": 1,
        "1f1f9_1f1e9": 1,
        "1f1f9_1f1eb": 1,
        "1f1f9_1f1ec": 1,
        "1f1f9_1f1ed": 1,
        "1f1f9_1f1ef": 1,
        "1f1f9_1f1f0": 1,
        "1f1f9_1f1f1": 1,
        "1f1f9_1f1f2": 1,
        "1f1f9_1f1f3": 1,
        "1f1f9_1f1f4": 1,
        "1f1f9_1f1f7": 1,
        "1f1f9_1f1f9": 1,
        "1f1f9_1f1fb": 1,
        "1f1f9_1f1fc": 1,
        "1f1f9_1f1ff": 1,
        "1f1fa_1f1e6": 1,
        "1f1fa_1f1ec": 1,
        "1f1fa_1f1f2": 1,
        "1f1fa_1f1f8": 1,
        "1f1fa_1f1fe": 1,
        "1f1fa_1f1ff": 1,
        "1f1fb_1f1e6": 1,
        "1f1fb_1f1e8": 1,
        "1f1fb_1f1ea": 1,
        "1f1fb_1f1ec": 1,
        "1f1fb_1f1ee": 1,
        "1f1fb_1f1f3": 1,
        "1f1fb_1f1fa": 1,
        "1f1fc_1f1eb": 1,
        "1f1fc_1f1f8": 1,
        "1f1fd_1f1f0": 1,
        "1f1fe_1f1ea": 1,
        "1f1fe_1f1f9": 1,
        "1f1ff_1f1e6": 1,
        "1f1ff_1f1f2": 1,
        "1f1ff_1f1fc": 1,
        "1f201": 1,
        "1f202": 1,
        "1f21a": 1,
        "1f22f": 1,
        "1f232": 1,
        "1f233": 1,
        "1f234": 1,
        "1f235": 1,
        "1f236": 1,
        "1f237": 1,
        "1f238": 1,
        "1f239": 1,
        "1f23a": 1,
        "1f250": 1,
        "1f251": 1,
        "1f300": 1,
        "1f301": 1,
        "1f302": 1,
        "1f303": 1,
        "1f304": 1,
        "1f305": 1,
        "1f306": 1,
        "1f307": 1,
        "1f308": 1,
        "1f309": 1,
        "1f30a": 1,
        "1f30b": 1,
        "1f30c": 1,
        "1f30d": 1,
        "1f30e": 1,
        "1f30f": 1,
        "1f310": 1,
        "1f311": 1,
        "1f312": 1,
        "1f313": 1,
        "1f314": 1,
        "1f315": 1,
        "1f316": 1,
        "1f317": 1,
        "1f318": 1,
        "1f319": 1,
        "1f31a": 1,
        "1f31b": 1,
        "1f31c": 1,
        "1f31d": 1,
        "1f31e": 1,
        "1f31f": 1,
        "1f320": 1,
        "1f330": 1,
        "1f331": 1,
        "1f332": 1,
        "1f333": 1,
        "1f334": 1,
        "1f335": 1,
        "1f337": 1,
        "1f338": 1,
        "1f339": 1,
        "1f33a": 1,
        "1f33b": 1,
        "1f33c": 1,
        "1f33d": 1,
        "1f33e": 1,
        "1f33f": 1,
        "1f340": 1,
        "1f341": 1,
        "1f342": 1,
        "1f343": 1,
        "1f344": 1,
        "1f345": 1,
        "1f346": 1,
        "1f347": 1,
        "1f348": 1,
        "1f349": 1,
        "1f34a": 1,
        "1f34b": 1,
        "1f34c": 1,
        "1f34d": 1,
        "1f34e": 1,
        "1f34f": 1,
        "1f350": 1,
        "1f351": 1,
        "1f352": 1,
        "1f353": 1,
        "1f354": 1,
        "1f355": 1,
        "1f356": 1,
        "1f357": 1,
        "1f358": 1,
        "1f359": 1,
        "1f35a": 1,
        "1f35b": 1,
        "1f35c": 1,
        "1f35d": 1,
        "1f35e": 1,
        "1f35f": 1,
        "1f360": 1,
        "1f361": 1,
        "1f362": 1,
        "1f363": 1,
        "1f364": 1,
        "1f365": 1,
        "1f366": 1,
        "1f367": 1,
        "1f368": 1,
        "1f369": 1,
        "1f36a": 1,
        "1f36b": 1,
        "1f36c": 1,
        "1f36d": 1,
        "1f36e": 1,
        "1f36f": 1,
        "1f370": 1,
        "1f371": 1,
        "1f372": 1,
        "1f373": 1,
        "1f374": 1,
        "1f375": 1,
        "1f376": 1,
        "1f377": 1,
        "1f378": 1,
        "1f379": 1,
        "1f37a": 1,
        "1f37b": 1,
        "1f37c": 1,
        "1f380": 1,
        "1f381": 1,
        "1f382": 1,
        "1f383": 1,
        "1f384": 1,
        "1f385": 1,
        "1f385_1f3fb": 1,
        "1f385_1f3fc": 1,
        "1f385_1f3fd": 1,
        "1f385_1f3fe": 1,
        "1f385_1f3ff": 1,
        "1f386": 1,
        "1f387": 1,
        "1f388": 1,
        "1f389": 1,
        "1f38a": 1,
        "1f38b": 1,
        "1f38c": 1,
        "1f38d": 1,
        "1f38e": 1,
        "1f38f": 1,
        "1f390": 1,
        "1f391": 1,
        "1f392": 1,
        "1f393": 1,
        "1f3a0": 1,
        "1f3a1": 1,
        "1f3a2": 1,
        "1f3a3": 1,
        "1f3a4": 1,
        "1f3a5": 1,
        "1f3a6": 1,
        "1f3a7": 1,
        "1f3a8": 1,
        "1f3a9": 1,
        "1f3aa": 1,
        "1f3ab": 1,
        "1f3ac": 1,
        "1f3ad": 1,
        "1f3ae": 1,
        "1f3af": 1,
        "1f3b0": 1,
        "1f3b1": 1,
        "1f3b2": 1,
        "1f3b3": 1,
        "1f3b4": 1,
        "1f3b5": 1,
        "1f3b6": 1,
        "1f3b7": 1,
        "1f3b8": 1,
        "1f3b9": 1,
        "1f3ba": 1,
        "1f3bb": 1,
        "1f3bc": 1,
        "1f3bd": 1,
        "1f3be": 1,
        "1f3bf": 1,
        "1f3c0": 1,
        "1f3c1": 1,
        "1f3c2": 1,
        "1f3c2_1f3fb": 1,
        "1f3c2_1f3fc": 1,
        "1f3c2_1f3fd": 1,
        "1f3c2_1f3fe": 1,
        "1f3c2_1f3ff": 1,
        "1f3c3": 1,
        "1f3c3_1f3fb": 1,
        "1f3c3_1f3fc": 1,
        "1f3c3_1f3fd": 1,
        "1f3c3_1f3fe": 1,
        "1f3c3_1f3ff": 1,
        "1f3c4": 1,
        "1f3c4_1f3fb": 1,
        "1f3c4_1f3fc": 1,
        "1f3c4_1f3fd": 1,
        "1f3c4_1f3fe": 1,
        "1f3c4_1f3ff": 1,
        "1f3c6": 1,
        "1f3c7": 1,
        "1f3c7_1f3fb": 1,
        "1f3c7_1f3fc": 1,
        "1f3c7_1f3fd": 1,
        "1f3c7_1f3fe": 1,
        "1f3c7_1f3ff": 1,
        "1f3c8": 1,
        "1f3c9": 1,
        "1f3ca": 1,
        "1f3ca_1f3fb": 1,
        "1f3ca_1f3fc": 1,
        "1f3ca_1f3fd": 1,
        "1f3ca_1f3fe": 1,
        "1f3ca_1f3ff": 1,
        "1f3e0": 1,
        "1f3e1": 1,
        "1f3e2": 1,
        "1f3e3": 1,
        "1f3e4": 1,
        "1f3e5": 1,
        "1f3e6": 1,
        "1f3e7": 1,
        "1f3e8": 1,
        "1f3e9": 1,
        "1f3ea": 1,
        "1f3eb": 1,
        "1f3ec": 1,
        "1f3ed": 1,
        "1f3ee": 1,
        "1f3ef": 1,
        "1f3f0": 1,
        "1f400": 1,
        "1f401": 1,
        "1f402": 1,
        "1f403": 1,
        "1f404": 1,
        "1f405": 1,
        "1f406": 1,
        "1f407": 1,
        "1f408": 1,
        "1f409": 1,
        "1f40a": 1,
        "1f40b": 1,
        "1f40c": 1,
        "1f40d": 1,
        "1f40e": 1,
        "1f40f": 1,
        "1f410": 1,
        "1f411": 1,
        "1f412": 1,
        "1f413": 1,
        "1f414": 1,
        "1f415": 1,
        "1f416": 1,
        "1f417": 1,
        "1f418": 1,
        "1f419": 1,
        "1f41a": 1,
        "1f41b": 1,
        "1f41c": 1,
        "1f41d": 1,
        "1f41e": 1,
        "1f41f": 1,
        "1f420": 1,
        "1f421": 1,
        "1f422": 1,
        "1f423": 1,
        "1f424": 1,
        "1f425": 1,
        "1f426": 1,
        "1f427": 1,
        "1f428": 1,
        "1f429": 1,
        "1f42a": 1,
        "1f42b": 1,
        "1f42c": 1,
        "1f42d": 1,
        "1f42e": 1,
        "1f42f": 1,
        "1f430": 1,
        "1f431": 1,
        "1f432": 1,
        "1f433": 1,
        "1f434": 1,
        "1f435": 1,
        "1f436": 1,
        "1f437": 1,
        "1f438": 1,
        "1f439": 1,
        "1f43a": 1,
        "1f43b": 1,
        "1f43c": 1,
        "1f43d": 1,
        "1f43e": 1,
        "1f440": 1,
        "1f442": 1,
        "1f442_1f3fb": 1,
        "1f442_1f3fc": 1,
        "1f442_1f3fd": 1,
        "1f442_1f3fe": 1,
        "1f442_1f3ff": 1,
        "1f443": 1,
        "1f443_1f3fb": 1,
        "1f443_1f3fc": 1,
        "1f443_1f3fd": 1,
        "1f443_1f3fe": 1,
        "1f443_1f3ff": 1,
        "1f444": 1,
        "1f445": 1,
        "1f446": 1,
        "1f446_1f3fb": 1,
        "1f446_1f3fc": 1,
        "1f446_1f3fd": 1,
        "1f446_1f3fe": 1,
        "1f446_1f3ff": 1,
        "1f447": 1,
        "1f447_1f3fb": 1,
        "1f447_1f3fc": 1,
        "1f447_1f3fd": 1,
        "1f447_1f3fe": 1,
        "1f447_1f3ff": 1,
        "1f448": 1,
        "1f448_1f3fb": 1,
        "1f448_1f3fc": 1,
        "1f448_1f3fd": 1,
        "1f448_1f3fe": 1,
        "1f448_1f3ff": 1,
        "1f449": 1,
        "1f449_1f3fb": 1,
        "1f449_1f3fc": 1,
        "1f449_1f3fd": 1,
        "1f449_1f3fe": 1,
        "1f449_1f3ff": 1,
        "1f44a": 1,
        "1f44a_1f3fb": 1,
        "1f44a_1f3fc": 1,
        "1f44a_1f3fd": 1,
        "1f44a_1f3fe": 1,
        "1f44a_1f3ff": 1,
        "1f44b": 1,
        "1f44b_1f3fb": 1,
        "1f44b_1f3fc": 1,
        "1f44b_1f3fd": 1,
        "1f44b_1f3fe": 1,
        "1f44b_1f3ff": 1,
        "1f44c": 1,
        "1f44c_1f3fb": 1,
        "1f44c_1f3fc": 1,
        "1f44c_1f3fd": 1,
        "1f44c_1f3fe": 1,
        "1f44c_1f3ff": 1,
        "1f44d": 1,
        "1f44d_1f3fb": 1,
        "1f44d_1f3fc": 1,
        "1f44d_1f3fd": 1,
        "1f44d_1f3fe": 1,
        "1f44d_1f3ff": 1,
        "1f44e": 1,
        "1f44e_1f3fb": 1,
        "1f44e_1f3fc": 1,
        "1f44e_1f3fd": 1,
        "1f44e_1f3fe": 1,
        "1f44e_1f3ff": 1,
        "1f44f": 1,
        "1f44f_1f3fb": 1,
        "1f44f_1f3fc": 1,
        "1f44f_1f3fd": 1,
        "1f44f_1f3fe": 1,
        "1f44f_1f3ff": 1,
        "1f450": 1,
        "1f450_1f3fb": 1,
        "1f450_1f3fc": 1,
        "1f450_1f3fd": 1,
        "1f450_1f3fe": 1,
        "1f450_1f3ff": 1,
        "1f451": 1,
        "1f452": 1,
        "1f453": 1,
        "1f454": 1,
        "1f455": 1,
        "1f456": 1,
        "1f457": 1,
        "1f458": 1,
        "1f459": 1,
        "1f45a": 1,
        "1f45b": 1,
        "1f45c": 1,
        "1f45d": 1,
        "1f45e": 1,
        "1f45f": 1,
        "1f460": 1,
        "1f461": 1,
        "1f462": 1,
        "1f463": 1,
        "1f464": 1,
        "1f465": 1,
        "1f466": 1,
        "1f466_1f3fb": 1,
        "1f466_1f3fc": 1,
        "1f466_1f3fd": 1,
        "1f466_1f3fe": 1,
        "1f466_1f3ff": 1,
        "1f467": 1,
        "1f467_1f3fb": 1,
        "1f467_1f3fc": 1,
        "1f467_1f3fd": 1,
        "1f467_1f3fe": 1,
        "1f467_1f3ff": 1,
        "1f468": 1,
        "1f468_1f3fb": 1,
        "1f468_1f3fc": 1,
        "1f468_1f3fd": 1,
        "1f468_1f3fe": 1,
        "1f468_1f3ff": 1,
        "1f468_200d_1f468_200d_1f466": 1,
        "1f468_200d_1f468_200d_1f466_200d_1f466": 1,
        "1f468_200d_1f468_200d_1f467": 1,
        "1f468_200d_1f468_200d_1f467_200d_1f466": 1,
        "1f468_200d_1f468_200d_1f467_200d_1f467": 1,
        "1f468_200d_1f469_200d_1f466": 1,
        "1f468_200d_1f469_200d_1f466_200d_1f466": 1,
        "1f468_200d_1f469_200d_1f467": 1,
        "1f468_200d_1f469_200d_1f467_200d_1f466": 1,
        "1f468_200d_1f469_200d_1f467_200d_1f467": 1,
        "1f468_200d_2764_fe0f_200d_1f468": 1,
        "1f468_200d_2764_fe0f_200d_1f48b_200d_1f468": 1,
        "1f469": 1,
        "1f469_1f3fb": 1,
        "1f469_1f3fc": 1,
        "1f469_1f3fd": 1,
        "1f469_1f3fe": 1,
        "1f469_1f3ff": 1,
        "1f469_200d_1f469_200d_1f466": 1,
        "1f469_200d_1f469_200d_1f466_200d_1f466": 1,
        "1f469_200d_1f469_200d_1f467": 1,
        "1f469_200d_1f469_200d_1f467_200d_1f466": 1,
        "1f469_200d_1f469_200d_1f467_200d_1f467": 1,
        "1f469_200d_2764_fe0f_200d_1f469": 1,
        "1f469_200d_2764_fe0f_200d_1f48b_200d_1f469": 1,
        "1f46a": 1,
        "1f46b": 1,
        "1f46b_1f3fb": 1,
        "1f46b_1f3fc": 1,
        "1f46b_1f3fd": 1,
        "1f46c": 1,
        "1f46d": 1,
        "1f46e": 1,
        "1f46e_1f3fb": 1,
        "1f46e_1f3fc": 1,
        "1f46e_1f3fd": 1,
        "1f46e_1f3fe": 1,
        "1f46e_1f3ff": 1,
        "1f46f": 1,
        "1f470": 1,
        "1f470_1f3fb": 1,
        "1f470_1f3fc": 1,
        "1f470_1f3fd": 1,
        "1f470_1f3fe": 1,
        "1f470_1f3ff": 1,
        "1f471": 1,
        "1f471_1f3fb": 1,
        "1f471_1f3fc": 1,
        "1f471_1f3fd": 1,
        "1f471_1f3fe": 1,
        "1f471_1f3ff": 1,
        "1f472": 1,
        "1f472_1f3fb": 1,
        "1f472_1f3fc": 1,
        "1f472_1f3fd": 1,
        "1f472_1f3fe": 1,
        "1f472_1f3ff": 1,
        "1f473": 1,
        "1f473_1f3fb": 1,
        "1f473_1f3fc": 1,
        "1f473_1f3fd": 1,
        "1f473_1f3fe": 1,
        "1f473_1f3ff": 1,
        "1f474": 1,
        "1f474_1f3fb": 1,
        "1f474_1f3fc": 1,
        "1f474_1f3fd": 1,
        "1f474_1f3fe": 1,
        "1f474_1f3ff": 1,
        "1f475": 1,
        "1f475_1f3fb": 1,
        "1f475_1f3fc": 1,
        "1f475_1f3fd": 1,
        "1f475_1f3fe": 1,
        "1f475_1f3ff": 1,
        "1f476": 1,
        "1f476_1f3fb": 1,
        "1f476_1f3fc": 1,
        "1f476_1f3fd": 1,
        "1f476_1f3fe": 1,
        "1f476_1f3ff": 1,
        "1f477": 1,
        "1f477_1f3fb": 1,
        "1f477_1f3fc": 1,
        "1f477_1f3fd": 1,
        "1f477_1f3fe": 1,
        "1f477_1f3ff": 1,
        "1f478": 1,
        "1f478_1f3fb": 1,
        "1f478_1f3fc": 1,
        "1f478_1f3fd": 1,
        "1f478_1f3fe": 1,
        "1f478_1f3ff": 1,
        "1f479": 1,
        "1f47a": 1,
        "1f47b": 1,
        "1f47c": 1,
        "1f47c_1f3fb": 1,
        "1f47c_1f3fc": 1,
        "1f47c_1f3fd": 1,
        "1f47c_1f3fe": 1,
        "1f47c_1f3ff": 1,
        "1f47d": 1,
        "1f47e": 1,
        "1f47f": 1,
        "1f480": 1,
        "1f481": 1,
        "1f481_1f3fb": 1,
        "1f481_1f3fc": 1,
        "1f481_1f3fd": 1,
        "1f481_1f3fe": 1,
        "1f481_1f3ff": 1,
        "1f482": 1,
        "1f482_1f3fb": 1,
        "1f482_1f3fc": 1,
        "1f482_1f3fd": 1,
        "1f482_1f3fe": 1,
        "1f482_1f3ff": 1,
        "1f483": 1,
        "1f483_1f3fb": 1,
        "1f483_1f3fc": 1,
        "1f483_1f3fd": 1,
        "1f483_1f3fe": 1,
        "1f483_1f3ff": 1,
        "1f484": 1,
        "1f485": 1,
        "1f485_1f3fb": 1,
        "1f485_1f3fc": 1,
        "1f485_1f3fd": 1,
        "1f485_1f3fe": 1,
        "1f485_1f3ff": 1,
        "1f486": 1,
        "1f486_1f3fb": 1,
        "1f486_1f3fc": 1,
        "1f486_1f3fd": 1,
        "1f486_1f3fe": 1,
        "1f486_1f3ff": 1,
        "1f487": 1,
        "1f487_1f3fb": 1,
        "1f487_1f3fc": 1,
        "1f487_1f3fd": 1,
        "1f487_1f3fe": 1,
        "1f487_1f3ff": 1,
        "1f488": 1,
        "1f489": 1,
        "1f48a": 1,
        "1f48b": 1,
        "1f48c": 1,
        "1f48d": 1,
        "1f48e": 1,
        "1f48f": 1,
        "1f490": 1,
        "1f491": 1,
        "1f492": 1,
        "1f493": 1,
        "1f494": 1,
        "1f495": 1,
        "1f496": 1,
        "1f497": 1,
        "1f498": 1,
        "1f499": 1,
        "1f49a": 1,
        "1f49b": 1,
        "1f49c": 1,
        "1f49d": 1,
        "1f49e": 1,
        "1f49f": 1,
        "1f4a0": 1,
        "1f4a1": 1,
        "1f4a2": 1,
        "1f4a3": 1,
        "1f4a4": 1,
        "1f4a5": 1,
        "1f4a6": 1,
        "1f4a7": 1,
        "1f4a8": 1,
        "1f4a9": 1,
        "1f4aa": 1,
        "1f4aa_1f3fb": 1,
        "1f4aa_1f3fc": 1,
        "1f4aa_1f3fd": 1,
        "1f4aa_1f3fe": 1,
        "1f4aa_1f3ff": 1,
        "1f4ab": 1,
        "1f4ac": 1,
        "1f4ad": 1,
        "1f4ae": 1,
        "1f4af": 1,
        "1f4b0": 1,
        "1f4b1": 1,
        "1f4b2": 1,
        "1f4b3": 1,
        "1f4b4": 1,
        "1f4b5": 1,
        "1f4b6": 1,
        "1f4b7": 1,
        "1f4b8": 1,
        "1f4b9": 1,
        "1f4ba": 1,
        "1f4bb": 1,
        "1f4bc": 1,
        "1f4bd": 1,
        "1f4be": 1,
        "1f4bf": 1,
        "1f4c0": 1,
        "1f4c1": 1,
        "1f4c2": 1,
        "1f4c3": 1,
        "1f4c4": 1,
        "1f4c5": 1,
        "1f4c6": 1,
        "1f4c7": 1,
        "1f4c8": 1,
        "1f4c9": 1,
        "1f4ca": 1,
        "1f4cb": 1,
        "1f4cc": 1,
        "1f4cd": 1,
        "1f4ce": 1,
        "1f4cf": 1,
        "1f4d0": 1,
        "1f4d1": 1,
        "1f4d2": 1,
        "1f4d3": 1,
        "1f4d4": 1,
        "1f4d5": 1,
        "1f4d6": 1,
        "1f4d7": 1,
        "1f4d8": 1,
        "1f4d9": 1,
        "1f4da": 1,
        "1f4db": 1,
        "1f4dc": 1,
        "1f4dd": 1,
        "1f4de": 1,
        "1f4df": 1,
        "1f4e0": 1,
        "1f4e1": 1,
        "1f4e2": 1,
        "1f4e3": 1,
        "1f4e4": 1,
        "1f4e5": 1,
        "1f4e6": 1,
        "1f4e7": 1,
        "1f4e8": 1,
        "1f4e9": 1,
        "1f4ea": 1,
        "1f4eb": 1,
        "1f4ec": 1,
        "1f4ed": 1,
        "1f4ee": 1,
        "1f4ef": 1,
        "1f4f0": 1,
        "1f4f1": 1,
        "1f4f2": 1,
        "1f4f3": 1,
        "1f4f4": 1,
        "1f4f5": 1,
        "1f4f6": 1,
        "1f4f7": 1,
        "1f4f9": 1,
        "1f4fa": 1,
        "1f4fb": 1,
        "1f4fc": 1,
        "1f500": 1,
        "1f501": 1,
        "1f502": 1,
        "1f503": 1,
        "1f504": 1,
        "1f505": 1,
        "1f506": 1,
        "1f507": 1,
        "1f508": 1,
        "1f509": 1,
        "1f50a": 1,
        "1f50b": 1,
        "1f50c": 1,
        "1f50d": 1,
        "1f50e": 1,
        "1f50f": 1,
        "1f510": 1,
        "1f511": 1,
        "1f512": 1,
        "1f513": 1,
        "1f514": 1,
        "1f515": 1,
        "1f516": 1,
        "1f517": 1,
        "1f518": 1,
        "1f519": 1,
        "1f51a": 1,
        "1f51b": 1,
        "1f51c": 1,
        "1f51d": 1,
        "1f51e": 1,
        "1f51f": 1,
        "1f520": 1,
        "1f521": 1,
        "1f522": 1,
        "1f523": 1,
        "1f524": 1,
        "1f525": 1,
        "1f526": 1,
        "1f527": 1,
        "1f528": 1,
        "1f529": 1,
        "1f52a": 1,
        "1f52b": 1,
        "1f52c": 1,
        "1f52d": 1,
        "1f52e": 1,
        "1f52f": 1,
        "1f530": 1,
        "1f531": 1,
        "1f532": 1,
        "1f533": 1,
        "1f534": 1,
        "1f535": 1,
        "1f536": 1,
        "1f537": 1,
        "1f538": 1,
        "1f539": 1,
        "1f53a": 1,
        "1f53b": 1,
        "1f53c": 1,
        "1f53d": 1,
        "1f550": 1,
        "1f551": 1,
        "1f552": 1,
        "1f553": 1,
        "1f554": 1,
        "1f555": 1,
        "1f556": 1,
        "1f557": 1,
        "1f558": 1,
        "1f559": 1,
        "1f55a": 1,
        "1f55b": 1,
        "1f55c": 1,
        "1f55d": 1,
        "1f55e": 1,
        "1f55f": 1,
        "1f560": 1,
        "1f561": 1,
        "1f562": 1,
        "1f563": 1,
        "1f564": 1,
        "1f565": 1,
        "1f566": 1,
        "1f567": 1,
        "1f5fb": 1,
        "1f5fc": 1,
        "1f5fd": 1,
        "1f5fe": 1,
        "1f5ff": 1,
        "1f600": 1,
        "1f601": 1,
        "1f602": 1,
        "1f603": 1,
        "1f604": 1,
        "1f605": 1,
        "1f606": 1,
        "1f607": 1,
        "1f608": 1,
        "1f609": 1,
        "1f60a": 1,
        "1f60b": 1,
        "1f60c": 1,
        "1f60d": 1,
        "1f60e": 1,
        "1f60f": 1,
        "1f610": 1,
        "1f611": 1,
        "1f612": 1,
        "1f613": 1,
        "1f614": 1,
        "1f615": 1,
        "1f616": 1,
        "1f617": 1,
        "1f618": 1,
        "1f619": 1,
        "1f61a": 1,
        "1f61b": 1,
        "1f61c": 1,
        "1f61d": 1,
        "1f61e": 1,
        "1f61f": 1,
        "1f620": 1,
        "1f621": 1,
        "1f622": 1,
        "1f623": 1,
        "1f624": 1,
        "1f625": 1,
        "1f626": 1,
        "1f627": 1,
        "1f628": 1,
        "1f629": 1,
        "1f62a": 1,
        "1f62b": 1,
        "1f62c": 1,
        "1f62d": 1,
        "1f62e": 1,
        "1f62f": 1,
        "1f630": 1,
        "1f631": 1,
        "1f632": 1,
        "1f633": 1,
        "1f634": 1,
        "1f635": 1,
        "1f636": 1,
        "1f637": 1,
        "1f638": 1,
        "1f639": 1,
        "1f63a": 1,
        "1f63b": 1,
        "1f63c": 1,
        "1f63d": 1,
        "1f63e": 1,
        "1f63f": 1,
        "1f640": 1,
        "1f642": 1,
        "1f645": 1,
        "1f645_1f3fb": 1,
        "1f645_1f3fc": 1,
        "1f645_1f3fd": 1,
        "1f645_1f3fe": 1,
        "1f645_1f3ff": 1,
        "1f646": 1,
        "1f646_1f3fb": 1,
        "1f646_1f3fc": 1,
        "1f646_1f3fd": 1,
        "1f646_1f3fe": 1,
        "1f646_1f3ff": 1,
        "1f647": 1,
        "1f647_1f3fb": 1,
        "1f647_1f3fc": 1,
        "1f647_1f3fd": 1,
        "1f647_1f3fe": 1,
        "1f647_1f3ff": 1,
        "1f648": 1,
        "1f649": 1,
        "1f64a": 1,
        "1f64b": 1,
        "1f64b_1f3fb": 1,
        "1f64b_1f3fc": 1,
        "1f64b_1f3fd": 1,
        "1f64b_1f3fe": 1,
        "1f64b_1f3ff": 1,
        "1f64c": 1,
        "1f64c_1f3fb": 1,
        "1f64c_1f3fc": 1,
        "1f64c_1f3fd": 1,
        "1f64c_1f3fe": 1,
        "1f64c_1f3ff": 1,
        "1f64d": 1,
        "1f64d_1f3fb": 1,
        "1f64d_1f3fc": 1,
        "1f64d_1f3fd": 1,
        "1f64d_1f3fe": 1,
        "1f64d_1f3ff": 1,
        "1f64e": 1,
        "1f64e_1f3fb": 1,
        "1f64e_1f3fc": 1,
        "1f64e_1f3fd": 1,
        "1f64e_1f3fe": 1,
        "1f64e_1f3ff": 1,
        "1f64f": 1,
        "1f64f_1f3fb": 1,
        "1f64f_1f3fc": 1,
        "1f64f_1f3fd": 1,
        "1f64f_1f3fe": 1,
        "1f64f_1f3ff": 1,
        "1f680": 1,
        "1f681": 1,
        "1f682": 1,
        "1f683": 1,
        "1f684": 1,
        "1f685": 1,
        "1f686": 1,
        "1f687": 1,
        "1f688": 1,
        "1f689": 1,
        "1f68a": 1,
        "1f68b": 1,
        "1f68c": 1,
        "1f68d": 1,
        "1f68e": 1,
        "1f68f": 1,
        "1f690": 1,
        "1f691": 1,
        "1f692": 1,
        "1f693": 1,
        "1f694": 1,
        "1f695": 1,
        "1f696": 1,
        "1f697": 1,
        "1f698": 1,
        "1f699": 1,
        "1f69a": 1,
        "1f69b": 1,
        "1f69c": 1,
        "1f69d": 1,
        "1f69e": 1,
        "1f69f": 1,
        "1f6a0": 1,
        "1f6a1": 1,
        "1f6a2": 1,
        "1f6a3": 1,
        "1f6a4": 1,
        "1f6a5": 1,
        "1f6a6": 1,
        "1f6a7": 1,
        "1f6a8": 1,
        "1f6a9": 1,
        "1f6aa": 1,
        "1f6ab": 1,
        "1f6ac": 1,
        "1f6ad": 1,
        "1f6ae": 1,
        "1f6af": 1,
        "1f6b0": 1,
        "1f6b1": 1,
        "1f6b2": 1,
        "1f6b3": 1,
        "1f6b4": 1,
        "1f6b4_1f3fb": 1,
        "1f6b4_1f3fc": 1,
        "1f6b4_1f3fd": 1,
        "1f6b4_1f3fe": 1,
        "1f6b4_1f3ff": 1,
        "1f6b5": 1,
        "1f6b5_1f3fb": 1,
        "1f6b5_1f3fc": 1,
        "1f6b5_1f3fd": 1,
        "1f6b5_1f3fe": 1,
        "1f6b5_1f3ff": 1,
        "1f6b6": 1,
        "1f6b6_1f3fb": 1,
        "1f6b6_1f3fc": 1,
        "1f6b6_1f3fd": 1,
        "1f6b6_1f3fe": 1,
        "1f6b6_1f3ff": 1,
        "1f6b7": 1,
        "1f6b8": 1,
        "1f6b9": 1,
        "1f6ba": 1,
        "1f6bb": 1,
        "1f6bc": 1,
        "1f6bd": 1,
        "1f6be": 1,
        "1f6bf": 1,
        "1f6c0": 1,
        "1f6c0_1f3fb": 1,
        "1f6c0_1f3fc": 1,
        "1f6c0_1f3fd": 1,
        "1f6c0_1f3fe": 1,
        "1f6c0_1f3ff": 1,
        "1f6c1": 1,
        "1f6c2": 1,
        "1f6c3": 1,
        "1f6c4": 1,
        "1f6c5": 1,
        "203c": 1,
        2049: 1,
        2122: 1,
        2139: 1,
        2194: 1,
        2195: 1,
        2196: 1,
        2197: 1,
        2198: 1,
        2199: 1,
        "21a9": 1,
        "21aa": 1,
        "231a": 1,
        "231b": 1,
        "23_20e3": 1,
        2600: 1,
        2601: 1,
        2611: 1,
        2614: 1,
        2615: 1,
        2648: 1,
        2649: 1,
        "23e9": 1,
        "23ea": 1,
        "23eb": 1,
        "23ec": 1,
        "23f0": 1,
        "23f3": 1,
        "24c2": 1,
        "25aa": 1,
        "25ab": 1,
        "25b6": 1,
        "25c0": 1,
        "25fb": 1,
        "25fc": 1,
        "25fd": 1,
        "25fe": 1,
        "260e": 1,
        "261d": 1,
        "261d_1f3fb": 1,
        "261d_1f3fc": 1,
        "261d_1f3fd": 1,
        "261d_1f3fe": 1,
        "261d_1f3ff": 1,
        "263a": 1,
        "264a": 1,
        "264b": 1,
        "264c": 1,
        "264d": 1,
        "264e": 1,
        "264f": 1,
        2650: 1,
        2651: 1,
        2652: 1,
        2653: 1,
        2660: 1,
        2663: 1,
        2665: 1,
        2666: 1,
        2668: 1,
        "267b": 1,
        "267f": 1,
        2693: 1,
        "26a0": 1,
        "26a1": 1,
        "26aa": 1,
        "26ab": 1,
        "26bd": 1,
        "26be": 1,
        "26c4": 1,
        "26c5": 1,
        "26ce": 1,
        "26d4": 1,
        "26ea": 1,
        "26f2": 1,
        "26f3": 1,
        "26f5": 1,
        "26fa": 1,
        "26fd": 1,
        2702: 1,
        2705: 1,
        2708: 1,
        2709: 1,
        "270a": 1,
        "270a_1f3fb": 1,
        "270a_1f3fc": 1,
        "270a_1f3fd": 1,
        "270a_1f3fe": 1,
        "270a_1f3ff": 1,
        "270b": 1,
        "270b_1f3fb": 1,
        "270b_1f3fc": 1,
        "270b_1f3fd": 1,
        "270b_1f3fe": 1,
        "270b_1f3ff": 1,
        "270c": 1,
        "270c_1f3fb": 1,
        "270c_1f3fc": 1,
        "270c_1f3fd": 1,
        "270c_1f3fe": 1,
        "270c_1f3ff": 1,
        "270f": 1,
        2712: 1,
        2714: 1,
        2716: 1,
        2728: 1,
        2733: 1,
        2734: 1,
        2744: 1,
        2747: 1,
        "274c": 1,
        "274e": 1,
        2753: 1,
        2754: 1,
        2755: 1,
        2757: 1,
        2764: 1,
        2795: 1,
        2796: 1,
        2797: 1,
        "27a1": 1,
        "27b0": 1,
        "27bf": 1,
        2934: 1,
        2935: 1,
        "2b05": 1,
        "2b06": 1,
        "2b07": 1,
        "2b1b": 1,
        "2b1c": 1,
        "2b50": 1,
        "2b55": 1,
        3030: 1,
        "303d": 1,
        "30_20e3": 1,
        "31_20e3": 1,
        3297: 1,
        3299: 1,
        "32_20e3": 1,
        "33_20e3": 1,
        "34_20e3": 1,
        "35_20e3": 1,
        "36_20e3": 1,
        "37_20e3": 1,
        "38_20e3": 1,
        "39_20e3": 1,
        a9: 1,
        ae: 1,
        f0000: 1,
        f0001: 1,
      },
      h = 65039;
    a = function (a) {
      a = b("EmojiRenderer").parse(a, 1);
      if (a.length !== 1) return null;
      var c = a[0].emoji,
        d = c.map(function (a) {
          return b("Utf16").decode(a);
        });
      d[d.length - 1] === h && d.pop();
      d = d
        .map(function (a) {
          return a != null ? a.toString(16) : "";
        })
        .join("_");
      return {
        emoji_key: d,
        emoji_str: c.join(""),
        is_supported: !!g[d],
        offset: a[0].offset,
        length: a[0].length,
      };
    };
    c = function (a) {
      return !!g[a];
    };
    d = function (a) {
      a = b("EmoticonEmojiList").emote2emojis[a];
      return g[a] ? a : null;
    };
    e.exports = {
      emoji: g,
      getEmojiMatchObj: a,
      getMessengerEmote: d,
      isSupportedEmoji: c,
    };
  },
  null
);
__d(
  "MWV2MessageAuthor.bs",
  ["react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react"),
      i = h.createContext({ contact: void 0, nickname: void 0 });
    function a(a) {
      var b = a.children,
        c = a.contact,
        d = a.nickname;
      a = h.useMemo(
        function () {
          return { contact: c, nickname: d };
        },
        [c, d]
      );
      return h.createElement(i.Provider, { children: b, value: a });
    }
    d = { make: a };
    function c(a) {
      a = h.useContext(i);
      var b = a.nickname;
      a = a.contact;
      if (b !== void 0) b = b;
      else if (a !== void 0) {
        var c = a.p;
        b = c !== void 0 ? c : a.h;
      } else b = void 0;
      return [b, a];
    }
    f.ctx = i;
    f.Provider = d;
    f.useAuthorName = c;
  },
  null
);
__d(
  "LSMessageContentType.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").one;
    c = [0, 2];
    d = [0, 4];
    e = [0, 8];
    b = [0, 16];
    var g = [0, 32],
      h = [0, 64],
      i = [0, 128],
      j = [0, 256],
      k = [0, 512],
      l = [0, 1024],
      m = [0, 2048],
      n = [0, 4096],
      o = [0, 8192],
      p = [0, 16384],
      q = [0, 32768],
      r = [0, 65536],
      s = [0, 131072],
      t = [0, 262144];
    f.text = a;
    f.mediaPreview = c;
    f.audioClip = d;
    f.xmaFallback = e;
    f.lwaWave = b;
    f.admin = g;
    f.fileAttachment = h;
    f.glyph = i;
    f.tombstone = j;
    f.storyReply = k;
    f.singleXma = l;
    f.hscrollXma = m;
    f.sticker = n;
    f.forwardIndicator = o;
    f.animatedImage = p;
    f.nullState = q;
    f.encryptionPlaceholder = r;
    f.futureproofPlaceholder = s;
    f.unavailablePlaceholder = t;
  },
  null
);
__d(
  "deferredLoadComponentForReason",
  ["deferredLoadComponentBase"],
  function (a, b, c, d, e, f, g) {
    var h = function (a) {
      return a.make;
    };
    function a(a) {
      return { make: c("deferredLoadComponentBase")(a, h) };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StylexHelpers.bs",
  ["stylex"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    (g || (g = b("stylex"))).inject(".spvqvc9t{clip:rect(0,0,0,0)}", 1);
    g.inject(".ikw5e13s{clip-path:inset(50%)}", 1);
    g.inject(".ebnioo9u{height:1px}", 1);
    g.inject(".lq84ybu9{overflow-x:hidden}", 1);
    g.inject(".hf30pyar{overflow-y:hidden}", 1);
    g.inject(".s8sjc6am{position:absolute}", 1);
    g.inject(".rfd0zzc9{width:1px}", 1);
    a = {
      visuallyHidden: {
        clip: "spvqvc9t",
        clipPath: "ikw5e13s",
        height: "ebnioo9u",
        overflowX: "lq84ybu9",
        overflowY: "hf30pyar",
        position: "s8sjc6am",
        width: "rfd0zzc9",
      },
    };
    f.styles = a;
  },
  null
);
__d(
  "MWV2ChatThread.bs",
  [
    "LSContextBanner.bs",
    "LSMailboxMessagesRangeQueryDirection.bs",
    "LSMessageSendStatusV2.bs",
    "MWChatConversationScroller.bs",
    "MWChatLoadMoreItemsIncrementally.bs",
    "MWChatThreadPos.bs",
    "MWInboxThreadMessagesSpinner.bs",
    "MWMessageElementRefList.bs",
    "MWTheme.bs",
    "MWThreadKey.bs",
    "MWV2CurrentVisibleMessage.bs",
    "MWV2FetchMessagesPage.bs",
    "MWV2MessageList.bs",
    "MWV2QuickReplies.bs",
    "MWV2ReplyContext.bs",
    "MWV2Theme.bs",
    "ReQL.bs",
    "ReQLSubscription.bs",
    "ReStore.bs",
    "SkytaleDB",
    "SortedAsyncIterable.bs",
    "VideoAutoplayLocalScopeProvider.react",
    "VideoPlayerAutoplayRulesProvider",
    "bs_belt_Option",
    "bs_caml",
    "bs_caml_option",
    "bs_curry",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = g || b("react"),
      j = {
        spacer: { flexBasis: "rj1gh0hx", flexGrow: "buofh1pr" },
        mask: { backgroundColor: "nred35xi" },
      },
      k = b("VideoAutoplayLocalScopeProvider.react");
    d = { make: k };
    function a(a) {
      return b("VideoPlayerAutoplayRulesProvider").provideAutoplayRules(a);
    }
    e = { provideAutoplayRules: a };
    function l(a, c) {
      var d = b("ReStore.bs").useHook(void 0),
        e = c !== void 0 ? c.a : void 0;
      return b("ReQLSubscription.bs").useArray(
        i.useMemo(
          function () {
            if (c !== void 0 && a !== void 0)
              return b("ReQL.bs").bounds(
                b("ReQL.bs").getKeyRange(
                  b("SkytaleDB").table(d, "messages").asc,
                  { hd: c.a, tl: 0 }
                ),
                {
                  NAME: "range",
                  VAL: [
                    { NAME: "greaterThanOrEqual", VAL: { hd: a.b, tl: 0 } },
                    { NAME: "lessThanOrEqual", VAL: { hd: a.d, tl: 0 } },
                  ],
                }
              );
            else return b("SortedAsyncIterable.bs").empty(void 0);
          },
          [
            d,
            JSON.stringify(e),
            JSON.stringify(
              b("bs_belt_Option").map(a, function (a) {
                return [a.b, a.d];
              })
            ),
          ]
        )
      );
    }
    function m(a) {
      var c = a.thread,
        d = a.forceContextBanner,
        e = a.spacerRef,
        f = a.scrollPositionRef,
        g = a.dispatch,
        m = a.scrollerRef;
      a = a.children;
      var n = b("MWV2CurrentVisibleMessage.bs").useHook(c, m),
        o = c !== void 0 ? c.a : void 0,
        p = n.messageRange,
        q = n.messageRange;
      p = b("MWChatLoadMoreItemsIncrementally.bs").useLoadMore(
        p !== void 0 ? p.i : !1,
        void 0,
        void 0,
        l(n.messageRange, c),
        b("MWV2FetchMessagesPage.bs").useFetchMessagesPage(n.messageRange, o),
        q !== void 0 ? q.h : !1
      );
      var r = p[1];
      n = p[0];
      q = !p[2] || d;
      p = b("MWChatThreadPos.bs").useThreadPosition(void 0);
      d = b("VideoPlayerAutoplayRulesProvider").provideAutoplayRules(
        "default_feed"
      );
      var s = function (a, c) {
          c = a !== void 0 ? a : !1;
          a = f.current;
          if (typeof a === "number")
            if (a === 0 && c)
              return b("bs_curry")._1(
                r,
                b("LSMailboxMessagesRangeQueryDirection.bs").before
              );
            else return;
          else if (a.TAG === 0)
            return b("bs_curry")._1(
              r,
              b("LSMailboxMessagesRangeQueryDirection.bs").before
            );
          else return;
        },
        t = i.useMemo(function () {
          return b("MWMessageElementRefList.bs").make(void 0);
        }, []),
        u = i.useContext(b("MWV2ReplyContext.bs").context),
        v = u.reply,
        w = i.useRef(g),
        x = b("MWTheme.bs").useTheme(void 0);
      u = i.useMemo(
        function () {
          return x._0.id;
        },
        [x]
      );
      i.useEffect(
        function () {
          if (c !== void 0 && v !== void 0) {
            var a = v.sendStatusV2;
            w.current({
              NAME: "ClickReplyTo",
              VAL:
                b("bs_caml").i64_eq(
                  a,
                  b("LSMessageSendStatusV2.bs").serverReceived
                ) ||
                b("bs_caml").i64_eq(a, b("LSMessageSendStatusV2.bs").sentOnly)
                  ? {
                      TAG: 1,
                      _0: {
                        threadId: c.a,
                        messageId: v.messageId,
                        timestamp: v.timestampMs,
                      },
                    }
                  : {
                      TAG: 0,
                      _0: {
                        threadId: c.a,
                        offlineThreadingId: v.offlineThreadingId,
                      },
                    },
            });
          }
        },
        [v, w, JSON.stringify(o)]
      );
      return i.jsx(k, {
        children: i.jsxs(b("MWChatConversationScroller.bs").make, {
          children: [
            q
              ? c !== void 0
                ? i.jsx(b("LSContextBanner.bs").make, { thread: c })
                : null
              : i.jsx(b("MWInboxThreadMessagesSpinner.bs").make, {}),
            i.jsx("div", {
              className: (h || (h = b("stylex")))(
                j.spacer,
                b("MWTheme.bs").isGradient(x) ? j.mask : !1
              ),
              ref: e,
            }),
            c !== void 0 && n.length > 0
              ? i.jsx(b("MWV2Theme.bs").make, {
                  themeFbid: u,
                  children: i.jsx(b("MWV2MessageList.bs").make, {
                    messages: n,
                    thread: c,
                    isSecureThread: !1,
                    messageElementRefs: t,
                  }),
                })
              : null,
            c !== void 0
              ? i.jsx(b("MWV2QuickReplies.bs").make, {
                  threadKey: c.a,
                  message: n[(n.length - 1) | 0],
                })
              : null,
            a,
          ],
          boundingClientRectRef: p[1],
          scrollPositionRef: f,
          dispatch: function (a) {
            switch (a) {
              case 0:
                return s(!0, void 0);
              case 1:
                return g("ScrollToBottom");
              case 2:
                return s(void 0, void 0);
            }
          },
          hasMoreAfter: !1,
          ref: m,
        }),
        autoplayLocalRules: d,
      });
    }
    a = { make: m };
    function c(a) {
      var c = a.scrollPositionRef,
        d = a.dispatch,
        e = a.managePageMessagesLink,
        f = a.spacerRef,
        g = a.scrollerRef,
        h = a.forceContextBanner;
      a = a.children;
      e !== void 0 && b("bs_caml_option").valFromOption(e);
      e = h !== void 0 ? h : !1;
      h = a !== void 0 ? b("bs_caml_option").valFromOption(a) : null;
      var j = b("ReStore.bs").useHook(void 0),
        k = b("MWThreadKey.bs").useIdMemoizedExn(void 0);
      a = b("ReQLSubscription.bs").useFirst(
        i.useMemo(
          function () {
            return b("ReQL.bs").getKeyRange(
              b("SkytaleDB").table(j, "threads").asc,
              { hd: k, tl: 0 }
            );
          },
          [j, k]
        )
      );
      return i.jsx(m, {
        thread: a,
        forceContextBanner: e,
        spacerRef: f,
        scrollPositionRef: c,
        dispatch: d,
        scrollerRef: g,
        children: h,
      });
    }
    c = c;
    f.styles = j;
    f.VideoAutoplayLocalScopeProvider = d;
    f.VideoPlayerAutoplayRulesProvider = e;
    f.ThreadDetail = a;
    f.make = c;
  },
  null
);
__d(
  "useCometPhotoViewerPlaceholderPassthroughProps_photo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "useCometPhotoViewerPlaceholderPassthroughProps_photo",
      selections: [
        {
          alias: "viewer_image",
          args: [
            { kind: "Literal", name: "context", value: "comet_media_viewer" },
            { kind: "Literal", name: "height", value: 1e6 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 1e6 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
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
          ],
          storageKey: null,
        },
      ],
      type: "Photo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFileSelector.react",
  ["react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useRef;
    function l(a) {
      return a
        .map(function (a) {
          if (a.indexOf("/") !== -1 || a[0] === ".") return a;
          c("recoverableViolation")(
            'Accept parameter "' +
              a +
              '" for CometFileSelector is being interpreted as a file extension since it has no slash (/), but file extensions must start with a period (.)',
            "profile_comet"
          );
          return "." + a;
        })
        .join(",");
    }
    function a(a) {
      var b = a.accept,
        c = a.children,
        d = a.multiple;
      d = d === void 0 ? !1 : d;
      var e = a.onFilesSelected,
        f = k(null);
      j(function () {
        var a = f.current;
        if (a != null) {
          var b = function (a) {
            a.stopPropagation();
          };
          a.addEventListener("click", b);
          return function () {
            a.removeEventListener("click", b);
          };
        }
      });
      a = i(function () {
        f.current != null && f.current.click();
      }, []);
      var g = i(
        function (a) {
          e(a.currentTarget.files), (a.currentTarget.value = "");
        },
        [e]
      );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("input", {
            accept: b != null ? l(b) : void 0,
            className: "mkhogb32",
            multiple: d,
            onChange: g,
            ref: f,
            type: "file",
          }),
          c(a),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFixedGrid.react",
  ["Locale", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        c = a.columns,
        e = a.gap;
      a = h.Children.toArray(b).filter(Boolean);
      b = h.Children.count(a);
      if (b === 0) return null;
      var f = d("Locale").isRTL() ? "marginRight" : "marginLeft";
      return h.jsx("div", {
        className: "k4urcfbm lhclo0ds btwxx1t3 j83agx80",
        children: h.Children.map(a, function (a, b) {
          var d,
            g = b % c;
          b = b < c;
          g = g === 0;
          g =
            ((d = {}),
            (d[f] = g ? 0 : e),
            (d.marginTop = b ? 0 : e),
            (d.width = "calc( (100% - " + (c - 1) * e + "px) / " + c + ")"),
            d);
          return h.jsx("div", { style: g, children: a });
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerMediaAttachmentAreaResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "CometComposerMediaAttachmentArea.react"
    ).__setRef("CometComposerMediaAttachmentAreaResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "fileInputAcceptValues",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = [".png", ".jpg", ".jpeg"];
    b = ["image/*", "image/heif", "image/heic"];
    c = ["video/*", "video/mp4", "video/x-m4v", "video/x-matroska", ".mkv"];
    d = b.concat(c);
    f.CUSTOM_THUMBNAIL = a;
    f.PHOTO = b;
    f.VIDEO = c;
    f.PHOTO_AND_VIDEO = d;
  },
  66
);
__d(
  "useCometPhotoViewerPlaceholderPassthroughProps",
  [
    "CometRelay",
    "useCometPhotoViewerPlaceholderPassthroughProps_photo.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var c,
        e = a.photo,
        f = a.placeholderImageSrc;
      a = a.productTagReferralCode;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "useCometPhotoViewerPlaceholderPassthroughProps_photo.graphql"
            )),
        e
      );
      return {
        origHeight:
          e == null ? void 0 : (c = e.viewer_image) == null ? void 0 : c.height,
        origSrc: f,
        origWidth:
          e == null ? void 0 : (c = e.viewer_image) == null ? void 0 : c.width,
        productTagReferralCode: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "getRoundedCorners",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      TOP_START: 1,
      TOP_END: 2,
      BOTTOM_START: 4,
      BOTTOM_END: 8,
      NONE: 0,
      ALL: 15,
    };
    function a(a, b) {
      return (a & b) === b;
    }
    function b(a, b) {
      if (a === 0) return {};
      var c = {},
        d = function (a, b) {
          c[a] = ((a = c[a]) != null ? a : 0) | b;
        };
      d(0, g.TOP_START);
      d(Math.min(b, a) - 1, g.TOP_END);
      var e = a - (a % b === 0 ? b : a % b);
      d(e, g.BOTTOM_START);
      d(Math.min(e + b, a) - 1, g.BOTTOM_END);
      a % b !== 0 && e >= b && d(e - 1, g.BOTTOM_END);
      return c;
    }
    b.hasCorner = a;
    b.CORNERS = g;
    f["default"] = b;
  },
  66
);
__d(
  "useProfileEngagementImpression",
  [
    "react",
    "recoverableViolation",
    "requireDeferred",
    "useImpressionLogger",
    "useProfileEngagementData",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useCallback,
      i = c("requireDeferred")("ProfileEngagementTypedLoggerLite").__setRef(
        "useProfileEngagementImpression"
      );
    function a(a) {
      var b = c("useProfileEngagementData")(a);
      b != null &&
        b.product_bucket == null &&
        (c("recoverableViolation")(
          "product_bucket is a required field for profile engagement logging",
          "profile_comet"
        ),
        (b = babelHelpers["extends"]({}, b, { product_bucket: "unknown" })));
      a = h(
        function (a, c) {
          c = a.log;
          b != null &&
            c(babelHelpers["extends"]({ engagement_type: "impression" }, b));
        },
        [b]
      );
      return c("useImpressionLogger")(i, a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProfilePlusFollowChainingContext.react",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
      j = b.useState,
      k = h.createContext({
        setShouldShowFollowChaining: c("emptyFunction"),
        shouldShowFollowChaining: !1,
      });
    function a(a) {
      a = a.children;
      var b = j(!1),
        c = b[0],
        d = b[1];
      b = i(
        function () {
          return {
            setShouldShowFollowChaining: d,
            shouldShowFollowChaining: c,
          };
        },
        [c]
      );
      return h.jsx(k.Provider, { value: b, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ProfilePlusFollowChainingContext = k;
    g.ProfilePlusFollowChainingContextProvider = a;
  },
  98
);
__d(
  "LineClamp.react",
  [
    "cx",
    "DOMContainer.react",
    "Locale",
    "getElementText",
    "getVendorPrefixedName",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("getVendorPrefixedName")("lineClamp");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { enableTooltip: !1 }),
          (c.$2 = function (a) {
            a instanceof HTMLElement && ((c.innerElement = a), c.$3());
          }),
          (c.$4 = function (a) {
            a instanceof HTMLElement && ((c.rootElement = a), c.$3());
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.$1 = function () {
        var a;
        this.props.lineHeight &&
          !this.props.customEllipsisDisableGradient &&
          (a = { bottom: this.props.lineHeight + "px" });
        var b;
        this.props.customEllipsis && this.props.customEllipsisDisableGradient
          ? (b = d("Locale").isRTL() ? "_1osp" : "_1osq")
          : (b = d("Locale").isRTL()
              ? "_4ik3 _2k5c"
              : "_4ik3" +
                (this.props.enableCustomizedStyleForEllipsis ? " _6q5n" : "") +
                (this.props.enableCustomizedStyleForEllipsis ? "" : " _2k5d"));
        return i.jsx(
          "div",
          {
            style: a,
            className: b,
            children: this.props.customEllipsis
              ? this.props.customEllipsis
              : "\u2026",
          },
          "ellipsis"
        );
      };
      e.$3 = function () {
        if (!this.props.enableTooltipOnOverflow) return;
        var a = this.isOverflowing();
        this.state.enableTooltip !== a && this.setState({ enableTooltip: a });
      };
      e.$5 = function () {
        return !!j && !this.props.disableNative;
      };
      e.isOverflowing = function () {
        var a = !1;
        if (!this.rootElement) return a;
        var b = this.rootElement;
        if (this.$5()) a = b.scrollHeight > b.offsetHeight;
        else {
          if (!this.innerElement) return a;
          a = this.innerElement.offsetHeight > b.offsetHeight;
        }
        return a;
      };
      e.componentDidMount = function () {
        this.$3();
      };
      e.componentDidUpdate = function () {
        this.$3();
      };
      e.render = function () {
        var a = this.$5(),
          b = c("joinClasses")(
            this.props.className,
            "_4ik4" + (a ? " _4ik5" : "") + (this.props.width ? " _8hwj" : "")
          ),
          d = this.props.hasXHPChildren
            ? i.jsx(c("DOMContainer.react"), { children: this.props.children })
            : this.props.children,
          e = {};
        this.props.lineHeight &&
          ((e = { lineHeight: this.props.lineHeight + "px" }),
          this.props.fitHeightToShorterText
            ? (e = babelHelpers["extends"]({}, e, {
                maxHeight: this.props.lineHeight * this.props.lines,
              }))
            : (e = babelHelpers["extends"]({}, e, {
                height: this.props.lineHeight * this.props.lines,
              })));
        this.props.width &&
          (e = babelHelpers["extends"]({}, e, {
            width: this.props.width + "px",
          }));
        a
          ? (e[j] = this.props.lines)
          : ((b = c("joinClasses")(b, "clearfix")),
            this.props.customEllipsisDisableGradient
              ? (d = [
                  i.jsx("div", { className: "_1osu" }, "spacer"),
                  this.$1(),
                  i.jsx(
                    "div",
                    {
                      className: "_1osv",
                      ref: this.$2,
                      children: this.props.children,
                    },
                    "inner"
                  ),
                ])
              : (d = [
                  i.jsx(
                    "div",
                    { className: "_4ik6", ref: this.$2, children: d },
                    "inner"
                  ),
                  this.$1(),
                ]));
        var f = {};
        this.props.enableTooltipOnOverflow &&
          ((f["data-hover"] = "tooltip"),
          this.state.enableTooltip &&
            ((f["data-tooltip-content"] = a
              ? c("getElementText")(this.rootElement)
              : c("getElementText")(this.innerElement)),
            this.props.tooltipDelay != null &&
              (f["data-tooltip-delay"] = this.props.tooltipDelay)));
        return i.jsx(
          "div",
          babelHelpers["extends"]({}, f, {
            className: b,
            ref: this.$4,
            style: e,
            children: d,
          })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "useUniqueID",
  ["react", "uniqueID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useRef;
    function a() {
      var a = h(null);
      a.current === null && (a.current = c("uniqueID")());
      return a.current;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometPhotoGrid.react",
  ["CometAspectRatioContainer.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a, b) {
      return a < 2 && b % 3 === 2;
    }
    function a(a) {
      var b = a.spacing,
        d = b === void 0 ? "narrow" : b;
      b = a.uniformGrid;
      var e = b === void 0 ? !1 : b;
      b = babelHelpers.objectWithoutPropertiesLoose(a, [
        "spacing",
        "uniformGrid",
      ]);
      a = h.Children.toArray(b.children);
      var f = a.length;
      return h.jsx("div", {
        className: c("stylex").dedupe(
          {
            "display-1": "j83agx80",
            "flex-direction-1": "btwxx1t3",
            "flex-wrap-1": "lhclo0ds",
          },
          d === "narrow"
            ? {
                "margin-top-1": "hop8lmos",
                "margin-end-1": "nkwizq5d",
                "margin-bottom-1": "scwd0bx6",
                "margin-start-1": "roh60bw9",
              }
            : null,
          d === "wide"
            ? {
                "margin-top-1": "s89635nw",
                "margin-end-1": "c4xchbtz",
                "margin-bottom-1": "dco85op0",
                "margin-start-1": "by2jbhx6",
              }
            : null
        ),
        children: h.Children.map(a, function (a, b) {
          return h.jsx("div", {
            className: c("stylex").dedupe(
              { "box-sizing-1": "rq0escxv", "flex-basis-1": "kuivcneq" },
              d === "wide"
                ? {
                    "padding-top-1": "linoseic",
                    "padding-end-1": "ihtri3yf",
                    "padding-bottom-1": "pby63qed",
                    "padding-start-1": "e9o6kcyi",
                  }
                : null,
              d === "narrow"
                ? {
                    "padding-top-1": "jwdofwj8",
                    "padding-end-1": "n8tt0mok",
                    "padding-bottom-1": "r8blr3vg",
                    "padding-start-1": "hyh9befq",
                  }
                : null,
              !e && i(b, f) ? { "flex-basis-1": "hkbzh7o3" } : null
            ),
            children: h.jsx(c("CometAspectRatioContainer.react"), {
              aspectRatio: 1,
              children: a,
            }),
          });
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWUIBlockStatus.bs",
  ["cr:573"],
  function (a, b, c, d, e, f) {
    "use strict";
    c = (a = b("cr:573")).useIsThreadBlocked;
    d = a.useIsBlockedUserInGroup;
    e = a.useBlockeesInThread;
    f.$MWLSBlockStatus$OR$WorkplaceMSBlockStatus$requireCond = a;
    f.useIsThreadBlocked = c;
    f.useIsBlockedUserInGroup = d;
    f.useBlockeesInThread = e;
  },
  null
);
__d(
  "MWVisibleMessageContext.bs",
  ["react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {}
    e = { setVisibleMessage: a, visibleMessage: void 0 };
    var i = h.createContext(e);
    function c(a) {
      var b = a.value;
      a = a.children;
      return h.createElement(i.Provider, { value: b, children: a });
    }
    b = { make: c };
    function d(a) {
      return h.useContext(i);
    }
    f.Provider = b;
    f.useHook = d;
  },
  null
);
__d(
  "LSMessageThreadUnsendabilityStatus.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    d = [0, 2];
    e = [0, 3];
    b = [0, 4];
    var g = [0, 5],
      h = [0, 6],
      i = [0, 7],
      j = [0, 8],
      k = [0, 9];
    f.canUnsend = a;
    f.denyForSpecificIds = c;
    f.denyIfThreadContainsPau = d;
    f.denyIfThreadContainsWorkUser = e;
    f.denyIfPageThread = b;
    f.denyIfMarketplaceThread = g;
    f.denyIfCannotLoadThread = h;
    f.denyIfThreadContainsWorkUserFailingKillswitch = i;
    f.denyIfCanonicalThreadContainsBlockedUsers = j;
    f.denyIfCannotReplyToViewerThread = k;
  },
  null
);
__d(
  "Popup",
  ["isTruthy"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d, e) {
      var f = [];
      c("isTruthy")(b) && f.push("width=" + b);
      c("isTruthy")(d) && f.push("height=" + d);
      var g = document.body;
      if (g != null && b != null && b !== 0 && d != null && d !== 0) {
        var h = "screenX" in window ? window.screenX : window.screenLeft,
          i = "screenY" in window ? window.screenY : window.screenTop,
          j = "outerWidth" in window ? window.outerWidth : g.clientWidth;
        g = "outerHeight" in window ? window.outerHeight : g.clientHeight - 22;
        h = Math.floor(h + (j - b) / 2);
        j = Math.floor(i + (g - d) / 2.5);
        f.push("left=" + h);
        f.push("top=" + j);
      }
      f.push("scrollbars");
      return window.open(a, e != null && e !== "" ? e : "_blank", f.join(","));
    }
    g.open = a;
  },
  98
);
__d(
  "PopupWindow",
  [
    "DOMDimensions",
    "DOMQuery",
    "FlowMigrationUtilsForLegacyFiles",
    "Layer",
    "Popup",
    "getViewportDimensions",
  ],
  function (a, b, c, d, e, f, g) {
    var h = {
      allowShrink: !0,
      strategy: "vector",
      timeout: 100,
      widthElement: null,
    };
    function b(a) {
      Object.assign(h, a), window.setInterval(i, h.timeout);
    }
    function i() {
      var a = c("getViewportDimensions")(),
        b = j(),
        e = c("Layer").getTopmostLayer();
      if (e) {
        e = (e = e.getRoot()) == null ? void 0 : e.firstChild;
        e ||
          d("FlowMigrationUtilsForLegacyFiles").invariantViolation(
            "topMostLayer.getRoot().firstChild is null."
          );
        var f = d("DOMDimensions").getElementDimensions(e);
        f.height += d("DOMDimensions").measureElementBox(
          e,
          "height",
          !0,
          !0,
          !0
        );
        f.width += d("DOMDimensions").measureElementBox(e, "width", !0, !0, !0);
        b.height = Math.max(b.height, f.height);
        b.width = Math.max(b.width, f.width);
      }
      e = b.height - a.height;
      f = b.width - a.width;
      f < 0 &&
        d("FlowMigrationUtilsForLegacyFiles").isFalsy(h.widthElement) &&
        (f = 0);
      f = f > 1 ? f : 0;
      d("FlowMigrationUtilsForLegacyFiles").isFalsy(h.allowShrink) &&
        e < 0 &&
        (e = 0);
      if (e || f)
        try {
          window.console && window.console.firebug,
            window.resizeBy(f, e),
            f && window.moveBy(f / -2, 0);
        } catch (a) {}
    }
    function j() {
      var b = d("DOMDimensions").getDocumentDimensions();
      if (h.strategy === "offsetHeight") {
        var c = document.body;
        if (!c)
          d("FlowMigrationUtilsForLegacyFiles").invariantViolation(
            "document.body is null."
          );
        else {
          b.height = (c = c.offsetHeight) != null ? c : 0;
        }
      }
      if (
        d("FlowMigrationUtilsForLegacyFiles").isFalsy(h.widthElement) &&
        typeof h.widthElement === "string"
      ) {
        c = d("DOMQuery").scry(document.body, h.widthElement)[0];
        c && (b.width = d("DOMDimensions").getElementDimensions(c).width);
      }
      c = a.Dialog;
      c && c.max_bottom && c.max_bottom > b.height && (b.height = c.max_bottom);
      return b;
    }
    function e(a, b, c, e) {
      return d("Popup").open(a, c, b, e);
    }
    g._opts = h;
    g.init = b;
    g._resizeCheck = i;
    g._getDocumentSize = j;
    g.open = e;
  },
  98
);
__d(
  "HTMLMediaElementReadyStates",
  [],
  function (a, b, c, d, e, f) {
    a = {
      HAVE_NOTHING: 0,
      HAVE_METADATA: 1,
      HAVE_CURRENT_DATA: 2,
      HAVE_FUTURE_DATA: 3,
      HAVE_ENOUGH_DATA: 4,
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "VideoFrameBuffer",
  ["HTMLMediaElementReadyStates"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b, c, d, e, f, g) {
        d === void 0 && (d = null),
          e === void 0 && (e = null),
          f === void 0 && (f = null),
          g === void 0 && (g = null),
          (this.$2 = b),
          (this.$1 = a),
          (this.$3 = c || "contain"),
          (this.$6 = d),
          (this.$7 = e),
          (this.$8 = f),
          (this.$9 = g);
      }
      var b = a.prototype;
      b.updateFrameBuffer = function () {
        this.$4 && ((this.$1.width = this.$4), (this.$4 = null));
        this.$5 && ((this.$1.height = this.$5), (this.$5 = null));
        if (
          this.$2.readyState <
          c("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA
        )
          return;
        var a = this.$1.clientWidth || this.$1.width,
          b = this.$1.clientHeight || this.$1.height,
          d = a,
          e = b,
          f = this.$2.videoWidth / this.$2.videoHeight,
          g = d / e;
        this.$3 === "cover" && ((g *= -1), (f *= -1));
        g > f ? (d = e * f) : g < f && (e = d / f);
        g = this.$1.getContext("2d");
        if (!(g instanceof window.CanvasRenderingContext2D)) return;
        try {
          if (this.$6 || this.$7) {
            g.drawImage(
              this.$2,
              (f = this.$8) != null ? f : 0,
              (f = this.$9) != null ? f : 0,
              (f = this.$6) != null ? f : a,
              (f = this.$7) != null ? f : b,
              0,
              0,
              a,
              b
            );
          } else g.drawImage(this.$2, (a - d) / 2, (b - e) / 2, d, e);
        } catch (a) {
          if (a.name !== "NS_ERROR_NOT_AVAILABLE") throw a;
        }
      };
      b.getDOMNode = function () {
        return this.$1;
      };
      b.updateDimensions = function (a, b) {
        (this.$4 = a), (this.$5 = b);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "WorkGardenLowerProductName$FbtEnum",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { Workroom: "Workroom" };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "WorkGardenLowerProductName",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ PRODUCT_NAME: "Workroom" });
    f["default"] = a;
  },
  66
);
__d(
  "addEmojiToEditorState",
  ["DraftModifier", "EditorState", "FBEmojiUtils", "emptyFunction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      e === void 0 && (e = c("emptyFunction"));
      a = typeof a !== "string" ? d("FBEmojiUtils").codepointsToString(a) : a;
      a = d("DraftModifier").replaceText(
        b.getCurrentContent(),
        b.getSelection(),
        a
      );
      a = c("EditorState").push(b, a, "insert-characters");
      a !== b && e(a);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerEmojiReducers",
  ["EmojiFormat.bs", "addEmojiToEditorState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      switch (b.type) {
        case "INSERT_EMOJI":
          b = d("EmojiFormat.bs").codeArrayToUnicode(b.codePoint);
          var e = a.editorState;
          if (e === null || e === void 0)
            return babelHelpers["extends"]({}, a, {
              editorState: babelHelpers["extends"](
                {},
                e || {
                  hasFocus: !1,
                  isComposing: !1,
                  isPendingSelection: !1,
                  selectionOffsets: null,
                },
                { __type: "plain-text", text: b }
              ),
            });
          else if (e.__type === "plain-text") {
            var f = e.text;
            return babelHelpers["extends"]({}, a, {
              editorState: babelHelpers["extends"](
                {},
                e,
                f !== null ? { text: e.text + b } : { ranges: [], text: b }
              ),
            });
          } else {
            f = e.draftEditorState;
            return babelHelpers["extends"]({}, a, {
              editorState: babelHelpers["extends"]({}, e, {
                draftEditorState: c("addEmojiToEditorState")(b, f),
              }),
            });
          }
      }
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "MarketplaceCometReviewOffersDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4539137609449826",
        metadata: {},
        name: "MarketplaceCometReviewOffersDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometOnOutsideClick.react",
  ["react", "useOnOutsideClick"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      var b = a.children;
      a = a.onOutsideClick;
      a = c("useOnOutsideClick")(a);
      return b(a);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MarketplaceCometReviewOffersDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "MarketplaceCometReviewOffersDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.listingId;
        return {
          queries: {
            queryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: c(
                "MarketplaceCometReviewOffersDialogQuery$Parameters"
              ),
              variables: { listingId: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "MarketplaceCometReviewOffersDialog.react"
      ).__setRef("MarketplaceCometReviewOffersDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "MWV2IsThreadEmpty.bs",
  [
    "ReQL.bs",
    "ReQLSubscription.bs",
    "ReStore.bs",
    "SkytaleDB",
    "SortedAsyncIterable.bs",
    "bs_int64",
    "react",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var c = b("ReStore.bs").useHook(void 0),
        d = a !== void 0 ? b("bs_int64").to_string(a.a) : "",
        e = b("ReQLSubscription.bs").useFirst(
          h.useMemo(
            function () {
              if (a !== void 0)
                return b("ReQL.bs").getKeyRange(
                  b("SkytaleDB").table(c, "messages_ranges_v2__generated").desc,
                  { hd: a.a, tl: 0 }
                );
              else return b("SortedAsyncIterable.bs").empty(void 0);
            },
            [c, d]
          )
        ),
        f = e !== void 0 ? e.h : !1;
      d = b("ReQLSubscription.bs").useFirst(
        h.useMemo(
          function () {
            if (a !== void 0 && e !== void 0)
              return b("ReQL.bs").bounds(
                b("ReQL.bs").getKeyRange(
                  b("SkytaleDB").table(c, "messages").asc,
                  { hd: a.a, tl: 0 }
                ),
                {
                  NAME: "range",
                  VAL: [
                    { NAME: "greaterThanOrEqual", VAL: { hd: e.b, tl: 0 } },
                    { NAME: "lessThanOrEqual", VAL: { hd: e.d, tl: 0 } },
                  ],
                }
              );
            else return b("SortedAsyncIterable.bs").empty(void 0);
          },
          [c, d, e]
        )
      );
      if (d === void 0) return !f;
      else return !1;
    }
    f.useHook = a;
  },
  null
);
__d(
  "LsFalcoEventEntryPoint.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "message_actions";
    b = "composer";
    c = "icebreaker";
    f.messageActions = a;
    f.composer = b;
    f.icebreaker = c;
  },
  null
);
__d(
  "MessengerWebModuleForwardInteractionQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(25298392);
    g["default"] = a;
  },
  98
);
__d(
  "MessengerWebModuleJumpToRepliedMessageQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(25301087);
    g["default"] = a;
  },
  98
);
