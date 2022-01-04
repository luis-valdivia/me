 <script setup>
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="about">
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit
      libero, in ut, voluptates et neque, nostrum ratione voluptas eius odio
      eveniet recusandae. Saepe quisquam sit aperiam minus quam enim!
    </p>
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