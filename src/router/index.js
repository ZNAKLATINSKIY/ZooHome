import { createRouter, createWebHistory } from "vue-router";

import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import AddAnimal from "../views/AddAnimal.vue";
import BookShelter from "../views/BookShelter.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/add-animal", component: AddAnimal },
  { path: "/book", component: BookShelter },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;