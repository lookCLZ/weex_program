<template>
  <div>
    <scroller
      scroll-direction="horizontal"
      class="lists-detail"
    >
      <div
        v-for="item in list"
        :key="item"
        class="aaa list-detail"
      >
        <text
          v-for="(v,k,i) in item"
          :key="i"
          class="list-item"
        >{{v}}</text>
      </div>
    </scroller>
  </div>
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
    let that = this;
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
  background-color: #f2f3f4;
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