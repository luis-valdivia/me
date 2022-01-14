<template>
  <div>
    <h1>About Me</h1>
    <p>
      Hey! So if you're here, you might want to know a bit more about my
      personal life. I was born in Lima, Peru. In 2008, my family moved to
      California for better opportunities, where I did most of my schooling.
      During high school I attended UCLA Math Circle and a diversity-oriented
      math club with an emphasis on Python programming, which led to my first
      personal laptop. A year later I learned the fundamentals of programming
      with Java, so by the time I entered UCSB for my undergrad, I was ready to
      further my knowledge with C/C++.
    </p>
    <p>
      I majored in math so I focused heavily on the theoritcal side of things
      but that did not mean I did not find myself coding quite a bit. The
      research side that interested me required me to work with data and
      relevant tools, along with scripting simulations to analyze patterns and
      understand common algorithms. Upon graduation I began my first internship
      at Koinos Group, a blockchain company, where I picked up Vue and
      experienced the front-end developement process. And now we are here.
    </p>
  </div>
</template>

<style scoped>
p {
  margin: 1.5em auto;
  width: 70vw;
}
p::first-letter {
  font-size: 2rem;
}
h1 {
  margin: 0 auto;
  width: fit-content;
}

@media only screen and (max-width: 330px) {
  p {
    width: 80vw;
    font-size: 0.75em;
  }
}
</style>