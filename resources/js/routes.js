import Vue from 'vue';
import VueRouter from "vue-router";
import example from "./routes/ExampleComponent";
import Entreprise from "./routes/Entreprise";
import Employe from "./routes/Employe";
import Fiche from "./routes/Fiche";
import Rebrique from "./routes/Rebrique";
import addEmploye from "./routes/addEmploye";
import Dashboard from "./routes/Dashboard";
Vue.use(VueRouter);
export default new VueRouter(
    {
        mode:'history',
        scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
        routes: [
            ...example,...Entreprise,...Employe,...Fiche,...Rebrique,...addEmploye,...Dashboard
            ],
    }
)
