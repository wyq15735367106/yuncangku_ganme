<template>
  <div class="haoyou">
    <div class="imgs" @click="fanhui">
      <img src="../../static/image/fanhui.png" alt />
    </div>
    <!-- 电动车 -->
    <div class="mo">
      <img src="../../static/image/mo.gif" alt />
      <div class="shop">
        <img :src="gpicname" alt />
      </div>
    </div>
    <!-- 详情 -->
    <div class="xianyuan">
      <p class="xiang van-multi-ellipsis--l2">{{gname}}</p>
      <p class="qing" @click="shop(gid)" v-if="gname!='暂无'">查看详情 >></p>
    </div>
    <div class="huakuai">
      <!-- <van-slider v-model="value" active-color="#ffbe47" disabled /> -->
      <div class="progress progress-striped active">
        <div
          ref="jindu"
          id="jindu"
          class="progress-bar progress-bar-success"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span class="sr-only">40% 完成</span>
        </div>
      </div>
      <p class="shu12">{{in_total}}km/{{total}}km</p>
    </div>
    <div class="lan" @click="lanqiyou">
      <img src="../../static/image/lan.png" alt />
    </div>
    <!-- 蓝汽油 -->
    <div class="huodong2">
      <van-popup
        v-model="show3"
        round
        closeable
        close-icon="close"
        close-icon-position="bottom-right"
        :closeOnClickOverlay="close"
      >
        <div class="huo huo2">
          <div class="shu2 shu3">
            <img src="../../static/image/qi5.png" alt />
          </div>
          <p class="qi1">当前拥有：{{blue}}桶</p>
          <div class="inp">
            <!-- <input type="number" placeholder="请输入加油数量" v-model="num" /> -->
            <van-field v-model="num" placeholder="请输入加油数量" type="number" />
          </div>
          <p class="qi3" @click="jiayou1">去加油</p>
        </div>
      </van-popup>
    </div>
    <p class="blue">x{{blue}}</p>
    <div class="lan1">
      <p>帮他加</p>
    </div>
  </div>
</template>
<script>
import storage from "good-storage";
import { Dialog } from "vant";
import { Field } from "vant";
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  name: "haoyou",
  data() {
    return {
      gname: "",
      blue: "",
      gpicname: "",
      total: "",
      in_total: "",
      value: 0,
      state_cy: "",
      wid: "",
      show3: false,
      close: false,
      num: "",
      value1: "",
    };
  },
  methods: {
    index: function () {
      this.$api.post(
        "wish/friends_home",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
          tid: this.$route.params.id,
        },
        (ret) => {
          this.gname = ret.data.data.gname;
          this.blue = ret.data.blue;
          this.gpicname = ret.data.data.picname;
          this.gid = ret.data.data.gid;
          this.total = ret.data.data.total;
          this.in_total = ret.data.data.in_total;
          this.value1 = this.in_total / this.total;
          this.value = this.value1 * 100;
          this.$refs.jindu.style.width = this.value + "%";
          //   this.state_cy = ret.data.state_cy;
          //   this.wid = ret.data.wid;
        }
      );
    },
    // 查看性情
    shop: function (id) {
      if (this.androidOrIos() == "android") {
        android.messagecallBack03(id);
      } else {
        let page = {
          id: id,
        };
        let pagestring = JSON.stringify(page);
        window.webkit.messageHandlers.regcallBack03.postMessage(pagestring);
      }
    },
    // 领商品
    // 蓝汽油
    lanqiyou: function () {
      this.show3 = true;
    },
    jiayou1: function () {
      console.log(this.$route.params.id);
      this.$api.post(
        "wish/friends_energy",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
          tid: this.$route.params.id,
          num: this.num,
        },
        (ret) => {
          this.show3 = false;
          console.log(ret);
          this.num = "";
          if (ret.code == "0") {
            Dialog.alert({
              message: ret.msg,
            });
          } else if (ret.code == "1") {
            Dialog.alert({
              message: ret.msg,
            });
            this.index();
          }
        }
      );
    },
    fanhui: function () {
      this.$router.go(-1);
    },
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
  mounted() {
    console.log(this.$route.params.id);
    this.index();
  },
};
</script>
<style  scoped>
.progress-bar-success {
  background-color: #ff7e00;
  border-radius: 0.5rem;
}
.progress {
  height: 100%;
  margin-bottom: 0;
  border-radius: 0.6rem;
}
.imgs {
  position: absolute;
  height: 0.34rem;
  width: 0.2rem;
  top: 0.5rem;
  left: 0.3rem;
}
.haoyou {
  position: relative;
  height: 100vh;
  width: 100%;
}
.mo {
  position: absolute;
  height: 4.2rem;
  width: 4rem;
  top: 40%;
  left: 16%;
}
.mo img {
  height: 100%;
  width: auto;
}

