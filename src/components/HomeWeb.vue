<template>
  <div class="wrapper">
    <wxc-minibar
      :title="src"
      background-color="#ffffff"
      text-color="#00bf8b"
      @wxcMinibarLeftButtonClicked="goBack"
    ></wxc-minibar>
    <web
      class="web"
      style="height:1000px"
      :src="src"
    ></web>
  </div>
</template>
<script>
import { WxcMinibar } from "weex-ui";

export default {
  props: ["homeWebInfo", "setHomeWebShow"],
  components: { WxcMinibar },
  data() {
    return {
      vh: "height:400px",
      src: ""
    };
  },
  mounted() {
    this.src = "https://dist.rechengparty.com?page=" + this.homeWebInfo.router;
  },
  methods: {
    goBack() {
      this.setHomeWebShow(false, null);
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: #fff;
}
.title {
  height: 80px;
  font-size: 40px;
  text-align: left;
  color: #00bf8b;
  line-height: 80px;
}
.back {
  color: #00bf8b;
  font-size: 40px;
  line-height: 80px;
}
.web {
  width: 750px;
}
</style>