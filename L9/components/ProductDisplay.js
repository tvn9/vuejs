app.component('product-display', {
   props: {
      premium: {
         type: Boolean,
         required: true
      }
   },
   template:
      /* html */
      `<div class="product-display">
         <div class="product-container">
            <div class="product-image">
               <img v-bind:src="image">
            </div>
            <div class="product-info">
               <h1>{{ title }}</h1>
               <p>{{ onSale }}</p>
               <p>Shipping: {{ shipping }}</p>
               <p v-if="inStock">In Stock</p>
               <p v-else>Out of Stock</p>
               <product-details :details="details"></product-details>
               <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                  class="color-circle" :style="{ backgroundColor: variant.color }">
               </div>
               <p><strong>{{pDetails}}</strong></p>
               <p>{{pText}}</p>
               <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock"
                  v-on:click="addToCart">Add to Cart</button>
            </div>
         </div>
      </div>`,
   data() {
      return {
         product: 'Socks',
         brand: 'Vue Mastery',
         premium: true,
         discount: true,
         selectedVariant: 0,
         details: ['50% cotton', '30% wool', '20% polyester'],
         variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
         ],
         pDetails: 'Product Details',
         pText: 'A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf.Some types of shoes or boots are typically worn over socks.In ancient times, socks were made from leather or matted animal hair.In the late 16th century, machine - knit socks were first produced.Until the 1800s, both hand - made and machine - knit socks were manufactured, with the latter technique becoming more common in the 19th century.',

      }
   },
   methods: {
      addToCart() {
         return this.cart += 1
      },
      updateVariant(index) {
         this.selectedVariant = index
      }
   },
   computed: {
      title() {
         return this.brand + ' ' + this.product
      },
      image() {
         return this.variants[this.selectedVariant].image
      },
      inStock() {
         return this.variants[this.selectedVariant].quantity
      },
      onSale() {
         if (this.discount) {
            return 'On Sale Item'
         } else {
            return ''
         }
      },
      shipping() {
         if (this.premium) {
            return 'Free'
         }
         return '$' + 2.99
      }
   }
})
