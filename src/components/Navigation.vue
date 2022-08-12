<template>
  <header class="flex">
    <div class="branding flex">
      <img
        src="../assets/logo.png" 
        alt=""
      >
    </div>
  </header>
  ƒ
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style lang="scss" scoped>
header {
    background-color: #333733;
    flex-direction: row;
    @media (min-width: 900px) {
    min-height: 100%;
    min-width: 90px;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
    }
}
    .branding {
    border-radius: 0 20px 20px 0;
    background-color: #AAA;
    justify-content: center;
    padding: 24px;
    @media (min-width: 900px) {
      width: 100%;
    }
    img {
      width: auto;
      height: 30px;
    }
}
</style>