if (self.CavalryLogger) {
  CavalryLogger.start_js(["PyMPwXK"]);
}

__d(
  "CometPageCTAButtonUpsellingInterstitialDialog.react",
  [
    "fbt",
    "ix",
    "CometCard.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometContextRowLink.react",
    "CometControlledUserBlockingDialog.react",
    "CometImage.react",
    "CometRow.react",
    "CometRowItem.react",
    "TetraButton.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.label,
        d = a.onClickUpsellButton,
        e = a.onClose;
      a = a.pageName;
      return j.jsx(c("CometControlledUserBlockingDialog.react"), {
        disableClosingWithMask: !0,
        onDismiss: e,
        size: "content",
        withCloseButton: !0,
        children: j.jsx("div", {
          className: "rbmczful",
          children: j.jsx(c("CometCard.react"), {
            background: "white",
            dropShadow: 1,
            children: j.jsxs(c("CometColumn.react"), {
              children: [
                j.jsx(c("CometColumnItem.react"), {
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  children: j.jsx(c("TetraText.react"), {
                    type: "headlineEmphasized2",
                    children: h._(
                      "You can now request a quote from {pageName}",
                      [h._param("pageName", a)]
                    ),
                  }),
                }),
                j.jsx(c("CometColumnItem.react"), {
                  children: j.jsx(c("CometImage.react"), { src: i("158671") }),
                }),
                j.jsx(c("CometColumnItem.react"), {
                  paddingHorizontal: 20,
                  paddingTop: 12,
                  children: j.jsx(c("TetraText.react"), {
                    type: "body3",
                    children: h._(
                      "You can get a quote for services from {pageName} by answering a few questions.",
                      [h._param("pageName", a)]
                    ),
                  }),
                }),
                j.jsx(c("CometColumnItem.react"), {
                  align: "end",
                  paddingVertical: 16,
                  children: j.jsxs(c("CometRow.react"), {
                    spacing: 24,
                    verticalAlign: "center",
                    children: [
                      j.jsx(c("CometRowItem.react"), {
                        children: j.jsx(c("CometContextRowLink.react"), {
                          onPress: e,
                          children: j.jsx(c("TetraText.react"), {
                            color: "blueLink",
                            type: "bodyLink3",
                            children: h._("View Page"),
                          }),
                        }),
                      }),
                      j.jsx(c("CometRowItem.react"), {
                        children: j.jsx(c("TetraButton.react"), {
                          label: b,
                          onPress: d,
                          padding: "wide",
                          size: "large",
                        }),
                      }),
                    ],
                  }),
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
