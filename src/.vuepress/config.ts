import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "模组文档",
  description: "稻草人的模组开发文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
