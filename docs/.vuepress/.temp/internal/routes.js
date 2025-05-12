export const redirects = JSON.parse("{\"/%E6%96%87%E7%AB%A0/C++%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE%E5%88%86%E4%BA%AB.html\":\"/%E6%96%87%E7%AB%A0/C__%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE%E5%88%86%E4%BA%AB.html\"}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"D:/my-docs/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"关于我","index":false} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页","icon":"house"} }],
  ["/%E6%96%87%E7%AB%A0/C__%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE%E5%88%86%E4%BA%AB.html", { loader: () => import(/* webpackChunkName: "文章_C__开源项目分享.html" */"D:/my-docs/docs/.vuepress/.temp/pages/文章/C__开源项目分享.html.js"), meta: {"date":1745541381000,"category":["开源代码"],"tag":["开源代码"],"excerpt":"<h2><a class=\"header-anchor\" href=\"#高性能日志库-spdlog\"><span>高性能日志库：</span></a><a href=\"https://github.com/gabime/spdlog/\" target=\"_blank\" rel=\"noopener noreferrer\">SpdLog</a></h2>\n<h2><a class=\"header-anchor\" href=\"#高性能通用-mpmc-无锁队列-concurrentqueue\"><span>高性能通用 MPMC 无锁队列：</span></a><a href=\"https://github.com/cameron314/concurrentqueue\" target=\"_blank\" rel=\"noopener noreferrer\">ConcurrentQueue</a></h2>","readingTime":{"minutes":0.49,"words":146},"title":"C++开源项目分享","type":"article"} }],
  ["/%E6%96%87%E7%AB%A0/%E4%BD%BF%E7%94%A8VuePress%E6%9E%84%E5%BB%BA%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E7%BD%91%E7%AB%99.html", { loader: () => import(/* webpackChunkName: "文章_使用VuePress构建个人知识网站.html" */"D:/my-docs/docs/.vuepress/.temp/pages/文章/使用VuePress构建个人知识网站.html.js"), meta: {"date":1745115358000,"category":["建站","VuePress"],"tag":["建站","VuePress"],"excerpt":"<p>VuePress 是一个基于 Vue.js 的静态网站生成器，最初由 Vue.js 核心团队成员 Evan You (尤雨溪) 创建，主要用于编写技术文档，但现已发展为一个功能强大的静态站点生成工具。适合构建个人网站、博客或文档站点。下面详细记录构建过程！</p>\n<h2>创建项目</h2>\n<p><strong>第一步：安装 Node.js。</strong></p>\n<p>MacOS 使用 HomeBrew 安装。</p>\n<div class=\"language-shell line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"shell\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span style=\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\"># 安装node</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\">brew</span><span style=\"--shiki-light:#50A14F;--shiki-dark:#98C379\"> install</span><span style=\"--shiki-light:#50A14F;--shiki-dark:#98C379\"> node</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\">node</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\"> -v</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\">npm</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\"> -v</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\"># 升级npm</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\">npm</span><span style=\"--shiki-light:#50A14F;--shiki-dark:#98C379\"> install</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\"> -g</span><span style=\"--shiki-light:#50A14F;--shiki-dark:#98C379\"> npm@11.3.0</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","readingTime":{"minutes":10.87,"words":3261},"title":"使用VuePress构建个人知识网站","type":"article"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/my-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/%E6%96%87%E7%AB%A0/", { loader: () => import(/* webpackChunkName: "文章_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/文章/index.html.js"), meta: {"title":"文章"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类","index":false} }],
  ["/category/%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81/", { loader: () => import(/* webpackChunkName: "category_开源代码_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/category/开源代码/index.html.js"), meta: {"title":"开源代码 分类","index":false} }],
  ["/category/%E5%BB%BA%E7%AB%99/", { loader: () => import(/* webpackChunkName: "category_建站_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/category/建站/index.html.js"), meta: {"title":"建站 分类","index":false} }],
  ["/category/vuepress/", { loader: () => import(/* webpackChunkName: "category_vuepress_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/category/vuepress/index.html.js"), meta: {"title":"VuePress 分类","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签","index":false} }],
  ["/tag/%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81/", { loader: () => import(/* webpackChunkName: "tag_开源代码_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/tag/开源代码/index.html.js"), meta: {"title":"标签: 开源代码","index":false} }],
  ["/tag/%E5%BB%BA%E7%AB%99/", { loader: () => import(/* webpackChunkName: "tag_建站_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/tag/建站/index.html.js"), meta: {"title":"标签: 建站","index":false} }],
  ["/tag/vuepress/", { loader: () => import(/* webpackChunkName: "tag_vuepress_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/tag/vuepress/index.html.js"), meta: {"title":"标签: VuePress","index":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"文章","index":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/star/index.html.js"), meta: {"title":"星标","index":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/my-docs/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"时间轴","index":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
