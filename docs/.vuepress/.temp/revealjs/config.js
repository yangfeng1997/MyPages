import { RevealJs, injectRevealJsConfig } from "D:/my-docs/node_modules/@vuepress/plugin-revealjs/lib/client/index.js";
import { SlidePage } from "D:/my-docs/node_modules/@vuepress/plugin-revealjs/lib/client/layouts/index.js";

import "D:/my-docs/node_modules/reveal.js/dist/reveal.css";
import "D:/my-docs/node_modules/@vuepress/plugin-revealjs/lib/client/styles/base.css";
import "D:/my-docs/node_modules/@vuepress/plugin-revealjs/lib/client/styles/vars.css";
import "D:/my-docs/node_modules/@vuepress/plugin-revealjs/lib/client/styles/fonts/league-gothic.css";
import "D:/my-docs/node_modules/@vuepress/plugin-revealjs/lib/client/styles/fonts/source-sans-pro.css";
import "D:/my-docs/node_modules/@vuepress/plugin-revealjs/lib/client/styles/themes/auto.css";

export default {
  enhance: ({ app }) => {
    injectRevealJsConfig(app)
    app.component("RevealJs", RevealJs)
  },
  layouts: { "SlidePage": SlidePage },
};
