import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import EmployeeDashboard from "../pages/EmployeeDashboard.vue";
import EmployerDashboard from "../pages/EmployerDashboard.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/employee", component: EmployeeDashboard },
  { path: "/employer", component: EmployerDashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;