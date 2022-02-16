
const oneEmploye = () =>import('../components/employe/oneEmploye.vue');

export default [
    {
        path: '/employeDetails/:id?',
        component: oneEmploye,
        name: 'oneEmploye',
    }
]
