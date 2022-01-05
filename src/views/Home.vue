<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <NavBar class="NavBar" />
    <div class="container">
      <h1>Luis E Valdivia</h1>
      <p>
        Hi, I'm a front-end developer, open to learning new technologies and
        embarking on new opportunities.
      </p>
      <img src="../assets/png/me.png" alt="Me" />
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
  margin: 1em auto;
  width: 50vw;
}
h1 {
  margin: 0 auto;
  width: fit-content;
}
img {
  display: block;
  height: 50vh;
  margin: 0 auto;
}
</style>