import oneEntreprise from "../components/entreprise/oneEntreprise";

const OneEntreprise = () =>import('../components/entreprise/oneEntreprise.vue');

export default [
    {
        path: '/entrepriseDetails/:id?',
        component: OneEntreprise,
        name: 'OneEntreprise',
    }
]
