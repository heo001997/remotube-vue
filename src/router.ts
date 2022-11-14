import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import VideoSubmit from "./views/VideoSubmit.vue";

const routes = [
  {
    path: '/video-submit',
    component: VideoSubmit
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
