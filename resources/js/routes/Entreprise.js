import entreprise from "../components/entreprise/Entreprise";

const Entreprise = () =>import('../components/entreprise/Entreprise.vue');

export default [
    {
        path: '/Entreprise',
        component: Entreprise,
        name: 'Entreprise',
    }
]
