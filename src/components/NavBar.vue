<template>
  <nav>
    <div>
      <ul class="primary-nav flex">
        <li>
          <router-link to="/">
            <img src="../assets/png/logo.png" alt="Logo" height="25" />
          </router-link>
        </li>
        <li>
          <router-link to="/home">
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/home/about">
            <span>About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/home/projects">
            <span>Projects</span>
          </router-link>
        </li>
        <li>
          <a href="mailto: luisvr0401@gmail.com">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background: linear-gradient(to bottom, black, var(--secondary));
  padding: 1.5em 10%;
}
.primary-nav {
  list-style: none;
  justify-content: space-around;
  padding: 0;
}
span {
  font-size: 1rem;
  color: var(--primary);
}
</style>