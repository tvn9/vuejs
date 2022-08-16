"use strict";

const app = Vue.createApp({
  data() {
    return {
      product: "Sock",
      image: "./assets/images/socks_green.jpg",
      vueMastery: "https://vuemastery.com",
      inStock: true,
      inventory: 19,
      colors: ["Red", "Green", "Blue"],
    }
  }
});