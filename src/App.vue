<template>
  <div id="app">
    <Navigation />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "app",
  components: {
    Navigation
  },
  watch: {
    $route(to) {
      const bodyClass = document.querySelector("body").classList;
      if (to.name === "Home") {
        bodyClass.add("home-image");
      } else {
        bodyClass.remove("home-image");
      }
    }
  }
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
