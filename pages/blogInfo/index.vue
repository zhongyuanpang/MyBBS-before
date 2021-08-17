<template>
    <div class="blogInfo_box container-fluid">
            <div class="markBox" style="height:67px;background:white;"></div>
                <div class="container showblog">
                        <div class="row l_r">
                        <div class="col-md-9 blog_info">
                                <div class="blog_content">
                                        <div class="b_title">这是文章的标题</div>
                                        <div class="b_info">
                                                <div>
                                                        <span><i class="el-icon-user-solid"></i> : 庞中原</span>
                                                        <span>2020-20-02</span>
                                                        <span><i class="el-icon-view"></i> : 9999</span>
                                                </div>
                                                <div>
                                                        分类 : <span>jvav</span>
                                                        标签 : <span>jvav</span>
                                                </div>
                                        </div>
                                        <div class="b_content">

        <h4>List style in action</h4>
        <ul>
          <li>If you wish to succeed, you should use persistence as your good friend, experience as your reference, prudence as
            your brother and hope as your sentry.
            <p>如果你希望成功，当以恒心为良友，以经验为参谋，以谨慎为兄弟，以希望为哨兵。</p>
          </li>
          <li>Sometimes one pays most for the things one gets for nothing.
            <p>有时候一个人为不花钱得到的东西付出的代价最高。</p>
          </li>
          <li>Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things
            easily.
            <p>只有有耐心圆满完成简单工作的人，才能够轻而易举的完成困难的事。</p>
          </li>
        </ul>

        <h4>You may want to create a perfect <code>&lt;hr /&gt;</code> line, despite the fact that there will never have one
        </h4>
        <hr/>
        <p><abbr title="法国作家罗切福考尔德">La Racheforcauld</abbr> said:
          <mark>"Few things are impossible in themselves; and it is often for want of will, rather than of means, that man fails
            to succeed".
          </mark>
          You just need to follow the browser's behavior, and set a right <code>margin</code> to it。it will works nice as the
          demo you're watching now. The following code is the best way to render typo in Chinese:
        </p>
        <pre ><code class="language-css">
/* 标题应该更贴紧内容，并与其他块区分，margin 值要相应做优化 */
h1,h2,h3,h4,h5,h6 {
    line-height:1;font-family:Arial,sans-serif;margin:1.4em 0 0.8em;
}
h1{font-size:1.8em;}
h2{font-size:1.6em;}
h3{font-size:1.4em;}
h4{font-size:1.2em;}
h5,h6{font-size:1em;}

/* 现代排版：保证块/段落之间的空白隔行 */
.typo p, .typo pre, .typo ul, .typo ol, .typo dl, .typo form, .typo hr {
    margin:1em 0 0.6em;
}
</code></pre>


                                        </div>
                                </div>
                        </div>
                        <div class="col-md-3 user_info">
                                <div class="user">
                                        <div class="u_avatar">
                                                    <vs-avatar size="100"circle badge writing badge-color="success">
                                                        <img src="https://img2.baidu.com/it/u=1179175485,756963896&fm=26&fmt=auto&gp=0.jpg" alt="">
                                                    </vs-avatar>
                                                    <div>name</div>
                                        </div>
                                        <div class="u_info">
                                                <div>
                                                        <div>文章</div>
                                                        <div>0</div>
                                                </div>
                                                <div>
                                                        <div>粉丝</div>
                                                        <div>0</div>
                                                </div>
                                                <div>
                                                        <div>获赞</div>
                                                        <div>0</div>
                                                </div>
                                        </div>
                                </div>
                                <!-- 目录 -->
                                <div class="centents">
                                    目录
                                </div>
                        </div>

                        
                        </div>

                </div>
    </div>
</template>

<script>
import Prism from '@/assets/lib/prism/prism.js'
export default {
    name:'blogInfo',
    data(){
        return{
            textarea:''
        }
    },
    mounted(){
        //解决prism插件必须刷新才能显示
        // process.browser &&document.querySelectorAll("pre code").forEach(block => Prism.highlightElement(block));
    },
    methods:{

    }

}
</script>

<style lang="less" scoped>
    .blogInfo_box{
        padding: 0;
        //博客展示区域
        .showblog{
            margin-top:20px;
            height: auto;   

            .l_r{
                    .blog_info{padding:0px 0px;
                        .blog_content{background-color: #fff;border-radius: 10px;padding:10px;
                            .b_title{border-bottom: 1px solid rgba(0,0,0,0.1);height: 70px;display: flex;align-items: center;text-indent: 1em;font-size: 1.5em;}
                            .b_info{margin-top: 20px;height: 70px;background-color: #f6f6f6;border-radius:5px;
                                &>div:nth-child(1){height: 30px;display: flex;align-items: center;font-size: 0.9em;color: #999aaa;font-weight: 600;padding-left:20px;
                                    &>span{margin-left: 20px;}    
                                }
                                &>div:nth-child(2){height: 40px;display: flex;align-items: center;font-size: 0.9em;color: #999aaa;font-weight: 600;padding-left:40px;
                                    &>span{height: 30px;width: 60px;margin:0px 10px;background-color: #fff;border-radius: 10px;color:#999999;display: flex;align-items: center;justify-content: center;}
                                }
                            }
                            .b_content{margin: 20px 20px;}
                        }
                        
                    }
                    .user_info{padding: 0;
                        .user{height: 300px;background-color: #fff;margin-left: 10px;border-radius: 10px;
                            .u_avatar{height: 180px;display: flex;flex-direction: column; align-items: center;justify-content: center;font-size: 1.3em;font-weight: bold;}
                            .u_info{height: 100px;display: flex;flex-direction: row;justify-content: space-between;
                                    &>div{flex: 1;align-items: center;display: flex;justify-content: center;flex-direction: column;font-weight: bold;}
                            }
                        }
                        .centents{
                            height: 200px;
                            background-color: #fff;
                            margin-left: 10px;
                            margin-top: 20px;
                        }
                    }
                    
            }
            
        }
        
        .comments_list:hover{
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            background-color: #f8f8f8;
        }
    }
</style>