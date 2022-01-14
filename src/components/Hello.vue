<template>
  <div id="helloDiv">
    <transition appear @enter="enter">
      <span class="flex">
        <!-- makes me wish I had GSAP membership-->
        <h1 id="a">H</h1>
        <h1 id="b">e</h1>
        <h1 id="c">l</h1>
        <h1 id="d">l</h1>
        <h1 id="e">o</h1>
      </span>
    </transition>
    <p v-show="showImage">Swipe all the way down!</p>
    <img
      v-show="showImage"
      src="../assets/svg/blinkingScroll.svg"
      alt="Scroll Down"
      class="ScrollDown"
      height="50"
      @click="scroll"
    />
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      showImage: false,
    };
  },

  setup() {
    const enter = () => {
      // Hello animation
      gsap.from("#a", {
        y: -100,
        opacity: 0,
        duration: 0.4,
        ease: "bounce.out",
      });
      gsap.from("#b", {
        y: -100,
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        ease: "bounce.out",
      });
      gsap.from("#c", {
        y: -100,
        opacity: 0,
        duration: 0.4,
        delay: 0.4,
        ease: "bounce.out",
      });
      gsap.from("#d", {
        y: -100,
        opacity: 0,
        duration: 0.4,
        delay: 0.6,
        ease: "bounce.out",
      });
      gsap.from("#e", {
        y: -100,
        opacity: 0,
        duration: 0.4,
        delay: 0.8,
        ease: "bounce.out",
      });
    };
    return { enter };
  },
  mounted() {
    let vm = this;
    function functionX() {
      vm.showImage = true;
      // document.getElementById("helloDiv").style.minHeight = "calc(100vh + 1px)";
      // window.onscroll = function () {
      //   window.scrollTo({
      //     top: window.innerHeight,
      //     behavior: "smooth",
      //   });
      //   window.onscroll = null;
      // };
    }
    window.setTimeout(functionX, 1400);
  },
};
</script>

<style scoped>
div {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
span {
  margin-bottom: 6em;
}
img {
  margin-top: 8em;
  position: absolute;
  right: calc(50vw - 33.33px);
}
h1 {
  font-size: 4em;
}
p {
  position: absolute;
  margin-top: 6em;
  right: calc(50vw - 85px);
}
</style>
