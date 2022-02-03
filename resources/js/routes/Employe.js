import entreprise from "../components/entreprise/Entreprise";

const Employe = () =>import('../components/employe/Employe.vue');

export default [
    {
        path: '/Employe',
        component: Employe,
        name: 'Employe',
    }
]
