<template>
  <scroller class="home-page">
    <div class="top-section">
      <div class="gray-bg">
        <text class="username">代先生</text>
      </div>
      <div class="week-count-wrapper">
        <div class="week-count">
          <div class="header">
            <text class="header-title">信息录入</text>
            <text class="header-during">(本周)</text>
          </div>
          <div class="detail-1">
            <div class="detail-item-1">
              <text class="detail-item-num">+22</text>
            </div>
            <div class="detail-item-1">
              <text class="detail-item-num">+232</text>
            </div>
            <div class="detail-item-1">
              <text class="detail-item-num">+221</text>
            </div>
          </div>
          <div class="detail-2">
            <text class="detail-item-text">项目信息</text>
            <text class="detail-item-text">景区信息</text>
            <text class="detail-item-text">商户信息</text>
          </div>
        </div>
      </div>
    </div>
    <div class="toggle-add">
      <div
        class="toggle-add-item"
        v-for="(item,index) in addRecords"
        :key="index"
      >
        <image
          :src="item.img"
          class="toggle-add-item-icon"
        />
        <text class="toggle-add-item-text">{{item.text}}</text>
      </div>
    </div>
    <text class="msg">即时动态</text>
    <list>
      <cell>
        <text>小二</text>
      </cell>
      <cell>
        <text>小二</text>
      </cell>
      <cell>
        <text>小二</text>
      </cell>
    </list>
  </scroller>
</template>
<script>
import { getImg } from "@/tool.js";
import Config from "@/config.js";

export default {
  data() {
    return {
      addRecords: Config.addRecords,
      html: getImg("a.xml")
    };
  },

  methods: {
    wxcButtonClicked() {
      this.$router.push("/home");
    }
  }
};
</script>
<style scoped>
.home-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.top-section {
  width: 750px;
  height: 540px;
  overflow: visible;
}
.gray-bg {
  width: 750px;
  height: 350px;
  background-color: #00bf8b;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
.username {
  font-size: 50px;
  color: #fff;
  margin: 80px 0 0 25px;
}
.week-count-wrapper {
  display: flex;
  align-items: center;
  transform: translateY(-130px);
}
.week-count {
  width: 700px;
  height: 280px;
  border-radius: 20px;
  box-shadow: 0 0 20px 4px #ccc;
  transform: translateY(0px);
  background-color: #fff;
}
.header {
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  margin: 40px 0 0 0;
}
.header-title {
  margin-left: 25px;
  font-size: 40px;
  color: #333333;
  font-weight: 700;
}
.header-during {
  margin: 0 0 0 5px;
  font-size: 30px;
}
.detail-1 {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.detail-item-1 {
  width: 140px;
  height: 80px;
}
.detail-item-num {
  font-weight: 800;
  font-size: 50px;
  color: #333333;
  margin-top: 30px;
}
.detail-item-text {
  font-weight: 400;
  font-size: 30px;
  color: #b4b4b4;
}
.detail-2 {
  margin-top: 30px;
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.toggle-add {
  position: sticky;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.toggle-add-item-icon {
  width: 120px;
  height: 120px;
}
.toggle-add-item-text {
  font-size: 30px;
  color: #333;
  text-align: center;
  margin-top: 10px;
}
.msg {
  font-size: 40px;
  color: #333333;
  font-weight: 700;
  margin: 50px;
}
</style>
