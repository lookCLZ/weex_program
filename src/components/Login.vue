<template>
  <div class="login-page">
    <image
      :src="logo"
      class="logo"
    />
    <text class="login-title">登&nbsp;&nbsp;录</text>
    <div class="form">
      <input
        class="input"
        type="text"
        placeholder="  用户名"
      >
      <input
        class="input"
        type="password"
        placeholder="  密码"
      >
      <wxc-button
        text="确定"
        class="button"
        @wxcButtonClicked="wxcButtonClicked"
      ></wxc-button>
    </div>

  </div>
</template>
<script>
import { WxcButton } from "weex-ui";
import { getImg } from "@/tool.js";

export default {
  components: { WxcButton },

  data() {
    return {
      logo: getImg("logo-big.jpg")
    };
  },

  methods: {
    wxcButtonClicked() {}
  }
};
</script>
<style scoped>
.login-page {
  text-align: center;
}
.logo {
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
