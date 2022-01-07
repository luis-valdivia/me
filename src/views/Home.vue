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
        Front-end developer.
        <br />
        Ready to learn new technologies and embark on new opportunities.
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
  min-height: calc(100vh - 71px - 109px);
}
p {
  margin: 1.5em auto;
  width: 70vw;
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

@media only screen and (max-width: 330px) {
  p {
    width: 80vw;
    font-size: 0.75em;
  }
}
</style>