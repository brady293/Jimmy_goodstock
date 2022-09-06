<template>
  <nav-bar>
    <div class="navbar bg-light">
      <!-- <router-link to="/">居米股市交易筆記</router-link> -->
      <!-- <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'example' }">example</router-link> -->
      <div class="container-fluid">
        <a class="navbar-brand" href="">
          <img
            src="@/assets/dog.png"
            alt="首頁"
            width="20%"
            class="d-inline-block align-text-top"
          />
          <h2>居米股市交易筆記</h2>
        </a>
        <!-- 漢堡 -->
        <div class="ham">
          <button
            class="hampic"
            :class="{ active: toggleTopMenu }"
            @click="showTopMenu = !showTopMenu"
          >
            <i class="fa-solid fa-coins"></i>
          </button>
          <transition name="money">
            <nav v-show="showTopMenu">
              <div class="menu_wrapper">
                <ul class="slidemenu_list">
                  <li class="slidemenu_item">關於我們</li>
                  <li class="slidemenu_item">每日一爆</li>
                  <li class="slidemenu_item">精選文章</li>
                  <li class="slidemenu_item">每日一篇</li>
                </ul>
              </div>
            </nav>
          </transition>
        </div>
      </div>
    </div>
    <router-view />
  </nav-bar>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      showTopMenu: false,
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/css/app.scss";
</style>
