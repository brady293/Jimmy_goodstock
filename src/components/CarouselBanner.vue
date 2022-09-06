<template>
  <div id="app">
    <!-- <transition-group class="carousel" tag="div">
      <div v-for="slide in slides" class="slide" :key="slide.id"> -->
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg id="carousel" viewBox="0 0 390 350">
            <!-- 所有輪播照片 -->
            <g class="all-pic">
              <!-- 照片一 -->
              <g class="pic">
                <!-- 第一張 -->
                <defs>
                  <clipPath id="pic1">
                    <path
                      class="st0"
                      d="M390,319c-78.73-34.9-137.23-32.09-177-22.2c-24.48,6.09-37.03,14.39-65,18.5c-63.94,9.39-116.61-8.02-148-22.2
	l0.5-190.06c31.39,14.18,84.06,31.6,148,22.2c27.97-4.11,40.52-12.42,65-18.5c39.77-9.89,98.27-12.7,177,22.2L390,319z"
                    />
                  </clipPath>
                </defs>
                <image
                  xlink:href="https://picsum.photos/300/300/?random=1"
                  clip-path="url(#pic1)"
                  x="0"
                  y="0"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="carousel-item">
          <svg id="carousel" viewBox="0 0 390 350">
            <!-- 所有輪播照片 -->
            <g class="all-pic">
              <!-- 照片一 -->
              <g class="pic">
                <!-- 第二張 -->
                <defs>
                  <clipPath id="pic2">
                    <path
                      class="st0"
                      d="M390,319c-78.73-34.9-137.23-32.09-177-22.2c-24.48,6.09-37.03,14.39-65,18.5c-63.94,9.39-116.61-8.02-148-22.2
	l0.5-190.06c31.39,14.18,84.06,31.6,148,22.2c27.97-4.11,40.52-12.42,65-18.5c39.77-9.89,98.27-12.7,177,22.2L390,319z"
                    />
                  </clipPath>
                </defs>
                <image
                  xlink:href="https://picsum.photos/300/300/?random=9"
                  clip-path="url(#pic2)"
                  x="0"
                  y="0"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <!-- </div>
    </transition-group> -->
  </div>
</template>
<script>
// export default {
//   name: "CarouselBanner",
//   // data() {
//   //   return {
//   //     slides: [
//   //       {
//   //         href: "https://picsum.photos/300/300/?random=1",
//   //         id: 1,
//   //       },
//   //       {
//   //         href: "https://picsum.photos/300/300/?random=5",
//   //         id: 2,
//   //       },
//   //     ],
//   //   };
//   // },
//   methods: {
//     next() {
//       const first = this.slides.shift();
//       this.slides = this.slides.concat(first);
//     },
//     prev() {
//       const last = this.slides.pop();
//       this.slides = [last].concat(this.slides);
//     },
//   },
// };
</script>
