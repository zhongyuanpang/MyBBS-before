//1) 自定义函数
const request = {
    // /**
    //  * 首页切换图片
    //  */
    getBC:()=>{
      return axios.get(`/getBC`,{})
    },

    /**
     * 发送邮箱验证码
     * @param code 验证码
     */
     sendCode:(email)=>{
          return axios.post(`/user/sendCode?email=${email}`,{})
     },

    /**
     *  提交注册表单
     * @param username 注册邮箱
     * @param password 注册密码
     * @param nickname 注册昵称
     * @param code 邮箱验证码
     */
    register:(username,nickname,password,code)=>{
          return axios.post(`/user/register?username=${username}&nickname=${nickname}&password=${password}&code=${code}`,{})
    },

    /**
     *  登录
     * @param username 登录账号
     * @param password 登录密码
     */
    login:(username,password)=>{
          return axios.post(`/user/login?username=${username}&password=${password}`,{})
    },

    /**
     *  登录
     * @param username 登录账号
     * @param password 登录密码
     */
    blogList:()=>{
      return axios.get(`/blog/blogs`,{})
    },
    
    /**
     * 发布博客
     * @param blog 博客表单
     */
    // published:(title , content , firstPicture , types , tag , flag , published , description)=>{
    //   return axios.post(`/blog/saveBlog?title=${title}&content=${content}&firstPicture=${firstPicture}&types=${types}&tag=${tag}&flag=${flag}&published=${published}&description=${description}`,{})
    // },
    published:(blog,userId)=>{
      return axios.post(`/blog/saveBlog?blog=${blog}&userId=${userId}`,{})
    },

    //......
  }
  //2) 定义axios变量等待接收axios,保证axios可用
  var axios = null
  export default ({
    $axios
  }, inject) => {
  
    //3 保存内置的axios
    axios = $axios
  
    //4) 将自定义函数交于nuxt
    inject('request', request)
  }
  