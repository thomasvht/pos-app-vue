<template>
    <!-- <router-link class="product flex" :to="{ name: 'ProductElement', params: { productId: product.productId } }"> -->
        <div>
            <span>{{ product.description}}</span>
            <span>{{ product.price}}</span>
            <span>{{ product.volume }} {{ product.volumeUnit }}</span>
        </div>
    <!-- </router-link> -->
</template>

<script>

export default {
    name: 'ProductElement',
    props: ["product"],
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
.product {
    text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 28px 32px;
  background-color: #1e2139;
  align-items: center;
  span {
    font-size: 13px;
  }
  .left {
    align-items: center;
    flex-basis: 60%;
    gap: 16px;
    span {
      flex: 1;
    }
    .description {
      text-transform: uppercase;
    }
    .price {

    }
  }
  .right {
    gap: 16px;
    flex-basis: 40%;
    align-items: center;
    .volume {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }
}
</style>
