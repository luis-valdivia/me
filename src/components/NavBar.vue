<template>
  <nav>
    <ul class="primary-nav flex">
      <li>
        <router-link to="/">
          <img src="../assets/png/logo.png" alt="Logo" height="25" />
        </router-link>
      </li>
      <div class="primary-nav flex" id="overlay" @click="hideMenu">
        <li>
          <router-link to="/home">
            <span id="home">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/home/about">
            <span id="about">About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/home/projects">
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
        <a class="icon" @click="showMenu">
          <img src="../assets/svg/dropDown.svg" alt="mobile menu" height="25" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
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
  },
};
</script>

<style scoped>
nav {
  background: linear-gradient(to bottom, black, var(--secondary));
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
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--secondary);
    z-index: 2;
  }
  #overlay > li {
    margin: 2em auto;
  }
  #overlay > li span {
    font-size: 4em;
  }
}
</style>