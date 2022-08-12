<template>
  <div class="app flex flex-column">
    <Navigation />
    <div class="app-content flex flex-column">
      <Home />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Home from './views/Home.vue';
export default {
  name: 'App',
  components: {
    Navigation,
    Home
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
</style>
