<template>
  <div class="login_box container-fluid">
    <div class="markBox" style="height: 67px; background: white"></div>
    <!-- <img src="http://p6.qhimg.com/bdm/1024_768_85/t01d8c526bbf7fdc905.jpg" width="100%" height="100%" alt=""> -->
    <div class="login">
      <div class="show_info col-md-5 col-xs-3">
        <div>
          <h3>欢迎登录</h3>
        </div>
      </div>
      <div class="login_in col-md-7">
        <div class="tab">
          <el-tabs v-model="activeName" :stretch="true">
            <el-tab-pane label="登录" name="login">
              <div class="login_form">
                <el-form
                  :model="lgForm"
                  status-icon
                  :rules="loginrules"
                  ref="lgForm"
                  class="demo-ruleForm loginForm"
                >
                  <el-form-item prop="loginusername" label="邮箱">
                    <el-input
                      v-model="lgForm.loginusername"
                      placeholder="请输入邮箱"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="loginpass">
                    <el-input
                      type="password"
                      v-model="lgForm.loginpass"
                      autocomplete="off"
                      placeholder="请输入密码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      class="loginBtn"
                      type="danger"
                      @click="signInForm"
                      >登录</el-button
                    >
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>

            <el-tab-pane label="注册" name="register">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="70px"
                class="demo-ruleForm registerForm"
              >
                <el-form-item prop="username" label="邮箱">
                  <el-input
                    v-model="ruleForm.username"
                    placeholder="请输入邮箱"
                  ></el-input>
                </el-form-item>
                <el-form-item label="昵称" prop="nickname">
                  <el-input
                    v-model="ruleForm.nickname"
                    placeholder="请输入昵称"
                  ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    placeholder="请再次确认密码"
                  ></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                  <el-input
                    placeholder="验证码"
                    class="code"
                    autocomplete="off"
                    v-model="ruleForm.code"
                    >111</el-input
                  >
                  <el-button
                    class="getcode"
                    type="danger"
                    :disabled="times != TIMER_TIME"
                    @click.native="sendCode"
                    >{{ codeText }}</el-button
                  >
                </el-form-item>

                <el-form-item>
                  <el-button
                    class="registerBtn"
                    type="danger"
                    @click="submitForm('ruleForm')"
                    >注册</el-button
                  >
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const Cookie = require("js-cookie");
import decode from "jwt-decode";
export default {
  name: "Login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        nickname: "",
        pass: "",
        checkPass: "",
        code: "",
      },
      // 登录的表单
      lgForm: {
        loginusername: "3212990982@qq.com",
        loginpass: "pangzy1013",
      },
      // 登录表单的input校验
      loginrules: {
        loginusername: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        loginpass: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
      },
      //  注册表单的input校验
      rules: {
        username: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        nickname: [
          { required: true, message: "请输入您的名称", trigger: "blur" },
          { min: 3, max: 7, message: "昵称长度在 3 到 7 个字符", trigger: "blur" },
        ],
        pass: [
          { required: true, validator: validatePass, trigger: "blur" },
          {min: 6, max: 12, message: "密码长度在 6 到 12位之间哦", trigger: "blur"}
          ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
          {min: 6, max: 12, message: "密码长度在 6 到 12位之间哦", trigger: "blur"}
        ],
        code:[
          {required:true,message:"请输入验证码", trigger: "blur"}
        ]
      },

      // tab默认选中
      activeName: "login",

      //验证码时间
      TIMER_TIME: 60,

      times: null,

      timer: null,
    };
  },
  mounted() {
    this.times = this.TIMER_TIME;
  },
  computed: {
    codeText() {
      return this.times == this.TIMER_TIME
        ? "获取验证码"
        : `${this.times == null ? "获取验证码" : this.times + "s后重试"}`;
    },
  },
  methods: {
//  提交注册表单 
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
              let { username,nickname,code } = this.ruleForm
              let password = this.ruleForm.pass
              this.$request.register(
                  username,
                  nickname,
                  password,
                  code
              ).then((res)=>{
                if(res.data.code == '200'){
                      this.$notify.success({
                        title: 'Ye',
                        message: '恭喜您，注册成功',
                        showClose: true
                      });
                      this.ruleForm.username = '';
                      this.ruleForm.nickname = '';
                      this.ruleForm.pass = '';
                      this.ruleForm.checkPass = '';
                      this.ruleForm.code = '';
                      this.times != this.TIMER_TIME;

                      setTimeout(() => {
                        this.activeName = "login"
                      }, 2000);
                      
                }else if(res.data.code == '400'){
                      this.$notify.error({
                        title: 'error',
                        message: '验证码错误了',
                        showClose: true
                      });
                }
              })       
        } else {
                this.$notify.info({
                    title: '提示',
                    message: '先填写完再点击注册',
                    showClose: true
                });
          return false;
        }
      });
    },
