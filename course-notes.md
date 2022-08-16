# Intro to Vue 3

## Installation

Follow the Vue doc at vuejs.org

## Creating the Vue App

### Without Build Tools

```js
<!-- Add the cdn link to html page -->
<script src="https://unpkg.com/vue@3"></script>

<!-- web component -->
<div id="app">{{ message }}</div>

<!-- Vue main.js script -->
const { createApp } = Vue; createApp({ data() { return { message: "Hello Vue! }
} }).mount("#app);
```

### Attribute Binding

```js
<a v-bind:href="" target="_blank">An HTML link</a>
<img v-bind:src="image" alt="blue hat" />
```

### Conditional Rendering

```js
<p v-if="isInstock">In Stock</p>
<p v-else>Out of Stock</p>

<p v-if="inventory > 5">In Stock</p>
<p v-else-if="inventory > 0 && inventory <= 10">Almost out of Stock</p>
<p v-else>Out of Stock</p>
```

### Iterating

```js
<span class="color" v-for="color in colors">
  {{ color }}
</span>
```
