import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/task/:id",
    name: "task",
    component: () =>
      import(/* webpackChunkName: "taskCard" */ "../views/TaskCard.vue")
  },
  {
    path: "/new",
    name: "new",
    component: () =>
      import(/* webpackChunkName: "new" */ "../views/NewTaskCard.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
