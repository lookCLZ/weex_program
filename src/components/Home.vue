<template>
  <div class="login-page">
    <div>代勇明</div>
    <div class="week-count">
      <div class="title">
        <text>信息录入</text>
        <text>本周<text>
      </div>
      <div class="detail">
        <text class="item">
          <text>+2</text>
          <text>项目信息</text>
        </text>
        <text class="item">
          <text>+2</text>
          <text>项目信息</text>
        </text>
        <text class="item">
          <text>+2</text>
          <text>项目信息</text>
        </text>
      </div>
    </div>
    <div class="toggle-add">
      <text class="item">
        <image
          src="../img/logo-big.jpg"
          class="logo"
        />
        <text>项目</text>
      </text>
      <text>
        <image
          src="../img/logo-big.jpg"
          class="logo"
        />
        <text>景区</text>
      </text>
      <text>
        <image
          src="../img/logo-big.jpg"
          class="logo"
        />
        <text>商户</text>
      </text>
    </div>
  </div>
</template>
<script>
import { WxcButton } from "weex-ui";

export default {
  components: { WxcButton },

  data() {
    return {
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",
      logoImg: logoImg
    };
  }
};
</script>
<style scoped>
.logo {
  width: 424px;
  height: 200px;
}
.login-title {
  margin-top: 50px;
  text-align: center;
  font-size: 80px;
  color: rgb(255, 80, 0);
}
.input {
  width: 100%;
  height: 80px;
  font-size: 50px;
  margin: 20px auto;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 80, 0);
  border-radius: 4px;
}

.button {
  margin-top: 40px;
}
</style>
