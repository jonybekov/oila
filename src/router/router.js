import VueRouter from "vue-router";
import HomePage from "../components/Pages/Homepage";

const routes = [
  { path: "/", component: HomePage }
  //   { path: "/news", component: Foo },
  //   { path: "/news/:id", component: Foo },
  //   { path: "/contacts", component: Foo }
];

export const router = new VueRouter({
  routes
});
