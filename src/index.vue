<template>
  <div class="wrapper">
    <router-view />
    <wxc-tab-bar
      class="tab-wrapper"
      :tab-titles="tabTitles"
      :tab-styles="tabStyles"
      title-type="icon"
      @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected"
    >
      <!-- 第一个页面内容-->
      <div class="item-container"><text>首页</text></div>

      <!-- 第二个页面内容-->
      <div class="item-container"><text>特别推荐2222</text></div>

      <!-- 第三个页面内容-->
      <div class="item-container"><text>消息中心</text></div>

      <!-- 第四个页面内容-->
      <div class="item-container"><text>我的主页</text></div>
    </wxc-tab-bar>
  </div>
</template>

<script>
import { WxcTabBar } from "weex-ui";
import Config from "@/config.js";
export default {
  name: "App",
  components: { WxcTabBar },
  data() {
    return { tabTitles: Config.tabTitles, tabStyles: Config.tabStyles };
  },
  methods: {
    wxcTabBarCurrentTabSelected(e) {
      console.log(e.page);
      if (e.page == 0) {
        this.$router.push("/home");
      } else if (e.page == 1) {
        this.$router.push("/record");
      } else if (e.page == 2) {
        this.$router.push("/notice");
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.tab-wrapper {
  position: absolute !important;
  bottom: 0 !important;
  top: unset !important;
  box-shadow: 0px 10px 40px #ccc;
}
</style>