.xianyuan {
  position: absolute;
  height: 2.94rem;
  width: 3.1rem;
  top: 2.7rem;
  left: 0.8rem;
  background: url("../../static/image/yuan.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.xianyuan .xiang {
  font-size: 0.26rem;
  color: #5ba2dc;
  text-align: center;
  padding: 0.5rem;
  box-sizing: border-box;
  padding-bottom: 0;
  font-family: PingFang SC;
  font-weight: 400;
}
.qing {
  font-size: 0.22rem;
  color: #238fe7;
  text-align: center;
  margin-top: 0.2rem;
}
.huakuai {
  position: absolute;
  height: 0.26rem;
  width: 60%;
  left: 15%;
  bottom: 2.7rem;
  background: #fff;
  border-radius: 0.6rem;
  z-index: 99;
}
.shu12 {
  margin-top: 0.15rem;
  text-align: center;
  color: #408d96;
  font-size: 0.24rem;
}
.shop {
  position: absolute;
  height: 1rem;
  width: 1rem;
  left: 10%;
  top: 24%;
}
.shop img {
  height: 100%;
  width: 100%;
}
.lan {
  position: absolute;
  height: 1.31rem;
  width: 1.31rem;
  right: 0.6rem;
  top: 80vh;
}
.blue {
  position: absolute;
  right: 0.3rem;
  top: 79vh;
  color: #2e95ec;
}
.huo {
  background: #fff;
  width: 80%;
  margin: 0 auto;
  margin: 0.6rem;
  padding-bottom: 0.2rem;
  position: relative;
  border-radius: 0.2rem;
  padding: 0.4rem;
  box-sizing: border-box;
}
.shu {
  height: 1.2rem;
  width: 1.2rem;
  position: absolute;
  top: -0.6rem;
  z-index: 999999999;
  left: 36%;
}
.shu2 {
  height: 1.26rem;
  width: 100%;
  margin: 0.1rem auto;
  padding-top: 0.2rem;
  text-align: center;
}
.huo .shu2 p {
  font-size: 0.24rem;
  color: #3895bd;
  margin-bottom: 0.2rem;
}
.huo p:nth-child(5) {
  margin-bottom: 0;
}
img {
  height: 100%;
  width: auto;
}
.qi1 {
  font-size: 0.26rem;
  color: #53a9ed;
  text-align: center;
}
.qi3 {
  height: 0.72rem;
  width: 3rem;
  line-height: 0.72rem;
  text-align: center;
  margin: 0 auto;
  color: #ffffff;
  margin-top: 0.57rem;
  background: url("../../static/image/lan2.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.inp {
  height: 0.72rem;
  margin: 0 auto;
  background: rgba(233, 245, 255, 1);
  box-shadow: 0px 2px 8px 0px rgba(230, 230, 230, 0.35);
  border-radius: 10px;
  margin-top: 0.2rem;
  width: 100%;
  padding: 0.16rem 5%;
  box-sizing: border-box;
}
/* .inp input {
  height: 0.4rem;
  width: 90%;
  margin-top: 0.16rem;
  line-height: 0.36rem;
  box-sizing: border-box;
  font-size: 0.24rem;
  color: #238fe7;
  text-align: left;
  margin-left: 5%;
} */
input {
  background: none;
  outline: none;
  border: none;
  display: inline-block;
}
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #53a9ed;
  /* placeholder字体大小  */
  font-size: 0.24rem; /* placeholder位置  */
  line-height: 0.4rem;
}
.lan1 {
  position: absolute;
  height: 0.57rem;
  width: 1.2rem;
  top: 88vh;
  right: 0.65rem;
  background: url("../../static/image/lan1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.lan1 p {
  font-size: 0.24rem;
  color: #fff;
  line-height: 0.46rem;
  text-align: center;
}
</style>