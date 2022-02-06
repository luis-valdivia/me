<template>
  <div>
    <h1>Projects</h1>
    <div class="project">
      <div>
        <h2>Personal Website</h2>
        <p>
          Welcome to my latest project! I started thinking about my own site for
          a while and after some planning, decided it was time to go for it
          around December 2021. Given how clean Vue is to read and write, I went
          it over React. I had not tried Vue until my Koinos internship but once
          I did I immediately realized what all the fuzz was about.
        </p>
      </div>
      <div>
        <h2>Koinos Group</h2>
        <p>
          Koinos Group is my first real experience in a production environment.
          I came in as an intern to work on the frontend and was gradually
          trained with all the tools and guidelines. I started out with some
          generic example with no real world value to get a feel of Vue and
          working in Agile environment.
        </p>
      </div>
      <div class="flex" style="flex-direction: column">
        <h2>Land Use Research</h2>
        <p>
          Unlike most natural phenomena, there is a tendency for people to think
          of wildfires as controllable events that can be eliminated. However,
          this is not the case. They are essential to certain environments and
          the wildlife that inhabits there. Instead, the aim should be to better
          coexist with them, which can be accomplished by alternative
          arrangements of human facilities, such as types of housing, schooling,
          and recreational places. Thus, the problem becomes one of choosing the
          optimal land use for a given area for a specific interval of time. The
          objective is to mitigate risk by preventing burning and decreasing
          spread over designated regions.
        </p>
        <p>
          I could bore readers by delving into the nitty gritty math stuff like
          the one below:
        </p>
        <img src="../assets/png/LUMath.png" alt="" />
        <p>
          But that would not be fun. So I will just give a brief overview
          instead. The equations above are simply rules for what we need to take
          into account, like keeping our budget in check and making sure that at
          any given that we can only use land for a certain purpose(i.e. some
          block of land cannot be a school and an apartment complex at the same
          time).
        </p>
        <p>
          Before going more into that, it would help to lay out the general
          timeline of the project. I started by having a few meetings with a
          geography professor from UCSB, where he and his PhD student debriefed
          me on what they've been working on for a while and how I can
          contribute, along with important papers to dissect to get a grasp on
          the topic. Afterwards, I met more frequently with his PhD student for
          guidance and updates on my progress.
        </p>
        <p>
          At first I struggled with making progress because I was not being
          proactive and shying away from asking questions on missing data and
          confusing topics. With time, I better understood the expectations and
          took steps to understand what data is important and what I should
          filter out. Since the software necessary for highly accurate
          geographical mapping(ArcGIS Pro) was available through a virtual
          machine, I had to connect and use only the resources that are
          preinstalled there. This meant that I used R for processing the data
          from the Hazard Hub database.
        </p>
        <p>
          From there, came the fun part. There was already a possible model that
          mathematically made sense. The problem was writing it as an Xpress
          file so that the computer could run it's linear optimization
          algorithms. A few of the equations were "non-linear", meaning that I
          needed to find some simpler way of expressing them. Throughout the
          months that followed, that was my main task. To do so, I needed to
          sample the data for tests and debug edge cases.
        </p>
        <img src="../assets/png/LUGraph.png" alt="" />
        <img src="../assets/png/LUMap.png" alt="" />
      </div>
    </div>
    <img
      id="scrollUp"
      src="../assets/svg/scrollUp.svg"
      alt=""
      @click="scrollToTop"
    />
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    window.onscroll = function () {
      if (scrollY < 100) {
        gsap.to("#scrollUp", {
          duration: 1.2,
          opacity: 0,
        });
      } else {
        gsap.to("#scrollUp", {
          duration: 1.2,
          opacity: 1,
        });
      }
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      gsap.to("#scrollUp", {
        duration: 1.2,
        opacity: 0,
        delay: 0.1,
      });
    },
  },
};
</script>

<style scoped>
p {
  margin: 1.5em auto;
  width: 70%;
}
h1 {
  margin: 0 auto;
  width: fit-content;
}
.project {
  margin: 1.5em auto;
  width: min(70vw, 1140px);
}
img {
  margin: 1.5em 15%;
}
#scrollUp {
  opacity: 0;
  position: fixed;
  width: 3em;
  inset: auto 3em 4em auto;
  margin: 0;
  background: var(--tertiary);
  border-radius: 50%;
  cursor: pointer;
  transform: rotate(180deg);
}

@media only screen and (max-width: 330px) {
  p {
    width: 80vw;
    font-size: 0.75em;
  }
}
@media only screen and (max-width: 700px) {
  p {
    width: 85vw;
  }
  .project {
    margin: 1.5em auto;
    width: 90vw;
  }
  img {
    margin: 1.5em 0;
  }
}
</style>