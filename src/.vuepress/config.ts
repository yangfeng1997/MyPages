import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/MyPages/",

  lang: "zh-CN",
  title: "ZOFUN",
  description: "烛风的个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
