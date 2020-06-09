<template>
  <scroller class="record-page">
    <div class="top-section">
      <text class="title-banner">记录</text>
      <div class="tab-title">
        <text
          class="tab-title-item"
          v-for="(item,index) in recordTab"
          :key="index"
          @click="handleToggle(item)"
        >{{item.title}}</text>
      </div>
      <div class="tab-title">
        <text
          v-if="active==='project'"
          class="tab-title-item-active"
        ></text>
        <text
          v-else
          class="tab-title-item-no-active"
        ></text>
        <text
          v-if="active==='scenic'"
          class="tab-title-item-active"
        ></text>
        <text
          v-else
          class="tab-title-item-no-active"
        ></text>
        <text
          v-if="active==='merchant'"
          class="tab-title-item-active"
        ></text>
        <text
          v-else
          class="tab-title-item-no-active"
        ></text>
      </div>
    </div>
    <scroller
      v-if="active==='project'"
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
    <scroller
      v-if="active==='scenic'"
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
    <scroller
      v-if="active==='merchant'"
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
  </scroller>
</template>
<script>
import Config from "@/config.js";
var stream = weex.requireModule("stream");

export default {
  data() {
    return {
      recordTab: Config.recordTab,
      active: "project",
      listShow: true,
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
        url: "http://rechengparty.com:9080/v1/project/list"
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
  },
  methods: {
    handleToggle(item) {
      this.active = item.key;
      this.listShow = false;
      let that = this;
      stream.fetch(
        {
          method: "GET",
          type: "json",
          url: "http://rechengparty.com:9080/v1/" + that.active + "/list"
        },
        function(ret) {
          that.ret = ret.data;
          if (that.ret.code == 200) {
            this.listShow = true;
            that.list = that.ret.data;
          }
        },
        function(res) {
          that.res = res;
        }
      );
    }
  }
};
</script>
<style scoped>
.record-page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.top-section {
  width: 750px;
  height: 320px;
  padding-top: 80px;
  padding-left: 25px;
  background-color: #00bf8b;
}
.title-banner {
  font-size: 50px;
  color: #fff;
}
.tab-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.tab-title-item {
  width: 150px;
  margin-top: 110px;
  color: #fff;
  font-size: 35px;
  padding-bottom: 5px;
  text-align: center;
}
.tab-title-item-active {
  width: 50px;
  height: 10px;
  border-bottom-width: 7px;
  border-bottom-style: solid;
  border-bottom-color: #fff;
}
.tab-title-item-no-active {
  width: 50px;
  height: 10px;
}
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
