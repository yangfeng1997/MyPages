import comp from "D:/my-docs/src/.vuepress/.temp/pages/posts/banana/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/banana/\",\"title\":\"Banana\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Banana\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Banana\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yangfeng1997.github.io/MyPages/posts/banana/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ZOFUN\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Banana\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
