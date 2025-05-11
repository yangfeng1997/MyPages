import comp from "D:/my-docs/src/.vuepress/.temp/pages/文章/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%96%87%E7%AB%A0/\",\"title\":\"文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文章\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"文章\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yangfeng1997.github.io/MyPages/%E6%96%87%E7%AB%A0/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ZOFUN\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文章\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
