import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", // 博客主页
  "/demo/", // demo/下的README
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          {
            text: "苹果1",
            icon: "pen-to-square",
            link: "1",

          },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
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
    text: "教程",
    icon: "note",
    link: "/教程/"
  }
]);
