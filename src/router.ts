import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/my/edit",
      name: "myEdit",
      component: () => import("./views/my/Edit.vue")
    },
    {
      path: "/my/",
      name: "myDetail",
      component: () => import("./views/my/Detail.vue")
    },
    {
      path: "/resrouces/",
      name: "resourceSearch",
      component: () => import("./views/resource/Search.vue")
    },
    {
      path: "/resrouces/:id/contact",
      name: "resourceContact",
      props: true,
      component: () => import("./views/resource/Contact.vue")
    },
    {
      path: "/resrouces/:id",
      name: "resourceDetail",
      props: true,
      component: () => import("./views/resource/Detail.vue")
    }
  ]
});
