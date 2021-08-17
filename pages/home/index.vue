<template>
<section>
 <div class="index_box container-fluid">  
      <div class="markBox" style="height:67px;background:white;"></div>
      <div class="row contentBox">
            <div class="col-md-2 info_L">
                  <!-- 声明 -->
                  <div class="statement">
                        <div class="statement_title">
                             <span></span> <span>声明</span><span> State</span>
                        </div>
                        <div class="statement_content">
                              本站内容皆为原创原创精心编写，未经本人许可，任何人或组织不得转载或用于任何商业用途
                        </div>
                  </div>

                  <!-- 分类 -->
                  <div class="Classification">
                        <div class="Popular-title">
                              <span></span>
                              <span>前沿技术</span>
                              <span>Popular</span>
                        </div>
                        <div class="Popular-list">
                              <div><span  v-html="svg">{{ svg }}</span> </div>
                              <div>Go</div>
                        </div>
                  </div>
            </div>
            <div class="col-md-7 contents">
<!-- ####################################  头部面包屑-->
                  <div class="breadcrumb">
                        <el-breadcrumb separator="/">
                              <el-breadcrumb-item :to="{ path: '/' }">全部</el-breadcrumb-item>
                              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                              <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                              <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
                        </el-breadcrumb>
                  </div>
<!-- ################################## 博客显示列表 -->
                  <div class="blog_list row" v-for="(item,index) in blogList" :key="index">
                        <div class="blog-info col-md-8">
                              <div class="b_title"><nuxt-link :to="{name:'blogInfo'}" style="color: #354a5f;">{{ item.title }}</nuxt-link></div>
                              <div class="b_describe">{{ item.description }}</div>
                              <div class="user_blog_info">
                                    <div><el-avatar size="small" src="https://img2.baidu.com/it/u=1179175485,756963896&fm=26&fmt=auto&gp=0.jpg" ></el-avatar></div>
                                    <div style="padding-left:5px">老庞</div>
                                    <span> <i class="el-icon-time"></i>{{ item.createTime }}</span>
                                    <span> <i class="el-icon-view"></i> 11</span>
                                    <span> <i class="el-icon-collection-tag" style="color:#999999"></i>  java</span>
                              </div>
                        </div>
                        <div class="cover col-md-4">
                              <img class="cover-img" v-if="item.firstPicture" :src="item.firstPicture" width="100%" height="100%" alt="">
                        </div>
                  </div>
                  
                  <!--   分页  -->
                  <div class="paging">
                              <el-pagination
                              background
                              layout="prev, pager, next"
                              :total="100"
                              :pager-count="5"
                              >
                              </el-pagination>
                        <!-- <div class="center con-pagination">
                              <vs-pagination :color="color" v-model="page" :length="20" />
                        </div> -->
                  </div>

            </div>
<!-- ##################################### 右侧博客分类及信息展示 -->
            <div class="col-md-3 types_R">
                        <!-- 点击发布文章按钮 -->
                     <div class="setBlog">
                              <vs-button block size="large"@click="$router.push({ name: 'edit'})">
                                 <i class='el-icon-edit-outline' > 发布文章</i>
                              </vs-button>
                     </div>

                     <!-- 用户总评论、用户数、评论数 -->
                     <div class="blog_info_count">
                              <div>
                                    <div>1</div>
                                    <div>用户数</div>
                              </div>
                              <div>
                                    <div>2</div>
                                    <div>文章</div>
                              </div>   
                              <div>
                                   <div>3</div>
                                    <div>回复</div>
                              </div>
                     </div>


                     <!-- 公告 -->
                     <div class="announcement">
                              <div class="announcement_title">
                                    <span>
                                          <svg class="icon announcement_icon"  aria-hidden="true">
                                                <use xlink:href="#icon-laba"></use>
                                          </svg>
                                          公告
                                    </span>
                              </div>
                              <div class="announcement_content">
                                    欢迎大家
                              </div>
                     </div>

                     <!--  博客文章分类 -->
                     <div class="blog_type">
                              <div class="type_title">
                                    <div>
                                          <i class="iconfont icon-shushuben"></i>&nbsp;
                                          <span>文章分类</span>
                                    </div>
                                    <div>
                                          <span>更多</span>
                                    </div>
                              </div>
                              <div class="type_list">
                                    <div>
                                          <span>文章</span>
                                    </div>
                                    <div>
                                          <i class="el-icon-arrow-right" style="font-weight: bolder"></i>
                                    </div>
                              </div>
                     </div>

                     <!-- 博客推荐专栏 -->
                     <div class="blog-Column">
                           <div class="blog-Column-title">
                              <span></span>
                              <span>专栏</span>
                              <span>Anthology</span>
                           </div>
                           <!-- 博客推荐列表 -->
                           <div class="blog-Column-recommend_list">
                                 <div class="blog-Column-recommend_title">
                                       Go语言基础
                                 </div>
                                 <div class="blog-Column-recommend_desc">
                                       工欲善其事必先利其器，Go语言基础进啊哈哈哈哈哈哈哈哈哈
                                 </div>
                           </div>
                     </div>

                     <!-- 推荐博主 -->
                     <div class="Recommended-author">
                           <div class="Recommended-author_title">
                                 <span></span>
                                 <span>技术大牛🐂</span>
                                 <span>Author</span>
                           </div>
                           <div class="Recommended-author_Author">
                                 <div class="Recommended-author_Author-avatar">
                                       <img src="http://q1.qlogo.cn/g?b=qq&nk=3212990982&s=100" width="100%" height="100%" alt="">
                                 </div>
                                 <div class="Recommended-author_Author-info">
                                       <div>nice</div>
                                       <div>授人以渔</div>
                                 </div>
                           </div>
                     </div>
            </div>
      </div>
 </div>
