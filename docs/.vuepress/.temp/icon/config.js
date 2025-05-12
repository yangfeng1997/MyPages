import { hasGlobalComponent } from "D:/my-docs/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/my-docs/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/my-docs/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
