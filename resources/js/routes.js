import Vue from 'vue';
import VueRouter from "vue-router";
import example from "./routes/ExampleComponent";
Vue.use(VueRouter);
export default new VueRouter(
    {
        mode:'history',
        scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
        routes: [...example],
    }
)
