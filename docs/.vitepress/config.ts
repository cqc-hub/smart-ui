const gitHub = "https://github.com/cqc-hub/smart-ui";

const sidebar = {
  "/": [
    { text: "首页", link: "/" },
    {
      text: "通用",
      items: [{ text: "Button 按钮", link: "/components/button/index" }],
    },
    { text: "导航" },
    { text: "反馈" },
    { text: "数据录入" },
    { text: "数据展示" },
    { text: "布局" },
  ],
};
const config = {
  themeConfig: {
    sidebar,
    siteTitle: "VitePress-Fun ✨",
    repo: gitHub,
    editLinkPattern: ":repo/tree/:branch/:path",
    socialLinks: [{ icon: "github", link: gitHub }],
  },

  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
