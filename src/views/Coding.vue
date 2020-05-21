<template>
  <div id="coding">
    <Post
      type="Coding"
      title="Portfolio"
      image="./images/portfolio.jpeg"
      github="https://github.com/BBQuercus/portfolio"
      website="http://bastianeichenberger.ch"
      text="After getting comfortable with the basics front-end web stack in HTML, CSS, and JavaScript, it was time to tackle a larger challenge. Looking through all potential frameworks, I ended up settling on Vue. After understanding what routes are and how to bind data, I quickly started appreciating Vue's simplicity and the ability to reuse code components. I added a few animations here and there to make the website feel more alive, but still have a long way to go."
      hashes="#Vue JS #Custom CSS #UI/UX Design"
    />
    <Post
      type="Coding"
      title="Apnea"
      image="./images/apnea.jpeg"
      github="https://github.com/BBQuercus/appnea"
      website="http://apnea.netlify.com"
      text="I enjoy spending time underwater. Usually though, I carry a supply of fresh air when going SCUBA diving. Nonetheless, it's always a good idea to carry more air in your own lungs. Trying to increase my lung capacity I wasn't able to find a free, easy-to-use timer to practice apnea. To get more familiar with vanilla JS the project seemed ideal. Check it out if you want to join me explore the magical underwater world."
      hashes="#Custom CSS #Vanilla JS #UI Design"
    />
    <Post
      type="Coding"
      title="Fluffy"
      image="./images/fluffy.jpeg"
      github="http://github.com/BBQuercus/fluffy"
      website="http://hub.docker.com/r/bbquercus/fluffy"
      text="Besides setting up a simple <a href='http://minisoberwil.ch' target='_blank'>Wordpress site</a> for my local church, this was my first real project. After developing deep-learning models from biomedical image analysis, I had no idea how to distribute them. After long hours of experimentation, the combination of a basic Docker container and a Flask backend worked out. To get things going quickly I used Bootstrap for styling. Although the code isn't following the standards I set today, it definitely worked well enough and simplified many's image analysis."
      hashes="#Flask #Bootstrap4 #jQuery #Docker"
    />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "coding",
  components: {
    Post
  }
};
</script>

<style>
</style>