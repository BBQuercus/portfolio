<template>
  <div id="coding">
    <Post
      type="Coding"
      title="Apnea"
      image="./images/apnea.png"
      github="https://github.com/BBQuercus/appnea"
      website="http://apnea.netlify.com"
      text="Tellus ornare porta lectus proin. Neque nisl quis iaculis suspendisse nunc. Sit donec vivamus volutpat suspendisse mauris nam nunc. Nulla senectus ac odio turpis dictumst morbi nibh. Mattis orci, sed lectus posuere adipiscing vitae ut eu. Duis molestie vulputate tincidunt et diam diam quam rhoncus, pellentesque. Lobortis massa vitae eget lobortis. Magna phasellus quisque massa, tincidunt."
      hashes="#SASS #Custom CSS #Design #Vanilla JS"
    />
    <Post
      type="Coding"
      title="Fluffy"
      image="./images/fluffy.png"
      github="http://github.com/BBQuercus/fluffy"
      website="http://hub.docker.com/r/bbquercus/fluffy"
      text="Tellus ornare porta lectus proin. Neque nisl quis iaculis suspendisse nunc. Sit donec vivamus volutpat suspendisse mauris nam nunc. Nulla senectus ac odio turpis dictumst morbi nibh. Mattis orci, sed lectus posuere adipiscing vitae ut eu. Duis molestie vulputate tincidunt et diam diam quam rhoncus, pellentesque. Lobortis massa vitae eget lobortis. Magna phasellus quisque massa, tincidunt."
      hashes="#Deep learning #Flask #Bootstrap #jQuery"
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