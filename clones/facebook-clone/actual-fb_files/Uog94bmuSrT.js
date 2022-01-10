if (self.CavalryLogger) {
  CavalryLogger.start_js(["MN5jC3I"]);
}

__d(
  "NullStateFiles",
  ["IconSource"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      dark: new (c("IconSource"))(
        "nullStateGlyphs",
        "/images/comet/empty_states_icons/files/null_states_files_dark_mode.svg",
        112
      ),
      default: new (c("IconSource"))(
        "nullStateGlyphs",
        "/images/comet/empty_states_icons/files/null_states_files_gray_wash.svg",
        112
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometMediaPickerNullStateUploadButton.react",
  [
    "fbt",
    "ix",
    "CometSkittleIcon.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.icon,
        e = a.label;
      a = a.testid;
      return j.jsxs("div", {
        className: "cbu4d94t j83agx80 bp9cbjyn",
        children: [
          j.jsx(c("CometSkittleIcon.react"), {
            color: "gray",
            icon: (a = b) != null ? a : d("fbicon")._(i("481775"), 20),
            size: 40,
          }),
          e != null &&
            j.jsxs(j.Fragment, {
              children: [
                j.jsx("div", { className: "cxgpxx05" }),
                j.jsx(c("TetraTextPairing.react"), {
                  headline: e,
                  level: 3,
                  meta: h._("or drag and drop"),
                  testid: void 0,
                  textAlign: "center",
                }),
              ],
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
