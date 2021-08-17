<template>
    <div class="container-fluid me_box ">
        <div class="markBox" style="height:70px;background:white;"></div>
            <div class="me_show_info ">
                <div class="me_show_info_T">
                            <img class="me_background" src="http://p2.qhimg.com/bdm/1024_768_85/t01c794718372e4f003.jpg" width="100%" height="100%" alt="">
                            <div class="me_info ">   
                                    <div class="me container">
                                            <div class="avatar">
                                                    <el-avatar :size="80 " :src="user.avatar" style="border:2px solid #fff"></el-avatar>
                                            </div>
                                            <div class="user_info">
                                                    <div class="me_name">{{ user.nickname }} &nbsp;<i class="el-icon-male" style="color:cyan"></i> <i v-if="false" class="el-icon-female" style="color:pink"></i></div>
                                                    <div class="introduce">introduce</div>
                                            </div>
                                             <div>
                                                111
                                            </div>
                                    </div>
                                   
                            </div>
                </div>
                <div class="me_show_info_B container">
                        <el-tabs :stretch="true" class="tabs" v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="主页" name="home">
                                    <div class="home row">
                                            <div class="home_L col-md-8">
                                                                
                                            </div>
                                            <div class="home_R col-md-4">
                                                        <div class="R_info">
                                                                <div class="R_info_t">

                                                                </div>
                                                                <div class="R_info_c">
                                                                        <div>
                                                                                <div>0</div>
                                                                                <div>文章数</div>
                                                                        </div>
                                                                        <div>
                                                                                <div>0</div>
                                                                                <div>评论数</div>
                                                                        </div>   
                                                                        <div>
                                                                            <div>0</div>
                                                                            <div>日记数</div>
                                                                        </div>
                                                                </div>
                                                                <div class="R_info_b">
                                                                        <h3>账号信息</h3>
                                                                        <p></p>
                                                                        <p>
                                                                            <i class="el-icon-user-solid"></i>
                                                                            <span>昵称: nice </span>
                                                                        </p>
                                                                        <p>
                                                                            <i class="iconfont icon-date"></i>
                                                                            <span>创建时间: 2021-6-23</span>
                                                                        </p>
                                                                        <p></p>
                                                                </div>  
                                                        </div>
                                            </div>
                                    </div>
                            </el-tab-pane>
                            <el-tab-pane label="江湖" name="blog">
                                    <div class="blog">
                                                    <el-tabs class="blog_tabs" lazy="true" type="border-card" tab-position="left" style="height: 500px;">
                                                        <el-tab-pane label="用户管理">文章管理</el-tab-pane>
                                                        <el-tab-pane label="配置管理">管理</el-tab-pane>
                                                    </el-tabs>
                                    </div>
                            </el-tab-pane>
                            <el-tab-pane label="日记" name="diary">
                                        <div class="diary">

                                        </div>
                            </el-tab-pane>
                            <el-tab-pane label="设置" name="set">
                                    <div class="set">
                                            <el-tabs class="set_tabs" lazy="true" type="border-card" tab-position="left" style="height: 500px;">
                                                        <el-tab-pane label="账号设置">账号设置</el-tab-pane>
                                                        <el-tab-pane label="修改资料">修改资料</el-tab-pane>
                                                        <el-tab-pane label="主页设置">主页设置</el-tab-pane>
                                            </el-tabs>
                                    </div>
                            </el-tab-pane>
                        </el-tabs>
                </div>
            </div>
    </div>
</template>

<script>
export default {
        name:'me',
        data(){
            return{ 
                    activeName: 'home',
                    user:{}
            }
        },
        mounted(){  
            if(this.$route.query.activeName != null || this.$route.query.activeName != undefined){
                    this.activeName = this.$route.query.activeName
            }

            if (localStorage.getItem("islogin") == true || localStorage.getItem("islogin") == "true") {
                this.user = this.$store.state.userInfo
            } else {
                console.log("您还未登录");
            }
        },
        methods:{
                handleClick(tab, event) {
                    console.log(tab, event);
                }
        }

}
</script>

<style lang="less" scoped>
.me_box{
    padding: 0;

    .me_show_info{
        padding: 0;
        height: 350px;

        .me_show_info_T{
            height: 300px;
            position: relative;
            .me_background{
                background-size: cover;
                background-repeat: no-repeat;
                position:absolute!important;
                left:0px;
                width:100%;
                z-index:0!important;
                background-size: cover;
                background-position: center center;
                z-index: 15;
                object-fit: cover;
            }
            .me_info{
                height: 100px;
                width: 100%;
                position: absolute;
                bottom: 10px;
                display: flex;
                flex-direction: row;
                    .me{
                        flex: 1;
                        height: 100%;
                        display: flex;
                        flex-direction: row;

                        // 用户头像
                        .avatar{
                            width: 100px;
                            height: 100px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        // 用户信息区域
                        .user_info{
                            flex: 1;
                            width: 250px;
                            display: flex;
                            flex-direction: column;
                            color: white;
                            padding: 5px;
                            // 用户昵称
                            .me_name{
                                height: 100px;
                                display: flex;
                                align-items: center;
                                font-size: 1.3em;
                                font-weight: bold;
                                padding: 10px;
                            }
                            // 个人描述
                            .introduce{
                                height: 100px;
                                display: flex;
                                align-items: center;
                                padding: 10px;
                                font-size: 0.8em;
                            }
                        }
                    }
            }
        }
        // 个人主页下面tab区域
        .me_show_info_B{
            height: 50px;
            background-color: #fff;
            border-radius: 5px;
            padding: 0;
                .tabs{
                    margin-top:5px;
                    padding-top: 10px;

                        // 个人主页资料
                        .home{
                            height: auto;

                                .home_L{
                                    background-color: #fff;
                                    height: 500px;
                                }
                                .home_R{
                                    background-color: #eff3f5;
                                    .R_info{
                                        height: 100%;
                                        
                                            .R_info_t{
                                                height: 90px;
                                                background-color: #fff;
                                            }

                                            .R_info_c{
                                                margin: 20px 0px;
                                                background-color: #fff;
                                                height: 120px;
                                                margin-top: 10px;
                                                border-radius: 10px;
                                                display: flex;
                                                flex-direction: row;
                                            }
                                            .R_info_c>div{
                                                display: flex;
                                                flex: 1;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                flex-direction: column;
                                                font-size: 0.9em;
                                                font-weight: bold;
                                                // font-family:"黑体"
                                            }

                                            .R_info_b{
                                                background-color: #fff;
                                                height: 260px;
                                                padding: 20px;
                                                font-size: 0.9em;
                                                font-weight: bold;
                                            }
                                    }
                                }
                        }
                        //江湖
                        .blog{
                            background-color: #fff;
                            height: 500px;

                            /deep/.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active {
                                color: #000;
                                background: #5b6066;
                            }
                                
                                .blog_tabs{
                                        // background-color: #222222;
                                }
                        }
                        
                        //日记
                        .diary{
                                background-color: #fff;
                                height: 500px;
                        }

                        //设置
                        .set{
                            background-color: #fff;
                            height: 500px;

                            /deep/.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active {
                                color: #000;
                                background: #5b6066;
                            }
                        }
                        
                }
        }
    }
    
}

/deep/.el-tabs{
    z-index: -999;
}

/deep/.el-tabs__item.is-active{
  color: #333333;
}

/deep/.el-tabs__active-bar{
  background: #333333;
}

/deep/.el-tabs__item:hover{
  color:#333333 !important;
  font-weight: bolder;
}
</style>