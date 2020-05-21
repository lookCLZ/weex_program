<template>
  <div class="wrapper">
    <transition name="slide">
      <router-view />
    </transition>
    <div
      v-if="showBottomTabs"
      class="bottom-tab"
    >
      <div
        class="item"
        v-for="(item,index) in bottomTabs"
        :key="index"
      >
        <image
          :src="router == item.router ? item.activeImg : item.img"
          class="icon-tab"
          @click="$router.push(item.router)"
        />
        <text class="tab-text">{{item.text}}</text></div>
    </div>
  </div>
</template>

<script>
import { WxcTabBar } from "weex-ui";
import Config from "@/config.js";
export default {
  name: "App",
  components: { WxcTabBar },
  data() {
    return {
      bottomTabs: Config.bottomTabs,
      router: "/"
    };
  },
  computed: {
    showBottomTabs() {
      return Config.bottomTabsShowRouter.includes(this.router);
    }
  },
  watch: {
    $route() {
      this.router = this.$route.path;
    }
  },
  methods: {
    iconTab(item) {
      return this.$route.path == item.router ? item.activeImg : item.img;
    }
  }
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.bottom-tab {
  position: absolute;
  bottom: 0;
  display: flex;
  width: calc(100%);
  padding: 20px 10px;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px 10px 40px #ccc;
}
.icon-tab {
  width: 60px;
  height: 60px;
}
.tab-text {
  margin-top: 10px;
  font-size: 30px;
  color: #00bf8b;
}
</style>
