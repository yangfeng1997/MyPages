import comp from "D:/my-docs/src/.vuepress/.temp/pages/教程/计算机网络/计算机网络1.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%95%99%E7%A8%8B/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C1.html\",\"title\":\"计算机网络2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"计算机网络2\",\"category\":[\"计算机网络\"],\"tag\":[\"计算机网络\"],\"description\":\"为什么需要分布式共识算法？ 思考：现在你有一份随时变动的数据，需要确保它正确存储在网络的几台不同机器上，并且要保证数据是随时可用的，应该怎么做？ 在分布式环境下，可以不必去追求系统内所有节点在任何情况下的数据状态都一致，采用“少数服从多数”的原则，认为数据的变化被正确存储在系统中。因此，我们需要一种算法，能够让分布式系统内部暂时容忍节点存在不同的状态，...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"计算机网络2\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"烛风\\\",\\\"url\\\":\\\"https://yangfeng1997.github.io\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yangfeng1997.github.io/MyPages/%E6%95%99%E7%A8%8B/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ZOFUN\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"计算机网络2\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"为什么需要分布式共识算法？ 思考：现在你有一份随时变动的数据，需要确保它正确存储在网络的几台不同机器上，并且要保证数据是随时可用的，应该怎么做？ 在分布式环境下，可以不必去追求系统内所有节点在任何情况下的数据状态都一致，采用“少数服从多数”的原则，认为数据的变化被正确存储在系统中。因此，我们需要一种算法，能够让分布式系统内部暂时容忍节点存在不同的状态，...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"计算机网络\"}]]},\"readingTime\":{\"minutes\":6,\"words\":1799},\"filePathRelative\":\"教程/计算机网络/计算机网络1.md\",\"excerpt\":\"<h2>为什么需要分布式共识算法？</h2>\\n<p>思考：现在你有一份随时变动的数据，需要确保它正确存储在网络的几台不同机器上，并且要保证数据是随时可用的，应该怎么做？</p>\\n<p>在分布式环境下，可以不必去追求系统内所有节点在任何情况下的数据状态都一致，采用“少数服从多数”的原则，认为数据的变化被正确存储在系统中。因此，我们需要一种算法，能够让分布式系统内部暂时容忍节点存在不同的状态，但最终大多数节点的状态能够一致。这种让系统能最终表现出整体一致性的过程，就是各个节点的<strong>协商共识</strong>。</p>\\n<p>分布式共识算法广泛用在：分布式数据库确保数据的一致性，分布式系统集群管理，状态机复制等。</p>\",\"autoDesc\":true}")
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
