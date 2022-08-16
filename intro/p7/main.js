"use strict";

const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Sock",
      image: "./assets/images/socks_green.jpg",
      vueMastery: "https://vuemastery.com",
      inStock: true,
      inventory: 19,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2345, color: "Green", image: "./assets/images/socks_green.jpg" },
        { id: 3235, color: "Blue", image: "./assets/images/socks_blue.jpg" },
      ],
      sizes: [
        { id: 1111, size: "Small" },
        { id: 1112, size: "Medium" },
        { id: 1113, size: "Large" },
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage
    }
  }
});