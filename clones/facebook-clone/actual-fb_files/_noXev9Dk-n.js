if (self.CavalryLogger) {
  CavalryLogger.start_js(["rP873eQ"]);
}

__d(
  "useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo",
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
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometPhotoViewerPlaceholderPassthroughProps_photo",
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
  "ProfileCometGridTileImage_warningScreen.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometGridTileImage_warningScreen",
      selections: [
        {
          args: null,
          documentName: "ProfileCometGridTileImage_warningScreen",
          fragmentName: "CometWarningScreenOverlay_data",
          fragmentPropName: "data",
          kind: "ModuleImport",
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
  "ProfileCometTilePhotoGridViewItem_image.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometTilePhotoGridViewItem_image",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 150 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 150 },
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
              name: "uri",
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
          name: "node",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo",
            },
          ],
          storageKey: null,
        },
      ],
      type: "ProfileTileItem",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometTilePhotoGridViewItem_profileTileItem.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometTilePhotoGridViewItem_profileTileItem",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
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
              args: null,
              kind: "FragmentSpread",
              name: "useCometMediaURL_media",
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Literal",
                      name: "framework",
                      value: "WARNING_SCREENS",
                    },
                    { kind: "Literal", name: "location", value: "profile" },
                  ],
                  concreteType: "CIXScreen",
                  kind: "LinkedField",
                  name: "cix_screen",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "view_model",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "ProfileCometGridTileImage_warningScreen",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'cix_screen(framework:"WARNING_SCREENS",location:"profile")',
                },
              ],
              type: "CanRenderCIXScreen",
              abstractKey: "__isCanRenderCIXScreen",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 150 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 150 },
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
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "ProfileTileItem",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometTilePhotoGridView_viewStyleRenderer$normalization.graphql",
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
        c = [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [
              a,
              b,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri_token",
                    storageKey: null,
                  },
                ],
                type: "Page",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        d = { kind: "Variable", name: "scale", variableName: "scale" },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        f = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "reference_token",
            storageKey: null,
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "ProfileCometTilePhotoGridView_viewStyleRenderer$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "ProfileTileView",
            kind: "LinkedField",
            name: "view",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "ProfileTileItemsConnection",
                kind: "LinkedField",
                name: "profile_tile_items",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "ProfileTileItem",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          a,
                          b,
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_playable",
                                storageKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: c,
                                type: "Photo",
                                abstractKey: null,
                              },
                              {
                                kind: "InlineFragment",
                                selections: c,
                                type: "Video",
                                abstractKey: null,
                              },
                            ],
                            type: "Media",
                            abstractKey: "__isMedia",
                          },
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: [
                                  {
                                    kind: "Literal",
                                    name: "framework",
                                    value: "WARNING_SCREENS",
                                  },
                                  {
                                    kind: "Literal",
                                    name: "location",
                                    value: "profile",
                                  },
                                ],
                                concreteType: "CIXScreen",
                                kind: "LinkedField",
                                name: "cix_screen",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "view_model",
                                    plural: !1,
                                    selections: [
                                      a,
                                      {
                                        kind: "InlineFragment",
                                        selections: [
                                          {
                                            args: null,
                                            documentName:
                                              "ProfileCometGridTileImage_warningScreen",
                                            fragmentName:
                                              "CometWarningScreenOverlay_data",
                                            fragmentPropName: "data",
                                            kind: "ModuleImport",
                                          },
                                        ],
                                        type: "OverlayWarningScreenViewModel",
                                        abstractKey: null,
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: [b],
                                        type: "Node",
                                        abstractKey: "__isNode",
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey:
                                  'cix_screen(framework:"WARNING_SCREENS",location:"profile")',
                              },
                            ],
                            type: "CanRenderCIXScreen",
                            abstractKey: "__isCanRenderCIXScreen",
                          },
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: "viewer_image",
                                args: [
                                  {
                                    kind: "Literal",
                                    name: "context",
                                    value: "comet_media_viewer",
                                  },
                                  {
                                    kind: "Literal",
                                    name: "height",
                                    value: 1e6,
                                  },
                                  d,
                                  {
                                    kind: "Literal",
                                    name: "width",
                                    value: 1e6,
                                  },
                                ],
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "image",
                                plural: !1,
                                selections: [
                                  e,
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
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: [
                          { kind: "Literal", name: "height", value: 150 },
                          d,
                          { kind: "Literal", name: "width", value: 150 },
                        ],
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "image",
                        plural: !1,
                        selections: [e],
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
                concreteType: null,
                kind: "LinkedField",
                name: "view_mediaset",
                plural: !1,
                selections: [
                  a,
                  {
                    kind: "InlineFragment",
                    selections: f,
                    type: "GenericMediaSet",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: f,
                    type: "MediaUploadedByUserMediaSet",
                    abstractKey: null,
                  },
                  b,
                ],
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
  "ProfileCometTilePhotoGridView_viewStyleRenderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reference_token",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometTilePhotoGridView_viewStyleRenderer",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "ProfileTileView",
            kind: "LinkedField",
            name: "view",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "ProfileTileItemsConnection",
                kind: "LinkedField",
                name: "profile_tile_items",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "ProfileTileItem",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "node",
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
                            args: null,
                            kind: "FragmentSpread",
                            name: "useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo",
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "ProfileCometTilePhotoGridViewItem_profileTileItem",
                      },
                      {
                        alias: null,
                        args: [
                          { kind: "Literal", name: "height", value: 150 },
                          {
                            kind: "Variable",
                            name: "scale",
                            variableName: "scale",
                          },
                          { kind: "Literal", name: "width", value: 150 },
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
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "view_mediaset",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: a,
                    type: "GenericMediaSet",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: a,
                    type: "MediaUploadedByUserMediaSet",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "ProfileTileViewPhotoGridRenderer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useCometPhotoViewerPlaceholderPassthroughPropsWithURI",
  [
    "CometRelay",
    "useCometPhotoViewerPlaceholderPassthroughProps",
    "useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var e = a.photo;
      a = a.productTagReferralCode;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo.graphql"
            )),
        e
      );
      return c("useCometPhotoViewerPlaceholderPassthroughProps")({
        photo: e,
        placeholderImageSrc:
          e == null ? void 0 : (e = e.viewer_image) == null ? void 0 : e.uri,
        productTagReferralCode: a,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometTileImage.react",
  [
    "CometImage.react",
    "CometPressable.react",
    "getRoundedCorners",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        borderBottomEndRadius: { borderBottomEndRadius: "uo3d90p7" },
        borderBottomStartRadius: { borderBottomStartRadius: "l82x9zwi" },
        borderTopEndRadius: { borderTopEndRadius: "pw54ja7n" },
        borderTopStartRadius: { borderTopStartRadius: "ue3kfks5" },
        fallbackImage: { backgroundColor: "g6srhlxm" },
        image: { height: "datstx6m", objectFit: "bixrwtb6", width: "k4urcfbm" },
        imageContainer: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        root: {
          display: "a8c37x1j",
          paddingBottom: "d5it6em2",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
        shadow: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          boxShadow: "blnotr6c",
        },
      };
    function a(a, b) {
      var d = a.linkProps,
        e = a.onHoverIn,
        f = a.onHoverOut,
        g = a.onPress,
        j = a.onPressIn,
        k = a.onPressOut,
        l = a.roundCorner;
      a = a.src;
      l = (l = l) != null ? l : c("getRoundedCorners").CORNERS.NONE;
      return h.jsx(c("CometPressable.react"), {
        "aria-hidden": !0,
        display: "inline",
        linkProps: d,
        onHoverIn: e,
        onHoverOut: f,
        onPress: g,
        onPressIn: j,
        onPressOut: k,
        ref: b,
        xstyle: i.root,
        children: h.jsxs("div", {
          className: c("stylex")(i.imageContainer),
          children: [
            a !== "" && a !== "#"
              ? h.jsx(c("CometImage.react"), {
                  src: a,
                  xstyle: [
                    i.image,
                    c("getRoundedCorners").hasCorner(
                      l,
                      c("getRoundedCorners").CORNERS.TOP_START
                    ) && i.borderTopStartRadius,
                    c("getRoundedCorners").hasCorner(
                      l,
                      c("getRoundedCorners").CORNERS.TOP_END
                    ) && i.borderTopEndRadius,
                    c("getRoundedCorners").hasCorner(
                      l,
                      c("getRoundedCorners").CORNERS.BOTTOM_START
                    ) && i.borderBottomStartRadius,
                    c("getRoundedCorners").hasCorner(
                      l,
                      c("getRoundedCorners").CORNERS.BOTTOM_END
                    ) && i.borderBottomEndRadius,
                  ],
                })
              : h.jsx("div", {
                  className: c("stylex")(
                    i.image,
                    i.fallbackImage,
                    c("getRoundedCorners").hasCorner(
                      l,
                      c("getRoundedCorners").CORNERS.TOP_START
                    ) && i.borderTopStartRadius,
                    c("getRoundedCorners").hasCorner(
                      l,
                      c("getRoundedCorners").CORNERS.TOP_END
                    ) && i.borderTopEndRadius,
                    c("getRoundedCorners").hasCorner(
                      l,
                      c("getRoundedCorners").CORNERS.BOTTOM_START
                    ) && i.borderBottomStartRadius,
                    c("getRoundedCorners").hasCorner(
                      l,
                      c("getRoundedCorners").CORNERS.BOTTOM_END
                    ) && i.borderBottomEndRadius
                  ),
                }),
            h.jsx("span", {
              className: c("stylex")(
                i.shadow,
                c("getRoundedCorners").hasCorner(
                  l,
                  c("getRoundedCorners").CORNERS.TOP_START
                ) && i.borderTopStartRadius,
                c("getRoundedCorners").hasCorner(
                  l,
                  c("getRoundedCorners").CORNERS.TOP_END
                ) && i.borderTopEndRadius,
                c("getRoundedCorners").hasCorner(
                  l,
                  c("getRoundedCorners").CORNERS.BOTTOM_START
                ) && i.borderBottomStartRadius,
                c("getRoundedCorners").hasCorner(
                  l,
                  c("getRoundedCorners").CORNERS.BOTTOM_END
                ) && i.borderBottomEndRadius
              ),
            }),
          ],
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
  "ProfileCometGridTileImage.react",
  [
    "CometRelay",
    "ProfileCometGridTileImage_warningScreen.graphql",
    "ProfileCometTileImage.react",
    "emptyFunction",
    "gkx",
    "react",
    "useCometPreloader",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback;
    function a(a, e) {
      var f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("ProfileCometGridTileImage_warningScreen.graphql")),
          a.warningScreen
        ),
        g = a.mediaViewerImageProps,
        k = a.onPress,
        l = a.passthroughImage,
        m = a.roundCorner,
        n = a.src;
      g = {
        origHeight: g == null ? void 0 : g.height,
        origSrc: l,
        origWidth: g == null ? void 0 : g.width,
      };
      var o = j(
        function () {
          if (l != null && c("gkx")("933")) {
            var a = new Image();
            a.src = l;
          }
        },
        [l]
      );
      o = c("useCometPreloader")("button_aggressive", c("emptyFunction"), o);
      var p = o[0];
      o = o[1];
      return i.jsx("div", {
        className: "qno324ep l9j0dhe7 tvmbv18p j83agx80",
        ref: e,
        children: i.jsxs("div", {
          className: "k4urcfbm l9j0dhe7 stjgntxs ni8dbmo4 cgat1ltu datstx6m",
          children: [
            i.jsx(c("ProfileCometTileImage.react"), {
              linkProps: {
                passthroughProps: babelHelpers["extends"]({}, g),
                traceParams: {
                  profile_comet_tile_view_type: "photo_grid_view",
                },
                url: a.url,
              },
              onHoverIn: p,
              onHoverOut: o,
              onPress: k,
              roundCorner: m,
              src: n || "",
            }),
            f != null &&
              i.jsx(d("CometRelay").MatchContainer, {
                match: f,
                props: {
                  alwaysShowCoverComponent: !0,
                  alwaysUseSmallLayout: !0,
                  data: f,
                  integrityUIElement: "profile_media_tile",
                  mediaUri: n,
                  surface: "profile",
                  url: a.url,
                },
              }),
          ],
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
  "ProfileCometTilePhotoGridView.react",
  [
    "CometRelay",
    "ProfileCometGridTileImage.react",
    "ProfileCometTilePhotoGridViewItem_image.graphql",
    "ProfileCometTilePhotoGridViewItem_profileTileItem.graphql",
    "ProfileCometTilePhotoGridView_viewStyleRenderer.graphql",
    "getRoundedCorners",
    "react",
    "useCometMediaURL",
    "useCometPhotoViewerPlaceholderPassthroughPropsWithURI",
    "useProfileEngagementClickCallback",
    "useProfileEngagementImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react"),
      l = 3;
    h !== void 0
      ? h
      : (h = b("ProfileCometTilePhotoGridViewItem_image.graphql"));
    function m(a) {
      var e,
        f,
        g = a.item,
        h = a.mediasetToken;
      a = a.roundCorner;
      g = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "ProfileCometTilePhotoGridViewItem_profileTileItem.graphql"
            )),
        g
      );
      e = (e = g.node) == null ? void 0 : e.id;
      f =
        (f = g.node) == null
          ? void 0
          : (f = f.cix_screen) == null
          ? void 0
          : f.view_model;
      e = { content_id: e, item_type: "photo_thumbnail" };
      var j = c("useProfileEngagementImpression")(e);
      e = c("useProfileEngagementClickCallback")(e);
      h = c("useCometMediaURL")(g.node, h);
      var l = c("useCometPhotoViewerPlaceholderPassthroughPropsWithURI")({
        photo: g.node,
      });
      return k.jsx(c("ProfileCometGridTileImage.react"), {
        mediaViewerImageProps: { height: l.origHeight, width: l.origWidth },
        onPress: e,
        passthroughImage: l.origSrc,
        ref: j,
        roundCorner: a,
        src: ((e = g.image) == null ? void 0 : e.uri) || "",
        url: (l = h) != null ? l : "#",
        warningScreen: f,
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      var e;
      a = a.viewStyleRenderer;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("ProfileCometTilePhotoGridView_viewStyleRenderer.graphql")),
        a
      );
      e =
        a == null
          ? void 0
          : (e = a.view) == null
          ? void 0
          : e.profile_tile_items;
      if (!e) return null;
      e = e.nodes.filter(function (a) {
        var b;
        return (
          ((b = a.image) == null ? void 0 : b.uri) != null && a.node != null
        );
      });
      var f =
        (a =
          a == null
            ? void 0
            : (a = a.view) == null
            ? void 0
            : (a = a.view_mediaset) == null
            ? void 0
            : a.reference_token) != null
          ? a
          : "";
      a = e.length;
      var g = c("getRoundedCorners")(a, l);
      a = l - (a % l);
      return k.jsxs("div", {
        className: "dlv3wnog enqfppq2 lhclo0ds j83agx80",
        children: [
          e.map(function (a, b) {
            var c;
            c = (c = a.node) == null ? void 0 : c.id;
            return k.jsx(
              m,
              { item: a, mediasetToken: f, roundCorner: g[b] || null },
              (a = c) != null ? a : b
            );
          }),
          a !== l
            ? Array.from(new Array(a), function (a, b) {
                return k.jsx(
                  "div",
                  {
                    className:
                      "k4urcfbm l9j0dhe7 stjgntxs ni8dbmo4 cgat1ltu datstx6m",
                  },
                  "filler" + b
                );
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