// 登录提交表单    
   async signInForm() {
        let lgForm  = this.lgForm;
        if(lgForm.loginusername == "") {
            this.$message({
              message: '输入邮箱',
              type: 'warning'
            });
        }else if(lgForm.loginpass == ""){
            this.$message({
              message: '请输入密码',
              type: 'warning'
            });
        }
        let username = lgForm.loginusername;
        let password = lgForm.loginpass;
        await this.$request.login(username,password).then(res=>{
              let that = this
              switch(res.data.msg){
                  case "密码不正确":
                        this.$notify.error({
                            title: 'error',
                            message: '账号或密码错误！!',
                            showClose: true
                        });
                  break;
                  case "登录成功":
                      let token = res.data.data
                      Cookie.set("auth",token)
                      // Cookie.set("Authorization",res.data.data)
                      localStorage.setItem("islogin",true)

                      this.$notify.success({
                          title: 'success',
                          message: '登录成功',
                          showClose: true
                      });
                      this.$router.push({name:'home'})
                      localStorage.setItem("islogin",true)
                      
                  break;
                  case "该用户不存在":
                      localStorage.setItem("islogin",true)
                      this.$notify.warning({
                          title: '',
                          message: '该用户不存在请前去注册',
                          showClose: false
                      });
                  break;
              }
        })
    },
//开启计时发送验证码
    async sendCode() {
      let email = this.ruleForm.username;
      if(email == ""){
          this.$message({
              message: '邮箱不能为空哦~',
              type: 'warning'
          });
      }else{
          //  注册发送邮箱验证码
          await this.$request.sendCode(email).then(res=>{
              if(res.data.msg == "该用户已注册"){
                      this.$notify.error({
                        title: '',
                        message: '该用户已注册',
                        showClose: false
                      });
              }
              if(res.data.code == '200'){
                  this.startTimer();
              }
          })
      }
    },
// 验证码定时器
    async startTimer() {
        this.$notify.success({
          title: '',
          message: '验证码已发送邮箱，请注意查看！',
          showClose: false
        });
        if (this.times !== this.TIMER_TIME) {
          return;
        }
        const that = this;
        this.timer = setTimeout(function temp() {
          that.timer = setTimeout(temp, 1000);
          if (that.times <= 0) {
            clearTimeout(that.timer);
            that.times = that.TIMER_TIME;
          } else {
            that.times--;
          }
        }, 0);
    },
  },
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 827px) and (max-width: 920px) {
  .login {
    width: 800px !important;
  }
  .code {
    width: 110px !important;
  }
  .getcode {
    width: 100px !important;
  }
}
@media screen and (min-width: 723px) and (max-width: 826px) {
  .login {
    width: 700px !important;
  }
  .code {
    width: 100px !important;
  }
  .getcode {
    width: 100px !important;

  }
  .input {
    width: 250px !important;
  }
}
@media screen and (min-width: 731px) and (max-width: 768px) {
    .login {
    width: 600px !important;
  }
  .show_info{
    width: 300px;
  }
  .registerForm{
    padding: 0px 20px !important;
  }
}
@media screen and (min-width: 630px) and (max-width: 731px) {
    .login {
    width: 500px !important;
  }
  .show_info{
    display: none  !important;
  }

}
@media screen and (min-width: 10px) and (max-width: 630px) {
  .login {
    width: 350px !important;
    padding: 0 !important;
  }
  .show_info {
    display: none;
  }
  .input {
    width: 250px !important;
  }

  .login_btn {
    width: 250px !important;
  }

  .code {
    width: 100px !important;
  }
  .getcode {
    width: 100px !important;
  }
  .registerForm {
    padding: 0px !important;
  }
}

.input {
  width: 300px;
}

.loginBtn {
  margin-top: 30px;
  width: 100%;
}

.registerBtn {
  width: 100%;
}

.login_box {
  min-height: 500px;
  background-image: url("http://p0.qhimg.com/bdm/1024_768_85/t0136b65d6e9666bbef.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 750px;
  .login {
    height: 500px;
    width: 900px;
    position: absolute;
    display: flex;
    flex-direction: row;
    .show_info {
      background: rgba(0, 0, 0, 0.4);
      background-image: url(http://p7.qhimg.com/bdm/1024_768_85/t01dad620ed7885bc47.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      left:0px;
      width:100%;
      z-index:0!important;
      background-position: center center;
      object-fit: cover;
    }
    .login_in {
      background-color: #fff;
      // background:rgba(0, 0, 0, .4);
      .tab {
        margin: 20px;
        height: 350px;

        //登录tab
        .login_form {
          padding: 50px 20px 0px 20px;
        }

        // 注册form表单
        .registerForm {
          font-size: 0.7em !important;
          padding: 0px 30px;

          .code {
            width: 170px;
          }
          .getcode {
            width: 100px;
          }
        }
      }
    }
  }
}

// /deep/.el-input__inner{
//   width: 80%;
// }
/deep/.el-form-item__label {
  font-size: 0.7em;
}
</style>>