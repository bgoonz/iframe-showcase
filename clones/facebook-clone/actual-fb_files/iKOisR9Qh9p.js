if (self.CavalryLogger) {
  CavalryLogger.start_js(["CkZsbVT"]);
}

__d(
  "CometPhotoPermalinkRoot.entrypoint",
  [
    "CometPhotoPermalinkRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.routeParams;
        var c = a.comment_id,
          e = a.fbid,
          f = a.reply_comment_id;
        a = a.set;
        f = (f = f) != null ? f : c;
        c = {
          UFI2CommentsProvider_commentsKey: "CometPhotoPermalinkRootQuery",
          displayCommentsContextEnableComment: null,
          displayCommentsContextIsAdPreview: null,
          displayCommentsContextIsAggregatedShare: null,
          displayCommentsContextIsStorySet: null,
          displayCommentsFeedbackContext: null,
          feedLocation: "PERMALINK",
          feedbackSource: 2,
          focusCommentID: f != null ? String(f) : null,
          mediasetToken: a,
          nodeID: e,
          privacySelectorRenderLocation: "COMET_STREAM",
          renderLocation: "permalink",
          scale: d("WebPixelRatio").get(),
          useDefaultActor: !1,
        };
        return {
          queries: {
            photoPermalinkRootQueryReference: {
              parameters: b("CometPhotoPermalinkRootQuery$Parameters"),
              variables: c,
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometPhotoPermalinkRoot.react"
      ).__setRef("CometPhotoPermalinkRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
