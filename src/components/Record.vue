<template>
  <div class="login-page">
    <div>代勇明aaaaaaaa</div>
    <div class="week-count">
      <div class="title">
        <text>信息录入</text>
        <text>本周</text>
      </div>
      <div class="detail">
        <div class="item">
          <text>+2</text>
          <text>项目信息</text>
        </div>
        <div class="item">
          <text>+2</text>
          <text>项目信息</text>
        </div>
        <div class="item">
          <text>+2</text>
          <text>项目信息</text>
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
    return {
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
