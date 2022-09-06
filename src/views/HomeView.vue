<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CarouselBanner />
    <AboutJimmy />
    <New_post />
  </div>
</template>

<script>
// @ is an alias to /src
//組件位置
// import HelloWorld from "@/components/home.vue";
import CarouselBanner from "@/components/CarouselBanner.vue";
import AboutJimmy from "@/components/AboutJimmy.vue";
import New_post from "@/components/New_post.vue";
//定義組件
export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    CarouselBanner,
    AboutJimmy,
    New_post,
  },
};
</script>
