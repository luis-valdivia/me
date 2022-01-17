<template>
  <div>
    <h1>Projects</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else class="project">
      <div v-for="project in projects" :key="project.id">
        <h2>{{ project.attributes.name }}</h2>
        <p>{{ project.attributes.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// I'm not paying for storage at the moment so I don't need axios
// import axios from "axios";

export default {
  data() {
    return {
      // I copied this from the JSON file created on http://localhost:1337/api/projects
      projects: [
        {
          id: 1,
          attributes: {
            name: "Land Use Research",
            description:
              "Here is where I'll talk about my land use research experience using Xpress and ArcGIS.",
            createdAt: "2022-01-15T01:57:32.301Z",
            updatedAt: "2022-01-15T02:09:24.335Z",
            publishedAt: "2022-01-15T02:09:24.333Z",
          },
        },
        {
          id: 2,
          attributes: {
            name: "Koinos Group",
            description:
              "Here I'll talk about my work with Koinos Group. Tasks were split up on Github and I focused on the Mission and Core components, where I played with scroll-trigger animations.",
            createdAt: "2022-01-15T01:59:27.110Z",
            updatedAt: "2022-01-15T03:22:56.553Z",
            publishedAt: "2022-01-15T02:09:19.927Z",
          },
        },
        {
          id: 3,
          attributes: {
            name: "Personal Website",
            description:
              "Here I'll talk about my personal website and how I figured out how to use strapi and axios.",
            createdAt: "2022-01-16T00:57:23.582Z",
            updatedAt: "2022-01-16T00:57:28.646Z",
            publishedAt: "2022-01-16T00:57:24.660Z",
          },
        },
      ],

      error: null,
    };
  },
  // async mounted() {
  //   try {
  //     const response = await axios.get("http://localhost:1337/api/projects");
  //     this.projects = response.data;
  //   } catch (error) {
  //     this.error = error;
  //   }
  // },
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