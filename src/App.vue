<script setup>
import Hello from "./components/Hello.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Dots from "./components/Dots.vue";
</script>

<template>
  <Hello id="deleteAfter" />
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
    NavBar,
    Footer,
    Dots,
  },
  mounted() {
    // since smooth scrolling is not widely supported in mobile
    // Hello component will only show up in non-mobile sized screens
    if (window.innerWidth > 1000) {
      window.setTimeout(function () {
        window.scrollTo(0, 0);
      }, 300);
      window.setTimeout(function () {
        window.onscroll = function () {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
          window.onscroll = null;
          window.setTimeout(function () {
            document.getElementById("deleteAfter").style.display = "none";
          }, 600);
        };
      }, 1000);
    } else {
      document.getElementById("deleteAfter").style.display = "none";
    }
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
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.88s ease;
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
</style>