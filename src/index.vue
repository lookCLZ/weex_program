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
      let that = this
       that.logged = true;
      // setInterval(() => {
      //   storage.getItem("login", res => {
      //     if (res.result == "success") {
      //       that.logged = true;
      //     }
      //   });
      // }, 2000);
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
