<template>
  <div class="Index">
    <!-- 返回 -->
    <div class="imgs" @click="fanhui">
      <img src="../../static/image/fanhui.png" alt />
    </div>
    <!-- 规则 -->
    <div class="guize" @click="showPopup">
      <img src="../../static/image/guize.png" alt />
    </div>
    <!-- 活动规则 -->
    <div class="huodong">
      <van-popup
        v-model="show"
        round
        closeable
        close-icon="close"
        close-icon-position="bottom-right"
        :closeOnClickOverlay="close"
      >
        <div class="huo">
          <div class="shu">
            <img src="../../static/image/guize2.png" alt />
          </div>
          <div class="shu2">
            <img src="../../static/image/huodong.png" alt />
          </div>
          <p
            class="gui"
          >1、本活动为神仙买手官方提供的免费拿 商品活动，用户在平台挑选自己喜欢 的商品加入心愿单，并用交通工具完 成包裹运输，从而免费领取商品，获 得的商品可在记录中查看。</p>
          <p
            class="gui"
          >2、用户可通过每日签到获得1桶红汽油， 1桶蓝汽油，每邀请1位好友并实名 认证就送红蓝汽油各1桶，每日签到 获得的红蓝汽油，若当天未使用，5 点将会清零，邀请好友所获得的汽油 不清零，可累积。</p>
          <p class="gui">3、红汽油只能给自己加，蓝汽油只能给 好友加，当进度条满格时， 即可免费 领取商品。</p>
        </div>
      </van-popup>
    </div>
    <!-- 好友列表 -->
    <div class="hao" @click="haoyuo" :class="{'hao1':showmov}">
      <img src="../../static/image/hao.png" alt />
    </div>
    <!-- 删除心愿单 -->
    <div class="mov" @click="move" :class="{'mov1':showmov}">
      <img src="../../static/image/mov.png" alt />
    </div>
    <div class="huodong">
      <van-popup v-model="showMove" round :closeOnClickOverlay="close">
        <div class="huo">
          <div class="shu">
            <img src="../../static/image/liwu.png" alt />
          </div>
          <p class="moves">是否确认删除该心愿单</p>
          <div class="bax">
            <p class="queren" @click="moves">确认</p>
            <p class="quxiao" @click="quxiao">取消</p>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="tais">
      <van-popup
        round
        v-model="show7"
        position="bottom"
        :style="{ height: '50%' }"
        :closeOnClickOverlay="close"
        closeable
        close-icon="close"
      >
        <div class="dongtai1">
          <div class="tais">
            <img src="../../static/image/haoyou.png" alt />
          </div>
          <div class="lists listss">
            <div class="scrry" v-if="haoyou.length==0">
              <div class="bosss wushu">
                <img src="../../static/image/zwsj_kby.png" alt />
                <p>暂无数据~</p>
              </div>
            </div>
            <div class="scrry" v-if="haoyou.length>0">
              <p class="liebiao">好友列表</p>
              <div
                class="bossss bos2"
                v-for="(val,index) in haoyou"
                :key="index"
                @click="haoyous(val.id)"
              >
                <div class="name cl">
                  <div class="tou fl">
                    <img :src="val.picname" alt />
                  </div>
                  <div class="cen fl">
                    <p class="na">{{val.user}}</p>
                    <p class="nas van-ellipsis">心愿：{{val.gname}}</p>
                  </div>
                  <div class="rig fr">
                    <div class="cl tops">
                      <div class="img fl">
                        <img src="../../static/image/you1.png" alt />
                      </div>
                      <p class="fl nums">x{{val.blue}}</p>
                    </div>
                    <p class="bott">{{val.in_total}}km/{{val.total}}km</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <!-- 详情 -->
    <div class="xianyuan" v-if="gname!='暂无'">
      <p class="xiang van-multi-ellipsis--l2">{{gname}}</p>
      <p class="qing" @click="ling(wid)" v-show="state_cy=='1'">立即领取 >></p>
      <p class="qing" @click="shop(gid)" v-show="state_cy=='0'">查看详情 >></p>
    </div>
    <div class="xianyuan" v-if="gname=='暂无'">
      <p class="xiang van-multi-ellipsis--l2">{{gname}}</p>
    </div>
    <!-- 记录 -->
    <div class="ji" @click="jilu" :class="{'ji1':showmov}">
      <img src="../../static/image/js.png" alt />
    </div>
    <div class="tais">
      <van-popup
        round
        v-model="show6"
        position="bottom"
        :style="{ height: '50%' }"
        :closeOnClickOverlay="close"
        closeable
        close-icon="close"
      >
        <div class="dongtai1">
          <div class="tais">
            <img src="../../static/image/ji2.png" alt />
          </div>
          <div class="lists listss">
            <div class="scrry" v-if="lists.length>0">
              <div class="bossss" v-for="(val,index) in lists" :key="index">
                <div class="name cl">
                  <div class="telll fl">
                    <p class="geis van-ellipsis">{{val.gname}}</p>
                    <p class="timess">{{val.time}}</p>
                  </div>
                  <div class="fr tellls">
                    <p class="type" v-if="val.state_name=='进行中'" style="color:#30BB4D">进行中</p>
                    <p class="type" v-else>{{val.state_name}}</p>

                    <p
                      class="type types"
                      v-if="val.order_state=='1'"
                      style="color:'#1A8DFF"
                      @click="wish_oid(val.wish_oid)"
                    >查看物流</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="scrry" v-if="lists.length==0">
              <div class="bosss wushu">
                <img src="../../static/image/zwsj_kby.png" alt />
                <p>暂无数据~</p>
              </div>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <!-- 电动车 -->
    <div class="mo">
      <img src="../../static/image/mo.gif" alt />
      <div class="shop">
        <img :src="gpicname" alt />
      </div>
    </div>

    <!-- 领汽油 -->
    <div class="ling" @click="showPopup1">
      <img src="../../static/image/ling.png" alt />
    </div>
    <!-- 红汽油 -->
    <div class="huodong2">
      <van-popup
        v-model="show2"
        round
        closeable
        close-icon="close"
        close-icon-position="bottom-right"
        :closeOnClickOverlay="close"
      >
        <div class="huo huo2">
          <div class="shu2 shu3">
            <img src="../../static/image/qi4.png" alt />
          </div>
          <p class="qi1">成功领取{{hongqiyous}}桶红汽油</p>
          <p class="qi2">当前进度：{{in_total}}km/{{total}}km</p>
          <p class="qi3" @click="jiayou1">去加油</p>
        </div>
      </van-popup>
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
          <p class="qi1">成功领取{{lanqiyous}}桶蓝汽油</p>
          <p class="qi2">当前进度：{{in_total}}km/{{total}}km</p>
          <p class="qi3 qi4" @click="jiayou1">去加油</p>
        </div>
      </van-popup>
    </div>
    <!-- 红蓝汽油 -->
    <div class="huodong2 huodong3">
      <van-popup
        v-model="show4"
        round
        closeable
        close-icon="close"
        close-icon-position="bottom-right"
        :closeOnClickOverlay="close"
      >
        <div class="huo huo3">
          <p class="fen">分享给好友</p>
          <div class="box cl">
            <div class="fl weixin">
              <div class="image">
                <img src="../../static/image/weixin.png" alt />
              </div>
              <p>微信好友</p>
            </div>
            <div class="fl qq">
              <div class="image">
                <img src="../../static/image/QQ.png" alt />
              </div>
              <p>微信好友</p>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="lingss">
      <van-popup
        round
        v-model="show1"
        position="bottom"
        :style="{ height: '54%' }"
        :closeOnClickOverlay="close"
        closeable
        close-icon="close"
      >
        <div class="lings">
          <p class="zuo">做任务领汽油</p>
          <div class="list cl">
            <div class="left fl">
              <img src="../../static/image/qiyou.png" alt />
            </div>
            <div class="center fl">
              <p class="qian" style="margin-top: 0.26rem;">每日签到免费领取红汽油</p>
              <!-- <p class="dao">每日可领1次</p> -->
            </div>
            <div class="right fr">
              <img src="../../static/image/lings.png" @click="showPopup2" v-if="qiandao1" />
              <img src="../../static/image/yiling.png" alt v-else />
            </div>
          </div>

          <div class="list cl">
            <div class="left fl">
              <img src="../../static/image/qiyou2.png" />
            </div>
            <div class="center fl">
              <p class="qian" style="margin-top: 0.26rem;">每日签到免费领取蓝汽油</p>
              <!-- <p class="dao">每日可领1次</p> -->
            </div>
            <div class="right fr">
              <img src="../../static/image/lings.png" @click="showPopup3" v-if="qiandao2" />
              <img src="../../static/image/yiling.png" v-else />
            </div>
          </div>
          <div class="list cl">
            <div class="left fl">
              <img src="../../static/image/qiyou3.png" alt />
            </div>
            <div class="center fl">
              <p class="qian" style="margin-top: 0.26rem;">邀请好友领取红蓝汽油</p>
              <!-- <p class="dao">奖励1桶，每日可领1次</p> -->
            </div>
            <div class="right fr" @click="showPopup4">
              <img src="../../static/image/qings.png" alt />
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <!-- 动态 -->
    <div class="dong" @click="dongtai">
      <img src="../../static/image/dong.png" alt />
    </div>
    <div class="tais">
      <van-popup
        round
        v-model="show5"
        position="bottom"
        :style="{ height: '50%' }"
        :closeOnClickOverlay="close"
        closeable
        close-icon="close"
      >
        <div class="dongtai1">
          <div class="tais">
            <img src="../../static/image/tai.png" alt />
          </div>
          <div class="lists">
            <div class="scrry" v-if="data.length>0">
              <div class="bosss" v-for="(val,index) in data" :key="index">
                <p class="times1">{{val.date}}</p>
                <div class="name cl" v-for="(vall,index) in val.list" :key="index">
                  <div class="fl touxiang">
                    <img :src="vall.picname" alt />
                  </div>
                  <div class="tell1 fl" v-if="vall.type_cy==1">
                    <p class="gei" v-html="vall.remark"></p>
                    <p class="times">{{vall.time}}</p>
                  </div>
                  <div class="tell2 fl" v-if="vall.type_cy==2">
                    <p class="gei" v-html="vall.remark"></p>
                    <p class="times">{{vall.time}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="scrry" v-if="data.length==0">
              <div class="bosss wushu">
                <img src="../../static/image/zwsj_kby.png" alt />
                <p>暂无数据~</p>
              </div>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <!-- 红汽油 -->
    <div class="hong" @click="hongqiyou">
      <img src="../../static/image/hong.png" alt />
    </div>
    <!-- 桶 -->
    <div class="tong1">
      <p>{{red}}桶</p>
    </div>
    <!-- 蓝汽油 -->
    <div class="lan" @click="lanqiyou">
      <img src="../../static/image/lan.png" alt />
    </div>
    <div class="lan1">
      <p>{{blue}}桶</p>
    </div>
    <!-- 滑块 -->
    <p class="huakuai1">
      <img src="../../static/image/manjindu.png" alt />
    </p>
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
  </div>
</template>

<script>
import storage from "good-storage";
import { Dialog } from "vant";
import { Popup } from "vant";
import { Toast } from "vant";
import { Slider } from "vant";
import wx from "weixin-js-sdk";
import "../assets/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  name: "HelloWorld",
  data() {
    return {
      value: 50,
      showMove: false,
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      close: false,
      show5: false,
      show6: false,
      show7: false,
      showmov: false,
      gid: "",
      list: [
        {
          time: "8-20",
          tell: "1",
        },
        {
          time: "8-20",
          tell: "2",
        },
        {
          time: "8-20",
          tell: "1",
        },
      ],
      data: [],
      lists: [],
      haoyou: [],
      gname: "",
      red: "",
      blue: "",
      gpicname: "",
      total: "",
      in_total: "",
      qiandao1: true,
      qiandao2: true,
      state_cy: "",
      wid: "",
      value1: "",
      lanqiyous: "",
      hongqiyous: "",
    };
  },
  methods: {
    fanhui: function () {
      if (this.androidOrIos() == "android") {
        android.messagecallBack06();
      } else {
        let page = {
          id: "1",
        };
        let pagestring = JSON.stringify(page);
        window.webkit.messageHandlers.regcallBack06.postMessage(pagestring);
      }
    },
    hongqiyou: function () {
      this.$api.post(
        "wish/del_energy",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
          type: "1",
        },
        (ret) => {
          this.index();
          console.log(ret);
          Dialog.alert({
            title: "温馨提示",
            message: ret.msg,
          });
        }
      );
    },
    lanqiyou: function () {
      this.$api.post(
        "wish/del_energy",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
          type: "2",
        },
        (ret) => {
          this.index();
          console.log(ret);
          Dialog.alert({
            title: "温馨提示",
            message: ret.msg,
          });
        }
      );
    },
    // 规则
    showPopup: function () {
      this.show = true;
    },
    // 删除心愿单
    move: function () {
      this.showMove = true;
    },
    moves: function () {
      let _this = this;
      _this.$api.post(
        "wish/cancle",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          id: _this.wid,
        },
        (ret) => {
          console.log(ret);
          if (ret.code == "1") {
            Dialog.alert({
              title: "温馨提示",
              message: ret.msg,
            }).then(() => {
              _this.index();
              _this.energy_log();
              _this.friends();
              _this.wish_log();
              _this.is_energy();
              _this.showMove = false;
              // on close
            });
          } else if (ret.code == "0") {
            this.showMove = false;
            Dialog.alert({
              title: "温馨提示",
              message: ret.msg,
            });
          }
        }
      );
    },
    quxiao: function () {
      this.showMove = false;
    },
    showPopup1: function () {
      this.is_energy();
      this.show1 = true;
    },
    // 红汽油
    showPopup2: function () {
      this.$api.post(
        "wish/add_energy",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
          type: "1",
        },
        (ret) => {
          console.log(ret);
          if (ret.code == "1") {
            this.is_energy();
            this.index();
            this.hongqiyous = ret.data;
            if (this.qiandao1) {
              this.show2 = true;
            }
          } else if (ret.code == "0") {
            Dialog.alert({
              title: "温馨提示",
              message: ret.msg,
            });
          }
        }
      );
    },
    // 蓝汽油
    showPopup3: function () {
      this.$api.post(
        "wish/add_energy",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
          type: "2",
        },
        (ret) => {
          console.log(ret);
          if (ret.code == "1") {
            this.is_energy();
            this.index();
            this.lanqiyous = ret.data;
            if (this.qiandao2) {
              this.show3 = true;
            }
          } else if (ret.code == "0") {
            Dialog.alert({
              title: "温馨提示",
              message: ret.msg,
            });
          }
        }
      );
    },
    // 红蓝汽油
    showPopup4: function () {
      if (this.androidOrIos() == "android") {
        android.messagecallBack07();
      } else {
        let page = {
          id: "2",
        };
        let pagestring = JSON.stringify(page);
        window.webkit.messageHandlers.regcallBack07.postMessage(pagestring);
      }
      //   this.show4 = true;
    },
    jiayou1: function () {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
    },
    jiayou2: function () {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
    },
    jiayou3: function () {
      this.show1 = false;
      this.show2 = false;
      this.show4 = false;
      this.show3 = false;
    },
    // 动态
    dongtai: function () {
      this.energy_log();
      this.show5 = true;
    },
    // 记录
    jilu: function () {
      this.wish_log();
      this.show6 = true;
    },
    // 查看物流
    wish_oid: function (id) {
      //   alert(id);
      if (this.androidOrIos() == "android") {
        android.messagecallBack05(id);
      } else {
        let page = {
          id: id,
        };
        let pagestring = JSON.stringify(page);
        window.webkit.messageHandlers.regcallBack05.postMessage(pagestring);
      }
    },
    // 好友
    haoyuo: function () {
      this.friends();
      this.show7 = true;
    },
    // 商品详情
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
    // 领取
    ling: function (id) {
      //   alert("regcallBack04");
      if (this.androidOrIos() == "android") {
        android.messagecallBack04(id);
      } else {
        let page = {
          id: id,
        };
        let pagestring = JSON.stringify(page);
        window.webkit.messageHandlers.regcallBack04.postMessage(pagestring);
      }
    },
    lingqu: function (id) {
      if (this.androidOrIos() == "android") {
        android.messagecallBack040(id);
      } else {
        let page = {
          id: id,
        };
        let pagestring = JSON.stringify(page);
        window.webkit.messageHandlers.regcallBack040.postMessage(pagestring);
      }
    },
    // 主页
    index: function () {
      this.$api.post(
        "wish/is_exit",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
        },
        (ret) => {
          console.log(ret);
          this.gname = ret.data.gname;
          this.red = ret.data.red;
          this.blue = ret.data.blue;
          this.gpicname = ret.data.gpicname;
          this.gid = ret.data.gid;
          this.total = ret.data.total;
          this.in_total = ret.data.in_total;
          this.value1 = this.in_total / this.total;
          this.value = this.value1 * 100;
          this.$refs.jindu.style.width = this.value + "%";
          this.state_cy = ret.data.state_cy;
          this.wid = ret.data.wid;
          if (this.wid == 0) {
            this.showmov = true;
          } else {
            this.showmov = false;
          }
          console.log(this.wid);
        }
      );
    },
    // 动态列表
    energy_log: function () {
      this.$api.post(
        "wish/energy_log",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
        },
        (ret) => {
          console.log(ret);
          this.data = ret.data;
        }
      );
    },
    // 好友列表
    friends: function () {
      this.$api.post(
        "wish/friends",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
        },
        (ret) => {
          console.log(ret);
          this.haoyou = ret.data;
        }
      );
    },
    // 为好友加油
    haoyous: function (id) {
      this.$router.push({ name: "haoyou", params: { id: id } });
    },
    // 记录
    wish_log: function () {
      this.$api.post(
        "wish/wish_log",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
        },
        (ret) => {
          console.log(ret);
          this.lists = ret.data;
        }
      );
    },
    // 签到状态
    is_energy: function () {
      this.$api.post(
        "wish/is_energy",
        {
          uid: storage.get("uid"),
          token: storage.get("token"),
        },
        {
          uid: storage.get("uid"),
        },
        (ret) => {
          console.log(ret);
          if (ret.data.red == "1") {
            this.qiandao1 = false;
          } else if (ret.data.red == "0") {
            this.qiandao1 = true;
          }
          if (ret.data.blue == "1") {
            this.qiandao2 = false;
          } else if (ret.data.blue == "0") {
            this.qiandao2 = true;
          }
        }
      );
    },
    // 判断ios和android的方法
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
    this.index();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.imgs img {
  margin: 0;
}
.shu12 {
  margin-top: 0.15rem;
  text-align: center;
  color: #408d96;
  font-size: 0.24rem;
}
.wushu {
  margin: 0 auto;
  text-align: center;
}
.wushu img {
  height: 1.2rem;
  width: auto;
  margin: 0.2rem auto;
  display: inline-block;
}
.wushu p {
  margin-top: 0.1rem;
  text-align: center;
  font-size: 0.28rem;
  color: #b9bfcb;
}
.Index {
  height: 100%;
  width: 100vh;
}
.imgs {
  position: absolute;
  height: 0.34rem;
  width: 0.2rem;
  top: 0.5rem;
  left: 0.3rem;
}
img {
  height: 100%;
  width: auto;
}
.guize {
  position: absolute;
  height: 1.15rem;
  width: 1.11rem;
  top: 1.2rem;
  left: 0.2rem;
}
.tellls {
  width: 20%;
  text-align: center;
}
.mov {
  position: absolute;
  height: 1.1rem;
  width: 0.88rem;
  top: 1rem;
  right: 0.4rem;
}
.mov1 {
  display: none;
}
.hao {
  position: absolute;
  height: 1.16rem;
  width: 1.13rem;
  top: 2.3rem;
  right: 0.3rem;
}
.hao1 {
  position: absolute;
  height: 1.16rem;
  width: 1.13rem;
  top: 1.2rem;
  right: 0.3rem;
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
.ji {
  position: absolute;
  height: 1.16rem;
  width: 1.13rem;
  top: 3.6rem;
  right: 0.3rem;
}
.ji1 {
  position: absolute;
  height: 1.16rem;
  width: 1.13rem;
  top: 2.5rem;
  right: 0.3rem;
}
.mo {
  position: absolute;
  height: 4.2rem;
  width: 4rem;
  top: 40%;
  left: 16%;
}
.ling {
  position: absolute;
  height: 1.15rem;
  width: 0.91rem;
  left: 0.56rem;
  bottom: 0.53rem;
}
.dong {
  position: absolute;
  height: 1.15rem;
  width: 0.91rem;
  left: 2.13rem;
  bottom: 0.53rem;
}
.telll {
  width: 80%;
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
.huakuai1 {
  position: absolute;
  width: 50%;
  height: 0.3rem;
  left: 20%;
  bottom: 3rem;
  z-index: 99;
  text-align: center;
}
.huakuai1 img {
  height: 100%;
  width: auto;
  display: inline-block;
}
.hong {
  position: absolute;
  height: 1.31rem;
  width: 1.31rem;
  right: 0.26rem;
  bottom: 2.53rem;
}
.lan {
  position: absolute;
  height: 1.31rem;
  width: 1.31rem;
  right: 0.26rem;
  bottom: 0.84rem;
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
.tong1 {
  position: absolute;
  height: 0.57rem;
  width: 1.2rem;
  bottom: 2.1rem;
  right: 0.28rem;
  background: url("../../static/image/hong1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.tong1 p {
  text-align: center;
  font-size: 0.26rem;
  color: #fff;
}
.lan1 {
  position: absolute;
  height: 0.57rem;
  width: 1.2rem;
  bottom: 0.45rem;
  right: 0.28rem;
  background: url("../../static/image/lan1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.lan1 p {
  text-align: center;
  font-size: 0.26rem;
  color: #fff;
  line-height: 0.42rem;
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
  height: 0.6rem;
  width: 1.46rem;
  margin: 0.1rem auto;
  padding-top: 0.2rem;
}
.huo .shu2 p {
  font-size: 0.24rem;
  color: #3895bd;
  margin-bottom: 0.2rem;
}
.huo p:nth-child(5) {
  margin-bottom: 0;
}
.huodong .van-popup {
  width: 70%;
  background-color: rgba(0, 0, 0, 0);
}
.huodong .van-popup__close-icon--bottom-right {
  bottom: 0 !important;
  left: 42% !important;
}
.zuo {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.32rem;
  color: #333;
}
.list {
  width: 92%;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 0.2rem;
  background: #fff;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
}
.list .left {
  height: 0.9rem;
  width: 0.9rem;
  margin-right: 0.34rem;
}
.list .right {
  height: 0.8rem;
  width: 1.46rem;
  margin-top: 0.05rem;
}
.list .center {
  width: 48%;
}
.qian {
  font-size: 0.28rem;
  color: #333333;
  margin-top: 0.05rem;
}
.dao {
  font-size: 0.24rem;
  color: #666666;
  margin-top: 0.1rem;
}
.shu3 {
  height: 1.64rem;
  width: 1.3rem;
  margin: 0.1rem auto;
}
.huo2 .qi1 {
  font-size: 0.28rem;
  color: #333333;
  margin-top: 0.68rem;
  text-align: center;
}
.huo2 .qi2 {
  font-size: 0.24rem;
  color: #666;
  margin-top: 0.2rem;
  text-align: center;
}
.huo2 .qi3 {
  height: 0.72rem;
  width: 3rem;
  line-height: 0.72rem;
  text-align: center;
  margin: 0 auto;
  color: #ffffff;
  margin-top: 0.57rem;
  background: url("../../static/image/1111.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.huo2 .qi4 {
  background: url("../../static/image/lan2.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.huo2 {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}
.huo3 {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}
.fen {
  font-size: 0.3rem;
  color: #333333;
  text-align: center;
}
.weixin,
.qq {
  width: 50%;
}
.weixin img,
.qq img {
  height: 0.8rem;
  width: 0.8rem;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 0.1rem;
}
.weixin p,
.qq p {
  font-size: 0.28rem;
  color: #333333;
  text-align: center;
}
.huo3 {
  padding-bottom: 0.6rem;
}
.dongtai1 {
  position: relative;
  border-radius: 0.2rem;
  margin: 0.85rem 0;
  border-radius: 20px 20px 0 0;
  background: #fff;
}
.tais {
  height: 1.7rem;
  width: 1.7rem;
  position: absolute;
  /* top: -0.85rem; */
  z-index: 999999999;
  left: 39%;
}

.tais .van-popup {
  background-color: rgba(0, 0, 0, 0);
}
.lists {
  padding-top: 0.85rem;
  height: 38vh;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 20px 20px 0 0;
}
.scrry {
  /*设置在竖直方向上可滚动*/
  height: 37.5vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  /*火狐下隐藏滚动条*/
  overflow: -moz-scrollbars-none;
  padding: 0 0.2rem;
  box-sizing: border-box;
  padding-bottom: 2rem;
}
.scrry::-webkit-scrollbar {
  display: none;
}
.tell1 {
  background: url("../../static/image/huang.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 1.45rem;
  margin-left: 0.2rem;
  width: 86%;
  padding: 0.3rem 0.6rem;
  box-sizing: border-box;
}
.tell2 {
  background: url("../../static/image/huang1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 1.45rem;
  margin-left: 0.2rem;
  width: 86%;
  padding: 0.3rem 0.6rem;
  box-sizing: border-box;
}
.times1 {
  font-size: 0.26rem;
  color: #333333;
}
.touxiang {
  height: 0.65rem;
  width: 0.65rem;
  border-radius: 50%;
  margin-top: 0.38rem;
  overflow: hidden;
}
.gei {
  font-size: 0.28rem;
  /* color: #289dff; */
}
.times {
  font-size: 0.28rem;
  color: #666666;
  margin-top: 0.1rem;
}
.listss {
  background: #f8f8f8;
}
.bosss {
  margin-top: 0.1rem;
}
.bossss {
  background: #fff;
  border-radius: 0.2rem;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  padding: 0.3rem;
  box-sizing: border-box;
  margin-top: 0.1rem;
}
.geis {
  font-size: 0.28rem;
  color: #333;
}
.timess {
  font-size: 0.24rem;
  color: #333;
  margin-top: 0.1rem;
}
.type {
  font-size: 0.28rem;
  color: #333;
}
.types {
  font-size: 0.24rem;
  color: #1a8dff;
  text-align: center;
}
.liebiao {
  font-size: 0.28rem;
  color: #333;
  line-height: 0.6rem;
  background: #fff;
  padding: 0.1rem;
  box-sizing: border-box;
  background: #f8f8f8;
}
.tou {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.1rem;
}
.cen {
  width: 60%;
}
.rig {
  width: 20%;
}
.na {
  font-size: 0.28rem;
  color: #333;
}
.nas {
  font-size: 0.24rem;
  color: #333;
  margin-top: 0.1rem;
}
.tops .img {
  height: 0.3rem;
  width: 0.24rem;
  margin-right: 0.1rem;
}
.nums {
  font-size: 0.24rem;
  color: #2a96f1;
}
.bott {
  font-size: 0.24rem;
  color: #333333;
  margin-top: 0.15rem;
  line-height: 0.24rem;
}
.bos2 {
  margin-top: 0;
  background: #f8f8f8;
  border-top: 1px solid #eeeeee;
  border-radius: 0;
  margin-bottom: 0;
}
.image {
  text-align: center;
}
.bax {
  display: flex;
  justify-content: space-around;
  margin-top: 0.4rem;
}
.moves {
  margin-top: 0.4rem;
  color: #666666;
  font-size: 0.28rem;
  text-align: center;
}
.quxiao,
.queren {
  background: #238fe7;
  height: 0.56rem;
  width: 45%;
  line-height: 0.56rem;
  font-size: 0.28rem;
  text-align: center;
  color: #ffffff;
}
.queren {
  background: url("../../static/image/que.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.quxiao {
  background: url("../../static/image/qu.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #ff8c19;
}
.gui {
  font-size: 0.24rem;
  color: #3895bd;
  line-height: 0.35rem;
}
</style>
