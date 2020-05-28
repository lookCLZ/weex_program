<template>
  <scroller class="record-page">
    <div class="top-section">
      <text class="title-banner">记录</text>
      <div class="tab-title">
        <text
          :class="item.key===active?'tab-title-item-active tab-title-item':'tab-title-item'"
          v-for="(item,index) in recordTab"
          :key="index"
          @click="handleToggle(item)"
        >{{item.title}}</text>
      </div>
    </div>
  </scroller>
</template>
<script>
import Config from "@/config.js";
export default {
  data() {
    return {
      recordTab: Config.recordTab,
      active: "project"
    };
  },
  methods: {
    handleToggle(item) {
      this.active = item.key;
    }
  }
};
</script>
<style scoped>
.record-page {
}
.top-section {
  width: 750px;
  height: 320px;
  padding-top: 80px;
  padding-left: 25px;
  background-color: #00bf8b;
}
.title-banner {
  font-size: 50px;
  color: #fff;
}
.tab-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.tab-title-item {
  margin-top: 110px;
  color: #fff;
  font-size: 35px;
  padding-bottom: 5px;
}
.tab-title-item-active {
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: #fff;
}
</style>
