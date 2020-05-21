<template>
  <div class="login-page">
    <div>代勇明</div>
    <div class="week-count">
      <div class="title">
        <span>信息录入</span>
        <span>本周<span>
      </div>
      <div class="detail">
        <span class="item">
          <span>+2</span>
          <span>项目信息</span>
        </span>
        <span class="item">
          <span>+2</span>
          <span>项目信息</span>
        </span>
        <span class="item">
          <span>+2</span>
          <span>项目信息</span>
        </span>
      </div>
    </div>
    <div class="toggle-add">
      <span class="item">
        <image
          src="../img/logo-big.jpg"
          class="logo"
        />
        <span>项目</span>
      </span>
      <span>
        <image
          src="../img/logo-big.jpg"
          class="logo"
        />
        <span>景区</span>
      </span>
      <span>
        <image
          src="../img/logo-big.jpg"
          class="logo"
        />
        <span>商户</span>
      </span>
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
