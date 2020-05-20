<template>
  <div class="about">
    <div class="image" :style="{backgroundImage: `url(${this.image})`}"></div>
    <div class="right">
      <h1 class="title">{{this.title}}</h1>
      <p class="text" v-html="this.text"></p>
      <a :href="this.resume" target="_blank">
        <button class="resume">Résumé</button>
      </a>
      <Contact />
      <Socials />
    </div>
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";
import Socials from "@/components/Socials.vue";

export default {
  name: "about",
  components: {
    Contact,
    Socials
  },
  data() {
    return {
      title: "Spectacular science and awesometacular web development.",
      image: "./images/me.jpeg",
      text:
        `By day a molecular biologist, by night a web developer.
        <br/><br/>
        I love learning new things. Be it for science while establishing a new protocol or while learning about the new JS framework that gets released every other week.
        <br/><br/>
        Feel free to contact me for freelance projects, collaborations, or simply to say Hi using the links below.`,
      resume: "./resume.pdf"
    };
  }
};
</script>
