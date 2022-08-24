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
          <svg id="carousel" viewBox="0 0 500 250">
            <!-- 所有輪播照片 -->
            <g class="all-pic">
              <!-- 照片一 -->
              <g class="pic">
                <!-- 第一張 -->
                <defs>
                  <clipPath id="pic1">
                    <path
                      class="st0"
                      d="M595.28,208.02c-41.86-11.24-108.29-25.17-189.9-24.32c-66.36,0.69-100.54,10.71-185.86,19.59
                    C169.95,208.45,95.44,214.03,0,212.75V57.19c95.44,1.29,169.95-4.29,219.52-9.46c85.31-8.89,119.49-18.91,185.86-19.59
                    c81.61-0.84,148.04,13.09,189.9,24.32V208.02z"
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
          <svg id="carousel" viewBox="0 0 595 250">
            <!-- 所有輪播照片 -->
            <g class="all-pic">
              <!-- 照片一 -->
              <g class="pic">
                <!-- 第一張 -->
                <defs>
                  <clipPath id="pic2">
                    <path
                      class="st0"
                      d="M595.28,208.02c-41.86-11.24-108.29-25.17-189.9-24.32c-66.36,0.69-100.54,10.71-185.86,19.59
                    C169.95,208.45,95.44,214.03,0,212.75V57.19c95.44,1.29,169.95-4.29,219.52-9.46c85.31-8.89,119.49-18.91,185.86-19.59
                    c81.61-0.84,148.04,13.09,189.9,24.32V208.02z"
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
