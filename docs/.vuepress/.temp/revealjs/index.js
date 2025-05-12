export const useRevealJs = () => Promise.all(
  __VUEPRESS_SSR__
    ? []
    : [
        import(/* webpackChunkName: "reveal" */ "D:/my-docs/node_modules/reveal.js/dist/reveal.esm.js").then(({ default: RevealJs }) => RevealJs),
        import(/* webpackChunkName: "reveal" */ "D:/my-docs/node_modules/reveal.js/plugin/markdown/markdown.esm.js").then(({ default: plugin }) => plugin),
        import(/* webpackChunkName: "reveal" */ "D:/my-docs/node_modules/reveal.js/plugin/highlight/highlight.esm.js").then(({ default: plugin }) => plugin),
  import(/* webpackChunkName: "reveal" */ "D:/my-docs/node_modules/reveal.js/plugin/math/math.esm.js").then(({ default: plugin }) => plugin),
  import(/* webpackChunkName: "reveal" */ "D:/my-docs/node_modules/reveal.js/plugin/search/search.esm.js").then(({ default: plugin }) => plugin),
  import(/* webpackChunkName: "reveal" */ "D:/my-docs/node_modules/reveal.js/plugin/notes/notes.esm.js").then(({ default: plugin }) => plugin),
  import(/* webpackChunkName: "reveal" */ "D:/my-docs/node_modules/reveal.js/plugin/zoom/zoom.esm.js").then(({ default: plugin }) => plugin)
      ]
  );
