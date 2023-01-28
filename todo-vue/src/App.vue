<template>
  <HomeComponent />
</template>

<script>
import HomeComponent from "./components/Home.vue";
import "./assets/scss/default.scss";

export default {
  name: "App",
  components: {
    HomeComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
