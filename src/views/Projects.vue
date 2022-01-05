<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <NavBar />
    <div class="container">
      <h1>Projects</h1>
      <p>
        Work in Progress... come back later! PS. work with Koinos site will be
        up after mainnet so timeline for that is indeterminate.
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
.container {
  height: calc(100vh - 71px - 109px);
}
p {
  margin: 0 auto;
  width: 50vw;
}
h1 {
  margin: 0 auto;
  width: fit-content;
}
</style>