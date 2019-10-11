import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
// import { router } from "./router/router";
import VueRouter from "vue-router";
import HomePage from "./components/Pages/Homepage";
import NewsList from "./components/Pages/NewsList";
import NewsItem from "./components/Pages/NewsItem";
import Gallery from "./components/Pages/Gallery";
import Contacts from "./components/Pages/Contacts";
import Article from "./components/Pages/Article";

const routes = [
  { path: "/", component: HomePage },
  { path: "/contacts", component: Contacts },
  { path: "/gallery", component: Gallery },
  { path: "/article", component: Article },
  { path: "/news", component: NewsList },
  { path: "/news/:id", component: NewsItem }
  //   { path: "/contacts", component: Foo }
];

export const router = new VueRouter({
  routes
});
///CSSSSSS/////////////////////
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
