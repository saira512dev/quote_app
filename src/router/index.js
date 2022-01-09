import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProgrammingQuotes from "../views/ProgrammingQuotes.vue";
import LifeQuotes from "../views/LifeQuotes.vue";
import Search from "../views/Search.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props:true
  },
  {
    path: "/ProgrammingQuotes",
    name: "ProgrammingQuotes",
    component: ProgrammingQuotes,
  },
  {
    path: "/LifeQuotes",
    name: "LifeQuotes",
    component: LifeQuotes,
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
