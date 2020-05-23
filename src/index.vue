<template>
  <div class="wrapper">
    <login v-if="!logged" />
    <Operate v-else />
  </div>
</template>

<script>
import Operate from "@/components/Operate";
import Login from "@/components/Login";
import { WxcTabBar, Utils } from "weex-ui";
import { setInterval } from "@/tool.js";
export default {
  name: "App",
  components: {
    Operate,
    Login
  },
  data() {
    return {
      logged: false
    };
  },
  mounted() {
    this.listenStorage();
  },
  methods: {
    listenStorage() {
      setInterval(() => {
        storage.getItem("login", res => {
          modal.toast({
            message: res.result,
            duration: 2
          });
          if (res.result == "success") {
            this.logged = true;
          }
        });
      }, 2000);
    }
  }
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
</style>
