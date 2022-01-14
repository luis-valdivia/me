<template>
  <div>
    <h1>Luis E Valdivia</h1>
    <p>
      Front-end developer.
      <br />
      Ready to learn new technologies and embark on new opportunities.
    </p>
    <img src="../assets/png/me.jpg" alt="Me" />
  </div>
</template>

<style scoped>
p {
  margin: 1.5em auto;
  width: 70vw;
}
p::first-line {
  font-size: 2em;
  font-style: italic;
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
  p::first-line {
    font-size: 1em;
  }
}
</style>