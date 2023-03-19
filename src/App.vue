<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HeaderComponent />
  <div class="section">
    <div class="fit uk-flex uk-flex-stretch uk-flex-center">
      <RotatingGeometryComponent msg="Welcome to Your Vue.js App" />
    </div>
    <div class="fit uk-flex uk-flex-center uk-flex-bottom">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import RotatingGeometryComponent from "./components/RotatingGeometryComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    RotatingGeometryComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  height: 100%;
}

path {
  fill: transparent;
  stroke: #000;
  stroke-width: 2px;
}

/* #app {
  margin: 0 25px
} */
#header {
  border-bottom: black 1px solid;
  height: 7vh;
}

.section {
  height: 100vh;
}

.fit {
  padding-bottom: 10px;
}

.cr-padding {
  padding: 20px;
}

.uk-icon svg path {
  stroke-width: 0.9;
  stroke: grey;
}
</style>
