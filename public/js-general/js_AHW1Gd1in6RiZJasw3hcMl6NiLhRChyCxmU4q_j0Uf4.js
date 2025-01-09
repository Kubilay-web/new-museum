/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(() => {
  if (
    !(
      "assign" in Object &&
      "from" in Array &&
      NodeList.prototype.forEach &&
      String.prototype.endsWith
    )
  ) {
    var t = document.createElement("script");
    (t.async = !1),
      (t.src = "/themes/custom/numiko/dist/js/polyfills.js"),
      document.head.appendChild(t);
  }
})();
(() => {
  var e = {
      2475: () => {
        var e = !1;
        window.addEventListener("DOMContentLoaded", function () {
          var t = Array.prototype.slice.call(
            document.querySelectorAll(".js-media [data-video-embed-field-lazy]")
          );
          !1 === e &&
            window.addEventListener("CookiebotOnConsentReady", function () {
              var e = Array.prototype.slice.call(
                document.querySelectorAll(".js-marketing-message")
              );
              !0 === window.Cookiebot.consent.marketing &&
                e.length &&
                (e.forEach(function (e) {
                  e.parentNode.removeChild(e);
                }),
                t.forEach(function (e) {
                  var t = e.parentElement.querySelector("figcaption");
                  e.classList.remove("hidden"),
                    t && t.classList.remove("hidden");
                })),
                0 == window.Cookiebot.consent.marketing &&
                  t.forEach(function (e) {
                    !(function (e) {
                      if (!e.querySelector(".js-marketing-message")) {
                        var t = document.createElement("div");
                        t.innerHTML =
                          '<div class="wysiwyg cookieconsent-optout-marketing | js-marketing-message"><a href="javascript:Cookiebot.renew()">Please allow marketing cookies to view media</a></div>';
                        var o = e.parentElement.querySelector("figcaption");
                        e.classList.add("hidden"),
                          o && o.classList.add("hidden"),
                          e.parentNode.insertBefore(t, e.nextSibling);
                      }
                    })(e);
                  });
            }),
            (e = !0);
        });
      },
    },
    t = {};
  function o(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, o), a.exports;
  }
  (o.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      o(2475);
    })();
})();
