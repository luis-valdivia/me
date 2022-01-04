 <script setup>
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="projects">
    <h1>Projects</h1>
    <p>Work in Progress...</p>
  </div>
</template>

<script>
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
p {
  margin: 0 auto;
  width: 50vw;
}
h1 {
  margin: 0 auto;
  width: fit-content;
}
</style>