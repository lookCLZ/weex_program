<template>
  <div class="login-page">
    <image
      :src="logo"
      class="logo"
    />
    <text>{{ret}}::::::</text>
    <div class="form">
      <input
        class="input"
        type="text"
        v-model="username"
        placeholder="用户名"
      >
      <input
        class="input"
        type="password"
        v-model="password"
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
var stream = weex.requireModule("stream");

export default {
  components: { WxcButton },

  data() {
    return {
      logo: getImg("logo_big.jpg"),
      username: "",
      password: "",
      ret:{},
      res:{},
    };
  },

  methods: {
    wxcButtonClicked() {
      let that=this
      stream.fetch(
        {
          method: "GET",
          url:
            "http://rechengparty.com:9080/v1/user/login?username=" +
            this.username +
            "&password=" +
            this.password
        },
        function(ret) {
          that.ret=ret.data
          if (that.ret.data.code == 200) {
            storage.setItem("login", "success", res => {
              if (res.result == "success") {
                modal.toast({
                  message: "账号验证通过",
                  duration: 2
                });
              }
            });
          } else {
            modal.toast({
              message: "账号未通过验证",
              duration: 2
            });
          }
        },
        function(res){
          that.res=res
        }
      );
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
