<template>
  <div class="login-page">
    <div
      class="abc"
      @click="logout"
    >代勇明bbbbbbb</div>
  </div>
</template>
<script>
const modal = weex.requireModule("modal");
const storage = weex.requireModule("storage");

export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      storage.removeItem("login", () => {
        modal.toast({
          message: "退出登录",
          duration: 2
        });
      });
    }
  }
};
</script>
<style scoped>
.abc {
  font-size: 380px;
}
</style>
