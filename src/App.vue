<template>
  <div class="app flex flex-column">
    <Navigation />
    <div class="app-content flex flex-column">
      <transition name="product">
      <ProductModal v-if="productModal" />
      </transition>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import ProductModal from './components/ProductModal.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Navigation,
    ProductModal
},
created() {
  this.GET_PRODUCTS();
},
methods: {
  ...mapActions(["GET_PRODUCTS"]),
},
computed: {
  ...mapState(["productModal"]),
}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.app {
  background-color: #232020;
  min-height: 100vh;
  @media (min-width: 900px) {
    flex-direction: row !important;
  }
  .app-content {
    padding: 0 20px;
    flex: 1;
    position: relative;
  }
}

// animated transition

.product-enter-active,
.product-leave-active {
  transition: 0.8s ease all;
}

.product-enter-from,
.product-leave-to {
  transform: translateX(-900px);
}

button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
}

/* positioning */
.flex {
  display: flex;
}
.flex-end {
  justify-content: flex-end;
}

.flex-column {
  flex-direction: column;
}
.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;
  @media (min-width: 900px) {
    padding-top: 72px;
  }
}

/* colors */
.red {
  color: #F72C25;
}
.black {
  color: #232020;
}

.dark-gray {
color: #333733;
}

.gray {
color: #AAA;
}

.light-gray{
color: #DFE0E2;
}

.bg-red {
  background-color: #F72C25;
}

.bg-gray {
  background-color: #AAA;
}
</style>
