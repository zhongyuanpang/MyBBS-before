<template>
 <div class="container-fluid index_box" :style="{'background-image': 'url('+ bgImg +')'}">  
      <div class="welcome_box container">
                  <div class="line1">
                              <i class="el-icon-moon-night"></i>
                              <!-- &nbsp; -->
                              MBBS
                  </div>
                  <div class="line2">
                              <!-- 为编程小白提供的一个笔记学习平台 -->
                              授人以鱼不如 授人以渔
                  </div>
                  <div class="line3">
                              凡是能杀死你的，最终都会让你变强
                  </div>
                  <div class="line4">
                              <a href="./login">
                                    <p>
                                          <span class="bg"></span>
                                          <span class="base"></span>
                                          <span class="text">登录</span>
                                    </p>
                              </a>
                              <a class="white" href="./home">
                                    <p>
                                          <span class="bg"></span>
                                          <span class="base"></span>
                                          <span class="text"><i class="el-icon-ship"></i> 江湖</span>
                                    </p>
                              </a>
                              <a class="transparent" href="./about">
                                    <p>
                                          <span class="bg"></span>
                                          <span class="base"></span>
                                          <span class="text"><i class="el-icon-moon-night"></i> 关于我</span>
                                    </p>
                              </a>
                  </div>
                  <div class="info">
                        连续按5下 【C】 键可切换背景
                  </div>
      </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
   name:'index',
   data(){
         return{
            // 键盘按下c键总数   
            num:0,

            // 背景图片
            bgImg:null,

            islogin:null
         }
   },
   mounted(){
         if(localStorage.getItem("bgImg") == "" || localStorage.getItem("bgImg") == undefined){
                this.bgImg = "http://p8.qhimg.com/bdm/1024_768_85/t010f5087efedb39cbf.jpg"
         }else{
               this.bgImg = localStorage.getItem("bgImg")
         }

      //    let isLogin = localStorage.getItem("islogin");
      //    if(isLogin == false || isLogin == 'false'){
      //          this.islogin == true
      //    }else{
      //          this.islogin == false
      //    }
      //    switch (isLogin) {
      //       case false:
      //             this.islogin = true
      //             break;
      //       case true:
      //             this.islogin = false
      //             break;
      //       default:
      //              console.log(this.islogin,"............................................")
      //              break;
      //    }
        
         window.addEventListener("keydown", this.clickOther);
   },
   methods:{
      clickOther(e) {
            if(e.keyCode == 67){
                  this.num++;
            }
            if(this.num == 5){
                 this.num = 0
                 this.$request.getBC().then(res=>{
                       this.bgImg = res.data.msg
                       localStorage.setItem("bgImg",res.data.msg)
                 })
            //     return axios.get("http://192.168.8.123:8089/getBC").then(res=>{
            //            this.bgImg = res.data.msg
            //            localStorage.setItem("bgImg",res.data.msg)
            //     })
            }
       }
   },
   beforeDestroy() {  // 实例销毁之前对点击事件进行解绑
    window.removeEventListener('keydown', this.clickOther);
   }
}
</script>

