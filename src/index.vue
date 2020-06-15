<template>
  <div class="wrapper">
    <home />
  </div>
</template>

<script>
import Home from "@/components/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}
</style>
