const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  css: {
    loaderOptions: {
      scss: { additionalData: `@import "@/assets/css/utils/_variables.scss";` },
    },
  },
};
