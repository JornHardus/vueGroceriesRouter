import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files
import Overview from "/src/pages/groceries/Overview.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [{ path: "/", component: Overview }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
