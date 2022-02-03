import entreprise from "../components/entreprise/Entreprise";

const Fiche = () =>import('../components/fiche/Fiche.vue');

export default [
    {
        path: '/Fiche',
        component: Fiche,
        name: 'Fiche',
    }
]
