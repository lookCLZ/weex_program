<template>
  <scroller class="record-page">
    <div class="top-section">
      <text class="title-banner">记录{{active}}</text>
      <div class="tab-title">
        <text
          class="tab-title-item"
          v-for="(item,index) in recordTab"
          :key="index"
          @click="handleToggle(item)"
        >{{item.title}}</text>
      </div>
      <div class="tab-title">
        <text
          v-if="active==='project'"
          class="tab-title-item-active"
        ></text>
        <text
          v-else
          class="tab-title-item-no-active"
        ></text>
        <text
          v-if="active==='scenic'"
          class="tab-title-item-active"
        ></text>
        <text
          v-else
          class="tab-title-item-no-active"
        ></text>
        <text
          v-if="active==='merchant'"
          class="tab-title-item-active"
        ></text>
        <text
          v-else
          class="tab-title-item-no-active"
        ></text>
      </div>
    </div>
    <scroller scroll-direction="horizontal" class="lists-detail">
      <div
        v-for="item in [13,4,5,5,6,3,4,5,5,6,3,43,4,5,5,63,4,5,5,6,3,4,5,5,6,3,43,4,5,5,6,3,4,5,5,6,3,4,3,4,5,5,6,3,43,4,5,5,6,3,4,5,5,6,3,4,3,4,5,5,6,3,4,5,5,6,3,4,5,5,6,3,4,5,5,6]"
        :key="item"
        class="list-detail"
      >
        <text class="list-item">成都欢乐谷游乐园</text>
        <text class="list-item">主题雷雨</text>
        <text class="list-item">240/人次</text>
        <text class="list-item">240/人次</text>
        <text class="list-item">240/人次</text>
        <text class="list-item">240/人次</text>
      </div>
    </scroller>
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
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
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
  width: 150px;
  margin-top: 110px;
  color: #fff;
  font-size: 35px;
  padding-bottom: 5px;
  text-align: center;
}
.tab-title-item-active {
  width: 50px;
  height: 10px;
  border-bottom-width: 7px;
  border-bottom-style: solid;
  border-bottom-color: #fff;
}
.tab-title-item-no-active {
  width: 50px;
  height: 10px;
}
.lists-detail {
  width: 1500px;
  margin-top:30px;
  display: flex;
}
.list-detail {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.list-item {
  height: 60px;
}
</style>
