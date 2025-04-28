import { hopeTheme } from "vuepress-theme-hope";
import { cut } from 'nodejs-jieba';
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

  hostname: "https://yangfeng1997.github.io",

  author: {
    name: "烛风",
    url: "https://yangfeng1997.github.io",
  },

  logo: "./logo.png",

  // 自动在每个页面的导航栏生成源文件仓库按钮
  repo: "yangfeng1997/MyPages",
  repoLabel: "GitHub",
  repoDisplay: true,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "陕ICP备 | 2021003707号",
  displayFooter: true,

  lastUpdated: true,

  darkmode: "toggle", // 网页深色模式切换
  // 可选的值:
  // "switch": 在深色模式，浅色模式和自动之间切换 (默认)
  // "toggle": 在深色模式和浅色模式之间切换
  // "auto": 自动根据用户设备主题或当前时间决定是否应用深色模式
  // "enable": 强制深色模式
  // "disable": 禁用深色模式

  print: false, //打印按钮

  // fullscreen: true, //显示全屏功能按钮，和pure选项互斥
  pure: true, //如果网站是一个纯文档站点，这个模式下会禁用一些花哨的动画以及一些色彩只提供功能
  focus: false, //专注模式下，我们会模糊内容之外元素，提供更好的专注体验，pure默认启用

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Outlook", "Search", "Language", "Repo"],
  },

  docsRepo: "yangfeng1997/MyPages",
  docsDir: "src",
  docsBranch: "master",
  // 显示贡献者
  contributors: false,

  // 博客相关
  blog: {
    description: "温故而知新！",
    medias: {
      // QQ: "tencent://message/?uin=137782866",
      // Wechat: "https://example.com",
      // Steam: "https://example.com",
      GitHub: "https://github.com/yangfeng1997",
      Email: "mailto:137782866@qq.com",
      Rss: "/rss.xml",
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Twitter: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "提示: 1234",
        password: "1234",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    // 文件支持 plantuml
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    // 支持供选项卡
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    math: {
      // 启用前安装 katex
      // type: "katex",
      // 或者安装 mathjax-full
      type: "mathjax",
    },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
    },

    // 支持脚注
    footnote: true,
    // 在启用之前安装 chart.js
    chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    echarts: true,

    // 支持思维导图
    markmap: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    search: true,
    slimsearch: {
      // 索引全部内容
      indexContent: true, //索引文章的全部内容
      suggestion: false,  //是否自动提示搜索建议
      queryHistoryCount: 5, //存储搜索查询词历史的最大数量，设置为 0 以禁用
      resultHistoryCount: 0, //存储搜索结果历史的最大数量，设置为 0 以禁用
      searchDelay: 300, //结束输入到开始搜索的延时，默认值: 150
      indexOptions: {
        // 使用 nodejs-jieba 进行分词
        tokenize: (text, fieldName) =>
          fieldName === 'id' ? [text] : cut(text, true),
      },
    },
    //注释：Frontmatter中search:false为不索引当前页面。

    feed: {
      rss: true,
      devServer: true,

      // feedOptions: {
      //   language: 'zh-CN', // 明确语言
      //   encoding: 'utf-8'  // 强制 UTF-8
      // }
    },

    // 评论插件Giscus
    comment: {
      provider: "Giscus",
      repo: "yangfeng1997/MyGiscus",
      repoId: "R_kgDOOfso7Q",
      category: "Announcements",
      categoryId: "DIC_kwDOOfso7c4Cpdyp",
      mapping: "pathname",
      strict: false,
      lazyLoading: true,
      reactionsEnabled: true,
      inputPosition: "bottom", //"top" | "bottom"
      lightTheme: "light",
      darkTheme: "dark",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    photoSwipe: true,
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
