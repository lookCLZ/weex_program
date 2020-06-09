<template>
  <wxc-tab-bar
    ref="wxc-tab-bar"
    :tab-titles="tabTitles"
    :tab-styles="tabStyles"
    :tab-icon-font-styles="tabIconFontStyles"
    title-type="icon"
    @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected"
  >
    <!-- 第一个页面内容-->
    <div
      class="item-container"
      :style="contentStyle"
    >
      <home
        v-if="!homeWebShow"
        :set-home-web-show="setHomeWebShow"
      />
      <home-web
        v-if="homeWebShow"
        :set-home-web-show="setHomeWebShow"
        :home-web-info="homeWebInfo"
      />
    </div>

    <!-- 第二个页面内容-->
    <div
      class="item-container"
      :style="contentStyle"
    >
      <record />
    </div>

    <!-- 第三个页面内容-->
    <div
      class="item-container"
      :style="contentStyle"
    >
      <!-- <notice /> -->
    </div>

    <!-- 第四个页面内容-->
    <div
      class="item-container"
      :style="contentStyle"
    >
      吧vvvvvv
    </div>
  </wxc-tab-bar>
</template>

<script>
import Home from "@/components/Home";
import Record from "@/components/Record";
import Notice from "@/components/Notice";
import HomeWeb from "@/components/HomeWeb";
import { WxcTabBar, Utils } from "weex-ui";
import Config from "@/config.js";

export default {
  components: { Home, Record, Notice, HomeWeb, WxcTabBar },
  data() {
    return {
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles,
      tabIconFontStyles: Config.tabIconFontStyles,
      homeWebShow: false,
      homeWebInfo:{},
    };
  },
  created() {
    const tabPageHeight = (env.deviceHeight / env.deviceWidth) * 750;
    const { tabStyles } = this;
    this.contentStyle = { height: tabPageHeight - tabStyles.height + "px" };
  },
  methods: {
    wxcTabBarCurrentTabSelected(e) {
      const index = e.page;
      // console.log(index);
    },
    setHomeWebShow(v,info) {
      this.homeWebShow = v;
      if (info===null){
        this.homeWebInfo={}
        return
      }
      this.homeWebInfo=info
    }
  }
};
</script>
<style scoped>
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: center;
}
</style>
