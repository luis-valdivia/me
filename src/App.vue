<script setup>
import Hello from "./components/Hello.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Dots from "./components/Dots.vue";
</script>

<template>
  <Hello />
  <NavBar />
  <div class="container">
    <Dots />
    <router-view v-slot="{ Component }">
      <transition name="scale-slide">
        <component :is="Component" class="component" />
      </transition>
    </router-view>
  </div>
  <Footer />
</template>

<script>
export default {
  components: {
    Hello,
    Dots,
    NavBar,
    Footer,
  },
  watch: {
    $route(to, from) {
      if (window.location.pathname == "/" && window.innerWidth > 700) {
        document.getElementById("dotsDiv").style.display = "inline";
      } else if (
        window.location.pathname == "/about" &&
        window.innerWidth > 700
      ) {
        document.getElementById("dotsDiv").style.display = "inline";
      } else if (window.location.pathname == "/projects") {
        document.getElementById("dotsDiv").style.display = "none";
      }
    },
  },
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  min-height: calc(100vh - 71px - 109px);
}
.component {
  width: 100%;
}

/* router transition animations */
@media screen and (min-width: 700px) {
  .scale-slide-enter-active,
  .scale-slide-leave-active {
    position: absolute;
    transition: all 0.65s ease;
  }
  .scale-slide-leave-active {
    opacity: 0;
  }
  .scale-slide-enter-from {
    right: -100%;
  }
  .scale-slide-enter-to {
    right: 0%;
  }
  .scale-slide-leave-from {
    transform: scale(1);
    opacity: 0.4;
  }
  .scale-slide-leave-to {
    transform: scale(0.8);
    opacity: 0;
  }
}
</style>