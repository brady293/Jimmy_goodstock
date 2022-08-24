<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CarouselBanner />
  </div>
</template>

<script>
// @ is an alias to /src
//組件位置
// import HelloWorld from "@/components/home.vue";
import CarouselBanner from "@/components/CarouselBanner.vue";
//定義組件
export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    CarouselBanner,
  },
};
</script>
