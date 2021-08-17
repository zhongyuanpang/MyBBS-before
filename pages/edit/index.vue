<template>
  <div class="container-fluid edit_box">
    <div class="markBox" style="height: 67px; background: white"></div>
    <div class="container title">
      <input type="text" v-model="ruleForm.title" placeholder="请输入博客标题" />
    </div>
    <!--  编写文章区域  -->
    <div class="container edit_content">
      <no-ssr>
        <mavon-editor
          ref="md"
          placeholder="请输入博客内容"
          style="z-index: 9; border: 1px solid #d9d9d9; height: 100%"
          v-model="ruleForm.content"
          :ishljs="true"
          :shortCut="true"
          codeStyle="atelier-heath-dark"
          :toolbars="toolbars"

        />
        <!--           @imgAdd="$imgAdd"
          @imgDel="$imgDel" -->
      </no-ssr>
    </div>

    <!--   文章信息  -->
    <div class="container edit_info">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="首图地址" prop="firstPicture">
          <el-input v-model="ruleForm.firstPicture"></el-input>
        </el-form-item>
        <el-form-item label="文章分类" prop="types">
          <el-select v-model="ruleForm.types" placeholder="文章分类">
            <!-- <el-option label="区域一" value="java"></el-option> -->
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标签" prop="tag">
          <el-select
            v-model="ruleForm.tag"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请输入本文章标签"
          >
            <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="文章类型" prop="flag">
            <el-radio-group v-model="ruleForm.flag">
              <el-radio label="原创"></el-radio>
              <el-radio label="翻译"></el-radio>
              <el-radio label="转载" @change="reprint"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="发布形式" prop="published">
          <el-radio-group v-model="ruleForm.published">
            <el-radio label="0">隐私</el-radio>
            <el-radio label="1">公开</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文章描述" prop="description">
          <el-input type="textarea" placeholder="描述(用于展示首页上)" v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即发布</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "edit",
  data() {
    return {
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }],
     
      ruleForm: {
        // 首图引用地址
        firstPicture: "",

        // 文章分类
        types: "",

        // 文章类型
        flag: "",

        // 发表形式
        published: "",

        // 博客描述
        description: "",

        // 标签
        tag: [],

          //博客标题
        title: "",

        // 博客内容
        content: "",

        //用户id
        userId:'',
      },
      rules: {
        types: [
          { required: true, message: "请选择文章分类", trigger: "change" },
        ],
        flag: [
           { required: true, message: "请选择选择文章类型", trigger: "change" },
        ],
        published: [
          { required: true, message: "请选择发布形式", trigger: "change" },
        ],
        description: [{ required: true, message: "请填写文章描述", trigger: "blur" }],
      },
     

      // 编辑器toolbar
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
    };
  },
  mounted(){
        this.ruleForm.userId = this.$store.state.userInfo.id
  },
  methods: {
    submitForm(formName) {
      let _this = this
      this.$refs[formName].validate((valid) => {
        let blog = this.ruleForm
        let {title , content , firstPicture , types , tag , flag , published , description} = this.ruleForm
        if(title == "" || title == null){
            this.$message.error('请输入标题');
            return
        }
        if(content == "" || content == null){
          this.$message.error('请输入文章内容');
          return
        }
        if (valid) {
        //  this.$request.published(JSON.parse(blog),userId).then(res=>{
        //     console.log(res.data);
        //   })
              console.log(this.ruleForm);
              return axios.post("http://192.168.8.123:8089/blog/saveBlog",this.ruleForm).then(res=>{
                  if(res.data.code == 200){
                      this.$message({
                        message: '发表成功',
                        type: 'success'
                      });
                  }
                  console.log(res.data);
              })
        } else {
          this.$message.error('请填写文章详细信息');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 上传图片方法
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);
      axios({
        url: "server url",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
        $vm.$img2Url(pos, url);
      });
    },
    reprint(){
      this.$message({
          message: '如若转载请在文章中附上原文链接哦~',
          type: 'warning'
        });
    }
  },
};
</script>
<style lang="less" scoped>
.edit_box {
  padding: 0;

  .title {
    margin-top: 30px;
    background-color: #fff;
    padding: 0;
    border-radius: 7px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    & > input {
      border: none;
      height: 50px;
      width: 100%;
      border-radius: 7px;
      text-indent: 1em;
    }
    & > input:hover {
      font-weight: bolder;
    }
  }
  .edit_content {
    margin-top: 10px;
    background-color: #fff;
    height: 600px;
    padding: 0;
    border-radius: 5px;
  }
  .edit_info {
    background-color: #fff;
    margin-top: 30px;
    padding: 10px 10px 10px 0px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
  }
}
</style>