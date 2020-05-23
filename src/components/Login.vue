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
const storage = weex.requireModule("storage");
const modal = weex.requireModule("modal");

export default {
  components: { WxcButton },

  data() {
    return {
      logo: getImg("logo_big.jpg")
    };
  },

  methods: {
    wxcButtonClicked() {
      storage.setItem("login", "success", res => {
        if (res.result == "success") {
          // 数据缓存成功后的操作
          modal.toast({
            message: res.result,
            duration: 2
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 500px;
  height: 150px;
  margin: 0 auto 40px;
}
.form {
  display: flex;
  align-items: center;
}
.input {
  width: 750px;
  height: 80px;
  font-size: 40px;
  margin: 20px auto;
  padding-left: 40px;
  border-bottom: 2px solid rgb(255, 80, 0);
  outline: none;
  placeholder-color: rgb(255, 80, 0);
}

.button {
  margin: 80px auto 0;
}
</style>
