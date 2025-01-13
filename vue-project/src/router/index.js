import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/views/MainPageView.vue";
import DetailsPage from "@/views/DetailsPageView.vue";
import CreatePage from "@/views/CreatePageView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: MainPage
        },
        {
            path: '/todo-page/:id',
            name: 'TodoPage',
            component: DetailsPage,
            props: true,
        },
        {
            path: '/create-page',
            name: 'TodoCreate',
            component: CreatePage,
        },
    ]
})

export default router;