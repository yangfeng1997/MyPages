export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"开源代码\":{\"path\":\"/category/%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81/\",\"indexes\":[0]},\"建站\":{\"path\":\"/category/%E5%BB%BA%E7%AB%99/\",\"indexes\":[1]},\"VuePress\":{\"path\":\"/category/vuepress/\",\"indexes\":[1]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"开源代码\":{\"path\":\"/tag/%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81/\",\"indexes\":[0]},\"建站\":{\"path\":\"/tag/%E5%BB%BA%E7%AB%99/\",\"indexes\":[1]},\"VuePress\":{\"path\":\"/tag/vuepress/\",\"indexes\":[1]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

