<template>
  <div class="box">
    <NewHeader v-if="$nuxt.$route.path=='/'"/>
    <Header v-else/>
    <!-- <div style="height:5px"></div> -->
    <Nuxt class="nuxt" />
    <NewFooter v-if="$nuxt.$route.path=='/'"/>
    <Footer v-else/>
  </div>
</template>


<script scoped>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  data() {
    return {

    };
  },
  mounted(){
  },
  components: {
    Header,
    Footer
  },
}
</script>


<style>
html {
  font-family: PingFang SC;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.nuxt {
  position: relative;
  /* margin-top: 50px; */
  width: 100%;
  height:100%;
  background-color: #f6f6f6;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.space {
  height: 75px;
}
</style>
