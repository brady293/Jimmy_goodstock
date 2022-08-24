<template>
  <div class="test">
    <!-- <button @click="addnum">ADD</button> -->
    <input type="text" v-model="text" @keyup.enter="addtext" />

    <!-- <button @click="addtext">Submit</button> -->
    <button @click="addtext" type="button" class="btn btn-primary">
      ssss
      <i class="fa-solid fa-poo"></i>
    </button>

    <div class="container">
      <div class="row">
        <div class="card col" style="width: 18rem">
          <img src="@/assets/logo.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="hyperlink">Go somewhere</a>
          </div>
        </div>
        <div class="card col" style="width: 18rem">
          <img src="@/assets/logo.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card col" style="width: 18rem">
          <img src="@/assets/logo.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card col" style="width: 18rem">
          <img src="@/assets/logo.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <p v-for="(task, index) in todo_list" :key="task">{{ index }}{{ task }}</p>
  </div>
</template>

<script>
export default {
  name: "Test-one",

  data() {
    return {
      todo_list: [],
      text: "",
    };
  },

  mounted() {},

  methods: {
    // addnum() {
    //   this.text += 1;
    // },
    addtext() {
      this.todo_list.push(this.text);
      this.text = "";
    },
  },
};
</script>
