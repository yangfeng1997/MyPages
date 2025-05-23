import comp from "D:/my-docs/src/.vuepress/.temp/pages/datastruct/分布式共识算法.html.vue"
const data = JSON.parse("{\"path\":\"/datastruct/%E5%88%86%E5%B8%83%E5%BC%8F%E5%85%B1%E8%AF%86%E7%AE%97%E6%B3%95.html\",\"title\":\"分布式共识算法基础\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"分布式共识算法基础\",\"category\":[\"分布式\"],\"tag\":[\"分布式\"],\"description\":\"为什么需要分布式共识算法？ 思考：现在你有一份随时变动的数据，需要确保它正确存储在网络的几台不同机器上，并且要保证数据是随时可用的，应该怎么做？ 在分布式环境下，可以不必去追求系统内所有节点在任何情况下的数据状态都一致，采用“少数服从多数”的原则，认为数据的变化被正确存储在系统中。因此，我们需要一种算法，能够让分布式系统内部暂时容忍节点存在不同的状态，...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"分布式共识算法基础\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"烛风\\\",\\\"url\\\":\\\"https://yangfeng1997.github.io\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yangfeng1997.github.io/MyPages/datastruct/%E5%88%86%E5%B8%83%E5%BC%8F%E5%85%B1%E8%AF%86%E7%AE%97%E6%B3%95.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ZOFUN\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"分布式共识算法基础\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"为什么需要分布式共识算法？ 思考：现在你有一份随时变动的数据，需要确保它正确存储在网络的几台不同机器上，并且要保证数据是随时可用的，应该怎么做？ 在分布式环境下，可以不必去追求系统内所有节点在任何情况下的数据状态都一致，采用“少数服从多数”的原则，认为数据的变化被正确存储在系统中。因此，我们需要一种算法，能够让分布式系统内部暂时容忍节点存在不同的状态，...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"分布式\"}]]},\"readingTime\":{\"minutes\":5.99,\"words\":1798},\"filePathRelative\":\"datastruct/分布式共识算法.md\",\"excerpt\":\"<h2>为什么需要分布式共识算法？</h2>\\n<p>思考：现在你有一份随时变动的数据，需要确保它正确存储在网络的几台不同机器上，并且要保证数据是随时可用的，应该怎么做？</p>\\n<p>在分布式环境下，可以不必去追求系统内所有节点在任何情况下的数据状态都一致，采用“少数服从多数”的原则，认为数据的变化被正确存储在系统中。因此，我们需要一种算法，能够让分布式系统内部暂时容忍节点存在不同的状态，但最终大多数节点的状态能够一致。这种让系统能最终表现出整体一致性的过程，就是各个节点的<strong>协商共识</strong>。</p>\\n<p>分布式共识算法广泛用在：分布式数据库确保数据的一致性，分布式系统集群管理，状态机复制等。</p>\",\"autoDesc\":true}")
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
