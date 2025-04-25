export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[14,0,16,15,9,8,7,19,20,10,11,12,13,17,18,1,2,5,3,4,6,21,22,23,24,25,26,27,28,29]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[10,14,17,0]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[16,15,14,9,8,7,19,20,10,11,12,13,17,18,0]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

