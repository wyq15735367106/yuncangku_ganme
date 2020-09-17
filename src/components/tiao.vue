<template>
  <div id="tiao"></div>
</template>

<script>
import storage from "good-storage";
export default {
  name: "App",
  methods: {
    uidToken: function () {
      //   var url = window.location.href; //获取当前url
      //   var dz_url = url.split("#")[0]; //获取#/之前的字符串
      //   var cs = dz_url.split("?")[1]; //获取?之后的参数字符串
      //   var cs_arr = cs.split("&"); //参数字符串分割为数组
      //   var cs = {};

      //   for (var i = 0; i < cs_arr.length; i++) {
      //     //遍历数组，拿到json对象

      //     cs[cs_arr[i].split("=")[0]] = cs_arr[i].split("=")[1];
      //   }

      //   storage.set("token", cs.token);
      //   storage.set("uid", cs.uid);

      storage.set(
        "token",
        "C4VUMGKRgMWv7wuvCBUdv11i39NQeDDYX0XhD6FmdJuSAcOjWgmpWPH0pjrBB0F91wZrK1pDdTsjxpKWIgETNospwaPd2zO26hPhLOpNVFNerZxlaqrtqoU3PgIaFHgW"
      );
      storage.set("uid", "27");
      console.log(storage.get("token"));
      console.log(storage.get("uid"));
      this.$router.push({ name: "Index" });
    },
  },
  created() {
    this.uidToken();
  },
};
</script>

<style>
</style>
