import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", // 博客主页
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "关于我",
    icon: "user",
    link: "/about.html",
  },
  {
    text: "文章",
    icon: "note",
    link: "/文章/"
  }
]);
