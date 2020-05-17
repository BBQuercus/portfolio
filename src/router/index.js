import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Biology from "../views/Biology.vue";
import Coding from "../views/Coding.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

// Don't forget adding routes in Navigation.vue
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/biology",
    name: "Biology",
    component: Biology
  },
  {
    path: "/coding",
    name: "Coding",
    component: Coding
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
