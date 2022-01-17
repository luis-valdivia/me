<template>
  <div>
    <h1>Projects</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else class="project">
      <div v-for="project in projects.data" :key="project.id">
        <h2>{{ project.attributes.name }}</h2>
        <p>{{ project.attributes.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:1337/api/projects");
      this.projects = response.data;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style scoped>
p {
  margin: 1.5em auto;
  width: 70vw;
}
h1 {
  margin: 0 auto;
  width: fit-content;
}
.project {
  margin: 1.5em auto;
  width: 70vw;
}

@media only screen and (max-width: 330px) {
  p {
    width: 80vw;
    font-size: 0.75em;
  }
}
</style>