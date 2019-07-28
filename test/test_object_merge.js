import test from "ava";
import { merge } from "lodash/fp";
//import { Reveal } from "reveal.js";

test("check object merging", t => {
  t.true(true);

  const defaults = {
    controls: true,
    progress: true,
    history: true,
    center: true,

    //transition: Reveal.getQueryHash().transition || "slide", // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
      //{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      //{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      //{ src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: "plugin/zoom-js/zoom.js", async: true },
      { src: "plugin/notes/notes.js", async: true }
    ]
  };

  const extras = {
    center: false,
    slideNumber: "h.v",

    math: {
      mathjax:
        "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js",
      config: "TeX-AMS_HTML-full" // See http://docs.mathjax.org/en/latest/config-files.html
      // pass other options into `MathJax.Hub.Config()`
      //TeX: { Macros: macros }
    },
    dependencies: [{ src: "plugin/math/math.js", async: true }]
  };

  const mergedSettings = merge(defaults, extras);

  t.is(mergedSettings.center, false);
  t.is(mergedSettings.slideNumber, "h.v");

  console.log(JSON.stringify(mergedSettings, null, 2));
});
