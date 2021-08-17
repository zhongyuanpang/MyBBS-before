<template>
  <!-- 粘性导航 -->
  <header>
    <a href="#" class="logo">code</a>
    <div class="navbar">
      <nuxt-link 
        v-on:click.native="isactive(0)"
        :class="{ active: isActive == 0 }"
        :to="{ name: 'home' }"
      >
        <span>江湖</span>
      </nuxt-link>
      <nuxt-link :to="{ name: 'about' }" v-on:click.native="isactive(1)" :class="{ active: isActive == 1 }"><span>关于我</span></nuxt-link>
      <nuxt-link :to="{ name: 'about' }" v-on:click.native="isactive(2)" :class="{ active: isActive == 2 }"><span>文章</span></nuxt-link>
      <nuxt-link :to="{ name: 'chat' }" v-on:click.native="isactive(3)" :class="{ active: isActive == 3 }"><span>聊天室</span></nuxt-link>
      <nuxt-link :to="{ name: 'about' }" v-on:click.native="isactive(4)" :class="{ active: isActive == 4 }"><span>问答</span></nuxt-link>
    </div>

    <div class="search">
        <input type="text" placeholder="想搜啥?">
        <a class="search-btn">
          <svg t="1628904762300" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2039" width="28" height="28"><path d="M400.696889 801.393778A400.668444 400.668444 0 1 1 400.696889 0a400.668444 400.668444 0 0 1 0 801.393778z m0-89.031111a311.637333 311.637333 0 1 0 0-623.331556 311.637333 311.637333 0 0 0 0 623.331556z" fill="#d81e06" p-id="2040"></path><path d="M667.904 601.998222l314.766222 314.823111-62.919111 62.976-314.823111-314.823111z" fill="#d81e06" p-id="2041"></path></svg>
        </a>
    </div>

    <div class="user_login">

      <div v-if="isLogin" style="display: flex; align-items: center">
        <div class="dropbtn">
          <el-avatar
            :src="user.avatar"
          ></el-avatar>
          <i class="el-icon-caret-bottom"></i>
        </div>

        <div class="dropdown-content">
          <nuxt-link :to="{ name: 'me' }" v-on:click.native="isactive(5)" :class="{ active: isActive == 5 }"
            ><div class="list_1">
              <i class="el-icon-s-home"></i> 进入主页
            </div></nuxt-link
          >
          <div class="nickname">{{ user.nickname }}</div>

          <div class="list_2">
            <div>
              <div>0</div>
              <div>文章</div>
            </div>
            <div>
              <div>0</div>
              <div>关注</div>
            </div>
            <div>
              <div>0</div>
              <div>粉丝</div>
            </div>
          </div>
          <div class="list_3">
            <nuxt-link :to="{ name: 'me' }" style="color: #858585">
              <div class="user_home">
                <span><i class="el-icon-s-home"></i> 个人中心</span>
              </div>
            </nuxt-link>
            <nuxt-link :to="{ name: 'me' }" style="color: #858585">
              <div class="user_account">
                <div><i class="el-icon-user-solid"></i> 账号</div>
                <div>12345</div>
              </div>
            </nuxt-link>
            <nuxt-link
              :to="{ name: 'me', query: { activeName: 'set' } }"
              style="color: #858585"
            >
              <div class="user_seeting">
                <sapn><i class="el-icon-setting"></i> 设置</sapn>
              </div>
            </nuxt-link>
          </div>
          <div class="list_4">
            <nuxt-link :to="{ name: 'login' }" style="color: #858585">
              <div class="out" @click="logout">
                <span><i class="iconfont icon-tuichu"></i> 退出</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <vs-button
        upload
        @click="$router.push({ name: 'login' })"
        v-if="!isLogin"
      >
        <i class="el-icon-s-custom"></i> &nbsp; 登录
      </vs-button>
    </div>
    <div style="display: flex; flex-direction: row">
      <el-button icon="el-icon-search" class="mb_menu" circle></el-button>
      <el-button
        icon="el-icon-s-unfold"
        @click="activeSidebar = !activeSidebar"
        class="mb_menu"
        circle
      ></el-button>
      <!-- <i class="el-icon-s-operation" ></i> -->
    </div>

    <!-- 侧边栏 -->
    <vs-sidebar absolut v-model="active" :open.sync="activeSidebar">
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class="bx bx-grid-alt"></i>
        </template>
        Market Overview
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <template #icon>
          <i class="bx bxs-music"></i>
        </template>
        Music
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-group"></i>
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram"></i>
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter"></i>
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          <template #icon>
            <i class="bx bxl-facebook"></i>
          </template>
          Facebook
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-code-alt"></i>
            </template>
            Coding
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="github">
          <template #icon>
            <i class="bx bxl-github"></i>
          </template>
          Github
        </vs-sidebar-item>
        <vs-sidebar-item id="codepen">
          <template #icon>
            <i class="bx bxl-codepen"></i>
          </template>
          Codepen
        </vs-sidebar-item>
        <vs-sidebar-item id="discord">
          <template #icon>
            <i class="bx bxl-discord"></i>
          </template>
          Discord
        </vs-sidebar-item>
        <vs-sidebar-item id="Javascript">
          <template #icon>
            <i class="bx bxl-javascript"></i>
          </template>
          Javascript
        </vs-sidebar-item>
        <vs-sidebar-item id="git">
          <template #icon>
            <i class="bx bxl-git"></i>
          </template>
          Git
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="donate">
        <template #icon>
          <i class="bx bxs-donate-heart"></i>
        </template>
        Donate
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <i class="bx bx-drink"></i>
        </template>
        Drink
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class="bx bxs-shopping-bags"></i>
        </template>
        Shopping
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat"></i>
        </template>
        Chat
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="../assets/images/log.jpeg" alt="" />
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge> 28 </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </header>
</template>
<script>
const Cookie = require("js-cookie");
import decode from "jwt-decode";
export default {
  name: "Header",
  data() {
    return {
      isActive: 0,
      //导航栏默认选中
      active: "index",

      //导航栏颜色
      dark: "dark",

      //侧边栏默认选中
      active: "home",

      //默认侧边栏隐藏
      activeSidebar: false,

      // 是否登录
      isLogin: false,

      // 存储用户信息
      user:{}
    };
  },
  mounted() {
    let auth = Cookie.get("auth");
    if (auth == undefined || auth == null) {
      localStorage.setItem("islogin", false);
    }

    this.decideLoginState();

    let isLogin = localStorage.getItem("islogin");

    if (isLogin == true || isLogin == "true") {
        let token = Cookie.get("auth")
        let decoded = decode(token)
        this.$store.commit("setUserInfo", JSON.parse(decoded.sub));
        this.user = this.$store.state.userInfo
    } else {
      this.isLogin = false;
    }

    window.addEventListener("scroll", () => {
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  },
  methods: {
    // 获取登录状态改变 登录与个人信息
    decideLoginState() {
        var oriSetItem = localStorage.setItem;
        localStorage.setItem = function(key, value) {
          //这里抛出自定义事件
          var event = new Event("setItemEvent");
          event.newKey = key;
          event.newValue = value;
          window.dispatchEvent(event);
          //实现原方法
          oriSetItem.apply(this, arguments);
        };
        window.addEventListener("setItemEvent", e => {
          this.isLogin = e.currentTarget.localStorage.islogin;
          if (this.isLogin == true || this.isLogin == "true") {
            let token = Cookie.get("auth")
            let decoded = decode(token)
            this.$store.commit("setUserInfo", JSON.parse(decoded.sub));
            this.user = this.$store.state.userInfo
          } else {
            this.isLogin = false;
          }
        });
        this.isLogin = localStorage.getItem("islogin");
    },
    // 导航栏状态
    isactive(index) {
      this.isActive = index;
    },
    // 退出登录
      logout(){
          localStorage.clear();
          Cookie.remove("auth");
          localStorage.setItem('islogin',false)
      }

  },
};
</script>

<style lang="less" scoped>
@media only screen and (min-width: 701px) and (max-width: 766px) {
  .navbar {
    display: none;
  }
  .search {
    display: none;
  }
  .user_login {
    display: none !important;
  }
  .mb_menu {
    display: block !important;
    font-size: 1.1em;
    position: relative;
    left: 80px;
    border: none !important;
    // background-color: rgba(0,0,0,0.06);
    color: #999999;
  }
}

@media only screen and (min-width: 380px) and (max-width: 700px) {
  .navbar {
    display: none;
  }
  .search {
    display: none;
  }

  header {
    height: 70px !important;
  }
  header.sticky {
    height: 50px !important;
  }
  .logo {
    margin-left: -80px;
  }
  .home {
    display: none;
  }
  .tag {
    display: none;
  }
  .type {
    display: none;
  }
  .about {
    display: none;
  }
  .user_login {
    display: none !important;
  }
  .mb_menu {
    display: block !important;
    font-size: 1.1em;
    position: relative;
    left: 80px;
    border: none !important;
    // background-color: rgba(0,0,0,0.06);
    color: #999999;
  }
}

//五、440分辨率以下（小于479px）
@media only screen and (max-width: 378px) {
  .navbar {
    display: none;
  }
  .search {
    display: none;
  }
  .user_login {
    display: none !important;
  }
  header {
    height: 70px !important;
  }
  header.sticky {
    height: 50px !important;
  }
  .logo {
    margin-left: -80px;
  }
  .home {
    display: none;
  }
  .tag {
    display: none;
  }
  .type {
    display: none;
  }
  .about {
    display: none;
  }
  .mb_menu {
    display: block !important;
    font-size: 1.5em;
    position: relative;
    left: 80px;
    border: none !important;
    // background-color: rgba(0,0,0,0.06);
    color: #999999;
  }
}

@media only screen and (min-width: 180px) and (max-width: 593px) {
  // .mb_menu{
  //   display: block !important;
  // }
  .login {
    display: none;
  }
}

// 去除nuxt-link下滑线
a {
  text-decoration: none;
}
// 选中导航样式
.active {
  font-size: 1.1em;
  font-weight: bold;
  border-bottom: 3px solid red;
  transition: .3s initial;
}
.nuxt-link-active {
  text-decoration: none;
}

.mb_menu {
  display: none;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.6s;
  padding: 10px 80px;
  z-index: 2;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3),
    0px 0px 20px rgba(0, 0, 0, 0.1) inset;
  .logo {
    position: relative;
    font-weight: 700;
    color: green;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0;
  }

  .navbar {
    padding: 0;
  }
  .navbar span {
    padding: 5px;
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
  .navbar span:hover {
    transition: 0.3s;
    // background-color: #eeeeee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  }

  .search {
    background: #2f3640;
    height: 40px;
    border-radius: 40px;
      &>input {
        border: none;
        background: none;
        outline: none;
        float: left;
        padding: 0;
        color: white;
        font-size: 0.8em;
        transition: .4s;
        line-height: 40px;
        width: 0px;
        text-indent: 5px;
      }
      .search-btn{
        color: #e84118;
        float: right;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #2f3640;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .4s;
        padding: 10px;
        border: none;
      }
  }
  .search:hover{
    &>input{
      width: 200px;
      padding: 0 6px;
    }
    .search-btn{
      background-color: white;
      border: none;
    }
  }

  .user_login {
    position: relative;
    display: inline-block;
    .dropbtn {
      z-index: 99;
      display: flex;
      align-items: center;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #fff;
      border-radius: 10px;
      width: 290px;
      box-shadow:  0px 5px 20px 0px rgba(0,0,0,0.3);
      // box-shadow:0 0 10px rgba(255, 0, 255, 255);
      top: -5px;
      left: -200px;

      .list_1 {
        padding: 10px;
        font-size: 0.8em;
        color: #999999;
      }
      .list_1:hover {
        color: gray;
      }
      .nickname{
        margin-top: 10px;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
      }
      .list_2 {
        padding: 5px;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      }
      .list_2 > div {
        padding: 5px;
        display: flex;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 0.9em;
        font-weight: bolder;
        // font-family:"黑体"
      }
      .list_2 > div:hover {
        background-color: rgba(0, 0, 0, 0.06);
        font-weight: bolder;
      }
      .list_3 {
        color: #858585 !important;
        font-size: 0.7em;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);

        .user_home {
          padding: 10px;
          display: flex;
          align-items: center;
        }
        .user_account {
          padding: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .user_account div:nth-child(1) {
          flex: 1;
          margin-left: -1px;
        }
        .user_seeting {
          padding: 10px;
          display: flex;
          align-items: center;
        }
      }
      .list_3 div {
        margin: 5px;
      }
      .list_3 div:hover {
        background-color: #eeeeee;
        color: #3d3d3d;
        font-weight: bold;
      }
      .list_4 {
        margin-top: 5px;
        color: #858585;
        font-size: 0.8em;
        .out {
          padding: 8px;
          margin: 5px;
        }
      }
      .list_4 div:hover {
        background-color: #eeeeee;
        color: #3d3d3d;
        font-weight: bold;
      }
    }
  }
  .user_login:hover {
    .dropdown-content {
      display: inline-block;
    }
  }
}
header.sticky {
  padding: 0px 100px;
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3),
    0px 0px 20px rgba(0, 0, 0, 0.1) inset;
}
header.sticky .logo,
header.sticky ul li a {
  color: #000;
}
</style>