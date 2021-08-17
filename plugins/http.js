const Cookie = require("js-cookie");
export default function({ store, redirect, req, router, app: { $axios } }) {
//   $axios.defaults.baseURL = "http://192.168.1.12:8089";
//   $axios.defaults.baseURL = "http://192.168.50.210:8089";
    $axios.defaults.baseURL = "http://192.168.8.123:8089";
    // $axios.defaults.baseURL = "http://192.168.0.109:8089";
    // $axios.defaults.baseURL = "http://192.168.60.1:8089";

    //请求拦截 
  $axios.interceptors.request.use(
    config => {
    //   console.log(config,"config===============");
      let token = Cookie.get("auth");
      if (token) {
        console.log("携带token");
        config.headers['Authorization'] = token;
      }
      return config
    }
  );

  /**响应拦截器 */
  $axios.interceptors.response.use(
      response => {
        //   let res = response.data;
        //   console.log("==========");
        //   console.log(res);
        //   console.log("==========");
          return response
      },
      error => {
          console.log(error,"error===================");
          if (error && error.response) {
              console.log(error.response.status);
              switch (error.response.status) {
                  case 400:
                      error.message = '请求错误'
                      break
                  case 401:
                      error.message = '未授权，请登录'
                      break
                  case 403:
                      error.message = '拒绝访问'
                      break
                  case 404:
                      error.message = `请求地址出错: ${error.response.config.url}`
                      break
                  case 408:
                      error.message = '请求超时'
                      break
                  case 500:
                      error.message = '服务器内部错误'
                      break
                  case 501:
                      error.message = '服务未实现'
                      break
                  case 502:
                      error.message = '网关错误'
                      break
                  case 503:
                      error.message = '服务不可用'
                      break
                  case 504:
                      error.message = '网关超时'
                      break
                  case 505:
                      error.message = 'HTTP版本不受支持'
                      break
                  default:
                      break
              }
          }
          return Promise.reject(error)
      }
  )
}