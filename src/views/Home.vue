<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Products overview</h1>
        <span>There are 2 total products.</span>
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
  </div>
</template>

<script>
export default {
    name: "HomePage",
    components: {},
    methods: {
        newProduct() {},
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