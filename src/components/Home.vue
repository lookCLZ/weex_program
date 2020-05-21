<template>
  <div class="home-page">
    <div class="top-section">
      <text class="username">代先生</text>
      <div class="week-count">
        <div class="header">
          <text class="title">信息录入</text>
          <text class="during">(本周)</text>
        </div>
        <div class="detail">
          <div class="item">
            <text class="num">+22</text>
            <text class="text">项目信息</text>
          </div>
          <div class="item">
            <text class="num">+232</text>
            <text class="text">项目信息</text>
          </div>
          <div class="item">
            <text class="num">+221</text>
            <text class="text">项目信息</text>
          </div>
        </div>
      </div>
    </div>

    <div class="toggle-add">
      <div class="item">
        <image
          src="../img/logo-big.jpg"
          class="logo"
        />
        <text>项目</text>
      </div>
      <div>
        <image
          src="../img/logo-big.jpg"
          class="logo"
        />
        <text>景区</text>
      </div>
      <div>
        <image
          src="../img/logo-big.jpg"
          class="logo"
        />
        <text>商户</text>
      </div>
    </div>
  </div>
</template>
<script>
import { WxcButton } from "weex-ui";

export default {
  components: { WxcButton },

  data() {
    return {};
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
  border-radius: 0 0 15% 15%;
  background: #00bf8b;
  height: 350px;
}
.username {
  font-size: 50px;
  color: #fff;
  margin: 80px 0 0 25px;
}
.week-count {
  width: calc(100% - 50px);
  background: #fff;
  border-radius: 20px;
  margin: 0 auto;
  transform: translateY(50px);
  box-shadow: 0 0 20px 4px #ccc;
}
.week-count .header {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 40px 0 0 0;
}
.week-count .title {
  font-size: 40px;
  color: #333333;
  font-weight: 700;
}
.week-count .during {
  margin: 0 0 0 5px;
  font-size: 30px;
}
.week-count .detail {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-bottom: 40px;
}
.week-count .detail .item .num {
  font-weight: 800;
  font-size: 50px;
  color: #333333;
  margin-top: 30px;
}
.week-count .detail .item .text {
  font-size: 20px;
  color: #b4b4b4;
  text-align: center;
  margin-top: 18px;
}
</style>
