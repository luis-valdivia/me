<template>
  <nav>
    <ul class="primary-nav flex">
      <li>
        <router-link to="/" class="no-line">
          <img
            id="navLogo"
            src="../assets/png/logo.png"
            alt="Logo"
            height="25"
            @click="reloadPage"
            @mouseover="spinLogo"
            @mouseleave="spinLogoBack"
          />
        </router-link>
      </li>
      <div class="primary-nav flex" id="overlay" @click="hideMenu">
        <li>
          <router-link to="/">
            <span id="home">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <span id="about">About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            <span id="projects">Projects</span>
          </router-link>
        </li>
        <li>
          <a href="mailto: luisvr0401@gmail.com">
            <span>Contact</span>
          </a>
        </li>
      </div>
      <li>
        <a class="icon no-line" @click="showMenu">
          <img src="../assets/svg/dropDown.svg" alt="mobile menu" height="25" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { gsap } from "gsap";
export default {
  data() {
    return { on: false };
  },
  methods: {
    showMenu() {
      document.getElementById("overlay").style.display = "flex";
      window.onscroll = function () {
        window.scrollTo(0, 0);
      };
      this.on = true;
    },
    hideMenu() {
      if (this.on == true) {
        document.getElementById("overlay").style.display = "none";
        window.onscroll = null;
        this.on = false;
      }
    },
    spinLogo() {
      gsap.from("#navLogo", {
        rotation: "360",
      });
    },
    spinLogoBack() {
      gsap.from("#navLogo", {
        rotation: "0",
      });
    },
    // reloading the page needs to wait a little for the page
    // to route back to home first
    reloadPage() {
      window.setTimeout(function () {
        location.reload();
        location.reload();
        window.scrollTo(0, 0);
      }, 200);
    },
  },
};
</script>

<style scoped>
nav {
  background: linear-gradient(to bottom, black, var(--secondary) 80%);
  padding: 1.5em 10%;
}
.primary-nav {
  list-style: none;
  justify-content: space-between;
  padding: 0;
}
span {
  font-size: 1rem;
  color: var(--primary);
}
.icon {
  display: none;
}
#overlay {
  justify-content: space-between;
  width: 40vw;
}
@media screen and (max-width: 700px) {
  .icon {
    display: block;
  }
  .primary-nav {
    justify-content: space-between;
  }
  #overlay {
    flex-direction: column;
    position: fixed;
    display: none;
    width: 100vw;
    height: 60vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10vh 0 30vh 0;
    background-color: var(--secondary);
    z-index: 2;
  }
  #overlay > li {
    margin: 2em auto;
  }
  #overlay > li span {
    font-size: 3em;
  }
}
</style>