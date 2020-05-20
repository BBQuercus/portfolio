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
      title: "A very interesting to be determined title.",
      image: "./images/me.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sem nisl, morbi augue aliquet diam. Et in aliquet diam eget tellus at. Ultricies sit nisi at lacus aenean in nisl. Sollicitudin nibh sapien odio eu amet. <br /> Consectetur augue ridiculus risus, dolor enim consequat neque, massa. Mi gravida erat lectus sed integer egestas morbi consectetur suscipit. Sit porta gravida elementum eget. Eu diam facilisis non cursus est.",
      resume: "./resume.pdf"
    };
  }
};
</script>
