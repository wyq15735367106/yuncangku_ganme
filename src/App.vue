<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import storage from "good-storage";
export default {
  name: "App",
  methods: {
    androidOrIos() {
      const u = navigator.userAgent;
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isiOS) {
        return "ios";
      } else {
        return "android";
      }
    },
  },
  created() {},
};
</script>

<style>
@keyframes mymove {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -200vw;
  }
}
@-moz-keyframes mymove {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -200vw;
  }
}
@-webkit-keyframes mymove {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -200vw;
  }
}
@-ms-keyframes mymove {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -200vw;
  }
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-image: url(./assets/11.png);
  background-repeat: repeat-x;
  background-size: 200% 100%;
  animation: mymove 10s 0s linear infinite;
  -webkit-animation: mymove 10s 0s linear infinite;
  -ms-animation: mymove 10s 0s linear infinite;
  -o-animation: mymove 10s 0s linear infinite;
  -moz-animation: mymove 10s 0s linear infinite;
  -khtml-animation: mymove 10s 0s linear infinite;
}
</style>
