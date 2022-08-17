<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Products overview</h1>
        <span>There are {{ productData?.length}} total products.</span>
      </div>
      <div class="right flex">
        <div
          class="button flex"
          @click="newProduct"
        >
          <span>+ add new product</span>
        </div>
      </div>
    </div>
    
    <div v-if="productData.length">
    <Product v-for="(product, index) in productData" :product="product" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Product from '@/components/Product.vue';

export default {
    name: "HomePage",
    components: { Product },
    methods: {
      ...mapMutations(['TOGGLE_PRODUCT']),
        newProduct() {
          this.TOGGLE_PRODUCT();
        },
    },
    computed: {
      ...mapState(['productData']),
    }
};
</script>

<style lang="scss" scoped>
.home {
    color: #DFE0E2; 
    
    .header {
        margin-bottom: 65px;

        .left,
        .right {
           flex: 1;
        }

        .right {
            justify-content: flex-end;
            align-items: center;
        }

        .button {
            cursor: pointer;
            padding: 8px 10px;
            background-color: #F72C25;
            border-radius: 40px;
            color: #DFE0E2;
        }
    }
}
</style>