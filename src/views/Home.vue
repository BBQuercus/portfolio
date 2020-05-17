<template>
  <div class="home">
    <h1>
      Hey there, I’m a
      <router-link to="coding">coding</router-link>&nbsp; molecular
      <router-link to="biology">biologist</router-link>&nbsp; and learning enthusiast.
    </h1>
    <router-link to="about" class="button">
      <button>About Me</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
