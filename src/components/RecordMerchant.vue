<template>
  <scroller
    scroll-direction="horizontal"
    class="lists-detail"
  >
    <div
      v-for="item in list"
      :key="item"
      class="list-detail"
    >
      <text
        v-for="(v,k,i) in item"
        :key="i"
        class="list-item"
      >{{v}}</text>
    </div>
  </scroller>
</template>
<script>
var stream = weex.requireModule("stream");

export default {
  data() {
    return {
      ret: {},
      res: {},
      list: []
    };
  },
  created() {
    stream.fetch(
      {
        method: "GET",
        type: "json",
        url: "http://rechengparty.com:9080/v1/merchant/list"
      },
      function(ret) {
        that.ret = ret.data;
        if (that.ret.code == 200) {
          that.list = that.ret.data;
        }
      },
      function(res) {
        that.res = res;
      }
    );
  }
};
</script>
<style scoped>
.lists-detail {
  width: 1500px;
  margin-top: 30px;
  display: flex;
}
.list-detail {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.list-item {
  height: 60px;
}
</style>