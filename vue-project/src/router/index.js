import { createRouter, createWebHistory } from 'vue-router';
import MainPageView from "@/views/MainPageView.vue";
import DetailsPage from "@/views/DetailsPageView.vue";

const index = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainPageView
        },
        {
            path: '/todo-page/:id',
            name: 'TodoPage',
            component: DetailsPage,
            props: true,
        }
    ]
})

export default index;