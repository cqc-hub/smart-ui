import SmartyUI from "../../../src/entry";
// import "vitepress-theme-demoblock/theme/styles/index.css";
import DefaultTheme from "vitepress/theme";

// 主题样式
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
// 插件的组件，主要是demo组件
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(SmartyUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};
