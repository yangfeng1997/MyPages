import ChartJS from "D:/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeDemo from "D:/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import ECharts from "D:/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import MarkMap from "D:/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/MarkMap.js";

export default {
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("ECharts", ECharts);
    app.component("MarkMap", MarkMap);
  },
};
