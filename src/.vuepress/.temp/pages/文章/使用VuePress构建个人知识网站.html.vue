<template><div><p>VuePress 是一个基于 Vue.js 的静态网站生成器，最初由 Vue.js 核心团队成员 Evan You (尤雨溪) 创建，主要用于编写技术文档，但现已发展为一个功能强大的静态站点生成工具。适合构建个人网站、博客或文档站点。下面详细记录构建过程！</p>
<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2>
<p><strong>第一步：安装 Node.js。</strong></p>
<p>MacOS 使用 HomeBrew 安装。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装node</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">node</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 升级npm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> npm@11.3.0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows上，需要去官网上下载 node，点击 <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">下载地址</a> 左侧的绿色按钮 (LTS)。</p>
<p><strong>第二步：创建VuePress项目。</strong></p>
<p>注意：为了避免一些因为路径引起的字符编码问题，需要使用纯英文路径，如：<code v-pre>D:\my-docs</code>。</p>
<p>在终端执行如下命令：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> init</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope@latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> my-docs</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在初次创建项目过程中，可以选择语言，通过键盘↑和↓方向键，以及回车键选择。</p>
<figure><img src="@source/文章/使用VuePress构建个人知识网站.assets/image-20250428214312366.png" alt="image-20250428214312366" tabindex="0" loading="lazy"><figcaption>image-20250428214312366</figcaption></figure>
<p><strong>注意</strong>：为了后面部署到 github actions 上面，最好选择初始化仓库，并且部署 GitHub Pages 工作流。</p>
<p>在模板初始化成功后出现了一些 URL，你就可以在浏览器地址栏输入 <code v-pre>http://localhost:8080/</code> 访问开发服务器了。</p>
<p>项目创建的目录结构如下：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>.</span></span>
<span class="line"><span>├── .github                         (可选的) GitHub 配置文件存放路径</span></span>
<span class="line"><span>│    └── workflow → GitHub          工作流配置</span></span>
<span class="line"><span>│         └── docs-deploy.yml       自动部署文档的工作流</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── src →                           文档文件夹</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    ├── .vuepress                  (可选的) VuePress 配置文件夹</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── dist                  (默认的) 构建输出目录</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── public                (可选的) 静态资源目录</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── styles                (可选的) 用于存放样式相关的文件</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── config.{js,ts}        (可选的) 配置文件的入口文件</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    └── client.{js,ts}        (可选的) 客户端文件</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    ├── ...                        其他项目文档</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── README.md                  项目主页</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── package.json                    Nodejs 的配置文件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：使用此种方式会自动安装主题：vuepress-theme-hope。<a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">官方文档</a></p>
<h2 id="项目命令" tabindex="-1"><a class="header-anchor" href="#项目命令"><span>项目命令</span></a></h2>
<p><code v-pre>vuepress dev &lt;dir&gt;</code> 会启动一个开发服务器，以便在本地开发你的 VuePress 站点。</p>
<p><code v-pre>vuepress build &lt;dir&gt;</code> 会将你的 VuePress 站点构建成静态文件，以便进行后续部署。</p>
<p>因为上面已经安装了 VuePress Theme Hope 模板，就可以在 package.json 中发现下列三个命令：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "scripts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "docs:build"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress build src"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,                                </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// npm run docs:build 构建项目并输出</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "docs:clean-dev"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress dev src --clean-cache --clean-temp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// npm run docs:clean-dev 清除缓存并启动服务器</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "docs:dev"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress dev src"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">                                     // npm run docs:dev 启动服务器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>升级主题和 VuePress 版本，可以执行命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>npx vp-update</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2>
<p>VuePress 使用文档文件夹 <code v-pre>src </code>中的 <code v-pre>.vuepress</code> 文件夹存放配置。在 VuePress 中，有三种配置概念：</p>
<ul>
<li><strong>站点配置</strong>：站点配置中的配置项被 VuePress 直接读取，和主题无关且在所有主题均可生效。每一个站点都应该有它的 <code v-pre>lang</code>, <code v-pre>title</code> 和 <code v-pre>description</code> 等属性，因此 VuePress 内置支持了这些属性的配置。<a href="https://vuejs.press/zh/reference/config.html" target="_blank" rel="noopener noreferrer">参考文档</a></li>
<li><strong>主题配置</strong>：主题配置是你传递给 <code v-pre>hopeTheme</code> 函数的对象，它将由 VuePress Theme Hope 处理。<a href="https://theme-hope.vuejs.press/zh/config/theme/basic.html" target="_blank" rel="noopener noreferrer">参考文档</a></li>
<li><strong>页面配置</strong>：由在页面顶部基于 YAML 语法的 Frontmatter 提供。<a href="https://vuejs.press/zh/reference/frontmatter.html" target="_blank" rel="noopener noreferrer">参考文档</a></li>
</ul>
<p>具体选项参考的<a href="https://theme-hope.vuejs.press/zh/config/intro.html" target="_blank" rel="noopener noreferrer">配置介绍</a>，其中 <code v-pre>.vuepress/config.ts</code> (或 <code v-pre>.vuepress/config.js</code>) 是必要的配置文件（必须存在）。</p>
<p>模板中为了避免配置文件过长，会使用 JavaScript 原生提供的 ESM 特性：将主题配置、导航栏和侧边栏配置拆分到了单独的文件夹中。模板将主题函数抽离到了 <code v-pre>.vuepress/theme.ts</code> 中，并通过 <code v-pre>export default</code> 导出。</p>
<p>文件如下：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>config.ts       # 项目配置</span></span>
<span class="line"><span>navbar.ts       # 导航栏</span></span>
<span class="line"><span>sidebar.ts      # 侧边栏</span></span>
<span class="line"><span>theme.ts        # 主题配置</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将主题函数抽离到了 <code v-pre>.vuepress/theme.ts</code>，并通过 <code v-pre>export default</code> 导出。</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// theme.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "vuepress"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 此处放置配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在配置文件中直接引入抽离的 theme.ts：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// config.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 在这里引入主题</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> theme</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "./theme.js"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 这和 theme: hopeTheme({/* 主题配置 */}) 是等价的</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    theme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改主题样式" tabindex="-1"><a class="header-anchor" href="#修改主题样式"><span>修改主题样式</span></a></h2>
<p>VuePress Theme Hope 主题使用 <code v-pre>.vuepress/styles</code> 文件夹存放样式配置（<a href="https://theme-hope.vuejs.press/zh/config/style.html" target="_blank" rel="noopener noreferrer">参考文档</a>）。可以在此文件夹中：</p>
<ul>
<li>创建 <code v-pre>index.scss</code> 来注入额外的 CSS 样式。</li>
<li>创建 <code v-pre>config.scss</code> 来进行样式配置。</li>
<li>创建 <code v-pre>palette.scss</code> 来配置颜色与布局。</li>
</ul>
<h2 id="文档创建" tabindex="-1"><a class="header-anchor" href="#文档创建"><span>文档创建</span></a></h2>
<p>VuePress 是以 Markdown 为中心的。项目中的每一个 Markdown 文件都是一个单独的页面。默认情况下，页面的路由路径是根据 Markdown 文件的相对路径决定的。如果上面是通过创建助手生成的，默认会得到以下文件结构：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>└─ src</span></span>
<span class="line"><span>   ├─ demo</span></span>
<span class="line"><span>   │  ├─ ...</span></span>
<span class="line"><span>   │  └─ page.md</span></span>
<span class="line"><span>   │  └─ markdown.md</span></span>
<span class="line"><span>   │  └─ README.md</span></span>
<span class="line"><span>   ├─ ...</span></span>
<span class="line"><span>   └─ README.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Markdown 文件对应的路由路径为：</p>
<table>
<thead>
<tr>
<th>相对路径</th>
<th>路由路径</th>
</tr>
</thead>
<tbody>
<tr>
<td>/README.md</td>
<td>/</td>
</tr>
<tr>
<td>/demo/README.md</td>
<td>/demo/</td>
</tr>
<tr>
<td>/demo/page.md</td>
<td>/demo/page.html</td>
</tr>
</tbody>
</table>
<p><code v-pre>README.md</code> 是特例，在 Markdown 中，按照约定俗成，它会作为所在文件夹的主页。所以在渲染为网页时，它的对应路径为网页中的主页路径 <code v-pre>index.html</code>。</p>
<h2 id="github-pages部署" tabindex="-1"><a class="header-anchor" href="#github-pages部署"><span>github pages部署</span></a></h2>
<p>需要先说明的是，在创建过程中选择了创建自动部署文档的 GitHub 工作流，那么需要做的就是设置正确的 <strong>base 选项</strong>。如果你想让你的网站部署到一个子路径下，你将需要设置它。需要以斜杠开始并以斜杠结束。举例来说，如果你想将你的网站部署到 <code v-pre>https://xxx.github.io/bar/</code>，那么配置文件中的 <code v-pre>base</code> 应该被设置成 <code v-pre>&quot;/bar/&quot;</code>。</p>
<ol>
<li>如果你准备发布到 <code v-pre>https://&lt;USERNAME&gt;.github.io/</code>，你必须将整个项目上传至 <code v-pre>https://github.com/&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io</code> 仓库。在这种情况下你无需进行任何更改，因为 base 默认就是 <code v-pre>&quot;/&quot;</code>。</li>
<li>如果你的仓库地址是一个普通的形如 <code v-pre>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> 的格式，网站将会被发布到 <code v-pre>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说，你需要将 base 设置为 <code v-pre>&quot;/&lt;REPO&gt;/&quot;</code>。</li>
</ol>
<p>下面说明部署过程：</p>
<p><strong>第一步：获取 Personal Access Token</strong></p>
<p>进入个人github，依次点击：头像 -&gt; Settings -&gt; Developer settings -&gt; Personal Access Token -&gt; Tokens (classic)。</p>
<p>点击：Generate new token -&gt; New personal access token (classic) -&gt; 填写和勾选选项-&gt; Generate token。</p>
<figure><img src="@source/文章/使用VuePress构建个人知识网站.assets/image-20250428204048209.png" alt="image-20250428204048209" tabindex="0" loading="lazy"><figcaption>image-20250428204048209</figcaption></figure>
<p><strong>第二步：将代码推送到 Github</strong></p>
<p>使用 git 命令即可，比如本地文件夹是 my-docs，需要将 my-docs/ 下的文件全部推送到自己的仓库中。</p>
<p>在 my-docs 文件夹下执行如下命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span># 初始化仓库，在创建项目的时候已经执行过</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span># 添加远程仓库地址</span></span>
<span class="line"><span>git remote add origin https://github.com/yangfeng1997/MyPages</span></span>
<span class="line"><span># 若远程仓库已存在文件，需先拉取合并</span></span>
<span class="line"><span>git pull origin master --allow-unrelated-histories</span></span>
<span class="line"><span># 增加修改的文件</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m "new post"</span></span>
<span class="line"><span>git push -u origin master</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第三部：使用 Github Action 部署</strong></p>
<ol>
<li>
<p>添加 Repository secret，点击仓库的：Settings -&gt; Secrets and variables -&gt; Actions -&gt; Secrets -&gt; New repository secret。</p>
<figure><img src="@source/文章/使用VuePress构建个人知识网站.assets/image-20250428210606790.png" alt="image-20250428210606790" tabindex="0" loading="lazy"><figcaption>image-20250428210606790</figcaption></figure>
<figure><img src="@source/文章/使用VuePress构建个人知识网站.assets/image-20250428211039381.png" alt="image-20250428211039381" tabindex="0" loading="lazy"><figcaption>image-20250428211039381</figcaption></figure>
</li>
<li>
<p>点击 Action，选择新建一个自己的 workflow 配置文件（如果创建项目时选择初始化 Github pages 工作流，这一步可以忽略）。</p>
<figure><img src="@source/文章/使用VuePress构建个人知识网站.assets/image-20250428211453655.png" alt="image-20250428211453655" tabindex="0" loading="lazy"><figcaption>image-20250428211453655</figcaption></figure>
<p>如果在创建项目的时候选择初始化 Github pages 工作流，会自动生成 <code v-pre>.github\workflows\deploy-docs.yml</code> 文件，内容如下：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>name: 部署文档</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches:</span></span>
<span class="line"><span>      - master   # ⚠️注意：这里是你的仓库的分支，看清楚是 main 还是 master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>permissions:</span></span>
<span class="line"><span>  contents: write</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  deploy-gh-pages:</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - name: Checkout</span></span>
<span class="line"><span>        uses: actions/checkout@v4</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          fetch-depth: 0</span></span>
<span class="line"><span>          # 如果你文档需要 Git 子模块，取消注释下一行</span></span>
<span class="line"><span>          # submodules: true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: 设置 Node.js</span></span>
<span class="line"><span>        uses: actions/setup-node@v4</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          node-version: 22</span></span>
<span class="line"><span>          cache: npm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: 安装依赖</span></span>
<span class="line"><span>        run: |</span></span>
<span class="line"><span>          corepack enable</span></span>
<span class="line"><span>          npm ci</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: 构建文档</span></span>
<span class="line"><span>        env:</span></span>
<span class="line"><span>          NODE_OPTIONS: --max_old_space_size=8192</span></span>
<span class="line"><span>        run: |-</span></span>
<span class="line"><span>          npm run docs:build</span></span>
<span class="line"><span>          > src/.vuepress/dist/.nojekyll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: 部署文档</span></span>
<span class="line"><span>        uses: JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          # 部署文档</span></span>
<span class="line"><span>          branch: gh-pages</span></span>
<span class="line"><span>          folder: src/.vuepress/dist</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>等待 Action 执行完成，来到 Settings -&gt; Pages -&gt; Build and deployment 设置页面，选择 <code v-pre>gh-pages</code> 作为 GitHub Pages 的源。</p>
<figure><img src="@source/文章/使用VuePress构建个人知识网站.assets/image-20250428232536188.png" alt="image-20250428232536188" tabindex="0" loading="lazy"><figcaption>image-20250428232536188</figcaption></figure>
<p>接着你就可以在浏览器访问地址即可。比如：<a href="https://yangfeng1997.github.io/MyPages%E3%80%82" target="_blank" rel="noopener noreferrer">https://yangfeng1997.github.io/MyPages。</a></p>
</li>
</ol>
<h2 id="增加评论giscus" tabindex="-1"><a class="header-anchor" href="#增加评论giscus"><span>增加评论Giscus</span></a></h2>
<p>使用 giscus 增加评论，需要先满足如下三个步骤：</p>
<ol>
<li>使用 github 的公开仓库的评论区作为文档评论的存放点（私有仓库需要 GitHub Pro）。</li>
<li>需要先安装 giscus，安装只需访问 <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">giscus</a>，点击右边蓝色按钮 install，选择自己的 github 账户，点击 Only select repositories，选择自己刚才建的仓库，点击 install 即可。</li>
<li>仓库的 Discussions 功能已启用。点击 Setting，找到 Features，勾选上 Discussions。</li>
</ol>
<p>访问 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 官网</a> 进行配置：</p>
<ol>
<li>
<p>填写刚才创建的 GitHub 仓库（格式：username/repo）</p>
</li>
<li>
<p>选择 Discussions 分类（建议新建一个专门用于评论的分类）</p>
</li>
<li>
<p>配置其他选项：</p>
<ul>
<li>
<p>评论框位置（顶部/底部）</p>
</li>
<li>
<p>默认主题（light/dark/跟随系统）</p>
</li>
<li>
<p>语言</p>
</li>
<li>
<p>其他高级选项</p>
</li>
</ul>
</li>
<li>
<p>配置完成后，Giscus 会生成一段 JavaScript 代码，类似这样：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>&#x3C;script src="https://giscus.app/client.js"</span></span>
<span class="line"><span>        data-repo="yangfeng1997/MyGiscus"</span></span>
<span class="line"><span>        data-repo-id="R_kgDOOfso7Q"</span></span>
<span class="line"><span>        data-category="Announcements"</span></span>
<span class="line"><span>        data-category-id="DIC_kwDOOfso7c4Cpdyp"</span></span>
<span class="line"><span>        data-mapping="pathname"</span></span>
<span class="line"><span>        data-strict="0"</span></span>
<span class="line"><span>        data-reactions-enabled="1"</span></span>
<span class="line"><span>        data-emit-metadata="0"</span></span>
<span class="line"><span>        data-input-position="bottom"</span></span>
<span class="line"><span>        data-theme="preferred_color_scheme"</span></span>
<span class="line"><span>        data-lang="zh-CN"</span></span>
<span class="line"><span>        data-loading="lazy"</span></span>
<span class="line"><span>        crossorigin="anonymous"</span></span>
<span class="line"><span>        async></span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后将对应的字段配置加到自己的主题配置中即可！</p>
</li>
</ol>
<h2 id="typora插入图片" tabindex="-1"><a class="header-anchor" href="#typora插入图片"><span>Typora插入图片</span></a></h2>
<p>在使用 Markdwon 写作的时候，用的最多的工具大概是 Typora，一个最棘手的问题就是 Markdown 中的图片插入问题，因为 Markdown 中的图片仅为一个 URL，一般需要使用图床。</p>
<p>有的静态博客必须要将插入的图片放在 <code v-pre>public/images</code> 固定的路径下，这就造成在写作过程中，如果需要频繁的插入图片，将会非常繁琐，导致效率也大大降低。如果能将 Typora 写作时图片的自动插入路径和静态博客可读取的路径互相兼容，那么在 Typora 中看到的效果，就是静态博客中看到的效果。VuePress 中已经考虑到了这种情况，只需要对 Typora 的图片选项进行一定的设置，就可以完美兼容！</p>
<p><strong>方法1：使用 <code v-pre>public</code> 目录（不推荐）</strong></p>
<p>将图片放入 <code v-pre>.vuepress/public</code> 目录（如 <code v-pre>.vuepress/public/assets/post/example.jpg</code>）。引用时直接使用绝对路径：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>![图片描述](/assets/post/example.jpg)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Typora 设置：偏好设置 → 图像 → 选择 [复制到指定路径]。</p>
<p><strong>方法2：webpack 自动处理（推荐）</strong></p>
<p>与 Markdown 文件同级的 <code v-pre>./${filename}.assets</code> 文件夹，引用时引用的相对路径，webpack 会自动处理：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>![图片描述](markdown文件名.assets/example.jpg)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Typora 设置：偏好设置 → 图像 → 选择 [复制到指定路径]。路径名和方法 1 的绝对路径不同，而是同级相对路径。然后最重要的一点是，需要勾选 [为相对路径添加./]，因为 Markdown 以相对路径插入图片的语法就是以 <code v-pre>./</code> 开头，不勾选自动插入不能正常显示图片。</p>
<figure><img src="@source/文章/使用VuePress构建个人知识网站.assets/image-20250424011650104.png" alt="image-20250424011650104" tabindex="0" loading="lazy"><figcaption>image-20250424011650104</figcaption></figure>
<p>注意：<strong>文档文件名中不能有空格</strong>！！！</p>
<h2 id="增加rss支持" tabindex="-1"><a class="header-anchor" href="#增加rss支持"><span>增加RSS支持</span></a></h2>
<p>需要在配置中开启，只有在部署后才会显示页面，在开发环境中好像调不出来，</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>plugins: {</span></span>
<span class="line"><span>  feed: {</span></span>
<span class="line"><span>    rss: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，<code v-pre>@vuepress/plugin-feed</code> <strong>只在 <code v-pre>build</code>（生产构建）时生成 Feed 文件</strong>，而不会在 <code v-pre>dev</code>（开发服务器）模式下生成。<br>
如果你希望在本地开发时也能访问 <code v-pre>feed.rss</code>、<code v-pre>feed.atom</code> 或 <code v-pre>feed.json</code>，就必须显式设置 <code v-pre>devServer: true</code>。</p>
<h2 id="文章-frontmatter-模板" tabindex="-1"><a class="header-anchor" href="#文章-frontmatter-模板"><span>文章 Frontmatter 模板</span></a></h2>
<p>VuePress 中，<code v-pre>frontmatter</code> 是用于配置页面级元数据的核心概念，以 YAML 格式写在 Markdown 文件的顶部。允许你自定义页面的属性，比如标题、时间、标签、分类等。<a href="https://theme-hope.vuejs.press/zh/config/frontmatter/info.html" target="_blank" rel="noopener noreferrer">参考文档</a></p>
<p>一些常用的 frontmatter 属性如下：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>title:  							// 标题</span></span>
<span class="line"><span>date: 								// 时间 (如 2025-04-24 01:40:44)</span></span>
<span class="line"><span>description: xxx                  	// 页面描述</span></span>
<span class="line"><span>icon: 								// 页面文章的图标 (如 ::b:apple::)</span></span>
<span class="line"><span>author:  	                        // 作者，不填是默认博主</span></span>
<span class="line"><span>category:							// 分类，支持数组</span></span>
<span class="line"><span>  - HTML</span></span>
<span class="line"><span>  - Web</span></span>
<span class="line"><span>tag:								// 标签，支持数组</span></span>
<span class="line"><span>  - HTML</span></span>
<span class="line"><span>  - Web</span></span>
<span class="line"><span>article:							// 是否将该文章显示到文章列表，默认true</span></span>
<span class="line"><span>timeline:							// 是否将该文章显示到时间线，默认true</span></span>
<span class="line"><span>sticky:								// 是否在列表中置顶，当填入数字时，数字越大排名越靠前</span></span>
<span class="line"><span>star:								// 是否标为星标文章，当填入数字时，数字越大排名越靠前</span></span>
<span class="line"><span>cover:								// 页面的预览图</span></span>
<span class="line"><span>banner:								// 页面的宽屏分享图</span></span>
<span class="line"><span>license:							// 页面协议名称，默认主题选项中的值</span></span>
<span class="line"><span>copyright:							// 页面的版权信息，会在页脚中显示</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个常规的<strong>博客文章</strong>可以使用非常简洁的 frontmatter 模板：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>---</span></span>
<span class="line"><span>title: </span></span>
<span class="line"><span>date: </span></span>
<span class="line"><span>author: </span></span>
<span class="line"><span>category:</span></span>
<span class="line"><span>  - XXX</span></span>
<span class="line"><span>tag:</span></span>
<span class="line"><span>  - XXX</span></span>
<span class="line"><span>---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一些笔记什么的，就可以用下面的 frontmatter 模板：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>title: </span></span>
<span class="line"><span>date: </span></span>
<span class="line"><span>category:							// 分类，支持数组</span></span>
<span class="line"><span>  - HTML</span></span>
<span class="line"><span>tag:								// 标签，支持数组</span></span>
<span class="line"><span>  - HTML</span></span>
<span class="line"><span>article: false</span></span>
<span class="line"><span>timeline: false</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