<style lang="less" scoped>

      .index_box{
            max-height: 100%;
            height: 100vh;
            // background-image: url("http://p8.qhimg.com/bdm/1024_768_85/t010f5087efedb39cbf.jpg"); 
            background-position: center center; 
            background-repeat: no-repeat; 
            background-attachment: fixed;
            background-size: cover; 
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Advent Pro, helvetica neue, sans serif;

            .welcome_box{
                  height: 400px;
                  color: white;

                  .line1{
                        height: 150px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 3em;
                        font-weight: bold;
                        // font-family:'Muli';
                        
                  }
                  .line2{
                        height: 70px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 2em;
                  }
                  .line3{
                        height: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                  }
                  .line4{
                        display: -webkit-box;
                        display: flex;
                        height: 120px;
                        -webkit-box-align: center;
                              align-items: center;
                        -webkit-box-pack: center;
                              justify-content: center;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                              flex-flow: row;
                              position: relative;
                  }
                  .line4 a{
                        width: 100%;
                        max-width: 240px;
                        height: 64px;
                        padding: 5px;
                        font-size: 0.8rem;
                        font-weight: 900;
                        color: white;
                        text-align: center;
                        text-transform: uppercase;
                        text-decoration: none;
                        // box-shadow: 0 0 0 1px inset rgba(236, 232, 225, 0.3);
                        position: relative;
                        margin: 10px 0;
                  }

                  .line4 a p{
                        border-radius: 7px;
                  }

                  .line4 a p:nth-child(1){
                        background-color: #28c58d;
                        box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
                  }

                  .line4 a.white:hover > p {
                  color: #ece8e1;
                  }
                  .line4 a.white > p {
                  background: #4b2b8a;
                  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
                  color: white;
                  }
                  .line4 a.white > p span.base {
                  // border: 1px solid transparent;
                  }
                  .line4 a.transparent:hover > p {
                  color: #ece8e1;
                  }
                  .line4 a.transparent:hover > p span.text {
                  box-shadow: 0 0 0 1px #ece8e1;
                  }
                  .line4 a.transparent > p {
                  background: #b1149e;
                  color: #ece8e1;
                  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
                  }
                  .line4 a.transparent > p span.base {
                  // border: 1px solid #ece8e1;
                  }
                  .line4 a:after, .line4 a:before {
                  content: "";
                  width: 1px;
                  position: absolute;
                  height: 8px;
                  background: #0f1923;
                  left: 0;
                  top: 50%;
                  -webkit-transform: translateY(-50%);
                        transform: translateY(-50%);
                  }
                  .line4 a:before {
                  right: 0;
                  left: initial;
                  }
                  .line4 a p {
                  margin: 0;
                  height: 54px;
                  line-height: 54px;
                  box-sizing: border-box;
                  z-index: 1;
                  left: 0;
                  width: 100%;
                  position: relative;
                  overflow: hidden;
                  }
                  .line4 a p span.base {
                  box-sizing: border-box;
                  position: absolute;
                  z-index: 2;
                  width: 100%;
                  height: 100%;
                  left: 0;
                  // border: 1px solid #ffff;
                  }
                  .line4 a p span.base:before {
                  content: "";
                  width: 2px;
                  height: 2px;
                  left: -1px;
                  top: -1px;
                  background: #0f1923;
                  position: absolute;
                  -webkit-transition: 0.3s ease-out all;
                  transition: 0.3s ease-out all;
                  }
                  .line4 a p span.bg {
                  left: -5%;
                  position: absolute;
                  background: #ff4655;
                  width: 0;
                  height: 100%;
                  z-index: 3;
                  -webkit-transition: 0.3s ease-out all;
                  transition: 0.3s ease-out all;
                  -webkit-transform: skewX(-10deg);
                        transform: skewX(-10deg);
                  }
                  .line4 a p span.text {
                  z-index: 4;
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  left: 0;
                  top: 0;
                  }
                  .line4 a p span.text:after {
                  content: "";
                  width: 4px;
                  height: 4px;
                  right: 0;
                  bottom: 0;
                  background: #0f1923;
                  position: absolute;
                  -webkit-transition: 0.3s ease-out all;
                  transition: 0.3s ease-out all;
                  z-index: 5;
                  }
                  .line4 a:hover {
                  color: #ece8e1;
                  }
                  .line4 a:hover span.bg {
                  width: 110%;
                  }
                  .line4 a:hover span.text:after {
                  background: #ece8e1;
                  }
                  .info{
                        text-align: center;
                        font-size: 0.8em;
                        color: rgba(255, 255, 255, 0.55);
                        font-family: Advent Pro, helvetica neue, sans serif;
                        font-weight: 500;
                        text-transform: uppercase;
                        -webkit-font-smoothing: antialiased;
                        -webkit-animation: opacity infinite 12s;
                        animation: opacity infinite 12s;
                  }
            }
      }

      
@-webkit-keyframes opacity {
    0%, 4% {
        opacity: 0;
    }
    18%,
    81% {
        opacity: 1;
    }
    92%,
    100% {
        opacity: 0;
    }
}
@keyframes opacity {
    0%, 4% {
        opacity: 0;
    }
    18%,
    81% {
        opacity: 1;
    }
    92%,
    100% {
        opacity: 0;
    }
}
</style>
