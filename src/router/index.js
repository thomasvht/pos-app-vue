import HomeVue from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
    path: "/",
    name: "Home",
    component: HomeVue,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;