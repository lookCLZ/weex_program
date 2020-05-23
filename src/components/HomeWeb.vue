<template>
  <div class="wrapper">
    <div class="header">
      <text class="back" @click="goBack">返回</text>
      <text class="title">{{homeWebInfo.text}}录入</text>
    </div>
    <web
      class="web"
      src="https://dist.rechengparty.com/"
    ></web>
  </div>
</template>
<script>
export default {
  props:["homeWebInfo","setHomeWebShow"],
  methods:{
    goBack(){
      this.setHomeWebShow(false,null)
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.header {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: #fff;
}
.title {
  height: 80px;
  font-size: 40px;
  text-align: left;
  color: #00bf8b;
  line-height: 80px;
}
.back {
  color: #00bf8b;
  font-size:40px;
  line-height: 80px;
}
.web {
  width: 750px;
  position: absolute;
  top: 80px;
  bottom: 220px;
  right: 0px;
  left: 0px;
}
</style>