<template>
  <div class="wrapper">
    <login v-if="!logged" />
    <operate v-if="logged" />
  </div>
</template>

<script>
import Operate from "@/components/Operate";
import Login from "@/components/Login";
import { WxcTabBar, Utils } from "weex-ui";
const storage = weex.requireModule("storage");
const modal = weex.requireModule("modal");

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
      let that = this;
      setInterval(() => {
        storage.getItem("login", res => {
          if (res.result == "success") {
            that.logged = true;
          } else {
            that.logged = false;
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
