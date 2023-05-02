import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files
import Overview from "/src/pages/groceries/Overview.vue";
import Create from "/src/pages/groceries/Create.vue";
import Edit from "/src/pages/groceries/Edit.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    component: Overview,
  },
  {
    path: "/Create",
    component: Create,
  },
  {
    path: "/Edit",
    component: Edit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