</section>
</template>

<script>
export default {
   name:'index',
   data(){
         return{
            blogList:[],   
            //分页默认第一页
            page: 1,

            color: 'success',

            svg:'<svg t="1628842468883" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3155" width="25" height="25"><path d="M130.9 381.8c-1.8 0-2.2-0.9-1.3-2.2l9.2-11.8c0.9-1.3 3-2.2 4.8-2.2h155.8c1.7 0 2.2 1.3 1.3 2.6l-7.4 11.3c-0.9 1.3-3.1 2.6-4.4 2.6 0 0.1-158-0.3-158-0.3zM65.1 422c-1.8 0-2.2-0.9-1.3-2.2l9.1-11.8c0.9-1.3 3.1-2.2 4.8-2.2h198.9c1.8 0 2.6 1.3 2.2 2.6l-3.5 10.5c-0.4 1.8-2.2 2.6-3.9 2.6l-206.3 0.5z m105.6 40.1c-1.8 0-2.2-1.3-1.3-2.6l6.1-10.9c0.9-1.3 2.6-2.6 4.4-2.6h87.2c1.8 0 2.6 1.3 2.6 3.1l-0.9 10.5c0 1.8-1.8 3.1-3.1 3.1l-95-0.6zM623.5 374c-27.5 7-46.3 12.2-73.3 19.2-6.6 1.7-7 2.2-12.7-4.4-6.5-7.4-11.3-12.2-20.5-16.6-27.5-13.5-54.1-9.6-79 6.5-29.7 19.2-44.9 47.6-44.5 82.9 0.4 34.9 24.4 63.7 58.9 68.5 29.7 3.9 54.5-6.5 74.2-28.8 3.9-4.8 7.4-10 11.8-16.2h-84.2c-9.1 0-11.3-5.7-8.3-13.1 5.7-13.5 16.1-36.2 22.3-47.6 1.9-4.3 6.2-7 10.9-7h158.8c-0.9 11.8-0.9 23.6-2.6 35.4-4.5 31.1-16.8 60.5-35.8 85.5-31.4 41.4-72.4 67.2-124.3 74.1-42.7 5.7-82.5-2.6-117.3-28.7-32.3-24.5-50.6-56.7-55.4-96.9-5.7-47.6 8.3-90.3 37.1-127.8 31-40.5 72-66.3 122.2-75.5 41-7.4 80.3-2.6 115.6 21.4 23.1 15.3 39.7 36.2 50.6 61.5 2.5 4.1 0.7 6.3-4.5 7.6m144.4 241.2c-39.7-0.9-75.9-12.2-106.5-38.4-25.4-21.4-42.2-51.3-47.1-84.2-7.8-49.3 5.7-92.9 35.4-131.7 31.8-41.9 70.2-63.7 122.2-72.8 44.5-7.8 86.4-3.5 124.3 22.3 34.5 23.5 55.9 55.4 61.5 97.3 7.4 58.9-9.6 106.9-50.2 147.9-28.8 29.2-64.1 47.5-104.7 55.8-11.8 2.1-23.6 2.5-34.9 3.8zM871.7 439c-0.4-5.7-0.4-10-1.3-14.4-7.8-43.2-47.6-67.6-89-58-40.6 9.1-66.8 34.9-76.3 75.9-7.8 34 8.7 68.5 40.1 82.5 24 10.5 48 9.1 71.1-2.6 34.5-18 53.2-45.9 55.4-83.4z" fill="#E9573A" p-id="3156"></path></svg>'
         }
   },
   mounted(){
      this.$request.blogList().then(res=>{
            this.blogList = res.data.data.records
            console.log(this.blogList);
      })
   },
   methods:{

   }
}
</script>

<style lang="less" scoped>
a{
      text-decoration: none;
}
// iconfont彩色图标
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}


