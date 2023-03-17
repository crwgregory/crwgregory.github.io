<!-- basic vue 3 component template named "FooterComponent" -->
<template>
  <div id="footer" class="cr-padding uk-panel uk-text-center uk-width-1-2">
    <div id="about" class="uk-panel-title">
      <span class="uk-h1"> Hi there! I'm Chris. </span>
    </div>
    <p class="uk-h2">I design Software & Web Applications.</p>
    <a
      href="https://github.com/crwgregory"
      class="uk-icon-button uk-margin-small-right"
      uk-icon="github"
      target="_blank"
    ></a>
    <a
      href="https://www.linkedin.com/in/crwgregory"
      class="uk-icon-button"
      uk-icon="linkedin"
      target="_blank"
    ></a>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
