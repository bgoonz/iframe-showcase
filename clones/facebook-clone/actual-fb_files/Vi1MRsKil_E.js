if (self.CavalryLogger) {
  CavalryLogger.start_js(["/RwTuRf"]);
}

__d(
  "CometMisinfoSeeWhyDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4548693081831278",
        metadata: {},
        name: "CometMisinfoSeeWhyDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlayBackground_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWarningScreenOverlayBackground_data",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cover_style",
          storageKey: null,
        },
      ],
      type: "OverlayWarningScreenViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlayCenterButton_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWarningScreenOverlayCenterButton_data",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "context",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "label",
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
          kind: "ScalarField",
          name: "render_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ixt_trigger",
          storageKey: null,
        },
      ],
      type: "WarningScreenAction",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlayContentDefaultFullCover_data.graphql",
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
        name: "CometWarningScreenOverlayContentDefaultFullCover_data",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "subtitle",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "WarningScreenAction",
            kind: "LinkedField",
            name: "warning_screen_actions",
            plural: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometWarningScreenOverlayCenterButton_data",
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometWarningScreenOverlayIcon_data",
          },
        ],
        type: "OverlayWarningScreenViewModel",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlayContentDefaultLightweight_data.graphql",
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
        name: "CometWarningScreenOverlayContentDefaultLightweight_data",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "subtitle",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "WarningScreenAction",
            kind: "LinkedField",
            name: "warning_screen_actions",
            plural: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometWarningScreenOverlayCenterButton_data",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometWarningScreenOverlayIcon_data",
          },
        ],
        type: "OverlayWarningScreenViewModel",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlayContentDefault_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWarningScreenOverlayContentDefault_data",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometWarningScreenOverlayContentDefaultLightweight_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometWarningScreenOverlayContentDefaultFullCover_data",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "render_type",
          storageKey: null,
        },
      ],
      type: "OverlayWarningScreenViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlayContentSmall_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWarningScreenOverlayContentSmall_data",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometWarningScreenOverlayIcon_data",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "render_type",
          storageKey: null,
        },
      ],
      type: "OverlayWarningScreenViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlayContent_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWarningScreenOverlayContent_data",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometWarningScreenOverlayContentDefault_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometWarningScreenOverlayContentSmall_data",
        },
      ],
      type: "OverlayWarningScreenViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlayCoveredResizable_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWarningScreenOverlayCoveredResizable_data",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometWarningScreenOverlayCovered_data",
        },
      ],
      type: "OverlayWarningScreenViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlayCovered_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWarningScreenOverlayCovered_data",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometWarningScreenOverlayBackground_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometWarningScreenOverlayContent_data",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "render_type",
          storageKey: null,
        },
      ],
      type: "OverlayWarningScreenViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlayIcon_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWarningScreenOverlayIcon_data",
      selections: [
        {
          alias: null,
          args: [{ kind: "Literal", name: "color", value: "fds-black" }],
          concreteType: "Image",
          kind: "LinkedField",
          name: "icon",
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
              name: "scale",
              storageKey: null,
            },
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
              name: "width",
              storageKey: null,
            },
          ],
          storageKey: 'icon(color:"fds-black")',
        },
      ],
      type: "OverlayWarningScreenViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWarningScreenOverlay_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWarningScreenOverlay_data",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometWarningScreenOverlayCovered_data",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometWarningScreenOverlayCoveredResizable_data",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "content_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "container_story_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "render_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "top_objectionable_category",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "inform_session_id",
          storageKey: null,
        },
      ],
      type: "OverlayWarningScreenViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMisinfoSeeWhyDialogEntryPoint.entrypoint",
  [
    "CometMisinfoSeeWhyDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b;
        a = a.entID;
        a =
          (b = a) == null
            ? void 0
            : b
                .split(":")
                .filter(function (a) {
                  return a !== "";
                })
                .pop();
        return {
          extraProps: { entID: a },
          queries: {
            cometMisinfoSeeWhyDialogQueryReference: {
              parameters: c("CometMisinfoSeeWhyDialogQuery$Parameters"),
              variables: { entID: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometMisinfoSeeWhyDialog.react"
      ).__setRef("CometMisinfoSeeWhyDialogEntryPoint.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenOverlayBackground.react",
  [
    "CometBlurredBackgroundImage.react",
    "CometRelay",
    "CometWarningScreenOverlayBackground_data.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometWarningScreenOverlayBackground_data.graphql")),
        a.data
      );
      e = e.cover_style;
      a = a.mediaUri;
      switch (e) {
        case "PLAIN":
          return i.jsx("div", {
            className:
              "kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb d6rk862h",
          });
        case "GRADIENT":
          return i.jsx("div", {
            className:
              "kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb njqljl3s",
          });
        case "REVERSE_GRADIENT":
          return i.jsx("div", {
            className:
              "kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb qpkeyiwh",
          });
        case "BLUR":
          return i.jsxs("div", {
            className:
              "j102wcjv kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb",
            children: [
              i.jsx(c("CometBlurredBackgroundImage.react"), { src: a }),
              i.jsx("div", {
                className:
                  "kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb d6rk862h",
              }),
            ],
          });
        case "NONE":
        default:
          return i.jsx("div", {
            className: "kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb",
          });
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CIXWarningScreenActions",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      AGE_COLLECTION: "AGE_COLLECTION",
      APPEAL_REQUEST: "APPEAL_REQUEST",
      GIVE_FEEDBACK: "GIVE_FEEDBACK",
      HELP_CENTER_REDIRECT: "HELP_CENTER_REDIRECT",
      HIDE_CONTENT: "HIDE_CONTENT",
      OPEN_CENSUS_LINK: "OPEN_CENSUS_LINK",
      OPEN_COMMUNITY_STANDARDS: "OPEN_COMMUNITY_STANDARDS",
      OPEN_CONTENT_VIEWER: "OPEN_CONTENT_VIEWER",
      OPEN_EXTERNAL_LINK: "OPEN_EXTERNAL_LINK",
      OPEN_LINK: "OPEN_LINK",
      OPEN_MISINFO_SEE_WHY_DIALOG: "OPEN_MISINFO_SEE_WHY_DIALOG",
      SEE_WHY: "SEE_WHY",
      SEE_WHY_LIGHTWEIGHT_NEGATIVE_FEEDBACK:
        "SEE_WHY_LIGHTWEIGHT_NEGATIVE_FEEDBACK",
      SEE_WHY_LIGHTWEIGHT_POSITIVE_FEEDBACK:
        "SEE_WHY_LIGHTWEIGHT_POSITIVE_FEEDBACK",
      SHOW_CONTENT: "SHOW_CONTENT",
    });
    f["default"] = a;
  },
  66
);
__d(
  "useInformTreatmentFollowupExperience",
  [
    "CometMisinfoSeeWhyDialogEntryPoint.entrypoint",
    "gkx",
    "useCometEntryPointDialog",
    "useIXTContentTriggerDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("1770065");
    function a(a) {
      var b = a.contentID,
        d = a.entryPoint,
        e = a.ixtTriggerEvent;
      a = a.location;
      b = b
        .split(":")
        .filter(function (a) {
          return a !== "";
        })
        .pop();
      var f = c("useCometEntryPointDialog")(
          c("CometMisinfoSeeWhyDialogEntryPoint.entrypoint"),
          { entID: b }
        ),
        g = f[0];
      f = f[1];
      a = c("useIXTContentTriggerDialog")({
        content_id: b,
        entry_point: (b = d) != null ? b : "UNKNOWN",
        location: (d = a) != null ? d : "UNKNOWN",
        trigger_event_type: (b = e) != null ? b : "INFORM_TREATMENT_SEE_WHY",
      });
      var i = a[0];
      d = a[1];
      if (e != null && h)
        return [
          function () {
            return i({});
          },
          d,
        ];
      else return [g, f];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenOverlayCenterButton.react",
  [
    "CIXWarningScreenActions",
    "CometRelay",
    "CometWarningScreenOverlayCenterButton_data.graphql",
    "TetraButton.react",
    "getJSEnumSafe",
    "react",
    "recoverableViolation",
    "useCometUFIVideoPlayerStateAndController",
    "useInformTreatmentFollowupExperience",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function j(a, b) {
      switch (a) {
        case "overlay":
          switch (b) {
            case "PRIMARY":
              return "overlay";
            case "SECONDARY":
              return "fdsOverride_black";
            case null:
              return "overlay";
          }
          break;
        case "card":
          return "secondary";
      }
      return "overlay";
    }
    function a(a) {
      var e,
        f = c("useCometUFIVideoPlayerStateAndController")(),
        g = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometWarningScreenOverlayCenterButton_data.graphql")),
          a.data
        );
      e = c("useInformTreatmentFollowupExperience")({
        contentID: (e = a.contentID) != null ? e : "",
        ixtTriggerEvent: g.ixt_trigger,
      });
      var k = e[0];
      e = e[1];
      var l = g.label,
        m = g.render_type,
        n = g.type;
      l = l == null ? void 0 : l.text;
      if (l == null || n == null) {
        c("recoverableViolation")("Empty data passed", "comet_warning_screens");
        return null;
      }
      n === "OPEN_MISINFO_SEE_WHY_DIALOG" &&
        a.storyID == null &&
        c("recoverableViolation")(
          "No story ID for misinfo",
          "comet_warning_screens"
        );
      if (n === "OPEN_MISINFO_SEE_WHY_DIALOG" && a.contentID == null) {
        c("recoverableViolation")(
          "No content ID for misinfo",
          "comet_warning_screens"
        );
        return null;
      }
      var o = {};
      n === "SHOW_CONTENT"
        ? (o = {
            onPress: function () {
              f && f.controller.play("warning_screen_cover"),
                a.logAction("SHOW_CONTENT"),
                a.showContent();
            },
            testid: "CometWarningScreen-ShowContent",
          })
        : g.ixt_trigger != null
        ? (o = {
            onPress: function () {
              a.logAction(c("getJSEnumSafe")(c("CIXWarningScreenActions"), n)),
                k({});
            },
            ref: e,
          })
        : (o = {
            linkProps: { target: "_blank", url: g.context },
            onPress: function () {
              a.logAction("HELP_CENTER_REDIRECT");
            },
          });
      return i.jsx("div", {
        className: "oqcyycmt q9uorilb",
        children: i.jsx(
          c("TetraButton.react"),
          babelHelpers["extends"](
            { label: l, size: "medium", type: j(a.type, m) },
            o
          )
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenOverlayIcon.react",
  [
    "CometRelay",
    "CometWarningScreenOverlayIcon_data.graphql",
    "TetraIcon.react",
    "TintableIconSource",
    "coerceRelayImage",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometWarningScreenOverlayIcon_data.graphql")),
        a.data
      );
      if (e.icon == null)
        throw c("unrecoverableViolation")(
          "Icon missing for Warning Screen",
          "comet_frx"
        );
      e = new (c("TintableIconSource"))(
        "FB",
        c("coerceRelayImage")(e.icon),
        24
      );
      return i.jsx(c("TetraIcon.react"), { color: a.color, icon: e, size: 24 });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenOverlayContentDefaultFullCover.react",
  [
    "CometColumn.react",
    "CometColumnItem.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometTextWithEntitiesRelay.react",
    "CometWarningScreenContext",
    "CometWarningScreenOverlayCenterButton.react",
    "CometWarningScreenOverlayContentDefaultFullCover_data.graphql",
    "CometWarningScreenOverlayIcon.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "CometWarningScreenOverlayContentDefaultFullCover_data.graphql"
              )),
          a.data
        ),
        g = d("CometWarningScreenContext").useShowOverlay(),
        j = a.storyID,
        k = f.title,
        l = f.subtitle;
      return i.jsx("div", {
        className:
          "j102wcjv kr520xx4 j9ispegn pmk7jnqg dati1w0a ihqw7lf3 hv4rvrfc discj3wi ggxiycxj hihg3u9x cbu4d94t n7fi1qx3 j83agx80 i09qtzwb",
        ref: (e = a.containerRefs) == null ? void 0 : e.overlayContainerRef,
        children: i.jsx("div", {
          className: "taijpn5t buofh1pr j83agx80 bp9cbjyn",
          ref: (e = a.containerRefs) == null ? void 0 : e.contentContainerRef,
          children: i.jsx(c("CometColumn.react"), {
            children: i.jsxs(c("CometColumnItem.react"), {
              children: [
                i.jsx("div", {
                  className: "sjgh65i0 taijpn5t buofh1pr j83agx80 bp9cbjyn",
                  children: i.jsx(c("CometWarningScreenOverlayIcon.react"), {
                    color: "white",
                    data: f,
                  }),
                }),
                k != null
                  ? i.jsx(c("TetraText.react"), {
                      align: "center",
                      color: "white",
                      type: "headlineEmphasized3",
                      children: i.jsx(c("CometTextWithEntitiesRelay.react"), {
                        textWithEntities: k,
                      }),
                    })
                  : null,
                i.jsxs(i.Fragment, {
                  children: [
                    l != null
                      ? i.jsx("div", {
                          className: "s9t1a10h",
                          children: i.jsx(c("TetraText.react"), {
                            align: "center",
                            color: "white",
                            type: "body3",
                            children: i.jsx(
                              c("CometTextWithEntitiesRelay.react"),
                              { textWithEntities: l }
                            ),
                          }),
                        })
                      : null,
                    f.warning_screen_actions.length > 0
                      ? i.jsx("div", {
                          className: "mrt03zmi cxgpxx05 b3onmgus ph5uu5jm",
                          children: i.jsx(c("CometRow.react"), {
                            align: "center",
                            spacing: 12,
                            children: f.warning_screen_actions.map(function (
                              b,
                              d
                            ) {
                              return i.jsx(
                                c("CometRowItem.react"),
                                {
                                  expanding: !1,
                                  children: i.jsx(
                                    c(
                                      "CometWarningScreenOverlayCenterButton.react"
                                    ),
                                    {
                                      contentID: a.contentID,
                                      data: b,
                                      logAction: a.logAction,
                                      showContent: function () {
                                        return g(!1);
                                      },
                                      storyID: j,
                                      type: "overlay",
                                    }
                                  ),
                                },
                                d
                              );
                            }),
                          }),
                        })
                      : null,
                  ],
                }),
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
  "useLightWeightCardOffset",
  [
    "CometRouteRenderType",
    "CometWarningScreenContext",
    "react",
    "useCometUFIVideoPlayerStateAndController",
    "useLayoutEffect_SAFE_FOR_SSR",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useMemo,
      j = e.useRef,
      k = e.useState,
      l = 552,
      m = 112,
      n = 16,
      o = m + n,
      p = 48,
      q = 16,
      r = 12,
      s = 750,
      t = 120,
      u = 0.7;
    function a() {
      var a = d("CometRouteRenderType").useIsPushView(),
        b = j(null),
        e = k(0),
        f = e[0],
        g = e[1],
        i = h(
          function (b) {
            if (a) {
              b = Math.max(b - l, 0);
              b = b / 2;
              b = Math.max(m, Math.min(b, o));
              b = (o - b) / n;
              b = b * p;
              g(b);
            }
          },
          [a, g]
        );
      e = c("useResizeObserver")(function (a) {
        return i(a.width);
      });
      e(b.current);
      return { containerRef: b, vertical: f };
    }
    var v = function (a) {
      return -Math.pow(2, -10 * a) + 1;
    };
    function w(a, b, c, d) {
      var e = Date.now(),
        f = null,
        g = function (c) {
          c = a + (b - a) * c;
          d(c);
        },
        h = function a() {
          var b = Date.now() - e;
          g(v(Math.min(b / c, 1)));
          f = window.requestAnimationFrame(a);
        };
      window.setTimeout(function () {
        window.cancelAnimationFrame(f), g(1);
      }, c);
      h();
    }
    function b() {
      var a = c("useCometUFIVideoPlayerStateAndController")(),
        b = j(null),
        e = j(null),
        f = k(0),
        g = f[0],
        l = f[1],
        m = d("CometWarningScreenContext").useSetAdditionalRequiredHeight();
      f = k(!1);
      var n = f[0],
        o = f[1],
        p = h(
          function (b) {
            var a = b.card;
            b = b.container;
            if (n) return;
            var c = b.height - a.height,
              d = Math.max(t, u * b.height);
            d = Math.max(0, d - c);
            if (d < q) {
              m(0);
              l(0);
              return;
            }
            c = d > b.height + 2 * r;
            c ? (m(a.height + 2 * r), l(b.height + 2 * r)) : (m(d - q), l(d));
          },
          [n, m, l]
        ),
        v = h(
          function (b) {
            var a = b.card;
            b = b.container;
            b = g < b.height + 2 * r;
            b &&
              w(g, a.height + 2 * r, s, function (a) {
                l(a), m(a - q);
              });
          },
          [m, l, g]
        ),
        x = b.current,
        y = e.current;
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          x != null &&
            y != null &&
            p({
              card: x.getBoundingClientRect(),
              container: y.getBoundingClientRect(),
            });
        },
        [x, y, p]
      );
      i(
        function (b) {
          b == null ? void 0 : b();
          return a == null
            ? void 0
            : (b = a.controller) == null
            ? void 0
            : b.observeOn().playRequest(function () {
                o(!0),
                  x != null &&
                    y != null &&
                    v({
                      card: x.getBoundingClientRect(),
                      container: y.getBoundingClientRect(),
                    });
              });
        },
        [a, x, y, v]
      );
      return { cardRef: b, containerRef: e, vertical: g };
    }
    g.useLightWeightCardOffsetForFullScreenMediaPlayerStyle = a;
    g.useLightWeightCardOffset = b;
  },
  98
);
__d(
  "CometWarningScreenOverlayContentDefaultLightweight.react",
  [
    "ix",
    "CometCard.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometStyleXSheet",
    "CometTextWithEntitiesRelay.react",
    "CometWarningScreenContext",
    "CometWarningScreenOverlayCenterButton.react",
    "CometWarningScreenOverlayContentDefaultLightweight_data.graphql",
    "CometWarningScreenOverlayIcon.react",
    "TetraCircleButton.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
    "useLightWeightCardOffset",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l =
        (e =
          d("CometStyleXSheet").CometStyleXSheet == null
            ? void 0
            : d("CometStyleXSheet").CometStyleXSheet.DARK_MODE_CLASS_NAME) !=
        null
          ? e
          : "";
    function m(a) {
      var e = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b(
                "CometWarningScreenOverlayContentDefaultLightweight_data.graphql"
              )),
          a.data
        ),
        f = d("CometWarningScreenContext").useSetAdditionalRequiredHeight(),
        g = d("CometWarningScreenContext").useShowOverlay(),
        m = a.logAction,
        n = k(
          function () {
            f(0), g(!1), m("SHOW_CONTENT");
          },
          [f, g, m]
        ),
        o = a.storyID,
        p = e.title,
        q = e.subtitle,
        r = e.warning_screen_actions.filter(function (a) {
          return a.type !== "SHOW_CONTENT";
        }),
        s = a.offset,
        t = a.position,
        u = a.shouldForceDarkMode;
      return j.jsx("div", {
        className:
          "kr520xx4 j9ispegn pmk7jnqg hzruof5a ggxiycxj hihg3u9x cbu4d94t n7fi1qx3 j83agx80 i09qtzwb",
        ref: s.containerRef,
        style: { bottom: -s.vertical, top: s.vertical },
        children: j.jsx("div", {
          className:
            "j9ispegn pmk7jnqg oqq733wu dati1w0a ihqw7lf3 hv4rvrfc discj3wi ggxiycxj hihg3u9x taijpn5t cbu4d94t n7fi1qx3 j83agx80 bp9cbjyn" +
            (t === "TOP" ? " kr520xx4" : " i09qtzwb"),
          children: j.jsx("div", {
            className: t === "TOP" ? "k4urcfbm lvkh322w" : "k4urcfbm",
            ref: s.cardRef,
            children: j.jsx("div", {
              className: u ? l : null,
              children: j.jsx(c("CometCard.react"), {
                background: "white",
                border: "solid",
                dropShadow: 2,
                children: j.jsx("div", {
                  className: "b3onmgus e5nlhep0 ph5uu5jm ecm0bbzt",
                  children: j.jsxs("div", {
                    className: "ihqw7lf3",
                    children: [
                      j.jsxs(c("CometRow.react"), {
                        align: "start",
                        expanding: !0,
                        children: [
                          j.jsx(c("CometRowItem.react"), {
                            children: j.jsx("div", {
                              className: "hcukyx3x cxmmr5t8",
                              children: j.jsx(
                                c("CometWarningScreenOverlayIcon.react"),
                                { color: "primary", data: e }
                              ),
                            }),
                          }),
                          (p != null || q != null) &&
                            j.jsx(c("CometRowItem.react"), {
                              expanding: !0,
                              children: j.jsx("div", {
                                className: "s7sz1jes aahdfvyu",
                                children: j.jsx(c("TetraTextPairing.react"), {
                                  body:
                                    q != null &&
                                    j.jsx(c("TetraText.react"), {
                                      color: "primary",
                                      type: "body3",
                                      children: j.jsx(
                                        c("CometTextWithEntitiesRelay.react"),
                                        { textWithEntities: q }
                                      ),
                                    }),
                                  headline:
                                    p &&
                                    j.jsx(c("TetraText.react"), {
                                      color: "primary",
                                      type: "bodyLink3",
                                      children: j.jsx(
                                        c("CometTextWithEntitiesRelay.react"),
                                        { textWithEntities: p }
                                      ),
                                    }),
                                  level: 3,
                                }),
                              }),
                            }),
                        ],
                      }),
                      r.length > 0 &&
                        j.jsx(c("CometRow.react"), {
                          wrap: "forward",
                          children: j.jsx(c("CometRowItem.react"), {
                            expanding: !0,
                            children: r.map(function (b, d) {
                              return j.jsx(
                                c("CometRowItem.react"),
                                {
                                  expanding: !1,
                                  children: j.jsx(
                                    c(
                                      "CometWarningScreenOverlayCenterButton.react"
                                    ),
                                    {
                                      contentID: a.contentID,
                                      data: b,
                                      logAction: a.logAction,
                                      showContent: function () {},
                                      storyID: o,
                                      type: "card",
                                    }
                                  ),
                                },
                                d
                              );
                            }),
                          }),
                        }),
                      j.jsx("div", {
                        className:
                          "kr520xx4 pmk7jnqg tw6a2znq f10w8fjw d1544ag0 pybr56ya n7fi1qx3",
                        children: j.jsx(c("TetraCircleButton.react"), {
                          icon: d("fbicon")._(h("478232"), 16),
                          label: "Close",
                          onPress: n,
                          size: 32,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      var b = d(
        "useLightWeightCardOffset"
      ).useLightWeightCardOffsetForFullScreenMediaPlayerStyle();
      return j.jsx(
        m,
        babelHelpers["extends"](
          { offset: b, position: "TOP", shouldForceDarkMode: !0 },
          a
        )
      );
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      var b = d("useLightWeightCardOffset").useLightWeightCardOffset();
      return j.jsx(
        m,
        babelHelpers["extends"](
          { offset: b, position: "BOTTOM", shouldForceDarkMode: !1 },
          a
        )
      );
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p(a) {
      return j.jsx(
        m,
        babelHelpers["extends"](
          {
            offset: { vertical: 0 },
            position: "BOTTOM",
            shouldForceDarkMode: !1,
          },
          a
        )
      );
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.allowExpandingIfNecessary,
        c = a.isFullScreenMediaPlayerStyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "allowExpandingIfNecessary",
        "isFullScreenMediaPlayerStyle",
      ]);
      if (c) return j.jsx(n, babelHelpers["extends"]({}, a));
      return b
        ? j.jsx(o, babelHelpers["extends"]({}, a))
        : j.jsx(p, babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenOverlayContentDefault.react",
  [
    "CometRelay",
    "CometWarningScreenOverlayContentDefaultFullCover.react",
    "CometWarningScreenOverlayContentDefaultLightweight.react",
    "CometWarningScreenOverlayContentDefault_data.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.allowExpandingIfNecessary,
        f = a.containerRefs,
        g = a.contentID,
        j = a.data,
        k = a.isFullScreenMediaPlayerStyle,
        l = a.logAction,
        m = a.storyID;
      a = a.url;
      j = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometWarningScreenOverlayContentDefault_data.graphql")),
        j
      );
      switch (j.render_type) {
        case "LIGHTWEIGHT":
          return i.jsx(
            c("CometWarningScreenOverlayContentDefaultLightweight.react"),
            {
              allowExpandingIfNecessary: e,
              contentID: g,
              data: j,
              isFullScreenMediaPlayerStyle: k,
              logAction: l,
              storyID: m,
              url: a,
            }
          );
        case "FULL_COVER":
        default:
          return i.jsx(
            c("CometWarningScreenOverlayContentDefaultFullCover.react"),
            {
              containerRefs: f,
              contentID: g,
              data: j,
              logAction: l,
              storyID: m,
              url: a,
            }
          );
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenOverlayContentSmall.react",
  [
    "fbt",
    "CometPressable.react",
    "CometRelay",
    "CometWarningScreenOverlayContentSmall_data.graphql",
    "CometWarningScreenOverlayIcon.react",
    "react",
    "stylex",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = {
        content: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexGrow: "buofh1pr",
          justifyContent: "taijpn5t",
        },
        intercepter: {
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          ":active": { transform: "tm8avpzi" },
        },
        overlayContainer: {
          bottom: "i09qtzwb",
          display: "j83agx80",
          end: "n7fi1qx3",
          flexDirection: "cbu4d94t",
          overflowX: "hihg3u9x",
          overflowY: "ggxiycxj",
          paddingTop: "discj3wi",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "ihqw7lf3",
          paddingStart: "dati1w0a",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          zIndex: "j102wcjv",
        },
        overlayContainerSmall: {
          paddingTop: "jb3vyjys",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "qt6c0cv9",
          paddingStart: "a8nywdso",
          pointerEvents: "hzruof5a",
        },
      };
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("CometWarningScreenOverlayContentSmall_data.graphql")),
          a.data
        ),
        g = c("useCometRouterDispatcher")();
      if (f.render_type === "LIGHTWEIGHT") return null;
      var l = a.logAction,
        m = a.url,
        n =
          m != null
            ? j.jsx(c("CometPressable.react"), {
                "aria-label": h._("Cover,sensitive content in album"),
                display: "block",
                hideHoverOverlay: !0,
                onPress: function (a) {
                  g != null &&
                    (l("OPEN_CONTENT_VIEWER"), g.go(m, {}), a.preventDefault());
                },
                xstyle: k.intercepter,
              })
            : null;
      return j.jsxs("div", {
        children: [
          j.jsx("div", {
            className: c("stylex")(k.overlayContainer, k.overlayContainerSmall),
            ref: (e = a.containerRefs) == null ? void 0 : e.overlayContainerRef,
            children: j.jsx("div", {
              className: c("stylex")(k.content),
              ref:
                (e = a.containerRefs) == null ? void 0 : e.contentContainerRef,
              children: j.jsx(c("CometWarningScreenOverlayIcon.react"), {
                color: "white",
                data: f,
              }),
            }),
          }),
          n,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenOverlayContent.react",
  [
    "CometRelay",
    "CometWarningScreenOverlayContentDefault.react",
    "CometWarningScreenOverlayContentSmall.react",
    "CometWarningScreenOverlayContent_data.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometWarningScreenOverlayContent_data.graphql")),
        a.data
      );
      switch (a.layout) {
        case "SMALL":
          return i.jsx(c("CometWarningScreenOverlayContentSmall.react"), {
            containerRefs: a.containerRefs,
            contentID: a.contentID,
            data: e,
            logAction: a.logAction,
            storyID: a.storyID,
            url: a.url,
          });
        case "DEFAULT":
        default:
          return i.jsx(c("CometWarningScreenOverlayContentDefault.react"), {
            allowExpandingIfNecessary: a.allowExpandingIfNecessary,
            containerRefs: a.containerRefs,
            contentID: a.contentID,
            data: e,
            isFullScreenMediaPlayerStyle: a.isFullScreenMediaPlayerStyle,
            logAction: a.logAction,
            storyID: a.storyID,
            url: a.url,
          });
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenOverlayCovered.react",
  [
    "CometRelay",
    "CometWarningScreenContext",
    "CometWarningScreenOverlayBackground.react",
    "CometWarningScreenOverlayContent.react",
    "CometWarningScreenOverlayCovered_data.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useEffect;
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometWarningScreenOverlayCovered_data.graphql")),
          a.data
        ),
        f = e.render_type !== "LIGHTWEIGHT",
        g = d(
          "CometWarningScreenContext"
        ).useMakeContentVisibleDespiteOverlay();
      j(
        function () {
          g(!f);
        },
        [g, f]
      );
      return i.jsxs(i.Fragment, {
        children: [
          f &&
            i.jsx(c("CometWarningScreenOverlayBackground.react"), {
              data: e,
              mediaUri: a.mediaUri,
            }),
          i.jsx(c("CometWarningScreenOverlayContent.react"), {
            allowExpandingIfNecessary: a.allowExpandingIfNecessary,
            containerRefs: a.containerRefs,
            contentID: a.contentID,
            data: e,
            isFullScreenMediaPlayerStyle: a.isFullScreenMediaPlayerStyle,
            layout: a.layout,
            logAction: a.logAction,
            storyID: a.storyID,
            url: a.url,
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
  "useWarningScreenLayout",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useLayoutEffect,
      i = b.useRef,
      j = b.useState;
    function a() {
      var a = j("DEFAULT"),
        b = a[0],
        c = a[1],
        d = i(null),
        e = i(null);
      h(
        function () {
          if (d.current == null || e.current == null) return;
          d.current != null &&
            e.current != null &&
            d.current.clientHeight - e.current.clientHeight <= 0 &&
            c("SMALL");
        },
        [d, e]
      );
      return [b, { contentContainerRef: e, overlayContainerRef: d }];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenOverlayCoveredResizable.react",
  [
    "CometRelay",
    "CometWarningScreenOverlayCovered.react",
    "CometWarningScreenOverlayCoveredResizable_data.graphql",
    "react",
    "useWarningScreenLayout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometWarningScreenOverlayCoveredResizable_data.graphql")),
          a.data
        ),
        f = c("useWarningScreenLayout")(),
        g = f[0];
      f = f[1];
      return i.jsx(c("CometWarningScreenOverlayCovered.react"), {
        allowExpandingIfNecessary: a.allowExpandingIfNecessary,
        containerRefs: f,
        contentID: a.contentID,
        data: e,
        isFullScreenMediaPlayerStyle: a.isFullScreenMediaPlayerStyle,
        layout: g,
        logAction: a.logAction,
        mediaUri: a.mediaUri,
        storyID: a.storyID,
        url: a.url,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenOverlayUncovered.react",
  [
    "fbt",
    "ix",
    "CometRouteRenderType",
    "CometWarningScreenContext",
    "TetraCircleButton.react",
    "fbicon",
    "react",
    "stylex",
    "unrecoverableViolation",
    "useCometRouterState",
    "useCometUFIVideoPlayerStateAndController",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        showOverlayButton: {
          end: "cypi58rs",
          pointerEvents: "mrt03zmi",
          position: "pmk7jnqg",
          top: "dn56xbwz",
        },
      };
    function a(a) {
      var b = c("useCometUFIVideoPlayerStateAndController")(),
        e = d("CometWarningScreenContext").useShowOverlay(),
        f = c("useCometRouterState")();
      if (f == null)
        throw c("unrecoverableViolation")(
          "Cannot render comet app with no route provider",
          "comet_infra"
        );
      f = d("CometRouteRenderType").useIsPushView();
      f = f && a.xstyle != null ? a.xstyle : k.showOverlayButton;
      return j.jsx("div", {
        className: c("stylex")(f),
        children: j.jsx(c("TetraCircleButton.react"), {
          icon: d("fbicon")._(i("511436"), 24),
          label: h._("Show overlay"),
          onPress: function () {
            b && b.controller.pause("warning_screen_cover"),
              e(!0),
              a.logAction("HIDE_CONTENT");
          },
          size: 40,
          testid: void 0,
          type: "dark-overlay",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WarningScreenRenderType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      FULL_COVER: "FULL_COVER",
      LIGHTWEIGHT: "LIGHTWEIGHT",
      POST_COVER: "POST_COVER",
    });
    f["default"] = a;
  },
  66
);
__d(
  "CometWarningScreenOverlay.react",
  [
    "CometRelay",
    "CometStoryRenderLocationContext.react",
    "CometWarningScreenContext",
    "CometWarningScreenOverlayCovered.react",
    "CometWarningScreenOverlayCoveredResizable.react",
    "CometWarningScreenOverlayUncovered.react",
    "CometWarningScreenOverlay_data.graphql",
    "WarningScreenRenderType",
    "getJSEnumSafe",
    "react",
    "requireDeferred",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect,
      l = c("requireDeferred")("CometWarningScreenClientLogger").__setRef(
        "CometWarningScreenOverlay.react"
      );
    function a(a) {
      var e,
        f,
        g,
        m,
        n = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("CometWarningScreenOverlay_data.graphql")),
          a.data
        ),
        o = (e = a.storyID) != null ? e : n.container_story_id,
        p = n.content_id,
        q = n.inform_session_id;
      e = a.mediaUri;
      var r = a.surface,
        s = a.url,
        t = n.top_objectionable_category,
        u = c("getJSEnumSafe")(c("WarningScreenRenderType"), n.render_type);
      f = (f = a.isFullScreenMediaPlayerStyle) != null ? f : !1;
      g = (g = a.allowExpandingIfNecessary) != null ? g : !0;
      m = (m = a.allowReCoveringContent) != null ? m : !0;
      var v = d("CometWarningScreenContext").useIsOverlayShown(),
        w = d("CometWarningScreenContext").useSetParentRenderInstructions(),
        x = j(c("CometStoryRenderLocationContext.react")),
        y = a.integrityUIElement;
      k(
        function () {
          w(u === "LIGHTWEIGHT" ? "CLIP_TO_PARENT" : "CLIP_TO_MEDIA");
        },
        [u, w]
      );
      var z = c("useVisibilityObserver")({
          onVisible: function () {
            l.onReady(function (a) {
              a.logInformTreatmentEvent({
                contentIDRaw: p,
                event: "mounted",
                integrityUIElement: y,
                objectionableCategory: t,
                product: "warning_screens",
                renderType: u,
                session_id: q,
                storyID: o,
                storyRenderLocation: x,
                surface: r,
              });
            });
          },
        }),
        A = function (a) {
          a != null &&
            l.onReady(function (b) {
              b.logInformTreatmentEvent({
                action: a,
                contentIDRaw: p,
                event: "action",
                integrityUIElement: y,
                objectionableCategory: t,
                product: "warning_screens",
                renderType: u,
                session_id: q,
                storyID: o,
                storyRenderLocation: x,
                surface: r,
              });
            });
        };
      if (t == null) return null;
      if (v || (a == null ? void 0 : a.alwaysShowCoverComponent) === !0) {
        v = a.alwaysShowDetails === !0;
        var B = a.alwaysUseSmallLayout === !0;
        if (B)
          return i.jsx("div", {
            ref: z,
            children: i.jsx(c("CometWarningScreenOverlayCovered.react"), {
              allowExpandingIfNecessary: g,
              contentID: p,
              data: n,
              isFullScreenMediaPlayerStyle: f,
              layout: "SMALL",
              logAction: A,
              mediaUri: e,
              storyID: o,
              url: s,
            }),
          });
        return v
          ? i.jsx("div", {
              ref: z,
              children: i.jsx(c("CometWarningScreenOverlayCovered.react"), {
                allowExpandingIfNecessary: g,
                contentID: p,
                data: n,
                isFullScreenMediaPlayerStyle: f,
                layout: "DEFAULT",
                logAction: A,
                mediaUri: e,
                storyID: o,
                url: s,
              }),
            })
          : i.jsx("div", {
              ref: z,
              children: i.jsx(
                c("CometWarningScreenOverlayCoveredResizable.react"),
                {
                  allowExpandingIfNecessary: g,
                  contentID: p,
                  data: n,
                  isFullScreenMediaPlayerStyle: f,
                  logAction: A,
                  mediaUri: e,
                  storyID: o,
                  url: s,
                }
              ),
            });
      } else if (m && u !== "LIGHTWEIGHT")
        return i.jsx(c("CometWarningScreenOverlayUncovered.react"), {
          logAction: A,
          xstyle: a.xstyle,
        });
      else return i.jsx("div", {});
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