.index_box{
   padding: 5px 0px;
   height: 130vh;
   .contentBox{
      margin: 20px;
      height: 600px;

//---------------------------- 左侧内容
      .info_L{
            // 声明
            .statement{
                  background-color: #fff;
                  padding: 0;
                  .statement_title{
                        padding: 10px 15px;
                        &>span:nth-child(1){
                              border: 2px solid #ff0000;
                              background-color: #ff0000;
                              border-top-left-radius: 70px;
                              border-top-right-radius: 70px;
                              border-bottom-left-radius: 70px;
                              border-bottom-right-radius: 70px;
                        }
                        &>span:nth-child(2){
                              margin-left: 10px;
                              font-size: 1.1em;
                              font-weight: bold;
                        }
                        &>span:nth-child(3){
                              font-size: 0.8em;
                              font-weight: bold;
                              color: #dedede;
                        }
                  }
                  .statement_content{
                        padding: 5px 20px 10px 20px;
                        font-size: 0.9em;
                  }
            }

            //分类
            .Classification{
                  margin-top: 1.5em;
                  padding-bottom: 0.3em;
                  background-color: #fff;
                  // box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
                  .Popular-title{
                        border-bottom: 1px dashed #dedede;
                        padding: 15px 15px 10px 15px;
                        &>span:nth-child(1){
                              border: 2px solid #ff0000;
                              background-color: #ff0000;
                              border-top-left-radius: 70px;
                              border-top-right-radius: 70px;
                              border-bottom-left-radius: 70px;
                              border-bottom-right-radius: 70px;
                        }
                        &>span:nth-child(2){
                              margin-left: 10px;
                              font-size: 1.1em;
                              font-weight: bold;
                        }
                        &>span:nth-child(3){
                              font-size: 0.8em;
                              font-weight: bold;
                              color: #dedede;
                        }
                  }
                  .Popular-list{
                        margin: 10px 20px;
                        display: flex;
                        flex-direction: row;;
                        &>div:nth-child(1){
                              padding: 0px 10px;
                        }
                        &>div:nth-child(2){
                              font-size: 0.8em;
                              font-weight: 400;
                              // padding-top: 4px;
                              display: flex;
                              align-items: center;
                        }
                  }
                  .Popular-list:hover{
                        background-color: #ebf7f3;
                        border-radius: 5px;
                  }
            } 
      }
//--------------------- 中间博客列表内容
      .contents{
         padding: 0;

         .breadcrumb{
               background-color: #fff;
               margin: 10px 0px;
               height: 50px;
               display: flex;
               align-items: center;
         }
   // 博客列表
         .blog_list{
               display: flex;
               flex-direction: row;
               background-color: #fff;
               margin: 7px 0px;
               .blog-info{
                  //    flex: 3;
                  .b_title{
                        height: 50px;
                        display: flex;
                        align-items: center;
                        font-weight: bolder;
                        font-size: 1.3em;
                        padding-left: 1em;
                        color: #354a5f;
                  }

                  .b_describe{
                        height: 30px;
                        display: flex;
                        align-items: center;
                        color: #a9a9a9;
                        padding-left: 1.7em;
                        font-size: 0.8em;
                        font-family: "Helvetica";
                        font-weight: 400;
                  }

                  .user_blog_info{
                        height: 60px;
                        padding-left: 1.3em;
                        display: flex;
                        align-items: center;
                        font-size: 0.8em;
                        color: #a9a9a9;
                        font-weight: 500;
                  }

                  .user_blog_info>span{
                        padding-left: 20px;
                  }
               }
               .cover{
                  //    flex: 1.5;
                     padding: 15px;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     .cover-img{
                           height: 120px;
                           width: 230px;
                           background-repeat: no-repeat;
                           background-size: cover;
                     }
               }

         }
         .blog_list:hover{
               box-shadow: 0 0 10px rgba(0,0,0,0.1);
         }
         //分页区域
            .paging{
                  display: flex;
                  justify-content: center;
            }
      }
//--------------------------右侧分类、信息展示style
      .types_R{
      //    border: 1px solid #000;
            .setBlog{
                  display: flex;
                  justify-content: center;
                  align-items: center;
            }
            .blog_info_count{
                  margin-top: 10px;
                  height: 100px;
                  background-color: #fff;
                  border-radius: 10px;
                  display: flex;
                  flex-direction: row;
            }
            .blog_info_count>div{
                  display: flex;
                  flex: 1;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                  font-size: 0.9em;
                  font-weight: bold;
                  font-family:"黑体"
             }

            // 公告
            .announcement{
                  background-color: #fff;
                  height: 130px;
                  margin: 20px 0px;
                  border-radius: 10px;

                        .announcement_title{
                              height: 50px;
                              display: flex;
                              align-items: center;
                              text-indent: 1em;
                              font-size: 1.3em;
                              overflow: hidden;
                              .announcement_icon{
                                    animation: changeBiger .8s infinite  linear;
                              }
                        }
                        .announcement_content{
                              height: 80px;
                              display: flex;
                              align-items: center;
                              text-indent: 1em;
                              justify-content: center;
                        }
            }
            .announcement:hover{
                 box-shadow: 0 0 20px rgba(0,0,0,0.1);
                  transition: .2s;
            }

            //  分类
             .blog_type{
                margin-top: 20px;
                height: 200px;
                background-color: #fff;
                padding: 10px 20px;
                border-radius: 10px;

                  .type_title{
                        height: 50px;
                        display: flex;
                        align-items: center;
                        border-bottom: 1px solid #eeeeee;
                  }
                  .type_title>div:nth-child(1){
                     display: flex;
                     align-items: center;
                     flex: 1;
                     font-size: 1.2em;
                     color:#354a5f;
                     font-weight: bold;
                  }
                  .type_title>div:nth-child(2){
                     display: flex;
                     align-items: center;
                      font-size: 1.1em;
                      color: #a9a9a9;
                  }
                  .type_list{
                     margin-top: 10px;
                     height: 40px;
                     align-items: center;
                     display: flex;
                  }
                  .type_list>div:nth-child(1){
                     display: flex;
                     align-items: center;
                     flex: 1;
                     text-indent: .5em;
                     font-family:"黑体"
                  }
                  .type_list>div:nth-child(2){
                     display: flex;
                     align-items: center;
                     font-size: 1.2em;
                     color: #a9a9a9;
                  }
                  .type_list:hover{
                     background-color:#eff3f5;
                     font-weight: bolder;
                     transition: .2s;
                  }
             }
             
            //  博客专栏
            .blog-Column{
                  margin-top: 30px;
                  background-color: #fff;
                  box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
                  .blog-Column-title{
                        padding: 15px 15px 10px 15px;
                        &>span:nth-child(1){
                              border: 2px solid #00a6f4;
                              background-color: #00a6f4;
                              border-top-left-radius: 70px;
                              border-top-right-radius: 70px;
                              border-bottom-left-radius: 70px;
                              border-bottom-right-radius: 70px;
                        }
                        &>span:nth-child(2){
                              margin-left: 10px;
                              font-size: 1.1em;
                              font-weight: bold;
                        }
                        &>span:nth-child(3){
                              font-size: 0.8em;
                              font-weight: bold;
                              color: #dedede;
                        }
                  }
                  .blog-Column-recommend_list{
                        border-top: 1px dashed #dedede;
                        padding: 10px;
                        .blog-Column-recommend_title{
                              font-size: 0.9em;
                              color: #333333;
                              padding: 2px;
                        }
                        .blog-Column-recommend_desc{
                              font-size: 0.7em;
                              color: #848689;
                        }
                  }
                  .blog-Column-recommend_list:hover{
                        background-color: #e8f0ff;
                  }
            }
            // 推荐博主
            .Recommended-author{
                  margin-top: 20px;
                  background-color: #fff;
                  box-shadow: 0 0 15px rgba(0,0,0,0.1);
                  .Recommended-author_title{
                        padding: 15px 15px 10px 15px;
                        &>span:nth-child(1){
                              border: 2px solid #00a6f4;
                              background-color: #00a6f4;
                              border-top-left-radius: 70px;
                              border-top-right-radius: 70px;
                              border-bottom-left-radius: 70px;
                              border-bottom-right-radius: 70px;
                        }
                        &>span:nth-child(2){
                              margin-left: 10px;
                              font-size: 1.1em;
                              font-weight: bold;
                        }
                        &>span:nth-child(3){
                              font-size: 0.8em;
                              font-weight: bold;
                              color: #dedede;
                        }
                  }
                  .Recommended-author_Author{
                        border-top: 1px solid #dedede;
                        padding: 10px 25px;
                        display: flex;
                        flex-direction: row;
                        .Recommended-author_Author-avatar{
                              &>img{
                                    width: 35px;
                                    height: 35px;
                                    border-radius:10px ;
                              }
                        }
                        .Recommended-author_Author-info{
                              padding-left: 15px;
                              &>div:nth-child(1){
                                    font-size: 1.1em;
                                    color: #333333;
                              }
                              &>div:nth-child(2){
                                    color: #9a9a9a;
                                    font-size: 0.7em;
                                    word-wrap: break-word;
                              }
                        }
                  }
                  .Recommended-author_Author:hover{
                        background-color: #e8f0ff;
                  }
            }
                        
      }
   }

}

// 动画效果
@keyframes changeBiger {
                0% {
                    transform: scale(.9);
                    transition: .1s;
                }
                100% {
                    transform: scale(1.2);
                    transition: .2s;
                }
}

/deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: #363636;
  color: #fff;

}
</style>
