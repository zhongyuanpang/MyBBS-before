export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '花果山',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "boxicons/css/boxicons.min.css",
    '@/assets/css/iconfont.css',
    '@/assets/lib/prism/prism.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/ElementUI',
      ssr: true
    },
    {
      src: '~/plugins/vuesax',
      ssr: true
    },
    {
      src:'@/assets/js/iconfont.js',
      ssr:false
    },
    {
      src: '~/plugins/http.js',
      ssr: false
    },
    {
      src: '~/plugins/api.js',
      ssr: false
    },
    {
      src: '~/store/index.js',
      ssr: false
    },
    '~/plugins//vueMarkdown.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

//   axios: {
//     proxy: true, // 表示开启代理
//     prefix: '/api/channel', // 表示给请求url加个前缀 /api
//     credentials: true // 表示跨域请求时是否需要使用凭证
// },
  
  proxy: {
    '/api': {
      // secure: false, // 如果是https接口，需要配置这个参数
      target: 'http://192.168.50.210:8089', // 目标接口域名
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true // 表示是否跨域
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    vendor: ['axios'] //为防止重复打包
  }
}
