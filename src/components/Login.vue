<template>
  <div class="login-page">
    <image
      :src="logo"
      class="logo"
    />
    <div class="form">
      <input
        class="input"
        type="text"
        placeholder="用户名"
      >
      <input
        class="input"
        type="password"
        placeholder="密码"
      >
      <wxc-button
        text="登录"
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
      logo: getImg("logo_big.jpg")
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
.login-page {
  text-align: center;
}
.logo {
  height: 200px;
  margin-bottom: 40px;
}
.input {
  width: calc(100%);
  height: 80px;
  font-size: 50px;
  margin: 20px auto;
  padding-left: 20px;
  border: none;
  border-bottom: 2px solid rgb(255, 80, 0);
  outline: none;
}

.button {
  margin-top: 80px;
}
placeholder-color {
  color: red;
}
</style>
