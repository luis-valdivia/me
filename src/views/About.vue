 <script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <NavBar />
    <div class="container">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        impedit libero, in ut, voluptates et neque, nostrum ratione voluptas
        eius odio eveniet recusandae. Saepe quisquam sit aperiam minus quam
        enim!
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