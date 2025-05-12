import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ZOFUN",
  description: "温故而知新！",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
