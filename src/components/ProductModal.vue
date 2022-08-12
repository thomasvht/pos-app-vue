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

    <div class="flex">
        <div class="left">
            <button @click="closeProduct">Cancel</button>
        </div>
        <div class="right flex">
            <button @click="createProduct">Create product</button>
        </div>
    </div>
    </form>
  </div>
</template>

<script>
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
 }
}
</script>

<style lang="scss" scoped>
.product-wrap {
    position: fixed;
    color: #FFF;
}
</style>