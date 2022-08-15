<template>
  <div class="flex flex-column product-wrap">
  <form class="product-content">
    <h1>New product</h1>
    <label for="description">Description</label>
    <input required type="text" id="description" />
    
    <label for="price">Price</label>
    <input required type="number" id="price" />

    <label for="volume">Volume</label>
    <input type="number" id="volume" />

    <label for="volumeUnit">Volume unit</label>
    <input type="text" id="volumeUnit" />

    <label for="binLocation">Location</label>
    <input type="text" id="binLocation" />

    <div class="flex flex-end">
      <div class="flex">
            <button @click="closeProductModal" class="bg-gray">Cancel</button>
            <button @click="createProduct" class="bg-red">Create product</button>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
 name: 'ProductModal',
 data() {
    return {
    binLocation: null,
    description: null,
    price: 0,
    volume: 0,
    volumeUnit: null
    };
 },
 methods: {
  ...mapMutations(['TOGGLE_PRODUCT']),
  closeProductModal() {
    this.TOGGLE_PRODUCT();
  }
 }
}
</script>

<style lang="scss" scoped>
.product-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (min-width: 900px) {
      left: 90px;
    }
    

    .product-content {
      position: relative;
      padding: 56px;
      max-width: 900px;
      width: 100%;
      display: flex;
      flex-direction: column;
      color: #FFF;
      background-color: #232020;
      box-shadow: 10px 4px 6px -1px rgba(0, 0,0, 0.2), 0 2px 4px -1px rgba(0,0,0,0.06);

      h1 {
        margin-bottom: 48px;
      }

      label {
        margin-bottom: 8px;
        font-size: 18px;
        color: #DFE0E2;
      }

      input {
        margin-bottom: 24px;
        background-color: #333733;
        color: #FFF;
        border-radius: 4px;
        padding: 12px 4px;
        border: none;
        &:focus {
          outline: none;
        }
      }

      button {
        color: #DFE0E2;
        font-weight:bold;
      }
    }
}
</style>